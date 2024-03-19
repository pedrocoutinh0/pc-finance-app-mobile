import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface FinanceButtonProps extends TouchableOpacityProps {
  title: string;
}

export function FinanceButton({title, ...rest}: FinanceButtonProps) {
  return (
    <TouchableOpacity style={styles.button} {...rest}>
      <Text style={styles.buttonText}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 245,
    backgroundColor: '#117F4A',
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 23,
    marginTop: 50,
  },
  buttonText: {
    color: '#63BD6E',
    textAlign: 'center',
    fontFamily: 'Regular',
    fontSize: 16,
    fontWeight: '200',
  },
});
