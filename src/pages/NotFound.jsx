import { Link, isRouteErrorResponse, useRouteError } from 'react-router-dom'
import Container from '../components/Container.jsx'
import Button from '../components/Button.jsx'

export default function NotFound() {
  const err = useRouteError()
  const status =
    err && isRouteErrorResponse(err) ? `${err.status} ${err.statusText}` : '404'

  return (
    <div className="py-16">
      <Container>
        <div className="rounded-3xl bg-white p-8 shadow-soft ring-soft sm:p-12">
          <div className="text-xs font-semibold uppercase tracking-widest text-forest-700">
            {status}
          </div>
          <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
            Sidan hittades inte
          </h1>
          <p className="mt-3 max-w-xl text-sm leading-relaxed text-slate-600">
            Sidan du letar efter finns inte eller har flyttats.
          </p>
          <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center">
            <Button to="/">Gå till Hem</Button>
            <Link className="text-sm font-semibold text-forest-800" to="/contact">
              Kontakta oss →
            </Link>
          </div>
        </div>
      </Container>
    </div>
  )
}

