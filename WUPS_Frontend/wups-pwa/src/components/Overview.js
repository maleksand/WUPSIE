import { useContext } from 'react';
import '../App.css';
import GraphPlaceholder from './Graphs/CommonGraphElement/GraphPlaceholder';
import WaterGraph from './Graphs/CommonGraphElement/WaterGraph';
import UsageComponent from './Usage/UsageMainComponent';
import { Link } from 'react-router-dom';
import { DataContext } from '../App';


const Overview = () => {
    const data = useContext(DataContext)

    return (
        <div className='Overview-container'>
            {data.map(device => {
                return (<WaterGraph key={device.id} device={device} />)
            })
            }
            <UsageComponent data={data}/>
        </div>
    )
}

export default Overview;