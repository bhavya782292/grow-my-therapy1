import Image from "next/image"
import Link from "next/link"
import { CheckCircle } from "lucide-react"

const highlights = [
  "Licensed Clinical Psychologist (PsyD)",
  "Cognitive-Behavioral Therapy (CBT)",
  "EMDR-Trained for Trauma Recovery",
  "Mindfulness & Body-Oriented Techniques",
  "In-Person & Telehealth Sessions",
]

export default function About() {
  return (
    <section id="about" className="bg-secondary py-20 md:py-28">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-6 lg:flex-row lg:gap-20">
        {/* Image */}
        <div className="relative flex-1">
          <div className="relative mx-auto aspect-[3/4] w-full max-w-md overflow-hidden rounded-[2rem] shadow-xl">
            <Image
              src="/images/about-maya.jpg"
              alt="Dr. Maya Reynolds, PsyD - Licensed Clinical Psychologist in Santa Monica, California"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
            />
          </div>
          {/* Decorative element */}
          <div className="absolute -bottom-4 -right-4 -z-10 h-full w-full rounded-[2rem] border-2 border-primary/20" aria-hidden="true" />
        </div>

        {/* Content */}
        <div className="flex flex-1 flex-col lg:py-4">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            About Dr. Reynolds
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            Warm, Collaborative Therapy Rooted in Evidence
          </h2>
          <p className="mt-6 text-base leading-relaxed text-muted-foreground">
            {"I'm a licensed clinical psychologist based in Santa Monica, California, offering therapy for adults who feel overwhelmed by anxiety, stress, or the lingering effects of past experiences. Many of the people I work with are high-achieving, thoughtful, and self-aware\u2014but internally feel exhausted, stuck in overthinking, or emotionally on edge."}
          </p>
          <p className="mt-4 text-base leading-relaxed text-muted-foreground">
            I take a warm, collaborative, and grounded approach to therapy. Sessions are structured enough to feel supportive, while still leaving space for reflection and depth. My goal is not just symptom relief, but helping you develop insight, resilience, and a stronger relationship with yourself over time.
          </p>

          {/* Highlights */}
          <ul className="mt-8 flex flex-col gap-3">
            {highlights.map((item) => (
              <li key={item} className="flex items-center gap-3 text-foreground">
                <CheckCircle className="h-5 w-5 flex-shrink-0 text-primary" />
                <span className="text-sm font-medium">{item}</span>
              </li>
            ))}
          </ul>

          <Link
            href="#contact"
            className="mt-10 inline-flex self-start rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Get to Know Me
          </Link>
        </div>
      </div>
    </section>
  )
}
