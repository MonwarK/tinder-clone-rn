import { createNativeStackNavigator } from '@react-navigation/native-stack'
import React from 'react'
import { View, Text } from 'react-native'
import HomeScreen from '../screens/home.screen'
import ChatScreen from '../screens/chat.screen'

const MainNavigation = () => {
  const Stack = createNativeStackNavigator()
  
  return (
    <Stack.Navigator
      initialRouteName="Home"
      screenOptions={{
        headerShown : false,
      }}
    >
      <Stack.Screen
        name="Home"
        component={HomeScreen}
      />
      <Stack.Screen
        name="Chat"
        component={ChatScreen}
      />
    </Stack.Navigator>
  )
}

export default MainNavigation
