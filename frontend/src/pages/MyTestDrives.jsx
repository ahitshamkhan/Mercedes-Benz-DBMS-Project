import { useState } from 'react';
import { Star, Calendar, Clock, MapPin, Car, CheckCircle2, XCircle, AlertCircle, ChevronRight, Plus, RotateCcw } from 'lucide-react';

const DRIVES = [
  { id: 'TD-001', car: 'S-Class 500', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&q=80', date: 'May 15, 2024', time: '10:30 AM', dealer: 'Lahore — Central Branch', status: 'Upcoming', statusColor: '#C8A97E' },
  { id: 'TD-002', car: 'AMG GT Coupé', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&q=80', date: 'Apr 28, 2024', time: '02:00 PM', dealer: 'Karachi — DHA Phase VI', status: 'Completed', statusColor: '#2ecc71' },
  { id: 'TD-003', car: 'G-Class G63', image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=400&q=80', date: 'Apr 10, 2024', time: '11:00 AM', dealer: 'Islamabad — Blue Area', status: 'Completed', statusColor: '#2ecc71' },
  { id: 'TD-004', car: 'EQS 580', image: 'https://images.unsplash.com/photo-1625231334401-67c9eef63a78?w=400&q=80', date: 'Mar 22, 2024', time: '03:30 PM', dealer: 'Lahore — Central Branch', status: 'Cancelled', statusColor: '#e74c3c' },
];

const STATUS_ICON = {
  Upcoming: <AlertCircle size={14} />,
  Completed: <CheckCircle2 size={14} />,
  Cancelled: <XCircle size={14} />,
};

export default function MyTestDrives() {
  const [activeTab, setActiveTab] = useState('All');
  const tabs = ['All', 'Upcoming', 'Completed', 'Cancelled'];

  const filtered = activeTab === 'All' ? DRIVES : DRIVES.filter((d) => d.status === activeTab);

  const counts = {
    Upcoming: DRIVES.filter((d) => d.status === 'Upcoming').length,
    Completed: DRIVES.filter((d) => d.status === 'Completed').length,
    Cancelled: DRIVES.filter((d) => d.status === 'Cancelled').length,
  };

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
        .card-hover:hover { transform:translateY(-4px); box-shadow:0 0 20px rgba(200,169,126,0.06); }
        a { text-decoration:none; color:inherit; }
      `}</style>

      {/* NAVBAR */}
      <nav className="glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, borderBottom: '1px solid rgba(200,169,126,0.12)', padding: '0 40px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Star size={16} color="#C8A97E" /></div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff' }}>Mercedes-Benz</span>
          </div>
          <div style={{ display: 'flex', gap: 36 }}>
            {['Cars', 'Test Drive', 'My Orders', 'Service'].map((l) => (
              <a key={l} href="#" style={{ fontSize: 13, fontWeight: l === 'Test Drive' ? 500 : 300, color: l === 'Test Drive' ? '#C8A97E' : '#b0adb8', letterSpacing: '0.05em' }}>{l}</a>
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
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 300, color: '#fff', marginBottom: 8 }}>My Test Drives</h1>
            <p style={{ fontSize: 15, fontWeight: 300, color: '#6b6880' }}>Track and manage all your test drive appointments.</p>
          </div>
          <button className="gold-btn" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 24px' }}>
            <Plus size={16} /> Book New
          </button>
        </div>

        {/* Stats Row */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 36 }}>
          {[
            { label: 'Upcoming', val: counts.Upcoming, icon: <AlertCircle size={18} color="#C8A97E" />, color: '#C8A97E' },
            { label: 'Completed', val: counts.Completed, icon: <CheckCircle2 size={18} color="#2ecc71" />, color: '#2ecc71' },
            { label: 'Cancelled', val: counts.Cancelled, icon: <XCircle size={18} color="#e74c3c" />, color: '#e74c3c' },
          ].map((s) => (
            <div key={s.label} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '20px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: `${s.color}12`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</div>
              <div>
                <p style={{ fontSize: 24, fontWeight: 600, color: '#fff' }}>{s.val}</p>
                <p style={{ fontSize: 11, color: '#5a5768', letterSpacing: '0.06em' }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Tabs */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 28 }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setActiveTab(t)} style={{
              padding: '8px 20px', fontSize: 12, fontWeight: 500,
              border: activeTab === t ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.15)',
              background: activeTab === t ? '#C8A97E' : 'transparent',
              color: activeTab === t ? '#0a0a0f' : '#7a7788',
              borderRadius: 2, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.3s',
            }}>{t}</button>
          ))}
        </div>

        {/* Drive Cards */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
          {filtered.map((drive) => (
            <div key={drive.id} className="card-hover" style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ display: 'grid', gridTemplateColumns: '160px 1fr auto', alignItems: 'center' }}>
                <img src={drive.image} alt={drive.car} style={{ width: '100%', height: 130, objectFit: 'cover' }} />
                <div style={{ padding: '18px 28px' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 10 }}>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 400, color: '#fff' }}>{drive.car}</h3>
                    <span style={{
                      display: 'inline-flex', alignItems: 'center', gap: 4, padding: '3px 10px',
                      background: `${drive.statusColor}15`, border: `1px solid ${drive.statusColor}30`,
                      borderRadius: 20, fontSize: 11, fontWeight: 500, color: drive.statusColor,
                    }}>
                      {STATUS_ICON[drive.status]} {drive.status}
                    </span>
                  </div>
                  <div style={{ display: 'flex', gap: 24 }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Calendar size={13} color="#4e453b" />
                      <span style={{ fontSize: 13, color: '#9a97a5' }}>{drive.date}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <Clock size={13} color="#4e453b" />
                      <span style={{ fontSize: 13, color: '#9a97a5' }}>{drive.time}</span>
                    </div>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                      <MapPin size={13} color="#4e453b" />
                      <span style={{ fontSize: 13, color: '#9a97a5' }}>{drive.dealer}</span>
                    </div>
                  </div>
                </div>
                <div style={{ padding: '0 28px' }}>
                  {drive.status === 'Upcoming' && (
                    <button style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'none', border: '1px solid rgba(200,169,126,0.2)', padding: '10px 18px', borderRadius: 4, color: '#C8A97E', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                      Reschedule
                    </button>
                  )}
                  {drive.status === 'Completed' && (
                    <button style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'none', border: '1px solid rgba(200,169,126,0.2)', padding: '10px 18px', borderRadius: 4, color: '#C8A97E', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                      <Car size={14} /> Order
                    </button>
                  )}
                  {drive.status === 'Cancelled' && (
                    <button style={{ display: 'flex', alignItems: 'center', gap: 5, background: 'none', border: '1px solid rgba(200,169,126,0.2)', padding: '10px 18px', borderRadius: 4, color: '#7a7788', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                      <RotateCcw size={14} /> Rebook
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}

          {filtered.length === 0 && (
            <div style={{ textAlign: 'center', padding: '60px 0' }}>
              <Car size={40} color="#2a2931" style={{ marginBottom: 16 }} />
              <p style={{ fontSize: 16, color: '#5a5768' }}>No test drives found for this filter.</p>
            </div>
          )}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(200,169,126,0.1)', marginTop: 80, padding: '40px 0 20px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Star size={14} color="#C8A97E" /></div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: '#fff' }}>Mercedes-Benz</span>
            </div>
            <p style={{ fontSize: 13, fontWeight: 300, color: '#5a5768', lineHeight: 1.7, maxWidth: 280 }}>Your trusted luxury automotive partner.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Explore</h4>
            {['Cars', 'Test Drive', 'Service'].map((l) => (<a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10 }}>{l}</a>))}
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Account</h4>
            {['My Orders', 'Wishlist', 'Profile'].map((l) => (<a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10 }}>{l}</a>))}
          </div>
        </div>
        <div style={{ maxWidth: 1440, margin: '20px auto 0', padding: '16px 80px 0', borderTop: '1px solid rgba(200,169,126,0.08)' }}>
          <p style={{ fontSize: 12, color: '#3a3748', textAlign: 'center' }}>© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
