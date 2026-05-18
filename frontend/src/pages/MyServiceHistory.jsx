import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getMyServices } from '../api/services'

const FALLBACK = [
  { id: 1, status: 'Scheduled', date: 'October 24, 2024', title: 'Annual Performance Inspection', dealer: 'Silver Star Signature Dealership', desc: 'Comprehensive diagnostics of drive-train, brake systems, and software calibration.', icon: 'tools_wrench', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDO7ODNv7Wtg6GNw5pp4fpXI4587GrjwX_1HFfF2_n7COdSmWniytMNwJlWOyTOs75tCs0mbjdisCZAbCsHwKuSRuT6EaN_zZnYXin4XFlxmHDgGCsiiYiDmjoP_-4YvtmwpGjwSjLs3lkrjHGhDv9ghO90taW9XTe5Uxm4p00SaVHbkUIbEo6ECCKsP7JDBckLHJxZ6WT-U2bIathCD7jK97aMAfInUClzHmIUuKDFJbsk-WLN7alXtCAnFbquk7wHNxp5h8hwMO4' },
  { id: 2, status: 'Completed', date: 'August 12, 2024', title: 'Tyre Rotation & Dynamic Balance', dealer: 'AMG Performance Center East', desc: 'Precision alignment and rotation for optimal road contact.', icon: 'tire_repair', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtcSnhcsd15tP1SO2DMJC_7-JASH19dIGNGB4S3sj0P-0LNmFX3GmI9NU27PLldb2l8WoF50aoeYK_Pv_ZbMRFb8zzZlfpTt3nnFQJk3s8zIjeiSPPQo2PNl-WQpgF7lLiUI9WUu00k22B2bxfUQQ17xc-HdCAY8dgY1j13YPH_eU8eRWUjxN0x0-lOMM5hcvFQk6YsnqngkYNfTE-gTHXWLfIeqzLO8K1t2gj_f0_UeuANDA8J6j8TJgbmiHfzSQnC4wknKTnkB8' },
  { id: 3, status: 'Completed', date: 'May 05, 2024', title: 'MBUX Software Optimization', dealer: 'Silver Star Signature Dealership', desc: 'Firmware update v2.4.1 with enhanced voice recognition and new nav maps.', icon: 'update', image: null },
]

export default function MyServiceHistory() {
  const { logout } = useAuth()
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const fetchData = async () => {
      try { const res = await getMyServices(); setServices(res.data) }
      catch { setServices(FALLBACK) }
      finally { setLoading(false) }
    }
    fetchData()
  }, [])

  const filtered = filter === 'All' ? services : services.filter(s => s.status === filter)

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 glass-nav z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4 group hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined text-[#C8A97E] text-2xl star-glow" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <Link to="/" className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase hover:text-[#e5c497] transition-colors">Mercedes-Benz</Link>
        </div>
        <nav className="hidden md:flex items-center gap-12">
          <Link className="text-[#c0c0c0] hover:text-[#C8A97E] transition-all text-xs uppercase tracking-wider opacity-70 hover:opacity-100" to="/">Cars</Link>
          <Link className="text-[#c0c0c0] hover:text-[#C8A97E] transition-all text-xs uppercase tracking-wider opacity-70 hover:opacity-100" to="/book-test-drive">Test Drive</Link>
          <Link className="text-[#C8A97E] border-b-2 border-[#C8A97E] pb-1 text-xs uppercase tracking-wider" to="/my-service-history">Service</Link>
          <Link className="text-[#c0c0c0] hover:text-[#C8A97E] transition-all text-xs uppercase tracking-wider opacity-70 hover:opacity-100" to="/my-orders">My Orders</Link>
        </nav>
        <button className="text-[#C8A97E] hover:bg-[#C8A97E]/10 px-6 py-2 transition-all rounded-sm border border-[#C8A97E]/40 hover:border-[#C8A97E] text-xs uppercase tracking-wider" onClick={logout}>Sign Out</button>
      </header>

      <main className="pt-32 pb-40 px-6 md:px-20 max-w-[1440px] mx-auto">
        <section className="mb-20 animate-fade-up">
          <div className="inline-block mb-6">
            <span className="font-label-sm text-primary uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">🛠 Service Records</span>
          </div>
          <h1 className="font-headline-h1 text-on-background mb-6 text-4xl md:text-5xl">Service History</h1>
          <p className="font-body-lg text-outline max-w-2xl leading-relaxed">Maintain the integrity of your Mercedes-Benz with a detailed chronology of all service engagements. Track maintenance, updates, and repairs.</p>
        </section>

        <div className="flex gap-8 mb-16 border-b border-outline-variant/30 pb-6">
          {['All', 'Scheduled', 'Completed'].map((f, idx) => (
            <button key={f} className={`font-label-sm transition-all duration-300 relative group text-xs uppercase tracking-wider ${filter === f ? 'text-primary' : 'text-[#c0c0c0] hover:text-primary'}`} onClick={() => setFilter(f)}>
              {f}
              {filter === f && <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary/0 rounded-full"></div>}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin"></div>
            </div>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block" style={{ background: 'linear-gradient(to bottom, transparent, #c8a97e 15%, #c8a97e 85%, transparent)' }}></div>
            <div className="flex flex-col gap-12">
              {filtered.map((s, idx) => {
                const isScheduled = s.status === 'Scheduled'
                return (
                  <div key={s.id} className="relative flex flex-col md:flex-row gap-12 group animate-fade-up" style={{animationDelay: `${idx * 50}ms`}}>
                    <div className={`absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full ring-4 ring-background z-10 hidden md:block transition-all duration-300 ${isScheduled ? 'bg-primary ring-primary/30' : 'bg-outline-variant ring-outline-variant/30'}`}></div>
                    <div className="md:w-1/4 pt-2">
                      <span className={`font-label-sm tracking-[0.2em] uppercase ${isScheduled ? 'text-primary' : 'text-outline'}`}>{s.date}</span>
                      <div className={`mt-2 inline-flex items-center px-3 py-1 border text-[10px] tracking-widest uppercase rounded-full ${isScheduled ? 'bg-primary/10 border-primary/20 text-primary' : 'bg-outline-variant/10 border-outline-variant/20 text-outline'}`}>{s.status}</div>
                    </div>
                    <div className={`md:w-3/4 glass-card p-8 rounded-lg hover:border-primary/40 transition-all ${!isScheduled ? 'border-outline-variant/20' : ''}`}>
                      <div className="flex justify-between items-start mb-6">
                        <div>
                          <h3 className={`font-headline-h3 mb-1 ${isScheduled ? 'text-on-surface' : 'text-on-surface-variant'}`}>{s.title}</h3>
                          <p className="font-label-sm text-outline">{s.dealer}</p>
                        </div>
                        <span className={`material-symbols-outlined text-4xl ${isScheduled ? 'text-primary' : 'text-outline'}`}>{s.icon}</span>
                      </div>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                        <div>
                          <p className={`text-body-md mb-4 ${isScheduled ? 'text-on-surface-variant' : 'text-outline'}`}>{s.desc}</p>
                          {isScheduled ? (
                            <div className="flex gap-4">
                              <button className="px-6 py-2 border border-primary/30 font-label-sm text-primary hover:bg-primary hover:text-on-primary transition-all">Reschedule</button>
                              <button className="px-6 py-2 font-label-sm text-outline hover:text-on-surface transition-all">Details</button>
                            </div>
                          ) : (
                            <button className="px-6 py-2 border border-outline/30 font-label-sm text-outline hover:border-primary/50 hover:text-primary transition-all">Download Receipt</button>
                          )}
                        </div>
                        {s.image && (
                          <div className="relative h-40 overflow-hidden rounded">
                            <img className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700" src={s.image} alt={s.title} />
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}

        <section className="mt-20 flex flex-col items-center text-center p-20 glass-card rounded-xl">
          <h2 className="font-headline-h2 text-on-surface mb-6 italic">Maintain Perfection.</h2>
          <p className="font-body-lg text-outline max-w-xl mb-10">Preserve your vehicle's performance through our world-class maintenance network.</p>
          <Link to="/service-booking" className="px-12 py-4 border border-primary text-primary font-label-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all">Schedule New Service</Link>
        </section>
      </main>

      <footer className="w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div>
          <Link to="/" className="text-lg font-semibold text-white mb-8 block">Mercedes-Benz</Link>
          <p className="text-zinc-500 text-sm max-w-xs leading-relaxed">The pinnacle of luxury and technical excellence.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/">Cars</Link>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/my-orders">My Orders</Link>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/wishlist">Wishlist</Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link className="text-[#C8A97E] text-sm" to="/my-service-history">Service</Link>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/about">Contact</Link>
          </div>
        </div>
        <div>
          <p className="text-zinc-500 text-sm">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
