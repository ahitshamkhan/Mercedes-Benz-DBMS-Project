import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getAllDealerships } from '../api/dealerships'

const FALLBACK = [
  { id: 1, city: 'Islamabad', name: 'The Central Hub', address: 'Sector I-9/3, Islamabad', phone: '+92 51 111 623 623', email: 'info@mercedes-islamabad.com', hours: { weekday: '09:00 - 18:00', sunday: 'Closed' }, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARh7tWS6VzFnnFccc6CGf7mP5W4JvsbywN0Jnm3N9nrnXBeCbfPV6lNkME4h2Hib9Ti1O59VHJ1tngjZ6B4XhrtcTkVTJlRM_Wb7wALLkXThIBO9a-Cck7M-PH5CS9my6U8b46Y2_Fkl3XC1JeegTSXmNVia6Jleb0rvjwF_GLqrT3wDH5OJ7ie5Q0WEp0UFLIoLk_ZM4juijxv-M6DDFAm-pYHHdHMr4GH0TEp2TVi0p0A5yDmWq4iKlaOVZDVt7G-AEIAKPpqHQ' },
  { id: 2, city: 'Karachi', name: 'Oceanic Avenue', address: 'Main Shahrah-e-Faisal, Karachi', phone: '+92 21 345 3444 8', email: 'sales@mercedes-karachi.pk', hours: { weekday: '10:00 - 20:00', sunday: '12:00 - 17:00' }, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjoFLDrg1DRiUpt6qrSba0agvUXJu8mXvmCGqnsKETOrGzfAYpV-0cj42-bOgoLZ42Ymmtt6qZsqAl4tgGd5V3t7fzJw8aAPGAdk3ADRTBSa9im1U2rB6pRubDgN_Brflt41_1XoKj72kaaMPIR9xMlReYdarIYVdkhHX-dgUbfft1gIRqL05genkiOIDhm1a9qihIXRzB9nIoGwJGYYfCTvUYHa3e2aDc8t-S7Hmf13dEK3PHMfZbaUgyZqQ3S9BripCcGrp07VM' },
  { id: 3, city: 'Lahore', name: 'The Grand Boulevard', address: 'Gulberg III, Lahore', phone: '+92 42 111 637 637', email: 'concierge@mercedes-lahore.com', hours: { weekday: '09:00 - 19:00', sunday: 'Closed' }, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhWH_7pafyV8DhLYyS38uM-kYME-VgEsD5d_fw3tcC2MLY1LZRQvnyEy4m2Eo9al15LS2nh7CzHBjihQXklDkdQ4DeW6Y595jsblXttHa4DXl2pCuOR4peYQP_aUs6vM5OqLKDAT71Rasj21g03PU8x1luMsreqh2SBqkZaOeXYAorJxsVdA4jqDbCR6-CrPJeiMjYmOmtiFYpxDE9JPchPPNjF0_o1leuT2Pi-bMnjgJ7Q8d0XAHLqtJSW6Kww9yMLE3bv6UD13M' },
]

export default function AllDealerships() {
  const { isLoggedIn, logout } = useAuth()
  const [dealerships, setDealerships] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try { const res = await getAllDealerships(); setDealerships(res.data) }
      catch { setDealerships(FALLBACK) }
      finally { setLoading(false) }
    }
    fetchData()
  }, [])

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 glass-nav z-50 border-b border-[#C8A97E]/15">
        <Link to="/" className="flex items-center gap-4 group hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined text-[#C8A97E] text-2xl star-glow" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase hover:text-[#e5c497] transition-colors">Mercedes-Benz</span>
        </Link>
        <nav className="hidden md:flex items-center gap-12">
          <Link className="text-[#c0c0c0] hover:text-[#C8A97E] transition-all text-xs uppercase tracking-wider opacity-70 hover:opacity-100" to="/">Cars</Link>
          <Link className="text-[#C8A97E] border-b-2 border-[#C8A97E] pb-1 text-xs uppercase tracking-wider" to="/dealerships">Dealerships</Link>
          <Link className="text-[#c0c0c0] hover:text-[#C8A97E] transition-all text-xs uppercase tracking-wider opacity-70 hover:opacity-100" to="/service-booking">Service</Link>
        </nav>
        {isLoggedIn
          ? <button className="text-[#C8A97E] hover:bg-[#C8A97E]/10 px-6 py-2 transition-all rounded-sm border border-[#C8A97E]/40 hover:border-[#C8A97E] text-xs uppercase tracking-wider" onClick={logout}>Sign Out</button>
          : <Link to="/login" className="text-[#C8A97E] hover:bg-[#C8A97E]/10 px-6 py-2 transition-all rounded-sm border border-[#C8A97E]/40 hover:border-[#C8A97E] text-xs uppercase tracking-wider">Sign In</Link>}
      </header>

      <main className="pt-32 pb-40 px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="mb-24 space-y-6 animate-fade-up">
          <div className="inline-block">
            <span className="font-label-sm text-primary uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">🏛 Authorized Centers</span>
          </div>
          <h2 className="font-headline-h1 text-on-background text-4xl md:text-5xl">Find your local <br/><span className="italic font-light text-primary">authorized center.</span></h2>
          <p className="text-outline max-w-2xl leading-relaxed">Discover our premium network of authorized dealerships offering bespoke service, test drives, and exclusive vehicle selections.</p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin"></div>
            </div>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {dealerships.map((d, idx) => (
              <div key={d.id} className="group glass-card overflow-hidden flex flex-col h-full hover:border-primary/40 transition-all duration-500 animate-fade-up" style={{animationDelay: `${idx * 100}ms`}}>
                <Link to={`/dealership/${d.id}`} className="relative h-64 overflow-hidden block">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={d.img} alt={d.name}/>
                  <div className="absolute top-4 left-4 bg-gradient-to-r from-primary to-primary/80 text-on-primary px-4 py-2 font-label-sm uppercase text-[10px] tracking-widest rounded-sm shadow-lg">{d.city}</div>
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                </Link>
                <div className="p-8 flex flex-col flex-grow">
                  <h3 className="font-headline-h3 text-white mb-6 group-hover:text-primary transition-colors">{d.name}</h3>
                  <div className="space-y-3 mb-8 text-zinc-400 text-sm">
                    <p className="flex items-start gap-2"><span className="material-symbols-outlined text-xs mt-0.5">location_on</span>{d.address}</p>
                    <p className="flex items-start gap-2"><span className="material-symbols-outlined text-xs mt-0.5">phone</span>{d.phone}</p>
                    <p className="flex items-start gap-2"><span className="material-symbols-outlined text-xs mt-0.5">mail</span>{d.email}</p>
                  </div>
                  <div className="pt-6 border-t border-white/5 mb-8 grid grid-cols-2 gap-y-2 text-[12px] text-zinc-500">
                    <span>Mon-Sat</span><span className="text-right font-mono">{d.hours.weekday}</span>
                    <span>Sunday</span><span className="text-right font-mono">{d.hours.sunday}</span>
                  </div>
                  <div className="mt-auto space-y-3">
                    <Link to={`/dealership/${d.id}`} className="w-full border border-primary/30 py-4 font-label-sm uppercase text-primary hover:bg-primary hover:text-on-primary transition-all text-center block rounded-sm text-xs tracking-wider">View Details</Link>
                    <Link to="/book-test-drive" className="w-full bg-white/5 py-4 font-label-sm uppercase text-white hover:bg-primary/30 transition-all text-center block rounded-sm text-xs tracking-wider">Book Test Drive</Link>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </main>

      <footer className="w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div><Link to="/" className="text-lg font-semibold text-white font-['Playfair_Display']">Mercedes-Benz</Link></div>
        <div className="grid grid-cols-2 gap-4">
          <Link className="text-zinc-500 hover:text-white text-sm" to="/">Cars</Link>
          <Link className="text-zinc-500 hover:text-white text-sm" to="/service-booking">Service</Link>
          <Link className="text-zinc-500 hover:text-white text-sm" to="/book-test-drive">Test Drive</Link>
          <Link className="text-zinc-500 hover:text-white text-sm" to="/my-orders">My Orders</Link>
        </div>
        <p className="text-zinc-500 text-xs">© 2024 Mercedes-Benz Pakistan.</p>
      </footer>
    </>
  );
}
