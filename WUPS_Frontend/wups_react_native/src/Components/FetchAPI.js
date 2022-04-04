async function getData() {
  const url = 'http://localhost:8080/measurements/25F92BC417E53B3F?startDate=11-02-2019'
  let resposne = await fetch(url);
  return await resposne.json()
}

async function FetchData() {
  return (await getData())
}
export default FetchData;