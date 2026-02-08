import Image from "next/image"
import { MapPin, Monitor, ShieldCheck } from "lucide-react"

const officeImages = [
  {
    src: "/images/office-1.jpg",
    alt: "Dr. Maya Reynolds therapy office - comfortable seating area in Santa Monica",
  },
  {
    src: "/images/office-2.jpg",
    alt: "Natural light filling the counseling room at Dr. Reynolds' Santa Monica practice",
  },
  {
    src: "/images/office-3.jpg",
    alt: "Calming waiting area at Dr. Reynolds' therapy office in Santa Monica",
  },
]

const details = [
  {
    icon: MapPin,
    title: "Conveniently Located",
    text: "123th Street 45 W, Santa Monica, CA 90401",
  },
  {
    icon: Monitor,
    title: "In-Person & Telehealth",
    text: "Flexible sessions available in-office or via secure video for all California residents.",
  },
  {
    icon: ShieldCheck,
    title: "Private & Comfortable",
    text: "A quiet, uncluttered space designed to help you feel safe and at ease from the moment you arrive.",
  },
]

export default function Office() {
  return (
    <section id="office" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Our Office
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            A Calm Space for Healing
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            My Santa Monica office is a quiet, private space designed to feel calm and grounding, with natural light and a comfortable, uncluttered environment. Clients often share that the space itself helps them feel more at ease when they arrive.
          </p>
        </div>

        {/* Office Images */}
        <div className="mt-14 grid gap-4 md:grid-cols-3">
          {officeImages.map((image, index) => (
            <div
              key={index}
              className="relative aspect-[4/3] overflow-hidden rounded-2xl shadow-sm"
            >
              <Image
                src={image.src || "/placeholder.svg"}
                alt={image.alt}
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, 33vw"
              />
            </div>
          ))}
        </div>

        {/* Office Details */}
        <div className="mt-14 grid gap-8 md:grid-cols-3">
          {details.map((detail) => (
            <div key={detail.title} className="flex items-start gap-4">
              <div className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                <detail.icon className="h-5 w-5 text-primary" />
              </div>
              <div>
                <h3 className="font-serif text-lg font-bold text-foreground">{detail.title}</h3>
                <p className="mt-1 text-sm leading-relaxed text-muted-foreground">{detail.text}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
