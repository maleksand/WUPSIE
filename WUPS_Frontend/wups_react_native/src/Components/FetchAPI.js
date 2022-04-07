async function getData() {
  const url = 'http://localhost:8080/devices/BBB60CC9ED69C910/measurements?deviceType=watermeasurement'
  let resposne = await fetch(url);
  return await resposne.json()
}

async function FetchData() {
  return (await getData())
}
export default FetchData;