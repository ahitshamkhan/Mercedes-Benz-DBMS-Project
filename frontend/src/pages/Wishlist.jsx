export default function Wishlist() {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]">star</span>
          <h1 className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</h1>
        </div>
        <nav className="hidden md:flex gap-10">
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-label-sm" href="#">CARS</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-label-sm" href="#">SERVICE</a>
          <a className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 font-label-sm" href="#">WISHLIST</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-label-sm" href="#">MY ORDERS</a>
        </nav>
        <button className="text-[#C8A97E] font-label-sm hover:bg-[#C8A97E]/10 px-6 py-2 border border-[#C8A97E]/30 transition-all">Sign In</button>
      </header>

      <main className="pt-40 pb-section-gap px-margin-desktop max-w-container-max mx-auto min-h-screen">
        {/* Header Section */}
        <header className="mb-20">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-primary font-label-sm tracking-[0.2em] uppercase">Private Collection</span>
            <div className="h-px bg-primary/20 flex-grow"></div>
          </div>
          <h2 className="font-headline-h1 text-headline-h1 text-on-surface">Your Saved Vehicles</h2>
          <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl mt-6">
            Explore your curated selection of automotive excellence. Manage your preferred configurations and proceed to consultation for the world's most desired automobiles.
          </p>
        </header>

        {/* Wishlist Content */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-unit gap-y-12">
          {/* Car Card 1 */}
          <div className="md:col-span-8 group relative bg-surface-container-lowest hairline-border overflow-hidden card-glow transition-all duration-500">
            <div className="aspect-[21/9] overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAM9AGqQEm4oA25o4Jz-Y7wA5RaVhKuIoELzE0AFLF9-JAdP9KbHATu8yjkt0GZV8Z6AB7lV_iGU5iyB7yi9NuVk2Sz7Uu63vfy-P7BdVL5OrZKCCHmh4rS1dvI8-0Zorw2zThZFsELtiJRjAf_FsosE79NmSQMHY_xDRAQw44itlAa6edFCI5iaROrnhes6jqa6S908tZpN8CLm0TKVrV33JShe87Cv0d2K1jsPdgi02XgiAmNsgho_cRww2uH1to-E18QwJ5Oio4" alt="Mercedes-AMG GT Black Series" />
            </div>
            <div className="p-10 flex justify-between items-end">
              <div>
                <span className="font-label-sm text-primary uppercase mb-2 block">Performance Luxury</span>
                <h3 className="font-headline-h3 text-headline-h3">Mercedes-AMG GT Black Series</h3>
                <p className="text-primary font-headline-h3 mt-2">PKR 145,000,000</p>
              </div>
              <div className="flex gap-4">
                <button className="flex items-center gap-2 font-label-sm text-error hover:bg-error/10 px-4 py-2 border border-error/20 transition-all uppercase">
                  <span className="material-symbols-outlined text-sm">close</span>
                  Remove
                </button>
                <button className="font-label-sm bg-primary text-on-primary px-8 py-3 uppercase tracking-widest hover:bg-primary-fixed-dim transition-all">
                  Configure
                </button>
              </div>
            </div>
          </div>

          {/* Stats/Detail Card */}
          <div className="md:col-span-4 bg-surface-container hairline-border p-10 flex flex-col justify-between">
            <div>
              <h4 className="font-headline-h3 text-headline-h3 mb-6">Wishlist Summary</h4>
              <div className="space-y-6">
                <div className="flex justify-between border-b border-outline-variant pb-4">
                  <span className="text-on-surface-variant font-body-md">Saved Vehicles</span>
                  <span className="text-primary font-body-md font-bold">03</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant pb-4">
                  <span className="text-on-surface-variant font-body-md">Est. Total Value</span>
                  <span className="text-primary font-body-md font-bold">PKR 312M</span>
                </div>
                <div className="flex justify-between border-b border-outline-variant pb-4">
                  <span className="text-on-surface-variant font-body-md">Last Updated</span>
                  <span className="text-primary font-body-md font-bold">Oct 24, 2024</span>
                </div>
              </div>
            </div>
            <button className="w-full border border-primary/40 text-primary font-label-sm py-4 uppercase tracking-widest hover:bg-primary/10 transition-all">
              Schedule Showroom Visit
            </button>
          </div>

          {/* Car Card 2 */}
          <div className="md:col-span-6 group relative bg-surface-container-lowest hairline-border overflow-hidden card-glow transition-all duration-500">
            <div className="aspect-video overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDOEdD34PTd2irGf5K2wyZDXygzUU2KPFvxjZK2s4L074Xuo5_gIRTxgVFyNSI8_Xlt-8TH5xtYEi6IN0Mp8pFCuMVHEzY6xmePfqY38LKViVZwt_RAFj7r7QwA41ELPaeT0ezNFxK1JMgmzTislzQeWK05gOjFjWGSZb6lFa_MxmU7EbBByop9FVRnRRD5aMHrPWM370UapAu-Du-5kS7WWkfLgit21AipuJ3tEmqiHnCx3DscU2HGGJrpjUNPDOXuftNDXXvmQpM" alt="S-Class Saloon" />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-label-sm text-primary uppercase mb-2 block">The Pinnacle</span>
                  <h3 className="font-headline-h3 text-headline-h3">S-Class Saloon</h3>
                </div>
                <button className="text-error/60 hover:text-error transition-colors p-2">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-primary font-headline-h3">PKR 82,500,000</span>
                <a className="font-label-sm text-on-surface hover:text-primary transition-colors flex items-center gap-2 uppercase" href="#">
                  Details
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>

          {/* Car Card 3 */}
          <div className="md:col-span-6 group relative bg-surface-container-lowest hairline-border overflow-hidden card-glow transition-all duration-500">
            <div className="aspect-video overflow-hidden">
              <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC6bjhATgJ6alrcAZw2smrGvZZrAYSe52jOCmB6MDXZnlhWGVv75Q012ARFHsGOm6ct60Q8_zIP4XqssRauTcpzDIM8TMSQhOjXBeWisX8hjHVzLNPjST8k4I7-dYwVIPTyI9PjKILijNeA1FUktVXo5gT0lUXTUqoh4pG1RwJm6aXUjYQuT-m8BRnRO2L7rWurmqoP-7KNrRF_QSTfUMns62LkOS5zv4CTd5eXN5J-z50JUfk4Oi02Z5vFA3CNbmgEl_8iJ9eyD-w" alt="G-Class G63 AMG" />
            </div>
            <div className="p-8">
              <div className="flex justify-between items-start mb-6">
                <div>
                  <span className="font-label-sm text-primary uppercase mb-2 block">Iconic Strength</span>
                  <h3 className="font-headline-h3 text-headline-h3">G-Class G63 AMG</h3>
                </div>
                <button className="text-error/60 hover:text-error transition-colors p-2">
                  <span className="material-symbols-outlined">delete</span>
                </button>
              </div>
              <div className="flex justify-between items-center">
                <span className="text-primary font-headline-h3">PKR 98,200,000</span>
                <a className="font-label-sm text-on-surface hover:text-primary transition-colors flex items-center gap-2 uppercase" href="#">
                  Details
                  <span className="material-symbols-outlined text-sm">arrow_forward</span>
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Empty State (Hidden) */}
        <div className="hidden flex-col items-center justify-center py-32 text-center border border-dashed border-primary/20">
          <span className="material-symbols-outlined text-6xl text-primary/30 mb-8">car_tag</span>
          <h3 className="font-headline-h2 text-headline-h3 mb-4">Your wishlist is empty.</h3>
          <p className="font-body-md text-on-surface-variant mb-10 max-w-sm">Discover our latest models and save your favorites to view them later in your private collection.</p>
          <a className="group flex items-center gap-4 text-primary font-label-sm uppercase tracking-widest border border-primary px-10 py-4 hover:bg-primary hover:text-on-primary transition-all" href="#">
            Start exploring
            <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">trending_flat</span>
          </a>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div className="space-y-6">
          <div className="text-lg font-semibold text-white font-['Playfair_Display']">Mercedes-Benz</div>
          <p className="text-zinc-500 font-['Playfair_Display'] text-sm tracking-tight leading-relaxed">
            Defining the pinnacle of automotive engineering for over a century. Excellence is not just a standard, but our heritage.
          </p>
          <p className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-600">
            © 2024 Mercedes-Benz Pakistan. All rights reserved.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">Cars</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">My Orders</a>
            <a className="text-[#C8A97E] font-['Playfair_Display'] text-sm" href="#">Wishlist</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">Test Drive</a>
          </div>
          <div className="flex flex-col gap-4">
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">Service</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">Admin</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">Contact</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm hover:translate-x-1 transition-transform duration-200" href="#">Legal</a>
          </div>
        </div>
        <div className="space-y-6">
          <h4 className="text-white font-['Playfair_Display'] text-sm uppercase tracking-widest">Subscribe to the Circle</h4>
          <div className="relative group">
            <input className="w-full bg-transparent border-b border-zinc-800 py-3 text-sm focus:outline-none focus:border-[#C8A97E] transition-colors" placeholder="YOUR EMAIL ADDRESS" type="email" />
            <button className="absolute right-0 top-1/2 -translate-y-1/2 text-[#C8A97E]">
              <span className="material-symbols-outlined">arrow_right_alt</span>
            </button>
          </div>
          <div className="flex gap-6 pt-4 text-zinc-500">
            <span className="material-symbols-outlined cursor-pointer hover:text-white">public</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-white">share</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-white">mail</span>
          </div>
        </div>
      </footer>
    </>
  );
}
