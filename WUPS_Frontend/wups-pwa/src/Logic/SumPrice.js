
// I want to give this function an array of the timeseries measurements during a time period, and a regionId to find the price
export default async function SumPrice(data, regionId) {

    let highValue = 0
    let lowValue = 0

    async function getRegionPrice(){
        const response = await fetch('http://localhost:3030/api/regions/' + regionId + '/price')
        const regionData = await response.json()
        return regionData.pricePerCubic
    }
    
    data.forEach(obj => {
        if (obj.value > highValue) {
            highValue = obj.value
        }
        if (lowValue === 0 || obj.value < lowValue) {
            lowValue = obj.value
        }
    })

    
    
    let value =((highValue - lowValue) * await getRegionPrice())
    return Math.round(value * 100)/100
}