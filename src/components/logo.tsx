import { cn } from '@/lib/cn'

interface LogoMarkProps {
  className?: string
}

export function LogoMark ({ className }: LogoMarkProps) {
  return (
    <svg
      viewBox='0 0 72 44'
      className={cn('h-9 w-auto', className)}
      aria-hidden='true'
    >
      <path d='M6 40V26.5L18 14l12 12.5V40H6Z' fill='#3B7DC4' />
      <path d='M6 26.5 18 14l12 12.5' fill='none' stroke='#1A3344' strokeWidth='0.6' />
      <rect x='10.5' y='29' width='4.2' height='5.2' fill='#F6F3ED' />
      <rect x='21.2' y='29' width='4.2' height='5.2' fill='#F6F3ED' />
      <path d='M46 40V26.5L58 14l12 12.5V40H46Z' fill='#3B7DC4' />
      <rect x='50.5' y='29' width='4.2' height='5.2' fill='#F6F3ED' />
      <rect x='61.2' y='29' width='4.2' height='5.2' fill='#F6F3ED' />
      <rect x='41.6' y='6.5' width='3.4' height='7.5' fill='#4A5560' />
      <path d='M22 40V24L36 7.5 50 24V40H22Z' fill='#C4A06A' />
      <rect x='33.4' y='27.5' width='5.2' height='12.5' fill='#1A3344' />
      <rect x='26' y='27.8' width='4.4' height='5.4' fill='#F6F3ED' />
      <rect x='41.4' y='27.8' width='4.4' height='5.4' fill='#F6F3ED' />
    </svg>
  )
}

interface LogoProps {
  variant?: 'light' | 'dark'
  className?: string
}

export function Logo ({ variant = 'light', className }: LogoProps) {
  const dark = variant === 'dark'

  return (
    <span className={cn('flex items-center gap-3', className)}>
      <LogoMark />
      <span className='leading-none'>
        <span
          className={cn(
            'block whitespace-nowrap font-serif text-[1.35rem] tracking-tight',
            dark ? 'text-ivory' : 'text-petrol'
          )}
        >
          J. Cordero
        </span>
        <span
          className={cn(
            'block text-[0.78rem] font-medium tracking-[0.12em] normal-case',
            dark ? 'text-gold-soft' : 'text-gold'
          )}
        >
          e Hijo
        </span>
      </span>
    </span>
  )
}
