//import { StatusBar } from 'expo-status-bar';
import React from 'react';
//import { render } from 'react-dom';
import { StyleSheet, Text, View, Dimensions, Button, ScrollView } from 'react-native';
//import { Responsive } from 'react-grid-layout';
//import Dash from './dashboard.js';
//import Indexed from './index.js';
//import Menubar from './Menubar.js';
import * as V from 'victory';
import { VictoryBar, VictoryChart, VictoryAxis, VictoryHistogram, VictoryTheme   } from 'victory';
import './App.css';
import GraphPlaceholder from './graph_placeholder';
import { formatJson } from './Mappingtest';
import {
  LineChart,
  BarChart,
  PieChart,
  ProgressChart,
  ContributionGraph,
  StackedBarChart
} from 'react-native-chart-kit'



export default class App extends React.Component {
  render() {
    <link rel='stylesheet' href='./node_modules/react-grid-layout/css/styles.css'></link>
    //<link rel='stylesheet' href='.App.css'></link>

    // export default function App() {
    return (
      // <div className='App'>
      //   <Menubar></Menubar>
      // </div>

      <ScrollView style={styles.scrollcontainer}>
        {/* <div >
        <Menubar />
      </div> */}
        <View style={styles.menuBar}>
          <Text style={{ color: "white" }}>Static Menu bar</Text>
        </View>
        <View style={styles.buttonBar}>

          <View style={styles.buttoncontainer} >
            <Button title="help " color="orange" style={styles.button}> </Button>
            <Button title="me " color="pink" style={styles.button} > </Button>
            <Button title="I'm" color="blue" style={styles.button}> </Button>
            <Button title=" in" color="green" style={styles.button}> </Button>
            <Button title=" react" color="yellow" style={styles.button}> </Button>
            <Button title="prison" color="purple" style={styles.button}> </Button>
          </View>

        </View>

        <View style={styles.container}>
          <View style={styles.graphbox}>

            <Text> Your Heat Use </Text>





            <VictoryChart domainPadding={1} theme={VictoryTheme.material} >

              <VictoryAxis


                dependentAxis
                tickFormat={(x) => (x)}
              />
              <VictoryAxis
                // tickValues specifies both the number of ticks and where
                // they are placed on the axis
                tickValues={formatJson}
                tickFormat={'Hourly Use'}
              />



              <VictoryBar
                data={formatJson}
                // data accessor for x values
                x="date"
                // data accessor for y values
                y="measurement"
              />

            </VictoryChart>





          </View>

          <View style={styles.graphbox}>

            <Text> Your Water Use </Text>


            <VictoryChart>
              <VictoryHistogram
                style={{ data: { fill: '#F1737F' } }}
                cornerRadius={3}
                data={formatJson}
              />
            </VictoryChart>




          </View>

        </View>
      </ScrollView>




    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    flexWrap: 'wrap',
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
    //padding:2,
  },
  menuBar: {
    height: 60,
    //minWidth: 150,
    maxWidth: Dimensions.get('window').width,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    //textColor:{color: '#ffffff'},
  },
  buttonBar: {
    height: 50,
    //minWidth: 150,
    maxWidth: Dimensions.get('window').width,
    backgroundColor: '#000055',
    justifyContent: 'space-evenly',
    alignItems: 'stretch',
    padding: 10,
    //textColor:{color: '#ffffff'},
  },
  graphbox: {
    margin: 10,
    width: Dimensions.get('window').width / 3 - 50,
    height: 300,
    backgroundColor: '#eeeeee',
    //backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',


    //padding: 30,
  },
  buttoncontainer: {
    height: 50,
    //minWidth: 150,
    maxWidth: Dimensions.get('window').width,
    backgroundColor: '#000055',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'stretch',
    justifyContent: "space-evenly",
    padding: 10,
  },
  space: {
    justifyContent: "space-evenly",
    flex: 1,
    width: 20,
    height: 20,
  },
  button: {
    justifyContent: "space-evenly",
    width: '40%',
    flex: 1,
    padding: 10
  },
  scrollcontainer: {
    flex: 1,
  },

});
