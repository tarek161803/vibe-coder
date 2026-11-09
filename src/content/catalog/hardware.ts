import type { CatalogEntry } from "../types";

/** Computer Architecture and Hardware */
const entries: CatalogEntry[] = [
  {
    id: "cpu",
    name: "CPU",
    abbr: "CP",
    category: "Processor",
    color: "#0071c5",
    description:
      "The Central Processing Unit is the general-purpose \"brain\" of a computer. It fetches instructions from memory, decodes them and executes them one after another, billions of times per second.",
    highlights: [
      "Runs your OS, apps and code",
      "Found in every laptop, phone and server",
      "Key spec when choosing hardware",
    ],
    funFact:
      "The Intel 4004 from 1971, often called the first commercial microprocessor, had only about 2,300 transistors. Modern CPUs pack in billions.",
    url: "https://en.wikipedia.org/wiki/Central_processing_unit",
  },
  {
    id: "gpu",
    name: "GPU",
    abbr: "GP",
    category: "Processor",
    color: "#76b900",
    description:
      "A Graphics Processing Unit is a chip with thousands of small cores built to do many simple calculations at once. It was made for drawing pixels but is now also the workhorse of AI training.",
    highlights: [
      "Rendering 3D games and video",
      "Training and running AI models",
      "Massively parallel number crunching",
    ],
    funFact:
      "Nvidia marketed its 1999 GeForce 256 as \"the world's first GPU\" — the term caught on and has stuck ever since.",
    url: "https://en.wikipedia.org/wiki/Graphics_processing_unit",
  },
  {
    id: "tpu",
    name: "TPU",
    abbr: "TP",
    category: "AI Accelerator",
    color: "#4285f4",
    description:
      "A Tensor Processing Unit is a custom chip designed by Google to speed up machine learning. It is tuned for the huge matrix multiplications that neural networks rely on.",
    highlights: [
      "Training large AI models",
      "Available on Google Cloud",
      "Powers many Google services",
    ],
    funFact:
      "Google revealed its TPUs in 2016 and said they had already been used behind the scenes — including in the AlphaGo matches against Go champion Lee Sedol.",
    url: "https://cloud.google.com/tpu",
  },
  {
    id: "npu",
    name: "NPU",
    abbr: "NP",
    category: "AI Accelerator",
    color: "#8e44ad",
    description:
      "A Neural Processing Unit is a small, power-efficient chip block made for running AI models on-device. It lets phones and laptops do things like face unlock or speech recognition without the cloud.",
    highlights: [
      "On-device AI in phones and laptops",
      "Face ID, photo enhancement, voice",
      "Saves battery versus using the CPU/GPU",
    ],
    funFact:
      "Apple's A11 Bionic chip in 2017 introduced the \"Neural Engine\", an NPU that helped power Face ID on the iPhone X.",
    url: "https://en.wikipedia.org/wiki/Neural_processing_unit",
  },
  {
    id: "ram",
    name: "RAM",
    abbr: "RA",
    category: "Computer Memory",
    color: "#27ae60",
    description:
      "Random Access Memory is the fast, temporary workspace where a computer keeps the programs and data it is using right now. It is wiped clean when the power goes off.",
    highlights: [
      "Holds running apps and open files",
      "More RAM means more multitasking",
      "Much faster than disk storage",
    ],
    funFact:
      "Most RAM (DRAM) stores each bit as charge in a tiny capacitor that slowly leaks, so the chip must constantly refresh every bit just to avoid forgetting it.",
    url: "https://en.wikipedia.org/wiki/Random-access_memory",
  },
  {
    id: "rom",
    name: "ROM",
    abbr: "RO",
    category: "Computer Memory",
    color: "#d35400",
    description:
      "Read-Only Memory is storage whose contents are written once (or rarely) and keep their data without power. It typically holds firmware — the low-level code a device needs to start up.",
    highlights: [
      "Firmware and boot code",
      "Embedded devices and appliances",
      "Classic game cartridges",
    ],
    funFact:
      "Retro game cartridges like those for the NES held their games on ROM chips — which is why game files copied from them are still called \"ROMs\" today.",
    url: "https://en.wikipedia.org/wiki/Read-only_memory",
  },
  {
    id: "ssd",
    name: "SSD",
    abbr: "SS",
    category: "Storage Device",
    color: "#2980b9",
    description:
      "A Solid-State Drive stores data on flash memory chips instead of spinning disks. With no moving parts it is much faster, quieter and tougher than a traditional hard drive.",
    highlights: [
      "Fast boot and app load times",
      "Standard in modern laptops",
      "NVMe drives for high-speed servers",
    ],
    funFact:
      "Flash cells wear out after a limited number of writes, so SSD controllers use \"wear leveling\" to spread writes evenly across the chips.",
    url: "https://en.wikipedia.org/wiki/Solid-state_drive",
  },
  {
    id: "hdd",
    name: "HDD",
    abbr: "HD",
    category: "Storage Device",
    color: "#7f8c8d",
    description:
      "A Hard Disk Drive stores data magnetically on spinning metal platters read by a tiny moving head. It is slower than an SSD but offers lots of storage for little money.",
    highlights: [
      "Cheap bulk storage",
      "Backups and media archives",
      "Data center cold storage",
    ],
    funFact:
      "IBM's first hard drive, the 350 disk unit from 1956, held about 5 million characters and weighed around a ton.",
    url: "https://en.wikipedia.org/wiki/Hard_disk_drive",
  },
  {
    id: "cache",
    name: "Cache",
    abbr: "$",
    category: "Computer Memory",
    color: "#e67e22",
    description:
      "A CPU cache is a small, super-fast memory right on the processor that keeps copies of recently used data. It saves the CPU from waiting on slower main RAM.",
    highlights: [
      "L1, L2 and L3 cache levels",
      "Huge impact on program speed",
      "Why data layout matters for performance",
    ],
    funFact:
      "The word \"cache\" comes from the French verb cacher, \"to hide\" — fitting, since a cache works invisibly in the background.",
    url: "https://en.wikipedia.org/wiki/CPU_cache",
  },
  {
    id: "motherboard",
    name: "Motherboard",
    abbr: "Mo",
    category: "PC Hardware",
    color: "#16a085",
    description:
      "The motherboard is the main circuit board that connects all of a computer's parts. The CPU, RAM, storage and expansion cards all plug into it and talk through it.",
    highlights: [
      "Connects CPU, RAM and storage",
      "Key choice when building a PC",
      "Provides USB, audio and network ports",
    ],
    funFact:
      "It's called the \"mother\" board because smaller add-on boards that plug into it are traditionally called \"daughterboards\".",
    url: "https://en.wikipedia.org/wiki/Motherboard",
  },
  {
    id: "nic",
    name: "NIC",
    abbr: "NI",
    category: "Network Hardware",
    color: "#3498db",
    description:
      "A Network Interface Card is the hardware that connects a computer to a network, either by cable (Ethernet) or wirelessly (Wi-Fi). Today it is usually built right into the motherboard.",
    highlights: [
      "Ethernet and Wi-Fi connections",
      "High-speed server networking",
      "Has a unique MAC address",
    ],
    funFact:
      "Every NIC has a 48-bit MAC address, and the first half of it identifies the manufacturer — so you can often tell who made a device from its address.",
    url: "https://en.wikipedia.org/wiki/Network_interface_controller",
  },
  {
    id: "fpga",
    name: "FPGA",
    abbr: "FP",
    category: "Programmable Chip",
    color: "#ed1c24",
    description:
      "A Field-Programmable Gate Array is a chip whose internal circuits can be rewired after it is made. You describe the hardware you want, and the FPGA reconfigures itself to become that circuit.",
    highlights: [
      "Prototyping new chip designs",
      "Low-latency trading and networking",
      "Signal processing and retro console clones",
    ],
    funFact:
      "Xilinx released what is widely considered the first commercial FPGA, the XC2064, in 1985.",
    url: "https://en.wikipedia.org/wiki/Field-programmable_gate_array",
  },
  {
    id: "asic",
    name: "ASIC",
    abbr: "AS",
    category: "Custom Chip",
    color: "#c0392b",
    description:
      "An Application-Specific Integrated Circuit is a chip designed to do one job extremely well. It can't be reprogrammed like a CPU or FPGA, but it is faster and more power-efficient for its task.",
    highlights: [
      "Crypto mining hardware",
      "AI accelerators and network chips",
      "Mass-produced consumer electronics",
    ],
    funFact:
      "Bitcoin mining evolved from CPUs to GPUs to FPGAs and finally to ASICs, which made mining on a regular computer pointless.",
    url: "https://en.wikipedia.org/wiki/Application-specific_integrated_circuit",
  },
  {
    id: "x86",
    name: "x86",
    abbr: "86",
    category: "Instruction Set",
    color: "#0068b5",
    description:
      "x86 is a family of instruction sets — the basic commands a CPU understands — used by most desktop and laptop processors from Intel and AMD for decades.",
    highlights: [
      "Windows and Linux PCs",
      "Most cloud servers",
      "Huge backward-compatible software base",
    ],
    funFact:
      "The name comes from Intel's 8086 chip from 1978 and its successors like the 80286 and 80386, which all ended in \"86\".",
    url: "https://en.wikipedia.org/wiki/X86",
  },
  {
    id: "x86-64",
    name: "x86-64",
    abbr: "64",
    category: "Instruction Set",
    color: "#00a4ef",
    description:
      "x86-64 is the 64-bit version of the x86 instruction set. It lets programs use far more than 4 GB of memory while still running older 32-bit software.",
    highlights: [
      "Modern Intel and AMD CPUs",
      "64-bit Windows, Linux and macOS (Intel)",
      "Also called AMD64 or x64",
    ],
    funFact:
      "x86-64 was designed by AMD, not Intel. Intel later adopted AMD's design, which is why it is often called \"AMD64\".",
    url: "https://en.wikipedia.org/wiki/X86-64",
  },
  {
    id: "arm",
    name: "ARM",
    abbr: "AR",
    category: "Instruction Set",
    color: "#0091bd",
    description:
      "ARM is a family of power-efficient processor designs that companies license to build their own chips. It runs almost every smartphone and is increasingly common in laptops and servers.",
    highlights: [
      "Nearly all smartphones and tablets",
      "Apple Silicon Macs",
      "Raspberry Pi and embedded devices",
    ],
    funFact:
      "ARM originally stood for \"Acorn RISC Machine\" — it was created by Acorn Computers in Cambridge, UK, in the mid-1980s.",
    url: "https://www.arm.com",
  },
  {
    id: "aarch64",
    name: "AArch64",
    abbr: "A6",
    category: "Instruction Set",
    color: "#00c1de",
    description:
      "AArch64 is the 64-bit execution state of the ARM architecture, introduced with ARMv8. When people say \"ARM64\" they usually mean AArch64.",
    highlights: [
      "Modern iPhones and Android phones",
      "Apple M-series Macs",
      "AWS Graviton cloud servers",
    ],
    funFact:
      "Apple's A7 chip in the 2013 iPhone 5s was the first 64-bit ARM processor in a smartphone, catching much of the industry by surprise.",
    url: "https://en.wikipedia.org/wiki/AArch64",
    spawnWeight: 0.5,
  },
  {
    id: "risc-v",
    name: "RISC-V",
    abbr: "RV",
    category: "Instruction Set",
    color: "#283272",
    description:
      "RISC-V is an open, royalty-free instruction set that anyone can use to design processors. It is simple and modular, so it is popular in research, education and custom chips.",
    highlights: [
      "Open-source CPU designs",
      "Microcontrollers and embedded chips",
      "Teaching computer architecture",
    ],
    funFact:
      "RISC-V began at UC Berkeley in 2010. The \"V\" is a Roman numeral five: it was the fifth RISC design to come out of Berkeley.",
    url: "https://riscv.org",
  },
  {
    id: "mips",
    name: "MIPS",
    abbr: "MI",
    category: "Instruction Set",
    color: "#e4002b",
    description:
      "MIPS is a classic RISC instruction set from the 1980s, famous for its clean, simple design. It is still widely used to teach how processors work.",
    highlights: [
      "Computer architecture courses",
      "Routers and embedded systems",
      "Retro game consoles",
    ],
    funFact:
      "MIPS processors powered the original PlayStation and the Nintendo 64. The name stands for \"Microprocessor without Interlocked Pipeline Stages\".",
    url: "https://en.wikipedia.org/wiki/MIPS_architecture",
    spawnWeight: 0.5,
  },
  {
    id: "powerpc",
    name: "PowerPC",
    abbr: "Po",
    category: "Instruction Set",
    color: "#1f70c1",
    description:
      "PowerPC is a RISC processor architecture created in the early 1990s by Apple, IBM and Motorola. It powered Macs for over a decade and lives on in IBM's POWER servers.",
    highlights: [
      "Classic Macs before 2006",
      "Game consoles of the 2000s",
      "IBM POWER servers and embedded gear",
    ],
    funFact:
      "The Nintendo GameCube, Wii and Microsoft Xbox 360 all used PowerPC-based processors.",
    url: "https://en.wikipedia.org/wiki/PowerPC",
    spawnWeight: 0.5,
  },
  {
    id: "sparc",
    name: "SPARC",
    abbr: "SP",
    category: "Instruction Set",
    color: "#e76f00",
    description:
      "SPARC is a RISC processor architecture developed by Sun Microsystems in the late 1980s. It powered Sun's workstations and servers, a mainstay of Unix computing for years.",
    highlights: [
      "Sun and Oracle servers",
      "Solaris Unix systems",
      "Historic workstation computing",
    ],
    funFact:
      "SPARC stands for \"Scalable Processor ARChitecture\", and Sun made it an open specification so other companies could build compatible chips.",
    url: "https://en.wikipedia.org/wiki/SPARC",
    spawnWeight: 0.5,
  },
  {
    id: "semiconductor-design",
    name: "Semiconductor Design",
    abbr: "SD",
    category: "Engineering Field",
    color: "#2c7be5",
    description:
      "Semiconductor design is the craft of creating integrated circuits — the chips inside every electronic device — from high-level architecture down to the layout of billions of transistors.",
    highlights: [
      "Designing CPUs, GPUs and AI chips",
      "Uses specialized EDA software",
      "Core of the global chip industry",
    ],
    funFact:
      "In 1965 Gordon Moore observed that the number of transistors on a chip was doubling regularly — \"Moore's Law\" then guided the industry for decades.",
    url: "https://en.wikipedia.org/wiki/Integrated_circuit_design",
    spawnWeight: 0.5,
  },
  {
    id: "digital-logic",
    name: "Digital Logic",
    abbr: "DL",
    category: "Hardware Concept",
    color: "#9b59b6",
    description:
      "Digital logic is how computers process information using only two values, 0 and 1. Simple gates like AND, OR and NOT are combined to build adders, memory and entire processors.",
    highlights: [
      "Logic gates and circuits",
      "Foundation of all computer hardware",
      "Taught in intro CS and EE courses",
    ],
    funFact:
      "Claude Shannon's 1937 master's thesis showed that Boolean algebra could be used to design switching circuits — laying the groundwork for digital computers.",
    url: "https://en.wikipedia.org/wiki/Logic_gate",
  },
  {
    id: "boolean-algebra",
    name: "Boolean Algebra",
    abbr: "BA",
    category: "Math Concept",
    color: "#8e44ad",
    description:
      "Boolean algebra is the math of true and false. It uses operations like AND, OR and NOT, and it underpins everything from logic circuits to the if-statements in your code.",
    highlights: [
      "Conditions and if-statements",
      "Designing logic circuits",
      "Search queries and filters",
    ],
    funFact:
      "George Boole laid out this algebra of logic in 1854 — nearly a century before electronic computers existed. The \"bool\" type in programming is named after him.",
    url: "https://en.wikipedia.org/wiki/Boolean_algebra",
  },
  {
    id: "microarchitecture",
    name: "Microarchitecture",
    abbr: "Mi",
    category: "Hardware Concept",
    color: "#2471a3",
    description:
      "Microarchitecture is how a processor actually implements its instruction set internally — its pipelines, caches and execution units. Two chips can run the same code with very different insides.",
    highlights: [
      "Why CPU generations get faster",
      "Performance tuning at a low level",
      "Chip design and analysis",
    ],
    funFact:
      "Intel and AMD processors run the same x86 programs, yet their internal microarchitectures are designed completely independently.",
    url: "https://en.wikipedia.org/wiki/Microarchitecture",
    spawnWeight: 0.5,
  },
  {
    id: "pipelining",
    name: "Pipelining",
    abbr: "Pi",
    category: "CPU Technique",
    color: "#1abc9c",
    description:
      "Pipelining splits instruction processing into stages, like fetch, decode and execute, so the CPU can work on several instructions at once — like an assembly line.",
    highlights: [
      "Core technique in every modern CPU",
      "Boosts instruction throughput",
      "Classic computer architecture topic",
    ],
    funFact:
      "A classic textbook explains pipelining with laundry: while one load dries, the next one washes, so you finish the pile much sooner.",
    url: "https://en.wikipedia.org/wiki/Instruction_pipelining",
  },
  {
    id: "branch-prediction",
    name: "Branch Prediction",
    abbr: "BP",
    category: "CPU Technique",
    color: "#f39c12",
    description:
      "Branch prediction is a CPU's guess about which way an if-statement or loop will go before it knows for sure. Good guesses keep the pipeline full; wrong ones cost time.",
    highlights: [
      "Keeps CPU pipelines busy",
      "Why sorted data can loop faster",
      "Key to modern CPU speed",
    ],
    funFact:
      "The 2018 Spectre vulnerability tricked branch predictors into speculatively running code that leaked secrets, affecting chips from nearly every major vendor.",
    url: "https://en.wikipedia.org/wiki/Branch_predictor",
    spawnWeight: 0.5,
  },
  {
    id: "out-of-order-execution",
    name: "Out-of-Order Execution",
    abbr: "OO",
    category: "CPU Technique",
    color: "#e74c3c",
    description:
      "Out-of-order execution lets a CPU run instructions as soon as their inputs are ready rather than strictly in program order, so it doesn't sit idle waiting on slow operations.",
    highlights: [
      "High-performance desktop and server CPUs",
      "Hides memory latency",
      "Results still appear in order",
    ],
    funFact:
      "The idea dates back to Tomasulo's algorithm, used in the IBM System/360 Model 91 in the 1960s.",
    url: "https://en.wikipedia.org/wiki/Out-of-order_execution",
    spawnWeight: 0.5,
  },
  {
    id: "simd",
    name: "SIMD",
    abbr: "SI",
    category: "Parallel Computing",
    color: "#00b894",
    description:
      "Single Instruction, Multiple Data lets one CPU instruction operate on several values at once, like adding four pairs of numbers in a single step. It speeds up math-heavy code.",
    highlights: [
      "Image, audio and video processing",
      "SSE, AVX and ARM NEON",
      "Fast math libraries and games",
    ],
    funFact:
      "The term comes from Flynn's taxonomy, a classification of computer architectures proposed by Michael Flynn in 1966.",
    url: "https://en.wikipedia.org/wiki/Single_instruction,_multiple_data",
  },
  {
    id: "multicore-processing",
    name: "Multicore Processing",
    abbr: "MC",
    category: "Parallel Computing",
    color: "#6c5ce7",
    description:
      "A multicore processor has several independent CPU cores on one chip, so it can run multiple tasks truly at the same time. Software must be written to use them in parallel.",
    highlights: [
      "Multitasking and parallel apps",
      "Threads and concurrency",
      "Every modern phone and PC",
    ],
    funFact:
      "Chipmakers went multicore in the mid-2000s when raising clock speeds produced too much heat — Herb Sutter summed it up as \"The Free Lunch Is Over\".",
    url: "https://en.wikipedia.org/wiki/Multi-core_processor",
  },
  {
    id: "gpu-computing",
    name: "GPU Computing",
    abbr: "GP",
    category: "Parallel Computing",
    color: "#76b900",
    description:
      "GPU computing uses graphics cards for general-purpose calculations, not just graphics. Thousands of cores working in parallel make it ideal for AI, science and data crunching.",
    highlights: [
      "Deep learning training",
      "Scientific simulations",
      "CUDA, ROCm and OpenCL",
    ],
    funFact:
      "AlexNet, the 2012 neural network that kicked off the deep learning boom, was trained on just two consumer Nvidia GTX 580 graphics cards.",
    url: "https://en.wikipedia.org/wiki/General-purpose_computing_on_graphics_processing_units",
  },
  {
    id: "fpga-programming",
    name: "FPGA Programming",
    abbr: "FP",
    category: "Hardware Development",
    color: "#c0392b",
    description:
      "FPGA programming means describing a digital circuit, usually in Verilog or VHDL, and loading it onto an FPGA. Instead of steps to run, you are defining hardware that works in parallel.",
    highlights: [
      "Hardware description languages",
      "Custom accelerators and prototypes",
      "Embedded and signal processing",
    ],
    funFact:
      "\"Compiling\" an FPGA design — synthesis plus place-and-route — can take hours for big designs, far longer than compiling most software.",
    url: "https://en.wikipedia.org/wiki/Field-programmable_gate_array",
    spawnWeight: 0.5,
  },
  {
    id: "vlsi-design",
    name: "VLSI Design",
    abbr: "VD",
    category: "Chip Design",
    color: "#0e7c86",
    description:
      "Very Large Scale Integration design is the process of putting huge numbers of transistors onto a single chip, from circuit design to the physical layout that gets manufactured.",
    highlights: [
      "Processor and memory chip design",
      "Physical layout and timing",
      "Electrical engineering careers",
    ],
    funFact:
      "Carver Mead and Lynn Conway's 1980 textbook \"Introduction to VLSI Systems\" made chip design teachable to students and sparked a revolution in the field.",
    url: "https://en.wikipedia.org/wiki/Very-large-scale_integration",
    spawnWeight: 0.5,
  },
  {
    id: "verilog",
    name: "Verilog",
    abbr: "V",
    category: "Hardware Description Lang",
    color: "#e05d44",
    description:
      "Verilog is a hardware description language used to describe digital circuits in code. Its C-like syntax lets engineers design and simulate chips before they are built.",
    highlights: [
      "Designing ASICs and FPGAs",
      "Simulating digital circuits",
      "Industry-standard (IEEE 1364)",
    ],
    funFact:
      "Verilog was created in the mid-1980s at Gateway Design Automation; Cadence bought the company in 1990 and later opened the language up as a standard.",
    url: "https://en.wikipedia.org/wiki/Verilog",
    spawnWeight: 0.5,
  },
  {
    id: "vhdl",
    name: "VHDL",
    abbr: "VH",
    category: "Hardware Description Lang",
    color: "#3d6db5",
    description:
      "VHDL is a strongly typed hardware description language for modeling and designing digital systems. Its syntax is inspired by Ada, and it is popular in Europe and aerospace.",
    highlights: [
      "FPGA and ASIC design",
      "Aerospace and defense projects",
      "Hardware simulation and testing",
    ],
    funFact:
      "VHDL is an acronym inside an acronym: VHSIC Hardware Description Language, where VHSIC means \"Very High Speed Integrated Circuit\" — a US Department of Defense program.",
    url: "https://en.wikipedia.org/wiki/VHDL",
    spawnWeight: 0.5,
  },
  {
    id: "systemverilog",
    name: "SystemVerilog",
    abbr: "SV",
    category: "Hardware Description Lang",
    color: "#d35400",
    description:
      "SystemVerilog extends Verilog with powerful features for both designing and verifying hardware, including classes, constraints and assertions for thorough chip testing.",
    highlights: [
      "Chip verification testbenches",
      "UVM verification methodology",
      "Modern ASIC design",
    ],
    funFact:
      "SystemVerilog is standardized as IEEE 1800, and in 2009 the original Verilog standard was officially merged into it.",
    url: "https://en.wikipedia.org/wiki/SystemVerilog",
    spawnWeight: 0.5,
  },
  {
    id: "vivado",
    name: "Vivado",
    abbr: "Vi",
    category: "FPGA Design Suite",
    color: "#ed1c24",
    description:
      "Vivado is the design software for AMD (formerly Xilinx) FPGAs. It turns your hardware description into a configuration file the chip can load, and includes simulation and debugging tools.",
    highlights: [
      "Synthesizing FPGA designs",
      "Timing analysis and debugging",
      "Xilinx/AMD development boards",
    ],
    funFact:
      "Vivado replaced Xilinx's older ISE toolset in the 2010s, and the whole Xilinx line became part of AMD after AMD acquired Xilinx in 2022.",
    url: "https://www.amd.com/en/products/software/adaptive-socs-and-fpgas/vivado.html",
    spawnWeight: 0.5,
  },
  {
    id: "quartus",
    name: "Quartus",
    abbr: "Qu",
    category: "FPGA Design Suite",
    color: "#0071c5",
    description:
      "Quartus is the design software for Altera FPGAs. Engineers use it to compile hardware designs, check timing and program the chip.",
    highlights: [
      "Altera FPGA development",
      "Synthesis and place-and-route",
      "University FPGA lab courses",
    ],
    funFact:
      "Quartus was originally an Altera product; Intel bought Altera in 2015, so for years it was branded as Intel Quartus Prime.",
    url: "https://en.wikipedia.org/wiki/Intel_Quartus_Prime",
    spawnWeight: 0.5,
  },
  {
    id: "modelsim",
    name: "ModelSim",
    abbr: "Mo",
    category: "HDL Simulator",
    color: "#009999",
    description:
      "ModelSim is a simulator for hardware description languages like Verilog and VHDL. It lets you test and debug a circuit design with waveforms before putting it on real hardware.",
    highlights: [
      "Simulating Verilog and VHDL",
      "Waveform debugging",
      "Common in university labs",
    ],
    funFact:
      "ModelSim came from Mentor Graphics, which was acquired by Siemens in 2017 — so it now lives under Siemens EDA.",
    url: "https://en.wikipedia.org/wiki/ModelSim",
    spawnWeight: 0.5,
  },
  {
    id: "cadence",
    name: "Cadence",
    abbr: "Ca",
    category: "EDA Software",
    color: "#e2231a",
    description:
      "Cadence Design Systems makes electronic design automation (EDA) software that engineers use to design, simulate and verify chips and circuit boards.",
    highlights: [
      "Chip layout and verification",
      "Circuit board design",
      "Used by major chipmakers",
    ],
    funFact:
      "Cadence is one of the \"big three\" EDA companies alongside Synopsys and Siemens EDA — nearly every modern chip passes through their tools.",
    url: "https://www.cadence.com",
    spawnWeight: 0.5,
  },
  {
    id: "synopsys",
    name: "Synopsys",
    abbr: "Sy",
    category: "EDA Software",
    color: "#5a2a82",
    description:
      "Synopsys makes electronic design automation software that helps turn chip designs written in code into real circuits, plus tools for verification and chip IP.",
    highlights: [
      "Logic synthesis for chips",
      "Verification and simulation",
      "Licensed chip IP blocks",
    ],
    funFact:
      "Synopsys was founded in 1986 by Aart de Geus and colleagues, built around logic synthesis — automatically turning hardware code into gates.",
    url: "https://www.synopsys.com",
    spawnWeight: 0.5,
  },
];

export default entries;
