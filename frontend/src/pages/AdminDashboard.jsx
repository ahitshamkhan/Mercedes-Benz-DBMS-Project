import { useState } from 'react';
import { Star, LayoutDashboard, Warehouse, Users, FileBarChart, TrendingUp, TrendingDown, Package, ShoppingCart, DollarSign, Car, AlertTriangle, Shield, UserCog, Clock, ChevronRight } from 'lucide-react';

const STATS = [
  { label: 'Total Revenue', value: 'PKR 2.8B', change: '+12.5%', up: true, icon: <DollarSign size={20} color="#C8A97E" /> },
  { label: 'Vehicles Sold', value: '347', change: '+8.3%', up: true, icon: <Car size={20} color="#C8A97E" /> },
  { label: 'Active Orders', value: '42', change: '+15.1%', up: true, icon: <ShoppingCart size={20} color="#C8A97E" /> },
  { label: 'Inventory', value: '156', change: '-3.2%', up: false, icon: <Package size={20} color="#C8A97E" /> },
];

const TOP_MODELS = [
  { name: 'S-Class', units: 89, pct: 85 },
  { name: 'G-Class', units: 72, pct: 70 },
  { name: 'AMG GT', units: 58, pct: 55 },
  { name: 'EQS', units: 45, pct: 43 },
  { name: 'C-Class', units: 83, pct: 80 },
];

const REVENUE_MONTHS = [
  { month: 'Jan', value: 65 }, { month: 'Feb', value: 72 }, { month: 'Mar', value: 58 },
  { month: 'Apr', value: 80 }, { month: 'May', value: 95 }, { month: 'Jun', value: 88 },
];

const RECENT_ORDERS = [
  { id: 'ORD-4521', customer: 'Ahmed Malik', car: 'S-Class 500', amount: 'PKR 85M', status: 'Processing', color: '#f39c12' },
  { id: 'ORD-4520', customer: 'Fatima Zaidi', car: 'AMG GT', amount: 'PKR 120M', status: 'Confirmed', color: '#2ecc71' },
  { id: 'ORD-4519', customer: 'Ali Hassan', car: 'G63 AMG', amount: 'PKR 150M', status: 'Shipped', color: '#C8A97E' },
  { id: 'ORD-4518', customer: 'Sara Qureshi', car: 'EQS 580', amount: 'PKR 95M', status: 'Delivered', color: '#2ecc71' },
];

const ALERTS = [
  { car: 'EQA 250+ Premium', level: 'Low Stock', units: 2, severity: 'high' },
  { car: 'Maybach GLS 600', level: 'Low Stock', units: 1, severity: 'critical' },
];

const AUDIT_LOG = [
  { action: 'Inventory updated: G-Class', user: 'Admin (Sara)', time: '2m ago', icon: <Package size={14} color="#C8A97E" /> },
  { action: 'Successful Login', user: 'System', time: '15m ago', icon: <Shield size={14} color="#2ecc71" /> },
  { action: 'Price adjusted: S-Class 2024', user: 'Manager (Omar)', time: '1h ago', icon: <DollarSign size={14} color="#C8A97E" /> },
  { action: 'Failed Login Attempt', user: 'IP: 192.168.1.4', time: '4h ago', icon: <AlertTriangle size={14} color="#e74c3c" /> },
];

const SIDEBAR_LINKS = [
  { label: 'Dashboard', icon: <LayoutDashboard size={18} />, active: true },
  { label: 'Inventory', icon: <Warehouse size={18} />, active: false },
  { label: 'Customers', icon: <Users size={18} />, active: false },
  { label: 'Reports', icon: <FileBarChart size={18} />, active: false },
];

export default function AdminDashboard() {
  const [activeLink, setActiveLink] = useState('Dashboard');

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', minHeight: '100vh', display: 'flex' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        a { text-decoration:none; color:inherit; }
      `}</style>

      {/* SIDEBAR */}
      <aside style={{ width: 260, background: '#0d0d14', borderRight: '1px solid rgba(200,169,126,0.08)', padding: '28px 0', position: 'fixed', top: 0, bottom: 0, display: 'flex', flexDirection: 'column' }}>
        <div style={{ padding: '0 28px', marginBottom: 40 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Star size={16} color="#C8A97E" />
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 400, color: '#fff' }}>Mercedes-Benz</span>
          </div>
        </div>
        <nav style={{ flex: 1 }}>
          {SIDEBAR_LINKS.map((link) => (
            <div key={link.label} onClick={() => setActiveLink(link.label)} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '12px 28px', cursor: 'pointer',
              background: activeLink === link.label ? 'rgba(200,169,126,0.06)' : 'transparent',
              borderLeft: activeLink === link.label ? '2px solid #C8A97E' : '2px solid transparent',
              color: activeLink === link.label ? '#C8A97E' : '#5a5768', transition: 'all 0.3s',
            }}>
              {link.icon}
              <span style={{ fontSize: 14, fontWeight: activeLink === link.label ? 500 : 400 }}>{link.label}</span>
            </div>
          ))}
        </nav>
        <div style={{ padding: '0 28px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 0', borderTop: '1px solid rgba(200,169,126,0.08)' }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', background: 'rgba(200,169,126,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <UserCog size={16} color="#C8A97E" />
            </div>
            <div>
              <p style={{ fontSize: 13, fontWeight: 500, color: '#e4e1eb' }}>Admin Panel</p>
              <p style={{ fontSize: 11, color: '#4e453b' }}>Super Admin</p>
            </div>
          </div>
        </div>
      </aside>

      {/* MAIN */}
      <main style={{ marginLeft: 260, flex: 1, padding: '32px 48px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 36 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 300, color: '#fff', marginBottom: 4 }}>Executive Overview</h1>
            <p style={{ fontSize: 13, color: '#5a5768' }}>Global Sales & Logistics Administrative Suite</p>
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 16px', background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 6 }}>
            <Clock size={14} color="#5a5768" />
            <span style={{ fontSize: 12, color: '#6b6880' }}>Last updated: Just now</span>
          </div>
        </div>

        {/* STATS */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 16, marginBottom: 32 }}>
          {STATS.map((s) => (
            <div key={s.label} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(200,169,126,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</div>
                <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 12, fontWeight: 500, color: s.up ? '#2ecc71' : '#e74c3c' }}>
                  {s.up ? <TrendingUp size={14} /> : <TrendingDown size={14} />} {s.change}
                </span>
              </div>
              <p style={{ fontSize: 28, fontWeight: 600, color: '#fff', marginBottom: 4 }}>{s.value}</p>
              <p style={{ fontSize: 12, color: '#5a5768', letterSpacing: '0.05em' }}>{s.label}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 32 }}>
          {/* TOP MODELS */}
          <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '24px' }}>
            <h3 style={{ fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 4 }}>Top Selling Models</h3>
            <p style={{ fontSize: 11, color: '#4e453b', marginBottom: 20 }}>Units sold per model class</p>
            {TOP_MODELS.map((m) => (
              <div key={m.name} style={{ marginBottom: 14 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                  <span style={{ fontSize: 13, color: '#9a97a5' }}>{m.name}</span>
                  <span style={{ fontSize: 12, color: '#C8A97E', fontWeight: 500 }}>{m.units} units</span>
                </div>
                <div style={{ height: 6, background: '#1f1f26', borderRadius: 3, overflow: 'hidden' }}>
                  <div style={{ width: `${m.pct}%`, height: '100%', background: 'linear-gradient(90deg, #C8A97E, #e5c497)', borderRadius: 3, transition: 'width 1s ease' }} />
                </div>
              </div>
            ))}
          </div>

          {/* REVENUE CHART */}
          <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '24px' }}>
            <h3 style={{ fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 4 }}>Monthly Revenue</h3>
            <p style={{ fontSize: 11, color: '#4e453b', marginBottom: 20 }}>Total gross revenue across all sectors</p>
            <div style={{ display: 'flex', alignItems: 'flex-end', gap: 16, height: 160 }}>
              {REVENUE_MONTHS.map((m) => (
                <div key={m.month} style={{ flex: 1, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8 }}>
                  <div style={{ width: '100%', height: `${m.value * 1.5}px`, background: 'linear-gradient(to top, #C8A97E, rgba(200,169,126,0.3))', borderRadius: '4px 4px 0 0', transition: 'height 0.8s ease' }} />
                  <span style={{ fontSize: 11, color: '#5a5768' }}>{m.month}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 16 }}>
          {/* RECENT ORDERS */}
          <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '24px' }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 20 }}>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: '#fff' }}>Recent Orders</h3>
              <a href="#" style={{ fontSize: 12, color: '#C8A97E', display: 'flex', alignItems: 'center', gap: 4 }}>View All <ChevronRight size={14} /></a>
            </div>
            <table style={{ width: '100%', borderCollapse: 'collapse' }}>
              <thead>
                <tr>
                  {['Order', 'Customer', 'Vehicle', 'Amount', 'Status'].map((h) => (
                    <th key={h} style={{ textAlign: 'left', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', paddingBottom: 12, borderBottom: '1px solid rgba(200,169,126,0.06)' }}>{h}</th>
                  ))}
                </tr>
              </thead>
              <tbody>
                {RECENT_ORDERS.map((o) => (
                  <tr key={o.id}>
                    <td style={{ padding: '12px 0', fontSize: 13, color: '#C8A97E', fontWeight: 500 }}>{o.id}</td>
                    <td style={{ padding: '12px 0', fontSize: 13, color: '#9a97a5' }}>{o.customer}</td>
                    <td style={{ padding: '12px 0', fontSize: 13, color: '#9a97a5' }}>{o.car}</td>
                    <td style={{ padding: '12px 0', fontSize: 13, color: '#e4e1eb', fontWeight: 500 }}>{o.amount}</td>
                    <td style={{ padding: '12px 0' }}>
                      <span style={{ padding: '3px 10px', background: `${o.color}15`, border: `1px solid ${o.color}30`, borderRadius: 20, fontSize: 11, color: o.color }}>{o.status}</span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* RIGHT COLUMN */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
            {/* ALERTS */}
            <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '24px' }}>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 16 }}>Inventory Alerts</h3>
              {ALERTS.map((a) => (
                <div key={a.car} style={{ display: 'flex', alignItems: 'center', gap: 12, padding: '10px 14px', background: a.severity === 'critical' ? 'rgba(231,76,60,0.06)' : 'rgba(243,156,18,0.06)', border: `1px solid ${a.severity === 'critical' ? 'rgba(231,76,60,0.15)' : 'rgba(243,156,18,0.15)'}`, borderRadius: 6, marginBottom: 10 }}>
                  <AlertTriangle size={16} color={a.severity === 'critical' ? '#e74c3c' : '#f39c12'} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, fontWeight: 500, color: '#e4e1eb' }}>{a.car}</p>
                    <p style={{ fontSize: 11, color: '#5a5768' }}>{a.units} units remaining</p>
                  </div>
                </div>
              ))}
              <p style={{ fontSize: 11, color: '#3a3748', marginTop: 4 }}>All other stock levels stable</p>
            </div>

            {/* AUDIT LOG */}
            <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '24px' }}>
              <h3 style={{ fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 16 }}>Audit Log</h3>
              {AUDIT_LOG.map((log, i) => (
                <div key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: 12, marginBottom: 14 }}>
                  <div style={{ width: 28, height: 28, borderRadius: '50%', background: 'rgba(200,169,126,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginTop: 2, flexShrink: 0 }}>{log.icon}</div>
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 13, color: '#9a97a5' }}>{log.action}</p>
                    <p style={{ fontSize: 11, color: '#3a3748' }}>{log.user} • {log.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
