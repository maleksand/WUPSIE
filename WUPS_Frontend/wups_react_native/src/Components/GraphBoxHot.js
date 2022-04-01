import React from 'react';
import { View, Dimensions, StyleSheet, Pressable } from 'react-native';
import GraphHotWater from './HotWater';
import PickDate from './PickDate';

const GraphBoxHot = () => {
    const onPressHandler = () => {
        window.alert('You should have been routed, but it isn\'t implemented yet')
    }
    return (
        <View style={styles.graphboxHot}>
            <PickDate />
            <Pressable
                style={({ pressed }) => [
                    { opacity: pressed ? '30%' : '100%' }
                ]}
                onPress={onPressHandler}
            >
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
        width: Dimensions.get('window').width / 2 - 50,
        maxHeight: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderColor: '#e5d9c5',
        borderWidth: 1,
    },

})