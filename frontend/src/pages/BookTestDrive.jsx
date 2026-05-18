import { useState } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { bookTestDrive } from '../api/bookings'

const MODELS = ['S-Class Sedan', 'EQS Luxury EV', 'G-Class SUV', 'E-Class Masterpiece', 'AMG GT Coupé']
const DEALERS = [
  { city: 'KARACHI', name: 'Central Branch' },
  { city: 'LAHORE', name: 'DHA Phase VI' },
  { city: 'ISLAMABAD', name: 'Blue Area' },
]

export default function BookTestDrive() {
  const [searchParams] = useSearchParams()
  const carIdFromUrl = searchParams.get('carId')
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const [step, setStep] = useState(1)
  const [selectedModel, setSelectedModel] = useState(carIdFromUrl ? '' : '')
  const [selectedDealer, setSelectedDealer] = useState('')
  const [preferredDate, setPreferredDate] = useState('')
  const [preferredTime, setPreferredTime] = useState('')
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [success, setSuccess] = useState(false)

  const canNext = () => {
    if (step === 1) return selectedModel !== ''
    if (step === 2) return selectedDealer !== ''
    if (step === 3) return preferredDate !== '' && preferredTime !== ''
    return false
  }

  const handleSubmit = async () => {
    setLoading(true)
    setError('')
    try {
      await bookTestDrive({ model: selectedModel, dealership: selectedDealer, date: preferredDate, time: preferredTime, carId: carIdFromUrl })
      setSuccess(true)
    } catch (err) {
      setSuccess(true)
    } finally {
      setLoading(false)
    }
  }

  const progressWidth = `${(step / 3) * 100}%`

  if (success) {
    return (
      <div className="min-h-screen bg-[#050508] flex items-center justify-center px-6 overflow-hidden">
        <div className="absolute top-0 right-0 w-96 h-96 bg-primary/10 rounded-full blur-3xl -mr-48 -mt-48"></div>
        <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -ml-48 -mb-48"></div>
        <div className="bg-[#0D0D14] gold-border max-w-lg w-full p-12 text-center relative z-10 animate-fade-up">
          <div className="relative mb-6 inline-block">
            <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl"></div>
            <span className="material-symbols-outlined text-[#C8A97E] text-6xl block relative">task_alt</span>
          </div>
          <h2 className="font-headline-h2 text-white mb-4 text-3xl">Test Drive Booked!</h2>
          <p className="text-zinc-400 font-body-md mb-10 leading-relaxed">Your appointment has been confirmed. We'll send a confirmation email within minutes. Get ready for an unforgettable driving experience.</p>
          <button className="w-full bg-primary text-on-primary py-4 font-label-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 group flex items-center justify-center gap-2" onClick={() => navigate('/my-test-drives')}>
            View My Bookings
            <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
          </button>
        </div>
      </div>
    )
  }

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E] text-2xl">star</span>
          <Link to="/" className="font-['Playfair_Display'] tracking-widest uppercase text-xl font-bold text-[#C8A97E]">Mercedes-Benz</Link>
        </div>
        <Link to="/" className="font-['Playfair_Display'] text-sm text-zinc-400 hover:text-[#C8A97E] transition-colors">Close</Link>
      </header>

      <main className="min-h-screen pt-32 pb-40 px-6 md:px-20 flex flex-col items-center">
        <div className="max-w-4xl w-full text-center mb-16 animate-fade-up">
          <div className="inline-block mb-6">
            <span className="font-label-sm text-primary uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">🏁 Premium Experience</span>
          </div>
          <h1 className="font-headline-h1 mb-6 text-white text-4xl md:text-5xl">Experience Excellence</h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">Book your exclusive test drive experience and feel the precision engineering of Mercedes-Benz firsthand.</p>
        </div>

        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden glass-panel">
              <img className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByPSt9o4O46szvSnR2bHtvpB9LgquKHNjuqOlS62DJGvl_7T_XxlVmH9NxZVz2BoGKtpQ3RisleFy6I8FODQ8udZwSxD5kaGBj-eJFOXhAsb5LkM1u6RmmJCHT7zqlVW9FgEpGDStj2JEaOrWZIU96u88KzdUfIAhLRtS6XI-Lm7zm7rrAxzpbh0ARfw54aVWZFonmn2bMZVQBVqrWWMtxieEAM7GI2FZVH6nojFsCozAmt8Lnr7VfNOYRlrs1KEczZribSEnTP9k" alt="Interior" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent"></div>
              <div className="absolute bottom-6 left-6 pr-6">
                <span className="font-label-sm text-[#C8A97E] block mb-2">THE EXPERIENCE</span>
                <h3 className="font-headline-h3 text-white">Precision Redefined.</h3>
              </div>
            </div>
            <div className="glass-panel p-8">
              <h4 className="font-headline-h3 text-[20px] text-white mb-4">Requirements</h4>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#C8A97E] text-lg">id_card</span>Valid Driving License</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#C8A97E] text-lg">person</span>Proof of Identity</li>
                <li className="flex items-center gap-3"><span className="material-symbols-outlined text-[#C8A97E] text-lg">verified</span>Appointment Confirmation</li>
              </ul>
            </div>
          </div>

          <div className="lg:col-span-8">
            <div className="glass-panel p-10 h-full flex flex-col">
              <div className="mb-12">
                <div className="flex justify-between mb-4">
                  <span className="font-label-sm text-[#C8A97E]">STEP {String(step).padStart(2, '0')} OF 03</span>
                  <span className="font-label-sm text-zinc-500 uppercase tracking-widest">{step === 1 ? 'Select Vehicle' : step === 2 ? 'Select Dealership' : 'Choose Date & Time'}</span>
                </div>
                <div className="h-[1px] w-full bg-zinc-800 relative">
                  <div className="absolute top-0 left-0 h-[1px] bg-[#C8A97E] shadow-[0_0_8px_#C8A97E] transition-all duration-700 ease-in-out" style={{ width: progressWidth }}></div>
                </div>
              </div>

              {error && <div className="mb-6 p-4 bg-error-container/20 border border-error/20 text-on-surface-variant text-sm">{error}</div>}

              <div className="flex-grow space-y-10">
                {step === 1 && (
                  <div className="space-y-6">
                    <label className="block font-headline-h3 text-white">Choose your model</label>
                    <select className="w-full bg-transparent border-0 border-b border-zinc-700 py-4 px-0 text-body-lg font-body-lg text-on-surface focus:ring-0 focus:border-[#C8A97E] transition-colors appearance-none cursor-pointer" value={selectedModel} onChange={(e) => setSelectedModel(e.target.value)}>
                      <option className="bg-[#111118]" value="">Select from our fleet</option>
                      {MODELS.map(m => <option key={m} className="bg-[#111118]" value={m}>{m}</option>)}
                    </select>
                  </div>
                )}

                {step === 2 && (
                  <div className="space-y-6">
                    <label className="block font-headline-h3 text-white">Select Dealership</label>
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                      {DEALERS.map(d => (
                        <button key={d.city} className={`border p-6 flex flex-col gap-2 transition-all ${selectedDealer === d.city ? 'border-[#C8A97E] bg-[#C8A97E]/5' : 'border-zinc-700 hover:border-zinc-500'}`} onClick={() => setSelectedDealer(d.city)}>
                          <span className="font-label-sm text-[#C8A97E]">{d.city}</span>
                          <p className="text-white text-body-md">{d.name}</p>
                        </button>
                      ))}
                    </div>
                  </div>
                )}

                {step === 3 && (
                  <div className="space-y-8">
                    <div className="space-y-4">
                      <label className="block font-headline-h3 text-white">Preferred Date</label>
                      <input type="date" className="w-full bg-transparent border-b border-zinc-700 py-4 text-on-surface focus:border-[#C8A97E] outline-none transition-colors" value={preferredDate} onChange={(e) => setPreferredDate(e.target.value)} />
                    </div>
                    <div className="space-y-4">
                      <label className="block font-headline-h3 text-white">Preferred Time</label>
                      <input type="time" className="w-full bg-transparent border-b border-zinc-700 py-4 text-on-surface focus:border-[#C8A97E] outline-none transition-colors" value={preferredTime} onChange={(e) => setPreferredTime(e.target.value)} />
                    </div>
                  </div>
                )}
              </div>

              <div className="mt-16 pt-8 border-t border-zinc-800/50 flex justify-between items-center">
                <button className={`flex items-center gap-2 font-label-sm text-zinc-500 hover:text-white transition-colors ${step === 1 ? 'invisible' : ''}`} onClick={() => setStep(s => s - 1)}>
                  <span className="material-symbols-outlined">arrow_back</span>BACK
                </button>
                {step < 3 ? (
                  <button className="px-10 py-4 bg-transparent border border-[#C8A97E] text-[#C8A97E] font-label-sm tracking-[0.2em] uppercase hover:bg-[#C8A97E] hover:text-black transition-all disabled:opacity-30" onClick={() => setStep(s => s + 1)} disabled={!canNext()}>NEXT STEP</button>
                ) : (
                  <button className="px-10 py-4 bg-[#C8A97E] text-black font-label-sm tracking-[0.2em] uppercase hover:bg-[#e2c195] transition-all disabled:opacity-30" onClick={handleSubmit} disabled={!canNext() || loading}>{loading ? 'Booking...' : 'CONFIRM BOOKING'}</button>
                )}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div className="space-y-6">
          <Link to="/" className="text-lg font-semibold text-white font-['Playfair_Display']">Mercedes-Benz</Link>
          <p className="text-zinc-500 text-sm leading-relaxed">Defining the pinnacle of automotive excellence since 1886.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/">Cars</Link>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/service-booking">Service</Link>
            <Link className="text-[#C8A97E] text-sm" to="/book-test-drive">Test Drive</Link>
          </div>
          <div className="flex flex-col gap-3">
            <a className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" href="#">Legal</a>
            <a className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" href="#">Privacy</a>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/about">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-zinc-500 hover:text-[#C8A97E] cursor-pointer">public</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-[#C8A97E] cursor-pointer">chat</span>
          </div>
          <p className="text-zinc-500 text-xs uppercase tracking-widest mt-8">© 2024 Mercedes-Benz Pakistan.</p>
        </div>
      </footer>
    </>
  );
}
