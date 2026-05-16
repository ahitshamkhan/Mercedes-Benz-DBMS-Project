import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getAllCars } from '../api/cars'

const FALLBACK_CARS = [
  {
    id: 1,
    name: 'S-Class 500',
    category: 'Sedan',
    price: 45000000,
    description: 'Experience the definition of luxury. Standard-setting innovation meets classic elegance.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF2nwKtksaHt9t6QnLTpWSgtK6Pt915fn0JaPCILM9aFxjGj8jg0wK0n4FyqlCyaGh4VBvMnLOzQ8QI6-alI2GOwMY2QHLr_cV6buii3zXpc-FXL6d-zEklIgOxO2xD20q_Bg_OdmJahXJ1WNfmhPUEe3lnRLkM7UoaDUTNp4ARTHZQ83nENKmjTGziF5KVTdyVXInEbsoXNz2IB8H2Iw-Ooyx-OS5819s6hrkaUfodIDu8snuehVEi6ZjeETW8XNIWUXOxLCrzt8',
    icon: 'electric_bolt',
    is_new: false,
  },
  {
    id: 2,
    name: 'AMG GT Coupe',
    category: 'AMG Performance',
    price: 38500000,
    description: 'Precision-tuned by masters at Affalterbach. Raw power meets uncompromising control.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGPtgqztZ7krzZvDPb_iRMLgcbpDaZeandO_JVtW3MBJxAz-vyhq8nA0MlDAgDMHnuDnY_e509ln1eIeUJdIanpdg9DxIRk8cL9DMhoJoIFCNi6EWwRoqPT86dsk8hgh_YlfluUjN-DpsggFeLACxwsrPDPtEm7U58rfoNUxj7O17Kflov-DZj5jtF4EA0M5f8UCJ0IgIQjxVn9IUI_Av9Vm7DlrAdD9jVW6FA_7_nBU9FC864i8n6Zu11iESvHcdXI_FKDE1RgqU',
    icon: 'speed',
    is_new: false,
  },
  {
    id: 3,
    name: 'G-Wagon G63',
    category: 'SUV',
    price: 49900000,
    description: 'Iconic design that defies time and terrain. Hand-crafted perfection for the boldest journeys.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtrSSDrVPjp8tfPWL0ex9g4Kj2hI1iAYfaKIgRMB17dhqCbc3O4cYFCNwIX4MVQbYznPvEh0Yd0SkYt1XGQyKQFirEBCGuEYwUGAQF3E_P-x2Wg9hes_-lshpH-a2xY_jjJqcZznbrWGZc-62l5j0-Sgj2adJocCMc_768JX5OSUYntuTfpMhRQTopS2PpSB_5-aLgSCeQFRcXcP8KrgWPgruKgt5D3kltZ8TEXqHCSzBo1GeBZYk811YjWGqpImqkg4PkRU1O_Hc',
    icon: 'terrain',
    is_new: false,
  },
  {
    id: 4,
    name: 'The EQS Sedan',
    category: 'Electric (EQ)',
    price: 42000000,
    description: 'Leading the world into a new era of electric mobility. Intelligent, silent, and entirely groundbreaking.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzqTSa4AhOTZWRh_rDJ0D9NAHfKQA054owNTcBkcxluIB72NqWmDdedHmzoXj_xjZ8Z8DY133Pbq1zh3AFj7EUi4NFzj0cwJFSjeCdQeJC7t1k7mNpUhVex9d6KjXG4pOBcKj5IZGSws5qIbsmrdVKA73rbH4fZLRShmRO0bnDlujgRnwEPd-G9JInUvZ1EQulS4ZrmwrWVoy_OPyEuDomWX4fNWD_gPDyXxakkSRNm9j0U-0MsS3iYdsWn_LZj_q68FKrSX3EGmQ',
    icon: 'eco',
    is_new: true,
  },
  {
    id: 5,
    name: 'C-Class Sedan',
    category: 'Sedan',
    price: 18500000,
    description: 'The benchmark for executive sedans. Dynamic agility meets refined comfort.',
    image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCeOQ-Z2OTizI5Bu4yTAwHK6qzZXHnNOhGcVNnpS4-ytTAn2KETnzkDi2NTKaQ6foxdwabkB3BGBRlL5QCI1GiA6_e2TF_ffam6WeLQO9SiRllxbCbta_dpy9XH8XC5o2JQpWGH_N-sc_DiWtdjSEOzQOTqt2QgwN1nyYIiWtmf5oJKs7e1BsgwGWqudsEx3iqg-F9ZceLtn1LvB1s-fnC8KISF4xvpHWWoBQiSeE-QQU-ZVyq0DKn3-5WiFivPSbsI4C7iRoCzDx8',
    icon: 'business_center',
    is_new: false,
  },
]

export default function Home() {

  const [cars, setCars]             = useState([])
  const [loading, setLoading]       = useState(true)
  const [error, setError]           = useState('')
  const [category, setCategory]     = useState('All Categories')
  const [year, setYear]             = useState('2024')
  const [priceRange, setPriceRange] = useState(50)
  const [searchQuery, setSearchQuery] = useState('')
  const [showSearch, setShowSearch]   = useState(false)

  const { isLoggedIn, user, logout } = useAuth()
  const navigate = useNavigate()

  useEffect(() => {
    const fetchCars = async () => {
      try {
        const res = await getAllCars()
        const mapped = res.data.map(c => ({
          ...c,
          name: c.model || c.name,
          image: c.primary_image || c.image,
          is_new: c.is_new_arrival || c.is_new || false,
        }))
        setCars(mapped)
      } catch (err) {
        setCars(FALLBACK_CARS)
      } finally {
        setLoading(false)
      }
    }
    fetchCars()
  }, [])

  const filteredCars = cars.filter(car => {
    const matchCategory = category === 'All Categories' || car.category === category
    const matchPrice = car.price <= priceRange * 1000000
    const matchSearch = car.name.toLowerCase().includes(searchQuery.toLowerCase())
    return matchCategory && matchPrice && matchSearch
  })

  const formatPrice = (price) => {
    return 'PKR ' + price.toLocaleString()
  }

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <Link to="/" className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</Link>
        </div>
        <nav className="hidden md:flex items-center gap-12">
          <Link className="font-label-sm text-[#C8A97E] border-b border-[#C8A97E] pb-1 uppercase" to="/">Cars</Link>
          <Link className="font-label-sm text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 uppercase" to="/category/AMG Performance">AMG Performance</Link>
          <Link className="font-label-sm text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 uppercase" to="/category/Electric (EQ)">Electric</Link>
          <Link className="font-label-sm text-zinc-400 hover:text-[#C8A97E] transition-colors duration-300 uppercase" to="/about">Discover</Link>
        </nav>
        <div className="flex items-center gap-8">
          <span
            className="material-symbols-outlined text-zinc-400 hover:text-[#C8A97E] cursor-pointer transition-colors"
            onClick={() => setShowSearch(!showSearch)}
          >search</span>
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Link to="/profile" className="font-label-sm text-zinc-400 hover:text-[#C8A97E] transition-colors uppercase">
                {user?.name || 'Profile'}
              </Link>
              <button
                className="font-label-sm text-[#C8A97E] border border-[#C8A97E]/40 px-6 py-2 uppercase hover:bg-[#C8A97E]/10 transition-all duration-300"
                onClick={logout}
              >Logout</button>
            </div>
          ) : (
            <Link to="/login" className="font-label-sm text-[#C8A97E] border border-[#C8A97E]/40 px-6 py-2 uppercase hover:bg-[#C8A97E]/10 transition-all duration-300">
              Sign In
            </Link>
          )}
        </div>
      </header>

      {showSearch && (
        <div className="fixed top-20 w-full z-40 bg-zinc-950/95 backdrop-blur-xl border-b border-[#C8A97E]/10 p-6">
          <div className="max-w-2xl mx-auto relative">
            <input
              className="w-full bg-transparent border-b border-[#C8A97E]/30 py-4 text-white font-body-md focus:outline-none focus:border-[#C8A97E] placeholder:text-zinc-600 uppercase tracking-widest"
              placeholder="Search models..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <span
              className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-zinc-400 cursor-pointer hover:text-[#C8A97E]"
              onClick={() => { setShowSearch(false); setSearchQuery('') }}
            >close</span>
          </div>
        </div>
      )}

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
            <Link to="/new-arrivals" className="border border-primary text-primary px-12 py-4 font-label-sm uppercase tracking-widest hover:bg-primary hover:text-background transition-all duration-500 gold-glow">
              Explore Catalogue
            </Link>
            <button className="text-white flex items-center gap-3 font-label-sm uppercase tracking-widest hover:text-primary transition-colors">
              <span className="material-symbols-outlined">play_circle</span> Watch Heritage
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <span className="material-symbols-outlined text-primary/50">keyboard_double_arrow_down</span>
        </div>
      </section>

      <section className="sticky top-20 z-40 bg-surface-container-lowest/80 backdrop-blur-xl border-b border-[#C8A97E]/10 py-6">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="flex items-center gap-8 flex-1">
              <div className="group relative">
                <label className="block text-[10px] text-primary uppercase mb-1 tracking-widest">Category</label>
                <select
                  className="bg-transparent border-none text-on-surface font-label-sm uppercase focus:ring-0 p-0 pr-8 cursor-pointer appearance-none"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
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
                <select
                  className="bg-transparent border-none text-on-surface font-label-sm uppercase focus:ring-0 p-0 pr-8 cursor-pointer appearance-none"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
                <span className="material-symbols-outlined absolute right-0 bottom-0 text-sm pointer-events-none">expand_more</span>
              </div>
              <div className="flex-1 max-w-xs hidden md:block">
                <div className="flex justify-between items-end mb-1">
                  <label className="text-[10px] text-primary uppercase tracking-widest">Price Range (PKR)</label>
                  <span className="text-[12px] font-label-sm text-secondary">0 - {priceRange}M</span>
                </div>
                <input
                  className="w-full h-1 bg-surface-variant accent-primary appearance-none cursor-pointer rounded-full"
                  max="50"
                  min="0"
                  type="range"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="flex items-center gap-4">
              <button
                className="flex items-center gap-2 font-label-sm uppercase text-secondary hover:text-primary transition-colors"
                onClick={() => { setCategory('All Categories'); setPriceRange(50); setSearchQuery('') }}
              >
                <span className="material-symbols-outlined text-lg">tune</span> Reset
              </button>
              <div className="h-6 w-[1px] bg-outline-variant"></div>
              <span className="text-secondary font-label-sm uppercase tracking-tighter">
                Showing {filteredCars.length} Models
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap max-w-container-max mx-auto px-6 md:px-margin-mobile lg:px-margin-desktop">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <span className="material-symbols-outlined text-primary text-4xl animate-spin">progress_activity</span>
          </div>
        ) : filteredCars.length === 0 ? (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-zinc-600 text-6xl mb-4">search_off</span>
            <p className="text-zinc-500 font-body-lg">No models found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredCars.map((car, index) => (
              <div
                key={car.id}
                className={`group hairline-gold bg-[#111118] overflow-hidden transition-all duration-500 hover:translate-y-[-8px] ${
                  car.is_new ? 'lg:col-span-2' : ''
                }`}
              >
                {car.is_new ? (
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="relative md:w-1/2 aspect-[16/10] md:aspect-auto overflow-hidden">
                      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={car.image} alt={car.name} />
                      <div className="absolute top-4 left-4">
                        <span className="bg-primary px-4 py-1 text-[10px] font-label-sm uppercase text-background">New Arrival</span>
                      </div>
                    </div>
                    <div className="p-10 md:w-1/2 flex flex-col justify-center">
                      <span className="text-[10px] text-primary uppercase tracking-[0.2em] mb-4">Sustainable Luxury</span>
                      <h3 className="font-headline-h2 text-white mb-6 uppercase">{car.name}</h3>
                      <p className="text-secondary font-body-md mb-8 opacity-70">{car.description}</p>
                      <div className="flex items-center justify-between">
                        <span className="font-headline-h3 text-white italic">{formatPrice(car.price)}</span>
                        <Link to={`/car/${car.id}`} className="bg-primary/5 hover:bg-primary/20 border border-primary text-primary px-8 py-3 font-label-sm uppercase transition-all duration-300">
                          Reserve Now
                        </Link>
                      </div>
                    </div>
                  </div>
                ) : (
                  <>
                    <div className="relative aspect-[16/10] overflow-hidden">
                      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={car.image} alt={car.name} />
                      <div className="absolute top-4 left-4">
                        <span className="bg-background/80 backdrop-blur-md px-4 py-1 text-[10px] font-label-sm uppercase text-primary border border-primary/20">{car.category}</span>
                      </div>
                      <button className="absolute top-4 right-4 w-10 h-10 rounded-full bg-background/60 backdrop-blur-md flex items-center justify-center text-white hover:text-red-500 transition-colors">
                        <span className="material-symbols-outlined text-lg">favorite</span>
                      </button>
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-headline-h3 text-white uppercase tracking-tight">{car.name}</h3>
                        <span className="material-symbols-outlined text-primary">{car.icon}</span>
                      </div>
                      <p className="text-secondary font-body-md mb-8 opacity-70">{car.description}</p>
                      <div className="flex items-center justify-between border-t border-outline-variant/30 pt-6">
                        <div>
                          <span className="block text-[10px] text-primary uppercase tracking-widest mb-1">Base Price</span>
                          <span className="font-body-lg text-white font-medium italic">{formatPrice(car.price)}</span>
                        </div>
                        <Link to={`/car/${car.id}`} className="flex items-center gap-2 font-label-sm text-[#C8A97E] uppercase hover:gap-4 transition-all group-hover:underline underline-offset-8">
                          View Details <span className="material-symbols-outlined text-sm">arrow_forward</span>
                        </Link>
                      </div>
                    </div>
                  </>
                )}
              </div>
            ))}
          </div>
        )}
      </section>

      <footer className="bg-[#050508] border-t border-[#C8A97E]/10 w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16">
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
              <Link className="text-zinc-500 font-label-sm hover:text-white hover:translate-x-1 transition-transform duration-200" to="/">Cars</Link>
              <Link className="text-zinc-500 font-label-sm hover:text-white hover:translate-x-1 transition-transform duration-200" to="/my-orders">My Orders</Link>
              <Link className="text-zinc-500 font-label-sm hover:text-white hover:translate-x-1 transition-transform duration-200" to="/wishlist">Wishlist</Link>
              <Link className="text-zinc-500 font-label-sm hover:text-white hover:translate-x-1 transition-transform duration-200" to="/book-test-drive">Test Drive</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-label-sm uppercase tracking-widest mb-6">Service</h4>
            <nav className="flex flex-col gap-4">
              <Link className="text-zinc-500 font-label-sm hover:text-white hover:translate-x-1 transition-transform duration-200" to="/service-booking">Maintenance</Link>
              <Link className="text-zinc-500 font-label-sm hover:text-white hover:translate-x-1 transition-transform duration-200" to="/dealerships">Genuine Parts</Link>
              <Link className="text-zinc-500 font-label-sm hover:text-white hover:translate-x-1 transition-transform duration-200" to="/about">Contact</Link>
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
