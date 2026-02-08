import Image from "next/image"
import Link from "next/link"
import { Brain, Heart, Flame } from "lucide-react"

const services = [
  {
    icon: Brain,
    title: "Anxiety & Panic Therapy",
    description:
      "Move beyond constant worry, physical tension, and overthinking. Using CBT and mindfulness-based approaches, we work together to help you feel grounded and in control of your daily life again.",
    image: "/images/service-anxiety.jpg",
    alt: "Peaceful scene representing anxiety relief therapy in Santa Monica",
  },
  {
    icon: Heart,
    title: "Trauma & EMDR Therapy",
    description:
      "Heal from past experiences that still affect your relationships, confidence, and sense of safety. Through carefully paced EMDR and body-oriented techniques, we create a safe space for lasting recovery.",
    image: "/images/service-trauma.jpg",
    alt: "Calming environment for trauma therapy and EMDR treatment",
  },
  {
    icon: Flame,
    title: "Burnout & Perfectionism",
    description:
      "Reconnect with yourself after years of pushing through stress. Designed for entrepreneurs, creatives, and professionals, this work helps you develop more sustainable ways of living and working.",
    image: "/images/service-burnout.jpg",
    alt: "Restorative setting for burnout and perfectionism counseling",
  },
]

export default function Services() {
  return (
    <section id="services" className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            How I Can Help
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Specialized Therapy for Anxiety, Trauma & Burnout
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Evidence-based approaches tailored to your unique needs, helping you move from surviving to truly thriving.
          </p>
        </div>

        {/* Service Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {services.map((service) => (
            <div
              key={service.title}
              className="group flex flex-col overflow-hidden rounded-2xl bg-card border border-border shadow-sm transition-shadow hover:shadow-md"
            >
              {/* Card Image */}
              <div className="relative aspect-[4/3] overflow-hidden">
                <Image
                  src={service.image || "/placeholder.svg"}
                  alt={service.alt}
                  fill
                  className="object-cover transition-transform duration-500 group-hover:scale-105"
                  sizes="(max-width: 768px) 100vw, 33vw"
                />
                {/* Icon overlay */}
                <div className="absolute bottom-4 left-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/90 text-primary-foreground shadow-lg">
                  <service.icon className="h-5 w-5" />
                </div>
              </div>
              {/* Card Content */}
              <div className="flex flex-1 flex-col p-6">
                <h3 className="font-serif text-xl font-bold text-foreground">{service.title}</h3>
                <p className="mt-3 flex-1 text-base leading-relaxed text-muted-foreground">
                  {service.description}
                </p>
                <Link
                  href="#contact"
                  className="mt-5 inline-flex items-center text-sm font-semibold text-primary transition-colors hover:text-primary/80"
                >
                  Learn More
                  <svg className="ml-1.5 h-4 w-4" viewBox="0 0 16 16" fill="none" aria-hidden="true">
                    <path d="M6 3l5 5-5 5" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
