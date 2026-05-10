import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getDealershipById } from '../api/dealerships'

const FALLBACK = {
  name: 'Manhattan West Experience Center', tagline: 'Authorized Flagship Partner',
  heroImg: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB6hzDL3MVayukwYvG-xZw_8Ok-FYxUkciyxqlV5aqvZQRiw5Hx2bWPMrMq0crlQnfpZMpu3BjFR5luhzAG_u2TJ96wQyxYdWKT8Gf-v04zcyRgaHMCXTZ0Cq4oI19rv0-5HYyynQxjkM2kXKhlScFzhWG1f3FVQrY1qv1RqXKngYPWmvrVNTvzotV1cHRuE0BKJz_zfXs00ekDsBXCnXITAIg7T5BwoyDVzGqyrEY-AeSNtp7zsdsHvW_FeKJoP6MdjtvpJWGYxXM',
  desc: 'Located in the heart of the automotive district, our flagship offers an unparalleled journey into Mercedes-Benz.',
  hours: ['Mon - Fri: 09:00 - 19:00', 'Saturday: 10:00 - 17:00', 'Sunday: Closed'],
  address: '770 11th Ave, New York, NY 10019',
  phone: '+1 (212) 555-0192', email: 'concierge@mb-manhattan.com',
  staff: [
    { role: 'General Manager', name: 'Julian Sterling', subtitle: '15 Years', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDV8vHn-M1SjikeQrf1AoKzypZmflosjoaRLjetyrxwJTabnADWLBNPNBKHPNmaemly2bzAPT1NCwVSVcqh8Rf863Ov0UjDIFbaBCFoOIpFnXLDYrNy3jJWGyJVoj9_Q15GLWlNmkDPke_BrTQw5SUp5jaqlAB-iZgDMwig6_mPaS6sJFk3muOm-x0vfN6Y1-pLCfQSfyT1sKeR2pmdNCf3LHPPpyxpnMNbv20LNU2FO2hYY5jUH7vr6JjRCRrKx3F7F7BZDKiKpBo' },
    { role: 'Sales Director', name: 'Elena Rossi', subtitle: 'AMG Specialist', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8OWMbTJn1V9ZqdYRNuobvZ_4bL6pLa66eY8htRz6krR0iQTaqq_YwMpUX_WYy-ZqopEoPPGFu69ZLigDV_EpJaEEfsReGqJbu2MIuY4kE2xZbcfUt7hjRjTO7QyWXTY5uS2pL_zyvzTyGAZCu5HD-kuknCy7upIEy5BLJVKNIwXUGQjn5frV9CIeJHzP1KuaI0RtwPATnp-iooT0qPU_qKagMQgCY1hMibXqNzbQB38svHg5rke4VMYhM-0GRJmaAiF3dYMnXjjA' },
    { role: 'Master Technician', name: 'Marcus Thorne', subtitle: 'Service Lead', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHZb4zgQU1MYI8uU77Cv8ul-WhGLltM5Kdr0B5Np6eKTwOP_-bTw8EQY-2pHMliSYKfPnR6mMkpw_JDQP3rZ-lBkw6g0PfO8W7tiQWXdVcVU-EdrGLAYDezeMcdxTD3PzPnW0Ss-iWIjNHETetwjG1f02tCWVPjQNN8_WDX22mJZ0TiXPZWLqNB1Wq2wK4WUM2hsFykQ6Ply7U-IzFU5BhC5cmbLBb1PPzizJCqioPwI0iu9zX1-ZMXClqVfvC6Ilh_1ccQYbQ0FQ' },
  ],
  inventory: [
    { model: '2024 AMG GT 63 S', desc: 'Obsidian Black / Nappa Leather', status: 'Last 1', price: '$182,500', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA50pdmem2D9yTVL8cnxIhENlcfegFgGoBy-oUrnrw_258Yi0KOVJLX_U_9J6SAycI693IldpIr9KZse8cDmhciG1z02GH5dAk8BH4jvhP94WCU03T8UW6m9RH-lB-R-jj3ixUoM2nXNZ3J0GlKM0GY4c0nMfUJ8aKnxuUwoxFoC_lbjLxJZZZYpyi0uDwJVTPJDwPqyPuyTQEH0vnlEGOiVYIDPd8_r91TDyZQs0PfxcvlFu07P1C4-v9j9v39egpeOcakt0lM-NI' },
    { model: '2024 S-Class Sedan', desc: 'Diamond White / Macchiato Beige', status: '4 Units', price: '$114,300', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfUcBBM73EJ2maDX7OGxYWmLvtBayE106F-s9XWw0P2Fxvs5bU9UKBXurz42FtS99ybSI6NHmKtzjiXHT2-sCYoztN2_6H6pR9ahKK-7oNG5CL6m8R8IF-UjHP4GvF-DGtlxT7tJYc3KG90NJ_9XSX1SYFYVQU3e0j_emcN1NAVsCTshk8S3XFODi4xlb5O5EKZYY_D2WsUJ7z2OA7DwtHLPHeKU9wIvPmREXEkdRsww9ZKkVQIITeTbcuHWoWg7TW_JiOrXGr-NY' },
  ],
}

export default function DealershipDetail() {
  const { id } = useParams()
  const { isLoggedIn, logout } = useAuth()
  const [dealer, setDealer] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try { const res = await getDealershipById(id); setDealer(res.data) }
      catch { setDealer(FALLBACK) }
      finally { setLoading(false) }
    }
    fetchData()
  }, [id])

  if (loading) return <div className="min-h-screen flex items-center justify-center"><span className="material-symbols-outlined text-primary text-5xl animate-spin">progress_activity</span></div>
  if (!dealer) return <div className="min-h-screen flex flex-col items-center justify-center gap-6"><p className="text-zinc-500">Dealership not found.</p><Link to="/dealerships" className="text-primary font-label-sm">Back</Link></div>

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <Link to="/" className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</span>
        </Link>
        <nav className="hidden md:flex gap-10">
          <Link className="text-zinc-400 hover:text-[#C8A97E] text-sm uppercase" to="/">Cars</Link>
          <Link className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 text-sm uppercase" to="/dealerships">Dealerships</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] text-sm uppercase" to="/service-booking">Service</Link>
        </nav>
        {isLoggedIn
          ? <button className="text-sm px-6 py-2 border border-[#C8A97E]/40 text-[#C8A97E] hover:bg-[#C8A97E] hover:text-zinc-950 transition-all" onClick={logout}>Sign Out</button>
          : <Link to="/login" className="text-sm px-6 py-2 border border-[#C8A97E]/40 text-[#C8A97E] hover:bg-[#C8A97E] hover:text-zinc-950 transition-all">Sign In</Link>}
      </header>

      <main className="pt-20">
        <section className="relative h-[500px] md:h-[618px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background z-10"></div>
          <img alt={dealer.name} className="w-full h-full object-cover grayscale-[20%]" src={dealer.heroImg} />
          <div className="absolute bottom-20 left-6 md:left-20 z-20">
            <p className="font-label-sm text-primary mb-4 uppercase">{dealer.tagline}</p>
            <h2 className="font-display-lg text-white max-w-3xl">{dealer.name}</h2>
          </div>
        </section>

        <section className="px-6 md:px-20 py-20 grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="col-span-2 space-y-12">
            <div>
              <h3 className="font-headline-h2 text-white mb-6">Redefining Excellence</h3>
              <p className="font-body-lg text-zinc-400 leading-relaxed max-w-2xl">{dealer.desc}</p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="glass-card p-8">
                <span className="material-symbols-outlined text-primary mb-4">schedule</span>
                <h4 className="font-label-sm text-white mb-2 uppercase">Operating Hours</h4>
                <div className="text-zinc-500 text-sm space-y-1">{dealer.hours.map((h,i) => <p key={i}>{h}</p>)}</div>
              </div>
              <div className="glass-card p-8">
                <span className="material-symbols-outlined text-primary mb-4">location_on</span>
                <h4 className="font-label-sm text-white mb-2 uppercase">Location</h4>
                <p className="text-zinc-500 text-sm">{dealer.address}</p>
              </div>
            </div>
          </div>
          <div className="glass-card p-10 flex flex-col justify-between border-primary/20">
            <div>
              <h4 className="font-headline-h3 text-white mb-8">Inquire Now</h4>
              <div className="space-y-6">
                <div className="flex items-center gap-4"><span className="material-symbols-outlined text-primary">call</span><span className="text-zinc-300">{dealer.phone}</span></div>
                <div className="flex items-center gap-4"><span className="material-symbols-outlined text-primary">mail</span><span className="text-zinc-300">{dealer.email}</span></div>
              </div>
            </div>
            <div className="mt-12 space-y-4">
              <Link to="/book-test-drive" className="w-full py-4 border border-primary text-primary font-label-sm uppercase hover:bg-primary hover:text-background transition-all text-center block">Book Test Drive</Link>
            </div>
          </div>
        </section>

        {dealer.staff && (
          <section className="bg-[#0D0D14] py-20 px-6 md:px-20">
            <div className="mb-16">
              <p className="font-label-sm text-primary mb-4 uppercase">The Experts</p>
              <h3 className="font-headline-h2 text-white">Our Dedicated Team</h3>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {dealer.staff.map((s, i) => (
                <div key={i} className="group">
                  <div className="aspect-[3/4] overflow-hidden mb-6 glass-card border-none">
                    <img alt={s.role} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src={s.img} />
                  </div>
                  <span className="px-3 py-1 border border-zinc-700 font-label-sm text-[10px] uppercase rounded-full text-zinc-300">{s.role}</span>
                  <h5 className="font-headline-h3 text-xl text-white mt-4">{s.name}</h5>
                  <p className="text-zinc-500 text-sm">{s.subtitle}</p>
                </div>
              ))}
            </div>
          </section>
        )}

        {dealer.inventory && (
          <section className="py-20 px-6 md:px-20">
            <div className="flex justify-between items-end mb-16">
              <div>
                <p className="font-label-sm text-primary mb-4 uppercase">Showroom Inventory</p>
                <h3 className="font-headline-h2 text-white">Available Models</h3>
              </div>
            </div>
            <div className="grid grid-cols-1 gap-6">
              {dealer.inventory.map((v, i) => (
                <div key={i} className="glass-card flex flex-col md:flex-row items-center p-6 gap-8">
                  <div className="w-full md:w-48 h-32 overflow-hidden flex-shrink-0">
                    <img alt={v.model} className="w-full h-full object-cover" src={v.img} />
                  </div>
                  <div className="flex-grow">
                    <h4 className="font-headline-h3 text-white">{v.model}</h4>
                    <p className="text-zinc-500 text-sm">{v.desc}</p>
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    <span className="px-2 py-1 border border-zinc-700 text-[10px] font-label-sm uppercase text-zinc-400">{v.status}</span>
                    <p className="font-headline-h3 text-primary">{v.price}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>
        )}
      </main>

      <footer className="w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div><Link to="/" className="text-lg font-semibold text-white font-['Playfair_Display'] uppercase tracking-widest">Mercedes-Benz</Link></div>
        <div className="grid grid-cols-2 gap-4">
          <Link className="text-zinc-500 hover:text-white text-sm" to="/">Cars</Link>
          <Link className="text-zinc-500 hover:text-white text-sm" to="/my-orders">My Orders</Link>
          <Link className="text-zinc-500 hover:text-white text-sm" to="/wishlist">Wishlist</Link>
          <Link className="text-zinc-500 hover:text-white text-sm" to="/service-booking">Service</Link>
        </div>
        <p className="text-zinc-600 text-sm">© 2024 Mercedes-Benz Pakistan.</p>
      </footer>
    </>
  );
}
