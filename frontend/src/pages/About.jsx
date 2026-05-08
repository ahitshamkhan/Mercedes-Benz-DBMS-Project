export default function About() {
  const timeline = [
    { year: '1886', title: 'The Birth', desc: 'Carl Benz applies for a patent for his "vehicle powered by a gas engine."', top: true },
    { year: '1954', title: 'The Legend', desc: 'The 300 SL Gullwing debuts, becoming the world\'s fastest production car.', top: false },
    { year: '1997', title: 'New Horizons', desc: 'Introduction of the M-Class, pioneering the luxury SUV segment worldwide.', top: true },
    { year: '2021', title: 'Electric Era', desc: 'The EQS marks the pinnacle of luxury electric mobility and technical intelligence.', top: false },
    { year: '2026', title: 'The Future', desc: 'Next-gen autonomous systems and fully sustainable luxury production models.', top: true },
  ];

  const pillars = [
    { icon: 'security', title: 'Uncompromising Safety', desc: 'From inventing the crumple zone to modern PRE-SAFE® systems, your protection is our primary engineering mandate.' },
    { icon: 'precision_manufacturing', title: 'Technical Precision', desc: 'Every component is engineered with meticulous German precision, ensuring a drive that is as smooth as it is powerful.' },
    { icon: 'diamond', title: 'Sensual Purity', desc: 'Our design philosophy bridges the gap between cold tech and warm emotion, creating a habitat of unrivaled luxury.' },
  ];

  const locations = ['KARACHI', 'LAHORE', 'ISLAMABAD', 'FAISALABAD'];

  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md text-[#C8A97E] z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-2xl">star</span>
          <span className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</span>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 font-['Playfair_Display'] tracking-widest uppercase text-sm" href="#">About</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-['Playfair_Display'] tracking-widest uppercase text-sm" href="#">Models</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-['Playfair_Display'] tracking-widest uppercase text-sm" href="#">Experience</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-['Playfair_Display'] tracking-widest uppercase text-sm" href="#">Innovation</a>
        </nav>
        <button className="px-6 py-2 border border-[#C8A97E] text-xs font-['Playfair_Display'] tracking-widest uppercase hover:bg-[#C8A97E]/10 transition-all duration-300">Sign In</button>
      </header>

      <main>
        {/* Hero Section */}
        <section className="relative h-screen flex items-center justify-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCMZjcsXG9LL5UqJQB4d6kuehpfz39JObYxlEqvy_RO8RV42detjALlUAgJUeS4dy5EZ-GZ0F1VWbFq6JZnvZCrwDP9z19ianUlZ_XcXh2CKQ_Wpcz_jp2hNlLro2YaAqvOuImhXZXvB8mBfxmn69eNng9Smvql-F4IGEtS_LWYmOFYyQywcK50er3lPrv8LfVtDlMJkSFeSMSalqOBjDuVy4VQe9cvgURAviGxyPDUBZBOuZhu5tPPt11CNQwqVhxqcOWicZre4Bk" alt="Mercedes-Benz 300 SL Gullwing" />
            <div className="absolute inset-0" style={{ background: 'linear-gradient(to bottom, rgba(5,5,8,0.4) 0%, rgba(5,5,8,1) 100%)' }}></div>
          </div>
          <div className="relative z-10 text-center px-6 md:px-20">
            <p className="font-label-sm text-label-sm text-primary uppercase tracking-[0.4em] mb-6">Established 1886</p>
            <h1 className="font-display-lg text-display-lg text-on-background mb-8 leading-tight">The Best. <br /><span className="italic text-primary">Or Nothing.</span></h1>
            <div className="flex justify-center gap-8">
              <button className="px-10 py-4 border border-primary text-primary font-label-sm uppercase hover:bg-primary hover:text-on-primary transition-all duration-500">Discover Heritage</button>
            </div>
          </div>
        </section>

        {/* Timeline Section */}
        <section className="py-section-gap px-6 md:px-20 overflow-hidden">
          <div className="max-w-container-max mx-auto">
            <div className="flex justify-between items-end mb-24">
              <div>
                <h2 className="font-headline-h2 text-headline-h2 text-on-background mb-4">A Legacy of Innovation</h2>
                <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">From the first motorcar to the future of electric mobility, our journey is defined by a relentless pursuit of perfection.</p>
              </div>
              <span className="font-display-lg text-surface-container-highest opacity-20 hidden md:block">140 YEARS</span>
            </div>
            <div className="relative">
              <div className="absolute top-1/2 left-0 w-full h-[1px]" style={{ background: 'linear-gradient(90deg, transparent 0%, #C8A97E 50%, transparent 100%)' }}></div>
              <div className="flex justify-between relative z-10 gap-8 overflow-x-auto pb-12">
                {timeline.map((t, i) => (
                  <div key={i} className={`flex-shrink-0 w-72 ${!t.top ? 'pt-24' : ''}`}>
                    {t.top && <div className="h-4 w-4 bg-primary rounded-full mx-auto mb-12 shadow-[0_0_10px_#C8A97E]"></div>}
                    <div className="glass-card p-8 luxury-hover">
                      <p className="font-headline-h3 text-headline-h3 text-primary mb-4">{t.year}</p>
                      <p className="font-label-sm text-label-sm uppercase tracking-widest text-on-background mb-2">{t.title}</p>
                      <p className="font-body-md text-body-md text-on-surface-variant">{t.desc}</p>
                    </div>
                    {!t.top && <div className="h-4 w-4 bg-primary rounded-full mx-auto mt-12 shadow-[0_0_10px_#C8A97E]"></div>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Pillars Section */}
        <section className="py-section-gap bg-surface-container-lowest">
          <div className="px-6 md:px-20 max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-gutter">
              {pillars.map((p, i) => (
                <div key={i} className="glass-card p-12 luxury-hover flex flex-col items-center text-center">
                  <span className="material-symbols-outlined text-6xl text-primary mb-8" style={{ fontVariationSettings: "'FILL' 1" }}>{p.icon}</span>
                  <h3 className="font-headline-h3 text-headline-h3 text-on-background mb-6">{p.title}</h3>
                  <p className="font-body-md text-body-md text-on-surface-variant">{p.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Pakistan Operations Section */}
        <section className="py-section-gap px-6 md:px-20">
          <div className="max-w-container-max mx-auto flex flex-col md:flex-row gap-20 items-center">
            <div className="w-full md:w-1/2">
              <img className="w-full aspect-[4/5] object-cover border border-primary/20" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbryg6FJXH9do155rCBKNxEFkX1SdteQXvj_pzcWTJR6sDxKmolThH5b6FLKPv1y9cWnZpaFkYJQJtotPiYWoFVLbebX_Jb3iFpblEWuN5iUTwV24g92pGfsQLCajSpQwuKXFolHgItnQgXHV_Xe4VR7-TVdJA2HOWvtpheKcRZzh9vAedbtbyZQP8LslPnpokOEhZl5XPTGo_KemJHhmONzGNsHqK7ZXVoY1-CwJNaq73ZstKZILAGaESJ7XYiItE_lXfsFvIRjE" alt="Mercedes-Benz Pakistan Showroom" />
            </div>
            <div className="w-full md:w-1/2">
              <p className="font-label-sm text-label-sm text-primary uppercase tracking-[0.4em] mb-6">Global Presence. Local Heritage.</p>
              <h2 className="font-headline-h2 text-headline-h2 text-on-background mb-8">Mercedes-Benz in Pakistan</h2>
              <p className="font-body-lg text-body-lg text-on-surface-variant mb-12">Serving the nation's most discerning drivers with a dedicated network of flagship showrooms, state-of-the-art service centers, and a commitment to the highest standards of automotive excellence.</p>
              <div className="grid grid-cols-2 gap-4">
                {locations.map((loc, i) => (
                  <div key={i} className="p-6 border border-primary/10 flex items-center justify-between hover:bg-primary/5 transition-colors cursor-default">
                    <span className="font-label-sm text-on-background">{loc}</span>
                    <span className="material-symbols-outlined text-primary text-sm">location_on</span>
                  </div>
                ))}
              </div>
              <button className="mt-12 group flex items-center gap-4 text-primary font-label-sm uppercase tracking-widest">
                View Service Network
                <span className="material-symbols-outlined group-hover:translate-x-2 transition-transform">arrow_forward</span>
              </button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div>
          <span className="text-lg font-semibold text-white font-['Playfair_Display'] tracking-widest uppercase mb-8 block">Mercedes-Benz</span>
          <p className="text-zinc-500 font-['Playfair_Display'] text-sm leading-relaxed mb-8">Crafting automotive excellence since 1886. Every vehicle is a testament to our dedication to the art of driving.</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-zinc-500 hover:text-[#C8A97E] cursor-pointer transition-colors">social_leaderboard</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-[#C8A97E] cursor-pointer transition-colors">retweet</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-[#C8A97E] cursor-pointer transition-colors">video_youtube</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm transition-transform duration-200 hover:translate-x-1" href="#">Cars</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm transition-transform duration-200 hover:translate-x-1" href="#">My Orders</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm transition-transform duration-200 hover:translate-x-1" href="#">Wishlist</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm transition-transform duration-200 hover:translate-x-1" href="#">Test Drive</a>
          </div>
          <div className="flex flex-col gap-4">
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm transition-transform duration-200 hover:translate-x-1" href="#">Service</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm transition-transform duration-200 hover:translate-x-1" href="#">Contact</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm transition-transform duration-200 hover:translate-x-1" href="#">Legal</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm transition-transform duration-200 hover:translate-x-1" href="#">Privacy</a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="glass-card p-6 border-dashed">
            <p className="text-zinc-400 font-['Playfair_Display'] text-xs mb-2">Mercedes-Benz Pakistan</p>
            <p className="text-[#C8A97E] font-['Playfair_Display'] text-sm">+92 (21) 111-BENZ-00</p>
          </div>
          <p className="text-zinc-500 font-['Playfair_Display'] text-xs mt-8">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
