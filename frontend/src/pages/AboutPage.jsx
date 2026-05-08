import { useState } from 'react';
import { Star, Award, Users, Globe, Zap, Shield, Heart, ChevronRight, ArrowRight, Clock, MapPin, Target } from 'lucide-react';

const MILESTONES = [
  { year: '1886', title: 'The Beginning', desc: 'Karl Benz patents the Benz Patent-Motorwagen, the world\'s first automobile.' },
  { year: '1926', title: 'Mercedes-Benz Founded', desc: 'Daimler-Motoren-Gesellschaft and Benz & Cie. merge to form Mercedes-Benz.' },
  { year: '1954', title: '300 SL Gullwing', desc: 'The iconic 300 SL with its gullwing doors becomes the fastest production car.' },
  { year: '1998', title: 'Entering Pakistan', desc: 'Mercedes-Benz officially establishes its presence in the Pakistan market.' },
  { year: '2019', title: 'EQ Electric Line', desc: 'Launch of the EQ brand, marking Mercedes-Benz\'s commitment to electric mobility.' },
  { year: '2024', title: 'Digital Transformation', desc: 'Launch of the MB Pakistan digital platform for a seamless luxury experience.' },
];

const VALUES = [
  { icon: <Award size={24} />, title: 'Excellence', desc: 'Every vehicle is a masterpiece of precision engineering and uncompromising quality.' },
  { icon: <Zap size={24} />, title: 'Innovation', desc: 'Pioneering technologies that redefine what is possible in automotive engineering.' },
  { icon: <Shield size={24} />, title: 'Safety', desc: 'Industry-leading safety innovations that protect what matters most — you.' },
  { icon: <Heart size={24} />, title: 'Passion', desc: 'An unwavering dedication to the art of creating the perfect driving experience.' },
];

const LEADERSHIP = [
  { name: 'Ola Källenius', role: 'CEO, Mercedes-Benz Group', image: null },
  { name: 'Tariq Mahmood', role: 'MD, Mercedes-Benz Pakistan', image: null },
  { name: 'Amna Siddiqui', role: 'VP Sales & Marketing', image: null },
  { name: 'Faisal Rehman', role: 'VP After-Sales & Service', image: null },
];

const STATS = [
  { value: '138+', label: 'Years of Innovation' },
  { value: '6', label: 'Dealerships in Pakistan' },
  { value: '50K+', label: 'Vehicles Delivered' },
  { value: '4.8', label: 'Customer Rating' },
];

export default function AboutPage() {
  const [activeTimeline, setActiveTimeline] = useState(0);

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
          <div style={{ display: 'flex', gap: 36 }}>
            {['Cars', 'Dealerships', 'About', 'Contact'].map((l) => (
              <a key={l} href="#" style={{ fontSize: 13, fontWeight: l === 'About' ? 500 : 300, color: l === 'About' ? '#C8A97E' : '#b0adb8', letterSpacing: '0.05em' }}>{l}</a>
            ))}
          </div>
          <button className="gold-btn" style={{ padding: '8px 22px', fontSize: 11 }}>My Account</button>
        </div>
      </nav>

      {/* HERO */}
      <div style={{ position: 'relative', height: 480, overflow: 'hidden', marginTop: 72 }}>
        <div style={{ position: 'absolute', inset: 0, background: 'linear-gradient(135deg, #0a0a0f 0%, #16131e 50%, #0a0a0f 100%)' }} />
        <div style={{ position: 'absolute', inset: 0, display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'center', textAlign: 'center', padding: '0 80px' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 20 }}>
            <div className="gold-line" />
            <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Since 1886</span>
            <div className="gold-line" />
          </div>
          <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 56, fontWeight: 300, color: '#fff', marginBottom: 16, lineHeight: 1.15 }}>The Best or Nothing</h1>
          <p style={{ fontSize: 16, fontWeight: 300, color: '#6b6880', maxWidth: 560, lineHeight: 1.7, marginBottom: 32 }}>
            For over a century, Mercedes-Benz has defined the very essence of automotive luxury, performance, and innovation.
          </p>
          <div style={{ width: 80, height: 80, borderRadius: '50%', border: '2px solid rgba(200,169,126,0.3)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
            <div style={{ width: 60, height: 60, borderRadius: '50%', border: '1.5px solid rgba(200,169,126,0.5)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Star size={24} color="#C8A97E" />
            </div>
          </div>
        </div>
      </div>

      {/* STATS BAR */}
      <div style={{ background: '#111118', borderTop: '1px solid rgba(200,169,126,0.06)', borderBottom: '1px solid rgba(200,169,126,0.06)' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px', display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)' }}>
          {STATS.map((s, i) => (
            <div key={s.label} style={{ padding: '32px 0', textAlign: 'center', borderRight: i < 3 ? '1px solid rgba(200,169,126,0.06)' : 'none' }}>
              <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 400, color: '#C8A97E', marginBottom: 4 }}>{s.value}</p>
              <p style={{ fontSize: 12, fontWeight: 300, color: '#6b6880' }}>{s.label}</p>
            </div>
          ))}
        </div>
      </div>

      <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px' }}>
        {/* OUR VALUES */}
        <section style={{ padding: '80px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
              <div className="gold-line" />
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>What Drives Us</span>
              <div className="gold-line" />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 300, color: '#fff' }}>Our Core Values</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {VALUES.map((v) => (
              <div key={v.title} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '36px 28px', textAlign: 'center', transition: 'border-color 0.4s' }}
                onMouseEnter={(e) => e.currentTarget.style.borderColor = 'rgba(200,169,126,0.25)'}
                onMouseLeave={(e) => e.currentTarget.style.borderColor = 'rgba(200,169,126,0.08)'}>
                <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(200,169,126,0.08)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px', color: '#C8A97E' }}>{v.icon}</div>
                <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, fontWeight: 400, color: '#fff', marginBottom: 10 }}>{v.title}</h3>
                <p style={{ fontSize: 13, fontWeight: 300, color: '#6b6880', lineHeight: 1.7 }}>{v.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* TIMELINE */}
        <section style={{ padding: '0 0 80px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
              <div className="gold-line" />
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Our Journey</span>
              <div className="gold-line" />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 300, color: '#fff' }}>Milestones</h2>
          </div>

          {/* Timeline Navigation */}
          <div style={{ display: 'flex', justifyContent: 'center', gap: 0, marginBottom: 40, position: 'relative' }}>
            <div style={{ position: 'absolute', top: '50%', left: '15%', right: '15%', height: 1, background: 'rgba(200,169,126,0.1)' }} />
            {MILESTONES.map((m, i) => (
              <button key={m.year} onClick={() => setActiveTimeline(i)} style={{
                position: 'relative', zIndex: 2, width: 120, display: 'flex', flexDirection: 'column', alignItems: 'center', gap: 8,
                background: 'none', border: 'none', cursor: 'pointer', padding: '0',
              }}>
                <div style={{
                  width: activeTimeline === i ? 16 : 10, height: activeTimeline === i ? 16 : 10, borderRadius: '50%',
                  background: activeTimeline === i ? '#C8A97E' : '#1f1f26', border: activeTimeline === i ? '3px solid rgba(200,169,126,0.3)' : '2px solid #2a2931',
                  boxShadow: activeTimeline === i ? '0 0 12px rgba(200,169,126,0.4)' : 'none', transition: 'all 0.3s',
                }} />
                <span style={{ fontSize: 13, fontWeight: activeTimeline === i ? 600 : 400, color: activeTimeline === i ? '#C8A97E' : '#4e453b', fontFamily: "'Playfair Display', serif" }}>{m.year}</span>
              </button>
            ))}
          </div>

          {/* Active Milestone Content */}
          <div style={{ maxWidth: 600, margin: '0 auto', textAlign: 'center', background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, padding: '40px' }}>
            <p style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 300, color: '#C8A97E', marginBottom: 12 }}>{MILESTONES[activeTimeline].year}</p>
            <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 400, color: '#fff', marginBottom: 12 }}>{MILESTONES[activeTimeline].title}</h3>
            <p style={{ fontSize: 14, fontWeight: 300, color: '#6b6880', lineHeight: 1.8 }}>{MILESTONES[activeTimeline].desc}</p>
          </div>
        </section>

        {/* LEADERSHIP */}
        <section style={{ padding: '0 0 80px' }}>
          <div style={{ textAlign: 'center', marginBottom: 48 }}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 12, marginBottom: 16 }}>
              <div className="gold-line" />
              <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Leadership</span>
              <div className="gold-line" />
            </div>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 36, fontWeight: 300, color: '#fff' }}>Meet Our Team</h2>
          </div>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 24 }}>
            {LEADERSHIP.map((l) => (
              <div key={l.name} style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.08)', borderRadius: 8, padding: '36px 24px', textAlign: 'center' }}>
                <div style={{ width: 80, height: 80, borderRadius: '50%', background: 'linear-gradient(135deg, rgba(200,169,126,0.12), rgba(200,169,126,0.04))', border: '2px solid rgba(200,169,126,0.15)', display: 'flex', alignItems: 'center', justifyContent: 'center', margin: '0 auto 20px' }}>
                  <span style={{ fontSize: 24, fontWeight: 600, color: '#C8A97E' }}>{l.name.split(' ').map((n) => n[0]).join('')}</span>
                </div>
                <h4 style={{ fontSize: 16, fontWeight: 500, color: '#fff', marginBottom: 4 }}>{l.name}</h4>
                <p style={{ fontSize: 12, color: '#C8A97E', fontWeight: 400 }}>{l.role}</p>
              </div>
            ))}
          </div>
        </section>

        {/* CTA SECTION */}
        <section style={{ padding: '0 0 80px' }}>
          <div style={{ background: 'linear-gradient(135deg, rgba(200,169,126,0.08), rgba(200,169,126,0.02))', border: '1px solid rgba(200,169,126,0.12)', borderRadius: 8, padding: '60px 80px', textAlign: 'center' }}>
            <h2 style={{ fontFamily: "'Playfair Display', serif", fontSize: 32, fontWeight: 300, color: '#fff', marginBottom: 12 }}>Experience the Legacy</h2>
            <p style={{ fontSize: 14, color: '#6b6880', marginBottom: 32, maxWidth: 440, margin: '0 auto 32px' }}>Visit any of our dealerships across Pakistan and discover what makes Mercedes-Benz truly exceptional.</p>
            <div style={{ display: 'flex', gap: 16, justifyContent: 'center' }}>
              <button className="gold-btn" style={{ display: 'flex', alignItems: 'center', gap: 8 }}>Find a Dealer <ArrowRight size={14} /></button>
              <button style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '14px 32px', background: 'none', border: '1px solid rgba(200,169,126,0.2)', color: '#7a7788', fontSize: 13, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>Contact Us</button>
            </div>
          </div>
        </section>
      </div>

      {/* FOOTER */}
      <footer style={{ borderTop: '1px solid rgba(200,169,126,0.1)', padding: '40px 0 20px' }}>
        <div style={{ maxWidth: 1440, margin: '0 auto', padding: '0 80px', display: 'grid', gridTemplateColumns: '2fr 1fr 1fr 1fr', gap: 40 }}>
          <div>
            <div style={{ display: 'flex', alignItems: 'center', gap: 10, marginBottom: 16 }}>
              <div style={{ width: 32, height: 32, borderRadius: '50%', border: '1px solid #C8A97E', display: 'flex', alignItems: 'center', justifyContent: 'center' }}><Star size={14} color="#C8A97E" /></div>
              <span style={{ fontFamily: "'Playfair Display', serif", fontSize: 18, color: '#fff' }}>Mercedes-Benz</span>
            </div>
            <p style={{ fontSize: 13, fontWeight: 300, color: '#5a5768', lineHeight: 1.7, maxWidth: 280 }}>The best or nothing. A legacy of excellence since 1886.</p>
          </div>
          {[
            { title: 'Company', links: ['About Us', 'Careers', 'Press'] },
            { title: 'Explore', links: ['Cars', 'Dealerships', 'Service'] },
            { title: 'Support', links: ['Contact', 'FAQ', 'Privacy'] },
          ].map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>{col.title}</h4>
              {col.links.map((l) => (<a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10 }}>{l}</a>))}
            </div>
          ))}
        </div>
        <div style={{ maxWidth: 1440, margin: '20px auto 0', padding: '16px 80px 0', borderTop: '1px solid rgba(200,169,126,0.08)' }}>
          <p style={{ fontSize: 12, color: '#3a3748', textAlign: 'center' }}>© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
