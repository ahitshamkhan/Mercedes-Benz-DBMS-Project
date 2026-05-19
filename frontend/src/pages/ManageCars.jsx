import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getAllCarsAdmin, deleteCar } from '../api/admin'
import { Search, Plus, Edit2, Trash2, LogOut } from 'lucide-react'

const FALLBACK = [
  { id: 1, model: 'S-Class 580 4MATIC', category: 'Luxury Sedan', price: 85500000, year: '2024' },
  { id: 2, model: 'G-Class AMG 63', category: 'SUV / Performance', price: 110200000, year: '2023' },
  { id: 3, model: 'EQS 450+ Electric', category: 'Electric Luxury', price: 62900000, year: '2024' },
]

const AdminNav = ({ active, logout }) => (
  <header className="fixed top-0 w-full z-50 bg-zinc-950/95 backdrop-blur-md border-b border-amber-400/15 h-16 flex items-center px-6 md:px-12 justify-between">
    <Link to="/" className="flex items-center gap-3">
      <span className="text-amber-400">★</span>
      <span className="text-amber-400 font-bold tracking-widest uppercase text-sm">Mercedes-Benz</span>
      <span className="text-zinc-600 text-xs ml-1">Admin</span>
    </Link>
    <nav className="hidden md:flex gap-8">
      {[
        { to: '/admin', label: 'Dashboard' },
        { to: '/admin/cars', label: 'Inventory' },
        { to: '/admin/orders', label: 'Orders' },
        { to: '/admin/customers', label: 'Customers' },
        { to: '/admin/chat', label: 'Chat' },
      ].map(({ to, label }) => (
        <Link key={to} to={to} className={`text-xs uppercase tracking-widest font-medium transition-colors ${active === label ? 'text-amber-400 border-b border-amber-400 pb-0.5' : 'text-zinc-400 hover:text-amber-400'}`}>
          {label}
        </Link>
      ))}
    </nav>
    <button onClick={logout} className="flex items-center gap-2 text-xs text-zinc-400 hover:text-red-400 transition-colors">
      <LogOut className="h-4 w-4" /> Sign Out
    </button>
  </header>
)

export default function ManageCars() {
  const { logout } = useAuth()
  const [cars, setCars] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    getAllCarsAdmin()
      .then(r => setCars(r.data || FALLBACK))
      .catch(() => setCars(FALLBACK))
      .finally(() => setLoading(false))
  }, [])

  const handleDelete = async (id) => {
    if (!confirm('Delete this car from inventory?')) return
    try { await deleteCar(id) } catch {}
    setCars(prev => prev.filter(c => c.id !== id))
  }

  const filtered = cars.filter(c =>
    (c.model || '').toLowerCase().includes(search.toLowerCase()) ||
    (c.category || '').toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-black text-white">
      <AdminNav active="Inventory" logout={logout} />

      <main className="pt-24 pb-20 px-6 md:px-12 max-w-screen-xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-6">
          <div>
            <p className="text-amber-400 text-xs font-mono tracking-widest uppercase mb-1">Admin</p>
            <h1 className="text-3xl font-bold text-white tracking-tight">Manage Inventory</h1>
            <p className="text-zinc-500 text-sm mt-1">Curate the Mercedes-Benz Pakistan vehicle inventory.</p>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative">
              <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
              <input
                className="bg-zinc-900 border border-zinc-700 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-zinc-600 rounded-lg focus:outline-none focus:border-amber-400 w-64 transition-colors"
                placeholder="Search models..."
                value={search}
                onChange={e => setSearch(e.target.value)}
              />
            </div>
            <button className="flex items-center gap-2 bg-amber-400 hover:bg-amber-300 text-black text-xs font-bold px-4 py-2.5 rounded-lg uppercase tracking-widest transition-colors">
              <Plus className="h-4 w-4" /> Add Car
            </button>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="h-8 w-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
          </div>
        ) : (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="text-[11px] text-zinc-500 uppercase tracking-wider border-b border-zinc-800 bg-zinc-950/50">
                    <th className="px-6 py-4">Model</th>
                    <th className="px-6 py-4">Category</th>
                    <th className="px-6 py-4">Price (PKR)</th>
                    <th className="px-6 py-4">Year</th>
                    <th className="px-6 py-4 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length === 0 ? (
                    <tr><td colSpan={5} className="px-6 py-12 text-center text-zinc-500">No cars found.</td></tr>
                  ) : filtered.map(car => (
                    <tr key={car.id} className="border-b border-zinc-800/50 hover:bg-white/[0.02] transition-colors group">
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          {car.image || car.img ? (
                            <img src={car.image || car.img} alt={car.model} className="h-10 w-16 object-cover rounded bg-zinc-800 grayscale group-hover:grayscale-0 transition-all" />
                          ) : (
                            <div className="h-10 w-16 rounded bg-zinc-800 flex items-center justify-center text-zinc-600 text-xs font-bold">MB</div>
                          )}
                          <span className="font-semibold text-white">{car.model}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className="px-2 py-0.5 rounded text-[10px] bg-amber-400/10 text-amber-400 font-medium uppercase">{car.category}</span>
                      </td>
                      <td className="px-6 py-4 text-white font-mono">PKR {(car.price || 0).toLocaleString()}</td>
                      <td className="px-6 py-4 text-zinc-400">{car.year}</td>
                      <td className="px-6 py-4 text-right">
                        <div className="flex justify-end gap-3">
                          <button className="text-zinc-500 hover:text-amber-400 transition-colors"><Edit2 className="h-4 w-4" /></button>
                          <button className="text-zinc-500 hover:text-red-400 transition-colors" onClick={() => handleDelete(car.id)}><Trash2 className="h-4 w-4" /></button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-4 border-t border-zinc-800 flex items-center justify-between">
              <span className="text-xs text-zinc-500">Showing {filtered.length} of {cars.length} vehicles</span>
            </div>
          </div>
        )}
      </main>

      <footer className="border-t border-zinc-900 py-6 px-12 flex justify-between">
        <span className="text-zinc-600 text-xs">Mercedes-Benz Pakistan — Admin</span>
        <span className="text-zinc-700 text-xs">© 2024</span>
      </footer>
    </div>
  )
}
