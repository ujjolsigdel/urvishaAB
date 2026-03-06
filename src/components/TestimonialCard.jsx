import clsx from 'clsx'
import { FaQuoteLeft } from 'react-icons/fa'

export default function TestimonialCard({ quote, name, role, className }) {
  return (
    <figure
      className={clsx(
        'relative overflow-hidden rounded-2xl bg-white p-6 shadow-soft ring-soft',
        className
      )}
    >
      <div className="absolute -right-6 -top-6 grid h-20 w-20 place-items-center rounded-full bg-forest-50 text-forest-700">
        <FaQuoteLeft className="h-5 w-5" />
      </div>
      <blockquote className="text-sm leading-relaxed text-slate-700">
        “{quote}”
      </blockquote>
      <figcaption className="mt-4 text-sm">
        <div className="font-semibold text-slate-900">{name}</div>
        <div className="text-slate-500">{role}</div>
      </figcaption>
    </figure>
  )
}

