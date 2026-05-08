import { useState } from 'react';
import { Star, MapPin, Search, Navigation, Phone, Clock, ChevronRight, Locate, Filter, X } from 'lucide-react';

const DEALERS = [
  { id: 1, name: 'MB Lahore Central', city: 'Lahore', distance: '2.3 km', address: 'Main Boulevard, Gulberg III', phone: '+92 42 3571 2345', hours: '9AM - 8PM', type: 'Flagship', services: ['Sales', 'Service', 'AMG'], rating: 4.9 },
  { id: 2, name: 'MB Lahore Johar Town', city: 'Lahore', distance: '5.8 km', address: 'Main Road, Johar Town', phone: '+92 42 3521 6789', hours: '10AM - 7PM', type: 'Authorized', services: ['Sales', 'Service'], rating: 4.6 },
  { id: 3, name: 'MB Karachi DHA', city: 'Karachi', distance: '312 km', address: 'Khayaban-e-Ittehad, DHA VI', phone: '+92 21 3584 6789', hours: '9AM - 9PM', type: 'Flagship', services: ['Sales', 'Service', 'EQ', 'AMG'], rating: 4.8 },
  { id: 4, name: 'MB Islamabad Blue Area', city: 'Islamabad', distance: '378 km', address: 'Jinnah Avenue, Blue Area', phone: '+92 51 2876 5432', hours: '9AM - 7PM', type: 'Authorized', services: ['Sales', 'Service'], rating: 4.7 },
  { id: 5, name: 'MB Faisalabad', city: 'Faisalabad', distance: '186 km', address: 'Jaranwala Road', phone: '+92 41 2634 7890', hours: '10AM - 7PM', type: 'Service Partner', services: ['Service'], rating: 4.5 },
];

const SERVICE_FILTERS = ['All', 'Sales', 'Service', 'AMG', 'EQ'];

export default function FindDealer() {
  const [location, setLocation] = useState('Lahore, Pakistan');
  const [serviceFilter, setServiceFilter] = useState('All');
  const [selectedId, setSelectedId] = useState(1);
  const [detecting, setDetecting] = useState(false);

  const filtered = DEALERS.filter((d) => serviceFilter === 'All' || d.services.includes(serviceFilter));
  const selected = DEALERS.find((d) => d.id === selectedId);

  const detectLocation = () => {
    setDetecting(true);
    setTimeout(() => {
      setLocation('Lahore, Pakistan (detected)');
      setDetecting(false);
    }, 1500);
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
        input:focus { border-color:#C8A97E !important; outline:none; }
        input::placeholder { color:#3a3748; }
        @keyframes spin { to { transform:rotate(360deg); } }
        a { text-decoration:none; color:inherit; }
      `}</style>

      {/* NAVBAR */}
      <nav className="glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, borderBottom: '1px solid rgba(200,169,126,0.12)', padding: '0 40px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Star size={16} color="#C8A97E" /></div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff' }}>Mercedes-Benz</span>
          </div>
          <button className="gold-btn" style={{ padding: '8px 22px', fontSize: 11 }}>My Account</button>
        </div>
      </nav>

      <div style={{ paddingTop: 100, maxWidth: 1440, margin: '0 auto', padding: '100px 80px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div className="gold-line" />
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Locate</span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 300, color: '#fff', marginBottom: 8 }}>Find a Dealer</h1>
        <p style={{ fontSize: 15, fontWeight: 300, color: '#6b6880', marginBottom: 36 }}>Locate your nearest Mercedes-Benz dealership or service center.</p>

        {/* Search Bar */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
            <input value={location} onChange={(e) => setLocation(e.target.value)} placeholder="Enter city or postal code..."
              style={{ width: '100%', padding: '14px 16px 14px 44px', background: '#111118', border: '1px solid rgba(200,169,126,0.12)', borderRadius: 6, color: '#e4e1eb', fontSize: 14, fontFamily: "'DM Sans', sans-serif" }} />
          </div>
          <button onClick={detectLocation} style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 24px', background: '#111118', border: '1px solid rgba(200,169,126,0.15)', borderRadius: 6, color: '#C8A97E', fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", minWidth: 180, justifyContent: 'center' }}>
            {detecting ? (
              <><Locate size={16} style={{ animation: 'spin 1s linear infinite' }} /> Detecting...</>
            ) : (
              <><Locate size={16} /> Use My Location</>
            )}
          </button>
        </div>

        {/* Service Filters */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
          {SERVICE_FILTERS.map((s) => (
            <button key={s} onClick={() => setServiceFilter(s)} style={{
              padding: '8px 18px', fontSize: 12, fontWeight: 500,
              border: serviceFilter === s ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.15)',
              background: serviceFilter === s ? '#C8A97E' : 'transparent',
              color: serviceFilter === s ? '#0a0a0f' : '#7a7788',
              borderRadius: 2, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
            }}>{s}</button>
          ))}
          <span style={{ marginLeft: 'auto', fontSize: 13, color: '#5a5768', alignSelf: 'center' }}>{filtered.length} locations found</span>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.2fr', gap: 32 }}>
          {/* LEFT — List */}
          <div style={{ maxHeight: 600, overflowY: 'auto', display: 'flex', flexDirection: 'column', gap: 10, paddingRight: 8 }}>
            {filtered.map((d) => (
              <div key={d.id} onClick={() => setSelectedId(d.id)} style={{
                background: selectedId === d.id ? 'rgba(200,169,126,0.06)' : '#111118',
                border: selectedId === d.id ? '1px solid rgba(200,169,126,0.3)' : '1px solid rgba(200,169,126,0.08)',
                borderRadius: 8, padding: '20px 24px', cursor: 'pointer', transition: 'all 0.3s',
              }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 8 }}>
                  <div>
                    <h3 style={{ fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 4 }}>{d.name}</h3>
                    <p style={{ fontSize: 12, color: '#6b6880' }}>{d.address}</p>
                  </div>
                  <span style={{ fontSize: 13, fontWeight: 600, color: '#C8A97E', whiteSpace: 'nowrap' }}>{d.distance}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <div style={{ display: 'flex', gap: 6 }}>
                    {d.services.map((s) => (
                      <span key={s} style={{ padding: '2px 8px', background: 'rgba(200,169,126,0.06)', borderRadius: 12, fontSize: 10, fontWeight: 500, color: '#7a7788' }}>{s}</span>
                    ))}
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                    <Star size={11} color="#C8A97E" fill="#C8A97E" />
                    <span style={{ fontSize: 12, color: '#C8A97E' }}>{d.rating}</span>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* RIGHT — Map Placeholder + Detail */}
          <div>
            {/* Map */}
            <div style={{ height: 280, background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', position: 'relative', overflow: 'hidden' }}>
              <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0d0d14 0%, #151520 100%)' }}>
                {/* Grid lines for map aesthetic */}
                {[...Array(8)].map((_, i) => (
                  <div key={`h${i}`} style={{ position: 'absolute', left: 0, right: 0, top: `${(i + 1) * 12}%`, height: 1, background: 'rgba(200,169,126,0.03)' }} />
                ))}
                {[...Array(10)].map((_, i) => (
                  <div key={`v${i}`} style={{ position: 'absolute', top: 0, bottom: 0, left: `${(i + 1) * 10}%`, width: 1, background: 'rgba(200,169,126,0.03)' }} />
                ))}
              </div>
              {/* Pin */}
              <div style={{ position: 'relative', zIndex: 2, textAlign: 'center' }}>
                <div style={{ width: 36, height: 36, borderRadius: '50%', background: '#C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 8px', boxShadow: '0 0 20px rgba(200,169,126,0.4)' }}>
                  <MapPin size={18} color="#0a0a0f" />
                </div>
                <span style={{ fontSize: 11, color: '#C8A97E', fontWeight: 500 }}>{selected?.name}</span>
              </div>
            </div>

            {/* Selected Detail */}
            {selected && (
              <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, padding: '28px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 20 }}>
                  <div>
                    <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E' }}>{selected.type}</span>
                    <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 400, color: '#fff', marginTop: 4 }}>{selected.name}</h3>
                  </div>
                  <span style={{ fontSize: 18, fontWeight: 600, color: '#C8A97E' }}>{selected.distance}</span>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 12, marginBottom: 24 }}>
                  {[
                    { icon: <MapPin size={14} color="#4e453b" />, text: `${selected.address}, ${selected.city}` },
                    { icon: <Phone size={14} color="#4e453b" />, text: selected.phone },
                    { icon: <Clock size={14} color="#4e453b" />, text: selected.hours },
                  ].map((item, i) => (
                    <div key={i} style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                      {item.icon}
                      <span style={{ fontSize: 13, color: '#9a97a5' }}>{item.text}</span>
                    </div>
                  ))}
                </div>

                <div style={{ display: 'flex', gap: 10 }}>
                  <button className="gold-btn" style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '12px' }}>
                    <Navigation size={14} /> Directions
                  </button>
                  <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '12px', background: 'none', border: '1px solid rgba(200,169,126,0.2)', color: '#7a7788', fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                    <Phone size={14} /> Call
                  </button>
                </div>
              </div>
            )}
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(200,169,126,0.1)', marginTop: 80, padding: '40px 0 20px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
          <p style={{ fontSize: 12, color: '#3a3748', textAlign: 'center' }}>© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
