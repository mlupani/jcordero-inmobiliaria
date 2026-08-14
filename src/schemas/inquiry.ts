import { z } from 'zod'

export const inquirySchema = z.object({
  name: z.string().min(2, 'Ingresá tu nombre'),
  phone: z.string().min(8, 'Ingresá un teléfono válido'),
  email: z.email('Ingresá un email válido'),
  message: z.string().min(10, 'Contanos un poco más sobre tu consulta'),
  visit: z.boolean().optional()
})

export type InquiryInput = z.infer<typeof inquirySchema>

export const valuationSchema = z.object({
  name: z.string().min(2, 'Ingresá tu nombre'),
  phone: z.string().min(8, 'Ingresá un teléfono válido'),
  email: z.email('Ingresá un email válido'),
  address: z.string().min(4, 'Ingresá la dirección de la propiedad'),
  type: z.string().min(1, 'Seleccioná el tipo de propiedad'),
  message: z.string().optional()
})

export type ValuationInput = z.infer<typeof valuationSchema>
