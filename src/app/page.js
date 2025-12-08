import { CtaSection } from "@/components/home/cta-section"
import { HeroSection } from "@/components/home/hero-section"
import { ServicesSection } from "@/components/home/service-section"
import { WhyChooseUsSection } from "@/components/home/why-choose-us-section"

export default function Home() {
  return (
    <>
      <HeroSection />
      <ServicesSection />
      <WhyChooseUsSection />
      <CtaSection />
    </>
  )
}