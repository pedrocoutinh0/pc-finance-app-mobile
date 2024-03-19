import React, {useState} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FinanceTextInput} from '../components/FinanceTextInput';
import {FinanceButton} from '../components/FinanceButton';

import icon from '../assets/icon.png';
import {useAuth} from '../contexts/Auth';

export function SignInScreen() {
  const {signIn} = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');

  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={icon} />
      <FinanceTextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <FinanceTextInput
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <TouchableOpacity>
        <Text style={styles.forgot}>Forgot Password ?</Text>
      </TouchableOpacity>

      <FinanceButton title="Login" onPress={() => signIn(username, password)} />
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
    marginTop: -200,
    marginBottom: 90,
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
});
