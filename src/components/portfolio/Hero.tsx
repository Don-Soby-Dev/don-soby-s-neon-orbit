import { ArrowDown, ArrowUpRight, Terminal, Sparkles, ShieldCheck } from "lucide-react";

export function Hero() {
  return (
    <section
      id="top"
      className="relative flex min-h-[92vh] flex-col justify-center overflow-hidden pt-28 pb-16"
    >
      {/* 3D Perspective Grid Background */}
      <div className="perspective-grid" aria-hidden="true">
        <div className="perspective-grid-plane" />
        <div className="perspective-grid-overlay" />
      </div>

      {/* Atmospheric Glow */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/3 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[700px] rounded-full opacity-25 blur-[120px]"
        style={{
          background:
            "radial-gradient(ellipse at center, rgba(0, 212, 255, 0.4) 0%, rgba(139, 92, 246, 0.25) 50%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto w-full max-w-6xl px-6 sm:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-[1.15fr_auto]">
          {/* Main Editorial Copy */}
          <div>
            {/* Eyebrow */}
            <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/[0.03] px-3.5 py-1.5 backdrop-blur-md">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00d4ff] animate-pulse" />
              <span className="font-mono text-xs tracking-wide text-white/80">
                Don Soby / Full Stack Python & Systems Developer · Kerala, India
              </span>
            </div>

            {/* Headline */}
            <h1 className="mt-8 font-display text-5xl font-bold tracking-tight text-white sm:text-7xl lg:text-[5.25rem] lg:leading-[1.02]">
              Architecture is{" "}
              <span className="glow-gradient-text block sm:inline">the interface.</span>
            </h1>

            {/* Subtitle */}
            <p className="mt-6 max-w-2xl text-base leading-relaxed text-white/70 sm:text-xl sm:leading-relaxed">
              I architect high-throughput Python backends, type-safe APIs, and reactive web
              experiences where complexity turns into effortless reliability.
            </p>

            {/* Action Buttons */}
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <a
                href="#work"
                className="group inline-flex items-center gap-2 rounded-full bg-white px-6 py-3.5 text-xs font-semibold text-[#030508] transition-all hover:bg-white/90 hover:scale-[1.02] shadow-[0_0_30px_rgba(255,255,255,0.2)]"
              >
                <span>View Selected Work</span>
                <ArrowUpRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </a>

              <a
                href="#workbench"
                className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/[0.04] px-6 py-3.5 text-xs font-semibold text-white/90 backdrop-blur-md transition-all hover:border-[#00d4ff]/60 hover:text-white hover:shadow-[0_0_25px_rgba(0,212,255,0.2)]"
              >
                <Terminal className="h-3.5 w-3.5 text-[#00d4ff]" />
                <span>Interactive Workbench</span>
              </a>
            </div>

            {/* Credibility & Recognition Pill Row */}
            <div className="mt-12 flex flex-wrap items-center gap-6 border-t border-white/8 pt-8">
              <div className="flex items-center gap-2 font-mono text-xs text-white/60">
                <ShieldCheck className="h-4 w-4 text-[#00d4ff]" />
                <span>Production Django & FastAPI</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-white/60">
                <Sparkles className="h-4 w-4 text-violet-400" />
                <span>Modern React 19 & Tailwind</span>
              </div>
              <div className="flex items-center gap-2 font-mono text-xs text-white/60">
                <span className="text-[#00d4ff] font-semibold">19+</span>
                <span>Open Repositories</span>
              </div>
            </div>
          </div>

          {/* Profile Visual */}
          <div className="relative mx-auto lg:mx-0">
            {/* Ambient Backing Aura */}
            <div
              className="absolute -inset-4 rounded-[2.5rem] opacity-40 blur-2xl transition-opacity group-hover:opacity-70"
              style={{
                background:
                  "linear-gradient(135deg, rgba(0,212,255,0.5) 0%, rgba(139,92,246,0.5) 100%)",
              }}
              aria-hidden="true"
            />

            {/* Outer Frame */}
            <div className="relative rounded-[2.25rem] border border-white/15 bg-white/[0.03] p-2 backdrop-blur-xl shadow-2xl">
              <img
                src="/don-soby.jpg"
                alt="Don Soby"
                className="h-72 w-72 rounded-[1.75rem] object-cover sm:h-80 sm:w-80 shadow-inner"
              />

              {/* Status Badge Over Image */}
              <div className="absolute bottom-5 left-5 right-5 flex items-center justify-between rounded-xl border border-white/15 bg-[#030508]/85 px-3 py-2 backdrop-blur-md">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-emerald-400 animate-pulse" />
                  <span className="font-mono text-[11px] text-white/90">Kerala, India</span>
                </div>
                <span className="font-mono text-[10px] text-white/50 uppercase tracking-wider">
                  Full-Stack Dev
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="mt-14 flex justify-center">
        <a
          href="#about"
          aria-label="Scroll to philosophy"
          className="group flex flex-col items-center gap-2 text-white/40 transition hover:text-white/80"
        >
          <span className="font-mono text-[10px] uppercase tracking-[0.2em]">
            Scroll to explore
          </span>
          <ArrowDown className="h-3.5 w-3.5 animate-bounce text-[#00d4ff]" />
        </a>
      </div>
    </section>
  );
}
