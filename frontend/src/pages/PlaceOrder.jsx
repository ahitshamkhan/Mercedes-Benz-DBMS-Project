export default function PlaceOrder() {
  return (
    <>
      {/* TopAppBar */}
      <nav className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]">star</span>
          <span className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</span>
        </div>
        <div className="hidden md:flex gap-12">
          <a className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 font-label-sm" href="#">Cars</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-label-sm" href="#">Service</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 font-label-sm" href="#">Test Drive</a>
        </div>
        <button className="text-[#C8A97E] font-label-sm uppercase tracking-widest hover:bg-[#C8A97E]/10 px-6 py-2 transition-all">Sign In</button>
      </nav>

      <main className="pt-32 pb-40 px-20 max-w-[1440px] mx-auto">
        {/* Header Section */}
        <header className="mb-16">
          <h1 className="font-headline-h1 text-on-surface mb-4">Complete Your Order</h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl">Finalize your configuration and select your preferred acquisition method for the pinnacle of automotive engineering.</p>
        </header>

        <div className="grid grid-cols-12 gap-16">
          {/* Left Column: Selection Details */}
          <div className="col-span-12 lg:col-span-8 space-y-12">

            {/* Selected Variant Summary */}
            <section className="bg-[#111118] gold-border p-8 relative overflow-hidden group">
              <div className="flex flex-col md:flex-row gap-8 items-center">
                <div className="w-full md:w-1/3 aspect-video bg-[#0D0D14] overflow-hidden">
                  <img className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCi3kbDp8pP6_hJ-mhxxSzgmXvPKiLgvCaKidFB-Uv5oKzKTz3CiPoi74K0sGojKm1SAxD3PGQFy0tM1ck07KDU2PV6mrcv01Y-CDzN4yOZ-JmewvdJ0exovdoR7ievfXzq7GMIqxU9Jxfypmefb7tx9qoM6-EX9O2Et2NHOGyspdmxKlYZuqC6MTePlEGNW0kRH1R26P-ON6kLFxmiKZWw0rp98hPpaHAellC4jZajENkEw0NBZ5upzklwIxNb7B83j7quekz_r5s" alt="Mercedes-Benz EQS 580" />
                </div>
                <div className="flex-1">
                  <span className="text-[#C8A97E] font-label-sm uppercase mb-2 block">Current Selection</span>
                  <h2 className="font-headline-h3 text-white mb-4">2024 EQS 580 4MATIC Sedan</h2>
                  <div className="grid grid-cols-2 gap-4 text-sm">
                    <div className="flex items-center gap-2 text-zinc-500">
                      <span className="material-symbols-outlined text-[18px]">palette</span>
                      <span>Obsidian Black Metallic</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500">
                      <span className="material-symbols-outlined text-[18px]">chair</span>
                      <span>Macchiato Beige Nappa Leather</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500">
                      <span className="material-symbols-outlined text-[18px]">settings_suggest</span>
                      <span>Executive Rear Seating Package Plus</span>
                    </div>
                    <div className="flex items-center gap-2 text-zinc-500">
                      <span className="material-symbols-outlined text-[18px]">speed</span>
                      <span>516 hp | 0-60 in 4.1s</span>
                    </div>
                  </div>
                </div>
              </div>
            </section>

            {/* Payment Method Selector */}
            <section>
              <h3 className="font-headline-h3 text-on-surface mb-8">Payment Method</h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {/* Credit Card */}
                <label className="relative flex items-center p-6 bg-[#111118] gold-border cursor-pointer hover:bg-[#111118]/80 transition-all active-payment">
                  <input defaultChecked className="hidden" name="payment" type="radio" />
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center mb-4">
                      <span className="material-symbols-outlined text-[#C8A97E] text-3xl">credit_card</span>
                      <div className="h-4 w-4 rounded-full border border-[#C8A97E] flex items-center justify-center">
                        <div className="h-2 w-2 rounded-full bg-[#C8A97E]"></div>
                      </div>
                    </div>
                    <span className="font-body-md font-bold text-white uppercase tracking-wider">Credit Card</span>
                    <span className="text-zinc-500 text-xs mt-1">Visa, Mastercard, AMEX</span>
                  </div>
                </label>

                {/* Bank Transfer */}
                <label className="relative flex items-center p-6 bg-[#111118] gold-border cursor-pointer hover:bg-[#111118]/80 transition-all">
                  <input className="hidden" name="payment" type="radio" />
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center mb-4">
                      <span className="material-symbols-outlined text-zinc-600 text-3xl">account_balance</span>
                      <div className="h-4 w-4 rounded-full border border-zinc-700"></div>
                    </div>
                    <span className="font-body-md font-bold text-zinc-400 uppercase tracking-wider">Bank Transfer</span>
                    <span className="text-zinc-500 text-xs mt-1">Direct wire to Mercedes-Benz Financial</span>
                  </div>
                </label>

                {/* Installment */}
                <label className="relative flex items-center p-6 bg-[#111118] gold-border cursor-pointer hover:bg-[#111118]/80 transition-all">
                  <input className="hidden" name="payment" type="radio" />
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center mb-4">
                      <span className="material-symbols-outlined text-zinc-600 text-3xl">calendar_month</span>
                      <div className="h-4 w-4 rounded-full border border-zinc-700"></div>
                    </div>
                    <span className="font-body-md font-bold text-zinc-400 uppercase tracking-wider">Installments</span>
                    <span className="text-zinc-500 text-xs mt-1">36-60 Months Leasing Plans</span>
                  </div>
                </label>

                {/* Cash */}
                <label className="relative flex items-center p-6 bg-[#111118] gold-border cursor-pointer hover:bg-[#111118]/80 transition-all">
                  <input className="hidden" name="payment" type="radio" />
                  <div className="flex flex-col w-full">
                    <div className="flex justify-between items-center mb-4">
                      <span className="material-symbols-outlined text-zinc-600 text-3xl">payments</span>
                      <div className="h-4 w-4 rounded-full border border-zinc-700"></div>
                    </div>
                    <span className="font-body-md font-bold text-zinc-400 uppercase tracking-wider">Cash Payment</span>
                    <span className="text-zinc-500 text-xs mt-1">Visit your local authorized dealership</span>
                  </div>
                </label>
              </div>
            </section>

          </div>

          {/* Right Column: Order Summary sticky */}
          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-32 bg-[#111118] gold-border p-10">
              <h3 className="font-headline-h3 text-white mb-8 border-b border-[#C8A97E]/10 pb-6">Order Summary</h3>
              <div className="space-y-6 mb-10">
                <div className="flex justify-between">
                  <span className="text-zinc-500 font-label-sm uppercase">Base Price</span>
                  <span className="text-white font-body-md">$125,900.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500 font-label-sm uppercase">Optional Equipment</span>
                  <span className="text-white font-body-md">$14,250.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500 font-label-sm uppercase">Delivery &amp; Prep</span>
                  <span className="text-white font-body-md">$1,150.00</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-zinc-500 font-label-sm uppercase">Luxury Tax</span>
                  <span className="text-white font-body-md">$8,450.00</span>
                </div>
              </div>
              <div className="flex justify-between items-end border-t border-[#C8A97E]/20 pt-8 mb-10">
                <span className="text-zinc-400 font-headline-h3">Total</span>
                <div className="text-right">
                  <span className="text-[#C8A97E] text-4xl font-headline-h1">$149,750.00</span>
                  <span className="block text-[10px] text-zinc-500 uppercase tracking-widest mt-1">Excl. Local Registration</span>
                </div>
              </div>
              <button className="w-full bg-transparent border border-[#C8A97E] py-5 text-white font-label-sm uppercase tracking-widest hover:bg-[#C8A97E] hover:text-black transition-all duration-300">
                Confirm Order
              </button>
              <p className="text-center text-zinc-600 text-[10px] mt-6 leading-relaxed">
                By clicking confirm, you agree to our Terms of Service and Privacy Policy. A specialist will contact you within 24 hours to finalize documentation.
              </p>
            </div>
          </div>
        </div>
      </main>

      {/* Modal Component (Simulated State - hidden) */}
      <div className="hidden fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
        <div className="bg-[#0D0D14] gold-border max-w-lg w-full p-12 text-center">
          <span className="material-symbols-outlined text-[#C8A97E] text-6xl mb-6 block">task_alt</span>
          <h2 className="font-headline-h2 text-white mb-4">Request Received</h2>
          <p className="text-zinc-400 font-body-md mb-10">Your configuration for the EQS 580 has been secured. Our concierge team is reviewing your selection and will contact you via your preferred channel.</p>
          <button className="w-full bg-[#C8A97E] py-4 text-black font-label-sm uppercase tracking-widest hover:bg-[#e2c195] transition-colors">
            Back to Dashboard
          </button>
        </div>
      </div>

      {/* Footer */}
      <footer className="w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div>
          <span className="text-lg font-semibold text-white font-['Playfair_Display'] block mb-6">Mercedes-Benz</span>
          <p className="text-zinc-500 font-body-md max-w-xs">Representing the pinnacle of automotive luxury and technical innovation since 1926.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200" href="#">Cars</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200" href="#">My Orders</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200" href="#">Wishlist</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200" href="#">Test Drive</a>
          </div>
          <div className="flex flex-col gap-3">
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200" href="#">Service</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200" href="#">Legal</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200" href="#">Privacy</a>
            <a className="text-zinc-500 hover:text-white font-['Playfair_Display'] text-sm tracking-tight hover:translate-x-1 transition-transform duration-200" href="#">Contact</a>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-zinc-500 cursor-pointer hover:text-[#C8A97E]">public</span>
            <span className="material-symbols-outlined text-zinc-500 cursor-pointer hover:text-[#C8A97E]">share</span>
          </div>
          <p className="text-zinc-500 font-['Playfair_Display'] text-xs mt-8">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
