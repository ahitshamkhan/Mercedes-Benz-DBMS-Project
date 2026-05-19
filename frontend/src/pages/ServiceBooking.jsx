import { useState } from 'react'
import { CheckCircle2, Wrench } from 'lucide-react'
import { bookTestDrive } from '../api/bookings'
import { useAuth } from '../context/AuthContext'
import PageLayout from '../components/PageLayout'

const SERVICES = ['Annual Maintenance', 'Oil Change', 'Tire Rotation', 'Brake Service', 'Detailing', 'Inspection', 'Repair', 'Recall Service']
const LOCATIONS = ['Downtown Service Center', 'Airport Road Workshop', 'Gulberg Lahore Service', 'DHA Karachi Centre', 'Islamabad Branch']

export default function ServiceBooking() {
  const { user } = useAuth()
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [form, setForm] = useState({ name: user?.name || '', email: user?.email || '', phone: '', vehicle: '', serviceType: '', location: '', date: '', notes: '' })
  const set = (k, v) => setForm(p => ({ ...p, [k]: v }))

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true); setError('')
    try { await bookTestDrive({ ...form, type: 'service', customer_name: form.name }); setSubmitted(true) }
    catch { setError('Failed to schedule service. Please try again.') }
    finally { setLoading(false) }
  }

  if (submitted) return (
    <PageLayout>
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="text-center max-w-md px-4">
          <div className="h-16 w-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <p className="text-primary text-xs font-mono tracking-widest uppercase mb-2">Confirmed</p>
          <h2 className="text-3xl font-bold text-foreground tracking-tight mb-3">Service Scheduled</h2>
          <p className="text-muted-foreground text-sm">Your appointment is confirmed. A specialist will contact you shortly.</p>
          <button onClick={() => setSubmitted(false)} className="mt-8 border border-white/15 text-foreground px-6 py-2 rounded-md text-sm hover:border-primary/50 transition-colors">Schedule Another</button>
        </div>
      </div>
    </PageLayout>
  )

  return (
    <PageLayout>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2"><Wrench className="h-4 w-4 text-primary" /><p className="text-primary text-xs font-mono tracking-widest uppercase">Service Center</p></div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Schedule Service</h1>
          <p className="text-muted-foreground text-sm mt-1">Book your vehicle's service with a certified Mercedes-Benz technician.</p>
        </div>

        <div className="bg-card border border-white/8 rounded-xl p-8">
          {error && <div className="mb-5 p-3 border border-red-500/20 bg-red-500/10 rounded-lg text-red-400 text-sm">{error}</div>}
          <form onSubmit={handleSubmit} className="space-y-5">
            <div className="grid grid-cols-2 gap-4">
              <F label="Full Name" value={form.name} onChange={v => set('name', v)} required />
              <F label="Phone" type="tel" value={form.phone} onChange={v => set('phone', v)} required />
            </div>
            <F label="Email" type="email" value={form.email} onChange={v => set('email', v)} required />
            <F label="Your Vehicle" value={form.vehicle} onChange={v => set('vehicle', v)} placeholder="e.g. 2023 Mercedes-Benz C300" required />
            <div className="grid grid-cols-2 gap-4">
              <S label="Service Type" value={form.serviceType} onChange={v => set('serviceType', v)} opts={SERVICES} required />
              <S label="Location" value={form.location} onChange={v => set('location', v)} opts={LOCATIONS} required />
            </div>
            <F label="Preferred Date" type="date" value={form.date} onChange={v => set('date', v)} required />
            <div>
              <label className="block text-muted-foreground text-xs uppercase tracking-widest font-medium mb-2">Additional Notes</label>
              <textarea value={form.notes} onChange={e => set('notes', e.target.value)} rows={3}
                placeholder="Describe any issues or specific requests..."
                className="w-full bg-black border border-white/15 text-foreground placeholder:text-muted-foreground/50 rounded-md px-3 py-3 focus:outline-none focus:border-primary/50 text-sm resize-none" />
            </div>
            <button type="submit" disabled={loading}
              className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-11 rounded-md flex items-center justify-center gap-2 transition-colors disabled:opacity-50">
              <Wrench className="h-4 w-4" /> {loading ? 'Scheduling...' : 'Schedule Service Appointment'}
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
function S({ label, value, onChange, opts, required }) {
  return (
    <div>
      <label className="block text-muted-foreground text-xs uppercase tracking-widest font-medium mb-2">{label}</label>
      <select value={value} onChange={e => onChange(e.target.value)} required={required}
        className="w-full h-11 bg-black border border-white/15 text-foreground rounded-md px-3 focus:outline-none focus:border-primary/50 text-sm">
        <option value="">Select…</option>
        {opts.map(o => <option key={o} value={o}>{o}</option>)}
      </select>
    </div>
  )
}
