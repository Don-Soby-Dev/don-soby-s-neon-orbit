import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/8 bg-[#020305] py-12">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-6 px-6 sm:flex-row sm:px-8">
        {/* Left: Copyright */}
        <div className="flex flex-col sm:flex-row items-center gap-3 text-center sm:text-left">
          <span className="font-display font-bold text-white text-sm">DonSoby.</span>
          <span className="hidden sm:inline text-white/20">/</span>
          <p className="font-mono text-xs text-white/50">
            © 2026 Don Soby. Crafted with precision in Kerala, India.
          </p>
        </div>

        {/* Center: System Status Indicator */}
        <div className="hidden md:flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.02] px-3.5 py-1 font-mono text-[11px] text-white/60">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
          <span>All systems operational · High throughput</span>
        </div>

        {/* Right: Back to Top */}
        <a
          href="#top"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 font-mono text-xs text-white/70 transition hover:border-[#00d4ff]/50 hover:text-white"
          aria-label="Back to top"
        >
          <span>Back to top</span>
          <ArrowUp className="h-3.5 w-3.5 text-[#00d4ff]" />
        </a>
      </div>
    </footer>
  );
}
