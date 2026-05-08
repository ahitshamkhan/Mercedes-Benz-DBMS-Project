export default function DealershipDetail() {
  const staff = [
    {
      role: 'General Manager',
      name: 'Julian Sterling',
      subtitle: '15 Years Expertise',
      badgeStyle: 'bg-primary/10 border-primary/20 text-primary',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDV8vHn-M1SjikeQrf1AoKzypZmflosjoaRLjetyrxwJTabnADWLBNPNBKHPNmaemly2bzAPT1NCwVSVcqh8Rf863Ov0UjDIFbaBCFoOIpFnXLDYrNy3jJWGyJVoj9_Q15GLWlNmkDPke_BrTQw5SUp5jaqlAB-iZgDMwig6_mPaS6sJFk3muOm-x0vfN6Y1-pLCfQSfyT1sKeR2pmdNCf3LHPPpyxpnMNbv20LNU2FO2hYY5jUH7vr6JjRCRrKx3F7F7BZDKiKpBo',
    },
    {
      role: 'Sales Director',
      name: 'Elena Rossi',
      subtitle: 'AMG Specialist',
      badgeStyle: 'bg-zinc-800 border-zinc-700 text-zinc-300',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD8OWMbTJn1V9ZqdYRNuobvZ_4bL6pLa66eY8htRz6krR0iQTaqq_YwMpUX_WYy-ZqopEoPPGFu69ZLigDV_EpJaEEfsReGqJbu2MIuY4kE2xZbcfUt7hjRjTO7QyWXTY5uS2pL_zyvzTyGAZCu5HD-kuknCy7upIEy5BLJVKNIwXUGQjn5frV9CIeJHzP1KuaI0RtwPATnp-iooT0qPU_qKagMQgCY1hMibXqNzbQB38svHg5rke4VMYhM-0GRJmaAiF3dYMnXjjA',
    },
    {
      role: 'Master Technician',
      name: 'Marcus Thorne',
      subtitle: 'Service Lead',
      badgeStyle: 'bg-zinc-800 border-zinc-700 text-zinc-300',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAHZb4zgQU1MYI8uU77Cv8ul-WhGLltM5Kdr0B5Np6eKTwOP_-bTw8EQY-2pHMliSYKfPnR6mMkpw_JDQP3rZ-lBkw6g0PfO8W7tiQWXdVcVU-EdrGLAYDezeMcdxTD3PzPnW0Ss-iWIjNHETetwjG1f02tCWVPjQNN8_WDX22mJZ0TiXPZWLqNB1Wq2wK4WUM2hsFykQ6Ply7U-IzFU5BhC5cmbLBb1PPzizJCqioPwI0iu9zX1-ZMXClqVfvC6Ilh_1ccQYbQ0FQ',
    },
    {
      role: 'Concierge',
      name: 'Adrian Vane',
      subtitle: 'Client Experiences',
      badgeStyle: 'bg-zinc-800 border-zinc-700 text-zinc-300',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA3BnkBrR3au_MEEyDU0z-LfkQGKJZjKyy8nN_CZOLgLN05gg8gYhiXb_BIZGyW3AodXC-GcgvC4CI_76tLemhCgleotGOpi6vftJosnOlIxGxt8Ajvxt3NTHRGNpyezu9U7H1GSYAnP-snmv5hU6KdON4cJfws7hRRGKdp1q-MN7QyikkL35pJhilN1psek9WaXYQomNIbNk5w353ccZdfYTgDgSxSILA8HChciZG02YLVtqbCEvpf59MBx6LmsqBfBJIk75Wh6_Y',
    },
  ];

  const inventory = [
    {
      model: '2024 AMG GT 63 S',
      desc: 'Obsidian Black Metallic / Nappa Leather',
      status: 'Last 1 in Stock',
      statusStyle: 'bg-red-950/30 text-red-400 border-red-900/50',
      price: '$182,500',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA50pdmem2D9yTVL8cnxIhENlcfegFgGoBy-oUrnrw_258Yi0KOVJLX_U_9J6SAycI693IldpIr9KZse8cDmhciG1z02GH5dAk8BH4jvhP94WCU03T8UW6m9RH-lB-R-jj3ixUoM2nXNZ3J0GlKM0GY4c0nMfUJ8aKnxuUwoxFoC_lbjLxJZZZYpyi0uDwJVTPJDwPqyPuyTQEH0vnlEGOiVYIDPd8_r91TDyZQs0PfxcvlFu07P1C4-v9j9v39egpeOcakt0lM-NI',
    },
    {
      model: '2024 S-Class Sedan',
      desc: 'Diamond White Bright / Macchiato Beige',
      status: '4 Units Available',
      statusStyle: 'bg-zinc-800 text-zinc-400 border-zinc-700',
      price: '$114,300',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCfUcBBM73EJ2maDX7OGxYWmLvtBayE106F-s9XWw0P2Fxvs5bU9UKBXurz42FtS99ybSI6NHmKtzjiXHT2-sCYoztN2_6H6pR9ahKK-7oNG5CL6m8R8IF-UjHP4GvF-DGtlxT7tJYc3KG90NJ_9XSX1SYFYVQU3e0j_emcN1NAVsCTshk8S3XFODi4xlb5O5EKZYY_D2WsUJ7z2OA7DwtHLPHeKU9wIvPmREXEkdRsww9ZKkVQIITeTbcuHWoWg7TW_JiOrXGr-NY',
    },
    {
      model: '2024 EQS 580 4MATIC',
      desc: 'Nautical Blue Metallic / Space Grey',
      status: 'Low Stock',
      statusStyle: 'bg-red-950/30 text-red-400 border-red-900/50',
      price: '$125,950',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDbrZr7DfqZ_xgfwEf5qlPqxNIFN84q_J6ulO3C6M_uZITK5dIc9xPxG18Xlyez5XfVfvV8ijk_nK0-v31xkmuVdSXE6BWa6DpIF666XZ02yj7C0fhIYBXCFcfWtRlDCH5-I_ifO7VdrW2JSsJqzcEHx5BKtRfCrMUM7dHNzi5cbzDmJ1clGrL3y-SjEG-yJzz8FfHyICQE1x194zmyL6Yr7nP_2d7L99USddm_TgSfWc0arpUAiZPA0fEm--JCEb6QphazfN-yfGg',
    },
  ];

  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <h1 className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</h1>
        </div>
        <nav className="hidden md:flex gap-10 items-center">
          <a className="font-['DM_Sans'] text-sm tracking-widest uppercase relative text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Cars</a>
          <a className="font-['DM_Sans'] text-sm tracking-widest uppercase relative text-[#C8A97E] border-b border-[#C8A97E] pb-1" href="#">Dealerships</a>
          <a className="font-['DM_Sans'] text-sm tracking-widest uppercase relative text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Service</a>
        </nav>
        <button className="font-['DM_Sans'] text-sm tracking-widest uppercase px-6 py-2 border border-[#C8A97E]/40 text-[#C8A97E] hover:bg-[#C8A97E] hover:text-zinc-950 transition-all duration-300">
          Sign In
        </button>
      </header>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[618px] w-full overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/40 to-background z-10"></div>
          <img alt="Luxury Dealership" className="w-full h-full object-cover grayscale-[20%]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB6hzDL3MVayukwYvG-xZw_8Ok-FYxUkciyxqlV5aqvZQRiw5Hx2bWPMrMq0crlQnfpZMpu3BjFR5luhzAG_u2TJ96wQyxYdWKT8Gf-v04zcyRgaHMCXTZ0Cq4oI19rv0-5HYyynQxjkM2kXKhlScFzhWG1f3FVQrY1qv1RqXKngYPWmvrVNTvzotV1cHRuE0BKJz_zfXs00ekDsBXCnXITAIg7T5BwoyDVzGqyrEY-AeSNtp7zsdsHvW_FeKJoP6MdjtvpJWGYxXM" />
          <div className="absolute bottom-20 left-20 z-20">
            <p className="font-label-sm text-label-sm text-primary mb-4 uppercase">Authorized Flagship Partner</p>
            <h2 className="font-display-lg text-display-lg text-white max-w-3xl">Manhattan West Experience Center</h2>
          </div>
        </section>

        {/* Info & Contact Section */}
        <section className="px-20 py-section-gap grid grid-cols-1 md:grid-cols-3 gap-16">
          <div className="col-span-2 space-y-12">
            <div>
              <h3 className="font-headline-h2 text-headline-h3 text-white mb-6">Redefining Excellence</h3>
              <p className="font-body-lg text-body-lg text-zinc-400 leading-relaxed max-w-2xl">
                Located in the heart of the automotive district, our Manhattan West flagship offers an unparalleled journey into the world of Mercedes-Benz. From personalized consultations to bespoke service, every interaction is crafted for the discerning enthusiast.
              </p>
            </div>
            <div className="grid grid-cols-2 gap-8">
              <div className="glass-card p-8 luxury-hover">
                <span className="material-symbols-outlined text-primary mb-4">schedule</span>
                <h4 className="font-label-sm text-label-sm text-white mb-2 uppercase">Operating Hours</h4>
                <div className="text-zinc-500 font-body-md text-sm space-y-1">
                  <p>Mon - Fri: 09:00 - 19:00</p>
                  <p>Saturday: 10:00 - 17:00</p>
                  <p>Sunday: Closed</p>
                </div>
              </div>
              <div className="glass-card p-8 luxury-hover">
                <span className="material-symbols-outlined text-primary mb-4">location_on</span>
                <h4 className="font-label-sm text-label-sm text-white mb-2 uppercase">Location</h4>
                <address className="text-zinc-500 font-body-md text-sm not-italic">
                  770 11th Ave<br />
                  New York, NY 10019
                </address>
                <a className="text-primary font-label-sm text-xs mt-4 block hover:underline uppercase tracking-tighter" href="#">Get Directions</a>
              </div>
            </div>
          </div>
          <div className="glass-card p-10 flex flex-col justify-between border-primary/20">
            <div>
              <h4 className="font-headline-h3 text-2xl text-white mb-8">Inquire Now</h4>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">call</span>
                  <span className="font-body-md text-zinc-300">+1 (212) 555-0192</span>
                </div>
                <div className="flex items-center gap-4">
                  <span className="material-symbols-outlined text-primary">mail</span>
                  <span className="font-body-md text-zinc-300">concierge@mb-manhattan.com</span>
                </div>
              </div>
            </div>
            <div className="mt-12 space-y-4">
              <button className="w-full py-4 border border-primary text-primary font-label-sm uppercase hover:bg-primary hover:text-background transition-all">Book Test Drive</button>
              <button className="w-full py-4 text-zinc-400 font-label-sm uppercase hover:text-white transition-all">Download Brochure</button>
            </div>
          </div>
        </section>

        {/* Staff Section */}
        <section className="bg-[#0D0D14] py-section-gap px-20">
          <div className="mb-16">
            <p className="font-label-sm text-label-sm text-primary mb-4 uppercase">The Experts</p>
            <h3 className="font-headline-h2 text-headline-h2 text-white">Our Dedicated Team</h3>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {staff.map((s, i) => (
              <div key={i} className="group">
                <div className="aspect-[3/4] overflow-hidden mb-6 glass-card border-none">
                  <img alt={s.role} className="w-full h-full object-cover grayscale group-hover:grayscale-0 group-hover:scale-105 transition-all duration-700" src={s.img} />
                </div>
                <span className={`px-3 py-1 border font-label-sm text-[10px] uppercase rounded-full ${s.badgeStyle}`}>{s.role}</span>
                <h5 className="font-headline-h3 text-xl text-white mt-4">{s.name}</h5>
                <p className="font-body-md text-zinc-500 text-sm">{s.subtitle}</p>
              </div>
            ))}
          </div>
        </section>

        {/* Inventory List */}
        <section className="py-section-gap px-20">
          <div className="flex justify-between items-end mb-16">
            <div>
              <p className="font-label-sm text-label-sm text-primary mb-4 uppercase">Showroom Inventory</p>
              <h3 className="font-headline-h2 text-headline-h2 text-white">Available Models</h3>
            </div>
            <div className="flex gap-4">
              <button className="px-6 py-2 border border-zinc-800 text-zinc-400 font-label-sm uppercase hover:border-primary transition-all">Filter</button>
              <button className="px-6 py-2 border border-zinc-800 text-zinc-400 font-label-sm uppercase hover:border-primary transition-all">View All</button>
            </div>
          </div>
          <div className="grid grid-cols-1 gap-6">
            {inventory.map((v, i) => (
              <div key={i} className="glass-card flex items-center p-6 gap-12 luxury-hover">
                <div className="w-48 h-32 overflow-hidden flex-shrink-0">
                  <img alt={v.model} className="w-full h-full object-cover" src={v.img} />
                </div>
                <div className="flex-grow">
                  <h4 className="font-headline-h3 text-xl text-white">{v.model}</h4>
                  <p className="font-body-md text-zinc-500 text-sm">{v.desc}</p>
                </div>
                <div className="text-right flex flex-col items-end gap-2">
                  <span className={`px-2 py-1 border text-[10px] font-label-sm uppercase rounded ${v.statusStyle}`}>{v.status}</span>
                  <p className="font-headline-h3 text-lg text-primary">{v.price}</p>
                </div>
                <button className="p-4 border-l border-zinc-800/50 hover:text-primary transition-colors">
                  <span className="material-symbols-outlined">arrow_forward</span>
                </button>
              </div>
            ))}
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div>
          <h5 className="text-lg font-semibold text-white font-['Playfair_Display'] mb-8 uppercase tracking-widest">Mercedes-Benz</h5>
          <p className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 leading-relaxed max-w-xs">
            The pinnacle of automotive engineering and luxury since 1926.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <a className="block text-zinc-500 hover:text-white transition-transform duration-200 hover:translate-x-1 font-['Playfair_Display'] text-sm" href="#">Cars</a>
            <a className="block text-zinc-500 hover:text-white transition-transform duration-200 hover:translate-x-1 font-['Playfair_Display'] text-sm" href="#">My Orders</a>
            <a className="block text-zinc-500 hover:text-white transition-transform duration-200 hover:translate-x-1 font-['Playfair_Display'] text-sm" href="#">Wishlist</a>
            <a className="block text-zinc-500 hover:text-white transition-transform duration-200 hover:translate-x-1 font-['Playfair_Display'] text-sm" href="#">Test Drive</a>
          </div>
          <div className="space-y-4">
            <a className="block text-zinc-500 hover:text-white transition-transform duration-200 hover:translate-x-1 font-['Playfair_Display'] text-sm" href="#">Service</a>
            <a className="block text-zinc-500 hover:text-white transition-transform duration-200 hover:translate-x-1 font-['Playfair_Display'] text-sm" href="#">Contact</a>
            <a className="block text-zinc-500 hover:text-white transition-transform duration-200 hover:translate-x-1 font-['Playfair_Display'] text-sm" href="#">Legal</a>
            <a className="block text-zinc-500 hover:text-white transition-transform duration-200 hover:translate-x-1 font-['Playfair_Display'] text-sm" href="#">Privacy</a>
          </div>
        </div>
        <div className="text-right">
          <p className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 mb-4">Newsletter</p>
          <div className="flex border-b border-[#C8A97E]/30 pb-2">
            <input className="bg-transparent border-none focus:ring-0 text-sm w-full text-white placeholder-zinc-700" placeholder="Email Address" type="email" />
            <button className="text-primary hover:translate-x-2 transition-transform">
              <span className="material-symbols-outlined">east</span>
            </button>
          </div>
          <p className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-600 mt-12">
            © 2024 Mercedes-Benz Pakistan. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
