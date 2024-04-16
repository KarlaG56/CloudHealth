import React from 'react';
import { TextInput, StyleSheet } from 'react-native';

const InputComponent = ({ value, onChangeText }) => {

  return (
      <TextInput
        style={styles.input}
        value={value}
        onChangeText={onChangeText}
      />
  );
};

const styles = StyleSheet.create({
  
  input: {
    width: '100%',
    height: 45,
    borderWidth: 1,
    borderColor: '#EBEBEB',
    borderRadius: 5,
    paddingHorizontal: 10,
    backgroundColor:'#EBEBEB',
    marginTop:10
  },
});

export default InputComponent;
