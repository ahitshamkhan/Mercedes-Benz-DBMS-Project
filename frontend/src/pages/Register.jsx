import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Eye, EyeOff, ArrowRight } from 'lucide-react'
import { registerUser } from '../api/auth'
import { useAuth } from '../context/AuthContext'

export default function Register() {
  const [showPass, setShowPass] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', phone: '', password: '', confirmPassword: '' })
  const [error, setError] = useState('')
  const [loading, setLoading] = useState(false)
  const { login } = useAuth()
  const navigate = useNavigate()
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }))

  async function onSubmit(e) {
    e.preventDefault()
    if (!form.name || !form.email || !form.password) { setError('Please fill in all required fields'); return }
    if (form.password !== form.confirmPassword) { setError('Passwords do not match'); return }
    if (form.password.length < 6) { setError('Password must be at least 6 characters'); return }
    setError(''); setLoading(true)
    try {
      const res = await registerUser(form.name, form.email, form.password, form.phone)
      login(res.data.user, res.data.token)
      navigate('/')
    } catch (err) {
      setError(err.response?.data?.message || 'Registration failed. Please try again.')
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
          <h2 className="text-2xl font-bold text-foreground tracking-tight mb-3">Join Mercedes-Benz</h2>
          <p className="text-muted-foreground text-sm leading-relaxed max-w-xs">Create your account and experience the pinnacle of automotive luxury. Your journey starts here.</p>
        </div>
      </div>

      {/* Right panel */}
      <div className="w-full lg:w-1/2 flex items-center justify-center px-4 sm:px-8 py-12">
        <div className="w-full max-w-md">
          <div className="mb-8">
            <Link to="/" className="flex items-center gap-2 mb-8 cursor-pointer">
              <span className="text-primary text-lg font-bold">★</span>
              <span className="text-muted-foreground text-xs font-medium tracking-[0.2em] uppercase">Mercedes-Benz</span>
            </Link>
            <h1 className="text-3xl font-bold text-foreground tracking-tight mb-2">Create account</h1>
            <p className="text-muted-foreground text-sm">Join the Mercedes-Benz family today</p>
          </div>

          <div className="bg-card border border-white/8 rounded-xl p-8 backdrop-blur-sm">
            {error && <div className="mb-5 p-3 border border-red-500/20 bg-red-500/10 rounded-lg text-red-400 text-sm">{error}</div>}
            <form onSubmit={onSubmit} className="space-y-4">
              {[{ label: 'Full Name', key: 'name', type: 'text', placeholder: 'John Smith' },
                { label: 'Email Address', key: 'email', type: 'email', placeholder: 'your@email.com' },
                { label: 'Phone Number', key: 'phone', type: 'tel', placeholder: '+92 300 0000000' }].map(({ label, key, type, placeholder }) => (
                <div key={key}>
                  <label className="block text-muted-foreground text-xs uppercase tracking-widest font-medium mb-2">{label}</label>
                  <input type={type} value={form[key]} onChange={e => set(key, e.target.value)} placeholder={placeholder}
                    className="w-full h-11 bg-black border border-white/15 text-foreground placeholder:text-muted-foreground/50 rounded-md px-3 focus:outline-none focus:border-primary/50 text-sm" />
                </div>
              ))}
              <div>
                <label className="block text-muted-foreground text-xs uppercase tracking-widest font-medium mb-2">Password</label>
                <div className="relative">
                  <input type={showPass ? 'text' : 'password'} value={form.password} onChange={e => set('password', e.target.value)} placeholder="Min 6 characters"
                    className="w-full h-11 bg-black border border-white/15 text-foreground placeholder:text-muted-foreground/50 rounded-md px-3 pr-10 focus:outline-none focus:border-primary/50 text-sm" />
                  <button type="button" onClick={() => setShowPass(!showPass)} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {showPass ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
              <div>
                <label className="block text-muted-foreground text-xs uppercase tracking-widest font-medium mb-2">Confirm Password</label>
                <input type="password" value={form.confirmPassword} onChange={e => set('confirmPassword', e.target.value)} placeholder="Repeat password"
                  className="w-full h-11 bg-black border border-white/15 text-foreground placeholder:text-muted-foreground/50 rounded-md px-3 focus:outline-none focus:border-primary/50 text-sm" />
              </div>
              <button type="submit" disabled={loading}
                className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-11 tracking-wide rounded-md flex items-center justify-center gap-2 transition-colors disabled:opacity-50 mt-2">
                {loading ? 'Creating Account...' : <><span>Create Account</span><ArrowRight className="h-4 w-4" /></>}
              </button>
            </form>
          </div>

          <p className="text-center text-sm text-muted-foreground mt-6">
            Already have an account?{' '}
            <Link to="/login" className="text-primary hover:underline cursor-pointer font-medium">Sign in</Link>
          </p>
        </div>
      </div>
    </div>
  )
}
