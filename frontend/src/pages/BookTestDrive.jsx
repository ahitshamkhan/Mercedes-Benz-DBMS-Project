import { useState } from 'react'
import { CheckCircle2, Calendar } from 'lucide-react'
import { bookTestDrive } from '../api/bookings'
import { useAuth } from '../context/AuthContext'
import PageLayout from '../components/PageLayout'

const TIMES = ['9:00 AM', '10:00 AM', '11:00 AM', '12:00 PM', '1:00 PM', '2:00 PM', '3:00 PM', '4:00 PM', '5:00 PM']

export default function BookTestDrive() {
  const { user } = useAuth()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ firstName: '', lastName: '', email: user?.email || '', phone: '', carModel: '', dealership: '', date: '', time: '' })
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }))

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true); setError('')
    try {
      await bookTestDrive({ ...form, customer_name: `${form.firstName} ${form.lastName}` })
      setSubmitted(true)
    } catch { setError('Failed to book test drive. Please try again.') } finally { setLoading(false) }
  }

  if (submitted) return (
    <PageLayout>
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="text-center max-w-md px-4">
          <div className="h-16 w-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <p className="text-primary text-xs font-mono tracking-widest uppercase mb-2">Confirmed</p>
          <h2 className="text-3xl font-bold text-foreground tracking-tight mb-3">Test Drive Scheduled</h2>
          <p className="text-muted-foreground text-sm">Your test drive has been booked. A confirmation will be sent shortly.</p>
          <button onClick={() => setSubmitted(false)} className="mt-8 border border-white/15 text-foreground px-6 py-2 rounded-md text-sm hover:border-primary/50 transition-colors">Book Another</button>
        </div>
      </div>
    </PageLayout>
  )

  return (
    <PageLayout>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2"><Calendar className="h-4 w-4 text-primary" /><p className="text-primary text-xs font-mono tracking-widest uppercase">Schedule</p></div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Book a Test Drive</h1>
          <p className="text-muted-foreground text-sm mt-1">Experience the pinnacle of driving. Select your model, date, and location.</p>
        </div>

        <div className="bg-card border border-white/8 rounded-xl p-8">
          {error && <div className="mb-5 p-3 border border-red-500/20 bg-red-500/10 rounded-lg text-red-400 text-sm">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <F label="First Name" value={form.firstName} onChange={v => set('firstName', v)} required />
              <F label="Last Name" value={form.lastName} onChange={v => set('lastName', v)} required />
            </div>
            <div className="grid grid-cols-2 gap-4">
              <F label="Email" type="email" value={form.email} onChange={v => set('email', v)} required />
              <F label="Phone" type="tel" value={form.phone} onChange={v => set('phone', v)} required />
            </div>
            <F label="Car Model" value={form.carModel} onChange={v => set('carModel', v)} placeholder="e.g. S-Class S580" required />
            <F label="Dealership" value={form.dealership} onChange={v => set('dealership', v)} placeholder="Select nearest location" required />
            <div className="grid grid-cols-2 gap-4">
              <F label="Date" type="date" value={form.date} onChange={v => set('date', v)} required />
              <div>
                <label className="block text-muted-foreground text-xs uppercase tracking-widest font-medium mb-2">Time</label>
                <select value={form.time} onChange={e => set('time', e.target.value)} required
                  className="w-full h-11 bg-black border border-white/15 text-foreground rounded-md px-3 focus:outline-none focus:border-primary/50 text-sm">
                  <option value="">Select time</option>
                  {TIMES.map(t => <option key={t} value={t}>{t}</option>)}
                </select>
              </div>
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-11 rounded-md flex items-center justify-center gap-2 transition-colors disabled:opacity-50">
              {loading ? 'Booking...' : 'Confirm Test Drive Booking'}
            </button>
          </form>
        </div>
      </div>
    </PageLayout>
  )
}

function F({ label, value, onChange, type = 'text', placeholder, required }) {
  return (
    <div>
      <label className="block text-muted-foreground text-xs uppercase tracking-widest font-medium mb-2">{label}</label>
      <input type={type} value={value} onChange={e => onChange(e.target.value)} placeholder={placeholder || label} required={required}
        className="w-full h-11 bg-black border border-white/15 text-foreground placeholder:text-muted-foreground/50 rounded-md px-3 focus:outline-none focus:border-primary/50 text-sm" />
    </div>
  )
}
