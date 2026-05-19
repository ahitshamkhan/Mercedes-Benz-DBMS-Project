import { useState } from 'react'
import { Eye, EyeOff, Lock, CheckCircle2 } from 'lucide-react'
import PageLayout from '../components/PageLayout'

export default function ChangePassword() {
  const [show, setShow] = useState({ cur: false, new: false, conf: false })
  const [form, setForm] = useState({ currentPassword: '', newPassword: '', confirmPassword: '' })
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState('')
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }))

  async function onSubmit(e) {
    e.preventDefault(); setError('')
    if (form.newPassword !== form.confirmPassword) { setError('New passwords do not match'); return }
    if (form.newPassword.length < 6) { setError('Password must be at least 6 characters'); return }
    setLoading(true)
    try { setSaved(true) } catch(err) { setError('Failed to change password') }
    finally { setLoading(false) }
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-md px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2"><Lock className="h-4 w-4 text-primary" /><p className="text-primary text-xs font-mono tracking-widest uppercase">Security</p></div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Change Password</h1>
        </div>
        <div className="bg-card border border-white/8 rounded-xl p-8">
          {success && <div className="mb-5 p-3 border border-green-500/20 bg-green-500/10 rounded-lg text-green-400 text-sm flex items-center gap-2"><CheckCircle2 className="h-4 w-4" /> Password changed successfully</div>}
          {error && <div className="mb-5 p-3 border border-red-500/20 bg-red-500/10 rounded-lg text-red-400 text-sm">{error}</div>}
          <form onSubmit={onSubmit} className="space-y-5">
            {[{ key: 'currentPassword', label: 'Current Password', vis: show.cur, toggle: () => setShow(s => ({ ...s, cur: !s.cur })) },
              { key: 'newPassword', label: 'New Password', vis: show.new, toggle: () => setShow(s => ({ ...s, new: !s.new })) },
              { key: 'confirmPassword', label: 'Confirm New Password', vis: show.conf, toggle: () => setShow(s => ({ ...s, conf: !s.conf })) }
            ].map(({ key, label, vis, toggle }) => (
              <div key={key}>
                <label className="block text-muted-foreground text-xs uppercase tracking-widest font-medium mb-2">{label}</label>
                <div className="relative">
                  <input type={vis ? 'text' : 'password'} value={form[key]} onChange={e => set(key, e.target.value)} required
                    className="w-full h-11 bg-black border border-white/15 text-foreground rounded-md px-3 pr-10 focus:outline-none focus:border-primary/50 text-sm" />
                  <button type="button" onClick={toggle} className="absolute right-3 top-1/2 -translate-y-1/2 text-muted-foreground hover:text-foreground">
                    {vis ? <EyeOff className="h-4 w-4" /> : <Eye className="h-4 w-4" />}
                  </button>
                </div>
              </div>
            ))}
            <button type="submit" disabled={loading} className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-11 rounded-md transition-colors disabled:opacity-50">
              {loading ? 'Updating...' : 'Update Password'}
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  )
}
