import Link from 'next/link'
import { PropertyCard } from '@/components/property-card'
import { getFeaturedProperties } from '@/lib/filters'
import { ArrowRight } from 'lucide-react'

export function FeaturedProperties () {
  const featured = getFeaturedProperties(6)

  return (
    <section id='propiedades' className='bg-ivory px-5 py-20 lg:px-8 lg:py-28'>
      <div className='mx-auto max-w-7xl'>
        <div className='mb-12 max-w-2xl'>
          <div className='gold-rule mb-4' />
          <h2 className='font-serif text-4xl text-petrol md:text-5xl'>
            Propiedades destacadas
          </h2>
          <p className='mt-3 text-lg text-warm'>
            Algunas de las oportunidades disponibles actualmente.
          </p>
        </div>

        <div className='grid gap-7 sm:grid-cols-2 xl:grid-cols-3'>
          {featured.map((property) => (
            <PropertyCard key={property.id} property={property} />
          ))}
        </div>

        <div className='mt-12 text-center'>
          <Link
            href='/propiedades'
            className='inline-flex items-center gap-2 text-sm font-semibold tracking-wide text-petrol uppercase transition-colors hover:text-gold'
          >
            Ver todas las propiedades
            <ArrowRight size={16} />
          </Link>
        </div>
      </div>
    </section>
  )
}
