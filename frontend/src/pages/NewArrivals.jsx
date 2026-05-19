import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { ArrowRight, Sparkles, Zap, Fuel, Heart } from 'lucide-react'
import { getAllCars } from '../api/cars'
import PageLayout from '../components/PageLayout'

const FALLBACK = [
  { id: 4, name: 'The EQS Sedan', category: 'Electric (EQ)', price: 42000000, year: 2024, horsepower: 350, fuel_type: 'Electric', is_new: true, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAzqTSa4AhOTZWRh_rDJ0D9NAHfKQA054owNTcBkcxluIB72NqWmDdedHmzoXj_xjZ8Z8DY133Pbq1zh3AFj7EUi4NFzj0cwJFSjeCdQeJC7t1k7mNpUhVex9d6KjXG4pOBcKj5IZGSws5qIbsmrdVKA73rbH4fZLRShmRO0bnDlujgRnwEPd-G9JInUvZ1EQulS4ZrmwrWVoy_OPyEuDomWX4fNWD_gPDyXxakkSRNm9j0U-0MsS3iYdsWn_LZj_q68FKrSX3EGmQ' },
  { id: 1, name: 'S-Class 500', category: 'Sedan', price: 45000000, year: 2024, horsepower: 496, fuel_type: 'Gasoline', is_new: false, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAF2nwKtksaHt9t6QnLTpWSgtK6Pt915fn0JaPCILM9aFxjGj8jg0wK0n4FyqlCyaGh4VBvMnLOzQ8QI6-alI2GOwMY2QHLr_cV6buii3zXpc-FXL6d-zEklIgOxO2xD20q_Bg_OdmJahXJ1WNfmhPUEe3lnRLkM7UoaDUTNp4ARTHZQ83nENKmjTGziF5KVTdyVXInEbsoXNz2IB8H2Iw-Ooyx-OS5819s6hrkaUfodIDu8snuehVEi6ZjeETW8XNIWUXOxLCrzt8' },
  { id: 2, name: 'AMG GT Coupe', category: 'AMG Performance', price: 38500000, year: 2024, horsepower: 577, fuel_type: 'Gasoline', is_new: false, image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBGPtgqztZ7krzZvDPb_iRMLgcbpDaZeandO_JVtW3MBJxAz-vyhq8nA0MlDAgDMHnuDnY_e509ln1eIeUJdIanpdg9DxIRk8cL9DMhoJoIFCNi6EWwRoqPT86dsk8hgh_YlfluUjN-DpsggFeLACxwsrPDPtEm7U58rfoNUxj7O17Kflov-DZj5jtF4EA0M5f8UCJ0IgIQjxVn9IUI_Av9Vm7DlrAdD9jVW6FA_7_nBU9FC864i8n6Zu11iESvHcdXI_FKDE1RgqU' },
]

function CarCard({ car }) {
  const fmt = p => 'PKR ' + (p || 0).toLocaleString()
  return (
    <div className="group relative bg-card border border-white/8 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:shadow-2xl hover:-translate-y-0.5">
      <div className="relative h-48 bg-zinc-900 overflow-hidden">
        {car.image ? (
          <img src={car.image} alt={car.name} className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
        ) : (
          <div className="absolute inset-0 flex items-center justify-center">
            <div className="text-8xl font-black text-white/10">{(car.name || '').split(' ')[0]}</div>
          </div>
        )}
        <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
        <div className="absolute top-3 left-3 flex gap-2">
          {car.is_new && <span className="bg-primary/90 text-white text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded">New</span>}
        </div>
        <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-muted-foreground hover:text-primary opacity-0 group-hover:opacity-100 transition-all">
          <Heart className="h-3.5 w-3.5" />
        </button>
      </div>
      <div className="p-4">
        <div className="flex items-start justify-between mb-1">
          <div>
            <p className="text-muted-foreground text-xs font-mono tracking-widest uppercase mb-0.5">{car.year} · {car.category}</p>
            <h3 className="text-foreground font-semibold text-base">{car.name}</h3>
          </div>
          <p className="text-primary font-bold text-lg font-mono">{fmt(car.price)}</p>
        </div>
        <div className="flex items-center gap-4 mt-3 mb-4">
          {car.horsepower && <div className="flex items-center gap-1 text-muted-foreground"><Zap className="h-3 w-3" /><span className="text-xs font-mono">{car.horsepower} hp</span></div>}
          {car.fuel_type && <div className="flex items-center gap-1 text-muted-foreground"><Fuel className="h-3 w-3" /><span className="text-xs">{car.fuel_type}</span></div>}
        </div>
        <Link to={`/car/${car.id}`} className="flex items-center justify-between w-full border border-white/15 text-foreground hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all rounded-md px-3 py-2 text-xs font-medium">
          View Details <ArrowRight className="h-3.5 w-3.5" />
        </Link>
      </div>
    </div>
  )
}

export default function NewArrivals() {
  const [cars, setCars] = useState(FALLBACK)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getAllCars()
      .then(res => {
        const mapped = res.data.map(c => ({ ...c, name: c.model || c.name, image: c.primary_image || c.image, is_new: c.is_new_arrival || c.is_new }))
        const fresh = mapped.filter(c => c.is_new)
        setCars(fresh.length > 0 ? fresh : mapped.slice(0, 4))
      })
      .catch(() => {})
      .finally(() => setLoading(false))
  }, [])

  return (
    <PageLayout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-start justify-between mb-10">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <Sparkles className="h-4 w-4 text-primary" />
              <p className="text-primary text-xs font-mono tracking-widest uppercase">Just Landed</p>
            </div>
            <h1 className="text-3xl font-bold text-foreground tracking-tight">New Arrivals</h1>
            <p className="text-muted-foreground text-sm mt-1">{cars.length} new model{cars.length !== 1 ? 's' : ''} · 2024–2025 Collection</p>
          </div>
          <span className="bg-primary/10 text-primary border border-primary/30 text-xs font-mono tracking-widest uppercase px-3 py-1.5 rounded-full mt-1">2025 Season</span>
        </div>

        <div className="bg-card border border-white/8 rounded-xl p-5 mb-10 flex items-center gap-3">
          <Sparkles className="h-5 w-5 text-primary flex-shrink-0" />
          <div>
            <p className="text-foreground text-sm font-semibold">2025 Collection Now Available</p>
            <p className="text-muted-foreground text-sm mt-0.5">Experience Mercedes-Benz's latest advancements in performance, luxury, and electrification.</p>
          </div>
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {cars.map(car => <CarCard key={car.id} car={car} />)}
          </div>
        )}
      </div>
    </PageLayout>
  )
}
