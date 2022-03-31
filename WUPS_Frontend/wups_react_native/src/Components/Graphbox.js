import React from 'react';
import { View, Dimensions, StyleSheet, Pressable, Modal} from 'react-native';
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
            {/* <Pressable
                style={({ pressed }) => [
                    { opacity: pressed ? '30%' : '100%' }
                ]}
                onPress={onPressHandler}
            > */}
                {/* <Modal> */}
                <PickDate />
                {/* </Modal> */}
                {/* <GraphPlaceholder /> */}
                {/* <GraphColdWater /> */}
                {/* <GraphHotWater /> */}
            {/* </Pressable> */}
        </View>
    );
}

export default GraphBox;

const styles = StyleSheet.create({
    graphbox: {
        // display: 'flex',
        // flexDirection: 'row',
        margin: 10,
        width: Dimensions.get('window').width / 3 - 50,
        maxHeight: Dimensions.get('window').height,
        //height: 300,
        backgroundColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 10,
    },

})