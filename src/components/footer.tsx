import Link from 'next/link'
import Image from 'next/image'
import { MapPin, MessageCircle } from 'lucide-react'
import { navItems, site } from '@/data/site'
import { generalWhatsAppUrl } from '@/lib/whatsapp'

export function Footer () {
  return (
    <footer className='bg-petrol-deep text-ivory'>
      <div className='mx-auto grid max-w-7xl gap-12 px-5 py-16 md:grid-cols-2 lg:grid-cols-4 lg:px-8'>
        <div className='lg:col-span-1'>
          <Image
            src='/images/logo.png'
            alt='J. Cordero e Hijo'
            width={180}
            height={86}
            className='mb-5 h-auto w-36 mix-blend-screen'
          />
          <p className='font-serif text-2xl leading-tight'>J. Cordero e Hijo</p>
          <p className='mt-2 text-sm tracking-[0.16em] text-gold-soft uppercase'>
            Compra · Venta · Alquileres · Tasaciones
          </p>
          <p className='mt-4 max-w-xs text-sm leading-relaxed text-ivory/70'>
            {site.description}
          </p>
        </div>

        <div>
          <p className='eyebrow mb-4 text-gold-soft'>Navegación</p>
          <ul className='space-y-2.5'>
            {navItems.map((item) => (
              <li key={item.href}>
                <Link
                  href={item.href}
                  className='text-sm text-ivory/80 transition-colors hover:text-ivory'
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        <div>
          <p className='eyebrow mb-4 text-gold-soft'>Contacto</p>
          <ul className='space-y-3 text-sm text-ivory/80'>
            <li>{site.address}</li>
            <li>
              {site.phones.map((phone) => (
                <a
                  key={phone}
                  href={`tel:+5411${phone.replace('-', '')}`}
                  className='mr-2 hover:text-ivory'
                >
                  {phone}
                </a>
              ))}
            </li>
            <li>
              <a href={`mailto:${site.email}`} className='hover:text-ivory'>
                {site.email}
              </a>
            </li>
            <li>{site.hours}</li>
          </ul>
        </div>

        <div>
          <p className='eyebrow mb-4 text-gold-soft'>Seguinos</p>
          <div className='flex gap-3'>
            <Social href={site.instagram} label='Instagram'>
              <InstagramIcon />
            </Social>
            <Social href={site.facebook} label='Facebook'>
              <FacebookIcon />
            </Social>
            <Social href={generalWhatsAppUrl()} label='WhatsApp'>
              <MessageCircle size={18} />
            </Social>
            <Social href={site.mapsUrl} label='Google Maps'>
              <MapPin size={18} />
            </Social>
          </div>
        </div>
      </div>

      <div className='border-t border-white/10'>
        <div className='mx-auto flex max-w-7xl flex-col gap-2 px-5 py-5 text-xs text-ivory/50 sm:flex-row sm:items-center sm:justify-between lg:px-8'>
          <p>© 2026 J. Cordero e Hijo. Todos los derechos reservados.</p>
          <p>{site.zoneLabel}</p>
        </div>
      </div>
    </footer>
  )
}

interface SocialProps {
  href: string
  label: string
  children: React.ReactNode
}

function Social ({ href, label, children }: SocialProps) {
  return (
    <a
      href={href}
      target='_blank'
      rel='noopener noreferrer'
      aria-label={label}
      className='inline-flex h-10 w-10 items-center justify-center rounded-[2px] border border-white/15 text-ivory/80 transition-colors hover:border-gold hover:text-gold'
    >
      {children}
    </a>
  )
}

function InstagramIcon () {
  return (
    <svg width='18' height='18' viewBox='0 0 24 24' fill='none' aria-hidden='true'>
      <rect x='3' y='3' width='18' height='18' rx='5' stroke='currentColor' strokeWidth='1.7' />
      <circle cx='12' cy='12' r='4' stroke='currentColor' strokeWidth='1.7' />
      <circle cx='17.5' cy='6.5' r='1' fill='currentColor' />
    </svg>
  )
}

function FacebookIcon () {
  return (
    <svg width='18' height='18' viewBox='0 0 24 24' fill='currentColor' aria-hidden='true'>
      <path d='M14 9h3V6h-3c-2.2 0-4 1.8-4 4v2H8v3h2v7h3v-7h3l1-3h-4V10c0-.6.4-1 1-1Z' />
    </svg>
  )
}
