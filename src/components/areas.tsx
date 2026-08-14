import Image from 'next/image'
import Link from 'next/link'
import { areas } from '@/data/areas'

export function Areas () {
  return (
    <section className='bg-ivory px-5 py-20 lg:px-8 lg:py-28'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-12'>
          <div className='gold-rule mb-4' />
          <h2 className='font-serif text-4xl text-petrol md:text-5xl'>Buscá por zona</h2>
        </div>

        <div className='grid gap-5 sm:grid-cols-2 lg:grid-cols-3'>
          {areas.map((area) => (
            <Link
              key={area.slug}
              href={`/propiedades?zona=${area.slug}`}
              className='group relative block aspect-[5/4] overflow-hidden rounded-[4px]'
            >
              <Image
                src={area.image}
                alt={area.name}
                fill
                sizes='(max-width: 768px) 100vw, 33vw'
                className='object-cover transition-transform duration-700 group-hover:scale-105'
              />
              <div className='absolute inset-0 bg-gradient-to-t from-petrol-deep/85 via-petrol/25 to-transparent' />
              <div className='absolute inset-x-0 bottom-0 p-6'>
                <h3 className='font-serif text-3xl text-ivory'>{area.name}</h3>
                <p className='mt-1 text-sm text-ivory/75'>{area.description}</p>
                <span className='mt-4 inline-block text-xs font-semibold tracking-[0.16em] text-gold uppercase'>
                  Ver propiedades
                </span>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}
