import Image from 'next/image'
import { valuationImage } from '@/data/properties'
import { ValuationTrigger } from '@/components/valuation-modal'

export function ValuationCTA () {
  return (
    <section id='tasaciones' className='px-5 py-8 lg:px-8 lg:py-12'>
      <div className='relative mx-auto max-w-7xl overflow-hidden rounded-[4px]'>
        <div className='relative min-h-[420px]'>
          <Image
            src={valuationImage}
            alt='Fachada de una vivienda para tasación'
            fill
            sizes='100vw'
            className='object-cover'
          />
          <div className='absolute inset-0 bg-petrol/72' />
          <div className='relative flex min-h-[420px] max-w-xl flex-col justify-center px-6 py-16 md:px-12'>
            <p className='eyebrow'>Tasaciones</p>
            <h2 className='mt-4 font-serif text-4xl leading-tight text-ivory md:text-5xl'>
              ¿Querés saber cuánto vale tu propiedad?
            </h2>
            <p className='mt-4 text-lg text-ivory/80'>
              Solicitá una tasación y recibí el asesoramiento de nuestro equipo.
            </p>
            <div className='mt-8'>
              <ValuationTrigger />
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
