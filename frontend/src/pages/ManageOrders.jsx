export default function ManageOrders() {
  const orders = [
    {
      id: '#MB-2024-001',
      customer: 'Alexander Vance',
      email: 'vance.a@luxury.com',
      model: 'S-Class Maybach S 580',
      colorDot: 'bg-zinc-900 border-zinc-700',
      colorName: 'Obsidian Black',
      date: 'Oct 12, 2024',
      price: '$193,400',
      status: 'confirmed',
      selectStyle: 'border-outline-variant text-primary',
    },
    {
      id: '#MB-2024-002',
      customer: 'Isabella Thorne',
      email: 'i.thorne@estate.uk',
      model: 'EQS 580 4MATIC Sedan',
      colorDot: 'bg-zinc-100 border-zinc-300',
      colorName: 'Diamond White',
      date: 'Oct 14, 2024',
      price: '$125,900',
      status: 'pending',
      selectStyle: 'border-outline-variant text-zinc-400',
    },
    {
      id: '#MB-2024-003',
      customer: 'Maximilian Sterling',
      email: 'm.sterling@finance.com',
      model: 'G 63 AMG SUV',
      colorDot: 'bg-emerald-900 border-emerald-800',
      colorName: 'Emerald Green',
      date: 'Oct 15, 2024',
      price: '$179,000',
      status: 'delivered',
      selectStyle: 'border-emerald-900/50 text-emerald-500',
    },
    {
      id: '#MB-2024-004',
      customer: 'Eleanor Dupont',
      email: 'e.dupont@vogue.fr',
      model: 'SL 63 Roadster',
      colorDot: 'bg-red-900 border-red-800',
      colorName: 'Patagonia Red',
      date: 'Oct 16, 2024',
      price: '$183,000',
      status: 'cancelled',
      selectStyle: 'border-error-container/50 text-error',
    },
  ];

  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]">star</span>
          <h1 className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</h1>
        </div>
        <nav className="hidden md:flex gap-10">
          <a className="font-label-sm text-label-sm text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Cars</a>
          <a className="font-label-sm text-label-sm text-[#C8A97E] border-b border-[#C8A97E] pb-1" href="#">Admin</a>
          <a className="font-label-sm text-label-sm text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Service</a>
        </nav>
        <div className="flex items-center gap-6">
          <span className="material-symbols-outlined text-zinc-400 cursor-pointer hover:text-[#C8A97E]">search</span>
          <button className="font-label-sm text-label-sm px-6 py-2 border border-[#C8A97E] text-[#C8A97E] hover:bg-[#C8A97E] hover:text-background transition-all duration-300">
            Sign In
          </button>
        </div>
      </header>

      <main className="pt-32 pb-40 px-20 max-w-[1440px] mx-auto">
        {/* Page Header */}
        <div className="mb-16">
          <h2 className="font-headline-h1 text-headline-h1 text-on-background mb-4">Manage Orders</h2>
          <p className="font-body-lg text-body-lg text-secondary max-w-2xl">Executive logistics and inventory management interface. Monitor client acquisitions and fulfillments in real-time.</p>
        </div>

        {/* Filter Tabs */}
        <div className="flex flex-wrap gap-8 mb-12 border-b border-outline-variant pb-4">
          <button className="font-label-sm text-label-sm text-[#C8A97E] border-b-2 border-[#C8A97E] pb-4 transition-all">All</button>
          <button className="font-label-sm text-label-sm text-zinc-500 hover:text-white pb-4 transition-all">Pending</button>
          <button className="font-label-sm text-label-sm text-zinc-500 hover:text-white pb-4 transition-all">Confirmed</button>
          <button className="font-label-sm text-label-sm text-zinc-500 hover:text-white pb-4 transition-all">Delivered</button>
          <button className="font-label-sm text-label-sm text-zinc-500 hover:text-white pb-4 transition-all">Cancelled</button>
        </div>

        {/* Orders Table */}
        <div className="bg-surface-container-lowest border border-[#C8A97E]/15 overflow-hidden">
          <div className="overflow-x-auto">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-low">
                  <th className="px-8 py-6 font-label-sm text-label-sm text-on-surface-variant">Order ID</th>
                  <th className="px-8 py-6 font-label-sm text-label-sm text-on-surface-variant">Customer</th>
                  <th className="px-8 py-6 font-label-sm text-label-sm text-on-surface-variant">Model</th>
                  <th className="px-8 py-6 font-label-sm text-label-sm text-on-surface-variant">Color</th>
                  <th className="px-8 py-6 font-label-sm text-label-sm text-on-surface-variant">Date</th>
                  <th className="px-8 py-6 font-label-sm text-label-sm text-on-surface-variant">Price</th>
                  <th className="px-8 py-6 font-label-sm text-label-sm text-on-surface-variant">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-[#C8A97E]/10">
                {orders.map((o, i) => (
                  <tr key={i} className="hover:bg-[#C8A97E]/5 transition-colors group">
                    <td className="px-8 py-6 font-label-sm text-label-sm text-[#C8A97E]">{o.id}</td>
                    <td className="px-8 py-6">
                      <div className="flex flex-col">
                        <span className="font-body-md text-on-surface font-bold">{o.customer}</span>
                        <span className="text-xs text-zinc-500">{o.email}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 font-body-md text-on-background">{o.model}</td>
                    <td className="px-8 py-6">
                      <div className="flex items-center gap-2">
                        <div className={`w-3 h-3 ${o.colorDot} border`}></div>
                        <span className="text-xs text-secondary">{o.colorName}</span>
                      </div>
                    </td>
                    <td className="px-8 py-6 text-xs text-secondary">{o.date}</td>
                    <td className="px-8 py-6 font-body-md text-on-background">{o.price}</td>
                    <td className="px-8 py-6">
                      <select defaultValue={o.status} className={`bg-background border ${o.selectStyle} font-label-sm text-label-sm px-4 py-2 focus:ring-0 focus:border-primary-container outline-none appearance-none`}>
                        <option className="bg-background" value="pending">Pending</option>
                        <option className="bg-background" value="confirmed">Confirmed</option>
                        <option className="bg-background" value="delivered">Delivered</option>
                        <option className="bg-background" value="cancelled">Cancelled</option>
                      </select>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>

          {/* Pagination */}
          <div className="p-8 flex justify-between items-center bg-surface-container-low border-t border-[#C8A97E]/10">
            <span className="text-xs text-zinc-500">Showing 1-10 of 124 Orders</span>
            <div className="flex gap-4">
              <button className="p-2 border border-[#C8A97E]/15 text-zinc-500 hover:text-[#C8A97E] transition-all">
                <span className="material-symbols-outlined text-sm">chevron_left</span>
              </button>
              <button className="p-2 border border-[#C8A97E]/15 text-zinc-500 hover:text-[#C8A97E] transition-all">
                <span className="material-symbols-outlined text-sm">chevron_right</span>
              </button>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div>
          <h3 className="text-lg font-semibold text-white font-['Playfair_Display'] mb-8">Mercedes-Benz Pakistan</h3>
          <p className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 leading-relaxed">Defining the pinnacle of automotive engineering and luxury craftsmanship since 1926. Experience the future of mobility today.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-3">
            <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Cars</a>
            <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">My Orders</a>
            <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Wishlist</a>
            <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Test Drive</a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Service</a>
            <a className="font-['Playfair_Display'] text-sm tracking-tight text-[#C8A97E] hover:translate-x-1 transition-transform duration-200" href="#">Admin</a>
            <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Contact</a>
            <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Privacy</a>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-zinc-500 hover:text-[#C8A97E] cursor-pointer">language</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-[#C8A97E] cursor-pointer">location_on</span>
          </div>
          <p className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 mt-8">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
