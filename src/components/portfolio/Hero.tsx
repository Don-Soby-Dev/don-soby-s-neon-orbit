import { ArrowRight, Mail } from "lucide-react";

export function Hero() {
  return (
    <section
      id="hero"
      className="relative flex min-h-screen items-center justify-center overflow-hidden pt-24 pb-16"
    >
      {/* Background layers */}
      <div className="absolute inset-0 grid-bg opacity-40" aria-hidden />
      <div
        className="absolute inset-0"
        style={{
          background:
            "radial-gradient(ellipse 80% 60% at 50% 40%, rgba(0,212,255,0.15), transparent 60%), radial-gradient(ellipse 60% 50% at 80% 80%, rgba(139,92,246,0.18), transparent 60%)",
        }}
        aria-hidden
      />
      {/* Floating orbs */}
      <div
        className="absolute left-[10%] top-[20%] h-72 w-72 rounded-full opacity-40 blur-3xl animate-float-orb"
        style={{ background: "radial-gradient(circle, #00d4ff 0%, transparent 70%)" }}
        aria-hidden
      />
      <div
        className="absolute right-[8%] bottom-[15%] h-96 w-96 rounded-full opacity-30 blur-3xl animate-float-orb"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, transparent 70%)",
          animationDelay: "-4s",
        }}
        aria-hidden
      />
      {/* Particles */}
      {Array.from({ length: 20 }).map((_, i) => (
        <span
          key={i}
          className="absolute rounded-full bg-white/40 animate-pulse-glow"
          style={{
            width: `${Math.random() * 3 + 1}px`,
            height: `${Math.random() * 3 + 1}px`,
            top: `${Math.random() * 100}%`,
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 3}s`,
          }}
          aria-hidden
        />
      ))}

      <div className="relative z-10 mx-auto grid max-w-6xl grid-cols-1 items-center gap-12 px-6 md:grid-cols-[1fr_auto]">
        <div className="text-center md:text-left">
          <div className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs text-white/70 backdrop-blur-md">
            <span className="h-1.5 w-1.5 rounded-full bg-[#00d4ff] animate-pulse-glow" />
            Available for opportunities · Kerala, India
          </div>
          <h1 className="mt-6 font-display text-5xl font-bold leading-[1.05] sm:text-6xl md:text-7xl">
            <span className="glow-text">Don Soby</span>
          </h1>
          <p className="mt-4 text-lg font-medium text-white/85 sm:text-xl">
            Full Stack Python Developer{" "}
            <span className="text-white/40">|</span> Django + React{" "}
            <span className="text-white/40">|</span> Tech Explorer
          </p>
          <p className="mt-4 max-w-xl text-white/60 md:text-lg">
            Passionate about coding, learning new technologies, and building cool
            projects from Kerala, India.
          </p>
          <div className="mt-8 flex flex-wrap items-center justify-center gap-4 md:justify-start">
            <a
              href="#projects"
              className="group relative inline-flex items-center gap-2 rounded-full px-6 py-3 text-sm font-semibold text-[#0a0e17] transition hover:scale-[1.03]"
              style={{ background: "var(--gradient-accent)", boxShadow: "var(--glow-blue)" }}
            >
              View Projects
              <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-0.5" />
            </a>
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3 text-sm font-semibold text-white backdrop-blur transition hover:border-[#8b5cf6]/60 hover:shadow-[0_0_30px_rgba(139,92,246,0.35)]"
            >
              <Mail className="h-4 w-4" />
              Get In Touch
            </a>
          </div>
        </div>

        {/* Photo slot — replace the placeholder div with an <img> */}
        <div className="relative mx-auto md:mx-0">
          <div
            className="absolute -inset-4 rounded-[2rem] opacity-70 blur-2xl"
            style={{ background: "var(--gradient-accent)" }}
            aria-hidden
          />
          <div className="glass-card relative h-72 w-72 overflow-hidden rounded-[2rem] sm:h-80 sm:w-80">
            {/* PHOTO PLACEHOLDER — replace this block with:
                <img src="/don-soby.jpg" alt="Don Soby" className="h-full w-full object-cover" />
                Put your file in /public/don-soby.jpg (or import from src/assets) */}
            <div className="flex h-full w-full items-center justify-center bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.2),transparent_60%),radial-gradient(circle_at_70%_80%,rgba(139,92,246,0.25),transparent_60%)]">
              <div className="text-center px-6">
                <div className="font-display text-6xl glow-text">DS</div>
                <div className="mt-3 text-xs uppercase tracking-[0.3em] text-white/50">
                  Add photo here
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll cue */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 text-white/40">
        <div className="h-10 w-6 rounded-full border border-white/20 flex justify-center pt-2">
          <span className="h-2 w-0.5 rounded-full bg-white/60 animate-pulse-glow" />
        </div>
      </div>
    </section>
  );
}
