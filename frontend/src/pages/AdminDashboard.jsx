import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getDashboardStats } from '../api/admin'

const FALLBACK = {
  kpis: [
    { label: 'Total Orders', value: '1,284', trend: '+12.5%', icon: 'shopping_cart', up: true },
    { label: 'Revenue (PKR)', value: '74.2M', trend: '+8.2%', icon: 'payments', up: true },
    { label: 'Active Customers', value: '3,109', trend: 'Stable', icon: 'group', up: false },
    { label: 'Delivered Cars', value: '142', trend: '+5.1%', icon: 'directions_car', up: true },
  ],
  topModels: [
    { name: 'S-Class', height: '80%', value: 42 },
    { name: 'G-Wagon', height: '65%', value: 34 },
    { name: 'EQS SUV', height: '95%', value: 51 },
    { name: 'GLE', height: '50%', value: 22 },
    { name: 'GT Coupe', height: '75%', value: 38 },
  ],
  orders: [
    { id: '#MB-2024-001', model: 'EQS 580 4MATIC', customer: 'Ahmed Khan', amount: '₨ 42,500,000', status: 'DELIVERED', color: 'emerald' },
    { id: '#MB-2024-002', model: 'G-Class G63 AMG', customer: 'Zainab Malik', amount: '₨ 85,000,000', status: 'IN TRANSIT', color: 'blue' },
    { id: '#MB-2024-003', model: 'S-Class S450', customer: 'Tariq Jameel', amount: '₨ 58,200,000', status: 'PREPARING', color: 'amber' },
    { id: '#MB-2024-004', model: 'AMG GT 4-Door', customer: 'Haris Butt', amount: '₨ 49,900,000', status: 'DELIVERED', color: 'emerald' },
    { id: '#MB-2024-005', model: 'GLS 450 4MATIC', customer: 'Sami Ibrahim', amount: '₨ 38,400,000', status: 'DELIVERED', color: 'emerald' },
  ],
  alerts: [
    { car: 'EQA 250+ Premium', units: '1 Unit Left' },
    { car: 'Maybach GLS 600', units: '2 Units Left' },
  ],
  audit: [
    { text: 'Inventory updated: G-Class', by: 'Admin (Sara) • 2m ago', color: 'bg-[#C8A97E]' },
    { text: 'Successful Login', by: 'System • 15m ago', color: 'bg-zinc-700' },
    { text: 'Price adjusted: S-Class 2024', by: 'Manager (Omar) • 1h ago', color: 'bg-[#C8A97E]' },
    { text: 'Failed Login Attempt', by: 'IP: 192.168.1.4 • 4h ago', color: 'bg-red-500' },
  ],
}

export default function AdminDashboard() {
  const { user, logout } = useAuth()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetch = async () => {
      try { const res = await getDashboardStats(); setData(res.data) }
      catch { setData(FALLBACK) }
      finally { setLoading(false) }
    }
    fetch()
  }, [])

  if (loading) return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="relative w-16 h-16">
        <div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
        <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin"></div>
      </div>
    </div>
  )
  const d = data

  return (
    <>
      <header className="glass-nav fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 z-50 border-b border-[#C8A97E]/15">
        <Link to="/" className="flex items-center gap-4 group hover:opacity-80 transition-opacity">
          <span className="material-symbols-outlined text-[#C8A97E] star-glow" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</span>
        </Link>
        <nav className="hidden md:flex gap-12">
          <Link className="text-[#C8A97E] border-b-2 border-[#C8A97E] pb-1 font-label-sm uppercase text-xs tracking-wider" to="/admin">Dashboard</Link>
          <Link className="text-[#c0c0c0] hover:text-[#C8A97E] font-label-sm uppercase text-xs tracking-wider opacity-70 hover:opacity-100 transition-all" to="/admin/cars">Inventory</Link>
          <Link className="text-[#c0c0c0] hover:text-[#C8A97E] font-label-sm uppercase text-xs tracking-wider opacity-70 hover:opacity-100 transition-all" to="/admin/customers">Customers</Link>
          <Link className="text-[#c0c0c0] hover:text-[#C8A97E] font-label-sm uppercase text-xs tracking-wider opacity-70 hover:opacity-100 transition-all" to="/admin/chat">Chat</Link>
        </nav>
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-[#c0c0c0] hover:text-[#C8A97E] cursor-pointer transition-all hover:scale-110 duration-300">notifications</span>
          <button className="bg-[#C8A97E]/10 hover:bg-[#C8A97E] px-4 py-2 border-2 border-[#C8A97E]/40 hover:border-[#C8A97E] text-[#C8A97E] hover:text-black font-label-sm uppercase transition-all text-xs tracking-wider rounded-sm" onClick={logout}>Log Out</button>
        </div>
      </header>

      <main className="pt-32 pb-20 px-6 md:px-20 max-w-[1440px] mx-auto min-h-screen">
        <div className="mb-16 animate-fade-up">
          <div className="inline-block mb-6">
            <span className="font-label-sm text-primary uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm text-xs">📊 Dashboard</span>
          </div>
          <h2 className="font-headline-h1 text-on-background mb-4 text-4xl md:text-5xl">Executive Overview</h2>
          <p className="font-body-lg text-outline max-w-2xl leading-relaxed">Global Sales & Logistics Administrative Suite with real-time performance metrics</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {d.kpis.map((k, i) => (
            <div key={i} className="glass-card p-8 flex flex-col gap-3 relative overflow-hidden hover:border-primary/40 transition-all duration-300 group animate-fade-up" style={{animationDelay: `${i * 75}ms`}}>
              <div className="absolute right-4 top-4 opacity-20 group-hover:opacity-30 transition-opacity duration-300"><span className="material-symbols-outlined text-5xl text-primary">{k.icon}</span></div>
              <span className="font-label-sm text-outline uppercase text-[10px] tracking-wider opacity-80">{k.label}</span>
              <span className="font-headline-h2 text-on-background text-3xl md:text-4xl font-bold">{k.value}</span>
              <span className={`text-xs font-label-sm flex items-center gap-2 tracking-wider ${k.up ? 'text-emerald-400' : 'text-outline'}`}>
                <span className="material-symbols-outlined text-sm">{k.up ? 'trending_up' : 'remove'}</span>
                <span>{k.trend}</span>
              </span>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12 animate-fade-up">
          <div className="glass-card p-8 hover:border-primary/40 transition-all duration-300">
            <div className="mb-8">
              <h3 className="font-headline-h3 text-on-background mb-2">Top Selling Models</h3>
              <p className="text-outline text-sm">Units sold per model class this quarter</p>
            </div>
            <div className="flex items-end gap-4 h-64 px-4 pb-6">
              {d.topModels.map((m, idx) => (
                <div key={m.name} className="flex-1 flex flex-col items-center gap-3 group" style={{animationDelay: `${idx * 50}ms`}}>
                  <div className="w-full bg-gradient-to-t from-primary to-primary/40 relative group cursor-pointer hover:from-primary hover:to-primary/60 transition-all duration-500 rounded-t-sm" style={{ height: m.height }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-label-sm text-primary opacity-0 group-hover:opacity-100 transition-opacity duration-300 font-bold">{m.value}</div>
                  </div>
                  <span className="text-[10px] font-label-sm text-outline uppercase tracking-wider">{m.name}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="glass-card p-8 hover:border-primary/40 transition-all duration-300">
            <div className="mb-8">
              <h3 className="font-headline-h3 text-on-background mb-2">Monthly Revenue</h3>
              <p className="text-outline text-sm">Total gross revenue trend (in Millions)</p>
            </div>
            <div className="h-64 w-full flex items-center justify-center relative">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#C8A97E', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#C8A97E', stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
                <path d="M 0 160 Q 50 140 100 150 T 200 80 T 300 90 T 400 40" fill="none" stroke="#C8A97E" strokeWidth="3" />
                <path d="M 0 160 Q 50 140 100 150 T 200 80 T 300 90 T 400 40 V 200 H 0 Z" fill="url(#grad)" opacity="0.3" />
              </svg>
              <div className="absolute bottom-4 w-full flex justify-between px-6 text-[10px] font-label-sm text-outline uppercase tracking-wider opacity-70">
                <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
              </div>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 animate-fade-up">
          <div className="lg:col-span-2 glass-card overflow-hidden hover:border-primary/40 transition-all duration-300">
            <div className="p-8 border-b border-primary/10 flex justify-between items-center">
              <h3 className="font-headline-h3 text-on-background text-2xl">Recent Orders</h3>
              <Link to="/admin/orders" className="text-xs font-label-sm text-primary uppercase hover:bg-primary/10 px-4 py-2 transition-colors rounded-sm border border-primary/20 hover:border-primary/40">View All</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left text-sm">
                <thead><tr className="text-outline font-label-sm text-[10px] uppercase border-b border-primary/5 bg-primary/5">
                  <th className="p-6">Order ID</th><th className="p-6">Model</th><th className="p-6">Customer</th><th className="p-6 text-right">Amount</th><th className="p-6">Status</th>
                </tr></thead>
                <tbody>
                  {d.orders.map((o, idx) => (
                    <tr key={o.id} className="border-b border-primary/5 hover:bg-primary/5 transition-colors duration-200" style={{animationDelay: `${idx * 50}ms`}}>
                      <td className="p-6 text-primary font-mono">{o.id}</td>
                      <td className="p-6 text-on-background font-medium">{o.model}</td>
                      <td className="p-6 text-outline">{o.customer}</td>
                      <td className="p-6 text-right text-on-background font-medium">{o.amount}</td>
                      <td className="p-6">
                        <span className={`px-3 py-1 text-[10px] font-label-sm rounded-sm uppercase tracking-wider border ${
                          o.color === 'emerald' ? 'bg-emerald-500/10 text-emerald-400 border-emerald-500/30' :
                          o.color === 'blue' ? 'bg-blue-500/10 text-blue-400 border-blue-500/30' :
                          'bg-amber-500/10 text-amber-400 border-amber-500/30'
                        }`}>{o.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          <div className="flex flex-col gap-8">
            <div className="glass-card p-8 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-amber-500 text-2xl">warning</span>
                <h3 className="font-headline-h3 text-on-background text-lg">Inventory Alerts</h3>
              </div>
              <div className="space-y-4">
                {d.alerts.map((a, i) => (
                  <div key={i} className="p-4 bg-amber-500/5 border-l-2 border-amber-500 hover:bg-amber-500/10 transition-colors rounded-sm">
                    <p className="text-sm text-on-background font-medium">{a.car}</p>
                    <div className="flex justify-between mt-2">
                      <span className="text-xs text-outline">Stock critical</span>
                      <span className="text-xs font-bold text-amber-400">{a.units}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>
            <div className="glass-card p-8 hover:border-primary/40 transition-all duration-300">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-primary text-2xl">history</span>
                <h3 className="font-headline-h3 text-on-background text-lg">Audit Log</h3>
              </div>
              <div className="space-y-5">
                {d.audit.map((a, i) => (
                  <div key={i} className="flex gap-4 group">
                    <div className={`w-2 h-2 mt-1.5 rounded-full flex-shrink-0 ${a.color}`}></div>
                    <div>
                      <p className="text-xs text-on-background group-hover:text-primary transition-colors">{a.text}</p>
                      <p className="text-[10px] text-outline uppercase mt-1 tracking-wider">{a.by}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="bg-gradient-to-r from-[#050508] to-[#0D0D14] w-full py-12 px-6 md:px-20 border-t border-primary/10 flex justify-between items-center">
        <Link to="/" className="text-on-background font-['Playfair_Display'] font-bold text-lg hover:text-primary transition-colors">Mercedes-Benz</Link>
        <p className="text-outline text-xs">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
      </footer>
    </>
  );
}
