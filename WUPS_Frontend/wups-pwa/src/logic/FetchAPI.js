let fetchApi = {}

fetchApi.getFromOneDayData = async (deviceId, date) => {
    async function getData() {
        const url = `http://localhost:3030/api/devices/${deviceId}/measurements?startDate=${date}&deviceType=watermeasurement`
        let response = await fetch(url);
        let json = await response.json()
        return json
    }

    let json = await getData()
    return json

}

fetchApi.getFromDateRange = async (deviceId, startDate, endDate) => {
    async function getData() {
        const url = `http://localhost:3030/api/devices/${deviceId}/measurements?startDate=${startDate}&endDate=${endDate}&deviceType=watermeasurement`
        let response = await fetch(url);
        let json = await response.json()
        return json
    }
    let json = await getData()
    return json
}

export default fetchApi;