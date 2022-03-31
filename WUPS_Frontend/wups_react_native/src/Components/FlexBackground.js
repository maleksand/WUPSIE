import React from "react";
// import Styles from '../App.css'
import { StyleSheet, Text, View } from "react-native";
import Beers from './Beers';
import Overview from "./Overview";



const FlexBackGround = () => {
    return (
        <View style={styles.container}>
{/* 
            <View style={{ flex: 2, backgroundColor: "red" }}>
                <Text>This is where a graph will go</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: "darkorange" }} >
                <Text>This is where graph 2 will go</Text>

            </View>
            <View style={{ flex: 2, backgroundColor: "green" }} >
                <Beers/>
            </View> */}
            {/* <Overview /> */}

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap',
        backgroundColor: '#fff',
        alignItems: 'center',
        justifyContent: 'center',
        //padding: 20,
    },
});
export default FlexBackGround;
