import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getAllCustomers, deleteCustomer } from '../api/admin'

const FALLBACK = [
  { id: 1, name: 'Maximilian von Weber', tier: 'Platinum Tier', tierColor: 'text-primary', email: 'm.weber@executive.de', phone: '+49 172 902 4432', since: 'Oct 14, 2021', orders: '08', status: 'Active', statusStyle: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDwsR2bwmDgIOHBPZfjkKUv6VIsD0zuL9ktfMAC8uoMvb4ySTLaC2GfLWTHBuPg8u_lPloYnHpnoi8pPIlMcf1dopOtaVciDtHSBHxKA519CrLw0JHske2f9y4Ce4NgVXR21n2i0w5zMvnLZw7GeNVOvDTojX1NMtBaPSO_J8QIAqiDOnjOYrKU1VHk5Q6B_FdaVTAInCiGUxWgpQqViphX3VpPXJ5pTF5q327kZVIHm38TaoF7GVOsy_JbsCgSn65Mu1YlYLMvng' },
  { id: 2, name: 'Elena Rodriguez', tier: 'Standard Tier', tierColor: 'text-zinc-500', email: 'elena.rod@techfoundry.io', phone: '+1 (555) 012-9983', since: 'Jan 02, 2024', orders: '01', status: 'Inactive', statusStyle: 'bg-zinc-500/10 text-zinc-500 border-zinc-500/20', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaU6hmi-fBCmm6-a23KA6jQSOL-vAKWJFjPCVOqYDVqsFkagZgFuhkl9xId_1KYbmx-6PKBf6fRIrQFrL0PrINRLhlbnmA5v-YwC1_D-7Cil0ERBRIx7lyCukg2bocsVlF1OIIokTxA3dL5weC8Ok3VWw9K0F5eN46uau8E25Zh5acRuFf-6GoVX8thFVEVIs7go2AqV4kEanhG0aEA69dFm_5rX50Wd4KR6c2P1V_YSVVztS9Wmf7Wlt86PwKDhCrl38AjFqBNCI' },
  { id: 3, name: 'Jameson Sterling', tier: 'VIP Collector', tierColor: 'text-[#C8A97E]', email: 'j.sterling@sterling-holdings.com', phone: '+44 20 7946 0958', since: 'Mar 22, 2019', orders: '24', status: 'Active', statusStyle: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA75-EV1Kq1wJKUIcmCL8bRjgpqvDmwfuedCrQ9gfcq49qjxuJuy2jgeO__nyDHVXwitOcw70R1PuhxG9AE2df4krOl8-phjd81cdMrvRCyJ-qqrwhf9TWKhVgbKkXcAEYRZqdUs7F6AE6XIIpLOuI17LI9ZCwcPez27K2JbctaWGDdp9nFWOCeXnq3SYFB9G0AlleXWiRyLqMXQ5kLe0AJvrew86DGbbZ-X8X_iGKhgPuqeSwvDVwgMnLStXyE83eoVlM0QlkyFYM' },
]

export default function ManageCustomers() {
  const { logout } = useAuth()
  const [customers, setCustomers] = useState([])
  const [loading, setLoading] = useState(true)
  const [search, setSearch] = useState('')
  const [expandedId, setExpandedId] = useState(null)

  useEffect(() => {
    const fetchData = async () => {
      try { const res = await getAllCustomers(); setCustomers(res.data) }
      catch { setCustomers(FALLBACK) }
      finally { setLoading(false) }
    }
    fetchData()
  }, [])

  const handleDelete = async (id) => {
    if (!confirm('Remove this customer?')) return
    try { await deleteCustomer(id) } catch {}
    setCustomers(prev => prev.filter(c => c.id !== id))
  }

  const filtered = customers.filter(c => c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase()))

  const stats = [
    { label: 'Total Clients', value: String(customers.length), badge: '+12%', badgeColor: 'text-emerald-500' },
    { label: 'Active', value: String(customers.filter(c => c.status === 'Active').length), badge: 'Live', badgeColor: 'text-zinc-500' },
    { label: 'Inactive', value: String(customers.filter(c => c.status === 'Inactive').length), badge: 'Review', badgeColor: 'text-primary' },
  ]

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <Link to="/" className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]">star</span>
          <span className="font-['Playfair_Display'] tracking-widest uppercase text-xl font-bold text-[#C8A97E]">Mercedes-Benz</span>
        </Link>
        <nav className="hidden md:flex gap-12">
          <Link className="text-zinc-400 hover:text-[#C8A97E] text-sm" to="/admin">Dashboard</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] text-sm" to="/admin/cars">Cars</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] text-sm" to="/admin/orders">Orders</Link>
          <Link className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 text-sm" to="/admin/customers">Customers</Link>
          <button className="ml-4 px-6 py-2 border border-[#C8A97E] text-[#C8A97E] font-label-sm uppercase hover:bg-[#C8A97E] hover:text-black transition-all" onClick={logout}>Sign Out</button>
        </nav>
      </header>

      <main className="pt-32 pb-40 px-6 md:px-20 max-w-[1440px] mx-auto min-h-screen">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <p className="text-primary font-label-sm uppercase tracking-widest">Administrative Control</p>
            <h2 className="font-headline-h1 text-on-background">Customer Directory</h2>
            <p className="text-zinc-500 font-body-lg max-w-xl">Manage the global database of distinguished owners.</p>
          </div>
          <div className="w-full md:w-96 relative">
            <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">search</span>
            <input className="w-full bg-surface-container-lowest border border-outline-variant/30 px-12 py-4 focus:ring-1 focus:ring-primary outline-none text-on-surface" placeholder="Search by name or email..." value={search} onChange={(e) => setSearch(e.target.value)} />
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="glass-panel p-8 flex flex-col justify-between">
              <span className="text-zinc-500 font-label-sm uppercase">{s.label}</span>
              <div className="mt-4 flex items-baseline gap-2">
                <span className="text-4xl font-headline-h2 text-on-background">{s.value}</span>
                <span className={`font-label-sm text-xs ${s.badgeColor}`}>{s.badge}</span>
              </div>
            </div>
          ))}
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><span className="material-symbols-outlined text-primary text-4xl animate-spin">progress_activity</span></div>
        ) : (
          <div className="glass-panel overflow-hidden">
            <table className="w-full text-left border-collapse">
              <thead><tr className="bg-surface-container-lowest/50 border-b border-outline-variant/20">
                <th className="px-8 py-6 font-label-sm uppercase text-zinc-500">Client</th>
                <th className="px-8 py-6 font-label-sm uppercase text-zinc-500">Contact</th>
                <th className="px-8 py-6 font-label-sm uppercase text-zinc-500">Since</th>
                <th className="px-8 py-6 font-label-sm uppercase text-zinc-500 text-center">Orders</th>
                <th className="px-8 py-6 font-label-sm uppercase text-zinc-500">Status</th>
                <th className="px-8 py-6 font-label-sm uppercase text-zinc-500 text-right">Actions</th>
              </tr></thead>
              <tbody className="divide-y divide-outline-variant/10">
                {filtered.map(c => (
                  <tr key={c.id} className="hover:bg-primary/5 transition-colors group cursor-pointer" onClick={() => setExpandedId(expandedId === c.id ? null : c.id)}>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-4">
                        <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/20"><img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all" src={c.img} alt={c.name} /></div>
                        <div><div className="font-headline-h3 text-lg text-on-background">{c.name}</div><div className={`text-xs uppercase ${c.tierColor}`}>{c.tier}</div></div>
                      </div>
                    </td>
                    <td className="px-8 py-6"><div className="space-y-1"><div className="text-sm text-zinc-300">{c.email}</div><div className="text-sm text-zinc-500">{c.phone}</div></div></td>
                    <td className="px-8 py-6 text-zinc-400">{c.since}</td>
                    <td className="px-8 py-6 text-center"><span className="bg-surface-container-high px-3 py-1 rounded text-on-surface">{c.orders}</span></td>
                    <td className="px-8 py-6"><span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase border ${c.statusStyle}`}>{c.status}</span></td>
                    <td className="px-8 py-6 text-right" onClick={(e) => e.stopPropagation()}>
                      <div className="flex justify-end gap-4">
                        <button className="text-zinc-500 hover:text-primary transition-colors"><span className="material-symbols-outlined">edit</span></button>
                        <button className="text-zinc-500 hover:text-error transition-colors" onClick={() => handleDelete(c.id)}><span className="material-symbols-outlined">block</span></button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
            <div className="px-8 py-6 border-t border-outline-variant/20 flex items-center justify-between">
              <p className="text-zinc-500 font-label-sm text-xs">Showing {filtered.length} entries</p>
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
