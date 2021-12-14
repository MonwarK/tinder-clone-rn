import { NavigationContainer } from '@react-navigation/native'
import React from 'react'
import useAuth from '../context/auth.context';
import AuthNavigation from './auth.navigation';
import MainNavigation from './main.navigation'

const Navigation = () => {
  const { user } = useAuth();
  
  return (
    <NavigationContainer>
      {user ? (
        <MainNavigation />
      ) : (
        <AuthNavigation />
      )}
    </NavigationContainer>
  )
}

export default Navigation
