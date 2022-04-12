import React from 'react';
import '../App.css';
import GraphPlaceholder from './Graphs/CommonGraphElement/GraphPlaceholder';
import WaterGraph from './Graphs/CommonGraphElement/WaterGraph';

const Overview = () => {
    
    return(
        <div className='Overview-container'>
            <GraphPlaceholder />
            <WaterGraph />

        </div>

    )
}

export default Overview;