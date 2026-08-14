import Image from 'next/image'
import Link from 'next/link'
import { Bath, Maximize, MessageCircle, Sofa } from 'lucide-react'
import type { Property } from '@/data/properties'
import { formatPrice, formatSurface, operationLabels, typeLabels } from '@/lib/format'
import { propertyWhatsAppUrl } from '@/lib/whatsapp'

interface PropertyCardProps {
  property: Property
}

export function PropertyCard ({ property }: PropertyCardProps) {
  return (
    <article className='group overflow-hidden rounded-[4px] border border-petrol/8 bg-paper shadow-soft transition-all duration-500 hover:-translate-y-1 hover:shadow-lift'>
      <Link href={`/propiedades/${property.slug}`} className='block'>
        <div className='relative aspect-[4/3] overflow-hidden'>
          <Image
            src={property.images[0]}
            alt={property.title}
            fill
            sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
            className='object-cover transition-transform duration-700 group-hover:scale-[1.04]'
          />
          <span className='absolute top-3 left-3 bg-petrol px-2.5 py-1 text-[0.68rem] font-semibold tracking-[0.14em] text-ivory uppercase'>
            {operationLabels[property.operation]}
          </span>
          <span className='absolute top-3 right-3 bg-paper/92 px-2.5 py-1 text-[0.68rem] font-medium tracking-wide text-petrol uppercase backdrop-blur-sm'>
            {typeLabels[property.type]}
          </span>
        </div>
      </Link>

      <div className='flex flex-col gap-3 p-5'>
        <div>
          <p className='font-serif text-xl leading-snug text-petrol'>{property.address}</p>
          <p className='mt-1 text-sm text-warm'>{property.locality}</p>
        </div>

        <div className='flex flex-wrap gap-4 text-sm text-petrol/80'>
          <span className='inline-flex items-center gap-1.5'>
            <Sofa size={15} />
            {property.rooms} amb.
          </span>
          <span className='inline-flex items-center gap-1.5'>
            <Bath size={15} />
            {property.bathrooms} baños
          </span>
          <span className='inline-flex items-center gap-1.5'>
            <Maximize size={15} />
            {formatSurface(property.surface)}
          </span>
        </div>

        <p className='font-serif text-2xl text-petrol'>{formatPrice(property)}</p>

        <div className='mt-1 flex gap-2'>
          <Link
            href={`/propiedades/${property.slug}`}
            className='btn btn-primary flex-1 !min-h-10 !text-[0.7rem]'
          >
            Ver propiedad
          </Link>
          <a
            href={propertyWhatsAppUrl(property)}
            target='_blank'
            rel='noopener noreferrer'
            aria-label='Consultar por WhatsApp'
            className='btn btn-whatsapp !min-h-10 !px-3'
          >
            <MessageCircle size={16} />
          </a>
        </div>
      </div>
    </article>
  )
}
