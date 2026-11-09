import type { CatalogEntry } from "../types";

/** Cloud Computing */
const entries: CatalogEntry[] = [
  {
    id: "aws",
    name: "Amazon Web Services (AWS)",
    abbr: "AWS",
    category: "Cloud Platform",
    color: "#ff9900",
    description:
      "Amazon's cloud platform: you rent servers, storage, databases and hundreds of other services by the hour instead of buying your own hardware. It is the largest public cloud in the world.",
    highlights: [
      "Hosting apps on EC2 virtual servers",
      "Storing files in S3 buckets",
      "Running startups and huge enterprises alike",
    ],
    funFact:
      "AWS grew out of the infrastructure Amazon built for its own online store. S3, one of its first big services, launched in 2006 and helped kick off the modern cloud era.",
    url: "https://aws.amazon.com",
  },
  {
    id: "microsoft-azure",
    name: "Microsoft Azure",
    abbr: "Az",
    category: "Cloud Platform",
    color: "#0078d4",
    description:
      "Microsoft's cloud platform offering virtual machines, databases, AI services and more. It fits especially well with Windows, .NET and other Microsoft tools that many companies already use.",
    highlights: [
      "Enterprise apps built on .NET",
      "Hosting Windows and Linux VMs",
      "Azure OpenAI and other AI services",
    ],
    funFact:
      "Azure launched in 2010 under the name \"Windows Azure\" and was renamed \"Microsoft Azure\" in 2014, partly because it runs plenty of Linux, not just Windows.",
    url: "https://azure.microsoft.com",
  },
  {
    id: "gcp",
    name: "Google Cloud Platform (GCP)",
    abbr: "GCP",
    category: "Cloud Platform",
    color: "#4285f4",
    description:
      "Google's cloud platform, letting you run apps and store data on the same kind of infrastructure that powers Google Search and YouTube. It is known for data analytics, Kubernetes and AI tools.",
    highlights: [
      "Big data analysis with BigQuery",
      "Running containers on GKE",
      "Machine learning with Vertex AI",
    ],
    funFact:
      "Google App Engine, released in 2008, was Google's first cloud service. Kubernetes, now the industry standard for running containers, was also born at Google.",
    url: "https://cloud.google.com",
  },
  {
    id: "oracle-cloud",
    name: "Oracle Cloud",
    abbr: "OCI",
    category: "Cloud Platform",
    color: "#c74634",
    description:
      "Oracle's cloud platform (Oracle Cloud Infrastructure) for running servers, storage and especially Oracle databases. Many large businesses use it to move their existing Oracle systems to the cloud.",
    highlights: [
      "Hosting Oracle Database workloads",
      "Enterprise business software",
      "Generous always-free tier VMs",
    ],
    funFact:
      "The company name Oracle comes from a CIA-funded database project codenamed \"Oracle\" that Larry Ellison worked on before co-founding the company.",
    url: "https://www.oracle.com/cloud/",
    spawnWeight: 0.5,
  },
  {
    id: "ibm-cloud",
    name: "IBM Cloud",
    abbr: "IBM",
    category: "Cloud Platform",
    color: "#0f62fe",
    description:
      "IBM's cloud platform offering servers, storage, AI and mainframe-friendly services. It is popular with banks and large enterprises that need hybrid setups mixing their own data centers with the cloud.",
    highlights: [
      "Hybrid cloud for big enterprises",
      "Running Red Hat OpenShift",
      "Watson AI services",
    ],
    funFact:
      "Parts of IBM Cloud used to be sold under the name \"Bluemix\" before IBM folded everything into the single IBM Cloud brand in 2017.",
    url: "https://www.ibm.com/cloud",
    spawnWeight: 0.5,
  },
  {
    id: "alibaba-cloud",
    name: "Alibaba Cloud",
    abbr: "Ali",
    category: "Cloud Platform",
    color: "#ff6a00",
    description:
      "The cloud computing arm of Chinese tech giant Alibaba, providing servers, databases and AI services. It is the biggest cloud provider in China and serves many businesses across Asia.",
    highlights: [
      "Hosting apps for customers in China",
      "E-commerce scale infrastructure",
      "Qwen AI models and services",
    ],
    funFact:
      "In China it is known as Aliyun. It has to handle the gigantic traffic spikes of Singles' Day (November 11), one of the biggest online shopping events on Earth.",
    url: "https://www.alibabacloud.com",
    spawnWeight: 0.5,
  },
  {
    id: "digitalocean",
    name: "DigitalOcean",
    abbr: "DO",
    category: "Cloud Hosting",
    color: "#0080ff",
    description:
      "A developer-friendly cloud provider known for simple pricing and an easy dashboard. You can spin up a Linux server in under a minute, which makes it popular for side projects and small businesses.",
    highlights: [
      "Cheap Linux servers for side projects",
      "Managed databases and Kubernetes",
      "Huge library of beginner tutorials",
    ],
    funFact:
      "DigitalOcean calls its virtual servers \"Droplets\". Its community tutorials are so good that many developers read them even when they host somewhere else.",
    url: "https://www.digitalocean.com",
  },
  {
    id: "linode",
    name: "Linode",
    abbr: "Lin",
    category: "Cloud Hosting",
    color: "#02b159",
    description:
      "One of the original budget-friendly cloud hosting companies, offering Linux virtual servers with simple, predictable pricing. It is now part of Akamai and powers Akamai's cloud computing offering.",
    highlights: [
      "Affordable Linux VPS hosting",
      "Self-hosting apps and game servers",
      "Learning Linux server admin",
    ],
    funFact:
      "Linode was founded in 2003, years before \"the cloud\" was a buzzword. Its name is a mashup of \"Linux\" and \"node\".",
    url: "https://www.linode.com",
    spawnWeight: 0.5,
  },
  {
    id: "akamai-cloud",
    name: "Akamai Cloud",
    abbr: "AKM",
    category: "Cloud Platform",
    color: "#0096d6",
    description:
      "Akamai's cloud computing platform, built from Linode and combined with Akamai's huge global edge network. It lets you run servers and apps close to users all over the world.",
    highlights: [
      "Virtual servers spread across the globe",
      "Low-latency apps near users",
      "Pairing compute with a giant CDN",
    ],
    funFact:
      "Akamai was founded in 1998 by MIT researchers. The name comes from a Hawaiian word meaning \"smart\" or \"clever\".",
    url: "https://www.akamai.com",
    spawnWeight: 0.5,
  },
  {
    id: "hetzner-cloud",
    name: "Hetzner Cloud",
    abbr: "HZ",
    category: "Cloud Hosting",
    color: "#d50c2d",
    description:
      "A German hosting company's cloud service, famous for very low prices on virtual and dedicated servers. Developers love it for self-hosting apps without paying big-cloud bills.",
    highlights: [
      "Budget virtual servers in Europe",
      "Self-hosting apps and databases",
      "Dedicated servers for heavy work",
    ],
    funFact:
      "Hetzner runs a \"server auction\" where you can rent older dedicated machines at bargain prices — a favorite trick of developers hunting for cheap horsepower.",
    url: "https://www.hetzner.com/cloud",
    spawnWeight: 0.5,
  },
  {
    id: "vercel",
    name: "Vercel",
    abbr: "VCL",
    category: "Frontend Hosting",
    color: "#0070f3",
    description:
      "A hosting platform for frontend and full-stack web apps. You connect a Git repository and every push is automatically built and deployed, with preview links for each change.",
    highlights: [
      "Deploying Next.js apps",
      "Preview URLs for every pull request",
      "Serverless and edge functions",
    ],
    funFact:
      "Vercel used to be called ZEIT. It is also the company behind Next.js, the popular React framework.",
    url: "https://vercel.com",
  },
  {
    id: "netlify",
    name: "Netlify",
    abbr: "NTL",
    category: "Frontend Hosting",
    color: "#00c7b7",
    description:
      "A platform for building and hosting websites straight from a Git repository. It handles builds, a global CDN, forms and serverless functions so static and modern sites go live quickly.",
    highlights: [
      "Hosting static and Jamstack sites",
      "Deploy previews for pull requests",
      "Built-in forms and functions",
    ],
    funFact:
      "Netlify's co-founder Mathias Biilmann coined the term \"Jamstack\" (JavaScript, APIs, Markup) to describe sites built this way.",
    url: "https://www.netlify.com",
  },
  {
    id: "cloudflare-pages",
    name: "Cloudflare Pages",
    abbr: "CFP",
    category: "Frontend Hosting",
    color: "#f38020",
    description:
      "Cloudflare's service for hosting websites and frontend apps. Push to Git and your site is built and served from Cloudflare's worldwide network, so it loads fast everywhere.",
    highlights: [
      "Hosting static sites and SPAs",
      "Git-based automatic deploys",
      "Adding backend logic with Workers",
    ],
    funFact:
      "Cloudflare Pages' free plan doesn't charge for bandwidth, so a small site that suddenly goes viral won't surprise you with a huge bill.",
    url: "https://pages.cloudflare.com",
  },
  {
    id: "firebase-hosting",
    name: "Firebase Hosting",
    abbr: "FB",
    category: "Web Hosting",
    color: "#ffca28",
    description:
      "Google's hosting service for web apps, part of the Firebase platform. A single command deploys your site to a global CDN with HTTPS included, and it works neatly with Firebase auth and databases.",
    highlights: [
      "Hosting single-page web apps",
      "One-command deploys from the CLI",
      "Pairing with Firestore and Auth",
    ],
    funFact:
      "Firebase began as a chat startup called Envolve. Developers kept using its real-time sync for other things, so the founders pivoted — and Google bought it in 2014.",
    url: "https://firebase.google.com/docs/hosting",
  },
  {
    id: "github-pages",
    name: "GitHub Pages",
    abbr: "GHP",
    category: "Static Site Hosting",
    color: "#6e5494",
    description:
      "Free hosting for static websites served directly from a GitHub repository. Push HTML, CSS and JavaScript (or a static site generator's output) and it appears at a username.github.io address.",
    highlights: [
      "Personal portfolios and blogs",
      "Project documentation sites",
      "Free hosting for open source",
    ],
    funFact:
      "GitHub Pages has built-in support for Jekyll, a static site generator created by GitHub co-founder Tom Preston-Werner.",
    url: "https://pages.github.com",
  },
  {
    id: "render",
    name: "Render",
    abbr: "RND",
    category: "Cloud Hosting",
    color: "#46e3b7",
    description:
      "A cloud platform that runs web services, background workers, cron jobs and databases from your Git repo. It aims to make deploying a full app as easy as deploying a static site.",
    highlights: [
      "Deploying backend APIs from Git",
      "Managed Postgres databases",
      "Background workers and cron jobs",
    ],
    funFact:
      "Render became a popular landing spot for hobby developers after Heroku ended its free plans in 2022.",
    url: "https://render.com",
    spawnWeight: 0.5,
  },
  {
    id: "railway",
    name: "Railway",
    abbr: "RW",
    category: "Cloud Hosting",
    color: "#8b5cf6",
    description:
      "A deployment platform where you can launch apps, databases and services from a visual canvas or a Git repo. It handles servers and networking so you can focus on your code.",
    highlights: [
      "Quick deploys for side projects",
      "One-click Postgres, Redis and more",
      "Visual project canvas of services",
    ],
    funFact:
      "Railway shows your whole project as a canvas of connected boxes, so you can literally see your app, database and workers wired together.",
    url: "https://railway.com",
    spawnWeight: 0.5,
  },
  {
    id: "flyio",
    name: "Fly.io",
    abbr: "Fly",
    category: "Cloud Hosting",
    color: "#7b3be2",
    description:
      "A platform that runs your apps in lightweight virtual machines in data centers around the world, close to your users. You deploy a Docker image and Fly runs it in the regions you choose.",
    highlights: [
      "Running apps near users worldwide",
      "Deploying Docker images globally",
      "Low-latency multi-region apps",
    ],
    funFact:
      "Fly.io turns Docker images into Firecracker micro-VMs — the same virtualization technology Amazon built to power AWS Lambda.",
    url: "https://fly.io",
  },
  {
    id: "aws-lambda",
    name: "AWS Lambda",
    abbr: "λ",
    category: "Serverless Functions",
    color: "#ff9900",
    description:
      "Amazon's serverless compute service: you upload a function, and AWS runs it whenever an event happens, like an HTTP request or a file upload. You pay only for the time your code actually runs.",
    highlights: [
      "Backend APIs without managing servers",
      "Reacting to file uploads and events",
      "Scheduled jobs and automation",
    ],
    funFact:
      "Lambda launched in 2014 and helped popularize the word \"serverless\" — even though, of course, there are still servers; you just never see them.",
    url: "https://aws.amazon.com/lambda/",
  },
  {
    id: "cloudflare-workers",
    name: "Cloudflare Workers",
    abbr: "CFW",
    category: "Edge Functions",
    color: "#f38020",
    description:
      "Cloudflare's serverless platform that runs your JavaScript, TypeScript or WebAssembly code at hundreds of locations worldwide. Requests are handled close to the user, so responses are very fast.",
    highlights: [
      "APIs that run at the edge",
      "Rewriting requests and responses",
      "Full-stack apps with KV and D1",
    ],
    funFact:
      "Instead of containers, Workers run code in V8 isolates — the same engine sandboxing used by Chrome tabs — which makes cold starts nearly instant.",
    url: "https://workers.cloudflare.com",
  },
  {
    id: "google-cloud-functions",
    name: "Google Cloud Functions",
    abbr: "GCF",
    category: "Serverless Functions",
    color: "#4285f4",
    description:
      "Google Cloud's service for running small pieces of code in response to events like HTTP calls or database changes. Google handles the servers and scaling for you.",
    highlights: [
      "Lightweight HTTP endpoints",
      "Reacting to Cloud Storage events",
      "Gluing Google Cloud services together",
    ],
    funFact:
      "In 2024 Google renamed Cloud Functions to \"Cloud Run functions\", merging it with its Cloud Run container platform.",
    url: "https://cloud.google.com/functions",
    spawnWeight: 0.5,
  },
  {
    id: "azure-functions",
    name: "Azure Functions",
    abbr: "AzF",
    category: "Serverless Functions",
    color: "#0062ad",
    description:
      "Microsoft Azure's serverless service for running event-driven code in languages like C#, JavaScript and Python. Functions start when triggered by things like HTTP requests, timers or queue messages.",
    highlights: [
      "Event-driven backends on Azure",
      "Timer-based scheduled tasks",
      "Processing queue messages",
    ],
    funFact:
      "Its \"Durable Functions\" extension lets you write long-running, multi-step workflows as ordinary code, and it remembers where it left off between runs.",
    url: "https://learn.microsoft.com/en-us/azure/azure-functions/",
    spawnWeight: 0.5,
  },
  {
    id: "vercel-functions",
    name: "Vercel Functions",
    abbr: "VF",
    category: "Serverless Functions",
    color: "#0070f3",
    description:
      "Server-side code that Vercel runs on demand alongside your frontend. You write a function file in your project and Vercel turns it into an API endpoint that scales automatically.",
    highlights: [
      "API routes for Next.js apps",
      "Form handling and webhooks",
      "Server-side rendering on demand",
    ],
    funFact:
      "If you write API routes or server code in a Next.js app, Vercel automatically turns them into functions when you deploy — no extra setup needed.",
    url: "https://vercel.com/docs/functions",
    spawnWeight: 0.5,
  },
  {
    id: "deno-deploy",
    name: "Deno Deploy",
    abbr: "DD",
    category: "Edge Functions",
    color: "#12a172",
    description:
      "A serverless platform from the Deno team that runs JavaScript and TypeScript close to users around the world. You can deploy straight from GitHub with no build step for TypeScript.",
    highlights: [
      "Deploying TypeScript APIs globally",
      "Hosting Fresh and other Deno apps",
      "Quick prototypes and bots",
    ],
    funFact:
      "Deno was created by Ryan Dahl, the original creator of Node.js. The name \"Deno\" is simply \"Node\" with its letters rearranged.",
    url: "https://deno.com/deploy",
    spawnWeight: 0.5,
  },
  {
    id: "supabase-edge-functions",
    name: "Supabase Edge Functions",
    abbr: "SEF",
    category: "Edge Functions",
    color: "#3ecf8e",
    description:
      "Server-side TypeScript functions hosted by Supabase and run close to your users. They are handy for custom backend logic that sits next to your Supabase database and auth.",
    highlights: [
      "Webhooks and payment handlers",
      "Calling third-party APIs securely",
      "Custom logic for Supabase apps",
    ],
    funFact:
      "Supabase Edge Functions run on the Deno runtime, so you write them in TypeScript without needing a separate build or compile step.",
    url: "https://supabase.com/docs/guides/functions",
    spawnWeight: 0.5,
  },
  {
    id: "aws-cloudfront",
    name: "AWS CloudFront",
    abbr: "CF",
    category: "CDN",
    color: "#8c4fff",
    description:
      "Amazon's content delivery network. It keeps copies of your images, videos and web pages in locations around the world, so users download them from a server near them instead of far away.",
    highlights: [
      "Speeding up websites globally",
      "Serving files from S3 buckets",
      "Streaming video to users",
    ],
    funFact:
      "With Lambda@Edge and CloudFront Functions, you can run your own code inside CloudFront's edge locations to tweak requests before they reach your servers.",
    url: "https://aws.amazon.com/cloudfront/",
  },
  {
    id: "cloudflare-cdn",
    name: "Cloudflare CDN",
    abbr: "CF",
    category: "CDN",
    color: "#f38020",
    description:
      "Cloudflare's content delivery network, which sits in front of your website, caches content near visitors and blocks attacks. It is one of the most widely used CDNs on the internet.",
    highlights: [
      "Making websites load faster",
      "Protection from DDoS attacks",
      "Free HTTPS for any website",
    ],
    funFact:
      "Cloudflare's San Francisco office has a wall of lava lamps. A camera films them, and the unpredictable blobs help generate randomness for encryption.",
    url: "https://www.cloudflare.com",
  },
  {
    id: "azure-front-door",
    name: "Azure Front Door",
    abbr: "AFD",
    category: "CDN",
    color: "#0078d4",
    description:
      "Microsoft's global entry point for web apps that combines a CDN, load balancing and a web application firewall. It routes each user to the fastest healthy backend.",
    highlights: [
      "Global load balancing for web apps",
      "Caching content near users",
      "Web application firewall rules",
    ],
    funFact:
      "Front Door doesn't just cache files — it can automatically send users to a backup region if your main one goes down, keeping your app online.",
    url: "https://learn.microsoft.com/en-us/azure/frontdoor/",
    spawnWeight: 0.5,
  },
  {
    id: "google-cloud-cdn",
    name: "Google Cloud CDN",
    abbr: "GCDN",
    category: "CDN",
    color: "#4285f4",
    description:
      "Google Cloud's content delivery network that caches your content at Google's edge locations around the world. It works together with Google's load balancers to speed up websites and APIs.",
    highlights: [
      "Caching static assets globally",
      "Faster sites behind Google load balancers",
      "Serving media files at scale",
    ],
    funFact:
      "Google Cloud CDN uses the same private global network and edge locations that Google relies on to deliver Search and YouTube.",
    url: "https://cloud.google.com/cdn",
    spawnWeight: 0.5,
  },
  {
    id: "aws-vpc",
    name: "AWS VPC",
    abbr: "VPC",
    category: "Cloud Networking",
    color: "#8c4fff",
    description:
      "A Virtual Private Cloud is your own isolated private network inside AWS. You decide the IP ranges, subnets and firewall rules, controlling which servers can talk to each other and the internet.",
    highlights: [
      "Isolating servers in private subnets",
      "Controlling traffic with security groups",
      "Connecting AWS to office networks",
    ],
    funFact:
      "Every AWS account comes with a default VPC in each region, which is why you can launch a server right away without designing a network first.",
    url: "https://aws.amazon.com/vpc/",
    spawnWeight: 0.5,
  },
  {
    id: "cloudflare-tunnel",
    name: "Cloudflare Tunnel",
    abbr: "CFT",
    category: "Network Tunnel",
    color: "#f38020",
    description:
      "A way to put a server or a local app on the internet without opening any ports on your router. A small program connects outward to Cloudflare, and Cloudflare forwards visitors through that connection.",
    highlights: [
      "Exposing home servers safely",
      "Sharing a local dev app publicly",
      "Hiding your server's real IP address",
    ],
    funFact:
      "Cloudflare Tunnel was originally called Argo Tunnel. Because it only makes outbound connections, attackers can't find an open port on your server to poke at.",
    url: "https://www.cloudflare.com/products/tunnel/",
    spawnWeight: 0.5,
  },
  {
    id: "cloudflare-zero-trust",
    name: "Cloudflare Zero Trust",
    abbr: "ZT",
    category: "Network Security",
    color: "#f38020",
    description:
      "Cloudflare's suite for securing access to company apps and the internet. Instead of trusting anyone on the office network, it checks who you are and what device you use on every request.",
    highlights: [
      "Replacing old-school corporate VPNs",
      "Login checks before internal apps",
      "Filtering risky websites for teams",
    ],
    funFact:
      "The idea of \"Zero Trust\" — never trust, always verify — was popularized by Forrester analyst John Kindervag around 2010.",
    url: "https://www.cloudflare.com/zero-trust/",
    spawnWeight: 0.5,
  },
];

export default entries;
