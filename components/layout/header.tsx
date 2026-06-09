"use client";

import * as React from "react";
import Link from "next/link";
import { ChevronDown } from "lucide-react";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

export function Header() {
  const [isScrolled, setIsScrolled] = React.useState(false);

  React.useEffect(() => {
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

  return (
    <header
      className={cn(
        "fixed top-0 left-0 right-0 z-50 w-full transition-all duration-300 ease-in-out",
        isScrolled
          ? "py-3 bg-background/60 backdrop-blur-md border-b border-border/40 shadow-sm"
          : "py-6 bg-transparent border-b border-transparent"
      )}
    >
      <div className="container mx-auto px-4 md:px-8 flex items-center justify-between">
        {/* Logo Text */}
        <Link href="/" className="text-2xl font-black tracking-tighter text-foreground">
          Clothing
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

          <Link href="/sustainability" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Sustainability
          </Link>
          <Link href="/blog" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Blog
          </Link>
          <Link href="/contact" className="text-sm font-medium text-foreground/80 hover:text-foreground transition-colors">
            Contact
          </Link>
        </nav>

        {/* Theme Toggle & Actions */}
        <div className="flex items-center gap-4">
          <ThemeToggle />
        </div>
      </div>
    </header>
  );
}
