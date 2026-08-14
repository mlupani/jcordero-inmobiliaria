'use client'

import { usePathname, useRouter, useSearchParams } from 'next/navigation'
import { SlidersHorizontal, X } from 'lucide-react'
import { useUIStore } from '@/store/ui-store'

const operations = [
  { value: '', label: 'Todas' },
  { value: 'venta', label: 'Venta' },
  { value: 'alquiler', label: 'Alquiler' }
]

const types = [
  { value: '', label: 'Todos' },
  { value: 'casa', label: 'Casa' },
  { value: 'departamento', label: 'Departamento' },
  { value: 'ph', label: 'PH' },
  { value: 'local', label: 'Local' },
  { value: 'terreno', label: 'Terreno' }
]

const zones = [
  { value: '', label: 'Todas' },
  { value: 'gerli', label: 'Gerli' },
  { value: 'avellaneda', label: 'Avellaneda' },
  { value: 'sarandi', label: 'Sarandí' },
  { value: 'lanus', label: 'Lanús' },
  { value: 'villa-dominico', label: 'Villa Dominico' },
  { value: 'wilde', label: 'Wilde' }
]

export function PropertyFilters () {
  const router = useRouter()
  const pathname = usePathname()
  const searchParams = useSearchParams()
  const filtersOpen = useUIStore((state) => state.filtersOpen)
  const setFiltersOpen = useUIStore((state) => state.setFiltersOpen)

  const update = (key: string, value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) params.set(key, value)
    else params.delete(key)
    const query = params.toString()
    router.push(query ? `${pathname}?${query}` : pathname)
  }

  const updateOperation = (value: string) => {
    const params = new URLSearchParams(searchParams.toString())
    if (value) params.set('operacion', value)
    else params.delete('operacion')
    const query = params.toString()

    if (value === 'alquiler' && pathname === '/venta') {
      router.push(query ? `/alquiler?${query}` : '/alquiler')
      return
    }
    if (value === 'venta' && pathname === '/alquiler') {
      router.push(query ? `/venta?${query}` : '/venta')
      return
    }
    if (!value && (pathname === '/venta' || pathname === '/alquiler')) {
      router.push(query ? `/propiedades?${query}` : '/propiedades')
      return
    }

    router.push(query ? `${pathname}?${query}` : pathname)
  }

  const operationValue =
    searchParams.get('operacion') ??
    (pathname === '/venta' ? 'venta' : pathname === '/alquiler' ? 'alquiler' : '')

  const clear = () => router.push(pathname)

  const fields = (
    <div className='grid gap-4 md:grid-cols-2 lg:grid-cols-5'>
      <Select
        label='Operación'
        value={operationValue}
        options={operations}
        onChange={updateOperation}
      />
      <Select
        label='Tipo'
        value={searchParams.get('tipo') ?? ''}
        options={types}
        onChange={(value) => update('tipo', value)}
      />
      <Select
        label='Zona'
        value={searchParams.get('zona') ?? ''}
        options={zones}
        onChange={(value) => update('zona', value)}
      />
      <Select
        label='Ambientes'
        value={searchParams.get('ambientes') ?? ''}
        options={[
          { value: '', label: 'Todos' },
          { value: '1', label: '1+' },
          { value: '2', label: '2+' },
          { value: '3', label: '3+' },
          { value: '4', label: '4+' },
          { value: '5', label: '5+' }
        ]}
        onChange={(value) => update('ambientes', value)}
      />
      <label>
        <span className='field-label'>Precio máximo</span>
        <input
          className='field'
          inputMode='numeric'
          placeholder='Sin límite'
          defaultValue={searchParams.get('precio') ?? ''}
          onBlur={(event) => update('precio', event.target.value.replace(/\D/g, ''))}
        />
      </label>
    </div>
  )

  return (
    <>
      <div className='mb-4 flex items-center justify-between lg:hidden'>
        <button
          type='button'
          className='btn btn-outline-dark'
          onClick={() => setFiltersOpen(true)}
        >
          <SlidersHorizontal size={16} />
          Filtros
        </button>
        <button type='button' className='text-sm text-warm' onClick={clear}>
          Limpiar
        </button>
      </div>

      <div className='mb-8 hidden rounded-[4px] border border-petrol/8 bg-paper p-5 lg:block'>
        {fields}
        <button type='button' className='mt-4 text-xs tracking-wide text-warm uppercase' onClick={clear}>
          Limpiar filtros
        </button>
      </div>

      {filtersOpen
        ? (
          <div className='fixed inset-0 z-50 bg-petrol-deep/50 lg:hidden'>
            <div className='absolute inset-x-0 bottom-0 max-h-[88vh] overflow-y-auto rounded-t-[8px] bg-paper p-5'>
              <div className='mb-4 flex items-center justify-between'>
                <p className='font-serif text-2xl text-petrol'>Filtros</p>
                <button type='button' aria-label='Cerrar' onClick={() => setFiltersOpen(false)}>
                  <X />
                </button>
              </div>
              {fields}
              <button
                type='button'
                className='btn btn-primary mt-6 w-full'
                onClick={() => setFiltersOpen(false)}
              >
                Ver resultados
              </button>
            </div>
          </div>
          )
        : null}
    </>
  )
}

interface SelectProps {
  label: string
  value: string
  options: Array<{ value: string; label: string }>
  onChange: (value: string) => void
}

function Select ({ label, value, options, onChange }: SelectProps) {
  return (
    <label>
      <span className='field-label'>{label}</span>
      <select
        className='field'
        value={value}
        onChange={(event) => onChange(event.target.value)}
      >
        {options.map((option) => (
          <option key={option.label} value={option.value}>
            {option.label}
          </option>
        ))}
      </select>
    </label>
  )
}
