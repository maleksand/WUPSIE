async function getData() {
  const url = 'http://localhost:3030/api/devices/BBB60CC9ED69C910/measurements?startDate=2019-03-01&deviceType=watermeasurement'
  let resposne = await fetch(url);
  return await resposne.json()
}

async function FetchData() {
  return (await getData())
}
export default FetchData;