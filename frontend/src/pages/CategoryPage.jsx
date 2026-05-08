import { useState } from 'react';
import { Star, Heart, Eye, ChevronRight, ArrowUpDown } from 'lucide-react';

const CATEGORIES = {
  Sedan: { title: 'Sedans', tagline: 'Timeless Elegance', desc: 'Experience the pinnacle of luxury sedans — where refined craftsmanship meets effortless power.', banner: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=1200&q=80' },
  SUV: { title: 'SUVs & G-Class', tagline: 'Commanding Presence', desc: 'Dominate every terrain with unmatched versatility and unmistakable style.', banner: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=1200&q=80' },
  AMG: { title: 'AMG Performance', tagline: 'Born on the Track', desc: 'Handcrafted power and race-bred precision — engineered for those who demand more.', banner: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=1200&q=80' },
  Electric: { title: 'EQ Electric', tagline: 'The Future, Now', desc: 'Zero emissions, maximum luxury — drive the future of sustainable performance.', banner: 'https://images.unsplash.com/photo-1625231334401-67c9eef63a78?w=1200&q=80' },
};

const CARS = [
  { id: 1, name: 'S-Class 500', cat: 'Sedan', price: 85000000, power: '429 HP', accel: '4.9s', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80', year: 2024, rating: 4.9 },
  { id: 2, name: 'C-Class 300', cat: 'Sedan', price: 45000000, power: '258 HP', accel: '5.9s', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500&q=80', year: 2024, rating: 4.6 },
  { id: 3, name: 'E-Class 450', cat: 'Sedan', price: 62000000, power: '362 HP', accel: '5.2s', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80', year: 2024, rating: 4.7 },
  { id: 4, name: 'G-Class G63', cat: 'SUV', price: 150000000, power: '577 HP', accel: '4.5s', image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=500&q=80', year: 2024, rating: 4.8 },
  { id: 5, name: 'GLE 450', cat: 'SUV', price: 75000000, power: '362 HP', accel: '5.7s', image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=500&q=80', year: 2023, rating: 4.5 },
  { id: 6, name: 'GLC 300', cat: 'SUV', price: 55000000, power: '258 HP', accel: '6.2s', image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=500&q=80', year: 2024, rating: 4.4 },
  { id: 7, name: 'AMG GT Coupé', cat: 'AMG', price: 120000000, power: '585 HP', accel: '3.2s', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&q=80', year: 2024, rating: 5.0 },
  { id: 8, name: 'AMG C63 S', cat: 'AMG', price: 98000000, power: '671 HP', accel: '3.4s', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&q=80', year: 2024, rating: 4.9 },
  { id: 9, name: 'EQS 580', cat: 'Electric', price: 95000000, power: '516 HP', accel: '4.3s', image: 'https://images.unsplash.com/photo-1625231334401-67c9eef63a78?w=500&q=80', year: 2024, rating: 4.7 },
  { id: 10, name: 'EQB 300', cat: 'Electric', price: 55000000, power: '228 HP', accel: '7.7s', image: 'https://images.unsplash.com/photo-1625231334401-67c9eef63a78?w=500&q=80', year: 2023, rating: 4.4 },
];

export default function CategoryPage() {
  const [activeCat, setActiveCat] = useState('Sedan');
  const [sortAsc, setSortAsc] = useState(true);
  const [liked, setLiked] = useState([]);

  const cat = CATEGORIES[activeCat];
  const cars = CARS.filter((c) => c.cat === activeCat).sort((a, b) => sortAsc ? a.price - b.price : b.price - a.price);
  const toggleLike = (id) => setLiked((p) => p.includes(id) ? p.filter((x) => x !== id) : [...p, id]);
  const fmt = (n) => `PKR ${(n / 1000000).toFixed(0)}M`;

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
            {Object.keys(CATEGORIES).map((c) => (
              <a key={c} href="#" onClick={(e) => { e.preventDefault(); setActiveCat(c); }} style={{ fontSize: 13, fontWeight: activeCat === c ? 500 : 300, color: activeCat === c ? '#C8A97E' : '#b0adb8', letterSpacing: '0.05em' }}>{c}</a>
            ))}
          </div>
          <button className="gold-btn" style={{ padding: '8px 22px', fontSize: 11 }}>My Account</button>
        </div>
      </nav>

      {/* HERO BANNER */}
      <div style={{ position: 'relative', height: 400, overflow: 'hidden', marginTop: 72 }}>
        <img src={cat.banner} alt={cat.title} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.35)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', padding: '0 80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div className="gold-line" />
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>{cat.tagline}</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 300, color: '#fff', marginBottom: 12 }}>{cat.title}</h1>
          <p style={{ fontSize: 16, fontWeight: 300, color: 'rgba(255,255,255,0.6)', maxWidth: 520 }}>{cat.desc}</p>
        </div>
      </div>

      {/* CATEGORY TABS */}
      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
        <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid rgba(200,169,126,0.08)', marginBottom: 40 }}>
          {Object.keys(CATEGORIES).map((c) => (
            <button key={c} onClick={() => setActiveCat(c)} style={{
              padding: '18px 28px', fontSize: 13, fontWeight: 500, letterSpacing: '0.06em',
              background: 'none', border: 'none', borderBottom: activeCat === c ? '2px solid #C8A97E' : '2px solid transparent',
              color: activeCat === c ? '#C8A97E' : '#5a5768', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.3s',
            }}>{c} <span style={{ fontSize: 11, color: '#3a3748', marginLeft: 6 }}>({CARS.filter((x) => x.cat === c).length})</span></button>
          ))}
        </div>

        {/* Sort & Count */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <p style={{ fontSize: 14, color: '#6b6880' }}>{cars.length} vehicles in <span style={{ color: '#C8A97E' }}>{activeCat}</span></p>
          <button onClick={() => setSortAsc(!sortAsc)} style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: '1px solid rgba(200,169,126,0.15)', padding: '8px 16px', borderRadius: 4, color: '#7a7788', fontSize: 12, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
            <ArrowUpDown size={14} /> Price: {sortAsc ? 'Low → High' : 'High → Low'}
          </button>
        </div>

        {/* CARDS GRID */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24, marginBottom: 80 }}>
          {cars.map((car) => (
            <div key={car.id} className="card-hover" style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ position: 'relative', overflow: 'hidden' }}>
                <img className="img-zoom" src={car.image} alt={car.name} style={{ width: '100%', height: 220, objectFit: 'cover' }} />
                <button onClick={() => toggleLike(car.id)} style={{ position: 'absolute', top: 12, right: 12, width: 36, height: 36, borderRadius: '50%', background: 'rgba(10,10,15,0.6)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(6px)' }}>
                  <Heart size={16} color={liked.includes(car.id) ? '#e74c3c' : '#C8A97E'} fill={liked.includes(car.id) ? '#e74c3c' : 'none'} />
                </button>
                <div style={{ position: 'absolute', bottom: 12, left: 12, display: 'flex', gap: 8 }}>
                  <span style={{ padding: '4px 12px', background: 'rgba(10,10,15,0.7)', borderRadius: 20, fontSize: 10, fontWeight: 500, color: '#e4e1eb', backdropFilter: 'blur(6px)' }}>{car.year}</span>
                  <span style={{ padding: '4px 12px', background: 'rgba(10,10,15,0.7)', borderRadius: 20, fontSize: 10, fontWeight: 500, color: '#C8A97E', backdropFilter: 'blur(6px)' }}>{car.power}</span>
                </div>
              </div>
              <div style={{ padding: '22px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 12 }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff' }}>{car.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Star size={12} color="#C8A97E" fill="#C8A97E" />
                    <span style={{ fontSize: 12, color: '#C8A97E' }}>{car.rating}</span>
                  </div>
                </div>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 4 }}>
                  <span style={{ fontSize: 12, color: '#5a5768' }}>0-100 km/h: {car.accel}</span>
                  <span style={{ fontSize: 18, fontWeight: 600, color: '#C8A97E' }}>{fmt(car.price)}</span>
                </div>
                <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
                  <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px', background: 'none', border: '1px solid rgba(200,169,126,0.2)', borderRadius: 4, color: '#C8A97E', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                    <Eye size={14} /> Details
                  </button>
                  <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px', background: 'rgba(200,169,126,0.1)', border: '1px solid #C8A97E', borderRadius: 4, color: '#C8A97E', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                    Configure <ChevronRight size={14} />
                  </button>
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
            <p style={{ fontSize: 13, fontWeight: 300, color: '#5a5768', lineHeight: 1.7, maxWidth: 280 }}>Defining the pinnacle of automotive engineering for over a century.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Categories</h4>
            {Object.keys(CATEGORIES).map((c) => (<a key={c} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10 }}>{c}</a>))}
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
