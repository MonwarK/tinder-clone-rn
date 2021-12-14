import React, { createContext, useContext, useEffect, useState } from 'react'
import { authStateChanged, signIn } from '../../Firebase';

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    authStateChanged((u) => {
      setUser(u)
    })
  }, [])

  const signInWithEmailAndPassword = (email, password) => {
    setLoading(true);

    signIn(email, password)
      .then((u) => setUser(u))
      .catch((err) => setError(err.toString()))

    setLoading(false)
  }
  
  return (
    <AuthContext.Provider
      value={{
        user,
        signInWithEmailAndPassword,
        loading,
        error
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}