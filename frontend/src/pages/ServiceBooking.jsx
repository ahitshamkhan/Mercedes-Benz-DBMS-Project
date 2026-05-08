import { useState } from 'react';
import { Star, Droplets, CircleDot, ClipboardCheck, Wrench, ShieldCheck, MapPin, Calendar, Clock, ChevronRight, Check, Info } from 'lucide-react';

const SERVICES = [
  { id: 'oil', icon: <Droplets size={22} color="#C8A97E" />, title: 'Oil & Filter Change', desc: 'Synthetic oil and filter replacement', price: 'PKR 35,000', duration: '1 hour' },
  { id: 'tires', icon: <CircleDot size={22} color="#C8A97E" />, title: 'Tire Service', desc: 'Alignment, rotation, and balance', price: 'PKR 25,000', duration: '1.5 hours' },
  { id: 'inspect', icon: <ClipboardCheck size={22} color="#C8A97E" />, title: 'Full Inspection', desc: 'Comprehensive multi-point health check', price: 'PKR 15,000', duration: '2 hours' },
  { id: 'repair', icon: <Wrench size={22} color="#C8A97E" />, title: 'Repair & Diagnostics', desc: 'Mechanical or technical diagnostic', price: 'PKR 20,000', duration: '2-4 hours' },
  { id: 'premium', icon: <ShieldCheck size={22} color="#C8A97E" />, title: 'Premium Care Package', desc: 'The ultimate maintenance package', price: 'PKR 95,000', duration: '4 hours' },
];

const DEALERS = [
  { name: 'Lahore — Central Branch', address: 'Main Boulevard, Gulberg III' },
  { name: 'Karachi — DHA Phase VI', address: 'Khayaban-e-Ittehad' },
  { name: 'Islamabad — Blue Area', address: 'Jinnah Avenue' },
];

const TIME_SLOTS = ['08:00 AM', '09:30 AM', '11:00 AM', '01:00 PM', '02:30 PM', '04:00 PM'];

export default function ServiceBooking() {
  const [selectedServices, setSelectedServices] = useState([]);
  const [selectedDealer, setSelectedDealer] = useState(null);
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState(null);
  const [vehicleReg, setVehicleReg] = useState('');
  const [notes, setNotes] = useState('');

  const toggleService = (id) => {
    setSelectedServices((prev) =>
      prev.includes(id) ? prev.filter((s) => s !== id) : [...prev, id]
    );
  };

  const totalPrice = selectedServices.reduce((sum, id) => {
    const svc = SERVICES.find((s) => s.id === id);
    return sum + (svc ? parseInt(svc.price.replace(/[^\d]/g, '')) : 0);
  }, 0);

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
        input:focus, textarea:focus { border-color:#C8A97E !important; }
        input::placeholder, textarea::placeholder { color:#3a3748; }
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
            {['Service', 'Cars', 'Experience'].map((l) => (
              <a key={l} href="#" style={{ fontSize: 13, fontWeight: l === 'Service' ? 500 : 300, color: l === 'Service' ? '#C8A97E' : '#b0adb8', letterSpacing: '0.05em' }}>{l}</a>
            ))}
          </div>
          <button className="gold-btn" style={{ padding: '8px 22px', fontSize: 11 }}>My Account</button>
        </div>
      </nav>

      {/* HEADER */}
      <div style={{ paddingTop: 100, maxWidth: 1440, margin: '0 auto', padding: '100px 80px 0' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div className="gold-line" />
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Mercedes Care</span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 300, color: '#fff', marginBottom: 8 }}>Service Appointment</h1>
        <p style={{ fontSize: 15, fontWeight: 300, color: '#6b6880', marginBottom: 48 }}>Precision engineering deserves specialized care. Secure your appointment with our master technicians.</p>
      </div>

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px 80px', display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 48 }}>
        {/* LEFT */}
        <div>
          {/* SECTION 01: Service Type */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 400, color: '#fff', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: '#C8A97E', letterSpacing: '0.1em' }}>01</span> Select Service Type
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {SERVICES.map((svc) => {
                const active = selectedServices.includes(svc.id);
                return (
                  <div key={svc.id} onClick={() => toggleService(svc.id)} style={{
                    background: active ? 'rgba(200,169,126,0.06)' : '#111118',
                    border: active ? '1px solid rgba(200,169,126,0.35)' : '1px solid rgba(200,169,126,0.08)',
                    borderRadius: 8, padding: '18px 24px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16, transition: 'all 0.3s',
                  }}>
                    <div style={{ width: 20, height: 20, borderRadius: 4, border: active ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.2)', background: active ? 'rgba(200,169,126,0.15)' : 'transparent', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                      {active && <Check size={12} color="#C8A97E" />}
                    </div>
                    <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(200,169,126,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{svc.icon}</div>
                    <div style={{ flex: 1 }}>
                      <p style={{ fontSize: 15, fontWeight: 500, color: '#fff', marginBottom: 2 }}>{svc.title}</p>
                      <p style={{ fontSize: 12, color: '#6b6880' }}>{svc.desc} • {svc.duration}</p>
                    </div>
                    <span style={{ fontSize: 14, fontWeight: 600, color: '#C8A97E', whiteSpace: 'nowrap' }}>{svc.price}</span>
                  </div>
                );
              })}
            </div>
          </div>

          {/* SECTION 02: Dealership */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 400, color: '#fff', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: '#C8A97E', letterSpacing: '0.1em' }}>02</span> Dealership
            </h2>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
              {DEALERS.map((d, i) => (
                <div key={d.name} onClick={() => setSelectedDealer(i)} style={{
                  background: selectedDealer === i ? 'rgba(200,169,126,0.06)' : '#111118',
                  border: selectedDealer === i ? '1px solid rgba(200,169,126,0.35)' : '1px solid rgba(200,169,126,0.08)',
                  borderRadius: 8, padding: '18px 24px', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: 16, transition: 'all 0.3s',
                }}>
                  <MapPin size={18} color={selectedDealer === i ? '#C8A97E' : '#4e453b'} />
                  <div style={{ flex: 1 }}>
                    <p style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>{d.name}</p>
                    <p style={{ fontSize: 12, color: '#6b6880' }}>{d.address}</p>
                  </div>
                  {selectedDealer === i && <Check size={16} color="#C8A97E" />}
                </div>
              ))}
            </div>
          </div>

          {/* SECTION 03: Schedule */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 400, color: '#fff', marginBottom: 24, display: 'flex', alignItems: 'center', gap: 12 }}>
              <span style={{ fontSize: 13, fontWeight: 500, color: '#C8A97E', letterSpacing: '0.1em' }}>03</span> Schedule
            </h2>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 16, marginBottom: 20 }}>
              <div>
                <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b6880', marginBottom: 8, display: 'block' }}>Date</label>
                <input type="date" value={selectedDate} onChange={(e) => setSelectedDate(e.target.value)} style={{ ...inputStyle, colorScheme: 'dark' }} />
              </div>
              <div>
                <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b6880', marginBottom: 8, display: 'block' }}>Vehicle Registration</label>
                <input value={vehicleReg} onChange={(e) => setVehicleReg(e.target.value)} placeholder="LEA-1234" style={inputStyle} />
              </div>
            </div>
            <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b6880', marginBottom: 10, display: 'block' }}>Time Slot</label>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 10, marginBottom: 20 }}>
              {TIME_SLOTS.map((t, i) => (
                <button key={t} onClick={() => setSelectedTime(i)} style={{
                  padding: '12px', background: selectedTime === i ? 'rgba(200,169,126,0.12)' : '#111118',
                  border: selectedTime === i ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.08)',
                  borderRadius: 6, color: selectedTime === i ? '#C8A97E' : '#7a7788', fontSize: 13, fontWeight: 500,
                  cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.3s', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6,
                }}>
                  <Clock size={13} /> {t}
                </button>
              ))}
            </div>
            <label style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#6b6880', marginBottom: 8, display: 'block' }}>Additional Notes</label>
            <textarea value={notes} onChange={(e) => setNotes(e.target.value)} placeholder="Describe any specific concerns..." rows={3}
              style={{ ...inputStyle, resize: 'vertical', lineHeight: 1.6 }} />
          </div>
        </div>

        {/* RIGHT — Summary Sidebar */}
        <div>
          <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, padding: '32px 28px', position: 'sticky', top: 100 }}>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff', marginBottom: 24 }}>Booking Summary</h3>

            {selectedServices.length > 0 ? (
              <>
                {selectedServices.map((id) => {
                  const svc = SERVICES.find((s) => s.id === id);
                  return (
                    <div key={id} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                      <span style={{ fontSize: 13, color: '#9a97a5' }}>{svc.title}</span>
                      <span style={{ fontSize: 13, color: '#C8A97E', fontWeight: 500 }}>{svc.price}</span>
                    </div>
                  );
                })}
                <div style={{ borderTop: '1px solid rgba(200,169,126,0.12)', paddingTop: 14, marginTop: 8, display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>Estimated Total</span>
                  <span style={{ fontSize: 20, fontWeight: 600, color: '#C8A97E' }}>PKR {totalPrice.toLocaleString()}</span>
                </div>
              </>
            ) : (
              <p style={{ fontSize: 13, color: '#3a3748', fontStyle: 'italic' }}>No services selected yet.</p>
            )}

            {selectedDealer !== null && (
              <div style={{ marginTop: 20, padding: '14px 16px', background: 'rgba(200,169,126,0.04)', borderRadius: 6, border: '1px solid rgba(200,169,126,0.08)' }}>
                <p style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 4 }}>Location</p>
                <p style={{ fontSize: 13, color: '#9a97a5' }}>{DEALERS[selectedDealer].name}</p>
              </div>
            )}

            <button className="gold-btn" style={{ width: '100%', marginTop: 28, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}>
              Book Appointment <ChevronRight size={16} />
            </button>

            <div style={{ display: 'flex', alignItems: 'flex-start', gap: 8, marginTop: 16 }}>
              <Info size={14} color="#4e453b" style={{ marginTop: 2, flexShrink: 0 }} />
              <p style={{ fontSize: 11, fontWeight: 300, color: '#4e453b', lineHeight: 1.6 }}>
                Your booking is protected by our global privacy standards. A service advisor will contact you within 2 business hours to confirm.
              </p>
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
            <p style={{ fontSize: 13, fontWeight: 300, color: '#5a5768', lineHeight: 1.7, maxWidth: 280 }}>Experience the pinnacle of automotive excellence. Built on a century of innovation.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Navigation</h4>
            {['Cars', 'My Orders', 'Wishlist', 'Test Drive', 'Service', 'Admin'].map((l) => (
              <a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10 }}>{l}</a>
            ))}
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Newsletter</h4>
            <p style={{ fontSize: 13, fontWeight: 300, color: '#5a5768', lineHeight: 1.7 }}>Stay updated with exclusive offers and events.</p>
          </div>
        </div>
        <div style={{ maxWidth: 1440, margin: '20px auto 0', padding: '16px 80px 0', borderTop: '1px solid rgba(200,169,126,0.08)' }}>
          <p style={{ fontSize: 12, color: '#3a3748', textAlign: 'center' }}>© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
