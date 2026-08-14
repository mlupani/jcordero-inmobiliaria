import { properties, type Operation, type Property, type PropertyType, type Zone } from '@/data/properties'

export interface PropertyFilters {
  operation?: Operation
  type?: PropertyType
  zone?: Zone
  rooms?: number
  maxPrice?: number
}

export function parseFilters (
  params: Record<string, string | string[] | undefined>
): PropertyFilters {
  const get = (key: string) => {
    const value = params[key]
    return Array.isArray(value) ? value[0] : value
  }

  const operation = get('operacion')
  const type = get('tipo')
  const zone = get('zona')
  const rooms = get('ambientes')
  const maxPrice = get('precio')

  return {
    operation: operation === 'venta' || operation === 'alquiler' ? operation : undefined,
    type: isPropertyType(type) ? type : undefined,
    zone: isZone(zone) ? zone : undefined,
    rooms: rooms ? Number(rooms) : undefined,
    maxPrice: maxPrice ? Number(maxPrice) : undefined
  }
}

export function filterProperties (
  filters: PropertyFilters,
  source: Property[] = properties
): Property[] {
  return source.filter((property) => {
    if (filters.operation && property.operation !== filters.operation) return false
    if (filters.type && property.type !== filters.type) return false
    if (filters.zone && property.zone !== filters.zone) return false
    if (filters.rooms && property.rooms < filters.rooms) return false
    if (filters.maxPrice && property.price > filters.maxPrice) return false
    return true
  })
}

export function getPropertyBySlug (slug: string) {
  return properties.find((property) => property.slug === slug)
}

export function getFeaturedProperties (limit = 6) {
  return properties.filter((property) => property.featured).slice(0, limit)
}

export function filtersToSearch (filters: PropertyFilters) {
  const params = new URLSearchParams()

  if (filters.operation) params.set('operacion', filters.operation)
  if (filters.type) params.set('tipo', filters.type)
  if (filters.zone) params.set('zona', filters.zone)
  if (filters.rooms) params.set('ambientes', String(filters.rooms))
  if (filters.maxPrice) params.set('precio', String(filters.maxPrice))

  return params.toString()
}

function isPropertyType (value?: string): value is PropertyType {
  return ['casa', 'departamento', 'ph', 'local', 'terreno'].includes(value ?? '')
}

function isZone (value?: string): value is Zone {
  return ['gerli', 'avellaneda', 'sarandi', 'lanus', 'villa-dominico', 'wilde'].includes(
    value ?? ''
  )
}
