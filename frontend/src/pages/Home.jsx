export default function Home() {
  return (
    <>
      {/* Top Navigation */}
      <header className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <span className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</span>
        </div>
        <nav className="hidden md:flex items-center gap-12">
          <a className="font-label-sm text-[#C8A97E] border-b border-[#C8A97E] pb-1 uppercase" href="#">Cars</a>
          <a className="font-label-sm text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 uppercase" href="#">AMG Performance</a>
          <a className="font-label-sm text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 uppercase" href="#">Electric</a>
          <a className="font-label-sm text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 uppercase" href="#">Discover</a>
        </nav>
        <div className="flex items-center gap-8">
          <span className="material-symbols-outlined text-zinc-400 hover:text-[#C8A97E] cursor-pointer transition-colors">search</span>
          <button className="font-label-sm text-[#C8A97E] border border-[#C8A97E]/40 px-6 py-2 uppercase hover:bg-[#C8A97E]/10 transition-all duration-300">Sign In</button>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 particle-bg opacity-30 z-0"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-background/20 to-background z-10"></div>
        <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-5xl">
          <h1 className="font-display-lg text-white mb-8 tracking-tighter leading-none">
            The Best. <br />Or <span className="italic text-primary font-bold">Nothing.</span>
          </h1>
          <p className="font-body-lg text-secondary max-w-2xl mx-auto mb-12 opacity-80">
            Experience the pinnacle of automotive engineering and timeless luxury. From our classic sedans to the high-performance AMG lineage.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <button className="border border-primary text-primary px-12 py-4 font-label-sm uppercase tracking-widest hover:bg-primary hover:text-background transition-all duration-500 gold-glow">
              Explore Catalogue
            </button>
            <button className="text-white flex items-center gap-3 font-label-sm uppercase tracking-widest hover:text-primary transition-colors">
              <span className="material-symbols-outlined">play_circle</span> Watch Heritage
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <span className="material-symbols-outlined text-primary/50">keyboard_double_arrow_down</span>
        </div>
      </section>

      {/* Filter Bar */}
      <section className="sticky top-20 z-40 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-[#C8A97E]/10 py-6">
        <div className="max-w-container-max mx-auto px-margin-desktop">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="flex items-center gap-8 flex-1">
              <div className="group relative">
                <label className="block text-[10px] text-primary uppercase mb-1 tracking-widest">Category</label>
                <select className="bg-transparent border-none text-on-surface font-label-sm uppercase focus:ring-0 p-0 pr-8 cursor-pointer appearance-none">
                  <option>All Categories</option>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>AMG Performance</option>
                  <option>Electric (EQ)</option>
                </select>
                <span className="material-symbols-outlined absolute right-0 bottom-0 text-sm pointer-events-none">expand_more</span>
              </div>
              <div className="group relative">
                <label className="block text-[10px] text-primary uppercase mb-1 tracking-widest">Year</label>
                <select className="bg-transparent border-none text-on-surface font-label-sm uppercase focus:ring-0 p-0 pr-8 cursor-pointer appearance-none">
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
                <span className="material-symbols-outlined absolute right-0 bottom-0 text-sm pointer-events-none">expand_more</span>
              </div>
              <div className="flex-1 max-w-xs">
                <div className="flex justify-between items-end mb-1">
                  <label className="text-[10px] text-primary uppercase tracking-widest">Price Range (PKR)</label>
                  <span className="text-[12px] font-label-sm text-secondary">0 - 50M</span>
                </div>
                <input className="w-full h-1 bg-surface-variant accent-primary appearance-none cursor-pointer rounded-full" max="50" min="0" type="range" />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button className="flex items-center gap-2 font-label-sm uppercase text-secondary hover:text-primary transition-colors">
                <span className="material-symbols-outlined text-lg">tune</span> Filters
              </button>
              <div className="h-6 w-[1px] bg-outline-variant"></div>
              <span className="text-secondary font-label-sm uppercase tracking-tighter">Showing 12 Models</span>
            </div>
          </div>
        </div>
      </section>

      {/* Car Grid */}
      <section className="py-section-gap max-w-container-max mx-auto px-margin-mobile md:px-margin-desktop">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">

          {/* Car Card 1 */}
          <div className="group hairline-gold bg-[#111118] overflow-hidden transition-all duration-500 hover:translate-y-[-8px]">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAF2nwKtksaHt9t6QnLTpWSgtK6Pt915fn0JaPCILM9aFxjGj8jg0wK0n4FyqlCyaGh4VBvMnLOzQ8QI6-alI2GOwMY2QHLr_cV6buii3zXpc-FXL6d-zEklIgOxO2xD20q_Bg_OdmJahXJ1WNfmhPUEe3lnRLkM7UoaDUTNp4ARTHZQ83nENKmjTGziF5KVTdyVXInEbsoXNz2IB8H2Iw-Ooyx-OS5819s6hrkaUfodIDu8snuehVEi6ZjeETW8XNIWUXOxLCrzt8" alt="Mercedes-Benz S-Class" />
              <div className="absolute top-4 left-4">
                <span className="bg-background/80 backdrop-blur-md px-4 py-1 text-[10px] font-label-sm uppercase text-primary border border-primary/20">Sedan</span>
              </div>
              <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/60 backdrop-blur-md flex items-center justify-center text-white hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined text-lg">favorite</span>
              </button>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-h3 text-white uppercase tracking-tight">S-Class 500</h3>
                <span className="material-symbols-outlined text-primary">electric_bolt</span>
              </div>
              <p className="text-secondary font-body-md mb-8 opacity-70">Experience the definition of luxury. Standard-setting innovation meets classic elegance.</p>
              <div className="flex items-center justify-between border-t border-outline-variant/30 pt-6">
                <div>
                  <span className="block text-[10px] text-primary uppercase tracking-widest mb-1">Base Price</span>
                  <span className="font-body-lg text-white font-medium italic">PKR 45,000,000</span>
                </div>
                <a className="flex items-center gap-2 font-label-sm text-[#C8A97E] uppercase hover:gap-4 transition-all group-hover:underline underline-offset-8" href="#">
                  View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Car Card 2 */}
          <div className="group hairline-gold bg-[#111118] overflow-hidden transition-all duration-500 hover:translate-y-[-8px]">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBGPtgqztZ7krzZvDPb_iRMLgcbpDaZeandO_JVtW3MBJxAz-vyhq8nA0MlDAgDMHnuDnY_e509ln1eIeUJdIanpdg9DxIRk8cL9DMhoJoIFCNi6EWwRoqPT86dsk8hgh_YlfluUjN-DpsggFeLACxwsrPDPtEm7U58rfoNUxj7O17Kflov-DZj5jtF4EA0M5f8UCJ0IgIQjxVn9IUI_Av9Vm7DlrAdD9jVW6FA_7_nBU9FC864i8n6Zu11iESvHcdXI_FKDE1RgqU" alt="Mercedes-AMG GT Coupe" />
              <div className="absolute top-4 left-4">
                <span className="bg-background/80 backdrop-blur-md px-4 py-1 text-[10px] font-label-sm uppercase text-primary border border-primary/20">AMG Performance</span>
              </div>
              <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/60 backdrop-blur-md flex items-center justify-center text-white hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined text-lg">favorite</span>
              </button>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-h3 text-white uppercase tracking-tight">AMG GT Coupe</h3>
                <span className="material-symbols-outlined text-primary">speed</span>
              </div>
              <p className="text-secondary font-body-md mb-8 opacity-70">Precision-tuned by masters at Affalterbach. Raw power meets uncompromising control.</p>
              <div className="flex items-center justify-between border-t border-outline-variant/30 pt-6">
                <div>
                  <span className="block text-[10px] text-primary uppercase tracking-widest mb-1">Base Price</span>
                  <span className="font-body-lg text-white font-medium italic">PKR 38,500,000</span>
                </div>
                <a className="flex items-center gap-2 font-label-sm text-[#C8A97E] uppercase hover:gap-4 transition-all group-hover:underline underline-offset-8" href="#">
                  View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Car Card 3 */}
          <div className="group hairline-gold bg-[#111118] overflow-hidden transition-all duration-500 hover:translate-y-[-8px]">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCtrSSDrVPjp8tfPWL0ex9g4Kj2hI1iAYfaKIgRMB17dhqCbc3O4cYFCNwIX4MVQbYznPvEh0Yd0SkYt1XGQyKQFirEBCGuEYwUGAQF3E_P-x2Wg9hes_-lshpH-a2xY_jjJqcZznbrWGZc-62l5j0-Sgj2adJocCMc_768JX5OSUYntuTfpMhRQTopS2PpSB_5-aLgSCeQFRcXcP8KrgWPgruKgt5D3kltZ8TEXqHCSzBo1GeBZYk811YjWGqpImqkg4PkRU1O_Hc" alt="Mercedes-Benz G-Wagon G63" />
              <div className="absolute top-4 left-4">
                <span className="bg-background/80 backdrop-blur-md px-4 py-1 text-[10px] font-label-sm uppercase text-primary border border-primary/20">SUV</span>
              </div>
              <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/60 backdrop-blur-md flex items-center justify-center text-white hover:text-red-500 transition-colors">
                <span className="material-symbols-outlined text-lg">favorite</span>
              </button>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-h3 text-white uppercase tracking-tight">G-Wagon G63</h3>
                <span className="material-symbols-outlined text-primary">terrain</span>
              </div>
              <p className="text-secondary font-body-md mb-8 opacity-70">Iconic design that defies time and terrain. Hand-crafted perfection for the boldest journeys.</p>
              <div className="flex items-center justify-between border-t border-outline-variant/30 pt-6">
                <div>
                  <span className="block text-[10px] text-primary uppercase tracking-widest mb-1">Base Price</span>
                  <span className="font-body-lg text-white font-medium italic">PKR 49,900,000</span>
                </div>
                <a className="flex items-center gap-2 font-label-sm text-[#C8A97E] uppercase hover:gap-4 transition-all group-hover:underline underline-offset-8" href="#">
                  View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Car Card 4 (Bento Variant) */}
          <div className="group hairline-gold bg-[#111118] overflow-hidden transition-all duration-500 hover:translate-y-[-8px] lg:col-span-2">
            <div className="flex flex-col md:flex-row h-full">
              <div className="relative md:w-1/2 aspect-[16/10] md:aspect-auto overflow-hidden">
                <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAzqTSa4AhOTZWRh_rDJ0D9NAHfKQA054owNTcBkcxluIB72NqWmDdedHmzoXj_xjZ8Z8DY133Pbq1zh3AFj7EUi4NFzj0cwJFSjeCdQeJC7t1k7mNpUhVex9d6KjXG4pOBcKj5IZGSws5qIbsmrdVKA73rbH4fZLRShmRO0bnDlujgRnwEPd-G9JInUvZ1EQulS4ZrmwrWVoy_OPyEuDomWX4fNWD_gPDyXxakkSRNm9j0U-0MsS3iYdsWn_LZj_q68FKrSX3EGmQ" alt="Mercedes-EQS Sedan" />
                <div className="absolute top-4 left-4">
                  <span className="bg-primary px-4 py-1 text-[10px] font-label-sm uppercase text-background">New Arrival</span>
                </div>
              </div>
              <div className="p-10 md:w-1/2 flex flex-col justify-center">
                <span className="text-[10px] text-primary uppercase tracking-[0.2em] mb-4">Sustainable Luxury</span>
                <h3 className="font-headline-h2 text-white mb-6 uppercase">The EQS Sedan</h3>
                <p className="text-secondary font-body-md mb-8 opacity-70">Leading the world into a new era of electric mobility. Intelligent, silent, and entirely groundbreaking.</p>
                <div className="flex items-center justify-between">
                  <span className="font-headline-h3 text-white italic">PKR 42,000,000</span>
                  <button className="bg-primary/5 hover:bg-primary/20 border border-primary text-primary px-8 py-3 font-label-sm uppercase transition-all duration-300">Reserve Now</button>
                </div>
              </div>
            </div>
          </div>

          {/* Car Card 5 */}
          <div className="group hairline-gold bg-[#111118] overflow-hidden transition-all duration-500 hover:translate-y-[-8px]">
            <div className="relative aspect-[16/10] overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCeOQ-Z2OTizI5Bu4yTAwHK6qzZXHnNOhGcVNnpS4-ytTAn2KETnzkDi2NTKaQ6foxdwabkB3BGBRlL5QCI1GiA6_e2TF_ffam6WeLQO9SiRllxbCbta_dpy9XH8XC5o2JQpWGH_N-sc_DiWtdjSEOzQOTqt2QgwN1nyYIiWtmf5oJKs7e1BsgwGWqudsEx3iqg-F9ZceLtn1LvB1s-fnC8KISF4xvpHWWoBQiSeE-QQU-ZVyq0DKn3-5WiFivPSbsI4C7iRoCzDx8" alt="Mercedes-Benz C-Class Sedan" />
              <div className="absolute top-4 left-4">
                <span className="bg-background/80 backdrop-blur-md px-4 py-1 text-[10px] font-label-sm uppercase text-primary border border-primary/20">Executive</span>
              </div>
              <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/60 backdrop-blur-md flex items-center justify-center text-white">
                <span className="material-symbols-outlined text-lg">favorite</span>
              </button>
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-headline-h3 text-white uppercase tracking-tight">C-Class Sedan</h3>
                <span className="material-symbols-outlined text-primary">business_center</span>
              </div>
              <p className="text-secondary font-body-md mb-8 opacity-70">The benchmark for executive sedans. Dynamic agility meets refined comfort.</p>
              <div className="flex items-center justify-between border-t border-outline-variant/30 pt-6">
                <div>
                  <span className="block text-[10px] text-primary uppercase tracking-widest mb-1">Base Price</span>
                  <span className="font-body-lg text-white font-medium italic">PKR 18,500,000</span>
                </div>
                <a className="flex items-center gap-2 font-label-sm text-[#C8A97E] uppercase hover:gap-4 transition-all" href="#">
                  View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#050508] border-t border-[#C8A97E]/10 w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="space-y-8">
          <div className="flex items-center gap-4">
            <span className="material-symbols-outlined text-[#C8A97E]">star</span>
            <span className="text-lg font-semibold text-white font-['Playfair_Display'] uppercase tracking-widest">Mercedes-Benz</span>
          </div>
          <p className="text-zinc-500 font-label-sm leading-relaxed max-w-xs">
            The pinnacle of luxury in Pakistan. We provide bespoke automotive services tailored to the most discerning tastes.
          </p>
          <div className="flex gap-6">
            <a className="text-zinc-500 hover:text-[#C8A97E] transition-colors" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="text-zinc-500 hover:text-[#C8A97E] transition-colors" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
            <a className="text-zinc-500 hover:text-[#C8A97E] transition-colors" href="#"><span className="material-symbols-outlined">local_post_office</span></a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-white font-label-sm uppercase tracking-widest mb-6">Explore</h4>
            <nav className="flex flex-col gap-4">
              <a className="text-zinc-500 font-label-sm hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Cars</a>
              <a className="text-zinc-500 font-label-sm hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">My Orders</a>
              <a className="text-zinc-500 font-label-sm hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Wishlist</a>
              <a className="text-zinc-500 font-label-sm hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Test Drive</a>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-label-sm uppercase tracking-widest mb-6">Service</h4>
            <nav className="flex flex-col gap-4">
              <a className="text-zinc-500 font-label-sm hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Maintenance</a>
              <a className="text-zinc-500 font-label-sm hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Genuine Parts</a>
              <a className="text-zinc-500 font-label-sm hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Contact</a>
              <a className="text-zinc-500 font-label-sm hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Legal</a>
            </nav>
          </div>
        </div>
        <div className="space-y-8">
          <h4 className="text-white font-label-sm uppercase tracking-widest">Join our Newsletter</h4>
          <div className="relative group">
            <input className="w-full bg-transparent border-b border-zinc-700 py-3 focus:border-[#C8A97E] outline-none text-white font-label-sm transition-colors uppercase tracking-widest" placeholder="YOUR EMAIL" type="email" />
            <button className="absolute right-0 bottom-3 text-[#C8A97E] hover:translate-x-2 transition-transform">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <p className="text-[10px] text-zinc-600 font-label-sm">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
