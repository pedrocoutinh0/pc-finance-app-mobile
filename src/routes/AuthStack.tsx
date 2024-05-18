import {createNativeStackNavigator} from '@react-navigation/native-stack';
import React from 'react';
import {SignInScreen} from '../screens/SignInScreen';
import {RootAppStackParamList} from './@types/rootAppStackParamList';
import {RegisterScreen} from '../screens/register/RegisterScreen';
import {RegisterSuccess} from '../screens/register/RegisterSuccess';

const Stack = createNativeStackNavigator<RootAppStackParamList>();

export function AuthStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="SignIn" component={SignInScreen} />
      <Stack.Screen name="RegisterScreen" component={RegisterScreen} />
      <Stack.Screen name="RegisterSuccess" component={RegisterSuccess} />
    </Stack.Navigator>
  );
}
