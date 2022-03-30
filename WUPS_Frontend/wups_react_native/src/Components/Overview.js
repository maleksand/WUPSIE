import React from 'react';
import {View, StyleSheet} from 'react-native';
import GraphBox from './Graphbox';

const Overview = () => {
    return(
    
        <View style={styles.container}>
            <GraphBox />
            <GraphBox />
            <GraphBox />
            <GraphBox />
            <GraphBox />

        </View>

    );
}

export default Overview;

const styles = StyleSheet.create({
    container: {
        display: 'flex',
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        //justifyContent: 'center',
        //backgroundColor: '#eeeeee',
        padding: 20,

    },
});
