import { useState } from 'react';
import { ArrowRight, ArrowLeft, Heart, Star, Share2, ChevronDown, Volume2, Lightbulb, Settings, Armchair, ShieldCheck, Gauge, Fuel, Calendar, Check } from 'lucide-react';

const CAR = {
  name: 'S-Class 500',
  tagline: 'Masterpiece of Intelligence.',
  year: 2024,
  price: 'PKR 85,000,000',
  category: 'Luxury Sedan',
  rating: 4.9,
  reviews: 128,
  images: [
    'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=900&q=80',
    'https://images.unsplash.com/photo-1617814076367-b759c7d7e738?w=900&q=80',
    'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=900&q=80',
  ],
  specs: [
    { label: 'Engine', value: '4.0L V8 Biturbo', icon: <Gauge size={18} color="#C8A97E" /> },
    { label: 'Power', value: '496 HP', icon: <Settings size={18} color="#C8A97E" /> },
    { label: 'Top Speed', value: '250 km/h', icon: <Fuel size={18} color="#C8A97E" /> },
    { label: '0-100 km/h', value: '4.4 sec', icon: <Calendar size={18} color="#C8A97E" /> },
  ],
  colors: ['#0a0a0f', '#1a1a2e', '#C0C0C0', '#FFFFFF', '#2c1810'],
  trims: [
    { name: 'S 500', price: 'PKR 85,000,000', active: true },
    { name: 'S 580', price: 'PKR 110,000,000', active: false },
    { name: 'AMG S 63', price: 'PKR 145,000,000', active: false },
  ],
};

const FEATURES = [
  { icon: <Volume2 size={24} color="#C8A97E" />, title: 'Burmester® 4D Surround Sound', desc: 'An immersive acoustic experience with 31 speakers and exciters integrated into the seats for physical vibration.' },
  { icon: <Lightbulb size={24} color="#C8A97E" />, title: 'DIGITAL LIGHT Technology', desc: 'Precision projection of symbols and guidance directly onto the road via 1.3 million micro-mirrors per headlamp.' },
  { icon: <Settings size={24} color="#C8A97E" />, title: 'E-ACTIVE BODY CONTROL', desc: 'The only system where spring and damping forces can be individually controlled at each wheel.' },
  { icon: <Armchair size={24} color="#C8A97E" />, title: 'Executive Rear Seating', desc: 'Maximum comfort with calf massage and up to 43.5 degrees of recline for the ultimate chauffeur experience.' },
];

export default function CarDetail() {
  const [imgIdx, setImgIdx] = useState(0);
  const [liked, setLiked] = useState(false);
  const [selectedColor, setSelectedColor] = useState(0);
  const [selectedTrim, setSelectedTrim] = useState(0);

  const prevImg = () => setImgIdx((p) => (p === 0 ? CAR.images.length - 1 : p - 1));
  const nextImg = () => setImgIdx((p) => (p === CAR.images.length - 1 ? 0 : p + 1));

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        .gold-btn { border:1px solid #C8A97E; background:transparent; color:#C8A97E; padding:14px 32px; font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; letter-spacing:0.12em; text-transform:uppercase; cursor:pointer; transition:all 0.4s; }
        .gold-btn:hover { background:#C8A97E; color:#0a0a0f; }
        .glass { background:rgba(10,10,15,0.85); backdrop-filter:blur(12px); }
        .gold-line { width:60px; height:1px; background:#C8A97E; }
        .card-hover { transition:transform 0.5s, box-shadow 0.5s; }
        .card-hover:hover { transform:translateY(-4px); box-shadow:0 0 25px rgba(200,169,126,0.08); }
      `}</style>

      {/* NAVBAR */}
      <nav className="glass" style={{ position:'fixed', top:0, left:0, right:0, zIndex:100, borderBottom:'1px solid rgba(200,169,126,0.12)', padding:'0 40px' }}>
        <div style={{ maxWidth:1440, margin:'0 auto', display:'flex', alignItems:'center', justifyContent:'space-between', height:72 }}>
          <div style={{ display:'flex', alignItems:'center', gap:10 }}>
            <div style={{ width:36, height:36, borderRadius:'50%', border:'1.5px solid #C8A97E', display:'flex', alignItems:'center', justifyContent:'center' }}>
              <Star size={16} color="#C8A97E" />
            </div>
            <span style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:400, color:'#fff' }}>Mercedes-Benz</span>
          </div>
          <div style={{ display:'flex', gap:36 }}>
            {['Cars','Technology','Heritage','Showroom'].map((l) => (
              <a key={l} href="#" style={{ fontSize:13, fontWeight:300, color:'#b0adb8', letterSpacing:'0.05em', textDecoration:'none', transition:'color 0.3s' }}
                onMouseEnter={(e)=>e.target.style.color='#C8A97E'} onMouseLeave={(e)=>e.target.style.color='#b0adb8'}>{l}</a>
            ))}
          </div>
          <button className="gold-btn" style={{ padding:'8px 22px', fontSize:11 }}>Sign In</button>
        </div>
      </nav>

      {/* HERO IMAGE GALLERY */}
      <section style={{ paddingTop:72, position:'relative', height:'75vh', overflow:'hidden' }}>
        <img src={CAR.images[imgIdx]} alt={CAR.name} style={{ width:'100%', height:'100%', objectFit:'cover', transition:'opacity 0.5s' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to top, #0a0a0f 8%, transparent 50%)' }} />
        <div style={{ position:'absolute', inset:0, background:'linear-gradient(to right, rgba(10,10,15,0.6) 0%, transparent 50%)' }} />
        {/* Nav Arrows */}
        <button onClick={prevImg} style={{ position:'absolute', left:32, top:'50%', transform:'translateY(-50%)', width:48, height:48, borderRadius:'50%', background:'rgba(10,10,15,0.6)', border:'1px solid rgba(200,169,126,0.2)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', backdropFilter:'blur(8px)' }}>
          <ArrowLeft size={18} color="#C8A97E" />
        </button>
        <button onClick={nextImg} style={{ position:'absolute', right:32, top:'50%', transform:'translateY(-50%)', width:48, height:48, borderRadius:'50%', background:'rgba(10,10,15,0.6)', border:'1px solid rgba(200,169,126,0.2)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', backdropFilter:'blur(8px)' }}>
          <ArrowRight size={18} color="#C8A97E" />
        </button>
        {/* Dots */}
        <div style={{ position:'absolute', bottom:24, left:'50%', transform:'translateX(-50%)', display:'flex', gap:8 }}>
          {CAR.images.map((_, i) => (
            <div key={i} onClick={() => setImgIdx(i)} style={{ width: i===imgIdx ? 24 : 8, height:8, borderRadius:4, background: i===imgIdx ? '#C8A97E' : 'rgba(200,169,126,0.3)', cursor:'pointer', transition:'all 0.3s' }} />
          ))}
        </div>
        {/* Actions */}
        <div style={{ position:'absolute', top:96, right:40, display:'flex', flexDirection:'column', gap:12 }}>
          <button onClick={() => setLiked(!liked)} style={{ width:44, height:44, borderRadius:'50%', background:'rgba(10,10,15,0.6)', border:'1px solid rgba(200,169,126,0.2)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', backdropFilter:'blur(8px)' }}>
            <Heart size={18} color={liked ? '#e74c3c' : '#C8A97E'} fill={liked ? '#e74c3c' : 'none'} />
          </button>
          <button style={{ width:44, height:44, borderRadius:'50%', background:'rgba(10,10,15,0.6)', border:'1px solid rgba(200,169,126,0.2)', display:'flex', alignItems:'center', justifyContent:'center', cursor:'pointer', backdropFilter:'blur(8px)' }}>
            <Share2 size={18} color="#C8A97E" />
          </button>
        </div>
      </section>

      {/* CAR INFO */}
      <section style={{ maxWidth:1440, margin:'0 auto', padding:'60px 80px' }}>
        <div style={{ display:'grid', gridTemplateColumns:'1.4fr 1fr', gap:60 }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
              <div className="gold-line" />
              <span style={{ fontSize:11, fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', color:'#C8A97E' }}>{CAR.category}</span>
            </div>
            <h1 style={{ fontFamily:"'Playfair Display',serif", fontSize:52, fontWeight:300, color:'#fff', marginBottom:8 }}>{CAR.name}</h1>
            <p style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:300, color:'#7a7788', fontStyle:'italic', marginBottom:24 }}>{CAR.tagline}</p>
            <div style={{ display:'flex', alignItems:'center', gap:16, marginBottom:32 }}>
              <div style={{ display:'flex', alignItems:'center', gap:4 }}>
                {[1,2,3,4,5].map((s) => <Star key={s} size={14} color="#C8A97E" fill={s <= Math.floor(CAR.rating) ? '#C8A97E' : 'none'} />)}
                <span style={{ fontSize:14, color:'#C8A97E', fontWeight:500, marginLeft:6 }}>{CAR.rating}</span>
              </div>
              <span style={{ fontSize:13, color:'#5a5768' }}>({CAR.reviews} reviews)</span>
            </div>
            <p style={{ fontSize:36, fontWeight:600, color:'#C8A97E', marginBottom:8 }}>{CAR.trims[selectedTrim].price}</p>
            <p style={{ fontSize:12, color:'#5a5768', letterSpacing:'0.05em' }}>Starting MSRP • Excludes taxes & registration</p>
          </div>

          {/* SPECS */}
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:16 }}>
            {CAR.specs.map((s) => (
              <div key={s.label} style={{ background:'#111118', border:'1px solid rgba(200,169,126,0.1)', borderRadius:8, padding:'24px 20px' }}>
                <div style={{ marginBottom:12 }}>{s.icon}</div>
                <p style={{ fontSize:11, fontWeight:500, letterSpacing:'0.1em', textTransform:'uppercase', color:'#6b6880', marginBottom:6 }}>{s.label}</p>
                <p style={{ fontSize:20, fontWeight:500, color:'#fff' }}>{s.value}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CONFIGURE */}
      <section style={{ background:'#0d0d14', padding:'80px 0' }}>
        <div style={{ maxWidth:1440, margin:'0 auto', padding:'0 80px' }}>
          <div style={{ display:'flex', alignItems:'center', gap:12, marginBottom:16 }}>
            <div className="gold-line" />
            <span style={{ fontSize:11, fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', color:'#C8A97E' }}>Personalize</span>
          </div>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:36, fontWeight:300, color:'#fff', marginBottom:40 }}>Configure Your Vision</h2>
          <div style={{ display:'grid', gridTemplateColumns:'1fr 1fr', gap:48 }}>
            {/* Trim */}
            <div>
              <h3 style={{ fontSize:13, fontWeight:500, letterSpacing:'0.1em', textTransform:'uppercase', color:'#9a97a5', marginBottom:20 }}>Select Trim</h3>
              <div style={{ display:'flex', flexDirection:'column', gap:12 }}>
                {CAR.trims.map((t, i) => (
                  <div key={t.name} onClick={() => setSelectedTrim(i)} style={{
                    background: selectedTrim===i ? 'rgba(200,169,126,0.08)' : '#111118',
                    border: selectedTrim===i ? '1px solid rgba(200,169,126,0.4)' : '1px solid rgba(200,169,126,0.1)',
                    borderRadius:8, padding:'20px 24px', cursor:'pointer', display:'flex', justifyContent:'space-between', alignItems:'center', transition:'all 0.3s'
                  }}>
                    <div>
                      <p style={{ fontSize:16, fontWeight:500, color:'#fff', marginBottom:4 }}>{t.name}</p>
                      <p style={{ fontSize:13, color:'#6b6880' }}>{t.price}</p>
                    </div>
                    {selectedTrim===i && <Check size={18} color="#C8A97E" />}
                  </div>
                ))}
              </div>
            </div>
            {/* Color */}
            <div>
              <h3 style={{ fontSize:13, fontWeight:500, letterSpacing:'0.1em', textTransform:'uppercase', color:'#9a97a5', marginBottom:20 }}>Exterior Color</h3>
              <div style={{ display:'flex', gap:16, marginBottom:24 }}>
                {CAR.colors.map((c, i) => (
                  <div key={c} onClick={() => setSelectedColor(i)} style={{
                    width:40, height:40, borderRadius:'50%', background:c, cursor:'pointer',
                    border: selectedColor===i ? '3px solid #C8A97E' : '2px solid rgba(200,169,126,0.15)',
                    boxShadow: selectedColor===i ? '0 0 12px rgba(200,169,126,0.3)' : 'none', transition:'all 0.3s'
                  }} />
                ))}
              </div>
              <p style={{ fontSize:13, color:'#6b6880' }}>{['Obsidian Black','Nautical Blue','Iridium Silver','Diamond White','Rubellite Red'][selectedColor]}</p>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURES */}
      <section style={{ maxWidth:1440, margin:'0 auto', padding:'100px 80px' }}>
        <div style={{ textAlign:'center', marginBottom:60 }}>
          <div style={{ display:'flex', alignItems:'center', gap:12, justifyContent:'center', marginBottom:16 }}>
            <div className="gold-line" />
            <span style={{ fontSize:11, fontWeight:500, letterSpacing:'0.2em', textTransform:'uppercase', color:'#C8A97E' }}>Technology</span>
            <div className="gold-line" />
          </div>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:40, fontWeight:300, color:'#fff' }}>Pinnacle of Engineering</h2>
        </div>
        <div style={{ display:'grid', gridTemplateColumns:'repeat(2, 1fr)', gap:24 }}>
          {FEATURES.map((f) => (
            <div key={f.title} className="card-hover" style={{ background:'#111118', border:'1px solid rgba(200,169,126,0.1)', borderRadius:8, padding:'36px 32px' }}>
              <div style={{ width:52, height:52, borderRadius:'50%', background:'rgba(200,169,126,0.08)', display:'flex', alignItems:'center', justifyContent:'center', marginBottom:20 }}>
                {f.icon}
              </div>
              <h3 style={{ fontFamily:"'Playfair Display',serif", fontSize:20, fontWeight:400, color:'#fff', marginBottom:12 }}>{f.title}</h3>
              <p style={{ fontSize:14, fontWeight:300, color:'#6b6880', lineHeight:1.7 }}>{f.desc}</p>
            </div>
          ))}
        </div>
        {/* Quote */}
        <div style={{ textAlign:'center', margin:'60px 0 0', padding:'40px', borderTop:'1px solid rgba(200,169,126,0.08)', borderBottom:'1px solid rgba(200,169,126,0.08)' }}>
          <p style={{ fontFamily:"'Playfair Display',serif", fontSize:22, fontWeight:300, fontStyle:'italic', color:'#9a97a5', lineHeight:1.6 }}>
            "The world's best-selling luxury sedan, reimagined for the digital age."
          </p>
        </div>
      </section>

      {/* CTA */}
      <section style={{ background:'#0d0d14', padding:'80px 0' }}>
        <div style={{ maxWidth:1440, margin:'0 auto', padding:'0 80px', textAlign:'center' }}>
          <h2 style={{ fontFamily:"'Playfair Display',serif", fontSize:40, fontWeight:300, color:'#fff', marginBottom:16 }}>Experience <span style={{ color:'#C8A97E' }}>Tomorrow.</span></h2>
          <p style={{ fontSize:15, fontWeight:300, color:'#7a7788', lineHeight:1.7, maxWidth:560, margin:'0 auto 40px' }}>
            Visit your local Mercedes-Benz showroom or schedule a personalized digital consultation with one of our curators.
          </p>
          <div style={{ display:'flex', gap:16, justifyContent:'center' }}>
            <button className="gold-btn">Book Test Drive</button>
            <button className="gold-btn">Place Order</button>
            <button className="gold-btn" style={{ border:'1px solid rgba(200,169,126,0.3)', color:'#b0adb8' }}>Find Dealer</button>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer style={{ borderTop:'1px solid rgba(200,169,126,0.1)', padding:'48px 0 24px' }}>
        <div style={{ maxWidth:1440, margin:'0 auto', padding:'0 80px', display:'grid', gridTemplateColumns:'2fr 1fr 1fr 1fr', gap:40 }}>
          <div>
            <div style={{ display:'flex', alignItems:'center', gap:10, marginBottom:16 }}>
              <div style={{ width:32, height:32, borderRadius:'50%', border:'1px solid #C8A97E', display:'flex', alignItems:'center', justifyContent:'center' }}>
                <Star size={14} color="#C8A97E" />
              </div>
              <span style={{ fontFamily:"'Playfair Display',serif", fontSize:18, color:'#fff' }}>Mercedes-Benz</span>
            </div>
            <p style={{ fontSize:13, fontWeight:300, color:'#5a5768', lineHeight:1.7, maxWidth:280 }}>Defining luxury mobility since 1886. Innovation, safety, and design leading the automotive world.</p>
          </div>
          {[
            { title:'Explore', links:['Cars','Electric','SUVs','AMG Performance'] },
            { title:'Services', links:['Service','Test Drive','My Orders','Wishlist'] },
          ].map((col) => (
            <div key={col.title}>
              <h4 style={{ fontSize:12, fontWeight:500, letterSpacing:'0.12em', textTransform:'uppercase', color:'#C8A97E', marginBottom:20 }}>{col.title}</h4>
              {col.links.map((l) => (
                <a key={l} href="#" style={{ display:'block', fontSize:13, fontWeight:300, color:'#6b6880', marginBottom:12, textDecoration:'none', transition:'color 0.3s' }}
                  onMouseEnter={(e)=>e.target.style.color='#C8A97E'} onMouseLeave={(e)=>e.target.style.color='#6b6880'}>{l}</a>
              ))}
            </div>
          ))}
        </div>
        <div style={{ maxWidth:1440, margin:'24px auto 0', padding:'16px 80px 0', borderTop:'1px solid rgba(200,169,126,0.08)' }}>
          <p style={{ fontSize:12, color:'#3a3748', textAlign:'center' }}>© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
