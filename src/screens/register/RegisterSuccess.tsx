import React from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {FinanceButton} from '../../components/geral/FinanceButton';

import check from '../../assets/check.png';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootAppStackParamList} from '../../routes/@types/rootAppStackParamList';

type Props = NativeStackScreenProps<RootAppStackParamList, 'RegisterSuccess'>;

export function RegisterSuccess({navigation}: Props) {
  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={check} />
      <Text style={styles.successTitle}>Successfully Registered</Text>
      <View style={styles.containerText}>
        <Text style={styles.successText}>
          Registration complete! Take control of your finances with ease using
          our app.
        </Text>
      </View>

      <FinanceButton
        title="Go to Login"
        onPress={() => navigation.navigate('SignIn')}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#1A202C',
  },
  image: {
    width: 130,
    height: 130,
    marginTop: -100,
    marginBottom: 40,
  },
  forgot: {
    color: 'rgba(255,255,255,0.17)',
    fontFamily: 'Regular',
    fontSize: 11,
    marginLeft: 130,
    textShadowColor: '#000',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 0,
      height: 0.8,
    },
  },
  successTitle: {
    color: '#117F4A',
    fontFamily: 'Regular',
    fontSize: 25,
    fontWeight: 'bold',
    marginBottom: 10,
    textShadowColor: '#000',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 0,
      height: 0.8,
    },
  },
  successText: {
    color: '#117F4A',
    fontFamily: 'Regular',
    fontSize: 17,
    fontWeight: 'bold',
    textShadowColor: '#000',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 0,
      height: 0.8,
    },
  },
  containerText: {
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: '#334D5C',
    borderRadius: 8,
    marginTop: 10,
    width: 250,
    height: 130,
  },
});
