import React from 'react';
//import menubar from './App.css';
import {Text, View, Dimensions, StyleSheet} from 'react-native';

function Menubar() {
    return(
        
        <View styles={styles.menuBar}>
            
                  {/* <View > */}
 
                    <Text >Menu bar</Text>

                    
                    <h3>Hello Satan, my old friend</h3>
            <ul>
                Where is icon?
            </ul> 
            {/* </View> */}
        </View>


    );

}
const styles = StyleSheet.create({
    menuBar:{
      height: 60,
      minWidth: 150,
      maxWidth: Dimensions.get('window').width,
      backgroundColor: '#000000',
      justifyContent: 'center',
      alignItems: 'center',
      fontFamily:{color: '#ffffff'},
    },
})

export default Menubar;
