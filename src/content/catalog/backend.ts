import type { CatalogEntry } from "../types";

/** Backend Development */
const entries: CatalogEntry[] = [
  {
    id: "deno",
    name: "Deno",
    abbr: "Deno",
    category: "JavaScript Runtime",
    color: "#70b8a0",
    description:
      "A modern runtime for running JavaScript and TypeScript outside the browser. It runs TypeScript out of the box and is secure by default, so scripts need explicit permission to touch files or the network.",
    highlights: [
      "Running TypeScript without a build step",
      "Secure scripts and command-line tools",
      "Edge functions on Deno Deploy",
    ],
    funFact:
      "Deno was created by Ryan Dahl, the original creator of Node.js, after his talk about things he regretted in Node. The name \"Deno\" is just \"Node\" with the letters shuffled.",
    url: "https://deno.com",
  },
  {
    id: "bun",
    name: "Bun",
    abbr: "Bun",
    category: "JavaScript Runtime",
    color: "#f472b6",
    description:
      "An all-in-one JavaScript toolkit: a fast runtime, package manager, bundler and test runner in a single program. It aims to be a drop-in replacement for Node.js that starts up and installs packages much faster.",
    highlights: [
      "Running Node.js apps faster",
      "Lightning-fast package installs",
      "Built-in bundler and test runner",
    ],
    funFact:
      "Unlike Node.js and Deno, which use Chrome's V8 engine, Bun is powered by JavaScriptCore — the engine inside Safari — and is written mostly in the Zig programming language.",
    url: "https://bun.sh",
  },
  {
    id: "expressjs",
    name: "Express.js",
    abbr: "Ex",
    category: "Web Framework",
    color: "#259dff",
    description:
      "A minimal web framework for Node.js that makes it easy to handle URLs, requests and responses. You add features with small plug-in functions called middleware, which keeps it simple and flexible.",
    highlights: [
      "Building REST APIs with Node.js",
      "The \"E\" in the MERN and MEAN stacks",
      "Small servers and prototypes",
    ],
    funFact:
      "Express first appeared in 2010 and became so popular that it’s often the very first backend framework JavaScript developers learn — many newer frameworks still copy its style of middleware.",
    url: "https://expressjs.com",
  },
  {
    id: "nestjs",
    name: "NestJS",
    abbr: "Nest",
    category: "Web Framework",
    color: "#e0234e",
    description:
      "A structured Node.js framework for building server-side apps with TypeScript. It organizes code into modules, controllers and services, which helps big teams keep large backends tidy.",
    highlights: [
      "Large, well-organized TypeScript backends",
      "REST, GraphQL and microservices",
      "Enterprise Node.js projects",
    ],
    funFact:
      "NestJS borrows heavily from Angular’s architecture — decorators, modules and dependency injection — so frontend Angular developers often feel right at home on the backend.",
    url: "https://nestjs.com",
  },
  {
    id: "fastify",
    name: "Fastify",
    abbr: "Fy",
    category: "Web Framework",
    color: "#00a6a6",
    description:
      "A fast, low-overhead web framework for Node.js. It focuses on speed and a clean plugin system, and uses JSON schemas to validate requests and quickly turn responses into JSON.",
    highlights: [
      "High-performance Node.js APIs",
      "Schema-validated request handling",
      "A speedier alternative to Express",
    ],
    funFact:
      "Fastify gets part of its speed from JSON Schema: when it knows the shape of your response ahead of time, it can generate a specialized serializer that beats plain JSON.stringify.",
    url: "https://fastify.dev",
  },
  {
    id: "hono",
    name: "Hono",
    abbr: "Hono",
    category: "Web Framework",
    color: "#ff5b11",
    description:
      "A tiny, fast web framework built on Web Standards. The same code can run on Cloudflare Workers, Deno, Bun, Node.js and other JavaScript runtimes.",
    highlights: [
      "APIs on Cloudflare Workers and the edge",
      "Portable code across JS runtimes",
      "Lightweight, type-safe routing",
    ],
    funFact:
      "\"Hono\" means \"flame\" in Japanese — fitting for a framework that brags about being blazing fast. Its logo is a little flame, too.",
    url: "https://hono.dev",
  },
  {
    id: "koa",
    name: "Koa",
    abbr: "Koa",
    category: "Web Framework",
    color: "#5c6bc0",
    description:
      "A small, expressive web framework for Node.js designed by the team behind Express. It uses async functions for middleware, which makes error handling and control flow cleaner.",
    highlights: [
      "Minimal Node.js web servers",
      "Async/await-based middleware",
      "Building custom frameworks on top",
    ],
    funFact:
      "Koa was made by the same people who created Express, as a fresh start that took advantage of newer JavaScript features instead of rewriting Express itself.",
    url: "https://koajs.com",
    spawnWeight: 0.5,
  },
  {
    id: "adonisjs",
    name: "AdonisJS",
    abbr: "Ado",
    category: "Web Framework",
    color: "#5a45ff",
    description:
      "A full-featured TypeScript framework for Node.js that comes with routing, an ORM, authentication and validation built in. It gives you a complete toolkit instead of making you pick dozens of packages.",
    highlights: [
      "Full-stack Node.js web apps",
      "Batteries-included TypeScript backends",
      "Apps with auth and databases",
    ],
    funFact:
      "AdonisJS is often described as \"Laravel for Node.js\" because it brings the same batteries-included, developer-happiness approach to the JavaScript world.",
    url: "https://adonisjs.com",
    spawnWeight: 0.5,
  },
  {
    id: "fastapi",
    name: "FastAPI",
    abbr: "Fast",
    category: "Web Framework",
    color: "#009688",
    description:
      "A modern Python framework for building APIs using standard type hints. It validates data automatically and generates interactive API documentation for you.",
    highlights: [
      "Python REST APIs",
      "Serving machine learning models",
      "Auto-generated interactive API docs",
    ],
    funFact:
      "Just by reading your Python type hints, FastAPI creates a clickable Swagger UI docs page at /docs, so you can test your API in the browser without writing any extra code.",
    url: "https://fastapi.tiangolo.com",
  },
  {
    id: "django",
    name: "Django",
    abbr: "Dj",
    category: "Web Framework",
    color: "#44b78b",
    description:
      "A batteries-included Python web framework with an ORM, admin panel, authentication and templates built in. It helps you build secure, database-driven websites quickly.",
    highlights: [
      "Database-driven websites",
      "Instant admin dashboards",
      "Backends for sites like Instagram",
    ],
    funFact:
      "Django was born in a newsroom at the Lawrence Journal-World newspaper and is named after Django Reinhardt, the famous jazz guitarist.",
    url: "https://www.djangoproject.com",
  },
  {
    id: "flask",
    name: "Flask",
    abbr: "Fl",
    category: "Web Framework",
    color: "#3babc3",
    description:
      "A lightweight Python web framework that gives you just the basics: routing, request handling and templates. You add only the extras you need, which makes it great for learning and small services.",
    highlights: [
      "Small Python web apps and APIs",
      "Learning how web servers work",
      "Quick prototypes and microservices",
    ],
    funFact:
      "Flask started as an April Fools’ joke in 2010 — Armin Ronacher bundled a tiny framework into a single file as a prank, but people liked it so much he turned it into a real project.",
    url: "https://flask.palletsprojects.com",
  },
  {
    id: "laravel",
    name: "Laravel",
    abbr: "Lv",
    category: "Web Framework",
    color: "#ff2d20",
    description:
      "A popular PHP framework with elegant syntax and lots of built-in tools for routing, databases, queues and authentication. It aims to make common web tasks pleasant and fast.",
    highlights: [
      "Full-featured PHP web apps",
      "APIs and SaaS products",
      "Eloquent ORM for databases",
    ],
    funFact:
      "Taylor Otwell released Laravel in 2011 as a more complete alternative to CodeIgniter, and it grew into one of the most popular PHP frameworks in the world.",
    url: "https://laravel.com",
  },
  {
    id: "symfony",
    name: "Symfony",
    abbr: "Sf",
    category: "Web Framework",
    color: "#18b8a0",
    description:
      "A mature PHP framework and a set of reusable PHP components. It is known for stability and long-term support, making it a common choice for large business applications.",
    highlights: [
      "Enterprise PHP applications",
      "Reusable components for other projects",
      "Long-term supported releases",
    ],
    funFact:
      "Even if you’ve never used Symfony directly, you’ve probably used it: Laravel and Drupal are built on top of many Symfony components.",
    url: "https://symfony.com",
  },
  {
    id: "spring-boot",
    name: "Spring Boot",
    abbr: "SB",
    category: "Web Framework",
    color: "#6db33f",
    description:
      "An opinionated framework that makes it quick to build production-ready Java services. It auto-configures common setups so you can write a working web API with very little boilerplate.",
    highlights: [
      "REST APIs and microservices in Java",
      "Enterprise backends at large companies",
      "Quick project setup with Spring Initializr",
    ],
    funFact:
      "Spring started in 2002 as a reaction against the heavyweight Java EE of the time — its name hinted at a fresh \"spring\" after the \"winter\" of complex enterprise Java.",
    url: "https://spring.io/projects/spring-boot",
  },
  {
    id: "quarkus",
    name: "Quarkus",
    abbr: "Qk",
    category: "Web Framework",
    color: "#4695eb",
    description:
      "A Java framework designed for containers and the cloud. It starts very quickly and uses little memory, and it can compile apps into native executables with GraalVM.",
    highlights: [
      "Cloud-native Java microservices",
      "Fast-starting serverless functions",
      "Native executables with GraalVM",
    ],
    funFact:
      "Quarkus is backed by Red Hat and markets itself with the slogan \"Supersonic Subatomic Java\" — a nod to its quick startup and tiny memory footprint.",
    url: "https://quarkus.io",
    spawnWeight: 0.5,
  },
  {
    id: "micronaut",
    name: "Micronaut",
    abbr: "Mn",
    category: "Web Framework",
    color: "#2ec1c1",
    description:
      "A JVM framework for building microservices in Java, Kotlin or Groovy. It does dependency injection at compile time instead of runtime, so apps start fast and use less memory.",
    highlights: [
      "Lightweight JVM microservices",
      "Serverless functions on the JVM",
      "Low-memory cloud apps",
    ],
    funFact:
      "Micronaut comes from the creators of the Grails framework, who wanted to avoid the slow startup caused by heavy runtime reflection in older Java frameworks.",
    url: "https://micronaut.io",
    spawnWeight: 0.5,
  },
  {
    id: "aspnet-core",
    name: "ASP.NET Core",
    abbr: "ASP",
    category: "Web Framework",
    color: "#512bd4",
    description:
      "Microsoft’s open-source framework for building web apps and APIs with C#. It runs on Windows, macOS and Linux and is known for strong performance.",
    highlights: [
      "Web APIs in C#",
      "Enterprise web applications",
      "Real-time apps with SignalR",
    ],
    funFact:
      "The original ASP.NET only ran on Windows; ASP.NET Core was a ground-up rewrite that made it open source and cross-platform, so it now happily runs on Linux servers.",
    url: "https://dotnet.microsoft.com/en-us/apps/aspnet",
  },
  {
    id: "ruby-on-rails",
    name: "Ruby on Rails",
    abbr: "RoR",
    category: "Web Framework",
    color: "#cc0000",
    description:
      "A full-stack web framework for the Ruby language that favors convention over configuration. Its defaults and generators let you build a working database-backed app very quickly.",
    highlights: [
      "Startups shipping products fast",
      "Database-backed web apps",
      "Sites like GitHub and Shopify",
    ],
    funFact:
      "David Heinemeier Hansson extracted Rails from Basecamp, the project management app he was building, and released it as open source in 2004.",
    url: "https://rubyonrails.org",
  },
  {
    id: "phoenix",
    name: "Phoenix",
    abbr: "Phx",
    category: "Web Framework",
    color: "#fd4f00",
    description:
      "A web framework for the Elixir language that runs on the Erlang virtual machine. It is great at handling huge numbers of real-time connections, and LiveView lets you build interactive pages with little JavaScript.",
    highlights: [
      "Real-time apps and chat",
      "Interactive pages with LiveView",
      "Highly concurrent web services",
    ],
    funFact:
      "In a famous 2015 benchmark, the Phoenix team held about 2 million simultaneous WebSocket connections on a single server.",
    url: "https://www.phoenixframework.org",
    spawnWeight: 0.5,
  },
  {
    id: "gin",
    name: "Gin",
    abbr: "Gin",
    category: "Web Framework",
    color: "#00add8",
    description:
      "A popular HTTP web framework for the Go language. It offers fast routing, middleware and JSON handling while keeping your code short and readable.",
    highlights: [
      "REST APIs in Go",
      "High-performance microservices",
      "JSON-heavy backends",
    ],
    funFact:
      "Gin describes itself as having a Martini-like API with much better performance — Martini was an earlier Go framework, and Gin is built on the speedy httprouter.",
    url: "https://gin-gonic.com",
  },
  {
    id: "fiber",
    name: "Fiber",
    abbr: "Fib",
    category: "Web Framework",
    color: "#00acd7",
    description:
      "A Go web framework inspired by Express.js, built on top of the fast fasthttp engine. It aims to make Go feel familiar to developers coming from Node.js.",
    highlights: [
      "Express-style APIs in Go",
      "Fast, low-memory web servers",
      "Easing Node.js devs into Go",
    ],
    funFact:
      "Fiber is built on fasthttp instead of Go’s standard net/http package, trading some compatibility with standard Go middleware for extra speed.",
    url: "https://gofiber.io",
    spawnWeight: 0.5,
  },
  {
    id: "echo",
    name: "Echo",
    abbr: "Echo",
    category: "Web Framework",
    color: "#7b61ff",
    description:
      "A minimalist, high-performance web framework for Go. It adds handy routing, middleware and data binding on top of Go’s standard HTTP server.",
    highlights: [
      "RESTful APIs in Go",
      "Microservices with middleware",
      "Lightweight web backends",
    ],
    funFact:
      "Go’s standard library already includes a production-ready HTTP server, so frameworks like Echo can stay small — they mostly add routing and conveniences on top.",
    url: "https://echo.labstack.com",
    spawnWeight: 0.5,
  },
  {
    id: "actix-web",
    name: "Actix Web",
    abbr: "Actx",
    category: "Web Framework",
    color: "#e97b28",
    description:
      "A powerful, extremely fast web framework for the Rust language. It gives you routing, middleware and async request handling with Rust’s memory safety.",
    highlights: [
      "High-performance Rust APIs",
      "Low-latency web services",
      "Replacing slower backends",
    ],
    funFact:
      "Actix Web is a regular near the very top of the TechEmpower web framework benchmarks, which compare hundreds of frameworks on raw speed.",
    url: "https://actix.rs",
    spawnWeight: 0.5,
  },
  {
    id: "axum",
    name: "Axum",
    abbr: "Axum",
    category: "Web Framework",
    color: "#dea584",
    description:
      "A Rust web framework made by the Tokio team. It focuses on ergonomics and modularity, letting you write request handlers as plain async functions.",
    highlights: [
      "Async web APIs in Rust",
      "Services built on Tokio and Tower",
      "Type-safe request extraction",
    ],
    funFact:
      "Axum is maintained by the same people behind Tokio, Rust’s most popular async runtime, and reuses the Tower ecosystem for middleware like timeouts and rate limiting.",
    url: "https://github.com/tokio-rs/axum",
    spawnWeight: 0.5,
  },
  {
    id: "rocket",
    name: "Rocket",
    abbr: "Rkt",
    category: "Web Framework",
    color: "#d33847",
    description:
      "A Rust web framework focused on ease of use and type safety. It uses attributes on functions to define routes and checks a lot of your request handling at compile time.",
    highlights: [
      "Beginner-friendly Rust web apps",
      "Type-safe routing and forms",
      "Small web services in Rust",
    ],
    funFact:
      "For years Rocket required the nightly (experimental) version of Rust; version 0.5 finally let it run on stable Rust.",
    url: "https://rocket.rs",
    spawnWeight: 0.5,
  },
  {
    id: "ktor",
    name: "Ktor",
    abbr: "Ktor",
    category: "Web Framework",
    color: "#7f52ff",
    description:
      "A Kotlin framework for building asynchronous servers and HTTP clients. It uses Kotlin coroutines to handle many requests efficiently with simple-looking code.",
    highlights: [
      "Kotlin backend services",
      "HTTP clients in mobile apps",
      "Lightweight microservices",
    ],
    funFact:
      "Ktor is built by JetBrains, the same company that created the Kotlin language and IntelliJ IDEA.",
    url: "https://ktor.io",
    spawnWeight: 0.5,
  },
  {
    id: "vapor",
    name: "Vapor",
    abbr: "Vpr",
    category: "Web Framework",
    color: "#8e44ad",
    description:
      "A web framework for writing servers in Swift. It lets iOS developers use the same language on the backend for APIs, websites and real-time apps.",
    highlights: [
      "Server-side Swift APIs",
      "Backends for iOS apps",
      "Sharing Swift code across client and server",
    ],
    funFact:
      "Vapor is built on SwiftNIO, an open-source, event-driven networking library released by Apple.",
    url: "https://vapor.codes",
    spawnWeight: 0.5,
  },
  {
    id: "hapijs",
    name: "Hapi.js",
    abbr: "Hapi",
    category: "Web Framework",
    color: "#f7a41d",
    description:
      "A configuration-focused framework for building web servers and APIs in Node.js. It puts emphasis on security, input validation and a strong plugin system.",
    highlights: [
      "Secure Node.js APIs",
      "Large apps with plugin architecture",
      "Configuration-driven routing",
    ],
    funFact:
      "Hapi was created at Walmart Labs to help handle Walmart’s huge Black Friday traffic, which is quite the stress test for a young framework.",
    url: "https://hapi.dev",
    spawnWeight: 0.5,
  },
  {
    id: "loopback",
    name: "LoopBack",
    abbr: "LB",
    category: "API Framework",
    color: "#3f5dff",
    description:
      "A Node.js and TypeScript framework for quickly building APIs connected to databases and other services. It can generate REST endpoints from your data models.",
    highlights: [
      "Model-driven REST APIs",
      "Connecting APIs to many databases",
      "OpenAPI-described services",
    ],
    funFact:
      "LoopBack was created by StrongLoop, a Node.js company that IBM acquired in 2015, and IBM has continued to sponsor it.",
    url: "https://loopback.io",
    spawnWeight: 0.5,
  },
  {
    id: "strapi",
    name: "Strapi",
    abbr: "Stp",
    category: "Headless CMS",
    color: "#4945ff",
    description:
      "An open-source headless CMS built with Node.js. You define content types in an admin panel and Strapi gives you REST or GraphQL APIs to fetch that content from any frontend.",
    highlights: [
      "Content for websites and apps",
      "Instant REST and GraphQL APIs",
      "Pairing with React or Next.js frontends",
    ],
    funFact:
      "\"Headless\" means Strapi has no built-in website front end — it’s all body and no head, serving content to whatever front end you attach.",
    url: "https://strapi.io",
  },
  {
    id: "directus",
    name: "Directus",
    abbr: "Dir",
    category: "Headless CMS",
    color: "#6644ff",
    description:
      "A tool that wraps any SQL database with instant REST and GraphQL APIs plus a friendly admin app. Non-developers can manage data while developers get clean APIs.",
    highlights: [
      "Admin panels for existing databases",
      "Headless content management",
      "Instant APIs over SQL",
    ],
    funFact:
      "Directus mirrors your database schema as-is instead of hiding data in its own format, so you could remove Directus and your database would still work normally.",
    url: "https://directus.io",
    spawnWeight: 0.5,
  },
  {
    id: "payload-cms",
    name: "Payload CMS",
    abbr: "PL",
    category: "Headless CMS",
    color: "#1fb6ff",
    description:
      "A TypeScript-first headless CMS and application framework. You define your content in code, and Payload generates an admin panel, database layer and APIs for it.",
    highlights: [
      "Content-heavy Next.js websites",
      "Code-defined content models",
      "Custom admin panels",
    ],
    funFact:
      "Since version 3.0, Payload can be installed directly inside a Next.js app, so your CMS and website can live together in one codebase.",
    url: "https://payloadcms.com",
    spawnWeight: 0.5,
  },
  {
    id: "keystonejs",
    name: "KeystoneJS",
    abbr: "KS",
    category: "Headless CMS",
    color: "#2684ff",
    description:
      "A Node.js headless CMS and backend framework. You describe your data schema in code, and Keystone builds a GraphQL API and an admin interface for you.",
    highlights: [
      "GraphQL backends from a schema",
      "Content management for apps",
      "Custom admin UIs",
    ],
    funFact:
      "Keystone generates a full GraphQL API from your schema, letting front ends ask for exactly the fields they need in a single request.",
    url: "https://keystonejs.com",
    spawnWeight: 0.5,
  },
  {
    id: "wordpress",
    name: "WordPress",
    abbr: "WP",
    category: "Content Management",
    color: "#21759b",
    description:
      "The world’s most popular content management system, written in PHP. It lets people build blogs and websites with themes and plugins, often without writing code.",
    highlights: [
      "Blogs and business websites",
      "Online stores with WooCommerce",
      "Thousands of themes and plugins",
    ],
    funFact:
      "WordPress powers over 40% of all websites on the internet. It began in 2003 as a fork of an earlier blogging tool called b2/cafelog.",
    url: "https://wordpress.org",
  },
  {
    id: "drupal",
    name: "Drupal",
    abbr: "Dru",
    category: "Content Management",
    color: "#0678be",
    description:
      "A powerful open-source content management system written in PHP. It is known for flexibility and security, and it powers many large government, university and enterprise sites.",
    highlights: [
      "Large government and university sites",
      "Complex content structures",
      "Multilingual websites",
    ],
    funFact:
      "Drupal’s name comes from the Dutch word \"druppel\", meaning \"drop\" — founder Dries Buytaert meant to register dorp.org (\"village\") but made a typo and liked \"drop\" better.",
    url: "https://www.drupal.org",
  },
  {
    id: "joomla",
    name: "Joomla",
    abbr: "J!",
    category: "Content Management",
    color: "#5091cd",
    description:
      "A free, open-source content management system written in PHP. It sits between WordPress and Drupal in complexity and is used for websites, portals and online communities.",
    highlights: [
      "Community and membership sites",
      "Company and portal websites",
      "Multilingual sites out of the box",
    ],
    funFact:
      "Joomla is an English spelling of the Swahili word \"jumla\", meaning \"all together\". It started in 2005 as a fork of another CMS called Mambo.",
    url: "https://www.joomla.org",
    spawnWeight: 0.5,
  },
  {
    id: "rest-api",
    name: "REST API",
    abbr: "REST",
    category: "API Style",
    color: "#1e88e5",
    description:
      "A common style for designing web APIs where data is organized as resources with URLs. Clients use HTTP methods like GET, POST, PUT and DELETE to read and change those resources.",
    highlights: [
      "Web and mobile app backends",
      "Public APIs from companies",
      "CRUD operations over HTTP",
    ],
    funFact:
      "REST stands for Representational State Transfer and was defined by Roy Fielding in his 2000 PhD dissertation. He was also one of the main authors of the HTTP specification.",
    url: "https://en.wikipedia.org/wiki/REST",
  },
  {
    id: "grpc",
    name: "gRPC",
    abbr: "gRPC",
    category: "RPC Framework",
    color: "#244c5a",
    description:
      "A high-performance framework for calling functions on another computer as if they were local. It uses HTTP/2 and Protocol Buffers to send compact binary messages.",
    highlights: [
      "Communication between microservices",
      "Low-latency internal APIs",
      "Streaming data in both directions",
    ],
    funFact:
      "Officially, the \"g\" in gRPC means something different in every release — past versions have declared it stands for words like \"good\", \"green\" and \"gandalf\".",
    url: "https://grpc.io",
  },
  {
    id: "soap",
    name: "SOAP",
    abbr: "SOAP",
    category: "Messaging Protocol",
    color: "#7b4fb3",
    description:
      "An older protocol for exchanging structured messages between systems using XML. It has strict rules and contracts, which is why it still appears in banking, enterprise and government systems.",
    highlights: [
      "Legacy enterprise integrations",
      "Banking and payment systems",
      "Strictly defined WSDL contracts",
    ],
    funFact:
      "SOAP originally stood for Simple Object Access Protocol, but the acronym was dropped in version 1.2 — now it’s just \"SOAP\", which is good, since few people found it simple.",
    url: "https://en.wikipedia.org/wiki/SOAP",
  },
  {
    id: "json-rpc",
    name: "JSON-RPC",
    abbr: "JRPC",
    category: "RPC Protocol",
    color: "#f5a623",
    description:
      "A simple protocol for calling a function on a server by sending a small JSON message with the method name and parameters. The server replies with a JSON result or error.",
    highlights: [
      "Talking to Ethereum nodes",
      "Language Server Protocol in editors",
      "Lightweight remote procedure calls",
    ],
    funFact:
      "Your code editor probably uses JSON-RPC right now: the Language Server Protocol, which powers autocomplete in VS Code and many other editors, is built on it.",
    url: "https://www.jsonrpc.org",
    spawnWeight: 0.5,
  },
  {
    id: "xml-rpc",
    name: "XML-RPC",
    abbr: "XRPC",
    category: "RPC Protocol",
    color: "#e8742c",
    description:
      "An early protocol for calling functions on a remote server by sending XML over HTTP. It is simple and old, and it inspired the more complex SOAP protocol.",
    highlights: [
      "Legacy remote procedure calls",
      "Older blog publishing tools",
      "WordPress’s xmlrpc.php endpoint",
    ],
    funFact:
      "XML-RPC appeared in 1998 and later evolved into SOAP. WordPress still ships an xmlrpc.php file for it, which security guides often recommend disabling.",
    url: "https://en.wikipedia.org/wiki/XML-RPC",
    spawnWeight: 0.5,
  },
  {
    id: "webhooks",
    name: "Webhooks",
    abbr: "Hook",
    category: "API Pattern",
    color: "#c73a63",
    description:
      "A way for one app to notify another when something happens by sending an HTTP request to a URL you provide. Instead of asking repeatedly for updates, you get told automatically.",
    highlights: [
      "Payment notifications from Stripe",
      "Triggering CI builds on GitHub pushes",
      "Chat bot and automation alerts",
    ],
    funFact:
      "Webhooks are sometimes called a \"reverse API\": instead of your code calling the service, the service calls your code when something happens.",
    url: "https://en.wikipedia.org/wiki/Webhook",
  },
  {
    id: "server-sent-events",
    name: "Server-Sent Events",
    abbr: "SSE",
    category: "Web Streaming API",
    color: "#00897b",
    description:
      "A simple web standard that lets a server push a stream of updates to the browser over one long-lived HTTP connection. Data flows one way, from server to client.",
    highlights: [
      "Live notifications and feeds",
      "Streaming AI chat responses",
      "Real-time dashboards",
    ],
    funFact:
      "When an AI chatbot types its answer word by word, it’s often using Server-Sent Events — many AI APIs stream their tokens to clients this way.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Server-sent_events",
  },
  {
    id: "openapi",
    name: "OpenAPI",
    abbr: "OAS",
    category: "API Specification",
    color: "#6ba539",
    description:
      "A standard format, written in YAML or JSON, for describing REST APIs: their endpoints, inputs and outputs. Tools can read it to generate docs, client code and tests.",
    highlights: [
      "Interactive API documentation",
      "Generating client SDKs",
      "Designing APIs before coding",
    ],
    funFact:
      "OpenAPI used to be called the Swagger Specification. In 2015 it was donated to the Linux Foundation and renamed, while \"Swagger\" lives on as the name of a set of tools.",
    url: "https://www.openapis.org",
  },
  {
    id: "asyncapi",
    name: "AsyncAPI",
    abbr: "Async",
    category: "API Specification",
    color: "#8851fb",
    description:
      "A specification for describing event-driven and message-based APIs, like those using Kafka, MQTT or WebSockets. It does for messaging what OpenAPI does for REST.",
    highlights: [
      "Documenting Kafka and MQTT events",
      "Event-driven microservices",
      "Generating code from message specs",
    ],
    funFact:
      "AsyncAPI deliberately borrowed much of OpenAPI’s structure, so if you’ve read an OpenAPI file before, an AsyncAPI document will look surprisingly familiar.",
    url: "https://www.asyncapi.com",
    spawnWeight: 0.5,
  },
];

export default entries;
