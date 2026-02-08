import Image from "next/image"
import Link from "next/link"

export default function CTA() {
  return (
    <section id="contact" className="relative overflow-hidden py-20 md:py-28">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 -z-10">
        <Image
          src="/images/cta-background.jpg"
          alt=""
          fill
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-foreground/75" />
      </div>

      <div className="mx-auto max-w-3xl px-6 text-center">
        <h2 className="font-serif text-3xl font-bold text-background md:text-4xl lg:text-5xl text-balance">
          Ready to Take the First Step?
        </h2>
        <p className="mx-auto mt-6 max-w-xl text-lg leading-relaxed text-background/80">
          If you are looking for a therapist who combines practical tools with depth-oriented work and who understands the realities of living in a fast-paced world, I may be a good fit. Reach out for a free consultation today.
        </p>
        <div className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center">
          <Link
            href="mailto:hello@drmayareynolds.com"
            className="rounded-full bg-primary px-8 py-3.5 text-base font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Book a Free Consultation
          </Link>
          <Link
            href="tel:+13105550123"
            className="rounded-full border-2 border-background/40 bg-transparent px-8 py-3.5 text-base font-medium text-background transition-colors hover:border-background hover:bg-background/10"
          >
            Call (310) 555-0123
          </Link>
        </div>
      </div>
    </section>
  )
}
