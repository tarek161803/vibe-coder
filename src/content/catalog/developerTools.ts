import type { CatalogEntry } from "../types";

/** Developer Tools and Software Engineering */
const entries: CatalogEntry[] = [
  {
    id: "visual-studio-code",
    name: "Visual Studio Code",
    abbr: "VS",
    category: "Code Editor",
    color: "#007acc",
    description:
      "Visual Studio Code is a free, lightweight code editor from Microsoft. Thousands of extensions turn it into a setup for almost any language, with debugging, Git and a built-in terminal.",
    highlights: [
      "Web and JavaScript development",
      "Huge extension marketplace",
      "Most popular editor in dev surveys",
    ],
    funFact:
      "VS Code is built on Electron, so the editor itself is essentially a web app made with HTML, CSS and TypeScript.",
    url: "https://code.visualstudio.com",
  },
  {
    id: "visual-studio",
    name: "Visual Studio",
    abbr: "VS",
    category: "IDE",
    color: "#5c2d91",
    description:
      "Visual Studio is Microsoft's full-featured integrated development environment, mainly for C#, .NET and C++. It bundles a powerful debugger, designers and profiling tools.",
    highlights: [
      ".NET and C# applications",
      "C++ and Windows desktop apps",
      "Game development with Unity and Unreal",
    ],
    funFact:
      "Despite the similar name, Visual Studio and VS Code are completely different programs. Visual Studio dates back to Visual Studio 97.",
    url: "https://visualstudio.microsoft.com",
  },
  {
    id: "intellij-idea",
    name: "IntelliJ IDEA",
    abbr: "IJ",
    category: "IDE",
    color: "#fe2857",
    description:
      "IntelliJ IDEA is JetBrains' IDE for Java and Kotlin. It is known for smart code completion, deep code analysis and safe refactoring tools.",
    highlights: [
      "Java and Kotlin development",
      "Spring and enterprise backends",
      "Powerful refactoring",
    ],
    funFact:
      "Google's Android Studio is built on top of the IntelliJ platform, so millions of Android devs use IntelliJ under the hood.",
    url: "https://www.jetbrains.com/idea/",
  },
  {
    id: "webstorm",
    name: "WebStorm",
    abbr: "WS",
    category: "IDE",
    color: "#07c3f2",
    description:
      "WebStorm is a JetBrains IDE made for JavaScript and TypeScript. It understands frameworks like React, Angular and Vue and offers rich refactoring and debugging.",
    highlights: [
      "JavaScript and TypeScript projects",
      "React, Vue and Angular apps",
      "Built-in testing and debugging",
    ],
    funFact:
      "In 2024 JetBrains made WebStorm free for non-commercial use, such as learning and hobby projects.",
    url: "https://www.jetbrains.com/webstorm/",
  },
  {
    id: "pycharm",
    name: "PyCharm",
    abbr: "PC",
    category: "IDE",
    color: "#21d789",
    description:
      "PyCharm is a JetBrains IDE for Python. It offers smart completion, a visual debugger, virtual environment management and support for Django and data science.",
    highlights: [
      "Python web development",
      "Data science and notebooks",
      "Debugging and testing Python",
    ],
    funFact:
      "JetBrains, the company behind PyCharm, also created the Kotlin language — named after Kotlin Island near St. Petersburg.",
    url: "https://www.jetbrains.com/pycharm/",
  },
  {
    id: "android-studio",
    name: "Android Studio",
    abbr: "AS",
    category: "IDE",
    color: "#3ddc84",
    description:
      "Android Studio is Google's official IDE for building Android apps. It includes a code editor, layout tools, an Android emulator and performance profilers.",
    highlights: [
      "Building Android apps",
      "Kotlin and Jetpack Compose",
      "Emulating phones on your computer",
    ],
    funFact:
      "Google announced Android Studio at Google I/O 2013; it replaced the older Eclipse-based Android tools as the official IDE.",
    url: "https://developer.android.com/studio",
  },
  {
    id: "xcode",
    name: "Xcode",
    abbr: "XC",
    category: "IDE",
    color: "#147efb",
    description:
      "Xcode is Apple's IDE for building apps for iPhone, iPad, Mac, Apple Watch and Apple TV. It includes Swift tools, simulators and Interface Builder.",
    highlights: [
      "iOS and macOS apps",
      "Swift and SwiftUI development",
      "Simulators and App Store uploads",
    ],
    funFact:
      "Xcode only runs on macOS — which is why building iPhone apps has traditionally required owning a Mac.",
    url: "https://developer.apple.com/xcode/",
  },
  {
    id: "eclipse",
    name: "Eclipse",
    abbr: "Ec",
    category: "IDE",
    color: "#f7941e",
    description:
      "Eclipse is a free, open-source IDE best known for Java development. Its plugin system made it a base for many specialized tools.",
    highlights: [
      "Java development",
      "Plugin-based custom IDEs",
      "Enterprise and embedded tooling",
    ],
    funFact:
      "Eclipse's yearly releases were once named after astronomy, mostly moons — like Callisto, Europa, Ganymede, Juno and Luna.",
    url: "https://eclipseide.org",
  },
  {
    id: "netbeans",
    name: "NetBeans",
    abbr: "NB",
    category: "IDE",
    color: "#1b6ac6",
    description:
      "Apache NetBeans is a free, open-source IDE for Java and other languages. It works well out of the box, with built-in tools for GUI design, Maven and debugging.",
    highlights: [
      "Java and Java EE development",
      "Swing GUI builder",
      "Teaching Java in schools",
    ],
    funFact:
      "NetBeans began in 1996 as a student project at Charles University in Prague, originally called Xelfi.",
    url: "https://netbeans.apache.org",
    spawnWeight: 0.5,
  },
  {
    id: "zed",
    name: "Zed",
    abbr: "Ze",
    category: "Code Editor",
    color: "#084ccf",
    description:
      "Zed is a fast, modern code editor written in Rust. It focuses on speed, real-time collaboration with teammates and built-in AI features.",
    highlights: [
      "High-performance editing",
      "Multiplayer pair programming",
      "AI-assisted coding",
    ],
    funFact:
      "Zed was created by some of the same people who built the Atom editor at GitHub — the project that gave birth to Electron, which now powers VS Code.",
    url: "https://zed.dev",
  },
  {
    id: "neovim",
    name: "Neovim",
    abbr: "Ne",
    category: "Code Editor",
    color: "#57a143",
    description:
      "Neovim is a modern fork of Vim, the keyboard-driven text editor. It adds Lua scripting, built-in LSP support and an active plugin ecosystem.",
    highlights: [
      "Keyboard-driven editing",
      "Configurable with Lua",
      "Terminal-based development setups",
    ],
    funFact:
      "Neovim launched in 2014 and was kick-started by a crowdfunding campaign to refactor and modernize Vim's codebase.",
    url: "https://neovim.io",
  },
  {
    id: "vim",
    name: "Vim",
    abbr: "Vi",
    category: "Text Editor",
    color: "#019733",
    description:
      "Vim is a powerful text editor that runs in the terminal and uses modes: one for typing and one for commands. Once learned, it lets you edit text very quickly without a mouse.",
    highlights: [
      "Editing files on servers over SSH",
      "Keyboard-only workflows",
      "Preinstalled on most Unix systems",
    ],
    funFact:
      "\"How do I exit Vim?\" is one of the most famous programming questions online. (Answer: press Esc, then type :q and Enter.)",
    url: "https://www.vim.org",
  },
  {
    id: "emacs",
    name: "Emacs",
    abbr: "EM",
    category: "Text Editor",
    color: "#7f5ab6",
    description:
      "Emacs is an extensible text editor programmable in Emacs Lisp. Users customize it into email clients, note-taking systems and full IDEs.",
    highlights: [
      "Highly customizable editing",
      "Org-mode notes and planning",
      "Lisp programming",
    ],
    funFact:
      "The name comes from \"Editor MACroS\". Fans joke Emacs is a great operating system lacking only a decent editor.",
    url: "https://www.gnu.org/software/emacs/",
  },
  {
    id: "sublime-text",
    name: "Sublime Text",
    abbr: "ST",
    category: "Code Editor",
    color: "#ff9800",
    description:
      "Sublime Text is a fast, lightweight code editor known for its speed and multiple cursors. It popularized features like the command palette and minimap.",
    highlights: [
      "Quick text and code editing",
      "Multiple cursors and selections",
      "Handling large files smoothly",
    ],
    funFact:
      "Sublime Text can be evaluated for free with no time limit — it just occasionally shows a popup asking you to buy a license.",
    url: "https://www.sublimetext.com",
  },
  {
    id: "github",
    name: "GitHub",
    abbr: "GH",
    category: "Code Hosting",
    color: "#6e5494",
    description:
      "GitHub is a website for hosting Git repositories and collaborating on code. Developers use it for pull requests, code review, issues and automated workflows.",
    highlights: [
      "Hosting open-source projects",
      "Pull requests and code review",
      "GitHub Actions CI/CD",
    ],
    funFact:
      "GitHub launched in 2008 and was bought by Microsoft in 2018 for $7.5 billion. Its mascot is the Octocat, a cat with octopus tentacles.",
    url: "https://github.com",
  },
  {
    id: "gitlab",
    name: "GitLab",
    abbr: "GL",
    category: "DevOps Platform",
    color: "#fc6d26",
    description:
      "GitLab is a platform for hosting Git repositories with built-in CI/CD, issue tracking and security scanning. It can be used in the cloud or self-hosted.",
    highlights: [
      "Self-hosted Git servers",
      "Built-in CI/CD pipelines",
      "All-in-one DevOps workflows",
    ],
    funFact:
      "GitLab is one of the largest all-remote companies in the world, with no headquarters office, and it publishes its company handbook publicly.",
    url: "https://about.gitlab.com",
  },
  {
    id: "bitbucket",
    name: "Bitbucket",
    abbr: "BB",
    category: "Code Hosting",
    color: "#0052cc",
    description:
      "Bitbucket is Atlassian's Git hosting service. It integrates tightly with Jira and offers pull requests and built-in CI/CD with Bitbucket Pipelines.",
    highlights: [
      "Teams already using Jira",
      "Private Git repositories",
      "Bitbucket Pipelines CI/CD",
    ],
    funFact:
      "Bitbucket originally hosted only Mercurial repositories. It later added Git, and dropped Mercurial support entirely in 2020.",
    url: "https://bitbucket.org",
  },
  {
    id: "mercurial",
    name: "Mercurial",
    abbr: "Hg",
    category: "Version Control",
    color: "#4a90d9",
    description:
      "Mercurial is a distributed version control system, similar to Git, known for a simpler and more consistent command set.",
    highlights: [
      "Tracking code history",
      "Large monorepos",
      "An alternative to Git",
    ],
    funFact:
      "Mercurial's command is \"hg\" — the chemical symbol for mercury. It was released in 2005, the same year as Git.",
    url: "https://www.mercurial-scm.org",
    spawnWeight: 0.5,
  },
  {
    id: "svn",
    name: "SVN",
    abbr: "SV",
    category: "Version Control",
    color: "#809cc9",
    description:
      "Apache Subversion (SVN) is a centralized version control system: there is one main server holding the history, and developers check out and commit to it.",
    highlights: [
      "Legacy enterprise codebases",
      "Centralized version control",
      "Versioning large binary files",
    ],
    funFact:
      "Subversion was started in 2000 with a clear goal: to be a better replacement for the older CVS version control system.",
    url: "https://subversion.apache.org",
  },
  {
    id: "perforce",
    name: "Perforce",
    abbr: "P4",
    category: "Version Control",
    color: "#00a1e0",
    description:
      "Perforce Helix Core is a centralized version control system built to handle huge repositories and massive binary files such as textures, audio and video.",
    highlights: [
      "Game development studios",
      "Huge binary assets",
      "Very large codebases",
    ],
    funFact:
      "Its command-line tool is called p4, and it's a favorite at game studios because Git struggles with gigabytes of art assets.",
    url: "https://www.perforce.com",
    spawnWeight: 0.5,
  },
  {
    id: "npm",
    name: "npm",
    abbr: "Np",
    category: "Package Manager",
    color: "#cb3837",
    description:
      "npm is the default package manager for Node.js and the world's largest registry of JavaScript packages. You use it to install libraries and run project scripts.",
    highlights: [
      "Installing JavaScript libraries",
      "Running scripts in package.json",
      "Publishing open-source packages",
    ],
    funFact:
      "In 2016 a developer unpublished a tiny 11-line package called left-pad, and thousands of projects across the internet suddenly failed to build.",
    url: "https://www.npmjs.com",
  },
  {
    id: "pnpm",
    name: "pnpm",
    abbr: "Pn",
    category: "Package Manager",
    color: "#f69220",
    description:
      "pnpm is a fast, disk-efficient JavaScript package manager. It stores each package version once on your computer and links it into projects instead of copying it.",
    highlights: [
      "Monorepos and workspaces",
      "Saving disk space",
      "Faster installs than npm",
    ],
    funFact:
      "pnpm stands for \"performant npm\". Thanks to its shared store, ten projects using the same library only keep one copy on disk.",
    url: "https://pnpm.io",
  },
  {
    id: "yarn",
    name: "Yarn",
    abbr: "Ya",
    category: "Package Manager",
    color: "#2c8ebb",
    description:
      "Yarn is a JavaScript package manager created as a faster, more reliable alternative to npm. It introduced lockfiles for repeatable installs and supports workspaces.",
    highlights: [
      "Installing JavaScript dependencies",
      "Monorepo workspaces",
      "Plug'n'Play installs",
    ],
    funFact:
      "Yarn was released in 2016 by Facebook together with Google and others, at a time when npm installs were slow and unpredictable.",
    url: "https://yarnpkg.com",
  },
  {
    id: "pip",
    name: "pip",
    abbr: "Pi",
    category: "Package Manager",
    color: "#3775a9",
    description:
      "pip is Python's standard package installer. It downloads libraries from the Python Package Index (PyPI) so you can use them in your projects.",
    highlights: [
      "Installing Python libraries",
      "requirements.txt files",
      "Comes bundled with Python",
    ],
    funFact:
      "pip is a recursive acronym often said to mean \"pip installs packages\".",
    url: "https://pip.pypa.io",
  },
  {
    id: "uv",
    name: "uv",
    abbr: "uv",
    category: "Package Manager",
    color: "#de5fe9",
    description:
      "uv is an extremely fast Python package and project manager written in Rust. It can replace pip, virtualenv and other tools, and even install Python versions for you.",
    highlights: [
      "Lightning-fast installs",
      "Managing Python versions",
      "Project and lockfile management",
    ],
    funFact:
      "uv is made by Astral, the same team behind Ruff, a Python linter also written in Rust and famous for its speed.",
    url: "https://docs.astral.sh/uv/",
  },
  {
    id: "poetry",
    name: "Poetry",
    abbr: "Po",
    category: "Package Manager",
    color: "#60a5fa",
    description:
      "Poetry is a Python tool for managing dependencies and packaging. It keeps everything in pyproject.toml and records exact versions in a lock file.",
    highlights: [
      "Dependency management",
      "Publishing packages to PyPI",
      "Reproducible environments",
    ],
    funFact:
      "Poetry helped popularize the pyproject.toml file as the single place to describe a Python project, instead of setup.py plus requirements.txt.",
    url: "https://python-poetry.org",
  },
  {
    id: "cargo",
    name: "Cargo",
    abbr: "Ca",
    category: "Package Manager",
    color: "#dea584",
    description:
      "Cargo is Rust's build tool and package manager. It compiles your code, downloads dependencies, runs tests and publishes libraries.",
    highlights: [
      "Building Rust projects",
      "Managing crates from crates.io",
      "Running tests and benchmarks",
    ],
    funFact:
      "Keeping with a shipping theme, Rust packages are called \"crates\", and they're published on crates.io for Cargo to carry.",
    url: "https://doc.rust-lang.org/cargo/",
  },
  {
    id: "maven",
    name: "Maven",
    abbr: "Ma",
    category: "Build Tool",
    color: "#c71a36",
    description:
      "Apache Maven is a build and dependency management tool for Java. It uses an XML file (pom.xml) to describe a project and a standard folder layout.",
    highlights: [
      "Building Java projects",
      "Managing Java dependencies",
      "Maven Central library repository",
    ],
    funFact:
      "\"Maven\" is a Yiddish word meaning \"accumulator of knowledge\" — or an expert.",
    url: "https://maven.apache.org",
  },
  {
    id: "gradle",
    name: "Gradle",
    abbr: "Gr",
    category: "Build Tool",
    color: "#1ba8cb",
    description:
      "Gradle is a flexible build tool for Java, Kotlin and Android. Builds are written as code in Groovy or Kotlin, and it speeds things up with caching.",
    highlights: [
      "Building Android apps",
      "Java and Kotlin projects",
      "Incremental, cached builds",
    ],
    funFact:
      "Gradle is the official build system for Android apps — every Android Studio project comes with Gradle files.",
    url: "https://gradle.org",
  },
  {
    id: "composer",
    name: "Composer",
    abbr: "Co",
    category: "Package Manager",
    color: "#885630",
    description:
      "Composer is the dependency manager for PHP. It installs libraries listed in composer.json and sets up autoloading so you can use them right away.",
    highlights: [
      "Laravel and Symfony projects",
      "Installing PHP packages",
      "Autoloading classes",
    ],
    funFact:
      "Before Composer arrived in 2012, PHP developers mostly used PEAR, which installed packages globally rather than per project.",
    url: "https://getcomposer.org",
  },
  {
    id: "cocoapods",
    name: "CocoaPods",
    abbr: "Co",
    category: "Package Manager",
    color: "#ee3322",
    description:
      "CocoaPods is a dependency manager for Swift and Objective-C projects. You list libraries in a Podfile and it wires them into your Xcode workspace.",
    highlights: [
      "iOS app dependencies",
      "Objective-C and Swift libraries",
      "Older iOS codebases",
    ],
    funFact:
      "Although it's used for iOS apps, CocoaPods itself is written in Ruby and installed as a Ruby gem.",
    url: "https://cocoapods.org",
    spawnWeight: 0.5,
  },
  {
    id: "swift-package-manager",
    name: "Swift Package Manager",
    abbr: "SP",
    category: "Package Manager",
    color: "#f05138",
    description:
      "Swift Package Manager is Apple's official tool for sharing and using Swift code. It is built into Xcode and the Swift toolchain, using a Package.swift file.",
    highlights: [
      "Adding libraries to iOS apps",
      "Building Swift packages",
      "Server-side Swift projects",
    ],
    funFact:
      "Its manifest file, Package.swift, is itself written in Swift — your package description is real code.",
    url: "https://www.swift.org/documentation/package-manager/",
  },
  {
    id: "nuget",
    name: "NuGet",
    abbr: "NU",
    category: "Package Manager",
    color: "#004880",
    description:
      "NuGet is the package manager for .NET. It lets C# and F# developers add libraries to their projects from the nuget.org gallery.",
    highlights: [
      "Adding .NET libraries",
      "Sharing C# packages",
      "Integrated in Visual Studio",
    ],
    funFact:
      "NuGet is pronounced \"New Get\", not like the candy \"nougat\".",
    url: "https://www.nuget.org",
  },
  {
    id: "go-modules",
    name: "Go Modules",
    abbr: "GM",
    category: "Dependency Management",
    color: "#00add8",
    description:
      "Go Modules is Go's built-in dependency system. A go.mod file lists your module's dependencies and versions, and go.sum verifies they haven't been tampered with.",
    highlights: [
      "Managing Go dependencies",
      "Versioned, reproducible builds",
      "go get and go mod tidy",
    ],
    funFact:
      "Modules arrived in Go 1.11 in 2018 and replaced the old GOPATH system, which forced all Go code into one folder.",
    url: "https://go.dev/ref/mod",
  },
  {
    id: "webpack",
    name: "Webpack",
    abbr: "WP",
    category: "Module Bundler",
    color: "#8dd6f9",
    description:
      "Webpack is a module bundler that takes your JavaScript, CSS and images and packages them into optimized files a browser can load efficiently.",
    highlights: [
      "Bundling front-end apps",
      "Code splitting and loaders",
      "Many legacy React setups",
    ],
    funFact:
      "Webpack treats everything as a module — with the right loader, you can import CSS files and images directly into JavaScript.",
    url: "https://webpack.js.org",
  },
  {
    id: "rollup",
    name: "Rollup",
    abbr: "Ro",
    category: "Module Bundler",
    color: "#ec4a3f",
    description:
      "Rollup is a JavaScript module bundler focused on ES modules. It produces small, clean bundles and is popular for building libraries.",
    highlights: [
      "Bundling JavaScript libraries",
      "Used inside Vite for builds",
      "Tree-shaking unused code",
    ],
    funFact:
      "Rollup was created by Rich Harris — who also created Svelte — and it popularized \"tree-shaking\" in JavaScript.",
    url: "https://rollupjs.org",
  },
  {
    id: "esbuild",
    name: "esbuild",
    abbr: "Es",
    category: "Module Bundler",
    color: "#ffcf00",
    description:
      "esbuild is an extremely fast JavaScript and TypeScript bundler and minifier written in Go. It often finishes builds many times faster than older tools.",
    highlights: [
      "Fast bundling and minifying",
      "Powers parts of Vite",
      "Transpiling TypeScript",
    ],
    funFact:
      "esbuild was written by Evan Wallace, a co-founder of Figma.",
    url: "https://esbuild.github.io",
  },
  {
    id: "turbopack",
    name: "Turbopack",
    abbr: "Tu",
    category: "Module Bundler",
    color: "#e8378b",
    description:
      "Turbopack is a Rust-based incremental bundler built by Vercel for Next.js. It only redoes work for what changed, making dev servers start and update quickly.",
    highlights: [
      "Next.js development builds",
      "Fast hot reloading",
      "Incremental computation",
    ],
    funFact:
      "Turbopack's development was led by Tobias Koppers, the original creator of webpack.",
    url: "https://nextjs.org/docs/app/api-reference/turbopack",
  },
  {
    id: "parcel",
    name: "Parcel",
    abbr: "Pa",
    category: "Module Bundler",
    color: "#e7a83f",
    description:
      "Parcel is a zero-configuration web bundler. Point it at an HTML file and it figures out your JavaScript, CSS and images automatically.",
    highlights: [
      "Quick prototypes",
      "Zero-config builds",
      "Small to medium web apps",
    ],
    funFact:
      "Parcel was created by Devon Govett and made a name for itself by needing no config file at all, back when webpack configs could get huge.",
    url: "https://parceljs.org",
  },
  {
    id: "swc",
    name: "SWC",
    abbr: "SW",
    category: "JS Compiler",
    color: "#f8c457",
    description:
      "SWC is a super-fast JavaScript and TypeScript compiler written in Rust. It does the same job as Babel — turning modern code into browser-friendly code — but much faster.",
    highlights: [
      "Compiling TypeScript and JSX",
      "Used by Next.js",
      "Replacing Babel for speed",
    ],
    funFact:
      "SWC stands for \"Speedy Web Compiler\" — and Next.js switched from Babel to SWC by default to make builds much faster.",
    url: "https://swc.rs",
  },
  {
    id: "babel",
    name: "Babel",
    abbr: "Ba",
    category: "JS Compiler",
    color: "#f9dc3e",
    description:
      "Babel is a JavaScript compiler that converts modern or experimental JavaScript into versions older browsers understand. It also transforms JSX for React.",
    highlights: [
      "Supporting older browsers",
      "Transforming JSX",
      "Trying future JS features early",
    ],
    funFact:
      "Babel was originally called \"6to5\" because it converted ES6 code into ES5. It was renamed as it grew beyond that.",
    url: "https://babeljs.io",
  },
  {
    id: "cmake",
    name: "CMake",
    abbr: "Cm",
    category: "Build System",
    color: "#064f8c",
    description:
      "CMake is a cross-platform tool that generates build files for C and C++ projects. You describe your project once and it creates Makefiles, Ninja files or Visual Studio projects.",
    highlights: [
      "Building C and C++ projects",
      "Cross-platform builds",
      "Used by many open-source libraries",
    ],
    funFact:
      "CMake was created by Kitware around 2000 to build the Insight Toolkit (ITK), a medical imaging library.",
    url: "https://cmake.org",
  },
  {
    id: "ninja",
    name: "Ninja",
    abbr: "NI",
    category: "Build System",
    color: "#9b59b6",
    description:
      "Ninja is a small build system focused purely on speed. Its build files are usually generated by tools like CMake or Meson rather than written by hand.",
    highlights: [
      "Fast incremental builds",
      "Backend for CMake and Meson",
      "Large C++ projects",
    ],
    funFact:
      "Ninja was written by Evan Martin at Google to speed up building the Chrome browser.",
    url: "https://ninja-build.org",
    spawnWeight: 0.5,
  },
  {
    id: "make",
    name: "Make",
    abbr: "MA",
    category: "Build Tool",
    color: "#a42e2b",
    description:
      "Make is a classic build tool that reads a Makefile describing how to build files and what each one depends on. It only rebuilds what has changed.",
    highlights: [
      "Compiling C programs",
      "Project task runners",
      "Unix and Linux builds",
    ],
    funFact:
      "Make was created by Stuart Feldman at Bell Labs in 1976. Its famous \"must use a tab\" rule stuck because changing it would have broken existing users.",
    url: "https://www.gnu.org/software/make/",
  },
  {
    id: "postman",
    name: "Postman",
    abbr: "PM",
    category: "API Client",
    color: "#ff6c37",
    description:
      "Postman is an app for building, sending and testing API requests without writing code. Teams use it to explore APIs, write tests and share collections.",
    highlights: [
      "Testing REST and GraphQL APIs",
      "Sharing API collections",
      "Automated API tests",
    ],
    funFact:
      "Postman started around 2012 as a simple Chrome extension side project by Abhinav Asthana before becoming a major company.",
    url: "https://www.postman.com",
  },
  {
    id: "insomnia",
    name: "Insomnia",
    abbr: "In",
    category: "API Client",
    color: "#4000bf",
    description:
      "Insomnia is an open-source desktop app for sending and debugging API requests. It supports REST, GraphQL, gRPC and WebSockets.",
    highlights: [
      "Debugging HTTP APIs",
      "GraphQL and gRPC testing",
      "API design workflows",
    ],
    funFact:
      "Insomnia was acquired by Kong, the API gateway company, in 2019.",
    url: "https://insomnia.rest",
    spawnWeight: 0.5,
  },
  {
    id: "bruno",
    name: "Bruno",
    abbr: "Br",
    category: "API Client",
    color: "#f4aa41",
    description:
      "Bruno is an open-source, offline-first API client. It saves your API requests as plain text files right in your project, so they can live in Git.",
    highlights: [
      "Testing APIs locally",
      "Versioning requests with Git",
      "Privacy-friendly, no cloud sync",
    ],
    funFact:
      "Bruno stores requests in its own simple text format called Bru, so reviewing an API change looks just like reviewing code.",
    url: "https://www.usebruno.com",
    spawnWeight: 0.5,
  },
  {
    id: "swagger",
    name: "Swagger",
    abbr: "Sw",
    category: "API Tooling",
    color: "#85ea2d",
    description:
      "Swagger is a set of tools for designing and documenting REST APIs using the OpenAPI specification, including the interactive Swagger UI docs page.",
    highlights: [
      "Interactive API documentation",
      "Generating client code",
      "Designing APIs first",
    ],
    funFact:
      "The Swagger specification was donated to the Linux Foundation in 2015 and renamed the OpenAPI Specification; the tools kept the Swagger name.",
    url: "https://swagger.io",
  },
  {
    id: "storybook",
    name: "Storybook",
    abbr: "SB",
    category: "UI Dev Tool",
    color: "#ff4785",
    description:
      "Storybook is a tool for building and testing UI components in isolation. Each component gets \"stories\" showing its different states, like a living catalog.",
    highlights: [
      "Design systems and component libraries",
      "Visual testing of UI",
      "Documenting components",
    ],
    funFact:
      "Storybook was started by a company called Kadira; when Kadira shut down, the open-source community stepped in and kept the project alive.",
    url: "https://storybook.js.org",
  },
  {
    id: "figma",
    name: "Figma",
    abbr: "Fi",
    category: "Design Tool",
    color: "#f24e1e",
    description:
      "Figma is a browser-based design tool where teams create app and website designs together in real time. Developers use it to inspect layouts, colors and spacing.",
    highlights: [
      "UI and UX design",
      "Real-time design collaboration",
      "Design-to-code handoff",
    ],
    funFact:
      "Adobe agreed to buy Figma for $20 billion in 2022, but the deal was abandoned in 2023 after regulators raised concerns.",
    url: "https://www.figma.com",
  },
  {
    id: "linear",
    name: "Linear",
    abbr: "Li",
    category: "Issue Tracker",
    color: "#5e6ad2",
    description:
      "Linear is a fast, streamlined issue tracker for software teams. It helps plan sprints (called cycles), track bugs and manage product roadmaps.",
    highlights: [
      "Tracking bugs and features",
      "Planning sprints and roadmaps",
      "Startup engineering teams",
    ],
    funFact:
      "Linear is known for being keyboard-first — almost every action has a shortcut, and Cmd/Ctrl+K opens a command menu for everything.",
    url: "https://linear.app",
  },
  {
    id: "jira",
    name: "Jira",
    abbr: "JI",
    category: "Issue Tracker",
    color: "#0052cc",
    description:
      "Jira is Atlassian's tool for tracking issues and managing software projects. Teams use it for agile boards, sprints and bug tracking.",
    highlights: [
      "Agile sprints and Scrum boards",
      "Bug and task tracking",
      "Enterprise project management",
    ],
    funFact:
      "The name Jira comes from \"Gojira\", the Japanese name for Godzilla — a playful nod to the competing bug tracker Bugzilla.",
    url: "https://www.atlassian.com/software/jira",
  },
  {
    id: "notion",
    name: "Notion",
    abbr: "N",
    category: "Productivity Tool",
    color: "#2eaadc",
    description:
      "Notion is an all-in-one workspace for notes, docs, wikis and simple databases. Dev teams use it for specs, meeting notes and internal documentation.",
    highlights: [
      "Team wikis and docs",
      "Project planning",
      "Personal notes and databases",
    ],
    funFact:
      "In 2015 Notion's tiny team moved to Kyoto, Japan, for a while to rebuild the product from scratch when the company was nearly out of money.",
    url: "https://www.notion.com",
  },
  {
    id: "docusaurus",
    name: "Docusaurus",
    abbr: "Do",
    category: "Docs Generator",
    color: "#3ecc5f",
    description:
      "Docusaurus is an open-source tool from Meta for building documentation websites. You write Markdown, and it generates a fast React-powered site with search and versioning.",
    highlights: [
      "Open-source project docs",
      "Versioned documentation",
      "Blogs and Markdown sites",
    ],
    funFact:
      "True to its name, Docusaurus has a friendly green dinosaur as its mascot.",
    url: "https://docusaurus.io",
  },
  {
    id: "backstage",
    name: "Backstage",
    abbr: "BS",
    category: "Developer Portal",
    color: "#36baa2",
    description:
      "Backstage is an open-source framework for building internal developer portals. It gives a company one place to find all its services, docs, owners and tools.",
    highlights: [
      "Software catalogs",
      "Internal developer platforms",
      "Project templates and docs",
    ],
    funFact:
      "Backstage was built inside Spotify to tame its huge number of microservices, then open-sourced in 2020 and donated to the CNCF.",
    url: "https://backstage.io",
    spawnWeight: 0.5,
  },
  {
    id: "github-copilot",
    name: "GitHub Copilot",
    abbr: "CP",
    category: "AI Coding Assistant",
    color: "#8957e5",
    description:
      "GitHub Copilot is an AI coding assistant that suggests code as you type and can chat about your project. It works inside editors like VS Code and JetBrains IDEs.",
    highlights: [
      "AI code completion",
      "Chatting about your codebase",
      "Agent mode for multi-file edits",
    ],
    funFact:
      "Copilot launched as a technical preview in 2021 and was originally powered by OpenAI Codex, a GPT-3 descendant trained on code.",
    url: "https://github.com/features/copilot",
  },
  {
    id: "cursor",
    name: "Cursor",
    abbr: "Cu",
    category: "AI Code Editor",
    color: "#4f9cf9",
    description:
      "Cursor is an AI-powered code editor that can autocomplete, answer questions about your code and make edits across many files at once.",
    highlights: [
      "AI pair programming",
      "Multi-file AI edits",
      "Vibe coding sessions",
    ],
    funFact:
      "Cursor is a fork of VS Code, so most VS Code extensions, themes and keyboard shortcuts work in it right away.",
    url: "https://cursor.com",
  },
  {
    id: "claude-code",
    name: "Claude Code",
    abbr: "CC",
    category: "AI Coding Agent",
    color: "#d97757",
    description:
      "Claude Code is Anthropic's agentic coding tool. It reads your codebase, edits files, runs commands and helps fix bugs or build features, working from your terminal or IDE.",
    highlights: [
      "Agentic coding in the terminal",
      "Multi-file refactors and fixes",
      "Automating dev workflows",
    ],
    funFact:
      "Claude Code launched as a research preview in February 2025, alongside Claude 3.7 Sonnet — and it lives in the terminal rather than in its own editor.",
    url: "https://www.claude.com/product/claude-code",
  },
  {
    id: "windsurf",
    name: "Windsurf",
    abbr: "Wi",
    category: "AI Code Editor",
    color: "#09b6a2",
    description:
      "Windsurf is an AI-native code editor with an agent called Cascade that can understand your project and make multi-step changes.",
    highlights: [
      "AI-assisted coding",
      "Agentic multi-file edits",
      "Code completion and chat",
    ],
    funFact:
      "Windsurf was made by Codeium, which renamed itself after the editor; in 2025 the company was acquired by Cognition, maker of the Devin AI agent.",
    url: "https://windsurf.com",
  },
  {
    id: "cline",
    name: "Cline",
    abbr: "Cl",
    category: "AI Coding Agent",
    color: "#7c3aed",
    description:
      "Cline is an open-source AI coding agent that runs as a VS Code extension. It can create and edit files and run terminal commands, asking for approval along the way.",
    highlights: [
      "Autonomous coding in VS Code",
      "Bring-your-own AI model",
      "Step-by-step approvals",
    ],
    funFact:
      "Cline was originally named \"Claude Dev\" before being renamed as it grew to support many different AI models.",
    url: "https://cline.bot",
    spawnWeight: 0.5,
  },
  {
    id: "aider",
    name: "Aider",
    abbr: "AI",
    category: "AI Coding Agent",
    color: "#14b014",
    description:
      "Aider is an open-source AI pair programmer that runs in your terminal. You chat with it about changes, and it edits your files and commits them to Git.",
    highlights: [
      "Terminal-based AI pair programming",
      "Automatic Git commits",
      "Works with many LLMs",
    ],
    funFact:
      "Aider's creator, Paul Gauthier, publishes LLM coding leaderboards that many people use to compare how well AI models edit code.",
    url: "https://aider.chat",
    spawnWeight: 0.5,
  },
  {
    id: "continue",
    name: "Continue",
    abbr: "Co",
    category: "AI Coding Assistant",
    color: "#f97316",
    description:
      "Continue is an open-source AI code assistant for VS Code and JetBrains IDEs. It offers chat, autocomplete and edits, and lets you plug in the AI model of your choice.",
    highlights: [
      "Open-source AI assistance",
      "Using local or custom models",
      "Custom assistants for teams",
    ],
    funFact:
      "Because you choose the model, Continue can run entirely with a local LLM — so your code never has to leave your machine.",
    url: "https://continue.dev",
    spawnWeight: 0.5,
  },
  {
    id: "openai-codex",
    name: "OpenAI Codex",
    abbr: "OC",
    category: "AI Coding Agent",
    color: "#10a37f",
    description:
      "OpenAI Codex is OpenAI's AI coding agent. It can write features, fix bugs and propose pull requests, working in the cloud, the terminal or your IDE.",
    highlights: [
      "Delegating coding tasks",
      "Codex CLI in the terminal",
      "Automated pull requests",
    ],
    funFact:
      "The name is reused: the original 2021 Codex was the code model that first powered GitHub Copilot, and OpenAI revived the name for its coding agent in 2025.",
    url: "https://openai.com/codex/",
  },
  {
    id: "amazon-q-developer",
    name: "Amazon Q Developer",
    abbr: "Q",
    category: "AI Coding Assistant",
    color: "#ff9900",
    description:
      "Amazon Q Developer is AWS's AI assistant for software development. It helps write code, explain AWS services, upgrade old codebases and troubleshoot cloud resources.",
    highlights: [
      "AI help for AWS development",
      "Code upgrades and transformations",
      "IDE and command-line assistance",
    ],
    funFact:
      "Amazon Q Developer grew out of Amazon CodeWhisperer, AWS's earlier AI code-completion tool, which was folded into it in 2024.",
    url: "https://aws.amazon.com/q/developer/",
    spawnWeight: 0.5,
  },
  {
    id: "turborepo",
    name: "Turborepo",
    abbr: "Tu",
    category: "Monorepo Build Tool",
    color: "#ef4444",
    description:
      "A build system for JavaScript and TypeScript monorepos. It understands how your packages depend on each other, runs tasks in parallel, and caches results so work that has not changed is never redone.",
    highlights: [
      "Speeding up monorepo builds",
      "Caching task results",
      "Running tasks in parallel",
    ],
    funFact:
      "Turborepo was created by Jared Palmer and acquired by Vercel in 2021. It was later ported from Go to Rust.",
    url: "https://turborepo.com",
  },
  {
    id: "oxc",
    name: "Oxc",
    abbr: "OX",
    category: "JS Tooling (Rust)",
    color: "#00b4d8",
    description:
      "A collection of very fast JavaScript and TypeScript tools written in Rust, including a parser, a linter called Oxlint, a resolver, a transformer and a minifier. It aims to speed up the JS toolchain.",
    highlights: [
      "Ultra-fast linting with Oxlint",
      "Parsing JS/TS for other tools",
      "Faster builds and transforms",
    ],
    funFact:
      "Oxc stands for the JavaScript Oxidation Compiler, a nod to Rust (oxidation), and its parser is used inside Rolldown, the Rust bundler built for Vite.",
    url: "https://oxc.rs",
    spawnWeight: 0.5,
  },
  {
    id: "nix",
    name: "Nix",
    abbr: "NI",
    category: "Package Manager",
    color: "#5277c3",
    description:
      "A package manager and build system that builds software in a purely functional way. Every package is stored under a unique hashed path, so different versions never clash and builds are reproducible.",
    highlights: [
      "Reproducible dev environments",
      "Side-by-side package versions",
      "Declarative system configs (NixOS)",
    ],
    funFact:
      "Nix began as Eelco Dolstra's PhD research; his 2006 thesis was titled \"The Purely Functional Software Deployment Model\".",
    url: "https://nixos.org",
    spawnWeight: 0.5,
  },
  {
    id: "httpie",
    name: "HTTPie",
    abbr: "Ht",
    category: "HTTP Client",
    color: "#73dc8c",
    description:
      "A command-line HTTP client designed to be friendly for humans. You type simple commands like http GET example.com and get nicely colored, formatted responses, which makes testing APIs pleasant.",
    highlights: [
      "Testing APIs from the terminal",
      "Readable, colored JSON output",
      "Debugging HTTP requests",
    ],
    funFact:
      "In 2022 HTTPie's maintainers accidentally made its GitHub repository private, which wiped out its roughly 54,000 stars, and they had to start counting again.",
    url: "https://httpie.io",
    spawnWeight: 0.5,
  },
  {
    id: "v0",
    name: "v0",
    abbr: "V0",
    category: "AI App Builder",
    color: "#7c3aed",
    description:
      "An AI tool from Vercel that turns text prompts into working web UI and apps. You describe what you want, it generates React code you can preview, tweak through chat, and deploy.",
    highlights: [
      "Generating UI from prompts",
      "Quick React prototypes",
      "Deploying straight to Vercel",
    ],
    funFact:
      "v0 typically generates components built with React, Tailwind CSS and shadcn/ui, so the code it produces can be dropped into a normal Next.js project.",
    url: "https://v0.app",
  },
  {
    id: "devin",
    name: "Devin",
    abbr: "De",
    category: "AI Coding Agent",
    color: "#22a06b",
    description:
      "An autonomous AI coding agent made by Cognition. You assign it a task, and it works in its own sandbox with a shell, editor and browser to plan, write code, run tests and open pull requests.",
    highlights: [
      "Delegating coding tasks",
      "Fixing bugs and writing tests",
      "Opening pull requests on its own",
    ],
    funFact:
      "Cognition announced Devin in March 2024, billing it as the first AI software engineer, and in 2025 the company acquired the Windsurf AI code editor.",
    url: "https://devin.ai",
    spawnWeight: 0.5,
  },
  {
    id: "nx",
    name: "Nx",
    abbr: "NX",
    category: "Monorepo Build System",
    color: "#143055",
    description:
      "A build system for monorepos. It understands how your projects depend on each other, only rebuilds or retests what changed, and can cache results to skip repeated work.",
    highlights: [
      "Managing large monorepos",
      "Cached, incremental builds",
      "Code generators for projects",
    ],
    funFact:
      "Nx was created by Nrwl, a company founded by former Google Angular team members Jeff Cross and Victor Savkin.",
    url: "https://nx.dev",
    spawnWeight: 0.5,
  },
  {
    id: "warp",
    name: "Warp",
    abbr: "WA",
    category: "Terminal App",
    color: "#01a4ff",
    description:
      "A modern terminal app that groups each command and its output into blocks, lets you edit commands like in a text editor, and includes built-in AI help for writing commands.",
    highlights: [
      "Everyday command-line work",
      "AI command suggestions",
      "Shareable command blocks",
    ],
    funFact:
      "Warp is written in Rust and draws its interface on the GPU, an approach more common in video games than in terminal apps.",
    url: "https://www.warp.dev",
    spawnWeight: 0.5,
  },
  {
    id: "wsl",
    name: "WSL",
    abbr: "WS",
    category: "Linux on Windows",
    color: "#0078d4",
    description:
      "Windows Subsystem for Linux lets you run a real Linux environment, like Ubuntu, directly on Windows, so you can use Linux tools and shells without a separate virtual machine setup.",
    highlights: [
      "Linux dev tools on Windows",
      "Running Bash and Linux CLIs",
      "Docker and web dev on Windows",
    ],
    funFact:
      "WSL 2 runs a genuine Linux kernel that Microsoft builds and ships itself, inside a lightweight virtual machine that starts in seconds.",
    url: "https://learn.microsoft.com/windows/wsl/",
  },
  {
    id: "mermaid",
    name: "Mermaid",
    abbr: "Me",
    category: "Diagrams as Code",
    color: "#ff3670",
    description:
      "A tool that turns simple text descriptions into diagrams such as flowcharts, sequence diagrams and Gantt charts, so you can keep diagrams in Markdown next to your code.",
    highlights: [
      "Flowcharts in Markdown",
      "Sequence and class diagrams",
      "Diagrams in docs and READMEs",
    ],
    funFact:
      "In 2022 GitHub added built-in Mermaid support, so a mermaid code block in a README or issue now renders as a real diagram.",
    url: "https://mermaid.js.org",
  },
  {
    id: "bolt-new",
    name: "Bolt.new",
    abbr: "Bo",
    category: "AI App Builder",
    color: "#1389fd",
    description:
      "An AI tool by StackBlitz that builds full-stack web apps from a chat prompt. It writes the code, installs packages and runs the app in your browser, ready to edit and deploy.",
    highlights: [
      "Prototyping apps from prompts",
      "In-browser full-stack dev",
      "Quick deploys of AI-built apps",
    ],
    funFact:
      "Bolt.new runs Node.js entirely inside your browser tab using StackBlitz's WebContainers, so there is no remote server running your dev environment.",
    url: "https://bolt.new",
    spawnWeight: 0.5,
  },
  {
    id: "json",
    name: "JSON",
    abbr: "JS",
    category: "Data Format",
    color: "#f5a623",
    description:
      "JavaScript Object Notation is a lightweight text format for data, made of objects, arrays, strings, numbers, booleans and null. It is the most common format for web APIs.",
    highlights: [
      "Web API requests and responses",
      "Configuration files",
      "Storing structured data",
    ],
    funFact:
      "JSON doesn't allow comments. Douglas Crockford removed them on purpose because people were using comments to hide parsing directives.",
    url: "https://en.wikipedia.org/wiki/JSON",
  },
  {
    id: "rspack",
    name: "Rspack",
    abbr: "Rs",
    category: "Bundler",
    color: "#f93920",
    description:
      "A fast JavaScript bundler written in Rust that is designed to be compatible with webpack's config and plugin ecosystem, so existing projects can switch with few changes.",
    highlights: [
      "Faster webpack-compatible builds",
      "Bundling large web apps",
      "Migrating off slow webpack setups",
    ],
    funFact:
      "Rspack was built by ByteDance's web infrastructure team to speed up builds for their own huge internal apps, then released as open source.",
    url: "https://rspack.dev",
    spawnWeight: 0.5,
  },
  {
    id: "tmux",
    name: "tmux",
    abbr: "TM",
    category: "Terminal Multiplexer",
    color: "#1bb91f",
    description:
      "A terminal multiplexer: it lets you split one terminal into many panes and windows, and keep sessions running after you disconnect so you can reattach later.",
    highlights: [
      "Split panes in one terminal",
      "Persistent sessions over SSH",
      "Managing many shells at once",
    ],
    funFact:
      "tmux was written by Nicholas Marriott and first released in 2007, and it ships as part of the OpenBSD base system.",
    url: "https://github.com/tmux/tmux/wiki",
  },
  {
    id: "oh-my-zsh",
    name: "Oh My Zsh",
    abbr: "OM",
    category: "Shell Framework",
    color: "#c5d93b",
    description:
      "A community framework for managing your Zsh shell configuration. It bundles hundreds of plugins and themes, giving you git shortcuts, autocompletion and a fancy prompt.",
    highlights: [
      "Zsh themes and prompts",
      "Plugins for git, Docker and more",
      "Handy shell aliases",
    ],
    funFact:
      "Robby Russell started Oh My Zsh in 2009 as a way to tidy up his own Zsh config, and it grew into one of the most-starred projects on GitHub.",
    url: "https://ohmyz.sh",
  },
  {
    id: "plantuml",
    name: "PlantUML",
    abbr: "Pl",
    category: "Diagrams as Code",
    color: "#a80036",
    description:
      "A tool that draws diagrams from plain text. You describe sequence, class, activity or other UML diagrams in a simple language and PlantUML renders them as images.",
    highlights: [
      "UML diagrams from text",
      "Diagrams versioned in Git",
      "Architecture docs",
    ],
    funFact:
      "PlantUML is written in Java and uses Graphviz behind the scenes to lay out many of its diagram types.",
    url: "https://plantuml.com",
    spawnWeight: 0.5,
  },
  {
    id: "lovable",
    name: "Lovable",
    abbr: "Lo",
    category: "AI App Builder",
    color: "#ff4f8b",
    description:
      "An AI app builder where you describe what you want in plain English and it generates a full-stack web app, which you can then refine by chatting, edit as code, and deploy.",
    highlights: [
      "Prototyping apps from prompts",
      "Vibe coding full-stack web apps",
      "Building MVPs quickly",
    ],
    funFact:
      "Lovable is based in Stockholm and grew out of GPT Engineer, an open-source project by co-founder Anton Osika.",
    url: "https://lovable.dev",
  },
  {
    id: "yaml",
    name: "YAML",
    abbr: "YA",
    category: "Data Format",
    color: "#cb171e",
    description:
      "A human-friendly text format for data and configuration that uses indentation instead of brackets. You'll find it in Docker Compose, Kubernetes, and CI pipeline files.",
    highlights: [
      "Config files",
      "Kubernetes and Docker Compose",
      "CI/CD pipeline definitions",
    ],
    funFact:
      "YAML originally stood for \"Yet Another Markup Language\" but was renamed to the recursive \"YAML Ain't Markup Language\" to stress that it is for data.",
    url: "https://yaml.org",
  },
  {
    id: "rolldown",
    name: "Rolldown",
    abbr: "RD",
    category: "JavaScript Bundler",
    color: "#ff5100",
    description:
      "A fast JavaScript bundler written in Rust. It aims to be compatible with Rollup's API and plugins while being much faster, and it is designed to power the Vite build tool.",
    highlights: [
      "Bundling JavaScript for production",
      "Powering Vite builds",
      "Fast Rollup-compatible builds",
    ],
    funFact:
      "Rolldown is developed by VoidZero, the company founded by Vue and Vite creator Evan You, as part of a plan to unify Vite's tooling in Rust.",
    url: "https://rolldown.rs",
    spawnWeight: 0.5,
  },
  {
    id: "homebrew",
    name: "Homebrew",
    abbr: "Ho",
    category: "Package Manager",
    color: "#fbb040",
    description:
      "A package manager for macOS and Linux. With one command like brew install git, it downloads, installs and updates command-line tools and apps for you.",
    highlights: [
      "Installing dev tools on a Mac",
      "Keeping CLI tools updated",
      "Installing desktop apps via casks",
    ],
    funFact:
      "Homebrew uses beer-themed names: package recipes are \"formulae\", installed packages live in the \"Cellar\", and extra repositories are called \"taps\".",
    url: "https://brew.sh",
  },
  {
    id: "curl",
    name: "cURL",
    abbr: "CU",
    category: "HTTP Command-line Tool",
    color: "#073551",
    description:
      "A command-line tool and library for transferring data with URLs. Developers use it to send HTTP requests, test APIs and download files right from the terminal.",
    highlights: [
      "Testing APIs from the terminal",
      "Downloading files in scripts",
      "Debugging HTTP requests",
    ],
    funFact:
      "cURL's creator Daniel Stenberg started the project in the 1990s from a small tool for fetching currency exchange rates for an IRC bot.",
    url: "https://curl.se",
  },
  {
    id: "ngrok",
    name: "ngrok",
    abbr: "Ng",
    category: "Tunneling Tool",
    color: "#1f1e37",
    description:
      "A tool that gives an app running on your own computer a public URL. It creates a secure tunnel from the internet to your localhost, so others or outside services can reach it.",
    highlights: [
      "Sharing a local dev server",
      "Testing webhooks locally",
      "Demoing work in progress",
    ],
    funFact:
      "ngrok was created by Alan Shreve, and its original 1.x version was released as open-source software on GitHub.",
    url: "https://ngrok.com",
  },
  {
    id: "replit",
    name: "Replit",
    abbr: "Re",
    category: "Online IDE",
    color: "#f26207",
    description:
      "A browser-based coding environment. You can write, run and host code in dozens of languages without installing anything, collaborate live, and use an AI agent to help build apps.",
    highlights: [
      "Coding in the browser",
      "Learning to program",
      "Quickly building and hosting apps",
    ],
    funFact:
      "Replit used to be called Repl.it, named after the REPL (read-eval-print loop), the interactive prompt where you type code and see results instantly.",
    url: "https://replit.com",
  },
  {
    id: "markdown",
    name: "Markdown",
    abbr: "MD",
    category: "Markup Language",
    color: "#083fa1",
    description:
      "A lightweight way to format plain text. Symbols like # for headings, * for lists and **bold** are easy to read as-is and can be converted to HTML.",
    highlights: [
      "README files and docs",
      "Writing blog posts",
      "Formatting chat and comments",
    ],
    funFact:
      "Markdown was created in 2004 by John Gruber, with Aaron Swartz contributing significantly to its syntax design.",
    url: "https://daringfireball.net/projects/markdown/",
  },
];

export default entries;
