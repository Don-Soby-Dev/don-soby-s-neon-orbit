import { createFileRoute } from "@tanstack/react-router";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Don Soby — Full Stack Python Developer" },
      {
        name: "description",
        content:
          "Portfolio of Don Soby — Full Stack Python developer from Kerala, India. Django, React, and modern web tooling.",
      },
      { property: "og:title", content: "Don Soby — Full Stack Python Developer" },
      {
        property: "og:description",
        content:
          "Django + React developer from Kerala building fast, modern full-stack applications.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:title", content: "Don Soby — Full Stack Python Developer" },
      {
        name: "twitter:description",
        content:
          "Django + React developer from Kerala building fast, modern full-stack applications.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <main className="relative min-h-screen bg-[#0a0e17] text-white">
      <Nav />
      <Hero />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </main>
  );
}
