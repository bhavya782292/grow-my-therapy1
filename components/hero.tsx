import Image from "next/image"
import Link from "next/link"

export default function Hero() {
  return (
    <section className="relative overflow-hidden bg-secondary pt-28 pb-16 md:pt-36 md:pb-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-16">
        {/* Text Content */}
        <div className="flex flex-1 flex-col items-center text-center lg:items-start lg:text-left">
          <p className="mb-4 text-sm font-medium uppercase tracking-widest text-accent-foreground/60">
            Licensed Clinical Psychologist &bull; Santa Monica, CA
          </p>
          <h1 className="font-serif text-4xl font-bold leading-tight text-foreground md:text-5xl lg:text-6xl text-balance">
            Find Calm Within the Storm
          </h1>
          <p className="mt-6 max-w-xl text-lg leading-relaxed text-muted-foreground">
            Compassionate, evidence-based therapy for anxiety, trauma, and burnout. Helping high-achieving adults in Santa Monica reconnect with themselves and build a more grounded life.
          </p>
          <div className="mt-8 flex flex-col gap-4 sm:flex-row">
            <Link
              href="#contact"
              className="rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
            >
              Schedule a Free Consultation
            </Link>
            <Link
              href="#services"
              className="rounded-full border-2 border-primary bg-transparent px-8 py-3.5 text-base font-medium text-primary transition-colors hover:bg-primary hover:text-primary-foreground"
            >
              Explore Services
            </Link>
          </div>
        </div>

        {/* Hero Image */}
        <div className="relative flex-1">
          <div className="relative mx-auto aspect-[4/5] w-full max-w-md overflow-hidden rounded-[2rem] shadow-xl lg:max-w-lg">
            <Image
              src="/images/hero-therapist.jpg"
              alt="Dr. Maya Reynolds, licensed clinical psychologist in her Santa Monica therapy office"
              fill
              className="object-cover"
              priority
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Decorative organic shape */}
          <div className="absolute -bottom-6 -left-6 -z-10 h-48 w-48 rounded-full bg-primary/10" aria-hidden="true" />
          <div className="absolute -top-6 -right-6 -z-10 h-32 w-32 rounded-full bg-accent/20" aria-hidden="true" />
        </div>
      </div>

      {/* Bottom curve */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full" aria-hidden="true">
          <path d="M0 60V30C240 0 480 0 720 15C960 30 1200 50 1440 30V60H0Z" fill="hsl(40 33% 97%)" />
        </svg>
      </div>
    </section>
  )
}
