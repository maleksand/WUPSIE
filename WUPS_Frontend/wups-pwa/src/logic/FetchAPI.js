let fetchApi = {}

async function getData(url) {
    let response = await fetch(url);
    let json = await response.json()
    return json
}

// function validateDates(dates) {
//     var formattedDates = []
//     for(let date of dates){
//         let d = new Date(date)
//         formattedDates.push(d.toISOString())
//     }

//     return formattedDates
// }

fetchApi.getFromOneDayData = async (deviceId, date) => {
    const url = `http://localhost:3030/api/devices/${deviceId}/measurements?startDate=${date}&deviceType=watermeasurement`
    return await getData(url)
}

fetchApi.getFromDateRange = async (deviceId, startDate, endDate) => {
    //console.log(validateDates([startDate, endDate]))
    const url = `http://localhost:3030/api/devices/${deviceId}/measurements?startDate=${startDate}&endDate=${endDate}&deviceType=watermeasurement`
    return await getData(url)
}

fetchApi.getHouseholdFromDateRange = async (householdId, startDate, endDate) => {
    const url = `http://localhost:3030/api/households/${householdId}/devices/measurements?startDate=${startDate}&endDate=${endDate}`
    return await getData(url)
}

export default fetchApi;