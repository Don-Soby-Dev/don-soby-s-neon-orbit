import { useReveal } from "@/hooks/use-reveal";
import { Code, Boxes, Database, Cloud } from "lucide-react";

const groups = [
  {
    title: "Languages",
    icon: Code,
    items: ["Python", "JavaScript", "TypeScript", "Java", "C", "C++", "HTML5", "CSS3"],
  },
  {
    title: "Frameworks",
    icon: Boxes,
    items: [
      "Django",
      "Django REST Framework",
      "FastAPI",
      "Flask",
      "React",
      "React Query",
      "TailwindCSS",
      "Bootstrap",
      "Vite",
    ],
  },
  {
    title: "Databases",
    icon: Database,
    items: ["PostgreSQL", "MySQL", "MongoDB", "SQLite", "Firebase"],
  },
  {
    title: "Cloud & Tools",
    icon: Cloud,
    items: ["AWS", "Google Cloud", "Vercel", "Docker", "Git/GitHub", "Postman", "Figma"],
  },
];

export function Skills() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="skills" className="relative py-28">
      <div
        className="absolute inset-0 opacity-20"
        style={{
          background:
            "radial-gradient(ellipse 60% 40% at 50% 50%, rgba(139,92,246,0.2), transparent 70%)",
        }}
        aria-hidden
      />
      <div ref={ref} className="reveal relative mx-auto max-w-6xl px-6">
        <div className="text-center">
          <div className="text-xs uppercase tracking-[0.4em] text-[#8b5cf6]/90">
            02 — Skills
          </div>
          <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
            The <span className="glow-text">stack</span> I ship with
          </h2>
        </div>
        <div className="mt-14 grid gap-6 md:grid-cols-2">
          {groups.map(({ title, icon: Icon, items }) => (
            <div key={title} className="glass-card hover-glow p-6 sm:p-7">
              <div className="flex items-center gap-3">
                <div
                  className="flex h-10 w-10 items-center justify-center rounded-lg"
                  style={{ background: "var(--gradient-accent)" }}
                >
                  <Icon className="h-5 w-5 text-[#0a0e17]" />
                </div>
                <h3 className="font-display text-xl font-semibold">{title}</h3>
              </div>
              <div className="mt-5 flex flex-wrap gap-2">
                {items.map((item) => (
                  <span
                    key={item}
                    className="rounded-full border border-white/10 bg-white/[0.03] px-3 py-1.5 text-xs text-white/80 transition hover:border-[#00d4ff]/50 hover:bg-white/[0.06] hover:text-white hover:shadow-[0_0_16px_rgba(0,212,255,0.25)]"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
