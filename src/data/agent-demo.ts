import { properties } from '@/data/properties'

export interface ChatChip {
  id: string
  label: string
}

export interface ChatPropertyCard {
  title: string
  address: string
  locality: string
  price: string
  meta: string
  image: string
  slug: string
}

export interface ChatMessage {
  id: string
  from: 'user' | 'assistant'
  text?: string
  card?: ChatPropertyCard
}

const featured = properties[0]

export const demoPropertyCard: ChatPropertyCard = {
  title: featured.title,
  address: 'Gral. Güemes 1280',
  locality: 'Gerli, Avellaneda',
  price: 'USD 89.000',
  meta: '4 amb. · 3 dorm. · 145 m²',
  image: featured.images[0],
  slug: featured.slug
}

export const introMessages: ChatMessage[] = [
  {
    id: 'intro-user',
    from: 'user',
    text: 'Hola, quiero saber si la propiedad de Güemes sigue disponible.'
  },
  {
    id: 'intro-assistant',
    from: 'assistant',
    text: '¡Hola! Sí, continúa disponible. ¿Querés que te cuente más sobre la propiedad o preferís consultar para coordinar una visita?'
  }
]

export const introChips: ChatChip[] = [
  { id: 'more', label: 'Contame más' },
  { id: 'visit', label: 'Coordinar una visita' }
]

interface Reply {
  userText: string
  assistant: ChatMessage[]
  chips: ChatChip[]
}

const replies: Record<string, Reply> = {
  more: {
    userText: 'Contame más',
    assistant: [
      {
        id: 'more-1',
        from: 'assistant',
        text: 'Es una casa de 4 ambientes en Gerli, sobre Güemes, a metros de nuestra oficina. Tiene living comedor, cocina independiente, tres dormitorios, patio y terraza. El valor es de USD 89.000.'
      },
      {
        id: 'more-2',
        from: 'assistant',
        text: 'Está luminosa, con buena orientación y queda cerca de transporte y comercios. ¿Querés que te muestre fotos, te arme una visita o preferís que te contacte un asesor?'
      }
    ],
    chips: [
      { id: 'photos', label: 'Pasame fotos' },
      { id: 'visit', label: 'Quiero una visita' },
      { id: 'advisor', label: 'Hablar con un asesor' }
    ]
  },
  photos: {
    userText: 'Pasame fotos',
    assistant: [
      {
        id: 'photos-1',
        from: 'assistant',
        text: 'Te paso la propiedad para que la veas:'
      },
      {
        id: 'photos-card',
        from: 'assistant',
        card: demoPropertyCard
      },
      {
        id: 'photos-2',
        from: 'assistant',
        text: 'Si te interesa, puedo coordinar una visita para esta semana. También puedo dejarte con un asesor por WhatsApp.'
      }
    ],
    chips: [
      { id: 'visit', label: 'Esta semana me viene bien' },
      { id: 'advisor', label: 'Seguir por WhatsApp' }
    ]
  },
  visit: {
    userText: 'Quiero coordinar una visita',
    assistant: [
      {
        id: 'visit-1',
        from: 'assistant',
        text: 'Perfecto. Tenemos disponibilidad martes y jueves de 16 a 18 h, o sábado a la mañana. ¿Cuál te queda mejor?'
      }
    ],
    chips: [
      { id: 'slot-tue', label: 'Martes 16 h' },
      { id: 'slot-thu', label: 'Jueves 17 h' },
      { id: 'slot-sat', label: 'Sábado a la mañana' }
    ]
  },
  'slot-tue': {
    userText: 'Martes 16 h',
    assistant: [
      {
        id: 'slot-tue-1',
        from: 'assistant',
        text: 'Listo. Dejo registrada la visita para el martes a las 16 h en Gral. Güemes 1280, Gerli. Un asesor de J. Cordero e Hijo te va a confirmar por WhatsApp.'
      }
    ],
    chips: [{ id: 'advisor', label: 'Confirmar por WhatsApp' }]
  },
  'slot-thu': {
    userText: 'Jueves 17 h',
    assistant: [
      {
        id: 'slot-thu-1',
        from: 'assistant',
        text: 'Listo. Dejo registrada la visita para el jueves a las 17 h en Gral. Güemes 1280, Gerli. Un asesor de J. Cordero e Hijo te va a confirmar por WhatsApp.'
      }
    ],
    chips: [{ id: 'advisor', label: 'Confirmar por WhatsApp' }]
  },
  'slot-sat': {
    userText: 'Sábado a la mañana',
    assistant: [
      {
        id: 'slot-sat-1',
        from: 'assistant',
        text: 'Listo. Dejo registrada la visita para el sábado a la mañana en Gral. Güemes 1280, Gerli. Un asesor de J. Cordero e Hijo te va a confirmar por WhatsApp.'
      }
    ],
    chips: [{ id: 'advisor', label: 'Confirmar por WhatsApp' }]
  },
  advisor: {
    userText: 'Quiero hablar con un asesor',
    assistant: [
      {
        id: 'advisor-1',
        from: 'assistant',
        text: 'Dale. Te dejo con un asesor para que continúen por WhatsApp y coordinen el siguiente paso.'
      }
    ],
    chips: [{ id: 'whatsapp', label: 'Abrir WhatsApp' }]
  }
}

export function getChipReply (chipId: string): Reply | undefined {
  if (chipId === 'whatsapp') return undefined
  return replies[chipId]
}

export function matchTypedReply (raw: string): Reply {
  const text = raw.trim().toLowerCase()

  if (/(foto|fotos|imagen|imágenes|mostrar)/.test(text)) return replies.photos
  if (/(visita|visitar|verla|conocerla|agendar|coordinar)/.test(text)) return replies.visit
  if (/(martes)/.test(text)) return replies['slot-tue']
  if (/(jueves)/.test(text)) return replies['slot-thu']
  if (/(sábado|sabado)/.test(text)) return replies['slot-sat']
  if (/(asesor|whatsapp|humano|persona|llamar)/.test(text)) return replies.advisor
  if (/(precio|vale|valor|cuánto|cuanto|usd)/.test(text)) {
    return {
      userText: raw,
      assistant: [
        {
          id: 'price-1',
          from: 'assistant',
          text: 'El valor de la propiedad de Güemes es de USD 89.000. Tiene 145 m², 4 ambientes y patio. ¿Querés que te muestre fotos o coordinamos una visita?'
        }
      ],
      chips: [
        { id: 'photos', label: 'Pasame fotos' },
        { id: 'visit', label: 'Coordinar visita' }
      ]
    }
  }
  if (/(disponible|sigue|liberada|se vendió|vendio)/.test(text)) {
    return {
      userText: raw,
      assistant: [
        {
          id: 'avail-1',
          from: 'assistant',
          text: 'Sí, sigue disponible. Es una de las más consultadas esta semana. ¿Te cuento más o preferís coordinar una visita?'
        }
      ],
      chips: introChips
    }
  }
  if (/(más|mas|detalle|características|caracteristicas|ambientes)/.test(text)) {
    return replies.more
  }

  return {
    userText: raw,
    assistant: [
      {
        id: 'fallback-1',
        from: 'assistant',
        text: 'Puedo ayudarte con disponibilidad, precio, fotos o coordinar una visita a la propiedad de Güemes. ¿Qué preferís?'
      }
    ],
    chips: [
      { id: 'more', label: 'Contame más' },
      { id: 'photos', label: 'Ver fotos' },
      { id: 'visit', label: 'Coordinar visita' }
    ]
  }
}

export function visitWhatsAppMessage (slot?: string) {
  const when = slot ? ` Me vendría bien ${slot}.` : ''
  return `Hola, quiero consultar por la propiedad de Güemes. ¿Sigue disponible?${when}`
}
