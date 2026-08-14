import type { Metadata, Viewport } from 'next'
import { Cormorant_Garamond, Figtree } from 'next/font/google'
import { Providers } from '@/components/providers'
import { SiteShell } from '@/components/site-shell'
import { LocalBusinessJsonLd } from '@/components/json-ld'
import { site } from '@/data/site'
import { getSiteUrl } from '@/lib/site-url'
import './globals.css'

const figtree = Figtree({
  subsets: ['latin'],
  variable: '--font-figtree',
  display: 'swap'
})

const cormorant = Cormorant_Garamond({
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
  variable: '--font-cormorant',
  display: 'swap'
})

const siteUrl = getSiteUrl()

export const viewport: Viewport = {
  themeColor: '#1a3344',
  width: 'device-width',
  initialScale: 1
}

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: {
    default: site.seo.title,
    template: `%s | ${site.name}`
  },
  description: site.seo.description,
  keywords: site.seo.keywords,
  applicationName: site.name,
  authors: [{ name: site.name, url: siteUrl }],
  creator: site.name,
  publisher: site.name,
  category: 'real estate',
  alternates: {
    canonical: '/'
  },
  robots: {
    index: true,
    follow: true
  },
  openGraph: {
    type: 'website',
    locale: 'es_AR',
    url: siteUrl,
    siteName: site.name,
    title: site.seo.title,
    description: site.seo.description
  },
  twitter: {
    card: 'summary_large_image',
    title: site.seo.title,
    description: site.seo.description
  },
  other: {
    'og:locale:alternate': 'es_ES'
  }
}

export default function RootLayout ({ children }: LayoutProps<'/'>) {
  return (
    <html
      lang='es-AR'
      className={`${figtree.variable} ${cormorant.variable} h-full antialiased`}
    >
      <body className='flex min-h-full flex-col bg-ivory font-sans text-ink'>
        <LocalBusinessJsonLd />
        <Providers>
          <SiteShell>{children}</SiteShell>
        </Providers>
      </body>
    </html>
  )
}
