import React, { useState } from 'react';
import { View, TextInput, StyleSheet } from 'react-native';

const InputComponent = () => {
  const [text, setText] = useState('');

  return (
      <TextInput
        style={styles.input}
        onChangeText={setText}
        value={text}
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
