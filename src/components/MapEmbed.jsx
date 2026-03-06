import clsx from 'clsx'

export default function MapEmbed({ className }) {
  return (
    <div
      className={clsx(
        'overflow-hidden rounded-2xl bg-white shadow-soft ring-soft',
        className
      )}
    >
      <div className="relative w-full" style={{ paddingTop: '62%' }}>
        <iframe
          title="Service area map"
          className="absolute inset-0 h-full w-full"
          loading="lazy"
          referrerPolicy="no-referrer-when-downgrade"
          src="https://www.google.com/maps?q=Stockholm%20Sweden&output=embed"
        />
      </div>
    </div>
  )
}

