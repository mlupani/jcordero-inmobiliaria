import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { PropertyDetail } from '@/components/property-detail'
import { properties } from '@/data/properties'
import { getPropertyBySlug } from '@/lib/filters'
import { formatPrice } from '@/lib/format'

interface PageProps {
  params: Promise<{ slug: string }>
}

export function generateStaticParams () {
  return properties.map((property) => ({ slug: property.slug }))
}

export async function generateMetadata ({ params }: PageProps): Promise<Metadata> {
  const { slug } = await params
  const property = getPropertyBySlug(slug)
  if (!property) return { title: 'Propiedad' }

  return {
    title: `${property.title} · ${formatPrice(property)}`,
    description: `${property.description} ${property.address}, ${property.locality}.`,
    alternates: {
      canonical: `/propiedades/${property.slug}`
    },
    openGraph: {
      type: 'article',
      title: `${property.title} | ${formatPrice(property)}`,
      description: property.description,
      url: `/propiedades/${property.slug}`,
      images: [
        {
          url: property.images[0],
          width: 1600,
          height: 1200,
          alt: `${property.title} en ${property.locality}`
        }
      ]
    }
  }
}

export default async function PropertyPage ({ params }: PageProps) {
  const { slug } = await params
  const property = getPropertyBySlug(slug)
  if (!property) notFound()

  return <PropertyDetail property={property} />
}
