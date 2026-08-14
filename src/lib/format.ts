import type { Property, PropertyType, Operation, Zone } from '@/data/properties'

export const operationLabels: Record<Operation, string> = {
  venta: 'Venta',
  alquiler: 'Alquiler'
}

export const typeLabels: Record<PropertyType, string> = {
  casa: 'Casa',
  departamento: 'Departamento',
  ph: 'PH',
  local: 'Local',
  terreno: 'Terreno'
}

export const zoneLabels: Record<Zone, string> = {
  gerli: 'Gerli',
  avellaneda: 'Avellaneda',
  sarandi: 'Sarandí',
  lanus: 'Lanús',
  'villa-dominico': 'Villa Dominico',
  wilde: 'Wilde'
}

export function formatPrice (property: Property) {
  const amount = property.price.toLocaleString('es-AR')

  if (property.currency === 'USD') {
    return `USD ${amount}`
  }

  if (property.period === 'month') {
    return `$${amount} / mes`
  }

  return `$${amount}`
}

export function formatSurface (meters: number) {
  return `${meters.toLocaleString('es-AR')} m²`
}

export function propertyCountLabel (count: number) {
  if (count === 1) return '1 propiedad encontrada'
  return `${count} propiedades encontradas`
}
