import React from "react";
import { View, StyleSheet, TextInput, Pressable, Button, Text, Dimensions } from 'react-native';

const DateSubmitButton = () => {

    return (

        <View style={styles.button}>

            <Text>Submit dates</Text>

        </View>

    );
};

const styles = StyleSheet.create({

    button: {
        height: 30,
        //padding: 5,
        margin: 10,
        width: 100,
        alignItems: "center",
        justifyContent: 'center',
        backgroundColor: '#aaaaaa',
        borderColor: '#000000',
        borderWidth: 1,

    },

});

export default DateSubmitButton;