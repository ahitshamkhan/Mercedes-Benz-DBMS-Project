import { Navigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

// Type 1 — Must be logged in
export const ProtectedRoute = ({ children }) => {
  const { isLoggedIn } = useAuth()
  if (!isLoggedIn) return <Navigate to="/login" />
  return children
}

// Type 2 — Must be Admin
export const AdminRoute = ({ children }) => {
  const { isLoggedIn, isAdmin } = useAuth()
  if (!isLoggedIn) return <Navigate to="/login" />
  if (!isAdmin) return <Navigate to="/" />
  return children
}

// Type 3 — Guest only
export const GuestRoute = ({ children }) => {
  const { isLoggedIn } = useAuth()
  if (isLoggedIn) return <Navigate to="/" />
  return children
}