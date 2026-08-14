'use client'

import Image from 'next/image'
import { useState } from 'react'

interface PropertyGalleryProps {
  images: string[]
  alt: string
}

export function PropertyGallery ({ images, alt }: PropertyGalleryProps) {
  const [active, setActive] = useState(0)

  return (
    <div>
      <div className='relative aspect-[4/3] overflow-hidden rounded-[4px] bg-ivory-deep md:aspect-[16/10]'>
        <Image
          src={images[active]}
          alt={alt}
          fill
          priority
          sizes='(max-width: 1024px) 100vw, 66vw'
          className='object-cover'
        />
      </div>
      <div className='mt-3 grid grid-cols-4 gap-2'>
        {images.map((image, index) => (
          <button
            key={image}
            type='button'
            onClick={() => setActive(index)}
            className={
              index === active
                ? 'relative aspect-[4/3] overflow-hidden rounded-[2px] ring-2 ring-gold'
                : 'relative aspect-[4/3] overflow-hidden rounded-[2px] opacity-80 hover:opacity-100'
            }
          >
            <Image src={image} alt='' fill sizes='160px' className='object-cover' />
          </button>
        ))}
      </div>
    </div>
  )
}
