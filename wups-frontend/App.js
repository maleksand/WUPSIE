import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Dimensions, Modal } from 'react-native';
import { Button } from 'react-native'

//import Dash from './dashboard.js';
import Indexed from './index.js';
import Menubar from './Menubar.js';
import './App.css';

export default class App extends React.Component{
  render(){
     //<link rel='stylesheet' href='./node_modules/react-grid-layout/css/styles.css'></link>
      <link rel='stylesheet' href='.App.css'></link>
 
// export default function App() {
  return (
    // <div className='App'>
    //   <Menubar></Menubar>
    // </div>
    
    <View >
      {/* <div >
        <Menubar />
      </div> */}
      <View style={styles.menuBar}>
 
        <Text style={{color: "white"}}>Menu bar</Text>

      </View>
      <View style={styles.buttonBar}>


      

      <View style={styles.buttoncontainer} >
      <Button title="help " color="orange" style={styles.button}> </Button>   
      <Button title="me " color="pink" style={styles.button} > </Button>
      <Button title="I'm" color="blue" style={styles.button}> </Button>
      <Button title=" in" color="green" style={styles.button}> </Button>
      <Button title=" react" color="yellow" style={styles.button}> </Button>
      

      <Button title="prison" color="purple"> </Button>
      </View>

    </View>
      <View styles={styles.container}>
        <View styles={styles.graphBox}>
          
          <Text>This is where the graph go</Text>
          
        </View>
        <View styles={styles.graphBox}>
          
          <Text>This is where the 2. graph go</Text>
          
        </View>
      </View>
    </View>
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
    //justifyContent: 'center',
    //padding:2,
  },
  menuBar:{
    height: 60,
    minWidth: 150,
    maxWidth: Dimensions.get('window').width,
    backgroundColor: '#000000',
    justifyContent: 'space-evenly',
    //textColor:{color: '#ffffff'},
  },
  buttonBar:{
    height: 50,
    //minWidth: 150,
    maxWidth: Dimensions.get('window').width,
    backgroundColor: '#000055',
    justifyContent:"space-evenly",
    alignItems: 'stretch',
    
    padding:10,
    //textColor:{color: '#ffffff'},
  },
  graphBox:{
    //margin: 2,
    
    width: Dimensions.get('window').width/2 -6,
    height: 200,
    //backgroundColor: '#eeeeee',
    backgroundColor: '#ff0000',
    justifyContent:"space-evenly",
    // alignItems: 'stretch',
    //padding: 30,

  },

 

 buttoncontainer: {
  height: 50,
  //minWidth: 150,
  maxWidth: Dimensions.get('window').width,
  backgroundColor: '#000055',
    flex: 1,
    flexDirection: 'row',
    // alignItems: 'center',
    justifyContent:"space-evenly",
        padding:10,
    
  },
  space: {
    justifyContent:"space-evenly",

    flex: 1,
    width: 20,
    height: 20,
  },
  button: {
    justifyContent:"space-evenly",
    width: '40%',

    flex: 1,
    padding: 10
  },
  
});
