import Navbar from './Navbar'
import { Link } from 'react-router-dom'

export default function PageLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col" style={{ background: 'hsl(0 0% 0%)', color: 'hsl(0 0% 95%)' }}>
      <Navbar />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-white/8 bg-black">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <div className="flex items-center gap-2 mb-4">
                <span className="text-primary text-lg font-bold">★</span>
                <span className="text-foreground font-semibold tracking-[0.2em] text-xs uppercase">Mercedes-Benz</span>
              </div>
              <p className="text-muted-foreground text-xs leading-relaxed">The best or nothing. Excellence in automotive engineering since 1926.</p>
            </div>
            <div>
              <h4 className="text-foreground text-xs font-semibold uppercase tracking-widest mb-4">Models</h4>
              <ul className="space-y-2">
                {['C-Class', 'E-Class', 'S-Class', 'GLE', 'AMG GT', 'EQS'].map((m) => (
                  <li key={m}><Link to="/" className="text-muted-foreground text-xs hover:text-foreground cursor-pointer transition-colors">{m}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-foreground text-xs font-semibold uppercase tracking-widest mb-4">Services</h4>
              <ul className="space-y-2">
                {[{ label: 'Test Drive', href: '/book-test-drive' }, { label: 'Service Booking', href: '/service-booking' }, { label: 'Order Tracking', href: '/order-tracking' }, { label: 'Support Chat', href: '/chat' }].map(({ label, href }) => (
                  <li key={label}><Link to={href} className="text-muted-foreground text-xs hover:text-foreground cursor-pointer transition-colors">{label}</Link></li>
                ))}
              </ul>
            </div>
            <div>
              <h4 className="text-foreground text-xs font-semibold uppercase tracking-widest mb-4">Legal</h4>
              <ul className="space-y-2">
                {['Privacy Policy', 'Terms of Use', 'Cookie Policy', 'Accessibility'].map((l) => (
                  <li key={l}><span className="text-muted-foreground text-xs hover:text-foreground cursor-pointer transition-colors">{l}</span></li>
                ))}
              </ul>
            </div>
          </div>
          <div className="border-t border-white/8 mt-8 pt-6 flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-muted-foreground text-xs">© 2025 Mercedes-Benz. All rights reserved.</p>
            <p className="text-muted-foreground text-xs font-mono tracking-wider">DBMS Platform v2.5</p>
          </div>
        </div>
      </footer>
    </div>
  )
}
