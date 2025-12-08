import { CtaSection } from "@/components/home/cta-section"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/service-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <CtaSection />
    </>
  )
}