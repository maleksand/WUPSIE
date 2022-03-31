import React, { useState } from "react";
import { View, StyleSheet, TextInput, Pressable, Button, Text, Dimensions } from 'react-native';
//import moment from "moment";
//import DateRangePicker from 'react-native-daterange-picker';

const PickDate = () => {

  // const UselessTextInput = () => {
  //   const [text, onChangeText] = React.useState("Useless Text");
  //       const [number, onChangeNumber] = React.useState(null);

  const [date, setDate] = useState('');
  const [isDatePickerVisible, setDatePickerVisibility] = useState(false);

  const showDatePicker = () => {
    setDatePickerVisibility(true);
  };

  const hideDatePicker = () => {
    setDatePickerVisibility(false);
  };

  const handleConfirm = (date) => {
    setDate(date)
    console.warn("A date has been picked: ", date);
    hideDatePicker();
  };

  const getDate = () => {
    let tempDate = date.toString().split(' ');
    return date !== ''
      ? `${tempDate[0]} ${tempDate[1]} ${tempDate[2]} ${tempDate[3]}`
      : '';
  }

  return (



    <View style={styles.dateContainer}>
      
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={getDate()}
        placeholder="Pick a Start date..."
      //keyboardType="numeric"
      />
      <TextInput
        style={styles.input}
        // onChangeText={onChangeNumber}
        // value={getDate()}
        placeholder="Pick an End date..."
      //keyboardType="numeric"
      />
      <View style={styles.button}>
      {/* <Pressable
        style={({ pressed }) => [
          { opacity: pressed ? '30%' : '100%' } 
        ]} 
        onPress={window.alert('Buttons must do something')}> */}
          <Text>Submit dates</Text>
      {/* </Pressable> */}
      </View>
      {/* <Button onPress={window.alert('Buttons must do something')} title="Set Date" /> */}
        
      {/* <Button onPress={showDatePicker} title="Set Date" /> */}
      {/* <DateTimePickerModal
        isVisible={isDatePickerVisible}
        mode="date"
        onConfirm={handleConfirm}
        onCancel={hideDatePicker}
      /> */}
      {/* <Text>{date.toString()}</Text> */}
      
    </View>
  );
};

const styles = StyleSheet.create({
  input: {
    height: 30,
    margin: 10,
    borderWidth: 1,
    padding: 10,
  },
  dateContainer: {
    flex: 1,
    flexDirection: "row",
    //flexWrap: 'wrap',
    maxWidth: Dimensions.get('window').width,
  },
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
// }

export default PickDate;