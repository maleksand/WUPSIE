import { useState, useEffect, useContext } from 'react';
import '../App.css';
import WaterGraph from './Graphs/CommonGraphElement/WaterGraph';
import UsageComponent from './Usage/UsageMainComponent';
import { DataContext } from '../App';
import ExamplePieChart from './Graphs/PieChart';
import LineChart from './Graphs/LineChart';

const Overview = () => {
    const data = useContext(DataContext)

    const [jsonData, setJsonData] = useState([])

    useEffect(() => {
      function doStuff() {
        setJsonData(require('./Graphs/CommonGraphElement/Data/HumidityAndTemperature.json'))
        console.log(jsonData)
      }
      doStuff()
    }, [jsonData])
    return (
        <div className='Overview-container'>
            <ExamplePieChart data={data}/>
            {data.map(device => {
                return (<WaterGraph key={device.id} device={device} />)
            })
            }
            <UsageComponent data={data}/>
            <LineChart data={jsonData} />
        </div>
    )
}

export default Overview;