
import clsx from 'clsx'

export default function SectionHeading({
  eyebrow,
  title,
  description,
  align = 'left',
  className,
}) {
  return (
    <div
      className={clsx(
        'max-w-2xl',
        align === 'center' && 'mx-auto text-center',
        className
      )}
    >
      {eyebrow ? (
        <div className="text-xs font-semibold uppercase tracking-widest text-forest-700">
          {eyebrow}
        </div>
      ) : null}
      <h2 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 sm:text-3xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-3 text-base leading-relaxed text-slate-600">
          {description}
        </p>
      ) : null}
    </div>
  )
}

