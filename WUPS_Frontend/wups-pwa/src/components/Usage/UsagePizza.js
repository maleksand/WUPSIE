import React, { useState, useEffect } from "react"
import SumPrice from "../../logic/SumPrice"
import dateLogic from "../../logic/DateLogic"

export default function Pizzas(props) {

    const [useResult, setUseResult] = useState({})
    const [meterType, setMeterType] = useState()


    
    useEffect(() => {
        async function getPrice() {
            let result = await SumPrice(props.data, "1")
            setUseResult(result)
            setMeterType(props.data[0].metadata.meterType)
        }
        getPrice()  
    },[props])

    const [pizzaPrice, setPrice] = useState(65);

    const handleSubmit = (event) => {
        event.preventDefault();
        alert(`Do you really pay ${pizzaPrice} kr. for a pizza?`)
      }

    return (
        <div>
            <h3>this will become pizza stuff </h3>
            <form>
                <label>Enter your avg. price of pizza:
                    <input type="number" value={pizzaPrice} onChange={(e) => setPrice(e.target.value)} />
                </label>
                
            </form>
            <p>Between the {dateLogic.ConvDayMonYeaHouMin(useResult.startDate)} and {dateLogic.ConvDayMonYeaHouMin(useResult.endDate)}</p>
            <p>you have use for {Math.round(useResult.sumPrice *100)/100} DKK on {meterType} which equate to { Math.round((useResult.sumPrice / pizzaPrice)*100)/100} pizzas</p>
        </div>
    )
}