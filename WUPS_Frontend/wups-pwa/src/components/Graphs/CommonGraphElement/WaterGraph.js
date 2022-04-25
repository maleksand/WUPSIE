import React from 'react';
import '../../../App.css';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Label, Legend, LabelList } from 'recharts';
import FetchAPI from '../../../logic/FetchAPI';
import { Link } from 'react-router-dom';



const WaterGraph = (props) => {
    function onPressHandler() {
        window.alert('Routing in progress')


    }

    return (
        <div>
            <h1>{`Device: ${props.device.id}`}</h1>
            <BarChart
                height={400}
                width={600}
                data={props.device?.subArray[0]?.subArray} // ?. optional chaining. instead of trowing an error when subarray does not exist, return undefined.
                //onClick={onPressHandler()}
                margin={{
                    top: 15,
                    right: 10,
                    left: 15,
                    bottom: 52
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey='name'
                    angle={90}
                    interval={0}
                    scaleToFit={true}
                    textAnchor={'inherit'}
                    fontSize={12}
                />

                <YAxis
                    type="number"
                    domain={['dataMin', 'auto']}
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
                        value: 'Hot water', //ToDo Make this dynamic
                        type: 'rect',
                        color: "#167c1f"
                    }]}
                />
                <Bar dataKey="sum" fill="#167c1f" /*onClick={onPressHandler()}*/ />
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