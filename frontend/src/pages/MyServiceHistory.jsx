export default function MyServiceHistory() {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-2xl">star</span>
          <span className="text-xl font-bold text-[#C8A97E]">Mercedes-Benz</span>
        </div>
        <nav className="hidden md:flex items-center gap-12">
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Cars</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Test Drive</a>
          <a className="text-[#C8A97E] border-b border-[#C8A97E] pb-1" href="#">Service</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">My Orders</a>
        </nav>
        <div className="flex items-center gap-6">
          <button className="text-[#C8A97E] hover:bg-[#C8A97E]/10 px-6 py-2 transition-all duration-300">Sign In</button>
        </div>
      </header>

      <main className="pt-32 pb-40 px-margin-desktop max-w-container-max mx-auto">
        {/* Header */}
        <section className="mb-20">
          <h1 className="font-headline-h1 text-headline-h1 text-primary-fixed-dim mb-4">Service History</h1>
          <p className="font-body-lg text-body-lg text-outline max-w-2xl">Maintain the integrity of your Mercedes-Benz with a detailed chronology of all technical engagements and scheduled maintenance.</p>
        </section>

        {/* Filters */}
        <div className="flex gap-8 mb-16 border-b border-outline-variant/30">
          <button className="font-label-sm text-label-sm text-primary pb-4 border-b border-primary">All</button>
          <button className="font-label-sm text-label-sm text-outline hover:text-primary pb-4 transition-colors">Scheduled</button>
          <button className="font-label-sm text-label-sm text-outline hover:text-primary pb-4 transition-colors">Completed</button>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Timeline Path */}
          <div className="absolute left-8 top-0 bottom-0 w-px hidden md:block" style={{ background: 'linear-gradient(to bottom, transparent, #c8a97e 15%, #c8a97e 85%, transparent)' }}></div>

          <div className="flex flex-col gap-12">
            {/* Timeline Item 1 (Scheduled) */}
            <div className="relative flex flex-col md:flex-row gap-12 group">
              <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-primary-container ring-4 ring-background z-10 hidden md:block"></div>
              <div className="md:w-1/4 pt-2">
                <span className="font-label-sm text-label-sm text-primary tracking-[0.2em] uppercase">October 24, 2024</span>
                <div className="mt-2 inline-flex items-center px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] tracking-widest uppercase rounded-full">
                  Scheduled
                </div>
              </div>
              <div className="md:w-3/4 glass-card p-8 rounded-lg hover:border-primary/40 transition-all duration-500">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-headline-h3 text-headline-h3 text-on-surface mb-1">Annual Performance Inspection</h3>
                    <p className="font-label-sm text-label-sm text-outline">Silver Star Signature Dealership</p>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-primary">tools_wrench</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                  <div>
                    <p className="text-body-md font-body-md text-on-surface-variant mb-4">Comprehensive diagnostics of drive-train, brake systems, and software calibration for the upcoming season.</p>
                    <div className="flex gap-4">
                      <button className="px-6 py-2 border border-primary/30 font-label-sm text-label-sm text-primary hover:bg-primary hover:text-on-primary transition-all">Reschedule</button>
                      <button className="px-6 py-2 font-label-sm text-label-sm text-outline hover:text-on-surface transition-all">Details</button>
                    </div>
                  </div>
                  <div className="relative h-40 overflow-hidden rounded">
                    <img className="w-full h-full object-cover grayscale opacity-50 group-hover:grayscale-0 group-hover:opacity-100 transition-all duration-700 scale-105 group-hover:scale-100" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDO7ODNv7Wtg6GNw5pp4fpXI4587GrjwX_1HFfF2_n7COdSmWniytMNwJlWOyTOs75tCs0mbjdisCZAbCsHwKuSRuT6EaN_zZnYXin4XFlxmHDgGCsiiYiDmjoP_-4YvtmwpGjwSjLs3lkrjHGhDv9ghO90taW9XTe5Uxm4p00SaVHbkUIbEo6ECCKsP7JDBckLHJxZ6WT-U2bIathCD7jK97aMAfInUClzHmIUuKDFJbsk-WLN7alXtCAnFbquk7wHNxp5h8hwMO4" alt="Service bay" />
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 2 (Completed) */}
            <div className="relative flex flex-col md:flex-row gap-12 group">
              <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-outline-variant ring-4 ring-background z-10 hidden md:block"></div>
              <div className="md:w-1/4 pt-2">
                <span className="font-label-sm text-label-sm text-outline tracking-[0.2em] uppercase">August 12, 2024</span>
                <div className="mt-2 inline-flex items-center px-3 py-1 bg-outline-variant/10 border border-outline-variant/20 text-outline text-[10px] tracking-widest uppercase rounded-full">
                  Completed
                </div>
              </div>
              <div className="md:w-3/4 glass-card p-8 rounded-lg border-outline-variant/20">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-headline-h3 text-headline-h3 text-on-surface-variant mb-1">Tyre Rotation &amp; Dynamic Balance</h3>
                    <p className="font-label-sm text-label-sm text-outline">AMG Performance Center East</p>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-outline">tire_repair</span>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-end">
                  <div>
                    <p className="text-body-md font-body-md text-outline mb-4">Precision alignment of all four wheels and rotation to ensure optimal road contact and longevity of the high-performance rubber compound.</p>
                    <button className="px-6 py-2 border border-outline/30 font-label-sm text-label-sm text-outline hover:border-primary/50 hover:text-primary transition-all">Download Receipt</button>
                  </div>
                  <div className="relative h-40 overflow-hidden rounded">
                    <img className="w-full h-full object-cover grayscale opacity-30 hover:grayscale-0 hover:opacity-80 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtcSnhcsd15tP1SO2DMJC_7-JASH19dIGNGB4S3sj0P-0LNmFX3GmI9NU27PLldb2l8WoF50aoeYK_Pv_ZbMRFb8zzZlfpTt3nnFQJk3s8zIjeiSPPQo2PNl-WQpgF7lLiUI9WUu00k22B2bxfUQQ17xc-HdCAY8dgY1j13YPH_eU8eRWUjxN0x0-lOMM5hcvFQk6YsnqngkYNfTE-gTHXWLfIeqzLO8K1t2gj_f0_UeuANDA8J6j8TJgbmiHfzSQnC4wknKTnkB8" alt="Tyre service" />
                  </div>
                </div>
              </div>
            </div>

            {/* Timeline Item 3 (Completed) */}
            <div className="relative flex flex-col md:flex-row gap-12 group">
              <div className="absolute left-8 -translate-x-1/2 w-4 h-4 rounded-full bg-outline-variant ring-4 ring-background z-10 hidden md:block"></div>
              <div className="md:w-1/4 pt-2">
                <span className="font-label-sm text-label-sm text-outline tracking-[0.2em] uppercase">May 05, 2024</span>
                <div className="mt-2 inline-flex items-center px-3 py-1 bg-outline-variant/10 border border-outline-variant/20 text-outline text-[10px] tracking-widest uppercase rounded-full">
                  Completed
                </div>
              </div>
              <div className="md:w-3/4 glass-card p-8 rounded-lg border-outline-variant/20">
                <div className="flex justify-between items-start mb-6">
                  <div>
                    <h3 className="font-headline-h3 text-headline-h3 text-on-surface-variant mb-1">MBUX Software Optimization</h3>
                    <p className="font-label-sm text-label-sm text-outline">Silver Star Signature Dealership</p>
                  </div>
                  <span className="material-symbols-outlined text-4xl text-outline">update</span>
                </div>
                <div>
                  <p className="text-body-md font-body-md text-outline mb-4">Firmware update to version 2.4.1, enhancing voice recognition capabilities and integrating new navigation maps for the European region.</p>
                  <button className="px-6 py-2 border border-outline/30 font-label-sm text-label-sm text-outline hover:border-primary/50 hover:text-primary transition-all">View Log</button>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* CTA */}
        <section className="mt-section-gap flex flex-col items-center text-center p-20 glass-card rounded-xl">
          <h2 className="font-headline-h2 text-headline-h2 text-on-surface mb-6 italic">Maintain Perfection.</h2>
          <p className="font-body-lg text-body-lg text-outline max-w-xl mb-10">Preserve your vehicle's performance and value through our world-class maintenance network.</p>
          <button className="px-12 py-4 border border-primary text-primary font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300">
            Schedule New Service
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div>
          <div className="text-lg font-semibold text-white mb-8">Mercedes-Benz</div>
          <p className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 max-w-xs leading-relaxed">The pinnacle of automotive luxury and technical excellence. Experience the future of mobility through our bespoke service programs.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">Cars</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">My Orders</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">Wishlist</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">Test Drive</a>
          </div>
          <div className="flex flex-col gap-4">
            <a className="text-[#C8A97E] font-['Playfair_Display'] text-sm" href="#">Service</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">Contact</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">Legal</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">Privacy</a>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-zinc-500 cursor-pointer hover:text-[#C8A97E]">social_leaderboard</span>
            <span className="material-symbols-outlined text-zinc-500 cursor-pointer hover:text-[#C8A97E]">retweet</span>
            <span className="material-symbols-outlined text-zinc-500 cursor-pointer hover:text-[#C8A97E]">video_youtube</span>
          </div>
          <div className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 mt-12">
            © 2024 Mercedes-Benz Pakistan. All rights reserved.
          </div>
        </div>
      </footer>
    </>
  );
}
