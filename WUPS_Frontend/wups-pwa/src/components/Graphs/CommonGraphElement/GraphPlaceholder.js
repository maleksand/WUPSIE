import React, {useState, useEffect} from 'react';
//import logo from '../../../logo.svg';
import '../../../App.css';
import { PieChart, Pie, Label, Sector } from 'recharts';

const GraphPlaceholder = (prop) => {
    const onPressHandler = () => {
        window.alert(prop.id)

    }

    const data01 = [
        {"name": "Pizza", "value": 400},
        {"name": "Pepsi", "value": 300},
        {"name": "Ciggies", "value": 300},
        {"name": "Burger", "value": 200},
        {"name": "Sweets", "value": 278},
      ];
      const data02 = [
        {"name": "Electricty", "value": 2400},
        {"name": "Gas", "value": 4567},
        {"name": "Hot Water", "value": 1398},
        {"name": "Cold Water", "value": 9800},
        {"name": "Utility: Unknown","value": 3908},
      ];

    return (
        
        <div /*className='graph-button'*/>
            {/* <button onClick={onPressHandler} >
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                {/* <h1>this is for test {data}</h1> */}
                {/* It is a test of Pie Charts */}
            {/* </button> */}
            <PieChart width={730} height={350} backgroundColor="yellow">
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={50} fill="#8884d8"  />
                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={60} outerRadius={80} fill="#82ca9d" label={'${data02}'} >

  
                </Pie>
            </PieChart>
        </div>
    );
}


export default GraphPlaceholder;