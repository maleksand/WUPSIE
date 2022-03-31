import React from "react";
import { View, StyleSheet, TextInput, Pressable, Button, Text, Dimensions } from 'react-native';
import DateSubmitButton from './DateSubmitButton';

const PickDate = () => {
  const onPressHandler = () => {
    window.alert('Buttons must do something')
  }

  return (

    <View style={styles.dateContainer}>

      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={getDate()}
        placeholder="Pick a Start date..."
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={getDate()}
        placeholder="Pick an End date..."
      />
      <View>
        <Pressable
          style={({ pressed }) => [
            { opacity: pressed ? '30%' : '100%' }
          ]}
          onPress={onPressHandler}>
          <DateSubmitButton />
        </Pressable>
      </View>

    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  dateContainer: {
    flex: 1,
    flexDirection: "row",
    maxWidth: Dimensions.get('window').width,
  },

});

export default PickDate;