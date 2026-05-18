import { useState } from 'react'
import { useNavigate, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { loginUser } from '../api/auth'

export default function Login() {

  const [email, setEmail]           = useState('')
  const [password, setPassword]     = useState('')
  const [error, setError]           = useState('')
  const [loading, setLoading]       = useState(false)
  const [showPassword, setShowPassword] = useState(false)

  const { login } = useAuth()
  const navigate  = useNavigate()

  const handleLogin = async (e) => {
    e.preventDefault()
    setLoading(true)
    setError('')

    try {
      const res = await loginUser(email, password)
      login(res.data.user, res.data.token)
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.message || 'Login failed. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <header className="fixed top-0 w-full z-50 glass-nav border-b border-[#C8A97E]/15 h-20 px-8 md:px-20 flex justify-between items-center">
        <div className="flex items-center gap-4 group">
          <span className="material-symbols-outlined text-[#C8A97E] star-glow">star</span>
          <Link to="/" className="font-['Playfair_Display'] tracking-widest uppercase text-xl font-bold text-[#C8A97E] hover:text-[#e5c497] transition-colors">Mercedes-Benz</Link>
        </div>
        <div className="hidden md:flex gap-12">
          <span className="font-label-sm text-xs text-zinc-400 hover:text-[#C8A97E] transition-colors cursor-pointer opacity-80 hover:opacity-100">CARS</span>
          <span className="font-label-sm text-xs text-zinc-400 hover:text-[#C8A97E] transition-colors cursor-pointer opacity-80 hover:opacity-100">MUSEUM</span>
          <span className="font-label-sm text-xs text-zinc-400 hover:text-[#C8A97E] transition-colors cursor-pointer opacity-80 hover:opacity-100">INNOVATION</span>
        </div>
      </header>

      <main className="min-h-screen w-full pt-20 flex items-center justify-center relative overflow-hidden bg-[#050508]">
        <div className="absolute inset-0 z-0 pointer-events-none">
          <div className="absolute top-1/3 left-1/4 w-[500px] h-[500px] bg-[#C8A97E]/8 rounded-full blur-[150px] opacity-30"></div>
          <div className="absolute bottom-1/4 right-1/3 w-[400px] h-[400px] bg-[#C8A97E]/6 rounded-full blur-[140px] opacity-25"></div>
        </div>

        <section className="relative z-10 w-full max-w-[1200px] px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 items-center gap-16 py-10">
          <div className="hidden lg:flex flex-col gap-12 animate-fade-up">
            <div>
              <h1 className="font-headline-h1 text-white leading-tight tracking-tighter">
                Experience <br />
                <span className="bg-gradient-to-r from-[#c8a97e] to-[#e5c497] bg-clip-text text-transparent italic font-normal">Modern Luxury.</span>
              </h1>
            </div>
            <p className="font-body-lg text-[#c0c0c0] max-w-md leading-relaxed opacity-80">
              Access your personalized Mercedes-Benz portal to manage your vehicle fleet, explore bespoke financing, and discover exclusive events.
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden group shadow-glow">
              <img alt="Luxury vehicle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjLOEnry8euE2Ss3F0mJzvWUG3q18izc1qh9LhZO5porZO6imVS6-HkHokWxu08eR9nEI1SOXGh6I0ZqbMgc5TLrfTCdoDTmvjsQG0CoNeNSSS33d6fTDJhJ_s2Vkr-4-G7mFV9bl8SnQzvXoNP1kNDbYaI8lUy_syPcPfef78iMNOK2qmIqxEBt7GJ0XTNNrZQP9k6w974Vl_zUwiuNX1PQzR61zCwiRsNZuuRIv_ZzFPpYKBZvTy9bJd4aoxbsB1gnzN_6pGPn4" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>

          <div className="flex flex-col gap-8 w-full max-w-md mx-auto">

            {error && (
              <div className="bg-error-container/20 border border-error/20 p-4 flex items-start gap-4 animate-fade-in">
                <span className="material-symbols-outlined text-error">error_outline</span>
                <div className="flex flex-col">
                  <span className="text-error font-label-sm uppercase tracking-wider">Authentication Failed</span>
                  <p className="text-on-surface-variant text-sm mt-1">{error}</p>
                </div>
              </div>
            )}

            <div className="glass-card p-10 md:p-12 relative shadow-glow">
              <div className="flex flex-col gap-3 mb-10">
                <span className="font-label-sm text-primary uppercase tracking-[0.3em] text-xs opacity-90">Welcome Back</span>
                <h2 className="font-headline-h2 text-4xl md:text-5xl text-white">Sign In</h2>
                <div className="w-12 h-1 bg-gradient-to-r from-[#c8a97e] to-[#e5c497] mt-2"></div>
              </div>

              <form className="flex flex-col gap-7" onSubmit={handleLogin}>

                <div className="flex flex-col gap-3">
                  <label className="font-label-sm text-[#c0c0c0] uppercase text-xs tracking-widest opacity-80">Email Address</label>
                  <div className="relative group">
                    <input
                      className="w-full bg-transparent border-b-2 border-[#c8a97e]/25 focus:border-[#c8a97e] focus:ring-0 text-white font-body-md py-4 px-0 transition-all duration-300 placeholder:text-zinc-600"
                      placeholder="name@luxury.com"
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      required
                    />
                    <span className="material-symbols-outlined absolute right-0 bottom-4 text-[#c8a97e]/60 group-focus-within:text-[#c8a97e] text-lg transition-colors">mail</span>
                  </div>
                </div>

                <div className="flex flex-col gap-3">
                  <div className="flex justify-between items-end gap-2">
                    <label className="font-label-sm text-[#c0c0c0] uppercase text-xs tracking-widest opacity-80">Password</label>
                    <Link to="/change-password" className="font-label-sm text-[#c8a97e] hover:text-[#e5c497] transition-colors text-xs uppercase underline underline-offset-4 decoration-[#c8a97e]/30">Forgot Password?</Link>
                  </div>
                  <div className="relative group">
                    <input
                      className="w-full bg-transparent border-b-2 border-[#c8a97e]/25 focus:border-[#c8a97e] focus:ring-0 text-white font-body-md py-4 px-0 transition-all duration-300 placeholder:text-zinc-600"
                      placeholder="••••••••"
                      type={showPassword ? 'text' : 'password'}
                      value={password}
                      onChange={(e) => setPassword(e.target.value)}
                      required
                    />
                    <span
                      className="material-symbols-outlined absolute right-0 bottom-4 text-[#c8a97e]/60 group-focus-within:text-[#c8a97e] cursor-pointer hover:text-[#e5c497] transition-colors text-lg"
                      onClick={() => setShowPassword(!showPassword)}
                    >
                      {showPassword ? 'visibility_off' : 'visibility'}
                    </span>
                  </div>
                </div>

                <button
                  type="submit"
                  disabled={loading}
                  className="mt-8 group relative overflow-hidden border-2 border-[#c8a97e] bg-[#c8a97e]/0 hover:bg-[#c8a97e] py-4 px-8 flex justify-center items-center gap-3 transition-all duration-500 disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  <div className="absolute inset-0 bg-gradient-to-r from-[#c8a97e] to-[#e5c497] opacity-0 group-hover:opacity-10 transition-opacity duration-300"></div>
                  <span className="relative z-10 font-label-sm text-[#c8a97e] group-hover:text-black transition-colors duration-300 uppercase tracking-[0.2em] font-semibold">
                    {loading ? 'Signing In...' : 'Sign In'}
                  </span>
                  {!loading && (
                    <span className="material-symbols-outlined relative z-10 text-[#c8a97e] group-hover:text-black text-lg transition-colors duration-300">arrow_forward</span>
                  )}
                </button>
              </form>

              <div className="mt-10 flex items-center gap-6">
                <div className="h-px flex-1 bg-[#c8a97e]/15"></div>
                <span className="font-label-sm text-[#c0c0c0] uppercase text-xs opacity-60">Or continue with</span>
                <div className="h-px flex-1 bg-[#c8a97e]/15"></div>
              </div>

              <div className="mt-8 flex gap-4">
                <button className="flex-1 border-2 border-[#c8a97e]/30 py-3 px-4 flex justify-center items-center hover:border-[#c8a97e] hover:bg-[#c8a97e]/5 transition-all duration-300 rounded-sm">
                  <span className="material-symbols-outlined text-lg text-[#c0c0c0] hover:text-[#c8a97e]">google</span>
                </button>
                <button className="flex-1 border-2 border-[#c8a97e]/30 py-3 px-4 flex justify-center items-center hover:border-[#c8a97e] hover:bg-[#c8a97e]/5 transition-all duration-300 rounded-sm">
                  <span className="material-symbols-outlined text-lg text-[#c0c0c0] hover:text-[#c8a97e]">apple</span>
                </button>
              </div>
            </div>

            <div className="text-center pt-4">
              <p className="font-body-md text-sm text-[#c0c0c0]">
                Don't have an account?
                <Link className="text-[#c8a97e] hover:text-[#e5c497] underline underline-offset-4 font-semibold ml-2 transition-colors" to="/register">Request Access</Link>
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="w-full py-20 px-8 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#c8a97e]/15">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-lg font-semibold text-white font-headline-h3">Mercedes-Benz</span>
            <p className="font-body-md text-xs tracking-wider text-[#c0c0c0] max-w-xs leading-relaxed opacity-80">
              Setting the standard in luxury, innovation, and performance since 1886. Engineered for the extraordinary.
            </p>
          </div>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-[#c8a97e]/60 hover:text-[#c8a97e] transition-colors cursor-pointer hover:scale-110 duration-200">public</span>
            <span className="material-symbols-outlined text-[#c8a97e]/60 hover:text-[#c8a97e] transition-colors cursor-pointer hover:scale-110 duration-200">photo_camera</span>
            <span className="material-symbols-outlined text-[#c8a97e]/60 hover:text-[#c8a97e] transition-colors cursor-pointer hover:scale-110 duration-200">brand_awareness</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-label-sm text-white uppercase text-xs tracking-wider opacity-80 mb-2">Explore</span>
            <a className="font-body-md text-xs tracking-wider text-[#c0c0c0] hover:text-[#c8a97e] hover:translate-x-1 transition-all duration-200 opacity-70 hover:opacity-100">Cars</a>
            <a className="font-body-md text-xs tracking-wider text-[#c0c0c0] hover:text-[#c8a97e] hover:translate-x-1 transition-all duration-200 opacity-70 hover:opacity-100">Test Drive</a>
            <a className="font-body-md text-xs tracking-wider text-[#c0c0c0] hover:text-[#c8a97e] hover:translate-x-1 transition-all duration-200 opacity-70 hover:opacity-100">Service</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-sm text-white uppercase text-xs tracking-wider opacity-80 mb-2">Account</span>
            <a className="font-body-md text-xs tracking-wider text-[#c0c0c0] hover:text-[#c8a97e] hover:translate-x-1 transition-all duration-200 opacity-70 hover:opacity-100">My Orders</a>
            <a className="font-body-md text-xs tracking-wider text-[#c0c0c0] hover:text-[#c8a97e] hover:translate-x-1 transition-all duration-200 opacity-70 hover:opacity-100">Wishlist</a>
            <a className="font-body-md text-xs tracking-wider text-[#c0c0c0] hover:text-[#c8a97e] hover:translate-x-1 transition-all duration-200 opacity-70 hover:opacity-100">Admin</a>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-start md:items-end">
          <div className="flex flex-col gap-4 text-left md:text-right w-full">
            <span className="font-label-sm text-white uppercase text-xs tracking-wider opacity-80 mb-2">Legal</span>
            <a className="font-body-md text-xs tracking-wider text-[#c0c0c0] hover:text-[#c8a97e] transition-all duration-200 opacity-70 hover:opacity-100">Privacy Policy</a>
            <a className="font-body-md text-xs tracking-wider text-[#c0c0c0] hover:text-[#c8a97e] transition-all duration-200 opacity-70 hover:opacity-100">Contact Us</a>
          </div>
          <p className="font-body-md text-xs tracking-wider text-[#c0c0c0] mt-auto opacity-60">
            © 2024 Mercedes-Benz Pakistan. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
