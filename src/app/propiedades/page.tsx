import type { Metadata } from 'next'
import { PropertiesListing } from '@/components/properties-listing'
import { filterProperties, parseFilters } from '@/lib/filters'

export const metadata: Metadata = {
  title: 'Propiedades en Avellaneda y zona sur',
  description:
    'Casas, departamentos, PH y locales en venta y alquiler en Avellaneda, Gerli, Sarandí, Lanús, Villa Dominico y Wilde.',
  openGraph: {
    title: 'Propiedades | J. Cordero e Hijo',
    description:
      'Encontrá casas, departamentos y PH en Avellaneda y zona sur. Consultá disponibilidad por WhatsApp.'
  }
}

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function PropiedadesPage ({ searchParams }: PageProps) {
  const params = await searchParams
  const properties = filterProperties(parseFilters(params))

  return (
    <PropertiesListing
      title='Propiedades'
      subtitle='Filtrá por operación, tipo, zona, ambientes o precio.'
      properties={properties}
    />
  )
}
