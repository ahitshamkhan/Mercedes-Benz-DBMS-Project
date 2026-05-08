export default function OrderTracking() {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]">star</span>
          <span className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</span>
        </div>
        <nav className="hidden md:flex gap-10 items-center">
          <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Cars</a>
          <a className="font-['Playfair_Display'] text-sm tracking-tight text-[#C8A97E] border-b border-[#C8A97E] pb-1" href="#">My Orders</a>
          <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Wishlist</a>
        </nav>
        <button className="px-6 py-2 border border-[#C8A97E] text-[#C8A97E] font-label-sm uppercase hover:bg-[#C8A97E]/10 transition-colors">
          Sign In
        </button>
      </header>

      <main className="pt-40 pb-24 px-8 md:px-20 max-w-container-max mx-auto">
        {/* Order Identity Header */}
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 border-b border-outline-variant pb-12">
          <div>
            <span className="font-label-sm text-primary uppercase mb-4 block">Order Details</span>
            <h1 className="font-headline-h1 text-on-background mb-2">Mercedes-Benz S-Class</h1>
            <div className="flex items-center gap-4">
              <span className="px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant text-label-sm text-secondary uppercase">AMG Line Premium Plus</span>
              <span className="text-secondary/60 font-body-md">Order ID: <span className="text-on-background">MB-PAK-2024-8832</span></span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-secondary/60 text-label-sm uppercase block mb-1">Estimated Arrival</span>
            <span className="font-headline-h3 text-primary">October 14, 2024</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          {/* Left Column */}
          <div className="lg:col-span-2 space-y-16">
            {/* Visual Status Stepper */}
            <section className="bg-surface-container-lowest gold-hairline p-10 rounded-lg">
              <h3 className="font-headline-h3 text-on-background mb-10">Production Timeline</h3>
              <div className="relative flex justify-between items-start">
                {/* Connector Lines */}
                <div className="absolute top-6 left-0 w-full h-[1px] bg-outline-variant z-0"></div>
                <div className="absolute top-6 left-0 w-2/3 h-[1px] bg-primary z-0"></div>

                {/* Step 1: Pending */}
                <div className="relative z-10 flex flex-col items-center text-center w-1/3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-on-primary text-xl">check_circle</span>
                  </div>
                  <span className="font-label-sm text-on-background uppercase">Pending</span>
                  <span className="text-xs text-secondary/60 mt-1">Aug 20, 2024</span>
                </div>

                {/* Step 2: Confirmed (Active) */}
                <div className="relative z-10 flex flex-col items-center text-center w-1/3">
                  <div className="w-12 h-12 rounded-full bg-primary flex items-center justify-center mb-4 ring-8 ring-primary/10">
                    <span className="material-symbols-outlined text-on-primary text-xl">manufacturing</span>
                  </div>
                  <span className="font-label-sm text-primary uppercase">Confirmed</span>
                  <span className="text-xs text-secondary/60 mt-1">Aug 24, 2024</span>
                </div>

                {/* Step 3: Delivered */}
                <div className="relative z-10 flex flex-col items-center text-center w-1/3">
                  <div className="w-12 h-12 rounded-full bg-surface-container-highest border border-outline-variant flex items-center justify-center mb-4">
                    <span className="material-symbols-outlined text-outline text-xl">auto_transmission</span>
                  </div>
                  <span className="font-label-sm text-outline uppercase">Delivered</span>
                  <span className="text-xs text-secondary/60 mt-1">Expected</span>
                </div>
              </div>
            </section>

            {/* Vehicle Preview Cards */}
            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="relative h-80 rounded-lg overflow-hidden group border border-outline-variant">
                <img alt="Luxury car interior" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCbjSHeJ97nJdExaGzslcjsXx4cJjeiBcz6efDeaPiOAjQzK_8bMnJDNUDL-dfr8EZ6zcDiAwk5gyPg-UM99RR1YQSneTED07V6rnHrJfQw8dgf90Uo1FBI8epl5LpqwdjgOMarZwetBykooFmFfoPuS9egssCvlQsczSmLeCldN3WxwE5Hk19ARp7H92SepKtEO9AA6LaRiQi8mt662uLbXxa0__vczkcUPgJg7XtlxfbUP5-90np9xrFOIlK-FQqhC8xstqIgtKc" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <p className="text-label-sm text-primary uppercase">Interior Trim</p>
                  <p className="font-headline-h3 text-white">Nappa Black Leather</p>
                </div>
              </div>
              <div className="relative h-80 rounded-lg overflow-hidden group border border-outline-variant">
                <img alt="Luxury car wheel" className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD-kvIK7ynuo3_06id0A5uihUyHL472AArjESGKzUyGrciUK4FkgbE2sWZxvwzVNHNpgcL62DodDiVolUT8HX4lcGkjz8VXxmeHJIMXQ2h44uhB0F-_k9GITt1K4rA174m9YX6IBMuVjg8XHV1LO5SalRy1yeaWAHitUysFTlQDbAeGlp2EXi8rTlBShp4x3IIeNnFK4x3YphcdYx_uVdxoUyEUmE82eHC9scz9SfzmTn02uy1Oytp3G9LyY5uqfx0JEqGZgVicHrM" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                <div className="absolute bottom-6 left-6">
                  <p className="text-label-sm text-primary uppercase">Wheel Selection</p>
                  <p className="font-headline-h3 text-white">21" AMG Multi-Spoke</p>
                </div>
              </div>
            </section>
          </div>

          {/* Right Column: Price & Payment */}
          <aside className="space-y-8">
            {/* Price Breakdown */}
            <div className="bg-surface-container-low gold-hairline p-8 rounded-lg">
              <h4 className="font-headline-h3 text-on-background mb-8 border-b border-outline-variant pb-4">Order Summary</h4>
              <div className="space-y-4 mb-8">
                <div className="flex justify-between items-center">
                  <span className="text-secondary/80 font-body-md">Base Price</span>
                  <span className="text-on-background font-body-md">PKR 48,500,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary/80 font-body-md">AMG Premium Package</span>
                  <span className="text-on-background font-body-md">PKR 2,200,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary/80 font-body-md">Import Duty &amp; Taxes</span>
                  <span className="text-on-background font-body-md">PKR 18,300,000</span>
                </div>
                <div className="flex justify-between items-center">
                  <span className="text-secondary/80 font-body-md">Delivery &amp; Handling</span>
                  <span className="text-on-background font-body-md">PKR 150,000</span>
                </div>
              </div>
              <div className="pt-6 border-t border-primary/20 flex justify-between items-end">
                <div>
                  <span className="text-label-sm text-primary uppercase block">Total Amount</span>
                  <span className="font-headline-h2 text-primary">PKR 69.1M</span>
                </div>
              </div>
            </div>

            {/* Payment Method */}
            <div className="bg-surface-container-highest/30 gold-hairline p-6 rounded-lg flex items-center justify-between">
              <div className="flex items-center gap-4">
                <div className="w-12 h-8 bg-zinc-800 rounded flex items-center justify-center border border-outline-variant">
                  <span className="material-symbols-outlined text-primary text-xl">account_balance</span>
                </div>
                <div>
                  <p className="text-label-sm text-on-background uppercase">Payment Method</p>
                  <p className="text-secondary/60 text-xs">Standard Chartered Bank Transfer</p>
                </div>
              </div>
              <span className="material-symbols-outlined text-green-500">verified</span>
            </div>

            {/* Action Button */}
            <button className="w-full py-5 border border-primary text-primary font-label-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300 group">
              Download Configuration PDF
              <span className="material-symbols-outlined align-middle ml-2 group-hover:translate-y-1 transition-transform">download</span>
            </button>
          </aside>
        </div>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div>
          <span className="text-lg font-semibold text-white font-['Playfair_Display'] block mb-6">Mercedes-Benz Pakistan</span>
          <p className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500">Excellence in every detail. Crafting the future of mobility with heritage and precision.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Cars</a>
          <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">My Orders</a>
          <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Wishlist</a>
          <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Test Drive</a>
          <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Service</a>
          <a className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200" href="#">Contact</a>
        </div>
        <div className="text-right flex flex-col justify-between">
          <div className="space-x-4">
            <span className="material-symbols-outlined text-[#C8A97E] cursor-pointer hover:scale-110 transition-transform">share</span>
            <span className="material-symbols-outlined text-[#C8A97E] cursor-pointer hover:scale-110 transition-transform">public</span>
          </div>
          <p className="font-['Playfair_Display'] text-sm tracking-tight text-zinc-500 mt-8">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
