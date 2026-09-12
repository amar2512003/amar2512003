import { useEffect, useState } from 'react'

const INTERVAL_MS = 1000

export function ScreenshotCarousel({ images, alt }: { images: string[]; alt: string }) {
  const [index, setIndex] = useState(0)

  useEffect(() => {
    if (images.length < 2) return
    const id = window.setInterval(() => {
      setIndex((i) => (i + 1) % images.length)
    }, INTERVAL_MS)
    return () => window.clearInterval(id)
  }, [images.length])

  return (
    <div className="screenshot-carousel">
      {images.map((src, i) => (
        <img
          key={src}
          src={src}
          alt={`${alt} — screenshot ${i + 1}`}
          className="screenshot-carousel-img"
          style={{ opacity: i === index ? 1 : 0 }}
          loading={i === 0 ? 'eager' : 'lazy'}
        />
      ))}
      <div className="screenshot-carousel-dots">
        {images.map((src, i) => (
          <span key={src} className={`screenshot-dot${i === index ? ' active' : ''}`} />
        ))}
      </div>
    </div>
  )
}
