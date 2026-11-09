import type { CatalogEntry } from "../types";

/** Programming Languages */
const entries: CatalogEntry[] = [
  {
    id: "c",
    name: "C",
    abbr: "C",
    category: "Programming Language",
    color: "#659ad2",
    description:
      "A small, fast, low-level language that gives you direct control over memory. Operating systems, databases and countless other languages are built on top of code written in C.",
    highlights: [
      "Operating systems like Linux",
      "Embedded devices and microcontrollers",
      "Language runtimes and interpreters",
    ],
    funFact:
      "C got its name simply because it came after an earlier Bell Labs language called B. Dennis Ritchie created it in the early 1970s to rewrite the Unix operating system.",
    url: "https://en.wikipedia.org/wiki/C_(programming_language)",
  },
  {
    id: "cpp",
    name: "C++",
    abbr: "C+",
    category: "Programming Language",
    color: "#00599c",
    description:
      "An extension of C that adds classes, templates and many more features while keeping C's speed. It is used where performance really matters, like games and browsers.",
    highlights: [
      "Game engines like Unreal Engine",
      "Web browsers and high-speed software",
      "Trading systems and simulations",
    ],
    funFact:
      "Bjarne Stroustrup originally called it \"C with Classes\". The name C++ is a programmer joke: ++ is C's operator for \"add one\", so C++ means \"one step beyond C\".",
    url: "https://isocpp.org",
  },
  {
    id: "csharp",
    name: "C#",
    abbr: "C#",
    category: "Programming Language",
    color: "#68217a",
    description:
      "A modern, object-oriented language from Microsoft that runs on .NET. It is friendly to read, strongly typed, and used for everything from web servers to video games.",
    highlights: [
      "Games made with the Unity engine",
      "Web APIs with ASP.NET Core",
      "Windows desktop applications",
    ],
    funFact:
      "The name comes from music: a \"sharp\" raises a note by a half step. Fans also point out that the # symbol looks like four plus signs stacked together — C++ plus more.",
    url: "https://learn.microsoft.com/en-us/dotnet/csharp/",
  },
  {
    id: "java",
    name: "Java",
    abbr: "Ja",
    category: "Programming Language",
    color: "#e76f00",
    description:
      "A popular object-oriented language whose programs run on the Java Virtual Machine, so the same code works on many operating systems. It powers huge business systems and Android apps.",
    highlights: [
      "Enterprise backends and banking systems",
      "Android app development",
      "Big data tools like Hadoop and Kafka",
    ],
    funFact:
      "Java was first called Oak, after a tree outside creator James Gosling's office. That name was already trademarked, so the team renamed it Java — after the coffee.",
    url: "https://dev.java",
  },
  {
    id: "ruby",
    name: "Ruby",
    abbr: "Rb",
    category: "Programming Language",
    color: "#cc342d",
    description:
      "A dynamic, expressive language designed to read almost like English. It became famous through the Ruby on Rails web framework, which made building web apps fast and fun.",
    highlights: [
      "Web apps with Ruby on Rails",
      "Scripting and automation tasks",
      "Developer tools like Homebrew",
    ],
    funFact:
      "Creator Yukihiro \"Matz\" Matsumoto has said he designed Ruby to make programmers happy. The gemstone name was partly a playful nod to Perl, another \"pearl\"-sounding language.",
    url: "https://www.ruby-lang.org",
  },
  {
    id: "swift",
    name: "Swift",
    abbr: "Sw",
    category: "Programming Language",
    color: "#f05138",
    description:
      "Apple's modern language for building apps on iPhone, iPad, Mac, Apple Watch and more. It is safe, fast, and much easier to read than the older Objective-C it replaced.",
    highlights: [
      "iOS and iPadOS apps",
      "macOS and watchOS apps",
      "Server-side code with Swift on Linux",
    ],
    funFact:
      "Chris Lattner began working on Swift as a personal side project in 2010. Apple surprised developers by unveiling it at WWDC in 2014, and it was open-sourced a year later.",
    url: "https://www.swift.org",
  },
  {
    id: "kotlin",
    name: "Kotlin",
    abbr: "Kt",
    category: "Programming Language",
    color: "#7f52ff",
    description:
      "A concise, modern language from JetBrains that runs on the JVM and works smoothly with Java code. It is now the preferred language for building Android apps.",
    highlights: [
      "Android app development",
      "Backend services with Spring or Ktor",
      "Sharing code across platforms",
    ],
    funFact:
      "Kotlin is named after Kotlin Island near St. Petersburg, where many of its JetBrains developers worked — a wink at Java, which is also the name of an island.",
    url: "https://kotlinlang.org",
  },
  {
    id: "dart",
    name: "Dart",
    abbr: "Da",
    category: "Programming Language",
    color: "#0175c2",
    description:
      "A language from Google built for creating user interfaces. It is best known as the language behind Flutter, which lets you build mobile, web and desktop apps from one codebase.",
    highlights: [
      "Cross-platform apps with Flutter",
      "Mobile apps for iOS and Android",
      "Web and desktop user interfaces",
    ],
    funFact:
      "Google originally hoped Dart would replace JavaScript and even built a special Chrome version, Dartium, that could run it directly. That plan was dropped — then Flutter made Dart popular.",
    url: "https://dart.dev",
  },
  {
    id: "objective-c",
    name: "Objective-C",
    abbr: "OC",
    category: "Programming Language",
    color: "#438eff",
    description:
      "An older language that adds object-oriented messaging to C. It was the main language for Apple apps for decades before Swift arrived, and lots of Apple code still uses it.",
    highlights: [
      "Legacy iOS and macOS apps",
      "Apple's Cocoa frameworks",
      "Mixing with Swift in older codebases",
    ],
    funFact:
      "Steve Jobs' company NeXT adopted Objective-C in the late 1980s. When Apple bought NeXT in 1997, the language came along and became the foundation of Mac OS X and later iOS.",
    url: "https://en.wikipedia.org/wiki/Objective-C",
  },
  {
    id: "scala",
    name: "Scala",
    abbr: "Sc",
    category: "Programming Language",
    color: "#dc322f",
    description:
      "A JVM language that blends object-oriented and functional programming. It is powerful and concise, and is widely used for data processing and large backend systems.",
    highlights: [
      "Big data processing with Apache Spark",
      "Concurrent backends with Akka",
      "Functional programming on the JVM",
    ],
    funFact:
      "Scala's name is short for \"scalable language\" — Martin Odersky designed it at EPFL in Switzerland to grow from tiny scripts to huge systems.",
    url: "https://www.scala-lang.org",
  },
  {
    id: "perl",
    name: "Perl",
    abbr: "Pe",
    category: "Programming Language",
    color: "#39457e",
    description:
      "A flexible scripting language famous for powerful text processing and regular expressions. It was once called the \"duct tape of the Internet\" for gluing systems together.",
    highlights: [
      "Text processing and log parsing",
      "System administration scripts",
      "Early web CGI scripts",
    ],
    funFact:
      "Larry Wall first wanted to call it \"Pearl\", but discovered a language named PEARL already existed — so he dropped the \"a\". Perl was released in 1987.",
    url: "https://www.perl.org",
  },
  {
    id: "lua",
    name: "Lua",
    abbr: "Lu",
    category: "Scripting Language",
    color: "#000080",
    description:
      "A tiny, fast scripting language designed to be embedded inside other programs. Games often use it so designers can write logic without touching the main engine code.",
    highlights: [
      "Game scripting and mods",
      "World of Warcraft add-ons",
      "Configuring tools like Neovim",
    ],
    funFact:
      "Lua was created in 1993 at PUC-Rio university in Brazil. Its name means \"moon\" in Portuguese — and its logo is a little moon orbiting a planet.",
    url: "https://www.lua.org",
  },
  {
    id: "r",
    name: "R",
    abbr: "R",
    category: "Statistical Language",
    color: "#276dc3",
    description:
      "A language built for statistics and data analysis. Researchers and data scientists use it to crunch numbers, run statistical tests and draw beautiful charts.",
    highlights: [
      "Statistical analysis and research",
      "Data visualization with ggplot2",
      "Bioinformatics and academia",
    ],
    funFact:
      "R was created by Ross Ihaka and Robert Gentleman in New Zealand. Its one-letter name comes from both creators' first initials and is a play on S, the language it was based on.",
    url: "https://www.r-project.org",
  },
  {
    id: "julia",
    name: "Julia",
    abbr: "Jl",
    category: "Programming Language",
    color: "#9558b2",
    description:
      "A high-performance language for scientific computing and numerical work. It is easy to write like Python but can run close to the speed of C.",
    highlights: [
      "Scientific and numerical computing",
      "Data science and machine learning",
      "Simulations and modeling",
    ],
    funFact:
      "Julia's creators announced it in a 2012 blog post titled \"Why We Created Julia\", explaining they wanted speed, simplicity and power all at once — because, as they put it, they were greedy.",
    url: "https://julialang.org",
    spawnWeight: 0.5,
  },
  {
    id: "elixir",
    name: "Elixir",
    abbr: "Ex",
    category: "Programming Language",
    color: "#4b275f",
    description:
      "A friendly functional language that runs on the Erlang virtual machine. It is great for apps that must handle many users at once and keep running even when parts fail.",
    highlights: [
      "Real-time web apps with Phoenix",
      "Chat and messaging systems",
      "Fault-tolerant backend services",
    ],
    funFact:
      "Elixir was created by José Valim, who was previously a member of the Ruby on Rails core team — which is why Elixir's syntax feels so friendly to Ruby developers.",
    url: "https://elixir-lang.org",
  },
  {
    id: "erlang",
    name: "Erlang",
    abbr: "Er",
    category: "Programming Language",
    color: "#a90533",
    description:
      "A functional language created at Ericsson for telephone systems that must never go down. It handles huge numbers of lightweight processes and recovers gracefully from crashes.",
    highlights: [
      "Telecom and phone switches",
      "Messaging backends like WhatsApp",
      "Highly available distributed systems",
    ],
    funFact:
      "Erlang is named after Danish mathematician Agner Krarup Erlang, a pioneer of telephone traffic theory — and it conveniently also reads as \"Ericsson Language\".",
    url: "https://www.erlang.org",
    spawnWeight: 0.5,
  },
  {
    id: "haskell",
    name: "Haskell",
    abbr: "Hs",
    category: "Functional Language",
    color: "#5e5086",
    description:
      "A purely functional language with a powerful type system. Functions have no hidden side effects, and values are only computed when they are actually needed (lazy evaluation).",
    highlights: [
      "Learning functional programming",
      "Compilers and language research",
      "Finance and high-assurance software",
    ],
    funFact:
      "Haskell is named after the logician Haskell Curry. The programming technique called \"currying\" — turning a multi-argument function into a chain of one-argument functions — is named after him too.",
    url: "https://www.haskell.org",
    spawnWeight: 0.5,
  },
  {
    id: "clojure",
    name: "Clojure",
    abbr: "Cl",
    category: "Functional Language",
    color: "#5881d8",
    description:
      "A modern dialect of Lisp that runs on the Java Virtual Machine. It focuses on immutable data and simple functions, with lots of parentheses in its syntax.",
    highlights: [
      "Data-heavy backend services",
      "Interactive REPL-driven development",
      "Web frontends with ClojureScript",
    ],
    funFact:
      "Creator Rich Hickey explained the name is a pun on \"closure\", with the C, L and J standing for C#, Lisp and Java — the languages that influenced it.",
    url: "https://clojure.org",
    spawnWeight: 0.5,
  },
  {
    id: "fsharp",
    name: "F#",
    abbr: "F#",
    category: "Functional Language",
    color: "#378bba",
    description:
      "A functional-first language for .NET that is concise and strongly typed. It lets you write clean, safe code while still using the whole .NET ecosystem.",
    highlights: [
      "Data analysis and scripting",
      "Financial and scientific modeling",
      "Functional programming on .NET",
    ],
    funFact:
      "F# was designed by Don Syme at Microsoft Research, who also helped design generics for .NET — a feature that C# developers use every day.",
    url: "https://fsharp.org",
    spawnWeight: 0.5,
  },
  {
    id: "ocaml",
    name: "OCaml",
    abbr: "ML",
    category: "Functional Language",
    color: "#ec6813",
    description:
      "A fast, practical functional language with a strong type system that catches many bugs before your code runs. It comes from the ML family of languages.",
    highlights: [
      "Compilers and programming tools",
      "Trading systems at Jane Street",
      "Formal verification tools",
    ],
    funFact:
      "The very first compiler for the Rust programming language was written in OCaml before Rust became able to compile itself.",
    url: "https://ocaml.org",
    spawnWeight: 0.5,
  },
  {
    id: "groovy",
    name: "Groovy",
    abbr: "Gr",
    category: "Scripting Language",
    color: "#4298b8",
    description:
      "A dynamic scripting language for the Java platform with a relaxed, Python-like feel. It works seamlessly with Java code and is popular for build scripts and automation.",
    highlights: [
      "Gradle build scripts",
      "Jenkins CI/CD pipelines",
      "Testing with the Spock framework",
    ],
    funFact:
      "If you have ever edited a Jenkinsfile or a build.gradle file, you have probably written Groovy without realizing it — both use it as their scripting language.",
    url: "https://groovy-lang.org",
    spawnWeight: 0.5,
  },
  {
    id: "zig",
    name: "Zig",
    abbr: "Zi",
    category: "Systems Language",
    color: "#f7a41d",
    description:
      "A modern systems language that aims to be a simpler, safer alternative to C. It has no hidden control flow or hidden memory allocations, so what you read is what runs.",
    highlights: [
      "Low-level systems programming",
      "Fast tools like the Bun runtime",
      "Cross-compiling C and C++ code",
    ],
    funFact:
      "The super-fast JavaScript runtime Bun is written in Zig. Zig's toolchain can also act as a drop-in C compiler that cross-compiles to many platforms.",
    url: "https://ziglang.org",
    spawnWeight: 0.5,
  },
  {
    id: "nim",
    name: "Nim",
    abbr: "Ni",
    category: "Programming Language",
    color: "#ffc200",
    description:
      "A compiled language with clean, Python-like syntax that produces fast native programs. It compiles to C, C++ or JavaScript, so it can run almost anywhere.",
    highlights: [
      "Fast command-line tools",
      "Systems and game programming",
      "Compiling to JavaScript for the web",
    ],
    funFact:
      "Nim was originally called Nimrod. It was renamed to the shorter Nim in 2014 when it was still a young language.",
    url: "https://nim-lang.org",
    spawnWeight: 0.5,
  },
  {
    id: "crystal",
    name: "Crystal",
    abbr: "Cr",
    category: "Programming Language",
    color: "#8b8bd9",
    description:
      "A compiled language with syntax inspired by Ruby. It checks types at compile time but figures most of them out for you, giving you Ruby-like code that runs much faster.",
    highlights: [
      "Fast web services",
      "Command-line tools",
      "Ruby developers wanting more speed",
    ],
    funFact:
      "Crystal's motto is \"Fast as C, slick as Ruby\" — it aims to keep the joy of writing Ruby while producing native, compiled programs.",
    url: "https://crystal-lang.org",
    spawnWeight: 0.5,
  },
  {
    id: "delphi",
    name: "Delphi",
    abbr: "De",
    category: "Language & IDE",
    color: "#ee1f35",
    description:
      "A development environment and Object Pascal language for quickly building desktop apps with drag-and-drop forms. It was hugely popular for Windows software in the 1990s and 2000s.",
    highlights: [
      "Windows desktop applications",
      "Database-driven business apps",
      "Rapid app development (RAD)",
    ],
    funFact:
      "The name comes from the Oracle of Delphi in Greek mythology: Delphi was designed to talk to databases, and the most famous database was Oracle.",
    url: "https://www.embarcadero.com/products/delphi",
    spawnWeight: 0.5,
  },
  {
    id: "assembly",
    name: "Assembly",
    abbr: "As",
    category: "Low-Level Language",
    color: "#6e4c13",
    description:
      "The lowest-level human-readable language, where each line maps almost directly to a single CPU instruction. Every type of processor has its own assembly language.",
    highlights: [
      "Bootloaders and OS kernels",
      "Performance-critical code paths",
      "Reverse engineering and security",
    ],
    funFact:
      "The 1999 hit game RollerCoaster Tycoon was written almost entirely in x86 assembly by a single developer, Chris Sawyer — which is partly why it ran so smoothly.",
    url: "https://en.wikipedia.org/wiki/Assembly_language",
  },
  {
    id: "lisp",
    name: "Lisp",
    abbr: "Li",
    category: "Programming Language",
    color: "#3fb68b",
    description:
      "One of the oldest programming languages, famous for its code made of nested parentheses. In Lisp, code and data share the same structure, which makes it amazingly flexible.",
    highlights: [
      "AI research and its history",
      "Extending the Emacs editor",
      "Studying programming language ideas",
    ],
    funFact:
      "Lisp was created by John McCarthy in 1958, and its name stands for \"LISt Processing\". Garbage collection — automatic memory cleanup — was invented for Lisp.",
    url: "https://en.wikipedia.org/wiki/Lisp_(programming_language)",
    spawnWeight: 0.5,
  },
  {
    id: "prolog",
    name: "Prolog",
    abbr: "Pl",
    category: "Logic Language",
    color: "#74283c",
    description:
      "A logic programming language where you describe facts and rules, then ask questions. Prolog works out the answers itself by searching through what it knows.",
    highlights: [
      "AI and expert systems",
      "Natural language processing",
      "Puzzles and rule-based reasoning",
    ],
    funFact:
      "Prolog was created in France in 1972, and its name comes from the French \"programmation en logique\" — programming in logic.",
    url: "https://en.wikipedia.org/wiki/Prolog",
    spawnWeight: 0.5,
  },
  {
    id: "fortran",
    name: "Fortran",
    abbr: "Fo",
    category: "Programming Language",
    color: "#734f96",
    description:
      "One of the very first high-level programming languages, built for math-heavy scientific work. It is still used today on supercomputers because it is extremely fast with numbers.",
    highlights: [
      "Weather and climate simulations",
      "Physics and engineering computing",
      "High-performance supercomputing",
    ],
    funFact:
      "Fortran was developed at IBM by a team led by John Backus and released in 1957. Its name is short for \"FORmula TRANslation\".",
    url: "https://fortran-lang.org",
  },
  {
    id: "cobol",
    name: "COBOL",
    abbr: "CO",
    category: "Programming Language",
    color: "#005ca5",
    description:
      "A wordy, English-like language designed in 1959 for business data processing. Huge amounts of banking, insurance and government software still run on COBOL today.",
    highlights: [
      "Banking and payment systems",
      "Government and insurance records",
      "Mainframe computers",
    ],
    funFact:
      "In 2020, several US states made public appeals for COBOL programmers because their decades-old unemployment systems were overwhelmed during the pandemic.",
    url: "https://en.wikipedia.org/wiki/COBOL",
  },
  {
    id: "ada",
    name: "Ada",
    abbr: "Ad",
    category: "Programming Language",
    color: "#02a3e0",
    description:
      "A strongly typed language designed for software that absolutely must not fail. It catches many errors at compile time and is trusted in aircraft, trains and defense systems.",
    highlights: [
      "Avionics and aerospace software",
      "Railway and defense systems",
      "Safety-critical embedded code",
    ],
    funFact:
      "Ada is named after Ada Lovelace, who in the 1840s wrote what is often called the first computer program, for Charles Babbage's never-built Analytical Engine.",
    url: "https://en.wikipedia.org/wiki/Ada_(programming_language)",
    spawnWeight: 0.5,
  },
  {
    id: "solidity",
    name: "Solidity",
    abbr: "So",
    category: "Smart Contract Language",
    color: "#627eea",
    description:
      "A language for writing smart contracts — programs that run on the Ethereum blockchain. Its syntax looks a bit like JavaScript, but once deployed, contracts are very hard to change.",
    highlights: [
      "Ethereum smart contracts",
      "Tokens and NFTs",
      "Decentralized finance (DeFi) apps",
    ],
    funFact:
      "In 2016, a bug in a smart contract called The DAO let an attacker drain millions of dollars' worth of Ether — a famous lesson that blockchain code bugs can be very expensive.",
    url: "https://soliditylang.org",
    spawnWeight: 0.5,
  },
  {
    id: "v",
    name: "V",
    abbr: "V",
    category: "Programming Language",
    color: "#5d87bf",
    description:
      "A simple, statically typed compiled language inspired by Go. It aims for fast compilation, small binaries and code that is easy to read and maintain.",
    highlights: [
      "Small, fast native programs",
      "Command-line tools",
      "Experimenting with new languages",
    ],
    funFact:
      "V is designed for very fast compilation — the project claims the V compiler can compile itself in under a second on a typical machine.",
    url: "https://vlang.io",
    spawnWeight: 0.5,
  },
  {
    id: "mojo",
    name: "Mojo",
    abbr: "Mo",
    category: "Programming Language",
    color: "#ff4f00",
    description:
      "A new language from Modular that looks like Python but is built for high performance on CPUs and GPUs. It is aimed at AI developers who need speed without leaving Python-style code.",
    highlights: [
      "High-performance AI code",
      "GPU and hardware programming",
      "Speeding up Python-style code",
    ],
    funFact:
      "Mojo was created by a team led by Chris Lattner, who also created Swift and LLVM — and Mojo source files can use a fire emoji 🔥 as their file extension.",
    url: "https://docs.modular.com/mojo/",
    spawnWeight: 0.5,
  },
  {
    id: "elm",
    name: "Elm",
    abbr: "EL",
    category: "Functional Language",
    color: "#60b5cc",
    description:
      "A purely functional programming language that compiles to JavaScript for building web apps. Its strict type system and friendly compiler errors help catch bugs before your code ever runs.",
    highlights: [
      "Reliable web frontends",
      "Friendly compiler error messages",
      "The Elm Architecture pattern",
    ],
    funFact:
      "Elm was created by Evan Czaplicki for his 2012 thesis, and its Model-Update-View pattern, The Elm Architecture, inspired the design of Redux.",
    url: "https://elm-lang.org",
    spawnWeight: 0.5,
  },
  {
    id: "bash",
    name: "Bash",
    abbr: "BA",
    category: "Shell Language",
    color: "#4eaa25",
    description:
      "The command-line shell and scripting language used by default on most Linux systems. You type commands to run programs, and can save them as scripts to automate tasks.",
    highlights: [
      "Automating tasks with scripts",
      "Running command-line tools",
      "Server and CI setup",
    ],
    funFact:
      "Bash stands for \"Bourne-Again SHell\", a pun on the older Bourne shell. Brian Fox wrote it for the GNU Project, releasing it in 1989.",
    url: "https://www.gnu.org/software/bash/",
  },
  {
    id: "gleam",
    name: "Gleam",
    abbr: "Gl",
    category: "Functional Language",
    color: "#ffaff3",
    description:
      "A friendly, statically typed functional language that runs on the Erlang virtual machine (BEAM) and can also compile to JavaScript. It aims for simple syntax and helpful errors.",
    highlights: [
      "Fault-tolerant BEAM services",
      "Type-safe functional code",
      "Compiling to JavaScript",
    ],
    funFact:
      "Gleam's mascot is Lucy, a pink star, and the language reached its 1.0 release in March 2024.",
    url: "https://gleam.run",
    spawnWeight: 0.5,
  },
  {
    id: "powershell",
    name: "PowerShell",
    abbr: "PS",
    category: "Shell & Scripting",
    color: "#5391fe",
    description:
      "A command-line shell and scripting language from Microsoft. Unlike classic shells that pass text, PowerShell commands pass structured objects to each other.",
    highlights: [
      "Automating Windows admin tasks",
      "Managing Azure and Microsoft 365",
      "Cross-platform scripting",
    ],
    funFact:
      "PowerShell began as Jeffrey Snover's \"Monad\" project, and in 2016 Microsoft open-sourced it and made it run on Linux and macOS.",
    url: "https://learn.microsoft.com/powershell/",
  },
  {
    id: "regular-expressions",
    name: "Regular Expressions",
    abbr: "RE",
    category: "Pattern Matching",
    color: "#e0234e",
    description:
      "A compact mini-language for describing text patterns, used to search, validate, extract or replace text. Supported in almost every programming language and editor.",
    highlights: [
      "Validating input like emails",
      "Search and replace in editors",
      "Extracting data from text",
    ],
    funFact:
      "The grep command got its name from the ed editor command g/re/p: globally search for a regular expression and print matching lines.",
    url: "https://en.wikipedia.org/wiki/Regular_expression",
  },
  {
    id: "sql",
    name: "SQL",
    abbr: "SQ",
    category: "Query Language",
    color: "#e38c00",
    description:
      "The standard language for working with relational databases. You write statements like SELECT, INSERT and UPDATE to read, add and change rows in tables.",
    highlights: [
      "Querying relational databases",
      "Reports and data analysis",
      "Creating and changing tables",
    ],
    funFact:
      "SQL was developed at IBM in the 1970s under the name SEQUEL, and was renamed because of a trademark conflict. That's why many people still pronounce it \"sequel\".",
    url: "https://en.wikipedia.org/wiki/SQL",
  },
];

export default entries;
