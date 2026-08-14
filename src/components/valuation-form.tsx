'use client'

import { useState } from 'react'
import { valuationSchema } from '@/schemas/inquiry'
import { whatsappUrl } from '@/lib/whatsapp'

export function ValuationForm () {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const parsed = valuationSchema.safeParse({
      name: form.get('name'),
      phone: form.get('phone'),
      email: form.get('email'),
      address: form.get('address'),
      type: form.get('type'),
      message: form.get('message') || undefined
    })

    if (!parsed.success) {
      const next: Record<string, string> = {}
      for (const issue of parsed.error.issues) {
        next[String(issue.path[0])] = issue.message
      }
      setErrors(next)
      return
    }

    setErrors({})
    setSent(true)
    const data = parsed.data
    const message = `Hola, quiero solicitar una tasación.\nNombre: ${data.name}\nTeléfono: ${data.phone}\nEmail: ${data.email}\nDirección: ${data.address}\nTipo: ${data.type}${data.message ? `\nMensaje: ${data.message}` : ''}`
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
  }

  if (sent) {
    return (
      <p className='text-warm'>
        Gracias. Te redirigimos a WhatsApp para completar la consulta con nuestro equipo.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className='grid gap-4'>
      <Field name='name' label='Nombre' error={errors.name} />
      <Field name='phone' label='Teléfono' error={errors.phone} />
      <Field name='email' label='Email' type='email' error={errors.email} />
      <Field name='address' label='Dirección de la propiedad' error={errors.address} />
      <label>
        <span className='field-label'>Tipo de propiedad</span>
        <select name='type' className='field' defaultValue=''>
          <option value='' disabled>
            Seleccioná
          </option>
          <option value='casa'>Casa</option>
          <option value='departamento'>Departamento</option>
          <option value='ph'>PH</option>
          <option value='local'>Local</option>
          <option value='terreno'>Terreno</option>
        </select>
        {errors.type ? <p className='mt-1 text-xs text-red-700'>{errors.type}</p> : null}
      </label>
      <label>
        <span className='field-label'>Mensaje</span>
        <textarea name='message' rows={4} className='field min-h-24' />
      </label>
      <button type='submit' className='btn btn-primary mt-2'>
        Solicitar tasación
      </button>
    </form>
  )
}

interface FieldProps {
  name: string
  label: string
  type?: string
  error?: string
}

function Field ({ name, label, type = 'text', error }: FieldProps) {
  return (
    <label>
      <span className='field-label'>{label}</span>
      <input name={name} type={type} className='field' />
      {error ? <p className='mt-1 text-xs text-red-700'>{error}</p> : null}
    </label>
  )
}
