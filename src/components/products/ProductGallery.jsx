import { useMemo, useState } from 'react'

export default function ProductGallery({ images = [] }) {
  const safeImages = useMemo(() => (images.length ? images : ['/logo.png']), [images])
  const [activeIndex, setActiveIndex] = useState(0)
  const activeImage = safeImages[activeIndex] || safeImages[0]

  return (
    <div className="w-full">
      <div className="aspect-[4/3] w-full overflow-hidden rounded-2xl border border-black/10 bg-white/20">
        <img src={activeImage} alt="Product preview" className="h-full w-full object-cover" />
      </div>

      {safeImages.length > 1 && (
        <div className="mt-3 flex gap-2 overflow-x-auto pb-1">
          {safeImages.map((src, idx) => {
            const isActive = idx === activeIndex
            return (
              <button
                key={`${src}-${idx}`}
                type="button"
                className={`h-16 w-16 overflow-hidden rounded-xl border transition ${
                  isActive ? 'border-brand-brown-2' : 'border-black/10'
                }`}
                onClick={() => setActiveIndex(idx)}
                aria-label={`View image ${idx + 1}`}
              >
                <img src={src} alt="" className="h-full w-full object-cover" />
              </button>
            )
          })}
        </div>
      )}
    </div>
  )
}

