import clsx from 'clsx'
import { forwardRef } from 'react'
import { Link } from 'react-router-dom'

const styles = {
  base: 'inline-flex items-center justify-center gap-2 rounded-xl px-5 py-3 text-sm font-semibold transition will-change-transform focus:outline-none focus-visible:ring-2 focus-visible:ring-forest-500 focus-visible:ring-offset-2',
  primary:
    'bg-forest-700 text-white shadow-soft hover:-translate-y-0.5 hover:bg-forest-800 active:translate-y-0',
  secondary:
    'bg-forest-50 text-slate-900 ring-1 ring-forest-700/10 shadow-sm hover:-translate-y-0.5 hover:bg-forest-100 active:translate-y-0',
  ghost:
    'bg-transparent text-slate-900 hover:bg-forest-50/70 ring-1 ring-transparent hover:ring-forest-700/10',
}

const Button = forwardRef(function Button(
  { to, href, variant = 'primary', className, children, ...props },
  ref
) {
  const classes = clsx(styles.base, styles[variant], className)

  if (to) {
    return (
      <Link to={to} className={classes} ref={ref} {...props}>
        {children}
      </Link>
    )
  }

  if (href) {
    return (
      <a
        href={href}
        className={classes}
        ref={ref}
        target="_blank"
        rel="noreferrer"
        {...props}
      >
        {children}
      </a>
    )
  }

  return (
    <button className={classes} ref={ref} {...props}>
      {children}
    </button>
  )
})

export default Button

