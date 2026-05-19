import { useState } from 'react'
import { Link, useLocation } from 'react-router-dom'
import { Menu, X, Search, Heart, User, ChevronDown } from 'lucide-react'
import { useAuth } from '../context/AuthContext'

const navLinks = [
  { label: 'Models', href: '/' },
  { label: 'New Arrivals', href: '/new-arrivals' },
  { label: 'Dealerships', href: '/dealerships' },
  { label: 'About', href: '/about' },
]

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false)
  const [userMenuOpen, setUserMenuOpen] = useState(false)
  const location = useLocation()
  const { isLoggedIn, user, logout } = useAuth()

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/8 bg-black/80 backdrop-blur-xl">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          <Link to="/" className="flex items-center gap-2 cursor-pointer select-none">
            <span className="text-primary text-xl font-bold tracking-widest">★</span>
            <span className="text-foreground font-semibold tracking-[0.2em] text-sm uppercase">Mercedes-Benz</span>
          </Link>

          <div className="hidden md:flex items-center gap-8">
            {navLinks.map((link) => (
              <Link key={link.href} to={link.href}
                className={`text-sm font-medium tracking-wide cursor-pointer transition-colors duration-200 ${location.pathname === link.href ? 'text-primary' : 'text-muted-foreground hover:text-foreground'}`}>
                {link.label}
              </Link>
            ))}
          </div>

          <div className="flex items-center gap-1">
            <Link to="/search" className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md">
              <Search className="h-4 w-4" />
            </Link>
            <Link to="/wishlist" className="p-2 text-muted-foreground hover:text-foreground transition-colors rounded-md">
              <Heart className="h-4 w-4" />
            </Link>

            {/* User dropdown */}
            <div className="relative">
              <button onClick={() => setUserMenuOpen(!userMenuOpen)}
                className="flex items-center gap-2 text-muted-foreground hover:text-foreground p-2 rounded-md transition-colors">
                <div className="h-7 w-7 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center">
                  <User className="h-3.5 w-3.5 text-primary" />
                </div>
                <ChevronDown className="h-3 w-3" />
              </button>
              {userMenuOpen && (
                <div className="absolute right-0 top-full mt-1 w-48 bg-card border border-white/10 rounded-lg shadow-xl overflow-hidden z-50">
                  {isLoggedIn ? (
                    <>
                      <div className="px-3 py-2 border-b border-white/8">
                        <p className="text-foreground text-xs font-medium">{user?.name || 'Account'}</p>
                        <p className="text-muted-foreground text-[10px]">{user?.email || ''}</p>
                      </div>
                      <Link to="/profile" onClick={() => setUserMenuOpen(false)} className="block px-3 py-2 text-sm text-foreground hover:bg-white/5 transition-colors">My Profile</Link>
                      <Link to="/my-orders" onClick={() => setUserMenuOpen(false)} className="block px-3 py-2 text-sm text-foreground hover:bg-white/5 transition-colors">My Orders</Link>
                      <Link to="/my-test-drives" onClick={() => setUserMenuOpen(false)} className="block px-3 py-2 text-sm text-foreground hover:bg-white/5 transition-colors">Test Drives</Link>
                      <Link to="/chat" onClick={() => setUserMenuOpen(false)} className="block px-3 py-2 text-sm text-foreground hover:bg-white/5 transition-colors">Support Chat</Link>
                      {user?.role === 'admin' && (
                        <>
                          <div className="border-t border-white/8" />
                          <Link to="/admin" onClick={() => setUserMenuOpen(false)} className="block px-3 py-2 text-sm text-primary hover:bg-white/5 transition-colors">Admin Panel</Link>
                        </>
                      )}
                      <div className="border-t border-white/8" />
                      <button onClick={() => { logout(); setUserMenuOpen(false) }} className="w-full text-left px-3 py-2 text-sm text-muted-foreground hover:bg-white/5 transition-colors">Sign Out</button>
                    </>
                  ) : (
                    <>
                      <Link to="/login" onClick={() => setUserMenuOpen(false)} className="block px-3 py-2 text-sm text-foreground hover:bg-white/5 transition-colors">Sign In</Link>
                      <Link to="/register" onClick={() => setUserMenuOpen(false)} className="block px-3 py-2 text-sm text-foreground hover:bg-white/5 transition-colors">Create Account</Link>
                    </>
                  )}
                </div>
              )}
            </div>

            <button className="md:hidden text-muted-foreground hover:text-foreground ml-1 p-2" onClick={() => setMobileOpen(!mobileOpen)}>
              {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
            </button>
          </div>
        </div>
      </div>

      {mobileOpen && (
        <div className="md:hidden bg-black border-t border-white/8 px-4 py-4 space-y-3">
          {navLinks.map((link) => (
            <Link key={link.href} to={link.href} onClick={() => setMobileOpen(false)}
              className="block py-2 text-sm font-medium text-muted-foreground hover:text-foreground cursor-pointer">
              {link.label}
            </Link>
          ))}
        </div>
      )}
    </nav>
  )
}
