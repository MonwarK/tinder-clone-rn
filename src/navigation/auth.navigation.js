import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import LoginScreen from '../screens/login.screen';

const AuthNavigation = () => {
  const Stack = createNativeStackNavigator();
  
  return (
    <Stack.Navigator>
      <Stack.Screen
        name="Login"
        component={LoginScreen}
      />
    </Stack.Navigator>
  )
}

export default AuthNavigation
