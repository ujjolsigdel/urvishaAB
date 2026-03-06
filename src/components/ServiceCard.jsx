import { FiArrowRight } from 'react-icons/fi'
import Button from './Button.jsx'
import clsx from 'clsx'

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  cta = 'Request a Quote',
  className,
}) {
  return (
    <div
      className={clsx(
        'group relative overflow-hidden rounded-2xl bg-white p-6 shadow-soft ring-soft transition hover:-translate-y-1 hover:shadow-lift',
        className
      )}
    >
      <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-forest-50 to-transparent opacity-0 transition group-hover:opacity-100" />
      <div className="flex items-start gap-4">
        <div className="grid h-12 w-12 place-items-center rounded-2xl bg-forest-700 text-white shadow-sm">
          {Icon ? <Icon className="h-6 w-6" /> : null}
        </div>
        <div className="min-w-0">
          <div className="text-base font-semibold text-slate-900">{title}</div>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            {description}
          </p>
          <div className="mt-4">
            <Button variant="secondary" to="/contact#form" className="px-4 py-2">
              {cta} <FiArrowRight />
            </Button>
          </div>
        </div>
      </div>
    </div>
  )
}

