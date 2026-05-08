import { useState } from 'react';
import { Star, Package, Eye, ChevronRight, Clock, CheckCircle2, Truck, CircleDot, Search, Filter } from 'lucide-react';

const ORDERS = [
  {
    id: 'ORD-2024-001',
    car: 'S-Class Sedan',
    image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&q=80',
    date: 'Oct 24, 2023',
    price: 'PKR 48,500,000',
    status: 'Delivered',
    statusColor: '#2ecc71',
  },
  {
    id: 'ORD-2024-002',
    car: 'AMG GT Coupé',
    image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&q=80',
    date: 'Jan 12, 2024',
    price: 'PKR 92,000,000',
    status: 'In Transit',
    statusColor: '#C8A97E',
  },
  {
    id: 'ORD-2024-003',
    car: 'EQS Electric Sedan',
    image: 'https://images.unsplash.com/photo-1625231334401-67c9eef63a78?w=400&q=80',
    date: 'Mar 05, 2024',
    price: 'PKR 54,200,000',
    status: 'Processing',
    statusColor: '#f39c12',
  },
];

const STATUS_ICON = {
  Delivered: <CheckCircle2 size={14} />,
  'In Transit': <Truck size={14} />,
  Processing: <Clock size={14} />,
};

export default function MyOrders() {
  const [activeFilter, setActiveFilter] = useState('All');
  const [searchQuery, setSearchQuery] = useState('');

  const filters = ['All', 'Processing', 'In Transit', 'Delivered'];

  const filtered = ORDERS.filter((o) => {
    const matchFilter = activeFilter === 'All' || o.status === activeFilter;
    const matchSearch = o.car.toLowerCase().includes(searchQuery.toLowerCase()) || o.id.toLowerCase().includes(searchQuery.toLowerCase());
    return matchFilter && matchSearch;
  });

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        .gold-btn { border:1px solid #C8A97E; background:transparent; color:#C8A97E; padding:14px 32px; font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; letter-spacing:0.12em; text-transform:uppercase; cursor:pointer; transition:all 0.4s; }
        .gold-btn:hover { background:#C8A97E; color:#0a0a0f; }
        .glass { background:rgba(10,10,15,0.85); backdrop-filter:blur(12px); }
        .gold-line { width:60px; height:1px; background:#C8A97E; }
        .card-hover { transition:transform 0.4s, box-shadow 0.4s; }
        .card-hover:hover { transform:translateY(-4px); box-shadow:0 0 25px rgba(200,169,126,0.06); }
        input:focus { border-color:#C8A97E !important; outline:none; }
        input::placeholder { color:#3a3748; }
        a { text-decoration:none; color:inherit; }
      `}</style>

      {/* NAVBAR */}
      <nav className="glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, borderBottom: '1px solid rgba(200,169,126,0.12)', padding: '0 40px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Star size={16} color="#C8A97E" />
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff' }}>Mercedes-Benz</span>
          </div>
          <div style={{ display: 'flex', gap: 36 }}>
            {['Cars', 'My Orders', 'Wishlist', 'Service'].map((l) => (
              <a key={l} href="#" style={{ fontSize: 13, fontWeight: l === 'My Orders' ? 500 : 300, color: l === 'My Orders' ? '#C8A97E' : '#b0adb8', letterSpacing: '0.05em' }}>{l}</a>
            ))}
          </div>
          <button className="gold-btn" style={{ padding: '8px 22px', fontSize: 11 }}>My Account</button>
        </div>
      </nav>

      {/* CONTENT */}
      <div style={{ paddingTop: 100, maxWidth: 1440, margin: '0 auto', padding: '100px 80px 60px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div className="gold-line" />
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>My Account</span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 300, color: '#fff', marginBottom: 8 }}>Your Mercedes Journey</h1>
        <p style={{ fontSize: 15, fontWeight: 300, color: '#6b6880', marginBottom: 40 }}>Tracing the path of precision engineering and luxury as your bespoke vehicle makes its way to you.</p>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20, marginBottom: 48 }}>
          {[
            { label: 'Total Orders', value: '3', icon: <Package size={20} color="#C8A97E" /> },
            { label: 'In Progress', value: '2', icon: <Clock size={20} color="#C8A97E" /> },
            { label: 'Delivered', value: '1', icon: <CheckCircle2 size={20} color="#C8A97E" /> },
          ].map((s) => (
            <div key={s.label} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, padding: '24px 28px', display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(200,169,126,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</div>
              <div>
                <p style={{ fontSize: 24, fontWeight: 600, color: '#fff' }}>{s.value}</p>
                <p style={{ fontSize: 12, color: '#6b6880', letterSpacing: '0.05em' }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Filters & Search */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {filters.map((f) => (
              <button key={f} onClick={() => setActiveFilter(f)} style={{
                padding: '8px 20px', fontSize: 12, fontWeight: 500, letterSpacing: '0.05em',
                border: activeFilter === f ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.15)',
                background: activeFilter === f ? '#C8A97E' : 'transparent',
                color: activeFilter === f ? '#0a0a0f' : '#7a7788',
                borderRadius: 2, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.3s'
              }}>{f}</button>
            ))}
          </div>
          <div style={{ position: 'relative' }}>
            <Search size={15} color="#4e453b" style={{ position: 'absolute', left: 14, top: 11 }} />
            <input value={searchQuery} onChange={(e) => setSearchQuery(e.target.value)}
              placeholder="Search orders..." style={{ padding: '10px 16px 10px 40px', background: '#111118', border: '1px solid rgba(200,169,126,0.12)', borderRadius: 6, color: '#e4e1eb', fontSize: 13, fontFamily: "'DM Sans', sans-serif", width: 240 }} />
          </div>
        </div>

        {/* Order Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {filtered.map((order) => (
            <div key={order.id} className="card-hover" style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '180px 1fr auto', alignItems: 'center' }}>
                <img src={order.image} alt={order.car} style={{ width: '100%', height: 140, objectFit: 'cover' }} />
                <div style={{ padding: '20px 28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 8 }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff' }}>{order.car}</h3>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 5, padding: '4px 12px',
                      background: `${order.statusColor}15`, border: `1px solid ${order.statusColor}30`,
                      borderRadius: 20, fontSize: 11, fontWeight: 500, color: order.statusColor
                    }}>
                      {STATUS_ICON[order.status]} {order.status}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 32 }}>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b' }}>Order ID</p>
                      <p style={{ fontSize: 13, color: '#9a97a5' }}>{order.id}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b' }}>Date</p>
                      <p style={{ fontSize: 13, color: '#9a97a5' }}>{order.date}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b' }}>Price</p>
                      <p style={{ fontSize: 13, color: '#C8A97E', fontWeight: 500 }}>{order.price}</p>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '0 28px' }}>
                  <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: '1px solid rgba(200,169,126,0.2)', padding: '10px 20px', borderRadius: 4, color: '#C8A97E', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.3s' }}>
                    <Eye size={14} /> Track
                  </button>
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <Package size={40} color="#2a2931" style={{ marginBottom: 16 }} />
              <p style={{ fontSize: 16, color: '#5a5768' }}>No orders found matching your criteria.</p>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(200,169,126,0.1)', marginTop: 80, padding: '40px 0 20px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Star size={14} color="#C8A97E" />
              </div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: '#fff' }}>Mercedes-Benz</span>
            </div>
            <p style={{ fontSize: 13, fontWeight: 300, color: '#5a5768', lineHeight: 1.7, maxWidth: 280 }}>Defining excellence on Pakistani roads for decades.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Explore</h4>
            {['Cars', 'Test Drive', 'Service'].map((l) => (
              <a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10 }}>{l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Account</h4>
            {['My Orders', 'Wishlist', 'Admin'].map((l) => (
              <a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10 }}>{l}</a>
            ))}
          </div>
        </div>
        <div style={{ maxWidth: 1440, margin: '20px auto 0', padding: '16px 80px 0', borderTop: '1px solid rgba(200,169,126,0.08)' }}>
          <p style={{ fontSize: 12, color: '#3a3748', textAlign: 'center' }}>© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
