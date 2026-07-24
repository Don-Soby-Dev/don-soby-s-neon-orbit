# Don Soby — Futuristic Portfolio (Single Page)

Build a single-page, dark futuristic portfolio at `/` per your spec. No backend, purely frontend.

## Design tokens (src/styles.css)

- Background `#0a0e17`, surface glass `rgba(255,255,255,0.04)` with `backdrop-blur`
- Accent gradient: electric blue `#00d4ff` → violet `#8b5cf6`
- Fonts via `<link>` in `__root.tsx`: Space Grotesk (headings) + Inter (body)
- Semantic tokens added: `--bg`, `--surface`, `--accent-blue`, `--accent-violet`, `--gradient-accent`, `--glow`, `--border-glow`
- Utility classes: `.glass-card`, `.glow-text`, `.grid-bg`, `.hover-glow`

## Structure

Replace `src/routes/index.tsx` placeholder with a single-page composition, plus per-section components in `src/components/portfolio/`:

- `Hero.tsx` — animated particles/orb (pure CSS + Tailwind, no libs), gradient headline, two CTAs (anchor-scroll to `#projects`, `#contact`)
- `About.tsx` — bio + 3 stat badges
- `Skills.tsx` — 4 category groups, glowing pill chips with lucide icons
- `Projects.tsx` — 4 glassmorphism cards with hover lift/glow, GitHub link buttons
- `Contact.tsx` — social icon buttons + "Say Hello" mailto
- `Footer.tsx` — copyright + back-to-top

Sticky top nav with smooth-scroll anchor links (Hero / About / Skills / Projects / Contact).

## Animations

- Custom `IntersectionObserver` hook `useReveal()` in `src/hooks/use-reveal.ts` toggles a `.revealed` class → fade-in-up on scroll
- Hover glow via Tailwind `transition` + shadow using accent gradient
- Background: CSS radial gradients + subtle animated grid (pure CSS keyframes)
- `html { scroll-behavior: smooth }` in styles.css

## SEO / Head

Update `src/routes/index.tsx` `head()` with:

- title: "Don Soby — Full Stack Python Developer"
- description: Kerala-based Django + React developer tagline
- og:title, og:description, og:type=website, twitter:card=summary_large_image
Keep `__root.tsx` metadata untouched (per rule, index gets its own head).

## Content (verbatim from spec)

- Hero name/tagline/intro + CTAs
- About bio + badges: "19+ Repositories", "Full Stack Developer", "Django & React Specialist"
- Skills grouped: Languages / Frameworks / Databases / Cloud & Tools (exact lists)
- Projects: ONGO E-Commerce, Django Hospital Management, User Administration, DSA in Python — each with GitHub link (link to profile since specific repo URLs weren't given; open to receiving them)
- Contact: all 7 links exactly as provided
- Footer: "© 2026 Don Soby. Built with passion."

## Files touched

- Create: `src/components/portfolio/{Hero,About,Skills,Projects,Contact,Footer,Nav}.tsx`, `src/hooks/use-reveal.ts`
- Edit: `src/routes/index.tsx` (compose page + head), `src/routes/__root.tsx` (add Google Fonts link tags), `src/styles.css` (tokens, utilities, keyframes, body font)

## Out of scope

No Lovable Cloud, no images generated (pure CSS visuals keep it lightweight per your perf note), no separate routes.

## Question

GitHub project links — should each project card link to your GitHub profile (`Don-Soby-Dev`), or do you have specific repo URLs for the 4 projects? I'll default to profile links if not provided.  
  
**Changes I want in the Plan**  
Answer to your question: just add only Ongo-ecommerce as a project card. Make sure to add the live link along with the repo link: **[ongo-styles.online](http://ongo-styles.online)**  
Just add space for  one photo in the Hero section. I will add the photo after generation; you just give me the instructions to add the photo.