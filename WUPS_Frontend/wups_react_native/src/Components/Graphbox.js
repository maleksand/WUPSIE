import React from 'react';
import {View, Dimensions, StyleSheet} from 'react-native';
import GraphPlaceholder from './GraphPlaceholder';

const GraphBox = () => {
    return(
        <View style={styles.graphbox}>
            <GraphPlaceholder />
            
            {/* <Text>Yo, this is wacked</Text> */}
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
})