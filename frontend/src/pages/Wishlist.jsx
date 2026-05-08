import { useState } from 'react';
import { Star, Heart, Trash2, ArrowRight, ShoppingCart, Eye, HeartOff } from 'lucide-react';

const INITIAL_ITEMS = [
  { id: 1, name: 'Mercedes-AMG GT Black Series', category: 'AMG Performance', price: 'PKR 145,000,000', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&q=80', rating: 5.0, year: 2024 },
  { id: 2, name: 'S-Class Saloon', category: 'Luxury Sedan', price: 'PKR 85,000,000', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80', rating: 4.9, year: 2024 },
  { id: 3, name: 'G-Class G63 AMG', category: 'SUV', price: 'PKR 150,000,000', image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=500&q=80', rating: 4.8, year: 2024 },
];

export default function Wishlist() {
  const [items, setItems] = useState(INITIAL_ITEMS);
  const [removingId, setRemovingId] = useState(null);

  const removeItem = (id) => {
    setRemovingId(id);
    setTimeout(() => {
      setItems((prev) => prev.filter((item) => item.id !== id));
      setRemovingId(null);
    }, 300);
  };

  const isEmpty = items.length === 0;

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        .gold-btn { border:1px solid #C8A97E; background:transparent; color:#C8A97E; padding:14px 32px; font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; letter-spacing:0.12em; text-transform:uppercase; cursor:pointer; transition:all 0.4s; }
        .gold-btn:hover { background:#C8A97E; color:#0a0a0f; }
        .glass { background:rgba(10,10,15,0.85); backdrop-filter:blur(12px); }
        .gold-line { width:60px; height:1px; background:#C8A97E; }
        .card-hover { transition:transform 0.4s, box-shadow 0.4s, opacity 0.3s; }
        .card-hover:hover { transform:translateY(-4px); box-shadow:0 0 25px rgba(200,169,126,0.06); }
        .img-zoom { transition:transform 0.6s; }
        .img-zoom:hover { transform:scale(1.05); }
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
            {['Cars', 'Service', 'Wishlist', 'My Orders'].map((l) => (
              <a key={l} href="#" style={{ fontSize: 13, fontWeight: l === 'Wishlist' ? 500 : 300, color: l === 'Wishlist' ? '#C8A97E' : '#b0adb8', letterSpacing: '0.05em' }}>{l}</a>
            ))}
          </div>
          <button className="gold-btn" style={{ padding: '8px 22px', fontSize: 11 }}>My Account</button>
        </div>
      </nav>

      {/* CONTENT */}
      <div style={{ paddingTop: 100, maxWidth: 1440, margin: '0 auto', padding: '100px 80px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div className="gold-line" />
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>My Collection</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 300, color: '#fff', marginBottom: 8 }}>Your Wishlist</h1>
            <p style={{ fontSize: 15, fontWeight: 300, color: '#6b6880' }}>Explore your curated selection of automotive excellence.</p>
          </div>
          {!isEmpty && (
            <span style={{ fontSize: 13, color: '#6b6880' }}>{items.length} {items.length === 1 ? 'vehicle' : 'vehicles'} saved</span>
          )}
        </div>

        {isEmpty ? (
          /* EMPTY STATE */
          <div style={{ textAlign: 'center', padding: '100px 0' }}>
            <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(200,169,126,0.06)', border: '1px solid rgba(200,169,126,0.12)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
              <HeartOff size={32} color="#2a2931" />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 300, color: '#fff', marginBottom: 12 }}>Your wishlist is empty.</h2>
            <p style={{ fontSize: 14, fontWeight: 300, color: '#5a5768', lineHeight: 1.7, maxWidth: 400, margin: '0 auto 32px' }}>
              Discover our latest models and save your favorites to view them later in your private collection.
            </p>
            <button className="gold-btn" style={{ display: 'inline-flex', alignItems: 'center', gap: 8 }}>
              Start Exploring <ArrowRight size={16} />
            </button>
          </div>
        ) : (
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 48 }}>
            {/* CAR CARDS */}
            <div style={{ display: 'flex', flexDirection: 'column', gap: 20 }}>
              {items.map((car) => (
                <div key={car.id} className="card-hover" style={{
                  background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, overflow: 'hidden',
                  opacity: removingId === car.id ? 0 : 1, transform: removingId === car.id ? 'translateX(40px)' : 'none',
                }}>
                  <div style={{ display: 'grid', gridTemplateColumns: '220px 1fr', alignItems: 'stretch' }}>
                    <div style={{ overflow: 'hidden' }}>
                      <img className="img-zoom" src={car.image} alt={car.name} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 180 }} />
                    </div>
                    <div style={{ padding: '24px 28px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                      <div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 6 }}>
                          <div>
                            <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C8A97E' }}>{car.category}</span>
                            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff', marginTop: 4 }}>{car.name}</h3>
                          </div>
                          <button onClick={() => removeItem(car.id)} style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4 }}>
                            <Trash2 size={16} color="#5a5768" />
                          </button>
                        </div>
                        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 12 }}>
                          <div style={{ display: 'flex', alignItems: 'center', gap: 3 }}>
                            <Star size={12} color="#C8A97E" fill="#C8A97E" />
                            <span style={{ fontSize: 12, color: '#C8A97E' }}>{car.rating}</span>
                          </div>
                          <span style={{ fontSize: 12, color: '#3a3748' }}>•</span>
                          <span style={{ fontSize: 12, color: '#5a5768' }}>{car.year}</span>
                        </div>
                        <p style={{ fontSize: 18, fontWeight: 600, color: '#C8A97E' }}>{car.price}</p>
                      </div>
                      <div style={{ display: 'flex', gap: 10, marginTop: 16 }}>
                        <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px', background: 'none', border: '1px solid rgba(200,169,126,0.2)', borderRadius: 4, color: '#C8A97E', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                          <Eye size={14} /> Details
                        </button>
                        <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px', background: 'rgba(200,169,126,0.1)', border: '1px solid #C8A97E', borderRadius: 4, color: '#C8A97E', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                          <ShoppingCart size={14} /> Order
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* SIDEBAR — Summary */}
            <div>
              <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, padding: '32px 28px', position: 'sticky', top: 100 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff', marginBottom: 24 }}>Wishlist Summary</h3>
                {items.map((car) => (
                  <div key={car.id} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                    <img src={car.image} alt={car.name} style={{ width: 48, height: 48, borderRadius: 6, objectFit: 'cover' }} />
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 13, fontWeight: 500, color: '#e4e1eb' }}>{car.name}</p>
                      <p style={{ fontSize: 12, color: '#C8A97E' }}>{car.price}</p>
                    </div>
                    <Heart size={14} color="#C8A97E" fill="#C8A97E" />
                  </div>
                ))}
                <div style={{ borderTop: '1px solid rgba(200,169,126,0.1)', paddingTop: 16, marginTop: 8 }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 6 }}>
                    <span style={{ fontSize: 13, color: '#6b6880' }}>Total Vehicles</span>
                    <span style={{ fontSize: 13, color: '#e4e1eb', fontWeight: 500 }}>{items.length}</span>
                  </div>
                </div>
                <button className="gold-btn" style={{ width: '100%', marginTop: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                  Compare All <ArrowRight size={16} />
                </button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(200,169,126,0.1)', marginTop: 80, padding: '40px 0 20px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Star size={14} color="#C8A97E" /></div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: '#fff' }}>Mercedes-Benz</span>
            </div>
            <p style={{ fontSize: 13, fontWeight: 300, color: '#5a5768', lineHeight: 1.7, maxWidth: 280 }}>Defining the pinnacle of automotive engineering for over a century.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Explore</h4>
            {['Cars', 'My Orders', 'Wishlist', 'Test Drive', 'Service', 'Admin'].map((l) => (
              <a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10 }}>{l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Legal</h4>
            {['Contact', 'Legal'].map((l) => (
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
