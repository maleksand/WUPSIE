import React, {useState, useEffect} from 'react';
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis, VictoryLabel, VictoryLine } from "victory";
import { reMapByHour, reMapByDay } from "./Mappings";
import fetchedItem from "./FetchAPI";

//Meter equals the value of meterType in jSon
// const Meter = "hot water"
//Meter equals the value of meterType in jSon


export default function GraphHotWater() {
  const [data, setData] = useState([])

  useEffect(() => {
    async function getData() {
      let data = await fetchedItem()
      
      data = reMapByDay(data)
      

      const grouped = [];

      data.forEach(function (i) {
        return function (o) {
            if (!i[o.date]) {
                i[o.date] = { date: o.date, measurement: null, meterType: o.meterType };
                grouped.push(i[o.date]);
            }
            Object.keys(o).forEach(function (k) {
                if (k === 'date') {
                    return;
                }
                i[o.date][k] = o[k];
            });
        };
    }(Object.create(null)));

    // console.log(grouped)

      
      setData(grouped)
    }
    getData()
  }, [])
  // console.log(data)
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