import { useState, useEffect } from 'react'
import { Wrench, Calendar } from 'lucide-react'
import { getMyServices } from '../api/services'
import PageLayout from '../components/PageLayout'

export default function MyServiceHistory() {
  const [services, setServices] = useState([])
  const [loading, setLoading] = useState(true)
  useEffect(() => { getMyServices().then(r => setServices(r.data || [])).catch(() => setServices([])).finally(() => setLoading(false)) }, [])

  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <div className="flex items-center gap-2 mb-2"><Wrench className="h-4 w-4 text-primary" /><p className="text-primary text-xs font-mono tracking-widest uppercase">Account</p></div>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Service History</h1>
        </div>
        {loading ? <div className="flex justify-center py-20"><div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>
          : services.length === 0 ? (
            <div className="flex flex-col items-center justify-center py-24 text-center bg-card border border-white/8 rounded-xl p-12">
              <Wrench className="h-12 w-12 text-muted-foreground mb-4" />
              <h3 className="text-foreground font-semibold text-lg mb-2">No service history yet</h3>
              <p className="text-muted-foreground text-sm">Your completed service records will appear here.</p>
            </div>
          ) : (
            <div className="space-y-4">
              {services.map((s, i) => (
                <div key={s.id || i} className="bg-card border border-white/8 rounded-xl p-6">
                  <div className="flex items-start justify-between">
                    <div>
                      <p className="text-muted-foreground text-xs font-mono mb-1">{s.service_type || 'Service'}</p>
                      <h3 className="text-foreground font-semibold">{s.vehicle || 'Mercedes-Benz Vehicle'}</h3>
                      <p className="text-muted-foreground text-xs mt-1">{s.location}</p>
                    </div>
                    <div className="text-right">
                      <span className="bg-green-500/10 text-green-400 border border-green-500/20 text-xs font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full">{s.status || 'Completed'}</span>
                      {s.cost && <p className="text-primary font-bold font-mono mt-2">PKR {s.cost.toLocaleString()}</p>}
                    </div>
                  </div>
                  {s.date && <div className="flex items-center gap-2 mt-4 pt-4 border-t border-white/8 text-muted-foreground text-xs"><Calendar className="h-3.5 w-3.5" />{new Date(s.date).toLocaleDateString()}</div>}
                </div>
              ))}
            </div>
          )}
      </div>
    </PageLayout>
  )
}
