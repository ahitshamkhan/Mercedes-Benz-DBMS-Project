import { useState } from 'react';
import { Star, LayoutDashboard, Warehouse, Users, FileBarChart, Plus, Search, Edit3, Trash2, Eye, X, Check, Car, Filter } from 'lucide-react';

const INITIAL_CARS = [
  { id: 1, name: 'S-Class 500', category: 'Sedan', price: 85000000, year: 2024, stock: 12, status: 'Active', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=200&q=80' },
  { id: 2, name: 'AMG GT Coupé', category: 'AMG', price: 120000000, year: 2024, stock: 5, status: 'Active', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=200&q=80' },
  { id: 3, name: 'G-Class G63', category: 'SUV', price: 150000000, year: 2024, stock: 8, status: 'Active', image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=200&q=80' },
  { id: 4, name: 'EQS 580', category: 'Electric', price: 95000000, year: 2024, stock: 3, status: 'Active', image: 'https://images.unsplash.com/photo-1625231334401-67c9eef63a78?w=200&q=80' },
  { id: 5, name: 'C-Class 300', category: 'Sedan', price: 45000000, year: 2024, stock: 15, status: 'Active', image: 'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=200&q=80' },
  { id: 6, name: 'GLE 450', category: 'SUV', price: 75000000, year: 2023, stock: 0, status: 'Out of Stock', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=200&q=80' },
  { id: 7, name: 'AMG C63 S', category: 'AMG', price: 98000000, year: 2024, stock: 4, status: 'Active', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=200&q=80' },
  { id: 8, name: 'Maybach S680', category: 'Luxury', price: 220000000, year: 2024, stock: 1, status: 'Low Stock', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=200&q=80' },
];

const SIDEBAR = [
  { label: 'Dashboard', icon: <LayoutDashboard size={18} />, path: '/admin' },
  { label: 'Manage Cars', icon: <Car size={18} />, path: '/admin/cars', active: true },
  { label: 'Inventory', icon: <Warehouse size={18} />, path: '/admin/inventory' },
  { label: 'Customers', icon: <Users size={18} />, path: '/admin/customers' },
  { label: 'Reports', icon: <FileBarChart size={18} />, path: '/admin/reports' },
];

const STATUS_COLORS = { Active: '#2ecc71', 'Low Stock': '#f39c12', 'Out of Stock': '#e74c3c' };

export default function ManageCars() {
  const [cars, setCars] = useState(INITIAL_CARS);
  const [search, setSearch] = useState('');
  const [catFilter, setCatFilter] = useState('All');
  const [showModal, setShowModal] = useState(false);
  const [editCar, setEditCar] = useState(null);
  const [deleteId, setDeleteId] = useState(null);

  const categories = ['All', ...new Set(INITIAL_CARS.map((c) => c.category))];
  const filtered = cars.filter((c) => {
    const ms = c.name.toLowerCase().includes(search.toLowerCase());
    const mc = catFilter === 'All' || c.category === catFilter;
    return ms && mc;
  });

  const fmt = (n) => `PKR ${(n / 1000000).toFixed(0)}M`;

  const openAdd = () => { setEditCar({ id: Date.now(), name: '', category: 'Sedan', price: 0, year: 2024, stock: 0, status: 'Active', image: '' }); setShowModal(true); };
  const openEdit = (car) => { setEditCar({ ...car }); setShowModal(true); };
  const saveCar = () => {
    setCars((prev) => {
      const exists = prev.find((c) => c.id === editCar.id);
      if (exists) return prev.map((c) => c.id === editCar.id ? editCar : c);
      return [...prev, editCar];
    });
    setShowModal(false);
    setEditCar(null);
  };
  const confirmDelete = () => { setCars((prev) => prev.filter((c) => c.id !== deleteId)); setDeleteId(null); };

  const inputStyle = { width: '100%', padding: '12px 14px', background: '#0d0d14', border: '1px solid rgba(200,169,126,0.12)', borderRadius: 4, color: '#e4e1eb', fontSize: 13, fontFamily: "'DM Sans', sans-serif", outline: 'none' };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', minHeight: '100vh', display: 'flex' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        input:focus, select:focus { border-color:#C8A97E !important; }
        a { text-decoration:none; color:inherit; }
      `}</style>

      {/* SIDEBAR */}
      <aside style={{ width: 240, background: '#0d0d14', borderRight: '1px solid rgba(200,169,126,0.08)', padding: '28px 0', position: 'fixed', top: 0, bottom: 0 }}>
        <div style={{ padding: '0 24px', marginBottom: 36 }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
            <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1.5px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Star size={14} color="#C8A97E" /></div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 16, color: '#fff' }}>MB Admin</span>
          </div>
        </div>
        <nav>
          {SIDEBAR.map((link) => (
            <a key={link.label} href={link.path} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '11px 24px',
              background: link.active ? 'rgba(200,169,126,0.06)' : 'transparent',
              borderLeft: link.active ? '2px solid #C8A97E' : '2px solid transparent',
              color: link.active ? '#C8A97E' : '#5a5768', fontSize: 13,
            }}>{link.icon} {link.label}</a>
          ))}
        </nav>
      </aside>

      {/* MAIN */}
      <main style={{ marginLeft: 240, flex: 1, padding: '32px 40px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
          <div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 300, color: '#fff', marginBottom: 4 }}>Manage Cars</h1>
            <p style={{ fontSize: 13, color: '#5a5768' }}>{cars.length} vehicles in inventory</p>
          </div>
          <button onClick={openAdd} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 20px', background: '#C8A97E', border: 'none', borderRadius: 4, color: '#0a0a0f', fontSize: 12, fontWeight: 600, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
            <Plus size={16} /> Add Vehicle
          </button>
        </div>

        {/* Search + Filter */}
        <div style={{ display: 'flex', gap: 12, marginBottom: 24 }}>
          <div style={{ flex: 1, position: 'relative' }}>
            <Search size={15} color="#4e453b" style={{ position: 'absolute', left: 14, top: 12 }} />
            <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search vehicles..."
              style={{ ...inputStyle, paddingLeft: 40, background: '#111118' }} />
          </div>
          <div style={{ display: 'flex', gap: 6 }}>
            {categories.map((c) => (
              <button key={c} onClick={() => setCatFilter(c)} style={{
                padding: '8px 16px', fontSize: 11, fontWeight: 500,
                border: catFilter === c ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.12)',
                background: catFilter === c ? '#C8A97E' : 'transparent',
                color: catFilter === c ? '#0a0a0f' : '#6b6880',
                borderRadius: 2, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
              }}>{c}</button>
            ))}
          </div>
        </div>

        {/* TABLE */}
        <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, overflow: 'hidden' }}>
          <table style={{ width: '100%', borderCollapse: 'collapse' }}>
            <thead>
              <tr>
                {['Vehicle', 'Category', 'Price', 'Year', 'Stock', 'Status', 'Actions'].map((h) => (
                  <th key={h} style={{ textAlign: 'left', padding: '14px 20px', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', borderBottom: '1px solid rgba(200,169,126,0.06)' }}>{h}</th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((car) => (
                <tr key={car.id} style={{ borderBottom: '1px solid rgba(200,169,126,0.04)' }}>
                  <td style={{ padding: '14px 20px' }}>
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                      <img src={car.image} alt={car.name} style={{ width: 48, height: 36, borderRadius: 4, objectFit: 'cover' }} />
                      <span style={{ fontSize: 14, fontWeight: 500, color: '#e4e1eb' }}>{car.name}</span>
                    </div>
                  </td>
                  <td style={{ padding: '14px 20px', fontSize: 13, color: '#9a97a5' }}>{car.category}</td>
                  <td style={{ padding: '14px 20px', fontSize: 13, fontWeight: 500, color: '#C8A97E' }}>{fmt(car.price)}</td>
                  <td style={{ padding: '14px 20px', fontSize: 13, color: '#9a97a5' }}>{car.year}</td>
                  <td style={{ padding: '14px 20px', fontSize: 13, fontWeight: 500, color: car.stock <= 2 ? '#e74c3c' : '#e4e1eb' }}>{car.stock}</td>
                  <td style={{ padding: '14px 20px' }}>
                    <span style={{ padding: '3px 10px', background: `${STATUS_COLORS[car.status]}15`, border: `1px solid ${STATUS_COLORS[car.status]}30`, borderRadius: 20, fontSize: 11, color: STATUS_COLORS[car.status] }}>{car.status}</span>
                  </td>
                  <td style={{ padding: '14px 20px' }}>
                    <div style={{ display: 'flex', gap: 6 }}>
                      <button onClick={() => openEdit(car)} style={{ width: 32, height: 32, borderRadius: 4, background: 'rgba(200,169,126,0.06)', border: '1px solid rgba(200,169,126,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Edit3 size={14} color="#C8A97E" /></button>
                      <button onClick={() => setDeleteId(car.id)} style={{ width: 32, height: 32, borderRadius: 4, background: 'rgba(231,76,60,0.06)', border: '1px solid rgba(231,76,60,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Trash2 size={14} color="#e74c3c" /></button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </main>

      {/* ADD/EDIT MODAL */}
      {showModal && editCar && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }} onClick={() => setShowModal(false)}>
          <div onClick={(e) => e.stopPropagation()} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.15)', borderRadius: 8, padding: '32px', width: 480 }}>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 24 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 400, color: '#fff' }}>{INITIAL_CARS.find((c) => c.id === editCar.id) ? 'Edit Vehicle' : 'Add Vehicle'}</h3>
              <button onClick={() => setShowModal(false)} style={{ background: 'none', border: 'none', cursor: 'pointer' }}><X size={18} color="#5a5768" /></button>
            </div>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 16 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 6, display: 'block' }}>Name</label>
                <input style={inputStyle} value={editCar.name} onChange={(e) => setEditCar({ ...editCar, name: e.target.value })} />
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 6, display: 'block' }}>Category</label>
                  <select style={{ ...inputStyle, appearance: 'none' }} value={editCar.category} onChange={(e) => setEditCar({ ...editCar, category: e.target.value })}>
                    {['Sedan', 'SUV', 'AMG', 'Electric', 'Luxury'].map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 6, display: 'block' }}>Year</label>
                  <input type="number" style={inputStyle} value={editCar.year} onChange={(e) => setEditCar({ ...editCar, year: parseInt(e.target.value) })} />
                </div>
              </div>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 6, display: 'block' }}>Price (PKR)</label>
                  <input type="number" style={inputStyle} value={editCar.price} onChange={(e) => setEditCar({ ...editCar, price: parseInt(e.target.value) || 0 })} />
                </div>
                <div>
                  <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 6, display: 'block' }}>Stock</label>
                  <input type="number" style={inputStyle} value={editCar.stock} onChange={(e) => setEditCar({ ...editCar, stock: parseInt(e.target.value) || 0 })} />
                </div>
              </div>
            </div>
            <div style={{ display: 'flex', gap: 10, marginTop: 24 }}>
              <button onClick={() => setShowModal(false)} style={{ flex: 1, padding: '12px', background: 'none', border: '1px solid rgba(200,169,126,0.15)', color: '#6b6880', fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Cancel</button>
              <button onClick={saveCar} style={{ flex: 1, padding: '12px', background: '#C8A97E', border: '1px solid #C8A97E', color: '#0a0a0f', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Save Vehicle</button>
            </div>
          </div>
        </div>
      )}

      {/* DELETE CONFIRM */}
      {deleteId && (
        <div style={{ position: 'fixed', inset: 0, background: 'rgba(0,0,0,0.7)', zIndex: 200, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
          <div style={{ background: '#111118', border: '1px solid rgba(231,76,60,0.2)', borderRadius: 8, padding: '32px', width: 400, textAlign: 'center' }}>
            <Trash2 size={32} color="#e74c3c" style={{ marginBottom: 16 }} />
            <h3 style={{ fontSize: 18, fontWeight: 500, color: '#fff', marginBottom: 8 }}>Delete Vehicle?</h3>
            <p style={{ fontSize: 13, color: '#6b6880', marginBottom: 24 }}>This action cannot be undone. The vehicle will be permanently removed.</p>
            <div style={{ display: 'flex', gap: 10 }}>
              <button onClick={() => setDeleteId(null)} style={{ flex: 1, padding: '12px', background: 'none', border: '1px solid rgba(200,169,126,0.15)', color: '#6b6880', fontSize: 13, fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Cancel</button>
              <button onClick={confirmDelete} style={{ flex: 1, padding: '12px', background: '#e74c3c', border: '1px solid #e74c3c', color: '#fff', fontSize: 13, fontWeight: 600, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Delete</button>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
