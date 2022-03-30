import React from 'react';
import { View, Dimensions, StyleSheet, Pressable, Alert } from 'react-native';
//import GraphPlaceholder from './GraphPlaceholder';
import GraphColdWater from './ColdWater';
import GraphHotWater from './HotWater';

const GraphBoxCold = () => {
    const onPressHandler = () => {
        window.alert('You should have been routed, but it isn\'t implemented yet')
    }
    return (
        <View style={styles.graphboxCold}>
            <Pressable 
                style={({ pressed }) => [
                    { opacity: pressed ? '30%' : '100%' }
                ]}
                onPress={onPressHandler}
            >


                {/* <GraphPlaceholder /> */}
                <GraphColdWater />
                {/* <GraphHotWater /> */}
            </Pressable>
        </View>
    );
}

export default GraphBoxCold;

const styles = StyleSheet.create({
    graphboxCold: {
        margin: 10,
        width: Dimensions.get('window').width / 3 - 50,
        height: 300,
        backgroundColor: '#c8d7ff',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    // test: {
    //     opacity: '100%'
    // },
})