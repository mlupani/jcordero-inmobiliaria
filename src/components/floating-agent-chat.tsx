'use client'

import Image from 'next/image'
import Link from 'next/link'
import { FormEvent, useEffect, useRef, useState } from 'react'
import { AnimatePresence, motion } from 'motion/react'
import { MessageCircle, Send, X } from 'lucide-react'
import { useUIStore } from '@/store/ui-store'
import { whatsappUrl } from '@/lib/whatsapp'
import {
  type ChatChip,
  type ChatMessage,
  getChipReply,
  introChips,
  introMessages,
  matchTypedReply,
  visitWhatsAppMessage
} from '@/data/agent-demo'

const TYPING_MS = 900
const BUBBLE_MS = 420

export function FloatingAgentChat () {
  const chatOpen = useUIStore((state) => state.chatOpen)
  const setChatOpen = useUIStore((state) => state.setChatOpen)
  const [messages, setMessages] = useState<ChatMessage[]>([])
  const [chips, setChips] = useState<ChatChip[]>([])
  const [typing, setTyping] = useState(false)
  const [draft, setDraft] = useState('')
  const [busy, setBusy] = useState(false)
  const introPlayed = useRef(false)
  const listRef = useRef<HTMLDivElement>(null)
  const timers = useRef<number[]>([])
  const uid = useRef(0)

  const nextId = (prefix: string) => {
    uid.current += 1
    return `${prefix}-${uid.current}`
  }

  const clearTimers = () => {
    timers.current.forEach((id) => window.clearTimeout(id))
    timers.current = []
  }

  const later = (fn: () => void, delay: number) => {
    const id = window.setTimeout(fn, delay)
    timers.current.push(id)
  }

  const playSequence = (
    incoming: ChatMessage[],
    nextChips: ChatChip[],
    options?: { includeUser?: boolean, user?: ChatMessage }
  ) => {
    clearTimers()
    setBusy(true)
    setChips([])

    if (options?.user) {
      setMessages((current) => [...current, options.user as ChatMessage])
    }

    const assistant = incoming.filter((message) => message.from === 'assistant')
    const users = incoming.filter((message) => message.from === 'user')
    let delay = 280

    if (options?.includeUser) {
      users.forEach((message, index) => {
        later(() => {
          setMessages((current) => [...current, message])
        }, delay + index * BUBBLE_MS)
      })
      delay += users.length * BUBBLE_MS + 380
    }

    assistant.forEach((message, index) => {
      later(() => setTyping(true), delay)
      later(() => {
        setTyping(false)
        setMessages((current) => [...current, { ...message, id: nextId(message.id || 'msg') }])
      }, delay + TYPING_MS)
      delay += TYPING_MS + 520
    })

    later(() => {
      setChips(nextChips)
      setBusy(false)
    }, delay)
  }

  const scrollToEnd = () => {
    const node = listRef.current
    if (!node) return
    node.scrollTo({ top: node.scrollHeight, behavior: 'smooth' })
  }

  useEffect(() => {
    scrollToEnd()
  }, [messages, typing, chips])

  useEffect(() => {
    if (!chatOpen || introPlayed.current) return
    introPlayed.current = true
    playSequence(introMessages, introChips, { includeUser: true })
    return clearTimers
    // El intro solo debe dispararse al abrir por primera vez.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [chatOpen])

  const sendChip = (chip: ChatChip) => {
    if (busy) return
    const reply = getChipReply(chip.id)
    if (!reply) return
    playSequence(reply.assistant, reply.chips, {
      user: { id: nextId('user'), from: 'user', text: chip.label }
    })
  }

  const onSubmit = (event: FormEvent) => {
    event.preventDefault()
    const text = draft.trim()
    if (!text || busy) return
    setDraft('')
    const reply = matchTypedReply(text)
    playSequence(reply.assistant, reply.chips, {
      user: { id: nextId('typed'), from: 'user', text }
    })
  }

  return (
    <div className='fixed right-4 bottom-4 z-40 lg:right-6 lg:bottom-6'>
      <AnimatePresence>
        {chatOpen
          ? (
            <motion.section
              key='agent-panel'
              initial={{ opacity: 0, y: 18, scale: 0.98 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: 16, scale: 0.98 }}
              transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
              className='mb-3 flex h-[min(34rem,calc(100dvh-7rem))] w-[min(24.5rem,calc(100vw-2rem))] flex-col overflow-hidden rounded-[18px] border border-petrol/10 bg-[#efeae2] shadow-lift'
              aria-label='Asistente inmobiliario'
            >
              <header className='flex items-center gap-3 bg-[#075e54] px-4 py-3 text-white'>
                <span className='flex h-10 w-10 items-center justify-center rounded-full bg-white/15 text-sm font-semibold'>
                  JC
                </span>
                <div className='min-w-0 flex-1'>
                  <p className='truncate text-sm font-semibold'>J. Cordero e Hijo</p>
                  <p className='text-[11px] text-white/75'>Asistente inmobiliario · en línea</p>
                </div>
                <button
                  type='button'
                  aria-label='Cerrar chat'
                  className='rounded-full p-1.5 text-white/80 transition-colors hover:bg-white/10 hover:text-white'
                  onClick={() => setChatOpen(false)}
                >
                  <X size={18} />
                </button>
              </header>

              <div ref={listRef} className='flex-1 space-y-2 overflow-y-auto px-3 py-4'>
                {messages.map((message) => (
                  <MessageBubble key={message.id} message={message} />
                ))}
                {typing ? <TypingBubble /> : null}
              </div>

              {chips.length > 0
                ? (
                  <div className='flex flex-wrap gap-2 border-t border-black/5 bg-[#efeae2] px-3 py-2.5'>
                    {chips.map((chip) => (
                      chip.id === 'whatsapp'
                        ? (
                          <a
                            key={chip.id}
                            href={whatsappUrl(visitWhatsAppMessage())}
                            target='_blank'
                            rel='noopener noreferrer'
                            className='rounded-full bg-[#075e54] px-3 py-1.5 text-[12px] font-medium text-white'
                          >
                            {chip.label}
                          </a>
                          )
                        : (
                          <button
                            key={chip.id}
                            type='button'
                            disabled={busy}
                            onClick={() => sendChip(chip)}
                            className='rounded-full border border-[#075e54]/25 bg-white px-3 py-1.5 text-[12px] text-[#075e54] transition-colors hover:bg-[#d9fdd3] disabled:opacity-60'
                          >
                            {chip.label}
                          </button>
                          )
                    ))}
                  </div>
                  )
                : null}

              <form onSubmit={onSubmit} className='flex items-center gap-2 bg-[#f0f2f5] px-3 py-2.5'>
                <input
                  value={draft}
                  onChange={(event) => setDraft(event.target.value)}
                  placeholder='Escribí tu consulta…'
                  disabled={busy && messages.length === 0}
                  className='h-10 flex-1 rounded-full border-0 bg-white px-4 text-sm text-[#111b21] outline-none ring-1 ring-black/5 placeholder:text-[#667781]'
                />
                <button
                  type='submit'
                  aria-label='Enviar'
                  disabled={busy || !draft.trim()}
                  className='inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#075e54] text-white disabled:opacity-40'
                >
                  <Send size={16} />
                </button>
              </form>
            </motion.section>
            )
          : null}
      </AnimatePresence>

      {!chatOpen
        ? (
          <button
            type='button'
            onClick={() => setChatOpen(true)}
            className='group flex items-center gap-3'
            aria-label='Abrir asistente inmobiliario'
          >
            <span className='hidden max-w-52 rounded-[4px] bg-petrol px-3 py-2 text-left text-[12px] leading-snug text-ivory shadow-soft sm:block'>
              ¿Consultamos por una propiedad?
            </span>
            <span className='relative inline-flex h-14 w-14 items-center justify-center rounded-full bg-whatsapp text-white shadow-lift transition-transform group-hover:scale-105'>
              <span className='absolute -top-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-ivory bg-gold' />
              <MessageCircle size={26} />
            </span>
          </button>
          )
        : (
          <button
            type='button'
            onClick={() => setChatOpen(false)}
            aria-label='Cerrar asistente inmobiliario'
            className='ml-auto inline-flex h-14 w-14 items-center justify-center rounded-full bg-petrol text-ivory shadow-lift'
          >
            <X size={22} />
          </button>
          )}
    </div>
  )
}

function MessageBubble ({ message }: { message: ChatMessage }) {
  const isUser = message.from === 'user'

  return (
    <div className={isUser ? 'ml-8 flex justify-end' : 'mr-8 flex justify-start'}>
      <div
        className={
          isUser
            ? 'max-w-full rounded-lg rounded-tr-sm bg-[#d9fdd3] px-3 py-2 text-[13px] leading-relaxed text-[#111b21] shadow-sm'
            : 'max-w-full rounded-lg rounded-tl-sm bg-white px-3 py-2 text-[13px] leading-relaxed text-[#111b21] shadow-sm'
        }
      >
        {message.text ? <p>{message.text}</p> : null}
        {message.card
          ? (
            <Link
              href={`/propiedades/${message.card.slug}`}
              className='mt-2 block overflow-hidden rounded-md border border-black/5'
            >
              <span className='relative block aspect-[16/10]'>
                <Image
                  src={message.card.image}
                  alt={message.card.title}
                  fill
                  sizes='280px'
                  className='object-cover'
                />
              </span>
              <span className='block px-2.5 py-2'>
                <span className='block text-[12px] font-semibold text-petrol'>{message.card.address}</span>
                <span className='block text-[11px] text-warm'>{message.card.locality}</span>
                <span className='mt-1 block text-[12px] text-petrol'>{message.card.meta}</span>
                <span className='mt-0.5 block font-serif text-lg text-petrol'>{message.card.price}</span>
              </span>
            </Link>
            )
          : null}
      </div>
    </div>
  )
}

export function OpenAgentChatButton ({
  children,
  className
}: {
  children: React.ReactNode
  className?: string
}) {
  const setChatOpen = useUIStore((state) => state.setChatOpen)

  return (
    <button type='button' className={className} onClick={() => setChatOpen(true)}>
      {children}
    </button>
  )
}

function TypingBubble () {
  return (
    <div className='mr-8 flex justify-start'>
      <div className='flex items-center gap-1 rounded-lg rounded-tl-sm bg-white px-3 py-3 shadow-sm'>
        <span className='h-1.5 w-1.5 animate-bounce rounded-full bg-[#667781] [animation-delay:0ms]' />
        <span className='h-1.5 w-1.5 animate-bounce rounded-full bg-[#667781] [animation-delay:120ms]' />
        <span className='h-1.5 w-1.5 animate-bounce rounded-full bg-[#667781] [animation-delay:240ms]' />
      </div>
    </div>
  )
}
