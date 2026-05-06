import { useState } from 'react';
import { ArrowRight, Star, Heart, Search, Menu, X, ChevronRight, Zap, Shield, Award, Phone, Mail, MapPin } from 'lucide-react';

const CARS = [
  { id: 1, name: 'S-Class 500', category: 'Sedan', price: 'PKR 85,000,000', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80', desc: 'Experience the definition of luxury. Standard-setting innovation meets classic elegance.', rating: 4.9 },
  { id: 2, name: 'AMG GT Coupe', category: 'AMG', price: 'PKR 120,000,000', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80', desc: 'Precision-tuned by masters at Affalterbach. Raw power meets uncompromising control.', rating: 5.0 },
  { id: 3, name: 'G-Wagon G63', category: 'SUV', price: 'PKR 150,000,000', image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=600&q=80', desc: 'Iconic design that defies time and terrain. Hand-crafted perfection for the boldest journeys.', rating: 4.8 },
  { id: 4, name: 'EQS Sedan', category: 'Electric', price: 'PKR 95,000,000', image: 'https://images.unsplash.com/photo-1625231334401-67c9eef63a78?w=600&q=80', desc: 'Leading the world into a new era of electric mobility. Silent and groundbreaking.', rating: 4.7 },
];

const CATEGORIES = [
  { name: 'Sedans', icon: '🏎️', count: 12 },
  { name: 'SUVs', icon: '🚙', count: 8 },
  { name: 'AMG Performance', icon: '⚡', count: 6 },
  { name: 'Electric (EQ)', icon: '🔋', count: 5 },
];

const NAV_LINKS = ['Cars', 'AMG Performance', 'Electric', 'Discover'];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [liked, setLiked] = useState({});
  const [activeTab, setActiveTab] = useState('All');

  const toggleLike = (id) => setLiked((p) => ({ ...p, [id]: !p[id] }));

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', minHeight: '100vh' }}>
      {/* Google Fonts */}
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { margin: 0; padding: 0; box-sizing: border-box; }
        .gold-btn { border: 1px solid #C8A97E; background: transparent; color: #C8A97E; padding: 14px 32px; font-family: 'DM Sans', sans-serif; font-size: 13px; font-weight: 500; letter-spacing: 0.12em; text-transform: uppercase; cursor: pointer; transition: all 0.4s ease; }
        .gold-btn:hover { background: #C8A97E; color: #0a0a0f; }
        .card-hover { transition: transform 0.5s ease, box-shadow 0.5s ease; }
        .card-hover:hover { transform: translateY(-6px); box-shadow: 0 0 30px rgba(200,169,126,0.08); }
        .img-zoom { transition: transform 0.7s ease; }
        .img-zoom:hover { transform: scale(1.05); }
        .fade-in { animation: fadeUp 0.8s ease forwards; opacity: 0; }
        @keyframes fadeUp { from { opacity: 0; transform: translateY(30px); } to { opacity: 1; transform: translateY(0); } }
        .glass { background: rgba(10,10,15,0.85); backdrop-filter: blur(12px); -webkit-backdrop-filter: blur(12px); }
        .gold-line { width: 60px; height: 1px; background: #C8A97E; }
        a { text-decoration: none; color: inherit; }
      `}</style>

      {/* NAVBAR */}
      <nav className="glass" style={{ position: 'fixed', top: 0, left: 0, right: 0, zIndex: 100, borderBottom: '1px solid rgba(200,169,126,0.12)', padding: '0 40px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', display: 'flex', alignItems: 'center', justifyContent: 'space-between', height: 72 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Star size={16} color="#C8A97E" />
            </div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff', letterSpacing: '0.02em' }}>Mercedes-Benz</span>
          </div>
          <div style={{ display: 'flex', gap: 36, alignItems: 'center' }}>
            {NAV_LINKS.map((l) => (
              <a key={l} href="#" style={{ fontSize: 13, fontWeight: 300, color: '#b0adb8', letterSpacing: '0.05em', transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.target.style.color = '#C8A97E')} onMouseLeave={(e) => (e.target.style.color = '#b0adb8')}>{l}</a>
            ))}
          </div>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <Search size={18} color="#b0adb8" style={{ cursor: 'pointer' }} />
            <button className="gold-btn" style={{ padding: '8px 22px', fontSize: 11 }}>Sign In</button>
            <Menu size={20} color="#b0adb8" style={{ cursor: 'pointer', display: 'none' }} onClick={() => setMenuOpen(!menuOpen)} />
          </div>
        </div>
      </nav>

      {/* HERO */}
      <section className="fade-in" style={{ paddingTop: 72, position: 'relative', height: '100vh', display: 'flex', alignItems: 'center', overflow: 'hidden' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'url(https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=1400&q=80) center/cover', opacity: 0.25 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, #0a0a0f 30%, transparent 70%)' }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0a0a0f 5%, transparent 40%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1440, margin: '0 auto', padding: '0 80px', width: '100%' }}>
          <div style={{ maxWidth: 620 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <div className="gold-line" />
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>The Best or Nothing</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 64, fontWeight: 300, lineHeight: 1.1, color: '#fff', marginBottom: 24 }}>
              Experience the Pinnacle of <span style={{ color: '#C8A97E' }}>Automotive</span> Luxury
            </h1>
            <p style={{ fontSize: 17, fontWeight: 300, lineHeight: 1.7, color: '#9a97a5', marginBottom: 40, maxWidth: 480 }}>
              From our classic sedans to the high-performance AMG lineage. Discover vehicles engineered for those who demand excellence.
            </p>
            <div style={{ display: 'flex', gap: 16 }}>
              <button className="gold-btn">Explore Collection</button>
              <button className="gold-btn" style={{ border: '1px solid rgba(200,169,126,0.3)', color: '#b0adb8' }}>
                Book Test Drive
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* CATEGORIES */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '100px 80px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div className="gold-line" />
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Categories</span>
        </div>
        <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 300, color: '#fff', marginBottom: 48 }}>Browse by Class</h2>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20 }}>
          {CATEGORIES.map((c) => (
            <div key={c.name} className="card-hover" style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.12)', borderRadius: 8, padding: '36px 28px', cursor: 'pointer', textAlign: 'center' }}>
              <div style={{ fontSize: 36, marginBottom: 16 }}>{c.icon}</div>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff', marginBottom: 8 }}>{c.name}</h3>
              <p style={{ fontSize: 13, color: '#6b6880' }}>{c.count} Models</p>
            </div>
          ))}
        </div>
      </section>

      {/* FEATURED CARS */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '40px 80px 100px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div className="gold-line" />
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Collection</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 300, color: '#fff' }}>Featured Vehicles</h2>
          </div>
          <div style={{ display: 'flex', gap: 8 }}>
            {['All', 'Sedan', 'SUV', 'AMG', 'Electric'].map((t) => (
              <button key={t} onClick={() => setActiveTab(t)} style={{
                padding: '8px 20px', fontSize: 12, fontWeight: 500, letterSpacing: '0.05em', border: activeTab === t ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.2)',
                background: activeTab === t ? '#C8A97E' : 'transparent', color: activeTab === t ? '#0a0a0f' : '#7a7788', borderRadius: 2, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.3s'
              }}>{t}</button>
            ))}
          </div>
        </div>
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(2, 1fr)', gap: 24 }}>
          {CARS.filter((c) => activeTab === 'All' || c.category === activeTab).map((car) => (
            <div key={car.id} className="card-hover" style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.12)', borderRadius: 8, overflow: 'hidden' }}>
              <div style={{ position: 'relative', overflow: 'hidden', height: 280 }}>
                <img className="img-zoom" src={car.image} alt={car.name} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                <div style={{ position: 'absolute', top: 16, right: 16, width: 36, height: 36, borderRadius: '50%', background: 'rgba(10,10,15,0.7)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(8px)' }}
                  onClick={() => toggleLike(car.id)}>
                  <Heart size={16} color={liked[car.id] ? '#e74c3c' : '#C8A97E'} fill={liked[car.id] ? '#e74c3c' : 'none'} />
                </div>
                <div style={{ position: 'absolute', top: 16, left: 16, padding: '4px 12px', background: 'rgba(200,169,126,0.15)', border: '1px solid rgba(200,169,126,0.3)', borderRadius: 2, fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C8A97E', backdropFilter: 'blur(8px)' }}>
                  {car.category}
                </div>
              </div>
              <div style={{ padding: '28px 28px 24px' }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 10 }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 400, color: '#fff' }}>{car.name}</h3>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                    <Star size={13} color="#C8A97E" fill="#C8A97E" />
                    <span style={{ fontSize: 13, color: '#C8A97E', fontWeight: 500 }}>{car.rating}</span>
                  </div>
                </div>
                <p style={{ fontSize: 14, fontWeight: 300, color: '#6b6880', lineHeight: 1.6, marginBottom: 20 }}>{car.desc}</p>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                  <span style={{ fontSize: 16, fontWeight: 600, color: '#C8A97E' }}>{car.price}</span>
                  <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: '#C8A97E', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                    View Details <ArrowRight size={14} />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* WHY CHOOSE US */}
      <section style={{ background: '#0d0d14', padding: '100px 0' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
          <div style={{ textAlign: 'center', marginBottom: 60 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, justifyContent: 'center', marginBottom: 16 }}>
              <div className="gold-line" />
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Why Mercedes-Benz</span>
              <div className="gold-line" />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 40, fontWeight: 300, color: '#fff' }}>The Pinnacle of Luxury in Pakistan</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 24 }}>
            {[
              { icon: <Shield size={28} color="#C8A97E" />, title: 'Unmatched Safety', desc: 'Industry-leading safety systems protect you and your loved ones on every journey.' },
              { icon: <Zap size={28} color="#C8A97E" />, title: 'Peak Performance', desc: 'From AMG handcrafted engines to EQ electric powertrains — power redefined.' },
              { icon: <Award size={28} color="#C8A97E" />, title: 'Bespoke Service', desc: 'Tailored automotive services for the most discerning tastes in Pakistan.' },
            ].map((item) => (
              <div key={item.title} className="card-hover" style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, padding: '44px 32px', textAlign: 'center' }}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(200,169,126,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  {item.icon}
                </div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff', marginBottom: 12 }}>{item.title}</h3>
                <p style={{ fontSize: 14, fontWeight: 300, color: '#6b6880', lineHeight: 1.7 }}>{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section style={{ maxWidth: 1440, margin: '0 auto', padding: '100px 80px' }}>
        <div style={{ background: 'linear-gradient(135deg, #1a1a24 0%, #111118 100%)', border: '1px solid rgba(200,169,126,0.15)', borderRadius: 12, padding: '72px 60px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
          <div style={{ maxWidth: 500 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 300, color: '#fff', marginBottom: 16 }}>Ready to Experience <span style={{ color: '#C8A97E' }}>Excellence</span>?</h2>
            <p style={{ fontSize: 15, fontWeight: 300, color: '#7a7788', lineHeight: 1.7 }}>Book a test drive today and feel the difference that only a Mercedes-Benz can deliver.</p>
          </div>
          <div style={{ display: 'flex', gap: 16 }}>
            <button className="gold-btn">Book Test Drive</button>
            <button className="gold-btn" style={{ border: '1px solid rgba(200,169,126,0.3)', color: '#b0adb8' }}>Contact Dealer</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(200,169,126,0.1)', background: '#0a0a0f' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '60px 80px 32px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1.5fr', gap: 48 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 20 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Star size={14} color="#C8A97E" />
              </div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: '#fff' }}>Mercedes-Benz</span>
            </div>
            <p style={{ fontSize: 13, fontWeight: 300, color: '#5a5768', lineHeight: 1.7, maxWidth: 280 }}>The pinnacle of luxury in Pakistan. Bespoke automotive services tailored to the most discerning tastes.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Explore</h4>
            {['Cars', 'My Orders', 'Wishlist', 'Test Drive'].map((l) => (
              <a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 12, transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.target.style.color = '#C8A97E')} onMouseLeave={(e) => (e.target.style.color = '#6b6880')}>{l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Service</h4>
            {['Maintenance', 'Genuine Parts', 'Contact', 'Legal'].map((l) => (
              <a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 12, transition: 'color 0.3s' }}
                onMouseEnter={(e) => (e.target.style.color = '#C8A97E')} onMouseLeave={(e) => (e.target.style.color = '#6b6880')}>{l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Contact</h4>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <Phone size={14} color="#C8A97E" /><span style={{ fontSize: 13, color: '#6b6880' }}>+92 300 1234567</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 14 }}>
              <Mail size={14} color="#C8A97E" /><span style={{ fontSize: 13, color: '#6b6880' }}>info@mercedes.pk</span>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
              <MapPin size={14} color="#C8A97E" /><span style={{ fontSize: 13, color: '#6b6880' }}>Lahore, Pakistan</span>
            </div>
          </div>
        </div>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '20px 80px', borderTop: '1px solid rgba(200,169,126,0.08)' }}>
          <p style={{ fontSize: 12, color: '#3a3748', textAlign: 'center' }}>© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
