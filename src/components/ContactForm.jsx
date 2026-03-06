import { useMemo, useState } from 'react'
import clsx from 'clsx'
import { FiCheckCircle, FiLoader, FiSend, FiAlertTriangle } from 'react-icons/fi'
import emailjs from '@emailjs/browser'

const initial = {
  name: '',
  email: '',
  phone: '',
  address: '',
  service: '',
  message: '',
}

function Field({ label, required, className, children }) {
  return (
    <label className={clsx('block', className)}>
      <div className="mb-2 flex items-center gap-2 text-sm font-medium text-slate-900">
        <span>{label}</span>
        {required ? (
          <span className="text-xs font-semibold text-slate-400">Required</span>
        ) : null}
      </div>
      {children}
    </label>
  )
}

const inputBase =
  'w-full rounded-xl bg-white px-4 py-3 text-sm text-slate-900 ring-soft shadow-sm outline-none transition focus:ring-2 focus:ring-forest-400/60'

export default function ContactForm() {
  const [values, setValues] = useState(initial)
  const [status, setStatus] = useState('idle') // idle | sending | sent | error
  const [error, setError] = useState('')

  const config = useMemo(() => {
    return {
      serviceId: import.meta.env.VITE_EMAILJS_SERVICE_ID,
      templateId: import.meta.env.VITE_EMAILJS_TEMPLATE_ID,
      publicKey: import.meta.env.VITE_EMAILJS_PUBLIC_KEY,
    }
  }, [])

  const configured = Boolean(
    config.serviceId && config.templateId && config.publicKey
  )

  function update(key, next) {
    setValues((v) => ({ ...v, [key]: next }))
  }

  async function onSubmit(e) {
    e.preventDefault()
    setError('')

    if (!values.name || !values.email || !values.service || !values.message) {
      setStatus('error')
      setError('Please fill in the required fields.')
      return
    }

    setStatus('sending')

    try {
      if (!configured) {
        throw new Error(
          'Email sending is not configured yet. Add EmailJS keys to your .env file.'
        )
      }

      const params = {
        from_name: values.name,
        from_email: values.email,
        phone: values.phone,
        address: values.address,
        service_requested: values.service,
        message: values.message,
      }

      await emailjs.send(config.serviceId, config.templateId, params, {
        publicKey: config.publicKey,
      })

      setStatus('sent')
      setValues(initial)
    } catch (err) {
      setStatus('error')
      setError(err?.message || 'Something went wrong. Please try again.')
    }
  }

  return (
    <form
      id="form"
      onSubmit={onSubmit}
      className="rounded-3xl bg-white p-6 shadow-soft ring-soft sm:p-8"
    >
      <div className="flex items-start justify-between gap-6">
        <div>
          <div className="text-lg font-semibold text-slate-900">
            Request a quote
          </div>
          <p className="mt-1 text-sm text-slate-600">
            Tell us what you need and we’ll get back quickly with a clear quote.
          </p>
        </div>
        <div className="hidden sm:block">
          <div className="rounded-2xl bg-forest-50 px-4 py-2 text-xs font-semibold text-forest-800 ring-1 ring-forest-700/10">
            Sweden-based service
          </div>
        </div>
      </div>

      {!configured ? (
        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <div className="flex items-start gap-3">
            <FiAlertTriangle className="mt-0.5 h-5 w-5" />
            <div>
              <div className="font-semibold">Email sending not configured</div>
              <div className="mt-1 text-amber-900/80">
                Add EmailJS keys in your <code className="font-mono">.env</code>{' '}
                file to send form submissions to your email.
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Name" required>
          <input
            className={inputBase}
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Your name"
            autoComplete="name"
          />
        </Field>
        <Field label="Email" required>
          <input
            className={inputBase}
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="name@email.com"
            autoComplete="email"
            type="email"
          />
        </Field>
        <Field label="Phone">
          <input
            className={inputBase}
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="+46..."
            autoComplete="tel"
          />
        </Field>
        <Field label="Address">
          <input
            className={inputBase}
            value={values.address}
            onChange={(e) => update('address', e.target.value)}
            placeholder="Street, city"
            autoComplete="street-address"
          />
        </Field>
        <Field label="Service requested" required className="sm:col-span-2">
          <select
            className={clsx(inputBase, 'pr-10')}
            value={values.service}
            onChange={(e) => update('service', e.target.value)}
          >
            <option value="">Select a service</option>
            <option>Lawn mowing / Grass cutting</option>
            <option>Garden maintenance</option>
            <option>Hedge trimming</option>
            <option>Tree pruning</option>
            <option>Landscaping</option>
            <option>Seasonal yard cleanup / Leaf removal</option>
            <option>Snow plowing / Snow removal</option>
            <option>Business property maintenance</option>
            <option>Other (describe below)</option>
          </select>
        </Field>
        <Field label="Message" required className="sm:col-span-2">
          <textarea
            className={clsx(inputBase, 'min-h-[140px] resize-y')}
            value={values.message}
            onChange={(e) => update('message', e.target.value)}
            placeholder="Tell us about your property, timing, and any special requests."
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-slate-500">
          By submitting, you agree that we may contact you about your request.
        </div>

        <button
          type="submit"
          disabled={status === 'sending'}
          className={clsx(
            'inline-flex items-center justify-center gap-2 rounded-xl bg-forest-700 px-5 py-3 text-sm font-semibold text-white shadow-soft transition hover:-translate-y-0.5 hover:bg-forest-800 disabled:pointer-events-none disabled:opacity-70',
            status === 'sent' && 'bg-forest-800'
          )}
        >
          {status === 'sending' ? (
            <>
              <FiLoader className="animate-spin" /> Sending…
            </>
          ) : status === 'sent' ? (
            <>
              <FiCheckCircle /> Sent
            </>
          ) : (
            <>
              <FiSend /> Send request
            </>
          )}
        </button>
      </div>

      {status === 'error' && error ? (
        <div className="mt-4 rounded-2xl border border-rose-200 bg-rose-50 p-4 text-sm text-rose-900">
          {error}
        </div>
      ) : null}
    </form>
  )
}

