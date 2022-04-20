
// I want to give this function an array of the timeseries measurements during a time period, and a regionId to find the price
export default async function SumPrice(data, regionId) {

    let highValue = 0
    let lowValue = 0
    let sumPrice = 0
    let startDate = null
    let endDate = null
    
    async function getRegionPrice(){
        const response = await fetch('http://localhost:3030/api/regions/' + regionId + '/price')
        const regionData = await response.json()
        return regionData.pricePerCubic
    }
    
    data.forEach(obj=>{
        if(obj.timestamp < startDate || startDate === null){
            startDate = obj.timestamp
        }
        if(obj.timestamp > endDate || endDate === null){
            endDate = obj.timestamp
        }
    })

    data.forEach(obj => {
        if (obj.value > highValue) {
            highValue = obj.value
        }
        if (lowValue === 0 || obj.value < lowValue) {
            lowValue = obj.value
            
        }
    })

    sumPrice = (highValue - lowValue) * await getRegionPrice()
    return {sumPrice: sumPrice, startDate: startDate, endDate: endDate}
}