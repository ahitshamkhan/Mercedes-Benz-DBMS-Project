export default function MyTestDrives() {
  return (
    <>
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-2xl">star</span>
          <span className="text-xl font-bold text-[#C8A97E]">Mercedes-Benz</span>
        </div>
        <div className="hidden md:flex gap-12 font-label-sm text-label-sm tracking-widest">
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Cars</a>
          <a className="text-[#C8A97E] border-b border-[#C8A97E] pb-1" href="#">My Bookings</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Wishlist</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Service</a>
        </div>
        <button className="px-8 py-2 border border-[#C8A97E]/30 text-xs tracking-widest hover:bg-[#C8A97E] hover:text-zinc-950 transition-all duration-500">
          SIGN IN
        </button>
      </nav>

      <main className="min-h-screen pt-40 pb-section-gap px-margin-mobile md:px-margin-desktop max-w-container-max mx-auto">
        {/* Header */}
        <header className="mb-20">
          <h1 className="font-headline-h1 text-headline-h1 text-on-background mb-4">Your Test Drive History</h1>
          <p className="font-body-lg text-body-lg text-outline max-w-2xl">
            Manage and track your upcoming and past experiences with the world's most desirable vehicles.
          </p>
        </header>

        {/* Timeline Layout */}
        <section className="relative timeline-line-pseudo">
          {/* Booking Card 1: Pending */}
          <div className="relative flex flex-col md:flex-row items-center mb-16 gap-8 group">
            <div className="hidden md:flex flex-1 justify-end text-right pr-12">
              <div>
                <p className="font-label-sm text-label-sm text-primary uppercase mb-1">Upcoming</p>
                <p className="font-headline-h3 text-headline-h3">Nov 12, 2024</p>
                <p className="font-body-md text-body-md text-outline">10:30 AM</p>
              </div>
            </div>
            <div className="z-10 w-10 h-10 rounded-full border border-primary bg-background flex items-center justify-center">
              <div className="w-2 h-2 bg-primary rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-surface-container-lowest border border-primary/15 p-8 hover:border-primary/40 transition-all duration-500 group-hover:-translate-y-1">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-amber-500/10 text-amber-500 text-[10px] font-bold tracking-widest uppercase w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse"></span>
                      Pending
                    </span>
                    <h3 className="font-headline-h3 text-headline-h3">GLE 450 4MATIC</h3>
                    <div className="space-y-1">
                      <p className="font-body-md text-body-md text-on-surface">Variant: <span className="text-outline">Obsidian Black Metallic</span></p>
                      <p className="font-body-md text-body-md text-on-surface">Dealership: <span className="text-outline">Mercedes-Benz Karachi Central</span></p>
                    </div>
                  </div>
                  <div className="w-full md:w-48 aspect-video overflow-hidden border border-white/5 bg-zinc-900">
                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBgZN5d7rvEau8lSrp7PI9ePpGFwOZv08bxeYOqGnf4cPoahWgz3zAP0OZmlTcaR4UhgeI79gO10eo92r5KCls2Wl4P3KAUlci33A7p5gCe2VViRxI3C6UOUuJOqEFccIxkrFoUMzRo9QUxZRISfZtedwlEQ32tTsFM1AbT0bxVm2hqnxblECcwG0ShBcvFnOwRSmBjONZy-Hm5fxIyZlTy58cUnltm6pwCsse47FvD4NOWgEcm-tAQHDCSv_JCagF-kXwp0IFIvQQ" alt="GLE 450 4MATIC" />
                  </div>
                </div>
                <div className="mt-8 pt-6 border-t border-white/5 flex justify-end gap-6">
                  <button className="font-label-sm text-label-sm text-outline hover:text-white transition-colors uppercase">Reschedule</button>
                  <button className="font-label-sm text-label-sm text-error/80 hover:text-error transition-colors uppercase">Cancel</button>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card 2: Confirmed */}
          <div className="relative flex flex-col md:flex-row items-center mb-16 gap-8 group">
            <div className="hidden md:flex flex-1 justify-end text-right pr-12">
              <div>
                <p className="font-label-sm text-label-sm text-primary uppercase mb-1">Confirmed</p>
                <p className="font-headline-h3 text-headline-h3">Oct 28, 2024</p>
                <p className="font-body-md text-body-md text-outline">02:00 PM</p>
              </div>
            </div>
            <div className="z-10 w-10 h-10 rounded-full border border-primary/30 bg-background flex items-center justify-center">
              <div className="w-2 h-2 bg-primary/40 rounded-full group-hover:scale-150 transition-transform duration-500"></div>
            </div>
            <div className="flex-1 w-full">
              <div className="bg-surface-container-lowest border border-primary/15 p-8 hover:border-primary/40 transition-all duration-500 group-hover:-translate-y-1">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 text-blue-500 text-[10px] font-bold tracking-widest uppercase w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-500"></span>
                      Confirmed
                    </span>
                    <h3 className="font-headline-h3 text-headline-h3">S-Class S 500</h3>
                    <div className="space-y-1">
                      <p className="font-body-md text-body-md text-on-surface">Variant: <span className="text-outline">High-Tech Silver</span></p>
                      <p className="font-body-md text-body-md text-on-surface">Dealership: <span className="text-outline">Mercedes-Benz Lahore Signature</span></p>
                    </div>
                  </div>
                  <div className="w-full md:w-48 aspect-video overflow-hidden border border-white/5 bg-zinc-900">
                    <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC8ln03Ovuk6sYGDir8vbYiaplx_86SyHfMd9jX2y2T6uOGcT4_SDlsVWA55ozVh9tSd2xigo1V1hXjCRR2HgBRrf_20QuityFc32MZX_2PHhK9S9Pd585x3Lo-CdrN4KFtEetN9LjimJGTkvQOREQ_wJOzCa63wYiFcC3gbYTt0M03bDI1rMVt60P6Sn2kfofvFfdqKCt3wDltJuYRF4flYAdOYXCqIjW6sO1dRv_xAb5soGdx3ICR24xR9A-CWPTcpv6T9EzFtQE" alt="S-Class S 500" />
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Booking Card 3: Completed */}
          <div className="relative flex flex-col md:flex-row items-center mb-16 gap-8 group">
            <div className="hidden md:flex flex-1 justify-end text-right pr-12 opacity-60">
              <div>
                <p className="font-label-sm text-label-sm text-primary uppercase mb-1">Past</p>
                <p className="font-headline-h3 text-headline-h3">Sep 15, 2024</p>
                <p className="font-body-md text-body-md text-outline">11:00 AM</p>
              </div>
            </div>
            <div className="z-10 w-10 h-10 rounded-full border border-primary/20 bg-background flex items-center justify-center opacity-50">
              <div className="w-2 h-2 bg-primary/20 rounded-full"></div>
            </div>
            <div className="flex-1 w-full opacity-60 group-hover:opacity-100 transition-opacity duration-500">
              <div className="bg-surface-container-lowest border border-primary/10 p-8 hover:border-primary/30 transition-all duration-500">
                <div className="flex flex-col md:flex-row justify-between gap-6">
                  <div className="flex flex-col gap-4">
                    <span className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#C8A97E]/10 text-[#C8A97E] text-[10px] font-bold tracking-widest uppercase w-fit">
                      <span className="w-1.5 h-1.5 rounded-full bg-[#C8A97E]"></span>
                      Completed
                    </span>
                    <h3 className="font-headline-h3 text-headline-h3">EQS 580 4MATIC</h3>
                    <div className="space-y-1">
                      <p className="font-body-md text-body-md text-on-surface">Variant: <span className="text-outline">Nautical Blue</span></p>
                      <p className="font-body-md text-body-md text-on-surface">Dealership: <span className="text-outline">Mercedes-Benz Islamabad Hub</span></p>
                    </div>
                  </div>
                  <div className="w-full md:w-48 aspect-video overflow-hidden border border-white/5 bg-zinc-900">
                    <img className="w-full h-full object-cover grayscale" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCaKVpyWL2QnIFkqmY9TyHE588Jew-yOaFbM4uph8887rrGiY4Sl9_AaiqzjRVDjT6kce_Ek1WP822lA_NTUAfPB7Yt0eiBO1j4m8_fiNikVQKKQYyutHOGLsOUYgWCyI758CqovQwgScT7WL_zNwp3udPvDN71Bbnc4bSXhecKYehstysiujdKHmWoR1z_8sRcTTi4CSguWAZHgQVYabBCiJuSPODHc_7rlKr5m_cplnYST5xzTMyLcOPJPspk52S3zuDkRJPnLHM" alt="EQS 580 4MATIC" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Empty State (Hidden) */}
        <section className="hidden flex-col items-center justify-center py-40 text-center">
          <div className="w-24 h-24 rounded-full border border-primary/20 flex items-center justify-center mb-8">
            <span className="material-symbols-outlined text-4xl text-primary/40">car_rental</span>
          </div>
          <h2 className="font-headline-h2 text-headline-h2 mb-4">No test drives scheduled</h2>
          <p className="font-body-lg text-body-lg text-outline mb-12 max-w-md mx-auto">
            Experience the pinnacle of automotive excellence. Discover our fleet and book your personal test drive today.
          </p>
          <button className="px-12 py-4 border border-primary text-primary hover:bg-primary hover:text-background transition-all duration-500 font-label-sm text-label-sm tracking-widest uppercase">
            Explore Inventory
          </button>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] font-['Playfair_Display'] text-sm tracking-tight border-t border-[#C8A97E]/10">
        <div className="space-y-8">
          <h2 className="text-lg font-semibold text-white uppercase tracking-widest">Mercedes-Benz</h2>
          <p className="text-zinc-500 max-w-xs leading-relaxed">
            The best or nothing. Defining luxury and automotive performance since 1926.
          </p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-zinc-500 hover:text-[#C8A97E] cursor-pointer transition-colors">social_leaderboard</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-[#C8A97E] cursor-pointer transition-colors">retweet</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-[#C8A97E] cursor-pointer transition-colors">video_youtube</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-white uppercase tracking-widest mb-2 font-bold">Discover</h4>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Cars</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Test Drive</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Service</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white uppercase tracking-widest mb-2 font-bold">Account</h4>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">My Orders</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Wishlist</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Admin</a>
          </div>
        </div>
        <div className="flex flex-col gap-6">
          <h4 className="text-white uppercase tracking-widest font-bold">Stay Informed</h4>
          <p className="text-zinc-500">Subscribe for the latest releases and private events.</p>
          <div className="relative">
            <input className="w-full bg-zinc-900/50 border-b border-[#C8A97E]/30 py-3 px-0 focus:border-[#C8A97E] outline-none text-[#C8A97E] placeholder-zinc-700 transition-all" placeholder="Email Address" type="email" />
            <button className="absolute right-0 bottom-3 text-[#C8A97E] hover:translate-x-1 transition-transform">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <p className="text-[10px] text-zinc-600 mt-auto">
            © 2024 Mercedes-Benz Pakistan. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
