import React, {useState, useEffect} from 'react';
import '../../../App.css';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Label, Legend } from 'recharts';
import FetchAPI from '../../FetchData/FetchAPI';

//This needs local data
const jsonData = require('./Data/Data.json');
//console.log(jsonData)


const WaterGraph = (prop) => {
    const onPressHandler = () => {
        window.alert(prop.id)
    }

    const [data, setData] = useState([]);

    useEffect(() => {
        
        async function getData() {
            let json = await FetchAPI()
            // console.log(json)
            setData(json)
        }

        getData()
     
    }, [])

    useEffect(() => {
    //  console.log(data)

    }, [data])
    
// FILTER FUNCTION, CHANGE THE HOT WATER TO THE METER NEEDED
  const FilterResult  = data.filter(o => o.metadata.meterType === "hot water");

    console.log(FilterResult)
//FILTER FUNCTION, CHANGE THE HOT WATER TO THE METER NEEDED

    return (
        <div className='graph-button' >

            <BarChart 
                height={400}
                width={600}
                data={FilterResult}
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
                        value: 'Hot water',
                        type: 'rect',
                        color: "#167c1f"
                    }]}
                />
                <Bar dataKey="value" fill="#167c1f" />
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