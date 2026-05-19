import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { MapPin, Phone, Clock, Star, ArrowRight } from 'lucide-react'
import { getAllDealerships } from '../api/dealerships'
import PageLayout from '../components/PageLayout'

const FALLBACK = [
  { id: 1, name: 'Mercedes-Benz Downtown', city: 'Karachi', state: 'Sindh', address: 'Clifton Block 9, Karachi', phone: '+92-21-3456-7890', hours: 'Mon–Sat 9am–7pm', rating: 4.9, carCount: 45 },
  { id: 2, name: 'Mercedes-Benz Gulberg', city: 'Lahore', state: 'Punjab', address: 'Gulberg III, Main Boulevard, Lahore', phone: '+92-42-3567-8901', hours: 'Mon–Sat 9am–7pm', rating: 4.8, carCount: 38 },
  { id: 3, name: 'Mercedes-Benz Islamabad', city: 'Islamabad', state: 'Federal', address: 'Blue Area, Jinnah Avenue, Islamabad', phone: '+92-51-2678-9012', hours: 'Mon–Sat 9am–6pm', rating: 4.7, carCount: 29 },
]

export default function AllDealerships() {
  const [dealers, setDealers] = useState(FALLBACK)

  useEffect(() => {
    getAllDealerships().then(r => { if (r.data?.length) setDealers(r.data) }).catch(() => {})
  }, [])

  return (
    <PageLayout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <p className="text-primary text-xs font-mono tracking-widest uppercase mb-2">Locations</p>
          <h1 className="text-4xl font-bold text-foreground tracking-tight">Our Dealerships</h1>
          <p className="text-muted-foreground mt-2">{dealers.length} premium locations across Pakistan</p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {dealers.map(d => (
            <div key={d.id} className="bg-card border border-white/8 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 group">
              <div className="h-32 bg-gradient-to-br from-zinc-900 to-zinc-800 flex items-center justify-center relative overflow-hidden">
                <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(210_100%_60%/0.05)_0%,_transparent_70%)]" />
                <div className="text-center">
                  <span className="text-primary text-2xl font-bold">★</span>
                  <p className="text-white/30 text-xs font-mono mt-1 uppercase tracking-widest">{d.city}, {d.state}</p>
                </div>
              </div>
              <div className="p-5">
                <div className="flex items-start justify-between mb-3">
                  <h3 className="text-foreground font-semibold text-base leading-tight">{d.name}</h3>
                  <div className="flex items-center gap-1 ml-2 flex-shrink-0">
                    <Star className="h-3 w-3 text-primary fill-primary" />
                    <span className="text-xs font-mono text-primary">{d.rating}</span>
                  </div>
                </div>
                <div className="space-y-2 mb-4">
                  <div className="flex items-start gap-2 text-muted-foreground">
                    <MapPin className="h-3.5 w-3.5 mt-0.5 flex-shrink-0" />
                    <span className="text-xs">{d.address}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Phone className="h-3.5 w-3.5 flex-shrink-0" />
                    <span className="text-xs font-mono">{d.phone}</span>
                  </div>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <Clock className="h-3.5 w-3.5 flex-shrink-0" />
                    <span className="text-xs">{d.hours}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-3 border-t border-white/8">
                  <span className="text-muted-foreground text-xs">{d.carCount} vehicles in stock</span>
                  <Link to={`/dealership/${d.id}`} className="flex items-center gap-1 text-primary hover:bg-primary/10 text-xs px-2 py-1 rounded transition-colors">
                    View <ArrowRight className="h-3 w-3" />
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </PageLayout>
  )
}
