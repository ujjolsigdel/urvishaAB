import heroBg from '../assets/hero-garden.svg'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import TestimonialCard from '../components/TestimonialCard.jsx'
import CTASection from '../components/CTASection.jsx'
import AnimatedSection from '../components/AnimatedSection.jsx'
import { services, featuredServiceIds } from './servicesData.js'
import { FiArrowRight, FiCheck } from 'react-icons/fi'

const testimonials = [
  {
    quote:
      'Reliable, punctual and tidy. Our garden looks better every week and communication is excellent.',
    name: 'Anna S.',
    role: 'Homeowner, Stockholm',
  },
  {
    quote:
      'Great seasonal planning. Snow removal is fast and the property always feels safe and well maintained.',
    name: 'Johan P.',
    role: 'Property manager',
  },
  {
    quote:
      'Professional service and clear quotes. The landscaping upgrade gave our entrance a modern Nordic look.',
    name: 'Maria K.',
    role: 'Office manager, Uppsala',
  },
]

export default function Home() {
  const featured = services.filter((s) => featuredServiceIds.includes(s.id))

  return (
    <div className="pb-10">
      <section
        className="relative overflow-hidden border-b border-slate-900/10"
        style={{
          backgroundImage: `url(${heroBg})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
        }}
      >
        <div className="absolute inset-0 bg-gradient-to-r from-slate-950/60 via-slate-950/40 to-slate-950/10" />
        <Container className="relative py-16 sm:py-20">
          <div className="max-w-2xl">
            <div className="inline-flex items-center gap-2 rounded-full bg-white/10 px-4 py-2 text-xs font-semibold text-white ring-1 ring-white/15 backdrop-blur">
              <span className="inline-flex h-2 w-2 rounded-full bg-moss-300" />
              Gardening &amp; property maintenance in Sweden
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Modern, reliable outdoor care for homes and businesses
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
              We keep lawns, gardens and outdoor areas clean, safe and
              well-maintained—year-round. Trusted by homeowners, businesses,
              housing associations and property managers.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/contact#form">
                Request a Quote <FiArrowRight />
              </Button>
              <Button
                to="/services"
                variant="secondary"
                className="bg-white/90"
              >
                Explore services
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                'Private homeowners',
                'Businesses',
                'Housing associations',
              ].map((t) => (
                <div
                  key={t}
                  className="flex items-center gap-2 rounded-2xl bg-white/10 px-4 py-3 text-sm text-white ring-1 ring-white/15 backdrop-blur"
                >
                  <span className="grid h-7 w-7 place-items-center rounded-xl bg-white/10 ring-1 ring-white/15">
                    <FiCheck />
                  </span>
                  <span className="font-medium">{t}</span>
                </div>
              ))}
            </div>
          </div>
        </Container>
      </section>

      <Container className="py-14 sm:py-16">
        <AnimatedSection>
          <SectionHeading
            eyebrow="A better way to maintain outdoor areas"
            title="Professional results with Scandinavian simplicity"
            description="Clear communication, tidy work, and a predictable schedule. Choose one-time jobs or ongoing maintenance packages."
          />
        </AnimatedSection>

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {featured.map((s, idx) => (
            <AnimatedSection key={s.id} delay={idx * 0.05}>
              <ServiceCard
                icon={s.icon}
                title={s.title}
                description={s.description}
              />
            </AnimatedSection>
          ))}
        </div>

        <div className="mt-10 flex justify-center">
          <Button to="/services" variant="ghost" className="px-5">
            View all services <FiArrowRight />
          </Button>
        </div>
      </Container>

      <section className="bg-slate-50 py-14 sm:py-16">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Testimonials"
              title="Trusted by clients across Sweden"
              description="We aim for long-term relationships—built on reliability, quality, and a clean finish."
            />
          </AnimatedSection>

          <div className="mt-10 grid gap-4 lg:grid-cols-3">
            {testimonials.map((t, idx) => (
              <AnimatedSection key={t.name} delay={idx * 0.06}>
                <TestimonialCard {...t} />
              </AnimatedSection>
            ))}
          </div>
        </Container>
      </section>

      <CTASection />
    </div>
  )
}

