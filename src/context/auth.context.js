import React, { createContext, useContext, useState } from 'react'

const AuthContext = createContext();

export const AuthContextProvider = ({ children }) => {
  const [user, setUser] = useState(null)

  const onSignIn = (email, password) => {
    
  }
  
  return (
    <AuthContext.Provider
      value={{
        user
      }}
    >
      {children}
    </AuthContext.Provider>
  )
}

export default function useAuth() {
  return useContext(AuthContext)
}