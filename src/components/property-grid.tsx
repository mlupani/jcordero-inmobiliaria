import { PropertyCard } from '@/components/property-card'
import type { Property } from '@/data/properties'
import { propertyCountLabel } from '@/lib/format'

interface PropertyGridProps {
  properties: Property[]
}

export function PropertyGrid ({ properties }: PropertyGridProps) {
  if (properties.length === 0) {
    return (
      <div className='rounded-[4px] border border-petrol/10 bg-paper px-6 py-16 text-center'>
        <p className='font-serif text-2xl text-petrol'>No encontramos propiedades con esos filtros.</p>
        <p className='mt-2 text-warm'>Probá ampliando la zona, el tipo o el precio máximo.</p>
      </div>
    )
  }

  return (
    <div>
      <p className='mb-6 text-sm tracking-wide text-warm'>
        {propertyCountLabel(properties.length)}
      </p>
      <div className='grid gap-7 sm:grid-cols-2 xl:grid-cols-3'>
        {properties.map((property) => (
          <PropertyCard key={property.id} property={property} />
        ))}
      </div>
    </div>
  )
}
