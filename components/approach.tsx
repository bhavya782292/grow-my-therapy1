import { Shield, Compass, Sparkles } from "lucide-react"

const steps = [
  {
    icon: Shield,
    step: "01",
    title: "Safety & Stabilization",
    description:
      "We begin by building a foundation of safety. Whether you are navigating anxiety or processing past trauma, every session starts from a place of trust, comfort, and respect for your pace.",
  },
  {
    icon: Compass,
    step: "02",
    title: "Exploration & Understanding",
    description:
      "Together we explore the patterns behind your experiences using evidence-based methods like CBT, EMDR, and mindfulness\u2014helping you understand both the emotional and physiological sides of what you are going through.",
  },
  {
    icon: Sparkles,
    step: "03",
    title: "Growth & Resilience",
    description:
      "Therapy becomes a space to develop lasting insight, stronger self-awareness, and sustainable tools for living and working\u2014so you feel more regulated not just in sessions, but in daily life.",
  },
]

export default function Approach() {
  return (
    <section className="py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            My Approach
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            A Grounded Path Toward Healing
          </h2>
          <p className="mt-4 text-lg leading-relaxed text-muted-foreground">
            Therapy works best when you feel respected, understood, and actively involved in the process. Here is how we work together.
          </p>
        </div>

        {/* Steps */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {steps.map((step) => (
            <div key={step.step} className="relative flex flex-col items-center rounded-2xl bg-secondary p-8 text-center">
              {/* Step number */}
              <span className="mb-4 font-serif text-4xl font-bold text-primary/20">{step.step}</span>
              <div className="mb-4 flex h-14 w-14 items-center justify-center rounded-full bg-primary/10">
                <step.icon className="h-6 w-6 text-primary" />
              </div>
              <h3 className="font-serif text-xl font-bold text-foreground">{step.title}</h3>
              <p className="mt-3 text-base leading-relaxed text-muted-foreground">{step.description}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
