import { useEffect, useState } from "react";
import { ArrowUpRight, Menu, X } from "lucide-react";

const links = [
  { href: "#about", label: "Philosophy" },
  { href: "#workbench", label: "Workbench" },
  { href: "#work", label: "Selected Work" },
  { href: "#skills", label: "Capabilities" },
  { href: "#contact", label: "Contact" },
];

export function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? "border-b border-white/8 bg-[#030508]/85 backdrop-blur-xl py-3.5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]"
          : "bg-transparent py-5"
      }`}
    >
      <nav className="mx-auto flex max-w-6xl items-center justify-between px-6 sm:px-8">
        {/* Brand */}
        <a
          href="#top"
          className="group flex items-center gap-2 font-display text-lg font-bold tracking-tight text-white transition hover:opacity-80"
          aria-label="Don Soby portfolio home"
        >
          <span>DonSoby.</span>
          <span className="h-1.5 w-1.5 rounded-full bg-[#00d4ff] group-hover:scale-125 transition-transform" />
        </a>

        {/* Desktop Links */}
        <div className="hidden md:flex items-center gap-1 rounded-full border border-white/8 bg-white/[0.02] px-4 py-1.5 backdrop-blur-md">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="px-3 py-1 font-mono text-xs text-white/70 transition-colors hover:text-white hover:text-[#00d4ff]"
            >
              {link.label}
            </a>
          ))}
        </div>

        {/* Status Pill & Action */}
        <div className="hidden sm:flex items-center gap-4">
          <div className="flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3 py-1 font-mono text-[11px] text-white/70">
            <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
            <span>Available for opportunities</span>
          </div>

          <a
            href="#contact"
            className="inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-white px-4 py-1.5 text-xs font-semibold text-[#030508] transition hover:bg-white/90 hover:scale-[1.02]"
          >
            <span>Get in Touch</span>
            <ArrowUpRight className="h-3.5 w-3.5" />
          </a>
        </div>

        {/* Mobile Hamburger Toggle */}
        <button
          className="md:hidden flex h-9 w-9 items-center justify-center rounded-lg border border-white/10 bg-white/5 text-white/80 transition hover:bg-white/10"
          onClick={() => setOpen((prev) => !prev)}
          aria-label="Toggle navigation menu"
        >
          {open ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
        </button>
      </nav>

      {/* Mobile Drawer */}
      {open && (
        <div className="md:hidden border-b border-white/10 bg-[#030508]/95 px-6 py-6 backdrop-blur-2xl">
          <div className="flex flex-col gap-4">
            <div className="inline-flex items-center gap-2 font-mono text-xs text-emerald-400 mb-2">
              <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 animate-pulse" />
              <span>Available for opportunities · Kerala, IN</span>
            </div>

            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="font-display text-lg font-medium text-white/80 transition hover:text-[#00d4ff]"
              >
                {link.label}
              </a>
            ))}

            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="mt-4 inline-flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 text-center text-xs font-semibold text-[#030508]"
            >
              <span>Get in Touch</span>
              <ArrowUpRight className="h-4 w-4" />
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
