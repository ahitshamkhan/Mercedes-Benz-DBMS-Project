import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getAllOrdersAdmin, updateOrderStatus } from '../api/admin'

const FALLBACK = [
  { id: '#MB-2024-001', customer: 'Alexander Vance', email: 'vance.a@luxury.com', model: 'S-Class Maybach S 580', colorDot: 'bg-zinc-900', colorName: 'Obsidian Black', date: 'Oct 12, 2024', price: '$193,400', status: 'confirmed' },
  { id: '#MB-2024-002', customer: 'Isabella Thorne', email: 'i.thorne@estate.uk', model: 'EQS 580 4MATIC Sedan', colorDot: 'bg-zinc-100', colorName: 'Diamond White', date: 'Oct 14, 2024', price: '$125,900', status: 'pending' },
  { id: '#MB-2024-003', customer: 'Maximilian Sterling', email: 'm.sterling@finance.com', model: 'G 63 AMG SUV', colorDot: 'bg-emerald-900', colorName: 'Emerald Green', date: 'Oct 15, 2024', price: '$179,000', status: 'delivered' },
  { id: '#MB-2024-004', customer: 'Eleanor Dupont', email: 'e.dupont@vogue.fr', model: 'SL 63 Roadster', colorDot: 'bg-red-900', colorName: 'Patagonia Red', date: 'Oct 16, 2024', price: '$183,000', status: 'cancelled' },
]

const statusStyle = (s) => {
  if (s === 'delivered') return 'border-emerald-900/50 text-emerald-500'
  if (s === 'confirmed') return 'border-primary/30 text-primary'
  if (s === 'cancelled') return 'border-error/30 text-error'
  return 'border-outline-variant text-zinc-400'
}

export default function ManageOrders() {
  const { logout } = useAuth()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)
  const [filter, setFilter] = useState('All')

  useEffect(() => {
    const fetchData = async () => {
      try { const res = await getAllOrdersAdmin(); setOrders(res.data) }
      catch { setOrders(FALLBACK) }
      finally { setLoading(false) }
    }
    fetchData()
  }, [])

  const handleStatusChange = async (id, newStatus) => {
    try { await updateOrderStatus(id, newStatus) } catch {}
    setOrders(prev => prev.map(o => o.id === id ? { ...o, status: newStatus } : o))
  }

  const filtered = filter === 'All' ? orders : orders.filter(o => o.status === filter.toLowerCase())

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <Link to="/" className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]">star</span>
          <span className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</span>
        </Link>
        <nav className="hidden md:flex gap-10">
          <Link className="text-zinc-400 hover:text-[#C8A97E] font-label-sm" to="/admin">Dashboard</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] font-label-sm" to="/admin/cars">Cars</Link>
          <Link className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 font-label-sm" to="/admin/orders">Orders</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] font-label-sm" to="/admin/customers">Customers</Link>
        </nav>
        <button className="px-6 py-2 border border-[#C8A97E] text-[#C8A97E] font-label-sm uppercase hover:bg-[#C8A97E] hover:text-background transition-all" onClick={logout}>Sign Out</button>
      </header>

      <main className="pt-32 pb-40 px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="mb-16">
          <h2 className="font-headline-h1 text-on-background mb-4">Manage Orders</h2>
          <p className="font-body-lg text-secondary max-w-2xl">Monitor client acquisitions and fulfillments in real-time.</p>
        </div>

        <div className="flex flex-wrap gap-8 mb-12 border-b border-outline-variant pb-4">
          {['All', 'Pending', 'Confirmed', 'Delivered', 'Cancelled'].map(f => (
            <button key={f} className={`font-label-sm pb-4 transition-all ${filter === f ? 'text-[#C8A97E] border-b-2 border-[#C8A97E]' : 'text-zinc-500 hover:text-white'}`} onClick={() => setFilter(f)}>{f}</button>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><span className="material-symbols-outlined text-primary text-4xl animate-spin">progress_activity</span></div>
        ) : (
          <div className="bg-surface-container-lowest border border-[#C8A97E]/15 overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left border-collapse">
                <thead><tr className="bg-surface-container-low">
                  <th className="px-8 py-6 font-label-sm text-on-surface-variant">Order ID</th>
                  <th className="px-8 py-6 font-label-sm text-on-surface-variant">Customer</th>
                  <th className="px-8 py-6 font-label-sm text-on-surface-variant">Model</th>
                  <th className="px-8 py-6 font-label-sm text-on-surface-variant">Color</th>
                  <th className="px-8 py-6 font-label-sm text-on-surface-variant">Date</th>
                  <th className="px-8 py-6 font-label-sm text-on-surface-variant">Price</th>
                  <th className="px-8 py-6 font-label-sm text-on-surface-variant">Status</th>
                </tr></thead>
                <tbody className="divide-y divide-[#C8A97E]/10">
                  {filtered.map(o => (
                    <tr key={o.id} className="hover:bg-[#C8A97E]/5 transition-colors">
                      <td className="px-8 py-6 font-label-sm text-[#C8A97E]">{o.id}</td>
                      <td className="px-8 py-6"><div className="flex flex-col"><span className="font-body-md text-on-surface font-bold">{o.customer}</span><span className="text-xs text-zinc-500">{o.email}</span></div></td>
                      <td className="px-8 py-6 text-on-background">{o.model}</td>
                      <td className="px-8 py-6"><div className="flex items-center gap-2"><div className={`w-3 h-3 ${o.colorDot} border border-white/20`}></div><span className="text-xs text-secondary">{o.colorName}</span></div></td>
                      <td className="px-8 py-6 text-xs text-secondary">{o.date}</td>
                      <td className="px-8 py-6 text-on-background">{o.price}</td>
                      <td className="px-8 py-6">
                        <select value={o.status} onChange={(e) => handleStatusChange(o.id, e.target.value)} className={`bg-background border ${statusStyle(o.status)} font-label-sm px-4 py-2 focus:ring-0 outline-none appearance-none`}>
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
            <div className="p-8 flex justify-between items-center bg-surface-container-low border-t border-[#C8A97E]/10">
              <span className="text-xs text-zinc-500">Showing {filtered.length} orders</span>
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
