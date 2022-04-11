import React from 'react';
//import logo from '../../../logo.svg';
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
        <div className='graph-button' >


            <BarChart height={400} width={600} data={jsonData} onClick={onPressHandler} margin={{ top: 15, right: 10, left: 15, bottom: 30 }}>
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    dataKey='timestamp.$date'
                    angle={90} 
                    interval={0} 
                    scaleToFit={true} 
                    textAnchor={'inherit'} 
                    fontSize={12}

                    tickFormatter={(tick) => {
                        let unixDate = new Date(tick)
                        //var unixYear = unixDate.getFullYear.toString.slice(2)
                        var unixFormatted = ''
                            + (unixDate.getDay("DD") < 10 ? '0' + unixDate.getDay() : unixDate.getDay()) + '-'
                            + (unixDate.getMonth("MM") < 10 ? '0' + unixDate.getMonth() : unixDate.getMonth()) + ' '
                            //+ unixYear + ' ' 
                            + (unixDate.getHours("hh") < 10 ? '0' + unixDate.getHours() : unixDate.getHours()) + ':'
                            + (unixDate.getMinutes('mm') < 10 ? '0' + unixDate.getMinutes() : unixDate.getMinutes())
                        //console.log(unixFormatted)
                        return unixFormatted;
                    }} />

                <YAxis type="number" domain={['auto', 'auto']}>
                    <Label value={'Cubic meters'} angle={-90} position={'left'} />
                </YAxis>
                <Tooltip />
                <Legend /*verticalAlign='bottom'*/  wrapperStyle={{position:'bottom'}} />
                <Bar dataKey="measurement" fill="#8884d8" />
            </BarChart>

        </div>
    );
}

export default WaterGraph;