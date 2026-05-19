import { useState, useEffect } from 'react'
import { CheckCircle2, ChevronRight } from 'lucide-react'
import { getAllCars } from '../api/cars'
import { placeOrder } from '../api/orders'
import { useAuth } from '../context/AuthContext'
import PageLayout from '../components/PageLayout'

const PAYMENT_METHODS = ['Bank Transfer', 'Cash on Delivery', 'Installment Plan', 'Credit Card']
const STEPS = ['Select Car', 'Payment', 'Confirm']

export default function PlaceOrder() {
  const { user } = useAuth()
  const [step, setStep] = useState(0)
  const [submitted, setSubmitted] = useState(false)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState('')
  const [cars, setCars] = useState([])
  const [carsLoading, setCarsLoading] = useState(true)
  const [selectedCar, setSelectedCar] = useState(null)
  const [paymentMethod, setPaymentMethod] = useState('')

  useEffect(() => {
    getAllCars()
      .then(r => {
        const list = (r.data || []).map(c => ({
          id: c.id,
          name: c.model || c.name,
          price: c.price,
          category: c.category,
          year: c.year,
          image: c.primary_image || c.image,
        }))
        setCars(list)
      })
      .catch(() => setCars([]))
      .finally(() => setCarsLoading(false))
  }, [])

  async function handleSubmit(e) {
    e.preventDefault()
    setLoading(true)
    setError('')
    try {
      await placeOrder({ carId: selectedCar.id, paymentMethod })
      setSubmitted(true)
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to place order. Please try again.')
    } finally {
      setLoading(false)
    }
  }

  if (submitted) return (
    <PageLayout>
      <div className="flex items-center justify-center min-h-[70vh]">
        <div className="text-center max-w-md px-4">
          <div className="h-16 w-16 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center mx-auto mb-6">
            <CheckCircle2 className="h-8 w-8 text-primary" />
          </div>
          <p className="text-primary text-xs font-mono tracking-widest uppercase mb-2">Order Placed</p>
          <h2 className="text-3xl font-bold text-foreground tracking-tight mb-3">Your Order is Confirmed</h2>
          <p className="text-muted-foreground text-sm mb-2">Vehicle: <span className="text-foreground font-medium">{selectedCar?.name}</span></p>
          <p className="text-muted-foreground text-sm">A Mercedes-Benz specialist will contact you within 24 hours.</p>
          <a href="/my-orders" className="inline-block mt-8 bg-primary hover:bg-primary/90 text-white text-sm font-medium px-6 py-2 rounded-md transition-colors">View My Orders</a>
        </div>
      </div>
    </PageLayout>
  )

  return (
    <PageLayout>
      <div className="mx-auto max-w-2xl px-4 sm:px-6 lg:px-8 py-12">
        <div className="mb-10">
          <p className="text-primary text-xs font-mono tracking-widest uppercase mb-2">Order</p>
          <h1 className="text-3xl font-bold text-foreground tracking-tight">Place Your Order</h1>
        </div>

        {/* Step indicators */}
        <div className="flex items-center gap-0 mb-10">
          {STEPS.map((s, i) => (
            <div key={s} className="flex items-center">
              <div className={`flex items-center gap-2 text-xs font-mono uppercase tracking-widest ${i <= step ? 'text-primary' : 'text-muted-foreground'}`}>
                <div className={`h-6 w-6 rounded-full flex items-center justify-center text-[10px] font-bold border-2 ${i < step ? 'bg-primary border-primary text-white' : i === step ? 'border-primary text-primary bg-transparent' : 'border-white/20 text-muted-foreground'}`}>
                  {i < step ? '✓' : i + 1}
                </div>
                <span className="hidden sm:inline">{s}</span>
              </div>
              {i < STEPS.length - 1 && <div className={`w-8 h-0.5 mx-2 ${i < step ? 'bg-primary' : 'bg-white/10'}`} />}
            </div>
          ))}
        </div>

        <div className="bg-card border border-white/8 rounded-xl p-8">
          {error && <div className="mb-5 p-3 border border-red-500/20 bg-red-500/10 rounded-lg text-red-400 text-sm">{error}</div>}

          <form onSubmit={handleSubmit}>

            {/* Step 0 — Select a car from DB */}
            {step === 0 && (
              <div className="space-y-4">
                <p className="text-muted-foreground text-xs uppercase tracking-widest font-medium mb-4">Select Your Vehicle</p>
                {carsLoading ? (
                  <div className="flex justify-center py-10"><div className="h-6 w-6 border-2 border-primary border-t-transparent rounded-full animate-spin" /></div>
                ) : cars.length === 0 ? (
                  <p className="text-muted-foreground text-sm text-center py-8">No cars available. Please add cars to the database first.</p>
                ) : (
                  <div className="space-y-3 max-h-80 overflow-y-auto pr-1">
                    {cars.map(car => (
                      <button
                        key={car.id}
                        type="button"
                        onClick={() => setSelectedCar(car)}
                        className={`w-full text-left flex items-center gap-4 p-4 rounded-lg border transition-all ${selectedCar?.id === car.id ? 'border-primary bg-primary/10' : 'border-white/8 hover:border-white/20 bg-black/30'}`}
                      >
                        <div className="h-12 w-16 rounded bg-zinc-900 flex-shrink-0 overflow-hidden">
                          {car.image
                            ? <img src={car.image} alt={car.name} className="h-full w-full object-cover" />
                            : <div className="h-full w-full flex items-center justify-center text-white/20 text-xs font-bold">MB</div>
                          }
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-muted-foreground text-xs font-mono">{car.year} · {car.category}</p>
                          <p className="text-foreground font-semibold text-sm truncate">{car.name}</p>
                        </div>
                        <div className="text-right flex-shrink-0">
                          <p className="text-primary font-bold font-mono text-sm">PKR {(car.price || 0).toLocaleString()}</p>
                        </div>
                      </button>
                    ))}
                  </div>
                )}
                <button
                  type="button"
                  onClick={() => selectedCar && setStep(1)}
                  disabled={!selectedCar}
                  className="w-full bg-primary hover:bg-primary/90 text-white font-semibold h-11 rounded-md flex items-center justify-center gap-2 transition-colors disabled:opacity-40 mt-2"
                >
                  Continue <ChevronRight className="h-4 w-4" />
                </button>
              </div>
            )}

            {/* Step 1 — Payment method */}
            {step === 1 && (
              <div className="space-y-4">
                <p className="text-muted-foreground text-xs uppercase tracking-widest font-medium mb-4">Payment Method</p>

                {/* Selected car summary */}
                <div className="flex items-center gap-3 p-3 bg-black/40 border border-white/8 rounded-lg mb-6">
                  <div className="h-10 w-14 rounded bg-zinc-900 flex-shrink-0 overflow-hidden">
                    {selectedCar?.image
                      ? <img src={selectedCar.image} alt={selectedCar.name} className="h-full w-full object-cover" />
                      : <div className="h-full w-full flex items-center justify-center text-white/20 text-xs">MB</div>
                    }
                  </div>
                  <div>
                    <p className="text-foreground font-semibold text-sm">{selectedCar?.name}</p>
                    <p className="text-primary font-mono text-xs">PKR {(selectedCar?.price || 0).toLocaleString()}</p>
                  </div>
                </div>

                <div className="space-y-3">
                  {PAYMENT_METHODS.map(method => (
                    <button
                      key={method}
                      type="button"
                      onClick={() => setPaymentMethod(method)}
                      className={`w-full text-left px-4 py-3 rounded-lg border transition-all text-sm font-medium ${paymentMethod === method ? 'border-primary bg-primary/10 text-primary' : 'border-white/8 hover:border-white/20 text-foreground'}`}
                    >
                      {method}
                    </button>
                  ))}
                </div>

                <div className="flex gap-3 mt-2">
                  <button type="button" onClick={() => setStep(0)} className="flex-1 border border-white/15 text-foreground hover:border-white/30 h-11 rounded-md text-sm transition-colors">Back</button>
                  <button
                    type="button"
                    onClick={() => paymentMethod && setStep(2)}
                    disabled={!paymentMethod}
                    className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold h-11 rounded-md text-sm transition-colors disabled:opacity-40"
                  >
                    Review Order
                  </button>
                </div>
              </div>
            )}

            {/* Step 2 — Confirm */}
            {step === 2 && (
              <div className="space-y-5">
                <p className="text-muted-foreground text-xs uppercase tracking-widest font-medium mb-4">Order Summary</p>
                <div className="bg-black/40 border border-white/8 rounded-lg overflow-hidden">
                  {[
                    { label: 'Vehicle', value: selectedCar?.name },
                    { label: 'Year', value: selectedCar?.year },
                    { label: 'Category', value: selectedCar?.category },
                    { label: 'Total Price', value: `PKR ${(selectedCar?.price || 0).toLocaleString()}` },
                    { label: 'Payment', value: paymentMethod },
                    { label: 'Customer', value: user?.name },
                    { label: 'Email', value: user?.email },
                  ].map(({ label, value }, i) => (
                    <div key={label} className={`flex justify-between px-4 py-3 ${i > 0 ? 'border-t border-white/8' : ''}`}>
                      <span className="text-muted-foreground text-sm">{label}</span>
                      <span className={`text-sm font-medium ${label === 'Total Price' ? 'text-primary font-bold font-mono' : 'text-foreground'}`}>{value}</span>
                    </div>
                  ))}
                </div>
                <div className="flex gap-3">
                  <button type="button" onClick={() => setStep(1)} className="flex-1 border border-white/15 text-foreground hover:border-white/30 h-11 rounded-md text-sm transition-colors">Back</button>
                  <button type="submit" disabled={loading} className="flex-1 bg-primary hover:bg-primary/90 text-white font-semibold h-11 rounded-md text-sm transition-colors disabled:opacity-50">
                    {loading ? 'Placing Order...' : 'Confirm Order'}
                  </button>
                </div>
              </div>
            )}
          </form>
        </div>
      </div>
    </PageLayout>
  )
}
