import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getNewArrivals } from '../api/cars'

const FEATURED = [
  { id: 20, name: 'EQS Maybach Night Series', label: 'World Premiere', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBO0JUD2Q9m9bbNn5885x581lrLHtuoAUFZ0Wk12wx0fu7lglz32uK5BSFgQKhPeaXO7PspEsFJgRUJZip4_PYuSqFju0rZvWNA0dNxuiMNxefr2kkm0xbN5Gx1EJzdI8ySgNM4ZOCa4QltTZ9-7PY1wPCBlepsCxPSIK4FjZrHYt46rM1V95TBu7ExoqriTPFKakQ40URYifYO2-8_ZSgEbOFo3HRRyhhbrzBSktbEPFTC6a1EZr7xsto0n0dHz6vuyqbqaX7lo3w' },
  { id: 21, name: 'AMG GT 63 Coupe SE', label: 'Performance Core', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD0gRqbPK6fLrl73ZS_sdemqZ9IpOuuaiQTB51_hSnl69-_wsSJ-XC5gN1fQTzC_ad7uf6zBlmLRj2_pvHU9crFfwKj_iRri97SEY2rOBGGeNmHyRaI6RpcdQQtOvUB1al6gTTDDzpgEDE12_7C9LQnxDp_-vbuLRvlVJo1oMWlvePrK-Hoa2Hu6RP7a0vwTa_2F0k3hIPNl1lxOl4M55offVkVCYSWs9RGetcIemBn_l22K8FHfkPs0ywnriVI71ON0umCJ5oAyYM' },
  { id: 22, name: 'S-Class Pinnacle Edition', label: 'Intelligence Redefined', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuA9UJnUPl8m2hHKS0vl4H5O4XwRUE9vMpCSHSJOZhmkQxSPaKuxch0ZNMs5DIFlWP-ji-GR2DbCtVYs5G1ibbKdy_c27S1IvbdvOKgM2YZ5nJYqzW-l-KY7aDZLNXMJuFvxtUZPsS80Hnu-yDMeQgGDOQAvT77aYdE4wq9UqGiaCkBcl1a9_XcPArZDRVQxPZkRDYTakxjPE6Nk0I3JJWRmqvGk7Fkoobt9xmSI0IbdPYGWvx4yEJjsTnFp6FwD549eJ-U4D28aBu8' },
]

const GRID_CARS = [
  { id: 30, cat: 'C-Class Sedan', name: 'C 300 Night Edition', price: 'From $46,950', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBCSSGkqsqMU8aNWqd6upRNE8x6eKEfpYS5JiP8tw0BDIirtXMJfbhOHRFz5LFTxP7aDMk0AaYWyVqzshw6IIhn7zs6exmx3Y49z4l_HT6Z0ATW6hi3QaanOzRdZACnLWnqgvu5kngXhbGucR1kGnthVSLEEczNAWVERRihbJLfAIO791htzni3x8CIUvPdgcDN0Hk4kFsmps8Dm8FATBxgwstFrnMQ_WvcZmzqZseGc1CRyghlR9pdvDzSnRYOuy99H6ITP3KzQgk' },
  { id: 31, cat: 'G-Class Offroad', name: 'G 63 Desert Rose', price: 'From $179,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBBddNjSjTTaYajtxyvxgoutglR9ilNpUPDW8OcPK09P8UOBuUSYrbq9juof48O-FSpFVM00oz959NkQjaXvmicle-UYPyK3Bxzi6jjQkG4DD_kKtbkJsTBfsyUkWUdTNZnj4mLHdhwFlM7KUIC3gA7KnvFrnoxgZ-xxZixIvti3eSG9JyoPTekPqIZ29hP0_NkNvo-8LJxLI3W7PXktG-gK8EOEWrQt0VJX1B1buVFug5EsIE6lj_ONfGam_EIwOosuBWewvYr4CM' },
  { id: 32, cat: 'EQE SUV', name: 'EQE 350+ Luxury', price: 'From $77,900', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBaymZFx9yMkElBpeLMmKv8WlelS7hypzZDXJFV1BaCdQL4zdxDPlTNMO6FdGbvjLxv2N4NU86ZJ3-ize8AmFyNKJni3S0HisOGiTONP0peavl1MVFQfBNrKv05WgvOCv0SS8HAIdjpds45dESVv16MMVrY9c9uP74hrJoD5kF-4q1HiU0DVX2evXqOSD3QkIfxx_ly_vV0OVbeeHXb1WnoARQOpggGBglD2tsF4tzLMLcq6A5JRpw0HU90bh-WxXekZN8pLXn9Cqw' },
  { id: 33, cat: 'E-Class Sedan', name: 'E 450 4MATIC', price: 'From $68,100', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC_cGuL5yxPMpRJWTA1t_7a1TacpCo1RPCFJyttL45XnS1IHT2P5qmepVCNRuq7E-0ge7MYXeOPTtRYCez0mAy4_VStsaWmW_pIHR2iCVzkOFS5R3MlXT6X0iBSTlFNWaEwisfVCsoiXFIxC2jcj636WqvhgG3Y_S9lbjvzuCVjvMSmcOM51ocMKHX9uHrEbALTfEJOe6kLVulKqv8xXPZRP_q84X2IhnbpMj6SkTIdfmVy-KhQE3lmg80eYgXExzkUPWTHr1LMDAg' },
  { id: 34, cat: 'AMG SL Roadster', name: 'SL 63 Performance', price: 'From $183,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAvEX4HAu3fuxnVO99KK-SLAIt4cjV7p-CMZRUblDcboFM-T53zw7ynYVMYIYGuQA2J2m3bEmadqMy0r6ktLO5TVzntnuTILUMB2581wP56b6CqTk1iBSGhvKRYut5Vw06P1DOQohVTneBJyOUzix4QxRh1zi6MpfsGkv-qnKA23dDnNv_emTzqEco1nD31hFGRUrhIXTDRp0Ul2awTmcGlujGF0Weux5tkQwgERqLnS2G5GXLMnLmY5ichG-2VTXdZDk29Dt-7uPs' },
  { id: 35, cat: 'GLE SUV', name: 'GLE 53 Hybrid', price: 'From $86,750', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCjNOMSTOtcc0ccsixzFoxZ3ts7adH1k-Z-xbveB6_Xk4SP7sOA6ryu6W_SEJbbL50n4eLlbfGQIgR0jLMsTBn486ge6VrwoQ79uvnvUzN5nY1y_RWwSOAfTrYEWUq9SKVoKoJUG0Yry-_aB2FjSeogRcYCZRqJhc0Ksg7x2Scszaj1AObzz-xghply7mqEA_ToyNfbwc3OXUca5nhqreyernEXxnR5_y0S1Jf5j6JK9D9F20OEpIoFx_EG_v8JYb8GFhJflMHu4gg' },
]

export default function NewArrivals() {
  const { isLoggedIn, user, logout } = useAuth()
  const [cars, setCars] = useState(GRID_CARS)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getNewArrivals()
        setCars(res.data)
      } catch { setCars(GRID_CARS) }
      finally { setLoading(false) }
    }
    fetchData()
  }, [])

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]">star</span>
          <Link to="/" className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</Link>
        </div>
        <nav className="hidden md:flex items-center gap-10 font-['Playfair_Display'] text-sm tracking-tight">
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors" to="/">Home</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors" to="/">Cars</Link>
          <Link className="text-[#C8A97E] border-b border-[#C8A97E] pb-1" to="/new-arrivals">New Arrivals</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors" to="/book-test-drive">Test Drive</Link>
        </nav>
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <Link to="/profile" className="text-zinc-400 hover:text-[#C8A97E] font-label-sm uppercase transition-colors">{user?.name || 'Profile'}</Link>
            <button className="px-6 py-2 border border-[#C8A97E]/40 text-[#C8A97E] font-label-sm uppercase hover:bg-[#C8A97E]/10 transition-all" onClick={logout}>Logout</button>
          </div>
        ) : (
          <Link to="/login" className="px-6 py-2 border border-[#C8A97E]/40 text-[#C8A97E] font-label-sm uppercase hover:bg-[#C8A97E]/10 transition-all">Sign In</Link>
        )}
      </header>

      <main className="pt-32 pb-40">
        <section className="px-6 md:px-20 mb-24">
          <div className="max-w-container-max mx-auto">
            <div className="inline-block mb-6">
              <span className="text-primary font-label-sm uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-primary/20 bg-primary/5 backdrop-blur-sm">✨ Future of Luxury</span>
            </div>
            <h1 className="font-headline-h1 text-on-background mb-6 text-5xl md:text-6xl animate-fade-up">New Arrivals 2026</h1>
            <p className="text-on-surface-variant max-w-xl font-body-lg mb-8 animate-fade-up" style={{animationDelay: '100ms'}}>Discover the latest Mercedes-Benz masterpieces, engineered with cutting-edge technology and timeless elegance.</p>
            <div className="w-24 h-1 bg-gradient-to-r from-primary to-primary/0 rounded-full"></div>
          </div>
        </section>

        <section className="mb-section-gap overflow-hidden">
          <div className="flex gap-8 px-6 md:px-20 overflow-x-auto hide-scrollbar snap-x snap-mandatory">
            {FEATURED.map((f, idx) => (
              <Link key={f.id} to={`/car/${f.id}`} className="flex-none w-[80vw] md:w-[60vw] aspect-[21/9] snap-center relative overflow-hidden group gold-hairline bg-surface-container-lowest animate-fade-up transition-all duration-700" style={{animationDelay: `${idx * 100}ms`}}>
                <img className="absolute inset-0 w-full h-full object-cover grayscale-[0.2] group-hover:scale-105 transition-transform duration-700" src={f.image} alt={f.name} />
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent group-hover:from-black/70 transition-all duration-500"></div>
                <div className="absolute inset-0 bg-gradient-to-r from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                <div className="absolute bottom-10 left-10 text-white">
                  <span className="text-primary font-label-sm uppercase tracking-widest mb-3 block group-hover:translate-x-2 transition-transform duration-300">{f.label}</span>
                  <h3 className="font-headline-h2 text-3xl group-hover:translate-x-2 transition-transform duration-300">{f.name}</h3>
                </div>
                <div className="absolute top-6 right-6 opacity-0 group-hover:opacity-100 transition-all duration-500 translate-x-4 group-hover:translate-x-0">
                  <span className="material-symbols-outlined text-primary">arrow_outward</span>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="px-6 md:px-20 mb-20">
          <div className="max-w-container-max mx-auto">
            <div className="mb-12">
              <h2 className="font-headline-h2 text-on-background mb-2">Curated Collection</h2>
              <p className="text-on-surface-variant font-body-lg">Handpicked selections from our latest inventory</p>
            </div>
            {loading ? (
              <div className="flex justify-center py-20">
                <div className="relative w-16 h-16">
                  <div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
                  <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin"></div>
                </div>
              </div>
            ) : (
              <div className="grid grid-cols-1 md:grid-cols-3 gap-10">
                {cars.map((car, idx) => (
                  <div key={car.id} className="bg-[#111118] gold-hairline p-1 group gold-glow transition-all duration-500 hover:shadow-2xl hover:shadow-primary/20 animate-fade-up" style={{animationDelay: `${idx * 50}ms`}}>
                    <Link to={`/car/${car.id}`}>
                      <div className="relative overflow-hidden aspect-[4/3] bg-surface-container-low mb-6">
                        <img className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700" src={car.image} alt={car.name} />
                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
                        <span className="absolute top-4 left-4 px-3 py-1 bg-primary text-on-primary font-label-sm uppercase tracking-widest text-[10px] group-hover:translate-x-1 transition-transform duration-300">New</span>
                        <div className="absolute bottom-4 right-4 w-10 h-10 rounded-full bg-primary/10 group-hover:bg-primary/30 transition-all duration-500 flex items-center justify-center opacity-0 group-hover:opacity-100">
                          <span className="material-symbols-outlined text-primary text-lg">arrow_outward</span>
                        </div>
                      </div>
                      <div className="px-6 pb-8">
                        <p className="text-outline font-label-sm uppercase mb-1 group-hover:text-primary transition-colors duration-300">{car.cat}</p>
                        <h4 className="font-headline-h3 text-2xl mb-4">{car.name}</h4>
                        <div className="flex justify-between items-center border-t border-outline-variant pt-4">
                          <span className="font-body-md text-primary">{car.price}</span>
                          <span className="flex items-center gap-2 font-label-sm text-on-surface uppercase">
                            Explore
                            <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
                          </span>
                        </div>
                      </div>
                    </Link>
                  </div>
                ))}
              </div>
            )}
          </div>
        </section>
      </main>

      <footer className="w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10 font-['Playfair_Display'] text-sm">
        <div>
          <Link to="/" className="text-lg font-semibold text-white uppercase tracking-[0.2em] block mb-6">Mercedes-Benz</Link>
          <p className="text-zinc-500 leading-relaxed max-w-xs font-['DM_Sans']">The pinnacle of automotive engineering and luxury. Crafting the world's most desirable cars since 1886.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <ul className="space-y-4">
            <li><Link className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 block" to="/">Cars</Link></li>
            <li><Link className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 block" to="/my-orders">My Orders</Link></li>
            <li><Link className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 block" to="/wishlist">Wishlist</Link></li>
            <li><Link className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 block" to="/book-test-drive">Test Drive</Link></li>
          </ul>
          <ul className="space-y-4">
            <li><Link className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 block" to="/service-booking">Service</Link></li>
            <li><Link className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform duration-200 block" to="/about">Contact</Link></li>
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
          <p className="text-zinc-600 font-['DM_Sans'] text-xs">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
