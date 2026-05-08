export default function ServiceBooking() {
  return (
    <>
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E] text-2xl">star</span>
          <span className="font-['Playfair_Display'] tracking-widest uppercase text-xl font-bold text-[#C8A97E]">Mercedes-Benz</span>
        </div>
        <div className="hidden md:flex gap-10 items-center">
          <a className="font-['Playfair_Display'] tracking-tight text-[#C8A97E] border-b border-[#C8A97E] pb-1" href="#">Service</a>
          <a className="font-['Playfair_Display'] tracking-tight text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Cars</a>
          <a className="font-['Playfair_Display'] tracking-tight text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Experience</a>
        </div>
        <button className="text-[#C8A97E] border border-[#C8A97E]/30 px-6 py-2 hover:bg-[#C8A97E]/10 transition-colors font-label-sm">Sign In</button>
      </nav>

      {/* Main Content */}
      <main className="pt-32 pb-40 px-6 md:px-20 max-w-7xl mx-auto">
        {/* Header */}
        <header className="mb-16">
          <h1 className="font-headline-h1 text-headline-h1 text-[#C8A97E] mb-4">Mercedes Care — Service Appointment</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">Precision engineering deserves specialized care. Secure your appointment with our master technicians in a few simple steps.</p>
        </header>

        <form className="space-y-20">
          {/* Service Type Selection */}
          <section>
            <h2 className="font-headline-h3 text-headline-h3 text-white mb-8 flex items-center gap-3">
              <span className="text-[#C8A97E]">01</span> Select Service Type
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
              {/* Oil Change */}
              <div className="relative">
                <input defaultChecked className="sr-only service-radio" id="oil_change" name="service_type" type="radio" />
                <label className="glass-card flex flex-col items-center justify-center p-8 cursor-pointer transition-all duration-300 hover:border-[#C8A97E]/50 group h-full" htmlFor="oil_change">
                  <span className="material-symbols-outlined text-4xl mb-4 text-zinc-500 group-hover:text-[#C8A97E]">oil_barrel</span>
                  <span className="font-label-sm uppercase mb-2">Oil Change</span>
                  <p className="text-center text-xs text-zinc-500 leading-tight">Synthetic oil and filter replacement.</p>
                </label>
              </div>
              {/* Tire Service */}
              <div className="relative">
                <input className="sr-only service-radio" id="tire_service" name="service_type" type="radio" />
                <label className="glass-card flex flex-col items-center justify-center p-8 cursor-pointer transition-all duration-300 hover:border-[#C8A97E]/50 group h-full" htmlFor="tire_service">
                  <span className="material-symbols-outlined text-4xl mb-4 text-zinc-500 group-hover:text-[#C8A97E]">tire_repair</span>
                  <span className="font-label-sm uppercase mb-2">Tire Service</span>
                  <p className="text-center text-xs text-zinc-500 leading-tight">Alignment, rotation, and balance.</p>
                </label>
              </div>
              {/* Full Inspection */}
              <div className="relative">
                <input className="sr-only service-radio" id="inspection" name="service_type" type="radio" />
                <label className="glass-card flex flex-col items-center justify-center p-8 cursor-pointer transition-all duration-300 hover:border-[#C8A97E]/50 group h-full" htmlFor="inspection">
                  <span className="material-symbols-outlined text-4xl mb-4 text-zinc-500 group-hover:text-[#C8A97E]">fact_check</span>
                  <span className="font-label-sm uppercase mb-2">Full Inspection</span>
                  <p className="text-center text-xs text-zinc-500 leading-tight">Comprehensive multi-point health check.</p>
                </label>
              </div>
              {/* Repair */}
              <div className="relative">
                <input className="sr-only service-radio" id="repair" name="service_type" type="radio" />
                <label className="glass-card flex flex-col items-center justify-center p-8 cursor-pointer transition-all duration-300 hover:border-[#C8A97E]/50 group h-full" htmlFor="repair">
                  <span className="material-symbols-outlined text-4xl mb-4 text-zinc-500 group-hover:text-[#C8A97E]">build</span>
                  <span className="font-label-sm uppercase mb-2">Repair</span>
                  <p className="text-center text-xs text-zinc-500 leading-tight">Mechanical or technical diagnostic.</p>
                </label>
              </div>
              {/* Full Service */}
              <div className="relative">
                <input className="sr-only service-radio" id="full_service" name="service_type" type="radio" />
                <label className="glass-card flex flex-col items-center justify-center p-8 cursor-pointer transition-all duration-300 hover:border-[#C8A97E]/50 group h-full" htmlFor="full_service">
                  <span className="material-symbols-outlined text-4xl mb-4 text-zinc-500 group-hover:text-[#C8A97E]">verified_user</span>
                  <span className="font-label-sm uppercase mb-2">Full Service</span>
                  <p className="text-center text-xs text-zinc-500 leading-tight">The ultimate maintenance package.</p>
                </label>
              </div>
            </div>
          </section>

          {/* Dealership and Logistics */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-16">
            <div>
              <h2 className="font-headline-h3 text-headline-h3 text-white mb-8 flex items-center gap-3">
                <span className="text-[#C8A97E]">02</span> Dealership
              </h2>
              <div className="space-y-4">
                <select className="w-full bg-surface-container border border-outline-variant text-on-surface p-4 focus:border-[#C8A97E] outline-none transition-colors rounded-none appearance-none font-body-md">
                  <option value="">Select a Dealership</option>
                  <option value="karachi">Mercedes-Benz Karachi Central</option>
                  <option value="lahore">Mercedes-Benz Lahore DHA</option>
                  <option value="islamabad">Mercedes-Benz Islamabad</option>
                </select>
                <div className="h-64 glass-card relative overflow-hidden">
                  <img alt="Showroom Location" className="w-full h-full object-cover opacity-60 grayscale hover:grayscale-0 transition-all duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBp1JLX9feKJ3r5MTCe5ajCCGE9vBfwN7vXoIQ798Jy1Nxp1aOSF1IKCSbTxKC6yTTIBhJmkAtPbivBoczHixksThozQRJhsN_cVTzkZgi8jXRq_9KZ65YNRPPeSQrO5FE72Lr0ubtWaBiTd5gerR3uOiGRtYymEUEG0ExkvviBqVOxmmG3aT0CyPnETdp6kP4BGvNrEfhn9OL_HavtGYuhaltcldbLtNtzkXLdHQ-7BDbARZvvj9j5G0VBYiySs9FoGThHlOGtfFI" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent"></div>
                  <div className="absolute bottom-4 left-4 flex items-center gap-2">
                    <span className="material-symbols-outlined text-[#C8A97E] text-sm">location_on</span>
                    <span className="text-xs uppercase tracking-widest text-[#C8A97E]">View on Map</span>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <h2 className="font-headline-h3 text-headline-h3 text-white mb-8 flex items-center gap-3">
                <span className="text-[#C8A97E]">03</span> Schedule
              </h2>
              <div className="space-y-6">
                <div className="space-y-2">
                  <label className="font-label-sm uppercase text-zinc-500">Preferred Appointment Date</label>
                  <input className="w-full bg-surface-container border border-outline-variant text-on-surface p-4 focus:border-[#C8A97E] outline-none transition-colors rounded-none font-body-md" type="date" />
                </div>
                <div className="space-y-2">
                  <label className="font-label-sm uppercase text-zinc-500">Service Notes &amp; Requests</label>
                  <textarea className="w-full bg-surface-container border border-outline-variant text-on-surface p-4 focus:border-[#C8A97E] outline-none transition-colors rounded-none font-body-md resize-none" placeholder="Specify any particular issues or requests for our technicians..." rows="5"></textarea>
                </div>
              </div>
            </div>
          </section>

          {/* Final Submission */}
          <section className="flex flex-col md:flex-row items-center justify-between gap-8 border-t border-[#C8A97E]/15 pt-16">
            <div className="flex items-center gap-4">
              <span className="material-symbols-outlined text-[#C8A97E]">security</span>
              <p className="text-xs text-zinc-500 max-w-sm">Your booking is protected by our global privacy standards. A service advisor will contact you within 2 business hours to confirm.</p>
            </div>
            <button className="group relative inline-flex items-center justify-center px-12 py-5 font-label-sm uppercase tracking-widest overflow-hidden border border-[#C8A97E] text-[#C8A97E] transition-all duration-300 hover:text-[#050508]" type="submit">
              <span className="relative z-10">Confirm Appointment</span>
              <div className="absolute inset-0 bg-[#C8A97E] translate-y-full group-hover:translate-y-0 transition-transform duration-300 ease-out"></div>
            </button>
          </section>
        </form>
      </main>

      {/* Footer */}
      <footer className="bg-[#050508] w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 border-t border-[#C8A97E]/10">
        <div className="space-y-6">
          <span className="text-lg font-semibold text-white font-['Playfair_Display']">Mercedes-Benz</span>
          <p className="text-zinc-500 font-['Playfair_Display'] text-sm tracking-tight leading-relaxed">
            Experience the pinnacle of automotive excellence. Our heritage is built on a century of innovation and luxury craftsmanship.
          </p>
        </div>
        <div>
          <h4 className="text-[#C8A97E] font-label-sm uppercase mb-8">Navigation</h4>
          <div className="grid grid-cols-2 gap-4">
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">Cars</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">My Orders</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">Wishlist</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">Test Drive</a>
            <a className="text-[#C8A97E] font-['Playfair_Display'] text-sm" href="#">Service</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">Admin</a>
          </div>
        </div>
        <div>
          <h4 className="text-[#C8A97E] font-label-sm uppercase mb-8">Newsletter</h4>
          <div className="flex flex-col gap-4">
            <input className="bg-transparent border-b border-[#C8A97E]/30 py-2 focus:border-[#C8A97E] outline-none text-sm transition-colors" placeholder="Your Email Address" type="email" />
            <p className="text-[10px] text-zinc-600 uppercase tracking-widest">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  );
}
