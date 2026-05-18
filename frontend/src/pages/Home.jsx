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
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 glass-nav z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4 group">
          <span className="material-symbols-outlined text-[#C8A97E] star-glow" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
          <Link to="/" className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase hover:text-[#e5c497] transition-colors">Mercedes-Benz</Link>
        </div>
        <nav className="hidden md:flex items-center gap-12">
          <Link className="font-label-sm text-[#C8A97E] border-b-2 border-[#C8A97E] pb-1 uppercase text-xs tracking-wider" to="/">Cars</Link>
          <Link className="font-label-sm text-[#c0c0c0] hover:text-[#C8A97E] transition-all duration-300 uppercase text-xs tracking-wider opacity-70 hover:opacity-100" to="/category/AMG Performance">AMG</Link>
          <Link className="font-label-sm text-[#c0c0c0] hover:text-[#C8A97E] transition-all duration-300 uppercase text-xs tracking-wider opacity-70 hover:opacity-100" to="/category/Electric (EQ)">Electric</Link>
          <Link className="font-label-sm text-[#c0c0c0] hover:text-[#C8A97E] transition-all duration-300 uppercase text-xs tracking-wider opacity-70 hover:opacity-100" to="/about">Discover</Link>
        </nav>
        <div className="flex items-center gap-6">
          <span
            className="material-symbols-outlined text-[#c0c0c0] hover:text-[#C8A97E] cursor-pointer transition-all duration-300 hover:scale-110"
            onClick={() => setShowSearch(!showSearch)}
          >search</span>
          {isLoggedIn ? (
            <div className="flex items-center gap-4">
              <Link to="/profile" className="font-label-sm text-[#c0c0c0] hover:text-[#C8A97E] transition-all duration-300 uppercase text-xs opacity-80 hover:opacity-100">
                {user?.name || 'Profile'}
              </Link>
              <button
                className="font-label-sm text-[#C8A97E] border-2 border-[#C8A97E]/40 px-4 py-2 uppercase hover:border-[#C8A97E] hover:bg-[#C8A97E]/10 transition-all duration-300 text-xs tracking-wider rounded-sm"
                onClick={logout}
              >Logout</button>
            </div>
          ) : (
            <Link to="/login" className="font-label-sm text-[#C8A97E] border-2 border-[#C8A97E]/40 px-4 py-2 uppercase hover:border-[#C8A97E] hover:bg-[#C8A97E]/10 transition-all duration-300 text-xs tracking-wider rounded-sm">
              Sign In
            </Link>
          )}
        </div>
      </header>

      {showSearch && (
        <div className="fixed top-20 w-full z-40 glass-overlay border-b border-[#C8A97E]/15 p-8 animate-fade-up">
          <div className="max-w-2xl mx-auto relative">
            <input
              className="w-full bg-transparent border-b-2 border-[#C8A97E]/30 hover:border-[#C8A97E]/50 focus:border-[#C8A97E] py-4 text-white font-body-md focus:outline-none placeholder:text-zinc-600 uppercase tracking-wider transition-all duration-300"
              placeholder="Search models..."
              type="text"
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              autoFocus
            />
            <span
              className="material-symbols-outlined absolute right-0 top-1/2 -translate-y-1/2 text-[#c0c0c0] cursor-pointer hover:text-[#C8A97E] transition-all duration-300 hover:scale-110"
              onClick={() => { setShowSearch(false); setSearchQuery('') }}
            >close</span>
          </div>
        </div>
      )}

      <section className="relative h-screen flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 particle-bg opacity-20 z-0"></div>
        <div className="absolute top-0 left-1/3 w-[600px] h-[600px] bg-[#C8A97E]/8 rounded-full blur-[150px] opacity-40 z-5"></div>
        <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-[#C8A97E]/6 rounded-full blur-[140px] opacity-30 z-5"></div>
        <div className="absolute inset-0 bg-gradient-to-b from-transparent via-[#050508]/10 to-[#050508] z-10"></div>
        <div className="relative z-20 text-center px-margin-mobile md:px-margin-desktop max-w-5xl animate-fade-up">
          <div className="mb-8 inline-block">
            <span className="font-label-sm text-[#C8A97E] uppercase tracking-[0.3em] text-xs opacity-90">Since 1886</span>
          </div>
          <h1 className="font-display-lg text-white mb-8 tracking-tighter leading-none text-5xl md:text-7xl lg:text-8xl">
            The Best. <br />Or <span className="italic text-[#C8A97E] font-bold">Nothing.</span>
          </h1>
          <p className="font-body-lg text-[#c0c0c0] max-w-2xl mx-auto mb-12 opacity-80">
            Experience the pinnacle of automotive engineering and timeless luxury. From our classic sedans to the high-performance AMG lineage.
          </p>
          <div className="flex flex-col md:flex-row items-center justify-center gap-6">
            <Link to="/new-arrivals" className="border-2 border-[#C8A97E] text-[#C8A97E] px-12 py-4 font-label-sm uppercase tracking-widest hover:bg-[#C8A97E] hover:text-black transition-all duration-500 shadow-glow hover:shadow-glow-lg rounded-sm group">
              <span className="flex items-center gap-3 justify-center">
                Explore Catalogue
                <span className="material-symbols-outlined text-lg group-hover:translate-x-2 transition-transform duration-300">arrow_forward</span>
              </span>
            </Link>
            <button className="text-[#c0c0c0] flex items-center gap-3 font-label-sm uppercase tracking-widest hover:text-[#C8A97E] transition-all duration-300">
              <span className="material-symbols-outlined text-2xl">play_circle</span> Watch Heritage
            </button>
          </div>
        </div>
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 z-20 animate-bounce">
          <span className="material-symbols-outlined text-[#C8A97E]/50">keyboard_double_arrow_down</span>
        </div>
      </section>

      <section className="sticky top-20 z-40 glass-overlay border-b border-[#C8A97E]/15 py-8">
        <div className="max-w-container-max mx-auto px-6 md:px-margin-desktop">
          <div className="flex flex-wrap items-center justify-between gap-8">
            <div className="flex items-center gap-8 flex-1">
              <div className="group relative">
                <label className="block text-xs text-[#C8A97E] uppercase mb-2 tracking-widest opacity-80">Category</label>
                <select
                  className="bg-transparent border-b-2 border-[#C8A97E]/25 focus:border-[#C8A97E] text-white font-label-sm uppercase focus:ring-0 p-0 pr-8 cursor-pointer appearance-none transition-colors duration-300"
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                >
                  <option>All Categories</option>
                  <option>Sedan</option>
                  <option>SUV</option>
                  <option>AMG Performance</option>
                  <option>Electric (EQ)</option>
                </select>
                <span className="material-symbols-outlined absolute right-0 bottom-0 text-sm pointer-events-none text-[#C8A97E]">expand_more</span>
              </div>
              <div className="group relative">
                <label className="block text-xs text-[#C8A97E] uppercase mb-2 tracking-widest opacity-80">Year</label>
                <select
                  className="bg-transparent border-b-2 border-[#C8A97E]/25 focus:border-[#C8A97E] text-white font-label-sm uppercase focus:ring-0 p-0 pr-8 cursor-pointer appearance-none transition-colors duration-300"
                  value={year}
                  onChange={(e) => setYear(e.target.value)}
                >
                  <option>2024</option>
                  <option>2023</option>
                  <option>2022</option>
                </select>
                <span className="material-symbols-outlined absolute right-0 bottom-0 text-sm pointer-events-none text-[#C8A97E]">expand_more</span>
              </div>
              <div className="flex-1 max-w-xs hidden md:block">
                <div className="flex justify-between items-end mb-2">
                  <label className="text-xs text-[#C8A97E] uppercase tracking-widest opacity-80">Price Range (PKR)</label>
                  <span className="text-xs font-label-sm text-[#c0c0c0] opacity-90">{priceRange}M</span>
                </div>
                <input
                  className="w-full h-2 bg-[#C8A97E]/20 accent-[#C8A97E] appearance-none cursor-pointer rounded-full"
                  max="50"
                  min="0"
                  type="range"
                  value={priceRange}
                  onChange={(e) => setPriceRange(Number(e.target.value))}
                />
              </div>
            </div>
            <div className="flex items-center gap-6">
              <button
                className="flex items-center gap-2 font-label-sm uppercase text-[#c0c0c0] hover:text-[#C8A97E] transition-all duration-300 text-xs tracking-wider opacity-70 hover:opacity-100"
                onClick={() => { setCategory('All Categories'); setPriceRange(50); setSearchQuery('') }}
              >
                <span className="material-symbols-outlined text-lg">tune</span> Reset
              </button>
              <div className="h-6 w-px bg-[#C8A97E]/15"></div>
              <span className="text-[#c0c0c0] font-label-sm uppercase tracking-wider text-xs opacity-70">
                {filteredCars.length} Models
              </span>
            </div>
          </div>
        </div>
      </section>

      <section className="py-section-gap max-w-container-max mx-auto px-6 md:px-margin-mobile lg:px-margin-desktop">
        {loading ? (
          <div className="flex justify-center items-center py-20">
            <span className="material-symbols-outlined text-[#C8A97E] text-4xl animate-spin">progress_activity</span>
          </div>
        ) : filteredCars.length === 0 ? (
          <div className="text-center py-20">
            <span className="material-symbols-outlined text-[#C8A97E]/40 text-6xl mb-4">search_off</span>
            <p className="text-[#c0c0c0] font-body-lg opacity-60">No models found matching your criteria.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-12">
            {filteredCars.map((car, index) => (
              <div
                key={car.id}
                className={`group glass-card overflow-hidden transition-all duration-500 hover:translate-y-[-8px] hover:shadow-glow-lg animate-fade-up stagger-${(index % 3) + 1} ${
                  car.is_new ? 'lg:col-span-2' : ''
                }`}
              >
                {car.is_new ? (
                  <div className="flex flex-col md:flex-row h-full">
                    <div className="relative md:w-1/2 aspect-[16/10] md:aspect-auto overflow-hidden">
                      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={car.image} alt={car.name} />
                      <div className="absolute top-4 left-4">
                        <span className="bg-gradient-to-r from-[#c8a97e] to-[#e5c497] px-4 py-2 text-xs font-label-sm uppercase text-black font-semibold rounded-sm shadow-glow">New Arrival</span>
                      </div>
                    </div>
                    <div className="p-10 md:w-1/2 flex flex-col justify-center bg-[#0f0f0f]/50">
                      <span className="text-xs text-[#C8A97E] uppercase tracking-[0.3em] mb-4 opacity-90">Sustainable Luxury</span>
                      <h3 className="font-headline-h2 text-white mb-6 uppercase">{car.name}</h3>
                      <p className="text-[#c0c0c0] font-body-md mb-8 opacity-70">{car.description}</p>
                      <div className="flex items-center justify-between gap-4">
                        <span className="font-headline-h3 text-[#C8A97E] italic">{formatPrice(car.price)}</span>
                        <Link to={`/car/${car.id}`} className="bg-[#C8A97E]/5 hover:bg-[#C8A97E] border-2 border-[#C8A97E]/50 hover:border-[#C8A97E] text-[#C8A97E] hover:text-black px-8 py-3 font-label-sm uppercase transition-all duration-300 rounded-sm text-xs tracking-wider">
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
                        <span className="glass-card px-4 py-2 text-xs font-label-sm uppercase text-[#C8A97E] border-2 border-[#C8A97E]/40">{car.category}</span>
                      </div>
                      <button className="absolute top-4 right-4 w-10 h-10 rounded-full glass-card flex items-center justify-center text-[#c0c0c0] hover:text-[#C8A97E] transition-all hover:scale-110 duration-300">
                        <span className="material-symbols-outlined text-lg">favorite</span>
                      </button>
                    </div>
                    <div className="p-8">
                      <div className="flex justify-between items-start mb-4">
                        <h3 className="font-headline-h3 text-white uppercase tracking-tight">{car.name}</h3>
                        <span className="material-symbols-outlined text-[#C8A97E]">{car.icon}</span>
                      </div>
                      <p className="text-[#c0c0c0] font-body-md mb-8 opacity-70">{car.description}</p>
                      <div className="flex items-center justify-between border-t border-[#C8A97E]/15 pt-6">
                        <div>
                          <span className="block text-xs text-[#C8A97E] uppercase tracking-widest mb-1 opacity-80">Base Price</span>
                          <span className="font-body-lg text-white font-medium italic">{formatPrice(car.price)}</span>
                        </div>
                        <Link to={`/car/${car.id}`} className="flex items-center gap-2 font-label-sm text-[#C8A97E] uppercase hover:text-[#e5c497] transition-all group-hover:underline underline-offset-4 text-xs tracking-wider">
                          View Details <span className="material-symbols-outlined text-sm group-hover:translate-x-1 transition-transform">arrow_forward</span>
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

      <footer className="bg-[#050508] border-t border-[#C8A97E]/15 w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16">
        <div className="space-y-8">
          <div className="flex items-center gap-4 group">
            <span className="material-symbols-outlined text-[#C8A97E] star-glow" style={{ fontVariationSettings: "'FILL' 1" }}>star</span>
            <span className="text-lg font-semibold text-white font-['Playfair_Display'] uppercase tracking-widest group-hover:text-[#e5c497] transition-colors">Mercedes-Benz</span>
          </div>
          <p className="text-[#c0c0c0] font-body-md leading-relaxed max-w-xs opacity-80">
            The pinnacle of luxury in Pakistan. We provide bespoke automotive services tailored to the most discerning tastes.
          </p>
          <div className="flex gap-6">
            <a className="text-[#c8a97e]/60 hover:text-[#C8A97E] transition-all hover:scale-110 duration-300" href="#"><span className="material-symbols-outlined">public</span></a>
            <a className="text-[#c8a97e]/60 hover:text-[#C8A97E] transition-all hover:scale-110 duration-300" href="#"><span className="material-symbols-outlined">alternate_email</span></a>
            <a className="text-[#c8a97e]/60 hover:text-[#C8A97E] transition-all hover:scale-110 duration-300" href="#"><span className="material-symbols-outlined">local_post_office</span></a>
          </div>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="space-y-4">
            <h4 className="text-white font-label-sm uppercase tracking-widest mb-6 text-xs opacity-80">Explore</h4>
            <nav className="flex flex-col gap-4">
              <Link className="text-[#c0c0c0] font-body-md hover:text-[#C8A97E] hover:translate-x-1 transition-all duration-200 text-sm opacity-70 hover:opacity-100" to="/">Cars</Link>
              <Link className="text-[#c0c0c0] font-body-md hover:text-[#C8A97E] hover:translate-x-1 transition-all duration-200 text-sm opacity-70 hover:opacity-100" to="/my-orders">My Orders</Link>
              <Link className="text-[#c0c0c0] font-body-md hover:text-[#C8A97E] hover:translate-x-1 transition-all duration-200 text-sm opacity-70 hover:opacity-100" to="/wishlist">Wishlist</Link>
              <Link className="text-[#c0c0c0] font-body-md hover:text-[#C8A97E] hover:translate-x-1 transition-all duration-200 text-sm opacity-70 hover:opacity-100" to="/book-test-drive">Test Drive</Link>
            </nav>
          </div>
          <div className="space-y-4">
            <h4 className="text-white font-label-sm uppercase tracking-widest mb-6 text-xs opacity-80">Service</h4>
            <nav className="flex flex-col gap-4">
              <Link className="text-[#c0c0c0] font-body-md hover:text-[#C8A97E] hover:translate-x-1 transition-all duration-200 text-sm opacity-70 hover:opacity-100" to="/service-booking">Maintenance</Link>
              <Link className="text-[#c0c0c0] font-body-md hover:text-[#C8A97E] hover:translate-x-1 transition-all duration-200 text-sm opacity-70 hover:opacity-100" to="/dealerships">Genuine Parts</Link>
              <Link className="text-[#c0c0c0] font-body-md hover:text-[#C8A97E] hover:translate-x-1 transition-all duration-200 text-sm opacity-70 hover:opacity-100" to="/about">Contact</Link>
              <a className="text-[#c0c0c0] font-body-md hover:text-[#C8A97E] hover:translate-x-1 transition-all duration-200 text-sm opacity-70 hover:opacity-100" href="#">Legal</a>
            </nav>
          </div>
        </div>
        <div className="space-y-8">
          <h4 className="text-white font-label-sm uppercase tracking-widest text-xs opacity-80">Join our Newsletter</h4>
          <div className="relative group">
            <input className="w-full bg-transparent border-b-2 border-[#C8A97E]/25 hover:border-[#C8A97E]/50 focus:border-[#C8A97E] py-3 focus:outline-none text-white font-label-sm transition-colors uppercase tracking-widest text-xs" placeholder="YOUR EMAIL" type="email" />
            <button className="absolute right-0 bottom-3 text-[#C8A97E] hover:text-[#e5c497] hover:translate-x-2 transition-all duration-300">
              <span className="material-symbols-outlined">arrow_forward</span>
            </button>
          </div>
          <p className="text-[10px] text-zinc-600 font-label-sm">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
