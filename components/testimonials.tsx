import { Star } from "lucide-react"

const testimonials = [
  {
    quote:
      "Dr. Reynolds helped me understand why I was constantly on edge. For the first time in years, I feel like I can take a full breath. Her approach is warm, structured, and deeply effective.",
    name: "Sarah M.",
    role: "Marketing Executive",
  },
  {
    quote:
      "I came in feeling burned out and disconnected from myself. Through our work together, I rediscovered what actually matters to me and learned to set boundaries without guilt.",
    name: "James T.",
    role: "Entrepreneur",
  },
  {
    quote:
      "The EMDR therapy was transformative. I had been carrying trauma for over a decade, and Dr. Reynolds helped me process it at a pace that felt safe. I finally feel free.",
    name: "Priya K.",
    role: "Creative Director",
  },
]

export default function Testimonials() {
  return (
    <section className="bg-secondary py-20 md:py-28">
      <div className="mx-auto max-w-7xl px-6">
        {/* Section Header */}
        <div className="mx-auto max-w-2xl text-center">
          <p className="mb-3 text-sm font-medium uppercase tracking-widest text-primary">
            Client Experiences
          </p>
          <h2 className="font-serif text-3xl font-bold text-foreground md:text-4xl text-balance">
            What Clients Say About Working Together
          </h2>
        </div>

        {/* Testimonial Cards */}
        <div className="mt-16 grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col rounded-2xl bg-card p-8 shadow-sm border border-border"
            >
              {/* Stars */}
              <div className="mb-4 flex gap-1">
                {Array.from({ length: 5 }).map((_, i) => (
                  <Star key={i} className="h-4 w-4 fill-accent text-accent" />
                ))}
              </div>
              <blockquote className="flex-1 text-base leading-relaxed text-muted-foreground italic">
                {`"${testimonial.quote}"`}
              </blockquote>
              <div className="mt-6 border-t border-border pt-4">
                <p className="font-semibold text-foreground">{testimonial.name}</p>
                <p className="text-sm text-muted-foreground">{testimonial.role}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
