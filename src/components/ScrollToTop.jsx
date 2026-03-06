import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

export default function ScrollToTop() {
  const { pathname, hash } = useLocation()

  useEffect(() => {
    if (hash) {
      const id = hash.replace('#', '')
      // Let the new route render before scrolling to the anchor.
      requestAnimationFrame(() => {
        const el = document.getElementById(id)
        if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
        else window.scrollTo({ top: 0, behavior: 'smooth' })
      })
      return
    }

    window.scrollTo({ top: 0, behavior: 'smooth' })
  }, [pathname, hash])

  return null
}

