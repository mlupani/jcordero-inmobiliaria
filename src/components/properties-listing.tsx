import { Suspense } from 'react'
import { PropertyFilters } from '@/components/property-filters'
import { PropertyGrid } from '@/components/property-grid'
import type { Property } from '@/data/properties'

interface PropertiesListingProps {
  title: string
  subtitle?: string
  properties: Property[]
}

export function PropertiesListing ({ title, subtitle, properties }: PropertiesListingProps) {
  return (
    <section className='mx-auto max-w-7xl px-5 py-12 lg:px-8 lg:py-16'>
      <div className='mb-10'>
        <div className='gold-rule mb-4' />
        <h1 className='font-serif text-4xl text-petrol md:text-5xl'>{title}</h1>
        {subtitle ? <p className='mt-3 text-lg text-warm'>{subtitle}</p> : null}
      </div>
      <Suspense fallback={<div className='mb-8 h-28 rounded-[4px] bg-paper' />}>
        <PropertyFilters />
      </Suspense>
      <PropertyGrid properties={properties} />
    </section>
  )
}
