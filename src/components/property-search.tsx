'use client'

import { useRouter } from 'next/navigation'
import { useState } from 'react'
import type { Operation, PropertyType, Zone } from '@/data/properties'
import { filtersToSearch } from '@/lib/filters'
import { cn } from '@/lib/cn'

interface PropertySearchProps {
  variant?: 'hero' | 'page'
  initialOperation?: Operation
}

const types: Array<{ value: PropertyType | ''; label: string }> = [
  { value: '', label: 'Todos' },
  { value: 'casa', label: 'Casa' },
  { value: 'departamento', label: 'Departamento' },
  { value: 'ph', label: 'PH' },
  { value: 'local', label: 'Local' },
  { value: 'terreno', label: 'Terreno' }
]

const zones: Array<{ value: Zone | ''; label: string }> = [
  { value: '', label: 'Todas' },
  { value: 'gerli', label: 'Gerli' },
  { value: 'avellaneda', label: 'Avellaneda' },
  { value: 'sarandi', label: 'Sarandí' },
  { value: 'lanus', label: 'Lanús' },
  { value: 'villa-dominico', label: 'Villa Dominico' },
  { value: 'wilde', label: 'Wilde' }
]

export function PropertySearch ({
  variant = 'hero',
  initialOperation = 'venta'
}: PropertySearchProps) {
  const router = useRouter()
  const [operation, setOperation] = useState<Operation>(initialOperation)
  const [type, setType] = useState<PropertyType | ''>('')
  const [zone, setZone] = useState<Zone | ''>('')
  const [rooms, setRooms] = useState('')
  const [maxPrice, setMaxPrice] = useState('')

  const onSubmit = (event: React.FormEvent) => {
    event.preventDefault()
    const query = filtersToSearch({
      operation,
      type: type || undefined,
      zone: zone || undefined,
      rooms: rooms ? Number(rooms) : undefined,
      maxPrice: maxPrice ? Number(maxPrice) : undefined
    })
    router.push(`/propiedades?${query}`)
  }

  return (
    <div
      className={cn(
        'rounded-[4px] border border-petrol/8 bg-paper/95 p-5 shadow-lift backdrop-blur-md md:p-7',
        variant === 'hero' && 'mx-auto max-w-6xl'
      )}
    >
      <h2 className='font-serif text-2xl text-petrol md:text-3xl'>
        ¿Qué estás buscando?
      </h2>

      <div className='mt-4 mb-5 inline-flex rounded-[2px] border border-petrol/12 p-1'>
        {(['venta', 'alquiler'] as const).map((value) => (
          <button
            key={value}
            type='button'
            onClick={() => setOperation(value)}
            className={cn(
              'min-w-28 px-4 py-2 text-xs font-semibold tracking-[0.14em] uppercase transition-colors',
              operation === value
                ? 'bg-petrol text-ivory'
                : 'text-petrol/70 hover:text-petrol'
            )}
          >
            {value === 'venta' ? 'Comprar' : 'Alquilar'}
          </button>
        ))}
      </div>

      <form onSubmit={onSubmit} className='grid gap-4 md:grid-cols-2 lg:grid-cols-5'>
        <label className='block'>
          <span className='field-label'>Tipo de propiedad</span>
          <select className='field' value={type} onChange={(e) => setType(e.target.value as PropertyType | '')}>
            {types.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className='block'>
          <span className='field-label'>Zona</span>
          <select className='field' value={zone} onChange={(e) => setZone(e.target.value as Zone | '')}>
            {zones.map((option) => (
              <option key={option.label} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </label>

        <label className='block'>
          <span className='field-label'>Ambientes</span>
          <select className='field' value={rooms} onChange={(e) => setRooms(e.target.value)}>
            <option value=''>Todos</option>
            {[1, 2, 3, 4, 5].map((n) => (
              <option key={n} value={n}>
                {n}+
              </option>
            ))}
          </select>
        </label>

        <label className='block'>
          <span className='field-label'>
            Precio máximo {operation === 'alquiler' ? '(ARS)' : '(USD)'}
          </span>
          <input
            className='field'
            inputMode='numeric'
            placeholder={operation === 'alquiler' ? 'Ej: 700000' : 'Ej: 100000'}
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value.replace(/\D/g, ''))}
          />
        </label>

        <div className='flex items-end'>
          <button type='submit' className='btn btn-primary w-full'>
            Buscar propiedades
          </button>
        </div>
      </form>
    </div>
  )
}
