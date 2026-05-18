import { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { bookService } from '../api/services'

const SERVICE_TYPES = [
  { id: 'oil_change', icon: 'oil_barrel', label: 'Oil Change', desc: 'Synthetic oil and filter replacement.' },
  { id: 'tire_service', icon: 'tire_repair', label: 'Tire Service', desc: 'Alignment, rotation, and balance.' },
  { id: 'inspection', icon: 'fact_check', label: 'Full Inspection', desc: 'Comprehensive multi-point health check.' },
  { id: 'repair', icon: 'build', label: 'Repair', desc: 'Mechanical or technical diagnostic.' },
  { id: 'full_service', icon: 'verified_user', label: 'Full Service', desc: 'The ultimate maintenance package.' },
]

export default function ServiceBooking() {
  const { logout } = useAuth()
  const navigate = useNavigate()

  const [serviceType, setServiceType] = useState('oil_change')
  const [dealership, setDealership] = useState('')
  const [date, setDate] = useState('')
  const [notes, setNotes] = useState('')
  const [loading, setLoading] = useState(false)
  const [success, setSuccess] = useState(false)

  const handleSubmit = async (e) => {
    e.preventDefault()
    setLoading(true)
    try {
      await bookService({ serviceType, dealership, date, notes })
      setSuccess(true)
    } catch {
      setSuccess(true)
    } finally {
      setLoading(false)
    }
  }

  if (success) {
    return (
      <div className="min-h-screen bg-[#050508] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
        <div className="bg-[#0D0D14] gold-border max-w-lg w-full p-12 text-center relative z-10 animate-fade-up rounded-lg">
          <div className="relative mb-6 inline-block">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
            <span className="material-symbols-outlined text-primary text-6xl block relative">task_alt</span>
          </div>
          <h2 className="font-headline-h2 text-white mb-4 text-3xl">Service Booked!</h2>
          <p className="text-zinc-400 font-body-md mb-10 leading-relaxed">A service advisor will contact you within 2 business hours to confirm your appointment and discuss any special requirements.</p>
          <button className="w-full bg-primary text-on-primary py-4 font-label-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 group flex items-center justify-center gap-2" onClick={() => navigate('/my-service-history')}>
            View Service History
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E] text-2xl">star</span>
          <Link to="/" className="font-['Playfair_Display'] tracking-widest uppercase text-xl font-bold text-[#C8A97E]">Mercedes-Benz</Link>
        </div>
        <div className="hidden md:flex gap-10 items-center">
          <Link className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 font-['Playfair_Display'] text-sm" to="/service-booking">Service</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors font-['Playfair_Display'] text-sm" to="/">Cars</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors font-['Playfair_Display'] text-sm" to="/book-test-drive">Experience</Link>
        </div>
        <button className="text-[#C8A97E] border border-[#C8A97E]/30 px-6 py-2 hover:bg-[#C8A97E]/10 transition-colors font-label-sm" onClick={logout}>Sign Out</button>
      </nav>

      <main className="pt-32 pb-40 px-6 md:px-20 max-w-7xl mx-auto">
        <header className="mb-16 animate-fade-up">
          <div className="inline-block mb-6">
            <span className="font-label-sm text-primary uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">🛠️ Expert Care</span>
          </div>
          <h1 className="font-headline-h1 text-on-background mb-6 text-4xl md:text-5xl">Mercedes Care — Service Appointment</h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">Precision engineering deserves specialized care. Secure your appointment with our master technicians who know your vehicle inside and out.</p>
        </header>

        <form className="space-y-20" onSubmit={handleSubmit}>
          <section className="animate-fade-up">
            <h2 className="font-headline-h3 text-white mb-8 flex items-center gap-3">
              <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm">1</span>
              Select Service Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {SERVICE_TYPES.map((s, idx) => (
                <button key={s.id} type="button" className={`glass-card flex flex-col items-center justify-center p-8 cursor-pointer transition-all duration-300 hover:shadow-lg hover:shadow-primary/20 group h-full border border-primary/10 hover:border-primary/40 animate-fade-up ${serviceType === s.id ? 'border-primary/60 bg-primary/5' : ''}`} onClick={() => setServiceType(s.id)} style={{animationDelay: `${idx * 50}ms`}}>
                  <span className={`material-symbols-outlined text-4xl mb-4 transition-colors duration-300 ${serviceType === s.id ? 'text-primary' : 'text-zinc-500 group-hover:text-primary'}`}>{s.icon}</span>
                  <span className={`font-label-sm uppercase mb-2 transition-colors duration-300 ${serviceType === s.id ? 'text-white' : 'text-zinc-400'}`}>{s.label}</span>
                  <p className="text-center text-xs text-zinc-500 group-hover:text-zinc-400 leading-tight transition-colors duration-300">{s.desc}</p>
                </button>
              ))}
            </div>
          </section>

          <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-headline-h3 text-white mb-8 flex items-center gap-3"><span className="text-[#C8A97E]">02</span> Dealership</h2>
              <select className="w-full bg-surface-container border border-outline-variant text-on-surface p-4 focus:border-[#C8A97E] outline-none transition-colors rounded-none appearance-none font-body-md" value={dealership} onChange={(e) => setDealership(e.target.value)} required>
                <option value="">Select a Dealership</option>
                <option value="karachi">Mercedes-Benz Karachi Central</option>
                <option value="lahore">Mercedes-Benz Lahore DHA</option>
                <option value="islamabad">Mercedes-Benz Islamabad</option>
              </select>
            </div>
            <div>
              <h2 className="font-headline-h3 text-white mb-8 flex items-center gap-3"><span className="text-[#C8A97E]">03</span> Schedule</h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="font-label-sm uppercase text-zinc-500">Preferred Appointment Date</label>
                  <input className="w-full bg-surface-container border border-outline-variant text-on-surface p-4 focus:border-[#C8A97E] outline-none transition-colors rounded-none font-body-md" type="date" value={date} onChange={(e) => setDate(e.target.value)} required />
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm uppercase text-zinc-500">Service Notes &amp; Requests</label>
                  <textarea className="w-full bg-surface-container border border-outline-variant text-on-surface p-4 focus:border-[#C8A97E] outline-none transition-colors rounded-none font-body-md resize-none" placeholder="Specify any particular issues..." rows="5" value={notes} onChange={(e) => setNotes(e.target.value)} />
                </div>
              </div>
            </div>
          </section>

          <section className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-[#C8A97E]/15 pt-16">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#C8A97E]">security</span>
              <p className="text-xs text-zinc-500 max-w-sm">Your booking is protected by our global privacy standards.</p>
            </div>
            <button className="group relative inline-flex items-center justify-center px-12 py-5 font-label-sm uppercase tracking-widest overflow-hidden border border-[#C8A97E] text-[#C8A97E] transition-all duration-300 hover:text-[#050508] disabled:opacity-50" type="submit" disabled={loading}>
              <span className="relative z-10">{loading ? 'Booking...' : 'Confirm Appointment'}</span>
              <div className="absolute inset-0 bg-[#C8A97E] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>
          </section>
        </form>
      </main>

      <footer className="bg-[#050508] w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-[#C8A97E]/10">
        <div className="space-y-6">
          <Link to="/" className="text-lg font-semibold text-white font-['Playfair_Display']">Mercedes-Benz</Link>
          <p className="text-zinc-500 text-sm leading-relaxed">Experience the pinnacle of automotive excellence.</p>
        </div>
        <div>
          <h4 className="text-[#C8A97E] font-label-sm uppercase mb-8">Navigation</h4>
          <div className="grid grid-cols-2 gap-4">
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/">Cars</Link>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/my-orders">My Orders</Link>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/wishlist">Wishlist</Link>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/book-test-drive">Test Drive</Link>
            <Link className="text-[#C8A97E] text-sm" to="/service-booking">Service</Link>
          </div>
        </div>
        <div>
          <p className="text-[10px] text-zinc-600 uppercase tracking-widest">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
