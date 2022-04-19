//const url = 'http://localhost:3030/api/devices/B32FA9312E1013B7/measurements?startDate=2019-03-01&endDate=2019-03-02&deviceType=watermeasurement' //COLD WATER

//const url = 'http://localhost:3030/api/devices/A92C3B84F9F4E0AF/measurements?startDate=2019-03-01&endDate=2019-03-02&deviceType=watermeasurement'  //HOT WATER



async function getData(startDate, endDate) {
    const url = 'http://localhost:3030/api/devices/BBB60CC9ED69C910/measurements?startDate=' + startDate + '&endDate=' + endDate + '&deviceType=watermeasurement'

    let response = await fetch(url);
    let json = await response.json()
    return json
}

async function FetchAPI(startDate, endDate) {
    let json = await getData(startDate, endDate)
    return json
  }
  
  
  export default FetchAPI;