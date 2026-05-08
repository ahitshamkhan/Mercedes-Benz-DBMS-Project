import { useState } from 'react';
import { Star, CreditCard, Building2, Banknote, Check, ChevronRight, ShieldCheck, Clock, CircleCheckBig } from 'lucide-react';

const CAR = {
  name: '2024 EQS 580 4MATIC Sedan',
  image: 'https://images.unsplash.com/photo-1625231334401-67c9eef63a78?w=600&q=80',
  color: 'Obsidian Black',
  interior: 'Macchiato Beige / Magma Grey',
  trim: 'EQS 580 4MATIC',
  basePrice: 95000000,
  options: 2500000,
  delivery: 350000,
  tax: 4800000,
};

const STEPS = ['Vehicle', 'Payment', 'Review'];

const PAYMENT_METHODS = [
  { id: 'full', icon: <Banknote size={22} color="#C8A97E" />, title: 'Full Payment', desc: 'Complete purchase with a single transaction' },
  { id: 'finance', icon: <Building2 size={22} color="#C8A97E" />, title: 'Bank Financing', desc: 'Partner financing through HBL, UBL, or MCB' },
  { id: 'lease', icon: <CreditCard size={22} color="#C8A97E" />, title: 'Lease Program', desc: '36/48/60 month executive lease options' },
];

export default function PlaceOrder() {
  const [step, setStep] = useState(1);
  const [payment, setPayment] = useState('full');
  const [confirmed, setConfirmed] = useState(false);

  const total = CAR.basePrice + CAR.options + CAR.delivery + CAR.tax;
  const fmt = (n) => 'PKR ' + n.toLocaleString();

  const inputStyle = {
    width: '100%', padding: '14px 16px', background: '#111118',
    border: '1px solid rgba(200,169,126,0.12)', borderRadius: 6, color: '#e4e1eb',
    fontSize: 14, fontFamily: "'DM Sans', sans-serif", outline: 'none', transition: 'border 0.3s',
  };

  if (confirmed) {
    return (
      <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', minHeight: '100vh', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
        <style>{`@import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap'); * { margin:0; padding:0; box-sizing:border-box; }`}</style>
        <div style={{ textAlign: 'center', maxWidth: 480 }}>
          <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'rgba(200,169,126,0.1)', border: '2px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 28px' }}>
            <CircleCheckBig size={36} color="#C8A97E" />
          </div>
          <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 300, color: '#fff', marginBottom: 16 }}>Request Received</h2>
          <p style={{ fontSize: 15, fontWeight: 300, color: '#7a7788', lineHeight: 1.7, marginBottom: 32 }}>
            Your configuration for the EQS 580 has been secured. Our concierge team is reviewing your selection and will contact you via your preferred channel.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
            <button onClick={() => { setConfirmed(false); setStep(0); }} style={{ border: '1px solid #C8A97E', background: 'transparent', color: '#C8A97E', padding: '12px 28px', fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>View My Orders</button>
            <button style={{ border: '1px solid rgba(200,169,126,0.3)', background: 'transparent', color: '#b0adb8', padding: '12px 28px', fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Browse Cars</button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        .gold-btn { border:1px solid #C8A97E; background:transparent; color:#C8A97E; padding:14px 32px; font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; letter-spacing:0.12em; text-transform:uppercase; cursor:pointer; transition:all 0.4s; }
        .gold-btn:hover { background:#C8A97E; color:#0a0a0f; }
        .glass { background:rgba(10,10,15,0.85); backdrop-filter:blur(12px); }
        .gold-line { width:60px; height:1px; background:#C8A97E; }
        input:focus, select:focus { border-color:#C8A97E !important; }
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
            {['Cars', 'Service', 'Test Drive'].map((l) => (
              <a key={l} href="#" style={{ fontSize: 13, fontWeight: 300, color: '#b0adb8', letterSpacing: '0.05em' }}>{l}</a>
            ))}
          </div>
          <button className="gold-btn" style={{ padding: '8px 22px', fontSize: 11 }}>My Account</button>
        </div>
      </nav>

      <div style={{ paddingTop: 100, maxWidth: 1440, margin: '0 auto', padding: '100px 80px 60px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div className="gold-line" />
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Checkout</span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 300, color: '#fff', marginBottom: 8 }}>Complete Your Order</h1>
        <p style={{ fontSize: 15, fontWeight: 300, color: '#6b6880', marginBottom: 48 }}>Finalize your configuration and select your preferred acquisition method.</p>

        {/* Step Indicator */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 0, marginBottom: 56 }}>
          {STEPS.map((s, i) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: i <= step ? 'rgba(200,169,126,0.15)' : 'transparent',
                  border: i <= step ? '1.5px solid #C8A97E' : '1.5px solid rgba(200,169,126,0.15)',
                  transition: 'all 0.3s'
                }}>
                  {i < step ? <Check size={16} color="#C8A97E" /> : <span style={{ fontSize: 13, fontWeight: 500, color: i <= step ? '#C8A97E' : '#3a3748' }}>{i + 1}</span>}
                </div>
                <span style={{ fontSize: 13, fontWeight: 500, color: i <= step ? '#C8A97E' : '#3a3748', letterSpacing: '0.05em' }}>{s}</span>
              </div>
              {i < STEPS.length - 1 && <div style={{ width: 80, height: 1, background: i < step ? '#C8A97E' : 'rgba(200,169,126,0.1)', margin: '0 16px', transition: 'all 0.3s' }} />}
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.4fr 1fr', gap: 48 }}>
          {/* LEFT — Main Content */}
          <div>
            {/* Vehicle Card */}
            <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, overflow: 'hidden', marginBottom: 32 }}>
              <div style={{ display: 'grid', gridTemplateColumns: '200px 1fr', gap: 0 }}>
                <img src={CAR.image} alt={CAR.name} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 160 }} />
                <div style={{ padding: '24px 28px' }}>
                  <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff', marginBottom: 12 }}>{CAR.name}</h3>
                  <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 8 }}>
                    {[['Exterior', CAR.color], ['Interior', CAR.interior], ['Trim', CAR.trim]].map(([k, v]) => (
                      <div key={k}>
                        <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b' }}>{k}</p>
                        <p style={{ fontSize: 13, color: '#9a97a5' }}>{v}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            {step >= 1 && (
              <div style={{ marginBottom: 32 }}>
                <h3 style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9a97a5', marginBottom: 20 }}>Payment Method</h3>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {PAYMENT_METHODS.map((m) => (
                    <div key={m.id} onClick={() => setPayment(m.id)} style={{
                      background: payment === m.id ? 'rgba(200,169,126,0.06)' : '#111118',
                      border: payment === m.id ? '1px solid rgba(200,169,126,0.35)' : '1px solid rgba(200,169,126,0.08)',
                      borderRadius: 8, padding: '20px 24px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16, transition: 'all 0.3s'
                    }}>
                      <div style={{ width: 48, height: 48, borderRadius: '50%', background: 'rgba(200,169,126,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                        {m.icon}
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 4 }}>{m.title}</p>
                        <p style={{ fontSize: 13, color: '#6b6880' }}>{m.desc}</p>
                      </div>
                      <div style={{
                        width: 20, height: 20, borderRadius: '50%', border: payment === m.id ? '2px solid #C8A97E' : '2px solid rgba(200,169,126,0.15)',
                        display: 'flex', alignItems: 'center', justifyContent: 'center'
                      }}>
                        {payment === m.id && <div style={{ width: 10, height: 10, borderRadius: '50%', background: '#C8A97E' }} />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Contact Info */}
            {step >= 1 && (
              <div>
                <h3 style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#9a97a5', marginBottom: 20 }}>Contact Information</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  <input style={inputStyle} placeholder="Full Name" defaultValue="Ahmed Khan" />
                  <input style={inputStyle} placeholder="Phone" defaultValue="+92 300 1234567" />
                  <input style={inputStyle} placeholder="Email" defaultValue="ahmed@example.com" />
                  <select style={{ ...inputStyle, appearance: 'none', cursor: 'pointer' }} defaultValue="lahore">
                    <option value="lahore">Lahore Dealership</option>
                    <option value="karachi">Karachi Dealership</option>
                    <option value="islamabad">Islamabad Dealership</option>
                  </select>
                </div>
              </div>
            )}
          </div>

          {/* RIGHT — Order Summary */}
          <div>
            <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, padding: '32px 28px', position: 'sticky', top: 100 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff', marginBottom: 24 }}>Order Summary</h3>
              {[
                ['Base Vehicle', fmt(CAR.basePrice)],
                ['Optional Equipment', fmt(CAR.options)],
                ['Delivery & Handling', fmt(CAR.delivery)],
                ['Estimated Tax', fmt(CAR.tax)],
              ].map(([k, v]) => (
                <div key={k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 14 }}>
                  <span style={{ fontSize: 13, color: '#6b6880' }}>{k}</span>
                  <span style={{ fontSize: 13, color: '#9a97a5', fontWeight: 500 }}>{v}</span>
                </div>
              ))}
              <div style={{ borderTop: '1px solid rgba(200,169,126,0.12)', paddingTop: 16, marginTop: 8, display: 'flex', justifyContent: 'space-between' }}>
                <span style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>Total</span>
                <span style={{ fontSize: 20, fontWeight: 600, color: '#C8A97E' }}>{fmt(total)}</span>
              </div>

              <button className="gold-btn" onClick={() => setConfirmed(true)} style={{ width: '100%', marginTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
                Confirm Order <ChevronRight size={16} />
              </button>

              <p style={{ fontSize: 11, fontWeight: 300, color: '#4e453b', lineHeight: 1.6, marginTop: 16, textAlign: 'center' }}>
                By clicking confirm, you agree to our Terms of Service and Privacy Policy. A specialist will contact you within 24 hours.
              </p>

              <div style={{ display: 'flex', gap: 16, marginTop: 24, justifyContent: 'center' }}>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <ShieldCheck size={14} color="#C8A97E" />
                  <span style={{ fontSize: 11, color: '#5a5768' }}>Secure</span>
                </div>
                <div style={{ display: 'flex', alignItems: 'center', gap: 6 }}>
                  <Clock size={14} color="#C8A97E" />
                  <span style={{ fontSize: 11, color: '#5a5768' }}>24h Response</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(200,169,126,0.1)', marginTop: 80, padding: '40px 0 20px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                <Star size={14} color="#C8A97E" />
              </div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: '#fff' }}>Mercedes-Benz</span>
            </div>
            <p style={{ fontSize: 13, fontWeight: 300, color: '#5a5768', lineHeight: 1.7, maxWidth: 280 }}>Representing the pinnacle of automotive luxury and technical innovation since 1926.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Explore</h4>
            {['Cars', 'My Orders', 'Wishlist', 'Test Drive', 'Service'].map((l) => (
              <a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10 }}>{l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Legal</h4>
            {['Legal', 'Privacy', 'Contact'].map((l) => (
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
