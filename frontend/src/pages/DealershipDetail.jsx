import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { MapPin, Phone, Clock, Star, Car } from 'lucide-react'
import { getDealershipById } from '../api/dealerships'
import PageLayout from '../components/PageLayout'

export default function DealershipDetail() {
  const { id } = useParams()
  const [dealer, setDealer] = useState(null)
  const [loading, setLoading] = useState(true)
  useEffect(() => { getDealershipById?.(id).then(r => setDealer(r.data)).catch(() => setDealer(null)).finally(() => setLoading(false)) }, [id])

  if (loading) return <PageLayout><div className="flex justify-center py-20"><div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div></PageLayout>
  if (!dealer) return <PageLayout><div className="text-center py-20 text-muted-foreground">Dealership not found</div></PageLayout>

  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-8">
          <p className="text-primary text-xs font-mono tracking-widest uppercase mb-2">Dealership</p>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">{dealer.name}</h1>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div className="bg-card border border-white/8 rounded-xl p-6">
            <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">Location & Contact</h3>
            <div className="space-y-3">
              {[{ icon: MapPin, val: dealer.address }, { icon: Phone, val: dealer.phone }, { icon: Clock, val: dealer.hours }, { icon: Star, val: `${dealer.rating} / 5.0` }].map(({ icon: Icon, val }) => val && (
                <div key={val} className="flex items-start gap-3 text-muted-foreground">
                  <Icon className="h-4 w-4 mt-0.5 flex-shrink-0 text-primary" />
                  <span className="text-sm">{val}</span>
                </div>
              ))}
            </div>
          </div>
          <div className="bg-card border border-white/8 rounded-xl p-6">
            <h3 className="text-foreground font-semibold text-sm uppercase tracking-wider mb-4">Inventory</h3>
            <div className="flex items-center gap-3">
              <Car className="h-8 w-8 text-primary" />
              <div>
                <div className="text-3xl font-black text-foreground font-mono">{dealer.carCount || dealer.car_count || 'N/A'}</div>
                <div className="text-muted-foreground text-xs uppercase tracking-widest">Vehicles in Stock</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </PageLayout>
  )
}
