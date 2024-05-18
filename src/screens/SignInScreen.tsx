import React, {useEffect, useState} from 'react';
import {View, Image, Text, TouchableOpacity, StyleSheet} from 'react-native';
import {FinanceTextInput} from '../components/geral/FinanceTextInput';
import {FinanceButton} from '../components/geral/FinanceButton';

import icon from '../assets/icon.png';
import {useAuth} from '../contexts/Auth';
import {FinanceBoxFailed} from '../components/geral/FinanceBoxFailed';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootAppStackParamList} from '../routes/@types/rootAppStackParamList';

type Props = NativeStackScreenProps<RootAppStackParamList, 'SignIn'>;

export function SignInScreen({navigation}: Props) {
  const {signIn} = useAuth();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);

  useEffect(() => {
    if (username && password) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [username, password]);

  const handleSignIn = async () => {
    try {
      await signIn(username, password);
    } catch (e) {
      setError('Credenciais Incorretas.');
    }
  };

  const handleConfirm = () => {
    setError(null as never);
  };

  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={icon} />
      <Text style={styles.signIn}>Sign In</Text>
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

      <FinanceButton
        title="Login"
        onPress={handleSignIn}
        enabled={isButtonEnabled}
      />

      {error && <FinanceBoxFailed message={error} onConfirm={handleConfirm} />}

      <View style={styles.registerContainer}>
        <Text style={styles.registerText}>Don't have an account? </Text>
        <TouchableOpacity onPress={() => navigation.navigate('RegisterScreen')}>
          <Text style={styles.registerClickable}>Register Here</Text>
        </TouchableOpacity>
      </View>
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
    marginBottom: 70,
  },
  signIn: {
    color: '#117F4A',
    fontFamily: 'Regular',
    fontSize: 25,
    fontWeight: 'bold',
    marginLeft: -140,
    marginBottom: 10,
    textShadowColor: '#000',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 0,
      height: 0.8,
    },
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
  registerContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    paddingTop: 20,
  },
  registerText: {
    color: 'rgba(255,255,255,0.17)',
    fontFamily: 'Regular',
    fontSize: 11,
    textShadowColor: '#000',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 0,
      height: 0.8,
    },
  },
  registerClickable: {
    color: '#117F4A',
    fontFamily: 'Regular',
    fontSize: 11,
    textShadowColor: '#000',
    textShadowRadius: 1,
    textShadowOffset: {
      width: 0,
      height: 0.8,
    },
  },
});
