'use client'

import { useState, useEffect } from 'react'
import { useTranslations } from 'next-intl'
import Image from 'next/image'

interface Props {
  screenshots: string[]
  heading: string
}

export default function ScreenshotGallery({ screenshots, heading }: Props) {
  const t = useTranslations('project_detail')
  const [selected, setSelected] = useState<number | null>(null)

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (selected === null) return
      if (e.key === 'Escape') setSelected(null)
      if (e.key === 'ArrowRight') setSelected((s) => (s !== null && s < screenshots.length - 1 ? s + 1 : s))
      if (e.key === 'ArrowLeft') setSelected((s) => (s !== null && s > 0 ? s - 1 : s))
    }
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [selected, screenshots.length])

  return (
    <div className="mt-20">
      <h2 className="font-display font-semibold text-text text-xl mb-2">{heading}</h2>
      <p className="text-muted text-sm mb-6">{t('tap_to_enlarge')}</p>

      <div className="flex gap-4 overflow-x-auto pb-4 scrollbar-hide">
        {screenshots.map((src, i) => (
          <button
            key={i}
            onClick={() => setSelected(i)}
            className="flex-shrink-0 relative rounded-2xl overflow-hidden border border-border hover:border-accent/60 transition-all duration-200 cursor-zoom-in hover:scale-[1.02]"
            style={{ width: '150px', height: '324px' }}
            aria-label={`Screenshot ${i + 1}`}
          >
            <Image
              src={src}
              alt={`Screenshot ${i + 1}`}
              fill
              className="object-cover"
              unoptimized
            />
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selected !== null && (
        <div
          className="fixed inset-0 z-50 bg-bg/95 backdrop-blur-md flex items-center justify-center"
          onClick={() => setSelected(null)}
        >
          {/* Prev */}
          {selected > 0 && (
            <button
              onClick={(e) => { e.stopPropagation(); setSelected(selected - 1) }}
              className="absolute left-4 md:left-8 text-muted hover:text-accent transition-colors p-3"
              aria-label="Previous"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
              </svg>
            </button>
          )}

          {/* Image */}
          <div
            className="relative mx-16"
            style={{ width: 'min(340px, 80vw)', height: 'min(700px, 85vh)' }}
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={screenshots[selected]}
              alt={`Screenshot ${selected + 1}`}
              fill
              className="object-contain rounded-2xl"
              unoptimized
            />
          </div>

          {/* Next */}
          {selected < screenshots.length - 1 && (
            <button
              onClick={(e) => { e.stopPropagation(); setSelected(selected + 1) }}
              className="absolute right-4 md:right-8 text-muted hover:text-accent transition-colors p-3"
              aria-label="Next"
            >
              <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
              </svg>
            </button>
          )}

          {/* Close */}
          <button
            onClick={() => setSelected(null)}
            className="absolute top-4 right-4 text-muted hover:text-accent transition-colors p-2"
            aria-label="Close"
          >
            <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            </svg>
          </button>

          {/* Counter */}
          <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-muted text-sm">
            {selected + 1} / {screenshots.length}
          </div>
        </div>
      )}
    </div>
  )
}
