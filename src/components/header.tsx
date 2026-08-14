'use client'

import Link from 'next/link'
import { useEffect, useState } from 'react'
import { Menu, X } from 'lucide-react'
import { Logo } from '@/components/logo'
import { navItems } from '@/data/site'
import { generalWhatsAppUrl } from '@/lib/whatsapp'
import { useUIStore } from '@/store/ui-store'
import { cn } from '@/lib/cn'

export function Header () {
  const [scrolled, setScrolled] = useState(false)
  const mobileMenuOpen = useUIStore((state) => state.mobileMenuOpen)
  const setMobileMenuOpen = useUIStore((state) => state.setMobileMenuOpen)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 12)
    const frame = window.requestAnimationFrame(onScroll)
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', onScroll)
    }
  }, [])

  useEffect(() => {
    document.body.style.overflow = mobileMenuOpen ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [mobileMenuOpen])

  return (
    <header
      className={cn(
        'sticky top-0 z-50 border-b transition-all duration-300',
        scrolled
          ? 'border-petrol/10 bg-ivory/92 shadow-[0_10px_30px_-20px_rgba(16,35,47,0.45)] backdrop-blur-md'
          : 'border-transparent bg-ivory/80 backdrop-blur-sm'
      )}
    >
      <div className='mx-auto flex h-[4.25rem] max-w-7xl items-center justify-between px-5 lg:h-[4.75rem] lg:px-8'>
        <Link href='/' aria-label='J. Cordero e Hijo' onClick={() => setMobileMenuOpen(false)}>
          <Logo />
        </Link>

        <nav className='hidden items-center gap-7 lg:flex'>
          {navItems.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className='text-[0.82rem] font-medium tracking-wide text-petrol/80 transition-colors hover:text-petrol'
            >
              {item.label}
            </Link>
          ))}
        </nav>

        <div className='flex items-center gap-3'>
          <a
            href={generalWhatsAppUrl()}
            target='_blank'
            rel='noopener noreferrer'
            className='btn btn-whatsapp hidden !min-h-10 !px-4 !text-[0.72rem] lg:inline-flex'
          >
            Consultar por WhatsApp
          </a>
          <button
            type='button'
            className='inline-flex h-10 w-10 items-center justify-center rounded-[2px] text-petrol lg:hidden'
            aria-label={mobileMenuOpen ? 'Cerrar menú' : 'Abrir menú'}
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {mobileMenuOpen
        ? (
          <div className='border-t border-petrol/10 bg-ivory lg:hidden'>
            <nav className='mx-auto flex max-w-7xl flex-col px-5 py-4'>
              {navItems.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setMobileMenuOpen(false)}
                  className='border-b border-petrol/8 py-3.5 text-[0.95rem] text-petrol'
                >
                  {item.label}
                </Link>
              ))}
              <a
                href={generalWhatsAppUrl()}
                target='_blank'
                rel='noopener noreferrer'
                className='btn btn-whatsapp mt-4 w-full'
              >
                Consultar por WhatsApp
              </a>
            </nav>
          </div>
          )
        : null}
    </header>
  )
}
