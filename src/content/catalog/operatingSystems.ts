import type { CatalogEntry } from "../types";

/** Operating Systems and Low-Level Computing */
const entries: CatalogEntry[] = [
  {
    id: "linux",
    name: "Linux",
    abbr: "Li",
    category: "Operating System",
    color: "#fcc624",
    description:
      "A free, open-source family of operating systems built around the Linux kernel. It runs most of the world’s servers, all of the top supercomputers and, via Android, billions of phones.",
    highlights: [
      "Web servers and cloud machines",
      "Developer workstations",
      "Embedded devices and routers",
    ],
    funFact:
      "Linus Torvalds announced Linux in 1991 as \"just a hobby, won’t be big and professional.\" The penguin mascot is named Tux.",
    url: "https://www.kernel.org",
  },
  {
    id: "windows",
    name: "Windows",
    abbr: "Wi",
    category: "Operating System",
    color: "#0078d4",
    description:
      "Microsoft’s operating system for PCs and laptops, the most widely used desktop OS in the world. It runs everything from games to office software.",
    highlights: [
      "Desktop and laptop PCs",
      "PC gaming",
      "Business software and .NET apps",
    ],
    funFact:
      "Microsoft skipped Windows 9 and jumped from Windows 8 straight to Windows 10 in 2015.",
    url: "https://www.microsoft.com/windows",
  },
  {
    id: "macos",
    name: "macOS",
    abbr: "Ma",
    category: "Operating System",
    color: "#a2aaad",
    description:
      "Apple’s operating system for Mac computers. Under the hood it’s Unix-based, which is one reason it’s popular with developers.",
    highlights: [
      "Mac desktops and laptops",
      "Building iOS and Mac apps with Xcode",
      "Creative work like video and music",
    ],
    funFact:
      "macOS is an officially certified UNIX. Its versions used to be named after big cats (Cheetah, Leopard…) and are now named after places in California.",
    url: "https://www.apple.com/macos/",
  },
  {
    id: "freebsd",
    name: "FreeBSD",
    abbr: "Fr",
    category: "Operating System",
    color: "#ab2b28",
    description:
      "A free Unix-like operating system descended from Berkeley’s BSD Unix. It’s known for solid networking, performance and a clean, complete base system.",
    highlights: [
      "High-performance servers",
      "Network appliances and firewalls",
      "Base for other systems",
    ],
    funFact:
      "FreeBSD’s mascot is a cute red daemon called Beastie. Netflix uses FreeBSD on its content delivery servers that stream video.",
    url: "https://www.freebsd.org",
    spawnWeight: 0.5,
  },
  {
    id: "openbsd",
    name: "OpenBSD",
    abbr: "Op",
    category: "Operating System",
    color: "#f2ca30",
    description:
      "A Unix-like operating system with a strong focus on security and correct code. Its developers audit code carefully and turn on protections by default.",
    highlights: [
      "Secure firewalls and routers",
      "Security research",
      "Home of OpenSSH",
    ],
    funFact:
      "OpenBSD’s team created OpenSSH, used on nearly every Linux server. Its mascot is a pufferfish named Puffy.",
    url: "https://www.openbsd.org",
    spawnWeight: 0.5,
  },
  {
    id: "android",
    name: "Android",
    abbr: "An",
    category: "Mobile OS",
    color: "#3ddc84",
    description:
      "Google’s mobile operating system, built on the Linux kernel. It runs on most of the world’s smartphones, plus tablets, TVs and watches.",
    highlights: [
      "Smartphones and tablets",
      "Apps in Kotlin and Java",
      "TVs, cars and wearables",
    ],
    funFact:
      "Android versions were nicknamed after desserts in alphabetical order — Cupcake, Donut, Eclair… up to Pie — before Google switched to plain numbers with Android 10.",
    url: "https://www.android.com",
  },
  {
    id: "ios",
    name: "iOS",
    abbr: "Io",
    category: "Mobile OS",
    color: "#147efb",
    description:
      "Apple’s operating system for the iPhone. Apps are built with Swift and distributed through the App Store.",
    highlights: [
      "iPhone apps",
      "Swift and SwiftUI development",
      "App Store distribution",
    ],
    funFact:
      "When the iPhone launched in 2007, its OS was just called \"iPhone OS\" and had no third-party App Store — that arrived a year later in 2008.",
    url: "https://developer.apple.com/ios/",
  },
  {
    id: "ubuntu",
    name: "Ubuntu",
    abbr: "Ub",
    category: "Linux Distribution",
    color: "#e95420",
    description:
      "A popular, beginner-friendly Linux distribution based on Debian. It’s widely used on desktops, servers and in the cloud.",
    highlights: [
      "Cloud servers and VMs",
      "Linux desktops for developers",
      "WSL on Windows",
    ],
    funFact:
      "Every Ubuntu release has an alliterative animal codename, like \"Warty Warthog\" (the first) and \"Jammy Jellyfish\". \"Ubuntu\" is a Southern African word often translated as \"humanity to others.\"",
    url: "https://ubuntu.com",
  },
  {
    id: "debian",
    name: "Debian",
    abbr: "De",
    category: "Linux Distribution",
    color: "#a80030",
    description:
      "One of the oldest community-run Linux distributions, famous for stability. Many others, including Ubuntu, are built on top of it.",
    highlights: [
      "Stable production servers",
      "Base for Ubuntu and others",
      "Docker base images",
    ],
    funFact:
      "Debian releases are named after Toy Story characters, like Buzz, Woody and Bookworm. The name \"Debian\" combines founder Ian Murdock’s first name with his then-girlfriend Debra’s.",
    url: "https://www.debian.org",
  },
  {
    id: "fedora",
    name: "Fedora",
    abbr: "Fe",
    category: "Linux Distribution",
    color: "#51a2da",
    description:
      "A community Linux distribution sponsored by Red Hat that ships the latest open-source tech quickly. It often tries new features before they reach enterprise Linux.",
    highlights: [
      "Developer workstations",
      "Testing cutting-edge Linux features",
      "Upstream for RHEL",
    ],
    funFact:
      "Fedora is named after the fedora hat in Red Hat’s logo — the red hat itself is a fedora.",
    url: "https://fedoraproject.org",
  },
  {
    id: "arch-linux",
    name: "Arch Linux",
    abbr: "AL",
    category: "Linux Distribution",
    color: "#1793d1",
    description:
      "A minimalist, rolling-release Linux distribution where you build your system piece by piece. It always has very recent software.",
    highlights: [
      "Customized developer setups",
      "Learning how Linux fits together",
      "Rolling-release updates",
    ],
    funFact:
      "\"I use Arch, btw\" became a running internet joke about Arch users. Its ArchWiki is so thorough that users of other distros rely on it too.",
    url: "https://archlinux.org",
  },
  {
    id: "red-hat-enterprise-linux",
    name: "Red Hat Enterprise Linux",
    abbr: "RH",
    category: "Linux Distribution",
    color: "#ee0000",
    description:
      "A commercial Linux distribution from Red Hat aimed at businesses, with long-term support and certified compatibility with enterprise software.",
    highlights: [
      "Enterprise data centers",
      "Long-term supported servers",
      "Banks, governments and telecoms",
    ],
    funFact:
      "IBM bought Red Hat in 2019 for about $34 billion, one of the largest software acquisitions in history.",
    url: "https://www.redhat.com/en/technologies/linux-platforms/enterprise-linux",
  },
  {
    id: "alpine-linux",
    name: "Alpine Linux",
    abbr: "AL",
    category: "Linux Distribution",
    color: "#0d597f",
    description:
      "A tiny, security-focused Linux distribution using musl and BusyBox. Its small size makes it very popular for Docker container images.",
    highlights: [
      "Small Docker base images",
      "Lightweight containers",
      "Routers and embedded systems",
    ],
    funFact:
      "The Alpine Linux base Docker image is only around 5 MB — tiny compared with hundreds of megabytes for some other distributions.",
    url: "https://alpinelinux.org",
  },
  {
    id: "windows-nt-kernel",
    name: "Windows NT Kernel",
    abbr: "NT",
    category: "OS Kernel",
    color: "#00a4ef",
    description:
      "The core of every modern version of Windows, from Windows XP to Windows 11. It manages hardware, memory and processes using a hybrid kernel design.",
    highlights: [
      "Core of Windows 10 and 11",
      "Windows Server systems",
      "Xbox operating systems",
    ],
    funFact:
      "Windows NT was led by Dave Cutler, who previously designed DEC’s VMS. Fans noticed that shifting each letter of \"VMS\" forward by one spells \"WNT\".",
    url: "https://en.wikipedia.org/wiki/Architecture_of_Windows_NT",
    spawnWeight: 0.5,
  },
  {
    id: "xnu",
    name: "XNU",
    abbr: "XN",
    category: "OS Kernel",
    color: "#6e6e73",
    description:
      "The kernel at the heart of macOS, iOS and Apple’s other systems. It’s a hybrid that combines the Mach microkernel with parts of BSD Unix.",
    highlights: [
      "Core of macOS and iOS",
      "Part of open-source Darwin",
      "Apple device drivers via IOKit",
    ],
    funFact:
      "XNU is a recursive acronym that stands for \"X is Not Unix\" — even though macOS is officially certified as Unix.",
    url: "https://github.com/apple-oss-distributions/xnu",
    spawnWeight: 0.5,
  },
  {
    id: "mach",
    name: "Mach",
    abbr: "MA",
    category: "Microkernel",
    color: "#7c3aed",
    description:
      "A research operating system kernel from Carnegie Mellon University that moved many OS services out of the kernel. It became a key part of Apple’s XNU kernel.",
    highlights: [
      "Foundation of Apple’s XNU",
      "Operating systems research",
      "Inspired GNU Hurd",
    ],
    funFact:
      "Mach was developed at Carnegie Mellon in the 1980s; Avie Tevanian, one of its developers, later led software at NeXT and Apple, bringing Mach along.",
    url: "https://en.wikipedia.org/wiki/Mach_(kernel)",
    spawnWeight: 0.5,
  },
  {
    id: "minix",
    name: "MINIX",
    abbr: "MI",
    category: "Operating System",
    color: "#3c6e9f",
    description:
      "A small Unix-like operating system created for teaching how operating systems work. Its later versions use a microkernel design.",
    highlights: [
      "Teaching OS concepts",
      "Microkernel research",
      "Inspired the creation of Linux",
    ],
    funFact:
      "MINIX was written by Andrew Tanenbaum and inspired Linus Torvalds to build Linux; the two famously debated microkernels vs. monolithic kernels online in 1992.",
    url: "https://en.wikipedia.org/wiki/Minix",
    spawnWeight: 0.5,
  },
  {
    id: "sel4",
    name: "seL4",
    abbr: "L4",
    category: "Microkernel",
    color: "#2e7d32",
    description:
      "A tiny microkernel that has been mathematically proven to work exactly as its specification says. It’s used where security truly matters.",
    highlights: [
      "Defense and aerospace systems",
      "High-assurance security",
      "Formal verification research",
    ],
    funFact:
      "seL4 was the first general-purpose OS kernel with a machine-checked mathematical proof that its C code is free of whole classes of bugs.",
    url: "https://sel4.systems",
    spawnWeight: 0.5,
  },
  {
    id: "system-calls",
    name: "System Calls",
    abbr: "SC",
    category: "OS Concept",
    color: "#0891b2",
    description:
      "The way a program asks the operating system kernel to do something it can’t do itself, like reading a file, opening a network connection or starting a process.",
    highlights: [
      "Reading and writing files",
      "Creating processes and threads",
      "Network and memory requests",
    ],
    funFact:
      "On Linux you can watch every system call a program makes using a tool called strace — even a simple \"hello world\" makes dozens of them.",
    url: "https://en.wikipedia.org/wiki/System_call",
  },
  {
    id: "kernel-development",
    name: "Kernel Development",
    abbr: "KD",
    category: "Systems Programming",
    color: "#dc2626",
    description:
      "Writing and improving the core of an operating system. It’s low-level work in languages like C (and increasingly Rust) where a single bug can crash the whole machine.",
    highlights: [
      "Writing drivers and subsystems",
      "Contributing to Linux",
      "Performance and security fixes",
    ],
    funFact:
      "Linux kernel patches are still reviewed and submitted mostly by plain-text email on mailing lists, not through pull requests on a website.",
    url: "https://docs.kernel.org/process/development-process.html",
    spawnWeight: 0.5,
  },
  {
    id: "memory-management",
    name: "Memory Management",
    abbr: "MM",
    category: "OS Concept",
    color: "#16a34a",
    description:
      "How an operating system hands out RAM to programs, keeps them from stepping on each other, and takes memory back when they’re done.",
    highlights: [
      "Allocating memory to processes",
      "Preventing memory conflicts",
      "Swapping data to disk",
    ],
    funFact:
      "When Linux completely runs out of memory, a component called the \"OOM killer\" picks a process to terminate so the rest of the system can survive.",
    url: "https://en.wikipedia.org/wiki/Memory_management_(operating_systems)",
  },
  {
    id: "virtual-memory",
    name: "Virtual Memory",
    abbr: "VM",
    category: "OS Concept",
    color: "#9333ea",
    description:
      "A trick where each program gets its own private, pretend address space. The OS and hardware map it to real RAM (or disk) behind the scenes.",
    highlights: [
      "Isolating programs from each other",
      "Running apps larger than RAM",
      "Page tables and swapping",
    ],
    funFact:
      "Virtual memory was pioneered on the Atlas computer at the University of Manchester around 1962 — the idea is older than the Moon landing.",
    url: "https://en.wikipedia.org/wiki/Virtual_memory",
  },
  {
    id: "process-scheduling",
    name: "Process Scheduling",
    abbr: "PS",
    category: "OS Concept",
    color: "#ea580c",
    description:
      "How the OS decides which program gets to use the CPU and for how long. Switching rapidly between programs makes them all seem to run at once.",
    highlights: [
      "Sharing CPU time fairly",
      "Keeping apps responsive",
      "Real-time task priorities",
    ],
    funFact:
      "For many years Linux used a scheduler called CFS, the \"Completely Fair Scheduler\", which tracked how much CPU time each task had received to keep things fair.",
    url: "https://en.wikipedia.org/wiki/Scheduling_(computing)",
    spawnWeight: 0.5,
  },
  {
    id: "multithreading",
    name: "Multithreading",
    abbr: "MT",
    category: "Programming Concept",
    color: "#0284c7",
    description:
      "Running several threads — independent paths of execution — inside one program at the same time, so work can happen in parallel or in the background.",
    highlights: [
      "Using multiple CPU cores",
      "Keeping UIs responsive",
      "Handling many requests at once",
    ],
    funFact:
      "Threads in the same program share memory, which is fast but tricky: two threads updating the same value at once can cause a \"race condition\" bug.",
    url: "https://en.wikipedia.org/wiki/Multithreading_(computer_architecture)",
  },
  {
    id: "concurrency",
    name: "Concurrency",
    abbr: "Co",
    category: "Programming Concept",
    color: "#db2777",
    description:
      "Structuring a program so several tasks can make progress during overlapping time periods, whether truly in parallel or by taking turns.",
    highlights: [
      "Async code and event loops",
      "Locks, mutexes and channels",
      "Servers handling many users",
    ],
    funFact:
      "Go’s Rob Pike summed it up: \"Concurrency is not parallelism\" — concurrency is about dealing with many things at once; parallelism is about doing them at once.",
    url: "https://en.wikipedia.org/wiki/Concurrency_(computer_science)",
  },
  {
    id: "interrupt-handling",
    name: "Interrupt Handling",
    abbr: "IH",
    category: "OS Concept",
    color: "#e11d48",
    description:
      "How a CPU pauses what it’s doing to respond to an urgent signal, like a key press or incoming network data, then resumes where it left off.",
    highlights: [
      "Responding to keyboard and mouse",
      "Hardware timers and I/O",
      "Embedded real-time systems",
    ],
    funFact:
      "IRQ stands for Interrupt ReQuest. On old PCs, two devices sharing the same IRQ number was a classic source of hardware conflicts.",
    url: "https://en.wikipedia.org/wiki/Interrupt",
    spawnWeight: 0.5,
  },
  {
    id: "device-drivers",
    name: "Device Drivers",
    abbr: "DD",
    category: "OS Concept",
    color: "#65a30d",
    description:
      "Software that teaches the operating system how to talk to a specific piece of hardware, like a graphics card, printer or Wi-Fi chip.",
    highlights: [
      "Graphics and GPU support",
      "Printers, USB and Wi-Fi",
      "Kernel modules in Linux",
    ],
    funFact:
      "Device drivers make up the majority of the Linux kernel’s source code — far more than the core scheduling and memory code.",
    url: "https://en.wikipedia.org/wiki/Device_driver",
  },
  {
    id: "file-systems",
    name: "File Systems",
    abbr: "FS",
    category: "OS Concept",
    color: "#ca8a04",
    description:
      "The way an operating system organizes data on a disk into files and folders, keeping track of where everything is stored.",
    highlights: [
      "Organizing files and folders",
      "Permissions and metadata",
      "Recovering from crashes",
    ],
    funFact:
      "On Unix-like systems, \"everything is a file\" — even hardware devices and running processes show up as files you can read.",
    url: "https://en.wikipedia.org/wiki/File_system",
  },
  {
    id: "ext4",
    name: "ext4",
    abbr: "Ex",
    category: "File System",
    color: "#f97316",
    description:
      "The fourth extended file system and the default for many Linux distributions. It’s reliable, fast and uses journaling to recover from crashes.",
    highlights: [
      "Default Linux file system",
      "Server and desktop drives",
      "Journaling for crash safety",
    ],
    funFact:
      "ext4 supports file systems up to 1 exabyte in size — that’s about a million terabytes.",
    url: "https://en.wikipedia.org/wiki/Ext4",
  },
  {
    id: "btrfs",
    name: "Btrfs",
    abbr: "BT",
    category: "File System",
    color: "#0d9488",
    description:
      "A modern Linux file system with snapshots, checksums and built-in volume management. It uses copy-on-write so data isn’t overwritten in place.",
    highlights: [
      "Instant system snapshots",
      "Data integrity checksums",
      "Default on Fedora workstations",
    ],
    funFact:
      "Btrfs stands for \"B-tree file system\", and people pronounce it all sorts of ways — \"butter F S\", \"better F S\" or \"B-tree F S\".",
    url: "https://btrfs.readthedocs.io",
    spawnWeight: 0.5,
  },
  {
    id: "zfs",
    name: "ZFS",
    abbr: "ZF",
    category: "File System",
    color: "#2a667f",
    description:
      "A powerful file system and volume manager known for protecting data. It checksums everything, detects corruption and can repair it automatically.",
    highlights: [
      "NAS and storage servers",
      "Snapshots and replication",
      "Protecting against bit rot",
    ],
    funFact:
      "ZFS was created at Sun Microsystems; its name originally stood for \"Zettabyte File System\" because it was designed to handle unimaginably large amounts of data.",
    url: "https://openzfs.org",
    spawnWeight: 0.5,
  },
  {
    id: "xfs",
    name: "XFS",
    abbr: "XF",
    category: "File System",
    color: "#4f46e5",
    description:
      "A high-performance journaling file system that excels with very large files and parallel I/O. It’s the default file system on Red Hat Enterprise Linux.",
    highlights: [
      "Large-file storage servers",
      "Default on RHEL",
      "Media and scientific data",
    ],
    funFact:
      "XFS was created by Silicon Graphics (SGI) in 1993 for its IRIX workstations, the machines famous for Hollywood visual effects.",
    url: "https://en.wikipedia.org/wiki/XFS",
    spawnWeight: 0.5,
  },
  {
    id: "ntfs",
    name: "NTFS",
    abbr: "NT",
    category: "File System",
    color: "#0067b8",
    description:
      "The standard file system for Windows. It supports large files, permissions, encryption and journaling to recover from crashes.",
    highlights: [
      "Windows system drives",
      "File permissions and encryption",
      "Large external hard drives",
    ],
    funFact:
      "NTFS stands for \"New Technology File System\" and debuted with Windows NT 3.1 in 1993.",
    url: "https://en.wikipedia.org/wiki/NTFS",
  },
  {
    id: "fat32",
    name: "FAT32",
    abbr: "FT",
    category: "File System",
    color: "#64748b",
    description:
      "An old, simple file system that almost every device can read. Its big limitation is that single files can’t be larger than 4 GB.",
    highlights: [
      "USB sticks and SD cards",
      "Cross-device compatibility",
      "EFI boot partitions",
    ],
    funFact:
      "FAT stands for \"File Allocation Table\". The 4 GB per-file limit is why copying a big movie onto an old USB stick often fails.",
    url: "https://en.wikipedia.org/wiki/File_Allocation_Table",
  },
  {
    id: "exfat",
    name: "exFAT",
    abbr: "eF",
    category: "File System",
    color: "#475569",
    description:
      "A Microsoft file system designed for flash drives and memory cards. It removes FAT32’s 4 GB file limit while staying simple and widely supported.",
    highlights: [
      "SDXC memory cards",
      "Large USB flash drives",
      "Sharing drives between Mac and PC",
    ],
    funFact:
      "exFAT is the required file system for SDXC memory cards, which is why your camera’s large SD card probably uses it.",
    url: "https://en.wikipedia.org/wiki/ExFAT",
    spawnWeight: 0.5,
  },
  {
    id: "apfs",
    name: "APFS",
    abbr: "AP",
    category: "File System",
    color: "#8e8e93",
    description:
      "Apple File System, used on Macs, iPhones and other Apple devices. It’s optimized for SSDs and supports snapshots, cloning and strong encryption.",
    highlights: [
      "macOS and iOS storage",
      "Time Machine snapshots",
      "Encrypted SSD volumes",
    ],
    funFact:
      "Apple switched hundreds of millions of iPhones to APFS in 2017 through a regular iOS update — converting the file system in place without wiping devices.",
    url: "https://developer.apple.com/documentation/foundation/file_system/about_apple_file_system",
    spawnWeight: 0.5,
  },
  {
    id: "f2fs",
    name: "F2FS",
    abbr: "F2",
    category: "File System",
    color: "#1428a0",
    description:
      "Flash-Friendly File System, designed by Samsung for flash storage like phone memory and SSDs. It writes data in a way that suits how flash chips work.",
    highlights: [
      "Android phone storage",
      "SD cards and eMMC",
      "Extending flash lifespan",
    ],
    funFact:
      "F2FS was developed by Samsung and merged into the Linux kernel in 2012; many Android phones now use it for their data partitions.",
    url: "https://en.wikipedia.org/wiki/F2FS",
    spawnWeight: 0.5,
  },
  {
    id: "bios",
    name: "BIOS",
    abbr: "BI",
    category: "Firmware",
    color: "#2563eb",
    description:
      "The Basic Input/Output System: firmware that starts up a PC, checks the hardware, then hands control to the operating system. It’s been largely replaced by UEFI.",
    highlights: [
      "Booting older PCs",
      "Hardware power-on self test",
      "Configuring boot order",
    ],
    funFact:
      "When the BIOS self-test finds a problem before the screen works, it reports it with \"beep codes\" — patterns of beeps that tell you what’s wrong.",
    url: "https://en.wikipedia.org/wiki/BIOS",
  },
  {
    id: "uefi",
    name: "UEFI",
    abbr: "UE",
    category: "Firmware",
    color: "#3b82f6",
    description:
      "The modern replacement for BIOS that starts up computers. It supports large disks, graphical setup menus, faster boots and Secure Boot.",
    highlights: [
      "Booting modern PCs",
      "Secure Boot support",
      "Large GPT-partitioned disks",
    ],
    funFact:
      "UEFI grew out of Intel’s EFI, which was first created for Itanium servers in the late 1990s because the old BIOS couldn’t cope with them.",
    url: "https://uefi.org",
  },
  {
    id: "grub",
    name: "GRUB",
    abbr: "GR",
    category: "Bootloader",
    color: "#7c2d12",
    description:
      "The GRand Unified Bootloader: the program that loads the Linux kernel at startup and lets you pick between multiple operating systems.",
    highlights: [
      "Booting Linux distributions",
      "Dual-booting Linux and Windows",
      "Recovery boot options",
    ],
    funFact:
      "GRUB is part of the GNU Project, and its menu is the screen many Linux users see first when dual-booting with Windows.",
    url: "https://www.gnu.org/software/grub/",
  },
  {
    id: "u-boot",
    name: "U-Boot",
    abbr: "UB",
    category: "Bootloader",
    color: "#0e7490",
    description:
      "Das U-Boot is an open-source bootloader for embedded devices. It initializes hardware and loads the operating system on boards, routers and other gadgets.",
    highlights: [
      "Booting embedded Linux boards",
      "Routers and IoT devices",
      "Loading firmware over network",
    ],
    funFact:
      "Its full name \"Das U-Boot\" is a German pun — U-Boot means submarine, a nod to the classic 1981 movie \"Das Boot\".",
    url: "https://u-boot.org",
    spawnWeight: 0.5,
  },
  {
    id: "coreboot",
    name: "Coreboot",
    abbr: "CB",
    category: "Firmware",
    color: "#4d7c0f",
    description:
      "Open-source firmware that replaces the proprietary BIOS or UEFI on some computers. It does the bare minimum to start the hardware, then hands off quickly.",
    highlights: [
      "Firmware on Chromebooks",
      "Fast, minimal boot",
      "Open hardware projects",
    ],
    funFact:
      "Coreboot started in 1999 as LinuxBIOS, and every Chromebook uses coreboot as its firmware.",
    url: "https://www.coreboot.org",
    spawnWeight: 0.5,
  },
  {
    id: "secure-boot",
    name: "Secure Boot",
    abbr: "SB",
    category: "Security Feature",
    color: "#059669",
    description:
      "A UEFI feature that only lets software signed by trusted keys run during startup. It blocks malware that tries to load before the operating system.",
    highlights: [
      "Blocking bootkit malware",
      "Required for Windows 11",
      "Signed Linux bootloaders",
    ],
    funFact:
      "Many Linux distributions boot with Secure Boot using a small Microsoft-signed program called \"shim\", which then verifies the distro’s own bootloader.",
    url: "https://en.wikipedia.org/wiki/UEFI#Secure_Boot",
  },
];

export default entries;
