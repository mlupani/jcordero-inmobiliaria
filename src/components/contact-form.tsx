'use client'

import { useState } from 'react'
import { inquirySchema } from '@/schemas/inquiry'
import { whatsappUrl } from '@/lib/whatsapp'

export function ContactForm () {
  const [errors, setErrors] = useState<Record<string, string>>({})
  const [sent, setSent] = useState(false)

  const onSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault()
    const form = new FormData(event.currentTarget)
    const parsed = inquirySchema.safeParse({
      name: form.get('name'),
      phone: form.get('phone'),
      email: form.get('email'),
      message: form.get('message')
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
    window.open(
      whatsappUrl(
        `Hola, me comunico desde la web de J. Cordero e Hijo.\nNombre: ${data.name}\nTeléfono: ${data.phone}\nEmail: ${data.email}\n${data.message}`
      ),
      '_blank',
      'noopener,noreferrer'
    )
  }

  if (sent) {
    return (
      <p className='text-warm'>
        Gracias. Te redirigimos a WhatsApp para continuar la conversación.
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
        <textarea name='message' rows={5} className='field min-h-28' />
        {errors.message ? <p className='mt-1 text-xs text-red-700'>{errors.message}</p> : null}
      </label>
      <button type='submit' className='btn btn-primary mt-2'>
        Enviar consulta
      </button>
    </form>
  )
}
