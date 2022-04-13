import React, {useState, useEffect} from 'react';
import '../../../App.css';
import SumPrice from '../../../Logic/SumPrice';



export default function UsageTextComponent(props){

    var jsonData = require('./Data/DataFor24Hours.json');

    const [price, setprice] = useState()

    useEffect(() => {
        async function getPrice() {
            let price = await SumPrice(jsonData, "1")
            setprice(price)
        }
        getPrice()
    }, )
    

    console.log(price)

        

        return(

        <div>

            <h3> You have paid {price} DKK for your utilities this period. </h3>

            
            

        </div>
    ) 
}
