import React from 'react';
import {TextInput, StyleSheet, TextInputProps} from 'react-native';

export function FinanceTextInput(props: TextInputProps) {
  return (
    <TextInput
      style={[styles.input]}
      placeholderTextColor={'rgba(255,255,255,0.17)'}
      textAlign="left"
      {...props}
    />
  );
}

const styles = StyleSheet.create({
  input: {
    height: 50,
    width: 245,
    backgroundColor: '#334D5C',
    color: '#1A202C',
    borderRadius: 23,
    paddingLeft: 23,
    elevation: 5,
    fontFamily: 'Regular',
    fontSize: 15,
    marginBottom: 10,
  },
});
