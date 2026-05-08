import { useState } from 'react';
import { Star, User, Mail, Phone, MapPin, Camera, Edit3, Save, X, Shield, Car, ShoppingCart, Heart, Calendar } from 'lucide-react';

const PROFILE = {
  firstName: 'Ahmed',
  lastName: 'Khan',
  email: 'ahmed.khan@example.com',
  phone: '+92 300 1234567',
  city: 'Lahore',
  address: 'House 42, DHA Phase V, Lahore',
  memberSince: 'March 2022',
  tier: 'Platinum',
};

const STATS = [
  { label: 'Vehicles Owned', value: '3', icon: <Car size={18} color="#C8A97E" /> },
  { label: 'Active Orders', value: '2', icon: <ShoppingCart size={18} color="#C8A97E" /> },
  { label: 'Wishlist Items', value: '5', icon: <Heart size={18} color="#C8A97E" /> },
  { label: 'Test Drives', value: '7', icon: <Calendar size={18} color="#C8A97E" /> },
];

export default function MyProfile() {
  const [editing, setEditing] = useState(false);
  const [form, setForm] = useState(PROFILE);

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const handleSave = () => setEditing(false);
  const handleCancel = () => { setForm(PROFILE); setEditing(false); };

  const inputStyle = (disabled) => ({
    width: '100%', padding: '14px 16px 14px 44px', background: disabled ? '#0d0d14' : '#111118',
    border: `1px solid ${disabled ? 'rgba(200,169,126,0.06)' : 'rgba(200,169,126,0.12)'}`, borderRadius: 6,
    color: disabled ? '#6b6880' : '#e4e1eb', fontSize: 14, fontFamily: "'DM Sans', sans-serif", outline: 'none', transition: 'border 0.3s',
  });

  const labelStyle = { fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b6880', marginBottom: 8, display: 'block' };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        .gold-btn { border:1px solid #C8A97E; background:transparent; color:#C8A97E; padding:14px 32px; font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; letter-spacing:0.12em; text-transform:uppercase; cursor:pointer; transition:all 0.4s; }
        .gold-btn:hover { background:#C8A97E; color:#0a0a0f; }
        .glass { background:rgba(10,10,15,0.85); backdrop-filter:blur(12px); }
        .gold-line { width:60px; height:1px; background:#C8A97E; }
        input:focus { border-color:#C8A97E !important; }
        input::placeholder { color:#3a3748; }
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
            {['Cars', 'My Orders', 'Wishlist', 'Service'].map((l) => (
              <a key={l} href="#" style={{ fontSize: 13, fontWeight: 300, color: '#b0adb8', letterSpacing: '0.05em' }}>{l}</a>
            ))}
          </div>
          <button className="gold-btn" style={{ padding: '8px 22px', fontSize: 11 }}>Sign Out</button>
        </div>
      </nav>

      {/* CONTENT */}
      <div style={{ paddingTop: 100, maxWidth: 1440, margin: '0 auto', padding: '100px 80px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div className="gold-line" />
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Account</span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 300, color: '#fff', marginBottom: 48 }}>My Profile</h1>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.6fr', gap: 48 }}>
          {/* LEFT — Avatar & Info */}
          <div>
            <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, padding: '40px 32px', textAlign: 'center' }}>
              <div style={{ position: 'relative', display: 'inline-block', marginBottom: 24 }}>
                <div style={{ width: 120, height: 120, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(200,169,126,0.2), rgba(200,169,126,0.05))', border: '2px solid rgba(200,169,126,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <User size={48} color="#C8A97E" />
                </div>
                <button style={{ position: 'absolute', bottom: 4, right: 4, width: 32, height: 32, borderRadius: '50%', background: '#C8A97E', border: 'none', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer' }}>
                  <Camera size={14} color="#0a0a0f" />
                </button>
              </div>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 400, color: '#fff', marginBottom: 4 }}>{form.firstName} {form.lastName}</h2>
              <p style={{ fontSize: 13, color: '#6b6880', marginBottom: 16 }}>{form.email}</p>
              <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '6px 16px', background: 'rgba(200,169,126,0.08)', border: '1px solid rgba(200,169,126,0.2)', borderRadius: 20 }}>
                <Shield size={14} color="#C8A97E" />
                <span style={{ fontSize: 12, fontWeight: 500, color: '#C8A97E' }}>{PROFILE.tier} Member</span>
              </div>
              <p style={{ fontSize: 12, color: '#4e453b', marginTop: 16 }}>Member since {PROFILE.memberSince}</p>
            </div>

            {/* STATS */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 16 }}>
              {STATS.map((s) => (
                <div key={s.label} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '20px 16px', textAlign: 'center' }}>
                  <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(200,169,126,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 10px' }}>{s.icon}</div>
                  <p style={{ fontSize: 22, fontWeight: 600, color: '#fff' }}>{s.value}</p>
                  <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5a5768', marginTop: 4 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>

          {/* RIGHT — Form */}
          <div>
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 28 }}>
              <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 400, color: '#fff' }}>Personal Information</h2>
              {!editing ? (
                <button onClick={() => setEditing(true)} style={{ display: 'flex', alignItems: 'center', gap: 6, padding: '10px 20px', background: 'none', border: '1px solid rgba(200,169,126,0.2)', borderRadius: 4, color: '#C8A97E', fontSize: 12, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                  <Edit3 size={14} /> Edit
                </button>
              ) : (
                <div style={{ display: 'flex', gap: 8 }}>
                  <button onClick={handleCancel} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '10px 18px', background: 'none', border: '1px solid rgba(200,169,126,0.15)', borderRadius: 4, color: '#6b6880', fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                    <X size={14} /> Cancel
                  </button>
                  <button onClick={handleSave} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '10px 18px', background: '#C8A97E', border: '1px solid #C8A97E', borderRadius: 4, color: '#0a0a0f', fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                    <Save size={14} /> Save
                  </button>
                </div>
              )}
            </div>

            <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, padding: '36px 32px' }}>
              {/* Name Row */}
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
                <div>
                  <label style={labelStyle}>First Name</label>
                  <div style={{ position: 'relative' }}>
                    <User size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
                    <input disabled={!editing} style={inputStyle(!editing)} value={form.firstName} onChange={(e) => update('firstName', e.target.value)} />
                  </div>
                </div>
                <div>
                  <label style={labelStyle}>Last Name</label>
                  <div style={{ position: 'relative' }}>
                    <User size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
                    <input disabled={!editing} style={inputStyle(!editing)} value={form.lastName} onChange={(e) => update('lastName', e.target.value)} />
                  </div>
                </div>
              </div>

              {/* Email */}
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Email Address</label>
                <div style={{ position: 'relative' }}>
                  <Mail size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
                  <input disabled={!editing} type="email" style={inputStyle(!editing)} value={form.email} onChange={(e) => update('email', e.target.value)} />
                </div>
              </div>

              {/* Phone */}
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>Phone Number</label>
                <div style={{ position: 'relative' }}>
                  <Phone size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
                  <input disabled={!editing} style={inputStyle(!editing)} value={form.phone} onChange={(e) => update('phone', e.target.value)} />
                </div>
              </div>

              {/* City */}
              <div style={{ marginBottom: 20 }}>
                <label style={labelStyle}>City</label>
                <div style={{ position: 'relative' }}>
                  <MapPin size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
                  <input disabled={!editing} style={inputStyle(!editing)} value={form.city} onChange={(e) => update('city', e.target.value)} />
                </div>
              </div>

              {/* Address */}
              <div>
                <label style={labelStyle}>Address</label>
                <div style={{ position: 'relative' }}>
                  <MapPin size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
                  <input disabled={!editing} style={inputStyle(!editing)} value={form.address} onChange={(e) => update('address', e.target.value)} />
                </div>
              </div>
            </div>

            {/* Quick Links */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12, marginTop: 24 }}>
              {[
                { label: 'Change Password', desc: 'Update your security credentials' },
                { label: 'My Test Drives', desc: 'View upcoming appointments' },
                { label: 'Service History', desc: 'Past maintenance records' },
                { label: 'Order Tracking', desc: 'Track your vehicle deliveries' },
              ].map((link) => (
                <a key={link.label} href="#" style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '18px 20px', display: 'block', transition: 'border-color 0.3s' }}
                  onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(200,169,126,0.25)'}
                  onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(200,169,126,0.08)'}>
                  <p style={{ fontSize: 14, fontWeight: 500, color: '#e4e1eb', marginBottom: 4 }}>{link.label}</p>
                  <p style={{ fontSize: 12, color: '#4e453b' }}>{link.desc}</p>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(200,169,126,0.1)', marginTop: 80, padding: '40px 0 20px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Star size={14} color="#C8A97E" /></div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: '#fff' }}>Mercedes-Benz</span>
            </div>
            <p style={{ fontSize: 13, fontWeight: 300, color: '#5a5768', lineHeight: 1.7, maxWidth: 280 }}>Your trusted automotive luxury partner since 1886.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Explore</h4>
            {['Cars', 'Test Drive', 'Service'].map((l) => (<a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10 }}>{l}</a>))}
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
