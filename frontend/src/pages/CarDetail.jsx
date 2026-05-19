import { useState, useEffect } from 'react'
import { useParams, Link, useNavigate } from 'react-router-dom'
import { ArrowLeft, Zap, Fuel, Settings2, Gauge, Users, ArrowRight } from 'lucide-react'
import { getCarById } from '../api/cars'
import PageLayout from '../components/PageLayout'

export default function CarDetail() {
  const { id } = useParams()
  const navigate = useNavigate()
  const [car, setCar] = useState(null)
  const [loading, setLoading] = useState(true)
  const [tab, setTab] = useState('specs')

  useEffect(() => {
    getCarById(id)
      .then(res => setCar(res.data))
      .catch(() => setCar(null))
      .finally(() => setLoading(false))
  }, [id])

  if (loading) return (
    <PageLayout>
      <div className="flex items-center justify-center min-h-[60vh]">
        <div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" />
      </div>
    </PageLayout>
  )

  if (!car) return (
    <PageLayout>
      <div className="flex flex-col items-center justify-center min-h-[60vh] text-center">
        <p className="text-muted-foreground text-lg mb-4">Vehicle not found</p>
        <Link to="/" className="border border-white/15 text-foreground px-4 py-2 rounded text-sm hover:border-primary/50 transition-colors">Back to Models</Link>
      </div>
    </PageLayout>
  )

  const specs = [
    { label: 'Engine', value: car.engine || 'N/A', icon: Settings2 },
    { label: 'Horsepower', value: car.horsepower ? `${car.horsepower} hp` : 'N/A', icon: Zap },
    { label: 'Acceleration', value: car.acceleration || 'N/A', icon: Gauge },
    { label: 'Top Speed', value: car.top_speed ? `${car.top_speed} mph` : 'N/A', icon: Gauge },
    { label: 'Fuel Type', value: car.fuel_type || car.fuelType || 'N/A', icon: Fuel },
    { label: 'Transmission', value: car.transmission || 'N/A', icon: Settings2 },
    { label: 'Seating', value: car.seats ? `${car.seats} passengers` : 'N/A', icon: Users },
    { label: 'Color', value: car.color || car.available_colors || 'N/A', icon: Settings2 },
  ]

  const fmt = p => 'PKR ' + (p || 0).toLocaleString()

  return (
    <PageLayout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
        <button onClick={() => navigate(-1)} className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm mb-6 transition-colors">
          <ArrowLeft className="h-4 w-4" /> Back
        </button>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
          {/* Image */}
          <div className="relative aspect-[4/3] bg-zinc-900 rounded-xl overflow-hidden">
            {car.primary_image || car.image ? (
              <img src={car.primary_image || car.image} alt={car.model || car.name} className="w-full h-full object-cover" />
            ) : (
              <div className="absolute inset-0 flex items-center justify-center">
                <div className="text-9xl font-black text-white/10">{(car.model || car.name || '').split(' ')[0]}</div>
              </div>
            )}
            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
            {(car.is_new_arrival || car.is_new) && (
              <div className="absolute top-4 left-4">
                <span className="bg-primary/90 text-white text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded">New</span>
              </div>
            )}
            <div className="absolute bottom-4 left-4">
              <p className="text-white/60 text-xs font-mono uppercase">Mercedes-Benz</p>
              <p className="text-white font-bold text-lg">{car.model || car.name}</p>
              {car.year && <p className="text-white/50 text-xs">{car.year}</p>}
            </div>
          </div>

          {/* Details */}
          <div className="flex flex-col justify-between">
            <div>
              <p className="text-muted-foreground text-xs font-mono tracking-widest uppercase mb-1">{car.year} · {car.category}</p>
              <h1 className="text-3xl font-bold text-foreground tracking-tight mb-3">{car.model || car.name}</h1>
              <p className="text-primary font-black text-3xl font-mono mb-6">{fmt(car.price)}</p>
              <div className="grid grid-cols-2 gap-3 mb-6">
                {specs.slice(0, 4).map(({ label, value, icon: Icon }) => (
                  <div key={label} className="bg-card border border-white/8 rounded-xl p-4">
                    <Icon className="h-4 w-4 text-primary mb-2" />
                    <div className="text-muted-foreground text-xs font-mono uppercase tracking-widest mb-0.5">{label}</div>
                    <div className="text-foreground text-sm font-medium">{value}</div>
                  </div>
                ))}
              </div>
              {car.description && <p className="text-muted-foreground text-sm leading-relaxed mb-6">{car.description}</p>}
            </div>
            <div className="space-y-3">
              <Link to="/place-order" className="flex items-center justify-center gap-2 w-full bg-primary hover:bg-primary/90 text-white font-semibold h-12 rounded-md transition-colors">
                Order Now <ArrowRight className="h-4 w-4" />
              </Link>
              <div className="grid grid-cols-2 gap-3">
                <Link to="/book-test-drive" className="flex items-center justify-center gap-2 border border-white/15 text-foreground hover:bg-primary/10 hover:border-primary/50 hover:text-primary h-10 rounded-md text-sm transition-colors">
                  Test Drive
                </Link>
                <Link to="/wishlist" className="flex items-center justify-center gap-2 border border-white/15 text-foreground hover:border-white/30 h-10 rounded-md text-sm transition-colors">
                  Wishlist
                </Link>
              </div>
            </div>
          </div>
        </div>

        {/* Tabs */}
        <div className="mt-14">
          <div className="flex border-b border-white/8 mb-8">
            {['specs', 'features', 'financing'].map(t => (
              <button key={t} onClick={() => setTab(t)}
                className={`px-5 py-3 text-sm font-medium transition-colors capitalize ${tab === t ? 'text-primary border-b-2 border-primary -mb-px' : 'text-muted-foreground hover:text-foreground'}`}>
                {t === 'specs' ? 'Full Specs' : t === 'features' ? 'Features' : 'Financing'}
              </button>
            ))}
          </div>

          {tab === 'specs' && (
            <div className="bg-card border border-white/8 rounded-xl overflow-hidden">
              {specs.map(({ label, value }, i) => (
                <div key={label} className={`flex justify-between px-6 py-4 ${i < specs.length - 1 ? 'border-b border-white/8' : ''}`}>
                  <span className="text-muted-foreground text-sm">{label}</span>
                  <span className="text-foreground text-sm font-medium">{value}</span>
                </div>
              ))}
            </div>
          )}

          {tab === 'features' && (
            <div className="bg-card border border-white/8 rounded-xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {['MBUX Infotainment System', 'Burmester® Surround Sound', 'Heated & Ventilated Front Seats', '64-Color Ambient Lighting', 'Active Driver Assistance Package', 'PRE-SAFE® Brake System', 'Head-Up Display', 'Panoramic Roof', 'Keyless Go', 'Air Balance Package'].map(f => (
                  <div key={f} className="flex items-center gap-3">
                    <Zap className="h-4 w-4 text-primary flex-shrink-0" />
                    <span className="text-foreground text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {tab === 'financing' && (
            <div className="bg-card border border-white/8 rounded-xl p-8">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                {[{ term: '36 mo', monthly: Math.round((car.price || 0) / 30), rate: '3.9% APR' }, { term: '48 mo', monthly: Math.round((car.price || 0) / 40), rate: '4.5% APR' }, { term: '60 mo', monthly: Math.round((car.price || 0) / 52), rate: '4.9% APR' }].map(({ term, monthly, rate }) => (
                  <div key={term} className="border border-white/8 hover:border-primary/30 p-6 rounded-xl text-center cursor-pointer transition-colors">
                    <div className="text-muted-foreground text-xs font-mono uppercase tracking-widest mb-2">{term}</div>
                    <div className="text-primary font-black text-xl font-mono">PKR {monthly.toLocaleString()}</div>
                    <div className="text-muted-foreground text-xs mt-1">/month · {rate}</div>
                  </div>
                ))}
              </div>
              <p className="text-muted-foreground text-xs mt-4">*Estimates only. Actual rates subject to credit approval.</p>
            </div>
          )}
        </div>
      </div>
    </PageLayout>
  )
}
