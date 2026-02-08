import Header from "@/components/header"
import Hero from "@/components/hero"
import Services from "@/components/services"
import About from "@/components/about"
import Approach from "@/components/approach"
import Testimonials from "@/components/testimonials"
import Office from "@/components/office"
import FAQ from "@/components/faq"
import CTA from "@/components/cta"
import Footer from "@/components/footer"

export default function Page() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <Services />
        <About />
        <Approach />
        <Testimonials />
        <Office />
        <FAQ />
        <CTA />
      </main>
      <Footer />
    </>
  )
}
