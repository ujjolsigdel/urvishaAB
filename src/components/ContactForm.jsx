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
          <span className="text-xs font-semibold text-slate-400">Obligatoriskt</span>
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
      setError('Vänligen fyll i de obligatoriska fälten.')
      return
    }

    setStatus('sending')

    try {
      if (!configured) {
        throw new Error(
          'E-postutskick är inte konfigurerat än. Lägg till EmailJS-nycklar i din .env-fil.'
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
      setError(err?.message || 'Något gick fel. Försök igen.')
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
            Begär ett offert
          </div>
          <p className="mt-1 text-sm text-slate-600">
            Berätta vad du behöver så återkommer vi snabbt med ett tydligt offert.
          </p>
        </div>
        <div className="hidden sm:block">
          <div className="rounded-2xl bg-forest-50 px-4 py-2 text-xs font-semibold text-forest-800 ring-1 ring-forest-700/10">
            Sverigebaserad tjänst
          </div>
        </div>
      </div>

      {!configured ? (
        <div className="mt-5 rounded-2xl border border-amber-200 bg-amber-50 p-4 text-sm text-amber-900">
          <div className="flex items-start gap-3">
            <FiAlertTriangle className="mt-0.5 h-5 w-5" />
            <div>
              <div className="font-semibold">E-postutskick inte konfigurerat</div>
              <div className="mt-1 text-amber-900/80">
                Lägg till EmailJS-nycklar i din <code className="font-mono">.env</code>{' '}
                fil för att skicka formulärinlämningar till din e-post.
              </div>
            </div>
          </div>
        </div>
      ) : null}

      <div className="mt-6 grid gap-4 sm:grid-cols-2">
        <Field label="Namn" required>
          <input
            className={inputBase}
            value={values.name}
            onChange={(e) => update('name', e.target.value)}
            placeholder="Ditt namn"
            autoComplete="name"
          />
        </Field>
        <Field label="E-post" required>
          <input
            className={inputBase}
            value={values.email}
            onChange={(e) => update('email', e.target.value)}
            placeholder="namn@epost.se"
            autoComplete="email"
            type="email"
          />
        </Field>
        <Field label="Telefon">
          <input
            className={inputBase}
            value={values.phone}
            onChange={(e) => update('phone', e.target.value)}
            placeholder="+46..."
            autoComplete="tel"
          />
        </Field>
        <Field label="Adress">
          <input
            className={inputBase}
            value={values.address}
            onChange={(e) => update('address', e.target.value)}
            placeholder="Gata, stad"
            autoComplete="street-address"
          />
        </Field>
        <Field label="Begärd tjänst" required className="sm:col-span-2">
          <select
            className={clsx(inputBase, 'pr-10')}
            value={values.service}
            onChange={(e) => update('service', e.target.value)}
          >
            <option value="">Välj en tjänst</option>
            <option>Gräsklippning / Gräsklippning med kanter</option>
            <option>Trädgårdsunderhåll</option>
            <option>Häckklippning</option>
            <option>Trädbeskärning</option>
            <option>Trädgårdsdesign</option>
            <option>Säsongs trädgårdsrensning / Lövborttagning</option>
            <option>Snöplogning / Snöröjning</option>
            <option>Fastighetsunderhåll för företag</option>
            <option>Annan (beskriv nedan)</option>
          </select>
        </Field>
        <Field label="Meddelande" required className="sm:col-span-2">
          <textarea
            className={clsx(inputBase, 'min-h-[140px] resize-y')}
            value={values.message}
            onChange={(e) => update('message', e.target.value)}
            placeholder="Berätta om din fastighet, tidpunkt och eventuella särskilda önskemål."
          />
        </Field>
      </div>

      <div className="mt-6 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div className="text-xs text-slate-500">
          Genom att skicka godkänner du att vi kan kontakta dig angående din förfrågan.
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
              <FiLoader className="animate-spin" /> Skickar…
            </>
          ) : status === 'sent' ? (
            <>
              <FiCheckCircle /> Skickat
            </>
          ) : (
            <>
              <FiSend /> Skicka förfrågan
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

