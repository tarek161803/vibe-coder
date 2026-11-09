import type { CatalogEntry } from "../types";

/** Frontend Development */
const entries: CatalogEntry[] = [
  {
    id: "sass-scss",
    name: "Sass / SCSS",
    abbr: "Sass",
    category: "CSS Preprocessor",
    color: "#cc6699",
    description:
      "A CSS preprocessor that adds variables, nesting, mixins and functions to CSS. You write .scss files, and Sass compiles them into normal CSS that browsers understand.",
    highlights: [
      "Organizing large stylesheets",
      "Reusable variables and mixins",
      "Theming design systems",
    ],
    funFact:
      "Sass stands for \"Syntactically Awesome Style Sheets\". Its original syntax used indentation instead of braces; the CSS-like SCSS syntax came later and became the favorite.",
    url: "https://sass-lang.com",
  },
  {
    id: "less",
    name: "Less",
    abbr: "Less",
    category: "CSS Preprocessor",
    color: "#1d365d",
    description:
      "A CSS preprocessor that adds variables, nesting and reusable mixins to CSS. Its syntax stays very close to plain CSS, so it is easy to pick up.",
    highlights: [
      "Older Bootstrap themes",
      "Ant Design theming",
      "Adding variables to CSS",
    ],
    funFact:
      "Bootstrap 3 was written in Less, but Bootstrap 4 switched to Sass — a big moment in the friendly rivalry between the two preprocessors.",
    url: "https://lesscss.org",
    spawnWeight: 0.5,
  },
  {
    id: "solidjs",
    name: "SolidJS",
    abbr: "Solid",
    category: "UI Library",
    color: "#2c4f7c",
    description:
      "A JavaScript library for building user interfaces with JSX, like React, but without a virtual DOM. It uses fine-grained reactive \"signals\" to update only exactly what changed.",
    highlights: [
      "Very fast interactive UIs",
      "Signal-based reactivity",
      "Full apps with SolidStart",
    ],
    funFact:
      "In Solid, component functions run only once. After that, only the tiny reactive bits that depend on changed signals re-run — unlike React, which re-runs whole components.",
    url: "https://www.solidjs.com",
  },
  {
    id: "preact",
    name: "Preact",
    abbr: "P",
    category: "UI Library",
    color: "#673ab8",
    description:
      "A tiny alternative to React with almost the same API. It lets you build component-based UIs while shipping far less JavaScript to the browser.",
    highlights: [
      "Lightweight React-style apps",
      "Widgets embedded in other sites",
      "Performance-sensitive pages",
    ],
    funFact:
      "Preact is only about 3 kB when gzipped, yet with its compatibility layer many React libraries work with it unchanged.",
    url: "https://preactjs.com",
  },
  {
    id: "qwik",
    name: "Qwik",
    abbr: "Qwik",
    category: "Web Framework",
    color: "#ac7ef4",
    description:
      "A web framework designed for instant page loads. Instead of re-running all the JavaScript in the browser, it \"resumes\" where the server left off and loads code only when needed.",
    highlights: [
      "Fast-loading websites",
      "E-commerce and content sites",
      "Resumable server-rendered apps",
    ],
    funFact:
      "Qwik was created by Miško Hevery, who also created AngularJS — so he has built two very different answers to how web apps should work.",
    url: "https://qwik.dev",
    spawnWeight: 0.5,
  },
  {
    id: "lit",
    name: "Lit",
    abbr: "Lit",
    category: "Web Components",
    color: "#324fff",
    description:
      "A small library from Google for building fast, lightweight Web Components. Components built with Lit work in any framework, or with no framework at all.",
    highlights: [
      "Reusable custom elements",
      "Design systems shared across apps",
      "Framework-agnostic widgets",
    ],
    funFact:
      "Lit is the successor to Google's Polymer library, one of the earliest projects built to popularize Web Components.",
    url: "https://lit.dev",
    spawnWeight: 0.5,
  },
  {
    id: "alpinejs",
    name: "Alpine.js",
    abbr: "AJS",
    category: "JavaScript Library",
    color: "#77c1d2",
    description:
      "A lightweight library that adds interactivity right in your HTML with attributes like x-data and x-on. Great for dropdowns, modals and tabs without a big framework.",
    highlights: [
      "Sprinkling interactivity on HTML",
      "Server-rendered apps with Laravel",
      "Toggles, dropdowns and modals",
    ],
    funFact:
      "Alpine.js was created by Caleb Porzio, who also created Laravel Livewire. It's often described as \"Tailwind for JavaScript\" because behavior lives right in the markup.",
    url: "https://alpinejs.dev",
  },
  {
    id: "htmx",
    name: "HTMX",
    abbr: "htmx",
    category: "JavaScript Library",
    color: "#3366cc",
    description:
      "A small library that lets HTML elements make server requests and swap in new HTML using attributes like hx-get. You can build dynamic pages while writing very little JavaScript.",
    highlights: [
      "Dynamic pages without a SPA",
      "Server-rendered apps in any language",
      "Partial page updates",
    ],
    funFact:
      "htmx is the successor to an older library by the same author, Carson Gross, called intercooler.js. Its playful, meme-heavy social media presence helped make it famous.",
    url: "https://htmx.org",
  },
  {
    id: "emberjs",
    name: "Ember.js",
    abbr: "Ember",
    category: "Web Framework",
    color: "#e04e39",
    description:
      "An opinionated JavaScript framework for building ambitious web apps. It favors strong conventions, so Ember projects tend to share the same structure and tools.",
    highlights: [
      "Large, long-lived web apps",
      "Convention-over-configuration",
      "Built-in routing and CLI",
    ],
    funFact:
      "Ember's mascot is a cute hamster named Tomster. Ember itself grew out of an earlier framework called SproutCore.",
    url: "https://emberjs.com",
    spawnWeight: 0.5,
  },
  {
    id: "backbonejs",
    name: "Backbone.js",
    abbr: "BB",
    category: "JavaScript Library",
    color: "#0071b5",
    description:
      "One of the first popular libraries for structuring JavaScript apps, using models, collections and views. It helped popularize single-page apps before React and Angular took over.",
    highlights: [
      "Early single-page applications",
      "Legacy frontend codebases",
      "Learning MV* app structure",
    ],
    funFact:
      "Backbone was created by Jeremy Ashkenas, who also created CoffeeScript and the Underscore.js utility library.",
    url: "https://backbonejs.org",
    spawnWeight: 0.5,
  },
  {
    id: "nuxt",
    name: "Nuxt",
    abbr: "Nuxt",
    category: "Meta-Framework",
    color: "#00dc82",
    description:
      "A full-stack framework built on Vue that adds routing, server-side rendering and data fetching out of the box. It makes building fast Vue websites and apps much easier.",
    highlights: [
      "Server-rendered Vue apps",
      "Static sites and blogs",
      "Full-stack apps with server routes",
    ],
    funFact:
      "Nuxt was inspired by Next.js — it set out to bring the same smooth server-rendering experience to the Vue world.",
    url: "https://nuxt.com",
  },
  {
    id: "remix",
    name: "Remix",
    abbr: "Remix",
    category: "Meta-Framework",
    color: "#3992ff",
    description:
      "A full-stack React framework that leans on web standards like forms, HTTP requests and responses. Data loading and form handling happen on the server through loaders and actions.",
    highlights: [
      "Full-stack React apps",
      "Progressive form handling",
      "Server-rendered pages",
    ],
    funFact:
      "Remix was built by the creators of React Router. Shopify acquired Remix in 2022, and its features were later merged into React Router v7.",
    url: "https://remix.run",
  },
  {
    id: "gatsby",
    name: "Gatsby",
    abbr: "Gby",
    category: "Static Site Generator",
    color: "#663399",
    description:
      "A React-based framework for building fast static websites. It pulls content from Markdown, CMSs or APIs through a GraphQL data layer and turns it into pre-built pages.",
    highlights: [
      "Blogs and marketing sites",
      "Pulling content from headless CMSs",
      "Pre-built static pages",
    ],
    funFact:
      "Gatsby was one of the most popular React site generators of the late 2010s. In 2023 the company behind it was acquired by Netlify.",
    url: "https://www.gatsbyjs.com",
    spawnWeight: 0.5,
  },
  {
    id: "astro",
    name: "Astro",
    abbr: "Astro",
    category: "Web Framework",
    color: "#bc52ee",
    description:
      "A framework for content-focused websites that ships zero JavaScript by default. You can add interactive \"islands\" using React, Vue, Svelte or others only where needed.",
    highlights: [
      "Blogs and documentation sites",
      "Marketing and content sites",
      "Mixing multiple UI frameworks",
    ],
    funFact:
      "Astro popularized \"islands architecture\" — interactive parts float like islands in a sea of static HTML. The term was coined by Katie Sylor-Miller at Etsy.",
    url: "https://astro.build",
  },
  {
    id: "sveltekit",
    name: "SvelteKit",
    abbr: "SK",
    category: "Meta-Framework",
    color: "#ff3e00",
    description:
      "The official app framework for Svelte, adding routing, server rendering and data loading. Svelte itself is a compiler that turns components into small, efficient JavaScript.",
    highlights: [
      "Full-stack Svelte apps",
      "Server-rendered and static sites",
      "Fast, lightweight web apps",
    ],
    funFact:
      "Svelte's creator Rich Harris built it while making interactive graphics for news stories at The Guardian, where small, fast code really mattered.",
    url: "https://svelte.dev/docs/kit",
  },
  {
    id: "redwoodjs",
    name: "RedwoodJS",
    abbr: "RW",
    category: "Full-Stack Framework",
    color: "#bf4722",
    description:
      "An opinionated full-stack framework that combines React, GraphQL and Prisma. It gives startups a ready-made structure for both the frontend and the backend.",
    highlights: [
      "Full-stack startup apps",
      "React with a GraphQL API",
      "Database access with Prisma",
    ],
    funFact:
      "RedwoodJS was co-created by Tom Preston-Werner, one of the co-founders of GitHub and the creator of the Jekyll static site generator.",
    url: "https://redwoodjs.com",
    spawnWeight: 0.5,
  },
  {
    id: "tanstack-start",
    name: "TanStack Start",
    abbr: "TSS",
    category: "Meta-Framework",
    color: "#10b981",
    description:
      "A full-stack React framework built on TanStack Router and Vite. It adds server rendering, server functions and type-safe routing to React apps.",
    highlights: [
      "Type-safe full-stack React",
      "Server functions and SSR",
      "Apps using TanStack Router",
    ],
    funFact:
      "TanStack gets its name from its creator, Tanner Linsley — the \"Tan\" in TanStack is short for Tanner.",
    url: "https://tanstack.com/start",
    spawnWeight: 0.5,
  },
  {
    id: "bootstrap",
    name: "Bootstrap",
    abbr: "B",
    category: "CSS Framework",
    color: "#7952b3",
    description:
      "A popular CSS framework with a responsive grid and ready-made components like buttons, navbars and modals. It lets you build decent-looking pages quickly without designing from scratch.",
    highlights: [
      "Responsive page layouts",
      "Admin dashboards and prototypes",
      "Ready-made UI components",
    ],
    funFact:
      "Bootstrap was created at Twitter by Mark Otto and Jacob Thornton and was originally called \"Twitter Blueprint\" before being open-sourced in 2011.",
    url: "https://getbootstrap.com",
  },
  {
    id: "bulma",
    name: "Bulma",
    abbr: "Bulma",
    category: "CSS Framework",
    color: "#00d1b2",
    description:
      "A modern CSS framework based on Flexbox with clean, readable class names. It gives you columns, buttons, forms and more using only CSS classes.",
    highlights: [
      "Simple responsive layouts",
      "Clean-looking prototypes",
      "Pages with no JS framework",
    ],
    funFact:
      "Bulma ships zero JavaScript — it is pure CSS. For interactive bits like a mobile menu toggle, you bring your own small script.",
    url: "https://bulma.io",
    spawnWeight: 0.5,
  },
  {
    id: "foundation",
    name: "Foundation",
    abbr: "Fdn",
    category: "CSS Framework",
    color: "#1779ba",
    description:
      "A responsive front-end framework from the design agency ZURB, with a flexible grid and UI components. It was one of the early frameworks to push mobile-first design.",
    highlights: [
      "Responsive mobile-first sites",
      "HTML email templates",
      "Custom design systems",
    ],
    funFact:
      "Foundation has a sibling called Foundation for Emails, built to tame the notoriously tricky world of HTML email layouts.",
    url: "https://get.foundation",
    spawnWeight: 0.5,
  },
  {
    id: "materialize",
    name: "Materialize",
    abbr: "Mtz",
    category: "CSS Framework",
    color: "#ee6e73",
    description:
      "A CSS framework that follows Google's Material Design look, with cards, shadows and ripple effects. It gives your site an Android-style feel with simple CSS classes.",
    highlights: [
      "Material Design-style websites",
      "Student and hobby projects",
      "Quick styled prototypes",
    ],
    funFact:
      "Material Design, the visual language Materialize copies, was introduced by Google in 2014 and was inspired by paper and ink — think layers, shadows and cards.",
    url: "https://materializecss.com",
    spawnWeight: 0.5,
  },
  {
    id: "unocss",
    name: "UnoCSS",
    abbr: "Uno",
    category: "Atomic CSS Engine",
    color: "#5ec2a1",
    description:
      "An instant, on-demand atomic CSS engine. It scans your code and generates only the utility classes you actually use, and you can configure it to mimic Tailwind and others.",
    highlights: [
      "Utility-first styling",
      "Custom CSS utility presets",
      "Vite and Nuxt projects",
    ],
    funFact:
      "UnoCSS was created by Anthony Fu, a prolific open-source developer on the Vue, Vite and Nuxt teams who also created Vitest and Slidev.",
    url: "https://unocss.dev",
    spawnWeight: 0.5,
  },
  {
    id: "windi-css",
    name: "Windi CSS",
    abbr: "Windi",
    category: "Utility CSS Framework",
    color: "#48b0f1",
    description:
      "A Tailwind-compatible utility CSS framework that generated styles on demand for faster builds. It is no longer maintained, but it influenced newer tools.",
    highlights: [
      "Tailwind-style utility classes",
      "Faster dev builds (historically)",
      "Vite and Vue projects",
    ],
    funFact:
      "The Windi CSS team officially sunset the project in 2023 and recommended moving to UnoCSS or Tailwind CSS, which had adopted on-demand generation.",
    url: "https://github.com/windicss/windicss",
    spawnWeight: 0.5,
  },
  {
    id: "material-ui",
    name: "Material UI",
    abbr: "MUI",
    category: "Component Library",
    color: "#007fff",
    description:
      "A big React component library that implements Google's Material Design. It gives you ready-made buttons, dialogs, tables and more that you can theme to match your brand.",
    highlights: [
      "React dashboards and admin panels",
      "Consistent Material Design UIs",
      "Theming React components",
    ],
    funFact:
      "The project was originally named \"Material-UI\"; the company behind it rebranded as MUI in 2021, partly to make clear it isn't an official Google product.",
    url: "https://mui.com/material-ui/",
  },
  {
    id: "ant-design",
    name: "Ant Design",
    abbr: "AntD",
    category: "Component Library",
    color: "#1677ff",
    description:
      "A comprehensive React UI library and design system with dozens of polished components. It is especially popular for data-heavy enterprise and admin applications.",
    highlights: [
      "Enterprise admin dashboards",
      "Data tables and complex forms",
      "Internal business tools",
    ],
    funFact:
      "Ant Design comes from Ant Group, the Alibaba-affiliated company behind Alipay, and is one of the most-starred React UI libraries on GitHub.",
    url: "https://ant.design",
  },
  {
    id: "chakra-ui",
    name: "Chakra UI",
    abbr: "CUI",
    category: "Component Library",
    color: "#319795",
    description:
      "A React component library focused on accessibility and easy styling. You style components with simple props like p, bg and color right in your JSX.",
    highlights: [
      "Accessible React apps",
      "Rapid UI prototyping",
      "Themeable design systems",
    ],
    funFact:
      "Chakra UI was created by Segun Adebayo, a developer from Nigeria, who went on to build Zag.js and Ark UI to share the same logic across frameworks.",
    url: "https://chakra-ui.com",
  },
  {
    id: "mantine",
    name: "Mantine",
    abbr: "Mtn",
    category: "Component Library",
    color: "#339af0",
    description:
      "A full-featured React component library with lots of components, form helpers and hooks. It has good defaults, dark mode support and solid TypeScript types.",
    highlights: [
      "React dashboards and apps",
      "Forms with @mantine/form",
      "Reusable React hooks",
    ],
    funFact:
      "Mantine ships a separate @mantine/hooks package full of handy React hooks — you can use it even if you don't use any Mantine components.",
    url: "https://mantine.dev",
    spawnWeight: 0.5,
  },
  {
    id: "shadcn-ui",
    name: "shadcn/ui",
    abbr: "/ui",
    category: "Component Collection",
    color: "#8b5cf6",
    description:
      "A collection of nicely designed React components built with Radix UI and Tailwind CSS. Instead of installing a package, you copy the component code into your project and own it.",
    highlights: [
      "Customizable React UIs",
      "Next.js and Tailwind projects",
      "Building your own design system",
    ],
    funFact:
      "shadcn/ui is named after its creator's online handle, shadcn. It deliberately isn't a dependency — a CLI copies the source into your project so you can edit it freely.",
    url: "https://ui.shadcn.com",
  },
  {
    id: "radix-ui",
    name: "Radix UI",
    abbr: "Radix",
    category: "UI Primitives",
    color: "#6e56cf",
    description:
      "A set of unstyled, accessible React building blocks like dialogs, dropdowns and tooltips. They handle keyboard navigation and focus for you, and you add your own styles.",
    highlights: [
      "Accessible custom components",
      "Foundation for shadcn/ui",
      "Building design systems",
    ],
    funFact:
      "Radix's primitives power shadcn/ui under the hood, so many apps using shadcn/ui are really using Radix for their accessibility behavior.",
    url: "https://www.radix-ui.com",
  },
  {
    id: "headless-ui",
    name: "Headless UI",
    abbr: "HUI",
    category: "UI Primitives",
    color: "#66e3ff",
    description:
      "Completely unstyled, accessible UI components for React and Vue, made by the Tailwind CSS team. You get the behavior of menus, dialogs and tabs and style them with Tailwind.",
    highlights: [
      "Accessible menus and dialogs",
      "Pairing with Tailwind CSS",
      "React and Vue projects",
    ],
    funFact:
      "\"Headless\" means the components come with no visual styles at all — just the logic and accessibility — so you decide exactly how they look.",
    url: "https://headlessui.com",
    spawnWeight: 0.5,
  },
  {
    id: "daisyui",
    name: "DaisyUI",
    abbr: "Daisy",
    category: "Tailwind Plugin",
    color: "#1ad1a5",
    description:
      "A plugin for Tailwind CSS that adds component class names like btn, card and modal. You write much shorter HTML while still being able to use Tailwind utilities.",
    highlights: [
      "Quick styled Tailwind components",
      "Switchable color themes",
      "Framework-agnostic UI",
    ],
    funFact:
      "DaisyUI comes with dozens of built-in themes with fun names like \"cupcake\", \"synthwave\" and \"dracula\" that you can switch with a single attribute.",
    url: "https://daisyui.com",
  },
  {
    id: "heroui",
    name: "HeroUI",
    abbr: "Hero",
    category: "Component Library",
    color: "#7828c8",
    description:
      "A modern React component library built on Tailwind CSS with polished animations and dark mode. It focuses on beautiful defaults and accessibility.",
    highlights: [
      "Modern-looking React apps",
      "Next.js projects",
      "Tailwind-based components",
    ],
    funFact:
      "HeroUI used to be called NextUI. It was renamed in early 2025, partly because people often assumed it was an official part of Next.js.",
    url: "https://www.heroui.com",
    spawnWeight: 0.5,
  },
  {
    id: "fluent-ui",
    name: "Fluent UI",
    abbr: "FUI",
    category: "Design System",
    color: "#0078d4",
    description:
      "Microsoft's open-source design system and component libraries. It gives web apps the same look and feel as Microsoft products like Office and Teams.",
    highlights: [
      "Microsoft 365 add-ins",
      "Apps that feel like Office or Teams",
      "Enterprise React interfaces",
    ],
    funFact:
      "Fluent UI was previously known as Office UI Fabric — the toolkit Microsoft originally built for the web versions of Office.",
    url: "https://github.com/microsoft/fluentui",
    spawnWeight: 0.5,
  },
  {
    id: "primereact",
    name: "PrimeReact",
    abbr: "Prime",
    category: "Component Library",
    color: "#06b6d4",
    description:
      "A large React UI library with 80+ components including rich data tables, charts and form inputs. It offers many ready-made themes for business applications.",
    highlights: [
      "Data-rich business apps",
      "Advanced data tables",
      "Themed enterprise UIs",
    ],
    funFact:
      "PrimeReact comes from PrimeTek, which also makes PrimeNG for Angular, PrimeVue for Vue and PrimeFaces for Java — the same idea across many frameworks.",
    url: "https://primereact.org",
    spawnWeight: 0.5,
  },
  {
    id: "redux",
    name: "Redux",
    abbr: "Rdx",
    category: "State Management",
    color: "#764abc",
    description:
      "A library for managing app state in one central store. You change state by dispatching actions, and pure functions called reducers calculate the new state.",
    highlights: [
      "Global state in React apps",
      "Predictable state updates",
      "Time-travel debugging",
    ],
    funFact:
      "Dan Abramov created Redux in 2015 while preparing a conference talk about hot reloading and \"time travel\" debugging — replaying actions to rewind your app.",
    url: "https://redux.js.org",
  },
  {
    id: "redux-toolkit",
    name: "Redux Toolkit",
    abbr: "RTK",
    category: "State Management",
    color: "#593d88",
    description:
      "The official, recommended way to write Redux. It removes most of the boilerplate with helpers like createSlice and sets up a good store configuration for you.",
    highlights: [
      "Modern Redux apps",
      "Less boilerplate with createSlice",
      "Data fetching via RTK Query",
    ],
    funFact:
      "Redux Toolkit uses the Immer library under the hood, so you can write code that looks like it \"mutates\" state while it actually produces a safe new copy.",
    url: "https://redux-toolkit.js.org",
  },
  {
    id: "zustand",
    name: "Zustand",
    abbr: "Zu",
    category: "State Management",
    color: "#b45309",
    description:
      "A small, simple state management library for React. You create a store with a hook and use it anywhere, without providers or lots of boilerplate.",
    highlights: [
      "Lightweight global state",
      "React apps and games",
      "Replacing heavier Redux setups",
    ],
    funFact:
      "\"Zustand\" is German for \"state\". It comes from the Poimandres open-source collective, and its mascot is a bear.",
    url: "https://github.com/pmndrs/zustand",
  },
  {
    id: "mobx",
    name: "MobX",
    abbr: "MobX",
    category: "State Management",
    color: "#ff7102",
    description:
      "A state management library based on observables. You change your data directly, and MobX automatically updates any part of the UI that depends on it.",
    highlights: [
      "Reactive state in React apps",
      "Complex interconnected data",
      "Simple mutable-style updates",
    ],
    funFact:
      "MobX was created by Michel Weststrate, who also created Immer — the library that lets Redux Toolkit users write \"mutating\" reducers.",
    url: "https://mobx.js.org",
  },
  {
    id: "recoil",
    name: "Recoil",
    abbr: "Rcl",
    category: "State Management",
    color: "#3578e5",
    description:
      "An experimental state management library for React from Meta. State lives in small units called atoms, and derived values are computed with selectors.",
    highlights: [
      "Atom-based React state",
      "Derived state with selectors",
      "Legacy React codebases",
    ],
    funFact:
      "Recoil never left its \"experimental\" label and its repository was eventually archived. Many developers moved to Jotai, which uses a similar atom idea.",
    url: "https://recoiljs.org",
    spawnWeight: 0.5,
  },
  {
    id: "jotai",
    name: "Jotai",
    abbr: "Jotai",
    category: "State Management",
    color: "#5b5bd6",
    description:
      "A minimal state library for React built around tiny pieces of state called atoms. You combine atoms to build up your app state, and only components that use an atom re-render.",
    highlights: [
      "Atom-based React state",
      "Fine-grained re-renders",
      "Replacing Recoil",
    ],
    funFact:
      "\"Jotai\" means \"state\" in Japanese. It was created by Daishi Kato, who also maintains Zustand and created Valtio.",
    url: "https://jotai.org",
    spawnWeight: 0.5,
  },
  {
    id: "valtio",
    name: "Valtio",
    abbr: "Vt",
    category: "State Management",
    color: "#e9a23b",
    description:
      "A proxy-based state library that lets you change state with plain JavaScript like state.count++. Your React components automatically re-render when the data they use changes.",
    highlights: [
      "Mutable-style React state",
      "Simple shared stores",
      "Vanilla JS state tracking",
    ],
    funFact:
      "\"Valtio\" means \"state\" in Finnish. Together with Zustand (German) and Jotai (Japanese), it completes a trio of state libraries all named \"state\".",
    url: "https://valtio.dev",
    spawnWeight: 0.5,
  },
  {
    id: "xstate",
    name: "XState",
    abbr: "XS",
    category: "State Machines",
    color: "#3a86ff",
    description:
      "A library for modeling app logic as state machines and statecharts. You define the possible states and the events that move between them, which avoids impossible states.",
    highlights: [
      "Complex UI flows and wizards",
      "Visualizing app logic",
      "Predictable state transitions",
    ],
    funFact:
      "XState is based on statecharts, a visual formalism invented by computer scientist David Harel in 1987 for describing complex systems.",
    url: "https://stately.ai/docs/xstate",
    spawnWeight: 0.5,
  },
  {
    id: "tanstack-query",
    name: "TanStack Query",
    abbr: "TQ",
    category: "Data Fetching",
    color: "#ff4154",
    description:
      "A library for fetching, caching and updating server data in your app. It handles loading states, retries and background refreshes so you don't have to write that logic yourself.",
    highlights: [
      "Fetching and caching API data",
      "Background data refetching",
      "React, Vue, Solid and Svelte apps",
    ],
    funFact:
      "TanStack Query was originally called React Query. It was renamed when it grew to support other frameworks like Vue, Solid and Svelte.",
    url: "https://tanstack.com/query",
  },
  {
    id: "swr",
    name: "SWR",
    abbr: "SWR",
    category: "Data Fetching",
    color: "#0070f3",
    description:
      "A React hooks library for data fetching from Vercel. It shows cached data instantly, then quietly refetches in the background to keep it fresh.",
    highlights: [
      "Data fetching in React apps",
      "Caching API responses",
      "Next.js projects",
    ],
    funFact:
      "SWR is named after \"stale-while-revalidate\", an HTTP caching strategy: show the old (stale) data first, then check for an update.",
    url: "https://swr.vercel.app",
  },
  {
    id: "apollo-client",
    name: "Apollo Client",
    abbr: "Apo",
    category: "GraphQL Client",
    color: "#311c87",
    description:
      "A popular library for talking to GraphQL APIs from your frontend. It sends queries, caches the results and keeps your UI in sync with the data.",
    highlights: [
      "GraphQL queries in React",
      "Normalized client-side caching",
      "Apps using GraphQL backends",
    ],
    funFact:
      "Apollo was built by the Meteor Development Group — the team behind the Meteor JavaScript framework — which later renamed itself Apollo.",
    url: "https://www.apollographql.com/docs/react/",
  },
  {
    id: "relay",
    name: "Relay",
    abbr: "Rly",
    category: "GraphQL Client",
    color: "#f26b00",
    description:
      "Meta's GraphQL client for React. Each component declares exactly the data it needs, and Relay combines those needs into efficient queries.",
    highlights: [
      "Large GraphQL-powered React apps",
      "Component-level data needs",
      "Facebook-scale frontends",
    ],
    funFact:
      "Relay comes from the same company that created GraphQL itself — Facebook developed GraphQL internally in 2012 before open-sourcing it in 2015.",
    url: "https://relay.dev",
    spawnWeight: 0.5,
  },
  {
    id: "rtk-query",
    name: "RTK Query",
    abbr: "RTKQ",
    category: "Data Fetching",
    color: "#8e5bd9",
    description:
      "A data fetching and caching tool built into Redux Toolkit. You define your API endpoints once, and it generates React hooks that load and cache the data.",
    highlights: [
      "API calls in Redux apps",
      "Auto-generated data hooks",
      "Caching and refetching data",
    ],
    funFact:
      "RTK Query ships inside the Redux Toolkit package, so if you already use Redux Toolkit you have it without installing anything extra.",
    url: "https://redux-toolkit.js.org/rtk-query/overview",
    spawnWeight: 0.5,
  },
  {
    id: "urql",
    name: "urql",
    abbr: "urql",
    category: "GraphQL Client",
    color: "#e24c9b",
    description:
      "A lightweight, customizable GraphQL client. It is smaller and simpler than Apollo by default, and you can add features like normalized caching through plugins called exchanges.",
    highlights: [
      "Lightweight GraphQL fetching",
      "React, Vue and Svelte apps",
      "Customizable request pipelines",
    ],
    funFact:
      "According to its README, urql is pronounced \"Urkel\" — like the nerdy TV character Steve Urkel.",
    url: "https://github.com/urql-graphql/urql",
    spawnWeight: 0.5,
  },
  {
    id: "axios",
    name: "Axios",
    abbr: "Ax",
    category: "HTTP Client",
    color: "#5a29e4",
    description:
      "A popular promise-based library for making HTTP requests. It handles JSON automatically and supports interceptors, timeouts and request cancellation.",
    highlights: [
      "Calling REST APIs",
      "Adding auth headers with interceptors",
      "Browser and Node.js requests",
    ],
    funFact:
      "Axios works in both places: in the browser it uses XMLHttpRequest, and in Node.js it uses the built-in http module — with the same API for both.",
    url: "https://axios-http.com",
  },
  {
    id: "web-components",
    name: "Web Components",
    abbr: "WC",
    category: "Web Standard",
    color: "#29abe2",
    description:
      "A set of browser standards for creating your own reusable HTML tags. They combine Custom Elements, Shadow DOM and HTML templates, and work without any framework.",
    highlights: [
      "Reusable custom HTML elements",
      "Framework-independent design systems",
      "Encapsulated styles via Shadow DOM",
    ],
    funFact:
      "Custom element names must contain a hyphen, like <my-button>. That rule guarantees they will never clash with future built-in HTML tags.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_components",
  },
  {
    id: "webassembly",
    name: "WebAssembly",
    abbr: "Wasm",
    category: "Web Standard",
    color: "#654ff0",
    description:
      "A compact binary format that lets browsers run code at near-native speed. You can compile languages like C, C++ and Rust to it and run them alongside JavaScript.",
    highlights: [
      "Games and 3D apps in the browser",
      "Porting C/C++/Rust code to the web",
      "Heavy computation like video editing",
    ],
    funFact:
      "When WebAssembly became an official W3C recommendation in 2019, it was described as the fourth language of the web, after HTML, CSS and JavaScript.",
    url: "https://webassembly.org",
  },
  {
    id: "web-workers",
    name: "Web Workers",
    abbr: "WW",
    category: "Browser API",
    color: "#e8a33d",
    description:
      "A browser feature that runs JavaScript in a background thread. Heavy work happens there so the main page stays smooth and responsive.",
    highlights: [
      "Heavy calculations off the main thread",
      "Parsing large files",
      "Keeping UIs responsive",
    ],
    funFact:
      "Web Workers can't touch the DOM at all. They talk to the main page only by sending messages back and forth with postMessage.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Workers_API",
  },
  {
    id: "service-workers",
    name: "Service Workers",
    abbr: "SW",
    category: "Browser API",
    color: "#2a9d8f",
    description:
      "Scripts that sit between your web app and the network, able to intercept requests. They make offline support, caching and push notifications possible.",
    highlights: [
      "Offline-ready Progressive Web Apps",
      "Caching assets for speed",
      "Push notifications",
    ],
    funFact:
      "Because they can intercept every request, service workers only work on secure HTTPS pages — with localhost allowed as an exception for development.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Service_Worker_API",
  },
  {
    id: "websockets",
    name: "WebSockets",
    abbr: "WS",
    category: "Network Protocol",
    color: "#4f46e5",
    description:
      "A protocol that keeps a two-way connection open between browser and server. Either side can send messages at any time, perfect for real-time features.",
    highlights: [
      "Chat apps and live comments",
      "Multiplayer games",
      "Live dashboards and notifications",
    ],
    funFact:
      "A WebSocket connection starts life as a normal HTTP request that asks to \"upgrade\" — then it switches protocols and stays open.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/WebSockets_API",
  },
  {
    id: "webrtc",
    name: "WebRTC",
    abbr: "RTC",
    category: "Real-Time Web API",
    color: "#e2522c",
    description:
      "A set of browser APIs for real-time audio, video and data directly between users. It powers video calls in the browser without plugins.",
    highlights: [
      "Video and voice calls",
      "Peer-to-peer file sharing",
      "Screen sharing in the browser",
    ],
    funFact:
      "Google open-sourced the technology behind WebRTC in 2011 after acquiring Global IP Solutions, a company that built audio and video engines.",
    url: "https://webrtc.org",
  },
  {
    id: "dom",
    name: "DOM",
    abbr: "DOM",
    category: "Web Concept",
    color: "#e34c26",
    description:
      "The Document Object Model is the browser's tree-shaped representation of a web page. JavaScript uses it to read and change elements, text and styles on the page.",
    highlights: [
      "Changing page content with JS",
      "Handling clicks and events",
      "What frameworks update for you",
    ],
    funFact:
      "Browsers quietly fix broken HTML when building the DOM — for example, a <table> written without <tbody> gets one added automatically.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Document_Object_Model",
  },
  {
    id: "web-apis",
    name: "Web APIs",
    abbr: "API",
    category: "Browser APIs",
    color: "#0069c2",
    description:
      "The built-in features browsers give JavaScript, like fetch, localStorage, geolocation and the Canvas API. They let web pages do much more than just display text.",
    highlights: [
      "Network requests with fetch",
      "Storing data with localStorage",
      "Graphics, audio and device access",
    ],
    funFact:
      "There's even a Vibration API: on supported phones, calling navigator.vibrate(200) makes the device buzz for 200 milliseconds.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API",
  },
];

export default entries;
