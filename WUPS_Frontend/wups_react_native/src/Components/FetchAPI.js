async function getData() {
  const url = 'http://localhost:3030/api/devices/B32FA9312E1013B7/measurements?deviceType=watermeasurement'
  let resposne = await fetch(url);
  return await resposne.json()
}

async function FetchData() {
  return (await getData())
}
export default FetchData;