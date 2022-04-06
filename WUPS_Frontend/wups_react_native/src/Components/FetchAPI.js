async function getData() {
  const url = 'http://localhost:3030/api/devices/B32FA9312E1013B7/measurements?startDate=2019-03-01&endDate=2019-06-01&deviceType=watermeasurement'
  let resposne = await fetch(url);
  return await resposne.json()
}

async function FetchData() {
  return (await getData())
}
export default FetchData;