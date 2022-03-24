import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
//import Dash from './dashboard.js';
import Indexed from './index.js';

export default class App extends React.Component{
  render(){
    <link rel='stylesheet' href='./node_modules/react-grid-layout/css/styles.css'></link>
 

  return (
    <View>
      <View style={styles.menubar}>
 
        <Text style={{color: "white"}}>Menu bar</Text>

      </View>
      <View style={styles.buttonbar}>
        <Text style={{color:'yellow'}}>This where our buttons go</Text>

      </View>
    </View>
    // </View>
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
  },
  menubar:{
    height: 60,
    minWidth: 150,
    maxWidth: Dimensions.get('window').width,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    //textColor:{color: '#ffffff'},
  },
  buttonbar:{
    height: 60,
    //minWidth: 150,
    maxWidth: Dimensions.get('window').width,
    backgroundColor: '#000055',
    justifyContent: 'center',
    alignItems: 'center',
    //textColor:{color: '#ffffff'},
  },

});
