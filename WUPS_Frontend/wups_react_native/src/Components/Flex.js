import React from "react";
// import Styles from '../App.css'
import { Text, View } from "react-native";
// import Beers from './Beers';
import styles from "../styles"



const Flex = () => {
    return (
        <View style={[styles.container1, { flexDirection: "row" }]}>

            <View style={{ flex: 1, backgroundColor: "red" }}>
                <Text>This is where a graph will go</Text>
            </View>
            <View style={{ flex: 1, backgroundColor: "darkorange" }} >
                <Text>This is where graph 2 will go</Text>

            </View>
            <View style={{ flex: 1, backgroundColor: "green" }} >
                <Text>This is where graph 3 will go</Text>
            </View>

        </View>
    )
}
// const styles = StyleSheet.create({
//     container: {
//         flex: 1,
//         padding: 20,
//         width: "100%"
//     },
// });
export default Flex;