import type { CatalogEntry } from "../types";

/** Game Development */
const entries: CatalogEntry[] = [
  {
    id: "unity",
    name: "Unity",
    abbr: "U",
    category: "Game Engine",
    color: "#4a7fc1",
    description:
      "A hugely popular game engine for making 2D and 3D games in C#. You build scenes in a visual editor, attach scripts to objects, and export to phones, PCs, consoles and VR headsets.",
    highlights: [
      "Mobile and indie games",
      "VR and AR experiences",
      "Exporting to many platforms at once",
    ],
    funFact:
      "Unity was first announced at Apple’s WWDC in 2005 as a Mac-only engine; later hits made with it include Hollow Knight, Cuphead and Pokémon GO.",
    url: "https://unity.com",
  },
  {
    id: "unreal-engine",
    name: "Unreal Engine",
    abbr: "UE",
    category: "Game Engine",
    color: "#5a6bd8",
    description:
      "Epic Games’ powerful engine for high-end 3D games, written in C++ with a visual scripting system called Blueprints. It is also used for films, TV and architecture visualization.",
    highlights: [
      "AAA console and PC games",
      "Virtual production for film and TV",
      "Visual scripting with Blueprints",
    ],
    funFact:
      "The engine debuted with Epic’s 1998 shooter Unreal, and today it also powers Epic’s own mega-hit Fortnite.",
    url: "https://www.unrealengine.com",
  },
  {
    id: "godot",
    name: "Godot",
    abbr: "Gd",
    category: "Game Engine",
    color: "#478cbf",
    description:
      "A free and open-source engine for 2D and 3D games. Games are built from a tree of nodes, and you script them in GDScript, a Python-like language, or in C#.",
    highlights: [
      "Indie 2D and 3D games",
      "Lightweight, fully open-source engine",
      "Game jams and learning gamedev",
    ],
    funFact:
      "It’s named after Samuel Beckett’s play \"Waiting for Godot\" — a nod to the idea that the engine is never truly finished, always waiting for new features.",
    url: "https://godotengine.org",
  },
  {
    id: "gamemaker",
    name: "GameMaker",
    abbr: "GM",
    category: "Game Engine",
    color: "#039e5c",
    description:
      "A beginner-friendly engine focused on 2D games. You can start with drag-and-drop visual actions and move on to its own scripting language, GML, as your games grow.",
    highlights: [
      "2D indie and pixel-art games",
      "Learning game development",
      "Exporting to PC, mobile and consoles",
    ],
    funFact:
      "GameMaker was created by Dutch professor Mark Overmars, and it was used to make Undertale and the original Spelunky.",
    url: "https://gamemaker.io",
  },
  {
    id: "construct",
    name: "Construct",
    abbr: "C3",
    category: "Game Engine",
    color: "#00a3e0",
    description:
      "A no-code 2D game engine that runs in your web browser. Instead of writing code, you create game logic with \"event sheets\" of conditions and actions, with JavaScript available when you need it.",
    highlights: [
      "2D games without coding",
      "Teaching game design in schools",
      "Exporting HTML5 web games",
    ],
    funFact:
      "Construct’s editor itself runs inside a web browser, so you can make games on almost any computer without installing anything.",
    url: "https://www.construct.net",
    spawnWeight: 0.5,
  },
  {
    id: "defold",
    name: "Defold",
    abbr: "Df",
    category: "Game Engine",
    color: "#fd6623",
    description:
      "A free, lightweight engine for 2D and 3D games scripted in Lua. It is known for tiny build sizes and fast performance, which makes it great for mobile and web games.",
    highlights: [
      "Small, fast mobile games",
      "HTML5 web games",
      "Lua scripting",
    ],
    funFact:
      "Defold was used internally at King, the maker of Candy Crush, before being released for free and handed to the independent Defold Foundation.",
    url: "https://defold.com",
    spawnWeight: 0.5,
  },
  {
    id: "cocos-creator",
    name: "Cocos Creator",
    abbr: "Cc",
    category: "Game Engine",
    color: "#55c2e1",
    description:
      "An open-source game engine and editor for 2D and 3D games, scripted with TypeScript or JavaScript. It is especially popular for mobile and mini-games, particularly in Asia.",
    highlights: [
      "Mobile 2D and 3D games",
      "Web and mini-game platforms",
      "TypeScript game scripting",
    ],
    funFact:
      "The Cocos family began with cocos2d, a Python framework, before its C++ descendant cocos2d-x became a staple of mobile game development.",
    url: "https://www.cocos.com/en/creator",
    spawnWeight: 0.5,
  },
  {
    id: "phaser",
    name: "Phaser",
    abbr: "Ph",
    category: "HTML5 Game Framework",
    color: "#8c4fff",
    description:
      "A popular JavaScript framework for making 2D games that run in the browser. It handles sprites, animations, input, sound and physics so you can focus on gameplay.",
    highlights: [
      "Browser-based 2D games",
      "Game jams and prototypes",
      "Mobile web and playable ads",
    ],
    funFact:
      "Phaser was created by Richard Davey of Photon Storm, and thousands of free examples on its website make it a favorite for learning.",
    url: "https://phaser.io",
  },
  {
    id: "babylonjs",
    name: "Babylon.js",
    abbr: "Bab",
    category: "3D Web Engine",
    color: "#bb464b",
    description:
      "An open-source JavaScript engine for 3D games and experiences in the browser. It builds on WebGL and WebGPU and includes physics, materials, an inspector and a web playground.",
    highlights: [
      "3D games in the browser",
      "Product viewers and configurators",
      "WebXR virtual reality",
    ],
    funFact:
      "Babylon.js began as a side project by two Microsoft employees, David Catuhe and David Rousset, and grew into a major open-source engine.",
    url: "https://www.babylonjs.com",
  },
  {
    id: "playcanvas",
    name: "PlayCanvas",
    abbr: "PC",
    category: "3D Web Engine",
    color: "#e3611f",
    description:
      "An open-source WebGL and WebGPU game engine with a browser-based editor. Several people can work in the same project at once, a bit like Google Docs for 3D scenes.",
    highlights: [
      "Browser 3D games and ads",
      "Collaborative real-time editing",
      "Interactive product showcases",
    ],
    funFact:
      "PlayCanvas was acquired by Snap Inc., the company behind Snapchat, in 2017.",
    url: "https://playcanvas.com",
    spawnWeight: 0.5,
  },
  {
    id: "bevy",
    name: "Bevy",
    abbr: "Bevy",
    category: "Game Engine",
    color: "#4a6b8a",
    description:
      "A free, open-source game engine written in Rust. It is built around an Entity Component System, so game objects are just bundles of data processed by simple functions called systems.",
    highlights: [
      "Rust game development",
      "Data-driven ECS architecture",
      "2D and 3D indie projects",
    ],
    funFact:
      "In Bevy, even the engine’s own features — rendering, audio, input — are plugins, so you can swap out or skip almost any piece.",
    url: "https://bevyengine.org",
    spawnWeight: 0.5,
  },
  {
    id: "love2d",
    name: "LÖVE",
    abbr: "LÖVE",
    category: "2D Game Framework",
    color: "#e74a99",
    description:
      "A free framework for making 2D games in the Lua programming language. It gives you simple functions for drawing, sound and input, and you write the rest of the game yourself.",
    highlights: [
      "2D indie games",
      "Game jams and quick prototypes",
      "Learning game programming with Lua",
    ],
    funFact:
      "The hit deck-building game Balatro was made with LÖVE, proving a small, simple framework can power a massive success.",
    url: "https://love2d.org",
  },
  {
    id: "stride",
    name: "Stride",
    abbr: "Str",
    category: "Game Engine",
    color: "#c61c34",
    description:
      "A free, open-source game engine for C# developers on .NET. It includes a full editor and a modern renderer for 2D, 3D and VR games.",
    highlights: [
      "C# and .NET game development",
      "3D and VR projects",
      "Open-source alternative engine",
    ],
    funFact:
      "Stride was originally created by Silicon Studio under the name Paradox, then renamed Xenko, before becoming Stride and going open-source.",
    url: "https://www.stride3d.net",
    spawnWeight: 0.5,
  },
  {
    id: "cryengine",
    name: "CryEngine",
    abbr: "CE",
    category: "Game Engine",
    color: "#3a8fd6",
    description:
      "Crytek’s high-end 3D game engine, famous for realistic graphics, lush forests and lighting. It is used for first-person shooters and big open-world games.",
    highlights: [
      "Photorealistic 3D games",
      "Large outdoor environments",
      "First-person shooters",
    ],
    funFact:
      "CryEngine’s Crysis (2007) was so demanding that \"But can it run Crysis?\" became a long-running joke about any new computer.",
    url: "https://www.cryengine.com",
  },
  {
    id: "o3de",
    name: "O3DE",
    abbr: "O3DE",
    category: "Game Engine",
    color: "#00a0e5",
    description:
      "Open 3D Engine is a free, open-source, modular 3D engine for games and simulations. It is run by a Linux Foundation community and lets you pick only the modules (Gems) you need.",
    highlights: [
      "AAA-style 3D games",
      "Simulation and robotics",
      "Modular engine with Gems",
    ],
    funFact:
      "O3DE grew out of Amazon’s Lumberyard engine, which itself was originally based on CryEngine.",
    url: "https://o3de.org",
    spawnWeight: 0.5,
  },
  {
    id: "opengl",
    name: "OpenGL",
    abbr: "GL",
    category: "Graphics API",
    color: "#5586a4",
    description:
      "A cross-platform API for drawing 2D and 3D graphics using the graphics card. Programs send it shapes, textures and shaders, and the GPU turns them into pixels on screen.",
    highlights: [
      "Cross-platform 3D rendering",
      "Learning graphics programming",
      "CAD and scientific visualization",
    ],
    funFact:
      "OpenGL was released in 1992 by Silicon Graphics, based on the company’s own IRIS GL library for its high-end workstations.",
    url: "https://www.khronos.org/opengl/",
  },
  {
    id: "vulkan",
    name: "Vulkan",
    abbr: "Vk",
    category: "Graphics API",
    color: "#ac162c",
    description:
      "A modern, low-level graphics and compute API from the Khronos Group. It gives programmers very direct control over the GPU, which means more work but better performance.",
    highlights: [
      "High-performance game rendering",
      "Android and Linux graphics",
      "Multithreaded GPU workloads",
    ],
    funFact:
      "Vulkan grew out of AMD’s Mantle API, which AMD donated to the Khronos Group as a starting point.",
    url: "https://www.vulkan.org",
  },
  {
    id: "directx",
    name: "DirectX",
    abbr: "DX",
    category: "Multimedia API",
    color: "#107c10",
    description:
      "Microsoft’s collection of APIs for games and multimedia on Windows and Xbox. It includes Direct3D for graphics plus tools for input and audio.",
    highlights: [
      "Windows PC games",
      "Xbox game development",
      "GPU-accelerated graphics",
    ],
    funFact:
      "The Xbox got its name from \"DirectX Box\", since the console was designed around Microsoft’s DirectX technology.",
    url: "https://learn.microsoft.com/en-us/windows/win32/directx",
  },
  {
    id: "webgl",
    name: "WebGL",
    abbr: "WGL",
    category: "Graphics API",
    color: "#990000",
    description:
      "A JavaScript API that lets web pages draw fast 2D and 3D graphics using the GPU, right inside the browser’s <canvas> element, with no plugins needed.",
    highlights: [
      "3D graphics in the browser",
      "Powering Three.js and Babylon.js",
      "Data visualizations and maps",
    ],
    funFact:
      "WebGL is based on OpenGL ES 2.0, the same graphics API family used on early smartphones, which is why it runs on almost any device.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/WebGL_API",
  },
  {
    id: "webgpu",
    name: "WebGPU",
    abbr: "WGPU",
    category: "Graphics API",
    color: "#005a9c",
    description:
      "The modern successor to WebGL for using the GPU from the web. It is designed after APIs like Vulkan, Metal and Direct3D 12 and supports both graphics and general-purpose computation.",
    highlights: [
      "Next-gen browser 3D graphics",
      "Running AI models in the browser",
      "GPU compute shaders on the web",
    ],
    funFact:
      "Unlike WebGL, WebGPU supports compute shaders, so browsers can use the graphics card for non-graphics work like machine learning.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/WebGPU_API",
  },
  {
    id: "threejs",
    name: "Three.js",
    abbr: "3JS",
    category: "3D Graphics Library",
    color: "#049ef4",
    description:
      "The most popular JavaScript library for 3D graphics on the web. It wraps WebGL in friendly objects like scenes, cameras, lights and meshes, so you can build 3D without raw GPU code.",
    highlights: [
      "Interactive 3D websites",
      "Browser games and demos",
      "Product and data visualizations",
    ],
    funFact:
      "Three.js was created by Ricardo Cabello, known online as \"mrdoob\", who first wrote it in ActionScript before porting it to JavaScript.",
    url: "https://threejs.org",
  },
  {
    id: "glsl",
    name: "GLSL",
    abbr: "GLSL",
    category: "Shading Language",
    color: "#5586a4",
    description:
      "The OpenGL Shading Language, a C-like language for writing shaders — small programs that run on the GPU to position vertices and color every pixel. It is also used in WebGL.",
    highlights: [
      "Writing vertex and fragment shaders",
      "Visual effects in WebGL",
      "Creative coding on Shadertoy",
    ],
    funFact:
      "On the website Shadertoy, people create entire animated 3D scenes using nothing but a single GLSL fragment shader — no models at all.",
    url: "https://en.wikipedia.org/wiki/OpenGL_Shading_Language",
  },
  {
    id: "hlsl",
    name: "HLSL",
    abbr: "HLSL",
    category: "Shading Language",
    color: "#0078d4",
    description:
      "The High-Level Shading Language is Microsoft’s C-like language for writing GPU shaders for Direct3D. It is used to create lighting, materials and effects in many PC and Xbox games.",
    highlights: [
      "Direct3D shaders",
      "Unity and Unreal shader code",
      "Compute shaders on Windows",
    ],
    funFact:
      "Thanks to Microsoft’s DXC compiler, HLSL can be compiled to SPIR-V, so the same shader language is now used for Vulkan games too.",
    url: "https://learn.microsoft.com/en-us/windows/win32/direct3dhlsl/dx-graphics-hlsl",
  },
  {
    id: "wgsl",
    name: "WGSL",
    abbr: "WGSL",
    category: "Shading Language",
    color: "#005a9c",
    description:
      "The WebGPU Shading Language, used to write shaders for WebGPU in the browser. It describes how vertices are placed, how pixels are colored, and how compute work runs on the GPU.",
    highlights: [
      "WebGPU render pipelines",
      "Browser compute shaders",
      "Portable GPU code for the web",
    ],
    funFact:
      "WGSL’s syntax, with keywords like fn, let and var, looks a lot like Rust — a deliberate break from the C-style look of GLSL and HLSL.",
    url: "https://www.w3.org/TR/WGSL/",
    spawnWeight: 0.5,
  },
  {
    id: "box2d",
    name: "Box2D",
    abbr: "B2D",
    category: "Physics Engine",
    color: "#8ccc49",
    description:
      "A free 2D physics engine that simulates rigid bodies — boxes, circles and polygons that fall, bounce, stack and collide realistically. Many engines and frameworks build on it.",
    highlights: [
      "2D platformers and puzzle games",
      "Ragdolls, joints and stacking",
      "Ported to many languages",
    ],
    funFact:
      "Box2D was created by Erin Catto, and it famously powered the physics of the original Angry Birds.",
    url: "https://box2d.org",
  },
  {
    id: "bullet-physics",
    name: "Bullet Physics",
    abbr: "BLT",
    category: "Physics Engine",
    color: "#d9534f",
    description:
      "An open-source 3D physics engine for collisions, rigid bodies and soft bodies. It has been used in games, movie visual effects and robotics research.",
    highlights: [
      "3D game physics",
      "Robotics simulation with PyBullet",
      "Physics in 3D animation tools",
    ],
    funFact:
      "Bullet was created by Erwin Coumans, and its Python version, PyBullet, became a popular tool for training robots in simulation.",
    url: "https://github.com/bulletphysics/bullet3",
    spawnWeight: 0.5,
  },
  {
    id: "physx",
    name: "PhysX",
    abbr: "PhX",
    category: "Physics Engine",
    color: "#76b900",
    description:
      "NVIDIA’s real-time physics engine for 3D games and simulations. It handles collisions, rigid bodies, cloth and more, and has been built into engines like Unity and Unreal.",
    highlights: [
      "3D game physics",
      "Robotics and industrial simulation",
      "Vehicle and ragdoll physics",
    ],
    funFact:
      "PhysX came from Ageia, a company that sold dedicated \"physics processing unit\" add-in cards, before NVIDIA bought it in 2008.",
    url: "https://developer.nvidia.com/physx-sdk",
  },
  {
    id: "havok",
    name: "Havok",
    abbr: "Hvk",
    category: "Physics Engine",
    color: "#f2a900",
    description:
      "A commercial physics engine used in many big-budget games. It simulates collisions, falling objects and character ragdolls fast enough to run smoothly in real time.",
    highlights: [
      "AAA game physics",
      "Destruction and ragdoll effects",
      "Console and PC games",
    ],
    funFact:
      "Havok was founded in Dublin, Ireland, and its physics made Half-Life 2’s gravity gun so fun to play with; it’s now owned by Microsoft.",
    url: "https://www.havok.com",
  },
  {
    id: "rapier",
    name: "Rapier",
    abbr: "Rap",
    category: "Physics Engine",
    color: "#e2a33b",
    description:
      "A fast 2D and 3D physics engine written in Rust. It also compiles to WebAssembly, so JavaScript games and web apps can use it for realistic collisions and movement.",
    highlights: [
      "Rust and Bevy game physics",
      "Web physics via WebAssembly",
      "Deterministic simulations",
    ],
    funFact:
      "Rapier is made by Dimforge, which also builds other Rust math and geometry libraries like nalgebra and parry.",
    url: "https://rapier.rs",
    spawnWeight: 0.5,
  },
  {
    id: "matterjs",
    name: "Matter.js",
    abbr: "MJS",
    category: "Physics Engine",
    color: "#4b5fe1",
    description:
      "A 2D physics engine written in JavaScript for the web. It simulates bouncing, stacking and colliding shapes, and includes a renderer for quick demos.",
    highlights: [
      "2D physics in browser games",
      "Interactive website effects",
      "Phaser’s Matter physics mode",
    ],
    funFact:
      "Matter.js was created by Liam Brummitt, and Phaser includes it as one of its built-in physics options.",
    url: "https://brm.io/matter-js/",
    spawnWeight: 0.5,
  },
  {
    id: "jolt-physics",
    name: "Jolt Physics",
    abbr: "Jolt",
    category: "Physics Engine",
    color: "#f5c518",
    description:
      "A fast, multithreaded open-source 3D physics engine written in C++. It is designed for games and VR and can simulate many bodies at once on modern CPUs.",
    highlights: [
      "3D game physics",
      "Multithreaded simulations",
      "Used as a Godot physics option",
    ],
    funFact:
      "Jolt was created by Jorrit Rouwe and was used in Guerrilla Games’ Horizon Forbidden West.",
    url: "https://github.com/jrouwe/JoltPhysics",
    spawnWeight: 0.5,
  },
  {
    id: "cannonjs",
    name: "Cannon.js",
    abbr: "Cnn",
    category: "Physics Engine",
    color: "#6c7a89",
    description:
      "A lightweight 3D physics engine written in JavaScript. It is often paired with Three.js to make objects fall, bounce and collide in browser-based 3D scenes.",
    highlights: [
      "3D physics with Three.js",
      "Browser games and demos",
      "Simple rigid-body simulations",
    ],
    funFact:
      "The original Cannon.js is no longer maintained, so many developers now use cannon-es, a community-maintained fork.",
    url: "https://github.com/schteppe/cannon.js",
    spawnWeight: 0.5,
  },
  {
    id: "photon",
    name: "Photon",
    abbr: "Pho",
    category: "Multiplayer Service",
    color: "#004480",
    description:
      "A family of multiplayer networking products and cloud services for games. Photon handles rooms, matchmaking and syncing players so developers can add online play more easily.",
    highlights: [
      "Unity multiplayer games",
      "Hosted game rooms in the cloud",
      "Real-time player syncing",
    ],
    funFact:
      "Photon is made by Exit Games, a company based in Hamburg, Germany.",
    url: "https://www.photonengine.com",
    spawnWeight: 0.5,
  },
  {
    id: "mirror",
    name: "Mirror",
    abbr: "Mir",
    category: "Networking Library",
    color: "#5d6cc1",
    description:
      "A free, open-source networking library for Unity. It lets you build multiplayer games where a server and clients share game objects and call functions on each other.",
    highlights: [
      "Unity multiplayer games",
      "Dedicated and host-based servers",
      "Syncing objects across players",
    ],
    funFact:
      "Mirror started as a community continuation of UNET, Unity’s older networking system, after Unity deprecated it.",
    url: "https://mirror-networking.com",
    spawnWeight: 0.5,
  },
  {
    id: "fishnet",
    name: "FishNet",
    abbr: "Fish",
    category: "Networking Library",
    color: "#2196f3",
    description:
      "Fish-Networking is a free, open-source multiplayer networking library for Unity. It provides features like client-side prediction and lag compensation for responsive online games.",
    highlights: [
      "Unity multiplayer games",
      "Client-side prediction",
      "Server-authoritative gameplay",
    ],
    funFact:
      "FishNet’s full name is Fish-Networking, and it was created by the developer known as FirstGearGames.",
    url: "https://github.com/FirstGearGames/FishNet",
    spawnWeight: 0.5,
  },
  {
    id: "nakama",
    name: "Nakama",
    abbr: "Nak",
    category: "Game Server",
    color: "#7b2ff7",
    description:
      "An open-source game server that provides accounts, friends, chat, leaderboards, matchmaking and real-time multiplayer. You can extend it with your own code in Go, Lua or TypeScript.",
    highlights: [
      "Social and multiplayer game backends",
      "Leaderboards and tournaments",
      "Self-hosted game servers",
    ],
    funFact:
      "Nakama is built by Heroic Labs and written in Go; its name is Japanese for \"friend\" or \"companion\" — fitting for social features.",
    url: "https://heroiclabs.com/nakama/",
    spawnWeight: 0.5,
  },
  {
    id: "colyseus",
    name: "Colyseus",
    abbr: "Col",
    category: "Multiplayer Framework",
    color: "#e53935",
    description:
      "An open-source multiplayer game server framework for Node.js. The server holds the game state and automatically sends updates to connected players in real time.",
    highlights: [
      "Real-time web multiplayer games",
      "Server-authoritative game rooms",
      "Clients for JS, Unity and more",
    ],
    funFact:
      "Colyseus sends only the parts of the game state that changed, rather than the whole state each time, to keep network traffic small.",
    url: "https://colyseus.io",
    spawnWeight: 0.5,
  },
  {
    id: "playfab",
    name: "PlayFab",
    abbr: "PF",
    category: "Game Backend Service",
    color: "#f37a2a",
    description:
      "Microsoft’s backend-as-a-service for games. It handles player accounts, cloud saves, in-game economies, leaderboards, analytics and multiplayer servers without you building them.",
    highlights: [
      "Player accounts and cloud saves",
      "Live game analytics",
      "Hosting multiplayer servers",
    ],
    funFact:
      "PlayFab started as an independent Seattle startup and was acquired by Microsoft in 2018, becoming part of Azure’s gaming tools.",
    url: "https://learn.microsoft.com/en-us/gaming/playfab/",
    spawnWeight: 0.5,
  },
  {
    id: "unity-netcode",
    name: "Unity Netcode",
    abbr: "NGO",
    category: "Networking Library",
    color: "#4a7fc1",
    description:
      "Unity’s official networking libraries, including Netcode for GameObjects, for adding multiplayer to Unity games. They sync objects, variables and remote calls between players.",
    highlights: [
      "Co-op and small multiplayer games",
      "Syncing objects across players",
      "Unity’s first-party networking",
    ],
    funFact:
      "Netcode for GameObjects grew out of MLAPI, a community-built networking library that Unity brought in-house.",
    url: "https://docs-multiplayer.unity3d.com",
    spawnWeight: 0.5,
  },
  {
    id: "ecs",
    name: "ECS",
    abbr: "ECS",
    category: "Architecture Pattern",
    color: "#e67e22",
    description:
      "Entity Component System is a way to structure games: entities are just IDs, components are plain data like Position or Health, and systems are functions that update entities with certain components.",
    highlights: [
      "Games with thousands of objects",
      "Unity DOTS and Bevy",
      "Cache-friendly, fast simulations",
    ],
    funFact:
      "ECS favors composition over inheritance: want a flying, talking, burning chair? Just give an entity the Fly, Talk and OnFire components.",
    url: "https://en.wikipedia.org/wiki/Entity_component_system",
  },
  {
    id: "particle-systems",
    name: "Particle Systems",
    abbr: "PS",
    category: "Graphics Technique",
    color: "#ff7f50",
    description:
      "A technique for drawing fuzzy effects like fire, smoke, sparks, rain and magic using lots of tiny particles. Each particle is born, moves, changes and dies according to simple rules.",
    highlights: [
      "Explosions, fire and smoke",
      "Weather like rain and snow",
      "Magic spells and sparkles",
    ],
    funFact:
      "The term was coined by William Reeves at Lucasfilm for the \"Genesis effect\" wall of fire in the 1982 film Star Trek II: The Wrath of Khan.",
    url: "https://en.wikipedia.org/wiki/Particle_system",
  },
  {
    id: "collision-detection",
    name: "Collision Detection",
    abbr: "CD",
    category: "Game Programming",
    color: "#e84393",
    description:
      "Figuring out when two objects in a game touch or overlap, like a player hitting a wall — or you crashing into this obstacle! Games often use simple boxes and circles to keep checks fast.",
    highlights: [
      "Hit detection in games",
      "Physics engines",
      "Bounding boxes and spheres",
    ],
    funFact:
      "Fast objects can skip right through thin walls between frames, a bug called \"tunneling\" — continuous collision detection was invented to stop it.",
    url: "https://en.wikipedia.org/wiki/Collision_detection",
  },
  {
    id: "pathfinding",
    name: "Pathfinding",
    abbr: "Path",
    category: "Algorithm Concept",
    color: "#00b894",
    description:
      "Finding a good route from one point to another while avoiding obstacles. Games use it so enemies and characters can walk around walls to reach their goal, often with the A* algorithm.",
    highlights: [
      "Enemy and NPC movement",
      "Strategy game unit routing",
      "Navigation meshes in 3D worlds",
    ],
    funFact:
      "The famous A* algorithm was published in 1968 by researchers at SRI working on Shakey, one of the first mobile robots.",
    url: "https://en.wikipedia.org/wiki/Pathfinding",
  },
  {
    id: "procedural-generation",
    name: "Procedural Generation",
    abbr: "PCG",
    category: "Game Technique",
    color: "#6ab04c",
    description:
      "Creating game content like levels, maps, terrain or loot with algorithms instead of by hand. A bit of randomness plus rules can produce endless variety.",
    highlights: [
      "Roguelike level layouts",
      "Infinite terrain and worlds",
      "Random loot and quests",
    ],
    funFact:
      "Minecraft builds its worlds from a \"seed\": share the same seed with a friend and you’ll both get exactly the same world.",
    url: "https://en.wikipedia.org/wiki/Procedural_generation",
  },
  {
    id: "behavior-trees",
    name: "Behavior Trees",
    abbr: "BT",
    category: "Game AI Technique",
    color: "#a55eea",
    description:
      "A way to organize the decisions of AI characters as a tree of tasks and conditions, like \"if you see the player, chase; otherwise, patrol\". They are easy to read, reuse and extend.",
    highlights: [
      "Enemy and NPC decision making",
      "Built into Unreal Engine",
      "Robotics task control",
    ],
    funFact:
      "Behavior trees became popular in games after the developers of Halo 2 described using them to drive the game’s enemy AI.",
    url: "https://en.wikipedia.org/wiki/Behavior_tree_(artificial_intelligence,_robotics_and_control)",
  },
  {
    id: "game-ai",
    name: "Game AI",
    abbr: "GAI",
    category: "Game Programming",
    color: "#fd9644",
    description:
      "The techniques that make computer-controlled characters seem smart, from simple state machines to pathfinding and planning. The goal is usually fun, not perfect play.",
    highlights: [
      "Enemy and companion behavior",
      "Opponents in strategy games",
      "Difficulty and pacing control",
    ],
    funFact:
      "Pac-Man’s four ghosts each have their own chase strategy — Blinky heads straight for you, while Pinky aims for a spot ahead of you.",
    url: "https://en.wikipedia.org/wiki/Artificial_intelligence_in_video_games",
  },
  {
    id: "multiplayer-networking",
    name: "Multiplayer Networking",
    abbr: "MP",
    category: "Game Programming",
    color: "#0984e3",
    description:
      "The code that lets players in different places play together over the internet. It deals with lag by syncing game state, predicting movement and deciding who is right when players disagree.",
    highlights: [
      "Online shooters and co-op games",
      "Client-side prediction and lag hiding",
      "Server-authoritative game state",
    ],
    funFact:
      "Many fighting games use \"rollback netcode\": they guess your opponent’s input, then quietly rewind and replay frames if the guess was wrong.",
    url: "https://en.wikipedia.org/wiki/Netcode",
  },
  {
    id: "matchmaking",
    name: "Matchmaking",
    abbr: "MM",
    category: "Game Service Concept",
    color: "#e17055",
    description:
      "The system that groups players into online matches, usually trying to pair people of similar skill and with good connections so games are fair and fun.",
    highlights: [
      "Ranked competitive modes",
      "Skill ratings like Elo",
      "Balancing teams and wait times",
    ],
    funFact:
      "Many matchmaking ratings descend from the Elo system, invented by physicist Arpad Elo to rank chess players.",
    url: "https://en.wikipedia.org/wiki/Elo_rating_system",
  },
];

export default entries;
