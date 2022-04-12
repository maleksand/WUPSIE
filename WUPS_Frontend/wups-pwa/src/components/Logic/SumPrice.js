
// I want to give this function an array of the measurements during a time period, and a price to use
export default function SumPrice(data){

    let highValue = 0;
    let lowValue = 0;
    let price = 0; 
    
    data.forEach(obj => {
        if(obj.measurement > highValue){
            highValue = obj.measurement
        }
        if(lowValue == 0 || obj.measurement < lowValue){
            lowValue = obj.measurement
        }
    })
    
    console.log(lowValue + ' to ' + highValue )
    
    //Calculate the price



    return(price)
}