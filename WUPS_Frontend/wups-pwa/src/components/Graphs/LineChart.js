import { CartesianGrid, LineChart, XAxis, YAxis, Line, Tooltip, Legend } from 'recharts';
import Logic from './Logic';



function LineChartRender(props) {
    
    //rearrange the data from props

    //method that formats in real time

    return (
        <LineChart style={{padding: 20}} width={600} height={400} data={props.data}>
            <CartesianGrid/>
            <XAxis dataKey="timestamp.$date" tickFormatter={(tick) => Logic.formatDateDayMonYeaHouMin(tick)}/>
            <Tooltip/>
            <Legend/>
            <YAxis label={{ value: 'Temperature', angle: -90, position: 'inside' }} type="number" domain={['auto', 'auto']}/>
            <Line type="monotone" dataKey="T_Kit" stroke="#8884d8" dot={false} strokeWidth={3}/>
            <Line type="monotone" dataKey="T_Liv" stroke="#53FF33" dot={false} strokeWidth={3}/>
            <Line type="monotone" dataKey="T_Bat" stroke="#FFC300" dot={false} strokeWidth={3}/>
            <Line type="monotone" dataKey="T_Bed" stroke="#581845" dot={false} strokeWidth={3}/>
        </LineChart>
    )
}


export default LineChartRender;
