import { useState } from 'react';
import { Star, Eye, EyeOff, Mail, Lock, ChevronRight, AlertCircle } from 'lucide-react';

export default function Login() {
  const [showPass, setShowPass] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState(false);
  const [rememberMe, setRememberMe] = useState(false);

  const handleSubmit = () => setError(true); // demo: show error state

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
          <a href="#" style={{ fontSize: 13, fontWeight: 500, color: '#C8A97E', letterSpacing: '0.05em' }}>Create Account</a>
        </div>
      </nav>

      {/* MAIN */}
      <div style={{ paddingTop: 72, display: 'grid', gridTemplateColumns: '1.2fr 1fr', minHeight: '100vh' }}>
        {/* LEFT — Image & Brand */}
        <div style={{ position: 'relative', overflow: 'hidden' }}>
          <img src="https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=900&q=80" alt="Mercedes-Benz" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, rgba(10,10,15,0.8) 0%, rgba(10,10,15,0.3) 50%, rgba(10,10,15,0.7) 100%)' }} />
          <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to right, transparent 60%, #0a0a0f 100%)' }} />
          <div style={{ position: 'absolute', top: '50%', left: 60, transform: 'translateY(-50%)', maxWidth: 460 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 24 }}>
              <div className="gold-line" />
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Welcome Back</span>
            </div>
            <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 300, color: '#fff', lineHeight: 1.15, marginBottom: 20 }}>
              Experience Modern <span style={{ color: '#C8A97E' }}>Luxury.</span>
            </h1>
            <p style={{ fontSize: 15, fontWeight: 300, color: '#9a97a5', lineHeight: 1.7 }}>
              Access your personalized Mercedes-Benz portal to manage your vehicle fleet, explore bespoke financing, and discover exclusive events.
            </p>
            <div style={{ marginTop: 40, display: 'flex', gap: 32 }}>
              {[
                { val: '130+', label: 'Years of Legacy' },
                { val: '2.1M', label: 'Vehicles Sold' },
                { val: '93', label: 'Countries' },
              ].map((s) => (
                <div key={s.label}>
                  <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 400, color: '#C8A97E' }}>{s.val}</p>
                  <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.08em', color: '#5a5768', textTransform: 'uppercase', marginTop: 4 }}>{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* RIGHT — Form */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', padding: '60px 80px' }}>
          <div style={{ width: '100%', maxWidth: 400 }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
              <div className="gold-line" />
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Authentication</span>
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 300, color: '#fff', marginBottom: 8 }}>Sign In</h2>
            <p style={{ fontSize: 14, fontWeight: 300, color: '#6b6880', marginBottom: 36 }}>Enter your credentials to continue.</p>

            {/* Error */}
            {error && (
              <div style={{ display: 'flex', alignItems: 'center', gap: 10, padding: '12px 16px', background: 'rgba(231,76,60,0.08)', border: '1px solid rgba(231,76,60,0.2)', borderRadius: 6, marginBottom: 24 }}>
                <AlertCircle size={16} color="#e74c3c" />
                <p style={{ fontSize: 13, color: '#e74c3c' }}>The email or password you entered is incorrect. Please try again.</p>
              </div>
            )}

            {/* Email */}
            <div style={{ marginBottom: 20 }}>
              <label style={labelStyle}>Email Address</label>
              <div style={{ position: 'relative' }}>
                <Mail size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
                <input type="email" style={inputStyle} placeholder="you@example.com" value={email} onChange={(e) => setEmail(e.target.value)} />
              </div>
            </div>

            {/* Password */}
            <div style={{ marginBottom: 12 }}>
              <label style={labelStyle}>Password</label>
              <div style={{ position: 'relative' }}>
                <Lock size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
                <input type={showPass ? 'text' : 'password'} style={inputStyle} placeholder="••••••••" value={password} onChange={(e) => setPassword(e.target.value)} />
                <button onClick={() => setShowPass(!showPass)} style={{ position: 'absolute', right: 14, top: 13, background: 'none', border: 'none', cursor: 'pointer' }}>
                  {showPass ? <EyeOff size={16} color="#4e453b" /> : <Eye size={16} color="#4e453b" />}
                </button>
              </div>
            </div>

            {/* Remember & Forgot */}
            <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 32 }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer' }} onClick={() => setRememberMe(!rememberMe)}>
                <div style={{
                  width: 18, height: 18, borderRadius: 4, border: rememberMe ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.2)',
                  background: rememberMe ? 'rgba(200,169,126,0.15)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', transition: 'all 0.3s'
                }}>
                  {rememberMe && <div style={{ width: 8, height: 8, borderRadius: 2, background: '#C8A97E' }} />}
                </div>
                <span style={{ fontSize: 12, color: '#6b6880' }}>Remember me</span>
              </div>
              <a href="#" style={{ fontSize: 12, color: '#C8A97E', fontWeight: 500 }}>Forgot Password?</a>
            </div>

            {/* Submit */}
            <button className="gold-btn" onClick={handleSubmit} style={{ marginBottom: 24, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              Sign In <ChevronRight size={16} />
            </button>

            {/* Divider */}
            <div style={{ display: 'flex', alignItems: 'center', gap: 16, marginBottom: 24 }}>
              <div style={{ flex: 1, height: 1, background: 'rgba(200,169,126,0.1)' }} />
              <span style={{ fontSize: 11, color: '#3a3748', letterSpacing: '0.1em', textTransform: 'uppercase' }}>or</span>
              <div style={{ flex: 1, height: 1, background: 'rgba(200,169,126,0.1)' }} />
            </div>

            <p style={{ fontSize: 13, color: '#5a5768', textAlign: 'center' }}>
              Don't have an account? <a href="#" style={{ color: '#C8A97E', fontWeight: 500 }}>Request Access</a>
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
            <p style={{ fontSize: 13, fontWeight: 300, color: '#5a5768', lineHeight: 1.7, maxWidth: 280 }}>Setting the standard in luxury, innovation, and performance since 1886.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Explore</h4>
            {['Cars', 'Test Drive', 'Service', 'My Orders', 'Wishlist', 'Admin'].map((l) => (
              <a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10, textDecoration: 'none' }}>{l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Legal</h4>
            {['Privacy Policy', 'Contact Us'].map((l) => (
              <a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10, textDecoration: 'none' }}>{l}</a>
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
