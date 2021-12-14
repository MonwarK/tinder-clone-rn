import { useNavigation } from '@react-navigation/core'
import React from 'react'
import { SafeAreaView, Text, Button } from 'react-native'
import { signOut } from '../../Firebase';

const HomeScreen = () => {
  const navigation = useNavigation();
  
  return (
    <SafeAreaView>
      <Text>Home Screen</Text>
      <Button
        title="Go to chat screen"
        onPress={() => navigation.navigate("Chat")}
      />
      <Button
        title="Sign Out"
        onPress={() => signOut()}
      />
    </SafeAreaView>
  )
}

export default HomeScreen
