import { useState } from 'react';
import { Star, Eye, EyeOff, User, Mail, Phone, Lock, MapPin, ChevronRight, Check } from 'lucide-react';

export default function Register() {
  const [showPass, setShowPass] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [agreed, setAgreed] = useState(false);
  const [form, setForm] = useState({ firstName: '', lastName: '', email: '', phone: '', city: '', password: '', confirmPassword: '' });

  const update = (k, v) => setForm((p) => ({ ...p, [k]: v }));

  const passStrength = () => {
    const p = form.password;
    if (!p) return { level: 0, label: '', color: '#3a3748' };
    let s = 0;
    if (p.length >= 8) s++;
    if (/[A-Z]/.test(p)) s++;
    if (/[0-9]/.test(p)) s++;
    if (/[^A-Za-z0-9]/.test(p)) s++;
    const map = [
      { level: 1, label: 'Weak', color: '#e74c3c' },
      { level: 2, label: 'Fair', color: '#f39c12' },
      { level: 3, label: 'Good', color: '#C8A97E' },
      { level: 4, label: 'Strong', color: '#2ecc71' },
    ];
    return map[s - 1] || { level: 0, label: '', color: '#3a3748' };
  };

  const strength = passStrength();

  const inputStyle = {
    width: '100%', padding: '14px 16px 14px 44px', background: '#111118',
    border: '1px solid rgba(200,169,126,0.12)', borderRadius: 6, color: '#e4e1eb',
    fontSize: 14, fontFamily: "'DM Sans', sans-serif", outline: 'none', transition: 'border 0.3s',
  };

  const labelStyle = {
    fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase',
    color: '#6b6880', marginBottom: 8, display: 'block',
  };

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        .gold-btn { border:1px solid #C8A97E; background:transparent; color:#C8A97E; padding:14px 32px; font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; letter-spacing:0.12em; text-transform:uppercase; cursor:pointer; transition:all 0.4s; width:100%; }
        .gold-btn:hover { background:#C8A97E; color:#0a0a0f; }
        .glass { background:rgba(10,10,15,0.85); backdrop-filter:blur(12px); }
        .gold-line { width:60px; height:1px; background:#C8A97E; }
        input:focus { border-color: #C8A97E !important; }
        input::placeholder { color: #3a3748; }
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
          <a href="#" style={{ fontSize: 13, fontWeight: 500, color: '#C8A97E', letterSpacing: '0.05em' }}>Sign In</a>
        </div>
      </nav>

      {/* MAIN */}
      <div style={{ paddingTop: 72, display: 'grid', gridTemplateColumns: '1fr 1fr', minHeight: '100vh' }}>
        {/* LEFT — Image */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900&q=80" alt="Mercedes" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 40%, #0a0a0f 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0a0a0f 5%, transparent 40%)' }} />
          <div style={{ position: 'absolute', bottom: 60, left: 48, maxWidth: 400 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 300, color: '#fff', lineHeight: 1.3, marginBottom: 12 }}>
              Enter a World of Unparalleled <span style={{ color: '#C8A97E' }}>Excellence</span>
            </h2>
            <p style={{ fontSize: 14, fontWeight: 300, color: '#9a97a5', lineHeight: 1.7 }}>
              Experiencing excellence in every detail. Join the legacy of automotive perfection.
            </p>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 80px' }}>
          <div style={{ width: '100%', maxWidth: 440 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div className="gold-line" />
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Join Us</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 300, color: '#fff', marginBottom: 8 }}>Create Account</h1>
            <p style={{ fontSize: 14, fontWeight: 300, color: '#6b6880', marginBottom: 36 }}>Please provide your details to begin your journey.</p>

            {/* Name Row */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
              <div>
                <label style={labelStyle}>First Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
                  <input style={inputStyle} placeholder="John" value={form.firstName} onChange={(e) => update('firstName', e.target.value)} />
                </div>
              </div>
              <div>
                <label style={labelStyle}>Last Name</label>
                <div style={{ position: 'relative' }}>
                  <User size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
                  <input style={inputStyle} placeholder="Doe" value={form.lastName} onChange={(e) => update('lastName', e.target.value)} />
                </div>
              </div>
            </div>

            {/* Email */}
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
                <input type="email" style={inputStyle} placeholder="john@example.com" value={form.email} onChange={(e) => update('email', e.target.value)} />
              </div>
            </div>

            {/* Phone */}
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Phone Number</label>
              <div style={{ position: 'relative' }}>
                <Phone size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
                <input style={inputStyle} placeholder="+92 300 1234567" value={form.phone} onChange={(e) => update('phone', e.target.value)} />
              </div>
            </div>

            {/* City */}
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>City</label>
              <div style={{ position: 'relative' }}>
                <MapPin size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
                <input style={inputStyle} placeholder="Lahore" value={form.city} onChange={(e) => update('city', e.target.value)} />
              </div>
            </div>

            {/* Password */}
            <div style={{ marginBottom: 8 }}>
              <label style={labelStyle}>Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
                <input type={showPass ? 'text' : 'password'} style={inputStyle} placeholder="••••••••" value={form.password} onChange={(e) => update('password', e.target.value)} />
                <button onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: 14, top: 13, background: 'none', border: 'none', cursor: 'pointer' }}>
                  {showPass ? <EyeOff size={16} color="#4e453b" /> : <Eye size={16} color="#4e453b" />}
                </button>
              </div>
            </div>

            {/* Strength Bar */}
            <div style={{ display: 'flex', gap: 4, marginBottom: 20 }}>
              {[1, 2, 3, 4].map((i) => (
                <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= strength.level ? strength.color : '#1f1f26', transition: 'all 0.3s' }} />
              ))}
              {strength.label && <span style={{ fontSize: 11, color: strength.color, marginLeft: 8 }}>{strength.label}</span>}
            </div>

            {/* Confirm Password */}
            <div style={{ marginBottom: 24 }}>
              <label style={labelStyle}>Confirm Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
                <input type={showConfirm ? 'text' : 'password'} style={inputStyle} placeholder="••••••••" value={form.confirmPassword} onChange={(e) => update('confirmPassword', e.target.value)} />
                <button onClick={() => setShowConfirm(!showConfirm)} style={{ position: 'absolute', right: 14, top: 13, background: 'none', border: 'none', cursor: 'pointer' }}>
                  {showConfirm ? <EyeOff size={16} color="#4e453b" /> : <Eye size={16} color="#4e453b" />}
                </button>
              </div>
            </div>

            {/* Terms */}
            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 10, marginBottom: 28 }}>
              <div onClick={() => setAgreed(!agreed)} style={{
                width: 20, height: 20, minWidth: 20, borderRadius: 4, border: agreed ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.2)',
                background: agreed ? 'rgba(200,169,126,0.15)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', marginTop: 2, transition: 'all 0.3s'
              }}>
                {agreed && <Check size={12} color="#C8A97E" />}
              </div>
              <p style={{ fontSize: 12, fontWeight: 300, color: '#6b6880', lineHeight: 1.6 }}>
                I agree to the <a href="#" style={{ color: '#C8A97E', textDecoration: 'none' }}>Terms of Service</a> and <a href="#" style={{ color: '#C8A97E', textDecoration: 'none' }}>Privacy Policy</a>
              </p>
            </div>

            {/* Submit */}
            <button className="gold-btn" style={{ marginBottom: 20, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              Create Account <ChevronRight size={16} />
            </button>

            <p style={{ fontSize: 13, color: '#5a5768', textAlign: 'center' }}>
              Already have an account? <a href="#" style={{ color: '#C8A97E', fontWeight: 500, textDecoration: 'none' }}>Sign In</a>
            </p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(200,169,126,0.1)', padding: '40px 0 20px', background: '#0a0a0f' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Star size={14} color="#C8A97E" />
              </div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: '#fff' }}>Mercedes-Benz</span>
            </div>
            <p style={{ fontSize: 13, fontWeight: 300, color: '#5a5768', lineHeight: 1.7, maxWidth: 280 }}>Experiencing excellence in every detail. Join the legacy of automotive perfection.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Quick Links</h4>
            {['Cars', 'Test Drive', 'Service'].map((l) => (
              <a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 12, textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Support</h4>
            {['Contact', 'Privacy', 'Legal'].map((l) => (
              <a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 12, textDecoration: 'none' }}>{l}</a>
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
