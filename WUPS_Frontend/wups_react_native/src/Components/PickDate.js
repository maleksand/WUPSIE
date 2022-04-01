import React, {useState} from "react";
import { View, StyleSheet, TextInput, Pressable, Button, Text, Dimensions } from 'react-native';
import DateSubmitButton from './DateSubmitButton';


const PickDate = () => {
  
  const [startDate, setStartDate] = useState('')
  const [endDate, setEndDate] = useState('')

  const onPressHandler = () => {
    window.alert('Date span selected: ' + startDate + ' ' + endDate)
    //console.log(startDate)
    //console.log(endDate)
  }
  
  return (

    <View style={styles.dateContainer}>
      <Text style={styles.text}> Please select a date range from</Text>

      <TextInput
        style={styles.input}
        onChangeText={newDate => setStartDate(newDate)}
        placeholder="Set a Start date..."
      />
      <Text style={styles.text}>to</Text>
      <TextInput
        onChangeText={newDate => setEndDate(newDate)}
        style={styles.input}
        placeholder="Set an End date..."
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
    height: 20,
    margin: 10,
    borderWidth: 1,
    padding: 10,
    backgroundColor: '#fff',
  },
  dateContainer: {
    flex: 1,
    flexDirection: "row",
    maxWidth: Dimensions.get('window').width,
    alignItems: 'stretch',
  },
  text:{
    color: 'black',
    margin: 10,
    
  },

});

export default PickDate;