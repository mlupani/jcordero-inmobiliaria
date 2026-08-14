import type { Metadata } from 'next'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { FinalCTA } from '@/components/final-cta'
import { site } from '@/data/site'

export const metadata: Metadata = {
  title: 'Nosotros',
  description:
    'J. Cordero e Hijo es una inmobiliaria de Gerli, Avellaneda, con más de 80 años acompañando familias en la compra, venta y alquiler de propiedades en zona sur.',
  openGraph: {
    title: 'Nosotros | J. Cordero e Hijo',
    description:
      'Más de ocho décadas de trayectoria en Avellaneda, Gerli, Sarandí y Lanús.'
  }
}

export default function NosotrosPage () {
  return (
    <>
      <section className='mx-auto max-w-3xl px-5 py-16 text-center lg:px-8'>
        <p className='eyebrow'>J. Cordero e Hijo</p>
        <div className='gold-rule mx-auto mt-4 mb-6' />
        <h1 className='font-serif text-4xl text-petrol md:text-6xl'>
          Una inmobiliaria de trayectoria, con una forma de trabajar cercana.
        </h1>
        <p className='mt-6 text-lg leading-relaxed text-warm'>
          {site.description} Conocemos Gerli, Avellaneda, Sarandí, Lanús y toda la zona sur
          porque trabajamos acá, todos los días, desde hace más de ocho décadas.
        </p>
      </section>
      <About />
      <Services />
      <FinalCTA />
    </>
  )
}
