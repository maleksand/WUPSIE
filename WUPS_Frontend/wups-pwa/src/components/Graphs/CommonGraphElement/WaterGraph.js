import React from 'react';
import '../../../App.css';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Label, Legend } from 'recharts';
import FetchAPI from '../../../logic/FetchAPI';
import { NavLink } from 'react-router-dom';



const WaterGraph = (props) => {
    function onPressHandler() {
        window.alert('Routing in progress')



    }

    
        return (
            <div className='graph-button' >
                <NavLink to="/notFound">
                    <BarChart
                        height={400}
                        width={600}
                        data={props.data}
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