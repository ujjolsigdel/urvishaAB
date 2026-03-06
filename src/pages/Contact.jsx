import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import AnimatedSection from '../components/AnimatedSection.jsx'
import ContactForm from '../components/ContactForm.jsx'
import MapEmbed from '../components/MapEmbed.jsx'
import { FiMail, FiPhone, FiMapPin, FiClock } from 'react-icons/fi'

export default function Contact() {
  return (
    <div className="pb-10">
      <section className="border-b border-slate-900/10 bg-gradient-to-b from-forest-50 to-white py-14 sm:py-16">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Contact"
              title="Request a quote or ask a question"
              description="Share what you need and we’ll respond quickly. We work with private homeowners, businesses, housing associations, and property management companies."
            />
          </AnimatedSection>
        </Container>
      </section>

      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <div className="lg:col-span-5">
            <AnimatedSection>
              <div className="rounded-3xl bg-white p-6 shadow-soft ring-soft sm:p-8">
                <div className="text-lg font-semibold text-slate-900">
                  Business details
                </div>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">
                  We typically respond within 1 business day. For urgent winter
                  needs, please call.
                </p>

                <div className="mt-6 space-y-4 text-sm">
                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-forest-50 text-forest-800 ring-1 ring-forest-700/10">
                      <FiPhone />
                    </span>
                    <div>
                      <div className="font-semibold text-slate-900">
                        +46 (0)73 666 40 46
                      </div>
                      <div className="text-slate-600">Phone</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-forest-50 text-forest-800 ring-1 ring-forest-700/10">
                      <FiMail />
                    </span>
                    <div>
                      <div className="font-semibold text-slate-900">
                        info@urvishaab.se
                      </div>
                      <div className="text-slate-600">Email</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-forest-50 text-forest-800 ring-1 ring-forest-700/10">
                      <FiClock />
                    </span>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Mon–Fri 08:00–17:00
                      </div>
                      <div className="text-slate-600">Business hours</div>
                    </div>
                  </div>

                  <div className="flex items-start gap-3">
                    <span className="grid h-10 w-10 place-items-center rounded-2xl bg-forest-50 text-forest-800 ring-1 ring-forest-700/10">
                      <FiMapPin />
                    </span>
                    <div>
                      <div className="font-semibold text-slate-900">
                        Sweden (primary areas)
                      </div>
                      <div className="text-slate-600">
                        Stockholm • Uppsala • Södertälje • Västerås
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </AnimatedSection>

            <div className="mt-6">
              <AnimatedSection delay={0.05}>
                <div className="rounded-3xl bg-slate-50 p-6 ring-1 ring-slate-900/10 sm:p-8">
                  <div className="text-sm font-semibold text-slate-900">
                    Service area map
                  </div>
                  <p className="mt-2 text-sm text-slate-600">
                    We operate across Sweden, with a strong focus on the
                    Stockholm region.
                  </p>
                  <div className="mt-4">
                    <MapEmbed />
                  </div>
                </div>
              </AnimatedSection>
            </div>
          </div>

          <div className="lg:col-span-7">
            <AnimatedSection delay={0.04}>
              <ContactForm />
            </AnimatedSection>
          </div>
        </div>
      </Container>
    </div>
  )
}

