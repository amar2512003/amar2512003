import { useEffect } from 'react'
import { useSceneStore, type SectionId } from '../store/useSceneStore'

export function useSectionObserver(ids: SectionId[]) {
  const setActiveSection = useSceneStore((s) => s.setActiveSection)

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id as SectionId)
          }
        })
      },
      { threshold: 0, rootMargin: '-50% 0px -50% 0px' },
    )

    ids.forEach((id) => {
      const el = document.getElementById(id)
      if (el) observer.observe(el)
    })

    return () => observer.disconnect()
  }, [ids, setActiveSection])
}
