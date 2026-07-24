import { useReveal } from "@/hooks/use-reveal";
import { ExternalLink, Github } from "lucide-react";

type Project = {
  title: string;
  description: string;
  tech: string[];
  repo: string;
  live?: string;
};

const projects: Project[] = [
  {
    title: "ONGO E-Commerce Project",
    description:
      "First full-stack e-commerce project built with HTML and Django. Product catalog, cart, and checkout flow.",
    tech: ["Django", "Python", "HTML5", "CSS3"],
    repo: "https://github.com/Don-Soby-Dev",
    live: "https://ongo-styles.online",
  },
  {
    title: "Django Hospital Management",
    description:
      "A hospital management system built with Python and Django — patients, doctors, appointments.",
    tech: ["Django", "Python", "SQLite"],
    repo: "https://github.com/Don-Soby-Dev",
  },
  {
    title: "User Administration",
    description:
      "A user administration and management utility built with Python for CRUD operations on user records.",
    tech: ["Python", "CLI"],
    repo: "https://github.com/Don-Soby-Dev",
  },
  {
    title: "DSA in Python",
    description:
      "A collection of practice notebooks with hand-written Data Structures & Algorithms implementations.",
    tech: ["Python", "Jupyter", "Algorithms"],
    repo: "https://github.com/Don-Soby-Dev",
  },
];

export function Projects() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="projects" className="relative py-28">
      <div ref={ref} className="reveal mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-[#00d4ff]/80">
            03 — Projects
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            Selected <span className="glow-text">work</span>
          </h2>
        </div>

        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {projects.map((p) => (
            <article
              key={p.title}
              className="glass-card hover-glow group relative flex flex-col p-6 sm:p-7"
            >
              <div
                className="pointer-events-none absolute inset-x-6 top-0 h-px opacity-0 transition-opacity group-hover:opacity-100"
                style={{ background: "var(--gradient-accent)" }}
                aria-hidden
              />
              <h3 className="font-display text-xl font-semibold text-white">
                {p.title}
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-white/65">
                {p.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {p.tech.map((t) => (
                  <span
                    key={t}
                    className="rounded-md border border-white/10 bg-white/[0.04] px-2 py-1 text-[11px] font-medium tracking-wide text-white/70"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <div className="mt-6 flex flex-wrap items-center gap-3 pt-4 border-t border-white/5">
                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-2 text-xs font-medium text-white/90 transition hover:border-[#00d4ff]/60 hover:text-white hover:shadow-[0_0_20px_rgba(0,212,255,0.3)]"
                >
                  <Github className="h-3.5 w-3.5" />
                  View on GitHub
                </a>
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full px-4 py-2 text-xs font-semibold text-[#0a0e17] transition hover:scale-[1.03]"
                    style={{
                      background: "var(--gradient-accent)",
                      boxShadow: "0 0 24px rgba(0,212,255,0.35)",
                    }}
                  >
                    <ExternalLink className="h-3.5 w-3.5" />
                    Live Site
                  </a>
                )}
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
