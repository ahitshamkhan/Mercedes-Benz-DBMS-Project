export default function BookTestDrive() {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E] text-2xl">star</span>
          <span className="font-['Playfair_Display'] tracking-widest uppercase text-xl font-bold text-[#C8A97E]">Mercedes-Benz</span>
        </div>
        <div className="flex items-center gap-8">
          <button className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300">Close</button>
        </div>
      </header>

      <main className="min-h-screen pt-32 pb-40 px-20 flex flex-col items-center">
        {/* Hero Section/Header */}
        <div className="max-w-4xl w-full text-center mb-16">
          <h1 className="font-headline-h1 text-headline-h1 mb-4 text-white">Experience Excellence</h1>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mx-auto">Book your exclusive test drive experience with the world's most desirable automobiles.</p>
        </div>

        {/* 3-Step Wizard Container */}
        <div className="max-w-5xl w-full grid grid-cols-1 lg:grid-cols-12 gap-12">
          {/* Side Info / Image */}
          <div className="lg:col-span-4 flex flex-col gap-6">
            <div className="relative h-[400px] w-full rounded-lg overflow-hidden glass-panel">
              <img className="absolute inset-0 w-full h-full object-cover opacity-60" src="https://lh3.googleusercontent.com/aida-public/AB6AXuByPSt9o4O46szvSnR2bHtvpB9LgquKHNjuqOlS62DJGvl_7T_XxlVmH9NxZVz2BoGKtpQ3RisleFy6I8FODQ8udZwSxD5kaGBj-eJFOXhAsb5LkM1u6RmmJCHT7zqlVW9FgEpGDStj2JEaOrWZIU96u88KzdUfIAhLRtS6XI-Lm7zm7rrAxzpbh0ARfw54aVWZFonmn2bMZVQBVqrWWMtxieEAM7GI2FZVH6nojFsCozAmt8Lnr7VfNOYRlrs1KEczZribSEnTP9k" alt="Mercedes-Benz interior" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] to-transparent"></div>
              <div className="absolute bottom-6 left-6 pr-6">
                <span className="font-label-sm text-label-sm text-[#C8A97E] block mb-2">THE EXPERIENCE</span>
                <h3 className="font-headline-h3 text-headline-h3 text-white">Precision Redefined.</h3>
              </div>
            </div>
            <div className="glass-panel p-8">
              <h4 className="font-headline-h3 text-[20px] text-white mb-4">Requirements</h4>
              <ul className="space-y-4 text-zinc-400 text-sm">
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#C8A97E] text-lg">id_card</span>
                  Valid Driving License
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#C8A97E] text-lg">person</span>
                  Proof of Identity
                </li>
                <li className="flex items-center gap-3">
                  <span className="material-symbols-outlined text-[#C8A97E] text-lg">verified</span>
                  Appointment Confirmation
                </li>
              </ul>
            </div>
          </div>

          {/* Form Wizard */}
          <div className="lg:col-span-8">
            <div className="glass-panel p-10 h-full flex flex-col">
              {/* Progress Bar */}
              <div className="mb-12">
                <div className="flex justify-between mb-4">
                  <span className="font-label-sm text-label-sm text-[#C8A97E]">STEP 01 OF 03</span>
                  <span className="font-label-sm text-label-sm text-zinc-500 uppercase tracking-widest">Select Vehicle</span>
                </div>
                <div className="h-[1px] w-full bg-zinc-800 relative">
                  <div className="absolute top-0 left-0 h-[1px] bg-[#C8A97E] shadow-[0_0_8px_#C8A97E] w-1/3 transition-all duration-700 ease-in-out"></div>
                </div>
              </div>

              {/* Step Content (Step 1: Select Car) */}
              <div className="flex-grow space-y-10">
                <div className="space-y-6">
                  <label className="block font-headline-h3 text-headline-h3 text-white">Choose your model</label>
                  <div className="relative group">
                    <select className="w-full bg-transparent border-0 border-b border-zinc-700 py-4 px-0 text-body-lg font-body-lg text-on-surface focus:ring-0 focus:border-[#C8A97E] transition-colors appearance-none cursor-pointer">
                      <option className="bg-[#111118]">Select from our fleet</option>
                      <option className="bg-[#111118]">S-Class Sedan</option>
                      <option className="bg-[#111118]">EQS Luxury EV</option>
                      <option className="bg-[#111118]">G-Class SUV</option>
                      <option className="bg-[#111118]">E-Class Masterpiece</option>
                      <option className="bg-[#111118]">AMG GT Coupé</option>
                    </select>
                    <span className="absolute right-0 top-1/2 -translate-y-1/2 material-symbols-outlined text-zinc-500 group-focus-within:text-[#C8A97E]">expand_more</span>
                  </div>
                </div>

                {/* Step 2 Preview: Dealership Selection */}
                <div className="space-y-6 opacity-40 grayscale pointer-events-none">
                  <label className="block font-headline-h3 text-headline-h3 text-white">Select Dealership</label>
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <div className="border border-zinc-700 p-6 flex flex-col gap-2">
                      <span className="font-label-sm text-[#C8A97E]">KARACHI</span>
                      <p className="text-white text-body-md">Central Branch</p>
                    </div>
                    <div className="border border-zinc-700 p-6 flex flex-col gap-2">
                      <span className="font-label-sm text-[#C8A97E]">LAHORE</span>
                      <p className="text-white text-body-md">DHA Phase VI</p>
                    </div>
                    <div className="border border-zinc-700 p-6 flex flex-col gap-2">
                      <span className="font-label-sm text-[#C8A97E]">ISLAMABAD</span>
                      <p className="text-white text-body-md">Blue Area</p>
                    </div>
                  </div>
                </div>
              </div>

              {/* Navigation */}
              <div className="mt-16 pt-8 border-t border-zinc-800/50 flex justify-between items-center">
                <button className="flex items-center gap-2 font-label-sm text-zinc-500 hover:text-white transition-colors duration-200">
                  <span className="material-symbols-outlined">arrow_back</span>
                  BACK
                </button>
                <button className="px-10 py-4 bg-transparent border border-[#C8A97E] text-[#C8A97E] font-label-sm tracking-[0.2em] uppercase hover:bg-[#C8A97E] hover:text-black transition-all duration-300">
                  NEXT STEP
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div className="space-y-6">
          <span className="text-lg font-semibold text-white font-['Playfair_Display']">Mercedes-Benz</span>
          <p className="text-zinc-500 font-['Playfair_Display'] text-sm leading-relaxed">Defining the pinnacle of automotive excellence since 1886. Our commitment to luxury, performance, and innovation remains unparalleled in every detail.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <a className="text-zinc-500 hover:text-white transition-transform duration-200 hover:translate-x-1 font-['Playfair_Display'] text-sm tracking-tight" href="#">Cars</a>
            <a className="text-zinc-500 hover:text-white transition-transform duration-200 hover:translate-x-1 font-['Playfair_Display'] text-sm tracking-tight" href="#">Service</a>
            <a className="text-[#C8A97E] font-['Playfair_Display'] text-sm tracking-tight" href="#">Test Drive</a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="text-zinc-500 hover:text-white transition-transform duration-200 hover:translate-x-1 font-['Playfair_Display'] text-sm tracking-tight" href="#">Legal</a>
            <a className="text-zinc-500 hover:text-white transition-transform duration-200 hover:translate-x-1 font-['Playfair_Display'] text-sm tracking-tight" href="#">Privacy</a>
            <a className="text-zinc-500 hover:text-white transition-transform duration-200 hover:translate-x-1 font-['Playfair_Display'] text-sm tracking-tight" href="#">Contact</a>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-zinc-500 hover:text-[#C8A97E] cursor-pointer">public</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-[#C8A97E] cursor-pointer">chat</span>
          </div>
          <p className="text-zinc-500 font-['Playfair_Display'] text-xs uppercase tracking-widest mt-8">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
