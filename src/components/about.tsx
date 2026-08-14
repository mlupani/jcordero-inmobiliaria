import Image from 'next/image'
import { aboutImage } from '@/data/properties'
import { site } from '@/data/site'

export function About () {
  return (
    <section id='nosotros' className='grain bg-petrol text-ivory'>
      <div className='mx-auto grid max-w-7xl items-center gap-12 px-5 py-20 lg:grid-cols-2 lg:gap-16 lg:px-8 lg:py-28'>
        <div className='relative aspect-[4/5] overflow-hidden rounded-[4px] md:aspect-[5/4] lg:aspect-[4/5]'>
          <Image
            src={aboutImage}
            alt='Interior luminoso de una vivienda en zona sur'
            fill
            sizes='(max-width: 1024px) 100vw, 50vw'
            className='object-cover'
          />
        </div>

        <div>
          <p className='eyebrow'>Más de 80 años de experiencia</p>
          <div className='gold-rule mt-4 mb-6' />
          <h2 className='font-serif text-4xl leading-tight md:text-5xl'>
            Una historia construida junto a nuestros clientes.
          </h2>
          <p className='mt-6 max-w-xl text-base leading-relaxed text-ivory/80 md:text-lg'>
            Desde hace más de ocho décadas acompañamos a familias, propietarios e inversores
            en sus decisiones inmobiliarias en Avellaneda y zona sur. Nuestra experiencia y
            conocimiento de la zona nos permiten brindar un asesoramiento cercano, confiable
            y personalizado.
          </p>

          <dl className='mt-12 grid grid-cols-3 gap-4 border-t border-white/10 pt-8'>
            {site.stats.map((stat) => (
              <div key={stat.label}>
                <dt className='font-serif text-4xl text-gold md:text-5xl'>{stat.value}</dt>
                <dd className='mt-2 text-xs tracking-wide text-ivory/70 md:text-sm'>
                  {stat.label}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </div>
    </section>
  )
}
