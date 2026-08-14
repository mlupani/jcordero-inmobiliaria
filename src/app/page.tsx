import { Hero } from '@/components/hero'
import { FeaturedProperties } from '@/components/featured-properties'
import { About } from '@/components/about'
import { Services } from '@/components/services'
import { ValuationCTA } from '@/components/valuation-cta'
import { WhatsAppAssistantPreview } from '@/components/whatsapp-assistant-preview'
import { Areas } from '@/components/areas'
import { FinalCTA } from '@/components/final-cta'

export default function HomePage () {
  return (
    <>
      <Hero />
      <FeaturedProperties />
      <About />
      <Services />
      <ValuationCTA />
      <WhatsAppAssistantPreview />
      <Areas />
      <FinalCTA />
    </>
  )
}
