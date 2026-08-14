import { Header } from '@/components/header'
import { Footer } from '@/components/footer'
import { FloatingAgentChat } from '@/components/floating-agent-chat'
import { ValuationModal } from '@/components/valuation-modal'

interface SiteShellProps {
  children: React.ReactNode
}

export function SiteShell ({ children }: SiteShellProps) {
  return (
    <>
      <Header />
      <main className='flex-1'>{children}</main>
      <Footer />
      <FloatingAgentChat />
      <ValuationModal />
    </>
  )
}
