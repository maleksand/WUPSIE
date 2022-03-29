import {VictoryAxis, VictoryLabel } from "victory";


export const victoryChartsAxis = (
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
)