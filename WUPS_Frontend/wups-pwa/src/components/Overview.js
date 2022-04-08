import React from 'react';
import '../App.css';
import GraphPlaceholder from './Graphs/CommonGraphElement/GraphPlaceholder';

const Overview = () => {
    
    return(
        <div className='Overview-container'>
            <GraphPlaceholder id="1"/>
            <GraphPlaceholder id={2}/>
            <GraphPlaceholder id={1}/>
            <GraphPlaceholder />
            <GraphPlaceholder />
            <GraphPlaceholder />
            <GraphPlaceholder />
            <GraphPlaceholder />
            <GraphPlaceholder />
            <GraphPlaceholder />
            <GraphPlaceholder />
            <GraphPlaceholder />

        </div>

    )
}

export default Overview;