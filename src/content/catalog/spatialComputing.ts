import type { CatalogEntry } from "../types";

/** AR, VR and Spatial Computing */
const entries: CatalogEntry[] = [
  {
    id: "apple-vision-pro",
    name: "Apple Vision Pro",
    abbr: "AVP",
    category: "XR Headset",
    color: "#8e8e93",
    description:
      "Apple's mixed-reality headset that places apps and 3D content in the room around you. You control it with your eyes, hands and voice, and it runs visionOS.",
    highlights: [
      "Spatial apps built with SwiftUI and RealityKit",
      "Immersive video and 3D experiences",
      "Giant virtual screens for work and movies",
    ],
    funFact:
      "Apple avoids calling it a VR headset — it markets Vision Pro as a \"spatial computer\", and its battery lives in a separate pack connected by a cable to keep the headset lighter.",
    url: "https://www.apple.com/apple-vision-pro/",
  },
  {
    id: "meta-quest",
    name: "Meta Quest",
    abbr: "MQ",
    category: "VR Headset",
    color: "#0081fb",
    description:
      "A family of standalone virtual-reality headsets from Meta that work without a PC. They track your head and hands and can also blend in the real world with passthrough cameras.",
    highlights: [
      "VR games like Beat Saber",
      "Fitness and social VR apps",
      "Mixed-reality apps using passthrough",
    ],
    funFact:
      "Quest descends from the Oculus Rift, which began as a 2012 Kickstarter by a young Palmer Luckey. Facebook bought Oculus in 2014 for about $2 billion.",
    url: "https://www.meta.com/quest/",
  },
  {
    id: "microsoft-hololens",
    name: "Microsoft HoloLens",
    abbr: "HL",
    category: "AR Headset",
    color: "#0078d4",
    description:
      "A see-through augmented-reality headset from Microsoft that projects holograms onto the real world. It is a full Windows computer you wear, with no cables to a PC.",
    highlights: [
      "Industrial training and remote assistance",
      "Medical and engineering visualization",
      "Mixed-reality apps built with Unity",
    ],
    funFact:
      "HoloLens was one of the first fully self-contained holographic computers: the original 2016 developer edition packed its own processors, sensors and battery into the headband.",
    url: "https://learn.microsoft.com/en-us/hololens/",
    spawnWeight: 0.5,
  },
  {
    id: "magic-leap",
    name: "Magic Leap",
    abbr: "ML",
    category: "AR Headset",
    color: "#e2336b",
    description:
      "A company and line of see-through augmented-reality headsets aimed mainly at businesses. Its glasses overlay digital content onto what you see around you.",
    highlights: [
      "Enterprise AR for training and design",
      "Healthcare and surgical visualization",
      "Spatial apps for field workers",
    ],
    funFact:
      "Magic Leap raised billions of dollars before shipping any product, and became famous for a concept video showing a whale leaping out of a school gym floor.",
    url: "https://www.magicleap.com/",
    spawnWeight: 0.5,
  },
  {
    id: "android-xr",
    name: "Android XR",
    abbr: "AXR",
    category: "XR Platform",
    color: "#3ddc84",
    description:
      "Google's version of Android for headsets and smart glasses. It lets developers bring Android apps into 3D space and build new immersive experiences with familiar Android tools.",
    highlights: [
      "Apps for XR headsets and smart glasses",
      "Jetpack XR SDK for Android developers",
      "Gemini AI assistant in your field of view",
    ],
    funFact:
      "Google built Android XR together with Samsung; the first headset running it was developed under the codename \"Project Moohan\", from the Korean word for \"infinity\".",
    url: "https://developer.android.com/xr",
    spawnWeight: 0.5,
  },
  {
    id: "arcore",
    name: "ARCore",
    abbr: "ARC",
    category: "AR SDK",
    color: "#4285f4",
    description:
      "Google's toolkit for building augmented-reality apps on phones. It uses the camera and motion sensors to understand surfaces and place virtual objects in the real world.",
    highlights: [
      "AR features in Android apps",
      "Placing 3D furniture or products in a room",
      "Geospatial AR anchored to real places",
    ],
    funFact:
      "ARCore grew out of Google's Project Tango, which needed special depth-sensing phones. ARCore brought AR to ordinary phones using just a normal camera.",
    url: "https://developers.google.com/ar",
  },
  {
    id: "realitykit",
    name: "RealityKit",
    abbr: "RK",
    category: "AR Framework",
    color: "#147efb",
    description:
      "Apple's framework for rendering and animating 3D content in augmented reality. It handles lighting, physics and anchoring so virtual objects look like part of your real surroundings.",
    highlights: [
      "AR apps on iPhone and iPad",
      "3D content in visionOS apps",
      "Physics, animation and spatial audio",
    ],
    funFact:
      "RealityKit renders virtual objects with realistic lighting and shadows estimated from the real room, plus camera effects like motion blur, so they blend in with what the camera sees.",
    url: "https://developer.apple.com/documentation/realitykit",
  },
  {
    id: "reality-composer",
    name: "Reality Composer",
    abbr: "RC",
    category: "AR Authoring Tool",
    color: "#5e5ce6",
    description:
      "Apple's visual tool for building AR scenes without much code. You drag in 3D objects, add simple behaviors and animations, and preview the result on a device.",
    highlights: [
      "Prototyping AR scenes visually",
      "Composing 3D scenes for visionOS",
      "Adding tap and proximity behaviors",
    ],
    funFact:
      "For visionOS, Apple released Reality Composer Pro, which ships with Xcode and lets developers build materials using a node-based shader editor.",
    url: "https://developer.apple.com/augmented-reality/tools/",
    spawnWeight: 0.5,
  },
  {
    id: "openxr",
    name: "OpenXR",
    abbr: "OXR",
    category: "XR Standard",
    color: "#e4342d",
    description:
      "An open, royalty-free standard API for VR and AR devices. Apps written against OpenXR can run on many different headsets instead of needing a separate version for each vendor.",
    highlights: [
      "Cross-headset VR and AR apps",
      "Supported by Unity, Unreal and Godot",
      "Used by Quest, Windows MR and SteamVR",
    ],
    funFact:
      "OpenXR is managed by the Khronos Group — the same industry consortium behind OpenGL and Vulkan — and version 1.0 was released in 2019.",
    url: "https://www.khronos.org/openxr/",
  },
  {
    id: "webxr",
    name: "WebXR",
    abbr: "WXR",
    category: "Web API",
    color: "#ff6f00",
    description:
      "A browser API that lets websites show VR and AR experiences on headsets and phones. Visitors can jump into an immersive scene straight from a link, without installing an app.",
    highlights: [
      "VR and AR experiences in the browser",
      "Used with Three.js, A-Frame and Babylon.js",
      "Product previews and web games",
    ],
    funFact:
      "WebXR replaced an earlier experimental API called WebVR, which only handled virtual reality — the new name reflects that it covers AR too.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/WebXR_Device_API",
  },
  {
    id: "unity-xr",
    name: "Unity XR",
    abbr: "UXR",
    category: "XR Game Engine",
    color: "#4c4c4c",
    description:
      "The set of tools in the Unity game engine for building VR and AR apps. Its plugin system and XR Interaction Toolkit let one project target many headsets and phones.",
    highlights: [
      "Most VR games on Quest",
      "AR mobile apps via AR Foundation",
      "Training simulations and prototypes",
    ],
    funFact:
      "Niantic built Pokémon GO, one of the most famous AR games ever, using the Unity engine.",
    url: "https://docs.unity3d.com/Manual/XR.html",
  },
  {
    id: "unreal-xr",
    name: "Unreal XR",
    abbr: "UEXR",
    category: "XR Game Engine",
    color: "#313d9c",
    description:
      "Unreal Engine's support for building VR and AR experiences. It brings the engine's high-end graphics to headsets, including a ready-made VR template to start from.",
    highlights: [
      "High-fidelity VR games",
      "Architectural and automotive visualization",
      "Virtual production for film and TV",
    ],
    funFact:
      "Unreal Engine was first built for Unreal, a 1998 first-person shooter, before growing into an engine used for games, films and VR.",
    url: "https://www.unrealengine.com/",
    spawnWeight: 0.5,
  },
  {
    id: "augmented-reality",
    name: "Augmented Reality",
    abbr: "AR",
    category: "XR Concept",
    color: "#00b894",
    description:
      "Technology that adds digital content on top of your view of the real world, through a phone camera or see-through glasses. The real world stays visible; the virtual bits are layered on.",
    highlights: [
      "Games like Pokémon GO",
      "Camera filters on social apps",
      "Previewing furniture in your room",
    ],
    funFact:
      "The term \"augmented reality\" is credited to Boeing researcher Tom Caudell around 1990, who described a headset that showed wiring diagrams to factory workers.",
    url: "https://en.wikipedia.org/wiki/Augmented_reality",
  },
  {
    id: "virtual-reality",
    name: "Virtual Reality",
    abbr: "VR",
    category: "XR Concept",
    color: "#6c5ce7",
    description:
      "Technology that replaces your view with a fully computer-generated world, usually through a headset. As you move your head, the scene updates so it feels like you're inside it.",
    highlights: [
      "Immersive games and social worlds",
      "Flight and surgery training",
      "Virtual tours and design reviews",
    ],
    funFact:
      "In 1968 Ivan Sutherland built a head-mounted display so heavy it had to hang from the ceiling — it was nicknamed \"The Sword of Damocles\".",
    url: "https://en.wikipedia.org/wiki/Virtual_reality",
  },
  {
    id: "mixed-reality",
    name: "Mixed Reality",
    abbr: "MR",
    category: "XR Concept",
    color: "#fd79a8",
    description:
      "Experiences where virtual objects and the real world interact, like a digital ball bouncing off your real table. It sits between AR and VR on a spectrum of immersion.",
    highlights: [
      "Passthrough apps on modern headsets",
      "Holograms that react to real rooms",
      "Collaborative design and training",
    ],
    funFact:
      "In 1994 researchers Paul Milgram and Fumio Kishino described a \"reality–virtuality continuum\", with the real world at one end, fully virtual at the other, and mixed reality in between.",
    url: "https://en.wikipedia.org/wiki/Mixed_reality",
  },
  {
    id: "spatial-computing",
    name: "Spatial Computing",
    abbr: "SC",
    category: "Computing Paradigm",
    color: "#0984e3",
    description:
      "A style of computing where apps understand and live in the 3D space around you, instead of being stuck on a flat screen. It combines sensing, mapping and AR/VR displays.",
    highlights: [
      "Headsets like Apple Vision Pro",
      "Apps that anchor content to real rooms",
      "Gesture, gaze and voice input",
    ],
    funFact:
      "MIT researcher Simon Greenwold used the term \"spatial computing\" in a 2003 thesis — two decades before Apple made it the headline for Vision Pro.",
    url: "https://en.wikipedia.org/wiki/Spatial_computing",
    spawnWeight: 0.5,
  },
  {
    id: "slam",
    name: "SLAM",
    abbr: "SLAM",
    category: "Robotics Algorithm",
    color: "#d63031",
    description:
      "Simultaneous Localization and Mapping: a technique that lets a device build a map of an unknown place while also working out where it is inside that map, using cameras or other sensors.",
    highlights: [
      "Robot vacuums mapping your home",
      "Inside-out tracking on VR headsets",
      "Self-driving cars and drones",
    ],
    funFact:
      "SLAM is a chicken-and-egg problem: you need a map to know where you are, and you need to know where you are to build the map — so the algorithm solves both at once.",
    url: "https://en.wikipedia.org/wiki/Simultaneous_localization_and_mapping",
  },
  {
    id: "motion-tracking",
    name: "Motion Tracking",
    abbr: "MT",
    category: "Tracking Technology",
    color: "#e17055",
    description:
      "Measuring how a person or object moves through space, using cameras, markers or motion sensors. It turns real movement into data that games, films and headsets can use.",
    highlights: [
      "Head and controller tracking in VR",
      "Motion capture for films and games",
      "Sports and fitness analysis",
    ],
    funFact:
      "The Wii's \"sensor bar\" doesn't sense anything: it is just a row of infrared lights, and the camera inside the Wii Remote watches them to work out where you're pointing.",
    url: "https://en.wikipedia.org/wiki/Motion_capture",
  },
  {
    id: "hand-tracking",
    name: "Hand Tracking",
    abbr: "HT",
    category: "Tracking Technology",
    color: "#fdcb6e",
    description:
      "Using cameras and machine learning to follow the position of your hands and fingers in real time. It lets you grab, pinch and point in XR apps without holding a controller.",
    highlights: [
      "Controller-free input on headsets",
      "Pinch gestures on Apple Vision Pro",
      "Sign-language and gesture research",
    ],
    funFact:
      "Apple Vision Pro ships with no controllers at all — the main way to \"click\" is to look at something and tap your thumb and index finger together.",
    url: "https://en.wikipedia.org/wiki/Finger_tracking",
  },
  {
    id: "eye-tracking",
    name: "Eye Tracking",
    abbr: "ET",
    category: "Tracking Technology",
    color: "#00cec9",
    description:
      "Measuring where your eyes are looking, usually with small infrared cameras. Headsets use it for gaze-based controls and to render sharp detail only where you're looking.",
    highlights: [
      "Foveated rendering to save GPU power",
      "Look-to-select interfaces",
      "Usability and accessibility research",
    ],
    funFact:
      "Your eyes don't glide smoothly while reading — they make several quick jumps per second called saccades, which eye trackers can measure precisely.",
    url: "https://en.wikipedia.org/wiki/Eye_tracking",
  },
  {
    id: "3d-spatial-mapping",
    name: "3D Spatial Mapping",
    abbr: "3DSM",
    category: "Spatial Sensing",
    color: "#a29bfe",
    description:
      "Scanning the real environment to build a 3D model of its walls, floors and furniture. AR apps use this mesh so virtual objects can sit on tables or hide behind real things.",
    highlights: [
      "Occlusion of virtual objects by real ones",
      "Room scanning with LiDAR phones",
      "Robots and headsets understanding rooms",
    ],
    funFact:
      "In 2011 Microsoft Research's KinectFusion showed that a cheap Kinect game sensor could build detailed 3D models of a room in real time.",
    url: "https://learn.microsoft.com/en-us/windows/mixed-reality/design/spatial-mapping",
    spawnWeight: 0.5,
  },
];

export default entries;
