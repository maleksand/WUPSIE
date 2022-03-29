import React from "react";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis,tickLabelComponent, VictoryLabel } from "victory";
import { reMap } from "./Mapping";


//Meter equals the value of meterType in jSon
const Meter = "hot water"
//Meter equals the value of meterType in jSon


//replace jsonDate with the Fetch constant
const jsonData = require('./Data/Data.json');
//replace jsonDate with the Fetch constant



const meterType = jsonData.filter(item => item.metadata.meterType === Meter);

const data = reMap(meterType);




export default class GraphHotWater extends React.Component {
  render() {
    return (
      <VictoryChart>

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
        <VictoryBar
          data={data}
          x="date"
          y="measurement"
        />
      </VictoryChart>
      
    )
  }
}