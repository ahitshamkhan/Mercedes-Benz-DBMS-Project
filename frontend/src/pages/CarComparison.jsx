import { useState } from 'react';
import { Star, Plus, X, ChevronDown, Zap, Gauge, Fuel, Weight, Calendar, ShieldCheck, ArrowRight } from 'lucide-react';

const ALL_CARS = [
  { id: 1, name: 'S-Class 500', category: 'Sedan', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&q=80', price: 'PKR 85,000,000', engine: '3.0L I6 Turbo', power: '429 HP', torque: '520 Nm', topSpeed: '250 km/h', accel: '4.9 sec', fuel: '9.2 L/100km', weight: '2,065 kg', seats: 5, safety: 5, year: 2024 },
  { id: 2, name: 'AMG GT Coupé', category: 'AMG', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&q=80', price: 'PKR 120,000,000', engine: '4.0L V8 Biturbo', power: '585 HP', torque: '800 Nm', topSpeed: '315 km/h', accel: '3.2 sec', fuel: '12.5 L/100km', weight: '1,785 kg', seats: 2, safety: 5, year: 2024 },
  { id: 3, name: 'G-Class G63', category: 'SUV', image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=400&q=80', price: 'PKR 150,000,000', engine: '4.0L V8 Biturbo', power: '577 HP', torque: '850 Nm', topSpeed: '220 km/h', accel: '4.5 sec', fuel: '16.1 L/100km', weight: '2,560 kg', seats: 5, safety: 5, year: 2024 },
  { id: 4, name: 'EQS 580', category: 'Electric', image: 'https://images.unsplash.com/photo-1625231334401-67c9eef63a78?w=400&q=80', price: 'PKR 95,000,000', engine: 'Dual Electric Motor', power: '516 HP', torque: '855 Nm', topSpeed: '210 km/h', accel: '4.3 sec', fuel: '0 L/100km', weight: '2,480 kg', seats: 5, safety: 5, year: 2024 },
  { id: 5, name: 'C-Class 300', category: 'Sedan', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=400&q=80', price: 'PKR 45,000,000', engine: '2.0L I4 Turbo', power: '258 HP', torque: '400 Nm', topSpeed: '250 km/h', accel: '5.9 sec', fuel: '7.3 L/100km', weight: '1,710 kg', seats: 5, safety: 5, year: 2024 },
];

const SPEC_ROWS = [
  { key: 'price', label: 'Price', icon: <Star size={14} color="#C8A97E" /> },
  { key: 'engine', label: 'Engine', icon: <Gauge size={14} color="#C8A97E" /> },
  { key: 'power', label: 'Power', icon: <Zap size={14} color="#C8A97E" /> },
  { key: 'torque', label: 'Torque', icon: <Zap size={14} color="#C8A97E" /> },
  { key: 'topSpeed', label: 'Top Speed', icon: <Gauge size={14} color="#C8A97E" /> },
  { key: 'accel', label: '0-100 km/h', icon: <Gauge size={14} color="#C8A97E" /> },
  { key: 'fuel', label: 'Fuel Economy', icon: <Fuel size={14} color="#C8A97E" /> },
  { key: 'weight', label: 'Curb Weight', icon: <Weight size={14} color="#C8A97E" /> },
  { key: 'seats', label: 'Seats', icon: <Calendar size={14} color="#C8A97E" /> },
  { key: 'safety', label: 'Safety Rating', icon: <ShieldCheck size={14} color="#C8A97E" /> },
];

export default function CarComparison() {
  const [selected, setSelected] = useState([ALL_CARS[0], ALL_CARS[1]]);
  const [showPicker, setShowPicker] = useState(null);
  const [highlightDiffs, setHighlightDiffs] = useState(false);

  const addSlot = () => { if (selected.length < 3) setShowPicker(selected.length); };
  const removeCar = (idx) => setSelected((prev) => prev.filter((_, i) => i !== idx));
  const pickCar = (car) => {
    setSelected((prev) => {
      const next = [...prev];
      if (showPicker < next.length) next[showPicker] = car;
      else next.push(car);
      return next;
    });
    setShowPicker(null);
  };

  const isDiff = (key) => {
    if (selected.length < 2) return false;
    const vals = selected.map((c) => c[key]);
    return new Set(vals).size > 1;
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
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Compare</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: 48 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 300, color: '#fff', marginBottom: 8 }}>Compare Models</h1>
            <p style={{ fontSize: 15, fontWeight: 300, color: '#6b6880' }}>Select up to 3 vehicles to compare specifications side by side.</p>
          </div>
          <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }} onClick={() => setHighlightDiffs(!highlightDiffs)}>
            <div style={{ width: 36, height: 20, borderRadius: 10, background: highlightDiffs ? '#C8A97E' : '#1f1f26', padding: 2, transition: 'all 0.3s', display: 'flex', alignItems: highlightDiffs ? 'center' : 'center', justifyContent: highlightDiffs ? 'flex-end' : 'flex-start' }}>
              <div style={{ width: 16, height: 16, borderRadius: '50%', background: highlightDiffs ? '#0a0a0f' : '#4e453b', transition: 'all 0.3s' }} />
            </div>
            <span style={{ fontSize: 12, color: '#6b6880' }}>Highlight differences</span>
          </label>
        </div>

        {/* CAR HEADERS */}
        <div style={{ display: 'grid', gridTemplateColumns: `200px repeat(${Math.max(selected.length, 1)}, 1fr) ${selected.length < 3 ? 'auto' : ''}`, gap: 16, marginBottom: 0 }}>
          <div />
          {selected.map((car, i) => (
            <div key={car.id} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: '8px 8px 0 0', overflow: 'hidden', position: 'relative' }}>
              <button onClick={() => removeCar(i)} style={{ position: 'absolute', top: 10, right: 10, width: 28, height: 28, borderRadius: '50%', background: 'rgba(10,10,15,0.7)', border: '1px solid rgba(200,169,126,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', zIndex: 2 }}>
                <X size={14} color="#6b6880" />
              </button>
              <img src={car.image} alt={car.name} style={{ width: '100%', height: 160, objectFit: 'cover' }} />
              <div style={{ padding: '16px 20px', textAlign: 'center' }}>
                <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C8A97E' }}>{car.category}</span>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 400, color: '#fff', margin: '4px 0 8px' }}>{car.name}</h3>
                <button onClick={() => setShowPicker(i)} style={{ background: 'none', border: '1px solid rgba(200,169,126,0.15)', padding: '6px 14px', borderRadius: 4, color: '#6b6880', fontSize: 11, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", display: 'flex', alignItems: 'center', gap: 4, margin: '0 auto' }}>
                  Change <ChevronDown size={12} />
                </button>
              </div>
            </div>
          ))}
          {selected.length < 3 && (
            <div onClick={addSlot} style={{ background: '#111118', border: '2px dashed rgba(200,169,126,0.15)', borderRadius: '8px 8px 0 0', display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: 280, cursor: 'pointer', transition: 'border-color 0.3s' }}
              onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(200,169,126,0.4)'}
              onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(200,169,126,0.15)'}>
              <Plus size={28} color="#4e453b" />
              <span style={{ fontSize: 12, color: '#4e453b', marginTop: 8 }}>Add Vehicle</span>
            </div>
          )}
        </div>

        {/* SPECS TABLE */}
        <div style={{ border: '1px solid rgba(200,169,126,0.08)', borderRadius: '0 0 8px 8px', overflow: 'hidden' }}>
          {SPEC_ROWS.map((row, ri) => {
            const diff = isDiff(row.key);
            return (
              <div key={row.key} style={{
                display: 'grid', gridTemplateColumns: `200px repeat(${selected.length}, 1fr)`,
                background: ri % 2 === 0 ? '#0d0d14' : '#111118',
                borderBottom: '1px solid rgba(200,169,126,0.04)',
              }}>
                <div style={{ padding: '16px 20px', display: 'flex', alignItems: 'center', gap: 10 }}>
                  {row.icon}
                  <span style={{ fontSize: 13, fontWeight: 500, color: '#9a97a5' }}>{row.label}</span>
                </div>
                {selected.map((car) => (
                  <div key={car.id} style={{ padding: '16px 20px', textAlign: 'center', background: highlightDiffs && diff ? 'rgba(200,169,126,0.04)' : 'transparent' }}>
                    <span style={{ fontSize: 14, fontWeight: 500, color: highlightDiffs && diff ? '#C8A97E' : '#e4e1eb' }}>
                      {row.key === 'safety' ? '★'.repeat(car[row.key]) : car[row.key]}
                    </span>
                  </div>
                ))}
              </div>
            );
          })}
        </div>

        {/* Actions */}
        <div style={{ display: 'grid', gridTemplateColumns: `200px repeat(${selected.length}, 1fr)`, gap: 16, marginTop: 20 }}>
          <div />
          {selected.map((car) => (
            <button key={car.id} className="gold-btn" style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, width: '100%' }}>
              Configure <ArrowRight size={14} />
            </button>
          ))}
        </div>
      </div>

      {/* PICKER MODAL */}
      {showPicker !== null && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setShowPicker(null)}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.15)', borderRadius: 8, padding: '32px', width: 500, maxHeight: '80vh', overflow: 'auto' }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 400, color: '#fff', marginBottom: 20 }}>Select Vehicle</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {ALL_CARS.filter((c) => !selected.find((s) => s.id === c.id) || (showPicker < selected.length && selected[showPicker].id === c.id)).map((car) => (
                <div key={car.id} onClick={() => pickCar(car)} style={{ display: 'flex', alignItems: 'center', gap: 16, padding: '14px 16px', background: '#0d0d14', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 6, cursor: 'pointer', transition: 'border-color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(200,169,126,0.3)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(200,169,126,0.08)'}>
                  <img src={car.image} alt={car.name} style={{ width: 64, height: 48, borderRadius: 4, objectFit: 'cover' }} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>{car.name}</p>
                    <p style={{ fontSize: 12, color: '#6b6880' }}>{car.category} • {car.power}</p>
                  </div>
                  <span style={{ fontSize: 13, color: '#C8A97E', fontWeight: 500 }}>{car.price}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      )}

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(200,169,126,0.1)', marginTop: 80, padding: '40px 0 20px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
          <p style={{ fontSize: 12, color: '#3a3748', textAlign: 'center' }}>© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
