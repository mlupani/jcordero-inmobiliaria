import type { Metadata } from 'next'
import { site } from '@/data/site'
import { osmEmbedUrl } from '@/lib/map'
import { generalWhatsAppUrl } from '@/lib/whatsapp'
import { ContactForm } from '@/components/contact-form'

export const metadata: Metadata = {
  title: 'Contacto',
  description:
    'Visitános en Gral. Güemes 1300, Gerli, Avellaneda, o escribinos por WhatsApp al 11 3674-7099. Teléfonos 4204-3307 / 4204-3308.',
  openGraph: {
    title: 'Contacto | J. Cordero e Hijo',
    description: 'Estamos en Gerli, Avellaneda. Consultá por WhatsApp, teléfono o en nuestra oficina.'
  }
}

export default function ContactoPage () {
  return (
    <section className='mx-auto grid max-w-7xl gap-12 px-5 py-12 lg:grid-cols-2 lg:px-8 lg:py-16'>
      <div>
        <p className='eyebrow'>Contacto</p>
        <div className='gold-rule mt-4 mb-6' />
        <h1 className='font-serif text-4xl text-petrol md:text-5xl'>
          Estamos en Gerli, para atenderte de forma personalizada.
        </h1>
        <ul className='mt-8 space-y-3 text-warm'>
          <li>{site.address}</li>
          <li>{site.phones.join(' / ')}</li>
          <li>
            <a href={`mailto:${site.email}`} className='text-petrol hover:underline'>
              {site.email}
            </a>
          </li>
          <li>{site.hours}</li>
        </ul>
        <a
          href={generalWhatsAppUrl()}
          target='_blank'
          rel='noopener noreferrer'
          className='btn btn-whatsapp mt-8'
        >
          Contactar por WhatsApp
        </a>
        <div className='mt-10 overflow-hidden rounded-[4px] border border-petrol/10'>
          <iframe
            title='Oficina de J. Cordero e Hijo'
            src={osmEmbedUrl(site.officeCoords.lat, site.officeCoords.lng)}
            className='h-72 w-full'
            loading='lazy'
          />
        </div>
      </div>

      <div className='rounded-[4px] border border-petrol/10 bg-paper p-6 shadow-soft md:p-8'>
        <h2 className='font-serif text-3xl text-petrol'>Dejanos tu consulta</h2>
        <p className='mt-2 mb-6 text-sm text-warm'>
          Completá el formulario y te respondemos a la brevedad.
        </p>
        <ContactForm />
      </div>
    </section>
  )
}
