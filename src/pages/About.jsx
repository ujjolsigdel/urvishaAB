import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import AnimatedSection from '../components/AnimatedSection.jsx'
import CTASection from '../components/CTASection.jsx'
import { FiCheck } from 'react-icons/fi'

const reasons = [
  {
    title: 'Scandinavian-quality finish',
    desc: 'Clean edges, tidy sites, and a professional look that improves curb appeal.',
  },
  {
    title: 'Clear communication',
    desc: 'Straightforward quotes, predictable schedules, and quick responses.',
  },
  {
    title: 'Year-round coverage',
    desc: 'Summer garden care, autumn leaf removal, and winter snow services.',
  },
  {
    title: 'Residential + commercial expertise',
    desc: 'We work with homeowners, businesses, housing associations, and property managers.',
  },
]

const areas = ['Stockholm', 'Uppsala', 'Södertälje', 'Västerås', 'Nearby regions']

export default function About() {
  return (
    <div className="pb-10">
      <section className="border-b border-slate-900/10 bg-slate-50 py-14 sm:py-16">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="About us"
              title="A dependable partner for gardens and properties in Sweden"
              description="We help clients maintain outdoor areas that feel welcoming, safe, and well cared for—without hassle."
            />
          </AnimatedSection>
        </Container>
      </section>

      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <AnimatedSection className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-7 shadow-soft ring-soft sm:p-10">
              <h3 className="text-lg font-semibold text-slate-900">Our mission</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Deliver reliable, professional gardening and outdoor maintenance
                services with Scandinavian simplicity: clear communication,
                tidy work, and consistent results.
              </p>

              <h3 className="mt-8 text-lg font-semibold text-slate-900">
                Experience you can trust
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Our team supports both residential and commercial sites with
                routines that respect your property, your neighbors, and your
                schedule. From weekly lawn care to seasonal cleanups and winter
                snow services, we plan ahead so everything runs smoothly.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-5" delay={0.05}>
            <div className="rounded-3xl bg-gradient-to-br from-forest-50 to-white p-7 shadow-soft ring-soft sm:p-10">
              <div className="text-sm font-semibold text-slate-900">
                Service areas
              </div>
              <p className="mt-2 text-sm text-slate-600">
                We primarily serve these areas in Sweden:
              </p>
              <ul className="mt-4 space-y-3 text-sm">
                {areas.map((a) => (
                  <li key={a} className="flex items-center gap-3 text-slate-700">
                    <span className="grid h-8 w-8 place-items-center rounded-xl bg-white ring-soft">
                      <FiCheck className="text-forest-700" />
                    </span>
                    <span className="font-medium">{a}</span>
                  </li>
                ))}
              </ul>
              <p className="mt-5 text-xs text-slate-500">
                Not sure if you’re within range? Send your address and we’ll
                confirm quickly.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-12">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Why choose us"
              title="Professional care that protects your property’s value"
              description="Our approach is simple: do the job right, keep it tidy, and make it easy for you."
            />
          </AnimatedSection>

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {reasons.map((r, idx) => (
              <AnimatedSection key={r.title} delay={idx * 0.05}>
                <div className="rounded-2xl bg-white p-6 shadow-soft ring-soft transition hover:-translate-y-1 hover:shadow-lift">
                  <div className="text-base font-semibold text-slate-900">
                    {r.title}
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {r.desc}
                  </p>
                </div>
              </AnimatedSection>
            ))}
          </div>
        </div>
      </Container>

      <CTASection />
    </div>
  )
}

