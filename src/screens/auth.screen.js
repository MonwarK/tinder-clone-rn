import { useNavigation } from '@react-navigation/native';
import React from 'react'
import { ImageBackground, SafeAreaView, Text, TouchableOpacity } from 'react-native'
import tw from 'tailwind-rn';
import AuthButton from '../components/auth-button.component';

const AuthScreen = () => {
  const navigation = useNavigation();
  
  return (
    <ImageBackground 
      resizeMode='cover'
      style={tw('flex-1 pb-12 px-8')}
      source={{ uri: "https://tinder.com/static/tinder.png"}}
    >
      <SafeAreaView style={tw('flex-1 items-center justify-end')}>
        <AuthButton onPress={() => navigation.navigate("Login")}>Sign In</AuthButton>
        <AuthButton onPress={() => navigation.navigate("Register")}>Register</AuthButton>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default AuthScreen
