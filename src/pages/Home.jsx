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
      'Pålitlig, punktlig och snygg. Vår trädgård ser bättre ut varje vecka och kommunikationen är utmärkt.',
    name: 'Anna S.',
    role: 'Husägare, Stockholm',
  },
  {
    quote:
      'Bra säsongsplanering. Snöröjningen går snabbt och fastigheten känns alltid säker och välskött.',
    name: 'Johan P.',
    role: 'Fastighetsförvaltare',
  },
  {
    quote:
      'Professionell service och tydliga offerter. Uppgraderingen av trädgården gav vår entré ett modernt nordiskt utseende.',
    name: 'Maria K.',
    role: 'Kontorschef, Uppsala',
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
              Trädgårdsskötsel &amp; fastighetsskötsel i Sverige
            </div>
            <h1 className="mt-5 text-3xl font-semibold tracking-tight text-white sm:text-5xl">
              Modern och pålitlig utomhusvård för hem och företag
            </h1>
            <p className="mt-5 text-base leading-relaxed text-white/80 sm:text-lg">
              Vi håller gräsmattor, trädgårdar och utomhusområden rena, säkra och
              väl underhållna—hela året. Litar på av husägare, företag,
              bostadskooperationer och fastighetssällskap.
            </p>

            <div className="mt-7 flex flex-col gap-3 sm:flex-row sm:items-center">
              <Button to="/contact#form">
                Begär ett offert <FiArrowRight />
              </Button>
              <Button
                to="/services"
                variant="secondary"
                className="bg-white/90"
              >
                Utforska tjänster
              </Button>
            </div>

            <div className="mt-8 grid gap-3 sm:grid-cols-3">
              {[
                'Privata husägare',
                'Företag',
                'Bostadskooperationer',
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
            eyebrow="Ett bättre sätt att underhålla utomhusområden"
            title="Professionella resultat med skandinavisk enkelhet"
            description="Tydlig kommunikation, rent arbete och ett förutsägbart schema. Välj engångsjobb eller återkommande underhållspaket."
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
            Visa alla tjänster <FiArrowRight />
          </Button>
        </div>
      </Container>

      <section className="bg-slate-50 py-14 sm:py-16">
        <Container>
          <AnimatedSection>
            <SectionHeading
              //eyebrow="Testimonials"
              title="Betrodd av kunder över hela Sverige"
              description="Vi strävar efter långsiktiga relationer som bygger på tillförlitlighet, kvalitet och ett rent resultat."
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

