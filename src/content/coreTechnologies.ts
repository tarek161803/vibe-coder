import { CORE_BRAND_ICONS } from "./brandIcons/core.generated";
import { brandLogo } from "./logos";
import type { TechInfo } from "./types";

/** Logo from Simple Icons — run `npm run icons` after adding an entry here. */
function brand(id: string): string {
  const icon = CORE_BRAND_ICONS[id];
  if (!icon) throw new Error(`No brand icon for "${id}" — run \`npm run icons\``);
  return brandLogo(icon);
}

/**
 * Well-known technologies that are always in the obstacle pool, from the
 * very first run (the larger catalog loads in the background).
 */
export const CORE_TECHNOLOGIES: TechInfo[] = [
  {
    id: "react",
    name: "React",
    kind: "technology",
    category: "UI Library",
    color: "#61dafb",
    logo: brand("react"),
    description:
      "A JavaScript library for building user interfaces out of small, reusable pieces called components. You describe what the UI should look like for a given state, and React updates the page efficiently when that state changes.",
    highlights: [
      "Interactive web apps and dashboards",
      "Reusable component libraries & design systems",
      "Mobile apps via React Native",
    ],
    funFact:
      "React was created at Facebook by Jordan Walke and open-sourced in 2013. Mixing HTML-like JSX into JavaScript was met with heavy skepticism at launch — now it's everywhere.",
    url: "https://react.dev",
  },
  {
    id: "nextjs",
    name: "Next.js",
    kind: "technology",
    category: "React Framework",
    color: "#ffffff",
    logo: brand("nextjs"),
    description:
      "A framework built on top of React that adds routing, server rendering, static generation and performance optimizations out of the box — so you can focus on building pages instead of plumbing.",
    highlights: [
      "Production websites with great SEO",
      "Full-stack apps with Server Components",
      "Blogs, e-commerce stores and dashboards",
    ],
    funFact:
      "You're playing a game built with Next.js right now! It's made by Vercel and was first released in 2016.",
    url: "https://nextjs.org",
  },
  {
    id: "javascript",
    name: "JavaScript",
    kind: "technology",
    category: "Programming Language",
    color: "#f7df1e",
    logo: brand("javascript"),
    description:
      "The programming language of the web. Every major browser runs it, which makes it the thing that turns static pages into interactive experiences — from button clicks to entire games like this one.",
    highlights: [
      "Making websites interactive",
      "Servers and tooling via Node.js",
      "Browser games, desktop & mobile apps",
    ],
    funFact:
      "Brendan Eich built the first version of JavaScript in about 10 days in 1995. Despite the name, it has almost nothing to do with Java — the name was mostly a marketing move.",
    url: "https://developer.mozilla.org/en-US/docs/Web/JavaScript",
  },
  {
    id: "typescript",
    name: "TypeScript",
    kind: "technology",
    category: "Programming Language",
    color: "#3178c6",
    logo: brand("typescript"),
    description:
      "JavaScript with types. TypeScript lets you describe the shape of your data so your editor can catch mistakes before your code ever runs. It compiles down to plain JavaScript.",
    highlights: [
      "Catching bugs before they ship",
      "Smarter autocomplete and refactoring",
      "Keeping large codebases maintainable",
    ],
    funFact:
      "TypeScript was designed at Microsoft by Anders Hejlsberg — the same person behind C# and Turbo Pascal. It was released in 2012.",
    url: "https://www.typescriptlang.org",
  },
  {
    id: "nodejs",
    name: "Node.js",
    kind: "technology",
    category: "JavaScript Runtime",
    color: "#5fa04e",
    logo: brand("nodejs"),
    description:
      "Lets JavaScript run outside the browser — on servers, laptops and build machines. It's built on Chrome's V8 engine and is great at juggling many connections at once without blocking.",
    highlights: [
      "Web servers and REST/GraphQL APIs",
      "Command-line tools and build scripts",
      "Real-time apps like chats and live dashboards",
    ],
    funFact:
      "Ryan Dahl introduced Node.js in 2009. Years later he gave a famous talk about his regrets with Node — and then created Deno to fix them.",
    url: "https://nodejs.org",
  },
  {
    id: "mongodb",
    name: "MongoDB",
    kind: "technology",
    category: "NoSQL Database",
    color: "#00ed64",
    logo: brand("mongodb"),
    description:
      "A document database that stores data as flexible JSON-like documents instead of rows and tables, so each record can have its own shape.",
    highlights: [
      "Apps whose data model changes often",
      "User profiles, catalogs and content",
      "Rapid prototyping",
    ],
    funFact:
      "The name comes from \"humongous\" — it was designed from day one to handle huge amounts of data.",
    url: "https://www.mongodb.com/docs/",
  },
  {
    id: "docker",
    name: "Docker",
    kind: "technology",
    category: "Containers & DevOps",
    color: "#1d63ed",
    logo: brand("docker"),
    description:
      "Packages an app together with everything it needs — code, runtime, libraries and settings — into a container that runs the same way on any machine.",
    highlights: [
      "Ending \"works on my machine\" problems",
      "Deploying apps to the cloud",
      "Reproducible CI pipelines and dev setups",
    ],
    funFact:
      "Docker started as an internal project at a company called dotCloud and was open-sourced in 2013. The whale in its logo is named Moby Dock.",
    url: "https://docs.docker.com",
  },
  {
    id: "git",
    name: "Git",
    kind: "technology",
    category: "Version Control",
    color: "#f05032",
    logo: brand("git"),
    description:
      "Tracks every change to your code over time, so you can jump back to any version, build features on separate branches, and collaborate without overwriting each other's work.",
    highlights: [
      "Saving the full history of a project",
      "Branching, merging and code review",
      "Collaborating through GitHub or GitLab",
    ],
    funFact:
      "Linus Torvalds wrote Git in 2005 in roughly two weeks to manage Linux kernel development. He joked that he names all his projects after himself — \"git\" is British slang for an unpleasant person.",
    url: "https://git-scm.com",
  },
  {
    id: "python",
    name: "Python",
    kind: "technology",
    category: "Programming Language",
    color: "#ffd43b",
    logo: brand("python"),
    description:
      "A beginner-friendly language famous for clean, readable code. It powers everything from tiny automation scripts to web backends to training AI models.",
    highlights: [
      "Data science, AI and machine learning",
      "Automation and scripting",
      "Web backends with Django or FastAPI",
    ],
    funFact:
      "Python isn't named after the snake — Guido van Rossum named it after the comedy group Monty Python's Flying Circus.",
    url: "https://www.python.org",
  },
  {
    id: "vue",
    name: "Vue.js",
    kind: "technology",
    category: "Frontend Framework",
    color: "#41b883",
    logo: brand("vue"),
    description:
      "A progressive JavaScript framework for building user interfaces. You can sprinkle it into a single page or scale it up to a full app, and its templates feel close to plain HTML.",
    highlights: [
      "Interactive single-page apps",
      "Progressively enhancing existing sites",
      "Full-stack apps with Nuxt",
    ],
    funFact:
      "Evan You created Vue after working with AngularJS at Google — he wanted to keep the parts he liked in something much lighter. \"Vue\" is French for \"view\".",
    url: "https://vuejs.org",
  },
  {
    id: "tailwind",
    name: "Tailwind CSS",
    kind: "technology",
    category: "CSS Framework",
    color: "#38bdf8",
    logo: brand("tailwind"),
    description:
      "A utility-first CSS framework. Instead of writing custom stylesheets, you style elements with small single-purpose classes like flex, p-4 and text-center right in your markup.",
    highlights: [
      "Building UIs fast without leaving your HTML",
      "Consistent spacing, colors and typography",
      "Responsive layouts with md: and lg: prefixes",
    ],
    funFact:
      "Tailwind only ships the classes you actually use — it scans your files and generates just those styles, so the final CSS is usually tiny. This game's UI is styled with it.",
    url: "https://tailwindcss.com",
  },

  {
    id: "html",
    name: "HTML",
    kind: "technology",
    category: "Markup Language",
    color: "#e34f26",
    logo: brand("html"),
    description:
      "HyperText Markup Language is the skeleton of every web page. It uses tags like <h1>, <p> and <button> to tell the browser what each piece of content is.",
    highlights: [
      "Structuring the content of every web page",
      "Accessible, semantic markup for screen readers",
      "Forms, links, images and media",
    ],
    funFact:
      "Tim Berners-Lee created HTML around 1991 at CERN. The very first website is still online at info.cern.ch.",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
  },
  {
    id: "css",
    name: "CSS",
    kind: "technology",
    category: "Styling Language",
    color: "#2965f1",
    logo: brand("css"),
    description:
      "Cascading Style Sheets control how HTML looks — colors, fonts, spacing, layout and animations. The \"cascading\" part decides which rule wins when several apply.",
    highlights: [
      "Page layouts with Flexbox and Grid",
      "Responsive designs for every screen size",
      "Transitions and animations",
    ],
    funFact:
      "CSS was first proposed by Håkon Wium Lie in 1994. \"How do I center a div?\" became a decades-long developer meme — today it's a couple of lines with Flexbox or Grid.",
    url: "https://developer.mozilla.org/en-US/docs/Web/CSS",
  },
  {
    id: "rust",
    name: "Rust",
    kind: "technology",
    category: "Systems Language",
    color: "#f74c00",
    logo: brand("rust"),
    description:
      "A fast systems language that guarantees memory safety without a garbage collector. Its strict compiler catches whole classes of bugs before your program ever runs.",
    highlights: [
      "Performance-critical tools and services",
      "WebAssembly modules for the browser",
      "Command-line tools and OS components",
    ],
    funFact:
      "Rust has topped Stack Overflow's \"most admired language\" survey for years in a row. Its fans call themselves Rustaceans, and the unofficial mascot is a crab named Ferris.",
    url: "https://www.rust-lang.org",
  },
  {
    id: "go",
    name: "Go",
    kind: "technology",
    category: "Programming Language",
    color: "#00add8",
    logo: brand("go"),
    description:
      "A simple, fast, compiled language created at Google for building reliable servers and tools. It has built-in support for running many tasks at once with lightweight goroutines.",
    highlights: [
      "Cloud services and web APIs",
      "DevOps and infrastructure tooling",
      "Fast, single-binary command-line tools",
    ],
    funFact:
      "Docker and Kubernetes are both written in Go. Its mascot, the Gopher, was designed by illustrator Renée French.",
    url: "https://go.dev",
  },
  {
    id: "angular",
    name: "Angular",
    kind: "technology",
    category: "Frontend Framework",
    color: "#dd0031",
    logo: brand("angular"),
    description:
      "A full-featured framework from Google for building large web apps. Routing, forms, HTTP and testing tools come included, and it's written in TypeScript.",
    highlights: [
      "Large enterprise applications",
      "Big teams that want strong conventions",
      "Complex forms and dashboards",
    ],
    funFact:
      "Modern Angular is a complete rewrite of AngularJS. The \"JS\" was dropped in 2016 to mark the new version — and developers have been mixing the two names up ever since.",
    url: "https://angular.dev",
  },
  {
    id: "svelte",
    name: "Svelte",
    kind: "technology",
    category: "Frontend Framework",
    color: "#ff3e00",
    logo: brand("svelte"),
    description:
      "A UI framework that does its work at build time: it compiles your components into small, efficient JavaScript instead of shipping a big framework runtime to the browser.",
    highlights: [
      "Fast, lightweight web apps",
      "Interactive graphics and data visualizations",
      "Full-stack apps with SvelteKit",
    ],
    funFact:
      "Rich Harris created Svelte while building interactive graphics for newsrooms like The Guardian and The New York Times.",
    url: "https://svelte.dev",
  },
  {
    id: "postgresql",
    name: "PostgreSQL",
    kind: "technology",
    category: "Relational Database",
    color: "#336791",
    logo: brand("postgresql"),
    description:
      "A powerful open-source SQL database known for reliability and rich features. Data lives in tables of rows and columns, and you query it with SQL.",
    highlights: [
      "Backends for web and mobile apps",
      "Analytics and reporting",
      "Maps and location data with PostGIS",
    ],
    funFact:
      "Its elephant mascot is named Slonik — from the Russian word for \"little elephant\".",
    url: "https://www.postgresql.org",
  },
  {
    id: "redis",
    name: "Redis",
    kind: "technology",
    category: "In-Memory Data Store",
    color: "#dc382d",
    logo: brand("redis"),
    description:
      "Keeps data in memory instead of on disk, so reads and writes are extremely fast. It's often placed in front of a slower database as a cache.",
    highlights: [
      "Caching expensive queries and pages",
      "Sessions, rate limiting and leaderboards",
      "Queues and real-time pub/sub messaging",
    ],
    funFact:
      "Redis stands for REmote DIctionary Server. Salvatore Sanfilippo built it in 2009 to speed up his real-time web analytics startup.",
    url: "https://redis.io/docs/",
  },
  {
    id: "kubernetes",
    name: "Kubernetes",
    kind: "technology",
    category: "Container Orchestration",
    color: "#326ce5",
    logo: brand("kubernetes"),
    description:
      "Runs and manages containers across many machines. You describe what you want — say, \"keep 3 copies of my app running\" — and Kubernetes makes it happen and keeps it that way.",
    highlights: [
      "Scaling apps up and down automatically",
      "Restarting crashed containers (self-healing)",
      "Zero-downtime rolling deployments",
    ],
    funFact:
      "Kubernetes is Greek for \"helmsman\", hence the ship's wheel logo. It's often shortened to K8s: a K, 8 letters, then an s.",
    url: "https://kubernetes.io",
  },
  {
    id: "graphql",
    name: "GraphQL",
    kind: "technology",
    category: "API Query Language",
    color: "#e10098",
    logo: brand("graphql"),
    description:
      "A query language for APIs that lets the client ask for exactly the data it needs — nothing more, nothing less — often in a single request.",
    highlights: [
      "Flexible APIs for web and mobile apps",
      "Combining many data sources behind one endpoint",
      "Strongly typed, self-documenting schemas",
    ],
    funFact:
      "Facebook built GraphQL in 2012 to power its mobile apps and open-sourced it in 2015.",
    url: "https://graphql.org",
  },
  {
    id: "vite",
    name: "Vite",
    kind: "technology",
    category: "Build Tool",
    color: "#bd34fe",
    logo: brand("vite"),
    description:
      "A very fast build tool and dev server. During development it serves your code as native ES modules, so the server starts almost instantly and edits show up immediately.",
    highlights: [
      "Starting React, Vue or Svelte projects",
      "Instant hot module replacement while coding",
      "Optimized production bundles",
    ],
    funFact:
      "\"Vite\" is French for \"quick\" and is pronounced \"veet\". It was created by Evan You — the same person behind Vue.",
    url: "https://vite.dev",
  },
  {
    id: "php",
    name: "PHP",
    kind: "technology",
    category: "Server-Side Language",
    color: "#777bb4",
    logo: brand("php"),
    description:
      "A server-side scripting language that powers a huge part of the web. It builds HTML on the server before the page ever reaches your browser.",
    highlights: [
      "WordPress sites and plugins",
      "Web backends with Laravel or Symfony",
      "Content management and e-commerce",
    ],
    funFact:
      "PHP originally stood for \"Personal Home Page\". Today it's a recursive acronym: \"PHP: Hypertext Preprocessor\".",
    url: "https://www.php.net",
  },
];
