import "../../App.css"
import { PieChart, Pie, Cell, LabelList } from "recharts"
import { useState, useCallback } from "react"
import { DataContext } from "../../App"

function valueLabelFormatter(label) {
    return label += " m3"
}

export default function ExamplePieChart(props) {
    
    const [data, setData] = useState(props.data)
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)
    
    const onPressHandler = useCallback(()=>{
        return console.log("testing pie slice click")
    }, [])
    const backHandler = useCallback(() => {
        return "testing back handler"
    }, [])
    
    return (
        <div style={{ width: "100%" }}>
            <h1>This is your "pizza" chart of usage</h1>
                <button type="button" onClick={backHandler} disabled={isButtonDisabled}>Back</button>
            <PieChart width={600} height={400}>
                <Pie
                    dataKey="usageSum"
                    data={data}
                    fill="#8884d8"
                >
                    {data.map((entry, index) => (
                        <Cell key={`cell-${entry.id}`} fill={entry.meterType === "cold water" ? "#6A7FDB" : "#A93F55"} onClick={onPressHandler} />
                    ))}
                    <LabelList dataKey="meterType" position="outside" fill="black" stroke="" offset={30}/>
                    <LabelList dataKey="usageSum" position="inside" fill="white" stroke="" formatter={valueLabelFormatter} onClick={onPressHandler}/>
                </Pie>
            </PieChart>
        </div>
    )
}
const data01 = [
    {
      "name": "Group A",
      "value": 400
    },
    {
      "name": "Group B",
      "value": 300
    },
    {
      "name": "Group C",
      "value": 300
    },
    {
      "name": "Group D",
      "value": 200
    },
    {
      "name": "Group E",
      "value": 278
    },
    {
      "name": "Group F",
      "value": 189
    }
  ];
  const data02 = [
    {
      "name": "Group A",
      "value": 2400
    },
    {
      "name": "Group B",
      "value": 4567
    },
    {
      "name": "Group C",
      "value": 1398
    },
    {
      "name": "Group D",
      "value": 9800
    },
    {
      "name": "Group E",
      "value": 3908
    },
    {
      "name": "Group F",
      "value": 4800
    }
  ];