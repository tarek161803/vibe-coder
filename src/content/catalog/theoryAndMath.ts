import type { CatalogEntry } from "../types";

/** Mathematics and Theoretical Computer Science */
const entries: CatalogEntry[] = [
  {
    id: "data-structures",
    name: "Data Structures",
    abbr: "DS",
    category: "CS Fundamentals",
    color: "#3b82f6",
    description:
      "Ways of organizing data in memory so it's easy and fast to use — like lists, trees and hash tables. Choosing the right one can make a program dramatically faster.",
    highlights: [
      "Core of every coding interview",
      "Picking fast lookups, queues or sorted data",
      "Building blocks of databases and apps",
    ],
    funFact:
      "In 1976 Niklaus Wirth, creator of Pascal, titled his textbook \"Algorithms + Data Structures = Programs\" — a neat summary of what coding really is.",
    url: "https://en.wikipedia.org/wiki/Data_structure",
  },
  {
    id: "algorithms",
    name: "Algorithms",
    abbr: "ALGO",
    category: "CS Fundamentals",
    color: "#8b5cf6",
    description:
      "Step-by-step recipes for solving a problem, like sorting a list or finding the shortest route. Good algorithms solve the same problem with far less time or memory.",
    highlights: [
      "Search engines, maps and recommendations",
      "Coding interviews and competitions",
      "Measuring speed with Big O notation",
    ],
    funFact:
      "The word \"algorithm\" comes from the name of al-Khwarizmi, a 9th-century Persian mathematician whose books also gave us the word \"algebra\".",
    url: "https://en.wikipedia.org/wiki/Algorithm",
  },
  {
    id: "arrays",
    name: "Arrays",
    abbr: "[]",
    category: "Data Structure",
    color: "#0ea5e9",
    description:
      "An ordered list of items stored side by side in memory, each reachable by its index number. Reading any position is instant, which makes arrays the most common data structure.",
    highlights: [
      "Lists of items in almost every program",
      "Image pixels and game grids",
      "Foundation for stacks, heaps and more",
    ],
    funFact:
      "Most languages count array positions from 0, but Lua, MATLAB and Fortran start at 1. Edsger Dijkstra even wrote a short note arguing \"why numbering should start at zero\".",
    url: "https://en.wikipedia.org/wiki/Array_(data_structure)",
  },
  {
    id: "linked-lists",
    name: "Linked Lists",
    abbr: "LL",
    category: "Data Structure",
    color: "#14b8a6",
    description:
      "A chain of items where each one holds a pointer to the next. Adding or removing items is cheap, but finding the 50th item means walking the chain from the start.",
    highlights: [
      "Undo histories and playlists",
      "Implementing queues and stacks",
      "Classic interview questions",
    ],
    funFact:
      "Linked lists were invented around 1955–56 by Allen Newell, Cliff Shaw and Herbert Simon for their Information Processing Language, used in early AI programs.",
    url: "https://en.wikipedia.org/wiki/Linked_list",
  },
  {
    id: "stacks",
    name: "Stacks",
    abbr: "STK",
    category: "Data Structure",
    color: "#f97316",
    description:
      "A collection where the last item you add is the first one out, like a stack of plates. You push items on top and pop them off the top.",
    highlights: [
      "Undo buttons in editors",
      "The call stack that runs functions",
      "Checking matching brackets",
    ],
    funFact:
      "When functions call each other too deeply, the call stack runs out of room — a \"stack overflow\". That error gave its name to the famous Q&A site Stack Overflow.",
    url: "https://en.wikipedia.org/wiki/Stack_(abstract_data_type)",
  },
  {
    id: "queues",
    name: "Queues",
    abbr: "Q",
    category: "Data Structure",
    color: "#22c55e",
    description:
      "A collection where the first item in is the first one out, just like a line at a shop. Items join at the back and leave from the front.",
    highlights: [
      "Print jobs and task scheduling",
      "Message queues between services",
      "Breadth-first search in graphs",
    ],
    funFact:
      "Queueing theory began with Danish engineer Agner Krarup Erlang, who studied waiting times at Copenhagen's telephone exchange in the early 1900s.",
    url: "https://en.wikipedia.org/wiki/Queue_(abstract_data_type)",
  },
  {
    id: "hash-tables",
    name: "Hash Tables",
    abbr: "HT",
    category: "Data Structure",
    color: "#e11d48",
    description:
      "A structure that stores key–value pairs and finds any key almost instantly. A hash function turns the key into a slot number, so there's no need to search through everything.",
    highlights: [
      "Python dicts and JavaScript objects/Maps",
      "Caches and database indexes",
      "Counting and de-duplicating items",
    ],
    funFact:
      "IBM researcher Hans Peter Luhn is credited with the idea of hashing in 1953 — he also invented the Luhn checksum still used to validate credit card numbers.",
    url: "https://en.wikipedia.org/wiki/Hash_table",
  },
  {
    id: "trees",
    name: "Trees",
    abbr: "TREE",
    category: "Data Structure",
    color: "#16a34a",
    description:
      "A structure made of nodes where each node can have children, starting from a single root. Trees model anything hierarchical and allow fast searching when kept sorted.",
    highlights: [
      "The HTML DOM in web pages",
      "File systems and folders",
      "Database indexes like B-trees",
    ],
    funFact:
      "Computer science trees grow upside down: the \"root\" is drawn at the top and the \"leaves\" hang at the bottom.",
    url: "https://en.wikipedia.org/wiki/Tree_(data_structure)",
  },
  {
    id: "graphs",
    name: "Graphs",
    abbr: "G",
    category: "Data Structure",
    color: "#7c3aed",
    description:
      "A set of points (nodes) connected by lines (edges). Graphs can model almost any network — friends, roads, web pages — and power algorithms like shortest-path search.",
    highlights: [
      "Social networks and recommendations",
      "Maps and route finding",
      "Dependency graphs in build tools",
    ],
    funFact:
      "Google's original PageRank algorithm treated the whole web as a giant graph, ranking a page higher when other important pages linked to it.",
    url: "https://en.wikipedia.org/wiki/Graph_(abstract_data_type)",
  },
  {
    id: "heaps",
    name: "Heaps",
    abbr: "HEAP",
    category: "Data Structure",
    color: "#db2777",
    description:
      "A tree-shaped structure that always keeps the smallest (or largest) item at the top, so you can grab it instantly. It's the usual way to build a priority queue.",
    highlights: [
      "Priority queues and task schedulers",
      "Dijkstra's shortest-path algorithm",
      "Heapsort and finding top-K items",
    ],
    funFact:
      "The heap data structure has nothing to do with \"the heap\" area of memory — they just share a name. The binary heap was introduced by J. W. J. Williams in 1964 for heapsort.",
    url: "https://en.wikipedia.org/wiki/Heap_(data_structure)",
  },
  {
    id: "tries",
    name: "Tries",
    abbr: "TRIE",
    category: "Data Structure",
    color: "#65a30d",
    description:
      "A tree that stores words letter by letter, so words sharing a prefix share a branch. It makes looking up words and prefixes very fast.",
    highlights: [
      "Autocomplete and search suggestions",
      "Spell checkers",
      "IP routing tables",
    ],
    funFact:
      "The name comes from \"retrieval\", and Edward Fredkin intended it to be pronounced \"tree\" — but most people say \"try\" to avoid confusion with regular trees.",
    url: "https://en.wikipedia.org/wiki/Trie",
  },
  {
    id: "sorting-algorithms",
    name: "Sorting Algorithms",
    abbr: "SORT",
    category: "Algorithm Concept",
    color: "#f59e0b",
    description:
      "Methods for putting items in order, such as bubble sort, merge sort and quicksort. They differ in speed, memory use and whether equal items keep their original order.",
    highlights: [
      "Ordering search results and tables",
      "A classic topic for learning Big O",
      "Prepping data for binary search",
    ],
    funFact:
      "Python's built-in sort uses Timsort, created by Tim Peters in 2002 for Python. It was so good that Java adopted it for sorting objects too.",
    url: "https://en.wikipedia.org/wiki/Sorting_algorithm",
  },
  {
    id: "searching-algorithms",
    name: "Searching Algorithms",
    abbr: "SRCH",
    category: "Algorithm Concept",
    color: "#06b6d4",
    description:
      "Methods for finding an item in a collection, from checking each one in turn (linear search) to repeatedly halving a sorted list (binary search).",
    highlights: [
      "Finding records in sorted data",
      "Lookups in databases and indexes",
      "Graph search like BFS and DFS",
    ],
    funFact:
      "Binary search looks simple, yet in 2006 Joshua Bloch revealed that Java's own binary search had an integer-overflow bug that went unnoticed for about nine years.",
    url: "https://en.wikipedia.org/wiki/Binary_search",
  },
  {
    id: "dynamic-programming",
    name: "Dynamic Programming",
    abbr: "DP",
    category: "Algorithm Technique",
    color: "#9333ea",
    description:
      "Solving a big problem by breaking it into overlapping smaller problems and remembering their answers, so nothing gets computed twice.",
    highlights: [
      "Shortest paths and route planning",
      "Text diff and spell-check distance",
      "Tough coding interview problems",
    ],
    funFact:
      "Richard Bellman picked the name \"dynamic programming\" partly because it sounded impressive and hid that he was doing math research, which a government official of the time disliked.",
    url: "https://en.wikipedia.org/wiki/Dynamic_programming",
  },
  {
    id: "greedy-algorithms",
    name: "Greedy Algorithms",
    abbr: "GRDY",
    category: "Algorithm Technique",
    color: "#ca8a04",
    description:
      "Algorithms that always grab the option that looks best right now, hoping it leads to the best overall result. They're fast and simple, but don't always find the optimal answer.",
    highlights: [
      "Making change with coins",
      "Huffman coding for compression",
      "Minimum spanning trees",
    ],
    funFact:
      "Greedy change-making (always use the biggest coin) works for US coins, but not for every coin system — with coins of 1, 3 and 4, making 6 greedily uses three coins instead of two.",
    url: "https://en.wikipedia.org/wiki/Greedy_algorithm",
  },
  {
    id: "backtracking",
    name: "Backtracking",
    abbr: "BT",
    category: "Algorithm Technique",
    color: "#dc2626",
    description:
      "A way to search for solutions by trying choices one at a time and undoing them (backing up) as soon as they lead to a dead end.",
    highlights: [
      "Sudoku and puzzle solvers",
      "Generating permutations and combinations",
      "Regular expression engines",
    ],
    funFact:
      "The classic eight queens puzzle — placing 8 queens on a chessboard so none attack each other — has exactly 92 solutions, and backtracking finds them all.",
    url: "https://en.wikipedia.org/wiki/Backtracking",
  },
  {
    id: "divide-and-conquer",
    name: "Divide and Conquer",
    abbr: "D&C",
    category: "Algorithm Technique",
    color: "#2563eb",
    description:
      "Solving a problem by splitting it into smaller pieces, solving each piece (often the same way), and combining the results.",
    highlights: [
      "Merge sort and quicksort",
      "Binary search",
      "Fast multiplication and FFT",
    ],
    funFact:
      "Merge sort, a textbook divide-and-conquer algorithm, was invented by John von Neumann back in 1945.",
    url: "https://en.wikipedia.org/wiki/Divide-and-conquer_algorithm",
  },
  {
    id: "automata-theory",
    name: "Automata Theory",
    abbr: "AUTO",
    category: "Theory of Computation",
    color: "#0891b2",
    description:
      "The study of simple abstract machines, like finite state machines, that read input and change state. It explains what different kinds of machines can and can't recognize.",
    highlights: [
      "Regular expression engines",
      "Lexers in compilers",
      "State machines in games and UIs",
    ],
    funFact:
      "Regular expressions were invented by mathematician Stephen Kleene in the 1950s to describe automata — decades before they became a staple of every code editor.",
    url: "https://en.wikipedia.org/wiki/Automata_theory",
    spawnWeight: 0.5,
  },
  {
    id: "formal-languages",
    name: "Formal Languages",
    abbr: "FL",
    category: "Theory of Computation",
    color: "#4f46e5",
    description:
      "Precisely defined sets of strings described by grammar rules. They're how computer scientists describe the exact syntax of programming languages and data formats.",
    highlights: [
      "Grammars for programming languages",
      "Regular and context-free languages",
      "Parser and compiler design",
    ],
    funFact:
      "The famous Chomsky hierarchy of grammars, central to compilers, came from linguist Noam Chomsky, who was studying human languages, not computers.",
    url: "https://en.wikipedia.org/wiki/Formal_language",
    spawnWeight: 0.5,
  },
  {
    id: "computational-complexity",
    name: "Computational Complexity",
    abbr: "P/NP",
    category: "Theory of Computation",
    color: "#be123c",
    description:
      "The study of how much time and memory problems need as they grow. It sorts problems into classes like P and NP, telling us which ones are practically solvable.",
    highlights: [
      "Big O analysis of code",
      "Understanding P vs NP",
      "Why some problems need approximations",
    ],
    funFact:
      "Whether P equals NP is one of the Clay Mathematics Institute's Millennium Prize Problems — solve it and you win $1 million.",
    url: "https://en.wikipedia.org/wiki/Computational_complexity_theory",
  },
  {
    id: "turing-machines",
    name: "Turing Machines",
    abbr: "TM",
    category: "Model of Computation",
    color: "#0f766e",
    description:
      "An imaginary machine with an endless tape, a read/write head and a few rules. Despite its simplicity, it can compute anything a modern computer can.",
    highlights: [
      "Defining what \"computable\" means",
      "Proving limits of computers",
      "\"Turing complete\" languages",
    ],
    funFact:
      "Alan Turing described the machine in his 1936 paper \"On Computable Numbers\", where he called them \"a-machines\" (automatic machines).",
    url: "https://en.wikipedia.org/wiki/Turing_machine",
  },
  {
    id: "computability-theory",
    name: "Computability Theory",
    abbr: "CT",
    category: "Theory of Computation",
    color: "#a21caf",
    description:
      "The branch of theory asking which problems computers can solve at all, no matter how much time they get. Some problems are provably impossible to solve with any program.",
    highlights: [
      "The halting problem",
      "Limits of static code analysis",
      "Foundations of computer science",
    ],
    funFact:
      "Turing proved that no program can always tell whether any other program will eventually stop or run forever — the famous halting problem.",
    url: "https://en.wikipedia.org/wiki/Computability_theory",
    spawnWeight: 0.5,
  },
  {
    id: "compiler-theory",
    name: "Compiler Theory",
    abbr: "CMP",
    category: "Theory of Computation",
    color: "#b45309",
    description:
      "The study of how to translate code written by humans into code a machine can run, covering lexing, parsing, analysis, optimization and code generation.",
    highlights: [
      "Building compilers and interpreters",
      "Designing new programming languages",
      "Linters, formatters and IDE tools",
    ],
    funFact:
      "The classic compilers textbook is nicknamed the \"Dragon Book\" because its cover shows a knight battling a dragon labeled \"Complexity of Compiler Design\".",
    url: "https://en.wikipedia.org/wiki/Compiler",
  },
  {
    id: "type-theory",
    name: "Type Theory",
    abbr: "TT",
    category: "Mathematical Logic",
    color: "#7e22ce",
    description:
      "A mathematical framework where every value has a type that limits how it can be used. It underpins type systems in programming languages and proof assistants.",
    highlights: [
      "Type systems in TypeScript, Rust, Haskell",
      "Proof assistants like Coq and Lean",
      "Catching bugs before code runs",
    ],
    funFact:
      "Bertrand Russell introduced an early type theory in the early 1900s to escape Russell's paradox — the set of all sets that don't contain themselves.",
    url: "https://en.wikipedia.org/wiki/Type_theory",
    spawnWeight: 0.5,
  },
  {
    id: "lambda-calculus",
    name: "Lambda Calculus",
    abbr: "λ",
    category: "Model of Computation",
    color: "#9d174d",
    description:
      "A tiny mathematical language made only of functions and function calls. It's as powerful as a Turing machine and is the foundation of functional programming.",
    highlights: [
      "Foundation of Lisp and Haskell",
      "Anonymous \"lambda\" functions in code",
      "Programming language research",
    ],
    funFact:
      "Alonzo Church created lambda calculus in the 1930s, and he later became Alan Turing's doctoral advisor at Princeton.",
    url: "https://en.wikipedia.org/wiki/Lambda_calculus",
  },
  {
    id: "formal-verification",
    name: "Formal Verification",
    abbr: "FV",
    category: "Software Correctness",
    color: "#047857",
    description:
      "Using mathematical proof to show that software or hardware does exactly what its specification says, rather than just testing some cases.",
    highlights: [
      "Chip design at hardware companies",
      "Safety-critical aerospace software",
      "Verified OS kernels and crypto code",
    ],
    funFact:
      "In 2009 the seL4 microkernel became one of the first general-purpose OS kernels with a machine-checked proof that its code matches its specification.",
    url: "https://en.wikipedia.org/wiki/Formal_verification",
    spawnWeight: 0.5,
  },
  {
    id: "computational-geometry",
    name: "Computational Geometry",
    abbr: "CG",
    category: "Algorithm Field",
    color: "#ea580c",
    description:
      "The study of algorithms for shapes, points, lines and polygons — like finding the closest pair of points or whether two shapes overlap.",
    highlights: [
      "Collision detection in games",
      "Maps and GIS software",
      "CAD tools and robotics",
    ],
    funFact:
      "One convex hull algorithm is nicknamed \"gift wrapping\" because it works like wrapping paper around a set of points, folding from one outer point to the next.",
    url: "https://en.wikipedia.org/wiki/Computational_geometry",
    spawnWeight: 0.5,
  },
  {
    id: "information-theory",
    name: "Information Theory",
    abbr: "IT",
    category: "Mathematics Field",
    color: "#0284c7",
    description:
      "The math of measuring, compressing and sending information reliably. It tells us how small a file can get and how much data a noisy channel can carry.",
    highlights: [
      "File compression like ZIP and MP3",
      "Error-correcting codes in Wi-Fi",
      "Entropy in machine learning",
    ],
    funFact:
      "Claude Shannon founded the field in 1948 and popularized the word \"bit\" — a term he credited to his colleague John Tukey.",
    url: "https://en.wikipedia.org/wiki/Information_theory",
  },
  {
    id: "cryptography",
    name: "Cryptography",
    abbr: "CRYP",
    category: "Security Field",
    color: "#15803d",
    description:
      "The science of keeping information secret and trustworthy using math — encrypting messages, signing data and proving who you are.",
    highlights: [
      "HTTPS and secure messaging",
      "Password hashing",
      "Digital signatures and blockchains",
    ],
    funFact:
      "Julius Caesar reportedly protected messages by shifting each letter three places in the alphabet — the \"Caesar cipher\" is still a classic first exercise today.",
    url: "https://en.wikipedia.org/wiki/Cryptography",
  },
  {
    id: "discrete-mathematics",
    name: "Discrete Mathematics",
    abbr: "DM",
    category: "Mathematics Field",
    color: "#c026d3",
    description:
      "Math about separate, countable things — logic, sets, graphs and counting — rather than smooth continuous values. It's the core math behind computer science.",
    highlights: [
      "Logic for conditions and proofs",
      "Analyzing algorithms",
      "Graphs, sets and combinatorics",
    ],
    funFact:
      "George Boole published his algebra of logic in 1854, long before computers existed. Today every \"if\" statement and logic gate uses Boolean logic named after him.",
    url: "https://en.wikipedia.org/wiki/Discrete_mathematics",
  },
  {
    id: "linear-algebra",
    name: "Linear Algebra",
    abbr: "LA",
    category: "Mathematics Field",
    color: "#2563eb",
    description:
      "The math of vectors and matrices — grids of numbers you can add, multiply and transform. It powers 3D graphics, machine learning and data science.",
    highlights: [
      "3D graphics transforms in games",
      "Neural networks and AI",
      "Recommendation systems",
    ],
    funFact:
      "The word \"matrix\" was coined by mathematician James Joseph Sylvester in 1850. Today GPUs are essentially machines built to multiply matrices very fast.",
    url: "https://en.wikipedia.org/wiki/Linear_algebra",
  },
  {
    id: "calculus",
    name: "Calculus",
    abbr: "∫",
    category: "Mathematics Field",
    color: "#e11d48",
    description:
      "The math of change and accumulation — rates of change (derivatives) and totals over time (integrals). It's how we describe motion, growth and optimization.",
    highlights: [
      "Gradient descent in machine learning",
      "Physics in games and simulations",
      "Animation easing curves",
    ],
    funFact:
      "Newton and Leibniz both developed calculus independently, sparking a bitter priority dispute. We still use Leibniz's notation, like dy/dx and the ∫ sign.",
    url: "https://en.wikipedia.org/wiki/Calculus",
  },
  {
    id: "probability",
    name: "Probability",
    abbr: "P(x)",
    category: "Mathematics Field",
    color: "#f59e0b",
    description:
      "The math of chance: how likely things are to happen. It helps programs reason about uncertainty, randomness and risk.",
    highlights: [
      "Randomness in games",
      "Machine learning models",
      "A/B testing and risk analysis",
    ],
    funFact:
      "Modern probability theory grew out of letters between Blaise Pascal and Pierre de Fermat in 1654, trying to fairly split the stakes of an unfinished gambling game.",
    url: "https://en.wikipedia.org/wiki/Probability",
  },
  {
    id: "statistics",
    name: "Statistics",
    abbr: "STAT",
    category: "Mathematics Field",
    color: "#0d9488",
    description:
      "The science of collecting, summarizing and drawing conclusions from data — averages, spreads, trends and how confident we can be in them.",
    highlights: [
      "Data analysis and dashboards",
      "A/B testing product changes",
      "Foundations of machine learning",
    ],
    funFact:
      "The famous t-test was published by William Gosset under the pen name \"Student\" because his employer, the Guinness brewery, didn't want staff publishing under their own names.",
    url: "https://en.wikipedia.org/wiki/Statistics",
  },
  {
    id: "graph-theory",
    name: "Graph Theory",
    abbr: "GT",
    category: "Mathematics Field",
    color: "#6d28d9",
    description:
      "The mathematical study of networks of nodes and edges: paths, cycles, connectivity and coloring. It's the theory behind graph algorithms in code.",
    highlights: [
      "Route finding and logistics",
      "Network and social analysis",
      "Scheduling via graph coloring",
    ],
    funFact:
      "Graph theory began in 1736 when Leonhard Euler proved you can't walk through Königsberg crossing each of its seven bridges exactly once.",
    url: "https://en.wikipedia.org/wiki/Graph_theory",
  },
  {
    id: "set-theory",
    name: "Set Theory",
    abbr: "SET",
    category: "Mathematics Field",
    color: "#0369a1",
    description:
      "The math of collections of things — unions, intersections and membership. It's the foundation of most mathematics and shows up directly in databases and code.",
    highlights: [
      "SQL joins and queries",
      "Set data types in Python and JS",
      "Foundations of logic and math",
    ],
    funFact:
      "Georg Cantor used set theory to prove that some infinities are bigger than others — there are more real numbers than whole numbers.",
    url: "https://en.wikipedia.org/wiki/Set_theory",
  },
  {
    id: "number-theory",
    name: "Number Theory",
    abbr: "NT",
    category: "Mathematics Field",
    color: "#b91c1c",
    description:
      "The study of whole numbers and their properties, especially primes and divisibility. Once considered pure math, it now secures internet communication.",
    highlights: [
      "RSA and public-key encryption",
      "Hash functions and checksums",
      "Random number generators",
    ],
    funFact:
      "Mathematician G. H. Hardy proudly called number theory useless for practical purposes. Decades later it became the backbone of RSA encryption used across the internet.",
    url: "https://en.wikipedia.org/wiki/Number_theory",
  },
  {
    id: "combinatorics",
    name: "Combinatorics",
    abbr: "nCr",
    category: "Mathematics Field",
    color: "#c2410c",
    description:
      "The math of counting and arranging things — how many ways can you pick, order or combine items? It's key for analyzing algorithms and probabilities.",
    highlights: [
      "Counting possibilities in algorithms",
      "Probability and game odds",
      "Password strength estimates",
    ],
    funFact:
      "A deck of 52 cards can be ordered in 52! ways — about 8×10^67 — so a well-shuffled deck is almost certainly in an order no one has ever seen before.",
    url: "https://en.wikipedia.org/wiki/Combinatorics",
  },
];

export default entries;
