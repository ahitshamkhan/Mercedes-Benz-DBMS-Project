export default function Login() {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full z-50 bg-zinc-950/90 backdrop-blur-md border-b border-[#C8A97E]/15 h-20 px-8 md:px-20 flex justify-between items-center">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]">star</span>
          <span className="font-['Playfair_Display'] tracking-widest uppercase text-xl font-bold text-[#C8A97E]">Mercedes-Benz</span>
        </div>
        <div className="hidden md:flex gap-10">
          <span className="font-label-sm text-sm text-zinc-400 hover:text-[#C8A97E] transition-colors cursor-pointer">CARS</span>
          <span className="font-label-sm text-sm text-zinc-400 hover:text-[#C8A97E] transition-colors cursor-pointer">MUSEUM</span>
          <span className="font-label-sm text-sm text-zinc-400 hover:text-[#C8A97E] transition-colors cursor-pointer">INNOVATION</span>
        </div>
      </header>

      <main className="min-h-screen w-full pt-20 flex items-center justify-center relative overflow-hidden bg-[#050508]">
        {/* Background Decor */}
        <div className="absolute inset-0 z-0 pointer-events-none opacity-20">
          <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[800px] bg-[#C8A97E]/5 rounded-full blur-[120px]"></div>
        </div>

        <section className="relative z-10 w-full max-w-[1200px] px-margin-mobile md:px-margin-desktop grid grid-cols-1 lg:grid-cols-2 items-center gap-16 py-10">
          {/* Branding/Image Side */}
          <div className="hidden lg:flex flex-col gap-8">
            <h1 className="font-headline-h1 text-on-surface leading-tight">
              Experience <br />
              <span className="text-primary-container italic font-normal">Modern Luxury.</span>
            </h1>
            <p className="font-body-lg text-on-surface-variant max-w-md">
              Access your personalized Mercedes-Benz portal to manage your vehicle fleet, explore bespoke financing, and discover exclusive events.
            </p>
            <div className="relative w-full aspect-video rounded-lg overflow-hidden group">
              <img alt="Luxury vehicle" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAjLOEnry8euE2Ss3F0mJzvWUG3q18izc1qh9LhZO5porZO6imVS6-HkHokWxu08eR9nEI1SOXGh6I0ZqbMgc5TLrfTCdoDTmvjsQG0CoNeNSSS33d6fTDJhJ_s2Vkr-4-G7mFV9bl8SnQzvXoNP1kNDbYaI8lUy_syPcPfef78iMNOK2qmIqxEBt7GJ0XTNNrZQP9k6w974Vl_zUwiuNX1PQzR61zCwiRsNZuuRIv_ZzFPpYKBZvTy9bJd4aoxbsB1gnzN_6pGPn4" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#050508] via-transparent to-transparent opacity-60"></div>
            </div>
          </div>

          {/* Form Side */}
          <div className="flex flex-col gap-8 w-full max-w-md mx-auto">
            {/* Error Banner */}
            <div className="bg-error-container/20 border border-error/20 p-4 flex items-start gap-4 animate-fade-in">
              <span className="material-symbols-outlined text-error">error_outline</span>
              <div className="flex flex-col">
                <span className="text-error font-label-sm uppercase tracking-wider">Authentication Failed</span>
                <p className="text-on-surface-variant text-sm mt-1">The email or password you entered is incorrect. Please try again.</p>
              </div>
            </div>

            <div className="glass-card p-10 md:p-12 relative">
              <div className="flex flex-col gap-2 mb-10">
                <span className="font-label-sm text-primary-container uppercase tracking-[0.2em]">Welcome Back</span>
                <h2 className="font-headline-h2 text-3xl">Sign In</h2>
              </div>

              <form className="flex flex-col gap-6">
                {/* Email Field */}
                <div className="flex flex-col gap-2">
                  <label className="font-label-sm text-on-surface-variant uppercase text-[10px] tracking-widest">Email Address</label>
                  <div className="relative">
                    <input className="w-full bg-[#0D0D14] border-b border-outline-variant focus:border-primary-container focus:ring-0 text-on-surface font-body-md py-4 px-0 transition-colors placeholder:text-zinc-700" placeholder="name@luxury.com" type="email" />
                    <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-zinc-600 text-sm">mail</span>
                  </div>
                </div>

                {/* Password Field */}
                <div className="flex flex-col gap-2">
                  <div className="flex justify-between items-end">
                    <label className="font-label-sm text-on-surface-variant uppercase text-[10px] tracking-widest">Password</label>
                    <a className="font-label-sm text-primary-container hover:text-white transition-colors text-[10px] uppercase underline underline-offset-4 decoration-primary-container/30" href="#">Forgot Password?</a>
                  </div>
                  <div className="relative">
                    <input className="w-full bg-[#0D0D14] border-b border-outline-variant focus:border-primary-container focus:ring-0 text-on-surface font-body-md py-4 px-0 transition-colors placeholder:text-zinc-700" placeholder="••••••••" type="password" />
                    <span className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-zinc-400 cursor-pointer hover:text-primary-container transition-colors">visibility</span>
                  </div>
                </div>

                {/* Sign In Button */}
                <button className="mt-8 group relative overflow-hidden border border-primary-container bg-transparent py-4 px-8 flex justify-center items-center gap-3 transition-all duration-300 hover:bg-primary-container">
                  <span className="relative z-10 font-label-sm text-primary-container group-hover:text-on-primary transition-colors uppercase tracking-[0.15em] font-medium">Sign In</span>
                  <span className="material-symbols-outlined relative z-10 text-primary-container group-hover:text-on-primary text-lg">arrow_forward</span>
                </button>
              </form>

              <div className="mt-10 flex items-center gap-6">
                <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
                <span className="font-label-sm text-zinc-600 uppercase text-[10px]">Or continue with</span>
                <div className="h-[1px] flex-1 bg-outline-variant/30"></div>
              </div>

              <div className="mt-8 flex gap-4">
                <button className="flex-1 border border-outline-variant py-3 px-4 flex justify-center items-center hover:bg-white/5 transition-colors">
                  <span className="material-symbols-outlined text-lg">google</span>
                </button>
                <button className="flex-1 border border-outline-variant py-3 px-4 flex justify-center items-center hover:bg-white/5 transition-colors">
                  <span className="material-symbols-outlined text-lg">ios</span>
                </button>
              </div>
            </div>

            <div className="text-center">
              <p className="font-body-md text-sm text-zinc-500">
                Don't have an account?
                <a className="text-primary-container hover:underline underline-offset-4 font-medium ml-1" href="#">Request Access</a>
              </p>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-8 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div className="flex flex-col gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-lg font-semibold text-white font-headline-h3">Mercedes-Benz</span>
            <p className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 max-w-xs leading-relaxed">
              Setting the standard in luxury, innovation, and performance since 1886. Engineered for the extraordinary.
            </p>
          </div>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-zinc-500 hover:text-primary transition-colors cursor-pointer">social_leaderboard</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-primary transition-colors cursor-pointer">photo_camera</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-primary transition-colors cursor-pointer">brand_awareness</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <span className="font-label-sm text-white uppercase text-[10px] tracking-widest mb-2">Explore</span>
            <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-all duration-200" href="#">Cars</a>
            <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-all duration-200" href="#">Test Drive</a>
            <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-all duration-200" href="#">Service</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="font-label-sm text-white uppercase text-[10px] tracking-widest mb-2">Account</span>
            <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-all duration-200" href="#">My Orders</a>
            <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-all duration-200" href="#">Wishlist</a>
            <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-all duration-200" href="#">Admin</a>
          </div>
        </div>
        <div className="flex flex-col gap-8 items-start md:items-end">
          <div className="flex flex-col gap-4 text-left md:text-right w-full">
            <span className="font-label-sm text-white uppercase text-[10px] tracking-widest mb-2">Legal</span>
            <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-all duration-200" href="#">Privacy Policy</a>
            <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-all duration-200" href="#">Contact Us</a>
          </div>
          <p className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-600 mt-auto">
            © 2024 Mercedes-Benz Pakistan. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
