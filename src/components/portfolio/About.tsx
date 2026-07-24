import { useReveal } from "@/hooks/use-reveal";
import { GitBranch, Layers, Code2 } from "lucide-react";

const stats = [
  { icon: GitBranch, label: "19+ Repositories" },
  { icon: Layers, label: "Full Stack Developer" },
  { icon: Code2, label: "Django & React Specialist" },
];

export function About() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="about" className="relative py-28">
      <div ref={ref} className="reveal mx-auto max-w-4xl px-6 text-center">
        <div className="text-xs uppercase tracking-[0.4em] text-[#00d4ff]/80">
          01 — About
        </div>
        <h2 className="mt-4 font-display text-4xl font-bold sm:text-5xl">
          Building at the intersection of{" "}
          <span className="glow-text">Python</span> and{" "}
          <span className="glow-text">the web</span>
        </h2>
        <p className="mx-auto mt-6 max-w-2xl text-white/65 leading-relaxed md:text-lg">
          Aspiring Python developer specializing in Django and React, currently
          deepening web development skills with Django. Led a school project
          building a full-stack Django e-commerce application. Enjoys gaming and
          exploring new tech in spare time.
        </p>
        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {stats.map(({ icon: Icon, label }) => (
            <div
              key={label}
              className="glass-card hover-glow flex items-center gap-2 px-4 py-2 text-sm text-white/85"
            >
              <Icon className="h-4 w-4 text-[#00d4ff]" />
              {label}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
