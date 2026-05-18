import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getMyOrders } from '../api/orders'

const FALLBACK = [
  { id: 'MB-77291', name: 'S-Class Sedan', status: 'Delivered', date: 'Oct 24, 2023', price: 'PKR 48,500,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBtVApYJUsAr4nJquFnB91CdYAsYG1UkBin3cxx-FVct3D1P01U6YWB_TiG-_MKPnExgypJN-7copZBbaf1GmCENllArkNc3ZumRbrdfhZ884gUAwljEqZIungUf0_YbMH7_Xrhk9TZ2U3j-xQSzUk8SsfZaHuzLLAmxsiDdlBfjUmb1JCmtNom6x9z1H0VuR6GCew8iM0tPvCNxU3dgEeD6YKuYak9M_qu3NhgTjDT6LzWmWP8rWvCXxIraC6CCqzoMdMfDuRDYsc' },
  { id: 'MB-99012', name: 'AMG GT Coupé', status: 'Confirmed', date: 'Jan 12, 2024', price: 'PKR 92,000,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuB-QnFh__x_VnZ9Zm9umx8UPu-2CweuVWN8qv03dK-u8hQj7ItBPBTVP4MEWwvlcuWhLx00VMzUxnqRN8tFP0x1p4if-ZP3CxJzXBKKk0zVHQj81uaViTGOFSXab6Duq9GGman-aUArwJjMaT_Dl8-w0cBhCJUCKEaOk3A-8wkVZgVDN9MMqgYNMNJrHsmQoBQHBwYjmNRuukciEwkYu2v5ezfhUGNTpsJ_YgXOGRIC4OKrfDdr6HkbsJOZd7_x0obMn5yKZMQ4vI8' },
  { id: 'MB-10238', name: 'EQS Electric Sedan', status: 'Pending', date: 'Mar 05, 2024', price: 'PKR 54,200,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuBuO9UCIw71kz5HaMseG5gmDahZKnrjb1OolOs8gg5aeimEhZ7SbS2ZmT4-8HJaSRHQdqf6e6YKN0bPFLLtPHxFR3oMx2MQ9xbz1BM8Tzn5NPzoc9zmSUb-1rZbDoRuDtkYKf8b0w0vHkZEDUzVhAKZiVxnK5fvBCeN7qg3CyVpxc8L7vGe9vCiIfr3CG14SRhDW3e8E-BV8CnO57M9w3ayzILxliIavsUlCouq4IdlFb3KGKJic_gfHjSNlmSzIOtiX8Z-ff35Eo8' },
]

const statusStyle = (s) => {
  if (s === 'Delivered') return 'bg-primary/10 border-primary/20 text-primary'
  if (s === 'Confirmed') return 'bg-zinc-400/10 border-zinc-400/20 text-zinc-400'
  return 'bg-[#C8A97E]/10 border-[#C8A97E]/20 text-[#C8A97E]'
}

const statusIcon = (s) => {
  if (s === 'Delivered') return 'check_circle'
  if (s === 'Confirmed') return 'pending'
  return 'schedule'
}

export default function MyOrders() {
  const { logout } = useAuth()
  const [orders, setOrders] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getMyOrders()
        setOrders(res.data)
      } catch { setOrders(FALLBACK) }
      finally { setLoading(false) }
    }
    fetchData()
  }, [])

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E] text-2xl">star</span>
          <Link to="/" className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</Link>
        </div>
        <nav className="hidden md:flex gap-10 items-center">
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors text-sm font-['Playfair_Display']" to="/">Cars</Link>
          <Link className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 text-sm font-['Playfair_Display']" to="/my-orders">My Orders</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors text-sm font-['Playfair_Display']" to="/wishlist">Wishlist</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors text-sm font-['Playfair_Display']" to="/service-booking">Service</Link>
        </nav>
        <button className="text-[#C8A97E] border border-[#C8A97E]/30 px-6 py-2 text-xs font-label-sm tracking-widest hover:bg-[#C8A97E] hover:text-zinc-950 transition-all" onClick={logout}>SIGN OUT</button>
      </header>

      <main className="min-h-screen pt-40 pb-20 px-6 md:px-20 max-w-7xl mx-auto">
        <div className="mb-20 text-center animate-fade-up">
          <div className="inline-block mb-6">
            <span className="font-label-sm text-primary uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">📦 Order History</span>
          </div>
          <h1 className="font-headline-h1 text-on-surface mb-6 text-4xl md:text-5xl">Your Mercedes Journey</h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mx-auto leading-relaxed">Tracing the path of precision engineering as your bespoke vehicle makes its way to you. Stay updated on every milestone of your order.</p>
        </div>

        {loading ? (
          <div className="flex justify-center py-20">
            <div className="relative w-16 h-16">
              <div className="absolute inset-0 rounded-full border-2 border-primary/20"></div>
              <div className="absolute inset-0 rounded-full border-2 border-transparent border-t-primary animate-spin"></div>
            </div>
          </div>
        ) : orders.length === 0 ? (
          <div className="text-center py-20 animate-fade-up">
            <div className="relative inline-block mb-8">
              <div className="absolute inset-0 bg-primary/20 rounded-full blur-2xl scale-125"></div>
              <span className="material-symbols-outlined text-zinc-600 text-6xl relative">shopping_bag</span>
            </div>
            <h3 className="font-headline-h3 mb-4 text-2xl">No orders yet.</h3>
            <p className="text-on-surface-variant mb-8 max-w-md mx-auto leading-relaxed">Start your Mercedes-Benz journey today. Browse our exclusive collection and find the perfect vehicle for you.</p>
            <Link to="/" className="inline-flex items-center gap-2 px-10 py-4 bg-primary text-on-primary font-label-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 group">
              Explore Cars
              <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
            </Link>
          </div>
        ) : (
          <div className="relative">
            <div className="absolute left-1/2 top-0 bottom-0 timeline-line hidden lg:block"></div>
            <div className="space-y-24">
              {orders.map((order, i) => {
                const isLeft = i % 2 === 0
                return (
                  <div key={order.id} className="relative flex flex-col lg:flex-row items-center justify-between w-full">
                    <div className={`lg:w-5/12 w-full ${isLeft ? 'order-2 lg:order-1' : 'order-2'}`}>
                      <div className="glass-panel p-8 group glow-hover transition-all duration-500">
                        <div className="flex justify-between items-start mb-6">
                          <div>
                            <span className="font-label-sm text-primary uppercase tracking-tighter opacity-60">Order #{order.id}</span>
                            <h3 className="font-headline-h3 text-white mt-1">{order.name}</h3>
                          </div>
                          <span className={`px-3 py-1 border text-[10px] font-bold uppercase tracking-widest ${statusStyle(order.status)}`}>{order.status}</span>
                        </div>
                        <div className="grid grid-cols-2 gap-6 mb-8 border-y border-white/5 py-6">
                          <div>
                            <p className="text-[10px] uppercase text-zinc-500 tracking-widest mb-1">Date</p>
                            <p className="font-body-md text-on-surface">{order.date}</p>
                          </div>
                          <div>
                            <p className="text-[10px] uppercase text-zinc-500 tracking-widest mb-1">Price</p>
                            <p className="font-body-md text-on-surface">{order.price}</p>
                          </div>
                        </div>
                        <div className="flex justify-between items-center">
                          <Link to={`/order-tracking/${order.id}`} className="flex items-center gap-2 text-primary font-label-sm text-xs hover:gap-4 transition-all">
                            {order.status === 'Delivered' ? 'VIEW SPECIFICATIONS' : 'TRACK ORDER'}
                            <span className="material-symbols-outlined text-sm">arrow_forward</span>
                          </Link>
                          <span className="material-symbols-outlined text-zinc-700 text-3xl group-hover:text-primary/40 transition-colors">{statusIcon(order.status)}</span>
                        </div>
                      </div>
                    </div>
                    <div className="lg:absolute lg:left-1/2 lg:-translate-x-1/2 w-4 h-4 rounded-full bg-primary border-4 border-zinc-950 z-10 hidden lg:block"></div>
                    <div className={`lg:w-5/12 w-full ${isLeft ? 'order-1 lg:order-2' : 'order-1'} mb-8 lg:mb-0`}>
                      <img alt={order.name} className="w-full h-64 object-cover border border-white/5 grayscale hover:grayscale-0 transition-all duration-700" src={order.image} />
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        )}
      </main>

      <footer className="w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div className="space-y-8">
          <Link to="/" className="text-lg font-semibold text-white font-['Playfair_Display']">Mercedes-Benz Pakistan</Link>
          <p className="text-zinc-500 font-body-md">Defining excellence on Pakistani roads for decades.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.2em] mb-2">Explore</h4>
            <Link className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform text-sm" to="/">Cars</Link>
            <Link className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform text-sm" to="/book-test-drive">Test Drive</Link>
            <Link className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform text-sm" to="/service-booking">Service</Link>
          </div>
          <div className="flex flex-col gap-4">
            <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.2em] mb-2">Account</h4>
            <Link className="text-[#C8A97E] text-sm" to="/my-orders">My Orders</Link>
            <Link className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform text-sm" to="/wishlist">Wishlist</Link>
            <Link className="text-zinc-500 hover:text-white hover:translate-x-1 transition-transform text-sm" to="/profile">Profile</Link>
          </div>
        </div>
        <div className="space-y-8">
          <p className="text-[10px] text-zinc-600">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
      </footer>
    </>
  );
}
