import { registerRootComponent } from 'expo';
import { AppRegistry, View, StyleSheet, Dimensions } from 'react-native';
import React from 'react'

import App from './App';

export default class Dash extends React.Component{
    render(){
        <link rel='stylesheet' href='./node_modules/react-grid-layout/css/styles.css'></link>
        return(
            <View>
             {/* <View style={styles.container}> */}
                {/* <View style={styles.menubar}> */}
                    <Text>Menu bar</Text>
                {/* </View> */}
            </View>
        );
    }
}

const styles = StyleSheet.create({
    menubar:{
        height: 70,
        minWidth: 150,
        maxWidth: Dimensions.get('window').width,
        backgroundColor: '#000000',
        textColor:{color: '#ffffff'}

    },
    container:{
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
    },
    box:{
        margin: 10,
        width: Dimensions.get('window').width /3 -50,
        //width: 50,
        height: 300,
        //height: Dimensions.get('window').height /2,
        justifyContent: 'center',
        alignItems: 'stretch',
        backgroundColor: '#33c1ff',
        padding: 30,
     },

});

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

AppRegistry.registerComponent('DashBoard', () => DashBoard);
AppRegistry.runApplication('DashBoard', {rootTag: document.getElementById('DashBoard')});