import { useState } from 'react';
import { Star, CreditCard, UserCheck, BadgeCheck, Calendar, Clock, MapPin, Car, ChevronRight, ChevronLeft, Check } from 'lucide-react';

const CARS = [
  { id: 1, name: 'S-Class 500', category: 'Sedan', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=400&q=80' },
  { id: 2, name: 'AMG GT Coupé', category: 'AMG', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=400&q=80' },
  { id: 3, name: 'G-Wagon G63', category: 'SUV', image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=400&q=80' },
  { id: 4, name: 'EQS Sedan', category: 'Electric', image: 'https://images.unsplash.com/photo-1625231334401-67c9eef63a78?w=400&q=80' },
];

const DEALERSHIPS = [
  { name: 'Lahore — Central Branch', address: 'Main Boulevard, Gulberg III' },
  { name: 'Karachi — DHA Phase VI', address: 'Khayaban-e-Ittehad, DHA Phase VI' },
  { name: 'Islamabad — Blue Area', address: 'Jinnah Avenue, Blue Area' },
];

const TIME_SLOTS = ['09:00 AM', '10:30 AM', '12:00 PM', '02:00 PM', '03:30 PM', '05:00 PM'];

const REQUIREMENTS = [
  { icon: <CreditCard size={20} color="#C8A97E" />, label: 'Valid Driving License' },
  { icon: <UserCheck size={20} color="#C8A97E" />, label: 'Proof of Identity' },
  { icon: <BadgeCheck size={20} color="#C8A97E" />, label: 'Appointment Confirmation' },
];

export default function BookTestDrive() {
  const [step, setStep] = useState(0);
  const [selectedCar, setSelectedCar] = useState(null);
  const [selectedDealer, setSelectedDealer] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);
  const [name, setName] = useState('');
  const [phone, setPhone] = useState('');

  const steps = ['Select Vehicle', 'Choose Location', 'Pick Date & Time', 'Confirm'];
  const canProceed = () => {
    if (step === 0) return selectedCar !== null;
    if (step === 1) return selectedDealer !== null;
    if (step === 2) return selectedDate && selectedTime !== null;
    return true;
  };

  const inputStyle = {
    width: '100%', padding: '14px 16px', background: '#111118',
    border: '1px solid rgba(200,169,126,0.12)', borderRadius: 6, color: '#e4e1eb',
    fontSize: 14, fontFamily: "'DM Sans', sans-serif", outline: 'none', transition: 'border 0.3s',
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
        .card-hover { transition:transform 0.4s, box-shadow 0.4s; cursor:pointer; }
        .card-hover:hover { transform:translateY(-4px); box-shadow:0 0 20px rgba(200,169,126,0.06); }
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
          <button className="gold-btn" style={{ padding: '8px 22px', fontSize: 11 }}>My Account</button>
        </div>
      </nav>

      {/* HERO */}
      <section style={{ paddingTop: 72, position: 'relative', height: '45vh', overflow: 'hidden', display: 'flex', alignItems: 'center' }}>
        <div style={{ position: 'absolute', inset: 0, background: 'url(https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=1400&q=80) center/cover', opacity: 0.2 }} />
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(to top, #0a0a0f 15%, transparent 60%)' }} />
        <div style={{ position: 'relative', zIndex: 2, maxWidth: 1440, margin: '0 auto', padding: '0 80px', width: '100%' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
            <div className="gold-line" />
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Test Drive</span>
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 300, color: '#fff', marginBottom: 12 }}>Experience Excellence</h1>
          <p style={{ fontSize: 16, fontWeight: 300, color: '#7a7788', maxWidth: 520 }}>Book your exclusive test drive experience with the world's most desirable automobiles.</p>
        </div>
      </section>

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px 80px' }}>
        {/* STEP INDICATOR */}
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: 48 }}>
          {steps.map((s, i) => (
            <div key={s} style={{ display: 'flex', alignItems: 'center' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: 10 }}>
                <div style={{
                  width: 36, height: 36, borderRadius: '50%', display: 'flex', alignItems: 'center', justifyContent: 'center',
                  background: i <= step ? 'rgba(200,169,126,0.15)' : 'transparent',
                  border: i <= step ? '1.5px solid #C8A97E' : '1.5px solid rgba(200,169,126,0.15)',
                }}>
                  {i < step ? <Check size={16} color="#C8A97E" /> : <span style={{ fontSize: 13, fontWeight: 500, color: i <= step ? '#C8A97E' : '#3a3748' }}>{i + 1}</span>}
                </div>
                <span style={{ fontSize: 13, fontWeight: 500, color: i <= step ? '#C8A97E' : '#3a3748' }}>{s}</span>
              </div>
              {i < steps.length - 1 && <div style={{ width: 60, height: 1, background: i < step ? '#C8A97E' : 'rgba(200,169,126,0.1)', margin: '0 16px' }} />}
            </div>
          ))}
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 48 }}>
          {/* MAIN CONTENT */}
          <div>
            {/* Step 0: Select Vehicle */}
            {step === 0 && (
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 300, color: '#fff', marginBottom: 24 }}>Select Your Vehicle</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16 }}>
                  {CARS.map((car) => (
                    <div key={car.id} onClick={() => setSelectedCar(car.id)} className="card-hover" style={{
                      background: '#111118', border: selectedCar === car.id ? '1px solid rgba(200,169,126,0.4)' : '1px solid rgba(200,169,126,0.08)',
                      borderRadius: 8, overflow: 'hidden', transition: 'all 0.3s',
                    }}>
                      <img src={car.image} alt={car.name} style={{ width: '100%', height: 140, objectFit: 'cover' }} />
                      <div style={{ padding: '16px 20px', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                        <div>
                          <p style={{ fontSize: 15, fontWeight: 500, color: '#fff' }}>{car.name}</p>
                          <p style={{ fontSize: 11, color: '#6b6880' }}>{car.category}</p>
                        </div>
                        {selectedCar === car.id && <Check size={18} color="#C8A97E" />}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 1: Location */}
            {step === 1 && (
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 300, color: '#fff', marginBottom: 24 }}>Choose Dealership</h2>
                <div style={{ display: 'flex', flexDirection: 'column', gap: 12 }}>
                  {DEALERSHIPS.map((d, i) => (
                    <div key={d.name} onClick={() => setSelectedDealer(i)} style={{
                      background: selectedDealer === i ? 'rgba(200,169,126,0.06)' : '#111118',
                      border: selectedDealer === i ? '1px solid rgba(200,169,126,0.35)' : '1px solid rgba(200,169,126,0.08)',
                      borderRadius: 8, padding: '20px 24px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16, transition: 'all 0.3s',
                    }}>
                      <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(200,169,126,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <MapPin size={20} color="#C8A97E" />
                      </div>
                      <div style={{ flex: 1 }}>
                        <p style={{ fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 4 }}>{d.name}</p>
                        <p style={{ fontSize: 13, color: '#6b6880' }}>{d.address}</p>
                      </div>
                      {selectedDealer === i && <Check size={18} color="#C8A97E" />}
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Step 2: Date & Time */}
            {step === 2 && (
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 300, color: '#fff', marginBottom: 24 }}>Pick Date & Time</h2>
                <div style={{ marginBottom: 28 }}>
                  <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b6880', marginBottom: 8, display: 'block' }}>Preferred Date</label>
                  <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)}
                    style={{ ...inputStyle, colorScheme: 'dark' }} />
                </div>
                <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b6880', marginBottom: 12, display: 'block' }}>Available Slots</label>
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10 }}>
                  {TIME_SLOTS.map((t, i) => (
                    <button key={t} onClick={() => setSelectedTime(i)} style={{
                      padding: '14px', background: selectedTime === i ? 'rgba(200,169,126,0.12)' : '#111118',
                      border: selectedTime === i ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.08)',
                      borderRadius: 6, color: selectedTime === i ? '#C8A97E' : '#7a7788', fontSize: 13, fontWeight: 500,
                      cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                    }}>
                      <Clock size={14} /> {t}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Step 3: Confirm */}
            {step === 3 && (
              <div>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 28, fontWeight: 300, color: '#fff', marginBottom: 24 }}>Your Details</h2>
                <div style={{ display: 'grid', gap: 16, marginBottom: 28 }}>
                  <input style={inputStyle} placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} />
                  <input style={inputStyle} placeholder="Phone Number" value={phone} onChange={(e) => setPhone(e.target.value)} />
                  <input style={inputStyle} placeholder="Email Address" />
                </div>
                <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, padding: '24px' }}>
                  <h3 style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 16 }}>Booking Summary</h3>
                  {[
                    ['Vehicle', CARS.find((c) => c.id === selectedCar)?.name || '—'],
                    ['Dealership', DEALERSHIPS[selectedDealer]?.name || '—'],
                    ['Date', selectedDate || '—'],
                    ['Time', TIME_SLOTS[selectedTime] || '—'],
                  ].map(([k, v]) => (
                    <div key={k} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                      <span style={{ fontSize: 13, color: '#6b6880' }}>{k}</span>
                      <span style={{ fontSize: 13, color: '#e4e1eb', fontWeight: 500 }}>{v}</span>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Nav Buttons */}
            <div style={{ display: 'flex', justifyContent: 'space-between', marginTop: 36 }}>
              <button onClick={() => setStep((s) => Math.max(0, s - 1))} disabled={step === 0} style={{
                display: 'flex', alignItems: 'center', gap: 6, padding: '12px 24px', background: 'none',
                border: step === 0 ? '1px solid rgba(200,169,126,0.08)' : '1px solid rgba(200,169,126,0.2)',
                color: step === 0 ? '#3a3748' : '#b0adb8', fontSize: 13, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase',
                cursor: step === 0 ? 'default' : 'pointer', fontFamily: "'DM Sans', sans-serif", borderRadius: 2,
              }}>
                <ChevronLeft size={16} /> Back
              </button>
              <button onClick={() => step < 3 ? setStep((s) => s + 1) : null} disabled={!canProceed()} className="gold-btn" style={{
                display: 'flex', alignItems: 'center', gap: 6, opacity: canProceed() ? 1 : 0.4, cursor: canProceed() ? 'pointer' : 'default',
              }}>
                {step === 3 ? 'Confirm Booking' : 'Continue'} <ChevronRight size={16} />
              </button>
            </div>
          </div>

          {/* SIDEBAR */}
          <div>
            <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, padding: '32px 28px', position: 'sticky', top: 100 }}>
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff', marginBottom: 8 }}>Precision Redefined.</h3>
              <p style={{ fontSize: 13, fontWeight: 300, color: '#6b6880', lineHeight: 1.7, marginBottom: 28 }}>Your test drive is a fully curated experience designed around your preferences.</p>

              <h4 style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 16 }}>Requirements</h4>
              <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
                {REQUIREMENTS.map((r) => (
                  <div key={r.label} style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(200,169,126,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>{r.icon}</div>
                    <span style={{ fontSize: 13, color: '#9a97a5' }}>{r.label}</span>
                  </div>
                ))}
              </div>

              {selectedCar && (
                <div style={{ marginTop: 28, borderTop: '1px solid rgba(200,169,126,0.08)', paddingTop: 20 }}>
                  <img src={CARS.find((c) => c.id === selectedCar)?.image} alt="" style={{ width: '100%', height: 140, objectFit: 'cover', borderRadius: 6, marginBottom: 12 }} />
                  <p style={{ fontSize: 15, fontWeight: 500, color: '#fff' }}>{CARS.find((c) => c.id === selectedCar)?.name}</p>
                </div>
              )}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(200,169,126,0.1)', padding: '40px 0 20px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Star size={14} color="#C8A97E" /></div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: '#fff' }}>Mercedes-Benz</span>
            </div>
            <p style={{ fontSize: 13, fontWeight: 300, color: '#5a5768', lineHeight: 1.7, maxWidth: 280 }}>Defining the pinnacle of automotive excellence since 1886.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Explore</h4>
            {['Cars', 'Service', 'Test Drive'].map((l) => (<a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10 }}>{l}</a>))}
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Legal</h4>
            {['Legal', 'Privacy', 'Contact'].map((l) => (<a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10 }}>{l}</a>))}
          </div>
        </div>
        <div style={{ maxWidth: 1440, margin: '20px auto 0', padding: '16px 80px 0', borderTop: '1px solid rgba(200,169,126,0.08)' }}>
          <p style={{ fontSize: 12, color: '#3a3748', textAlign: 'center' }}>© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
