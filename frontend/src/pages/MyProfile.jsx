import { useState, useEffect } from 'react'
import { User, Camera, CheckCircle2 } from 'lucide-react'
import { useAuth } from '../context/AuthContext'
import PageLayout from '../components/PageLayout'

export default function MyProfile() {
  const { user } = useAuth()
  const [saved, setSaved] = useState(false)
  const [loading, setLoading] = useState(false)
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', address: '', city: '' })
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }))

  useEffect(() => {
    if (user) {
      const parts = (user.name || '').split(' ')
      setForm({ firstName: parts[0] || '', lastName: parts.slice(1).join(' ') || '', email: user.email || '', phone: user.phone || '', address: user.address || '', city: user.city || '' })
    }
  }, [user])

  async function onSubmit(e) {
    e.preventDefault(); setLoading(true)
    try { setSaved(true); setTimeout(() => setSaved(false), 3000) } catch {}
    finally { setLoading(false) }
  }

  const initials = `${form.firstName?.[0] || ''}${form.lastName?.[0] || ''}`.toUpperCase() || 'MB'

  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <div className="flex items-center gap-2 mb-2">
            <User className="h-4 w-4 text-primary" />
            <p className="text-primary text-xs font-mono tracking-widest uppercase">Account</p>
          </div>
          <h1 className="text-4xl font-bold text-foreground tracking-tight">My Profile</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Avatar card */}
          <div className="md:col-span-1">
            <div className="bg-card border border-white/8 rounded-xl p-6 text-center">
              <div className="relative inline-block mb-4">
                <div className="h-20 w-20 rounded-full bg-primary/20 border border-primary/40 flex items-center justify-center mx-auto">
                  <span className="text-primary text-2xl font-bold">{initials}</span>
                </div>
                <button className="absolute bottom-0 right-0 h-6 w-6 rounded-full bg-primary border-2 border-card flex items-center justify-center">
                  <Camera className="h-3 w-3 text-white" />
                </button>
              </div>
              <h3 className="text-foreground font-semibold">{form.firstName} {form.lastName}</h3>
              <p className="text-muted-foreground text-xs mt-1">{form.email}</p>
              <div className="mt-4 pt-4 border-t border-white/8 space-y-2">
                <div className="flex justify-between text-xs"><span className="text-muted-foreground">Status</span><span className="text-primary font-mono">Active</span></div>
                <div className="flex justify-between text-xs"><span className="text-muted-foreground">Role</span><span className="text-foreground font-mono capitalize">{user?.role || 'Customer'}</span></div>
              </div>
            </div>
          </div>
          {/* Form */}
          <div className="md:col-span-2">
            <div className="bg-card border border-white/8 rounded-xl p-6">
              <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-5">Personal Information</h3>
              {saved && <div className="mb-4 p-3 border border-green-500/20 bg-green-500/10 rounded-lg text-green-400 text-sm flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Profile updated successfully</div>}
              <form onSubmit={onSubmit} className="space-y-4">
                <div className="grid grid-cols-2 gap-4">
                  <F label="First Name" value={form.firstName} onChange={v => set('firstName', v)} />
                  <F label="Last Name" value={form.lastName} onChange={v => set('lastName', v)} />
                </div>
                <F label="Email" type="email" value={form.email} onChange={v => set('email', v)} />
                <F label="Phone" type="tel" value={form.phone} onChange={v => set('phone', v)} />
                <div className="grid grid-cols-2 gap-4">
                  <F label="Address" value={form.address} onChange={v => set('address', v)} />
                  <F label="City" value={form.city} onChange={v => set('city', v)} />
                </div>
                <div className="pt-2">
                  <button type="submit" disabled={loading} className="flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold h-10 px-6 rounded-md transition-colors disabled:opacity-50">
                    <CheckCircle2 className="h-4 w-4" /> {loading ? 'Saving...' : 'Save Changes'}
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}

function F({ label, value, onChange, type = 'text' }) {
  return (
    <div>
      <label className="block text-muted-foreground text-xs uppercase tracking-widest mb-2">{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)}
        className="w-full h-10 bg-black border border-white/15 text-foreground rounded-md px-3 focus:outline-none focus:border-primary/50 text-sm" />
    </div>
  )
}
