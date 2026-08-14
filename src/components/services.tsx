import { Home, KeyRound, Landmark, Handshake } from 'lucide-react'

const services = [
  {
    title: 'Compra y venta',
    text: 'Te acompañamos durante todo el proceso para encontrar oportunidades y concretar operaciones con seguridad.',
    icon: Home
  },
  {
    title: 'Alquileres',
    text: 'Encontrá propiedades disponibles para alquilar de forma simple y rápida.',
    icon: KeyRound
  },
  {
    title: 'Tasaciones',
    text: 'Valoramos tu propiedad teniendo en cuenta ubicación, características y condiciones actuales del mercado.',
    icon: Landmark
  },
  {
    title: 'Asesoramiento',
    text: 'Experiencia y conocimiento local para ayudarte a tomar mejores decisiones.',
    icon: Handshake
  }
]

export function Services () {
  return (
    <section className='bg-ivory px-5 py-20 lg:px-8 lg:py-28'>
      <div className='mx-auto max-w-7xl'>
        <div className='mx-auto mb-14 max-w-2xl text-center'>
          <div className='gold-rule mx-auto mb-4' />
          <h2 className='font-serif text-4xl text-petrol md:text-5xl'>
            Todo lo que necesitás para tomar una decisión inmobiliaria.
          </h2>
        </div>

        <div className='grid gap-5 md:grid-cols-2 xl:grid-cols-4'>
          {services.map((service) => (
            <article
              key={service.title}
              className='rounded-[4px] border border-petrol/8 bg-paper p-7 transition-transform duration-300 hover:-translate-y-1'
            >
              <service.icon className='mb-5 text-gold' size={26} />
              <h3 className='font-serif text-2xl text-petrol'>{service.title}</h3>
              <p className='mt-3 text-sm leading-relaxed text-warm'>{service.text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  )
}
