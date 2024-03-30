import React, { useState } from 'react';
import { View, TextInput, StyleSheet, Text, TouchableOpacity } from 'react-native';

const DateInput = () => {
  const [day, setDay] = useState('');
  const [month, setMonth] = useState('');
  const [year, setYear] = useState('');

  const handleChangeDay = (text) => {
    if (text.length <= 2) {
      setDay(text);
    }
  };

  const handleChangeMonth = (text) => {
    if (text.length <= 2) {
      setMonth(text);
    }
  };

  const handleChangeYear = (text) => {
    if (text.length <= 4) {
      setYear(text);
    }
  };

  const handleConfirm = () => {
    const formattedDate = `${day}-${month}-${year}`;
    // Aquí puedes manejar la fecha como quieras, por ejemplo, guardarla en un estado global, enviarla a un servidor, etc.
    console.log(formattedDate);
  };

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.input}
        placeholder="DD"
        keyboardType="numeric"
        maxLength={2}
        value={day}
        onChangeText={handleChangeDay}
      />
      <Text style={styles.separator}>-</Text>
      <TextInput
        style={styles.input}
        placeholder="MM"
        keyboardType="numeric"
        maxLength={2}
        value={month}
        onChangeText={handleChangeMonth}
      />
      <Text style={styles.separator}>-</Text>
      <TextInput
        style={styles.input}
        placeholder="YYYY"
        keyboardType="numeric"
        maxLength={4}
        value={year}
        onChangeText={handleChangeYear}
      />
      <TouchableOpacity style={styles.btn} onPress={handleConfirm}>
        <Text style={styles.btnText}>Confirmar</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginBottom: 20,
  },
  input: {
    width: 55,
    height: 40,
    borderWidth: 1,
    borderColor: '#D9D9D9',
    borderRadius: 5,
    paddingHorizontal: 0,
    marginHorizontal: 5,
    textAlign: 'center',
  },
  separator: {
    marginHorizontal: 5,
    fontSize: 20,
  },
  btn: {
    backgroundColor: 'blue',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
  },
  btnText: {
    color: 'white',
    fontSize: 16,
    textAlign: 'center',
  },
});

export default DateInput;
