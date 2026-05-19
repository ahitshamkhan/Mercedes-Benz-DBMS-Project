import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'
import { loginUser } from '../api/auth'
import { useAuth } from '../context/AuthContext'

export default function Login() {
  const [showPass, setShowPass] = useState(false)
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()

  async function onSubmit(e) {
    e.preventDefault()
    if (!email || !password) { setError('Please fill in all fields'); return }
    setError(''); setLoading(true)
    try {
      const res = await loginUser(email, password)
      login(res.data.user, res.data.token)
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.message || 'Invalid credentials. Please try again.')
    } finally { setLoading(false) }
  }

  return (
    <div className="min-h-screen bg-black flex" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Left panel */}
      <div className="hidden lg:flex lg:w-1/2 relative bg-gradient-to-br from-zinc-950 via-black to-zinc-900 items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(210_100%_60%/0.08)_0%,_transparent_65%)]" />
        <div className="relative z-10 text-center px-12">
          <div className="text-7xl font-black tracking-[-0.05em] text-white/5 leading-none mb-4">MB</div>
          <span className="text-primary text-4xl font-bold block mb-2">★</span>
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-3">Mercedes-Benz DBMS</h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">The world's most sophisticated automotive management platform. Engineered for excellence.</p>
        </div>
      </div>

      {/* Right panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link to="/" className="flex items-center gap-2 mb-8 cursor-pointer">
              <span className="text-primary text-lg font-bold">★</span>
              <span className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase">Mercedes-Benz</span>
            </Link>
            <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">Welcome back</h1>
            <p className="text-muted-foreground text-sm">Sign in to your Mercedes-Benz account</p>
          </div>

          <div className="bg-card border border-white/8 rounded-xl p-8 backdrop-blur-sm">
            {error && (
              <div className="mb-5 p-3 border border-red-500/20 bg-red-500/10 rounded-lg text-red-400 text-sm">{error}</div>
            )}
            <form onSubmit={onSubmit} className="space-y-5">
              <div>
                <label className="block text-muted-foreground text-xs uppercase tracking-widest font-medium mb-2">Email Address</label>
                <input
                  type="email"
                  value={email}
                  onChange={e => setEmail(e.target.value)}
                  placeholder="your@email.com"
                  required
                  className="w-full h-11 bg-black border border-white/15 text-foreground placeholder:text-muted-foreground/50 rounded-md px-3 focus:outline-none focus:border-primary/50 text-sm"
                />
              </div>
              <div>
                <div className="flex items-center justify-between mb-2">
                  <label className="text-muted-foreground text-xs uppercase tracking-widest font-medium">Password</label>
                  <span className="text-xs text-primary cursor-pointer hover:underline">Forgot password?</span>
                </div>
                <div className="relative">
                  <input
                    type={showPass ? 'text' : 'password'}
                    value={password}
                    onChange={e => setPassword(e.target.value)}
                    placeholder="••••••••"
                    required
                    className="w-full h-11 bg-black border border-white/15 text-foreground placeholder:text-muted-foreground/50 rounded-md px-3 pr-10 focus:outline-none focus:border-primary/50 text-sm"
                  />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <button
                type="submit"
                disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-11 tracking-wide rounded-md flex items-center justify-center gap-2 transition-colors disabled:opacity-50"
              >
                {loading ? 'Signing In...' : <><span>Sign In</span><ArrowRight className="h-4 w-4" /></>}
              </button>
            </form>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Don't have an account?{' '}
            <Link to="/register" className="text-primary hover:underline cursor-pointer font-medium">Create account</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
