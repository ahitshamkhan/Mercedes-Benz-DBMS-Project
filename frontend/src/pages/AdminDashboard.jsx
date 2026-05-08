export default function AdminDashboard() {
  return (
    <>
      {/* TopAppBar */}
      <header className="bg-zinc-950/90 backdrop-blur-md text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase fixed top-0 w-full flex justify-between items-center px-20 h-20 z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <h1 className="text-xl font-bold text-[#C8A97E]">Mercedes-Benz</h1>
        </div>
        <nav className="hidden md:flex gap-10">
          <a className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 font-label-sm uppercase transition-colors duration-300" href="#">Admin Dashboard</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-label-sm uppercase" href="#">Inventory</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-label-sm uppercase" href="#">Customers</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-label-sm uppercase" href="#">Reports</a>
        </nav>
        <div className="flex items-center gap-6">
          <button className="material-symbols-outlined hover:text-[#C8A97E] transition-colors">notifications</button>
          <button className="bg-[#C8A97E]/10 px-4 py-2 border border-[#C8A97E]/30 text-[#C8A97E] font-label-sm uppercase tracking-widest hover:bg-[#C8A97E] hover:text-black transition-all duration-300">
            Log Out
          </button>
        </div>
      </header>

      <main className="pt-32 pb-20 px-20 max-w-[1440px] mx-auto min-h-screen">
        {/* Heading */}
        <div className="mb-12">
          <h2 className="font-headline-h1 text-headline-h1 text-[#C8A97E] mb-2">Executive Overview</h2>
          <p className="font-body-lg text-body-lg text-zinc-500">Global Sales &amp; Logistics Administrative Suite</p>
        </div>

        {/* KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          <div className="glass-card p-8 flex flex-col gap-2 relative overflow-hidden group">
            <div className="absolute right-0 top-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-6xl">shopping_cart</span>
            </div>
            <span className="font-label-sm text-zinc-500 uppercase">Total Orders</span>
            <span className="font-headline-h2 text-headline-h3 text-white">1,284</span>
            <span className="text-emerald-500 text-sm font-label-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">trending_up</span> +12.5% vs Last Month
            </span>
          </div>
          <div className="glass-card p-8 flex flex-col gap-2 relative overflow-hidden group">
            <div className="absolute right-0 top-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-6xl">payments</span>
            </div>
            <span className="font-label-sm text-zinc-500 uppercase">Revenue (PKR)</span>
            <span className="font-headline-h2 text-headline-h3 text-white">74.2M</span>
            <span className="text-emerald-500 text-sm font-label-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">trending_up</span> +8.2% vs Last Month
            </span>
          </div>
          <div className="glass-card p-8 flex flex-col gap-2 relative overflow-hidden group">
            <div className="absolute right-0 top-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-6xl">group</span>
            </div>
            <span className="font-label-sm text-zinc-500 uppercase">Active Customers</span>
            <span className="font-headline-h2 text-headline-h3 text-white">3,109</span>
            <span className="text-zinc-500 text-sm font-label-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">remove</span> Stable
            </span>
          </div>
          <div className="glass-card p-8 flex flex-col gap-2 relative overflow-hidden group">
            <div className="absolute right-0 top-0 p-4 opacity-10">
              <span className="material-symbols-outlined text-6xl">directions_car</span>
            </div>
            <span className="font-label-sm text-zinc-500 uppercase">Delivered Cars</span>
            <span className="font-headline-h2 text-headline-h3 text-white">142</span>
            <span className="text-emerald-500 text-sm font-label-sm flex items-center gap-1">
              <span className="material-symbols-outlined text-xs">trending_up</span> +5.1% vs Last Month
            </span>
          </div>
        </div>

        {/* Charts Row */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          {/* Top Selling Models */}
          <div className="glass-card p-8">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="font-headline-h3 text-[#C8A97E]">Top Selling Models</h3>
                <p className="text-zinc-500 text-sm">Units sold per model class</p>
              </div>
              <button className="text-xs font-label-sm text-[#C8A97E] uppercase border-b border-[#C8A97E]/30 pb-1 hover:text-white hover:border-white transition-colors">View Details</button>
            </div>
            <div className="flex items-end gap-4 h-64 w-full px-4">
              {[
                { name: 'S-Class', height: '80%', value: 42 },
                { name: 'G-Wagon', height: '65%', value: 34 },
                { name: 'EQS SUV', height: '95%', value: 51 },
                { name: 'GLE', height: '50%', value: 22 },
                { name: 'GT Coupe', height: '75%', value: 38 },
              ].map((model) => (
                <div key={model.name} className="flex-1 flex flex-col items-center gap-3">
                  <div className="w-full bg-[#C8A97E]/20 relative group cursor-pointer hover:bg-[#C8A97E] transition-colors duration-300" style={{ height: model.height }}>
                    <div className="absolute -top-8 left-1/2 -translate-x-1/2 text-xs font-label-sm opacity-0 group-hover:opacity-100 transition-opacity">{model.value}</div>
                  </div>
                  <span className="text-[10px] font-label-sm text-zinc-400 uppercase tracking-tighter">{model.name}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Monthly Revenue */}
          <div className="glass-card p-8">
            <div className="flex justify-between items-end mb-8">
              <div>
                <h3 className="font-headline-h3 text-[#C8A97E]">Monthly Revenue</h3>
                <p className="text-zinc-500 text-sm">Total gross revenue across all sectors</p>
              </div>
              <select className="bg-transparent border-none text-xs font-label-sm text-[#C8A97E] focus:ring-0 cursor-pointer uppercase">
                <option>Last 6 Months</option>
                <option>Current Year</option>
              </select>
            </div>
            <div className="h-64 w-full flex items-center justify-center relative">
              <svg className="w-full h-full" viewBox="0 0 400 200">
                <defs>
                  <linearGradient id="grad" x1="0%" y1="0%" x2="0%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#C8A97E', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#C8A97E', stopOpacity: 0 }} />
                  </linearGradient>
                </defs>
                <path d="M 0 160 Q 50 140 100 150 T 200 80 T 300 90 T 400 40" fill="none" stroke="#C8A97E" strokeWidth="2" />
                <path d="M 0 160 Q 50 140 100 150 T 200 80 T 300 90 T 400 40 V 200 H 0 Z" fill="url(#grad)" opacity="0.2" />
                <circle cx="100" cy="150" fill="#C8A97E" r="4" />
                <circle cx="200" cy="80" fill="#C8A97E" r="4" />
                <circle cx="400" cy="40" fill="#C8A97E" r="4" />
              </svg>
              <div className="absolute bottom-0 w-full flex justify-between px-2 text-[10px] font-label-sm text-zinc-600">
                <span>JAN</span><span>FEB</span><span>MAR</span><span>APR</span><span>MAY</span><span>JUN</span>
              </div>
            </div>
          </div>
        </div>

        {/* Orders Table + Sidebar */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Recent Orders */}
          <div className="lg:col-span-2 glass-card overflow-hidden">
            <div className="p-8 border-b border-[#C8A97E]/10 flex justify-between items-center">
              <h3 className="font-headline-h3 text-white text-2xl">Recent Orders</h3>
              <button className="text-xs font-label-sm text-[#C8A97E] uppercase tracking-widest px-4 py-2 hover:bg-[#C8A97E]/10 transition-colors">Export CSV</button>
            </div>
            <div className="overflow-x-auto">
              <table className="w-full text-left">
                <thead>
                  <tr className="text-zinc-500 font-label-sm text-[11px] uppercase tracking-tighter border-b border-[#C8A97E]/5">
                    <th className="p-6 font-medium">Order ID</th>
                    <th className="p-6 font-medium">Model</th>
                    <th className="p-6 font-medium">Customer</th>
                    <th className="p-6 font-medium text-right">Amount</th>
                    <th className="p-6 font-medium">Status</th>
                  </tr>
                </thead>
                <tbody className="text-sm">
                  <tr className="border-b border-[#C8A97E]/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 text-[#C8A97E]">#MB-2024-001</td>
                    <td className="p-6 text-white">EQS 580 4MATIC</td>
                    <td className="p-6 text-zinc-400">Ahmed Khan</td>
                    <td className="p-6 text-right text-white">₨ 42,500,000</td>
                    <td className="p-6"><span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-label-sm rounded-sm">DELIVERED</span></td>
                  </tr>
                  <tr className="border-b border-[#C8A97E]/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 text-[#C8A97E]">#MB-2024-002</td>
                    <td className="p-6 text-white">G-Class G63 AMG</td>
                    <td className="p-6 text-zinc-400">Zainab Malik</td>
                    <td className="p-6 text-right text-white">₨ 85,000,000</td>
                    <td className="p-6"><span className="px-2 py-1 bg-blue-500/10 text-blue-500 text-[10px] font-label-sm rounded-sm">IN TRANSIT</span></td>
                  </tr>
                  <tr className="border-b border-[#C8A97E]/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 text-[#C8A97E]">#MB-2024-003</td>
                    <td className="p-6 text-white">S-Class S450</td>
                    <td className="p-6 text-zinc-400">Tariq Jameel</td>
                    <td className="p-6 text-right text-white">₨ 58,200,000</td>
                    <td className="p-6"><span className="px-2 py-1 bg-amber-500/10 text-amber-500 text-[10px] font-label-sm rounded-sm">PREPARING</span></td>
                  </tr>
                  <tr className="border-b border-[#C8A97E]/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 text-[#C8A97E]">#MB-2024-004</td>
                    <td className="p-6 text-white">AMG GT 4-Door</td>
                    <td className="p-6 text-zinc-400">Haris Butt</td>
                    <td className="p-6 text-right text-white">₨ 49,900,000</td>
                    <td className="p-6"><span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-label-sm rounded-sm">DELIVERED</span></td>
                  </tr>
                  <tr className="border-b border-[#C8A97E]/5 hover:bg-white/[0.02] transition-colors">
                    <td className="p-6 text-[#C8A97E]">#MB-2024-005</td>
                    <td className="p-6 text-white">GLS 450 4MATIC</td>
                    <td className="p-6 text-zinc-400">Sami Ibrahim</td>
                    <td className="p-6 text-right text-white">₨ 38,400,000</td>
                    <td className="p-6"><span className="px-2 py-1 bg-emerald-500/10 text-emerald-500 text-[10px] font-label-sm rounded-sm">DELIVERED</span></td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>

          {/* Sidebar: Alerts + Audit */}
          <div className="flex flex-col gap-8">
            {/* Inventory Alerts */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-amber-500">warning</span>
                <h3 className="font-headline-h3 text-white text-xl">Inventory Alerts</h3>
              </div>
              <div className="space-y-4">
                <div className="p-4 bg-amber-500/5 border-l-2 border-amber-500">
                  <p className="text-sm text-white font-medium">EQA 250+ Premium</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-zinc-400">Stock level critical</span>
                    <span className="text-xs font-bold text-amber-500">1 Unit Left</span>
                  </div>
                </div>
                <div className="p-4 bg-amber-500/5 border-l-2 border-amber-500">
                  <p className="text-sm text-white font-medium">Maybach GLS 600</p>
                  <div className="flex justify-between items-center mt-1">
                    <span className="text-xs text-zinc-400">Stock level critical</span>
                    <span className="text-xs font-bold text-amber-500">2 Units Left</span>
                  </div>
                </div>
                <div className="p-4 bg-zinc-800/20 border-l-2 border-zinc-700">
                  <p className="text-sm text-zinc-300 font-medium italic">All other stock levels stable</p>
                </div>
              </div>
            </div>

            {/* Audit Log */}
            <div className="glass-card p-8">
              <div className="flex items-center gap-3 mb-6">
                <span className="material-symbols-outlined text-[#C8A97E]">history</span>
                <h3 className="font-headline-h3 text-white text-xl">Audit Log</h3>
              </div>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-[#C8A97E]"></div>
                  <div>
                    <p className="text-xs text-white">Inventory updated: G-Class</p>
                    <p className="text-[10px] text-zinc-500 uppercase mt-0.5">Admin (Sara) • 2m ago</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-zinc-700"></div>
                  <div>
                    <p className="text-xs text-white">Successful Login</p>
                    <p className="text-[10px] text-zinc-500 uppercase mt-0.5">System • 15m ago</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-[#C8A97E]"></div>
                  <div>
                    <p className="text-xs text-white">Price adjusted: S-Class 2024</p>
                    <p className="text-[10px] text-zinc-500 uppercase mt-0.5">Manager (Omar) • 1h ago</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-2 h-2 mt-1.5 rounded-full bg-red-500"></div>
                  <div>
                    <p className="text-xs text-white">Failed Login Attempt</p>
                    <p className="text-[10px] text-zinc-500 uppercase mt-0.5">IP: 192.168.1.4 • 4h ago</p>
                  </div>
                </div>
              </div>
              <button className="w-full mt-8 py-3 border border-[#C8A97E]/20 text-[#C8A97E] font-label-sm uppercase hover:bg-[#C8A97E] hover:text-black transition-all">Full Audit Trace</button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="bg-[#050508] text-[#C8A97E] font-['Playfair_Display'] text-sm tracking-tight w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-[#C8A97E]/10">
        <div className="flex flex-col gap-6">
          <span className="text-lg font-semibold text-white">Mercedes-Benz</span>
          <p className="text-zinc-500 text-xs leading-relaxed max-w-xs">
            The technical administrative portal for Mercedes-Benz Pakistan operations. Secure executive access for fleet management, customer relations, and high-precision logistics.
          </p>
          <span className="text-xs text-zinc-600">© 2024 Mercedes-Benz Pakistan. All rights reserved.</span>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-white uppercase font-bold text-xs tracking-widest mb-2">Systems</span>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Cars</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">My Orders</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Wishlist</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Test Drive</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-white uppercase font-bold text-xs tracking-widest mb-2">Corporate</span>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Service</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 text-[#C8A97E]" href="#">Admin</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Contact</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Legal</a>
          </div>
        </div>
        <div className="flex flex-col gap-6 items-start md:items-end">
          <div className="glass-card p-6 w-full md:w-auto min-w-[280px]">
            <span className="text-white font-bold block mb-4 uppercase text-xs">Security Protocol</span>
            <div className="flex items-center gap-3 text-emerald-500 text-xs">
              <span className="material-symbols-outlined text-sm">verified_user</span>
              <span>Encrypted Connection Active</span>
            </div>
            <div className="mt-4 flex gap-3">
              <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[#C8A97E] hover:text-black transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-sm">shield</span>
              </div>
              <div className="w-10 h-10 rounded-full glass-card flex items-center justify-center hover:bg-[#C8A97E] hover:text-black transition-colors cursor-pointer">
                <span className="material-symbols-outlined text-sm">lock</span>
              </div>
            </div>
          </div>
        </div>
      </footer>
    </>
  );
}
