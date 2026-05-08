import { useState, useEffect } from 'react';
import { Star, Percent, Clock, Tag, ChevronRight, Gift, Shield, Zap, ArrowRight, Copy, Check } from 'lucide-react';

const OFFERS = [
  { id: 1, title: '0% Financing on S-Class', subtitle: 'Up to 60 months interest-free', car: 'S-Class 500', image: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?w=600&q=80', discount: '0% APR', validUntil: '2024-06-30', code: 'SCLASS2024', type: 'financing', originalPrice: 'PKR 85M', offerPrice: 'PKR 85M', savings: 'Save PKR 12M in interest' },
  { id: 2, title: 'AMG Summer Special', subtitle: 'Exclusive discount + free service package', car: 'AMG GT Coupé', image: 'https://images.unsplash.com/photo-1606220588913-b3aacb4d2f46?w=600&q=80', discount: '8% OFF', validUntil: '2024-07-15', code: 'AMGSUMMER', type: 'discount', originalPrice: 'PKR 120M', offerPrice: 'PKR 110M', savings: 'Save PKR 10,000,000' },
  { id: 3, title: 'EQ Electric Bonus', subtitle: 'Free home charging station + 2-year warranty', car: 'EQS 580', image: 'https://images.unsplash.com/photo-1625231334401-67c9eef63a78?w=600&q=80', discount: 'FREE', validUntil: '2024-08-31', code: 'EQBONUS24', type: 'bundle', originalPrice: 'PKR 95M', offerPrice: 'PKR 95M', savings: 'PKR 2.5M in extras included' },
  { id: 4, title: 'G-Class Loyalty Reward', subtitle: 'Existing owners get exclusive pricing', car: 'G-Class G63', image: 'https://images.unsplash.com/photo-1520031441872-265e4ff70366?w=600&q=80', discount: '5% OFF', validUntil: '2024-06-15', code: 'GCLASSVIP', type: 'loyalty', originalPrice: 'PKR 150M', offerPrice: 'PKR 142.5M', savings: 'Save PKR 7,500,000' },
];

const TYPE_CONFIG = {
  financing: { color: '#2ecc71', icon: <Percent size={16} />, label: 'Financing' },
  discount: { color: '#C8A97E', icon: <Tag size={16} />, label: 'Discount' },
  bundle: { color: '#3498db', icon: <Gift size={16} />, label: 'Bundle' },
  loyalty: { color: '#9b59b6', icon: <Shield size={16} />, label: 'Loyalty' },
};

function CountdownTimer({ targetDate }) {
  const [timeLeft, setTimeLeft] = useState(calcTime(targetDate));

  function calcTime(date) {
    const diff = new Date(date) - new Date();
    if (diff <= 0) return { d: 0, h: 0, m: 0 };
    return { d: Math.floor(diff / 86400000), h: Math.floor((diff % 86400000) / 3600000), m: Math.floor((diff % 3600000) / 60000) };
  }

  useEffect(() => {
    const t = setInterval(() => setTimeLeft(calcTime(targetDate)), 60000);
    return () => clearInterval(t);
  }, [targetDate]);

  return (
    <div style={{ display: 'flex', gap: 12 }}>
      {[['D', timeLeft.d], ['H', timeLeft.h], ['M', timeLeft.m]].map(([l, v]) => (
        <div key={l} style={{ textAlign: 'center' }}>
          <p style={{ fontSize: 20, fontWeight: 600, color: '#fff', fontFamily: "'Playfair Display', serif" }}>{String(v).padStart(2, '0')}</p>
          <p style={{ fontSize: 9, fontWeight: 500, letterSpacing: '0.1em', color: '#4e453b' }}>{l}</p>
        </div>
      ))}
    </div>
  );
}

export default function SpecialOffers() {
  const [copiedCode, setCopiedCode] = useState(null);
  const [activeType, setActiveType] = useState('All');

  const copyCode = (code) => {
    navigator.clipboard.writeText(code).catch(() => {});
    setCopiedCode(code);
    setTimeout(() => setCopiedCode(null), 2000);
  };

  const types = ['All', 'Financing', 'Discount', 'Bundle', 'Loyalty'];
  const filtered = activeType === 'All' ? OFFERS : OFFERS.filter((o) => o.type === activeType.toLowerCase());

  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: '#0a0a0f', color: '#e4e1eb', minHeight: '100vh' }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@300;400;500;600;700&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { margin:0; padding:0; box-sizing:border-box; }
        .gold-btn { border:1px solid #C8A97E; background:transparent; color:#C8A97E; padding:14px 32px; font-family:'DM Sans',sans-serif; font-size:13px; font-weight:500; letter-spacing:0.12em; text-transform:uppercase; cursor:pointer; transition:all 0.4s; }
        .gold-btn:hover { background:#C8A97E; color:#0a0a0f; }
        .glass { background:rgba(10,10,15,0.85); backdrop-filter:blur(12px); }
        .gold-line { width:60px; height:1px; background:#C8A97E; }
        .card-hover { transition:transform 0.4s, box-shadow 0.4s; }
        .card-hover:hover { transform:translateY(-4px); box-shadow:0 8px 25px rgba(200,169,126,0.06); }
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
            {['Cars', 'New Arrivals', 'Offers', 'Service'].map((l) => (
              <a key={l} href="#" style={{ fontSize: 13, fontWeight: l === 'Offers' ? 500 : 300, color: l === 'Offers' ? '#C8A97E' : '#b0adb8', letterSpacing: '0.05em' }}>{l}</a>
            ))}
          </div>
          <button className="gold-btn" style={{ padding: '8px 22px', fontSize: 11 }}>My Account</button>
        </div>
      </nav>

      <div style={{ paddingTop: 100, maxWidth: 1440, margin: '0 auto', padding: '100px 80px 60px' }}>
        {/* Header */}
        <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginBottom: 16 }}>
          <div className="gold-line" />
          <span style={{ fontSize: 11, fontWeight: 500, letterSpacing: '0.2em', textTransform: 'uppercase', color: '#C8A97E' }}>Exclusive Deals</span>
        </div>
        <h1 style={{ fontFamily: "'Playfair Display', serif", fontSize: 48, fontWeight: 300, color: '#fff', marginBottom: 8 }}>Special Offers</h1>
        <p style={{ fontSize: 15, fontWeight: 300, color: '#6b6880', marginBottom: 40 }}>Premium deals curated for distinguished Mercedes-Benz enthusiasts.</p>

        {/* Promo Banner */}
        <div style={{ background: 'linear-gradient(135deg, rgba(200,169,126,0.1), rgba(200,169,126,0.03))', border: '1px solid rgba(200,169,126,0.15)', borderRadius: 8, padding: '32px 40px', marginBottom: 40, display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: 20 }}>
            <div style={{ width: 56, height: 56, borderRadius: '50%', background: 'rgba(200,169,126,0.1)', border: '1px solid rgba(200,169,126,0.2)', display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
              <Zap size={24} color="#C8A97E" />
            </div>
            <div>
              <h3 style={{ fontSize: 18, fontWeight: 500, color: '#fff', marginBottom: 4 }}>Flash Sale — This Weekend Only</h3>
              <p style={{ fontSize: 13, color: '#6b6880' }}>Additional 2% off on all AMG models. Limited to first 10 buyers.</p>
            </div>
          </div>
          <button className="gold-btn" style={{ display: 'flex', alignItems: 'center', gap: 8, flexShrink: 0 }}>
            Claim Now <ArrowRight size={14} />
          </button>
        </div>

        {/* Type Filter */}
        <div style={{ display: 'flex', gap: 8, marginBottom: 32 }}>
          {types.map((t) => (
            <button key={t} onClick={() => setActiveType(t)} style={{
              padding: '8px 20px', fontSize: 12, fontWeight: 500,
              border: activeType === t ? '1px solid #C8A97E' : '1px solid rgba(200,169,126,0.15)',
              background: activeType === t ? '#C8A97E' : 'transparent',
              color: activeType === t ? '#0a0a0f' : '#7a7788',
              borderRadius: 2, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.3s',
            }}>{t}</button>
          ))}
        </div>

        {/* OFFER CARDS */}
        <div style={{ display: 'flex', flexDirection: 'column', gap: 20, marginBottom: 80 }}>
          {filtered.map((offer) => {
            const cfg = TYPE_CONFIG[offer.type];
            return (
              <div key={offer.id} className="card-hover" style={{ background: '#111118', border: '1px solid rgba(200,169,126,0.1)', borderRadius: 8, overflow: 'hidden' }}>
                <div style={{ display: 'grid', gridTemplateColumns: '320px 1fr 280px' }}>
                  {/* Image */}
                  <div style={{ position: 'relative' }}>
                    <img src={offer.image} alt={offer.car} style={{ width: '100%', height: '100%', objectFit: 'cover', minHeight: 240 }} />
                    <span style={{ position: 'absolute', top: 16, left: 16, padding: '6px 16px', background: `${cfg.color}20`, border: `1px solid ${cfg.color}40`, borderRadius: 20, fontSize: 14, fontWeight: 700, color: cfg.color, backdropFilter: 'blur(6px)' }}>
                      {offer.discount}
                    </span>
                  </div>

                  {/* Details */}
                  <div style={{ padding: '28px 32px', display: 'flex', flexDirection: 'column', justifyContent: 'space-between' }}>
                    <div>
                      <div style={{ display: 'inline-flex', alignItems: 'center', gap: 6, padding: '4px 12px', background: `${cfg.color}10`, border: `1px solid ${cfg.color}25`, borderRadius: 20, marginBottom: 12 }}>
                        <span style={{ color: cfg.color }}>{cfg.icon}</span>
                        <span style={{ fontSize: 11, fontWeight: 500, color: cfg.color }}>{cfg.label}</span>
                      </div>
                      <h3 style={{ fontFamily: "'Playfair Display', serif", fontSize: 22, fontWeight: 400, color: '#fff', marginBottom: 6 }}>{offer.title}</h3>
                      <p style={{ fontSize: 13, color: '#6b6880', marginBottom: 12 }}>{offer.subtitle}</p>
                      <p style={{ fontSize: 12, color: '#9a97a5' }}>Applicable on: <span style={{ color: '#C8A97E', fontWeight: 500 }}>{offer.car}</span></p>
                    </div>

                    {/* Promo Code */}
                    <div style={{ display: 'flex', alignItems: 'center', gap: 12, marginTop: 16 }}>
                      <div style={{ display: 'flex', alignItems: 'center', gap: 8, padding: '10px 16px', background: '#0d0d14', border: '1px dashed rgba(200,169,126,0.2)', borderRadius: 4, flex: 1 }}>
                        <Tag size={14} color="#4e453b" />
                        <span style={{ fontSize: 14, fontWeight: 600, color: '#C8A97E', letterSpacing: '0.1em', fontFamily: 'monospace' }}>{offer.code}</span>
                      </div>
                      <button onClick={() => copyCode(offer.code)} style={{ display: 'flex', alignItems: 'center', gap: 5, padding: '10px 18px', background: copiedCode === offer.code ? 'rgba(46,204,113,0.1)' : 'none', border: copiedCode === offer.code ? '1px solid rgba(46,204,113,0.3)' : '1px solid rgba(200,169,126,0.2)', borderRadius: 4, color: copiedCode === offer.code ? '#2ecc71' : '#C8A97E', fontSize: 12, fontWeight: 500, cursor: 'pointer', fontFamily: "'DM Sans', sans-serif", transition: 'all 0.3s' }}>
                        {copiedCode === offer.code ? <><Check size={14} /> Copied!</> : <><Copy size={14} /> Copy</>}
                      </button>
                    </div>
                  </div>

                  {/* Price & Timer */}
                  <div style={{ padding: '28px 24px', borderLeft: '1px solid rgba(200,169,126,0.06)', display: 'flex', flexDirection: 'column', justifyContent: 'space-between', alignItems: 'center', textAlign: 'center' }}>
                    <div>
                      <p style={{ fontSize: 11, color: '#4e453b', marginBottom: 4 }}>Original</p>
                      <p style={{ fontSize: 14, color: '#5a5768', textDecoration: 'line-through' }}>{offer.originalPrice}</p>
                      <p style={{ fontSize: 24, fontWeight: 600, color: '#C8A97E', marginTop: 4 }}>{offer.offerPrice}</p>
                      <p style={{ fontSize: 12, fontWeight: 500, color: '#2ecc71', marginTop: 6 }}>{offer.savings}</p>
                    </div>
                    <div>
                      <p style={{ fontSize: 10, fontWeight: 500, letterSpacing: '0.1em', textTransform: 'uppercase', color: '#4e453b', marginBottom: 10 }}>Expires In</p>
                      <CountdownTimer targetDate={offer.validUntil} />
                    </div>
                    <button style={{ width: '100%', display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 6, padding: '10px', background: 'rgba(200,169,126,0.1)', border: '1px solid #C8A97E', borderRadius: 4, color: '#C8A97E', fontSize: 12, fontWeight: 500, letterSpacing: '0.06em', textTransform: 'uppercase', cursor: 'pointer', fontFamily: "'DM Sans', sans-serif" }}>
                      Redeem <ChevronRight size={14} />
                    </button>
                  </div>
                </div>
              </div>
            );
          })}
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
            <p style={{ fontSize: 13, fontWeight: 300, color: '#5a5768', lineHeight: 1.7, maxWidth: 280 }}>Exclusive offers for an unmatched ownership experience.</p>
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Explore</h4>
            {['Cars', 'New Arrivals', 'Special Offers'].map((l) => (<a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10 }}>{l}</a>))}
          </div>
          <div>
            <h4 style={{ fontSize: 12, fontWeight: 500, letterSpacing: '0.12em', textTransform: 'uppercase', color: '#C8A97E', marginBottom: 20 }}>Account</h4>
            {['My Orders', 'Wishlist', 'Profile'].map((l) => (<a key={l} href="#" style={{ display: 'block', fontSize: 13, fontWeight: 300, color: '#6b6880', marginBottom: 10 }}>{l}</a>))}
          </div>
        </div>
        <div style={{ maxWidth: 1440, margin: '20px auto 0', padding: '16px 80px 0', borderTop: '1px solid rgba(200,169,126,0.08)' }}>
          <p style={{ fontSize: 12, color: '#3a3748', textAlign: 'center' }}>© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
}
