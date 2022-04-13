async function getData(startDate/*, endDate*/) {
    const url = 'http://localhost:3030/api/devices/BBB60CC9ED69C910/measurements?startDate=' + startDate /*+ '&endDate=' + endDate*/ + '&deviceType=watermeasurement'
    //'http://localhost:3030/api/devices/BBB60CC9ED69C910/measurements?startDate=2019-03-01&endDate=2019-03-14&deviceType=watermeasurement'
    let response = await fetch(url);
    let json = await response.json()
    return json
}

async function FetchAPI(startDate/*, endDate*/) {
    let json = await getData(startDate/*, endDate*/)
    return json
  }
  
  
  export default FetchAPI;