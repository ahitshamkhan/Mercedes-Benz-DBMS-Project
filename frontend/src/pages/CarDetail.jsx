export default function CarDetail() {
  return (
    <>
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</span>
        </div>
        <div className="hidden md:flex items-center gap-12 font-['DM_Sans'] text-sm tracking-widest">
          <a className="text-[#C8A97E] border-b border-[#C8A97E] pb-1" href="#">Cars</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Technology</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Heritage</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Showroom</a>
        </div>
        <button className="text-[#C8A97E] font-['DM_Sans'] uppercase tracking-widest text-sm hover:bg-[#C8A97E]/10 px-6 py-2 transition-all border border-[#C8A97E]/30">Sign In</button>
      </nav>

      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative h-[795px] w-full flex items-center overflow-hidden">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvX4cWt7AWr15gj5WT0PR7Ky6fu2R703N92QRIDXzbF6FnvZP-X3hNFnnc_GHluIub_apgPwh9jWRYzSAgcN8TVKzg5uFzPt5bY0GDazplxf4kROpvGH7TgC2yPmcgOejMY3o_NtOBIboJUbQFT9FtS0Dek55y-QYveKhnXw9RzBAoVwOITgvAsEhN9bPMDxtaCSMrvJaaTmrMakcBeho93dJRiKcIzKYKFJe6bYryXpiW05010zJ5yWtgtTujmWvE88JrbzdXdSQ" alt="Mercedes-Benz S-Class hero" />
            <div className="absolute inset-0 bg-gradient-to-r from-surface-dim via-surface-dim/40 to-transparent"></div>
          </div>
          <div className="relative z-10 px-20 max-w-4xl stagger-in" style={{ animationDelay: '0.2s' }}>
            <span className="font-label-sm text-primary uppercase tracking-[0.3em] mb-6 block">The New S-Class</span>
            <h1 className="font-display-lg text-white mb-8 leading-tight">Masterpiece of Intelligence.</h1>
            <div className="flex gap-6">
              <button className="border border-primary-container text-primary-container px-10 py-4 uppercase font-label-sm tracking-[0.2em] hover:bg-primary-container hover:text-on-primary transition-all duration-300 glow-hover">
                Order This Car
              </button>
              <button className="bg-white/5 backdrop-blur-sm border border-white/10 text-white px-10 py-4 uppercase font-label-sm tracking-[0.2em] hover:bg-white/10 transition-all duration-300">
                Book a Test Drive
              </button>
            </div>
          </div>
        </section>

        {/* Variant & Configurator Section */}
        <section className="px-20 py-section-gap grid grid-cols-12 gap-16 items-start">
          <div className="col-span-12 lg:col-span-7 stagger-in" style={{ animationDelay: '0.4s' }}>
            <div className="hairline-gold bg-surface-container-lowest p-unit rounded-lg overflow-hidden">
              <img className="w-full aspect-video object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCN5LvjX5lXm5DbxVjEyadq7hCpQD5eg-rNF6Z8B0IGR5pmRkPb0m3xgmLhG_ZEchtPCplPgoQmBjSNbseDqri0zwjkKmGKeF7uu82WVwmS3j1iWG8OJQ9yxkVLYQcn6bZA8ZezQN6XLXoDRBVCnOWiZ2RLAV9GxHGdf0UPA0_XtStPLjqYHdJsFnOQBApL6RFvvbR9ilQHGa6QzL-aSlGvLWnXVcUYY9VLlQW6M5YDqVSj-Io4gWS-gLuTfHrXX-lXlSb3VIaZ-TU" alt="S-Class interior dashboard" />
            </div>
            <div className="grid grid-cols-4 gap-4 mt-8">
              <div className="aspect-square hairline-gold bg-surface-container-low opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuB2p4EVh45p8mOaDrrFw7_5dtCqrK5byMrjxZ4DjTigjruN_CBX2jtq5vbaz3ynbX6TDUSVop-TInEgadco37bq9kJxsYxrY6erMUHUGRtfWq_jxyNe35coR4HSmtIAnnOj0frSc1azGRTISr8DxN1wn2Uk4Qn6NJdWacXYOAlmYnjZClSskoPYz2lm79ZC40Wn9Qp_trL2RT_j7YL7oT-O68FsrLZ9YAvplBm1iW6Eb1eTO9a3AsJ07d4sTE87pM434DP2L492DJ8" alt="Wheel detail" />
              </div>
              <div className="aspect-square hairline-gold bg-surface-container-low opacity-50 hover:opacity-100 transition-opacity cursor-pointer border-primary-container/50 border-2">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAk4FuN0YLpj-QnAkUBJaQ-6Khu8Xwl0w7gt5Zqk1DqNV_e_ec9rOmuz-vq5RSyoJnfemWEIQu3xgfyxn2CCqH-V5W19xodAyjcBHDy6xYH8vOj9zmPOh41re1UNYN8l9vc-djbcmh8RFBj1WCWjNpWrHtqPUZXsAGaYhMDo_JTtSf6t4tQGusYyQvHZXGLk3twyQJzAy2vy13S19pY0KW8Tpuger0fBC_6Ui3foFnmux7QtBV_sxPO3T4llk726n0QfJYGtUyT84c" alt="Rear light detail" />
              </div>
              <div className="aspect-square hairline-gold bg-surface-container-low opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBL8CW4k6P_maniBD3IVrlWxoo3Q8Jk2Epj0Z15pts8cbPbRpj_cVfa7H0pXx1t2k8YRuDFmlijqYZp5PI7GXnKRUBTf1ZPcoIaTCvkzT5Xepp8McqyQyaRoYC-8iKxAMld8Kl1Zx8olRdp2Wsn70Zi4iG3kB9eBVXkszf6vywlmnXV0VFk2ymfBpFgGOCYyXxGylTwI-0s4XA3bBWn26eiG4eX1pq8tPHnXt8GGrO6AveiFYV9tiqD-VS39usy9fCXDIt50HdixM0" alt="Side mirror detail" />
              </div>
              <div className="aspect-square hairline-gold bg-surface-container-low opacity-50 hover:opacity-100 transition-opacity cursor-pointer">
                <img className="w-full h-full object-cover" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCKsjLz6QD5FkSZKm7jwE-1DFRsZUcHPssVXY9bSF7siMJr_A8u0_zjBbN-eddOOp6cLcwfXJpnRzEUeTf1ohloUhpzex-YFT6mheC32D7Yl5M4ejZEybiLPvvHiMYG2BsGqJ4Y3k8owdawBGy_TLbChtttLNzrSe4ebBSRqP9-JF3fpqdab39yM0dABFreh9Q-7I-XZM9mrkZDCm4atnAzcY-7jdUAXC6dCTQUS_LGjGnvJPCw_-U09sELOJ9lnDBfOCd4yuq-Dc8" alt="Front grill detail" />
              </div>
            </div>
          </div>

          <div className="col-span-12 lg:col-span-5 stagger-in" style={{ animationDelay: '0.5s' }}>
            <h2 className="font-headline-h2 text-white mb-2">Configure Your Vision</h2>
            <p className="text-on-surface-variant font-body-lg mb-10">Select your preferred trim and power-train combination.</p>
            <div className="space-y-6 mb-12">
              <label className="font-label-sm text-primary uppercase tracking-widest block">Variant Selection</label>
              <div className="flex flex-col gap-4">
                <button className="flex justify-between items-center p-6 hairline-gold bg-surface-container-high border-primary-container/40">
                  <div className="text-left">
                    <span className="font-headline-h3 text-white block">S 450 4MATIC</span>
                    <span className="text-on-surface-variant text-sm">Obsidian Black Metallic</span>
                  </div>
                  <span className="font-headline-h3 text-primary-container">$114,500</span>
                </button>
                <button className="flex justify-between items-center p-6 hairline-gold bg-surface-container hover:bg-surface-container-high transition-colors">
                  <div className="text-left">
                    <span className="font-headline-h3 text-zinc-400 block">S 580 4MATIC</span>
                    <span className="text-zinc-500 text-sm">Selenite Grey Magno</span>
                  </div>
                  <span className="font-headline-h3 text-zinc-500">$128,100</span>
                </button>
                <button className="flex justify-between items-center p-6 hairline-gold bg-surface-container hover:bg-surface-container-high transition-colors">
                  <div className="text-left">
                    <span className="font-headline-h3 text-zinc-400 block">S 580e PHEV</span>
                    <span className="text-zinc-500 text-sm">Diamond White Bright</span>
                  </div>
                  <span className="font-headline-h3 text-zinc-500">$122,550</span>
                </button>
              </div>
            </div>
            <div className="flex gap-4">
              <button className="flex-1 flex items-center justify-center gap-3 border border-white/20 hover:border-primary-container py-4 text-white uppercase font-label-sm tracking-widest transition-all glow-hover">
                <span className="material-symbols-outlined text-sm">favorite</span>
                Add to Wishlist
              </button>
              <button className="w-16 h-16 flex items-center justify-center border border-white/20 text-white hover:bg-white/5">
                <span className="material-symbols-outlined">share</span>
              </button>
            </div>
          </div>
        </section>

        {/* Specs Grid */}
        <section className="px-20 py-24 bg-surface-container-lowest stagger-in" style={{ animationDelay: '0.6s' }}>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            <div className="p-10 hairline-gold bg-surface-dim flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">bolt</span>
              <span className="text-on-surface-variant font-label-sm uppercase tracking-widest mb-2">Horsepower</span>
              <span className="font-display-lg text-white text-5xl">429</span>
              <span className="text-primary-container mt-2 font-label-sm">BHP</span>
            </div>
            <div className="p-10 hairline-gold bg-surface-dim flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">speed</span>
              <span className="text-on-surface-variant font-label-sm uppercase tracking-widest mb-2">0-100 KM/H</span>
              <span className="font-display-lg text-white text-5xl">4.9</span>
              <span className="text-primary-container mt-2 font-label-sm">SECONDS</span>
            </div>
            <div className="p-10 hairline-gold bg-surface-dim flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">settings_suggest</span>
              <span className="text-on-surface-variant font-label-sm uppercase tracking-widest mb-2">Engine</span>
              <span className="font-headline-h3 text-white">3.0L Inline-6</span>
              <span className="text-primary-container mt-2 font-label-sm">TURBOCHARGED</span>
            </div>
            <div className="p-10 hairline-gold bg-surface-dim flex flex-col items-center text-center">
              <span className="material-symbols-outlined text-primary-container text-4xl mb-6">reorder</span>
              <span className="text-on-surface-variant font-label-sm uppercase tracking-widest mb-2">Transmission</span>
              <span className="font-headline-h3 text-white">9G-TRONIC</span>
              <span className="text-primary-container mt-2 font-label-sm">AUTOMATIC</span>
            </div>
          </div>
        </section>

        {/* Features & Details */}
        <section className="px-20 py-section-gap grid grid-cols-12 gap-16 items-center">
          <div className="col-span-12 lg:col-span-6 stagger-in" style={{ animationDelay: '0.7s' }}>
            <h2 className="font-headline-h1 text-white mb-10">Pinnacle of Engineering</h2>
            <div className="space-y-8">
              <div className="flex gap-6 group">
                <span className="w-2 h-2 rounded-full bg-primary-container mt-3"></span>
                <div>
                  <h3 className="font-headline-h3 text-white mb-2">Burmester® 4D Surround Sound</h3>
                  <p className="text-on-surface-variant font-body-md">An immersive acoustic experience with 31 speakers and exciters integrated into the seats for physical vibration.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <span className="w-2 h-2 rounded-full bg-primary-container mt-3"></span>
                <div>
                  <h3 className="font-headline-h3 text-white mb-2">DIGITAL LIGHT Technology</h3>
                  <p className="text-on-surface-variant font-body-md">Precision projection of symbols and guidance directly onto the road via 1.3 million micro-mirrors per headlamp.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <span className="w-2 h-2 rounded-full bg-primary-container mt-3"></span>
                <div>
                  <h3 className="font-headline-h3 text-white mb-2">E-ACTIVE BODY CONTROL</h3>
                  <p className="text-on-surface-variant font-body-md">The only system on the market where the spring and damping forces can be individually controlled at each wheel.</p>
                </div>
              </div>
              <div className="flex gap-6 group">
                <span className="w-2 h-2 rounded-full bg-primary-container mt-3"></span>
                <div>
                  <h3 className="font-headline-h3 text-white mb-2">Executive Rear Seating</h3>
                  <p className="text-on-surface-variant font-body-md">Maximum comfort with calf massage and up to 43.5 degrees of recline for the ultimate chauffeur experience.</p>
                </div>
              </div>
            </div>
          </div>
          <div className="col-span-12 lg:col-span-6 stagger-in" style={{ animationDelay: '0.8s' }}>
            <div className="relative">
              <img className="w-full grayscale hover:grayscale-0 transition-all duration-700 hairline-gold rounded-lg shadow-2xl" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA0BEmtpm_JfBXNO4EaUN0oxP4SPu7ffzfeAf_tGtoqWWND97-VGSH7DNOK0JCMy1olSR6cYRsz68Jvo3BWKkjBqcwOs1UV1dz4zKnnVYuOi-0vgNiJTTAEiimCjpTvhMCiQwko8Irl_ScrAVpG7CoByoGFJ71egCmqtGNRMaLgI_a7Aar9vG4eJLWZ6hFqdC2uQjoxi_Z621kIVrnEVhevsX2gSHrKrtpSD6SXzn_uTZvYFS3rhTGKV_Eo6gtHDZ-E5W9hljbU8rc" alt="S-Class executive rear seats" />
              <div className="absolute -bottom-8 -left-8 glass hairline-gold p-8 max-w-xs">
                <p className="italic text-primary font-body-lg">"The world's best-selling luxury sedan, reimagined for the digital age."</p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="mx-20 my-section-gap p-20 bg-gradient-to-br from-surface-container-high to-surface-dim hairline-gold text-center relative overflow-hidden stagger-in" style={{ animationDelay: '0.9s' }}>
          <div className="relative z-10">
            <h2 className="font-display-lg text-white mb-6">Experience Tomorrow.</h2>
            <p className="text-on-surface-variant font-body-lg mb-12 max-w-2xl mx-auto">Visit your local Mercedes-Benz showroom or schedule a personalized digital consultation with one of our curators.</p>
            <div className="flex flex-col sm:flex-row gap-6 justify-center items-center">
              <button className="bg-primary-container text-on-primary px-16 py-6 uppercase font-label-sm tracking-[0.3em] hover:scale-105 transition-transform glow-hover">
                Order This Car
              </button>
              <button className="border border-white/40 text-white px-16 py-6 uppercase font-label-sm tracking-[0.3em] hover:border-primary transition-colors">
                Book a Test Drive
              </button>
            </div>
          </div>
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary-container/5 rounded-full blur-[100px] -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-96 h-96 bg-primary-container/10 rounded-full blur-[120px] -ml-48 -mb-48"></div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div>
          <span className="text-lg font-semibold text-white font-['Playfair_Display'] block mb-6">Mercedes-Benz</span>
          <p className="text-zinc-500 font-['DM_Sans'] text-sm mb-8 leading-relaxed">Defining luxury mobility since 1886. Our commitment to innovation, safety, and design continues to lead the automotive world into a sustainable, digital future.</p>
          <div className="flex gap-4">
            <span className="material-symbols-outlined text-zinc-500 hover:text-[#C8A97E] cursor-pointer">public</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-[#C8A97E] cursor-pointer">mail</span>
            <span className="material-symbols-outlined text-zinc-500 hover:text-[#C8A97E] cursor-pointer">location_on</span>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <span className="text-[#C8A97E] font-['Playfair_Display'] text-sm tracking-tight">Models</span>
            <a className="text-zinc-500 hover:text-white transition-colors text-sm hover:translate-x-1 duration-200" href="#">Cars</a>
            <a className="text-zinc-500 hover:text-white transition-colors text-sm hover:translate-x-1 duration-200" href="#">Electric</a>
            <a className="text-zinc-500 hover:text-white transition-colors text-sm hover:translate-x-1 duration-200" href="#">SUVs</a>
            <a className="text-zinc-500 hover:text-white transition-colors text-sm hover:translate-x-1 duration-200" href="#">AMG Performance</a>
          </div>
          <div className="flex flex-col gap-4">
            <span className="text-[#C8A97E] font-['Playfair_Display'] text-sm tracking-tight">Services</span>
            <a className="text-zinc-500 hover:text-white transition-colors text-sm hover:translate-x-1 duration-200" href="#">Service</a>
            <a className="text-zinc-500 hover:text-white transition-colors text-sm hover:translate-x-1 duration-200" href="#">Test Drive</a>
            <a className="text-zinc-500 hover:text-white transition-colors text-sm hover:translate-x-1 duration-200" href="#">My Orders</a>
            <a className="text-zinc-500 hover:text-white transition-colors text-sm hover:translate-x-1 duration-200" href="#">Wishlist</a>
          </div>
        </div>
        <div className="flex flex-col justify-between items-end">
          <div className="text-right">
            <span className="text-[#C8A97E] font-['Playfair_Display'] text-sm tracking-tight block mb-4">Newsletter</span>
            <div className="flex border-b border-[#C8A97E]/30 pb-2">
              <input className="bg-transparent border-none text-sm text-white focus:ring-0 placeholder:text-zinc-700 w-48" placeholder="Email Address" type="email" />
              <button className="material-symbols-outlined text-[#C8A97E]">arrow_forward</button>
            </div>
          </div>
          <p className="text-zinc-500 font-['DM_Sans'] text-xs mt-10">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
