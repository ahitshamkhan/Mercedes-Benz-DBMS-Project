export default function ChangePassword() {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]">star</span>
          <span className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</span>
        </div>
        <nav className="hidden md:flex items-center gap-10">
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-label-sm uppercase" href="#">Cars</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-label-sm uppercase" href="#">Service</a>
          <a className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 font-label-sm uppercase" href="#">Profile</a>
        </nav>
        <div className="flex items-center">
          <button className="text-[#C8A97E] font-label-sm uppercase border border-[#C8A97E]/30 px-6 py-2 hover:bg-[#C8A97E]/10 transition-all duration-300">
            Sign In
          </button>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow flex items-center justify-center pt-32 pb-20 px-6 min-h-screen">
        <div className="w-full max-w-[480px] bg-surface-container-lowest gold-hairline p-10 relative overflow-hidden group">
          {/* Decorative gradient */}
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#C8A97E]/5 blur-3xl rounded-full -translate-y-1/2 translate-x-1/2"></div>

          <div className="relative z-10">
            <header className="mb-10 text-center">
              <h1 className="font-headline-h3 text-primary mb-2">Security Settings</h1>
              <p className="font-body-md text-outline">Enter your current password to authorize changes to your luxury profile.</p>
            </header>

            <form className="space-y-8">
              {/* Current Password */}
              <div className="space-y-2">
                <label className="font-label-sm text-primary uppercase block">Current Password</label>
                <div className="relative">
                  <input className="w-full bg-transparent border-b border-outline/30 py-3 focus:outline-none focus:border-primary transition-colors duration-300 text-on-background placeholder:text-outline/50" placeholder="••••••••••••" type="password" />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors" type="button">
                    <span className="material-symbols-outlined text-[20px]">visibility</span>
                  </button>
                </div>
              </div>

              {/* New Password */}
              <div className="space-y-2">
                <label className="font-label-sm text-primary uppercase block">New Password</label>
                <div className="relative">
                  <input className="w-full bg-transparent border-b border-outline/30 py-3 focus:outline-none focus:border-primary transition-colors duration-300 text-on-background placeholder:text-outline/50" placeholder="••••••••••••" type="password" />
                  <button className="absolute right-0 top-1/2 -translate-y-1/2 text-outline hover:text-primary transition-colors" type="button">
                    <span className="material-symbols-outlined text-[20px]">visibility_off</span>
                  </button>
                </div>
                {/* Strength Meter */}
                <div className="pt-3 space-y-2">
                  <div className="flex justify-between items-center mb-1">
                    <span className="text-[10px] font-label-sm uppercase text-outline">Password Strength</span>
                    <span className="text-[10px] font-label-sm uppercase text-primary">Fair</span>
                  </div>
                  <div className="flex gap-1 w-full h-[2px] bg-outline/10">
                    <div className="w-1/3 bg-[#E74C3C]"></div>
                    <div className="w-1/3 bg-[#F39C12]"></div>
                    <div className="w-1/3 bg-transparent"></div>
                  </div>
                </div>
              </div>

              {/* Confirm Password */}
              <div className="space-y-2">
                <label className="font-label-sm text-primary uppercase block">Confirm New Password</label>
                <input className="w-full bg-transparent border-b border-outline/30 py-3 focus:outline-none focus:border-primary transition-colors duration-300 text-on-background" placeholder="••••••••••••" type="password" />
              </div>

              {/* Submit */}
              <div className="pt-6">
                <button className="w-full group/btn relative overflow-hidden bg-transparent border border-primary-container text-primary-container font-label-sm uppercase py-4 tracking-[0.2em] transition-all duration-500 hover:bg-primary-container hover:text-on-primary" type="submit">
                  Update Password
                </button>
              </div>
            </form>

            <div className="mt-8 pt-8 border-t border-outline/10 text-center">
              <a className="font-label-sm text-outline hover:text-primary transition-colors flex items-center justify-center gap-2" href="#">
                <span className="material-symbols-outlined text-[16px]">arrow_back</span>
                Back to Profile
              </a>
            </div>
          </div>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div className="space-y-6">
          <span className="text-lg font-semibold text-white font-['Playfair_Display']">Mercedes-Benz</span>
          <p className="font-body-md text-zinc-500 max-w-xs">Crafting digital experiences as meticulously as our vehicles. The pinnacle of automotive luxury, now online.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200" href="#">Cars</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200" href="#">My Orders</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200" href="#">Wishlist</a>
          </div>
          <div className="flex flex-col gap-4">
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200" href="#">Service</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200" href="#">Legal</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200" href="#">Privacy</a>
          </div>
        </div>
        <div className="space-y-6 md:text-right">
          <div className="flex md:justify-end gap-4">
            <span className="material-symbols-outlined text-[#C8A97E]/50 hover:text-[#C8A97E] cursor-pointer transition-colors">social_leaderboard</span>
            <span className="material-symbols-outlined text-[#C8A97E]/50 hover:text-[#C8A97E] cursor-pointer transition-colors">share</span>
          </div>
          <p className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-600">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
