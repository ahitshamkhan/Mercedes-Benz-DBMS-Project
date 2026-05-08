import { useState, useEffect } from 'react';
import { Star, Lock, Eye, EyeOff, ShieldCheck, Check, X, ArrowLeft, Info } from 'lucide-react';

const RULES = [
  { id: 'len', label: 'At least 8 characters', test: (p) => p.length >= 8 },
  { id: 'upper', label: 'One uppercase letter', test: (p) => /[A-Z]/.test(p) },
  { id: 'lower', label: 'One lowercase letter', test: (p) => /[a-z]/.test(p) },
  { id: 'num', label: 'One number', test: (p) => /\d/.test(p) },
  { id: 'special', label: 'One special character', test: (p) => /[^A-Za-z0-9]/.test(p) },
];

export default function ChangePassword() {
  const [current, setCurrent] = useState('');
  const [newPass, setNewPass] = useState('');
  const [confirm, setConfirm] = useState('');
  const [showCurrent, setShowCurrent] = useState(false);
  const [showNew, setShowNew] = useState(false);
  const [showConfirm, setShowConfirm] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const passedRules = RULES.filter((r) => r.test(newPass));
  const strength = passedRules.length;
  const strengthMap = ['', 'Weak', 'Fair', 'Good', 'Strong', 'Excellent'];
  const strengthColors = ['#3a3748', '#e74c3c', '#f39c12', '#C8A97E', '#2ecc71', '#2ecc71'];
  const passwordsMatch = newPass && confirm && newPass === confirm;
  const isValid = strength >= 4 && passwordsMatch && current.length > 0;

  const inputStyle = {
    width: '100%', padding: '14px 44px 14px 44px', background: '#111118',
    border: '1px solid rgba(200,169,126,0.12)', borderRadius: 6, color: '#e4e1eb',
    fontSize: 14, fontFamily: "'DM Sans', sans-serif", outline: 'none', transition: 'border 0.3s',
  };
  const labelStyle = { fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b6880', marginBottom: 8, display: 'block' };

  if (submitted) {
    return (
      <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap'); * { margin:0; padding:0; box-sizing:border-box; }`}</style>
        <div style={{ textAlign: 'center', maxWidth: 420 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(46,204,113,0.1)', border: '2px solid rgba(46,204,113,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 24px' }}>
            <ShieldCheck size={36} color="#2ecc71" />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 300, color: '#fff', marginBottom: 12 }}>Password Updated</h2>
          <p style={{ fontSize: 14, fontWeight: 300, color: '#6b6880', lineHeight: 1.7, marginBottom: 32 }}>Your password has been changed successfully. You can now use your new credentials to sign in.</p>
          <button onClick={() => setSubmitted(false)} style={{ border: '1px solid #C8A97E', background: 'transparent', color: '#C8A97E', padding: '12px 28px', fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Back to Profile</button>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        .gold-btn { border:1px solid #C8A97E; background:transparent; color:#C8A97E; padding:14px 32px; font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; letter-spacing:0.12em; text-transform:uppercase; cursor:pointer; transition:all 0.4s; width:100%; }
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
            <div style={{ width: 36, height: 36, borderRadius: '50%', border: '1.5px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Star size={16} color="#C8A97E" /></div>
            <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff' }}>Mercedes-Benz</span>
          </div>
          <button style={{ display: 'flex', alignItems: 'center', gap: 6, background: 'none', border: 'none', color: '#C8A97E', fontSize: 13, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}><ArrowLeft size={16} /> Back to Profile</button>
        </div>
      </nav>

      {/* CONTENT */}
      <div style={{ paddingTop: 72, display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
        <div style={{ width: '100%', maxWidth: 480, padding: '60px 0' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div className="gold-line" />
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Security</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 300, color: '#fff', marginBottom: 8 }}>Change Password</h1>
          <p style={{ fontSize: 14, fontWeight: 300, color: '#6b6880', marginBottom: 36 }}>Keep your account secure by updating your password regularly.</p>

          {/* Current Password */}
          <div style={{ marginBottom: 24 }}>
            <label style={labelStyle}>Current Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
              <input type={showCurrent ? 'text' : 'password'} style={inputStyle} placeholder="Enter current password" value={current} onChange={(e) => setCurrent(e.target.value)} />
              <button onClick={() => setShowCurrent(!showCurrent)} style={{ position: 'absolute', right: 14, top: 13, background: 'none', border: 'none', cursor: 'pointer' }}>
                {showCurrent ? <EyeOff size={16} color="#4e453b" /> : <Eye size={16} color="#4e453b" />}
              </button>
            </div>
          </div>

          {/* New Password */}
          <div style={{ marginBottom: 8 }}>
            <label style={labelStyle}>New Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
              <input type={showNew ? 'text' : 'password'} style={inputStyle} placeholder="Enter new password" value={newPass} onChange={(e) => setNewPass(e.target.value)} />
              <button onClick={() => setShowNew(!showNew)} style={{ position: 'absolute', right: 14, top: 13, background: 'none', border: 'none', cursor: 'pointer' }}>
                {showNew ? <EyeOff size={16} color="#4e453b" /> : <Eye size={16} color="#4e453b" />}
              </button>
            </div>
          </div>

          {/* Strength Bar */}
          <div style={{ display: 'flex', gap: 4, marginBottom: 16 }}>
            {[1, 2, 3, 4, 5].map((i) => (
              <div key={i} style={{ flex: 1, height: 3, borderRadius: 2, background: i <= strength ? strengthColors[strength] : '#1f1f26', transition: 'all 0.3s' }} />
            ))}
            {newPass && <span style={{ fontSize: 11, color: strengthColors[strength], marginLeft: 8, whiteSpace: 'nowrap' }}>{strengthMap[strength]}</span>}
          </div>

          {/* Rules Checklist */}
          <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 6, padding: '16px 20px', marginBottom: 24 }}>
            {RULES.map((r) => {
              const passed = r.test(newPass);
              return (
                <div key={r.id} style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 8 }}>
                  <div style={{ width: 18, height: 18, borderRadius: '50%', background: passed ? 'rgba(46,204,113,0.15)' : 'transparent', border: passed ? '1px solid rgba(46,204,113,0.3)' : '1px solid #2a2931', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                    {passed ? <Check size={10} color="#2ecc71" /> : <X size={10} color="#3a3748" />}
                  </div>
                  <span style={{ fontSize: 12, color: passed ? '#9a97a5' : '#4e453b' }}>{r.label}</span>
                </div>
              );
            })}
          </div>

          {/* Confirm Password */}
          <div style={{ marginBottom: 8 }}>
            <label style={labelStyle}>Confirm New Password</label>
            <div style={{ position: 'relative' }}>
              <Lock size={16} color="#4e453b" style={{ position: 'absolute', left: 16, top: 15 }} />
              <input type={showConfirm ? 'text' : 'password'} style={inputStyle} placeholder="Re-enter new password" value={confirm} onChange={(e) => setConfirm(e.target.value)} />
              <button onClick={() => setShowConfirm(!showConfirm)} style={{ position: 'absolute', right: 14, top: 13, background: 'none', border: 'none', cursor: 'pointer' }}>
                {showConfirm ? <EyeOff size={16} color="#4e453b" /> : <Eye size={16} color="#4e453b" />}
              </button>
            </div>
          </div>

          {/* Match Indicator */}
          {confirm && (
            <div style={{ display: 'flex', alignItems: 'center', gap: 6, marginBottom: 24 }}>
              {passwordsMatch ? <Check size={14} color="#2ecc71" /> : <X size={14} color="#e74c3c" />}
              <span style={{ fontSize: 12, color: passwordsMatch ? '#2ecc71' : '#e74c3c' }}>
                {passwordsMatch ? 'Passwords match' : 'Passwords do not match'}
              </span>
            </div>
          )}

          {/* Submit */}
          <button className="gold-btn" onClick={() => isValid && setSubmitted(true)} style={{ opacity: isValid ? 1 : 0.4, cursor: isValid ? 'pointer' : 'default', marginBottom: 16 }}>
            Update Password
          </button>

          <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8 }}>
            <Info size={14} color="#4e453b" style={{ marginTop: 2, flexShrink: 0 }} />
            <p style={{ fontSize: 11, fontWeight: 300, color: '#4e453b', lineHeight: 1.6 }}>After updating, you will remain signed in on this device. All other sessions will be logged out for security.</p>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(200,169,126,0.1)', padding: '40px 0 20px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
          <p style={{ fontSize: 12, color: '#3a3748', textAlign: 'center' }}>© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
