import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { Heart, Trash2, ArrowRight } from 'lucide-react'
import { getWishlist, removeFromWishlist } from '../api/wishlist'
import PageLayout from '../components/PageLayout'

export default function Wishlist() {
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    getWishlist().then(res => setItems(res.data || [])).catch(() => setItems([])).finally(() => setLoading(false))
  }, [])

  async function remove(id) {
    try { await removeFromWishlist(id); setItems(p => p.filter(c => (c.id || c._id) !== id)) } catch {}
  }

  return (
    <PageLayout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="flex items-end justify-between mb-10">
          <div>
            <p className="text-primary text-xs font-mono tracking-widest uppercase mb-2">Saved</p>
            <h1 className="text-3xl font-bold text-foreground tracking-tight">My Wishlist</h1>
            {!loading && <p className="text-muted-foreground text-sm mt-1">{items.length} saved vehicle{items.length !== 1 ? 's' : ''}</p>}
          </div>
          {items.length > 0 && (
            <button onClick={() => setItems([])} className="flex items-center gap-2 text-muted-foreground hover:text-foreground text-sm transition-colors">
              <Trash2 className="h-4 w-4" /> Clear All
            </button>
          )}
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>
        ) : items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-24 text-center bg-card border border-white/8 rounded-xl p-12">
            <Heart className="h-12 w-12 text-muted-foreground mb-4" />
            <h3 className="text-foreground font-semibold text-lg mb-2">Your wishlist is empty</h3>
            <p className="text-muted-foreground text-sm mb-6">Save vehicles you love to compare and revisit.</p>
            <Link to="/new-arrivals" className="bg-primary hover:bg-primary/90 text-white text-sm font-medium px-6 py-2 rounded-md transition-colors">Browse Models</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {items.map(car => (
              <div key={car.id || car._id} className="group relative bg-card border border-white/8 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5">
                <div className="relative h-48 bg-zinc-900 overflow-hidden">
                  {(car.primary_image || car.image) ? (
                    <img src={car.primary_image || car.image} alt={car.model || car.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center">
                      <div className="text-6xl font-black text-white/10">{(car.model || car.name || '').split(' ')[0]}</div>
                    </div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
                  <button onClick={() => remove(car.id || car._id)} className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-red-400 hover:bg-red-500/20 transition-all">
                    <Heart className="h-3.5 w-3.5 fill-current" />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground text-xs font-mono tracking-widest uppercase mb-0.5">{car.category}</p>
                  <h3 className="text-foreground font-semibold text-base mb-1">{car.model || car.name}</h3>
                  <p className="text-primary font-bold font-mono mb-4">PKR {(car.price || 0).toLocaleString()}</p>
                  <Link to="/place-order" className="flex items-center justify-between w-full border border-white/15 text-foreground hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all rounded-md px-3 py-2 text-xs font-medium">
                    Order Now <ArrowRight className="h-3.5 w-3.5" />
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
