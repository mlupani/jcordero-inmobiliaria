'use client'

import { useState } from 'react'
import { inquirySchema } from '@/schemas/inquiry'
import { whatsappUrl } from '@/lib/whatsapp'

interface InquiryFormProps {
  propertyAddress: string
}

export function InquiryForm ({ propertyAddress }: InquiryFormProps) {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const parsed = inquirySchema.safeParse({
      name: form.get('name'),
      phone: form.get('phone'),
      email: form.get('email'),
      message: form.get('message'),
      visit: form.get('visit') === 'on'
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
    const visitLine = parsed.data.visit ? '\nQuiero solicitar una visita.' : ''
    const message = `Hola, quiero consultar por la propiedad de ${propertyAddress}.\nNombre: ${parsed.data.name}\nTeléfono: ${parsed.data.phone}\nEmail: ${parsed.data.email}\n${parsed.data.message}${visitLine}`
    window.open(whatsappUrl(message), '_blank', 'noopener,noreferrer')
  }

  if (sent) {
    return (
      <p className='text-sm leading-relaxed text-warm'>
        Gracias por tu consulta. Te redirigimos a WhatsApp para continuar la conversación.
      </p>
    )
  }

  return (
    <form onSubmit={onSubmit} className='grid gap-4'>
      <label>
        <span className='field-label'>Nombre</span>
        <input name='name' className='field' />
        {errors.name ? <p className='mt-1 text-xs text-red-700'>{errors.name}</p> : null}
      </label>
      <label>
        <span className='field-label'>Teléfono</span>
        <input name='phone' className='field' />
        {errors.phone ? <p className='mt-1 text-xs text-red-700'>{errors.phone}</p> : null}
      </label>
      <label>
        <span className='field-label'>Email</span>
        <input name='email' type='email' className='field' />
        {errors.email ? <p className='mt-1 text-xs text-red-700'>{errors.email}</p> : null}
      </label>
      <label>
        <span className='field-label'>Mensaje</span>
        <textarea
          name='message'
          rows={4}
          className='field min-h-24'
          defaultValue={`Hola, quiero consultar por la propiedad de ${propertyAddress}.`}
        />
        {errors.message ? <p className='mt-1 text-xs text-red-700'>{errors.message}</p> : null}
      </label>
      <label className='flex items-center gap-2 text-sm text-petrol'>
        <input type='checkbox' name='visit' className='accent-petrol' />
        Solicitar una visita
      </label>
      <button type='submit' className='btn btn-primary'>
        Enviar consulta
      </button>
    </form>
  )
}
