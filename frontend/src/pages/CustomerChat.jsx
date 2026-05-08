export default function CustomerChat() {
  return (
    <div className="bg-[#050508] min-h-screen font-body-md text-on-surface overflow-hidden relative">
      {/* Background Layer */}
      <div className="fixed inset-0 z-0 blur-sm opacity-30 select-none pointer-events-none p-20">
        <div className="max-w-container-max mx-auto">
          <h1 className="font-display-lg text-display-lg text-primary mb-12">My Account</h1>
          <div className="grid grid-cols-12 gap-gutter">
            <div className="col-span-8 h-96 bg-surface-container-low rounded-lg border border-primary/10"></div>
            <div className="col-span-4 h-96 bg-surface-container-low rounded-lg border border-primary/10"></div>
          </div>
        </div>
      </div>

      {/* Modal Container */}
      <div className="fixed inset-0 z-[60] flex items-center justify-center p-6 md:p-12 glass-overlay">
        <div className="w-full max-w-4xl h-[751px] bg-surface-container-lowest border border-primary/15 flex flex-col relative shadow-2xl">
          {/* Close */}
          <button className="absolute -top-12 right-0 text-primary hover:text-white transition-colors flex items-center gap-2 group">
            <span className="font-label-sm text-label-sm uppercase tracking-widest">Close Experience</span>
            <span className="material-symbols-outlined text-lg">close</span>
          </button>

          {/* Header */}
          <header className="h-24 px-8 flex items-center justify-between border-b border-primary/10 bg-surface-container-low">
            <div className="flex items-center gap-6">
              <div className="relative">
                <div className="w-12 h-12 rounded-full border border-primary/30 flex items-center justify-center bg-surface-container-highest overflow-hidden">
                  <span className="material-symbols-outlined text-primary" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
                </div>
                <span className="absolute bottom-0 right-0 w-3 h-3 bg-emerald-500 rounded-full border-2 border-surface-container-low"></span>
              </div>
              <div>
                <h2 className="font-headline-h3 text-headline-h3 text-primary tracking-tight">Mercedes-Benz Support</h2>
                <div className="flex items-center gap-2">
                  <span className="font-label-sm text-[10px] text-emerald-500 uppercase tracking-widest">Live Online</span>
                  <span className="text-zinc-500 text-[10px] uppercase font-label-sm tracking-widest">• Concierge Service</span>
                </div>
              </div>
            </div>
            <div className="hidden md:flex items-center gap-8">
              <div className="text-right">
                <p className="font-label-sm text-label-sm text-zinc-500">REQUEST ID</p>
                <p className="font-body-md text-sm text-on-surface">MB-8821-X</p>
              </div>
              <span className="material-symbols-outlined text-primary/40">more_vert</span>
            </div>
          </header>

          {/* Messages */}
          <div className="flex-1 overflow-y-auto p-8 space-y-10 custom-scrollbar">
            <div className="flex justify-center">
              <span className="font-label-sm text-[10px] text-zinc-600 border border-zinc-800 px-4 py-1 rounded-full uppercase tracking-[0.2em]">Today</span>
            </div>

            {/* Admin */}
            <div className="flex items-start gap-4 max-w-[80%]">
              <div className="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center bg-surface-container-low mt-1 shrink-0">
                <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
              </div>
              <div className="space-y-2">
                <div className="message-gradient-admin border border-primary/5 p-5 rounded-lg">
                  <p className="font-body-md text-on-surface leading-relaxed">Good evening, Mr. Sterling. Welcome to the Mercedes-Benz Digital Concierge. I see you're inquiring about the maintenance schedule for your EQS 580. How may I assist you with your booking today?</p>
                </div>
                <p className="font-label-sm text-[10px] text-zinc-600 uppercase">Concierge • 18:42</p>
              </div>
            </div>

            {/* User */}
            <div className="flex flex-col items-end gap-2 ml-auto max-w-[80%]">
              <div className="message-gradient-user border border-primary/40 p-5 rounded-lg">
                <p className="font-body-md text-primary leading-relaxed">I would like to schedule the Premier Service A at the Berlin Flagship center. Do you have availability for this Thursday afternoon?</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-label-sm text-[10px] text-zinc-600 uppercase">18:44</p>
                <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
              </div>
            </div>

            {/* Admin with card */}
            <div className="flex items-start gap-4 max-w-[80%]">
              <div className="w-8 h-8 rounded-full border border-primary/10 flex items-center justify-center bg-surface-container-low mt-1 shrink-0">
                <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>support_agent</span>
              </div>
              <div className="space-y-4">
                <div className="message-gradient-admin border border-primary/5 p-5 rounded-lg">
                  <p className="font-body-md text-on-surface leading-relaxed">Certainly. We have an opening at 14:00 and 16:30. During your visit, would you like to request a replacement vehicle from our latest S-Class collection?</p>
                </div>
                <div className="border border-primary/15 bg-surface-container-low overflow-hidden rounded-lg group cursor-pointer w-full max-w-sm">
                  <div className="h-32 bg-zinc-900 relative">
                    <img className="w-full h-full object-cover opacity-80 group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCWxc0OXft2wHDEylJNu-bnN18Ud6uEIDdDycrXoFA8lc4NufFoqVCWnz60EuC5B2C_7Rek0YU0TidC7PyC4eb0790I7js_VhHnaq8CUkWm5fVS_soD_XsGffYTDZUdqR5iWoM9oGdm-l_E2UIe1ABIBZ90YyskBevcHryX0To-yxoDAXQjVL9vyycErXZ2xdq-ewVZLjdyx9-BlyK0LIu7_4CKT7_3KuEdOzWb1EtzGYQ9jrFvraEf-vhi37tx3Qzw323ttVPL7Yo" alt="S-Class" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 to-transparent"></div>
                    <div className="absolute bottom-3 left-4">
                      <p className="font-label-sm text-[10px] text-primary uppercase">Available Loaner</p>
                      <p className="font-headline-h3 text-lg text-white">2024 S-Class Sedan</p>
                    </div>
                  </div>
                </div>
                <p className="font-label-sm text-[10px] text-zinc-600 uppercase">Concierge • 18:45</p>
              </div>
            </div>

            {/* User */}
            <div className="flex flex-col items-end gap-2 ml-auto max-w-[80%]">
              <div className="message-gradient-user border border-primary/40 p-5 rounded-lg">
                <p className="font-body-md text-primary leading-relaxed">The 16:30 slot works perfectly. Yes, please arrange the S-Class. I'll need it for approximately 4 hours.</p>
              </div>
              <div className="flex items-center gap-2">
                <p className="font-label-sm text-[10px] text-zinc-600 uppercase">18:47</p>
                <span className="material-symbols-outlined text-primary text-xs" style={{ fontVariationSettings: "'FILL' 1" }}>done_all</span>
              </div>
            </div>
          </div>

          {/* Input Bar */}
          <footer className="p-8 bg-surface-container-lowest border-t border-primary/10">
            <div className="flex items-center gap-6">
              <button className="text-zinc-500 hover:text-primary transition-colors">
                <span className="material-symbols-outlined">attach_file</span>
              </button>
              <div className="flex-1">
                <input className="w-full bg-surface-container-low border border-primary/10 px-6 py-4 font-body-md text-sm text-on-surface focus:outline-none focus:border-primary/40 transition-all placeholder:text-zinc-600 uppercase tracking-widest" placeholder="TYPE YOUR MESSAGE..." type="text" />
              </div>
              <button className="bg-primary hover:bg-white text-background px-8 h-12 flex items-center gap-3 transition-all duration-300 group">
                <span className="font-label-sm text-label-sm uppercase font-bold">Send Message</span>
                <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">send</span>
              </button>
            </div>
            <div className="mt-4 flex items-center justify-between">
              <div className="flex items-center gap-4">
                <span className="material-symbols-outlined text-zinc-600 text-sm">keyboard_voice</span>
                <span className="material-symbols-outlined text-zinc-600 text-sm">image</span>
                <span className="material-symbols-outlined text-zinc-600 text-sm">location_on</span>
              </div>
              <p className="font-label-sm text-[9px] text-zinc-700 tracking-widest">ENCRYPTED END-TO-END CONCIERGE CHANNEL</p>
            </div>
          </footer>
        </div>
      </div>
    </div>
  );
}
