import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getMyTestDrives, cancelTestDrive } from '../api/bookings'

const FALLBACK = [
  { id: 1, status: 'Pending', car: 'GLE 450 4MATIC', variant: 'Obsidian Black Metallic', dealer: 'Mercedes-Benz Karachi Central', date: 'Nov 12, 2024', time: '10:30 AM', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBgZN5d7rvEau8lSrp7PI9ePpGFwOZv08bxeYOqGnf4cPoahWgz3zAP0OZmlTcaR4UhgeI79gO10eo92r5KCls2Wl4P3KAUlci33A7p5gCe2VViRxI3C6UOUuJOqEFccIxkrFoUMzRo9QUxZRISfZtedwlEQ32tTsFM1AbT0bxVm2hqnxblECcwG0ShBcvFnOwRSmBjONZy-Hm5fxIyZlTy58cUnltm6pwCsse47FvD4NOWgEcm-tAQHDCSv_JCagF-kXwp0IFIvQQ' },
  { id: 2, status: 'Confirmed', car: 'S-Class S 500', variant: 'High-Tech Silver', dealer: 'Mercedes-Benz Lahore Signature', date: 'Oct 28, 2024', time: '02:00 PM', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC8ln03Ovuk6sYGDir8vbYiaplx_86SyHfMd9jX2y2T6uOGcT4_SDlsVWA55ozVh9tSd2xigo1V1hXjCRR2HgBRrf_20QuityFc32MZX_2PHhK9S9Pd585x3Lo-CdrN4KFtEetN9LjimJGTkvQOREQ_wJOzCa63wYiFcC3gbYTt0M03bDI1rMVt60P6Sn2kfofvFfdqKCt3wDltJuYRF4flYAdOYXCqIjW6sO1dRv_xAb5soGdx3ICR24xR9A-CWPTcpv6T9EzFtQE' },
  { id: 3, status: 'Completed', car: 'EQS 580 4MATIC', variant: 'Nautical Blue', dealer: 'Mercedes-Benz Islamabad Hub', date: 'Sep 15, 2024', time: '11:00 AM', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCaKVpyWL2QnIFkqmY9TyHE588Jew-yOaFbM4uph8887rrGiY4Sl9_AaiqzjRVDjT6kce_Ek1WP822lA_NTUAfPB7Yt0eiBO1j4m8_fiNikVQKKQYyutHOGLsOUYgWCyI758CqovQwgScT7WL_zNwp3udPvDN71Bbnc4bSXhecKYehstysiujdKHmWoR1z_8sRcTTi4CSguWAZHgQVYabBCiJuSPODHc_7rlKr5m_cplnYST5xzTMyLcOPJPspk52S3zuDkRJPnLHM' },
]

const badgeStyle = (s) => {
  if (s === 'Pending') return 'bg-amber-500/10 text-amber-500'
  if (s === 'Confirmed') return 'bg-blue-500/10 text-blue-500'
  return 'bg-[#C8A97E]/10 text-[#C8A97E]'
}

const dotColor = (s) => {
  if (s === 'Pending') return 'bg-amber-500 animate-pulse'
  if (s === 'Confirmed') return 'bg-blue-500'
  return 'bg-[#C8A97E]'
}

export default function MyTestDrives() {
  const { logout } = useAuth()
  const [drives, setDrives] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getMyTestDrives()
        setDrives(res.data)
      } catch { setDrives(FALLBACK) }
      finally { setLoading(false) }
    }
    fetchData()
  }, [])

  const handleCancel = async (id) => {
    try { await cancelTestDrive(id) } catch {}
    setDrives(prev => prev.filter(d => d.id !== id))
  }

  return (
    <>
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E] text-2xl">star</span>
          <Link to="/" className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</Link>
        </div>
        <div className="hidden md:flex gap-12 font-label-sm tracking-widest">
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors" to="/">Cars</Link>
          <Link className="text-[#C8A97E] border-b border-[#C8A97E] pb-1" to="/my-test-drives">My Bookings</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors" to="/wishlist">Wishlist</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors" to="/service-booking">Service</Link>
        </div>
        <button className="px-8 py-2 border border-[#C8A97E]/30 text-[#C8A97E] text-xs tracking-widest hover:bg-[#C8A97E] hover:text-zinc-950 transition-all" onClick={logout}>SIGN OUT</button>
      </nav>

      <main className="min-h-screen pt-40 pb-section-gap px-6 md:px-20 max-w-[1440px] mx-auto">
        <header className="mb-20 animate-fade-up">
          <div className="inline-block mb-6">
            <span className="font-label-sm text-primary uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">🏁 Test Drive Bookings</span>
          </div>
          <h1 className="font-headline-h1 text-on-background mb-6 text-4xl md:text-5xl">Your Test Drive History</h1>
          <p className="font-body-lg text-outline max-w-2xl leading-relaxed">Manage and track your upcoming and past experiences. Book your next driving experience at your convenience.</p>
        </header>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin"></div>
            </div>
          </div>
        ) : drives.length === 0 ? (
          <section className="flex flex-col items-center justify-center py-40 text-center animate-fade-up">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-125"></div>
              <div className="w-24 h-24 rounded-full border border-primary/40 flex items-center justify-center relative">
                <span className="material-symbols-outlined text-4xl text-primary/60">car_rental</span>
              </div>
            </div>
            <h2 className="font-headline-h2 mb-4 text-2xl">No test drives scheduled</h2>
            <p className="font-body-lg text-outline mb-12 max-w-md mx-auto leading-relaxed">Experience the pinnacle of automotive excellence. Book your personal test drive today and feel the precision engineering firsthand.</p>
            <Link to="/book-test-drive" className="inline-flex items-center gap-2 px-12 py-4 bg-primary text-on-primary hover:bg-primary/90 transition-all font-label-sm tracking-widest uppercase group">
              Book Test Drive Now
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </section>
        ) : (
          <section className="relative">
            {drives.map((drive, i) => {
              const isPast = drive.status === 'Completed'
              return (
                <div key={drive.id} className={`relative flex flex-col md:flex-row items-center mb-16 gap-8 group ${isPast ? 'opacity-60 hover:opacity-100 transition-opacity' : ''}`}>
                  <div className="hidden md:flex flex-1 justify-end text-right pr-12">
                    <div>
                      <p className="font-label-sm text-primary uppercase mb-1">{isPast ? 'Past' : drive.status === 'Confirmed' ? 'Confirmed' : 'Upcoming'}</p>
                      <p className="font-headline-h3">{drive.date}</p>
                      <p className="font-body-md text-outline">{drive.time}</p>
                    </div>
                  </div>
                  <div className="z-10 w-10 h-10 rounded-full border border-primary/30 bg-background flex items-center justify-center">
                    <div className={`w-2 h-2 rounded-full ${dotColor(drive.status)} group-hover:scale-150 transition-transform`}></div>
                  </div>
                  <div className="flex-1 w-full">
                    <div className="bg-surface-container-lowest border border-primary/15 p-8 hover:border-primary/40 transition-all group-hover:-translate-y-1">
                      <div className="flex flex-col md:flex-row justify-between gap-6">
                        <div className="flex flex-col gap-4">
                          <span className={`inline-flex items-center gap-2 px-3 py-1 rounded-full text-[10px] font-bold tracking-widest uppercase w-fit ${badgeStyle(drive.status)}`}>
                            <span className={`w-1.5 h-1.5 rounded-full ${dotColor(drive.status)}`}></span>
                            {drive.status}
                          </span>
                          <h3 className="font-headline-h3">{drive.car}</h3>
                          <div className="space-y-1">
                            <p className="font-body-md text-on-surface">Variant: <span className="text-outline">{drive.variant}</span></p>
                            <p className="font-body-md text-on-surface">Dealership: <span className="text-outline">{drive.dealer}</span></p>
                          </div>
                        </div>
                        <div className="w-full md:w-48 aspect-video overflow-hidden border border-white/5 bg-zinc-900">
                          <img className={`w-full h-full object-cover ${isPast ? 'grayscale' : 'grayscale group-hover:grayscale-0'} transition-all duration-700`} src={drive.image} alt={drive.car} />
                        </div>
                      </div>
                      {!isPast && (
                        <div className="mt-8 pt-6 border-t border-white/5 flex justify-end gap-6">
                          <button className="font-label-sm text-outline hover:text-white transition-colors uppercase">Reschedule</button>
                          <button className="font-label-sm text-error/80 hover:text-error transition-colors uppercase" onClick={() => handleCancel(drive.id)}>Cancel</button>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              )
            })}
          </section>
        )}
      </main>

      <footer className="w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div className="space-y-8">
          <Link to="/" className="text-lg font-semibold text-white font-['Playfair_Display'] uppercase tracking-widest">Mercedes-Benz</Link>
          <p className="text-zinc-500 max-w-xs text-sm leading-relaxed">The best or nothing. Defining luxury since 1926.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-white uppercase tracking-widest font-bold text-xs mb-2">Discover</h4>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/">Cars</Link>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/book-test-drive">Test Drive</Link>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/service-booking">Service</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white uppercase tracking-widest font-bold text-xs mb-2">Account</h4>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/my-orders">My Orders</Link>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/wishlist">Wishlist</Link>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/profile">Profile</Link>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <p className="text-[10px] text-zinc-600 mt-auto">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
