import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Package, ArrowRight } from 'lucide-react'
import { getMyOrders } from '../api/orders'
import PageLayout from '../components/PageLayout'

const STATUS = {
  pending:    'bg-yellow-500/10 text-yellow-400 border-yellow-500/20',
  processing: 'bg-blue-500/10 text-blue-400 border-blue-500/20',
  shipped:    'bg-indigo-500/10 text-indigo-400 border-indigo-500/20',
  delivered:  'bg-green-500/10 text-green-400 border-green-500/20',
  cancelled:  'bg-red-500/10 text-red-400 border-red-500/20',
}

export default function MyOrders() {
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getMyOrders().then(res => setOrders(res.data || [])).catch(() => setOrders([])).finally(() => setLoading(false))
  }, [])

  return (
    <PageLayout>
      <div className="mx-auto max-w-4xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <p className="text-primary text-xs font-mono tracking-widest uppercase mb-2">Account</p>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">My Orders</h1>
          {!loading && <p className="text-muted-foreground text-sm mt-1">{orders.length} orders placed</p>}
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>
        ) : orders.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center bg-card border border-white/8 rounded-xl p-12">
            <Package className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-foreground font-semibold text-lg mb-2">No orders yet</h3>
            <p className="text-muted-foreground text-sm mb-6">Browse our models to get started.</p>
            <Link to="/new-arrivals" className="bg-primary hover:bg-primary/90 text-white text-sm font-medium px-6 py-2 rounded-md transition-colors">Browse Models</Link>
          </div>
        ) : (
          <div className="space-y-4">
            {orders.map(order => (
              <div key={order.id || order._id} className="bg-card border border-white/8 rounded-xl p-6 hover:border-white/15 transition-colors">
                <div className="flex items-start justify-between mb-4">
                  <div>
                    <p className="text-muted-foreground text-xs font-mono mb-1">#{order.id || order._id}</p>
                    <h3 className="text-foreground font-semibold text-base">{order.car?.model || order.car_model || 'Mercedes-Benz Vehicle'}</h3>
                    {order.dealership && <p className="text-muted-foreground text-xs mt-0.5">{order.dealership}</p>}
                  </div>
                  <div className="text-right flex flex-col items-end gap-2">
                    <span className={`border text-xs font-mono uppercase tracking-widest px-2.5 py-0.5 rounded-full ${STATUS[order.status] || STATUS.pending}`}>{order.status || 'pending'}</span>
                    <span className="text-primary font-bold text-lg font-mono">PKR {(order.total_amount || order.amount || 0).toLocaleString()}</span>
                  </div>
                </div>
                <div className="flex items-center justify-between pt-4 border-t border-white/8">
                  <div>
                    <p className="text-muted-foreground text-xs uppercase tracking-widest font-medium">Order Date</p>
                    <p className="text-foreground text-sm mt-0.5">{order.created_at ? new Date(order.created_at).toLocaleDateString() : 'N/A'}</p>
                  </div>
                  <Link to={`/order-tracking/${order.id || order._id}`} className="flex items-center gap-2 text-primary text-sm hover:underline">
                    Track Order <ArrowRight className="h-3.5 w-3.5" />
                  </Link>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </PageLayout>
  )
}
