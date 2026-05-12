import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'

export default function MyProfile() {
  const { user, logout } = useAuth()

  const [name, setName] = useState(user?.name || '')
  const [phone, setPhone] = useState(user?.phone || '')
  const [address, setAddress] = useState(user?.address || '')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState('')
  const [error, setError] = useState('')

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')
    setSuccess('')
    try {
      // Will connect to backend later: await updateProfile({ name, phone, address })
      setSuccess('Profile updated successfully.')
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to update profile.')
    } finally {
      setLoading(false)
    }
  }

  const initials = (user?.name || 'U').split(' ').map(w => w[0]).join('').toUpperCase().slice(0, 2)

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <Link to="/" className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</Link>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-['Playfair_Display'] text-sm" to="/">Cars</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-['Playfair_Display'] text-sm" to="/service-booking">Service</Link>
          <Link className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 font-['Playfair_Display'] text-sm" to="/profile">Profile</Link>
        </nav>
        <button className="px-6 py-2 border border-[#C8A97E]/50 text-[#C8A97E] hover:bg-[#C8A97E] hover:text-zinc-950 transition-all duration-300 text-sm tracking-widest uppercase font-medium" onClick={logout}>Logout</button>
      </header>

      <main className="pt-40 pb-20 px-6 md:px-20 max-w-[1440px] mx-auto min-h-screen">
        <div className="mb-20">
          <h1 className="font-headline-h1 text-headline-h1 text-primary-fixed-dim">Your Profile</h1>
          <div className="h-px w-32 bg-primary-container mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-20">
          <section className="lg:col-span-4 flex flex-col items-center text-center p-12 bg-surface-container-lowest hairline-border rounded-lg shadow-2xl">
            <div className="relative mb-8">
              <div className="w-40 h-40 rounded-full border-2 border-primary-container p-1 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-surface-container-high flex items-center justify-center">
                  <span className="text-display-lg font-display-lg text-primary">{initials}</span>
                </div>
              </div>
            </div>
            <h2 className="font-headline-h3 text-on-background mb-1">{user?.name || 'Guest'}</h2>
            <p className="text-zinc-500 font-body-md mb-6">{user?.email || ''}</p>
            <div className="w-full pt-6 border-t border-[#C8A97E]/10 flex flex-col gap-4 text-left">
              <div className="flex justify-between items-center">
                <span className="text-zinc-500 text-sm font-label-sm uppercase tracking-widest">Role</span>
                <span className="text-primary-container text-sm capitalize">{user?.role || 'Customer'}</span>
              </div>
            </div>
            <Link to="/change-password" className="mt-8 w-full py-3 border border-zinc-700 text-zinc-400 font-label-sm uppercase tracking-widest hover:border-primary hover:text-primary transition-all text-center text-sm">
              Change Password
            </Link>
          </section>

          <section className="lg:col-span-8 bg-surface-container-lowest hairline-border p-8 md:p-12 rounded-lg">
            <div className="flex items-center gap-4 mb-10">
              <span className="material-symbols-outlined text-primary-container">person_edit</span>
              <h3 className="font-headline-h3 text-on-background">Personal Details</h3>
            </div>

            {success && (
              <div className="mb-6 p-4 bg-green-900/20 border border-green-500/20 flex items-center gap-3">
                <span className="material-symbols-outlined text-green-400">check_circle</span>
                <p className="text-green-300 text-sm">{success}</p>
              </div>
            )}
            {error && (
              <div className="mb-6 p-4 bg-error-container/20 border border-error/20 flex items-center gap-3">
                <span className="material-symbols-outlined text-error">error</span>
                <p className="text-on-surface-variant text-sm">{error}</p>
              </div>
            )}

            <form className="space-y-8" onSubmit={handleSubmit}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-zinc-500 font-label-sm uppercase tracking-widest text-xs">Full Name</label>
                  <input className="w-full bg-transparent border-b border-zinc-800 focus:border-primary-container outline-none py-3 text-on-background font-body-md transition-colors" type="text" value={name} onChange={(e) => setName(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <label className="block text-zinc-500 font-label-sm uppercase tracking-widest text-xs">Phone Number</label>
                  <input className="w-full bg-transparent border-b border-zinc-800 focus:border-primary-container outline-none py-3 text-on-background font-body-md transition-colors" type="tel" value={phone} onChange={(e) => setPhone(e.target.value)} />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-zinc-500 font-label-sm uppercase tracking-widest text-xs">Residential Address</label>
                <textarea className="w-full bg-transparent border-b border-zinc-800 focus:border-primary-container outline-none py-3 text-on-background font-body-md transition-colors resize-none" rows="3" value={address} onChange={(e) => setAddress(e.target.value)} />
              </div>
              <div className="pt-8 flex justify-end">
                <button className="px-12 py-4 border border-primary-container text-primary-container font-label-sm uppercase tracking-widest hover:bg-primary-container hover:text-on-primary transition-all duration-300 disabled:opacity-50" type="submit" disabled={loading}>
                  {loading ? 'Saving...' : 'Save Changes'}
                </button>
              </div>
            </form>
          </section>
        </div>

        <section className="mt-20">
          <h4 className="font-headline-h3 text-on-background mb-8">Account Overview</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Link to="/my-orders" className="p-8 bg-surface-container-lowest hairline-border rounded-lg group hover:border-primary-container/40 transition-colors">
              <span className="material-symbols-outlined text-zinc-500 mb-4 group-hover:text-primary-container transition-colors">shopping_bag</span>
              <p className="text-zinc-500 font-label-sm uppercase tracking-widest mb-2">My Orders</p>
              <p className="text-primary-container font-label-sm mt-4">View Orders →</p>
            </Link>
            <Link to="/my-test-drives" className="p-8 bg-surface-container-lowest hairline-border rounded-lg group hover:border-primary-container/40 transition-colors">
              <span className="material-symbols-outlined text-zinc-500 mb-4 group-hover:text-primary-container transition-colors">speed</span>
              <p className="text-zinc-500 font-label-sm uppercase tracking-widest mb-2">Test Drives</p>
              <p className="text-primary-container font-label-sm mt-4">View Bookings →</p>
            </Link>
            <Link to="/my-service-history" className="p-8 bg-surface-container-lowest hairline-border rounded-lg group hover:border-primary-container/40 transition-colors">
              <span className="material-symbols-outlined text-zinc-500 mb-4 group-hover:text-primary-container transition-colors">build_circle</span>
              <p className="text-zinc-500 font-label-sm uppercase tracking-widest mb-2">Service History</p>
              <p className="text-primary-container font-label-sm mt-4">View History →</p>
            </Link>
          </div>
        </section>
      </main>

      <footer className="w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div className="space-y-6">
          <Link to="/" className="text-lg font-semibold text-white font-['Playfair_Display']">Mercedes-Benz</Link>
          <p className="text-zinc-500 font-['Playfair_Display'] text-sm max-w-xs">Experience the pinnacle of automotive engineering and luxury.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <Link className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform" to="/">Cars</Link>
            <Link className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform" to="/my-orders">My Orders</Link>
            <Link className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform" to="/wishlist">Wishlist</Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform" to="/book-test-drive">Test Drive</Link>
            <Link className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform" to="/service-booking">Service</Link>
            <Link className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform" to="/about">Contact</Link>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-zinc-700 text-xs">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
