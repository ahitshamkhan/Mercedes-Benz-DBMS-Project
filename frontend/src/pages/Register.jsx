export default function Register() {
  return (
    <>
      {/* Header */}
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase flex items-center gap-3">
          <span className="material-symbols-outlined text-2xl star-glow" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          Mercedes-Benz
        </div>
        <a className="text-sm font-label-sm text-[#C8A97E] hover:text-white transition-colors tracking-widest uppercase" href="#">Sign In</a>
      </header>

      <main className="min-h-screen pt-20 flex flex-col md:flex-row items-stretch">
        {/* Left Side: Brand Narrative */}
        <section className="relative w-full md:w-5/12 min-h-[353px] md:min-h-screen flex flex-col items-center justify-center p-8 md:p-20 overflow-hidden bg-black">
          <div className="absolute inset-0 opacity-40">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCXUx6bIwlUkvhD1R8jSwxyyM2vzXy9QRdjcJK6VzRl1cmjn0nw2rw824rRKWURarQCL6Sp9idJX9HoRVn80ZAS0TKq9O1RkkmgTXyqB-A5zftAR9OhNc133L1PaEflSzCoeXzNIzJyEaDrTKOsvoOa1JzE7kJQO8TTx0X_ka4GtNvFdqDwhWxIF2laWAP4wu4ANOJjS3j1A28AoowOtvptO7Lk4oHXMKiUJI6f2dHNFiZkbzqfLKTYED30K-E3-A47_PRouV2L58" alt="Mercedes-Benz S-Class at twilight" />
          </div>
          <div className="relative z-10 text-center space-y-8 max-w-md">
            <div className="inline-block p-6 rounded-full border border-primary/20 bg-surface/40 backdrop-blur-xl">
              <span className="material-symbols-outlined text-7xl text-primary star-glow" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            </div>
            <div className="space-y-4">
              <h1 className="font-headline-h1 text-white text-4xl md:text-5xl lg:text-6xl leading-tight">Join the Mercedes Family</h1>
              <p className="font-body-lg text-on-surface-variant max-w-xs mx-auto">Enter a world of unparalleled precision, performance, and prestige.</p>
            </div>
            <div className="h-px w-24 bg-primary mx-auto opacity-50"></div>
          </div>
        </section>

        {/* Right Side: Registration Form */}
        <section className="w-full md:w-7/12 flex items-center justify-center p-6 md:p-12 lg:p-20 bg-surface">
          <div className="w-full max-w-xl space-y-12 animate-fade-in">
            <div className="space-y-2">
              <h2 className="font-headline-h2 text-white">Create Account</h2>
              <p className="font-body-md text-on-surface-variant">Please provide your details to begin your journey.</p>
            </div>

            <form className="space-y-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {/* Full Name */}
                <div className="space-y-2 group">
                  <label className="block font-label-sm text-on-surface-variant uppercase">Full Name</label>
                  <input className="w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-primary transition-colors text-white font-body-md placeholder:text-zinc-700" placeholder="Johnathan Doe" type="text" />
                </div>
                {/* Email Address */}
                <div className="space-y-2 group">
                  <label className="block font-label-sm text-on-surface-variant uppercase">Email Address</label>
                  <input className="w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-primary transition-colors text-white font-body-md placeholder:text-zinc-700" placeholder="email@example.com" type="email" />
                </div>
                {/* Phone Number */}
                <div className="space-y-2 group">
                  <label className="block font-label-sm text-on-surface-variant uppercase">Phone Number</label>
                  <input className="w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-primary transition-colors text-white font-body-md placeholder:text-zinc-700" placeholder="03xx-xxxxxxx" type="tel" />
                </div>
                {/* Address */}
                <div className="space-y-2 group md:col-span-1">
                  <label className="block font-label-sm text-on-surface-variant uppercase">Address</label>
                  <input className="w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-primary transition-colors text-white font-body-md placeholder:text-zinc-700" placeholder="Street, City, Province" type="text" />
                </div>
                {/* Password */}
                <div className="space-y-2 group">
                  <label className="block font-label-sm text-on-surface-variant uppercase">Password</label>
                  <input className="w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-primary transition-colors text-white font-body-md placeholder:text-zinc-700" placeholder="••••••••" type="password" />
                </div>
                {/* Confirm Password */}
                <div className="space-y-2 group">
                  <label className="block font-label-sm text-on-surface-variant uppercase">Confirm Password</label>
                  <input className="w-full bg-transparent border-b border-outline-variant py-4 focus:outline-none focus:border-primary transition-colors text-white font-body-md placeholder:text-zinc-700" placeholder="••••••••" type="password" />
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input className="mt-1 rounded border-outline-variant bg-surface text-primary focus:ring-primary ring-offset-background" id="terms" type="checkbox" />
                <label className="font-body-md text-sm text-on-surface-variant leading-relaxed" htmlFor="terms">
                  I agree to the <a className="text-primary hover:underline transition-all" href="#">Terms of Service</a> and <a className="text-primary hover:underline transition-all" href="#">Privacy Policy</a>.
                </label>
              </div>

              <div className="pt-6 space-y-6">
                <button className="w-full py-5 border border-primary text-primary font-label-sm uppercase tracking-[0.2em] transition-all duration-500 hover:bg-primary hover:text-on-primary group flex items-center justify-center gap-3" type="submit">
                  Create Account
                  <span className="material-symbols-outlined text-xl group-hover:translate-x-1 transition-transform">arrow_forward</span>
                </button>
                <div className="text-center">
                  <p className="font-body-md text-on-surface-variant">
                    Already have an account?
                    <a className="text-primary font-medium hover:text-white transition-colors duration-300 ml-1" href="#">Sign In</a>
                  </p>
                </div>
              </div>
            </form>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div className="space-y-6">
          <div className="text-lg font-semibold text-white font-['Playfair_Display']">Mercedes-Benz</div>
          <p className="text-zinc-500 text-sm max-w-xs font-['DM_Sans']">Experiencing excellence in every detail. Join the legacy of automotive perfection.</p>
        </div>
        <div className="grid grid-cols-2 gap-8 md:col-span-2">
          <div className="space-y-4">
            <h4 className="text-white font-label-sm uppercase tracking-widest text-xs">Quick Links</h4>
            <ul className="space-y-3">
              <li><a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200 block" href="#">Cars</a></li>
              <li><a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200 block" href="#">Test Drive</a></li>
              <li><a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200 block" href="#">Service</a></li>
            </ul>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-label-sm uppercase tracking-widest text-xs">Support</h4>
            <ul className="space-y-3">
              <li><a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200 block" href="#">Contact</a></li>
              <li><a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200 block" href="#">Privacy</a></li>
              <li><a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200 block" href="#">Legal</a></li>
            </ul>
          </div>
        </div>
        <div className="md:col-span-3 pt-10 border-t border-zinc-900 flex flex-col md:flex-row justify-between items-center gap-6">
          <p className="text-zinc-500 font-['Playfair_Display'] text-sm">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
          <div className="flex gap-8">
            <span className="material-symbols-outlined text-zinc-500 cursor-pointer hover:text-primary transition-colors">brand_family</span>
            <span className="material-symbols-outlined text-zinc-500 cursor-pointer hover:text-primary transition-colors">brand_family</span>
            <span className="material-symbols-outlined text-zinc-500 cursor-pointer hover:text-primary transition-colors">youtube_ad</span>
          </div>
        </div>
      </footer>
    </>
  );
}
