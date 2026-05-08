import { useState } from 'react';
import { Star, LayoutDashboard, Car, Warehouse, ShoppingCart, Users, Search, Eye, Mail, Phone, X, Shield, Crown, User, ChevronDown, MoreVertical, Ban, CheckCircle2 } from 'lucide-react';

const CUSTOMERS = [
  { id: 1, name: 'Ahmed Malik', email: 'ahmed@example.com', phone: '+92 321 1234567', joinDate: 'Jan 2023', tier: 'Platinum', orders: 5, totalSpent: 340000000, vehicles: ['S-Class 500', 'G-Class G63'], status: 'Active' },
  { id: 2, name: 'Fatima Zaidi', email: 'fatima@example.com', phone: '+92 333 9876543', joinDate: 'Mar 2023', tier: 'Gold', orders: 3, totalSpent: 200000000, vehicles: ['AMG GT Coupé'], status: 'Active' },
  { id: 3, name: 'Ali Hassan', email: 'ali@example.com', phone: '+92 300 5551234', joinDate: 'Jun 2022', tier: 'Platinum', orders: 7, totalSpent: 520000000, vehicles: ['Maybach S680', 'EQS 580', 'C-Class 300'], status: 'Active' },
  { id: 4, name: 'Sara Qureshi', email: 'sara@example.com', phone: '+92 312 4445678', joinDate: 'Sep 2023', tier: 'Silver', orders: 1, totalSpent: 45000000, vehicles: ['C-Class 300'], status: 'Active' },
  { id: 5, name: 'Omar Raza', email: 'omar@example.com', phone: '+92 345 7778901', joinDate: 'Nov 2023', tier: 'Silver', orders: 2, totalSpent: 95000000, vehicles: ['GLE 450'], status: 'Inactive' },
  { id: 6, name: 'Hina Shah', email: 'hina@example.com', phone: '+92 311 2223456', joinDate: 'Feb 2024', tier: 'Gold', orders: 2, totalSpent: 175000000, vehicles: ['EQS 580'], status: 'Active' },
  { id: 7, name: 'Zain Aslam', email: 'zain@example.com', phone: '+92 322 8889012', joinDate: 'Apr 2024', tier: 'Silver', orders: 1, totalSpent: 98000000, vehicles: ['AMG C63 S'], status: 'Suspended' },
];

const TIER_COLORS = { Platinum: '#C8A97E', Gold: '#f39c12', Silver: '#9a97a5' };
const STATUS_COLORS = { Active: '#2ecc71', Inactive: '#6b6880', Suspended: '#e74c3c' };

const SIDEBAR = [
  { label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
  { label: 'Manage Cars', icon: <Car size={18} /> },
  { label: 'Orders', icon: <ShoppingCart size={18} /> },
  { label: 'Customers', icon: <Users size={18} />, active: true },
  { label: 'Inventory', icon: <Warehouse size={18} /> },
];

export default function ManageCustomers() {
  const [customers, setCustomers] = useState(CUSTOMERS);
  const [search, setSearch] = useState('');
  const [tierFilter, setTierFilter] = useState('All');
  const [selectedCustomer, setSelectedCustomer] = useState(null);
  const [actionMenu, setActionMenu] = useState(null);

  const tiers = ['All', 'Platinum', 'Gold', 'Silver'];
  const filtered = customers.filter((c) => {
    const ms = c.name.toLowerCase().includes(search.toLowerCase()) || c.email.toLowerCase().includes(search.toLowerCase());
    const mt = tierFilter === 'All' || c.tier === tierFilter;
    return ms && mt;
  });

  const fmt = (n) => `PKR ${(n / 1000000).toFixed(0)}M`;
  const totalCustomers = customers.length;
  const activeCount = customers.filter((c) => c.status === 'Active').length;
  const topSpender = [...customers].sort((a, b) => b.totalSpent - a.totalSpent)[0];

  const toggleStatus = (id, newStatus) => {
    setCustomers((prev) => prev.map((c) => c.id === id ? { ...c, status: newStatus } : c));
    setActionMenu(null);
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', minHeight: '100vh', display: 'flex' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        input:focus { border-color:#C8A97E !important; outline:none; }
        input::placeholder { color:#3a3748; }
        a { text-decoration:none; color:inherit; }
      `}</style>

      {/* SIDEBAR */}
      <aside style={{ width: 240, background: '#0d0d14', borderRight: '1px solid rgba(200,169,126,0.08)', padding: '28px 0', position: 'fixed', top: 0, bottom: 0 }}>
        <div style={{ padding: '0 24px', marginBottom: 36 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1.5px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Star size={14} color="#C8A97E" /></div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: '#fff' }}>MB Admin</span>
          </div>
        </div>
        <nav>
          {SIDEBAR.map((link) => (
            <div key={link.label} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '11px 24px', cursor: 'pointer',
              background: link.active ? 'rgba(200,169,126,0.06)' : 'transparent',
              borderLeft: link.active ? '2px solid #C8A97E' : '2px solid transparent',
              color: link.active ? '#C8A97E' : '#5a5768', fontSize: 13,
            }}>{link.icon} {link.label}</div>
          ))}
        </nav>
      </aside>

      {/* MAIN */}
      <main style={{ marginLeft: 240, flex: 1, padding: '32px 40px' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 300, color: '#fff', marginBottom: 4 }}>Manage Customers</h1>
        <p style={{ fontSize: 13, color: '#5a5768', marginBottom: 28 }}>View and manage your customer base</p>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 28 }}>
          {[
            { label: 'Total Customers', value: totalCustomers, icon: <Users size={18} color="#C8A97E" /> },
            { label: 'Active', value: activeCount, icon: <CheckCircle2 size={18} color="#2ecc71" /> },
            { label: 'Total Revenue', value: fmt(customers.reduce((s, c) => s + c.totalSpent, 0)), icon: <Star size={18} color="#C8A97E" /> },
            { label: 'Top Spender', value: topSpender.name, icon: <Crown size={18} color="#f39c12" /> },
          ].map((s) => (
            <div key={s.label} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '18px 20px', display: 'flex', alignItems: 'center', gap: 14 }}>
              <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(200,169,126,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{s.icon}</div>
              <div>
                <p style={{ fontSize: 18, fontWeight: 600, color: '#fff' }}>{s.value}</p>
                <p style={{ fontSize: 10, color: '#5a5768' }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={15} color="#4e453b" style={{ position: 'absolute', left: 14, top: 12 }} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name or email..."
              style={{ width: '100%', padding: '11px 14px 11px 40px', background: '#111118', border: '1px solid rgba(200,169,126,0.12)', borderRadius: 4, color: '#e4e1eb', fontSize: 13, fontFamily: "'DM Sans', sans-serif" }} />
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {tiers.map((t) => (
              <button key={t} onClick={() => setTierFilter(t)} style={{
                padding: '7px 16px', fontSize: 11, fontWeight: 500,
                border: tierFilter === t ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.12)',
                background: tierFilter === t ? '#C8A97E' : 'transparent',
                color: tierFilter === t ? '#0a0a0f' : '#6b6880',
                borderRadius: 2, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              }}>{t}</button>
            ))}
          </div>
        </div>

        {/* TABLE */}
        <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['Customer', 'Contact', 'Tier', 'Orders', 'Spent', 'Status', 'Actions'].map((h) => (
                  <th key={h} style={{ textAlign: 'left', padding: '13px 18px', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', borderBottom: '1px solid rgba(200,169,126,0.06)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr key={c.id} style={{ borderBottom: '1px solid rgba(200,169,126,0.04)' }}>
                  <td style={{ padding: '14px 18px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <div style={{ width: 38, height: 38, borderRadius: '50%', background: `${TIER_COLORS[c.tier]}15`, border: `1px solid ${TIER_COLORS[c.tier]}30`, display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        <span style={{ fontSize: 14, fontWeight: 600, color: TIER_COLORS[c.tier] }}>{c.name[0]}</span>
                      </div>
                      <div>
                        <p style={{ fontSize: 14, fontWeight: 500, color: '#e4e1eb' }}>{c.name}</p>
                        <p style={{ fontSize: 11, color: '#4e453b' }}>Since {c.joinDate}</p>
                      </div>
                    </div>
                  </td>
                  <td style={{ padding: '14px 18px' }}>
                    <p style={{ fontSize: 12, color: '#6b6880', display: 'flex', alignItems: 'center', gap: 4 }}><Mail size={11} /> {c.email}</p>
                    <p style={{ fontSize: 12, color: '#6b6880', display: 'flex', alignItems: 'center', gap: 4, marginTop: 2 }}><Phone size={11} /> {c.phone}</p>
                  </td>
                  <td style={{ padding: '14px 18px' }}>
                    <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 10px', background: `${TIER_COLORS[c.tier]}15`, border: `1px solid ${TIER_COLORS[c.tier]}30`, borderRadius: 20, fontSize: 11, fontWeight: 500, color: TIER_COLORS[c.tier] }}>
                      <Crown size={11} /> {c.tier}
                    </span>
                  </td>
                  <td style={{ padding: '14px 18px', fontSize: 14, fontWeight: 500, color: '#e4e1eb' }}>{c.orders}</td>
                  <td style={{ padding: '14px 18px', fontSize: 13, fontWeight: 500, color: '#C8A97E' }}>{fmt(c.totalSpent)}</td>
                  <td style={{ padding: '14px 18px' }}>
                    <span style={{ padding: '3px 10px', background: `${STATUS_COLORS[c.status]}15`, border: `1px solid ${STATUS_COLORS[c.status]}30`, borderRadius: 20, fontSize: 11, color: STATUS_COLORS[c.status] }}>{c.status}</span>
                  </td>
                  <td style={{ padding: '14px 18px' }}>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button onClick={() => setSelectedCustomer(c)} style={{ width: 32, height: 32, borderRadius: 4, background: 'rgba(200,169,126,0.06)', border: '1px solid rgba(200,169,126,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <Eye size={14} color="#C8A97E" />
                      </button>
                      <div style={{ position: 'relative' }}>
                        <button onClick={() => setActionMenu(actionMenu === c.id ? null : c.id)} style={{ width: 32, height: 32, borderRadius: 4, background: 'rgba(200,169,126,0.06)', border: '1px solid rgba(200,169,126,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                          <MoreVertical size={14} color="#6b6880" />
                        </button>
                        {actionMenu === c.id && (
                          <div style={{ position: 'absolute', right: 0, top: 36, background: '#1a1a22', border: '1px solid rgba(200,169,126,0.12)', borderRadius: 6, padding: '6px 0', zIndex: 10, minWidth: 140, boxShadow: '0 8px 24px rgba(0,0,0,0.4)' }}>
                            {c.status !== 'Active' && <button onClick={() => toggleStatus(c.id, 'Active')} style={{ width: '100%', padding: '8px 14px', background: 'none', border: 'none', color: '#2ecc71', fontSize: 12, cursor: 'pointer', textAlign: 'left', fontFamily: "'DM Sans',sans-serif", display: 'flex', alignItems: 'center', gap: 6 }}><CheckCircle2 size={12} /> Activate</button>}
                            {c.status !== 'Suspended' && <button onClick={() => toggleStatus(c.id, 'Suspended')} style={{ width: '100%', padding: '8px 14px', background: 'none', border: 'none', color: '#e74c3c', fontSize: 12, cursor: 'pointer', textAlign: 'left', fontFamily: "'DM Sans',sans-serif", display: 'flex', alignItems: 'center', gap: 6 }}><Ban size={12} /> Suspend</button>}
                          </div>
                        )}
                      </div>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* CUSTOMER DETAIL MODAL */}
      {selectedCustomer && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setSelectedCustomer(null)}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.15)', borderRadius: 8, padding: '32px', width: 480 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 24 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14 }}>
                <div style={{ width: 52, height: 52, borderRadius: '50%', background: `${TIER_COLORS[selectedCustomer.tier]}15`, border: `2px solid ${TIER_COLORS[selectedCustomer.tier]}40`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <span style={{ fontSize: 20, fontWeight: 600, color: TIER_COLORS[selectedCustomer.tier] }}>{selectedCustomer.name[0]}</span>
                </div>
                <div>
                  <h3 style={{ fontSize: 18, fontWeight: 500, color: '#fff' }}>{selectedCustomer.name}</h3>
                  <span style={{ fontSize: 12, color: TIER_COLORS[selectedCustomer.tier], fontWeight: 500 }}>{selectedCustomer.tier} Member</span>
                </div>
              </div>
              <button onClick={() => setSelectedCustomer(null)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={18} color="#5a5768" /></button>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
              {[['Email', selectedCustomer.email], ['Phone', selectedCustomer.phone], ['Member Since', selectedCustomer.joinDate], ['Total Orders', selectedCustomer.orders], ['Total Spent', fmt(selectedCustomer.totalSpent)], ['Status', selectedCustomer.status]].map(([k, v]) => (
                <div key={k}>
                  <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 4 }}>{k}</p>
                  <p style={{ fontSize: 14, color: '#e4e1eb', fontWeight: 500 }}>{v}</p>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 10 }}>Owned Vehicles</p>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 6 }}>
                {selectedCustomer.vehicles.map((v) => (
                  <div key={v} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '8px 12px', background: 'rgba(200,169,126,0.04)', borderRadius: 4, border: '1px solid rgba(200,169,126,0.06)' }}>
                    <Car size={14} color="#C8A97E" />
                    <span style={{ fontSize: 13, color: '#e4e1eb' }}>{v}</span>
                  </div>
                ))}
              </div>
            </div>

            <button onClick={() => setSelectedCustomer(null)} style={{ width: '100%', padding: '12px', background: 'none', border: '1px solid rgba(200,169,126,0.2)', color: '#6b6880', fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
