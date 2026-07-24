import { ArrowUp } from "lucide-react";

export function Footer() {
  return (
    <footer className="relative border-t border-white/5 py-10">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-6 sm:flex-row">
        <p className="text-sm text-white/50">
          © 2026 Don Soby. Built with passion.
        </p>
        <a
          href="#hero"
          className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-xs text-white/70 transition hover:border-[#00d4ff]/50 hover:text-white hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
        >
          <ArrowUp className="h-3.5 w-3.5" />
          Back to top
        </a>
      </div>
    </footer>
  );
}
