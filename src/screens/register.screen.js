import { useNavigation } from '@react-navigation/native';
import React, { useState } from 'react';
import { ImageBackground, SafeAreaView, Text, TextInput, TouchableOpacity, View } from 'react-native'
import tw from 'tailwind-rn';
import { Ionicons } from '@expo/vector-icons';
import { register } from '../../Firebase';

const RegisterScreen = () => {
  const navigation = useNavigation();
  const [email, setEmail] = useState("")
  const [password, setPassword] = useState("")
  
  return (
    <ImageBackground 
      resizeMode='cover'
      style={tw('flex-1')}
      source={{ uri: "https://tinder.com/static/tinder.png"}}
    >
      <Ionicons 
        onPress={() => navigation.goBack()}
        name="arrow-back" 
        size={24} 
        color="white" 
        style={tw("absolute top-8 left-2 z-50")}
      />
      <SafeAreaView style={tw('flex-1 bg-black bg-opacity-25 items-center justify-center')}>
        <View 
          style={[
            tw("bg-white p-6"), 
            { maxWidth: 300, width: "80%" }
          ]}
        >
          <Text style={tw("text-center text-2xl mb-5")}>Register</Text>
          <TextInput 
            autoCapitalize='none'
            style={tw('py-3 w-full border-b mb-5')}
            placeholder='Email'
            onChangeText={(e) => setEmail(e)}
          />
          <TextInput 
            style={tw('py-3 w-full border-b mb-5')}
            placeholder='Password'
            secureTextEntry
            onChangeText={(p) => setPassword(p)}
          />
          <TouchableOpacity onPress={() => register(email, password)} style={tw("w-full bg-red-400 p-4 rounded-full")}>
            <Text style={tw("text-center text-white")}>Register</Text>
          </TouchableOpacity>
        </View>
      </SafeAreaView>
    </ImageBackground>
  )
}

export default RegisterScreen
