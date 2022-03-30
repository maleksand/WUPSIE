import React from 'react';
import { View, Dimensions, StyleSheet, Pressable, Alert } from 'react-native';
import GraphPlaceholder from './GraphPlaceholder';
import GraphColdWater from './ColdWater';
import GraphHotWater from './HotWater';

const GraphBox = () => {
    const onPressHandler = () => {
        window.alert('You should have been routed, but it isn\'t implemented yet')
    }
    return (
        <View style={styles.graphbox}>
            <Pressable 
            style={({pressed}) => [
                {opacity: pressed? '30%':'100%'}
            ]}
            onPress={onPressHandler}
            >
            {/* <Pressable style={({pressed}) => {styles.press}} onPress={onPressHandler}> */}
            {/* <Pressable
                style={({ press }) => [
                    { opacity: press ? '30%' : '100%' },
                    styles.test
            ]}
                
                onPress ={onPressHandler}
                > */}

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
        width: Dimensions.get('window').width / 3 - 50,
        height: 300,
        backgroundColor: '#eeeeee',
        justifyContent: 'center',
        alignItems: 'center',
        padding: 30,
    },
    // test: {
    //     opacity: '100%'
    // },
})