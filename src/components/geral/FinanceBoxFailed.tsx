import React from 'react';
import {View, Text, TouchableOpacity, StyleSheet, Image} from 'react-native';
import closeButton from '../../assets/closeButton.png';

interface FinanceBoxFailedProps {
  message: string;
  onConfirm: () => void;
}

export function FinanceBoxFailed({message, onConfirm}: FinanceBoxFailedProps) {
  return (
    <View style={styles.container}>
      <View style={styles.overlay}></View>
      <View style={styles.content}>
        <Image
          style={styles.closeImage}
          resizeMode="contain"
          source={closeButton}
        />
        <Text style={styles.message}>Ops !!</Text>
        <Text style={styles.messagePrincipal}>{message}</Text>
        <TouchableOpacity style={styles.buttonConfirm} onPress={onConfirm}>
          <Text style={styles.buttonText}>Tente Novamente</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    ...StyleSheet.absoluteFillObject,
    justifyContent: 'center',
    alignItems: 'center',
  },
  overlay: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: 'rgba(0, 0, 0, 0.5)', // cor de fundo com transparência
  },
  content: {
    alignItems: 'center',
    width: 240,
    backgroundColor: '#334D5C',
    padding: 13,
    borderRadius: 10,
    elevation: 5,
    zIndex: 1, // garante que o conteúdo apareça sobre o fundo fosco
  },
  closeImage: {
    marginTop: -15,
    width: 150,
    height: 150,
  },
  message: {color: '#1A202C', fontSize: 30, marginTop: -30},
  messagePrincipal: {
    paddingTop: 15,
    color: '#1A202C',
    marginBottom: 20,
    fontSize: 16,
  },
  buttonConfirm: {
    backgroundColor: '#EF6666',
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 20,
  },
  buttonText: {
    color: '#1A202C',
    fontWeight: 'bold',
  },
});
