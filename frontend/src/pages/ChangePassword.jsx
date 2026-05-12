import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function ChangePassword() {
  const { user, logout } = useAuth()
  const navigate = useNavigate()

  const [currentPassword, setCurrentPassword] = useState('')
  const [newPassword, setNewPassword] = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [showCurrent, setShowCurrent] = useState(false)
  const [showNew, setShowNew] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState('')

  const getStrength = () => {
    if (newPassword.length === 0) return { label: '', level: 0 }
    if (newPassword.length < 6) return { label: 'Weak', level: 1 }
    if (newPassword.length < 10) return { label: 'Fair', level: 2 }
    return { label: 'Strong', level: 3 }
  }

  const strength = getStrength()
  const strengthColors = ['transparent', '#E74C3C', '#F39C12', '#2ECC71']

  const handleSubmit = async (e) => {
    e.preventDefault()
    setError('')
    setSuccess('')

    if (newPassword !== confirmPassword) {
      setError('New passwords do not match.')
      return
    }
    if (newPassword.length < 6) {
      setError('Password must be at least 6 characters.')
      return
    }

    setLoading(true)
    try {
      // Will connect to backend: await changePassword({ currentPassword, newPassword })
      setSuccess('Password updated successfully. Redirecting...')
      setTimeout(() => navigate('/profile'), 2000)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update password.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]">star</span>
          <Link to="/" className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</Link>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors font-label-sm uppercase" to="/">Cars</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors font-label-sm uppercase" to="/service-booking">Service</Link>
          <Link className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 font-label-sm uppercase" to="/profile">Profile</Link>
        </nav>
        <button className="text-[#C8A97E] font-label-sm uppercase border border-[#C8A97E]/30 px-6 py-2 hover:bg-[#C8A97E]/10 transition-all" onClick={logout}>Logout</button>
      </header>

      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-6 min-h-screen">
        <div className="w-full max-w-[480px] bg-surface-container-lowest gold-hairline p-10 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A97E]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10">
            <header className="mb-10 text-center">
              <h1 className="font-headline-h3 text-primary mb-2">Security Settings</h1>
              <p className="font-body-md text-outline">Enter your current password to authorize changes.</p>
            </header>

            {error && (
              <div className="mb-6 p-4 bg-error-container/20 border border-error/20 flex items-center gap-3">
                <span className="material-symbols-outlined text-error">error</span>
                <p className="text-on-surface-variant text-sm">{error}</p>
              </div>
            )}
            {success && (
              <div className="mb-6 p-4 bg-green-900/20 border border-green-500/20 flex items-center gap-3">
                <span className="material-symbols-outlined text-green-400">check_circle</span>
                <p className="text-green-300 text-sm">{success}</p>
              </div>
            )}

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="space-y-2">
                <label className="font-label-sm text-primary uppercase block">Current Password</label>
                <div className="relative">
                  <input className="w-full bg-transparent border-b border-outline/30 py-3 focus:outline-none focus:border-primary transition-colors text-on-background placeholder:text-outline/50" placeholder="••••••••••••" type={showCurrent ? 'text' : 'password'} value={currentPassword} onChange={(e) => setCurrentPassword(e.target.value)} required />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors" type="button" onClick={() => setShowCurrent(!showCurrent)}>
                    <span className="material-symbols-outlined text-[20px]">{showCurrent ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
              </div>

              <div className="space-y-2">
                <label className="font-label-sm text-primary uppercase block">New Password</label>
                <div className="relative">
                  <input className="w-full bg-transparent border-b border-outline/30 py-3 focus:outline-none focus:border-primary transition-colors text-on-background placeholder:text-outline/50" placeholder="••••••••••••" type={showNew ? 'text' : 'password'} value={newPassword} onChange={(e) => setNewPassword(e.target.value)} required />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors" type="button" onClick={() => setShowNew(!showNew)}>
                    <span className="material-symbols-outlined text-[20px]">{showNew ? 'visibility_off' : 'visibility'}</span>
                  </button>
                </div>
                {newPassword.length > 0 && (
                  <div className="pt-3 space-y-2">
                    <div className="flex justify-between items-center mb-1">
                      <span className="text-[10px] font-label-sm uppercase text-outline">Password Strength</span>
                      <span className="text-[10px] font-label-sm uppercase text-primary">{strength.label}</span>
                    </div>
                    <div className="flex gap-1 w-full h-[2px]">
                      {[1, 2, 3].map(i => (
                        <div key={i} className="w-1/3" style={{ backgroundColor: strength.level >= i ? strengthColors[i] : 'rgba(255,255,255,0.05)' }}></div>
                      ))}
                    </div>
                  </div>
                )}
              </div>

              <div className="space-y-2">
                <label className="font-label-sm text-primary uppercase block">Confirm New Password</label>
                <input className="w-full bg-transparent border-b border-outline/30 py-3 focus:outline-none focus:border-primary transition-colors text-on-background" placeholder="••••••••••••" type="password" value={confirmPassword} onChange={(e) => setConfirmPassword(e.target.value)} required />
              </div>

              <div className="pt-6">
                <button className="w-full border border-primary-container text-primary-container font-label-sm uppercase py-4 tracking-[0.2em] transition-all duration-500 hover:bg-primary-container hover:text-on-primary disabled:opacity-50" type="submit" disabled={loading}>
                  {loading ? 'Updating...' : 'Update Password'}
                </button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-outline/10 text-center">
              <Link className="font-label-sm text-outline hover:text-primary transition-colors flex items-center justify-center gap-2" to="/profile">
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                Back to Profile
              </Link>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div className="space-y-6">
          <Link to="/" className="text-lg font-semibold text-white font-['Playfair_Display']">Mercedes-Benz</Link>
          <p className="font-body-md text-zinc-500 max-w-xs">Crafting digital experiences as meticulously as our vehicles.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <Link className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform" to="/">Cars</Link>
            <Link className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform" to="/my-orders">My Orders</Link>
            <Link className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform" to="/wishlist">Wishlist</Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform" to="/service-booking">Service</Link>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform" href="#">Legal</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform" href="#">Privacy</a>
          </div>
        </div>
        <div className="space-y-6 md:text-right">
          <p className="font-['Playfair_Display'] text-sm text-zinc-600">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
