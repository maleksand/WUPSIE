import { useContext } from 'react';
import '../App.css';
import GraphPlaceholder from './Graphs/CommonGraphElement/GraphPlaceholder';
import WaterGraph from './Graphs/CommonGraphElement/WaterGraph';
import UsageComponent from './Usage/UsageMainComponent';
import { DataContext } from '../App';
import { Link } from 'react-router-dom';


const Overview = () => {
    const data = useContext(DataContext)

    return (
        <div className='Overview-container'>
            {data.map(device => {
                return (
                    <Link key={device.id} to={`/overview/${device.id}`}>
                        <WaterGraph device={device} />
                    </Link>
                )
            })}
        </div>

    )
}

export default Overview;