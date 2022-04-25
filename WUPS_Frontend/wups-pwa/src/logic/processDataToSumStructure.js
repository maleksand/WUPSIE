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
    /*
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
            processedData.find(pd => pd.id === device.deviceId) : 
            { id: device.deviceId, sum: 0, years: [] }
            if(!devicesExists) processedData.push(newDevice)
            
            const yearExists = newDevice.years.some(y => y.id === date.getFullYear())
            const year = yearExists ?
                newDevice.years.find(y => y.id === date.getFullYear()) :
                { id: date.getFullYear(), sum: 0, months: [] }
            if(!yearExists) newDevice.years.push(year)
            
            const monthExists = year.months.some(m => m.id === date.getMonth() + 1)
            const month = monthExists ?
                year.months.find(m => m.id === date.getMonth() + 1) :
                { id: date.getMonth() + 1, sum: 0, days: [] }
            if(!monthExists) year.months.push(month)

            const dayExists = month.days.some(d => d.id === date.getDate())
            const day = dayExists ?
                month.days.find(d => d.id === date.getDate()) :
                { id: date.getDate(), sum: 0, measurements: [] }
            if(!dayExists) month.days.push(day)

            
        }
        date.setDate(date.getDate() + 1)
    }

    // add all leafs to the branches of the tree
    for (let device of data) {
        for (let measurement of device.measurements) {
            const measurementDate = new Date(measurement.timestamp)
            processedData.find(pd => pd.id === device.deviceId)
            .years.find(y => y.id === measurementDate.getFullYear())
            .months.find(m => m.id === measurementDate.getMonth() + 1)
            .days.find(d => d.id === measurementDate.getDate())
            .measurements.push(measurement)
        }
    }

    // calculate the sums for device, year, month and day
    for (let device of processedData) {
        for (let year of device.years) {
            for (let month of year.months) {
                for (let day of month.days) {
                    for (let measurement of day.measurements) {
                        day.sum += measurement.usage
                    }
                    month.sum += day.sum
                }
                year.sum += month.sum
            }
            device.sum += year.sum
        }
    }
    return processedData
}

function addUsageToData(data) {
    for (let device of data) {
        let lastMeasurementValue
        for (let measurement of device.measurements) {
            if (!lastMeasurementValue) lastMeasurementValue = measurement.value
            measurement.usage = measurement.value - lastMeasurementValue
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