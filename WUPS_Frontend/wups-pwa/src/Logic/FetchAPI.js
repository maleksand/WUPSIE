async function getData() {
    const url = 'http://localhost:3030/api/devices/BBB60CC9ED69C910/measurements?startDate=2019-03-01&deviceType=watermeasurement'
    let response = await fetch(url);
    let json = await response.json()
    return json
}

async function FetchAPI() {
    let json = await getData()
    return json
  }
  
  
  export default FetchAPI;