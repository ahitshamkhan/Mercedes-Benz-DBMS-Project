export default function NewArrivals() {
  return (
    <>
      {/* TopAppBar */}
      <header className="fixed top-0 w-full flex justify-between items-center px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]">star</span>
          <span className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</span>
        </div>
        <nav className="hidden md:flex items-center gap-10 font-['Playfair_Display'] text-sm tracking-tight">
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Home</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Cars</a>
          <a className="text-[#C8A97E] border-b border-[#C8A97E] pb-1" href="#">New Arrivals</a>
          <a className="text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" href="#">Test Drive</a>
        </nav>
        <button className="px-6 py-2 border border-[#C8A97E]/40 text-[#C8A97E] font-label-sm uppercase hover:bg-[#C8A97E]/10 transition-all duration-300">
          Sign In
        </button>
      </header>

      <main className="pt-32 pb-40">
        {/* Hero Heading */}
        <section className="px-20 mb-20">
          <div className="max-w-container-max mx-auto">
            <span className="text-primary font-label-sm uppercase tracking-[0.3em] mb-4 block">Future of Luxury</span>
            <h1 className="font-headline-h1 text-on-background mb-4">New Arrivals 2026</h1>
            <div className="w-24 h-px bg-primary-container"></div>
          </div>
        </section>

        {/* Horizontal Scroll Strip */}
        <section className="mb-section-gap overflow-hidden">
          <div className="flex gap-8 px-20 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
            {/* Featured Card 1 */}
            <div className="flex-none w-[80vw] md:w-[60vw] aspect-[21/9] snap-center relative overflow-hidden group gold-hairline bg-surface-container-lowest">
              <img className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBO0JUD2Q9m9bbNn5885x581lrLHtuoAUFZ0Wk12wx0fu7lglz32uK5BSFgQKhPeaXO7PspEsFJgRUJZip4_PYuSqFju0rZvWNA0dNxuiMNxefr2kkm0xbN5Gx1EJzdI8ySgNM4ZOCa4QltTZ9-7PY1wPCBlepsCxPSIK4FjZrHYt46rM1V95TBu7ExoqriTPFKakQ40URYifYO2-8_ZSgEbOFo3HRRyhhbrzBSktbEPFTC6a1EZr7xsto0n0dHz6vuyqbqaX7lo3w" alt="EQS Maybach Night Series" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <span className="text-primary font-label-sm uppercase tracking-widest mb-2 block">World Premiere</span>
                <h3 className="font-headline-h2 text-3xl">EQS Maybach Night Series</h3>
              </div>
            </div>

            {/* Featured Card 2 */}
            <div className="flex-none w-[80vw] md:w-[60vw] aspect-[21/9] snap-center relative overflow-hidden group gold-hairline bg-surface-container-lowest">
              <img className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuD0gRqbPK6fLrl73ZS_sdemqZ9IpOuuaiQTB51_hSnl69-_wsSJ-XC5gN1fQTzC_ad7uf6zBlmLRj2_pvHU9crFfwKj_iRri97SEY2rOBGGeNmHyRaI6RpcdQQtOvUB1al6gTTDDzpgEDE12_7C9LQnxDp_-vbuLRvlVJo1oMWlvePrK-Hoa2Hu6RP7a0vwTa_2F0k3hIPNl1lxOl4M55offVkVCYSWs9RGetcIemBn_l22K8FHfkPs0ywnriVI71ON0umCJ5oAyYM" alt="AMG GT 63 Coupe SE" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <span className="text-primary font-label-sm uppercase tracking-widest mb-2 block">Performance Core</span>
                <h3 className="font-headline-h2 text-3xl">AMG GT 63 Coupe SE</h3>
              </div>
            </div>

            {/* Featured Card 3 */}
            <div className="flex-none w-[80vw] md:w-[60vw] aspect-[21/9] snap-center relative overflow-hidden group gold-hairline bg-surface-container-lowest">
              <img className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuA9UJnUPl8m2hHKS0vl4H5O4XwRUE9vMpCSHSJOZhmkQxSPaKuxch0ZNMs5DIFlWP-ji-GR2DbCtVYs5G1ibbKdy_c27S1IvbdvOKgM2YZ5nJYqzW-l-KY7aDZLNXMJuFvxtUZPsS80Hnu-yDMeQgGDOQAvT77aYdE4wq9UqGiaCkBcl1a9_XcPArZDRVQxPZkRDYTakxjPE6Nk0I3JJWRmqvGk7Fkoobt9xmSI0IbdPYGWvx4yEJjsTnFp6FwD549eJ-U4D28aBu8" alt="S-Class Pinnacle Edition" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent"></div>
              <div className="absolute bottom-10 left-10 text-white">
                <span className="text-primary font-label-sm uppercase tracking-widest mb-2 block">Intelligence Redefined</span>
                <h3 className="font-headline-h2 text-3xl">S-Class Pinnacle Edition</h3>
              </div>
            </div>
          </div>
        </section>

        {/* Grid Section */}
        <section className="px-20">
          <div className="max-w-container-max mx-auto">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
              {/* Car Card 1 */}
              <div className="bg-[#111118] gold-hairline p-1 group gold-glow transition-all duration-500">
                <div className="relative overflow-hidden aspect-[4/3] bg-surface-container-low mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBCSSGkqsqMU8aNWqd6upRNE8x6eKEfpYS5JiP8tw0BDIirtXMJfbhOHRFz5LFTxP7aDMk0AaYWyVqzshw6IIhn7zs6exmx3Y49z4l_HT6Z0ATW6hi3QaanOzRdZACnLWnqgvu5kngXhbGucR1kGnthVSLEEczNAWVERRihbJLfAIO791htzni3x8CIUvPdgcDN0Hk4kFsmps8Dm8FATBxgwstFrnMQ_WvcZmzqZseGc1CRyghlR9pdvDzSnRYOuy99H6ITP3KzQgk" alt="C 300 Night Edition" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-on-primary font-label-sm uppercase tracking-widest text-[10px]">New</span>
                </div>
                <div className="px-6 pb-8">
                  <p className="text-outline font-label-sm uppercase mb-1">C-Class Sedan</p>
                  <h4 className="font-headline-h3 text-2xl mb-4">C 300 Night Edition</h4>
                  <div className="flex justify-between items-center border-t border-outline-variant pt-4">
                    <span className="font-body-md text-primary">From $46,950</span>
                    <button className="flex items-center gap-2 group/btn font-label-sm text-on-surface uppercase">
                      Explore
                      <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Car Card 2 */}
              <div className="bg-[#111118] gold-hairline p-1 group gold-glow transition-all duration-500">
                <div className="relative overflow-hidden aspect-[4/3] bg-surface-container-low mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBBddNjSjTTaYajtxyvxgoutglR9ilNpUPDW8OcPK09P8UOBuUSYrbq9juof48O-FSpFVM00oz959NkQjaXvmicle-UYPyK3Bxzi6jjQkG4DD_kKtbkJsTBfsyUkWUdTNZnj4mLHdhwFlM7KUIC3gA7KnvFrnoxgZ-xxZixIvti3eSG9JyoPTekPqIZ29hP0_NkNvo-8LJxLI3W7PXktG-gK8EOEWrQt0VJX1B1buVFug5EsIE6lj_ONfGam_EIwOosuBWewvYr4CM" alt="G 63 Desert Rose" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-on-primary font-label-sm uppercase tracking-widest text-[10px]">New</span>
                </div>
                <div className="px-6 pb-8">
                  <p className="text-outline font-label-sm uppercase mb-1">G-Class Offroad</p>
                  <h4 className="font-headline-h3 text-2xl mb-4">G 63 Desert Rose</h4>
                  <div className="flex justify-between items-center border-t border-outline-variant pt-4">
                    <span className="font-body-md text-primary">From $179,000</span>
                    <button className="flex items-center gap-2 group/btn font-label-sm text-on-surface uppercase">
                      Explore
                      <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Car Card 3 */}
              <div className="bg-[#111118] gold-hairline p-1 group gold-glow transition-all duration-500">
                <div className="relative overflow-hidden aspect-[4/3] bg-surface-container-low mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuBaymZFx9yMkElBpeLMmKv8WlelS7hypzZDXJFV1BaCdQL4zdxDPlTNMO6FdGbvjLxv2N4NU86ZJ3-ize8AmFyNKJni3S0HisOGiTONP0peavl1MVFQfBNrKv05WgvOCv0SS8HAIdjpds45dESVv16MMVrY9c9uP74hrJoD5kF-4q1HiU0DVX2evXqOSD3QkIfxx_ly_vV0OVbeeHXb1WnoARQOpggGBglD2tsF4tzLMLcq6A5JRpw0HU90bh-WxXekZN8pLXn9Cqw" alt="EQE 350+ Luxury" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-on-primary font-label-sm uppercase tracking-widest text-[10px]">New</span>
                </div>
                <div className="px-6 pb-8">
                  <p className="text-outline font-label-sm uppercase mb-1">EQE SUV</p>
                  <h4 className="font-headline-h3 text-2xl mb-4">EQE 350+ Luxury</h4>
                  <div className="flex justify-between items-center border-t border-outline-variant pt-4">
                    <span className="font-body-md text-primary">From $77,900</span>
                    <button className="flex items-center gap-2 group/btn font-label-sm text-on-surface uppercase">
                      Explore
                      <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Car Card 4 */}
              <div className="bg-[#111118] gold-hairline p-1 group gold-glow transition-all duration-500">
                <div className="relative overflow-hidden aspect-[4/3] bg-surface-container-low mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuC_cGuL5yxPMpRJWTA1t_7a1TacpCo1RPCFJyttL45XnS1IHT2P5qmepVCNRuq7E-0ge7MYXeOPTtRYCez0mAy4_VStsaWmW_pIHR2iCVzkOFS5R3MlXT6X0iBSTlFNWaEwisfVCsoiXFIxC2jcj636WqvhgG3Y_S9lbjvzuCVjvMSmcOM51ocMKHX9uHrEbALTfEJOe6kLVulKqv8xXPZRP_q84X2IhnbpMj6SkTIdfmVy-KhQE3lmg80eYgXExzkUPWTHr1LMDAg" alt="E 450 4MATIC" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-on-primary font-label-sm uppercase tracking-widest text-[10px]">New</span>
                </div>
                <div className="px-6 pb-8">
                  <p className="text-outline font-label-sm uppercase mb-1">E-Class Sedan</p>
                  <h4 className="font-headline-h3 text-2xl mb-4">E 450 4MATIC</h4>
                  <div className="flex justify-between items-center border-t border-outline-variant pt-4">
                    <span className="font-body-md text-primary">From $68,100</span>
                    <button className="flex items-center gap-2 group/btn font-label-sm text-on-surface uppercase">
                      Explore
                      <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Car Card 5 */}
              <div className="bg-[#111118] gold-hairline p-1 group gold-glow transition-all duration-500">
                <div className="relative overflow-hidden aspect-[4/3] bg-surface-container-low mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuAvEX4HAu3fuxnVO99KK-SLAIt4cjV7p-CMZRUblDcboFM-T53zw7ynYVMYIYGuQA2J2m3bEmadqMy0r6ktLO5TVzntnuTILUMB2581wP56b6CqTk1iBSGhvKRYut5Vw06P1DOQohVTneBJyOUzix4QxRh1zi6MpfsGkv-qnKA23dDnNv_emTzqEco1nD31hFGRUrhIXTDRp0Ul2awTmcGlujGF0Weux5tkQwgERqLnS2G5GXLMnLmY5ichG-2VTXdZDk29Dt-7uPs" alt="SL 63 Performance" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-on-primary font-label-sm uppercase tracking-widest text-[10px]">New</span>
                </div>
                <div className="px-6 pb-8">
                  <p className="text-outline font-label-sm uppercase mb-1">AMG SL Roadster</p>
                  <h4 className="font-headline-h3 text-2xl mb-4">SL 63 Performance</h4>
                  <div className="flex justify-between items-center border-t border-outline-variant pt-4">
                    <span className="font-body-md text-primary">From $183,000</span>
                    <button className="flex items-center gap-2 group/btn font-label-sm text-on-surface uppercase">
                      Explore
                      <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>

              {/* Car Card 6 */}
              <div className="bg-[#111118] gold-hairline p-1 group gold-glow transition-all duration-500">
                <div className="relative overflow-hidden aspect-[4/3] bg-surface-container-low mb-6">
                  <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src="https://lh3.googleusercontent.com/aida-public/AB6AXuCjNOMSTOtcc0ccsixzFoxZ3ts7adH1k-Z-xbveB6_Xk4SP7sOA6ryu6W_SEJbbL50n4eLlbfGQIgR0jLMsTBn486ge6VrwoQ79uvnvUzN5nY1y_RWwSOAfTrYEWUq9SKVoKoJUG0Yry-_aB2FjSeogRcYCZRqJhc0Ksg7x2Scszaj1AObzz-xghply7mqEA_ToyNfbwc3OXUca5nhqreyernEXxnR5_y0S1Jf5j6JK9D9F20OEpIoFx_EG_v8JYb8GFhJflMHu4gg" alt="GLE 53 Hybrid" />
                  <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-on-primary font-label-sm uppercase tracking-widest text-[10px]">New</span>
                </div>
                <div className="px-6 pb-8">
                  <p className="text-outline font-label-sm uppercase mb-1">GLE SUV</p>
                  <h4 className="font-headline-h3 text-2xl mb-4">GLE 53 Hybrid</h4>
                  <div className="flex justify-between items-center border-t border-outline-variant pt-4">
                    <span className="font-body-md text-primary">From $86,750</span>
                    <button className="flex items-center gap-2 group/btn font-label-sm text-on-surface uppercase">
                      Explore
                      <span className="material-symbols-outlined text-sm group-hover/btn:translate-x-1 transition-transform">arrow_forward</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="w-full py-20 px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10 font-['Playfair_Display'] text-sm tracking-tight">
        <div>
          <div className="text-lg font-semibold text-white mb-6 uppercase tracking-[0.2em]">Mercedes-Benz</div>
          <p className="text-zinc-500 leading-relaxed max-w-xs font-['DM_Sans']">
            The pinnacle of automotive engineering and luxury. Crafting the world's most desirable cars since 1886.
          </p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <ul className="space-y-4">
            <li><a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 block" href="#">Cars</a></li>
            <li><a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 block" href="#">My Orders</a></li>
            <li><a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 block" href="#">Wishlist</a></li>
            <li><a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 block" href="#">Test Drive</a></li>
          </ul>
          <ul className="space-y-4">
            <li><a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 block" href="#">Service</a></li>
            <li><a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 block" href="#">Contact</a></li>
            <li><a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 block" href="#">Legal</a></li>
            <li><a className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 block" href="#">Privacy</a></li>
          </ul>
        </div>
        <div className="flex flex-col justify-between">
          <div className="flex gap-6 mb-10">
            <span className="material-symbols-outlined text-[#C8A97E]">social_leaderboard</span>
            <span className="material-symbols-outlined text-[#C8A97E]">retweet</span>
            <span className="material-symbols-outlined text-[#C8A97E]">video_youtube</span>
          </div>
          <p className="text-zinc-600 font-['DM_Sans'] text-xs">
            © 2024 Mercedes-Benz Pakistan. All rights reserved.
          </p>
        </div>
      </footer>
    </>
  );
}
