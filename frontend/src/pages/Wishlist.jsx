import { useState, useEffect } from 'react'
import { Link } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { getWishlist, removeFromWishlist } from '../api/wishlist'

const FALLBACK = [
  { id: 1, name: 'Mercedes-AMG GT Black Series', label: 'Performance Luxury', price: 'PKR 145,000,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuAM9AGqQEm4oA25o4Jz-Y7wA5RaVhKuIoELzE0AFLF9-JAdP9KbHATu8yjkt0GZV8Z6AB7lV_iGU5iyB7yi9NuVk2Sz7Uu63vfy-P7BdVL5OrZKCCHmh4rS1dvI8-0Zorw2zThZFsELtiJRjAf_FsosE79NmSQMHY_xDRAQw44itlAa6edFCI5iaROrnhes6jqa6S908tZpN8CLm0TKVrV33JShe87Cv0d2K1jsPdgi02XgiAmNsgho_cRww2uH1to-E18QwJ5Oio4' },
  { id: 11, name: 'S-Class Saloon', label: 'The Pinnacle', price: 'PKR 82,500,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuDOEdD34PTd2irGf5K2wyZDXygzUU2KPFvxjZK2s4L074Xuo5_gIRTxgVFyNSI8_Xlt-8TH5xtYEi6IN0Mp8pFCuMVHEzY6xmePfqY38LKViVZwt_RAFj7r7QwA41ELPaeT0ezNFxK1JMgmzTislzQeWK05gOjFjWGSZb6lFa_MxmU7EbBByop9FVRnRRD5aMHrPWM370UapAu-Du-5kS7WWkfLgit21AipuJ3tEmqiHnCx3DscU2HGGJrpjUNPDOXuftNDXXvmQpM' },
  { id: 3, name: 'G-Class G63 AMG', label: 'Iconic Strength', price: 'PKR 98,200,000', image: 'https://lh3.googleusercontent.com/aida-public/AB6AXuC6bjhATgJ6alrcAZw2smrGvZZrAYSe52jOCmB6MDXZnlhWGVv75Q012ARFHsGOm6ct60Q8_zIP4XqssRauTcpzDIM8TMSQhOjXBeWisX8hjHVzLNPjST8k4I7-dYwVIPTyI9PjKILijNeA1FUktVXo5gT0lUXTUqoh4pG1RwJm6aXUjYQuT-m8BRnRO2L7rWurmqoP-7KNrRF_QSTfUMns62LkOS5zv4CTd5eXN5J-z50JUfk4Oi02Z5vFA3CNbmgEl_8iJ9eyD-w' },
]

export default function Wishlist() {
  const { user, logout } = useAuth()
  const [items, setItems] = useState([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await getWishlist()
        setItems(res.data)
      } catch { setItems(FALLBACK) }
      finally { setLoading(false) }
    }
    fetchData()
  }, [])

  const handleRemove = async (carId) => {
    try { await removeFromWishlist(carId) } catch {}
    setItems(prev => prev.filter(i => i.id !== carId))
  }

  return (
    <>
      <header className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]">star</span>
          <Link to="/" className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</Link>
        </div>
        <nav className="hidden md:flex gap-10">
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors font-label-sm" to="/">CARS</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors font-label-sm" to="/service-booking">SERVICE</Link>
          <Link className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 font-label-sm" to="/wishlist">WISHLIST</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors font-label-sm" to="/my-orders">MY ORDERS</Link>
        </nav>
        <button className="text-[#C8A97E] font-label-sm hover:bg-[#C8A97E]/10 px-6 py-2 border border-[#C8A97E]/30 transition-all" onClick={logout}>Sign Out</button>
      </header>

      <main className="pt-40 pb-section-gap px-6 md:px-20 max-w-[1440px] mx-auto min-h-screen">
        <header className="mb-20">
          <div className="flex items-baseline gap-4 mb-4">
            <span className="text-primary font-label-sm tracking-[0.2em] uppercase">Private Collection</span>
            <div className="h-px bg-primary/20 flex-grow"></div>
          </div>
          <h2 className="font-headline-h1 text-on-surface">Your Saved Vehicles</h2>
          <p className="font-body-lg text-on-surface-variant max-w-2xl mt-6">Manage your preferred configurations and proceed to consultation.</p>
        </header>

        {loading ? (
          <div className="flex justify-center py-20">
            <span className="material-symbols-outlined text-primary text-4xl animate-spin">progress_activity</span>
          </div>
        ) : items.length === 0 ? (
          <div className="flex flex-col items-center justify-center py-32 text-center border border-dashed border-primary/20">
            <span className="material-symbols-outlined text-6xl text-primary/30 mb-8">car_tag</span>
            <h3 className="font-headline-h2 mb-4">Your wishlist is empty.</h3>
            <p className="font-body-md text-on-surface-variant mb-10 max-w-sm">Discover our latest models and save your favorites.</p>
            <Link className="group flex items-center gap-4 text-primary font-label-sm uppercase tracking-widest border border-primary px-10 py-4 hover:bg-primary hover:text-on-primary transition-all" to="/">
              Start exploring
              <span className="material-symbols-outlined transition-transform group-hover:translate-x-2">trending_flat</span>
            </Link>
          </div>
        ) : (
          <>
            <div className="grid grid-cols-1 md:grid-cols-12 gap-8 gap-y-12">
              {items.map((car, i) => (
                <div key={car.id} className={`${i === 0 ? 'md:col-span-8' : 'md:col-span-6'} group relative bg-surface-container-lowest hairline-border overflow-hidden card-glow transition-all duration-500`}>
                  <Link to={`/car/${car.id}`}>
                    <div className={`${i === 0 ? 'aspect-[21/9]' : 'aspect-video'} overflow-hidden`}>
                      <img className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" src={car.image} alt={car.name} />
                    </div>
                  </Link>
                  <div className="p-8 flex justify-between items-end">
                    <div>
                      <span className="font-label-sm text-primary uppercase mb-2 block">{car.label}</span>
                      <h3 className="font-headline-h3">{car.name}</h3>
                      <p className="text-primary font-headline-h3 mt-2">{car.price}</p>
                    </div>
                    <div className="flex gap-4">
                      <button className="flex items-center gap-2 font-label-sm text-error hover:bg-error/10 px-4 py-2 border border-error/20 transition-all uppercase" onClick={() => handleRemove(car.id)}>
                        <span className="material-symbols-outlined text-sm">close</span>Remove
                      </button>
                      <Link to={`/car/${car.id}`} className="font-label-sm bg-primary text-on-primary px-8 py-3 uppercase tracking-widest hover:bg-primary-fixed-dim transition-all">
                        Details
                      </Link>
                    </div>
                  </div>
                </div>
              ))}

              {items.length > 0 && (
                <div className="md:col-span-4 bg-surface-container hairline-border p-10 flex flex-col justify-between">
                  <div>
                    <h4 className="font-headline-h3 mb-6">Wishlist Summary</h4>
                    <div className="space-y-6">
                      <div className="flex justify-between border-b border-outline-variant pb-4">
                        <span className="text-on-surface-variant font-body-md">Saved Vehicles</span>
                        <span className="text-primary font-body-md font-bold">{String(items.length).padStart(2, '0')}</span>
                      </div>
                    </div>
                  </div>
                  <Link to="/dealerships" className="w-full border border-primary/40 text-primary font-label-sm py-4 uppercase tracking-widest hover:bg-primary/10 transition-all text-center mt-8">
                    Schedule Showroom Visit
                  </Link>
                </div>
              )}
            </div>
          </>
        )}
      </main>

      <footer className="w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div className="space-y-6">
          <Link to="/" className="text-lg font-semibold text-white font-['Playfair_Display']">Mercedes-Benz</Link>
          <p className="text-zinc-500 font-['Playfair_Display'] text-sm leading-relaxed">Defining the pinnacle of automotive engineering for over a century.</p>
          <p className="text-zinc-600 text-sm">© 2024 Mercedes-Benz Pakistan. All rights reserved.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-4">
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/">Cars</Link>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/my-orders">My Orders</Link>
            <Link className="text-[#C8A97E] text-sm" to="/wishlist">Wishlist</Link>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/book-test-drive">Test Drive</Link>
          </div>
          <div className="flex flex-col gap-4">
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/service-booking">Service</Link>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/about">Contact</Link>
            <a className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" href="#">Legal</a>
          </div>
        </div>
        <div className="space-y-6">
          <div className="flex gap-6 pt-4 text-zinc-500">
            <span className="material-symbols-outlined cursor-pointer hover:text-white">public</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-white">share</span>
            <span className="material-symbols-outlined cursor-pointer hover:text-white">mail</span>
          </div>
        </div>
      </footer>
    </>
  );
}
