import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import ServiceCard from '../components/ServiceCard.jsx'
import CTASection from '../components/CTASection.jsx'
import AnimatedSection from '../components/AnimatedSection.jsx'
import { services } from './servicesData.js'

function groupBy(items, key) {
  return items.reduce((acc, it) => {
    const k = it[key] || 'Other'
    acc[k] = acc[k] || []
    acc[k].push(it)
    return acc
  }, {})
}

export default function Services() {
  const grouped = groupBy(services, 'group')
  const order = ['Trädgårdsskötsel', 'Säsongsarbete', 'Vinter', 'Kommersiellt']

  return (
    <div className="pb-10">
      <section className="border-b border-slate-900/10 bg-gradient-to-b from-forest-50 to-white py-14 sm:py-16">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Tjänster"
              title="Allt du behöver för en ren, säker och välskött utomhusmiljö"
              description="Från veckovis gräsmattsvård till säsongsrensningar och vintersnötjänster. Vi stödjer husägare, företag, bostadskooperationer och fastighetsförvaltare."
            />
          </AnimatedSection>
        </Container>
      </section>

      <Container className="py-14 sm:py-16">
        <div className="space-y-14">
          {order
            .filter((g) => grouped[g])
            .map((g) => (
              <section key={g}>
                <AnimatedSection>
                  <div className="flex items-end justify-between gap-6">
                    <h3 className="text-lg font-semibold text-slate-900 sm:text-xl">
                      {g}
                    </h3>
                    <div className="hidden text-sm text-slate-500 sm:block">
                      Begär ett offert för engångs- eller återkommande arbete.
                    </div>
                  </div>
                </AnimatedSection>

                <div className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                  {grouped[g].map((s, idx) => (
                    <AnimatedSection key={s.id} delay={idx * 0.04}>
                      <ServiceCard
                        icon={s.icon}
                        title={s.title}
                        description={s.description}
                      />
                    </AnimatedSection>
                  ))}
                </div>
              </section>
            ))}
        </div>
      </Container>

      <CTASection />
    </div>
  )
}

