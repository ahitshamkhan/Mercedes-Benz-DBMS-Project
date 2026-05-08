export default function SearchResults() {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E] text-2xl">star</span>
          <h1 className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</h1>
        </div>
        <nav className="hidden md:flex gap-8">
          <a className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 font-label-sm text-label-sm transition-all" href="#">EXPLORE</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-label-sm text-label-sm" href="#">MODELS</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-label-sm text-label-sm" href="#">PURCHASE</a>
        </nav>
        <button className="px-6 py-2 border border-[#C8A97E]/30 text-[#C8A97E] font-label-sm text-label-sm hover:bg-[#C8A97E]/10 transition-all uppercase tracking-widest">
          Sign In
        </button>
      </header>

      <main className="pt-32 pb-20 px-20 max-w-[1440px] mx-auto min-h-screen">
        {/* Search Header */}
        <div className="mb-16 flex flex-col gap-4">
          <p className="text-primary font-label-sm text-label-sm uppercase tracking-[0.2em]">Exquisite Inventory</p>
          <div className="flex items-end justify-between">
            <h2 className="font-headline-h1 text-headline-h1 leading-none">Search Results</h2>
            <span className="font-body-lg text-surface-container-highest italic pb-2">12 curated masterpieces found</span>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-10 items-start">
          {/* Left Sidebar Filter Panel */}
          <aside className="col-span-3 sticky top-32 flex flex-col gap-8">
            <div className="glass-panel p-8 flex flex-col gap-10">
              {/* Category */}
              <div className="flex flex-col gap-4">
                <label className="text-primary font-label-sm text-label-sm uppercase tracking-widest">Category</label>
                <div className="flex flex-col gap-3">
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input defaultChecked className="w-4 h-4 rounded-none bg-transparent border-primary/40 text-primary focus:ring-0 focus:ring-offset-0" type="checkbox" />
                    <span className="font-body-md text-on-surface/70 group-hover:text-on-surface transition-colors">Sedans &amp; Saloons</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-4 h-4 rounded-none bg-transparent border-primary/40 text-primary focus:ring-0 focus:ring-offset-0" type="checkbox" />
                    <span className="font-body-md text-on-surface/70 group-hover:text-on-surface transition-colors">Performance Coupés</span>
                  </label>
                  <label className="flex items-center gap-3 cursor-pointer group">
                    <input className="w-4 h-4 rounded-none bg-transparent border-primary/40 text-primary focus:ring-0 focus:ring-offset-0" type="checkbox" />
                    <span className="font-body-md text-on-surface/70 group-hover:text-on-surface transition-colors">Luxury SUVs</span>
                  </label>
                </div>
              </div>

              {/* Year Slider */}
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <label className="text-primary font-label-sm text-label-sm uppercase tracking-widest">Year</label>
                  <span className="text-xs text-on-surface-variant">2022 — 2024</span>
                </div>
                <input className="w-full" max="2024" min="2020" type="range" defaultValue="2023" />
              </div>

              {/* Price Slider */}
              <div className="flex flex-col gap-6">
                <div className="flex justify-between items-center">
                  <label className="text-primary font-label-sm text-label-sm uppercase tracking-widest">Price Range</label>
                  <span className="text-xs text-on-surface-variant">$110k — $350k</span>
                </div>
                <input className="w-full" max="500000" min="50000" step="10000" type="range" />
              </div>

              {/* In Stock Toggle */}
              <div className="flex items-center justify-between">
                <label className="text-primary font-label-sm text-label-sm uppercase tracking-widest cursor-pointer">Immediate Delivery</label>
                <button className="relative inline-flex h-5 w-10 items-center justify-center rounded-full bg-surface-container-highest">
                  <span className="absolute left-1 inline-block h-3 w-3 rounded-full bg-primary transition transform translate-x-5"></span>
                </button>
              </div>

              <button className="mt-4 w-full py-4 bg-primary text-on-primary font-label-sm text-label-sm uppercase tracking-widest hover:brightness-110 transition-all">
                Refine Search
              </button>
            </div>
          </aside>

          {/* Results Grid */}
          <section className="col-span-9 grid grid-cols-2 gap-8">
            {/* Card 1 */}
            <div className="group relative bg-[#111118] border border-primary/15 overflow-hidden transition-all duration-500 hover:border-primary/40">
              <div className="h-[400px] overflow-hidden relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAMF1cLiEomKcxTd4Ld9bHnKYF02qIo8PkR06dcR7HtZi1V9P51i_PcJ5onXXdUu1R4AsBNxjYuvYONHqC9TLPuBXTywet3J325sfTmUE7nbOf30zqElA1WCez699oKU31YkeNygGR2KTjLhkEurz9sOqxcBW4Z1U3v3ZJXXSUohljwaZXNO9O8upeUF2L06Et_E4DCSAKUq9SOVIA-44WkSkUz2Uuzt4VkuQ3LjhSwfPmzhLJQcKewZUR0tr7gDIOQ_CzJKHpH874" alt="S-Class Maybach" />
                <div className="absolute top-6 left-6 px-4 py-1 glass-panel text-[10px] uppercase tracking-[0.2em] text-primary">In Showroom</div>
              </div>
              <div className="p-10 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline-h3 text-headline-h3 text-on-background">S-Class Maybach</h3>
                    <p className="text-surface-container-highest font-label-sm text-[11px] uppercase tracking-widest">Ultimate Luxury Sedan</p>
                  </div>
                  <span className="text-primary font-headline-h3">$215,900</span>
                </div>
                <div className="flex gap-6 mt-4 pt-6 border-t border-primary/10">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-surface-container-highest uppercase">Performance</span>
                    <span className="text-sm">496 HP</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-surface-container-highest uppercase">Velocity</span>
                    <span className="text-sm">4.7s 0-60</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 2 */}
            <div className="group relative bg-[#111118] border border-primary/15 overflow-hidden transition-all duration-500 hover:border-primary/40">
              <div className="h-[400px] overflow-hidden relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAI1InTSFbMudQ0PNX2XFR8klc6PA_JEVwAWBLD-U9PFPuGPfS81gpefcFTtTDZZw6S9aRDKHDEIYtJmiWrcvECv0BcfzUIyirieC31GK2y-RkKGYQKMP4pI_8j_oEOSN2p0Nc_HRFCQ9nUoaVxN_-GKN7Af9gRK9cz2IsrckO-NbONrdyL7rJ1Gsx4ob5CkZgdGj2G1iaqBeDfjx0jZ657BDnLPa85_w89vgCckRMvfPuQ674M2PE6De_5HpsKDeCgjMihNLsOH44" alt="AMG GT Coupé" />
                <div className="absolute top-6 left-6 px-4 py-1 glass-panel text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Custom Order</div>
              </div>
              <div className="p-10 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline-h3 text-headline-h3 text-on-background">AMG GT Coupé</h3>
                    <p className="text-surface-container-highest font-label-sm text-[11px] uppercase tracking-widest">Handcrafted Excellence</p>
                  </div>
                  <span className="text-primary font-headline-h3">$175,000</span>
                </div>
                <div className="flex gap-6 mt-4 pt-6 border-t border-primary/10">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-surface-container-highest uppercase">Performance</span>
                    <span className="text-sm">577 HP</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-surface-container-highest uppercase">Velocity</span>
                    <span className="text-sm">3.1s 0-60</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 3 */}
            <div className="group relative bg-[#111118] border border-primary/15 overflow-hidden transition-all duration-500 hover:border-primary/40">
              <div className="h-[400px] overflow-hidden relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBqvJMcgcrfNIpbRJuEFREBlf19MaE9yVaEfq4Fu0VxMcwErKV_L76v4lTjWjV7stBrM9vWJHnn_fBvtg7E46467Kst-RkZ1TOybXdni9Vm4AWts8A-t3qq-6-zq1oY_doCu5uMpimL9phRl-beefyngZMyo9NDN52KS6fr57mEZp_LWn6AeScP-MhEBiAC-Q3Y-nDYEM3HwtQAx_A6djSsc34kK52Z7xGcCKGCqUNXPfkzgHE8_0bB8a803Voj8MdyVquSK5WahY0" alt="EQS 580 4MATIC" />
                <div className="absolute top-6 left-6 px-4 py-1 glass-panel text-[10px] uppercase tracking-[0.2em] text-primary">Limited Stock</div>
              </div>
              <div className="p-10 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline-h3 text-headline-h3 text-on-background">EQS 580 4MATIC</h3>
                    <p className="text-surface-container-highest font-label-sm text-[11px] uppercase tracking-widest">Electric Avant-Garde</p>
                  </div>
                  <span className="text-primary font-headline-h3">$127,350</span>
                </div>
                <div className="flex gap-6 mt-4 pt-6 border-t border-primary/10">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-surface-container-highest uppercase">Range</span>
                    <span className="text-sm">340 Miles</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-surface-container-highest uppercase">Intelligence</span>
                    <span className="text-sm">MBUX Hyper</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Card 4 */}
            <div className="group relative bg-[#111118] border border-primary/15 overflow-hidden transition-all duration-500 hover:border-primary/40">
              <div className="h-[400px] overflow-hidden relative">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWP5isZzyQv9QGCHWfsdOMc481Fgg_4cm-OjziZ2PobnXKpn-2QaTXPGO_6YfqVxKjJtECoI3AG-8Ql6UoazULfpqktmp2IjDmhTPWfu6ScEt0Jxsb2PvCsLIQNDx7BxBDFD9Rs8jUJI-mTesUUPeSr2DdSQ0fnB42mCsV1wjT6gKa44ccYID-sY89EIcTV6MkQOqyKzfn6onNx6qLn-Sk23QpkVkzz9UMKjp6xVeww4ND5i9z2IVRiQNQBiM20StjROniT85DbrU" alt="G 63 AMG" />
                <div className="absolute top-6 left-6 px-4 py-1 glass-panel text-[10px] uppercase tracking-[0.2em] text-on-surface-variant">Reserve Now</div>
              </div>
              <div className="p-10 flex flex-col gap-4">
                <div className="flex justify-between items-start">
                  <div>
                    <h3 className="font-headline-h3 text-headline-h3 text-on-background">G 63 AMG</h3>
                    <p className="text-surface-container-highest font-label-sm text-[11px] uppercase tracking-widest">The Icon Reimagined</p>
                  </div>
                  <span className="text-primary font-headline-h3">$179,000</span>
                </div>
                <div className="flex gap-6 mt-4 pt-6 border-t border-primary/10">
                  <div className="flex flex-col">
                    <span className="text-[10px] text-surface-container-highest uppercase">Torque</span>
                    <span className="text-sm">627 lb-ft</span>
                  </div>
                  <div className="flex flex-col">
                    <span className="text-[10px] text-surface-container-highest uppercase">Heritage</span>
                    <span className="text-sm">V8 Biturbo</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        </div>

        {/* No Results State (Hidden) */}
        <div className="hidden flex-col items-center justify-center py-40 gap-8">
          <span className="material-symbols-outlined text-8xl text-primary/30" style={{ fontVariationSettings: "'FILL' 0, 'wght' 100" }}>search</span>
          <div className="text-center flex flex-col gap-4">
            <h3 className="font-headline-h3 text-headline-h3">No Matches Found</h3>
            <p className="text-on-surface/50 max-w-md mx-auto">Our current inventory does not match your specific criteria. Please refine your filters or contact our concierge for a bespoke sourcing request.</p>
          </div>
          <button className="mt-4 px-12 py-4 border border-primary/30 text-primary font-label-sm text-label-sm uppercase tracking-widest hover:bg-primary/10 transition-all">
            Reset All Filters
          </button>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div className="flex flex-col gap-8">
          <h2 className="text-lg font-semibold text-white font-['Playfair_Display']">Mercedes-Benz</h2>
          <p className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 max-w-xs">Experience the pinnacle of automotive engineering and luxury craftsmanship. Our legacy is defined by innovation and a relentless pursuit of perfection.</p>
          <p className="font-['Playfair_Display'] text-sm tracking-tight text-[#C8A97E]">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="font-label-sm text-label-sm text-white uppercase tracking-widest mb-2">Showroom</h4>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 text-sm" href="#">Cars</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 text-sm" href="#">Test Drive</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 text-sm" href="#">Service</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 text-sm" href="#">My Orders</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="font-label-sm text-label-sm text-white uppercase tracking-widest mb-2">Corporate</h4>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 text-sm" href="#">Admin</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 text-sm" href="#">Contact</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 text-sm" href="#">Legal</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 text-sm" href="#">Privacy</a>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h4 className="font-label-sm text-label-sm text-white uppercase tracking-widest">Newsletter</h4>
          <div className="relative">
            <input className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm focus:outline-none focus:border-primary transition-colors" placeholder="Email Address" type="email" />
            <button className="absolute right-0 bottom-3 text-primary text-sm uppercase tracking-widest">Join</button>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-zinc-500 hover:text-primary cursor-pointer transition-colors">share</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-primary cursor-pointer transition-colors">mail</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-primary cursor-pointer transition-colors">location_on</span>
          </div>
        </div>
      </footer>
    </>
  );
}
