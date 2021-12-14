import React from 'react'
import { Text, TouchableOpacity } from 'react-native'
import tw from 'tailwind-rn';

const AuthButton = ({ children, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={tw('bg-white w-full p-4 rounded-full mb-5')}>
      <Text style={tw('text-center')}>{children}</Text>
    </TouchableOpacity>
  )
}

export default AuthButton
