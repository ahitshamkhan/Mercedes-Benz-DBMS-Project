import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getAllOrdersAdmin, updateOrderStatus } from '../api/admin'
import { LogOut } from 'lucide-react'

const FALLBACK = [
  { id: 1, user_name:'Ahmed Khan', user_email:'ahmed@gmail.com', car_model:'S-Class 580', total_price:85500000, status:'pending', payment_method:'Bank Transfer', created_at:'2024-10-12' },
  { id: 2, user_name:'Zainab Malik', user_email:'zainab@yahoo.com', car_model:'G-Class G63', total_price:110200000, status:'confirmed', payment_method:'Installment Plan', created_at:'2024-10-14' },
  { id: 3, user_name:'Tariq Jameel', user_email:'tariq@hotmail.com', car_model:'EQS 450+', total_price:62900000, status:'delivered', payment_method:'Cash on Delivery', created_at:'2024-10-15' },
]

const statusColor = s => ({
  delivered: 'text-emerald-400 bg-emerald-500/10',
  confirmed: 'text-blue-400 bg-blue-500/10',
  cancelled: 'text-red-400 bg-red-500/10',
  pending: 'text-amber-400 bg-amber-500/10',
})[s] || 'text-zinc-400 bg-zinc-500/10'

const FILTERS = ['All','pending','confirmed','delivered','cancelled']

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

export default function ManageOrders() {
  const { logout } = useAuth()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    getAllOrdersAdmin().then(r => setOrders(r.data || FALLBACK)).catch(() => setOrders(FALLBACK)).finally(() => setLoading(false))
  }, [])

  const handleStatusChange = async (id, newStatus) => {
    try { await updateOrderStatus(id, newStatus) } catch {}
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o))
  }

  const filtered = filter === 'All' ? orders : orders.filter(o => o.status === filter)

  return (
    <div className="min-h-screen bg-black text-white">
      <AdminNav active="Orders" logout={logout} />
      <main className="pt-24 pb-20 px-6 md:px-12 max-w-screen-xl mx-auto">
        <div className="mb-8">
          <p className="text-amber-400 text-xs font-mono tracking-widest uppercase mb-1">Admin</p>
          <h1 className="text-3xl font-bold text-white tracking-tight">Manage Orders</h1>
          <p className="text-zinc-500 text-sm mt-1">Monitor and update order statuses in real-time.</p>
        </div>

        {/* Filter tabs */}
        <div className="flex gap-6 mb-8 border-b border-zinc-800 pb-0">
          {FILTERS.map(f => (
            <button key={f} onClick={()=>setFilter(f)} className={`pb-3 text-xs uppercase tracking-widest font-medium transition-colors border-b-2 -mb-px ${filter===f?'text-amber-400 border-amber-400':'text-zinc-500 border-transparent hover:text-white'}`}>
              {f}
            </button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-16"><div className="h-8 w-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" /></div>
        ) : (
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="text-[11px] text-zinc-500 uppercase tracking-wider border-b border-zinc-800">
                    <th className="px-6 py-4">Order ID</th>
                    <th className="px-6 py-4">Customer</th>
                    <th className="px-6 py-4">Vehicle</th>
                    <th className="px-6 py-4">Amount (PKR)</th>
                    <th className="px-6 py-4">Payment</th>
                    <th className="px-6 py-4">Date</th>
                    <th className="px-6 py-4">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {filtered.length===0 ? (
                    <tr><td colSpan={7} className="px-6 py-10 text-center text-zinc-500">No orders found.</td></tr>
                  ) : filtered.map(o=>(
                    <tr key={o.id} className="border-b border-zinc-800/50 hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4 text-amber-400 font-mono text-xs">#{o.id}</td>
                      <td className="px-6 py-4">
                        <p className="font-semibold text-white">{o.user_name || o.customer}</p>
                        <p className="text-zinc-500 text-xs">{o.user_email || o.email}</p>
                      </td>
                      <td className="px-6 py-4 text-white">{o.car_model || o.model}</td>
                      <td className="px-6 py-4 text-white font-mono">{(o.total_price || o.price || 0).toLocaleString()}</td>
                      <td className="px-6 py-4 text-zinc-400 text-xs">{o.payment_method || '—'}</td>
                      <td className="px-6 py-4 text-zinc-500 text-xs">{o.created_at ? new Date(o.created_at).toLocaleDateString() : o.date || '—'}</td>
                      <td className="px-6 py-4">
                        <select
                          value={o.status}
                          onChange={e=>handleStatusChange(o.id, e.target.value)}
                          className={`bg-zinc-800 border border-zinc-700 text-xs px-3 py-1.5 rounded-lg focus:outline-none focus:border-amber-400 cursor-pointer ${statusColor(o.status)}`}
                        >
                          <option value="pending">Pending</option>
                          <option value="confirmed">Confirmed</option>
                          <option value="delivered">Delivered</option>
                          <option value="cancelled">Cancelled</option>
                        </select>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
            <div className="px-6 py-3 border-t border-zinc-800">
              <span className="text-xs text-zinc-500">Showing {filtered.length} of {orders.length} orders</span>
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
