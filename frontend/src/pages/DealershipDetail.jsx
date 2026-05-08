import { useState } from 'react';
import { Star, MapPin, Phone, Clock, Mail, Globe, ChevronRight, Calendar, Car, Wrench, Award, Users, MessageSquare, Navigation, ExternalLink } from 'lucide-react';

const DEALER = {
  name: 'Mercedes-Benz Lahore Central',
  type: 'Flagship Dealership',
  address: 'Main Boulevard, Gulberg III, Lahore, Pakistan',
  phone: '+92 42 3571 2345',
  email: 'lahore@mercedes-benz.pk',
  website: 'www.mercedes-benz-lahore.pk',
  hours: [
    { day: 'Monday - Friday', time: '9:00 AM - 8:00 PM' },
    { day: 'Saturday', time: '10:00 AM - 6:00 PM' },
    { day: 'Sunday', time: 'Closed' },
  ],
  rating: 4.9,
  reviews: 128,
  image: 'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1200&q=80',
  gallery: [
    'https://images.unsplash.com/photo-1497366216548-37526070297c?w=400&q=80',
    'https://images.unsplash.com/photo-1486325212027-8081e485255e?w=400&q=80',
    'https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=400&q=80',
  ],
  services: ['New Car Sales', 'Certified Pre-Owned', 'Service Center', 'AMG Performance Center', 'Parts & Accessories', 'Finance & Insurance'],
  team: [
    { name: 'Imran Malik', role: 'General Manager', image: null },
    { name: 'Sara Qureshi', role: 'Sales Director', image: null },
    { name: 'Ali Hassan', role: 'Service Manager', image: null },
    { name: 'Fatima Zaidi', role: 'Customer Relations', image: null },
  ],
  inventory: { sedans: 12, suvs: 8, amg: 5, electric: 3 },
};

const REVIEWS = [
  { name: 'Hamza A.', rating: 5, date: 'Apr 2024', text: 'Absolutely stellar experience. The team made my S-Class purchase feel truly special. White-glove service from start to finish.' },
  { name: 'Ayesha K.', rating: 5, date: 'Mar 2024', text: 'Best dealership in Pakistan. The AMG center is incredible — they let me configure every detail of my GT.' },
  { name: 'Omar R.', rating: 4, date: 'Feb 2024', text: 'Great service department. Quick turnaround on my G-Class maintenance. Staff is knowledgeable and professional.' },
];

export default function DealershipDetail() {
  const [activeTab, setActiveTab] = useState('Overview');
  const tabs = ['Overview', 'Services', 'Team', 'Reviews'];

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
          <button className="gold-btn" style={{ padding: '8px 22px', fontSize: 11 }}>Back to All</button>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ position: 'relative', height: 380, overflow: 'hidden', marginTop: 72 }}>
        <img src={DEALER.image} alt={DEALER.name} style={{ width: '100%', height: '100%', objectFit: 'cover', filter: 'brightness(0.3)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'flex-end', padding: '0 80px 48px' }}>
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.15em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 8 }}>{DEALER.type}</span>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 44, fontWeight: 300, color: '#fff', marginBottom: 12 }}>{DEALER.name}</h1>
          <div style={{ display: 'flex', gap: 24, alignItems: 'center' }}>
            <span style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 13, color: '#9a97a5' }}><MapPin size={14} color="#C8A97E" /> {DEALER.address}</span>
            <span style={{ display: 'flex', alignItems: 'center', gap: 4, fontSize: 13, color: '#C8A97E' }}><Star size={13} color="#C8A97E" fill="#C8A97E" /> {DEALER.rating} ({DEALER.reviews} reviews)</span>
          </div>
        </div>
      </div>

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
        {/* TABS */}
        <div style={{ display: 'flex', gap: 0, borderBottom: '1px solid rgba(200,169,126,0.08)', marginBottom: 40 }}>
          {tabs.map((t) => (
            <button key={t} onClick={() => setActiveTab(t)} style={{
              padding: '18px 28px', fontSize: 13, fontWeight: 500,
              background: 'none', border: 'none', borderBottom: activeTab === t ? '2px solid #C8A97E' : '2px solid transparent',
              color: activeTab === t ? '#C8A97E' : '#5a5768', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif",
            }}>{t}</button>
          ))}
        </div>

        {activeTab === 'Overview' && (
          <div style={{ display: 'grid', gridTemplateColumns: '1.5fr 1fr', gap: 48, marginBottom: 80 }}>
            <div>
              {/* Contact Info */}
              <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, padding: '28px', marginBottom: 24 }}>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff', marginBottom: 20 }}>Contact Information</h3>
                {[
                  { icon: <Phone size={16} color="#C8A97E" />, label: 'Phone', val: DEALER.phone },
                  { icon: <Mail size={16} color="#C8A97E" />, label: 'Email', val: DEALER.email },
                  { icon: <Globe size={16} color="#C8A97E" />, label: 'Website', val: DEALER.website },
                  { icon: <MapPin size={16} color="#C8A97E" />, label: 'Address', val: DEALER.address },
                ].map((item) => (
                  <div key={item.label} style={{ display: 'flex', alignItems: 'center', gap: 14, marginBottom: 16 }}>
                    <div style={{ width: 36, height: 36, borderRadius: '50%', background: 'rgba(200,169,126,0.06)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>{item.icon}</div>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b' }}>{item.label}</p>
                      <p style={{ fontSize: 14, color: '#9a97a5' }}>{item.val}</p>
                    </div>
                  </div>
                ))}
              </div>

              {/* Gallery */}
              <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 20, fontWeight: 400, color: '#fff', marginBottom: 16 }}>Gallery</h3>
              <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 12 }}>
                {DEALER.gallery.map((img, i) => (
                  <img key={i} src={img} alt={`Gallery ${i + 1}`} style={{ width: '100%', height: 120, objectFit: 'cover', borderRadius: 6, border: '1px solid rgba(200,169,126,0.08)' }} />
                ))}
              </div>
            </div>

            {/* Right Sidebar */}
            <div>
              {/* Hours */}
              <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, padding: '28px', marginBottom: 20 }}>
                <h3 style={{ fontSize: 14, fontWeight: 500, color: '#fff', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}><Clock size={16} color="#C8A97E" /> Business Hours</h3>
                {DEALER.hours.map((h) => (
                  <div key={h.day} style={{ display: 'flex', justifyContent: 'space-between', marginBottom: 10 }}>
                    <span style={{ fontSize: 13, color: '#6b6880' }}>{h.day}</span>
                    <span style={{ fontSize: 13, color: h.time === 'Closed' ? '#e74c3c' : '#C8A97E', fontWeight: 500 }}>{h.time}</span>
                  </div>
                ))}
              </div>

              {/* Inventory */}
              <div style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, padding: '28px', marginBottom: 20 }}>
                <h3 style={{ fontSize: 14, fontWeight: 500, color: '#fff', marginBottom: 16, display: 'flex', alignItems: 'center', gap: 8 }}><Car size={16} color="#C8A97E" /> Current Inventory</h3>
                <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
                  {Object.entries(DEALER.inventory).map(([k, v]) => (
                    <div key={k} style={{ textAlign: 'center', padding: '14px', background: 'rgba(200,169,126,0.04)', borderRadius: 6, border: '1px solid rgba(200,169,126,0.06)' }}>
                      <p style={{ fontSize: 22, fontWeight: 600, color: '#fff' }}>{v}</p>
                      <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.08em', textTransform: 'uppercase', color: '#5a5768' }}>{k}</p>
                    </div>
                  ))}
                </div>
              </div>

              {/* Actions */}
              <div style={{ display: 'flex', flexDirection: 'column', gap: 10 }}>
                <button className="gold-btn" style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8 }}><Calendar size={14} /> Book Appointment</button>
                <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 8, padding: '14px', background: 'none', border: '1px solid rgba(200,169,126,0.2)', borderRadius: 0, color: '#7a7788', fontSize: 13, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}><Navigation size={14} /> Get Directions</button>
              </div>
            </div>
          </div>
        )}

        {activeTab === 'Services' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: 16, marginBottom: 80 }}>
            {DEALER.services.map((s) => (
              <div key={s} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '28px 24px', display: 'flex', alignItems: 'center', gap: 16 }}>
                <div style={{ width: 44, height: 44, borderRadius: '50%', background: 'rgba(200,169,126,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', flexShrink: 0 }}>
                  <Wrench size={20} color="#C8A97E" />
                </div>
                <div>
                  <p style={{ fontSize: 15, fontWeight: 500, color: '#fff' }}>{s}</p>
                  <p style={{ fontSize: 12, color: '#4e453b' }}>Available at this location</p>
                </div>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Team' && (
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 80 }}>
            {DEALER.team.map((m) => (
              <div key={m.name} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '32px 24px', textAlign: 'center' }}>
                <div style={{ width: 72, height: 72, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(200,169,126,0.15), rgba(200,169,126,0.05))', border: '2px solid rgba(200,169,126,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 16px' }}>
                  <Users size={28} color="#C8A97E" />
                </div>
                <h4 style={{ fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 4 }}>{m.name}</h4>
                <p style={{ fontSize: 12, color: '#C8A97E', marginBottom: 16 }}>{m.role}</p>
                <button style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 5, padding: '8px 16px', background: 'none', border: '1px solid rgba(200,169,126,0.15)', borderRadius: 4, color: '#6b6880', fontSize: 11, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", margin: '0 auto' }}>
                  <MessageSquare size={12} /> Contact
                </button>
              </div>
            ))}
          </div>
        )}

        {activeTab === 'Reviews' && (
          <div style={{ maxWidth: 700, marginBottom: 80 }}>
            {REVIEWS.map((r, i) => (
              <div key={i} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '24px 28px', marginBottom: 16 }}>
                <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: 12 }}>
                  <div style={{ display: 'flex', alignItems: 'center', gap: 12 }}>
                    <div style={{ width: 40, height: 40, borderRadius: '50%', background: 'rgba(200,169,126,0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                      <span style={{ fontSize: 16, fontWeight: 600, color: '#C8A97E' }}>{r.name[0]}</span>
                    </div>
                    <div>
                      <p style={{ fontSize: 14, fontWeight: 500, color: '#fff' }}>{r.name}</p>
                      <p style={{ fontSize: 11, color: '#4e453b' }}>{r.date}</p>
                    </div>
                  </div>
                  <div style={{ display: 'flex', gap: 2 }}>
                    {[...Array(5)].map((_, j) => (
                      <Star key={j} size={13} color="#C8A97E" fill={j < r.rating ? '#C8A97E' : 'none'} />
                    ))}
                  </div>
                </div>
                <p style={{ fontSize: 13, color: '#9a97a5', lineHeight: 1.7 }}>{r.text}</p>
              </div>
            ))}
          </div>
        )}
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
