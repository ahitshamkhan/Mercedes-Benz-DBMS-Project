import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { registerUser } from '../api/auth'

export default function Register() {

  const [name, setName]               = useState('')
  const [email, setEmail]             = useState('')
  const [phone, setPhone]             = useState('')
  const [address, setAddress]         = useState('')
  const [password, setPassword]       = useState('')
  const [confirmPassword, setConfirmPassword] = useState('')
  const [agreedTerms, setAgreedTerms] = useState(false)
  const [error, setError]             = useState('')
  const [loading, setLoading]         = useState(false)

  const { login } = useAuth()
  const navigate  = useNavigate()

  const handleRegister = async (e) => {
    e.preventDefault()
    setError('')

    if (password !== confirmPassword) {
      setError('Passwords do not match.')
      return
    }

    if (!agreedTerms) {
      setError('You must agree to the Terms of Service.')
      return
    }

    setLoading(true)

    try {
      const res = await registerUser(name, email, password, phone)
      login(res.data.user, res.data.token)
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 glass-nav z-50 border-b border-[#C8A97E]/15">
        <Link to="/" className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase flex items-center gap-3 hover:text-[#e5c497] transition-colors">
          <span className="material-symbols-outlined text-2xl star-glow" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          Mercedes-Benz
        </Link>
        <Link className="text-sm font-label-sm text-[#C8A97E] hover:text-[#e5c497] transition-colors tracking-widest uppercase border-b-2 border-[#C8A97E]/20 hover:border-[#C8A97E] pb-1 duration-300" to="/login">Sign In</Link>
      </header>

      <main className="min-h-screen pt-20 flex flex-col md:flex-row items-stretch">
        <section className="relative w-full md:w-5/12 min-h-[353px] md:min-h-screen flex flex-col items-center justify-center p-8 md:p-20 overflow-hidden bg-[#0f0f0f]">
          <div className="absolute inset-0 opacity-30">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCXUx6bIwlUkvhD1R8jSwxyyM2vzXy9QRdjcJK6VzRl1cmjn0nw2rw824rRKWURarQCL6Sp9idJX9HoRVn80ZAS0TKq9O1RkkmgTXyqB-A5zftAR9OhNc133L1PaEflSzCoeXzNIzJyEaDrTKOsvoOa1JzE7kJQO8TTx0X_ka4GtNvFdqDwhWxIF2laWAP4wu4ANOJjS3j1A28AoowOtvptO7Lk4oHXMKiUJI6f2dHNFiZkbzqfLKTYED30K-E3-A47_PRouV2L58" alt="Mercedes-Benz S-Class at twilight" />
          </div>
          <div className="absolute inset-0 bg-gradient-to-r from-[#0f0f0f] to-transparent"></div>
          <div className="relative z-10 text-center space-y-8 max-w-md animate-fade-up">
            <div className="inline-block p-6 rounded-full border-2 border-[#c8a97e]/30 bg-[#c8a97e]/5 backdrop-blur-xl hover:border-[#c8a97e]/60 transition-all duration-300">
              <span className="material-symbols-outlined text-7xl text-[#c8a97e] star-glow" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <div className="space-y-4">
              <h1 className="font-headline-h1 text-white text-4xl md:text-5xl lg:text-6xl leading-tight">Join the Mercedes Family</h1>
              <p className="font-body-lg text-[#c0c0c0] max-w-xs mx-auto opacity-80">Enter a world of unparalleled precision, performance, and prestige.</p>
            </div>
            <div className="h-1 w-24 bg-gradient-to-r from-[#c8a97e] to-[#e5c497] mx-auto opacity-70"></div>
          </div>
        </section>

        <section className="w-full md:w-7/12 flex items-center justify-center p-6 md:p-12 lg:p-20 bg-[#050508] relative overflow-hidden">
          <div className="absolute top-0 right-0 w-96 h-96 bg-[#c8a97e]/5 rounded-full blur-3xl opacity-30 pointer-events-none"></div>
          <div className="w-full max-w-xl space-y-12 animate-fade-up relative z-10">
            <div className="space-y-3">
              <h2 className="font-headline-h2 text-4xl md:text-5xl text-white">Create Account</h2>
              <p className="font-body-md text-[#c0c0c0] opacity-80">Please provide your details to begin your journey.</p>
              <div className="w-12 h-1 bg-gradient-to-r from-[#c8a97e] to-[#e5c497]"></div>
            </div>

            {error && (
              <div className="bg-red-500/10 border-l-4 border-red-500 p-4 flex items-start gap-4 animate-fade-up rounded-r">
                <span className="material-symbols-outlined text-red-500">error_outline</span>
                <p className="text-red-300 text-sm">{error}</p>
              </div>
            )}

            <form className="space-y-8" onSubmit={handleRegister}>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-3 group">
                  <label className="block font-label-sm text-[#c0c0c0] uppercase text-xs tracking-widest opacity-80">Full Name</label>
                  <input
                    className="w-full bg-transparent border-b-2 border-[#c8a97e]/25 focus:border-[#c8a97e] focus:ring-0 py-4 transition-all duration-300 text-white font-body-md placeholder:text-zinc-600"
                    placeholder="Johnathan Doe"
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-3 group">
                  <label className="block font-label-sm text-[#c0c0c0] uppercase text-xs tracking-widest opacity-80">Email Address</label>
                  <input
                    className="w-full bg-transparent border-b-2 border-[#c8a97e]/25 focus:border-[#c8a97e] focus:ring-0 py-4 transition-all duration-300 text-white font-body-md placeholder:text-zinc-600"
                    placeholder="email@example.com"
                    type="email"
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-3 group">
                  <label className="block font-label-sm text-[#c0c0c0] uppercase text-xs tracking-widest opacity-80">Phone Number</label>
                  <input
                    className="w-full bg-transparent border-b-2 border-[#c8a97e]/25 focus:border-[#c8a97e] focus:ring-0 py-4 transition-all duration-300 text-white font-body-md placeholder:text-zinc-600"
                    placeholder="03xx-xxxxxxx"
                    type="tel"
                    value={phone}
                    onChange={(e) => setPhone(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-3 group md:col-span-1">
                  <label className="block font-label-sm text-[#c0c0c0] uppercase text-xs tracking-widest opacity-80">Address</label>
                  <input
                    className="w-full bg-transparent border-b-2 border-[#c8a97e]/25 focus:border-[#c8a97e] focus:ring-0 py-4 transition-all duration-300 text-white font-body-md placeholder:text-zinc-600"
                    placeholder="Street, City, Province"
                    type="text"
                    value={address}
                    onChange={(e) => setAddress(e.target.value)}
                  />
                </div>
                <div className="space-y-3 group">
                  <label className="block font-label-sm text-[#c0c0c0] uppercase text-xs tracking-widest opacity-80">Password</label>
                  <input
                    className="w-full bg-transparent border-b-2 border-[#c8a97e]/25 focus:border-[#c8a97e] focus:ring-0 py-4 transition-all duration-300 text-white font-body-md placeholder:text-zinc-600"
                    placeholder="••••••••"
                    type="password"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />
                </div>
                <div className="space-y-3 group">
                  <label className="block font-label-sm text-[#c0c0c0] uppercase text-xs tracking-widest opacity-80">Confirm Password</label>
                  <input
                    className="w-full bg-transparent border-b-2 border-[#c8a97e]/25 focus:border-[#c8a97e] focus:ring-0 py-4 transition-all duration-300 text-white font-body-md placeholder:text-zinc-600"
                    placeholder="••••••••"
                    type="password"
                    value={confirmPassword}
                    onChange={(e) => setConfirmPassword(e.target.value)}
                    required
                  />
                </div>
              </div>

              <div className="flex items-start gap-3 p-4 glass-card">
                <input
                  className="mt-1 rounded-sm border-2 border-[#c8a97e]/30 bg-[#c8a97e]/5 text-[#c8a97e] focus:ring-[#c8a97e] ring-offset-transparent accent-[#c8a97e] cursor-pointer"
                  id="terms"
                  type="checkbox"
                  checked={agreedTerms}
                  onChange={(e) => setAgreedTerms(e.target.checked)}
                />
                <label className="font-body-md text-sm text-[#c0c0c0] leading-relaxed opacity-80 cursor-pointer" htmlFor="terms">
                  I agree to the <a className="text-[#c8a97e] hover:text-[#e5c497] underline transition-all" href="#">Terms of Service</a> and <a className="text-[#c8a97e] hover:text-[#e5c497] underline transition-all" href="#">Privacy Policy</a>.
                </label>
              </div>

              <div className="pt-8 space-y-6">
                <button
                  className="w-full py-4 border-2 border-[#c8a97e] text-[#c8a97e] font-label-sm uppercase tracking-[0.2em] transition-all duration-500 hover:bg-[#c8a97e] hover:text-black group flex items-center justify-center gap-3 disabled:opacity-50 disabled:cursor-not-allowed rounded-sm hover:shadow-glow"
                  type="submit"
                  disabled={loading}
                >
                  {loading ? 'Creating Account...' : 'Create Account'}
                  {!loading && (
                    <span className="material-symbols-outlined text-lg group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
                  )}
                </button>
                <div className="text-center pt-4">
                  <p className="font-body-md text-[#c0c0c0] opacity-80">
                    Already have an account?
                    <Link className="text-[#c8a97e] font-semibold hover:text-[#e5c497] transition-colors duration-300 ml-2 underline underline-offset-4" to="/login">Sign In</Link>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      <footer className="w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#c8a97e]/15">
        <div className="space-y-6">
          <div className="text-lg font-semibold text-white font-['Playfair_Display']">Mercedes-Benz</div>
          <p className="text-[#c0c0c0] text-sm max-w-xs font-body-md opacity-80">Experiencing excellence in every detail. Join the legacy of automotive perfection.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-2">
          <div className="space-y-4">
            <h4 className="text-white font-label-sm uppercase tracking-widest text-xs opacity-80">Quick Links</h4>
            <ul className="space-y-3">
              <li><a className="text-[#c0c0c0] hover:text-[#c8a97e] font-body-md text-sm hover:translate-x-1 transition-all duration-200 block opacity-70 hover:opacity-100" href="#">Cars</a></li>
              <li><a className="text-[#c0c0c0] hover:text-[#c8a97e] font-body-md text-sm hover:translate-x-1 transition-all duration-200 block opacity-70 hover:opacity-100" href="#">Test Drive</a></li>
              <li><a className="text-[#c0c0c0] hover:text-[#c8a97e] font-body-md text-sm hover:translate-x-1 transition-all duration-200 block opacity-70 hover:opacity-100" href="#">Service</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-label-sm uppercase tracking-widest text-xs opacity-80">Support</h4>
            <ul className="space-y-3">
              <li><a className="text-[#c0c0c0] hover:text-[#c8a97e] font-body-md text-sm hover:translate-x-1 transition-all duration-200 block opacity-70 hover:opacity-100" href="#">Contact</a></li>
              <li><a className="text-[#c0c0c0] hover:text-[#c8a97e] font-body-md text-sm hover:translate-x-1 transition-all duration-200 block opacity-70 hover:opacity-100" href="#">Privacy</a></li>
              <li><a className="text-[#c0c0c0] hover:text-[#c8a97e] font-body-md text-sm hover:translate-x-1 transition-all duration-200 block opacity-70 hover:opacity-100" href="#">Legal</a></li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-3 pt-10 border-t border-[#c8a97e]/15 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-[#c0c0c0] font-body-md text-sm opacity-60">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="material-symbols-outlined text-[#c8a97e]/60 cursor-pointer hover:text-[#c8a97e] transition-colors hover:scale-110 duration-200">public</span>
            <span className="material-symbols-outlined text-[#c8a97e]/60 cursor-pointer hover:text-[#c8a97e] transition-colors hover:scale-110 duration-200">photo_camera</span>
            <span className="material-symbols-outlined text-[#c8a97e]/60 cursor-pointer hover:text-[#c8a97e] transition-colors hover:scale-110 duration-200">youtube_activity</span>
          </div>
        </div>
      </footer>
    </>
  );
}
