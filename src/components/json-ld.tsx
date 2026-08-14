import { site } from '@/data/site'
import { getSiteUrl } from '@/lib/site-url'

export function LocalBusinessJsonLd () {
  const url = getSiteUrl()

  const data = {
    '@context': 'https://schema.org',
    '@type': 'RealEstateAgent',
    name: site.name,
    alternateName: `${site.name} ${site.subtitle}`,
    description: site.seo.description,
    url,
    image: `${url}/opengraph-image`,
    logo: `${url}/images/logo.png`,
    email: site.email,
    telephone: ['+541142043307', '+541142043308', `+${site.whatsapp}`],
    address: {
      '@type': 'PostalAddress',
      streetAddress: 'Gral. Güemes 1300',
      addressLocality: 'Gerli',
      addressRegion: 'Buenos Aires',
      postalCode: 'B1869',
      addressCountry: 'AR'
    },
    geo: {
      '@type': 'GeoCoordinates',
      latitude: site.officeCoords.lat,
      longitude: site.officeCoords.lng
    },
    openingHours: 'Mo-Fr 09:00-12:00,15:00-19:00',
    areaServed: [
      'Avellaneda',
      'Gerli',
      'Sarandí',
      'Lanús',
      'Villa Dominico',
      'Wilde'
    ],
    sameAs: [site.instagram],
    priceRange: '$$'
  }

  return (
    <script
      type='application/ld+json'
      dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }}
    />
  )
}
