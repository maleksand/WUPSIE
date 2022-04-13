import react, { useState, useEffect } from "react"
import SumPrice from "../../logic/SumPrice"

export default function Pizzas(props) {

    const [usePrice, setUseprice] = useState()
    const [meterType, setMeterType] = useState()
    
    useEffect(() => {
        async function getPrice() {
            let price = await SumPrice(props.data, "1")
            setUseprice(price)
            setMeterType(props.data[0].metadata.meterType)
        }
        getPrice()
    }, )

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
            <p>Your consumption has been pizzas in the given period</p>
            <p>you have use for {Math.round(usePrice *100)/100} on {meterType} which equate to { Math.round((usePrice / pizzaPrice)*100)/100} pizzas</p>
        </div>
    )
}