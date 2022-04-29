import Pizzas from "./UsagePizza"
import { useContext, useEffect, useState } from 'react';
import { DataContext } from '../../App';
import moment from "moment"
import fetchApi from "../../logic/FetchAPI";


export default function UsageComponent(props) {


    const [pizzaPrice, setPrice] = useState(65)
    const [startDate, setStartDate] = useState(moment("2019-01-01").format("YYYY-MM-DD"))
    const [endDate, setEndDate] = useState(moment("2019-03-02").format("YYYY-MM-DD"))

    return (
        <div>
            <h1> Your usage related to Pizza</h1>
            <label>Enter your avg. price of pizza:
                <input type="number" value={pizzaPrice} onChange={(e) => setPrice(e.target.value)} />
            </label>
            <br />
            <label>
                <input type="date" defaultValue={startDate} onChange={e => setStartDate(e.target.value)}/>
                <input type="date" defaultValue={endDate} onChange={e => setEndDate(e.target.value)} />
            </label>
            {props.data.map(device => {
                return (<Pizzas key={device.id} device={device} pizzaPrice={pizzaPrice} startDate={startDate} endDate={endDate} />)
            })
            }
        </div>
    )

}