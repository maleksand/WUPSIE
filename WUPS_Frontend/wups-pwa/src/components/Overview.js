import React from 'react';
import '../App.css';
import GraphPlaceholder from './Graphs/CommonGraphElement/GraphPlaceholder';
import WaterGraph from './Graphs/CommonGraphElement/WaterGraph';
import UsageTextComponent from './Graphs/CommonGraphElement/UsageTextComponent';

const Overview = () => {
    
    return(
        <div className='Overview-container'>
            <GraphPlaceholder />
            <WaterGraph />
            <UsageTextComponent />


        </div>

    )
}

export default Overview;