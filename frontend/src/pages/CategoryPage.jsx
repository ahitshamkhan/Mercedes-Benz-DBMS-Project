import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getCarsByCategory } from '../api/cars'

const CATEGORY_INFO = {
  'Sedan':           { title: 'Luxurious Sedans', subtitle: 'Exquisite Engineering', desc: 'Experience the pinnacle of automotive comfort and technological advancement. Our sedans redefine the journey, blending timeless elegance with modern performance.' },
  'SUV':             { title: 'Commanding SUVs', subtitle: 'Dominating Presence', desc: 'Command the road with unrivaled luxury and capability. Our SUVs combine all-terrain prowess with the refinement expected of the three-pointed star.' },
  'AMG Performance': { title: 'AMG Performance', subtitle: 'Handcrafted Power', desc: 'Born on the racetrack, perfected for the road. AMG vehicles deliver an adrenaline-fueled driving experience unlike any other.' },
  'Electric (EQ)':   { title: 'Electric Future', subtitle: 'Progressive Luxury', desc: 'Pioneering the future of mobility. Our EQ range delivers silent power, zero emissions, and the luxury you expect from Mercedes-Benz.' },
}

const FALLBACK_CARS = [
  { id: 10, name: 'E-Class Sedan', category: 'Sedan', price: '$56,750', hp: '255 HP', badge: 'New Arrival', spec2Label: 'Type', spec2Value: 'Mild Hybrid', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC3VzuzdKpzb7KiAXagkktUCQlnoG_xHwvwy_2WwR6DTsaO5T1KqJbcc4JMQAfiIzzDQVR7x7QHzGewgvM5j4ZJ84BG5QegF5n7ESQ-ykN1u_H9O5GNWsXr1NhdK_yPAiGpGwKzMWk6MxkqB8wDKBbAm6CcjoyPzPXDFvtsmXwdFP2fBpNt0oBtQ12H5rGBJNPphAJZ1iG_wcEUdUqBez4tRMpEBpptZ5ltj2jhAKEfVSNn7y9MGAcdK6ewMQw8LOiIWr3XjMaME9w' },
  { id: 11, name: 'S-Class Sedan', category: 'Sedan', price: '$114,500', hp: '496 HP', badge: null, spec2Label: 'Drive', spec2Value: '4MATIC®', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBkb1TGM2Qot2swVld1c9HYKTOW5eV3CNhY0ydvsB8zqRB1aGmK_Zz-4TCeeBZRko15_YavHtYGWm4FrMk4ZUgWQ6uta_laqOe1jtyL0G2L-9hQkL7fH0EsFf47lSxLgFQrJ6JYNegLwIucbWRckvNAmtsW7rwR6xnfmgn3xDX0RUphpBwrz1qQShs797z1S7Uq18M9XvmlWja7g1LKP1NRK3ssbbCMqWiCCqj2W1eGJRTw2QEmL2bNpGDYsg5oMuyKDEP63L5sGRo' },
  { id: 12, name: 'C-Class Sedan', category: 'Sedan', price: '$46,950', hp: '255 HP', badge: null, spec2Label: 'Tech', spec2Value: 'MBUX AI', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBn7-N28svcGFdrUkAC8ksJbHuEm2kyOFF6nej3tLXI-reWkZRIu88SCn25r-n99NuOF3ZVy9nt1TX4mtSoWT0qw3a7Y6N-9iMh7O679RROIcHBp3H7Vw8oqGhEOrLduzv_5YOhmVNxjELkZy20WWir3qnNIwt5fzAVFmKlISvebvN-xlMZc3WrjPBJLaULKl8K7Ko6GH-rNhi5Mb4nUGDyEAuxbOJFdbUijYJjV98BMnTsTbsKf7_jjmg1YZnUgQctWeMhBHVVchQ' },
  { id: 13, name: 'Mercedes-Maybach', category: 'Sedan', price: '$215,900', hp: '621 HP', badge: 'Flagship', spec2Label: 'Class', spec2Value: 'Ultra Luxury', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBcjCog6fUwqAJqzDL3Ej7L460pZ4FwSM29DHy_apypV6Ra8GWHyj3-9-RbyH5oM0QwpMPO_eXubbokiXmWjDqbahcHLrayawSTRuD0RV_Y0HZUSjAhcbU8Y7r21sR327yo4kuOt2PFlOzdoK93tT_lMpL3xNjKz2k2h9R2PdEaAwkDD8Kt3jZaeWy-PrkrpwQWB2_8uSreh55vf3TIvxjQV6YkytqUpDhKbtQCs3MPQtqPbXpJH-9v46VW3fLDEhZhEeDl-FnD_SQ' },
  { id: 14, name: 'AMG GT 4-Door', category: 'AMG Performance', price: '$95,900', hp: '577 HP', badge: null, spec2Label: 'Type', spec2Value: 'Performance', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDmA3K6UzDh71U5s4NaEkfrxmTWixnHE8iXW5iDjTHt_1WqKiyitVuAJNU8P-UZR7B2l25Dqo-5qre7SynolCmsEdnMhLb2FbagwsF9YrmsrhFSHIuG-3-aTzqJ2c05xf1_Ufv8z_S0X6zfi382Fo7bbEFJdJUrrSJR9WxLy7KAbezjfbg94tyguzA8-BO6ARMmkig-9aXzOoa9e7m0QJlr4yEjbF5dkIcoLjChWOef3al2aImE-lwzbprfgYAx0-NyiGO_TVUlUww' },
]

export default function CategoryPage() {

  const { category } = useParams()
  const { isLoggedIn, user, logout } = useAuth()

  const [cars, setCars]     = useState([])
  const [loading, setLoading] = useState(true)
  const [sortBy, setSortBy]   = useState('newest')

  const info = CATEGORY_INFO[category] || { title: category, subtitle: 'Explore', desc: 'Discover our exclusive collection.' }

  useEffect(() => {
    const fetchCars = async () => {
      setLoading(true)
      try {
        const res = await getCarsByCategory(category)
        setCars(res.data)
      } catch (err) {
        setCars(FALLBACK_CARS.filter(c => c.category === category || !category))
      } finally {
        setLoading(false)
      }
    }
    fetchCars()
  }, [category])

  const sortedCars = [...cars].sort((a, b) => {
    if (sortBy === 'price-low') return parseInt(a.price?.replace(/\D/g,'') || 0) - parseInt(b.price?.replace(/\D/g,'') || 0)
    if (sortBy === 'price-high') return parseInt(b.price?.replace(/\D/g,'') || 0) - parseInt(a.price?.replace(/\D/g,'') || 0)
    return 0
  })

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E] text-2xl">star</span>
          <Link to="/" className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</Link>
        </div>
        <nav className="hidden md:flex gap-10">
          <Link className="font-label-sm text-label-sm text-[#C8A97E] border-b border-[#C8A97E] pb-1" to="/">Cars</Link>
          <Link className="font-label-sm text-label-sm text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" to="/book-test-drive">Test Drive</Link>
          <Link className="font-label-sm text-label-sm text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" to="/service-booking">Service</Link>
          <Link className="font-label-sm text-label-sm text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300" to="/about">Contact</Link>
        </nav>
        {isLoggedIn ? (
          <div className="flex items-center gap-4">
            <Link to="/profile" className="text-zinc-400 hover:text-[#C8A97E] font-label-sm text-label-sm uppercase tracking-widest transition-colors">{user?.name || 'Profile'}</Link>
            <button className="px-6 py-2 border border-[#C8A97E]/40 text-[#C8A97E] font-label-sm text-label-sm hover:bg-[#C8A97E] hover:text-background transition-all duration-300 uppercase tracking-widest" onClick={logout}>Logout</button>
          </div>
        ) : (
          <Link to="/login" className="px-6 py-2 border border-[#C8A97E]/40 text-[#C8A97E] font-label-sm text-label-sm hover:bg-[#C8A97E] hover:text-background transition-all duration-300 uppercase tracking-widest">Sign In</Link>
        )}
      </header>

      <main className="pt-20">
        <section className="relative h-[618px] w-full overflow-hidden flex items-center px-6 md:px-20">
          <div className="absolute inset-0 z-0">
            <img className="w-full h-full object-cover brightness-[0.4]" src="https://lh3.googleusercontent.com/aida-public/AB6AXuDEzXbaidFGbExyh1xYw6cQ-n7aRGHfS4BMz-Yt-nSkt8T0fJNbR-F5s0KH7TXwjlGxljEOjgvIleuColDS1w3sAWGh-SxXAECwJQ2Vr_cHLk1Grlv2XH3uSFyFCbvrL-0G3LcXAYCFNg0xTSkzIFnU3KgAhbqzeeiqxpGfRVV_oQpx1igcQbJuHK6XHPK_hmTmA7gVZutarLTAFwX9JKa8O8JwwybSprUtqPWD4Oh5cnY8F6UMxOgfBAK_pgs3Gc1tmp1hfWv1GXk" alt={info.title} />
            <div className="absolute inset-0 bg-gradient-to-t from-surface-container-lowest via-transparent to-transparent"></div>
          </div>
          <div className="relative z-10 max-w-4xl animate-fade-up">
            <span className="font-label-sm text-label-sm text-primary uppercase tracking-[0.3em] mb-4 block">{info.subtitle}</span>
            <h1 className="font-display-lg text-display-lg text-on-background mb-6">{info.title}</h1>
            <p className="font-body-lg text-body-lg text-on-surface-variant max-w-2xl">{info.desc}</p>
          </div>
        </section>

        <section className="sticky top-20 z-40 bg-surface-container-lowest/80 backdrop-blur-xl border-y border-[#C8A97E]/10 px-6 md:px-20 py-6 flex justify-between items-center">
          <div className="flex items-center gap-8">
            <Link to="/" className="flex items-center gap-2 group">
              <span className="material-symbols-outlined text-primary text-xl">arrow_back</span>
              <span className="font-label-sm text-label-sm text-on-background group-hover:text-primary transition-colors">All Cars</span>
            </Link>
            <div className="h-4 w-px bg-[#C8A97E]/20"></div>
            <span className="font-label-sm text-label-sm text-on-surface-variant">
              {loading ? 'Loading...' : `Showing ${sortedCars.length} Models`}
            </span>
          </div>
          <div className="flex items-center gap-4">
            <span className="font-label-sm text-label-sm text-on-surface-variant uppercase">Sort By:</span>
            <select
              className="bg-transparent border-none font-label-sm text-label-sm text-on-background focus:ring-0 cursor-pointer"
              value={sortBy}
              onChange={(e) => setSortBy(e.target.value)}
            >
              <option className="bg-surface-container-highest" value="newest">Newest Arrivals</option>
              <option className="bg-surface-container-highest" value="price-low">Price: Low to High</option>
              <option className="bg-surface-container-highest" value="price-high">Price: High to Low</option>
            </select>
          </div>
        </section>

        <section className="px-6 md:px-20 py-24">
          {loading ? (
            <div className="flex justify-center items-center py-20">
              <span className="material-symbols-outlined text-primary text-4xl animate-spin">progress_activity</span>
            </div>
          ) : sortedCars.length === 0 ? (
            <div className="text-center py-20">
              <span className="material-symbols-outlined text-zinc-600 text-6xl mb-4">search_off</span>
              <p className="text-zinc-500 font-body-lg">No models found in this category.</p>
              <Link to="/" className="text-primary font-label-sm uppercase mt-6 inline-block">Browse All Cars</Link>
            </div>
          ) : (
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
              {sortedCars.map((car, index) => (
                <div key={car.id || index} className={`group animate-fade-up ${index === 3 ? 'lg:col-span-2' : ''}`}>
                  <Link to={`/car/${car.id}`}>
                    <div className="relative aspect-[16/10] overflow-hidden border border-[#C8A97E]/15 bg-surface-container mb-6">
                      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={car.image} alt={car.name} />
                      {car.badge && (
                        <div className="absolute top-4 right-4 px-3 py-1 bg-primary text-background font-label-sm text-[10px] uppercase tracking-tighter">{car.badge}</div>
                      )}
                    </div>
                    <div className="flex justify-between items-start mb-2">
                      <h3 className="font-headline-h3 text-headline-h3 text-on-background">{car.name}</h3>
                      <span className="font-label-sm text-label-sm text-primary">Starting at {car.price}</span>
                    </div>
                  </Link>
                  <div className="flex items-center gap-6">
                    <div className="flex items-center gap-2">
                      <span className="material-symbols-outlined text-primary text-sm">speed</span>
                      <span className="font-label-sm text-[10px] text-on-surface-variant">{car.hp}</span>
                    </div>
                    {car.spec2Value && (
                      <div className="flex items-center gap-2">
                        <span className="material-symbols-outlined text-primary text-sm">auto_awesome</span>
                        <span className="font-label-sm text-[10px] text-on-surface-variant">{car.spec2Value}</span>
                      </div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          )}
        </section>

        <section className="mx-6 md:mx-20 my-32 py-24 border border-[#C8A97E]/10 bg-surface-container-low flex flex-col items-center text-center relative overflow-hidden">
          <div className="absolute top-0 right-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -mr-32 -mt-32"></div>
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-primary/5 rounded-full blur-3xl -ml-32 -mb-32"></div>
          <h2 className="font-headline-h2 text-headline-h2 text-on-background mb-8">Can't Decide?</h2>
          <p className="font-body-lg text-on-surface-variant max-w-xl mb-12">Compare our models side-by-side to find the perfect balance of performance and luxury for your lifestyle.</p>
          <div className="flex gap-6">
            <Link to="/" className="px-10 py-4 bg-primary text-on-primary font-label-sm text-label-sm tracking-widest uppercase hover:opacity-90 transition-opacity">Browse All Models</Link>
            <Link to="/book-test-drive" className="px-10 py-4 border border-primary text-primary font-label-sm text-label-sm tracking-widest uppercase hover:bg-primary/10 transition-colors">Book Test Drive</Link>
          </div>
        </section>
      </main>

      <footer className="w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div className="flex flex-col gap-8">
          <Link to="/" className="text-lg font-semibold text-white font-['Playfair_Display']">Mercedes-Benz</Link>
          <p className="font-['Playfair_Display'] text-sm text-zinc-500 max-w-xs leading-relaxed">Defining luxury mobility since 1886. Excellence in every detail, performance in every mile.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Experience</h4>
            <Link className="font-['Playfair_Display'] text-sm text-zinc-500 hover:text-white hover:translate-x-1 transition-all duration-200" to="/">Cars</Link>
            <Link className="font-['Playfair_Display'] text-sm text-zinc-500 hover:text-white hover:translate-x-1 transition-all duration-200" to="/book-test-drive">Test Drive</Link>
            <Link className="font-['Playfair_Display'] text-sm text-zinc-500 hover:text-white hover:translate-x-1 transition-all duration-200" to="/service-booking">Service</Link>
            <Link className="font-['Playfair_Display'] text-sm text-zinc-500 hover:text-white hover:translate-x-1 transition-all duration-200" to="/my-orders">My Orders</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold text-xs uppercase tracking-widest mb-2">Legal</h4>
            <a className="font-['Playfair_Display'] text-sm text-zinc-500 hover:text-white hover:translate-x-1 transition-all duration-200" href="#">Privacy</a>
            <a className="font-['Playfair_Display'] text-sm text-zinc-500 hover:text-white hover:translate-x-1 transition-all duration-200" href="#">Legal</a>
            <Link className="font-['Playfair_Display'] text-sm text-zinc-500 hover:text-white hover:translate-x-1 transition-all duration-200" to="/about">Contact</Link>
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h4 className="text-white font-bold text-xs uppercase tracking-widest">Stay Informed</h4>
          <div className="relative">
            <input className="w-full bg-transparent border-b border-zinc-800 py-3 font-['Playfair_Display'] text-sm focus:border-[#C8A97E] outline-none transition-colors" placeholder="Email Address" type="email" />
            <button className="absolute right-0 top-3 text-[#C8A97E]">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <p className="font-['Playfair_Display'] text-[10px] text-zinc-600 uppercase tracking-tighter">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
