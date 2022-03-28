import React from "react";
import { StyleSheet, View } from "react-native";
// import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from "victory";
import { VictoryBar, VictoryChart, VictoryTheme, VictoryAxis } from "victory-native";

import { formatJson } from "./Mappingtest";

const data = formatJson;

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <VictoryChart 
        width={350} 
        theme={VictoryTheme.material} 
        
        >
          {/* <VictoryAxis tickLabelComponent={<VictoryLabel angle={-45} y={350} />} /> */}

          <VictoryBar 
          data={data} 
          x="date" 
          y="measurement"
          />

          
          
        </VictoryChart>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#f5fcff",

  }
});