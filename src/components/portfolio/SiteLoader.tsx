import { useEffect, useState } from "react";

export function SiteLoader() {
  const [progress, setProgress] = useState(0);
  const [phase, setPhase] = useState<"counting" | "revealing" | "complete">("counting");

  useEffect(() => {
    // Check if user already saw loader in this session
    const hasLoaded = sessionStorage.getItem("ds-portfolio-loaded");
    if (hasLoaded === "true") {
      setPhase("complete");
      return;
    }

    let current = 0;
    const interval = setInterval(() => {
      // Smooth accelerating progress
      const increment = Math.max(1, Math.floor((100 - current) / 7) + 1);
      current = Math.min(100, current + increment);
      setProgress(current);

      if (current >= 100) {
        clearInterval(interval);
        setTimeout(() => {
          setPhase("revealing");
          setTimeout(() => {
            setPhase("complete");
            sessionStorage.setItem("ds-portfolio-loaded", "true");
          }, 700);
        }, 250);
      }
    }, 35);

    return () => clearInterval(interval);
  }, []);

  if (phase === "complete") return null;

  return (
    <div
      role="status"
      aria-label="Loading portfolio"
      className={`fixed inset-0 z-[100] flex flex-col justify-between bg-[#030508] text-white transition-transform duration-700 ease-[cubic-bezier(0.85,0,0.15,1)] ${
        phase === "revealing" ? "-translate-y-full pointer-events-none" : "translate-y-0"
      }`}
    >
      {/* Top Header Bar */}
      <div className="flex items-center justify-between px-4 sm:px-10 py-6 border-b border-white/5 min-w-0 w-full">
        <div className="font-mono text-[11px] sm:text-xs uppercase tracking-[0.15em] sm:tracking-[0.25em] text-white/50 truncate mr-2">
          [ Don Soby · Systems & Web Architecture ]
        </div>
        <div className="flex items-center gap-2 font-mono text-xs text-[#00d4ff] shrink-0">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00d4ff] animate-ping" />
          <span className="hidden xs:inline">INITIALIZING</span>
        </div>
      </div>

      {/* Center Kinetic Typographic Banners */}
      <div className="my-auto space-y-4 overflow-hidden py-6 select-none">
        <div className="marquee-container">
          <div className="marquee-content font-display text-4xl font-extrabold uppercase tracking-tight text-white/[0.08] sm:text-6xl md:text-8xl">
            <span>DonSoby.</span>
            <span>FullStack.</span>
            <span>Python.</span>
            <span>Django.</span>
            <span>FastAPI.</span>
            <span>React.</span>
            <span>DonSoby.</span>
            <span>FullStack.</span>
            <span>Python.</span>
            <span>Django.</span>
            <span>FastAPI.</span>
            <span>React.</span>
          </div>
        </div>

        <div className="marquee-container">
          <div className="marquee-content-reverse font-display text-4xl font-extrabold uppercase tracking-tight text-[#00d4ff]/[0.12] sm:text-6xl md:text-8xl">
            <span>Systems.</span>
            <span>Architecture.</span>
            <span>HighThroughput.</span>
            <span>ZeroDowntime.</span>
            <span>Systems.</span>
            <span>Architecture.</span>
            <span>HighThroughput.</span>
            <span>ZeroDowntime.</span>
          </div>
        </div>
      </div>

      {/* Bottom Counter & Status */}
      <div className="flex items-end justify-between px-4 py-8 border-t border-white/5 sm:px-10 min-w-0 w-full">
        <div className="min-w-0 pr-4">
          <p className="font-mono text-[11px] sm:text-xs text-white/40 uppercase tracking-wider">
            Loading Interface Modules
          </p>
          <p className="mt-1 font-mono text-xs text-white/70 truncate">
            {progress < 40
              ? "Mounting runtime context..."
              : progress < 85
                ? "Assembling architectural blueprints..."
                : "System ready."}
          </p>
        </div>

        <div className="font-mono text-5xl font-bold tracking-tighter text-white sm:text-8xl md:text-9xl shrink-0">
          <span className="text-[#00d4ff]">{progress}</span>
          <span className="text-white/30 text-2xl sm:text-5xl">%</span>
        </div>
      </div>
    </div>
  );
}
