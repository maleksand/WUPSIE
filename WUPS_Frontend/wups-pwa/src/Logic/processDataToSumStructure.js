function findMinMaxDate(data) {
    let minDate = new Date(8640000000000000) // the maximum date possiple
    let maxDate = new Date(-8640000000000000) // the minimum date possiple
    for(let device of data) {
        for(let measurement of device.measurements) {
            const measurementDate = new Date(measurement.timestamp)
            if(minDate > measurementDate) minDate = measurementDate
            if(maxDate < measurementDate) maxDate = measurementDate
        }
    }
    return [minDate, maxDate]
}

export default function processData(data) {
    let processedData = {}
    const [minDate, maxDate] = findMinMaxDate(data)
    let date = minDate
    while(date <= maxDate){
        for(let device of data) {
            if(!processedData[device.deviceId])                                      processedData[device.deviceId] = {}
            if(!processedData[device.deviceId][date.getFullYear()])                  processedData[device.deviceId][date.getFullYear()] = {}
            if(!processedData[device.deviceId][date.getFullYear()][date.getMonth()]) processedData[device.deviceId][date.getFullYear()][date.getMonth()] = {}
            processedData[device.deviceId][date.getFullYear()][date.getMonth()][date.getDate()] = {sum: 0, measurements: []}
        }
        date.setDate(date.getDate() + 1)
    }
    
    
    for(let device of data) {
        for(let measurement of device.measurements) {
            const measurementDate = new Date(measurement.timestamp)
            processedData[device.deviceId][measurementDate.getFullYear()][measurementDate.getMonth()][measurementDate.getDate()]["measurements"].push(measurement)
        }
    }
    console.log(processedData)
    
    return processedData
}