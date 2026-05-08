import { useState } from 'react';
import { Star, MapPin, Phone, Clock, ChevronRight, Search, Navigation, Award, Users, Car } from 'lucide-react';

const DEALERSHIPS = [
  { id: 1, name: 'Mercedes-Benz Lahore Central', city: 'Lahore', address: 'Main Boulevard, Gulberg III, Lahore', phone: '+92 42 3571 2345', hours: 'Mon-Sat: 9AM - 8PM', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', rating: 4.9, reviews: 128, type: 'Flagship', services: ['Sales', 'Service', 'AMG Center'], lat: 31.52, lng: 74.35 },
  { id: 2, name: 'Mercedes-Benz Karachi DHA', city: 'Karachi', address: 'Khayaban-e-Ittehad, DHA Phase VI, Karachi', phone: '+92 21 3584 6789', hours: 'Mon-Sat: 9AM - 9PM', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', rating: 4.8, reviews: 215, type: 'Flagship', services: ['Sales', 'Service', 'EQ Center', 'AMG Center'], lat: 24.81, lng: 67.06 },
  { id: 3, name: 'Mercedes-Benz Islamabad', city: 'Islamabad', address: 'Jinnah Avenue, Blue Area, Islamabad', phone: '+92 51 2876 5432', hours: 'Mon-Sat: 9AM - 7PM', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80', rating: 4.7, reviews: 89, type: 'Authorized', services: ['Sales', 'Service'], lat: 33.72, lng: 73.04 },
  { id: 4, name: 'Mercedes-Benz Faisalabad', city: 'Faisalabad', address: 'Jaranwala Road, Faisalabad', phone: '+92 41 2634 7890', hours: 'Mon-Sat: 10AM - 7PM', image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=600&q=80', rating: 4.6, reviews: 52, type: 'Authorized', services: ['Sales', 'Service'], lat: 31.42, lng: 73.08 },
  { id: 5, name: 'Mercedes-Benz Multan', city: 'Multan', address: 'Bosan Road, Multan', phone: '+92 61 4512 3456', hours: 'Mon-Sat: 10AM - 6PM', image: 'https://images.unsplash.com/photo-1497366216548-37526070297c?w=600&q=80', rating: 4.5, reviews: 38, type: 'Service Partner', services: ['Service'], lat: 30.20, lng: 71.45 },
  { id: 6, name: 'Mercedes-Benz Peshawar', city: 'Peshawar', address: 'University Road, Peshawar', phone: '+92 91 5842 1234', hours: 'Mon-Sat: 10AM - 6PM', image: 'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80', rating: 4.4, reviews: 31, type: 'Service Partner', services: ['Service'], lat: 34.01, lng: 71.58 },
];

const TYPE_COLORS = { Flagship: '#C8A97E', Authorized: '#2ecc71', 'Service Partner': '#3498db' };
const CITIES = ['All', ...new Set(DEALERSHIPS.map((d) => d.city))];

export default function AllDealerships() {
  const [search, setSearch] = useState('');
  const [cityFilter, setCityFilter] = useState('All');
  const [viewMode, setViewMode] = useState('grid');

  const filtered = DEALERSHIPS.filter((d) => {
    const matchSearch = d.name.toLowerCase().includes(search.toLowerCase()) || d.city.toLowerCase().includes(search.toLowerCase());
    const matchCity = cityFilter === 'All' || d.city === cityFilter;
    return matchSearch && matchCity;
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
        .card-hover:hover { transform:translateY(-6px); box-shadow:0 8px 30px rgba(200,169,126,0.08); }
        input:focus { border-color:#C8A97E !important; outline:none; }
        input::placeholder { color:#3a3748; }
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
            {['Cars', 'Dealerships', 'Service', 'My Orders'].map((l) => (
              <a key={l} href="#" style={{ fontSize: 13, fontWeight: l === 'Dealerships' ? 500 : 300, color: l === 'Dealerships' ? '#C8A97E' : '#b0adb8', letterSpacing: '0.05em' }}>{l}</a>
            ))}
          </div>
          <button className="gold-btn" style={{ padding: '8px 22px', fontSize: 11 }}>My Account</button>
        </div>
      </nav>

      <div style={{ paddingTop: 100, maxWidth: 1440, margin: '0 auto', padding: '100px 80px 60px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div className="gold-line" />
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Our Network</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 40 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 300, color: '#fff', marginBottom: 8 }}>Dealerships</h1>
            <p style={{ fontSize: 15, fontWeight: 300, color: '#6b6880' }}>Find your nearest Mercedes-Benz experience center across Pakistan.</p>
          </div>
          <button className="gold-btn" style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '12px 24px' }}>
            <Navigation size={14} /> Find Nearest
          </button>
        </div>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 36 }}>
          {[
            { label: 'Dealerships', value: DEALERSHIPS.length, icon: <MapPin size={18} color="#C8A97E" /> },
            { label: 'Cities Covered', value: new Set(DEALERSHIPS.map((d) => d.city)).size, icon: <Navigation size={18} color="#C8A97E" /> },
            { label: 'Avg. Rating', value: (DEALERSHIPS.reduce((s, d) => s + d.rating, 0) / DEALERSHIPS.length).toFixed(1), icon: <Award size={18} color="#C8A97E" /> },
          ].map((s) => (
            <div key={s.label} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '22px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
              <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(200,169,126,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{s.icon}</div>
              <div>
                <p style={{ fontSize: 24, fontWeight: 600, color: '#fff' }}>{s.value}</p>
                <p style={{ fontSize: 11, color: '#5a5768' }}>{s.label}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Search + Filters */}
        <div style={{ display: 'flex', gap: 16, marginBottom: 32 }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 13 }} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search dealerships or cities..."
              style={{ width: '100%', padding: '12px 16px 12px 44px', background: '#111118', border: '1px solid rgba(200,169,126,0.12)', borderRadius: 6, color: '#e4e1eb', fontSize: 13, fontFamily: "'DM Sans', sans-serif" }} />
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {CITIES.map((c) => (
              <button key={c} onClick={() => setCityFilter(c)} style={{
                padding: '8px 18px', fontSize: 12, fontWeight: 500,
                border: cityFilter === c ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.15)',
                background: cityFilter === c ? '#C8A97E' : 'transparent',
                color: cityFilter === c ? '#0a0a0f' : '#7a7788',
                borderRadius: 2, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              }}>{c}</button>
            ))}
          </div>
        </div>

        {/* Cards Grid */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
          {filtered.map((dealer) => (
            <div key={dealer.id} className="card-hover" style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ position: 'relative' }}>
                <img src={dealer.image} alt={dealer.name} style={{ width: '100%', height: 180, objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: 12, left: 12, padding: '4px 12px', background: `${TYPE_COLORS[dealer.type]}20`, border: `1px solid ${TYPE_COLORS[dealer.type]}40`, borderRadius: 20, fontSize: 10, fontWeight: 600, color: TYPE_COLORS[dealer.type], backdropFilter: 'blur(6px)' }}>
                  {dealer.type}
                </span>
              </div>
              <div style={{ padding: '22px 24px' }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 400, color: '#fff', marginBottom: 12 }}>{dealer.name}</h3>

                <div style={{ display: 'flex', flexDirection: 'column', gap: 8, marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                    <MapPin size={13} color="#4e453b" style={{ marginTop: 2, flexShrink: 0 }} />
                    <span style={{ fontSize: 12, color: '#6b6880', lineHeight: 1.5 }}>{dealer.address}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Phone size={13} color="#4e453b" />
                    <span style={{ fontSize: 12, color: '#6b6880' }}>{dealer.phone}</span>
                  </div>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
                    <Clock size={13} color="#4e453b" />
                    <span style={{ fontSize: 12, color: '#6b6880' }}>{dealer.hours}</span>
                  </div>
                </div>

                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 16 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                    <Star size={12} color="#C8A97E" fill="#C8A97E" />
                    <span style={{ fontSize: 13, fontWeight: 500, color: '#C8A97E' }}>{dealer.rating}</span>
                    <span style={{ fontSize: 11, color: '#4e453b' }}>({dealer.reviews} reviews)</span>
                  </div>
                </div>

                <div style={{ display: 'flex', flexWrap: 'wrap', gap: 6, marginBottom: 18 }}>
                  {dealer.services.map((s) => (
                    <span key={s} style={{ padding: '3px 10px', background: 'rgba(200,169,126,0.06)', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 20, fontSize: 10, fontWeight: 500, color: '#7a7788' }}>{s}</span>
                  ))}
                </div>

                <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px', background: 'none', border: '1px solid rgba(200,169,126,0.2)', borderRadius: 4, color: '#C8A97E', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                  View Details <ChevronRight size={14} />
                </button>
              </div>
            </div>
          ))}
        </div>

        {filtered.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <MapPin size={40} color="#2a2931" style={{ marginBottom: 16 }} />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 300, color: '#fff', marginBottom: 8 }}>No dealerships found</h2>
            <p style={{ fontSize: 14, color: '#5a5768' }}>Try adjusting your search or city filter.</p>
          </div>
        )}
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
