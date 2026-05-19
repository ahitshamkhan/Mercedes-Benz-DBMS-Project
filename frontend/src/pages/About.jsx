import { Shield, Zap, Globe, Award } from 'lucide-react'
import PageLayout from '../components/PageLayout'

const milestones = [
  { year: '1886', event: 'Carl Benz patents the first true automobile — the Benz Patent-Motorwagen.' },
  { year: '1926', event: 'Merger of Benz & Cie and Daimler-Motoren-Gesellschaft forms Mercedes-Benz.' },
  { year: '1954', event: 'Introduction of the legendary 300 SL Gullwing — fastest production car of its era.' },
  { year: '1978', event: 'Launch of the first production ABS brake system — pioneering automotive safety.' },
  { year: '2019', event: 'Introduction of the EQC — Mercedes-Benz enters the electric vehicle era.' },
  { year: '2025', event: 'The new era of VISION EQXX — 1,000+ km range electric vehicle concept.' },
]

export default function About() {
  return (
    <PageLayout>
      {/* Hero */}
      <section className="relative py-24 bg-black text-center overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_hsl(210_100%_60%/0.07)_0%,_transparent_65%)]" />
        <div className="relative mx-auto max-w-4xl px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-xs font-mono tracking-widest uppercase mb-3">Our Story</p>
          <h1 className="text-4xl sm:text-5xl font-black text-foreground tracking-tight mb-6">
            Engineering the Future<br />Since 1886
          </h1>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto leading-relaxed">
            Mercedes-Benz has stood at the forefront of automotive innovation for over a century. From the first horseless carriage to today's intelligent electrified machines — we define the standard.
          </p>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: Shield, title: 'Safety First', desc: 'Over 30 active safety systems working in concert to protect every journey.' },
            { icon: Zap, title: 'Performance', desc: 'AMG-tuned engines delivering precise power across every model line.' },
            { icon: Globe, title: 'Sustainability', desc: 'Our Ambition 2039 — carbon-neutral fleet, production, and supply chain.' },
            { icon: Award, title: 'Heritage', desc: '139 years of craftsmanship, innovation, and uncompromising standards.' },
          ].map(({ icon: Icon, title, desc }) => (
            <div key={title} className="bg-card border border-white/8 rounded-xl p-6 hover:border-primary/20 transition-all duration-300">
              <div className="h-10 w-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4">
                <Icon className="h-5 w-5 text-primary" />
              </div>
              <h3 className="text-foreground font-semibold text-base mb-2">{title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Timeline */}
      <section className="py-16 border-y border-white/8 bg-card/20">
        <div className="mx-auto max-w-3xl px-4 sm:px-6 lg:px-8">
          <p className="text-primary text-xs font-mono tracking-widest uppercase mb-3 text-center">Timeline</p>
          <h2 className="text-3xl font-bold text-foreground text-center mb-12 tracking-tight">A Legacy of Firsts</h2>
          <div className="space-y-0">
            {milestones.map((m, i) => (
              <div key={m.year} className="flex gap-6 group">
                <div className="flex flex-col items-center">
                  <div className="h-8 w-8 rounded-full bg-primary/10 border border-primary/30 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary" />
                  </div>
                  {i < milestones.length - 1 && <div className="w-px flex-1 bg-white/8 mt-1 mb-1 min-h-[24px]" />}
                </div>
                <div className="pb-8">
                  <div className="text-primary font-mono font-bold text-sm mb-1">{m.year}</div>
                  <p className="text-muted-foreground text-sm leading-relaxed">{m.event}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Mission */}
      <section className="py-20 mx-auto max-w-3xl px-4 text-center">
        <p className="text-primary text-xs font-mono tracking-widest uppercase mb-3">Mission</p>
        <h2 className="text-3xl font-bold text-foreground tracking-tight mb-6">The Best or Nothing</h2>
        <p className="text-muted-foreground text-lg leading-relaxed">
          This isn't just our slogan. It is the founding principle upon which every vehicle, every system, every detail is judged. We accept nothing less than excellence — and neither should you.
        </p>
      </section>
    </PageLayout>
  )
}
