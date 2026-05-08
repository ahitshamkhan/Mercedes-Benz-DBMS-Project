export default function AllDealerships() {
  const dealerships = [
    {
      city: 'Islamabad',
      name: 'The Central Hub',
      address: 'Sector I-9/3, Industrial Area, Islamabad, 44000',
      phone: '+92 51 111 623 623',
      email: 'info@mercedes-islamabad.com',
      hours: { weekday: '09:00 - 18:00', sunday: 'Closed' },
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuARh7tWS6VzFnnFccc6CGf7mP5W4JvsbywN0Jnm3N9nrnXBeCbfPV6lNkME4h2Hib9Ti1O59VHJ1tngjZ6B4XhrtcTkVTJlRM_Wb7wALLkXThIBO9a-Cck7M-PH5CS9my6U8b46Y2_Fkl3XC1JeegTSXmNVia6Jleb0rvjwF_GLqrT3wDH5OJ7ie5Q0WEp0UFLIoLk_ZM4juijxv-M6DDFAm-pYHHdHMr4GH0TEp2TVi0p0A5yDmWq4iKlaOVZDVt7G-AEIAKPpqHQ',
    },
    {
      city: 'Karachi',
      name: 'Oceanic Avenue',
      address: 'Main Shahrah-e-Faisal, Karachi City, Sindh 75350',
      phone: '+92 21 345 3444 8',
      email: 'sales@mercedes-karachi.pk',
      hours: { weekday: '10:00 - 20:00', sunday: '12:00 - 17:00' },
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDjoFLDrg1DRiUpt6qrSba0agvUXJu8mXvmCGqnsKETOrGzfAYpV-0cj42-bOgoLZ42Ymmtt6qZsqAl4tgGd5V3t7fzJw8aAPGAdk3ADRTBSa9im1U2rB6pRubDgN_Brflt41_1XoKj72kaaMPIR9xMlReYdarIYVdkhHX-dgUbfft1gIRqL05genkiOIDhm1a9qihIXRzB9nIoGwJGYYfCTvUYHa3e2aDc8t-S7Hmf13dEK3PHMfZbaUgyZqQ3S9BripCcGrp07VM',
    },
    {
      city: 'Lahore',
      name: 'The Grand Boulevard',
      address: 'Main Gulberg Boulevard, Gulberg III, Lahore, 54000',
      phone: '+92 42 111 637 637',
      email: 'concierge@mercedes-lahore.com',
      hours: { weekday: '09:00 - 19:00', sunday: 'Closed' },
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAhWH_7pafyV8DhLYyS38uM-kYME-VgEsD5d_fw3tcC2MLY1LZRQvnyEy4m2Eo9al15LS2nh7CzHBjihQXklDkdQ4DeW6Y595jsblXttHa4DXl2pCuOR4peYQP_aUs6vM5OqLKDAT71Rasj21g03PU8x1luMsreqh2SBqkZaOeXYAorJxsVdA4jqDbCR6-CrPJeiMjYmOmtiFYpxDE9JPchPPNjF0_o1leuT2Pi-bMnjgJ7Q8d0XAHLqtJSW6Kww9yMLE3bv6UD13M',
    },
  ];

  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E] text-2xl" style={{ fontVariationSettings: "'FILL' 0, 'wght' 300, 'GRAD' 0, 'opsz' 24" }}>star</span>
          <h1 className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</h1>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a className="relative font-label-sm text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Cars</a>
          <a className="relative font-label-sm text-[#C8A97E] border-b border-[#C8A97E] pb-1" href="#">Dealerships</a>
          <a className="relative font-label-sm text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Service</a>
          <a className="relative font-label-sm text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Experience</a>
        </nav>
        <div className="flex items-center gap-6">
          <button className="font-label-sm text-[#C8A97E] uppercase tracking-widest hover:text-white transition-colors">Sign In</button>
          <span className="material-symbols-outlined text-white">menu</span>
        </div>
      </header>

      <main className="pt-32 pb-40 px-80 max-w-[1440px] mx-auto">
        {/* Page Header */}
        <div className="mb-24 space-y-6">
          <span className="font-label-sm text-primary tracking-[0.3em] uppercase">Official Retail Partners</span>
          <h2 className="font-headline-h1 text-on-background leading-tight">
            Find your local <br />
            <span className="italic font-normal">authorized center.</span>
          </h2>
        </div>

        {/* Dealership Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {dealerships.map((d, i) => (
            <div key={i} className="group glass-card overflow-hidden flex flex-col h-full transition-all duration-500 hover:border-primary/40">
              <div className="relative h-64 overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={d.img} alt={d.name} />
                <div className="absolute top-4 left-4 bg-primary/90 text-on-primary px-3 py-1 font-label-sm uppercase text-[10px] tracking-widest">{d.city}</div>
              </div>
              <div className="p-8 flex flex-col flex-grow">
                <div className="flex justify-between items-start mb-6">
                  <h3 className="font-headline-h3 text-white">{d.name}</h3>
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
                </div>
                <div className="space-y-4 mb-8 text-zinc-400 font-body-md">
                  <div className="flex items-start gap-3">
                    <span className="material-symbols-outlined text-primary text-sm mt-1">map</span>
                    <p className="text-sm">{d.address}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">call</span>
                    <p className="text-sm">{d.phone}</p>
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="material-symbols-outlined text-primary text-sm">mail</span>
                    <p className="text-sm">{d.email}</p>
                  </div>
                </div>
                <div className="pt-6 border-t border-white/5 mb-8">
                  <p className="font-label-sm text-primary mb-3 uppercase tracking-tighter text-[10px]">Opening Hours</p>
                  <div className="grid grid-cols-2 gap-y-1 text-[12px] text-zinc-500">
                    <span>Mon - Sat</span>
                    <span className="text-right">{d.hours.weekday}</span>
                    <span>Sunday</span>
                    <span className={`text-right ${d.hours.sunday === 'Closed' ? 'italic' : ''}`}>{d.hours.sunday}</span>
                  </div>
                </div>
                <div className="mt-auto space-y-3">
                  <button className="w-full border border-primary/30 py-4 font-label-sm uppercase tracking-widest text-primary transition-all duration-300 hover:bg-primary hover:text-on-primary">Get Directions</button>
                  <button className="w-full bg-white/5 py-4 font-label-sm uppercase tracking-widest text-white transition-all duration-300 hover:bg-white/10">Book Test Drive</button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Decorative Map Section */}
        <div className="mt-40 relative h-[500px] w-full overflow-hidden border border-white/10">
          <div className="absolute inset-0 grayscale opacity-30">
            <div className="w-full h-full bg-zinc-900 flex items-center justify-center">
              <span className="material-symbols-outlined text-zinc-700 text-9xl">public</span>
            </div>
          </div>
          <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
            <div className="relative">
              <span className="material-symbols-outlined text-primary text-5xl drop-shadow-[0_0_15px_rgba(200,169,126,0.6)]" style={{ fontVariationSettings: "'FILL' 1" }}>location_on</span>
              <div className="absolute -top-12 left-1/2 -translate-x-1/2 bg-primary px-4 py-2 text-on-primary font-label-sm text-[10px] whitespace-nowrap uppercase tracking-widest">Lahore Showroom</div>
            </div>
          </div>
          <div className="absolute bottom-8 left-8 glass-card p-6 border-primary/20 max-w-sm">
            <p className="font-label-sm text-primary mb-2 uppercase tracking-widest">Global Standards</p>
            <p className="text-zinc-400 text-sm leading-relaxed">Every authorized Mercedes-Benz dealership in Pakistan adheres to the Mercedes-Benz MAR2020 international standards of retail excellence.</p>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div className="space-y-8">
          <h4 className="text-lg font-semibold text-white font-['Playfair_Display']">Mercedes-Benz</h4>
          <p className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 leading-relaxed max-w-xs">Experience the pinnacle of automotive engineering and luxury. Our legacy of innovation continues to define the future of mobility.</p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-zinc-500 hover:text-primary transition-colors cursor-pointer">social_leaderboard</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-primary transition-colors cursor-pointer">photo_camera</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-primary transition-colors cursor-pointer">movie</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h5 className="font-label-sm text-primary uppercase mb-6">Discovery</h5>
            <ul className="space-y-3 font-['Playfair_Display'] text-sm">
              <li><a className="text-zinc-500 hover:text-white transition-all hover:translate-x-1 inline-block" href="#">Cars</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-all hover:translate-x-1 inline-block" href="#">Service</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-all hover:translate-x-1 inline-block" href="#">Test Drive</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-all hover:translate-x-1 inline-block" href="#">My Orders</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h5 className="font-label-sm text-primary uppercase mb-6">Corporate</h5>
            <ul className="space-y-3 font-['Playfair_Display'] text-sm">
              <li><a className="text-zinc-500 hover:text-white transition-all hover:translate-x-1 inline-block" href="#">Admin</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-all hover:translate-x-1 inline-block" href="#">Contact</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-all hover:translate-x-1 inline-block" href="#">Legal</a></li>
              <li><a className="text-zinc-500 hover:text-white transition-all hover:translate-x-1 inline-block" href="#">Privacy</a></li>
            </ul>
          </div>
        </div>
        <div className="space-y-8">
          <h5 className="font-label-sm text-primary uppercase">Newsletter</h5>
          <div className="flex flex-col gap-4">
            <p className="text-xs text-zinc-500">Subscribe to receive the latest updates on new models and exclusive events.</p>
            <div className="relative border-b border-zinc-800 pb-2 flex justify-between items-center group focus-within:border-primary transition-colors">
              <input className="bg-transparent border-none focus:ring-0 text-sm w-full text-white placeholder:text-zinc-700" placeholder="Your email address" type="email" />
              <span className="material-symbols-outlined text-zinc-700 group-focus-within:text-primary">arrow_forward</span>
            </div>
          </div>
          <p className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 mt-auto">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
