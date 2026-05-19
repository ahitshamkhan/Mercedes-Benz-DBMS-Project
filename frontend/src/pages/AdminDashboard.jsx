import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getDashboardStats } from '../api/admin'
import {
  ShoppingCart, DollarSign, Users, Car,
  TrendingUp, Minus, Bell, AlertTriangle, History, LogOut
} from 'lucide-react'

const ICON_MAP = { shopping_cart: ShoppingCart, payments: DollarSign, group: Users, directions_car: Car }

const FALLBACK = {
  kpis: [
    { label: 'Total Orders', value: '1,284', trend: '+12.5%', up: true, icon: 'shopping_cart' },
    { label: 'Revenue (PKR)', value: '74.2M', trend: '+8.2%', up: true, icon: 'payments' },
    { label: 'Active Customers', value: '3,109', trend: 'Stable', up: false, icon: 'group' },
    { label: 'Delivered Cars', value: '142', trend: '+5.1%', up: true, icon: 'directions_car' },
  ],
  topModels: [
    { name: 'S-Class', pct: 80, value: 42 },
    { name: 'G-Wagon', pct: 65, value: 34 },
    { name: 'EQS SUV', pct: 95, value: 51 },
    { name: 'GLE', pct: 50, value: 22 },
    { name: 'GT Coupe', pct: 75, value: 38 },
  ],
  orders: [
    { id: '#MB-001', model: 'EQS 580', customer: 'Ahmed Khan', amount: '42,500,000', status: 'Delivered' },
    { id: '#MB-002', model: 'G-Class G63', customer: 'Zainab Malik', amount: '85,000,000', status: 'In Transit' },
    { id: '#MB-003', model: 'S-Class S450', customer: 'Tariq Jameel', amount: '58,200,000', status: 'Preparing' },
    { id: '#MB-004', model: 'AMG GT 4-Door', customer: 'Haris Butt', amount: '49,900,000', status: 'Delivered' },
    { id: '#MB-005', model: 'GLS 450', customer: 'Sami Ibrahim', amount: '38,400,000', status: 'Delivered' },
  ],
  alerts: [
    { car: 'EQA 250+ Premium', units: '1 Unit Left' },
    { car: 'Maybach GLS 600', units: '2 Units Left' },
  ],
  audit: [
    { text: 'Inventory updated: G-Class', by: 'Admin • 2m ago', type: 'gold' },
    { text: 'Successful Login', by: 'System • 15m ago', type: 'neutral' },
    { text: 'Price adjusted: S-Class 2024', by: 'Manager • 1h ago', type: 'gold' },
    { text: 'Failed Login Attempt', by: 'IP: 192.168.1.4 • 4h ago', type: 'danger' },
  ],
}

const statusColor = (s) => {
  const m = { Delivered: 'text-emerald-400 bg-emerald-500/10', 'In Transit': 'text-blue-400 bg-blue-500/10', Preparing: 'text-amber-400 bg-amber-500/10' }
  return m[s] || 'text-zinc-400 bg-zinc-500/10'
}

const auditDot = (t) => ({ gold: 'bg-amber-400', neutral: 'bg-zinc-500', danger: 'bg-red-500' })[t] || 'bg-zinc-500'

export default function AdminDashboard() {
  const { user, logout } = useAuth()
  const [data, setData] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getDashboardStats()
      .then(r => setData(r.data))
      .catch(() => setData(FALLBACK))
      .finally(() => setLoading(false))
  }, [])

  if (loading) return (
    <div className="min-h-screen bg-black flex items-center justify-center">
      <div className="h-8 w-8 border-2 border-amber-400 border-t-transparent rounded-full animate-spin" />
    </div>
  )

  const d = data || FALLBACK

  return (
    <div className="min-h-screen bg-black text-white">

      {/* Admin Header */}
      <header className="fixed top-0 w-full z-50 bg-zinc-950/95 backdrop-blur-md border-b border-amber-400/15 h-16 flex items-center px-6 md:px-12 justify-between">
        <Link to="/" className="flex items-center gap-3">
          <span className="text-amber-400 text-lg">★</span>
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
            <Link key={to} to={to} className="text-xs uppercase tracking-widest text-zinc-400 hover:text-amber-400 transition-colors font-medium">
              {label}
            </Link>
          ))}
        </nav>
        <div className="flex items-center gap-4">
          <span className="text-zinc-400 text-xs hidden sm:block">{user?.name}</span>
          <button onClick={logout} className="flex items-center gap-2 text-xs text-zinc-400 hover:text-red-400 transition-colors">
            <LogOut className="h-4 w-4" /> Sign Out
          </button>
        </div>
      </header>

      <main className="pt-24 pb-20 px-6 md:px-12 max-w-screen-xl mx-auto">

        {/* Page title */}
        <div className="mb-10">
          <p className="text-amber-400 text-xs font-mono tracking-widest uppercase mb-1">Admin</p>
          <h1 className="text-3xl font-bold text-white tracking-tight">Executive Overview</h1>
          <p className="text-zinc-500 text-sm mt-1">Global Sales & Logistics Administrative Suite</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 mb-10">
          {(d.kpis || FALLBACK.kpis).map((k, i) => {
            const Icon = ICON_MAP[k.icon] || Car
            return (
              <div key={i} className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 flex flex-col gap-3 relative overflow-hidden">
                <div className="absolute right-4 top-4 opacity-10">
                  <Icon className="h-10 w-10 text-amber-400" />
                </div>
                <span className="text-zinc-500 text-xs uppercase tracking-widest font-medium">{k.label}</span>
                <span className="text-2xl font-bold text-white">{k.value}</span>
                <span className={`text-xs flex items-center gap-1 font-mono ${k.up ? 'text-emerald-400' : 'text-zinc-500'}`}>
                  {k.up ? <TrendingUp className="h-3 w-3" /> : <Minus className="h-3 w-3" />}
                  {k.trend}
                </span>
              </div>
            )
          })}
        </div>

        {/* Charts row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-10">

          {/* Bar chart */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-white font-semibold text-base mb-1">Top Selling Models</h3>
            <p className="text-zinc-500 text-xs mb-6">Units sold per model class</p>
            <div className="flex items-end gap-3 h-48">
              {(d.topModels || FALLBACK.topModels).map(m => (
                <div key={m.name} className="flex-1 flex flex-col items-center gap-2">
                  <span className="text-[10px] text-amber-400 font-mono">{m.value}</span>
                  <div
                    className="w-full bg-amber-400/20 hover:bg-amber-400/50 transition-colors rounded-t"
                    style={{ height: `${m.pct || parseInt(m.height) || 50}%` }}
                  />
                  <span className="text-[9px] text-zinc-500 uppercase text-center leading-tight">{m.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Line chart */}
          <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
            <h3 className="text-white font-semibold text-base mb-1">Monthly Revenue</h3>
            <p className="text-zinc-500 text-xs mb-6">Total gross revenue (PKR)</p>
            <div className="h-48 w-full relative">
              <svg className="w-full h-full" viewBox="0 0 400 160" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="revGrad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" stopColor="#f59e0b" stopOpacity="0.4" />
                    <stop offset="100%" stopColor="#f59e0b" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <path d="M 0 130 Q 60 110 100 120 T 200 60 T 300 70 T 400 20" fill="none" stroke="#f59e0b" strokeWidth="2" />
                <path d="M 0 130 Q 60 110 100 120 T 200 60 T 300 70 T 400 20 V 160 H 0 Z" fill="url(#revGrad)" />
              </svg>
              <div className="absolute bottom-0 w-full flex justify-between px-1 text-[9px] text-zinc-600 font-mono">
                {['JAN', 'FEB', 'MAR', 'APR', 'MAY', 'JUN'].map(m => <span key={m}>{m}</span>)}
              </div>
            </div>
          </div>
        </div>

        {/* Orders + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">

          {/* Recent Orders table */}
          <div className="lg:col-span-2 bg-zinc-900 border border-zinc-800 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-zinc-800 flex justify-between items-center">
              <h3 className="text-white font-semibold">Recent Orders</h3>
              <Link to="/admin/orders" className="text-xs text-amber-400 hover:underline uppercase tracking-widest font-mono">View All</Link>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-sm text-left">
                <thead>
                  <tr className="text-[11px] text-zinc-500 uppercase tracking-wider border-b border-zinc-800">
                    <th className="px-6 py-3">Order ID</th>
                    <th className="px-6 py-3">Model</th>
                    <th className="px-6 py-3">Customer</th>
                    <th className="px-6 py-3 text-right">Amount (PKR)</th>
                    <th className="px-6 py-3">Status</th>
                  </tr>
                </thead>
                <tbody>
                  {(d.orders || FALLBACK.orders).map(o => (
                    <tr key={o.id} className="border-b border-zinc-800/50 hover:bg-white/[0.02] transition-colors">
                      <td className="px-6 py-4 text-amber-400 font-mono text-xs">{o.id}</td>
                      <td className="px-6 py-4 text-white">{o.model}</td>
                      <td className="px-6 py-4 text-zinc-400">{o.customer}</td>
                      <td className="px-6 py-4 text-right text-white font-mono">{o.amount}</td>
                      <td className="px-6 py-4">
                        <span className={`px-2 py-0.5 rounded text-[10px] font-medium uppercase ${statusColor(o.status)}`}>{o.status}</span>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>

          {/* Sidebar */}
          <div className="flex flex-col gap-6">

            {/* Inventory Alerts */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <AlertTriangle className="h-4 w-4 text-amber-400" />
                <h3 className="text-white font-semibold text-sm">Inventory Alerts</h3>
              </div>
              <div className="space-y-3">
                {(d.alerts || FALLBACK.alerts).map((a, i) => (
                  <div key={i} className="p-3 bg-amber-500/5 border-l-2 border-amber-400 rounded-r">
                    <p className="text-white text-xs font-medium">{a.car}</p>
                    <div className="flex justify-between mt-1">
                      <span className="text-zinc-500 text-[10px]">Stock critical</span>
                      <span className="text-amber-400 text-[10px] font-bold">{a.units}</span>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Audit Log */}
            <div className="bg-zinc-900 border border-zinc-800 rounded-xl p-6">
              <div className="flex items-center gap-2 mb-5">
                <History className="h-4 w-4 text-amber-400" />
                <h3 className="text-white font-semibold text-sm">Audit Log</h3>
              </div>
              <div className="space-y-4">
                {(d.audit || FALLBACK.audit).map((a, i) => (
                  <div key={i} className="flex gap-3">
                    <div className={`w-1.5 h-1.5 rounded-full mt-1.5 flex-shrink-0 ${auditDot(a.type)}`} />
                    <div>
                      <p className="text-white text-xs">{a.text}</p>
                      <p className="text-zinc-600 text-[10px] uppercase mt-0.5">{a.by}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </main>

      <footer className="border-t border-zinc-900 py-8 px-6 md:px-12 flex justify-between items-center">
        <span className="text-zinc-600 text-xs">Mercedes-Benz Pakistan</span>
        <span className="text-zinc-700 text-xs">© 2024 All rights reserved</span>
      </footer>
    </div>
  )
}
