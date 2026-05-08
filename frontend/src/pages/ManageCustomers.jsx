import React from 'react';

export default function ManageCustomers() {
  const stats = [
    { label: 'Total Clients', value: '2,482', badge: '+12%', badgeColor: 'text-emerald-500' },
    { label: 'Active Sessions', value: '142', badge: 'Live', badgeColor: 'text-zinc-500' },
    { label: 'Pending Deposits', value: '18', badge: 'High Priority', badgeColor: 'text-primary', valueColor: 'text-primary' },
    { label: 'Average LTV', value: '$142k', badge: 'Annual', badgeColor: 'text-zinc-500' },
  ];

  const customers = [
    { name: 'Maximilian von Weber', tier: 'Platinum Tier', tierColor: 'text-primary', email: 'm.weber@executive.de', phone: '+49 172 902 4432', since: 'Oct 14, 2021', orders: '08', status: 'Active', statusStyle: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBDwsR2bwmDgIOHBPZfjkKUv6VIsD0zuL9ktfMAC8uoMvb4ySTLaC2GfLWTHBuPg8u_lPloYnHpnoi8pPIlMcf1dopOtaVciDtHSBHxKA519CrLw0JHske2f9y4Ce4NgVXR21n2i0w5zMvnLZw7GeNVOvDTojX1NMtBaPSO_J8QIAqiDOnjOYrKU1VHk5Q6B_FdaVTAInCiGUxWgpQqViphX3VpPXJ5pTF5q327kZVIHm38TaoF7GVOsy_JbsCgSn65Mu1YlYLMvng', expanded: true },
    { name: 'Elena Rodriguez', tier: 'Standard Tier', tierColor: 'text-zinc-500', email: 'elena.rod@techfoundry.io', phone: '+1 (555) 012-9983', since: 'Jan 02, 2024', orders: '01', status: 'Inactive', statusStyle: 'bg-zinc-500/10 text-zinc-500 border-zinc-500/20', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaU6hmi-fBCmm6-a23KA6jQSOL-vAKWJFjPCVOqYDVqsFkagZgFuhkl9xId_1KYbmx-6PKBf6fRIrQFrL0PrINRLhlbnmA5v-YwC1_D-7Cil0ERBRIx7lyCukg2bocsVlF1OIIokTxA3dL5weC8Ok3VWw9K0F5eN46uau8E25Zh5acRuFf-6GoVX8thFVEVIs7go2AqV4kEanhG0aEA69dFm_5rX50Wd4KR6c2P1V_YSVVztS9Wmf7Wlt86PwKDhCrl38AjFqBNCI', expanded: false },
    { name: 'Jameson Sterling', tier: 'VIP Collector', tierColor: 'text-[#C8A97E]', email: 'j.sterling@sterling-holdings.com', phone: '+44 20 7946 0958', since: 'Mar 22, 2019', orders: '24', status: 'Active', statusStyle: 'bg-emerald-500/10 text-emerald-500 border-emerald-500/20', img: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA75-EV1Kq1wJKUIcmCL8bRjgpqvDmwfuedCrQ9gfcq49qjxuJuy2jgeO__nyDHVXwitOcw70R1PuhxG9AE2df4krOl8-phjd81cdMrvRCyJ-qqrwhf9TWKhVgbKkXcAEYRZqdUs7F6AE6XIIpLOuI17LI9ZCwcPez27K2JbctaWGDdp9nFWOCeXnq3SYFB9G0AlleXWiRyLqMXQ5kLe0AJvrew86DGbbZ-X8X_iGKhgPuqeSwvDVwgMnLStXyE83eoVlM0QlkyFYM', expanded: false },
  ];

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]">star</span>
          <h1 className="font-['Playfair_Display'] tracking-widest uppercase text-xl font-bold text-[#C8A97E]">Mercedes-Benz</h1>
        </div>
        <nav className="hidden md:flex gap-12 items-center">
          <a className="font-['Playfair_Display'] text-sm text-zinc-400 hover:text-[#C8A97E] transition-colors" href="#">Cars</a>
          <a className="font-['Playfair_Display'] text-sm text-[#C8A97E] border-b border-[#C8A97E] pb-1" href="#">Admin</a>
          <a className="font-['Playfair_Display'] text-sm text-zinc-400 hover:text-[#C8A97E] transition-colors" href="#">Service</a>
          <button className="ml-4 px-6 py-2 border border-[#C8A97E] text-[#C8A97E] font-label-sm uppercase hover:bg-[#C8A97E] hover:text-black transition-all">Sign Out</button>
        </nav>
      </header>

      <main className="pt-32 pb-40 px-20 max-w-[1440px] mx-auto min-h-screen">
        <div className="mb-16 flex flex-col md:flex-row justify-between items-end gap-8">
          <div className="space-y-4">
            <p className="text-primary font-label-sm uppercase tracking-widest">Administrative Control</p>
            <h2 className="font-headline-h1 text-on-background">Customer Directory</h2>
            <p className="text-zinc-500 font-body-lg max-w-xl">Manage the global database of distinguished owners and prospective clients with precision and security.</p>
          </div>
          <div className="w-full md:w-96">
            <div className="relative group">
              <span className="material-symbols-outlined absolute left-4 top-1/2 -translate-y-1/2 text-zinc-500 group-focus-within:text-primary transition-colors">search</span>
              <input className="w-full bg-surface-container-lowest border border-outline-variant/30 px-12 py-4 focus:ring-1 focus:ring-primary focus:border-primary outline-none font-body-md text-on-surface transition-all" placeholder="Search by name, email, or VIN..." type="text" />
            </div>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-12">
          {stats.map((s, i) => (
            <div key={i} className="glass-panel p-8 flex flex-col justify-between">
              <span className="text-zinc-500 font-label-sm uppercase">{s.label}</span>
              <div className="mt-4 flex items-baseline gap-2">
                <span className={`text-4xl font-headline-h2 ${s.valueColor || 'text-on-background'}`}>{s.value}</span>
                <span className={`font-label-sm text-xs ${s.badgeColor}`}>{s.badge}</span>
              </div>
            </div>
          ))}
        </div>

        <div className="glass-panel overflow-hidden">
          <div className="overflow-x-auto custom-scrollbar">
            <table className="w-full text-left border-collapse">
              <thead>
                <tr className="bg-surface-container-lowest/50 border-b border-outline-variant/20">
                  <th className="px-8 py-6 font-label-sm uppercase text-zinc-500 tracking-widest">Client</th>
                  <th className="px-8 py-6 font-label-sm uppercase text-zinc-500 tracking-widest">Contact Info</th>
                  <th className="px-8 py-6 font-label-sm uppercase text-zinc-500 tracking-widest">Member Since</th>
                  <th className="px-8 py-6 font-label-sm uppercase text-zinc-500 tracking-widest text-center">Orders</th>
                  <th className="px-8 py-6 font-label-sm uppercase text-zinc-500 tracking-widest">Status</th>
                  <th className="px-8 py-6 font-label-sm uppercase text-zinc-500 tracking-widest text-right">Actions</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-outline-variant/10">
                {customers.map((c, i) => (
                  <React.Fragment key={i}>
                    <tr className="hover:bg-primary/5 transition-colors group cursor-pointer">
                      <td className="px-8 py-6">
                        <div className="flex items-center gap-4">
                          <div className="w-12 h-12 rounded-full overflow-hidden border border-primary/20">
                            <img className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-500" src={c.img} alt={c.name} />
                          </div>
                          <div>
                            <div className="font-headline-h3 text-lg text-on-background">{c.name}</div>
                            <div className={`text-xs uppercase tracking-tighter ${c.tierColor}`}>{c.tier}</div>
                          </div>
                        </div>
                      </td>
                      <td className="px-8 py-6">
                        <div className="space-y-1">
                          <div className="text-sm text-zinc-300 flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">mail</span>{c.email}</div>
                          <div className="text-sm text-zinc-500 flex items-center gap-2"><span className="material-symbols-outlined text-[16px]">phone</span>{c.phone}</div>
                        </div>
                      </td>
                      <td className="px-8 py-6 text-zinc-400">{c.since}</td>
                      <td className="px-8 py-6 text-center"><span className="bg-surface-container-high px-3 py-1 rounded text-on-surface">{c.orders}</span></td>
                      <td className="px-8 py-6"><span className={`inline-flex items-center px-3 py-1 rounded-full text-[10px] font-bold uppercase tracking-widest border ${c.statusStyle}`}>{c.status}</span></td>
                      <td className="px-8 py-6 text-right">
                        <div className="flex justify-end gap-4">
                          <button className="text-zinc-500 hover:text-primary transition-colors"><span className="material-symbols-outlined">edit</span></button>
                          <button className="text-zinc-500 hover:text-error transition-colors"><span className="material-symbols-outlined">block</span></button>
                        </div>
                      </td>
                    </tr>
                    {c.expanded && (
                      <tr className="bg-surface-container-lowest/30">
                        <td className="px-8 py-0" colSpan="6">
                          <div className="py-8 grid grid-cols-3 gap-12 border-t border-primary/5">
                            <div>
                              <h4 className="font-label-sm uppercase text-primary mb-4">Recent Acquisitions</h4>
                              <ul className="space-y-3">
                                <li className="flex justify-between text-sm"><span className="text-zinc-300">2024 EQS Sedan</span><span className="text-zinc-500">Delivered</span></li>
                                <li className="flex justify-between text-sm"><span className="text-zinc-300">2023 G-Class 63</span><span className="text-zinc-500">Serviced</span></li>
                              </ul>
                            </div>
                            <div>
                              <h4 className="font-label-sm uppercase text-primary mb-4">Account Security</h4>
                              <div className="flex items-center justify-between p-4 border border-outline-variant/20 rounded bg-background">
                                <div className="space-y-1"><p className="text-sm font-medium">Disable Client Access</p><p className="text-xs text-zinc-500">Immediately revoke all platform privileges.</p></div>
                                <button className="w-12 h-6 bg-surface-container-highest rounded-full relative flex items-center px-1 hover:bg-zinc-700"><span className="w-4 h-4 bg-zinc-400 rounded-full"></span></button>
                              </div>
                            </div>
                            <div>
                              <h4 className="font-label-sm uppercase text-primary mb-4">Notes</h4>
                              <p className="text-sm text-zinc-400 italic">"Client prefers direct communication via encrypted channels. Interested in Maybach Night Series launch."</p>
                            </div>
                          </div>
                        </td>
                      </tr>
                    )}
                  </React.Fragment>
                ))}
              </tbody>
            </table>
          </div>
          <div className="px-8 py-6 border-t border-outline-variant/20 flex items-center justify-between">
            <p className="text-zinc-500 font-label-sm text-xs">Showing 1 to 10 of 2,482 entries</p>
            <div className="flex gap-2">
              <button className="p-2 border border-outline-variant/30 hover:border-primary text-zinc-500 hover:text-primary transition-all"><span className="material-symbols-outlined">chevron_left</span></button>
              <button className="px-4 py-2 border border-primary bg-primary/10 text-primary font-label-sm">1</button>
              <button className="px-4 py-2 border border-outline-variant/30 hover:border-primary text-zinc-400 hover:text-primary transition-all font-label-sm">2</button>
              <button className="px-4 py-2 border border-outline-variant/30 hover:border-primary text-zinc-400 hover:text-primary transition-all font-label-sm">3</button>
              <span className="px-4 py-2 text-zinc-600">...</span>
              <button className="px-4 py-2 border border-outline-variant/30 hover:border-primary text-zinc-400 hover:text-primary transition-all font-label-sm">249</button>
              <button className="p-2 border border-outline-variant/30 hover:border-primary text-zinc-500 hover:text-primary transition-all"><span className="material-symbols-outlined">chevron_right</span></button>
            </div>
          </div>
        </div>
      </main>

      <footer className="w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div className="space-y-6">
          <h3 className="font-['Playfair_Display'] text-lg font-semibold text-white tracking-widest uppercase">Mercedes-Benz</h3>
          <p className="text-zinc-500 font-['Playfair_Display'] text-sm leading-relaxed">The pinnacle of automotive engineering and administrative excellence.</p>
          <p className="text-zinc-600 font-['Playfair_Display'] text-xs">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <ul className="space-y-4">
            <li><a className="font-['Playfair_Display'] text-sm text-zinc-500 hover:text-white hover:translate-x-1 transition-transform block" href="#">Cars</a></li>
            <li><a className="font-['Playfair_Display'] text-sm text-[#C8A97E] hover:translate-x-1 transition-transform block" href="#">Admin</a></li>
            <li><a className="font-['Playfair_Display'] text-sm text-zinc-500 hover:text-white hover:translate-x-1 transition-transform block" href="#">Test Drive</a></li>
          </ul>
          <ul className="space-y-4">
            <li><a className="font-['Playfair_Display'] text-sm text-zinc-500 hover:text-white hover:translate-x-1 transition-transform block" href="#">Legal</a></li>
            <li><a className="font-['Playfair_Display'] text-sm text-zinc-500 hover:text-white hover:translate-x-1 transition-transform block" href="#">Privacy</a></li>
            <li><a className="font-['Playfair_Display'] text-sm text-zinc-500 hover:text-white hover:translate-x-1 transition-transform block" href="#">Contact</a></li>
          </ul>
        </div>
        <div className="space-y-6">
          <h4 className="font-['Playfair_Display'] text-xs font-bold text-white tracking-[0.2em] uppercase">Connect</h4>
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-zinc-500 hover:text-primary cursor-pointer transition-colors">share</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-primary cursor-pointer transition-colors">public</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-primary cursor-pointer transition-colors">language</span>
          </div>
        </div>
      </footer>
    </>
  );
}

