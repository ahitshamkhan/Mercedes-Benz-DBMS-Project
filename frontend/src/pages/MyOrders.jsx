export default function MyOrders() {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-2xl">star</span>
          <span className="text-xl font-bold text-[#C8A97E]">Mercedes-Benz</span>
        </div>
        <nav className="hidden md:flex gap-10 items-center">
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 text-sm" href="#">Cars</a>
          <a className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 text-sm" href="#">My Orders</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 text-sm" href="#">Wishlist</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 text-sm" href="#">Service</a>
        </nav>
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined text-zinc-400 hover:text-[#C8A97E]">search</button>
          <button className="text-[#C8A97E] border border-[#C8A97E]/30 px-6 py-2 text-xs font-label-sm tracking-widest hover:bg-[#C8A97E] hover:text-zinc-950 transition-all duration-300">SIGN OUT</button>
        </div>
      </header>

      <main className="min-h-screen pt-40 pb-20 px-20 max-w-7xl mx-auto">
        {/* Heading */}
        <div className="mb-20 text-center">
          <h1 className="font-headline-h1 text-headline-h1 text-on-surface mb-4">Your Mercedes Journey</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto opacity-70">Tracing the path of precision engineering and luxury as your bespoke vehicle makes its way to you.</p>
        </div>

        <div className="relative">
          {/* Timeline Line */}
          <div className="absolute left-1/2 top-0 bottom-0 timeline-line hidden lg:block"></div>

          <div className="space-y-24">
            {/* Order Card 1: Delivered */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between w-full">
              <div className="lg:w-5/12 w-full order-2 lg:order-1">
                <div className="glass-panel p-8 group glow-hover transition-all duration-500">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="font-label-sm text-label-sm text-primary uppercase tracking-tighter opacity-60">Order #MB-77291</span>
                      <h3 className="font-headline-h3 text-headline-h3 text-white mt-1">S-Class Sedan</h3>
                    </div>
                    <span className="px-3 py-1 bg-primary/10 border border-primary/20 text-primary text-[10px] font-bold uppercase tracking-widest">Delivered</span>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mb-8 border-y border-white/5 py-6">
                    <div>
                      <p className="text-[10px] uppercase text-zinc-500 tracking-widest mb-1">Date</p>
                      <p className="font-body-md text-on-surface">Oct 24, 2023</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-zinc-500 tracking-widest mb-1">Price</p>
                      <p className="font-body-md text-on-surface">PKR 48,500,000</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="flex items-center gap-2 text-primary font-label-sm text-xs hover:gap-4 transition-all duration-300">
                      VIEW SPECIFICATIONS <span className="material-symbols-outlined text-sm">arrow_forward</span>
                    </button>
                    <span className="material-symbols-outlined text-zinc-700 text-3xl group-hover:text-primary/40 transition-colors">check_circle</span>
                  </div>
                </div>
              </div>
              {/* Timeline Dot */}
              <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-zinc-950 z-10 hidden lg:block"></div>
              <div className="lg:w-5/12 w-full order-1 lg:order-2 mb-8 lg:mb-0">
                <img alt="Mercedes S-Class" className="w-full h-64 object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBtVApYJUsAr4nJquFnB91CdYAsYG1UkBin3cxx-FVct3D1P01U6YWB_TiG-_MKPnExgypJN-7copZBbaf1GmCENllArkNc3ZumRbrdfhZ884gUAwljEqZIungUf0_YbMH7_Xrhk9TZ2U3j-xQSzUk8SsfZaHuzLLAmxsiDdlBfjUmb1JCmtNom6x9z1H0VuR6GCew8iM0tPvCNxU3dgEeD6YKuYak9M_qu3NhgTjDT6LzWmWP8rWvCXxIraC6CCqzoMdMfDuRDYsc" />
              </div>
            </div>

            {/* Order Card 2: Confirmed */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between w-full">
              <div className="lg:w-5/12 w-full order-1 mb-8 lg:mb-0">
                <img alt="Mercedes AMG GT" className="w-full h-64 object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB-QnFh__x_VnZ9Zm9umx8UPu-2CweuVWN8qv03dK-u8hQj7ItBPBTVP4MEWwvlcuWhLx00VMzUxnqRN8tFP0x1p4if-ZP3CxJzXBKKk0zVHQj81uaViTGOFSXab6Duq9GGman-aUArwJjMaT_Dl8-w0cBhCJUCKEaOk3A-8wkVZgVDN9MMqgYNMNJrHsmQoBQHBwYjmNRuukciEwkYu2v5ezfhUGNTpsJ_YgXOGRIC4OKrfDdr6HkbsJOZd7_x0obMn5yKZMQ4vI8" />
              </div>
              {/* Timeline Dot */}
              <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-white/20 border-4 border-zinc-950 z-10 hidden lg:block"></div>
              <div className="lg:w-5/12 w-full order-2">
                <div className="glass-panel p-8 group glow-hover transition-all duration-500">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="font-label-sm text-label-sm text-primary uppercase tracking-tighter opacity-60">Order #MB-99012</span>
                      <h3 className="font-headline-h3 text-headline-h3 text-white mt-1">AMG GT Coupé</h3>
                    </div>
                    <span className="px-3 py-1 bg-zinc-400/10 border border-zinc-400/20 text-zinc-400 text-[10px] font-bold uppercase tracking-widest">Confirmed</span>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mb-8 border-y border-white/5 py-6">
                    <div>
                      <p className="text-[10px] uppercase text-zinc-500 tracking-widest mb-1">Date</p>
                      <p className="font-body-md text-on-surface">Jan 12, 2024</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-zinc-500 tracking-widest mb-1">Price</p>
                      <p className="font-body-md text-on-surface">PKR 92,000,000</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="flex items-center gap-2 text-primary font-label-sm text-xs hover:gap-4 transition-all duration-300">
                      TRACK PRODUCTION <span className="material-symbols-outlined text-sm">manufacturing</span>
                    </button>
                    <span className="material-symbols-outlined text-zinc-700 text-3xl group-hover:text-zinc-500 transition-colors">pending</span>
                  </div>
                </div>
              </div>
            </div>

            {/* Order Card 3: Pending */}
            <div className="relative flex flex-col lg:flex-row items-center justify-between w-full">
              <div className="lg:w-5/12 w-full order-2 lg:order-1">
                <div className="glass-panel p-8 group glow-hover transition-all duration-500">
                  <div className="flex justify-between items-start mb-6">
                    <div>
                      <span className="font-label-sm text-label-sm text-primary uppercase tracking-tighter opacity-60">Order #MB-10238</span>
                      <h3 className="font-headline-h3 text-headline-h3 text-white mt-1">EQS Electric Sedan</h3>
                    </div>
                    <span className="px-3 py-1 bg-[#C8A97E]/10 border border-[#C8A97E]/20 text-[#C8A97E] text-[10px] font-bold uppercase tracking-widest">Pending</span>
                  </div>
                  <div className="grid grid-cols-2 gap-6 mb-8 border-y border-white/5 py-6">
                    <div>
                      <p className="text-[10px] uppercase text-zinc-500 tracking-widest mb-1">Date</p>
                      <p className="font-body-md text-on-surface">Mar 05, 2024</p>
                    </div>
                    <div>
                      <p className="text-[10px] uppercase text-zinc-500 tracking-widest mb-1">Price</p>
                      <p className="font-body-md text-on-surface">PKR 54,200,000</p>
                    </div>
                  </div>
                  <div className="flex justify-between items-center">
                    <button className="flex items-center gap-2 text-primary font-label-sm text-xs hover:gap-4 transition-all duration-300">
                      MANAGE BOOKING <span className="material-symbols-outlined text-sm">settings</span>
                    </button>
                    <span className="material-symbols-outlined text-zinc-700 text-3xl group-hover:text-primary/40 transition-colors">schedule</span>
                  </div>
                </div>
              </div>
              {/* Timeline Dot */}
              <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-white/10 border-4 border-zinc-950 z-10 hidden lg:block"></div>
              <div className="lg:w-5/12 w-full order-1 lg:order-2 mb-8 lg:mb-0">
                <img alt="Mercedes EQS" className="w-full h-64 object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBuO9UCIw71kz5HaMseG5gmDahZKnrjb1OolOs8gg5aeimEhZ7SbS2ZmT4-8HJaSRHQdqf6e6YKN0bPFLLtPHxFR3oMx2MQ9xbz1BM8Tzn5NPzoc9zmSUb-1rZbDoRuDtkYKf8b0w0vHkZEDUzVhAKZiVxnK5fvBCeN7qg3CyVpxc8L7vGe9vCiIfr3CG14SRhDW3e8E-BV8CnO57M9w3ayzILxliIavsUlCouq4IdlFb3KGKJic_gfHjSNlmSzIOtiX8Z-ff35Eo8" />
              </div>
            </div>
          </div>
        </div>

        {/* Section Gap */}
        <div className="h-40"></div>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10 font-['Playfair_Display'] text-sm tracking-tight text-[#C8A97E]">
        <div className="space-y-8">
          <span className="text-lg font-semibold text-white">Mercedes-Benz Pakistan</span>
          <p className="text-zinc-500 leading-relaxed font-body-md">Defining excellence on Pakistani roads for decades. Experience the pinnacle of automotive luxury and technical precision.</p>
          <div className="flex gap-6">
            <span className="material-symbols-outlined cursor-pointer hover:text-white">social_leaderboard</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-white">retweet</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-white">video_youtube</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2 uppercase text-[10px] tracking-[0.2em]">Explore</h4>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Cars</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Test Drive</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Service</a>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold mb-2 uppercase text-[10px] tracking-[0.2em]">Account</h4>
            <a className="text-[#C8A97E]" href="#">My Orders</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Wishlist</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Admin</a>
          </div>
        </div>
        <div className="space-y-8">
          <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.2em]">Newsletter</h4>
          <div className="relative">
            <input className="w-full bg-transparent border-b border-zinc-800 py-3 focus:outline-none focus:border-primary text-zinc-300 placeholder:text-zinc-700 text-xs font-label-sm" placeholder="YOUR EMAIL" type="email" />
            <button className="absolute right-0 bottom-3 material-symbols-outlined text-primary">arrow_forward</button>
          </div>
          <p className="text-[10px] text-zinc-600 font-body-md">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
