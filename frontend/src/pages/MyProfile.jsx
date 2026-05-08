export default function MyProfile() {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</span>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-['Playfair_Display'] text-sm tracking-tight" href="#">Cars</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-['Playfair_Display'] text-sm tracking-tight" href="#">Service</a>
          <a className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 font-['Playfair_Display'] text-sm tracking-tight" href="#">Profile</a>
        </nav>
        <button className="px-6 py-2 border border-[#C8A97E]/50 text-[#C8A97E] hover:bg-[#C8A97E] hover:text-zinc-950 transition-all duration-300 text-sm tracking-widest uppercase font-medium">
          Sign In
        </button>
      </header>

      <main className="pt-40 pb-20 px-20 max-w-[1440px] mx-auto min-h-screen">
        {/* Page Heading */}
        <div className="mb-20">
          <h1 className="font-headline-h1 text-headline-h1 text-primary-fixed-dim">Your Profile</h1>
          <div className="h-px w-32 bg-primary-container mt-4"></div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-20">
          {/* Left Side: Profile Identity */}
          <section className="lg:col-span-4 flex flex-col items-center text-center p-12 bg-surface-container-lowest hairline-border rounded-lg shadow-2xl">
            <div className="relative mb-8">
              <div className="w-40 h-40 rounded-full border-2 border-primary-container p-1 flex items-center justify-center">
                <div className="w-full h-full rounded-full bg-surface-container-high flex items-center justify-center overflow-hidden">
                  <span className="text-display-lg font-display-lg text-primary">MS</span>
                </div>
              </div>
              <button className="absolute bottom-1 right-1 w-10 h-10 bg-primary rounded-full flex items-center justify-center text-on-primary shadow-lg hover:scale-105 transition-transform">
                <span className="material-symbols-outlined text-sm">edit</span>
              </button>
            </div>
            <h2 className="font-headline-h3 text-headline-h3 text-on-background mb-1">Muneeb Sharif</h2>
            <p className="text-zinc-500 font-body-md mb-6">muneeb.sharif@luxury.pk</p>
            <div className="w-full pt-6 border-t border-[#C8A97E]/10 flex flex-col gap-4 text-left">
              <div className="flex justify-between items-center">
                <span className="text-zinc-500 text-sm font-label-sm uppercase tracking-widest">Membership</span>
                <span className="text-primary-container text-sm">Titanium Elite</span>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-zinc-500 text-sm font-label-sm uppercase tracking-widest">Member Since</span>
                <span className="text-on-background text-sm">October 2022</span>
              </div>
            </div>
          </section>

          {/* Right Side: Editable Form */}
          <section className="lg:col-span-8 bg-surface-container-lowest hairline-border p-12 rounded-lg">
            <div className="flex items-center gap-4 mb-10">
              <span className="material-symbols-outlined text-primary-container">person_edit</span>
              <h3 className="font-headline-h3 text-headline-h3 text-on-background">Personal Details</h3>
            </div>
            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="space-y-2">
                  <label className="block text-zinc-500 font-label-sm uppercase tracking-widest text-xs">Full Name</label>
                  <input className="w-full bg-transparent border-b border-zinc-800 focus:border-primary-container outline-none py-3 text-on-background font-body-md transition-colors" type="text" defaultValue="Muneeb Sharif" />
                </div>
                <div className="space-y-2">
                  <label className="block text-zinc-500 font-label-sm uppercase tracking-widest text-xs">Phone Number</label>
                  <input className="w-full bg-transparent border-b border-zinc-800 focus:border-primary-container outline-none py-3 text-on-background font-body-md transition-colors" type="tel" defaultValue="+92 300 1234567" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="block text-zinc-500 font-label-sm uppercase tracking-widest text-xs">Residential Address</label>
                <textarea className="w-full bg-transparent border-b border-zinc-800 focus:border-primary-container outline-none py-3 text-on-background font-body-md transition-colors resize-none" rows="4" defaultValue="House 42, Street 18, Phase 6, DHA, Karachi, Pakistan" />
              </div>
              <div className="pt-8 flex justify-end">
                <button className="px-12 py-4 border border-primary-container text-primary-container font-label-sm uppercase tracking-widest hover:bg-primary-container hover:text-on-primary transition-all duration-300" type="submit">
                  Save Changes
                </button>
              </div>
            </form>
          </section>
        </div>

        {/* Quick Stats Section */}
        <section className="mt-20">
          <h4 className="font-headline-h3 text-headline-h3 text-on-background mb-8">Account Overview</h4>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Card 1 */}
            <div className="p-8 bg-surface-container-lowest hairline-border rounded-lg group hover:border-primary-container/40 transition-colors">
              <span className="material-symbols-outlined text-zinc-500 mb-4 group-hover:text-primary-container transition-colors">shopping_bag</span>
              <p className="text-zinc-500 font-label-sm uppercase tracking-widest mb-2">Total Orders</p>
              <p className="text-headline-h2 font-headline-h2 text-primary-container">03</p>
              <p className="text-xs text-zinc-600 mt-4">Total spent: PKR 84,500,000</p>
            </div>
            {/* Card 2 */}
            <div className="p-8 bg-surface-container-lowest hairline-border rounded-lg group hover:border-primary-container/40 transition-colors">
              <span className="material-symbols-outlined text-zinc-500 mb-4 group-hover:text-primary-container transition-colors">speed</span>
              <p className="text-zinc-500 font-label-sm uppercase tracking-widest mb-2">Test Drives Booked</p>
              <p className="text-headline-h2 font-headline-h2 text-primary-container">12</p>
              <p className="text-xs text-zinc-600 mt-4">Next drive: EQS Sedan (Pending)</p>
            </div>
            {/* Card 3 */}
            <div className="p-8 bg-surface-container-lowest hairline-border rounded-lg group hover:border-primary-container/40 transition-colors">
              <span className="material-symbols-outlined text-zinc-500 mb-4 group-hover:text-primary-container transition-colors">build_circle</span>
              <p className="text-zinc-500 font-label-sm uppercase tracking-widest mb-2">Services Scheduled</p>
              <p className="text-headline-h2 font-headline-h2 text-primary-container">05</p>
              <p className="text-xs text-zinc-600 mt-4">Last service: 12 July 2023</p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div className="space-y-6">
          <span className="text-lg font-semibold text-white font-['Playfair_Display']">Mercedes-Benz</span>
          <p className="text-zinc-500 font-['Playfair_Display'] text-sm tracking-tight max-w-xs">Experience the pinnacle of automotive engineering and luxury. Our legacy continues through every precision-crafted detail.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <div className="flex flex-col gap-4">
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 font-['Playfair_Display'] text-sm tracking-tight" href="#">Cars</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 font-['Playfair_Display'] text-sm tracking-tight" href="#">My Orders</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 font-['Playfair_Display'] text-sm tracking-tight" href="#">Wishlist</a>
          </div>
          <div className="flex flex-col gap-4">
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 font-['Playfair_Display'] text-sm tracking-tight" href="#">Test Drive</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 font-['Playfair_Display'] text-sm tracking-tight" href="#">Service</a>
            <a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 font-['Playfair_Display'] text-sm tracking-tight" href="#">Contact</a>
          </div>
        </div>
        <div className="space-y-6">
          <p className="text-zinc-500 font-['Playfair_Display'] text-sm tracking-tight">Subscribe to our newsletter for exclusive previews and global events.</p>
          <div className="flex">
            <input className="bg-transparent border-b border-zinc-800 py-2 focus:border-primary-container outline-none text-white text-sm w-full font-['Playfair_Display']" placeholder="Email Address" type="email" />
            <button className="ml-4 text-primary-container">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <p className="text-zinc-700 text-xs mt-8">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
