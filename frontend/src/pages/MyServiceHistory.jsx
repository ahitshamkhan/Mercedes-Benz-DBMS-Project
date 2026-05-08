import { useState } from 'react';
import { Star, Wrench, Calendar, Clock, MapPin, ChevronDown, ChevronUp, CheckCircle2, DollarSign, FileText, Download, Filter } from 'lucide-react';

const HISTORY = [
  {
    id: 'SVC-2024-003',
    date: 'Apr 18, 2024',
    vehicle: 'S-Class 500 • LEA-7721',
    dealer: 'Lahore — Central Branch',
    services: ['Oil & Filter Change', 'Full Inspection', 'Brake Pad Replacement'],
    total: 'PKR 78,500',
    status: 'Completed',
    advisor: 'Imran Malik',
    mileage: '24,500 km',
    nextService: 'Jul 18, 2024',
  },
  {
    id: 'SVC-2024-002',
    date: 'Feb 05, 2024',
    vehicle: 'AMG GT Coupé • ISB-4455',
    dealer: 'Islamabad — Blue Area',
    services: ['Tire Rotation & Balance', 'Engine Diagnostics'],
    total: 'PKR 45,000',
    status: 'Completed',
    advisor: 'Sara Qureshi',
    mileage: '12,300 km',
    nextService: 'May 05, 2024',
  },
  {
    id: 'SVC-2023-008',
    date: 'Nov 12, 2023',
    vehicle: 'S-Class 500 • LEA-7721',
    dealer: 'Lahore — Central Branch',
    services: ['Premium Care Package'],
    total: 'PKR 95,000',
    status: 'Completed',
    advisor: 'Imran Malik',
    mileage: '18,200 km',
    nextService: 'Feb 12, 2024',
  },
  {
    id: 'SVC-2023-005',
    date: 'Aug 30, 2023',
    vehicle: 'G-Class G63 • KHI-9988',
    dealer: 'Karachi — DHA Phase VI',
    services: ['Oil & Filter Change', 'AC System Service'],
    total: 'PKR 52,000',
    status: 'Completed',
    advisor: 'Ali Hassan',
    mileage: '31,700 km',
    nextService: 'Nov 30, 2023',
  },
];

export default function MyServiceHistory() {
  const [expandedId, setExpandedId] = useState(null);
  const [vehicleFilter, setVehicleFilter] = useState('All');

  const vehicles = ['All', ...new Set(HISTORY.map((h) => h.vehicle.split(' • ')[0]))];
  const filtered = vehicleFilter === 'All' ? HISTORY : HISTORY.filter((h) => h.vehicle.startsWith(vehicleFilter));

  const totalSpent = HISTORY.reduce((sum, h) => sum + parseInt(h.total.replace(/[^\d]/g, '')), 0);

  const toggle = (id) => setExpandedId((prev) => (prev === id ? null : id));

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        .gold-btn { border:1px solid #C8A97E; background:transparent; color:#C8A97E; padding:14px 32px; font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; letter-spacing:0.12em; text-transform:uppercase; cursor:pointer; transition:all 0.4s; }
        .gold-btn:hover { background:#C8A97E; color:#0a0a0f; }
        .glass { background:rgba(10,10,15,0.85); backdrop-filter:blur(12px); }
        .gold-line { width:60px; height:1px; background:#C8A97E; }
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
            {['Cars', 'Service', 'My Orders'].map((l) => (
              <a key={l} href="#" style={{ fontSize: 13, fontWeight: l === 'Service' ? 500 : 300, color: l === 'Service' ? '#C8A97E' : '#b0adb8', letterSpacing: '0.05em' }}>{l}</a>
            ))}
          </div>
          <button className="gold-btn" style={{ padding: '8px 22px', fontSize: 11 }}>My Account</button>
        </div>
      </nav>

      {/* CONTENT */}
      <div style={{ paddingTop: 100, maxWidth: 1440, margin: '0 auto', padding: '100px 80px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div className="gold-line" />
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>My Account</span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 300, color: '#fff', marginBottom: 8 }}>Service History</h1>
        <p style={{ fontSize: 15, fontWeight: 300, color: '#6b6880', marginBottom: 40 }}>Complete maintenance records for your Mercedes-Benz fleet.</p>

        {/* Summary Cards */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 36 }}>
          {[
            { label: 'Total Services', value: HISTORY.length.toString(), icon: <Wrench size={18} color="#C8A97E" /> },
            { label: 'Total Spent', value: `PKR ${totalSpent.toLocaleString()}`, icon: <DollarSign size={18} color="#C8A97E" /> },
            { label: 'Vehicles Serviced', value: new Set(HISTORY.map((h) => h.vehicle)).size.toString(), icon: <FileText size={18} color="#C8A97E" /> },
          ].map((s) => (
            <div key={s.label} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '22px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(200,169,126,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</div>
              <div>
                <p style={{ fontSize: 22, fontWeight: 600, color: '#fff' }}>{s.value}</p>
                <p style={{ fontSize: 11, color: '#5a5768', letterSpacing: '0.06em' }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Vehicle Filter */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <div style={{ display: 'flex', gap: 8 }}>
            {vehicles.map((v) => (
              <button key={v} onClick={() => setVehicleFilter(v)} style={{
                padding: '8px 18px', fontSize: 12, fontWeight: 500,
                border: vehicleFilter === v ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.15)',
                background: vehicleFilter === v ? '#C8A97E' : 'transparent',
                color: vehicleFilter === v ? '#0a0a0f' : '#7a7788',
                borderRadius: 2, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.3s',
              }}>{v}</button>
            ))}
          </div>
          <span style={{ fontSize: 13, color: '#5a5768' }}>{filtered.length} records</span>
        </div>

        {/* Service Records */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
          {filtered.map((record) => {
            const isOpen = expandedId === record.id;
            return (
              <div key={record.id} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, overflow: 'hidden', transition: 'all 0.3s' }}>
                {/* Header Row */}
                <div onClick={() => toggle(record.id)} style={{ padding: '20px 28px', cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(46,204,113,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <CheckCircle2 size={18} color="#2ecc71" />
                    </div>
                    <div>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 4 }}>
                        <h3 style={{ fontSize: 16, fontWeight: 500, color: '#fff' }}>{record.vehicle}</h3>
                        <span style={{ fontSize: 11, color: '#4e453b' }}>{record.id}</span>
                      </div>
                      <div style={{ display: 'flex', gap: 20 }}>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#6b6880' }}><Calendar size={12} /> {record.date}</span>
                        <span style={{ display: 'flex', alignItems: 'center', gap: 5, fontSize: 12, color: '#6b6880' }}><MapPin size={12} /> {record.dealer}</span>
                      </div>
                    </div>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: '#C8A97E' }}>{record.total}</span>
                    {isOpen ? <ChevronUp size={18} color="#6b6880" /> : <ChevronDown size={18} color="#6b6880" />}
                  </div>
                </div>

                {/* Expanded Details */}
                {isOpen && (
                  <div style={{ padding: '0 28px 24px', borderTop: '1px solid rgba(200,169,126,0.06)' }}>
                    <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 24, paddingTop: 20 }}>
                      <div>
                        <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 10 }}>Services Performed</p>
                        {record.services.map((s) => (
                          <div key={s} style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 8 }}>
                            <div style={{ width: 6, height: 6, borderRadius: '50%', background: '#C8A97E' }} />
                            <span style={{ fontSize: 13, color: '#9a97a5' }}>{s}</span>
                          </div>
                        ))}
                      </div>
                      <div>
                        <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 10 }}>Details</p>
                        {[['Service Advisor', record.advisor], ['Mileage', record.mileage], ['Next Service Due', record.nextService]].map(([k, v]) => (
                          <div key={k} style={{ marginBottom: 10 }}>
                            <p style={{ fontSize: 11, color: '#4e453b' }}>{k}</p>
                            <p style={{ fontSize: 13, color: '#9a97a5', fontWeight: 500 }}>{v}</p>
                          </div>
                        ))}
                      </div>
                      <div style={{ display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'flex-end' }}>
                        <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: '1px solid rgba(200,169,126,0.2)', padding: '10px 18px', borderRadius: 4, color: '#C8A97E', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                          <Download size={14} /> Invoice
                        </button>
                        <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: '1px solid rgba(200,169,126,0.15)', padding: '10px 18px', borderRadius: 4, color: '#7a7788', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                          <Wrench size={14} /> Book Again
                        </button>
                      </div>
                    </div>
                  </div>
                )}
              </div>
            );
          })}
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
            <p style={{ fontSize: 13, fontWeight: 300, color: '#5a5768', lineHeight: 1.7, maxWidth: 280 }}>Expert care for exceptional vehicles.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Explore</h4>
            {['Cars', 'Test Drive', 'Service'].map((l) => (<a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10 }}>{l}</a>))}
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Account</h4>
            {['My Orders', 'Profile', 'Service History'].map((l) => (<a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10 }}>{l}</a>))}
          </div>
        </div>
        <div style={{ maxWidth: 1440, margin: '20px auto 0', padding: '16px 80px 0', borderTop: '1px solid rgba(200,169,126,0.08)' }}>
          <p style={{ fontSize: 12, color: '#3a3748', textAlign: 'center' }}>© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
