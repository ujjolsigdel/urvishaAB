import { FiArrowRight, FiCheck } from 'react-icons/fi'
import Button from './Button.jsx'
import Container from './Container.jsx'
import AnimatedSection from './AnimatedSection.jsx'

const bullets = [
  'Reliable scheduling and clear communication',
  'Trusted by homeowners and commercial clients',
  'Seasonal plans for summer & winter',
]

export default function CTASection() {
  return (
    <div className="py-14 sm:py-16">
      <Container>
        <AnimatedSection className="overflow-hidden rounded-3xl bg-gradient-to-br from-forest-800 via-forest-800 to-slate-900 p-8 text-white shadow-lift sm:p-12">
          <div className="grid gap-10 lg:grid-cols-12 lg:items-center">
            <div className="lg:col-span-7">
              <div className="text-xs font-semibold uppercase tracking-widest text-forest-100/90">
                Fast, professional quotes
              </div>
              <h3 className="mt-3 text-2xl font-semibold tracking-tight sm:text-3xl">
                Ready to make your outdoor areas look their best?
              </h3>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/80">
                Tell us what you need and we’ll respond quickly with a clear
                quote. We handle one-time jobs and recurring maintenance for
                private homes, businesses, housing associations and property
                managers.
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
                <Button to="/contact#form" className="bg-forest-500 text-white hover:bg-forest-600">
                  Request a Quote <FiArrowRight />
                </Button>
                <Button
                  to="/services"
                  variant="ghost"
                  className="text-white ring-1 ring-white/20 hover:bg-white/10 hover:ring-white/30"
                >
                  View services
                </Button>
              </div>
            </div>
            <div className="lg:col-span-5">
              <div className="rounded-2xl bg-white/10 p-6 ring-1 ring-white/15">
                <div className="text-sm font-semibold">Why clients choose us</div>
                <ul className="mt-4 space-y-3 text-sm text-white/85">
                  {bullets.map((b) => (
                    <li key={b} className="flex items-start gap-3">
                      <span className="mt-0.5 grid h-6 w-6 place-items-center rounded-lg bg-white/15 ring-1 ring-white/20">
                        <FiCheck />
                      </span>
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </AnimatedSection>
      </Container>
    </div>
  )
}

