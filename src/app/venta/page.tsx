import type { Metadata } from 'next'
import { PropertiesListing } from '@/components/properties-listing'
import { filterProperties, parseFilters } from '@/lib/filters'

export const metadata: Metadata = {
  title: 'Propiedades en venta en Avellaneda y zona sur',
  description:
    'Casas, departamentos y PH en venta en Avellaneda, Gerli, Sarandí y Lanús. Consultá precio y disponibilidad con J. Cordero e Hijo.',
  openGraph: {
    title: 'Propiedades en venta | J. Cordero e Hijo',
    description:
      'Oportunidades para comprar en Avellaneda y zona sur, con asesoramiento personalizado.'
  }
}

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function VentaPage ({ searchParams }: PageProps) {
  const params = await searchParams
  const properties = filterProperties({
    ...parseFilters(params),
    operation: 'venta'
  })

  return (
    <PropertiesListing
      title='Propiedades en venta'
      subtitle='Oportunidades para comprar en Avellaneda, Gerli, Sarandí y Lanús.'
      properties={properties}
    />
  )
}
