import { useState, useEffect } from 'react'
import { useParams, Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { trackOrder } from '../api/orders'

const FALLBACK = {
  orderId: 'MB-PAK-2024-8832', name: 'Mercedes-Benz S-Class', variant: 'AMG Line Premium Plus', estimatedArrival: 'October 14, 2024',
  steps: [
    { label: 'Pending', icon: 'check_circle', date: 'Aug 20, 2024', done: true, active: false },
    { label: 'Confirmed', icon: 'manufacturing', date: 'Aug 24, 2024', done: true, active: true },
    { label: 'Delivered', icon: 'auto_transmission', date: 'Expected', done: false, active: false },
  ],
  summary: [
    { label: 'Base Price', value: 'PKR 48,500,000' },
    { label: 'AMG Premium Package', value: 'PKR 2,200,000' },
    { label: 'Import Duty & Taxes', value: 'PKR 18,300,000' },
    { label: 'Delivery & Handling', value: 'PKR 150,000' },
  ],
  total: 'PKR 69.1M',
  images: [
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuCbjSHeJ97nJdExaGzslcjsXx4cJjeiBcz6efDeaPiOAjQzK_8bMnJDNUDL-dfr8EZ6zcDiAwk5gyPg-UM99RR1YQSneTED07V6rnHrJfQw8dgf90Uo1FBI8epl5LpqwdjgOMarZwetBykooFmFfoPuS9egssCvlQsczSmLeCldN3WxwE5Hk19ARp7H92SepKtEO9AA6LaRiQi8mt662uLbXxa0__vczkcUPgJg7XtlxfbUP5-90np9xrFOIlK-FQqhC8xstqIgtKc', label: 'Interior Trim', value: 'Nappa Black Leather' },
    { src: 'https://lh3.googleusercontent.com/aida-public/AB6AXuD-kvIK7ynuo3_06id0A5uihUyHL472AArjESGKzUyGrciUK4FkgbE2sWZxvwzVNHNpgcL62DodDiVolUT8HX4lcGkjz8VXxmeHJIMXQ2h44uhB0F-_k9GITt1K4rA174m9YX6IBMuVjg8XHV1LO5SalRy1yeaWAHitUysFTlQDbAeGlp2EXi8rTlBShp4x3IIeNnFK4x3YphcdYx_uVdxoUyEUmE82eHC9scz9SfzmTn02uy1Oytp3G9LyY5uqfx0JEqGZgVicHrM', label: 'Wheel Selection', value: '21" AMG Multi-Spoke' },
  ],
}

export default function OrderTracking() {
  const { id } = useParams()
  const { logout } = useAuth()
  const [order, setOrder] = useState(null)
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await trackOrder(id)
        setOrder(res.data)
      } catch { setOrder(FALLBACK) }
      finally { setLoading(false) }
    }
    fetchData()
  }, [id])

  if (loading) return <div className="min-h-screen flex items-center justify-center bg-[#050508]"><span className="material-symbols-outlined text-primary text-5xl animate-spin">progress_activity</span></div>
  if (!order) return <div className="min-h-screen flex flex-col items-center justify-center bg-[#050508] gap-6"><p className="text-zinc-500">Order not found.</p><Link to="/my-orders" className="text-primary font-label-sm uppercase">Back to Orders</Link></div>

  const doneCount = order.steps.filter(s => s.done).length
  const progressWidth = `${(doneCount / order.steps.length) * 100}%`

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]">star</span>
          <Link to="/" className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</Link>
        </div>
        <nav className="hidden md:flex gap-10 items-center">
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors font-['Playfair_Display'] text-sm" to="/">Cars</Link>
          <Link className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 font-['Playfair_Display'] text-sm" to="/my-orders">My Orders</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors font-['Playfair_Display'] text-sm" to="/wishlist">Wishlist</Link>
        </nav>
        <button className="px-6 py-2 border border-[#C8A97E] text-[#C8A97E] font-label-sm uppercase hover:bg-[#C8A97E]/10 transition-colors" onClick={logout}>Sign Out</button>
      </header>

      <main className="pt-40 pb-24 px-6 md:px-20 max-w-[1440px] mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-end gap-8 mb-20 border-b border-outline-variant pb-12">
          <div>
            <span className="font-label-sm text-primary uppercase mb-4 block">Order Details</span>
            <h1 className="font-headline-h1 text-on-background mb-2">{order.name}</h1>
            <div className="flex items-center gap-4">
              <span className="px-4 py-1 rounded-full bg-surface-container-high border border-outline-variant text-label-sm text-secondary uppercase">{order.variant}</span>
              <span className="text-secondary/60 font-body-md">Order ID: <span className="text-on-background">{order.orderId}</span></span>
            </div>
          </div>
          <div className="text-right">
            <span className="text-secondary/60 text-label-sm uppercase block mb-1">Estimated Arrival</span>
            <span className="font-headline-h3 text-primary">{order.estimatedArrival}</span>
          </div>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-12 items-start">
          <div className="lg:col-span-2 space-y-16">
            <section className="bg-surface-container-lowest gold-hairline p-10 rounded-lg">
              <h3 className="font-headline-h3 text-on-background mb-10">Production Timeline</h3>
              <div className="relative flex justify-between items-start">
                <div className="absolute top-6 left-0 w-full h-[1px] bg-outline-variant z-0"></div>
                <div className="absolute top-6 left-0 h-[1px] bg-primary z-0" style={{ width: progressWidth }}></div>
                {order.steps.map((step, i) => (
                  <div key={i} className="relative z-10 flex flex-col items-center text-center w-1/3">
                    <div className={`w-12 h-12 rounded-full flex items-center justify-center mb-4 ${step.done ? 'bg-primary' : 'bg-surface-container-highest border border-outline-variant'} ${step.active ? 'ring-8 ring-primary/10' : ''}`}>
                      <span className={`material-symbols-outlined text-xl ${step.done ? 'text-on-primary' : 'text-outline'}`}>{step.icon}</span>
                    </div>
                    <span className={`font-label-sm uppercase ${step.active ? 'text-primary' : step.done ? 'text-on-background' : 'text-outline'}`}>{step.label}</span>
                    <span className="text-xs text-secondary/60 mt-1">{step.date}</span>
                  </div>
                ))}
              </div>
            </section>

            <section className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {order.images.map((img, i) => (
                <div key={i} className="relative h-80 rounded-lg overflow-hidden group border border-outline-variant">
                  <img alt={img.label} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110" src={img.src} />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-6 left-6">
                    <p className="text-label-sm text-primary uppercase">{img.label}</p>
                    <p className="font-headline-h3 text-white">{img.value}</p>
                  </div>
                </div>
              ))}
            </section>
          </div>

          <aside className="space-y-8">
            <div className="bg-surface-container-low gold-hairline p-8 rounded-lg">
              <h4 className="font-headline-h3 text-on-background mb-8 border-b border-outline-variant pb-4">Order Summary</h4>
              <div className="space-y-4 mb-8">
                {order.summary.map((item, i) => (
                  <div key={i} className="flex justify-between items-center">
                    <span className="text-secondary/80 font-body-md">{item.label}</span>
                    <span className="text-on-background font-body-md">{item.value}</span>
                  </div>
                ))}
              </div>
              <div className="pt-6 border-t border-primary/20 flex justify-between items-end">
                <div>
                  <span className="text-label-sm text-primary uppercase block">Total Amount</span>
                  <span className="font-headline-h2 text-primary">{order.total}</span>
                </div>
              </div>
            </div>
            <Link to="/my-orders" className="w-full py-5 border border-primary text-primary font-label-sm uppercase tracking-widest hover:bg-primary hover:text-on-primary transition-all duration-300 text-center block">Back to My Orders</Link>
          </aside>
        </div>
      </main>

      <footer className="w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div>
          <Link to="/" className="text-lg font-semibold text-white font-['Playfair_Display'] block mb-6">Mercedes-Benz Pakistan</Link>
          <p className="text-zinc-500 text-sm">Excellence in every detail.</p>
        </div>
        <div className="grid grid-cols-2 gap-4">
          <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/">Cars</Link>
          <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/my-orders">My Orders</Link>
          <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/wishlist">Wishlist</Link>
          <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/book-test-drive">Test Drive</Link>
        </div>
        <div className="text-right">
          <p className="text-zinc-500 text-sm">© 2024 Mercedes-Benz Pakistan.</p>
        </div>
      </footer>
    </>
  );
}
