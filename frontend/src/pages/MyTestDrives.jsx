import { useState, useEffect } from 'react'
import { Car, Calendar } from 'lucide-react'
import { getMyTestDrives } from '../api/bookings'
import PageLayout from '../components/PageLayout'

export default function MyTestDrives() {
  const [drives, setDrives] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => { getMyTestDrives?.().then(r => setDrives(r.data || [])).catch(() => setDrives([])).finally(() => setLoading(false)) }, [])

  const STATUS = { pending: 'bg-yellow-500/10 text-yellow-400 border-yellow-500/20', confirmed: 'bg-green-500/10 text-green-400 border-green-500/20', completed: 'bg-blue-500/10 text-blue-400 border-blue-500/20', cancelled: 'bg-red-500/10 text-red-400 border-red-500/20' }

  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2"><Car className="h-4 w-4 text-primary" /><p className="text-primary text-xs font-mono tracking-widest uppercase">Account</p></div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">My Test Drives</h1>
        </div>
        {loading ? <div className="flex justify-center py-20"><div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>
          : drives.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center bg-card border border-white/8 rounded-xl p-12">
              <Car className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-foreground font-semibold text-lg mb-2">No test drives booked</h3>
              <p className="text-muted-foreground text-sm mb-6">Experience Mercedes-Benz performance firsthand.</p>
              <a href="/book-test-drive" className="bg-primary hover:bg-primary/90 text-white text-sm font-medium px-6 py-2 rounded-md transition-colors">Book Now</a>
            </div>
          ) : (
            <div className="space-y-4">
              {drives.map((d, i) => (
                <div key={d.id || i} className="bg-card border border-white/8 rounded-xl p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <h3 className="text-foreground font-semibold">{d.car_model || 'Mercedes-Benz Vehicle'}</h3>
                      <p className="text-muted-foreground text-xs mt-1">{d.dealership || d.location}</p>
                    </div>
                    <span className={`border text-xs font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full ${STATUS[d.status] || STATUS.pending}`}>{d.status || 'pending'}</span>
                  </div>
                  {(d.date || d.time) && (
                    <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/8 text-muted-foreground text-xs">
                      <Calendar className="h-3.5 w-3.5" />
                      {d.date && new Date(d.date).toLocaleDateString()} {d.time && `at ${d.time}`}
                    </div>
                  )}
                </div>
              ))}
            </div>
          )}
      </div>
    </PageLayout>
  )
}
