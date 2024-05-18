import React from 'react';
import {
  TouchableOpacity,
  Text,
  StyleSheet,
  TouchableOpacityProps,
} from 'react-native';

interface FinanceButtonProps extends TouchableOpacityProps {
  title: string;
  enabled?: boolean; // Propriedade para indicar se o botão está habilitado
}

export function FinanceButton({
  title,
  enabled = true,
  ...rest
}: FinanceButtonProps) {
  const buttonStyles = enabled ? styles.buttonEnabled : styles.buttonDisabled;
  const buttonTextStyles = enabled
    ? styles.buttonTextEnabled
    : styles.buttonTextDisabled;

  return (
    <TouchableOpacity
      style={[styles.button, buttonStyles]}
      disabled={!enabled}
      {...rest}>
      <Text style={[styles.buttonText, buttonTextStyles]}>{title}</Text>
    </TouchableOpacity>
  );
}

const styles = StyleSheet.create({
  button: {
    height: 50,
    width: 245,
    paddingVertical: 12,
    paddingHorizontal: 20,
    borderRadius: 23,
    marginTop: 50,
  },
  buttonEnabled: {
    backgroundColor: '#117F4A',
  },
  buttonDisabled: {
    backgroundColor: 'rgba(17, 127, 74, 0.3)',
  },
  buttonText: {
    color: '#63BD6E',
    textAlign: 'center',
    fontFamily: 'Regular',
    fontSize: 16,
    fontWeight: '200',
  },
  buttonTextEnabled: {
    color: '#63BD6E',
  },
  buttonTextDisabled: {
    color: 'rgba(99, 189, 110, 0.3)',
  },
});
