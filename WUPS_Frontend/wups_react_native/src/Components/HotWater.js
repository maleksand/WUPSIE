import React, { useState, useEffect } from 'react';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel } from "victory";
import { reMap } from "./Mappings";
// import FetchAPI from "./FetchAPI";

const url = 'http://localhost:3030/api/devices/25F92BC417E53B3F/measurements'
//Meter equals the value of meterType in jSon
const Meter = "hot water"
//Meter equals the value of meterType in jSon


//replace jsonDate with the Fetch constant
const jsonData = require('./Data/Data.json');
//replace jsonDate with the Fetch constant

// console.log(FetchAPI())


const meterType = jsonData.filter(item => item.metadata.meterType === Meter);

const data = reMap(meterType);


function FetchAPI() {

  useEffect(() => {
    fetchItems();
  }, []);

  const [items, setItems] = useState([]);

  const fetchItems = async () => {
    const data = await fetch(url);

    const items = await data.json();
console.log(items);
    setItems(items);
  };
return (items)
}


export default class GraphHotWater extends React.Component {
  render() {
    return (
      <VictoryChart
      theme={VictoryTheme.material}
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
        <VictoryBar
          data={data}
          x="date"
          y="measurement"
        />
      </VictoryChart>
      
    )
  }
}