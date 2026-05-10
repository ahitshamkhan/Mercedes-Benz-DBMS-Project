import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { searchCars } from '../api/cars'

const FALLBACK = [
  { id: 1, name: 'S-Class Maybach', subtitle: 'Ultimate Luxury', price: '$215,900', badge: 'In Showroom', s1: '496 HP', s2: '4.7s 0-60', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAMF1cLiEomKcxTd4Ld9bHnKYF02qIo8PkR06dcR7HtZi1V9P51i_PcJ5onXXdUu1R4AsBNxjYuvYONHqC9TLPuBXTywet3J325sfTmUE7nbOf30zqElA1WCez699oKU31YkeNygGR2KTjLhkEurz9sOqxcBW4Z1U3v3ZJXXSUohljwaZXNO9O8upeUF2L06Et_E4DCSAKUq9SOVIA-44WkSkUz2Uuzt4VkuQ3LjhSwfPmzhLJQcKewZUR0tr7gDIOQ_CzJKHpH874' },
  { id: 2, name: 'AMG GT Coupé', subtitle: 'Handcrafted', price: '$175,000', badge: 'Custom Order', s1: '577 HP', s2: '3.1s 0-60', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAI1InTSFbMudQ0PNX2XFR8klc6PA_JEVwAWBLD-U9PFPuGPfS81gpefcFTtTDZZw6S9aRDKHDEIYtJmiWrcvECv0BcfzUIyirieC31GK2y-RkKGYQKMP4pI_8j_oEOSN2p0Nc_HRFCQ9nUoaVxN_-GKN7Af9gRK9cz2IsrckO-NbONrdyL7rJ1Gsx4ob5CkZgdGj2G1iaqBeDfjx0jZ657BDnLPa85_w89vgCckRMvfPuQ674M2PE6De_5HpsKDeCgjMihNLsOH44' },
  { id: 4, name: 'EQS 580', subtitle: 'Electric', price: '$127,350', badge: 'Limited', s1: '340 Miles', s2: 'MBUX Hyper', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBqvJMcgcrfNIpbRJuEFREBlf19MaE9yVaEfq4Fu0VxMcwErKV_L76v4lTjWjV7stBrM9vWJHnn_fBvtg7E46467Kst-RkZ1TOybXdni9Vm4AWts8A-t3qq-6-zq1oY_doCu5uMpimL9phRl-beefyngZMyo9NDN52KS6fr57mEZp_LWn6AeScP-MhEBiAC-Q3Y-nDYEM3HwtQAx_A6djSsc34kK52Z7xGcCKGCqUNXPfkzgHE8_0bB8a803Voj8MdyVquSK5WahY0' },
  { id: 3, name: 'G 63 AMG', subtitle: 'Icon', price: '$179,000', badge: 'Reserve Now', s1: '627 lb-ft', s2: 'V8 Biturbo', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDWP5isZzyQv9QGCHWfsdOMc481Fgg_4cm-OjziZ2PobnXKpn-2QaTXPGO_6YfqVxKjJtECoI3AG-8Ql6UoazULfpqktmp2IjDmhTPWfu6ScEt0Jxsb2PvCsLIQNDx7BxBDFD9Rs8jUJI-mTesUUPeSr2DdSQ0fnB42mCsV1wjT6gKa44ccYID-sY89EIcTV6MkQOqyKzfn6onNx6qLn-Sk23QpkVkzz9UMKjp6xVeww4ND5i9z2IVRiQNQBiM20StjROniT85DbrU' },
]

export default function SearchResults() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const { isLoggedIn, user, logout } = useAuth()
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      setLoading(true)
      try {
        const res = await searchCars(query)
        setResults(res.data)
      } catch {
        const f = FALLBACK.filter(c => c.name.toLowerCase().includes(query.toLowerCase()))
        setResults(f.length > 0 ? f : FALLBACK)
      } finally { setLoading(false) }
    }
    if (query) fetch()
    else { setResults(FALLBACK); setLoading(false) }
  }, [query])

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E] text-2xl">star</span>
          <Link to="/" className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</Link>
        </div>
        <nav className="hidden md:flex gap-8">
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors font-label-sm" to="/">Explore</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors font-label-sm" to="/new-arrivals">New Arrivals</Link>
        </nav>
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <Link to="/profile" className="text-zinc-400 hover:text-[#C8A97E] font-label-sm uppercase transition-colors">{user?.name || 'Profile'}</Link>
            <button className="px-6 py-2 border border-[#C8A97E]/30 text-[#C8A97E] font-label-sm hover:bg-[#C8A97E]/10 transition-all uppercase" onClick={logout}>Logout</button>
          </div>
        ) : (
          <Link to="/login" className="px-6 py-2 border border-[#C8A97E]/30 text-[#C8A97E] font-label-sm hover:bg-[#C8A97E]/10 transition-all uppercase">Sign In</Link>
        )}
      </header>

      <main className="pt-32 pb-20 px-6 md:px-20 max-w-[1440px] mx-auto min-h-screen">
        <div className="mb-16 flex flex-col gap-4">
          <p className="text-primary font-label-sm uppercase tracking-[0.2em]">Exquisite Inventory</p>
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-4">
            <h2 className="font-headline-h1 leading-none">{query ? `Results for "${query}"` : 'Search Results'}</h2>
            <span className="font-body-lg text-surface-container-highest italic pb-2">{loading ? 'Searching...' : `${results.length} masterpieces found`}</span>
          </div>
        </div>

        <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {loading ? (
            <div className="col-span-2 flex justify-center py-20">
              <span className="material-symbols-outlined text-primary text-4xl animate-spin">progress_activity</span>
            </div>
          ) : results.length === 0 ? (
            <div className="col-span-2 flex flex-col items-center py-40 gap-8">
              <span className="material-symbols-outlined text-8xl text-primary/30">search</span>
              <h3 className="font-headline-h3">No Matches Found</h3>
              <p className="text-on-surface/50 max-w-md text-center">Try a different search term.</p>
              <Link to="/" className="px-12 py-4 border border-primary/30 text-primary font-label-sm uppercase hover:bg-primary/10 transition-all">Browse All</Link>
            </div>
          ) : results.map(car => (
            <Link key={car.id} to={`/car/${car.id}`} className="group bg-[#111118] border border-primary/15 overflow-hidden transition-all duration-500 hover:border-primary/40">
              <div className="h-[400px] overflow-hidden relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={car.image} alt={car.name} />
                {car.badge && <div className="absolute top-6 left-6 px-4 py-1 glass-panel text-[10px] uppercase tracking-[0.2em] text-primary">{car.badge}</div>}
              </div>
              <div className="p-10 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline-h3 text-on-background">{car.name}</h3>
                    <p className="text-surface-container-highest font-label-sm text-[11px] uppercase tracking-widest">{car.subtitle}</p>
                  </div>
                  <span className="text-primary font-headline-h3">{car.price}</span>
                </div>
                <div className="flex gap-6 mt-4 pt-6 border-t border-primary/10">
                  <div className="flex flex-col"><span className="text-[10px] text-surface-container-highest uppercase">Performance</span><span className="text-sm">{car.s1}</span></div>
                  <div className="flex flex-col"><span className="text-[10px] text-surface-container-highest uppercase">Spec</span><span className="text-sm">{car.s2}</span></div>
                </div>
              </div>
            </Link>
          ))}
        </section>
      </main>

      <footer className="w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div className="flex flex-col gap-8">
          <Link to="/" className="text-lg font-semibold text-white font-['Playfair_Display']">Mercedes-Benz</Link>
          <p className="text-zinc-500 text-sm max-w-xs">Experience the pinnacle of automotive engineering.</p>
          <p className="text-[#C8A97E] text-sm">© 2024 Mercedes-Benz Pakistan.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <Link className="text-zinc-500 hover:text-white text-sm" to="/">Cars</Link>
            <Link className="text-zinc-500 hover:text-white text-sm" to="/book-test-drive">Test Drive</Link>
            <Link className="text-zinc-500 hover:text-white text-sm" to="/my-orders">My Orders</Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link className="text-zinc-500 hover:text-white text-sm" to="/service-booking">Service</Link>
            <Link className="text-zinc-500 hover:text-white text-sm" to="/about">Contact</Link>
            <a className="text-zinc-500 hover:text-white text-sm" href="#">Legal</a>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-zinc-500 hover:text-primary cursor-pointer">share</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-primary cursor-pointer">mail</span>
          </div>
        </div>
      </footer>
    </>
  );
}
