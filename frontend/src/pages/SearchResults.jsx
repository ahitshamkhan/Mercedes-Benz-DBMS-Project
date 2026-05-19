import { useState, useEffect } from 'react'
import { useSearchParams, Link } from 'react-router-dom'
import { Search, ArrowRight, Zap, Fuel, Heart } from 'lucide-react'
import { getAllCars } from '../api/cars'
import PageLayout from '../components/PageLayout'

export default function SearchResults() {
  const [searchParams, setSearchParams] = useSearchParams()
  const query = searchParams.get('q') || ''
  const [input, setInput] = useState(query)
  const [results, setResults] = useState([])
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    if (!query) return
    setLoading(true)
    getAllCars()
      .then(res => {
        const mapped = res.data.map(c => ({ ...c, name: c.model || c.name, image: c.primary_image || c.image, is_new: c.is_new_arrival || c.is_new }))
        setResults(mapped.filter(c => (c.name || '').toLowerCase().includes(query.toLowerCase()) || (c.category || '').toLowerCase().includes(query.toLowerCase())))
      })
      .catch(() => setResults([]))
      .finally(() => setLoading(false))
  }, [query])

  return (
    <PageLayout>
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <p className="text-primary text-xs font-mono tracking-widest uppercase mb-2">Search</p>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">
            {query ? <>Results for "<span className="text-primary">{query}</span>"</> : 'Search Models'}
          </h1>
          {query && !loading && <p className="text-muted-foreground text-sm mt-1">{results.length} vehicle{results.length !== 1 ? 's' : ''} found</p>}
        </div>

        {/* Search bar */}
        <form onSubmit={e => { e.preventDefault(); setSearchParams({ q: input }) }} className="flex gap-3 mb-10">
          <div className="relative flex-1">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
            <input value={input} onChange={e => setInput(e.target.value)} placeholder="Search models, categories..."
              className="w-full h-11 pl-10 bg-card border border-white/8 text-foreground placeholder:text-muted-foreground/50 rounded-lg focus:outline-none focus:border-primary/50 text-sm" />
          </div>
          <button type="submit" className="bg-primary hover:bg-primary/90 text-white font-semibold px-6 h-11 rounded-lg text-sm transition-colors">Search</button>
        </form>

        {loading ? (
          <div className="flex justify-center py-20"><div className="h-8 w-8 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>
        ) : !query ? (
          <div className="text-center py-20 text-muted-foreground">Enter a search term above to find Mercedes-Benz models.</div>
        ) : results.length === 0 ? (
          <div className="text-center py-20 bg-card border border-white/8 rounded-xl p-12">
            <p className="text-muted-foreground mb-4">No vehicles match "{query}"</p>
            <Link to="/" className="bg-primary hover:bg-primary/90 text-white text-sm font-medium px-6 py-2 rounded-md transition-colors">Browse All Models</Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {results.map(car => (
              <div key={car.id} className="group relative bg-card border border-white/8 rounded-xl overflow-hidden hover:border-white/20 transition-all duration-300 hover:-translate-y-0.5">
                <div className="relative h-48 bg-zinc-900 overflow-hidden">
                  {car.image ? (
                    <img src={car.image} alt={car.name} className="absolute inset-0 w-full h-full object-cover group-hover:scale-105 transition-transform duration-700" />
                  ) : (
                    <div className="absolute inset-0 flex items-center justify-center"><div className="text-6xl font-black text-white/10">{(car.name || '').split(' ')[0]}</div></div>
                  )}
                  <div className="absolute inset-0 bg-gradient-to-t from-card via-card/20 to-transparent opacity-80" />
                  <div className="absolute top-3 left-3">{car.is_new && <span className="bg-primary/90 text-white text-[10px] font-semibold tracking-widest uppercase px-2 py-0.5 rounded">New</span>}</div>
                  <button className="absolute top-3 right-3 h-8 w-8 rounded-full bg-black/60 border border-white/15 flex items-center justify-center text-muted-foreground hover:text-primary opacity-0 group-hover:opacity-100 transition-all">
                    <Heart className="h-3.5 w-3.5" />
                  </button>
                </div>
                <div className="p-4">
                  <p className="text-muted-foreground text-xs font-mono tracking-widest uppercase mb-0.5">{car.year} · {car.category}</p>
                  <h3 className="text-foreground font-semibold text-base mb-1">{car.name}</h3>
                  <p className="text-primary font-bold font-mono mb-4">PKR {(car.price || 0).toLocaleString()}</p>
                  <Link to={`/car/${car.id}`} className="flex items-center justify-between w-full border border-white/15 text-foreground hover:bg-primary/10 hover:border-primary/50 hover:text-primary transition-all rounded-md px-3 py-2 text-xs font-medium">
                    View Details <ArrowRight className="h-3.5 w-3.5" />
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
