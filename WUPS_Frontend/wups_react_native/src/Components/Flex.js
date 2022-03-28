import React from "react";
// import Styles from '../App.css'
import { StyleSheet, Text, View } from "react-native";



const Flex = () => {
    return (
        <View style={[styles.container, { flexDirection: "row" }]}>

            <View style={{ flex: 2, backgroundColor: "red" }}>
                <Text>This is where a graph will go</Text>
            </View>
            <View style={{ flex: 2, backgroundColor: "darkorange" }} >
                <Text>This is where graph 2 will go</Text>

            </View>
            <View style={{ flex: 2, backgroundColor: "green" }} >
                <Text>This is where graph 2 will go</Text>
            </View>

        </View>
    )
}
const styles = StyleSheet.create({
    container: {
        flex: 1,
        padding: 20,
    },
});
export default Flex;