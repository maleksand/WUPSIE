import React, {useState, useEffect} from 'react';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel, VictoryLine } from "victory";
import { reMap } from "./Mappings";
import fetchedItem from "./FetchAPI";

// const url = 'http://localhost:3030/api/devices/25F92BC417E53B3F/measurements'
//Meter equals the value of meterType in jSon
// const Meter = "hot water"
//Meter equals the value of meterType in jSon


//replace jsonDate with the Fetch constant
// const jsonData = require('./Data/Data.json');
//replace jsonDate with the Fetch constant

// console.log(fetchedItem)


// const meterType = jsonData.filter(item => item.metadata.meterType === Meter);

// console.log(jsonData)
//const data = reMap(jsonData);


export default function GraphColdWater() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      let data = await fetchedItem()
      console.log(data)
      data = reMap(data)
      setData(data)
    }
    getData()
  }, [])
  
  return (
      <VictoryChart
        theme={VictoryTheme.material}
        // domain=
      >

        <VictoryAxis
          tickLabelComponent={(
            <VictoryLabel
              textAnchor={'start'}
              angle={45}
            />
          )}
          style={{
            tickLabels: {
              fontSize: 5,
            }
          }}
        />

        <VictoryAxis
          dependentAxis
          tickFormat={(x) => (x)}
          style={{
            tickLabels: {
              fontSize: 5,
            }
          }}
        />
        <VictoryLine
          data={data}
          x="date"
          y="measurement"
        />
      </VictoryChart>

    )
}