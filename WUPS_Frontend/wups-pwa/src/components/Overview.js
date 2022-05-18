import { useState, useEffect, useContext } from 'react';
import '../App.css';
import GraphPlaceholder from './Graphs/CommonGraphElement/GraphPlaceholder';
import WaterGraph from './Graphs/CommonGraphElement/WaterGraph';
import UsageComponent from './Usage/UsageMainComponent';
//import { Link } from 'react-router-dom';
import { DataContext } from '../App';
//import PieChartComponent from './Graphs/PieChart';
import ExamplePieChart from './Graphs/PieChart';
import LineChart from './Graphs/LineChart';
//import { Line } from 'recharts';

const Overview = () => {
    const data = useContext(DataContext)

    const [jsonData, setJsonData] = useState([])

    useEffect(() => {
      function doStuff() {
        setJsonData(require('./Graphs/CommonGraphElement/Data/HumidityAndTemperature.json'))
        console.log(jsonData)
      }
      doStuff()
    }, [])
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