import { FaLeaf } from 'react-icons/fa'
import clsx from 'clsx'

export default function Logo({ className, compact = false }) {
  return (
    <div className={clsx('inline-flex items-center gap-2', className)}>
      <span className="grid h-10 w-10 place-items-center rounded-2xl bg-forest-700 text-white shadow-soft">
        <FaLeaf className="h-5 w-5" />
      </span>
      <div className={clsx('leading-tight', compact && 'hidden sm:block')}>
        <div className="text-sm font-semibold tracking-tight text-slate-900">
          Nordic Barahai AB
        </div>
        <div className="text-xs text-slate-500">för Fastighetsunderhåll</div>
      </div>
    </div>
  )
}

