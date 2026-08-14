import type { Metadata } from 'next'
import { PropertiesListing } from '@/components/properties-listing'
import { filterProperties, parseFilters } from '@/lib/filters'

export const metadata: Metadata = {
  title: 'Propiedades en alquiler en Avellaneda y zona sur',
  description:
    'Departamentos y casas en alquiler en Avellaneda, Gerli, Sarandí y Lanús. Consultá disponibilidad con J. Cordero e Hijo.',
  openGraph: {
    title: 'Alquileres | J. Cordero e Hijo',
    description: 'Encontrá un lugar para vivir en Avellaneda y zona sur.'
  }
}

interface PageProps {
  searchParams: Promise<Record<string, string | string[] | undefined>>
}

export default async function AlquilerPage ({ searchParams }: PageProps) {
  const params = await searchParams
  const properties = filterProperties({
    ...parseFilters(params),
    operation: 'alquiler'
  })

  return (
    <PropertiesListing
      title='Propiedades en alquiler'
      subtitle='Encontrá un lugar para vivir en Avellaneda y zona sur.'
      properties={properties}
    />
  )
}
