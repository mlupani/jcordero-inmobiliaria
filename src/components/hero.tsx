import Image from 'next/image'
import Link from 'next/link'
import { heroImage } from '@/data/properties'
import { site } from '@/data/site'
import { generalWhatsAppUrl } from '@/lib/whatsapp'
import { PropertySearch } from '@/components/property-search'

export function Hero () {
  return (
    <section className='relative'>
      <div className='relative h-[78vh] min-h-[540px] overflow-hidden md:h-[86vh]'>
        <Image
          src={heroImage}
          alt='Casa moderna en Avellaneda y zona sur'
          fill
          priority
          sizes='100vw'
          className='object-cover object-[50%_62%]'
        />
        <div className='absolute inset-0 bg-[linear-gradient(180deg,rgba(16,35,47,0.42)_0%,rgba(16,35,47,0.28)_34%,rgba(16,35,47,0.62)_68%,rgba(16,35,47,0.92)_100%)]' />
        <div className='absolute inset-0 bg-[linear-gradient(105deg,rgba(16,35,47,0.72)_0%,rgba(16,35,47,0.38)_42%,transparent_74%)]' />

        <div className='relative mx-auto flex h-full max-w-7xl flex-col justify-end px-5 pb-36 md:pb-44 lg:px-8'>
          <p className='eyebrow animate-rise text-gold [text-shadow:0_1px_14px_rgba(16,35,47,0.65)]'>
            {site.eyebrow}
          </p>
          <h1 className='animate-rise delay-1 mt-4 max-w-3xl font-serif text-[2.6rem] font-semibold leading-[1.08] text-ivory [text-shadow:0_2px_28px_rgba(16,35,47,0.7)] md:text-6xl lg:text-7xl'>
            {site.tagline}
          </h1>
          <p className='animate-rise delay-2 mt-5 max-w-xl text-base font-medium leading-relaxed text-ivory [text-shadow:0_1px_18px_rgba(16,35,47,0.55)] md:text-lg'>
            {site.heroDescription}
          </p>
          <div className='animate-rise delay-3 mt-8 flex flex-wrap gap-3'>
            <Link href='/propiedades' className='btn btn-gold'>
              Ver propiedades
            </Link>
            <a
              href={generalWhatsAppUrl()}
              target='_blank'
              rel='noopener noreferrer'
              className='btn btn-outline'
            >
              Hablar por WhatsApp
            </a>
          </div>
        </div>
      </div>

      <div className='relative z-10 mx-auto -mt-24 max-w-7xl px-5 pb-6 lg:px-8'>
        <PropertySearch />
      </div>
    </section>
  )
}
