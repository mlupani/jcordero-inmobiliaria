import { site } from '@/data/site'
import type { Property } from '@/data/properties'

export function whatsappUrl (message: string) {
  return `https://wa.me/${site.whatsapp}?text=${encodeURIComponent(message)}`
}

export function generalWhatsAppUrl () {
  return whatsappUrl(
    'Hola, me comunico desde la web de J. Cordero e Hijo. Quisiera hacer una consulta.'
  )
}

export function propertyWhatsAppUrl (property: Property) {
  return whatsappUrl(
    `Hola, quiero consultar por la propiedad de ${property.address}.`
  )
}

export function searchWhatsAppUrl (summary: string) {
  return whatsappUrl(
    `Hola, estoy buscando ${summary}. ¿Tienen opciones disponibles?`
  )
}
