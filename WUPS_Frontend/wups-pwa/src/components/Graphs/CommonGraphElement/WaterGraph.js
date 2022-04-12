import React from 'react';
import '../../../App.css';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Label, Legend } from 'recharts';

//This needs local data
const jsonData = require('./Data/Data.json');
//console.log(jsonData)


const WaterGraph = (prop) => {
    const onPressHandler = () => {
        window.alert(prop.id)

    }
    return (
        <div className='graph-button' >

            <BarChart 
                height={400}
                width={600}
                data={jsonData}
                onClick={onPressHandler}
                margin={{ 
                    top: 15, 
                    right: 10, 
                    left: 15, 
                    bottom: 52 
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis 
                    dataKey='timestamp.$date'
                    angle={90} 
                    interval={0} 
                    scaleToFit={true} 
                    textAnchor={'inherit'} 
                    fontSize={12}
                    tickFormatter={(tick) => UnixConversion(tick)
                    } />

                <YAxis 
                    type="number"
                    domain={['auto', 'auto']}
                >
                    <Label 
                        value={'Cubic meters'} 
                        angle={-90} 
                        position={'left'} 
                    />
                </YAxis>
                <Tooltip />
                <Legend
                    wrapperStyle={{ position: 'bottom' }}
                    payload={[{
                        value: 'Hot water',
                        type: 'rect',
                        color: "#167c1f"
                    }]}
                />
                <Bar dataKey="measurement" fill="#167c1f" />
            </BarChart>

        </div>
    );
}

export default WaterGraph;

function UnixConversion(tick) {
    let unixDate = new Date(tick)
    var unixFormatted = ''
        + (unixDate.getDate("DD") < 10 ? '0' + unixDate.getDate() : unixDate.getDate()) + '-'
        + (unixDate.getMonth("MM") < 10 ? '0' + unixDate.getMonth() : unixDate.getMonth()) + '-'
        + unixDate.getFullYear() + ' '
        + (unixDate.getHours("hh") < 10 ? '0' + unixDate.getHours() : unixDate.getHours()) + ':'
        + (unixDate.getMinutes('mm') < 10 ? '0' + unixDate.getMinutes() : unixDate.getMinutes())
    return unixFormatted;

}