import { useEffect, useRef, useState } from 'react'

/**
 * Tracks how far an element has scrolled through the viewport.
 * progress = 0 when the element's top just enters the bottom of the viewport,
 * progress = 1 when the element's bottom reaches the top of the viewport.
 */
export function useScrollProgress<T extends HTMLElement>() {
  const ref = useRef<T>(null)
  const [progress, setProgress] = useState(0)

  useEffect(() => {
    function onScroll() {
      const el = ref.current
      if (!el) return
      const rect = el.getBoundingClientRect()
      const vh = window.innerHeight
      const total = rect.height + vh
      const covered = vh - rect.top
      const p = Math.min(1, Math.max(0, covered / total))
      setProgress(p)
    }

    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    window.addEventListener('resize', onScroll)
    return () => {
      window.removeEventListener('scroll', onScroll)
      window.removeEventListener('resize', onScroll)
    }
  }, [])

  return { ref, progress }
}
