import { Link } from 'react-router-dom'
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa'
import { FiMail, FiMapPin, FiPhone } from 'react-icons/fi'
import Container from './Container.jsx'
import Logo from './Logo.jsx'

const serviceLinks = [
  { label: 'Lawn mowing', to: '/services' },
  { label: 'Garden maintenance', to: '/services' },
  { label: 'Hedge trimming', to: '/services' },
  { label: 'Landscaping', to: '/services' },
  { label: 'Snow removal', to: '/services' },
  { label: 'Business property care', to: '/services' },
]

export default function Footer() {
  return (
    <footer className="border-t border-slate-900/10 bg-white">
      <Container className="py-12">
        <div className="grid gap-10 md:grid-cols-12">
          <div className="md:col-span-5">
            <Logo />
            <p className="mt-4 max-w-md text-sm leading-relaxed text-slate-600">
              Professional gardening and property maintenance services for private
              homeowners, businesses, housing associations, and property
              management companies across Sweden.
            </p>
            <div className="mt-5 flex items-center gap-3">
              <a
                className="grid h-10 w-10 place-items-center rounded-xl bg-slate-50 text-slate-700 ring-soft transition hover:bg-slate-100"
                href="https://www.facebook.com/"
                aria-label="Facebook"
                target="_blank"
                rel="noreferrer"
              >
                <FaFacebookF />
              </a>
              <a
                className="grid h-10 w-10 place-items-center rounded-xl bg-slate-50 text-slate-700 ring-soft transition hover:bg-slate-100"
                href="https://www.instagram.com/"
                aria-label="Instagram"
                target="_blank"
                rel="noreferrer"
              >
                <FaInstagram />
              </a>
              <a
                className="grid h-10 w-10 place-items-center rounded-xl bg-slate-50 text-slate-700 ring-soft transition hover:bg-slate-100"
                href="https://www.linkedin.com/"
                aria-label="LinkedIn"
                target="_blank"
                rel="noreferrer"
              >
                <FaLinkedinIn />
              </a>
            </div>
          </div>

          <div className="md:col-span-3">
            <div className="text-sm font-semibold text-slate-900">Services</div>
            <ul className="mt-4 space-y-2 text-sm">
              {serviceLinks.map((it) => (
                <li key={it.label}>
                  <Link
                    to={it.to}
                    className="text-slate-600 transition hover:text-forest-800"
                  >
                    {it.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-4">
            <div className="text-sm font-semibold text-slate-900">Contact</div>
            <div className="mt-4 space-y-3 text-sm text-slate-600">
              <div className="flex items-start gap-3">
                <FiPhone className="mt-0.5 h-5 w-5 text-forest-700" />
                <div>
                  <a
                    className="font-medium text-slate-900 hover:text-forest-800"
                    href="tel:+46736664046"
                  >
                    +46 (0)73 666 40 46
                  </a>
                  <div>Mon–Fri 08:00–17:00</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiMail className="mt-0.5 h-5 w-5 text-forest-700" />
                <div>
                  <a
                    className="font-medium text-slate-900 hover:text-forest-800"
                    href="mailto:info@urvishaab.se"
                  >
                    info@urvishaab.se
                  </a>
                  <div>Quotes &amp; bookings</div>
                </div>
              </div>
              <div className="flex items-start gap-3">
                <FiMapPin className="mt-0.5 h-5 w-5 text-forest-700" />
                <div>
                  <div className="text-slate-900">Service areas</div>
                  <div>Stockholm • Uppsala • Södertälje • Västerås</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-2 border-t border-slate-900/10 pt-6 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between">
          <div>
            © {new Date().getFullYear()} Nordic Garden &amp; Property Care. All
            rights reserved.
          </div>
          <div className="flex items-center gap-4">
            <Link className="hover:text-slate-700" to="/services">
              Services
            </Link>
            <Link className="hover:text-slate-700" to="/contact">
              Contact
            </Link>
          </div>
        </div>
      </Container>
    </footer>
  )
}

