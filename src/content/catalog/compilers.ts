import type { CatalogEntry } from "../types";

/** Compilers and Programming Language Engineering */
const entries: CatalogEntry[] = [
  {
    id: "gcc",
    name: "GCC",
    abbr: "GCC",
    category: "Compiler",
    color: "#ffcf00",
    description:
      "The GNU Compiler Collection: a free, open-source compiler for C, C++ and other languages. It turns source code into machine code for many processors.",
    highlights: [
      "Compiling the Linux kernel",
      "Default C/C++ compiler on Linux",
      "Embedded and cross-compilation",
    ],
    funFact:
      "Richard Stallman released GCC in 1987 as the \"GNU C Compiler\"; it was renamed the GNU Compiler Collection once it grew to support many languages.",
    url: "https://gcc.gnu.org/",
  },
  {
    id: "clang",
    name: "Clang",
    abbr: "CL",
    category: "Compiler",
    color: "#2a6ebb",
    description:
      "A C, C++ and Objective-C compiler front end built on LLVM. It's known for fast compiles and clear, helpful error messages.",
    highlights: [
      "Default compiler for Apple platforms",
      "Tools like clang-format and clang-tidy",
      "Building Chrome and Android code",
    ],
    funFact:
      "Apple started the Clang project in 2007, partly to get better error messages and IDE integration than GCC offered at the time.",
    url: "https://clang.llvm.org/",
  },
  {
    id: "llvm",
    name: "LLVM",
    abbr: "LLVM",
    category: "Compiler Infrastructure",
    color: "#a3242a",
    description:
      "A reusable toolkit for building compilers. Languages translate code into LLVM's intermediate form, and LLVM optimizes it and produces machine code for many CPUs.",
    highlights: [
      "Backend for Rust, Swift and Clang",
      "Code optimization passes",
      "Building new programming languages",
    ],
    funFact:
      "LLVM started as Chris Lattner's university research project around 2000. Its name once meant \"Low Level Virtual Machine\", but today it's officially not an acronym.",
    url: "https://llvm.org/",
  },
  {
    id: "v8",
    name: "V8",
    abbr: "V8",
    category: "JavaScript Engine",
    color: "#4285f4",
    description:
      "Google's open-source JavaScript and WebAssembly engine, which compiles JS into fast machine code. It powers Chrome, Node.js and Deno.",
    highlights: [
      "Running JavaScript in Chrome",
      "The engine inside Node.js",
      "JIT-compiling JS to machine code",
    ],
    funFact:
      "V8 is named after the powerful V8 car engine. Its speed when Chrome launched in 2008 helped make big JavaScript web apps practical.",
    url: "https://v8.dev/",
  },
  {
    id: "spidermonkey",
    name: "SpiderMonkey",
    abbr: "SM",
    category: "JavaScript Engine",
    color: "#ff7139",
    description:
      "Mozilla's JavaScript and WebAssembly engine, used in Firefox. It parses, interprets and JIT-compiles JS code so web pages can run it quickly.",
    highlights: [
      "Running JavaScript in Firefox",
      "Embedding JS in other apps",
      "WebAssembly execution",
    ],
    funFact:
      "SpiderMonkey is the very first JavaScript engine — it descends from the engine Brendan Eich wrote at Netscape in 1995 when he created JavaScript.",
    url: "https://spidermonkey.dev/",
    spawnWeight: 0.5,
  },
  {
    id: "java-hotspot",
    name: "Java HotSpot",
    abbr: "HS",
    category: "Java Virtual Machine",
    color: "#e76f00",
    description:
      "The main Java Virtual Machine in OpenJDK. It runs Java bytecode and uses JIT compilation to turn the most-used code into fast native machine code.",
    highlights: [
      "Running Java, Kotlin and Scala apps",
      "JIT compilation of hot code",
      "Garbage collectors like G1 and ZGC",
    ],
    funFact:
      "HotSpot is named after its trick: it watches the running program to find the \"hot spots\" — code that runs most often — and compiles those parts first.",
    url: "https://openjdk.org/groups/hotspot/",
    spawnWeight: 0.5,
  },
  {
    id: "graalvm",
    name: "GraalVM",
    abbr: "GVM",
    category: "Runtime & Compiler",
    color: "#e44c26",
    description:
      "A high-performance runtime from Oracle that can run Java and other languages, and can compile Java apps ahead of time into small, fast-starting native executables.",
    highlights: [
      "Native images for fast startup",
      "Serverless and microservice Java",
      "Running JS, Python and Ruby on the JVM",
    ],
    funFact:
      "GraalVM's JIT compiler, Graal, is itself written in Java — a Java compiler that compiles Java while running inside the JVM.",
    url: "https://www.graalvm.org/",
  },
  {
    id: "typescript-compiler",
    name: "TypeScript Compiler",
    abbr: "tsc",
    category: "Compiler",
    color: "#3178c6",
    description:
      "The official compiler for TypeScript, run as `tsc`. It checks your code's types and converts TypeScript into plain JavaScript that browsers and Node.js can run.",
    highlights: [
      "Type-checking TypeScript projects",
      "Emitting JavaScript and .d.ts files",
      "Powering editor autocomplete",
    ],
    funFact:
      "In 2025 Microsoft announced it was porting the TypeScript compiler from TypeScript to Go, aiming for roughly 10x faster builds.",
    url: "https://www.typescriptlang.org/docs/handbook/compiler-options.html",
  },
  {
    id: "rustc",
    name: "Rustc",
    abbr: "RSC",
    category: "Compiler",
    color: "#ce422b",
    description:
      "The official compiler for the Rust language. It checks ownership and borrowing rules to prevent memory bugs, then uses LLVM to produce fast machine code.",
    highlights: [
      "Compiling Rust via Cargo",
      "Borrow checking for memory safety",
      "Famously helpful error messages",
    ],
    funFact:
      "The first Rust compiler was written in OCaml. Rust later became self-hosting, meaning rustc is now written in Rust itself.",
    url: "https://doc.rust-lang.org/rustc/",
  },
  {
    id: "roslyn",
    name: "Roslyn",
    abbr: "RSLN",
    category: "Compiler Platform",
    color: "#512bd4",
    description:
      "The .NET Compiler Platform: the open-source C# and Visual Basic compilers, plus APIs that let tools read and analyze code the way the compiler does.",
    highlights: [
      "Compiling C# and VB.NET",
      "Code analyzers and quick fixes",
      "IntelliSense in Visual Studio",
    ],
    funFact:
      "With Roslyn, the C# compiler is written in C# itself. Microsoft open-sourced it in 2014, a notable step in its shift toward open source.",
    url: "https://github.com/dotnet/roslyn",
    spawnWeight: 0.5,
  },
  {
    id: "antlr",
    name: "ANTLR",
    abbr: "ANTLR",
    category: "Parser Generator",
    color: "#e53935",
    description:
      "A tool that generates parsers from a grammar file. You describe your language's rules, and ANTLR produces code that reads text and builds a parse tree.",
    highlights: [
      "Building DSLs and query languages",
      "Parsing config and data formats",
      "Targets Java, Python, JS, C# and more",
    ],
    funFact:
      "ANTLR stands for \"ANother Tool for Language Recognition\". Its creator, Terence Parr, has been developing it since 1989.",
    url: "https://www.antlr.org/",
    spawnWeight: 0.5,
  },
  {
    id: "tree-sitter",
    name: "Tree-sitter",
    abbr: "TS",
    category: "Parser Generator",
    color: "#4caf50",
    description:
      "A fast, incremental parsing library that updates a syntax tree as you type. Editors use it for accurate syntax highlighting and code navigation.",
    highlights: [
      "Syntax highlighting in Neovim and Zed",
      "Code navigation on GitHub",
      "Structural code search and edits",
    ],
    funFact:
      "Tree-sitter was created by Max Brunsfeld at GitHub, originally for the Atom editor, and it outlived Atom to power many modern editors.",
    url: "https://tree-sitter.github.io/tree-sitter/",
    spawnWeight: 0.5,
  },
  {
    id: "flex",
    name: "Flex",
    abbr: "FLEX",
    category: "Lexer Generator",
    color: "#f4b400",
    description:
      "The Fast Lexical Analyzer generator: you write patterns for the tokens in a language, and Flex generates C code that splits input text into those tokens.",
    highlights: [
      "Tokenizers for compilers",
      "Classic pair with Bison",
      "Parsing config files and logs",
    ],
    funFact:
      "Flex is a free rewrite of Lex, the original Unix lexer generator, which was co-written by Eric Schmidt — later the CEO of Google.",
    url: "https://github.com/westes/flex",
    spawnWeight: 0.5,
  },
  {
    id: "bison",
    name: "Bison",
    abbr: "BSN",
    category: "Parser Generator",
    color: "#8d6e63",
    description:
      "The GNU parser generator. Given a grammar, it produces C code for a parser that checks input follows the rules and runs actions as it recognizes them.",
    highlights: [
      "Parsers for compilers and interpreters",
      "Classic pair with Flex",
      "Yacc-compatible grammars",
    ],
    funFact:
      "Bison is a replacement for the Unix tool Yacc (\"Yet Another Compiler-Compiler\") — and the name is a pun, since a yak and a bison are both shaggy beasts.",
    url: "https://www.gnu.org/software/bison/",
    spawnWeight: 0.5,
  },
  {
    id: "llvm-mlir",
    name: "LLVM MLIR",
    abbr: "MLIR",
    category: "Compiler Infrastructure",
    color: "#c62828",
    description:
      "Multi-Level Intermediate Representation: a framework in the LLVM project for building compilers with many layers of IR, especially for AI and hardware accelerators.",
    highlights: [
      "Machine learning compilers",
      "Compiling for GPUs and TPUs",
      "Domain-specific language toolchains",
    ],
    funFact:
      "MLIR was started at Google by a team including Chris Lattner — the original creator of LLVM — and was later contributed to the LLVM project.",
    url: "https://mlir.llvm.org/",
    spawnWeight: 0.5,
  },
  {
    id: "lexical-analysis",
    name: "Lexical Analysis",
    abbr: "LEX",
    category: "Compiler Phase",
    color: "#0097a7",
    description:
      "The first step of a compiler: breaking raw source text into tokens like keywords, names, numbers and symbols, while skipping spaces and comments.",
    highlights: [
      "Tokenizers in compilers",
      "Syntax highlighting",
      "Parsing JSON and config files",
    ],
    funFact:
      "Lexers usually grab the longest token they can (\"maximal munch\"), which is why older C++ choked on `vector<vector<int>>` — it read `>>` as a shift operator.",
    url: "https://en.wikipedia.org/wiki/Lexical_analysis",
  },
  {
    id: "parsing",
    name: "Parsing",
    abbr: "PARSE",
    category: "Compiler Phase",
    color: "#5e35b1",
    description:
      "Reading a stream of tokens and checking it follows a language's grammar, building a tree structure that shows how the pieces fit together.",
    highlights: [
      "Compilers and interpreters",
      "Reading JSON, HTML and CSV",
      "Command-line argument handling",
    ],
    funFact:
      "The word \"parse\" comes from the Latin pars, as in \"part of speech\" — schoolchildren were \"parsing\" sentences long before computers did.",
    url: "https://en.wikipedia.org/wiki/Parsing",
  },
  {
    id: "abstract-syntax-trees",
    name: "Abstract Syntax Trees",
    abbr: "AST",
    category: "Compiler Concept",
    color: "#2e7d32",
    description:
      "A tree that represents the structure of code, like \"this is a function call with these arguments\". It drops details such as brackets and semicolons that don't change meaning.",
    highlights: [
      "Linters like ESLint",
      "Formatters like Prettier",
      "Codemods and refactoring tools",
    ],
    funFact:
      "Prettier formats code by parsing it into an AST and printing it from scratch — throwing away almost all of your original formatting along the way.",
    url: "https://en.wikipedia.org/wiki/Abstract_syntax_tree",
  },
  {
    id: "intermediate-representation",
    name: "Intermediate Representation",
    abbr: "IR",
    category: "Compiler Concept",
    color: "#ad1457",
    description:
      "A middle form of code that compilers use between source code and machine code. Optimizations happen here, so one IR can serve many languages and many CPUs.",
    highlights: [
      "LLVM IR and JVM bytecode",
      "Running compiler optimizations",
      "Targeting many CPU architectures",
    ],
    funFact:
      "Rust, Swift and Julia all compile down to LLVM IR, so they share the same optimizer and machine-code backend.",
    url: "https://en.wikipedia.org/wiki/Intermediate_representation",
    spawnWeight: 0.5,
  },
  {
    id: "semantic-analysis",
    name: "Semantic Analysis",
    abbr: "SEM",
    category: "Compiler Phase",
    color: "#6a1b9a",
    description:
      "The compiler phase that checks whether grammatically correct code actually makes sense — are variables declared, do types match, is each name used in the right scope?",
    highlights: [
      "Catching undeclared variables",
      "Type and scope checking",
      "Powering IDE error squiggles",
    ],
    funFact:
      "Noam Chomsky's sentence \"Colorless green ideas sleep furiously\" is grammatically fine but meaningless — exactly the gap between parsing and semantic analysis.",
    url: "https://en.wikipedia.org/wiki/Semantic_analysis_(compilers)",
    spawnWeight: 0.5,
  },
  {
    id: "type-checking",
    name: "Type Checking",
    abbr: "TC",
    category: "Compiler Concept",
    color: "#1565c0",
    description:
      "Verifying that values are used in ways their types allow, like not adding a number to a function. It can happen before the program runs (static) or while it runs (dynamic).",
    highlights: [
      "TypeScript and mypy checks",
      "Catching bugs before runtime",
      "Better autocomplete in editors",
    ],
    funFact:
      "NASA lost the Mars Climate Orbiter in 1999 because one team used imperial units and another metric — the kind of mix-up unit-aware type systems are designed to catch.",
    url: "https://en.wikipedia.org/wiki/Type_system",
  },
  {
    id: "compiler-optimization",
    name: "Compiler Optimization",
    abbr: "OPT",
    category: "Compiler Phase",
    color: "#ef6c00",
    description:
      "Changes a compiler makes to your code so it runs faster or uses less memory, without changing what it does — like removing dead code or inlining small functions.",
    highlights: [
      "-O2 and -O3 flags in GCC and Clang",
      "Inlining and loop unrolling",
      "Smaller, faster release builds",
    ],
    funFact:
      "Proebsting's Law jokes that compiler advances double program speed only every 18 years — a cheeky contrast to Moore's Law for hardware.",
    url: "https://en.wikipedia.org/wiki/Optimizing_compiler",
  },
  {
    id: "code-generation",
    name: "Code Generation",
    abbr: "CGEN",
    category: "Compiler Phase",
    color: "#00838f",
    description:
      "The compiler phase that turns intermediate code into real machine instructions for a specific CPU, choosing instructions and deciding which values live in registers.",
    highlights: [
      "Producing x86 and ARM machine code",
      "Register allocation",
      "WebAssembly output",
    ],
    funFact:
      "Compilers often assign CPU registers using graph coloring: variables are nodes, and two that are alive at the same time can't get the same \"color\" (register).",
    url: "https://en.wikipedia.org/wiki/Code_generation_(compiler)",
    spawnWeight: 0.5,
  },
  {
    id: "jit-compilation",
    name: "JIT Compilation",
    abbr: "JIT",
    category: "Execution Strategy",
    color: "#f57c00",
    description:
      "Just-in-time compilation turns code into machine code while the program is running, focusing on the parts used most. It's how JavaScript and Java get fast.",
    highlights: [
      "JavaScript engines like V8",
      "The Java HotSpot JVM",
      "PyPy and LuaJIT",
    ],
    funFact:
      "A JIT can sometimes beat ahead-of-time compiled code, because it optimizes using real information about how the program is actually being used right now.",
    url: "https://en.wikipedia.org/wiki/Just-in-time_compilation",
  },
  {
    id: "aot-compilation",
    name: "AOT Compilation",
    abbr: "AOT",
    category: "Execution Strategy",
    color: "#388e3c",
    description:
      "Ahead-of-time compilation turns code into machine code before the program runs. Apps start faster and don't need a compiler at runtime.",
    highlights: [
      "C, C++, Rust and Go binaries",
      "GraalVM native images",
      "Angular and .NET Native AOT builds",
    ],
    funFact:
      "In Android 5.0 Lollipop, Google replaced the Dalvik JIT runtime with ART, which compiled apps ahead of time when they were installed.",
    url: "https://en.wikipedia.org/wiki/Ahead-of-time_compilation",
  },
  {
    id: "bytecode",
    name: "Bytecode",
    abbr: "BC",
    category: "Compiler Concept",
    color: "#795548",
    description:
      "A compact set of instructions for a virtual machine rather than a real CPU. Code is compiled to bytecode once, then a VM runs it on any platform.",
    highlights: [
      "Java .class files on the JVM",
      "Python .pyc files",
      "WebAssembly in browsers",
    ],
    funFact:
      "Every compiled Java .class file begins with the hex bytes CAFEBABE — a playful \"magic number\" chosen by Java's creators.",
    url: "https://en.wikipedia.org/wiki/Bytecode",
  },
  {
    id: "garbage-collection",
    name: "Garbage Collection",
    abbr: "GC",
    category: "Memory Management",
    color: "#43a047",
    description:
      "Automatic memory cleanup: the runtime finds data your program can no longer reach and frees it, so you don't have to release memory by hand.",
    highlights: [
      "Java, C#, Go and JavaScript",
      "Preventing many memory leaks",
      "Tuning for low-latency apps",
    ],
    funFact:
      "Garbage collection was invented by John McCarthy around 1959 for Lisp — so it's older than most programming languages people use today.",
    url: "https://en.wikipedia.org/wiki/Garbage_collection_(computer_science)",
  },
  {
    id: "runtime-systems",
    name: "Runtime Systems",
    abbr: "RT",
    category: "Language Runtime",
    color: "#3949ab",
    description:
      "The behind-the-scenes code that supports a program while it runs — managing memory, threads, exceptions and calls to the operating system.",
    highlights: [
      "The JVM and .NET CLR",
      "Go's goroutine scheduler",
      "Node.js and browser JS runtimes",
    ],
    funFact:
      "Even a tiny Go \"Hello, World\" program compiles to a binary of over a megabyte, partly because it bundles the Go runtime with its scheduler and garbage collector.",
    url: "https://en.wikipedia.org/wiki/Runtime_system",
    spawnWeight: 0.5,
  },
];

export default entries;
