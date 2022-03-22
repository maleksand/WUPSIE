import { registerRootComponent } from 'expo';

import App from './App';
import {Text, View, AppRegistry} from 'react-native';
import React from 'react';

export default class Indexed extends React.Component {

    render() {
        <link rel='stylesheet' href='./node_modules/react-grid-layout/css/styles.css'></link>
        //<link rel='stylesheet' href='./node_modules/react-resizable/css/styles.css'></link>
           
        return(
           //<ScrollView style={styles.scrollContainer}>
             //<View style={styles.container}>
                // <View style={styles.box}>
               <View>
                 {/* <div>
                   <link rel="stylesheet" href="//cdn.jsdelivr.net/chartist.js/latest/chartist.min.css"></link>
                   <ChartistGraph data={data} options={options} type={type} />
                 </div> */}
                 <Text>Box 1</Text>
               </View>
        )
    }
}

// registerRootComponent calls AppRegistry.registerComponent('main', () => App);
// It also ensures that whether you load the app in Expo Go or in a native build,
// the environment is set up appropriately
registerRootComponent(App);

AppRegistry.registerComponent('Indexed', () => Indexed);
AppRegistry.runApplication('Indexed', {rootTag: document.getElementById('Indexed')});
