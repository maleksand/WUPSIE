import React, {useState, useEffect} from 'react';
//import logo from '../../../logo.svg';
import '../../../App.css';
import { PieChart, Pie, Label, Sector, Tooltip } from 'recharts';

const GraphPlaceholder = (prop) => {
    const onPressHandler = () => {
        window.alert(prop.id)

    }

    const data01 = [
        {"name": "Pizza", "value": 400},
        {"name": "Pepsi", "value": 300},
        {"name": "Ciggies", "value": 300},
        {"name": "Burger", "value": 200},
        {"name": "Sweets", "value": 278},
      ];
      const data02 = [
        {"name": "Electricty", "value": 2400},
        {"name": "Gas", "value": 4567},
        {"name": "Hot Water", "value": 1398},
        {"name": "Cold Water", "value": 9800},
        {"name": "Utility: Unknown","value": 3908},
      ];

      const renderLabelNamesValue = (props) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, outerRadius, fill, percent, value, name } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';
      
        return (
          <g>
            <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
            <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} textAnchor={textAnchor} fill="#333">{`${name}`+': '+`${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} textAnchor={textAnchor} fill="#999">
              {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
          </g>
        );
      };

    return (
        
        <div /*className='graph-button'*/>
            {/* <button onClick={onPressHandler} >
                {/* <img src={logo} className="App-logo" alt="logo" /> */}
                {/* <h1>this is for test {data}</h1> */}
                {/* It is a test of Pie Charts */}
            {/* </button> */}
            <PieChart width={600} height={400} backgroundColor="yellow">
                <Pie data={data01} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} fill="#8884d8" label={renderLabelNamesValue} />
                <Pie data={data02} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={80} outerRadius={100} fill="#82ca9d" label={renderLabelNamesValue} /> 
  
                
                <Tooltip />
            </PieChart>
        </div>
    );
}


export default GraphPlaceholder;