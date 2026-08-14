import { OpenAgentChatButton } from '@/components/floating-agent-chat'

const messages = [
  {
    from: 'user' as const,
    text: 'Hola, estoy buscando una casa de 3 dormitorios en Gerli.'
  },
  {
    from: 'assistant' as const,
    text: '¡Hola! Claro. Tenemos algunas opciones que podrían interesarte. ¿Tu presupuesto es de hasta USD 100.000?'
  },
  {
    from: 'user' as const,
    text: 'Sí.'
  },
  {
    from: 'assistant' as const,
    text: 'Perfecto. Encontré 3 propiedades que se ajustan a lo que buscás. ¿Querés que te muestre las opciones?'
  }
]

export function WhatsAppAssistantPreview () {
  return (
    <section className='bg-ivory-deep px-5 py-20 lg:px-8 lg:py-28'>
      <div className='mx-auto grid max-w-7xl items-center gap-12 lg:grid-cols-2 lg:gap-20'>
        <div>
          <p className='eyebrow'>Atención inmediata</p>
          <div className='gold-rule mt-4 mb-6' />
          <h2 className='font-serif text-4xl text-petrol md:text-5xl'>
            ¿Tenés una consulta? Estamos para ayudarte.
          </h2>
          <p className='mt-5 max-w-lg text-lg leading-relaxed text-warm'>
            Consultá por una propiedad, preguntá por disponibilidad o contanos qué estás buscando.
          </p>
          <OpenAgentChatButton className='btn btn-whatsapp mt-8'>
            Consultar ahora
          </OpenAgentChatButton>
          <p className='mt-8 text-xs tracking-[0.16em] text-gold uppercase'>
            Asistente inmobiliario
          </p>
          <p className='mt-2 max-w-sm text-sm text-warm'>
            Disponible para responder consultas y ayudar a encontrar propiedades.
          </p>
        </div>

        <div className='mx-auto w-full max-w-sm'>
          <div className='rounded-[1.6rem] border border-petrol/10 bg-[#0b141a] p-3 shadow-lift'>
            <div className='overflow-hidden rounded-[1.2rem] bg-[#efeae2]'>
              <div className='flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white'>
                <span className='flex h-9 w-9 items-center justify-center rounded-full bg-white/15 text-sm font-semibold'>
                  JC
                </span>
                <div>
                  <p className='text-sm font-semibold'>J. Cordero e Hijo</p>
                  <p className='text-[11px] text-white/75'>Asistente inmobiliario</p>
                </div>
              </div>
              <div className='space-y-2 px-3 py-4'>
                {messages.map((message) => (
                  <p
                    key={message.text}
                    className={
                      message.from === 'user'
                        ? 'ml-10 rounded-lg rounded-tr-sm bg-[#d9fdd3] px-3 py-2 text-[13px] leading-relaxed text-[#111b21]'
                        : 'mr-10 rounded-lg rounded-tl-sm bg-white px-3 py-2 text-[13px] leading-relaxed text-[#111b21] shadow-sm'
                    }
                  >
                    {message.text}
                  </p>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
