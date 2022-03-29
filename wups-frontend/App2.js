// import React, { useEffect, useState, component } from 'react';
import './Data/Data.json';
import './App.css';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
// import { transformed } from './Mappingtest';
// import {initialReformat, formatJson} from './Mappingtest';
import { formatJson } from './Mappingtest';
import {fetchAPI} from './JQuery';
// import { ListComponent } from './Mappingtest';


// const jsonData = require('./Data/Data.json');
// const jsonData2 = transformed
// console.log(jsonData2)

// const testString = JSON.stringify(formatJson)
// let data = JSON.parse(formatJson);

// console.log(formatJson[0].meterType);
// console.log(formatJson);


// const temp = jsonData.map(o => {o.timestamp.$date})



function App() {
// const [data, setData] = React.useState([]);
// const [loading, setLoading] = React.useState(true);

// const charts =[
  
//   {
// name: 'Forbrug',
// xAxisey: "Dato",
// yAxisKey: "Varmt Vand",
// data: [jsonData2]

//   }

// ]

// const renderLegend = (props) => {
//   const { payload } = props;


// return (
//   <ul>
//     {
//       payload.map((entry, index) => (
//         <li key={`item-${index}`}>{entry.value}</li>
//       ))
//     }
//   </ul>
// );
// }

// const testy = formatJson.meterType

// console.log(testy)

let lineName = []


if (formatJson[0].meterType === 'hot water'){
 lineName = "Varmt Vand"
}
else{
  lineName = "Ukendt"
}





  return (
    <ResponsiveContainer width="100%" aspect={3}>
        <LineChart
          width={500}
          height={300}
          data={formatJson}
          margin={{
            top: 5,
            right: 100,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="0 0" />
          <XAxis dataKey="date" />
          <YAxis 
          // dataKey="measurement"
          domain={['auto', 'auto']}

          />
          
          
          <Tooltip />
          <Legend />
                    <Line name={lineName} type="monotone" dataKey="measurement" stroke="#000000" />
        </LineChart>
      </ResponsiveContainer>



);


}


export default App;
