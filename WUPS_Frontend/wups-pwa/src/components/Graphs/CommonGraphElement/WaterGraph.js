import React, { useState, useEffect } from 'react';
import '../../../App.css';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Label, Legend } from 'recharts';
import FetchAPI from '../../FetchData/FetchAPI';
import { NavLink } from 'react-router-dom';



const WaterGraph = () => {
    function onPressHandler() {
        window.alert('Routing in progress')

    }


    const [data, setData] = useState([]);

    useEffect(() => {
        // Must take timespan to make it more universal
        var startDate = '2019-03-01 00:00:00';
        var endDate = '2019-03-01 23:59:59';

        async function getData() {
            let json = await FetchAPI(startDate, endDate)
            // console.log(json)
            setData(json)
        }

        getData()

    }, [])



let temp = [{"value": 0}]

    for (let i = 1; i < data.length; i++) {
        temp.push({"value": + ( data[i].value - data[i-1].value)})
        
    }

var output = [];
Object.keys(temp).forEach(key => {
    if (temp[key] instanceof Object) {
        output[key] = Object.assign({}, data[key], temp[key]);
    } else {
        output[key] = temp[key];
    }
});

console.log(output);



        return (
            <div className='graph-button' >
                <NavLink to="/notFound">
                    <BarChart
                        height={400}
                        width={600}
                        data={output}
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
                            dataKey='timestamp'
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
                                value: 'Hot water', //ToDo Make this dynamic
                                type: 'rect',
                                color: "#167c1f"
                            }]}
                        />
                        <Bar dataKey="value" fill="#167c1f" /*onClick={onPressHandler()}*/ />
                    </BarChart>
                </NavLink>
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