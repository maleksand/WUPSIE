 const url = 'http://localhost:3030/api/devices/B32FA9312E1013B7/measurements?startDate=2019-03-01&endDate=2019-03-02&deviceType=watermeasurement' //COLD WATER

//const url = 'http://localhost:3030/api/devices/A92C3B84F9F4E0AF/measurements?startDate=2019-03-01&endDate=2019-03-02&deviceType=watermeasurement'  //HOT WATER


async function getData() {
    
    let response = await fetch(url);
    let json = await response.json()
    return json
}

async function FetchAPI() {
    let json = await getData()
    return json
  }
  
  
  export default FetchAPI;