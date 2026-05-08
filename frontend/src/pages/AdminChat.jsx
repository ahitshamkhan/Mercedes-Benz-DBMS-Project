export default function AdminChat() {
  return (
    <div className="bg-[#050508] text-on-background font-body-md min-h-screen flex flex-col overflow-hidden">
      {/* Header */}
      <header className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-xl">star</span>
          <span className="text-xl font-bold text-[#C8A97E]">Mercedes-Benz</span>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-label-sm" href="#">Cars</a>
          <a className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 font-label-sm" href="#">Admin</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-label-sm" href="#">Service</a>
        </nav>
        <div className="flex items-center gap-6">
          <span className="text-[#C8A97E] font-label-sm">Admin Panel</span>
          <div className="w-8 h-8 rounded-full border border-[#C8A97E]/30 overflow-hidden">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDWw7HkZG3KrurBWLwrK9UoW4v810f9NcCP1JbhkO7t-c8OoVVkQGUIdSfFDZwSH_zflCYLgZFNkmjYuUzKj6kvvfLA0dGdMeCGSae6gF5ggM1IN2tX_UHwR_xI1N9kr4XQyp0ydHi_IjnLCcVZ4nBl5AURMmR_1ZYK4_dyKwMQxo37h5YwVYptbVecwJxFUhnW9f_BHvbjVzk1Fm_Pn4YhsFr1-ozx1GVvp1svUs7uISl6ZDsJ8CCNFnwQNjr3tZC0KbPsvOp9Ucc" alt="Admin" />
          </div>
        </div>
      </header>

      {/* Main */}
      <main className="flex-grow pt-20 flex overflow-hidden">
        {/* Left: Conversation List */}
        <aside className="w-full md:w-[400px] bg-surface-container-lowest border-r border-[#C8A97E]/10 flex flex-col">
          <div className="p-6 border-b border-[#C8A97E]/10">
            <div className="flex justify-between items-center mb-6">
              <h2 className="font-headline-h3 text-[#C8A97E] text-2xl">Concierge</h2>
              <span className="bg-[#C8A97E]/20 text-[#C8A97E] text-[10px] px-2 py-0.5 rounded-full font-bold tracking-widest">LIVE</span>
            </div>
            <div className="relative">
              <span className="material-symbols-outlined absolute left-3 top-1/2 -translate-y-1/2 text-zinc-500 text-sm">search</span>
              <input className="w-full bg-[#0D0D14] border border-[#C8A97E]/15 rounded-sm py-2 pl-10 pr-4 text-sm text-on-background focus:ring-0 focus:border-[#C8A97E] transition-all placeholder:text-zinc-600" placeholder="Search conversations..." type="text" />
            </div>
          </div>
          <div className="flex-grow overflow-y-auto chat-scroll">
            {/* Active */}
            <div className="p-6 bg-[#C8A97E]/5 border-l-2 border-[#C8A97E] cursor-pointer transition-all">
              <div className="flex gap-4">
                <div className="relative">
                  <div className="w-12 h-12 rounded-sm bg-[#111118] border border-[#C8A97E]/20 overflow-hidden">
                    <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjOM58RFMotngOCNSXtgAqtn4vkFsDRNtN4cBu98MekQQGA220bODKypgd7vkYJjSDDjb9DFvQEKVcVHQ9cnL_80rE9IiwLppo5N8BmhN1HibI6db_rvfyUlJNgYqbb_vgYFHB4yfHI5-nf9i4Lovl8A50oGZf9qFv3cyOsWFsO1h7OvbTqmrMPq1mIGUv4vp2ZFaIIMcBNfJkYbbKFqfSnwQfo1K1GhSKf8TGTmsBmP0OFF0O1MX4UsqsOCnx-TWB6EZve5CuNRE" alt="Alexander" />
                  </div>
                  <div className="absolute -bottom-1 -right-1 w-3 h-3 bg-green-500 border-2 border-[#050508] rounded-full"></div>
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-white text-sm">Alexander Sterling</h4>
                    <span className="text-[10px] text-zinc-500">2m ago</span>
                  </div>
                  <p className="text-xs text-zinc-400 line-clamp-1 mb-2">I would like to inquire about the Maybach S-Class availability for next Tuesday.</p>
                  <div className="flex gap-2">
                    <span className="text-[9px] px-1.5 py-0.5 border border-[#C8A97E]/30 text-[#C8A97E] rounded uppercase">VIP</span>
                    <span className="text-[9px] px-1.5 py-0.5 border border-zinc-700 text-zinc-500 rounded uppercase">Sales</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Unread */}
            <div className="p-6 hover:bg-[#111118] cursor-pointer transition-all border-b border-[#C8A97E]/5">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-sm bg-[#111118] border border-[#C8A97E]/10 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDuuMtUbym6irXZL9rAwUuwcqv-zkCa6JklMGdcNQppZYdIXqwIV37uJMZfUl4Fy-BKCvZiJ0smmAj7BXNXmE-Q3boBO1i6GIDDp_H78sgKlt8VJ0lI5G3Ze4kmwER2m4IdvQwzVVikFyI1RdQO5uf2BpedJwNTlaOSRJmfkzQ1_xLwKtHLOr9B-V3f1LF-T0Vfh6PyFDcHgC8IC0VdtZpPt2W3pq47zbj4FFpdxdGqkP-D2OzCgw4VHhg8TuOa5yTY-YtEXnlcyps" alt="Elena" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-zinc-300 text-sm">Elena Rodriguez</h4>
                    <div className="flex items-center gap-2">
                      <div className="w-5 h-5 bg-[#C8A97E] text-black text-[10px] flex items-center justify-center rounded-full font-bold">3</div>
                      <span className="text-[10px] text-zinc-500">14m ago</span>
                    </div>
                  </div>
                  <p className="text-xs text-[#C8A97E] font-medium line-clamp-1 mb-2">When is the scheduled service for my EQS completed?</p>
                  <div className="flex gap-2">
                    <span className="text-[9px] px-1.5 py-0.5 border border-zinc-700 text-zinc-500 rounded uppercase">Service</span>
                  </div>
                </div>
              </div>
            </div>
            {/* Regular */}
            <div className="p-6 hover:bg-[#111118] cursor-pointer transition-all border-b border-[#C8A97E]/5 opacity-70">
              <div className="flex gap-4">
                <div className="w-12 h-12 rounded-sm bg-[#111118] border border-[#C8A97E]/10 overflow-hidden">
                  <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDvcXYHPbkzbwWFWH38nOyW2UxKhMIiASKLfZhoXQORz3Aq4a4wYmDWHeEXceoIbyyL6n0GszXRIMYBzykAkFoAMxDDDC6MWTFZUaukVgDuYSbuskcvK5dDzLRpzLjcPWhVXzSiOZuYQGJawT6RxT4aoOvzqq1z7ajbohvLgq05aFleEHAei1OsBcnOOCaMoSabhj5wBEIzqx4YMnVWQsbtL2ROZXPfnNaywt9AR6yH_rY5oP889JCdYjXKpoAS5xDloNXkQTZ7NGc" alt="Julian" />
                </div>
                <div className="flex-grow">
                  <div className="flex justify-between items-start mb-1">
                    <h4 className="font-bold text-zinc-400 text-sm">Julian Voss</h4>
                    <span className="text-[10px] text-zinc-600">1h ago</span>
                  </div>
                  <p className="text-xs text-zinc-500 line-clamp-1 mb-2">Thank you for the update. I will confirm the time tomorrow.</p>
                </div>
              </div>
            </div>
          </div>
        </aside>

        {/* Right: Active Thread */}
        <section className="flex-grow flex flex-col bg-[#050508]">
          {/* Thread Header */}
          <div className="h-20 px-8 flex justify-between items-center border-b border-[#C8A97E]/10 glass-panel z-10">
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-sm border border-[#C8A97E]/20 overflow-hidden">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBhFnlc61DoCiOksdqkHwHTH0Pr4Ttv1CdYzkGr6TBff0FUzjOnnwYysk53Hdo36O00dgZQvhBmUuUQ6C7EEjzFsJSoMdMmnC5xL84CB57zMq7DczECJrdasLmLwtZHUh1Wyv8ARN18kYVzeCo0l4mTnJbZr8azOZAT6-PBHAUBnAO-KgbG9fvYxpx_o3qB3729ANpvU8dNBgNcQABG7iyomQVnrdzzcurT1VElUKPSkFuLn4_GCZYIwbu03wdeXA8BTR10nMSLSM4" alt="Alexander" />
              </div>
              <div>
                <h3 className="font-bold text-white text-sm">Alexander Sterling</h3>
                <p className="text-[10px] text-[#C8A97E] tracking-widest uppercase">Verified Mercedes-Benz Platinum Member</p>
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 px-4 py-2 border border-[#C8A97E]/30 text-[#C8A97E] font-label-sm hover:bg-[#C8A97E] hover:text-black transition-all">
                <span className="material-symbols-outlined text-sm">history</span><span>LOGS</span>
              </button>
              <button className="flex items-center gap-2 px-4 py-2 bg-error-container text-white font-label-sm hover:bg-red-700 transition-all">
                <span className="material-symbols-outlined text-sm">close</span><span>CLOSE CONVERSATION</span>
              </button>
            </div>
          </div>

          {/* Messages */}
          <div className="flex-grow overflow-y-auto p-12 space-y-8 chat-scroll bg-[radial-gradient(circle_at_center,_rgba(200,169,126,0.03)_0%,_transparent_70%)]">
            <div className="flex justify-center">
              <span className="text-[10px] font-label-sm text-zinc-600 uppercase tracking-widest px-4 py-1 border border-zinc-800/50 rounded-full">Tuesday, 14 May</span>
            </div>

            {/* Customer */}
            <div className="flex gap-4 max-w-2xl">
              <div className="flex-shrink-0 w-8 h-8 rounded-sm overflow-hidden border border-zinc-800">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAhX39SyUjfcCoK6VUrXISFrreBHPSh_TBEr494f4GTWv6-Nb2oBFA-R74655OH21SEBEY1btbyXyjTL2_A9oKkKofLyTUofiD-m47VxZXNUXQivA0v1WHaeZK-E_VTQrVGH10jWPnpZ1lF62xCK5fY1LkGeHCW2-s8_Hh8CPdgodlZUOg6QX3PIPmKAK4KjEHv0rCZJczUn6_W3h885rw3Mf0_JfDWaT8sBEBV2rvODwNSpCnwY5vR5wIHkZEEzW9EeUarb3l4aWM" alt="Client" />
              </div>
              <div className="space-y-2">
                <div className="bg-[#111118] border border-[#C8A97E]/10 p-4 rounded-sm">
                  <p className="text-sm text-zinc-300 leading-relaxed">Good morning. I am interested in the new Maybach S-Class. Do you have a black/obsidian edition available for a test drive at the downtown showroom next week?</p>
                </div>
                <span className="text-[9px] text-zinc-600 uppercase">10:42 AM</span>
              </div>
            </div>

            {/* Admin */}
            <div className="flex gap-4 max-w-2xl ml-auto flex-row-reverse">
              <div className="flex-shrink-0 w-8 h-8 rounded-sm overflow-hidden border border-[#C8A97E]/30 bg-[#C8A97E]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#C8A97E] text-sm">support_agent</span>
              </div>
              <div className="space-y-2 text-right">
                <div className="bg-[#0D0D14] border border-[#C8A97E]/40 p-4 rounded-sm shadow-[0_0_15px_rgba(200,169,126,0.05)]">
                  <p className="text-sm text-[#C8A97E] leading-relaxed">Good morning Mr. Sterling. It is a pleasure to assist you. We currently have a bespoke Obsidian Black Maybach S 580 in our downtown inventory. I can certainly arrange a private viewing and test drive for you.</p>
                </div>
                <span className="text-[9px] text-zinc-600 uppercase">10:45 AM • Seen</span>
              </div>
            </div>

            {/* Customer */}
            <div className="flex gap-4 max-w-2xl">
              <div className="flex-shrink-0 w-8 h-8 rounded-sm overflow-hidden border border-zinc-800">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBg7G38Qx-4TedRRK4fuHuS1k85xb3jCXjfabU9iokgVGgANGB_jCxxwEo5BlYvgyyzeX93u3G25WSZzMkMyORuj_VejBomGbmthiAfUO00rq2RLg9pNdNxX2eNVsCCs4182BvMxBvXHZVSpv7tpgT_bHsHP-NcOO9hEwMmK8Bwjec348Z_L4SZ-050LOgyGSn_Tpy_jO2h7mem83wSxBrkrn13QVJXH2jUVmim0ae3xzQ9P2veO5qUVMLLqwf9iBV7AM_wOfR1WlE" alt="Client" />
              </div>
              <div className="space-y-2">
                <div className="bg-[#111118] border border-[#C8A97E]/10 p-4 rounded-sm">
                  <p className="text-sm text-zinc-300 leading-relaxed">That sounds perfect. Tuesday at 2:00 PM would work best for my schedule. Can you confirm the location?</p>
                </div>
                <span className="text-[9px] text-zinc-600 uppercase">10:48 AM</span>
              </div>
            </div>

            {/* Typing indicator */}
            <div className="flex gap-4 max-w-2xl ml-auto flex-row-reverse opacity-60">
              <div className="flex-shrink-0 w-8 h-8 rounded-sm overflow-hidden border border-[#C8A97E]/30 bg-[#C8A97E]/10 flex items-center justify-center">
                <span className="material-symbols-outlined text-[#C8A97E] text-sm">support_agent</span>
              </div>
              <div className="space-y-2 text-right">
                <div className="bg-[#0D0D14] border border-[#C8A97E]/20 px-4 py-2 rounded-sm flex gap-1 justify-end">
                  <div className="w-1 h-1 bg-[#C8A97E] rounded-full animate-bounce"></div>
                  <div className="w-1 h-1 bg-[#C8A97E] rounded-full animate-bounce [animation-delay:0.2s]"></div>
                  <div className="w-1 h-1 bg-[#C8A97E] rounded-full animate-bounce [animation-delay:0.4s]"></div>
                </div>
              </div>
            </div>
          </div>

          {/* Input */}
          <div className="p-8 border-t border-[#C8A97E]/10 glass-panel">
            <div className="bg-[#0D0D14] border border-[#C8A97E]/20 rounded-sm overflow-hidden focus-within:border-[#C8A97E] transition-all">
              <div className="flex items-center px-4 py-2 border-b border-[#C8A97E]/10 gap-4">
                <button className="text-zinc-500 hover:text-[#C8A97E] transition-colors"><span className="material-symbols-outlined text-lg">format_bold</span></button>
                <button className="text-zinc-500 hover:text-[#C8A97E] transition-colors"><span className="material-symbols-outlined text-lg">attach_file</span></button>
                <button className="text-zinc-500 hover:text-[#C8A97E] transition-colors"><span className="material-symbols-outlined text-lg">image</span></button>
                <div className="h-4 w-px bg-[#C8A97E]/20 mx-1"></div>
                <button className="text-zinc-500 hover:text-[#C8A97E] transition-colors"><span className="material-symbols-outlined text-lg">description</span></button>
              </div>
              <textarea className="w-full bg-transparent border-none focus:ring-0 text-sm text-on-background p-4 min-h-[100px] resize-none placeholder:text-zinc-700" placeholder="Type your message to Alexander Sterling..."></textarea>
              <div className="flex justify-between items-center p-4 bg-[#111118]">
                <div className="flex items-center gap-2">
                  <span className="w-2 h-2 rounded-full bg-[#C8A97E]"></span>
                  <span className="text-[10px] text-zinc-500 uppercase tracking-widest font-label-sm">Mercedes-Benz Concierge Mode Active</span>
                </div>
                <button className="bg-[#C8A97E] text-black px-8 py-2 font-label-sm uppercase hover:bg-white transition-all">SEND MESSAGE</button>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-6 px-20 grid grid-cols-1 md:grid-cols-3 gap-8 bg-[#050508] border-t border-[#C8A97E]/10 z-20">
        <div className="flex items-center gap-3">
          <span className="text-lg font-semibold text-white">Mercedes-Benz</span>
          <span className="text-zinc-600 text-xs">| Concierge Admin Portal</span>
        </div>
        <div className="flex justify-center items-center">
          <span className="text-zinc-500 text-[10px] uppercase tracking-tighter">© 2024 Mercedes-Benz Pakistan. All rights reserved.</span>
        </div>
        <div className="flex justify-end items-center gap-6">
          <a className="text-zinc-500 hover:text-white text-[10px] transition-colors" href="#">SECURITY</a>
          <a className="text-zinc-500 hover:text-white text-[10px] transition-colors" href="#">LEGAL</a>
          <a className="text-zinc-500 hover:text-white text-[10px] transition-colors" href="#">PRIVACY</a>
        </div>
      </footer>
    </div>
  );
}
