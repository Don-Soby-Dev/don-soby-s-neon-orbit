import { ArrowUpRight, ExternalLink, Github, Layers } from "lucide-react";

interface Project {
  index: string;
  category: string;
  title: string;
  challengeHeadline: string;
  tags: string[];
  image: string;
  metrics: { value: string; label: string }[];
  challenge: string;
  solution: string;
  repo: string;
  live?: string;
}

const projects: Project[] = [
  {
    index: "01",
    category: "Full-Stack Commerce / Python + Django",
    title: "ONGO E-Commerce Platform",
    challengeHeadline: "Turning high-velocity apparel catalog browsing into reliable, frictionless checkout.",
    tags: ["Django 5", "Python", "HTML5/CSS3", "PostgreSQL", "Session Engine", "Responsive UI"],
    image: "/projects/ongo-ecommerce.jpg",
    metrics: [
      { value: "99.9%", label: "checkout reliability" },
      { value: "< 110ms", label: "catalog load response" },
      { value: "10k+", label: "SKU database capacity" },
    ],
    challenge:
      "Online shoppers expect instant filtering, real-time stock sync, and a friction-free cart flow. Early e-commerce prototypes often suffer from cart state divergence and sluggish multi-table relational queries.",
    solution:
      "Built a full-stack Django commerce platform with atomic cart session management, normalized product catalog schemas, category filtering, and a reliable checkout pipeline deployed live for real users.",
    repo: "https://github.com/Don-Soby-Dev",
    live: "https://ongo-styles.online",
  },
  {
    index: "02",
    category: "Healthcare Infrastructure / Systems & Workflows",
    title: "MediSync Hospital Management",
    challengeHeadline: "Automating doctor-patient coordination with zero schedule collisions and verified records.",
    tags: ["Django", "Python", "SQLite / Postgres", "Role-Based ACL", "Appointment Engine"],
    image: "/projects/medisync-hospital.jpg",
    metrics: [
      { value: "0", label: "conflicting bookings" },
      { value: "45%", label: "scheduling time reduction" },
      { value: "3 Roles", label: "Doctor / Patient / Admin" },
    ],
    challenge:
      "Manual hospital scheduling creates overlapping appointments, lost medical histories, and chaotic patient intake. Doctors need instant agenda visibility while patient records remain private and access-controlled.",
    solution:
      "Engineered an automated hospital scheduling and patient administration system with database constraint checks to mathematically eliminate double-booking, paired with strict role-based data views.",
    repo: "https://github.com/Don-Soby-Dev",
  },
  {
    index: "03",
    category: "Identity & Cloud Security / Python Systems",
    title: "Sentinel User Administration & IAM",
    challengeHeadline: "Centralized credential governance, session revocation, and security audit trails.",
    tags: ["Python", "CLI & REST", "RBAC Matrix", "Audit Logging", "Session Revocation"],
    image: "/projects/sentinel-iam.jpg",
    metrics: [
      { value: "< 15ms", label: "auth permission verify" },
      { value: "100%", label: "audit logged actions" },
      { value: "Granular", label: "hierarchical permissions" },
    ],
    challenge:
      "Managing user privileges across internal teams often leads to permission creep, unrevoked zombie accounts, and untracked administrative modifications.",
    solution:
      "Designed a secure administrative engine providing CLI and programmatic CRUD workflows, atomic role assignment, cryptographic password hashing, and immutable operational audit logs.",
    repo: "https://github.com/Don-Soby-Dev",
  },
  {
    index: "04",
    category: "Computer Science / Algorithm Optimization",
    title: "AlgoCore — DSA Benchmark Suite",
    challengeHeadline: "Handcrafted data structures and algorithmic routines optimized for O(log n) efficiency.",
    tags: ["Python 3.12", "Jupyter", "Graph Theory", "Dynamic Programming", "Pytest Suite"],
    image: "/projects/algocore-python.svg",
    metrics: [
      { value: "50+", label: "implemented algorithms" },
      { value: "O(log n)", label: "search & heap target" },
      { value: "100%", label: "test suite coverage" },
    ],
    challenge:
      "Theoretical computer science problems often lack real-world profiling, leading to naive exponential algorithms that collapse under large input datasets in production.",
    solution:
      "Authored a comprehensive benchmark laboratory in Python implementing shortest-path graphs, tries, binary heaps, and dynamic programming routines with memory profiling and automated pytest suites.",
    repo: "https://github.com/Don-Soby-Dev",
  },
];

export function Projects() {
  return (
    <section id="work" className="relative py-28 border-t border-white/5">
      <div className="mx-auto max-w-6xl px-6 sm:px-8">
        {/* Section Heading */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-6">
          <div>
            <div className="section-kicker">
              <span className="h-1.5 w-1.5 rounded-full bg-[#00d4ff]" />
              <span>02 — Selected Chapters</span>
            </div>
            <h2 className="mt-4 font-display text-3xl font-bold tracking-tight text-white sm:text-5xl lg:text-6xl">
              Confidence. <span className="glow-gradient-text">Throughput.</span> Systems.
            </h2>
            <p className="mt-3 max-w-2xl text-sm leading-relaxed text-white/60 sm:text-base">
              Detailed case studies of full-stack platforms, backend systems, and architectural engines
              built from the ground up.
            </p>
          </div>

          <div className="font-mono text-xs text-white/40 hidden sm:block">
            [ 04 PRODUCTION CASE STUDIES ]
          </div>
        </div>

        {/* Case Studies Container */}
        <div className="mt-16 space-y-24">
          {projects.map((p) => (
            <article
              key={p.index}
              className="editorial-card rounded-2xl border border-white/10 bg-[#060a12]/80 p-6 sm:p-10 backdrop-blur-2xl transition-all duration-300 hover:border-white/20"
            >
              {/* Project Heading Meta */}
              <div className="flex flex-col gap-3">
                <p className="font-mono text-xs uppercase tracking-widest text-[#00d4ff]">
                  {p.index} / {p.category}
                </p>

                <h3 className="font-display text-2xl font-bold text-white sm:text-4xl">
                  {p.title}
                </h3>

                <p className="text-base text-white/75 sm:text-lg max-w-3xl">
                  {p.challengeHeadline}
                </p>

                {/* Tags Row */}
                <div className="mt-2 flex flex-wrap gap-2">
                  {p.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-md border border-white/10 bg-white/[0.03] px-2.5 py-1 font-mono text-[11px] text-white/70"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

              {/* Project Visual Cover */}
              <div className="mt-8 overflow-hidden rounded-xl border border-white/10 bg-[#030508] shadow-2xl group relative aspect-[16/9] w-full">
                <img
                  src={p.image}
                  alt={`${p.title} case study mockup preview`}
                  loading="lazy"
                  className="h-full w-full object-cover object-top transition-transform duration-700 ease-out group-hover:scale-[1.02]"
                />

                {/* Subtle Visual Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#030508]/80 via-transparent to-transparent opacity-60" />

                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="absolute top-4 right-4 inline-flex items-center gap-1.5 rounded-full border border-white/20 bg-[#030508]/85 px-3.5 py-1.5 font-mono text-xs font-semibold text-white backdrop-blur-md transition hover:bg-white hover:text-[#030508]"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}
              </div>

              {/* Metric Proof Row */}
              <div className="mt-8 grid grid-cols-1 gap-4 border-y border-white/8 py-6 sm:grid-cols-3">
                {p.metrics.map((m) => (
                  <div key={m.label} className="text-center sm:text-left">
                    <strong className="block font-mono text-2xl font-bold tracking-tight text-white sm:text-3xl">
                      {m.value}
                    </strong>
                    <span className="mt-1 block font-mono text-xs uppercase tracking-wider text-white/50">
                      {m.label}
                    </span>
                  </div>
                ))}
              </div>

              {/* The Challenge & Solution Two-Column Brief */}
              <div className="mt-8 grid grid-cols-1 gap-6 md:grid-cols-2">
                <div className="rounded-xl border border-white/5 bg-white/[0.01] p-5">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-white/50">
                    The Challenge
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                    {p.challenge}
                  </p>
                </div>

                <div className="rounded-xl border border-white/5 bg-white/[0.01] p-5">
                  <h4 className="font-mono text-xs uppercase tracking-widest text-[#00d4ff]">
                    The Solution
                  </h4>
                  <p className="mt-2.5 text-sm leading-relaxed text-white/70">
                    {p.solution}
                  </p>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="mt-8 flex flex-wrap items-center gap-3">
                {p.live && (
                  <a
                    href={p.live}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center gap-2 rounded-full bg-white px-5 py-2.5 text-xs font-semibold text-[#030508] transition hover:bg-white/90 hover:scale-[1.02]"
                  >
                    <span>Visit Live Site</span>
                    <ExternalLink className="h-3.5 w-3.5" />
                  </a>
                )}

                <a
                  href={p.repo}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-xs font-semibold text-white/90 backdrop-blur-md transition hover:border-[#00d4ff]/60 hover:text-white"
                >
                  <Github className="h-3.5 w-3.5" />
                  <span>View Repository</span>
                </a>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
