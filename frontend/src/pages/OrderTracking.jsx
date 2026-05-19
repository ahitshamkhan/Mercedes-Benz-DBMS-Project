import { useState, useEffect } from 'react'
import { useParams } from 'react-router-dom'
import { Package, Truck, CheckCircle2, Clock } from 'lucide-react'
import { getOrderById } from '../api/orders'
import PageLayout from '../components/PageLayout'

const STEPS = ['pending', 'processing', 'shipped', 'delivered']

export default function OrderTracking() {
  const { id: paramId } = useParams()
  const [query, setQuery] = useState(paramId || '')
  const [searched, setSearched] = useState(!!paramId)
  const [result, setResult] = useState(null)
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (paramId) {
      setLoading(true)
      getOrderById(paramId).then(res => setResult(res.data)).catch(() => setResult(null)).finally(() => setLoading(false))
    }
  }, [paramId])

  function handleSearch(e) {
    e.preventDefault()
    if (!query.trim()) return
    setLoading(true); setSearched(true)
    getOrderById(query.trim()).then(res => setResult(res.data)).catch(() => setResult(null)).finally(() => setLoading(false))
  }

  const idx = result ? STEPS.indexOf(result.status) : -1

  return (
    <PageLayout>
      <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <p className="text-primary text-xs font-mono tracking-widest uppercase mb-2">Track</p>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Order Tracking</h1>
          <p className="text-muted-foreground text-sm mt-1">Enter your order ID to track your delivery status.</p>
        </div>

        <form onSubmit={handleSearch} className="flex gap-3 mb-10">
          <input
            placeholder="Order ID or order number"
            value={query}
            onChange={e => { setQuery(e.target.value); setSearched(false) }}
            className="flex-1 h-11 bg-card border border-white/8 text-foreground placeholder:text-muted-foreground/50 rounded-lg px-3 focus:outline-none focus:border-primary/50 text-sm"
          />
          <button type="submit" className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 h-11 rounded-lg text-sm transition-colors">Track</button>
        </form>

        {loading && <div className="flex justify-center py-12"><div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>}

        {searched && !loading && !result && (
          <div className="text-center py-16 bg-card border border-white/8 rounded-xl p-12">
            <Package className="h-10 w-10 text-muted-foreground mx-auto mb-4" />
            <p className="text-muted-foreground">No order found for "{query}"</p>
          </div>
        )}

        {result && !loading && (
          <div className="bg-card border border-white/8 rounded-xl overflow-hidden">
            <div className="p-6 border-b border-white/8">
              <div className="flex items-start justify-between">
                <div>
                  <p className="text-muted-foreground text-xs font-mono mb-1">#{result.id || result._id}</p>
                  <h3 className="text-foreground font-semibold text-base">{result.car?.model || result.car_model || 'Vehicle'}</h3>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest">{result.status}</p>
                  <p className="text-primary font-bold text-xl font-mono mt-1">PKR {(result.total_amount || result.amount || 0).toLocaleString()}</p>
                </div>
              </div>
            </div>

            {result.status !== 'cancelled' && (
              <div className="p-8">
                {/* Progress bar */}
                <div className="flex items-center mb-8">
                  {STEPS.map((s, i) => {
                    const done = i < idx
                    const active = i === idx
                    return (
                      <div key={s} className="flex items-center flex-1">
                        <div className="flex flex-col items-center flex-shrink-0">
                          <div className={`h-8 w-8 rounded-full flex items-center justify-center border-2 transition-all ${done ? 'bg-primary border-primary' : active ? 'border-primary bg-primary/10' : 'border-white/20 bg-transparent'}`}>
                            {done ? <CheckCircle2 className="h-4 w-4 text-white" /> : active ? <Clock className="h-4 w-4 text-primary" /> : <div className="h-2 w-2 rounded-full bg-white/20" />}
                          </div>
                          <span className={`text-xs font-mono uppercase mt-2 ${done || active ? 'text-primary' : 'text-muted-foreground'}`}>{s}</span>
                        </div>
                        {i < STEPS.length - 1 && <div className={`flex-1 h-0.5 mx-1 mb-5 ${i < idx ? 'bg-primary' : 'bg-white/10'}`} />}
                      </div>
                    )
                  })}
                </div>
                <div className="bg-black/40 border border-white/8 rounded-xl p-5 flex items-center justify-between">
                  <div>
                    <p className="text-muted-foreground text-xs font-mono uppercase tracking-widest">Estimated Delivery</p>
                    <p className="text-foreground font-semibold text-base mt-0.5">{result.estimated_delivery || result.estimatedDelivery || 'To be confirmed'}</p>
                  </div>
                  <Truck className="h-8 w-8 text-muted-foreground/30" />
                </div>
              </div>
            )}

            {result.status === 'cancelled' && (
              <div className="p-8 text-center">
                <p className="text-red-400 font-semibold mb-2">Order Cancelled</p>
                <p className="text-muted-foreground text-sm">Order #{result.id || result._id} has been cancelled.</p>
              </div>
            )}
          </div>
        )}
      </div>
    </PageLayout>
  )
}
