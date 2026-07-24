import { useReveal } from "@/hooks/use-reveal";
import {
  Github,
  Linkedin,
  Twitter,
  Instagram,
  Mail,
  Codepen,
  MessageSquareCode,
} from "lucide-react";

const socials = [
  { href: "https://github.com/Don-Soby-Dev", label: "GitHub", Icon: Github },
  { href: "https://www.linkedin.com/in/donsoby/", label: "LinkedIn", Icon: Linkedin },
  { href: "https://x.com/don_soby", label: "X (Twitter)", Icon: Twitter },
  {
    href: "https://www.instagram.com/___don__soby______/",
    label: "Instagram",
    Icon: Instagram,
  },
  {
    href: "https://stackoverflow.com/users/30880457/don-soby",
    label: "Stack Overflow",
    Icon: MessageSquareCode,
  },
  { href: "https://codepen.io/Don-Soby", label: "CodePen", Icon: Codepen },
  { href: "mailto:donsoby1234@gmail.com", label: "Email", Icon: Mail },
];

export function Contact() {
  const ref = useReveal<HTMLDivElement>();
  return (
    <section id="contact" className="relative py-28">
      <div
        className="absolute inset-0 opacity-40"
        style={{
          background:
            "radial-gradient(ellipse 50% 40% at 50% 60%, rgba(0,212,255,0.18), transparent 70%)",
        }}
        aria-hidden
      />
      <div ref={ref} className="reveal relative mx-auto max-w-3xl px-6 text-center">
        <div className="text-xs uppercase tracking-[0.4em] text-[#8b5cf6]/90">
          04 — Contact
        </div>
        <h2 className="mt-4 font-display text-4xl font-bold sm:text-6xl">
          Let's <span className="glow-text">Connect</span>
        </h2>
        <p className="mt-5 text-white/65 md:text-lg">
          Open to internships, collaborations, and interesting problems to solve.
          Reach out through any of these channels.
        </p>

        <div className="mt-10 flex flex-wrap justify-center gap-3">
          {socials.map(({ href, label, Icon }) => (
            <a
              key={label}
              href={href}
              target={href.startsWith("mailto") ? undefined : "_blank"}
              rel="noreferrer"
              aria-label={label}
              className="glass-card hover-glow flex h-12 w-12 items-center justify-center text-white/80 hover:text-white"
            >
              <Icon className="h-5 w-5" />
            </a>
          ))}
        </div>

        <div className="mt-10">
          <a
            href="mailto:donsoby1234@gmail.com"
            className="inline-flex items-center gap-2 rounded-full px-8 py-4 text-sm font-semibold text-[#0a0e17] transition hover:scale-[1.03]"
            style={{ background: "var(--gradient-accent)", boxShadow: "var(--glow-violet)" }}
          >
            <Mail className="h-4 w-4" />
            Say Hello
          </a>
        </div>
      </div>
    </section>
  );
}
