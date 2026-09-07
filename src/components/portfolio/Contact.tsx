import { useState } from "react";
import {
  Mail,
  Copy,
  Check,
  ArrowUpRight,
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Code2,
  MessageSquareCode,
} from "lucide-react";
import { toast } from "sonner";

const socials = [
  {
    name: "GitHub",
    handle: "Don-Soby-Dev",
    href: "https://github.com/Don-Soby-Dev",
    icon: Github,
  },
  {
    name: "LinkedIn",
    handle: "donsoby",
    href: "https://www.linkedin.com/in/donsoby/",
    icon: Linkedin,
  },
  {
    name: "X (Twitter)",
    handle: "@don_soby",
    href: "https://x.com/don_soby",
    icon: Twitter,
  },
  {
    name: "Stack Overflow",
    handle: "don-soby",
    href: "https://stackoverflow.com/users/30880457/don-soby",
    icon: MessageSquareCode,
  },
  {
    name: "CodePen",
    handle: "Don-Soby",
    href: "https://codepen.io/Don-Soby",
    icon: Code2,
  },
  {
    name: "Instagram",
    handle: "@don_soby",
    href: "https://www.instagram.com/___don__soby______/",
    icon: Instagram,
  },
];

export function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "donsoby1234@gmail.com";

  const handleCopyEmail = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    toast.success("Email copied to clipboard!", {
      description: email,
    });
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <section id="contact" className="relative py-32 border-t border-white/5 overflow-hidden">
      {/* 3D Perspective Grid Background */}
      <div className="perspective-grid opacity-60" aria-hidden="true">
        <div className="perspective-grid-plane" />
        <div className="perspective-grid-overlay" />
      </div>

      <div className="relative z-10 mx-auto max-w-5xl px-6 sm:px-8 text-center">
        {/* Section Kicker */}
        <div className="section-kicker mx-auto justify-center">
          <span className="h-1.5 w-1.5 rounded-full bg-[#00d4ff]" />
          <span>04 — Contact & Collaboration</span>
        </div>

        {/* Big Editorial Headline */}
        <h2 className="mt-6 font-display text-4xl font-bold tracking-tight text-white sm:text-6xl lg:text-7xl max-w-3xl mx-auto leading-[1.05]">
          Building something that needs{" "}
          <span className="glow-gradient-text">rock-solid architecture?</span>
        </h2>

        <p className="mt-6 max-w-2xl mx-auto text-base leading-relaxed text-white/70 sm:text-lg">
          Available for full-time engineering roles, core backend opportunities, and select
          technical contracts. Let's discuss systems, scalability, and code.
        </p>

        {/* Email Direct Action Card */}
        <div className="mt-12 mx-auto max-w-xl rounded-2xl border border-white/10 bg-[#060a12]/90 p-4 sm:p-6 backdrop-blur-2xl shadow-[0_20px_60px_rgba(0,0,0,0.8)]">
          <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="text-left">
              <div className="font-mono text-[11px] uppercase tracking-wider text-white/40">
                Direct Inquiries
              </div>
              <a
                href={`mailto:${email}`}
                className="mt-1 font-mono text-base font-semibold text-white transition hover:text-[#00d4ff]"
              >
                {email}
              </a>
            </div>

            <div className="flex items-center gap-2 w-full sm:w-auto">
              <button
                onClick={handleCopyEmail}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl border border-white/15 bg-white/5 px-4 py-2.5 font-mono text-xs font-semibold text-white/90 transition hover:bg-white/10"
              >
                {copied ? (
                  <Check className="h-3.5 w-3.5 text-emerald-400" />
                ) : (
                  <Copy className="h-3.5 w-3.5" />
                )}
                <span>{copied ? "Copied" : "Copy"}</span>
              </button>

              <a
                href={`mailto:${email}`}
                className="flex-1 sm:flex-initial inline-flex items-center justify-center gap-2 rounded-xl bg-white px-5 py-2.5 font-mono text-xs font-bold text-[#030508] transition hover:bg-white/90 hover:scale-[1.02]"
              >
                <Mail className="h-3.5 w-3.5" />
                <span>Say Hello</span>
              </a>
            </div>
          </div>
        </div>

        {/* Social Network Badges */}
        <div className="mt-14">
          <div className="font-mono text-xs uppercase tracking-widest text-white/40 mb-6">
            Developer Networks & Profiles
          </div>

          <div className="flex flex-wrap justify-center gap-3">
            {socials.map((item) => {
              const Icon = item.icon;
              return (
                <a
                  key={item.name}
                  href={item.href}
                  target="_blank"
                  rel="noreferrer"
                  className="editorial-card group flex items-center gap-3 px-4 py-2.5 transition hover:border-[#00d4ff]/40 hover:bg-white/[0.04]"
                >
                  <Icon className="h-4 w-4 text-white/60 group-hover:text-[#00d4ff] transition-colors" />
                  <div className="text-left font-mono text-xs">
                    <span className="text-white/90 group-hover:text-white font-medium">
                      {item.name}
                    </span>
                    <span className="text-white/40 ml-1.5 text-[11px] hidden sm:inline">
                      ({item.handle})
                    </span>
                  </div>
                  <ArrowUpRight className="h-3 w-3 text-white/30 group-hover:text-[#00d4ff] transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                </a>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
