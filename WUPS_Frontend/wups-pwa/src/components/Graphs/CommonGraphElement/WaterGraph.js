import { useCallback, useState } from 'react';
import '../../../App.css';
import { BarChart, CartesianGrid, XAxis, YAxis, Bar, Tooltip, Label, Legend } from 'recharts';



const WaterGraph = (props) => {
    const [data, setData] = useState(props.device?.subArray) // ?. optional chaining. instead of trowing an error when subarray does not exist, return undefined.
    const [parents, setParents] = useState([props.device])
    const [isButtonDisabled, setIsButtonDisabled] = useState(true)

    const onPressHandler = useCallback((entry, index) => { // useCallback should memorize things, whcih means less rerenderes. I don't understand it that well.
        if (entry?.subArray) {
            const newParents = Array.from(parents)
            newParents.push(entry)
            setParents(newParents)
            setIsButtonDisabled(false)
            setData(entry.subArray)
        }
    }, [setData, setParents, setIsButtonDisabled, parents])

    const backHandler = useCallback(() => {
        const newParents = Array.from(parents)
        const aParent = newParents.pop()
        if (aParent.description === "year") setIsButtonDisabled(true)
        setParents(newParents)
        setData(newParents[newParents.length - 1].subArray) // get the last element of newParents array
    }, [setData, setParents, setIsButtonDisabled, parents])

    function isDayOrMeasurement() {
        return data[0].description === "day" || data[0].description === "measurement"
    }

    return (
        <div>
            <h1 align="center">{`${parents[parents.length -1 ].description}: ${parents[parents.length -1 ].name}`}</h1>
            <span style={{ marginLeft: 70 }} /> {/* pushing the button to the side */}
            <button type="button" onClick={backHandler} disabled={isButtonDisabled}>Back</button>
            <BarChart
                height={400}
                width={600}
                data={data}
                margin={{
                    top: 0,
                    right: isDayOrMeasurement() ? 15 : 0,
                    left: 10,
                    bottom: isDayOrMeasurement() ? 40 : 10
                }}
            >
                <CartesianGrid strokeDasharray="3 3" />
                <XAxis
                    dataKey='name'
                    interval={0}
                    angle={isDayOrMeasurement() ? 45 : 0}
                    textAnchor={isDayOrMeasurement() ? 'inherent' : "middle"}
                    fontSize={12}
                    onClick={onPressHandler}
                >
                    <Label
                        value={data[0].description}
                        position="bottom"
                        offset={isDayOrMeasurement() ? 25 : -5}
                    />
                </XAxis>

                <YAxis
                    type="number"
                    domain={[0, "auto"]}
                    allowDataOverflow={true}
                >
                    <Label
                        value={'Cubic meters (m3)'}
                        angle={-90}
                    />
                </YAxis>

                <Tooltip />
                <Legend
                    verticalAlign='top'
                    payload={[{
                        value: props.device.meterType,
                        type: 'rect',
                        color: props.device.meterType === "cold water" ? "#6A7FDB" : "#A93F55"
                    }]}
                />
                <Bar dataKey="usageSum" fill={props.device.meterType === "cold water" ? "#6A7FDB" : "#A93F55"} onClick={onPressHandler}/> {/* onclick reference: https://codesandbox.io/s/bar-chart-with-customized-event-4k1bd?file=/src/App.tsx:789-800 */}
            </BarChart>
        </div>
    );
}

export default WaterGraph;