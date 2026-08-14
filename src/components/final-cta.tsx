import Link from 'next/link'
import { generalWhatsAppUrl } from '@/lib/whatsapp'

export function FinalCTA () {
  return (
    <section className='bg-petrol px-5 py-20 text-center text-ivory lg:px-8 lg:py-28'>
      <div className='mx-auto max-w-3xl'>
        <div className='gold-rule mx-auto mb-6' />
        <h2 className='font-serif text-4xl md:text-5xl'>
          ¿Estás buscando comprar, vender o alquilar?
        </h2>
        <p className='mt-5 text-lg text-ivory/75'>
          Contanos qué necesitás y te ayudamos a encontrar la mejor opción.
        </p>
        <div className='mt-10 flex flex-wrap justify-center gap-3'>
          <Link href='/propiedades' className='btn btn-gold'>
            Ver propiedades
          </Link>
          <a
            href={generalWhatsAppUrl()}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-outline'
          >
            Contactar por WhatsApp
          </a>
        </div>
      </div>
    </section>
  )
}
