import React, { useState, useEffect } from "react";
import { PieChart, Pie, Tooltip, Legend } from "recharts";
import SumPrice from "../../Logic/SumPrice";

export default function UsagePieChart(props) {

    const [sumCold, setSumCold] = useState()
    const [sumHot, setSumHot] = useState()
    const [meterTypeHot, setMeterTypeHot] = useState([])
    const [meterTypeCold, setMeterTypeCold] = useState([])

    useEffect(() => {
        async function getPrice() {
            let sum = await SumPrice(props.data.dataCold, "1")
            setSumCold(sum)
            setMeterTypeCold(props.data.dataCold[0].metadata.meterType)
        }
        getPrice()
    }, [props])

    useEffect(() => {
        async function getPrice() {
            let sum = await SumPrice(props.data.dataHot, "1")
            setSumHot(sum)
            setMeterTypeHot(props.data.dataHot[0].metadata.meterType)
        }
        getPrice()
    }, [props])

    const [meterType, setMeterType] = useState()
    
    useEffect(()=> {
        setMeterType([meterTypeCold, meterTypeHot])
    }, [meterTypeCold, meterTypeHot])

    useEffect(() => {
        console.log(meterType)
        // console.log(sumCold)
        // console.log(sumHot)
    }, [meterType])
    
 
    const renderLabelNamesValue = (props) => {
        const RADIAN = Math.PI / 180;
        const { cx, cy, midAngle, outerRadius, fill, percent, meterType } = props;
        const sin = Math.sin(-RADIAN * midAngle);
        const cos = Math.cos(-RADIAN * midAngle);
        const sx = cx + (outerRadius + 10) * cos;
        const sy = cy + (outerRadius + 10) * sin;
        const mx = cx + (outerRadius + 30) * cos;
        const my = cy + (outerRadius + 30) * sin;
        const ex = mx + (cos >= 0 ? 1 : -1) * 22;
        const ey = my;
        const textAnchor = cos >= 0 ? 'start' : 'end';
        const data = [sumCold, sumHot]

        return (
            <g>
                <path d={`M${sx},${sy}L${mx},${my}L${ex},${ey}`} stroke={fill} fill="none" />
                <circle cx={ex} cy={ey} r={2} fill={fill} stroke="none" />
                <text
                    x={ex + (cos >= 0 ? 1 : -1) * 12}
                    y={ey}
                    fontSize={10}
                    textAnchor={textAnchor}
                    fill="#333">{`${sumCold.dataCold.metadata.meterType}`}
                    {/* {`${meterType}` + ': '/*+`${value}`*/}
                </text>
                <text
                    x={ex + (cos >= 0 ? 1 : -1) * 12}
                    y={ey}
                    dy={18}
                    fontSize={10}
                    textAnchor={textAnchor}
                    fill="#999"
                >
                    {`(Rate ${(percent * 100).toFixed(2)}%)`}
                </text>
            </g>
        );
    };

    return (
        <div>
            <PieChart width={900} height={600} >
                <Pie
                    data={[sumCold, sumHot]}
                    dataKey="sumPrice"
                    nameKey="name"
                    cx="50%"
                    cy="50%"
                    outerRadius={70}
                    fill="#8884d8"
                    label
                    //label={renderLabelNamesValue}
                />

                <Tooltip />
                <Legend />
            </PieChart>
            {/* <p>{meterTypeCold} {meterTypeHot} {meterType}</p> */}
            <p>{meterType}</p>
        </div>

    )
} 