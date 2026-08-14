import type { Metadata } from 'next'
import Image from 'next/image'
import { valuationImage } from '@/data/properties'
import { ValuationForm } from '@/components/valuation-form'

export const metadata: Metadata = {
  title: 'Tasaciones de propiedades en Avellaneda',
  description:
    'Solicitá una tasación de tu casa, departamento o PH en Avellaneda, Gerli, Sarandí o Lanús. Te asesoramos con conocimiento local.',
  openGraph: {
    title: 'Tasaciones | J. Cordero e Hijo',
    description: 'Conocé el valor de tu propiedad en Avellaneda y zona sur.'
  }
}

export default function TasacionesPage () {
  return (
    <section className='mx-auto grid max-w-7xl gap-10 px-5 py-12 lg:grid-cols-2 lg:px-8 lg:py-16'>
      <div>
        <p className='eyebrow'>Tasaciones</p>
        <div className='gold-rule mt-4 mb-6' />
        <h1 className='font-serif text-4xl text-petrol md:text-5xl'>
          ¿Querés saber cuánto vale tu propiedad?
        </h1>
        <p className='mt-4 text-lg leading-relaxed text-warm'>
          Solicitá una tasación y recibí el asesoramiento de nuestro equipo. Evaluamos ubicación,
          características y las condiciones actuales del mercado en Avellaneda y zona sur.
        </p>
        <div className='relative mt-10 aspect-[4/3] overflow-hidden rounded-[4px]'>
          <Image
            src={valuationImage}
            alt='Vivienda para tasación en zona sur'
            fill
            sizes='(max-width: 1024px) 100vw, 50vw'
            className='object-cover'
          />
        </div>
      </div>
      <div className='rounded-[4px] border border-petrol/10 bg-paper p-6 shadow-soft md:p-8'>
        <h2 className='font-serif text-3xl text-petrol'>Solicitar tasación</h2>
        <p className='mt-2 mb-6 text-sm text-warm'>
          Completá el formulario y te contactamos a la brevedad.
        </p>
        <ValuationForm />
      </div>
    </section>
  )
}
