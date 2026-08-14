import { Bath, BedDouble, Maximize, Sofa } from 'lucide-react'
import type { Property } from '@/data/properties'
import { formatPrice, formatSurface, operationLabels, typeLabels } from '@/lib/format'
import { propertyWhatsAppUrl } from '@/lib/whatsapp'
import { osmEmbedUrl, osmLink } from '@/lib/map'
import { PropertyGallery } from '@/components/property-gallery'
import { InquiryForm } from '@/components/inquiry-form'

interface PropertyDetailProps {
  property: Property
}

export function PropertyDetail ({ property }: PropertyDetailProps) {
  return (
    <article className='mx-auto max-w-7xl px-5 py-10 lg:px-8 lg:py-14'>
      <div className='grid gap-10 lg:grid-cols-[1.15fr_0.85fr]'>
        <div>
          <PropertyGallery images={property.images} alt={property.title} />

          <div className='mt-8'>
            <p className='eyebrow'>{typeLabels[property.type]} · {operationLabels[property.operation]}</p>
            <h1 className='mt-3 font-serif text-4xl text-petrol md:text-5xl'>{property.title}</h1>
            <p className='mt-2 text-lg text-warm'>
              {property.address} · {property.locality}
            </p>
            <p className='mt-4 font-serif text-4xl text-petrol'>{formatPrice(property)}</p>
          </div>

          <dl className='mt-8 grid grid-cols-2 gap-4 border-y border-petrol/10 py-6 sm:grid-cols-4'>
            <Spec icon={<Sofa size={18} />} label='Ambientes' value={String(property.rooms)} />
            <Spec icon={<BedDouble size={18} />} label='Dormitorios' value={String(property.bedrooms)} />
            <Spec icon={<Bath size={18} />} label='Baños' value={String(property.bathrooms)} />
            <Spec icon={<Maximize size={18} />} label='Superficie' value={formatSurface(property.surface)} />
          </dl>

          <div className='mt-8'>
            <h2 className='font-serif text-2xl text-petrol'>Descripción</h2>
            <p className='mt-3 max-w-2xl leading-relaxed text-warm'>{property.description}</p>
          </div>

          <div className='mt-8'>
            <h2 className='font-serif text-2xl text-petrol'>Características</h2>
            <ul className='mt-4 grid gap-2 sm:grid-cols-2'>
              {property.features.map((feature) => (
                <li key={feature} className='flex items-center gap-2 text-sm text-petrol'>
                  <span className='h-1 w-1 rounded-full bg-gold' />
                  {feature}
                </li>
              ))}
            </ul>
          </div>

          <div className='mt-10'>
            <h2 className='font-serif text-2xl text-petrol'>Ubicación</h2>
            <p className='mt-2 text-sm text-warm'>{property.address}, {property.locality}</p>
            <div className='mt-4 overflow-hidden rounded-[4px] border border-petrol/10'>
              <iframe
                title={`Mapa de ${property.address}`}
                src={osmEmbedUrl(property.coords.lat, property.coords.lng)}
                className='h-72 w-full'
                loading='lazy'
              />
            </div>
            <a
              href={osmLink(property.coords.lat, property.coords.lng)}
              target='_blank'
              rel='noopener noreferrer'
              className='mt-2 inline-block text-sm text-petrol underline decoration-gold/50 underline-offset-4'
            >
              Ver mapa más grande
            </a>
          </div>
        </div>

        <aside className='lg:sticky lg:top-28 lg:self-start'>
          <div className='rounded-[4px] border border-petrol/10 bg-paper p-6 shadow-soft'>
            <p className='font-serif text-2xl text-petrol'>Consultar esta propiedad</p>
            <p className='mt-2 text-sm text-warm'>
              Dejá tus datos o escribinos por WhatsApp. También podés solicitar una visita.
            </p>
            <a
              href={propertyWhatsAppUrl(property)}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-whatsapp mt-5 w-full'
            >
              Consultar por WhatsApp
            </a>
            <div className='mt-6 border-t border-petrol/10 pt-6'>
              <InquiryForm propertyAddress={property.address} />
            </div>
          </div>
        </aside>
      </div>
    </article>
  )
}

interface SpecProps {
  icon: React.ReactNode
  label: string
  value: string
}

function Spec ({ icon, label, value }: SpecProps) {
  return (
    <div>
      <dt className='flex items-center gap-2 text-xs tracking-wide text-warm uppercase'>
        {icon}
        {label}
      </dt>
      <dd className='mt-1 font-serif text-2xl text-petrol'>{value}</dd>
    </div>
  )
}
