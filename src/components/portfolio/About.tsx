import { Database, Eye, Gauge, GitCommit, RefreshCw, Sparkles } from "lucide-react";

const signals = [
  "Type Safety",
  "Zero Deadlocks",
  "Cache Invalidation",
  "Atomic Transactions",
  "Sub-50ms Latency",
  "Clean Domain Models",
  "Schema Migrations",
  "Idempotent APIs",
  "Resilient Fallbacks",
  "Low Memory Footprint",
  "Type Safety",
  "Zero Deadlocks",
  "Cache Invalidation",
  "Atomic Transactions",
  "Sub-50ms Latency",
  "Clean Domain Models",
  "Schema Migrations",
  "Idempotent APIs",
  "Resilient Fallbacks",
  "Low Memory Footprint",
];

export function About() {
  return (
    <section id="about" className="relative py-28 border-t border-white/5">
      {/* Background Depth Ambience */}
      <div
        className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[600px] w-[800px] rounded-full opacity-15 blur-[140px]"
        style={{
          background: "radial-gradient(circle, #8b5cf6 0%, #00d4ff 40%, transparent 80%)",
        }}
        aria-hidden="true"
      />

      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Intro */}
        <div className="max-w-3xl">
          <div className="section-kicker">
            <span className="h-1.5 w-1.5 rounded-full bg-[#8b5cf6]" />
            <span>01 — The Throughline</span>
          </div>

          <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
            The interface usually <span className="glow-gradient-text">arrives late.</span>
          </h2>

          <p className="mt-5 text-base leading-relaxed text-white/70 sm:text-lg">
            First comes clarity. Relational data modeling. Deterministic logic. The architecture
            users never see—that is the work that ensures applications endure under load.
          </p>
        </div>

        {/* Signal Marquee Ticker */}
        <div className="mt-14 -mx-6 sm:-mx-8 border-y border-white/8 bg-white/[0.01] py-4">
          <div className="marquee-container">
            <div className="marquee-content font-mono text-xs uppercase tracking-widest text-white/50">
              {signals.map((sig, idx) => (
                <div key={idx} className="flex items-center gap-6">
                  <span className="text-[#00d4ff]">✦</span>
                  <span className="hover:text-white transition-colors cursor-default">{sig}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Bento Grid: Engineering Approach */}
        <div className="mt-14 grid grid-cols-1 gap-5 md:grid-cols-3 lg:grid-cols-4">
          {/* Card 1: Wide */}
          <div className="editorial-card editorial-card-hover p-7 md:col-span-2 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00d4ff]/10 text-[#00d4ff]">
                <Database className="h-5 w-5" />
              </div>
              <span className="font-mono text-[11px] text-white/40 uppercase">01 / Foundation</span>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-2xl font-bold text-white">Schema first.</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Before writing API endpoints or designing client views, enforce strict data
                integrity, relational normalization, and optimal indexing inside PostgreSQL. An
                uncompromised schema prevents months of technical debt.
              </p>
            </div>
          </div>

          {/* Card 2: Mid */}
          <div className="editorial-card editorial-card-hover p-7 md:col-span-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-violet-500/10 text-violet-400">
                <Eye className="h-5 w-5" />
              </div>
              <span className="font-mono text-[11px] text-white/40 uppercase">
                02 / Observability
              </span>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-xl font-bold text-white">Make it visible.</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Structured telemetry, latency profiling, and meaningful error boundaries. Never let
                a failure be silent.
              </p>
            </div>
          </div>

          {/* Card 3: Small */}
          <div className="editorial-card editorial-card-hover p-7 md:col-span-1 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-cyan-500/10 text-cyan-400">
                <Gauge className="h-5 w-5" />
              </div>
              <span className="font-mono text-[11px] text-white/40 uppercase">03 / Speed</span>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-xl font-bold text-white">Sub-50ms TTFB.</h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Aggressive cache-aside with Redis, eager ORM evaluation, and asset edge caching.
              </p>
            </div>
          </div>

          {/* Card 4: Long */}
          <div className="editorial-card editorial-card-hover p-7 md:col-span-2 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-emerald-500/10 text-emerald-400">
                <RefreshCw className="h-5 w-5" />
              </div>
              <span className="font-mono text-[11px] text-white/40 uppercase">
                04 / Reliability
              </span>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-2xl font-bold text-white">
                Deterministic & idempotent.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                Every mutation endpoint handles retries, payment webhooks, and unexpected
                disconnects safely using transaction savepoints and atomic idempotency keys.
              </p>
            </div>
          </div>

          {/* Card 5: High-Impact */}
          <div className="editorial-card editorial-card-hover p-7 md:col-span-2 flex flex-col justify-between">
            <div className="flex items-center justify-between">
              <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#00d4ff]/10 text-[#00d4ff]">
                <Sparkles className="h-5 w-5" />
              </div>
              <span className="font-mono text-[11px] text-white/40 uppercase">05 / The Loop</span>
            </div>

            <div className="mt-8">
              <h3 className="font-display text-2xl font-bold text-white">
                Ship the complete loop.
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                A system is complete when the reactive frontend and Python backend form a seamless
                union. Optimistic UI updates, clean loading states, and instant client feedback.
              </p>
            </div>
          </div>
        </div>

        {/* Editorial Scrub Statement */}
        <div className="mt-16 rounded-2xl border border-white/10 bg-white/[0.02] p-8 sm:p-12 text-center backdrop-blur-md">
          <p className="font-display text-2xl font-medium tracking-tight text-white/90 sm:text-3xl md:text-4xl max-w-3xl mx-auto leading-relaxed">
            “Performance is not a metric on a dashboard. It is the moment an interface{" "}
            <span className="text-[#00d4ff] font-semibold">stops making the user wait</span>.”
          </p>
          <div className="mt-6 font-mono text-xs text-white/40 uppercase tracking-widest">
            Don Soby — Systems & Web Architecture
          </div>
        </div>
      </div>
    </section>
  );
}
