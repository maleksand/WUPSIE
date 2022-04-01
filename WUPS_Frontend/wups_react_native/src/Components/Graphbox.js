import React from 'react';
import { View, Dimensions, StyleSheet, Pressable} from 'react-native';
import GraphPlaceholder from './GraphPlaceholder';
//import GraphColdWater from './ColdWater';
//import GraphHotWater from './HotWater';
import PickDate from './PickDate';

const GraphBox = () => {
    const onPressHandler = () => {
        window.alert('You should have been routed, but it isn\'t implemented yet')
    }
    return (
        <View style={styles.graphbox}>
            <Pressable
                style={({ pressed }) => [
                    { opacity: pressed ? '30%' : '100%' }
                ]}
                onPress={onPressHandler}
            >
                {/* <PickDate /> */}
 
                <GraphPlaceholder />
                {/* <GraphColdWater /> */}
                {/* <GraphHotWater /> */}
            </Pressable>
        </View>
    );
}

export default GraphBox;

const styles = StyleSheet.create({
    graphbox: {
        margin: 10,
        width: Dimensions.get('window').width / 2 - 50,
        maxHeight: Dimensions.get('window').height,
        backgroundColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },

})