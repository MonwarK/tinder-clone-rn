import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import AuthScreen from '../screens/auth.screen';
import LoginScreen from '../screens/login.screen';
import RegisterScreen from '../screens/register.screen';

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();
  
  return (
    <Stack.Navigator
      initialRouteName='Auth'
      screenOptions={{
        headerShown: false
      }}
    >
      <Stack.Screen
        name="Auth"
        component={AuthScreen}
      />
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
      <Stack.Screen
        name="Register"
        component={RegisterScreen}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigation
