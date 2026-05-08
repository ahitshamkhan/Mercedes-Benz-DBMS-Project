import { useState } from 'react';
import { Star, LayoutDashboard, Car, ShoppingCart, Users, Warehouse, Search, AlertTriangle, TrendingUp, TrendingDown, Package, Plus, Minus, RotateCcw, Filter } from 'lucide-react';

const INVENTORY = [
  { id: 1, name: 'S-Class 500', sku: 'MB-SC500-24', category: 'Sedan', inStock: 12, reserved: 3, incoming: 5, reorderLevel: 5, location: 'Lahore', lastUpdated: 'May 05, 2024' },
  { id: 2, name: 'AMG GT Coupé', sku: 'MB-AMGGT-24', category: 'AMG', inStock: 5, reserved: 2, incoming: 3, reorderLevel: 3, location: 'Karachi', lastUpdated: 'May 04, 2024' },
  { id: 3, name: 'G-Class G63', sku: 'MB-GC63-24', category: 'SUV', inStock: 8, reserved: 4, incoming: 0, reorderLevel: 4, location: 'Lahore', lastUpdated: 'May 03, 2024' },
  { id: 4, name: 'EQS 580', sku: 'MB-EQS580-24', category: 'Electric', inStock: 3, reserved: 1, incoming: 8, reorderLevel: 5, location: 'Islamabad', lastUpdated: 'May 02, 2024' },
  { id: 5, name: 'C-Class 300', sku: 'MB-CC300-24', category: 'Sedan', inStock: 15, reserved: 5, incoming: 10, reorderLevel: 8, location: 'Lahore', lastUpdated: 'May 01, 2024' },
  { id: 6, name: 'GLE 450', sku: 'MB-GLE450-23', category: 'SUV', inStock: 0, reserved: 0, incoming: 6, reorderLevel: 4, location: 'Karachi', lastUpdated: 'Apr 28, 2024' },
  { id: 7, name: 'AMG C63 S', sku: 'MB-AMGC63-24', category: 'AMG', inStock: 4, reserved: 1, incoming: 2, reorderLevel: 3, location: 'Lahore', lastUpdated: 'Apr 25, 2024' },
  { id: 8, name: 'Maybach S680', sku: 'MB-MBS680-24', category: 'Luxury', inStock: 1, reserved: 1, incoming: 1, reorderLevel: 2, location: 'Islamabad', lastUpdated: 'Apr 20, 2024' },
];

const SIDEBAR = [
  { label: 'Dashboard', icon: <LayoutDashboard size={18} /> },
  { label: 'Manage Cars', icon: <Car size={18} /> },
  { label: 'Orders', icon: <ShoppingCart size={18} /> },
  { label: 'Customers', icon: <Users size={18} /> },
  { label: 'Inventory', icon: <Warehouse size={18} />, active: true },
];

const LOG = [
  { action: 'Restocked', item: 'C-Class 300', qty: '+10', time: '2 hours ago', by: 'System' },
  { action: 'Reserved', item: 'G-Class G63', qty: '-1', time: '4 hours ago', by: 'Fatima Z.' },
  { action: 'Incoming', item: 'EQS 580', qty: '+8', time: '1 day ago', by: 'Logistics' },
  { action: 'Sold', item: 'S-Class 500', qty: '-1', time: '1 day ago', by: 'Ahmed M.' },
];

export default function InventoryManager() {
  const [inventory, setInventory] = useState(INVENTORY);
  const [search, setSearch] = useState('');
  const [locFilter, setLocFilter] = useState('All');

  const locations = ['All', ...new Set(INVENTORY.map((i) => i.location))];
  const filtered = inventory.filter((i) => {
    const ms = i.name.toLowerCase().includes(search.toLowerCase()) || i.sku.toLowerCase().includes(search.toLowerCase());
    const ml = locFilter === 'All' || i.location === locFilter;
    return ms && ml;
  });

  const totalStock = inventory.reduce((s, i) => s + i.inStock, 0);
  const totalReserved = inventory.reduce((s, i) => s + i.reserved, 0);
  const totalIncoming = inventory.reduce((s, i) => s + i.incoming, 0);
  const lowStockCount = inventory.filter((i) => i.inStock <= i.reorderLevel && i.inStock > 0).length;
  const outOfStock = inventory.filter((i) => i.inStock === 0).length;

  const adjustStock = (id, delta) => {
    setInventory((prev) => prev.map((i) => i.id === id ? { ...i, inStock: Math.max(0, i.inStock + delta) } : i));
  };

  const getStockStatus = (item) => {
    if (item.inStock === 0) return { label: 'Out of Stock', color: '#e74c3c' };
    if (item.inStock <= item.reorderLevel) return { label: 'Low Stock', color: '#f39c12' };
    return { label: 'In Stock', color: '#2ecc71' };
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', minHeight: '100vh', display: 'flex' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        input:focus { border-color:#C8A97E !important; outline:none; }
        input::placeholder { color:#3a3748; }
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
            <div key={link.label} style={{
              display: 'flex', alignItems: 'center', gap: 12, padding: '11px 24px', cursor: 'pointer',
              background: link.active ? 'rgba(200,169,126,0.06)' : 'transparent',
              borderLeft: link.active ? '2px solid #C8A97E' : '2px solid transparent',
              color: link.active ? '#C8A97E' : '#5a5768', fontSize: 13,
            }}>{link.icon} {link.label}</div>
          ))}
        </nav>
      </aside>

      {/* MAIN */}
      <main style={{ marginLeft: 240, flex: 1, padding: '32px 40px' }}>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 300, color: '#fff', marginBottom: 4 }}>Inventory Manager</h1>
        <p style={{ fontSize: 13, color: '#5a5768', marginBottom: 28 }}>Monitor stock levels, reservations, and incoming shipments</p>

        {/* Stats */}
        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(5, 1fr)', gap: 12, marginBottom: 28 }}>
          {[
            { label: 'Total Stock', value: totalStock, icon: <Package size={18} color="#C8A97E" />, color: '#C8A97E' },
            { label: 'Reserved', value: totalReserved, icon: <Package size={18} color="#3498db" />, color: '#3498db' },
            { label: 'Incoming', value: totalIncoming, icon: <TrendingUp size={18} color="#2ecc71" />, color: '#2ecc71' },
            { label: 'Low Stock', value: lowStockCount, icon: <AlertTriangle size={18} color="#f39c12" />, color: '#f39c12' },
            { label: 'Out of Stock', value: outOfStock, icon: <TrendingDown size={18} color="#e74c3c" />, color: '#e74c3c' },
          ].map((s) => (
            <div key={s.label} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '16px 18px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 8 }}>{s.icon}<span style={{ fontSize: 10, color: '#4e453b' }}>{s.label}</span></div>
              <p style={{ fontSize: 24, fontWeight: 600, color: s.color }}>{s.value}</p>
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '2.5fr 1fr', gap: 24 }}>
          {/* TABLE */}
          <div>
            <div style={{ display: 'flex', gap: 12, marginBottom: 16 }}>
              <div style={{ flex: 1, position: 'relative' }}>
                <Search size={15} color="#4e453b" style={{ position: 'absolute', left: 14, top: 12 }} />
                <input value={search} onChange={(e) => setSearch(e.target.value)} placeholder="Search by name or SKU..."
                  style={{ width: '100%', padding: '11px 14px 11px 40px', background: '#111118', border: '1px solid rgba(200,169,126,0.12)', borderRadius: 4, color: '#e4e1eb', fontSize: 13, fontFamily: "'DM Sans', sans-serif" }} />
              </div>
              <div style={{ display: 'flex', gap: 4 }}>
                {locations.map((l) => (
                  <button key={l} onClick={() => setLocFilter(l)} style={{
                    padding: '7px 14px', fontSize: 11, fontWeight: 500,
                    border: locFilter === l ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.12)',
                    background: locFilter === l ? '#C8A97E' : 'transparent',
                    color: locFilter === l ? '#0a0a0f' : '#6b6880',
                    borderRadius: 2, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
                  }}>{l}</button>
                ))}
              </div>
            </div>

            <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, overflow: 'hidden' }}>
              <table style={{ width: '100%', borderCollapse: 'collapse' }}>
                <thead>
                  <tr>
                    {['Vehicle', 'SKU', 'In Stock', 'Reserved', 'Incoming', 'Status', 'Adjust'].map((h) => (
                      <th key={h} style={{ textAlign: 'left', padding: '12px 16px', fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', borderBottom: '1px solid rgba(200,169,126,0.06)' }}>{h}</th>
                    ))}
                  </tr>
                </thead>
                <tbody>
                  {filtered.map((item) => {
                    const status = getStockStatus(item);
                    return (
                      <tr key={item.id} style={{ borderBottom: '1px solid rgba(200,169,126,0.04)' }}>
                        <td style={{ padding: '12px 16px' }}>
                          <p style={{ fontSize: 13, fontWeight: 500, color: '#e4e1eb' }}>{item.name}</p>
                          <p style={{ fontSize: 10, color: '#4e453b' }}>{item.category} • {item.location}</p>
                        </td>
                        <td style={{ padding: '12px 16px', fontSize: 12, color: '#6b6880', fontFamily: 'monospace' }}>{item.sku}</td>
                        <td style={{ padding: '12px 16px', fontSize: 14, fontWeight: 600, color: status.color }}>{item.inStock}</td>
                        <td style={{ padding: '12px 16px', fontSize: 13, color: '#6b6880' }}>{item.reserved}</td>
                        <td style={{ padding: '12px 16px' }}>
                          {item.incoming > 0 ? (
                            <span style={{ display: 'flex', alignItems: 'center', gap: 3, fontSize: 13, color: '#2ecc71' }}><TrendingUp size={12} /> +{item.incoming}</span>
                          ) : (
                            <span style={{ fontSize: 13, color: '#3a3748' }}>—</span>
                          )}
                        </td>
                        <td style={{ padding: '12px 16px' }}>
                          <span style={{ padding: '3px 10px', background: `${status.color}15`, border: `1px solid ${status.color}30`, borderRadius: 20, fontSize: 10, fontWeight: 500, color: status.color }}>{status.label}</span>
                        </td>
                        <td style={{ padding: '12px 16px' }}>
                          <div style={{ display: 'flex', gap: 4 }}>
                            <button onClick={() => adjustStock(item.id, -1)} style={{ width: 28, height: 28, borderRadius: 4, background: 'rgba(231,76,60,0.06)', border: '1px solid rgba(231,76,60,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Minus size={12} color="#e74c3c" /></button>
                            <button onClick={() => adjustStock(item.id, 1)} style={{ width: 28, height: 28, borderRadius: 4, background: 'rgba(46,204,113,0.06)', border: '1px solid rgba(46,204,113,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}><Plus size={12} color="#2ecc71" /></button>
                          </div>
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>

          {/* ACTIVITY LOG */}
          <div>
            <h3 style={{ fontSize: 14, fontWeight: 500, color: '#fff', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}><RotateCcw size={14} color="#C8A97E" /> Recent Activity</h3>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {LOG.map((entry, i) => (
                <div key={i} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.06)', borderRadius: 6, padding: '14px 16px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 6 }}>
                    <span style={{ fontSize: 12, fontWeight: 500, color: entry.qty.startsWith('+') ? '#2ecc71' : '#e74c3c' }}>{entry.action}</span>
                    <span style={{ fontSize: 14, fontWeight: 600, color: entry.qty.startsWith('+') ? '#2ecc71' : '#e74c3c' }}>{entry.qty}</span>
                  </div>
                  <p style={{ fontSize: 12, color: '#6b6880' }}>{entry.item}</p>
                  <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 6 }}>
                    <span style={{ fontSize: 10, color: '#3a3748' }}>{entry.time}</span>
                    <span style={{ fontSize: 10, color: '#4e453b' }}>{entry.by}</span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
