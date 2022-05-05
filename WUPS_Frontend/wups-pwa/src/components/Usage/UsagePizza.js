import React, { useState, useEffect } from "react"
import SumPrice from "../../logic/SumPrice"
import dateLogic from "../../logic/DateLogic"
import fetchApi from "../../logic/FetchAPI"

export default function Pizzas(props) {

    const [useResult, setUseResult] = useState({})
    const [data, setData] = useState([])


    useEffect(()=>{
        async function getData() {
            let result = await fetchApi.getFromDateRange(props.device.id,  props.startDate, props.endDate)
            setData(result)
        }
        getData()
        
    },[props.startDate, props.endDate])

    useEffect(() => {
        async function getPrice() {
            let result = await SumPrice(data, "1")
            setUseResult(result)
        }
        getPrice()
    }
    ,[data])

    return (
        <div>
            <p>
                You have used {Math.round(useResult.totalUsage * 100)/100} cubic meters of {props.device.meterType}.
            </p>
            <p>
                This has cost you {Math.round(useResult.sumPrice *100)/100} DKK which equates to { Math.round((useResult.sumPrice / props.pizzaPrice)*100)/100} pizzas!


            </p>



            


        </div>
    )
}