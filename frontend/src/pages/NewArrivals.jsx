import { useState, useEffect } from 'react';
import { Star, Heart, Eye, ChevronRight, Sparkles, Clock, ArrowRight, Bell } from 'lucide-react';

const ARRIVALS = [
  { id: 1, name: 'AMG GT 63 Pro', category: 'AMG Performance', price: 'PKR 135,000,000', power: '612 HP', accel: '3.0s', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80', badge: 'Just Landed', daysAgo: 2, featured: true },
  { id: 2, name: 'EQS 680 SUV', category: 'Electric SUV', price: 'PKR 110,000,000', power: '536 HP', accel: '4.4s', image: 'https://images.unsplash.com/photo-1625231334401-67c9eef63a78?w=600&q=80', badge: 'New', daysAgo: 5, featured: true },
  { id: 3, name: 'S-Class Maybach', category: 'Ultra Luxury', price: 'PKR 220,000,000', power: '496 HP', accel: '4.8s', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80', badge: 'Exclusive', daysAgo: 7, featured: false },
  { id: 4, name: 'GLC 43 AMG Coupé', category: 'AMG SUV', price: 'PKR 78,000,000', power: '421 HP', accel: '4.6s', image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=600&q=80', badge: 'New', daysAgo: 10, featured: false },
  { id: 5, name: 'CLE 300 Cabriolet', category: 'Convertible', price: 'PKR 68,000,000', power: '258 HP', accel: '6.2s', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=600&q=80', badge: 'New', daysAgo: 12, featured: false },
  { id: 6, name: 'AMG ONE', category: 'Hypercar', price: 'PKR 850,000,000', power: '1,063 HP', accel: '2.9s', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80', badge: 'Limited', daysAgo: 14, featured: false },
];

const BADGE_COLORS = {
  'Just Landed': '#C8A97E',
  'New': '#2ecc71',
  'Exclusive': '#9b59b6',
  'Limited': '#e74c3c',
};

export default function NewArrivals() {
  const [liked, setLiked] = useState([]);
  const [notified, setNotified] = useState(false);
  const [countdown, setCountdown] = useState({ days: 12, hours: 8, mins: 45 });

  const toggleLike = (id) => setLiked((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);

  useEffect(() => {
    const timer = setInterval(() => {
      setCountdown((prev) => {
        let { days, hours, mins } = prev;
        mins -= 1;
        if (mins < 0) { mins = 59; hours -= 1; }
        if (hours < 0) { hours = 23; days -= 1; }
        if (days < 0) return { days: 0, hours: 0, mins: 0 };
        return { days, hours, mins };
      });
    }, 60000);
    return () => clearInterval(timer);
  }, []);

  const featured = ARRIVALS.filter((c) => c.featured);
  const rest = ARRIVALS.filter((c) => !c.featured);

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
        .img-zoom { transition:transform 0.6s; }
        .img-zoom:hover { transform:scale(1.06); }
        @keyframes pulse { 0%,100%{opacity:1} 50%{opacity:0.5} }
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
            {['Cars', 'New Arrivals', 'Service', 'My Orders'].map((l) => (
              <a key={l} href="#" style={{ fontSize: 13, fontWeight: l === 'New Arrivals' ? 500 : 300, color: l === 'New Arrivals' ? '#C8A97E' : '#b0adb8', letterSpacing: '0.05em' }}>{l}</a>
            ))}
          </div>
          <button className="gold-btn" style={{ padding: '8px 22px', fontSize: 11 }}>My Account</button>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ paddingTop: 100, maxWidth: 1440, margin: '0 auto', padding: '100px 80px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div className="gold-line" />
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Fresh from the Factory</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 300, color: '#fff', marginBottom: 8 }}>New Arrivals</h1>
            <p style={{ fontSize: 15, fontWeight: 300, color: '#6b6880' }}>The latest additions to our exclusive collection.</p>
          </div>
          <button onClick={() => setNotified(!notified)} style={{
            display: 'flex', alignItems: 'center', gap: 8, padding: '12px 24px',
            background: notified ? 'rgba(200,169,126,0.1)' : 'transparent',
            border: '1px solid rgba(200,169,126,0.25)', borderRadius: 4,
            color: notified ? '#C8A97E' : '#7a7788', fontSize: 12, fontWeight: 500,
            cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.3s',
          }}>
            <Bell size={14} fill={notified ? '#C8A97E' : 'none'} /> {notified ? 'Notifications On' : 'Notify Me'}
          </button>
        </div>

        {/* COUNTDOWN BANNER */}
        <div style={{ background: 'linear-gradient(135deg, rgba(200,169,126,0.08), rgba(200,169,126,0.02))', border: '1px solid rgba(200,169,126,0.12)', borderRadius: 8, padding: '28px 36px', marginBottom: 48, display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 8, marginBottom: 6 }}>
              <Sparkles size={16} color="#C8A97E" />
              <span style={{ fontSize: 14, fontWeight: 500, color: '#C8A97E' }}>Next Drop Coming Soon</span>
            </div>
            <p style={{ fontSize: 13, color: '#6b6880' }}>The all-new 2025 Mercedes-AMG SL Roadster arrives exclusively in Pakistan.</p>
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            {[['Days', countdown.days], ['Hours', countdown.hours], ['Mins', countdown.mins]].map(([label, val]) => (
              <div key={label} style={{ textAlign: 'center' }}>
                <p style={{ fontSize: 28, fontWeight: 600, color: '#fff', fontFamily: "'Playfair Display', serif" }}>{String(val).padStart(2, '0')}</p>
                <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b' }}>{label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* FEATURED (Large Cards) */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 24, marginBottom: 48 }}>
          {featured.map((car) => (
            <div key={car.id} className="card-hover" style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img className="img-zoom" src={car.image} alt={car.name} style={{ width: '100%', height: 280, objectFit: 'cover' }} />
                <button onClick={() => toggleLike(car.id)} style={{ position: 'absolute', top: 14, right: 14, width: 40, height: 40, borderRadius: '50%', background: 'rgba(10,10,15,0.6)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(6px)' }}>
                  <Heart size={18} color={liked.includes(car.id) ? '#e74c3c' : '#C8A97E'} fill={liked.includes(car.id) ? '#e74c3c' : 'none'} />
                </button>
                <span style={{ position: 'absolute', top: 14, left: 14, padding: '5px 14px', background: `${BADGE_COLORS[car.badge]}20`, border: `1px solid ${BADGE_COLORS[car.badge]}40`, borderRadius: 20, fontSize: 11, fontWeight: 600, color: BADGE_COLORS[car.badge], backdropFilter: 'blur(6px)', animation: car.badge === 'Just Landed' ? 'pulse 2s infinite' : 'none' }}>
                  {car.badge}
                </span>
                <div style={{ position: 'absolute', bottom: 14, left: 14, display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Clock size={12} color="#9a97a5" />
                  <span style={{ fontSize: 11, color: '#9a97a5' }}>{car.daysAgo} days ago</span>
                </div>
              </div>
              <div style={{ padding: '24px 28px' }}>
                <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C8A97E' }}>{car.category}</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 400, color: '#fff', margin: '6px 0 12px' }}>{car.name}</h3>
                <div style={{ display: 'flex', gap: 20, marginBottom: 16, fontSize: 13, color: '#6b6880' }}>
                  <span>{car.power}</span><span>0-100: {car.accel}</span>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 20, fontWeight: 600, color: '#C8A97E' }}>{car.price}</span>
                  <button style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '10px 20px', background: 'rgba(200,169,126,0.1)', border: '1px solid #C8A97E', borderRadius: 4, color: '#C8A97E', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                    Explore <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* REST (Smaller Grid) */}
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 400, color: '#fff', marginBottom: 24 }}>More New Models</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 80 }}>
          {rest.map((car) => (
            <div key={car.id} className="card-hover" style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img className="img-zoom" src={car.image} alt={car.name} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
                <span style={{ position: 'absolute', top: 10, left: 10, padding: '3px 10px', background: `${BADGE_COLORS[car.badge]}20`, border: `1px solid ${BADGE_COLORS[car.badge]}40`, borderRadius: 16, fontSize: 10, fontWeight: 600, color: BADGE_COLORS[car.badge] }}>{car.badge}</span>
                <button onClick={() => toggleLike(car.id)} style={{ position: 'absolute', top: 10, right: 10, width: 30, height: 30, borderRadius: '50%', background: 'rgba(10,10,15,0.6)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Heart size={14} color={liked.includes(car.id) ? '#e74c3c' : '#C8A97E'} fill={liked.includes(car.id) ? '#e74c3c' : 'none'} />
                </button>
              </div>
              <div style={{ padding: '16px 18px' }}>
                <span style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b' }}>{car.category}</span>
                <h4 style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, fontWeight: 400, color: '#fff', margin: '4px 0 8px' }}>{car.name}</h4>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 14, fontWeight: 600, color: '#C8A97E' }}>{car.price}</span>
                  <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#4e453b' }}><Clock size={11} /> {car.daysAgo}d</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(200,169,126,0.1)', padding: '40px 0 20px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Star size={14} color="#C8A97E" /></div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: '#fff' }}>Mercedes-Benz</span>
            </div>
            <p style={{ fontSize: 13, fontWeight: 300, color: '#5a5768', lineHeight: 1.7, maxWidth: 280 }}>Innovation meets luxury in every new model.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Explore</h4>
            {['Cars', 'New Arrivals', 'Special Offers'].map((l) => (<a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10 }}>{l}</a>))}
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
