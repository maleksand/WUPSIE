import React, { useState, useEffect } from 'react';
import '../App.css';
import GraphPlaceholder from './Graphs/CommonGraphElement/GraphPlaceholder';
import WaterGraph from './Graphs/CommonGraphElement/WaterGraph';
import UsageComponent from './Usage/UsageMainComponent';
import fetchApi from '../logic/FetchAPI';


const Overview = () => {

    //For throwing data to different graphs and components from overview (Future fetching data for 6m that can be funneld to the right comp)
    const [dataApi, setDataApi] = useState([])

    useEffect(() => {
        async function getDataApi() {
            let json = await fetchApi.getFromDateRange('BBB60CC9ED69C910' ,'2019-01-01', '2019-01-02' )
            setDataApi(json)
            let householdJson = await fetchApi.getHouseholdFromDateRange('01C21CA24FBCECE7','2019-01-01', '2019-01-02' )
            console.log(householdJson)
            console.log(json)
        }
        getDataApi()
    }, [])

    return (
        <div className='Overview-container'>
            <GraphPlaceholder />
            <WaterGraph data={dataApi} />
            <UsageComponent data={dataApi} />
            <WaterGraph />

        </div>

    )
}

export default Overview;