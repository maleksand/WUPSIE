import { StatusBar } from 'expo-status-bar';
import React from 'react';
import { render } from 'react-dom';
import { StyleSheet, Text, View, Dimensions } from 'react-native';
//import Dash from './dashboard.js';
import Indexed from './index.js';

export default class App extends React.Component{
  render(){
    <link rel='stylesheet' href='./node_modules/react-grid-layout/css/styles.css'></link>
    //var dashboard = new DashBoard();

  return (
    <View style={styles.menubar}>
    {/* <View style={styles.container}> */}
      {/* <View style={styles.menubar}> */}
        {/* <DashBoard /> */}
        <Text style={{color: "white"}}>Menu bar</Text>
        {/* <Text>Open up App.js to start working on your app!</Text> */}
        {/* <StatusBar style="auto" /> */}
      </View>
    // </View>
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
    height: 70,
    minWidth: 150,
    maxWidth: Dimensions.get('window').width,
    backgroundColor: '#000000',
    justifyContent: 'center',
    alignItems: 'center',
    //textColor:{color: '#ffffff'},
  },

});
