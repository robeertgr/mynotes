import React, {useState} from 'react';
import { View, TouchableOpacity, StyleSheet, Text } from 'react-native'
import DateTimePicker from '@react-native-community/datetimepicker'

function DateTime() {
  const [date, setDate] = useState(new Date())
  const [show, setShow] = useState(false)
  const onChange = (event, selectedDate) => {
    setDate(selectedDate)
    setShow(false)
    alert(selectedDate)
  }
  const showDatepicker = () => {
    setShow(true)
  }

  return (
    <View>
      <View>
        <TouchableOpacity onPress={showDatepicker}  style={styles.btnDateTime}> 
          <Text style={styles.txtDateTime}>dd/mm/yyyy</Text>
        </TouchableOpacity>
      </View>
      
      {show && (
        <DateTimePicker
        testId="dateTimePicker"
        value={date}
        mode={'date'}
        is24Hour={true}
        display="spinner"
        onChange={onChange} 
        />
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  btnDateTime:{
    backgroundColor: '#FFF',
    padding: 10,
    borderWidth: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  txtDateTime:{
    fontSize: 20

  }

})

export default DateTime