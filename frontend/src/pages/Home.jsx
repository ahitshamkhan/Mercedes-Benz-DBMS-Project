import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Shield, Zap, Globe, Star, Heart, Fuel } from 'lucide-react'
import { getAllCars } from '../api/cars'
import PageLayout from '../components/PageLayout'

const heroSlides = [
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF2nwKtksaHt9t6QnLTpWSgtK6Pt915fn0JaPCILM9aFxjGj8jg0wK0n4FyqlCyaGh4VBvMnLOzQ8QI6-alI2GOwMY2QHLr_cV6buii3zXpc-FXL6d-zEklIgOxO2xD20q_Bg_OdmJahXJ1WNfmhPUEe3lnRLkM7UoaDUTNp4ARTHZQ83nENKmjTGziF5KVTdyVXInEbsoXNz2IB8H2Iw-Ooyx-OS5819s6hrkaUfodIDu8snuehVEi6ZjeETW8XNIWUXOxLCrzt8', label: 'S-Class S580' },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGPtgqztZ7krzZvDPb_iRMLgcbpDaZeandO_JVtW3MBJxAz-vyhq8nA0MlDAgDMHnuDnY_e509ln1eIeUJdIanpdg9DxIRk8cL9DMhoJoIFCNi6EWwRoqPT86dsk8hgh_YlfluUjN-DpsggFeLACxwsrPDPtEm7U58rfoNUxj7O17Kflov-DZj5jtF4EA0M5f8UCJ0IgIQjxVn9IUI_Av9Vm7DlrAdD9jVW6FA_7_nBU9FC864i8n6Zu11iESvHcdXI_FKDE1RgqU', label: 'AMG GT Coupe' },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCtrSSDrVPjp8tfPWL0ex9g4Kj2hI1iAYfaKIgRMB17dhqCbc3O4cYFCNwIX4MVQbYznPvEh0Yd0SkYt1XGQyKQFirEBCGuEYwUGAQF3E_P-x2Wg9hes_-lshpH-a2xY_jjJqcZznbrWGZc-62l5j0-Sgj2adJocCMc_768JX5OSUYntuTfpMhRQTopS2PpSB_5-aLgSCeQFRcXcP8KrgWPgruKgt5D3kltZ8TEXqHCSzBo1GeBZYk811YjWGqpImqkg4PkRU1O_Hc', label: 'G-Wagon G63' },
  { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzqTSa4AhOTZWRh_rDJ0D9NAHfKQA054owNTcBkcxluIB72NqWmDdedHmzoXj_xjZ8Z8DY133Pbq1zh3AFj7EUi4NFzj0cwJFSjeCdQeJC7t1k7mNpUhVex9d6KjXG4pOBcKj5IZGSws5qIbsmrdVKA73rbH4fZLRShmRO0bnDlujgRnwEPd-G9JInUvZ1EQulS4ZrmwrWVoy_OPyEuDomWX4fNWD_gPDyXxakkSRNm9j0U-0MsS3iYdsWn_LZj_q68FKrSX3EGmQ', label: 'The EQS Sedan' },
]

function CarCard({ car }) {
  const fmt = (p) => 'PKR ' + (p || 0).toLocaleString()
  return (
    <div className="group relative bg-card border border-white/8 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5">
      <div className="relative h-48 bg-zinc-900 overflow-hidden">
        {car.image ? (
          <img src={car.image} alt={car.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl font-black tracking-tighter text-white/10 leading-none">{(car.name || '').split(' ')[0]}</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
        <div className="absolute top-3 left-3 flex gap-2">
          {car.is_new && (
            <span className="bg-primary/90 text-white text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded">New</span>
          )}
        </div>
        <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-muted-foreground hover:text-primary hover:border-primary/50 transition-all opacity-0 group-hover:opacity-100">
          <Heart className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <div>
            <p className="text-muted-foreground text-xs font-mono tracking-widest uppercase mb-0.5">{car.year} · {car.category}</p>
            <h3 className="text-foreground font-semibold text-base leading-tight">{car.name}</h3>
          </div>
          <div className="text-right">
            <p className="text-primary font-bold text-lg font-mono">{fmt(car.price)}</p>
          </div>
        </div>
        <div className="flex items-center gap-4 mt-3 mb-4">
          {car.horsepower && (
            <div className="flex items-center gap-1 text-muted-foreground">
              <Zap className="h-3 w-3" />
              <span className="text-xs font-mono">{car.horsepower} hp</span>
            </div>
          )}
          {car.fuel_type && (
            <div className="flex items-center gap-1 text-muted-foreground">
              <Fuel className="h-3 w-3" />
              <span className="text-xs">{car.fuel_type}</span>
            </div>
          )}
        </div>
        <Link to={`/car/${car.id}`}
          className="flex items-center justify-between w-full border border-white/15 text-foreground hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all rounded-md px-3 py-2 text-xs font-medium tracking-wide">
          <span>View Details</span>
          <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}

const FALLBACK_CARS = [
  { id: 1, name: 'S-Class 500', category: 'Sedan', price: 45000000, year: 2024, horsepower: 496, fuel_type: 'Gasoline', is_new: false, image: heroSlides[0].src },
  { id: 2, name: 'AMG GT Coupe', category: 'AMG Performance', price: 38500000, year: 2024, horsepower: 577, fuel_type: 'Gasoline', is_new: false, image: heroSlides[1].src },
  { id: 3, name: 'G-Wagon G63', category: 'SUV', price: 49900000, year: 2024, horsepower: 577, fuel_type: 'Gasoline', is_new: false, image: heroSlides[2].src },
  { id: 4, name: 'The EQS Sedan', category: 'Electric (EQ)', price: 42000000, year: 2024, horsepower: 350, fuel_type: 'Electric', is_new: true, image: heroSlides[3].src },
  { id: 5, name: 'C-Class Sedan', category: 'Sedan', price: 18500000, year: 2024, horsepower: 255, fuel_type: 'Gasoline', is_new: true, image: heroSlides[0].src },
]

export default function Home() {
  const [cars, setCars] = useState(FALLBACK_CARS)

  useEffect(() => {
    getAllCars()
      .then(res => {
        const mapped = res.data.map(c => ({ ...c, name: c.model || c.name, image: c.primary_image || c.image, is_new: c.is_new_arrival || c.is_new }))
        if (mapped.length > 0) setCars(mapped)
      })
      .catch(() => {})
  }, [])

  const featuredCars = cars.slice(0, 3)
  const newArrivals = cars.filter(c => c.is_new).slice(0, 4)
  const displayNewArrivals = newArrivals.length > 0 ? newArrivals : cars.slice(0, 4)

  return (
    <PageLayout>
      {/* ── HERO ── */}
      <section className="relative min-h-[85vh] flex items-center justify-center overflow-hidden bg-black">
        <div className="absolute inset-0 z-0">
          {heroSlides.map((slide, i) => (
            <div key={slide.src} className="hero-slide absolute inset-0" style={{ animationDelay: `${i * 5}s` }}>
              <img src={slide.src} alt={slide.label} className="w-full h-full object-cover object-center" />
            </div>
          ))}
          <div className="absolute inset-0 bg-black/55" />
          <div className="absolute inset-0 bg-[radial-gradient(ellipse_60%_60%_at_50%_60%,_hsl(210_100%_60%/0.10)_0%,_transparent_70%)]" />
        </div>
        <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
          <div className="mb-6">
            <span className="inline-flex items-center gap-2 bg-primary/10 text-primary border border-primary/30 text-xs font-mono tracking-widest uppercase px-4 py-1.5 backdrop-blur-sm rounded-full">
              ★ The New 2025 Collection
            </span>
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-black tracking-[-0.03em] text-white leading-none mb-6 drop-shadow-2xl">
            The Best<br />
            <span className="bg-gradient-to-r from-primary via-blue-300 to-primary/60 bg-clip-text text-transparent">or Nothing.</span>
          </h1>
          <p className="text-white/75 text-lg md:text-xl max-w-2xl mx-auto mb-10 font-light leading-relaxed drop-shadow-lg">
            Experience the pinnacle of automotive engineering. Every detail crafted to perfection, every journey transformed into an event.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/" className="inline-flex items-center justify-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold tracking-wide px-8 h-12 text-sm shadow-lg shadow-primary/30 rounded-md transition-colors">
              Explore Models <ArrowRight className="h-4 w-4" />
            </Link>
            <Link to="/book-test-drive" className="inline-flex items-center justify-center border border-white/30 text-white hover:bg-white/10 hover:border-white/50 font-medium px-8 h-12 text-sm backdrop-blur-sm rounded-md transition-colors">
              Book Test Drive
            </Link>
          </div>
        </div>
        <div className="absolute bottom-0 left-0 right-0 h-40 bg-gradient-to-t from-black to-transparent z-10" />
      </section>

      {/* ── STATS ── */}
      <section className="border-y border-white/8 bg-card/40">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 divide-x divide-white/8">
            {[
              { label: 'Fleet Models', value: cars.length.toString() },
              { label: 'Total Customers', value: '2,400+' },
              { label: 'Dealerships', value: '3' },
              { label: 'Revenue (2025)', value: 'PKR 590M+' },
            ].map(({ label, value }) => (
              <div key={label} className="py-8 px-6 text-center">
                <div className="text-3xl font-black text-foreground font-mono tracking-tight">{value}</div>
                <div className="text-muted-foreground text-xs mt-1 tracking-wider uppercase font-medium">{label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── FEATURED ── */}
      <section className="py-20 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-primary text-xs font-mono tracking-widest uppercase mb-2">Featured</p>
            <h2 className="text-3xl font-bold text-foreground tracking-tight">Select Models</h2>
          </div>
          <Link to="/" className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
            View All <ArrowRight className="h-3.5 w-3.5" />
          </Link>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCars.map(car => <CarCard key={car.id} car={car} />)}
        </div>
      </section>

      {/* ── GALLERY ── */}
      <section className="py-16 bg-card/20 border-y border-white/8 overflow-hidden">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 mb-10">
          <p className="text-primary text-xs font-mono tracking-widest uppercase mb-2">Craftsmanship</p>
          <h2 className="text-3xl font-bold text-foreground tracking-tight">The Experience</h2>
        </div>
        <div className="flex gap-4 px-4 sm:px-8 overflow-x-auto pb-2 scrollbar-none snap-x snap-mandatory">
          {[
            { src: heroSlides[0].src, label: 'S-Class S580', sub: 'The flagship in motion' },
            { src: heroSlides[1].src, label: 'AMG GT Coupe', sub: 'Precision power unleashed' },
            { src: heroSlides[2].src, label: 'G-Class G63 AMG', sub: 'Unyielding. Uncompromising.' },
            { src: heroSlides[3].src, label: 'EQS Sedan', sub: 'The electric future' },
            { src: heroSlides[0].src, label: 'C-Class Sedan', sub: 'Elegance meets efficiency' },
          ].map(({ src, label, sub }) => (
            <div key={label} className="relative flex-none w-72 h-48 rounded-xl overflow-hidden snap-start group cursor-pointer">
              <img src={src} alt={label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" />
              <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent" />
              <div className="absolute bottom-0 left-0 right-0 p-4">
                <p className="text-white font-semibold text-sm leading-tight">{label}</p>
                <p className="text-white/60 text-xs mt-0.5">{sub}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ── NEW ARRIVALS ── */}
      <section className="py-20 bg-card/10">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-10">
            <div>
              <p className="text-primary text-xs font-mono tracking-widest uppercase mb-2">Just Arrived</p>
              <h2 className="text-3xl font-bold text-foreground tracking-tight">New Arrivals</h2>
            </div>
            <Link to="/new-arrivals" className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
              See All <ArrowRight className="h-3.5 w-3.5" />
            </Link>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {displayNewArrivals.map(car => <CarCard key={car.id} car={car} />)}
          </div>
        </div>
      </section>

      {/* ── WHY MERCEDES ── */}
      <section className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <p className="text-primary text-xs font-mono tracking-widest uppercase mb-3">Why Mercedes-Benz</p>
          <h2 className="text-4xl font-bold text-foreground tracking-tight">Built Different</h2>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {[
            { icon: Zap, title: 'Electrified Performance', desc: 'From mild hybrid to fully electric — our EQ lineup delivers zero-compromise performance with zero emissions.' },
            { icon: Shield, title: 'Unmatched Safety', desc: 'Pre-Safe®, Active Brake Assist, and over 30 driver assistance systems form an invisible shield around you.' },
            { icon: Globe, title: 'Global Network', desc: '250+ certified dealerships worldwide. Wherever the road leads, Mercedes-Benz support is nearby.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card border border-white/8 rounded-xl p-6 hover:border-primary/20 transition-all duration-300">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-base mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ── CTA ── */}
      <section className="py-24 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="relative rounded-2xl overflow-hidden border border-primary/20">
          <img src={heroSlides[0].src} alt="Mercedes-Benz S-Class" className="absolute inset-0 w-full h-full object-cover" />
          <div className="absolute inset-0 bg-black/75 bg-gradient-to-br from-black/80 via-black/60 to-primary/10" />
          <div className="relative z-10 p-12 text-center">
            <Star className="h-8 w-8 text-primary mx-auto mb-4" />
            <h2 className="text-3xl font-bold text-white mb-4">Ready to Experience Excellence?</h2>
            <p className="text-white/65 mb-8 max-w-lg mx-auto">Schedule a personal consultation with our specialists and discover your perfect Mercedes-Benz.</p>
            <Link to="/book-test-drive" className="inline-flex items-center gap-2 bg-primary hover:bg-primary/90 text-white font-semibold tracking-wide px-10 h-12 shadow-lg shadow-primary/30 rounded-md transition-colors">
              Book Your Test Drive <ArrowRight className="h-4 w-4" />
            </Link>
          </div>
        </div>
      </section>
    </PageLayout>
  )
}
