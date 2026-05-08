import { useState } from 'react';
import { Star, Package, CheckCircle2, Truck, MapPin, Clock, FileText, Phone, MessageSquare, ChevronRight } from 'lucide-react';

const ORDER = {
  id: 'ORD-2024-002',
  car: 'AMG GT Coupé',
  image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80',
  color: 'Obsidian Black',
  trim: 'AMG GT 63',
  price: 'PKR 120,000,000',
  orderDate: 'Jan 12, 2024',
  estimatedDelivery: 'Jun 15, 2024',
  dealer: 'Karachi — DHA Phase VI',
  advisor: 'Fatima Zaidi',
  advisorPhone: '+92 321 9876543',
};

const TIMELINE = [
  { step: 'Order Confirmed', date: 'Jan 12, 2024', time: '02:45 PM', desc: 'Your order has been received and payment verified.', done: true },
  { step: 'Production Started', date: 'Feb 08, 2024', time: '10:00 AM', desc: 'Your vehicle has entered the production line at Sindelfingen, Germany.', done: true },
  { step: 'Quality Inspection', date: 'Mar 22, 2024', time: '03:30 PM', desc: 'Final quality checks and road testing completed.', done: true },
  { step: 'Shipped to Pakistan', date: 'Apr 05, 2024', time: '09:15 AM', desc: 'Vehicle dispatched via secured sea freight to Karachi port.', done: true, active: true },
  { step: 'Customs Clearance', date: 'Pending', time: '', desc: 'Awaiting customs inspection and documentation.', done: false },
  { step: 'Dealership Arrival', date: 'Pending', time: '', desc: 'Vehicle arrives at your selected dealership for final prep.', done: false },
  { step: 'Ready for Delivery', date: 'Pending', time: '', desc: 'Final detailing complete. Schedule your pickup appointment.', done: false },
];

export default function OrderTracking() {
  const [selectedOrder, setSelectedOrder] = useState(ORDER.id);

  const currentStep = TIMELINE.findIndex((t) => t.active) + 1;
  const progress = Math.round((currentStep / TIMELINE.length) * 100);

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

      {/* CONTENT */}
      <div style={{ paddingTop: 100, maxWidth: 1440, margin: '0 auto', padding: '100px 80px 60px' }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div className="gold-line" />
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Order Status</span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 42, fontWeight: 300, color: '#fff', marginBottom: 8 }}>Track Your Order</h1>
        <p style={{ fontSize: 15, fontWeight: 300, color: '#6b6880', marginBottom: 48 }}>Follow your vehicle's journey from production to delivery.</p>

        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.4fr', gap: 48 }}>
          {/* LEFT — Vehicle Card & Info */}
          <div>
            {/* Vehicle Card */}
            <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, overflow: 'hidden', marginBottom: 20 }}>
              <img src={ORDER.image} alt={ORDER.car} style={{ width: '100%', height: 200, objectFit: 'cover' }} />
              <div style={{ padding: '24px' }}>
                <span style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E' }}>{ORDER.id}</span>
                <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 400, color: '#fff', margin: '6px 0 16px' }}>{ORDER.car}</h2>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {[['Color', ORDER.color], ['Trim', ORDER.trim], ['Ordered', ORDER.orderDate], ['Est. Delivery', ORDER.estimatedDelivery]].map(([k, v]) => (
                    <div key={k}>
                      <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b' }}>{k}</p>
                      <p style={{ fontSize: 13, color: '#9a97a5', fontWeight: 500 }}>{v}</p>
                    </div>
                  ))}
                </div>
                <div style={{ borderTop: '1px solid rgba(200,169,126,0.08)', marginTop: 16, paddingTop: 16, display: 'flex', justifyContent: 'space-between' }}>
                  <span style={{ fontSize: 13, color: '#6b6880' }}>Total Price</span>
                  <span style={{ fontSize: 18, fontWeight: 600, color: '#C8A97E' }}>{ORDER.price}</span>
                </div>
              </div>
            </div>

            {/* Progress Bar */}
            <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '24px' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 12 }}>
                <span style={{ fontSize: 13, fontWeight: 500, color: '#e4e1eb' }}>Overall Progress</span>
                <span style={{ fontSize: 13, fontWeight: 600, color: '#C8A97E' }}>{progress}%</span>
              </div>
              <div style={{ height: 8, background: '#1f1f26', borderRadius: 4, overflow: 'hidden' }}>
                <div style={{ width: `${progress}%`, height: '100%', background: 'linear-gradient(90deg, #C8A97E, #e5c497)', borderRadius: 4, transition: 'width 1s ease' }} />
              </div>
              <p style={{ fontSize: 11, color: '#4e453b', marginTop: 10 }}>Step {currentStep} of {TIMELINE.length}</p>
            </div>

            {/* Contact Advisor */}
            <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '24px', marginTop: 20 }}>
              <h3 style={{ fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 16 }}>Your Advisor</h3>
              <div style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(200,169,126,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                  <Star size={18} color="#C8A97E" />
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 500, color: '#fff' }}>{ORDER.advisor}</p>
                  <p style={{ fontSize: 12, color: '#6b6880' }}>{ORDER.dealer}</p>
                </div>
              </div>
              <div style={{ display: 'flex', gap: 10 }}>
                <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px', background: 'none', border: '1px solid rgba(200,169,126,0.2)', borderRadius: 4, color: '#C8A97E', fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                  <Phone size={14} /> Call
                </button>
                <button style={{ flex: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px', background: 'none', border: '1px solid rgba(200,169,126,0.2)', borderRadius: 4, color: '#C8A97E', fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                  <MessageSquare size={14} /> Message
                </button>
              </div>
            </div>
          </div>

          {/* RIGHT — Timeline */}
          <div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 24, fontWeight: 400, color: '#fff', marginBottom: 32 }}>Delivery Timeline</h2>
            <div style={{ position: 'relative' }}>
              {TIMELINE.map((step, i) => {
                const isLast = i === TIMELINE.length - 1;
                return (
                  <div key={step.step} style={{ display: 'flex', gap: 20, marginBottom: isLast ? 0 : 8 }}>
                    {/* Dot & Line */}
                    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', minWidth: 32 }}>
                      <div style={{
                        width: step.active ? 20 : 16, height: step.active ? 20 : 16, borderRadius: '50%',
                        background: step.done ? (step.active ? '#C8A97E' : 'rgba(46,204,113,0.2)') : '#1f1f26',
                        border: step.done ? (step.active ? '3px solid rgba(200,169,126,0.3)' : '2px solid #2ecc71') : '2px solid #2a2931',
                        display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 2, flexShrink: 0,
                        boxShadow: step.active ? '0 0 12px rgba(200,169,126,0.4)' : 'none',
                      }}>
                        {step.done && !step.active && <CheckCircle2 size={10} color="#2ecc71" />}
                      </div>
                      {!isLast && (
                        <div style={{ width: 2, flex: 1, minHeight: 50, background: step.done ? 'rgba(46,204,113,0.2)' : '#1f1f26' }} />
                      )}
                    </div>

                    {/* Content */}
                    <div style={{
                      flex: 1, paddingBottom: isLast ? 0 : 24,
                      background: step.active ? 'rgba(200,169,126,0.04)' : 'transparent',
                      border: step.active ? '1px solid rgba(200,169,126,0.12)' : '1px solid transparent',
                      borderRadius: step.active ? 8 : 0, padding: step.active ? '18px 20px' : '4px 0',
                    }}>
                      <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-start', marginBottom: 4 }}>
                        <h4 style={{ fontSize: 15, fontWeight: 500, color: step.done ? '#fff' : '#3a3748' }}>{step.step}</h4>
                        {step.active && <span style={{ fontSize: 10, fontWeight: 500, padding: '3px 10px', background: 'rgba(200,169,126,0.12)', border: '1px solid rgba(200,169,126,0.2)', borderRadius: 20, color: '#C8A97E' }}>Current</span>}
                      </div>
                      <p style={{ fontSize: 12, color: step.done ? '#6b6880' : '#2a2931', marginBottom: 4 }}>{step.desc}</p>
                      {step.date !== 'Pending' && (
                        <div style={{ display: 'flex', gap: 12, marginTop: 6 }}>
                          <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 11, color: '#4e453b' }}><Clock size={11} /> {step.date}</span>
                          {step.time && <span style={{ fontSize: 11, color: '#4e453b' }}>{step.time}</span>}
                        </div>
                      )}
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(200,169,126,0.1)', marginTop: 80, padding: '40px 0 20px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
          <p style={{ fontSize: 12, color: '#3a3748', textAlign: 'center' }}>© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
