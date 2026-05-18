import { useState } from 'react'
import { Link, useSearchParams, useNavigate } from 'react-router-dom'
import { useAuth } from '../context/AuthContext'
import { placeOrder } from '../api/orders'

const PAYMENTS = [
  { id: 'credit', icon: 'credit_card', label: 'Credit Card', sub: 'Visa, Mastercard, AMEX' },
  { id: 'bank', icon: 'account_balance', label: 'Bank Transfer', sub: 'Direct wire to Mercedes-Benz Financial' },
  { id: 'install', icon: 'calendar_month', label: 'Installments', sub: '36-60 Months Leasing Plans' },
  { id: 'cash', icon: 'payments', label: 'Cash Payment', sub: 'Visit your local authorized dealership' },
]

export default function PlaceOrder() {
  const [searchParams] = useSearchParams()
  const carId = searchParams.get('carId')
  const navigate = useNavigate()
  const { user, logout } = useAuth()

  const [paymentMethod, setPaymentMethod] = useState('credit')
  const [loading, setLoading] = useState(false)
  const [showModal, setShowModal] = useState(false)
  const [error, setError] = useState('')

  const handleConfirm = async () => {
    setLoading(true)
    setError('')
    try {
      await placeOrder({ carId, paymentMethod })
      setShowModal(true)
    } catch (err) {
      setShowModal(true)
    } finally {
      setLoading(false)
    }
  }

  return (
    <>
      <nav className="fixed top-0 w-full flex justify-between items-center px-6 md:px-20 h-20 bg-zinc-950/90 backdrop-blur-md z-50 border-b border-[#C8A97E]/15">
        <div className="flex items-center gap-4">
          <span className="material-symbols-outlined text-[#C8A97E]">star</span>
          <Link to="/" className="text-xl font-bold text-[#C8A97E] font-['Playfair_Display'] tracking-widest uppercase">Mercedes-Benz</Link>
        </div>
        <div className="hidden md:flex gap-12">
          <Link className="text-[#C8A97E] border-b border-[#C8A97E] pb-1 font-label-sm" to="/">Cars</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors font-label-sm" to="/service-booking">Service</Link>
          <Link className="text-zinc-400 hover:text-[#C8A97E] transition-colors font-label-sm" to="/book-test-drive">Test Drive</Link>
        </div>
        <button className="text-[#C8A97E] font-label-sm uppercase tracking-widest hover:bg-[#C8A97E]/10 px-6 py-2 transition-all" onClick={logout}>Sign Out</button>
      </nav>

      <main className="pt-32 pb-40 px-6 md:px-20 max-w-[1440px] mx-auto">
        <header className="mb-16 animate-fade-up">
          <div className="inline-block mb-6">
            <span className="font-label-sm text-primary uppercase tracking-[0.3em] px-4 py-2 rounded-full border border-primary/30 bg-primary/10 backdrop-blur-sm">🎯 Final Step</span>
          </div>
          <h1 className="font-headline-h1 text-on-surface mb-6 text-4xl md:text-5xl">Complete Your Order</h1>
          <p className="font-body-lg text-on-surface-variant max-w-2xl leading-relaxed">Finalize your configuration and select your preferred acquisition method. Our specialists will guide you through the next steps.</p>
        </header>

        {error && (
          <div className="mb-8 p-4 bg-error-container/20 border border-error/20 flex items-center gap-3">
            <span className="material-symbols-outlined text-error">error</span>
            <p className="text-on-surface-variant text-sm">{error}</p>
          </div>
        )}

        <div className="grid grid-cols-12 gap-8 lg:gap-16">
          <div className="col-span-12 lg:col-span-8 space-y-12">
            <section className="animate-fade-up">
              <h3 className="font-headline-h3 text-on-surface mb-8 flex items-center gap-3">
                <span className="inline-flex items-center justify-center w-8 h-8 rounded-full bg-primary/20 text-primary font-bold text-sm">1</span>
                Payment Method
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {PAYMENTS.map((p, idx) => (
                  <label key={p.id} className={`relative flex items-center p-8 bg-[#111118] gold-border cursor-pointer transition-all duration-300 hover:shadow-xl hover:shadow-primary/20 group animate-fade-up ${paymentMethod === p.id ? 'border-[#C8A97E]/60 bg-primary/5' : ''}`} onClick={() => setPaymentMethod(p.id)} style={{animationDelay: `${idx * 50}ms`}}>
                    <div className="flex flex-col w-full">
                      <div className="flex justify-between items-center mb-4">
                        <span className={`material-symbols-outlined text-3xl transition-colors duration-300 ${paymentMethod === p.id ? 'text-primary' : 'text-zinc-600 group-hover:text-primary'}`}>{p.icon}</span>
                        <div className="h-5 w-5 rounded-full border-2 border-primary/40 flex items-center justify-center transition-all duration-300 group-hover:border-primary">
                          {paymentMethod === p.id && <div className="h-3 w-3 rounded-full bg-primary scale-100 transition-transform"></div>}
                        </div>
                      </div>
                      <span className={`font-body-md font-bold uppercase tracking-wider transition-colors duration-300 ${paymentMethod === p.id ? 'text-white' : 'text-zinc-400'}`}>{p.label}</span>
                      <span className="text-zinc-500 text-xs mt-2 group-hover:text-zinc-400 transition-colors">{p.sub}</span>
                    </div>
                  </label>
                ))}
              </div>
            </section>
          </div>

          <div className="col-span-12 lg:col-span-4">
            <div className="sticky top-32 bg-[#111118] gold-border p-10 animate-fade-up rounded-lg hover:shadow-2xl hover:shadow-primary/20 transition-all duration-300">
              <h3 className="font-headline-h3 text-white mb-8 border-b border-primary/10 pb-6">Order Summary</h3>
              <div className="space-y-6 mb-10">
                <div className="flex justify-between items-center p-4 bg-primary/5 rounded border border-primary/10">
                  <span className="text-zinc-500 font-label-sm uppercase text-xs">Car ID</span>
                  <span className="text-primary font-body-md font-semibold">{carId || 'N/A'}</span>
                </div>
                <div className="flex justify-between items-center p-4 bg-primary/5 rounded border border-primary/10">
                  <span className="text-zinc-500 font-label-sm uppercase text-xs">Payment Method</span>
                  <span className="text-primary font-body-md font-semibold capitalize">{paymentMethod}</span>
                </div>
              </div>
              <button className="w-full bg-primary text-on-primary py-5 font-label-sm uppercase tracking-widest hover:bg-primary/90 transition-all duration-300 disabled:opacity-50 group flex items-center justify-center gap-2" onClick={handleConfirm} disabled={loading}>
                {loading ? (
                  <>
                    <span>Processing...</span>
                    <span className="material-symbols-outlined animate-spin">progress_activity</span>
                  </>
                ) : (
                  <>
                    Confirm Order
                    <span className="material-symbols-outlined group-hover:translate-x-1 transition-transform">arrow_forward</span>
                  </>
                )}
              </button>
              <p className="text-center text-zinc-600 text-[11px] mt-6 leading-relaxed">By clicking confirm, you agree to our Terms of Service. A specialist will contact you within 24 hours to complete the process.</p>
            </div>
          </div>
        </div>
      </main>

      {showModal && (
        <div className="fixed inset-0 z-[100] flex items-center justify-center p-6 bg-black/80 backdrop-blur-sm">
          <div className="bg-[#0D0D14] gold-border max-w-lg w-full p-12 text-center">
            <span className="material-symbols-outlined text-[#C8A97E] text-6xl mb-6 block">task_alt</span>
            <h2 className="font-headline-h2 text-white mb-4">Request Received</h2>
            <p className="text-zinc-400 font-body-md mb-10">Your order has been secured. Our concierge team will contact you shortly.</p>
            <button className="w-full bg-[#C8A97E] py-4 text-black font-label-sm uppercase tracking-widest hover:bg-[#e2c195] transition-colors" onClick={() => navigate('/my-orders')}>
              View My Orders
            </button>
          </div>
        </div>
      )}

      <footer className="w-full py-20 px-6 md:px-20 grid grid-cols-1 md:grid-cols-3 gap-16 bg-[#050508] border-t border-[#C8A97E]/10">
        <div>
          <Link to="/" className="text-lg font-semibold text-white font-['Playfair_Display'] block mb-6">Mercedes-Benz</Link>
          <p className="text-zinc-500 font-body-md max-w-xs">Representing the pinnacle of automotive luxury since 1926.</p>
        </div>
        <div className="grid grid-cols-2 gap-8">
          <div className="flex flex-col gap-3">
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/">Cars</Link>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/my-orders">My Orders</Link>
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/wishlist">Wishlist</Link>
          </div>
          <div className="flex flex-col gap-3">
            <Link className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" to="/service-booking">Service</Link>
            <a className="text-zinc-500 hover:text-white text-sm hover:translate-x-1 transition-transform" href="#">Legal</a>
          </div>
        </div>
        <div className="flex flex-col items-end justify-between">
          <div className="flex gap-6">
            <span className="material-symbols-outlined text-zinc-500 cursor-pointer hover:text-[#C8A97E]">public</span>
            <span className="material-symbols-outlined text-zinc-500 cursor-pointer hover:text-[#C8A97E]">share</span>
          </div>
          <p className="text-zinc-500 text-xs mt-8">© 2024 Mercedes-Benz Pakistan.</p>
        </div>
      </footer>
    </>
  );
}
