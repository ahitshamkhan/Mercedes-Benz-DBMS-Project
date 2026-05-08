import { useState, useMemo } from 'react';
import { Star, Search, SlidersHorizontal, X, Heart, Eye, Grid3X3, List, ChevronDown } from 'lucide-react';

const CARS = [
  { id: 1, name: 'S-Class 500', category: 'Sedan', price: 85000000, year: 2024, power: '429 HP', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80', rating: 4.9 },
  { id: 2, name: 'AMG GT Coupé', category: 'AMG', price: 120000000, year: 2024, power: '585 HP', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&q=80', rating: 5.0 },
  { id: 3, name: 'G-Class G63', category: 'SUV', price: 150000000, year: 2024, power: '577 HP', image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=500&q=80', rating: 4.8 },
  { id: 4, name: 'EQS 580', category: 'Electric', price: 95000000, year: 2024, power: '516 HP', image: 'https://images.unsplash.com/photo-1625231334401-67c9eef63a78?w=500&q=80', rating: 4.7 },
  { id: 5, name: 'C-Class 300', category: 'Sedan', price: 45000000, year: 2024, power: '258 HP', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=500&q=80', rating: 4.6 },
  { id: 6, name: 'GLE 450', category: 'SUV', price: 75000000, year: 2023, power: '362 HP', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=500&q=80', rating: 4.5 },
  { id: 7, name: 'AMG C63 S', category: 'AMG', price: 98000000, year: 2024, power: '671 HP', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=500&q=80', rating: 4.9 },
  { id: 8, name: 'EQB 300', category: 'Electric', price: 55000000, year: 2023, power: '228 HP', image: 'https://images.unsplash.com/photo-1625231334401-67c9eef63a78?w=500&q=80', rating: 4.4 },
];

const CATEGORIES = ['All', 'Sedan', 'SUV', 'AMG', 'Electric'];
const SORT_OPTIONS = ['Relevance', 'Price: Low to High', 'Price: High to Low', 'Newest', 'Rating'];
const PRICE_RANGES = ['Any', 'Under 50M', '50M - 100M', 'Over 100M'];

export default function SearchResults() {
  const [query, setQuery] = useState('Mercedes');
  const [category, setCategory] = useState('All');
  const [sortBy, setSortBy] = useState('Relevance');
  const [priceRange, setPriceRange] = useState('Any');
  const [viewMode, setViewMode] = useState('grid');
  const [showFilters, setShowFilters] = useState(false);
  const [liked, setLiked] = useState([]);

  const toggleLike = (id) => setLiked((prev) => prev.includes(id) ? prev.filter((x) => x !== id) : [...prev, id]);

  const results = useMemo(() => {
    let data = [...CARS];

    if (query) data = data.filter((c) => c.name.toLowerCase().includes(query.toLowerCase()) || c.category.toLowerCase().includes(query.toLowerCase()));
    if (category !== 'All') data = data.filter((c) => c.category === category);
    if (priceRange === 'Under 50M') data = data.filter((c) => c.price < 50000000);
    else if (priceRange === '50M - 100M') data = data.filter((c) => c.price >= 50000000 && c.price <= 100000000);
    else if (priceRange === 'Over 100M') data = data.filter((c) => c.price > 100000000);

    if (sortBy === 'Price: Low to High') data.sort((a, b) => a.price - b.price);
    else if (sortBy === 'Price: High to Low') data.sort((a, b) => b.price - a.price);
    else if (sortBy === 'Newest') data.sort((a, b) => b.year - a.year);
    else if (sortBy === 'Rating') data.sort((a, b) => b.rating - a.rating);

    return data;
  }, [query, category, sortBy, priceRange]);

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
        .card-hover:hover { transform:translateY(-4px); box-shadow:0 0 20px rgba(200,169,126,0.06); }
        .img-zoom { transition:transform 0.6s; }
        .img-zoom:hover { transform:scale(1.05); }
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
          <div style={{ flex: 1, maxWidth: 480, margin: '0 48px', position: 'relative' }}>
            <Search size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 13 }} />
            <input value={query} onChange={(e) => setQuery(e.target.value)} placeholder="Search models, categories..."
              style={{ width: '100%', padding: '11px 16px 11px 44px', background: '#111118', border: '1px solid rgba(200,169,126,0.12)', borderRadius: 6, color: '#e4e1eb', fontSize: 13, fontFamily: "'DM Sans', sans-serif" }} />
            {query && <button onClick={() => setQuery('')} style={{ position: 'absolute', right: 12, top: 12, background: 'none', border: 'none', cursor: 'pointer' }}><X size={16} color="#4e453b" /></button>}
          </div>
          <button className="gold-btn" style={{ padding: '8px 22px', fontSize: 11 }}>My Account</button>
        </div>
      </nav>

      <div style={{ paddingTop: 100, maxWidth: 1440, margin: '0 auto', padding: '100px 80px 60px' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 32 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 300, color: '#fff', marginBottom: 6 }}>
              {query ? <>Results for "<span style={{ color: '#C8A97E' }}>{query}</span>"</> : 'All Vehicles'}
            </h1>
            <p style={{ fontSize: 14, color: '#5a5768' }}>{results.length} {results.length === 1 ? 'vehicle' : 'vehicles'} found</p>
          </div>
          <div style={{ display: 'flex', gap: 12, alignItems: 'center' }}>
            <button onClick={() => setShowFilters(!showFilters)} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 16px', background: showFilters ? 'rgba(200,169,126,0.1)' : 'transparent', border: '1px solid rgba(200,169,126,0.2)', borderRadius: 4, color: '#C8A97E', fontSize: 12, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
              <SlidersHorizontal size={14} /> Filters
            </button>
            <div style={{ display: 'flex', border: '1px solid rgba(200,169,126,0.15)', borderRadius: 4, overflow: 'hidden' }}>
              <button onClick={() => setViewMode('grid')} style={{ padding: '8px 12px', background: viewMode === 'grid' ? 'rgba(200,169,126,0.1)' : 'transparent', border: 'none', color: viewMode === 'grid' ? '#C8A97E' : '#4e453b', cursor: 'pointer' }}><Grid3X3 size={16} /></button>
              <button onClick={() => setViewMode('list')} style={{ padding: '8px 12px', background: viewMode === 'list' ? 'rgba(200,169,126,0.1)' : 'transparent', border: 'none', borderLeft: '1px solid rgba(200,169,126,0.1)', color: viewMode === 'list' ? '#C8A97E' : '#4e453b', cursor: 'pointer' }}><List size={16} /></button>
            </div>
          </div>
        </div>

        {/* Filters Panel */}
        {showFilters && (
          <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '24px 28px', marginBottom: 28, display: 'flex', gap: 32, alignItems: 'flex-end' }}>
            <div style={{ flex: 1 }}>
              <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 10 }}>Category</p>
              <div style={{ display: 'flex', gap: 6 }}>
                {CATEGORIES.map((c) => (
                  <button key={c} onClick={() => setCategory(c)} style={{ padding: '7px 16px', fontSize: 12, border: category === c ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.12)', background: category === c ? '#C8A97E' : 'transparent', color: category === c ? '#0a0a0f' : '#7a7788', borderRadius: 2, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>{c}</button>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 10 }}>Price Range</p>
              <div style={{ display: 'flex', gap: 6 }}>
                {PRICE_RANGES.map((p) => (
                  <button key={p} onClick={() => setPriceRange(p)} style={{ padding: '7px 14px', fontSize: 12, border: priceRange === p ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.12)', background: priceRange === p ? '#C8A97E' : 'transparent', color: priceRange === p ? '#0a0a0f' : '#7a7788', borderRadius: 2, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>{p}</button>
                ))}
              </div>
            </div>
            <div>
              <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 10 }}>Sort By</p>
              <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} style={{ padding: '8px 14px', background: '#0d0d14', border: '1px solid rgba(200,169,126,0.12)', borderRadius: 4, color: '#e4e1eb', fontSize: 12, fontFamily: "'DM Sans', sans-serif", appearance: 'none', cursor: 'pointer', minWidth: 140 }}>
                {SORT_OPTIONS.map((s) => <option key={s} value={s}>{s}</option>)}
              </select>
            </div>
          </div>
        )}

        {/* RESULTS */}
        {viewMode === 'grid' ? (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 20 }}>
            {results.map((car) => (
              <div key={car.id} className="card-hover" style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, overflow: 'hidden' }}>
                <div style={{ position: 'relative', overflow: 'hidden' }}>
                  <img className="img-zoom" src={car.image} alt={car.name} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
                  <button onClick={() => toggleLike(car.id)} style={{ position: 'absolute', top: 12, right: 12, width: 36, height: 36, borderRadius: '50%', background: 'rgba(10,10,15,0.6)', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', backdropFilter: 'blur(6px)' }}>
                    <Heart size={16} color={liked.includes(car.id) ? '#e74c3c' : '#C8A97E'} fill={liked.includes(car.id) ? '#e74c3c' : 'none'} />
                  </button>
                  <span style={{ position: 'absolute', bottom: 12, left: 12, padding: '4px 12px', background: 'rgba(10,10,15,0.7)', borderRadius: 20, fontSize: 10, fontWeight: 500, color: '#C8A97E', letterSpacing: '0.08em', textTransform: 'uppercase', backdropFilter: 'blur(6px)' }}>{car.category}</span>
                </div>
                <div style={{ padding: '20px' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 400, color: '#fff', marginBottom: 8 }}>{car.name}</h3>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                    <span style={{ fontSize: 16, fontWeight: 600, color: '#C8A97E' }}>{fmt(car.price)}</span>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 4 }}>
                      <Star size={12} color="#C8A97E" fill="#C8A97E" />
                      <span style={{ fontSize: 12, color: '#C8A97E' }}>{car.rating}</span>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 12, fontSize: 12, color: '#5a5768' }}>
                    <span>{car.power}</span><span>•</span><span>{car.year}</span>
                  </div>
                  <button style={{ width: '100%', marginTop: 16, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px', background: 'none', border: '1px solid rgba(200,169,126,0.2)', borderRadius: 4, color: '#C8A97E', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                    <Eye size={14} /> View Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        ) : (
          <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
            {results.map((car) => (
              <div key={car.id} className="card-hover" style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, overflow: 'hidden', display: 'grid', gridTemplateColumns: '200px 1fr auto', alignItems: 'center' }}>
                <img src={car.image} alt={car.name} style={{ width: '100%', height: 120, objectFit: 'cover' }} />
                <div style={{ padding: '16px 28px' }}>
                  <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C8A97E' }}>{car.category}</span>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 400, color: '#fff', margin: '4px 0 8px' }}>{car.name}</h3>
                  <div style={{ display: 'flex', gap: 16, fontSize: 12, color: '#6b6880' }}>
                    <span>{car.power}</span><span>{car.year}</span>
                    <span style={{ display: 'flex', alignItems: 'center', gap: 3 }}><Star size={11} color="#C8A97E" fill="#C8A97E" /> {car.rating}</span>
                  </div>
                </div>
                <div style={{ padding: '0 28px', textAlign: 'right' }}>
                  <p style={{ fontSize: 18, fontWeight: 600, color: '#C8A97E', marginBottom: 10 }}>{fmt(car.price)}</p>
                  <button style={{ display: 'inline-flex', alignItems: 'center', gap: 5, padding: '8px 16px', background: 'none', border: '1px solid rgba(200,169,126,0.2)', borderRadius: 4, color: '#C8A97E', fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}><Eye size={14} /> Details</button>
                </div>
              </div>
            ))}
          </div>
        )}

        {results.length === 0 && (
          <div style={{ textAlign: 'center', padding: '80px 0' }}>
            <Search size={40} color="#2a2931" style={{ marginBottom: 16 }} />
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 300, color: '#fff', marginBottom: 8 }}>No vehicles found</h2>
            <p style={{ fontSize: 14, color: '#5a5768' }}>Try adjusting your search or filters.</p>
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
