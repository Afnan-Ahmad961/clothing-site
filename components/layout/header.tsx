"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown, Menu, X } from "lucide-react";
import { useTheme } from "next-themes";
import { AnimatedThemeToggler } from "@/components/ui/animated-theme-toggler";
import { cn } from "@/lib/utils";
import { AnimatePresence, motion } from "framer-motion";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = React.useState(false);
  const [isMobileAboutOpen, setIsMobileAboutOpen] = React.useState(false);
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);

  React.useEffect(() => {
    setMounted(true);

    const handleScroll = () => {
      // Shrink header after 100px scroll
      if (window.scrollY > 100) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Prevent body scroll when mobile menu is open
  React.useEffect(() => {
    if (isMobileMenuOpen) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "unset";
    }
    return () => {
      document.body.style.overflow = "unset";
    };
  }, [isMobileMenuOpen]);

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled
          ? "py-3 bg-background/60 backdrop-blur-md border-b border-border/40 shadow-sm"
          : "py-6 bg-background/40 backdrop-blur-md border-b border-border/40",
        isMobileMenuOpen && "border-transparent bg-transparent shadow-none backdrop-blur-none"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between relative z-50">
        {/* Logo Text */}
        <Link
          href="/"
          className="text-2xl font-black tracking-tighter text-primary"
          onClick={() => setIsMobileMenuOpen(false)}
        >
          ZaamGrip
        </Link>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <Link href="/" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Home
          </Link>

          {/* About Dropdown */}
          <div className="relative group">
            <button className="flex items-center gap-1 text-sm font-medium text-foreground/80 hover:text-foreground transition-colors py-2">
              About
              <ChevronDown className="w-4 h-4 transition-transform group-hover:rotate-180" />
            </button>

            <div className="absolute top-full left-0 mt-2 w-64 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-200 translate-y-2 group-hover:translate-y-0">
              <div className="p-2 rounded-2xl bg-background/80 backdrop-blur-xl border border-border/50 shadow-xl flex flex-col gap-1">
                <Link href="/process" className="block px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-xl transition-colors">
                  Our Process
                </Link>
                <Link href="/capabilities" className="block px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-xl transition-colors">
                  Manufacturing Capabilities
                </Link>
                <Link href="/accreditations" className="block px-4 py-3 text-sm font-medium text-foreground/70 hover:text-foreground hover:bg-foreground/5 rounded-xl transition-colors">
                  Accreditations & Certifications
                </Link>
              </div>
            </div>
          </div>

          <Link href="/sustainability" className="text-sm font-medium text-foreground/80 hover:text-foreground text-sustainability transition-colors">
            Sustainability
          </Link>
          <Link href="/blog" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        {/* Desktop Theme Toggle & Actions */}
        <div className="hidden md:flex items-center gap-4">
          {mounted ? (
            <AnimatedThemeToggler
              theme={resolvedTheme as "light" | "dark"}
              onThemeChange={(t) => setTheme(t)}
              className="relative flex cursor-pointer h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-lg transition-colors hover:bg-white/20 [&_svg]:h-[1.2rem] [&_svg]:w-[1.2rem] text-void-text"
            />
          ) : (
            <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10" />
          )}
        </div>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden p-2 -mr-2 text-foreground focus:outline-none transition-transform active:scale-95"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          aria-label="Toggle menu"
        >
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Navigation Overlay */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ x: "100%" }}
            animate={{ x: 0 }}
            exit={{ x: "100%" }}
            transition={{ type: "spring", damping: 25, stiffness: 200 }}
            className="fixed inset-0 z-40 bg-background/95 backdrop-blur-3xl md:hidden flex flex-col pt-24 px-6 h-[100dvh]"
          >
            <div className="flex-1 overflow-y-auto pb-8">
              <nav className="flex flex-col gap-6 text-2xl font-medium mt-4">
                <Link href="/" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground/80 hover:text-foreground transition-colors">
                  Home
                </Link>

                <div className="flex flex-col">
                  <button
                    onClick={() => setIsMobileAboutOpen(!isMobileAboutOpen)}
                    className="flex items-center gap-1 text-foreground/80 hover:text-foreground transition-colors w-full text-left"
                  >
                    <span>About</span>
                    <ChevronDown className={cn("w-5 h-5 transition-transform duration-300", isMobileAboutOpen && "rotate-180")} />
                  </button>
                  <AnimatePresence initial={false}>
                    {isMobileAboutOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: "auto", opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeInOut" }}
                        className="overflow-hidden"
                      >
                        <div className="flex flex-col gap-4 pl-4 border-l border-border/50 mt-4 mb-2">
                          <Link href="/process" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-foreground/60 hover:text-foreground transition-colors">
                            Our Process
                          </Link>
                          <Link href="/capabilities" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-foreground/60 hover:text-foreground transition-colors">
                            Manufacturing Capabilities
                          </Link>
                          <Link href="/accreditations" onClick={() => setIsMobileMenuOpen(false)} className="text-lg text-foreground/60 hover:text-foreground transition-colors">
                            Accreditations & Certifications
                          </Link>
                        </div>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>

                <Link href="/sustainability" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground/80 hover:text-foreground text-sustainability transition-colors">
                  Sustainability
                </Link>
                <Link href="/blog" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground/80 hover:text-foreground transition-colors">
                  Blog
                </Link>
                <Link href="/contact" onClick={() => setIsMobileMenuOpen(false)} className="text-foreground/80 hover:text-foreground transition-colors">
                  Contact
                </Link>
              </nav>
            </div>

            <div className="mt-auto py-6 border-t border-border/20 flex items-center justify-between">
              <span className="text-base font-medium text-foreground/80"></span>
              {mounted ? (
                <AnimatedThemeToggler
                  theme={resolvedTheme as "light" | "dark"}
                  onThemeChange={(t) => setTheme(t)}
                  className="relative flex cursor-pointer h-12 w-12 items-center justify-center rounded-full bg-white/10 backdrop-blur-2xl border border-white/20 shadow-lg transition-colors hover:bg-white/20 [&_svg]:h-[1.2rem] [&_svg]:w-[1.2rem] text-void-text"
                />
              ) : (
                <div className="w-12 h-12 rounded-full border border-white/20 bg-white/10" />
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </header>
  );
}
