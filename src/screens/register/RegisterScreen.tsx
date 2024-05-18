import React, {useEffect, useState} from 'react';
import {View, Image, StyleSheet, Text} from 'react-native';
import {FinanceTextInput} from '../../components/geral/FinanceTextInput';
import {FinanceButton} from '../../components/geral/FinanceButton';

import icon from '../../assets/icon.png';
import {registerService} from '../../services/register/registerService';
import {verifyEmailService} from '../../services/register/verifyEmailService';
import {FinanceBoxFailed} from '../../components/geral/FinanceBoxFailed';
import {NativeStackScreenProps} from '@react-navigation/native-stack';
import {RootAppStackParamList} from '../../routes/@types/rootAppStackParamList';
import {Loading} from '../../components/geral/Loading';

type Props = NativeStackScreenProps<RootAppStackParamList, 'RegisterScreen'>;

export function RegisterScreen({navigation}: Props) {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');
  const [isButtonEnabled, setIsButtonEnabled] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (username && email && password && confirmPassword) {
      setIsButtonEnabled(true);
    } else {
      setIsButtonEnabled(false);
    }
  }, [username, email, password, confirmPassword]);

  const handleRegister = async () => {
    if (password !== confirmPassword) {
      setError('As senhas não coincidem.');
    } else {
      try {
        setLoading(true);
        await registerService(username, email, password);
        await verifyEmailService(email);
        navigation.navigate('RegisterSuccess', {email: email});
      } catch (e) {
        if (e instanceof Error) {
          setLoading(false);
          setError(e.message);
        }
      }
    }
  };

  const handleConfirm = () => {
    setError(null as never);
  };

  if (loading) {
    return <Loading />;
  }

  return (
    <View style={styles.container}>
      <Image style={styles.image} resizeMode="contain" source={icon} />
      <Text style={styles.signUp}>Sign Up</Text>
      <FinanceTextInput
        placeholder="Username"
        value={username}
        onChangeText={setUsername}
      />
      <FinanceTextInput
        placeholder="Email"
        value={email}
        onChangeText={setEmail}
      />
      <FinanceTextInput
        secureTextEntry
        placeholder="Password"
        value={password}
        onChangeText={setPassword}
      />
      <FinanceTextInput
        secureTextEntry
        placeholder="Confirm Password"
        value={confirmPassword}
        onChangeText={setConfirmPassword}
      />

      <FinanceButton
        title="Register"
        onPress={handleRegister}
        enabled={isButtonEnabled}
      />

      {error && <FinanceBoxFailed message={error} onConfirm={handleConfirm} />}
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
    marginTop: -15,
    marginBottom: 45,
  },
  signUp: {
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
});
