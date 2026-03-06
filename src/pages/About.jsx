import Container from '../components/Container.jsx'
import SectionHeading from '../components/SectionHeading.jsx'
import AnimatedSection from '../components/AnimatedSection.jsx'
import CTASection from '../components/CTASection.jsx'
import { FiCheck } from 'react-icons/fi'

const reasons = [
  {
    title: 'Skandinavisk kvalitetsfinish',
    desc: 'Rena kanter, välstädade platser och ett professionellt utseende som förbättrar fastighetens värde.',
  },
  {
    title: 'Tydlig kommunikation',
    desc: 'Raka offerter, förutsägbara scheman och snabba svar.',
  },
  {
    title: 'Året runt-täckning',
    desc: 'Sommars trädgårdsvård, höstbladsvällning och vintersnötjänster.',
  },
  {
    title: 'Expertis för bostäder och företag',
    desc: 'Vi arbetar med husägare, företag, bostadskooperationer och fastighetsförvaltare.',
  },
]

const areas = ['Stockholm', 'Uppsala', 'Södertälje', 'Västerås', 'Närliggande regioner']

export default function About() {
  return (
    <div className="pb-10">
      <section className="border-b border-slate-900/10 bg-slate-50 py-14 sm:py-16">
        <Container>
          <AnimatedSection>
            <SectionHeading
              eyebrow="Om oss"
              title="En pålitlig partner för trädgårdar och fastigheter i Sverige"
              description="Vi hjälper kunder att underhålla utomhusområden som känns välkomnande, säkra och välskötta—utan besvär."
            />
          </AnimatedSection>
        </Container>
      </section>

      <Container className="py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-12 lg:items-start">
          <AnimatedSection className="lg:col-span-7">
            <div className="rounded-3xl bg-white p-7 shadow-soft ring-soft sm:p-10">
              <h3 className="text-lg font-semibold text-slate-900">Vårt uppdrag</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Leverera pålitliga, professionella trädgårds- och utomhusunderhållstjänster
                med skandinavisk enkelhet: tydlig kommunikation, rent arbete och
                konsekventa resultat.
              </p>

              <h3 className="mt-8 text-lg font-semibold text-slate-900">
                Erfarenhet du kan lita på
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">
                Vårt team stödjer både bostads- och kommersiella platser med
                rutiner som respekterar din fastighet, dina grannar och ditt
                schema. Från veckovis gräsmattsvård till säsongsrensningar och vintersnötjänster,
                vi planerar i förväg så att allt går smidigt.
              </p>
            </div>
          </AnimatedSection>

          <AnimatedSection className="lg:col-span-5" delay={0.05}>
            <div className="rounded-3xl bg-gradient-to-br from-forest-50 to-white p-7 shadow-soft ring-soft sm:p-10">
              <div className="text-sm font-semibold text-slate-900">
                Serviceområden
              </div>
              <p className="mt-2 text-sm text-slate-600">
                Vi betjänar främst dessa områden i Sverige:
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
                Osäker på om du är inom räckhåll? Skicka din adress så bekräftar vi snabbt.
              </p>
            </div>
          </AnimatedSection>
        </div>

        <div className="mt-12">
          <AnimatedSection>
            <SectionHeading
              eyebrow="Varför välja oss?"
              title="Professionell vård som skyddar din fastighets värde"
              description="Vårt tillvägagångssätt är enkelt: gör jobbet rätt, håll det rent och gör det enkelt för dig."
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

