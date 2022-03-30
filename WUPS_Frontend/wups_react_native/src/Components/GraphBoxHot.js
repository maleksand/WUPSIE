import React from 'react';
import { View, Dimensions, StyleSheet, Pressable, Alert } from 'react-native';
//import GraphPlaceholder from './GraphPlaceholder';
//import GraphColdWater from './ColdWater';
import GraphHotWater from './HotWater';

const GraphBoxHot = () => {
    const onPressHandler = () => {
        window.alert('You should have been routed, but it isn\'t implemented yet')
    }
    return (
        <View style={styles.graphboxHot}>
            <Pressable
                style={({ pressed }) => [
                    { opacity: pressed ? '30%' : '100%' }
                ]}
                onPress={onPressHandler}
            >

                {/* <GraphPlaceholder /> */}
                {/* <GraphColdWater /> */}
                <GraphHotWater />
            </Pressable>
        </View>
    );
}

export default GraphBoxHot;

const styles = StyleSheet.create({
    graphboxHot: {
        display: 'flex',
        margin: 10,
        width: Dimensions.get('window').width / 3 - 50,
        maxHeight: Dimensions.get('window').height,
        //height: 300,
        backgroundColor: '#aaaaaa',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },

})