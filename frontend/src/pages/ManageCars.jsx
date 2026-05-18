import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getAllCarsAdmin, deleteCar } from '../api/admin'

const FALLBACK = [
  { id: 'MB-S580-2024', model: 'S-Class 580 4MATIC', category: 'Luxury Sedan', price: '85,500,000', year: '2024', colors: ['bg-zinc-900', 'bg-zinc-200', 'bg-blue-900'], extra: '+2', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGlZsLIJGOHZdaTEqJtv6DaIrraYgyCT_z4-6b90vRq63ychSCfp6UyBrzAkpeizdwhKrcsEWFwvgU-V6UjrFBC_51oW0n_liX5WWa0CSRAsT17CqZjlVjTl0YZebtIxIcT9ZVENWf9vScsV94zm0oS4ht4Dvs1FWhSNmjmMgjWy9y0aUWqESJuZy44_SEDspADeZxSnSVGeBYNUFZ1dSdHx9pvV1dq6uPv5-RH3Q-3-HAkGu16gBMsexNzeniXGCu5unHsGwioOE' },
  { id: 'MB-G63-2023', model: 'G-Class AMG 63', category: 'SUV / Performance', price: '110,200,000', year: '2023', colors: ['bg-zinc-800', 'bg-zinc-400'], extra: null, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpREFU_I7nZkGGhc3wj4s0RB8asbSmwjNr3GS9BStQa6uvoSpEDEVKBy5yufvmZzsov4j152ASR0wXkWiskmd1xSAY0e3q1PcXeIpjpBz7xubGBKKrbhQBRZEAs4Eem04jUsDrCEeKrSlbpdJ-I9gfjgvjeYrOWNB8xLK7UsenjvbpOPc1ddV7s5iRkCyf4wT7k27WxL98FWfB096lE_kqAqBF4xOWx9sR986UaMvYt_dcRqp3sBmHBrP5Rphxpv5CQuAgR2ARCwI' },
  { id: 'MB-EQS-2024', model: 'EQS 450+ Electric', category: 'Electric Luxury', price: '62,900,000', year: '2024', colors: ['bg-zinc-950', 'bg-zinc-100'], extra: null, img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWpXP9EN9S2hsE508Y031Vk3Em7xWWCS-Z2NeCq3dfKFAdHWh4ZOgoIhL-fMemf3PLj3iA1oBaL9Fg-iidivQfj81-g9Fd8EPWzOwdE58mjjfPGrZO0-IS4wsfaVjJQTkB5Y96edj0mN0928tmM--1pd8GZs23H-PVYTqdp4F7wuswOnamP-kHTPi8o3SKV5kOJEnksHfhduObaKxdI8vbSKA0fG7Ru4Thqif4vpPxpqyM5Juw59ArTc6e4gCyjKwOOyZEh75hU4g' },
]

export default function ManageCars() {
  const { logout } = useAuth()
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    const fetchData = async () => {
      try { const res = await getAllCarsAdmin(); setCars(res.data) }
      catch { setCars(FALLBACK) }
      finally { setLoading(false) }
    }
    fetchData()
  }, [])

  const handleDelete = async (id) => {
    if (!confirm('Delete this car?')) return
    try { await deleteCar(id) } catch {}
    setCars(prev => prev.filter(c => c.id !== id))
  }

  const filtered = cars.filter(c => c.model.toLowerCase().includes(search.toLowerCase()))

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 glass-nav z-50 border-b border-[#C8A97E]/15">
        <Link to="/" className="flex items-center gap-4 group hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined text-[#C8A97E] text-2xl star-glow" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase hover:text-[#e5c497] transition-colors">Mercedes-Benz</span>
        </Link>
        <nav className="hidden md:flex gap-12">
          <Link className="text-[#c0c0c0] hover:text-[#C8A97E] font-label-sm uppercase text-xs tracking-wider opacity-70 hover:opacity-100 transition-all" to="/admin">Dashboard</Link>
          <Link className="text-[#C8A97E] border-b-2 border-[#C8A97E] pb-1 font-label-sm uppercase text-xs tracking-wider" to="/admin/cars">Inventory</Link>
          <Link className="text-[#c0c0c0] hover:text-[#C8A97E] font-label-sm uppercase text-xs tracking-wider opacity-70 hover:opacity-100 transition-all" to="/admin/orders">Orders</Link>
          <Link className="text-[#c0c0c0] hover:text-[#C8A97E] font-label-sm uppercase text-xs tracking-wider opacity-70 hover:opacity-100 transition-all" to="/admin/customers">Customers</Link>
        </nav>
        <div className="flex items-center gap-3 pl-8 border-l border-white/10">
          <div className="w-8 h-8 rounded-full bg-primary/20 flex items-center justify-center text-primary"><span className="material-symbols-outlined text-sm">person</span></div>
          <button className="font-label-sm text-[#c0c0c0] hover:text-[#C8A97E] transition-colors" onClick={logout}>SIGN OUT</button>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 md:px-20 max-w-[1440px] mx-auto min-h-screen animate-fade-up">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
          <div>
            <h1 className="font-headline-h1 text-on-background mb-2 text-4xl md:text-5xl">Manage Cars</h1>
            <p className="text-outline font-body-md">Curate the Mercedes-Benz Pakistan inventory with precision.</p>
          </div>
          <div className="flex items-center gap-6">
            <div className="relative">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-outline">search</span>
              <input className="bg-surface-container-low border border-outline-variant/30 pl-12 pr-6 py-3 text-sm focus:border-primary focus:ring-1 focus:ring-primary/20 w-72 font-label-sm text-on-background placeholder:text-outline rounded-sm transition-all" placeholder="SEARCH MODELS..." value={search} onChange={(e) => setSearch(e.target.value)} />
            </div>
            <button className="bg-primary hover:bg-primary/90 text-on-primary font-label-sm px-8 py-3 flex items-center gap-3 uppercase tracking-widest rounded-sm transition-all border border-primary hover:border-primary/80">
              <span className="material-symbols-outlined text-sm">add</span>Add New Car
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin"></div>
            </div>
          </div>
        ) : (
          <div className="bg-surface-container-lowest border border-[#C8A97E]/15 overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead><tr className="border-b border-[#C8A97E]/10 bg-surface-container-low/50">
                <th className="px-8 py-6 font-label-sm uppercase text-zinc-500">Model</th>
                <th className="px-8 py-6 font-label-sm uppercase text-zinc-500">Category</th>
                <th className="px-8 py-6 font-label-sm uppercase text-zinc-500">Price (PKR)</th>
                <th className="px-8 py-6 font-label-sm uppercase text-zinc-500">Year</th>
                <th className="px-8 py-6 font-label-sm uppercase text-zinc-500">Variants</th>
                <th className="px-8 py-6 font-label-sm uppercase text-zinc-500 text-right">Actions</th>
              </tr></thead>
              <tbody className="divide-y divide-[#C8A97E]/5">
                {filtered.map(car => (
                  <tr key={car.id} className="hover:bg-primary-container/5 transition-colors group">
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-16 h-12 bg-surface-container overflow-hidden"><img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src={car.img} alt={car.model} /></div>
                        <div><div className="font-headline-h3 text-lg">{car.model}</div><div className="text-xs text-zinc-500 font-label-sm">ID: {car.id}</div></div>
                      </div>
                    </td>
                    <td className="px-8 py-6"><span className="px-3 py-1 border border-primary/20 text-primary-container text-[10px] font-label-sm uppercase">{car.category}</span></td>
                    <td className="px-8 py-6 text-zinc-300">{car.price}</td>
                    <td className="px-8 py-6 text-zinc-300">{car.year}</td>
                    <td className="px-8 py-6"><div className="flex gap-1">{car.colors.map((c, i) => <span key={i} className={`w-3 h-3 rounded-full ${c} border border-white/20`}></span>)}{car.extra && <span className="text-xs text-zinc-500 ml-2">{car.extra}</span>}</div></td>
                    <td className="px-8 py-6 text-right">
                      <div className="flex justify-end gap-4">
                        <button className="text-zinc-500 hover:text-primary transition-colors"><span className="material-symbols-outlined text-xl">edit</span></button>
                        <button className="text-zinc-500 hover:text-error transition-colors" onClick={() => handleDelete(car.id)}><span className="material-symbols-outlined text-xl">delete</span></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-8 py-6 flex justify-between items-center bg-surface-container-low/30 border-t border-[#C8A97E]/10">
              <span className="font-label-sm text-zinc-500 uppercase">Showing {filtered.length} entries</span>
            </div>
          </div>
        )}
      </main>

      <footer className="bg-[#050508] w-full py-12 px-6 md:px-20 border-t border-[#C8A97E]/10 flex justify-between items-center">
        <Link to="/" className="text-white font-['Playfair_Display']">Mercedes-Benz</Link>
        <p className="text-zinc-600 text-xs">© 2024 Mercedes-Benz Pakistan.</p>
      </footer>
    </>
  );
}
