import { Terminal, Database, Layout, Cloud, Shield, Zap } from "lucide-react";

interface CapabilityGroup {
  icon: typeof Terminal;
  number: string;
  title: string;
  subtitle: string;
  description: string;
  skills: string[];
  highlight: string;
}

const capabilities: CapabilityGroup[] = [
  {
    icon: Terminal,
    number: "01",
    title: "Backend & Systems",
    subtitle: "High-concurrency APIs & domain services",
    description:
      "Architecting scalable Python services with strict data validation, async task delegation, and resilient failure boundaries.",
    skills: [
      "Python 3.12",
      "Django 5",
      "Django REST",
      "FastAPI",
      "Celery",
      "RESTful APIs",
      "JWT Auth",
    ],
    highlight: "Sub-50ms P95 API Latency",
  },
  {
    icon: Layout,
    number: "02",
    title: "Modern Frontend",
    subtitle: "Reactive client-side architecture",
    description:
      "Crafting high-speed, type-safe web interfaces with server-side rendering, optimistic caching, and accessible component primitives.",
    skills: [
      "React 19",
      "TypeScript",
      "TanStack Router",
      "TanStack Query",
      "Tailwind CSS v4",
      "shadcn/ui",
      "Vite",
    ],
    highlight: "Zero-Layout-Shift SSR",
  },
  {
    icon: Database,
    number: "03",
    title: "Databases & Caching",
    subtitle: "Data integrity & sub-millisecond retrieval",
    description:
      "Designing relational schemas with composite indexing, connection pooling, and atomic Redis cache-aside patterns.",
    skills: ["PostgreSQL", "Redis 7", "MySQL", "MongoDB", "SQLite", "Firebase", "Query Profiling"],
    highlight: "94%+ Cache Hit Ratios",
  },
  {
    icon: Cloud,
    number: "04",
    title: "Cloud & DevOps",
    subtitle: "Containerization & continuous delivery",
    description:
      "Automating reproducible deployment pipelines with lightweight multi-stage Docker builds, Linux administration, and CI/CD.",
    skills: ["Docker", "AWS", "Google Cloud", "Vercel", "Git/GitHub", "Linux / Bash", "Postman"],
    highlight: "Multi-Stage Slim Containers",
  },
];

export function Skills() {
  return (
    <section id="skills" className="relative py-28 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Intro */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="section-kicker">
              <span className="h-1.5 w-1.5 rounded-full bg-violet-400" />
              <span>03 — Capabilities & Tech Stack</span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Engineered across the <span className="glow-gradient-text">entire stack.</span>
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              From database query planners and async event loops to responsive, type-safe client
              interfaces.
            </p>
          </div>

          <div className="font-mono text-xs text-white/40 hidden sm:block">
            [ 4 CORE ARCHITECTURAL PILLARS ]
          </div>
        </div>

        {/* Capabilities Grid */}
        <div className="mt-14 grid grid-cols-1 gap-6 md:grid-cols-2">
          {capabilities.map((c) => {
            const Icon = c.icon;
            return (
              <div
                key={c.number}
                className="editorial-card editorial-card-hover flex flex-col justify-between p-7 sm:p-8"
              >
                <div>
                  <div className="flex items-center justify-between border-b border-white/8 pb-4">
                    <div className="flex items-center gap-3">
                      <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/[0.04] text-[#00d4ff]">
                        <Icon className="h-5 w-5" />
                      </div>
                      <div>
                        <h3 className="font-display text-lg font-bold text-white sm:text-xl">
                          {c.title}
                        </h3>
                        <p className="font-mono text-[11px] text-white/50">{c.subtitle}</p>
                      </div>
                    </div>
                    <span className="font-mono text-xs text-white/30">{c.number}</span>
                  </div>

                  <p className="mt-5 text-sm leading-relaxed text-white/70">{c.description}</p>

                  {/* Skills Pills */}
                  <div className="mt-6 flex flex-wrap gap-2">
                    {c.skills.map((skill) => (
                      <span
                        key={skill}
                        className="rounded-lg border border-white/8 bg-white/[0.02] px-3 py-1.5 font-mono text-xs text-white/80 transition hover:border-[#00d4ff]/40 hover:bg-[#00d4ff]/5 hover:text-white"
                      >
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Highlight Banner */}
                <div className="mt-8 flex items-center gap-2 rounded-xl border border-white/5 bg-white/[0.01] px-4 py-2.5 font-mono text-xs text-white/60">
                  <Zap className="h-3.5 w-3.5 text-[#00d4ff]" />
                  <span>Target Benchmark:</span>
                  <span className="text-[#00d4ff] font-semibold">{c.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
