import { StatusBar } from 'expo-status-bar';
import React from 'react';
import Navigation from './src/navigation';
import { AuthContextProvider } from "./src/context/auth.context"

export default function App() {
  return (
    <AuthContextProvider>
      <Navigation />
    </AuthContextProvider>
  );
}
