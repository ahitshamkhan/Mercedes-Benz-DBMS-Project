import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getAllCustomers, deleteCustomer } from '../api/admin'
import { Search, UserX, LogOut, Users } from 'lucide-react'

const FALLBACK = [
  { id: 1, name: 'Ahmed Khan', email: 'ahmed@gmail.com', phone: '03001234567', role: 'customer', created_at: '2024-01-10' },
  { id: 2, name: 'Zainab Malik', email: 'zainab@yahoo.com', phone: '03111234567', role: 'customer', created_at: '2024-02-15' },
]

const AdminNav = ({ active, logout }) => (
  <header className="fixed top-0 w-full z-50 bg-zinc-950/95 backdrop-blur-md border-b border-amber-400/15 h-16 flex items-center px-6 md:px-12 justify-between">
    <Link to="/" className="flex items-center gap-3">
      <span className="text-amber-400">★</span>
      <span className="text-amber-400 font-bold tracking-widest uppercase text-sm">Mercedes-Benz</span>
      <span className="text-zinc-600 text-xs ml-1">Admin</span>
    </Link>
    <nav className="hidden md:flex gap-8">
      {[{to:'/admin',label:'Dashboard'},{to:'/admin/cars',label:'Inventory'},{to:'/admin/orders',label:'Orders'},{to:'/admin/customers',label:'Customers'},{to:'/admin/chat',label:'Chat'}].map(({to,label})=>(
        <Link key={to} to={to} className={`text-xs uppercase tracking-widest font-medium transition-colors ${active===label?'text-amber-400 border-b border-amber-400 pb-0.5':'text-zinc-400 hover:text-amber-400'}`}>{label}</Link>
      ))}
    </nav>
    <button onClick={logout} className="flex items-center gap-2 text-xs text-zinc-400 hover:text-red-400 transition-colors">
      <LogOut className="h-4 w-4" /> Sign Out
    </button>
  </header>
)

export default function ManageCustomers() {
  const { logout } = useAuth()
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')

  useEffect(() => {
    getAllCustomers().then(r => setCustomers(r.data || FALLBACK)).catch(() => setCustomers(FALLBACK)).finally(() => setLoading(false))
  }, [])

  const handleDelete = async (id) => {
    if (!confirm('Remove this customer?')) return
    try { await deleteCustomer(id) } catch {}
    setCustomers(prev => prev.filter(c => c.id !== id))
  }

  const filtered = customers.filter(c =>
    (c.name || '').toLowerCase().includes(search.toLowerCase()) ||
    (c.email || '').toLowerCase().includes(search.toLowerCase())
  )

  return (
    <div className="min-h-screen bg-black text-white">
      <AdminNav active="Customers" logout={logout} />
      <main className="pt-24 pb-20 px-6 md:px-12 max-w-screen-xl mx-auto">
        <div className="mb-8">
          <p className="text-amber-400 text-xs font-mono tracking-widest uppercase mb-1">Admin</p>
          <h1 className="text-3xl font-bold text-white tracking-tight">Customer Directory</h1>
          <p className="text-zinc-500 text-sm mt-1">Manage registered customers.</p>
        </div>

        <div className="grid grid-cols-3 gap-4 mb-8">
          {[
            {label:'Total',value:customers.length},
            {label:'Customers',value:customers.filter(c=>c.role!=='admin').length},
            {label:'Admins',value:customers.filter(c=>c.role==='admin').length},
          ].map((s,i)=>(
            <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-5 flex items-center gap-3">
              <Users className="h-5 w-5 text-amber-400" />
              <div>
                <p className="text-zinc-500 text-xs uppercase">{s.label}</p>
                <p className="text-2xl font-bold">{s.value}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="mb-5">
          <div className="relative w-72">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-zinc-500" />
            <input className="w-full bg-zinc-900 border border-zinc-700 pl-10 pr-4 py-2.5 text-sm text-white placeholder:text-zinc-600 rounded-lg focus:outline-none focus:border-amber-400" placeholder="Search..." value={search} onChange={e=>setSearch(e.target.value)} />
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-16"><div className="h-8 w-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" /></div>
        ) : (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <table className="w-full text-sm text-left">
              <thead>
                <tr className="text-[11px] text-zinc-500 uppercase tracking-wider border-b border-zinc-800">
                  <th className="px-6 py-4">#</th>
                  <th className="px-6 py-4">Customer</th>
                  <th className="px-6 py-4">Phone</th>
                  <th className="px-6 py-4">Role</th>
                  <th className="px-6 py-4">Joined</th>
                  <th className="px-6 py-4 text-right">Action</th>
                </tr>
              </thead>
              <tbody>
                {filtered.length===0 ? (
                  <tr><td colSpan={6} className="px-6 py-10 text-center text-zinc-500">No customers found.</td></tr>
                ) : filtered.map((c,i)=>(
                  <tr key={c.id} className="border-b border-zinc-800/50 hover:bg-white/[0.02] transition-colors">
                    <td className="px-6 py-4 text-zinc-600 font-mono text-xs">{i+1}</td>
                    <td className="px-6 py-4">
                      <p className="font-semibold text-white">{c.name}</p>
                      <p className="text-zinc-500 text-xs">{c.email}</p>
                    </td>
                    <td className="px-6 py-4 text-zinc-400">{c.phone||'—'}</td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-0.5 rounded text-[10px] font-medium uppercase ${c.role==='admin'?'bg-amber-400/10 text-amber-400':'bg-zinc-700/50 text-zinc-400'}`}>{c.role}</span>
                    </td>
                    <td className="px-6 py-4 text-zinc-500 text-xs">{c.created_at?new Date(c.created_at).toLocaleDateString():'—'}</td>
                    <td className="px-6 py-4 text-right">
                      <button className="text-zinc-500 hover:text-red-400 transition-colors" onClick={()=>handleDelete(c.id)}><UserX className="h-4 w-4" /></button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-6 py-3 border-t border-zinc-800">
              <span className="text-xs text-zinc-500">Showing {filtered.length} of {customers.length} customers</span>
            </div>
          </div>
        )}
      </main>
      <footer className="border-t border-zinc-900 py-6 px-12 flex justify-between">
        <span className="text-zinc-600 text-xs">Mercedes-Benz Admin</span>
        <span className="text-zinc-700 text-xs">© 2024</span>
      </footer>
    </div>
  )
}
