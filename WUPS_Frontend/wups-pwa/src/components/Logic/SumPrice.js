
// I want to give this function an array of the timeseries measurements during a time period, and a regionId to find the price
export default function SumPrice(data, regionId) {

    let highValue = 0
    let lowValue = 0

    const regionPrice = fetch('http://localhost:3030/api/regions/' + regionId + '/price')
        .then((response) => response.json())
        .then((result) => {
            return result
        })

    data.forEach(obj => {
        if (obj.measurement > highValue) {
            highValue = obj.measurement
        }
        if (lowValue === 0 || obj.measurement < lowValue) {
            lowValue = obj.measurement
        }
    })

    var p = 0

    const returnPrice = () => {
       regionPrice.then((res) => {
           console.log(res.pricePerCubic)
            p = res.pricePerCubic
           return res.pricePerCubic
        })
      };

    console.log(returnPrice())
    console.log(p)
    return (0)
}