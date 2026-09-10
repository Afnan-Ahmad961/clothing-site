import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, MessageCircle, Phone, ArrowRight } from "lucide-react";

const WHATSAPP_NUMBER = "923187268147";
const WHATSAPP_DISPLAY = "+92 318 7268147";
const PHONE_NUMBER = "923338763721";
const PHONE_DISPLAY = "+92 333 8763721";
const EMAIL = "info@zaamgripindustries.com";

const exploreLinks = [
  { label: "Home", href: "/" },
  { label: "Our Process", href: "/process" },
  { label: "Manufacturing Capabilities", href: "/capabilities" },
  { label: "Accreditations", href: "/accreditations" },
];

const companyLinks = [
  { label: "About ZaamGrip", href: "/about" },
  { label: "Sustainability", href: "/sustainability" },
  { label: "Contact", href: "/contact" },
  { label: "Request a Quote", href: "/request-a-quote" },
];

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-border/60 bg-card">
      <div className="container mx-auto max-w-7xl px-6 py-16 md:px-12 md:py-20">
        <div className="grid grid-cols-1 gap-12 sm:grid-cols-2 lg:grid-cols-[1.6fr_1fr_1fr_1.4fr] lg:gap-10">
          {/* Brand */}
          <div className="flex flex-col items-start">
            <Link href="/" aria-label="ZaamGrip — home" className="inline-flex">
              <Image
                src="/images/logo-trimmed.png"
                alt="ZaamGrip"
                width={334}
                height={76}
                className="h-8 w-auto"
              />
            </Link>
            <p className="mt-5 max-w-xs text-sm leading-relaxed text-muted-foreground">
              A certified manufacturer of premium sports gloves, protective gear, and
              training accessories — OEM, ODM, and private-label production for brands
              and distributors worldwide.
            </p>
            <Link
              href="/request-a-quote"
              className="group mt-6 inline-flex items-center gap-2 text-sm font-bold text-primary transition-colors hover:text-primary/80"
            >
              Start Your Project
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
            </Link>
          </div>

          {/* Explore */}
          <nav aria-label="Explore" className="flex flex-col">
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-foreground">
              Explore
            </h3>
            <ul className="mt-5 space-y-3">
              {exploreLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Company */}
          <nav aria-label="Company" className="flex flex-col">
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-foreground">
              Company
            </h3>
            <ul className="mt-5 space-y-3">
              {companyLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-sm font-medium text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          {/* Contact */}
          <div className="flex flex-col">
            <h3 className="text-xs font-black uppercase tracking-[0.18em] text-foreground">
              Get in Touch
            </h3>
            <ul className="mt-5 space-y-4">
              <li className="flex gap-3">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <span className="text-sm leading-relaxed text-muted-foreground">
                  Defence Road, Opposite WAPDA Grid Station, Sialkot 51310, Pakistan
                </span>
              </li>
              <li className="flex gap-3">
                <MessageCircle className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`https://wa.me/${WHATSAPP_NUMBER}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {WHATSAPP_DISPLAY}
                </a>
              </li>
              <li className="flex gap-3">
                <Phone className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`tel:+${PHONE_NUMBER}`}
                  className="text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {PHONE_DISPLAY}
                </a>
              </li>
              <li className="flex gap-3">
                <Mail className="mt-0.5 h-4 w-4 shrink-0 text-primary" />
                <a
                  href={`mailto:${EMAIL}`}
                  className="break-all text-sm text-muted-foreground transition-colors hover:text-foreground"
                >
                  {EMAIL}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border/60">
        <div className="container mx-auto flex max-w-7xl flex-col items-center justify-between gap-3 px-6 py-6 text-center sm:flex-row sm:text-left md:px-12">
          <p className="text-xs text-muted-foreground">
            © {year} ZaamGrip Industries. All rights reserved.
          </p>
          <p className="text-xs text-muted-foreground">
            Precision in your hands — designed &amp; manufactured in Sialkot, Pakistan.
          </p>
        </div>
      </div>
    </footer>
  );
}
