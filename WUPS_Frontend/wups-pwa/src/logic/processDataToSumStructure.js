function findMinMaxDate(data) {
    let minDate = new Date(8640000000000000) // the maximum date possiple
    let maxDate = new Date(-8640000000000000) // the minimum date possiple
    for (let device of data) {
        for (let measurement of device.measurements) {
            const measurementDate = new Date(measurement.timestamp)
            if (minDate > measurementDate) minDate = measurementDate
            if (maxDate < measurementDate) maxDate = measurementDate
        }
    }
    /**
     * because we are iterating on day to day basis,
     * setting the time to 00:00:00 ensures all days are acounted for.
     * In other words, don't delete the next two lines
     */
    minDate.setHours(0, 0, 0)
    maxDate.setHours(0, 0, 0)
    return [minDate, maxDate]
}

function createTree(data) {
    let processedData = []
    const [minDate, maxDate] = findMinMaxDate(data)
    let date = minDate

    // create the structure
    while (date <= maxDate) {
        for (let device of data) {
            const devicesExists = processedData.some(pd => pd.id === device.deviceId)
            const newDevice = devicesExists ?
                processedData.find(pd => pd.id === device.deviceId) : // if device exists already, use the device
                {
                    id: device.deviceId,
                    description: "device",
                    name: device.deviceId,
                    meterType: device.measurements[0].metadata.meterType,
                    usageSum: 0,
                    subArray: []
                } // ... or create a new one
            if (!devicesExists) processedData.push(newDevice) // only add device to array if it didn't exist already

            const yearExists = newDevice.subArray.some(y => y.id === date.getFullYear())
            const year = yearExists ?
                newDevice.subArray.find(y => y.id === date.getFullYear()) : // same as device above, just year
                {
                    id: date.getFullYear(),
                    parentId: newDevice.id,
                    description: "year",
                    name: date.getFullYear(),
                    usageSum: 0,
                    subArray: []
                } // ... look above
            if (!yearExists) newDevice.subArray.push(year) // ... look above

            const monthExists = year.subArray.some(m => m.id === date.getMonth() + 1)
            const month = monthExists ?
                year.subArray.find(m => m.id === date.getMonth() + 1) :
                {
                    id: date.getMonth() + 1,
                    parentId: year.id,
                    description: "month",
                    name: date.toLocaleString('default', { month: 'long' }),
                    usageSum: 0,
                    subArray: []
                }
            if (!monthExists) year.subArray.push(month)

            const dayExists = month.subArray.some(d => d.id === date.getDate())
            const day = dayExists ?
                month.subArray.find(d => d.id === date.getDate()) :
                {
                    id: date.getDate(),
                    parentId: month.id,
                    description: "day",
                    name: `${date.toLocaleString("default", {weekday: "short"})}. ${date.getDate()}`,
                    usageSum: 0,
                    subArray: []
                }
            if (!dayExists) month.subArray.push(day)


        }
        date.setDate(date.getDate() + 1)
    }

    // add all leafs to the branches of the tree
    for (let device of data) {
        for (let measurement of device.measurements) {
            measurement.description = "measurement"
            measurement.timestamp = new Date(measurement.timestamp)
            measurement.name = measurement.timestamp.toLocaleTimeString("default", {hour: "numeric", minute: "numeric"})
            measurement.parentId = measurement.timestamp.getDate()
            processedData.find(pd => pd.id === device.deviceId)
                .subArray.find(y => y.id === measurement.timestamp.getFullYear())  // year
                .subArray.find(m => m.id === measurement.timestamp.getMonth() + 1) // month
                .subArray.find(d => d.id === measurement.timestamp.getDate())      // day
                .subArray.push(measurement)                                  // measurements
        }
    }

    // calculate the sums for device, year, month and day
    function calculateFromSubArray(arr) {
        const subArrayExists = arr[0]?.subArray ? true : false // it's expected that if one object in the array has a subArray, then all have one.
        let globalSum = 0
        let objects = []
        for (let obj of arr) {
            let localSum = 0
            if (subArrayExists) {
                const objSum = calculateFromSubArray(obj.subArray)
                localSum += objSum
                obj.usageSum = Math.round((localSum + Number.EPSILON) * 1000) / 1000 // rounds to 3 decimals. Number.EPSILON reference https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
            } else {
                localSum += obj.usageSum // this should be a measurement, and we sum the usage.
            }
            globalSum += localSum
            objects.push(obj)
        }

        for(let obj of objects) {
            obj.usageAverage = Math.round((globalSum / objects.length + Number.EPSILON) * 1000) / 1000
        }
        return globalSum
    }

    calculateFromSubArray(processedData)

    return processedData
}

function addUsageToData(data) {
    for (let device of data) {
        let lastMeasurementValue
        for (let measurement of device.measurements) {
            if (!lastMeasurementValue) lastMeasurementValue = measurement.value // The first measuremnt for a device, will always have a usage of 0
            measurement.usageSum = Math.round((measurement.value - lastMeasurementValue + Number.EPSILON) * 1000) / 1000 // rounds to 3 decimals. Number.EPSILON reference https://stackoverflow.com/questions/11832914/how-to-round-to-at-most-2-decimal-places-if-necessary
            lastMeasurementValue = measurement.value
        }
    }
    return data
}

export default function processData(data) {
    const dataWithUsage = addUsageToData(data)
    const processedData = createTree(dataWithUsage)
    return processedData
}