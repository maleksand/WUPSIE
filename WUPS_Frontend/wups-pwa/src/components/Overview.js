import React, { useState, useEffect } from 'react';
import '../App.css';
import GraphPlaceholder from './Graphs/CommonGraphElement/GraphPlaceholder';
import WaterGraph from './Graphs/CommonGraphElement/WaterGraph';
import UsageComponent from './Usage/UsageMainComponent';
import FetchAPI from './FetchData/FetchAPI';



const Overview = () => {

    //For throwing data to different graphs and components from overview (Future fetching data for 6m that can be funneled to the right comp)
    const [dataApiCold, setDataApiCold] = useState([])


    useEffect(() => {
        async function getDataApi() {
            let json = await FetchAPI('2019-01-01', '2019-01-02', 'B32FA9312E1013B7') //B32FA9312E1013B7 is COLD WATER device
            setDataApiCold(json)
        }
        getDataApi()
    }, [])

    const [dataApiHot, setDataApiHot] = useState([])

    useEffect(() => {
        async function getDataApi() {
            let json = await FetchAPI('2019-01-01', '2019-01-02', 'A92C3B84F9F4E0AF') //A92C3B84F9F4E0AF is HOT WATER device
            setDataApiHot(json)
        }
        getDataApi()
    }, [])


    return (
        <div className='Overview-container'>
            <GraphPlaceholder />
            <WaterGraph />
            {/* <UsageComponent data={dataApi} /> */}
            <WaterGraph />

            {/* <GraphPlaceholder />
            <GraphPlaceholder />
            <GraphPlaceholder />
            <GraphPlaceholder />
            <GraphPlaceholder />
            <GraphPlaceholder />
            <GraphPlaceholder /> */}
        </div>

    )
}

export default Overview;