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
    let processedData = {}
    const [minDate, maxDate] = findMinMaxDate(data)
    let date = minDate
    
    // create the structure
    while (date <= maxDate) {
        for (let device of data) {
            if (!processedData[device.deviceId]) processedData[device.deviceId] = { sum: 0 }
            if (!processedData[device.deviceId][date.getFullYear()]) processedData[device.deviceId][date.getFullYear()] = { sum: 0 }
            if (!processedData[device.deviceId][date.getFullYear()][date.getMonth() + 1]) processedData[device.deviceId][date.getFullYear()][date.getMonth() + 1] = { sum: 0 }

            processedData[device.deviceId][date.getFullYear()][date.getMonth() + 1][date.getDate()] = { sum: 0, measurements: [] }
        }
        date.setDate(date.getDate() + 1)
    }

    // add all leafs to the branches of the tree
    for (let device of data) {
        for (let measurement of device.measurements) {
            const measurementDate = new Date(measurement.timestamp)
            processedData[device.deviceId][measurementDate.getFullYear()][measurementDate.getMonth() + 1][measurementDate.getDate()].measurements.push(measurement)
        }
    }

    // calculate the sums for device, year, month and day
    for (let device in processedData){
        if(device === "sum") continue
        for(let year in processedData[device]){
            if(year === "sum") continue
            for(let month in processedData[device][year]) {
                if(month === "sum") continue
                for(let day in processedData[device][year][month]){
                    if(day === "sum") continue
                    for(let measurement of processedData[device][year][month][day].measurements) {
                        processedData[device][year][month][day].sum += measurement.usage
                    }
                    processedData[device][year][month].sum += processedData[device][year][month][day].sum
                }
                processedData[device][year].sum += processedData[device][year][month].sum
            }
            processedData[device].sum += processedData[device][year].sum
        }
    }
    return processedData
}

function addUsageToData(data) {
    for(let device of data) {
        let lastMeasurementValue
        for(let measurement of device.measurements) {
            if(!lastMeasurementValue) lastMeasurementValue = measurement.value
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