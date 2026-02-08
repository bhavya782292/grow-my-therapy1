import Link from "next/link"

const navLinks = [
  { label: "Home", href: "#" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Our Office", href: "#office" },
  { label: "FAQ", href: "#faq" },
  { label: "Contact", href: "#contact" },
]

export default function Footer() {
  return (
    <footer className="border-t border-border bg-foreground py-16 text-background">
      <div className="mx-auto max-w-7xl px-6">
        <div className="flex flex-col items-center gap-10 md:flex-row md:items-start md:justify-between">
          {/* Brand */}
          <div className="text-center md:text-left">
            <Link href="/" className="font-serif text-2xl font-bold tracking-tight text-background">
              Dr. Maya Reynolds
            </Link>
            <p className="mt-2 text-sm text-background/60">
              Licensed Clinical Psychologist, PsyD
            </p>
            <p className="mt-1 text-sm text-background/60">
              Santa Monica, California
            </p>
          </div>

          {/* Links */}
          <nav className="flex flex-wrap justify-center gap-6 md:gap-8" aria-label="Footer navigation">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="text-sm text-background/60 transition-colors hover:text-background"
              >
                {link.label}
              </Link>
            ))}
          </nav>

          {/* Contact Info */}
          <div className="text-center md:text-right">
            <p className="text-sm text-background/60">123th Street 45 W</p>
            <p className="text-sm text-background/60">Santa Monica, CA 90401</p>
            <p className="mt-2 text-sm text-background/60">(310) 555-0123</p>
            <p className="text-sm text-background/60">hello@drmayareynolds.com</p>
          </div>
        </div>

        {/* Bottom */}
        <div className="mt-12 border-t border-background/10 pt-8 text-center">
          <p className="text-xs text-background/40">
            {`\u00A9 ${new Date().getFullYear()} Dr. Maya Reynolds, PsyD. All rights reserved. This is a fictional practice for demonstration purposes.`}
          </p>
        </div>
      </div>
    </footer>
  )
}
