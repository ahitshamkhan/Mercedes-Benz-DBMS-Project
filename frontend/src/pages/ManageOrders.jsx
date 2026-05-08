import { useState } from 'react';
import { Star, LayoutDashboard, Car, Warehouse, Users, FileBarChart, Search, Eye, ChevronDown, Package, Clock, CheckCircle2, Truck, XCircle, ShoppingCart } from 'lucide-react';

const ORDERS = [
  { id: 'ORD-4521', customer: 'Ahmed Malik', email: 'ahmed@example.com', car: 'S-Class 500', amount: 85000000, date: 'May 05, 2024', status: 'Processing', payment: 'Bank Transfer' },
  { id: 'ORD-4520', customer: 'Fatima Zaidi', email: 'fatima@example.com', car: 'AMG GT Coupé', amount: 120000000, date: 'May 03, 2024', status: 'Confirmed', payment: 'Credit Card' },
  { id: 'ORD-4519', customer: 'Ali Hassan', email: 'ali@example.com', car: 'G-Class G63', amount: 150000000, date: 'Apr 28, 2024', status: 'Shipped', payment: 'Bank Transfer' },
  { id: 'ORD-4518', customer: 'Sara Qureshi', email: 'sara@example.com', car: 'EQS 580', amount: 95000000, date: 'Apr 22, 2024', status: 'Delivered', payment: 'Financing' },
  { id: 'ORD-4517', customer: 'Omar Raza', email: 'omar@example.com', car: 'C-Class 300', amount: 45000000, date: 'Apr 18, 2024', status: 'Cancelled', payment: 'Credit Card' },
  { id: 'ORD-4516', customer: 'Hina Shah', email: 'hina@example.com', car: 'Maybach S680', amount: 220000000, date: 'Apr 15, 2024', status: 'Confirmed', payment: 'Bank Transfer' },
  { id: 'ORD-4515', customer: 'Zain Aslam', email: 'zain@example.com', car: 'AMG C63 S', amount: 98000000, date: 'Apr 10, 2024', status: 'Delivered', payment: 'Financing' },
];

const STATUS_CONFIG = {
  Processing: { color: '#f39c12', icon: <Clock size={13} /> },
  Confirmed: { color: '#3498db', icon: <CheckCircle2 size={13} /> },
  Shipped: { color: '#C8A97E', icon: <Truck size={13} /> },
  Delivered: { color: '#2ecc71', icon: <CheckCircle2 size={13} /> },
  Cancelled: { color: '#e74c3c', icon: <XCircle size={13} /> },
};

const SIDEBAR = [
  { label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
  { label: 'Manage Cars', icon: <Car size={18} /> },
  { label: 'Orders', icon: <ShoppingCart size={18} />, active: true },
  { label: 'Customers', icon: <Users size={18} /> },
  { label: 'Inventory', icon: <Warehouse size={18} /> },
];

export default function ManageOrders() {
  const [orders, setOrders] = useState(ORDERS);
  const [search, setSearch] = useState('');
  const [statusFilter, setStatusFilter] = useState('All');
  const [selectedOrder, setSelectedOrder] = useState(null);

  const statuses = ['All', 'Processing', 'Confirmed', 'Shipped', 'Delivered', 'Cancelled'];
  const filtered = orders.filter((o) => {
    const ms = o.id.toLowerCase().includes(search.toLowerCase()) || o.customer.toLowerCase().includes(search.toLowerCase()) || o.car.toLowerCase().includes(search.toLowerCase());
    const mf = statusFilter === 'All' || o.status === statusFilter;
    return ms && mf;
  });

  const fmt = (n) => `PKR ${(n / 1000000).toFixed(0)}M`;
  const totalRevenue = orders.filter((o) => o.status !== 'Cancelled').reduce((s, o) => s + o.amount, 0);

  const updateStatus = (id, newStatus) => {
    setOrders((prev) => prev.map((o) => o.id === id ? { ...o, status: newStatus } : o));
    setSelectedOrder(null);
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 300, color: '#fff', marginBottom: 4 }}>Manage Orders</h1>
            <p style={{ fontSize: 13, color: '#5a5768' }}>Track and manage all customer orders</p>
          </div>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 14, marginBottom: 28 }}>
          {[
            { label: 'Total Orders', value: orders.length, color: '#C8A97E' },
            { label: 'Processing', value: orders.filter((o) => o.status === 'Processing').length, color: '#f39c12' },
            { label: 'Delivered', value: orders.filter((o) => o.status === 'Delivered').length, color: '#2ecc71' },
            { label: 'Revenue', value: fmt(totalRevenue), color: '#C8A97E' },
          ].map((s) => (
            <div key={s.label} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '18px 20px' }}>
              <p style={{ fontSize: 22, fontWeight: 600, color: '#fff' }}>{s.value}</p>
              <p style={{ fontSize: 11, color: '#5a5768', marginTop: 2 }}>{s.label}</p>
            </div>
          ))}
        </div>

        {/* Filters */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={15} color="#4e453b" style={{ position: 'absolute', left: 14, top: 12 }} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by order ID, customer, or vehicle..."
              style={{ width: '100%', padding: '11px 14px 11px 40px', background: '#111118', border: '1px solid rgba(200,169,126,0.12)', borderRadius: 4, color: '#e4e1eb', fontSize: 13, fontFamily: "'DM Sans', sans-serif" }} />
          </div>
          <div style={{ display: 'flex', gap: 4 }}>
            {statuses.map((s) => (
              <button key={s} onClick={() => setStatusFilter(s)} style={{
                padding: '7px 14px', fontSize: 11, fontWeight: 500,
                border: statusFilter === s ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.12)',
                background: statusFilter === s ? '#C8A97E' : 'transparent',
                color: statusFilter === s ? '#0a0a0f' : '#6b6880',
                borderRadius: 2, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              }}>{s}</button>
            ))}
          </div>
        </div>

        {/* TABLE */}
        <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['Order ID', 'Customer', 'Vehicle', 'Amount', 'Date', 'Payment', 'Status', 'Actions'].map((h) => (
                  <th key={h} style={{ textAlign: 'left', padding: '13px 18px', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', borderBottom: '1px solid rgba(200,169,126,0.06)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((o) => {
                const cfg = STATUS_CONFIG[o.status];
                return (
                  <tr key={o.id} style={{ borderBottom: '1px solid rgba(200,169,126,0.04)' }}>
                    <td style={{ padding: '13px 18px', fontSize: 13, fontWeight: 500, color: '#C8A97E' }}>{o.id}</td>
                    <td style={{ padding: '13px 18px' }}>
                      <p style={{ fontSize: 13, fontWeight: 500, color: '#e4e1eb' }}>{o.customer}</p>
                      <p style={{ fontSize: 11, color: '#4e453b' }}>{o.email}</p>
                    </td>
                    <td style={{ padding: '13px 18px', fontSize: 13, color: '#9a97a5' }}>{o.car}</td>
                    <td style={{ padding: '13px 18px', fontSize: 13, fontWeight: 500, color: '#e4e1eb' }}>{fmt(o.amount)}</td>
                    <td style={{ padding: '13px 18px', fontSize: 12, color: '#6b6880' }}>{o.date}</td>
                    <td style={{ padding: '13px 18px', fontSize: 12, color: '#6b6880' }}>{o.payment}</td>
                    <td style={{ padding: '13px 18px' }}>
                      <span style={{ display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 10px', background: `${cfg.color}15`, border: `1px solid ${cfg.color}30`, borderRadius: 20, fontSize: 11, fontWeight: 500, color: cfg.color }}>
                        {cfg.icon} {o.status}
                      </span>
                    </td>
                    <td style={{ padding: '13px 18px' }}>
                      <button onClick={() => setSelectedOrder(o)} style={{ width: 32, height: 32, borderRadius: 4, background: 'rgba(200,169,126,0.06)', border: '1px solid rgba(200,169,126,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                        <Eye size={14} color="#C8A97E" />
                      </button>
                    </td>
                  </tr>
                );
              })}
            </tbody>
          </table>
        </div>

        <p style={{ fontSize: 12, color: '#3a3748', marginTop: 16 }}>Showing {filtered.length} of {orders.length} orders</p>
      </main>

      {/* ORDER DETAIL MODAL */}
      {selectedOrder && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setSelectedOrder(null)}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.15)', borderRadius: 8, padding: '32px', width: 500 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 400, color: '#fff', marginBottom: 24 }}>Order Details</h3>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 24 }}>
              {[
                ['Order ID', selectedOrder.id],
                ['Customer', selectedOrder.customer],
                ['Vehicle', selectedOrder.car],
                ['Amount', fmt(selectedOrder.amount)],
                ['Date', selectedOrder.date],
                ['Payment', selectedOrder.payment],
              ].map(([k, v]) => (
                <div key={k}>
                  <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 4 }}>{k}</p>
                  <p style={{ fontSize: 14, color: '#e4e1eb', fontWeight: 500 }}>{v}</p>
                </div>
              ))}
            </div>

            <div style={{ marginBottom: 24 }}>
              <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 8 }}>Update Status</p>
              <div style={{ display: 'flex', gap: 6, flexWrap: 'wrap' }}>
                {Object.keys(STATUS_CONFIG).map((s) => (
                  <button key={s} onClick={() => updateStatus(selectedOrder.id, s)} style={{
                    padding: '7px 14px', fontSize: 11, fontWeight: 500,
                    border: selectedOrder.status === s ? `1px solid ${STATUS_CONFIG[s].color}` : '1px solid rgba(200,169,126,0.12)',
                    background: selectedOrder.status === s ? `${STATUS_CONFIG[s].color}20` : 'transparent',
                    color: selectedOrder.status === s ? STATUS_CONFIG[s].color : '#6b6880',
                    borderRadius: 4, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                  }}>{s}</button>
                ))}
              </div>
            </div>

            <button onClick={() => setSelectedOrder(null)} style={{ width: '100%', padding: '12px', background: 'none', border: '1px solid rgba(200,169,126,0.2)', color: '#6b6880', fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Close</button>
          </div>
        </div>
      )}
    </div>
  );
}
