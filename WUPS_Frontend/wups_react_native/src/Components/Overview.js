import React from 'react';
import {View, StyleSheet} from 'react-native';
import GraphBox from './Graphbox';
import GraphBoxCold from './GraphBoxCold';
import GraphBoxHot from './GraphBoxHot';

const Overview = () => {
    return(
    
        <View style={styles.container}>
            <GraphBox />
            <GraphBoxCold />
            <GraphBox />
            <GraphBoxHot />
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
