import React, { useState, useEffect} from "react";
import { PieChart, Pie, Tooltip } from "recharts";
import SumPrice from "../../Logic/SumPrice";

export default function UsagePieChart(props) {
    
    const sumCold = SumPrice(props.data.dataCold, "1");
    const sumHot = SumPrice(props.data.dataHot, "1")

    // const [sumCold, setSumCold] = useState()
    // const [sumHot, setSumHot] = useState()

    // useEffect(() => {
    //     async function getPrice() {
    //         let sum = await SumPrice(props.data.dataCold, "1")
    //         setSumCold(sum)
    //         //setMeterType(props.data[0].metadata.meterType)
    //     }
    //     getPrice()
    // }, )

    // useEffect(() => {
    //     async function getPrice() {
    //         let sum = await SumPrice(props.data.dataHot, "1")
    //         setSumHot(sum)
    //         //setMeterType(props.data[0].metadata.meterType)
    //     }
    //     getPrice()
    // }, )
    console.log([sumCold, sumHot])

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
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} fontSize={10} textAnchor={textAnchor} fill="#333">{`${name}`+': '+`${value}`}</text>
            <text x={ex + (cos >= 0 ? 1 : -1) * 12} y={ey} dy={18} fontSize={10} textAnchor={textAnchor} fill="#999">
              {`(Rate ${(percent * 100).toFixed(2)}%)`}
            </text>
          </g>
        );
      };

    return (
        <div>
            <PieChart width={400} height={300} backgroundColor="yellow">
                <Pie data={[sumCold, sumHot]} dataKey="value" nameKey="name" cx="50%" cy="50%" outerRadius={70} fill="#8884d8" /*label={renderLabelNamesValue}*/ />
                {/* <Pie data={props.data.dataHot} dataKey="value" nameKey="name" cx="50%" cy="50%" innerRadius={80} outerRadius={100} fill="#82ca9d" label={renderLabelNamesValue} />  */}
  
                
                <Tooltip />
            </PieChart>
        </div>

    )
} 