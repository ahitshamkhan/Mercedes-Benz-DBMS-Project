// src/context/AuthContext.jsx

import { createContext, useContext, useState } from 'react'

// Step 1: Create the notice board
const AuthContext = createContext()

export const AuthProvider = ({ children }) => {

  // Step 2: Store what YOU said it should store
  const [user, setUser]           = useState(null)       // who is logged in
  const [token, setToken]         = useState(null)       // their JWT
  const [isLoggedIn, setIsLoggedIn] = useState(false)   // true or false
  const [isAdmin, setIsAdmin]     = useState(false)      // true or false

  // Step 3: login() function — YOU said this!
  const login = (userData, userToken) => {
    setUser(userData)
    setToken(userToken)
    setIsLoggedIn(true)
    setIsAdmin(userData.role === 'admin')

    // Save to localStorage so user stays logged in
    localStorage.setItem('token', userToken)
    localStorage.setItem('user', JSON.stringify(userData))
  }

  // Step 4: logout() function — YOU said this!
  const logout = () => {
    setUser(null)
    setToken(null)
    setIsLoggedIn(false)
    setIsAdmin(false)

    // Remove from localStorage
    localStorage.removeItem('token')
    localStorage.removeItem('user')
  }

  // Step 5: Share everything with all pages
  return (
    <AuthContext.Provider value={{
      user,
      token,
      isLoggedIn,
      isAdmin,
      login,
      logout
    }}>
      {children}
    </AuthContext.Provider>
  )
}

// Step 6: Easy way for any page to read the notice board
export const useAuth = () => useContext(AuthContext)