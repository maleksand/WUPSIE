const url = ['http://localhost:3030/api/devices/25F92BC417E53B3F/measurements']

// This function just returns a promise
function getData(url) {
  return fetch(url)
    .then(response=>{
      return response.json()
    })
    .then(data =>{
            return Promise.resolve(data);
    })
}


Promise.all(
  // use the urls to create an array of promises
  url.map(getData)
).then((ttTimes) => {
  // When all the promises have been resolved, then this will be executed
  //Here all the promises have been resolved, so you would have an array with the ttTimes
  console.log(ttTimes);
})