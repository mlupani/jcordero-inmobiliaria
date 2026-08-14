import Link from 'next/link'

export default function NotFound () {
  return (
    <section className='mx-auto max-w-xl px-5 py-24 text-center'>
      <p className='eyebrow'>404</p>
      <h1 className='mt-4 font-serif text-4xl text-petrol'>No encontramos esa página.</h1>
      <p className='mt-3 text-warm'>Puede que la propiedad ya no esté disponible o que el enlace haya cambiado.</p>
      <Link href='/propiedades' className='btn btn-primary mt-8'>
        Ver propiedades
      </Link>
    </section>
  )
}
