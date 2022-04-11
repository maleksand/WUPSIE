import React from 'react';
import logo from '../../../logo.svg';
import '../../../App.css';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Label, Legend } from 'recharts';

//Metertype value from local json-file
const Meter = "hot water"

//This needs local data
const jsonData = require('./Data/Data.json');
console.log(jsonData)


const WaterGraph = (prop) => {
    const onPressHandler = () => {
        window.alert(prop.id)

    }
    return (
        <div className='graph-button'>
        {/* <button id={prop.id} onClick={onPressHandler} className='graph-button'> */}
             {/* <img src={logo} className="App-logo" alt="logo" /> */}

            <BarChart height={400} width={600} data={jsonData} onClick={onPressHandler} margin={{ top: 15, right: 10, left: 15, bottom: 5 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis dataKey="timestamp" >
                    <Label value={'Hot Water Graph'} />
                </XAxis>
                <YAxis type="number" domain={['auto', 'auto']}>
                    <Label value={'Cubic meters'} angle={-90} position={'left'} />
                </YAxis>
                <Tooltip />
                <Legend />
                <Bar dataKey="measurement" fill="#8884d8" />
            </BarChart>

        {/* </button> */}
        </div>
    );
}

export default WaterGraph;