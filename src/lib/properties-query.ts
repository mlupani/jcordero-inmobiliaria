import { useQuery } from '@tanstack/react-query'
import { filterProperties, type PropertyFilters } from '@/lib/filters'
import { properties } from '@/data/properties'

export const propertyKeys = {
  all: ['properties'] as const,
  list: (filters: PropertyFilters) => [...propertyKeys.all, 'list', filters] as const
}

export async function fetchProperties (filters: PropertyFilters) {
  return filterProperties(filters, properties)
}

export function useProperties (filters: PropertyFilters) {
  return useQuery({
    queryKey: propertyKeys.list(filters),
    queryFn: () => fetchProperties(filters)
  })
}
