import React from 'react';
import { View, Dimensions, StyleSheet, Pressable } from 'react-native';
import GraphColdWater from './ColdWater';
import PickDate from './PickDate';

const GraphBoxCold = () => {
    const onPressHandler = () => {
        window.alert('You should have been routed, but it isn\'t implemented yet')
    }
    return (
        <View style={styles.graphboxCold}>
            <PickDate />
            <Pressable
                style={({ pressed }) => [
                    { opacity: pressed ? '30%' : '100%' }
                ]}
                onPress={onPressHandler}
            >
                <GraphColdWater />
            </Pressable>
        </View>
    );
}

export default GraphBoxCold;

const styles = StyleSheet.create({
    graphboxCold: {
        margin: 10,
        display: 'flex',
        width: Dimensions.get('window').width / 2 - 50,
        maxHeight: Dimensions.get('window').height,
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
        borderColor: '#e5d9c5',
        borderWidth: 1,
    },
})