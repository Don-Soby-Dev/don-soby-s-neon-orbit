import { createFileRoute } from "@tanstack/react-router";
import { SiteLoader } from "@/components/portfolio/SiteLoader";
import { Nav } from "@/components/portfolio/Nav";
import { Hero } from "@/components/portfolio/Hero";
import { Workbench } from "@/components/portfolio/Workbench";
import { About } from "@/components/portfolio/About";
import { Skills } from "@/components/portfolio/Skills";
import { Projects } from "@/components/portfolio/Projects";
import { Contact } from "@/components/portfolio/Contact";
import { Footer } from "@/components/portfolio/Footer";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "Don Soby — Full Stack Python Developer & Systems Architect" },
      {
        name: "description",
        content:
          "Portfolio of Don Soby — Full Stack Python developer from Kerala, India. High-throughput Django, FastAPI, React 19, and distributed web architecture.",
      },
      {
        property: "og:title",
        content: "Don Soby — Full Stack Python Developer & Systems Architect",
      },
      {
        property: "og:description",
        content:
          "Django + React developer from Kerala building fast, scalable full-stack applications.",
      },
      { property: "og:type", content: "website" },
      { property: "og:url", content: "/" },
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content: "Don Soby — Full Stack Python Developer & Systems Architect",
      },
      {
        name: "twitter:description",
        content:
          "Django + React developer from Kerala building fast, scalable full-stack applications.",
      },
    ],
    links: [{ rel: "canonical", href: "/" }],
  }),
});

function Index() {
  return (
    <div className="relative min-h-screen bg-[#030508] text-white">
      <SiteLoader />
      <Nav />
      <Hero />
      <Workbench />
      <About />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}
