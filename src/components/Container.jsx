import clsx from 'clsx'

export default function Container({ className, children }) {
  return (
    <div className={clsx('mx-auto w-full max-w-7xl container-pad', className)}>
      {children}
    </div>
  )
}

