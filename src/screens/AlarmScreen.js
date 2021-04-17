import React, {useState} from 'react';
import {View, Button, Platform,StyleSheet} from 'react-native';
import { Text } from "react-native-elements";
import DateTimePicker from '@react-native-community/datetimepicker';
import * as Notifications from 'expo-notifications';
const AlarmScreen = () => {
  const [date, setDate] = useState(new Date());
  const [mode, setMode] = useState('date');
  const [show, setShow] = useState(false);

  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setShow(preValue=>!preValue);
    setDate(currentDate);
    console.log(event);
    
  };



  const showTimepicker = () => {
    setShow(preValue=>!preValue);
  };

  return (
    <View>
      <View>
        <Button onPress={showTimepicker} title="Show time picker!" />
      </View>
      {show && (
        <DateTimePicker
          testID="dateTimePicker"
          value={date}
          mode="time"
          is24Hour={true}
          display="default"
          onChange={onChange}
        />
      )}
    </View>
  );
};
const styles = StyleSheet.create({
  timeStyle: {
    fontSize: 30,
  },
});
export default AlarmScreen;