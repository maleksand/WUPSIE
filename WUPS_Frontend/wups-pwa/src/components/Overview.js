import React, { useState, useEffect } from 'react';
import '../App.css';
import GraphPlaceholder from './Graphs/CommonGraphElement/GraphPlaceholder';
import WaterGraph from './Graphs/CommonGraphElement/WaterGraph';
import UsageComponent from './Usage/UsageMainComponent';
import FetchAPI from './FetchData/FetchAPI';


const Overview = () => {

    //For throwing data to different graphs and components from overview (Future fetching data for 6m that can be funneld to the right comp)
    const [dataApi, setDataApi] = useState([])

    useEffect(() => {
        async function getDataApi() {
            let json = await FetchAPI('2019-01-01', '2019-01-02')
            setDataApi(json)
        }
        getDataApi()
    }, [])

    return (
        <div className='Overview-container'>
            <GraphPlaceholder />
            <WaterGraph />
            <UsageComponent data={dataApi} />
            <WaterGraph />

        </div>

    )
}

export default Overview;