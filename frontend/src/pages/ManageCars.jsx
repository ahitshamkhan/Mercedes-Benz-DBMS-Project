export default function ManageCars() {
  const cars = [
    {
      model: 'S-Class 580 4MATIC',
      id: 'MB-S580-2024',
      category: 'Luxury Sedan',
      price: '85,500,000',
      year: '2024',
      colors: ['bg-zinc-900', 'bg-zinc-200', 'bg-blue-900'],
      extra: '+2',
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCGlZsLIJGOHZdaTEqJtv6DaIrraYgyCT_z4-6b90vRq63ychSCfp6UyBrzAkpeizdwhKrcsEWFwvgU-V6UjrFBC_51oW0n_liX5WWa0CSRAsT17CqZjlVjTl0YZebtIxIcT9ZVENWf9vScsV94zm0oS4ht4Dvs1FWhSNmjmMgjWy9y0aUWqESJuZy44_SEDspADeZxSnSVGeBYNUFZ1dSdHx9pvV1dq6uPv5-RH3Q-3-HAkGu16gBMsexNzeniXGCu5unHsGwioOE',
    },
    {
      model: 'G-Class AMG 63',
      id: 'MB-G63-2023',
      category: 'SUV / Performance',
      price: '110,200,000',
      year: '2023',
      colors: ['bg-zinc-800', 'bg-zinc-400'],
      extra: null,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBpREFU_I7nZkGGhc3wj4s0RB8asbSmwjNr3GS9BStQa6uvoSpEDEVKBy5yufvmZzsov4j152ASR0wXkWiskmd1xSAY0e3q1PcXeIpjpBz7xubGBKKrbhQBRZEAs4Eem04jUsDrCEeKrSlbpdJ-I9gfjgvjeYrOWNB8xLK7UsenjvbpOPc1ddV7s5iRkCyf4wT7k27WxL98FWfB096lE_kqAqBF4xOWx9sR986UaMvYt_dcRqp3sBmHBrP5Rphxpv5CQuAgR2ARCwI',
    },
    {
      model: 'EQS 450+ Electric',
      id: 'MB-EQS-2024',
      category: 'Electric Luxury',
      price: '62,900,000',
      year: '2024',
      colors: ['bg-zinc-950', 'bg-zinc-100'],
      extra: null,
      img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAWpXP9EN9S2hsE508Y031Vk3Em7xWWCS-Z2NeCq3dfKFAdHWh4ZOgoIhL-fMemf3PLj3iA1oBaL9Fg-iidivQfj81-g9Fd8EPWzOwdE58mjjfPGrZO0-IS4wsfaVjJQTkB5Y96edj0mN0928tmM--1pd8GZs23H-PVYTqdp4F7wuswOnamP-kHTPi8o3SKV5kOJEnksHfhduObaKxdI8vbSKA0fG7Ru4Thqif4vpPxpqyM5Juw59ArTc6e4gCyjKwOOyZEh75hU4g',
    },
  ];

  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]">star</span>
          <span className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</span>
        </div>
        <div className="flex items-center gap-8">
          <nav className="hidden md:flex gap-8">
            <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-label-sm uppercase tracking-widest" href="#">Inventory</a>
            <a className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 font-label-sm uppercase tracking-widest" href="#">Admin</a>
            <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-label-sm uppercase tracking-widest" href="#">Settings</a>
          </nav>
          <div className="flex items-center gap-3 pl-8 border-l border-white/10">
            <div className="w-8 h-8 rounded-full bg-primary-container/20 flex items-center justify-center text-primary-container">
              <span className="material-symbols-outlined text-sm">person</span>
            </div>
            <span className="font-label-sm text-zinc-300">ADMINISTRATOR</span>
          </div>
        </div>
      </header>

      <div className="flex pt-20 min-h-screen">
        {/* Sidebar */}
        <aside className="w-72 fixed left-0 h-[calc(100vh-80px)] bg-surface-container-lowest border-r border-[#C8A97E]/10 px-8 py-12 flex flex-col justify-between">
          <div className="space-y-10">
            <div>
              <h3 className="font-label-sm text-zinc-500 mb-6 uppercase tracking-widest">Management</h3>
              <ul className="space-y-4">
                <li>
                  <a className="flex items-center gap-4 text-zinc-500 hover:text-white group transition-all" href="#">
                    <span className="material-symbols-outlined group-hover:text-primary">dashboard</span>
                    <span className="font-label-sm uppercase tracking-wider">Dashboard</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-4 text-primary group transition-all" href="#">
                    <span className="material-symbols-outlined">directions_car</span>
                    <span className="font-label-sm uppercase tracking-wider">Manage Cars</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-4 text-zinc-500 hover:text-white group transition-all" href="#">
                    <span className="material-symbols-outlined group-hover:text-primary">shopping_bag</span>
                    <span className="font-label-sm uppercase tracking-wider">Orders</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-4 text-zinc-500 hover:text-white group transition-all" href="#">
                    <span className="material-symbols-outlined group-hover:text-primary">group</span>
                    <span className="font-label-sm uppercase tracking-wider">Customers</span>
                  </a>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-label-sm text-zinc-500 mb-6 uppercase tracking-widest">System</h3>
              <ul className="space-y-4">
                <li>
                  <a className="flex items-center gap-4 text-zinc-500 hover:text-white group transition-all" href="#">
                    <span className="material-symbols-outlined group-hover:text-primary">analytics</span>
                    <span className="font-label-sm uppercase tracking-wider">Reports</span>
                  </a>
                </li>
                <li>
                  <a className="flex items-center gap-4 text-zinc-500 hover:text-white group transition-all" href="#">
                    <span className="material-symbols-outlined group-hover:text-primary">settings</span>
                    <span className="font-label-sm uppercase tracking-wider">Configurations</span>
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <div className="pt-8 border-t border-white/5">
            <button className="flex items-center gap-4 text-zinc-500 hover:text-error transition-all group">
              <span className="material-symbols-outlined">logout</span>
              <span className="font-label-sm uppercase tracking-wider">Secure Sign Out</span>
            </button>
          </div>
        </aside>

        {/* Main Content */}
        <main className="ml-72 flex-1 px-16 py-12">
          <div className="max-w-container-max mx-auto space-y-12">
            <div className="flex justify-between items-end">
              <div>
                <h1 className="font-headline-h1 text-on-background mb-2">Manage Cars</h1>
                <p className="text-zinc-500 font-body-md">Refine and curate the Mercedes-Benz Pakistan inventory.</p>
              </div>
              <div className="flex items-center gap-6">
                <div className="relative group">
                  <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500">search</span>
                  <input className="bg-surface-container-low border border-outline-variant/30 rounded-none pl-12 pr-6 py-3 text-sm focus:border-primary-container focus:ring-0 transition-all w-72 font-label-sm text-on-background placeholder:text-zinc-600" placeholder="SEARCH MODELS..." type="text" />
                </div>
                <button className="bg-primary-container hover:bg-primary text-on-primary-container font-label-sm px-8 py-3 transition-all flex items-center gap-3 uppercase tracking-widest group">
                  <span className="material-symbols-outlined text-sm">add</span>
                  Add New Car
                </button>
              </div>
            </div>

            {/* Table */}
            <div className="bg-surface-container-lowest border border-[#C8A97E]/15 overflow-hidden">
              <table className="w-full text-left border-collapse">
                <thead>
                  <tr className="border-b border-[#C8A97E]/10 bg-surface-container-low/50">
                    <th className="px-8 py-6 font-label-sm uppercase tracking-widest text-zinc-500">Model</th>
                    <th className="px-8 py-6 font-label-sm uppercase tracking-widest text-zinc-500">Category</th>
                    <th className="px-8 py-6 font-label-sm uppercase tracking-widest text-zinc-500">Price (PKR)</th>
                    <th className="px-8 py-6 font-label-sm uppercase tracking-widest text-zinc-500">Year</th>
                    <th className="px-8 py-6 font-label-sm uppercase tracking-widest text-zinc-500">Variants</th>
                    <th className="px-8 py-6 font-label-sm uppercase tracking-widest text-zinc-500 text-right">Actions</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-[#C8A97E]/5">
                  {cars.map((car, i) => (
                    <tr key={i} className="hover:bg-primary-container/5 transition-colors group">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-16 h-12 bg-surface-container overflow-hidden">
                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={car.img} alt={car.model} />
                          </div>
                          <div>
                            <div className="font-headline-h3 text-lg">{car.model}</div>
                            <div className="text-xs text-zinc-500 font-label-sm tracking-widest">ID: {car.id}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <span className="px-3 py-1 border border-primary/20 text-primary-container text-[10px] font-label-sm uppercase tracking-widest">{car.category}</span>
                      </td>
                      <td className="px-8 py-6 font-body-md text-zinc-300">{car.price}</td>
                      <td className="px-8 py-6 font-body-md text-zinc-300">{car.year}</td>
                      <td className="px-8 py-6">
                        <div className="flex gap-1">
                          {car.colors.map((c, ci) => (
                            <span key={ci} className={`w-3 h-3 rounded-full ${c} border border-white/20`}></span>
                          ))}
                          {car.extra && <span className="text-xs text-zinc-500 ml-2">{car.extra}</span>}
                        </div>
                      </td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex justify-end gap-4">
                          <button className="text-zinc-500 hover:text-primary transition-colors">
                            <span className="material-symbols-outlined text-xl">edit</span>
                          </button>
                          <button className="text-zinc-500 hover:text-error transition-colors">
                            <span className="material-symbols-outlined text-xl">delete</span>
                          </button>
                          <button className="text-zinc-500 hover:text-white transition-colors">
                            <span className="material-symbols-outlined text-xl">more_vert</span>
                          </button>
                        </div>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>

              {/* Pagination */}
              <div className="px-8 py-6 flex justify-between items-center bg-surface-container-low/30 border-t border-[#C8A97E]/10">
                <span className="font-label-sm text-zinc-500 uppercase tracking-widest">Showing 1-3 of 24 entries</span>
                <div className="flex gap-4">
                  <button className="w-10 h-10 border border-outline-variant/30 flex items-center justify-center text-zinc-500 hover:text-primary hover:border-primary transition-all">
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>
                  <button className="w-10 h-10 bg-primary-container/20 border border-primary-container flex items-center justify-center text-primary-container font-label-sm">1</button>
                  <button className="w-10 h-10 border border-outline-variant/30 flex items-center justify-center text-zinc-500 hover:text-primary hover:border-primary transition-all font-label-sm">2</button>
                  <button className="w-10 h-10 border border-outline-variant/30 flex items-center justify-center text-zinc-500 hover:text-primary hover:border-primary transition-all font-label-sm">3</button>
                  <button className="w-10 h-10 border border-outline-variant/30 flex items-center justify-center text-zinc-500 hover:text-primary hover:border-primary transition-all">
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </main>
      </div>

      {/* Footer */}
      <footer className="w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10 ml-72 max-w-[calc(100%-18rem)]">
        <div>
          <span className="text-lg font-semibold text-white font-['Playfair_Display'] uppercase tracking-widest mb-6 block">Mercedes-Benz</span>
          <p className="text-zinc-500 font-label-sm leading-relaxed mb-8">Elevating automotive management to an art form. Every detail curated for the most discerning elite.</p>
          <div className="flex gap-4">
            <a className="text-zinc-500 hover:text-[#C8A97E] transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="text-zinc-500 hover:text-[#C8A97E] transition-colors" href="#"><span className="material-symbols-outlined">share</span></a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-[#C8A97E] font-label-sm uppercase tracking-widest mb-2">Inventory</h4>
            <ul className="space-y-2">
              <li><a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200 block" href="#">Cars</a></li>
              <li><a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200 block" href="#">Service</a></li>
              <li><a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200 block" href="#">Wishlist</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-[#C8A97E] font-label-sm uppercase tracking-widest mb-2">Legal</h4>
            <ul className="space-y-2">
              <li><a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200 block" href="#">Privacy</a></li>
              <li><a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200 block" href="#">Legal Notice</a></li>
              <li><a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200 block" href="#">Contact</a></li>
            </ul>
          </div>
        </div>
        <div className="flex flex-col justify-between">
          <div className="space-y-4">
            <h4 className="text-[#C8A97E] font-label-sm uppercase tracking-widest mb-2">Newsletter</h4>
            <div className="flex border-b border-[#C8A97E]/30 pb-2">
              <input className="bg-transparent border-none focus:ring-0 text-xs text-white placeholder:text-zinc-700 w-full font-label-sm" placeholder="EMAIL ADDRESS" type="email" />
              <button className="text-[#C8A97E] hover:text-white transition-colors">
                <span className="material-symbols-outlined">arrow_forward</span>
              </button>
            </div>
          </div>
          <p className="text-zinc-500 font-['Playfair_Display'] text-xs tracking-tight mt-12">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
