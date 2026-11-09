import type { CatalogEntry } from "../types";

/** Computer Graphics and 3D */
const entries: CatalogEntry[] = [
  {
    id: "blender",
    name: "Blender",
    abbr: "Bl",
    category: "3D Creation Suite",
    color: "#e87d0d",
    description:
      "A free, open-source 3D creation app for modeling, sculpting, animation, rendering, video editing and more. It is used by hobbyists, indie studios and professionals alike.",
    highlights: [
      "3D modeling and animation",
      "Making game assets",
      "Rendering with Cycles and EEVEE",
    ],
    funFact:
      "In 2002 the community raised €100,000 in a \"Free Blender\" campaign to buy the software’s source code and release it as open source.",
    url: "https://www.blender.org",
  },
  {
    id: "autodesk-maya",
    name: "Autodesk Maya",
    abbr: "AM",
    category: "3D Animation Software",
    color: "#37a5cc",
    description:
      "Professional 3D software for modeling, rigging and animating characters. It is an industry standard for animated films, visual effects and game cinematics.",
    highlights: [
      "Character animation for film",
      "Visual effects pipelines",
      "Rigging and game cinematics",
    ],
    funFact:
      "Maya’s creators received a Scientific and Technical Academy Award in 2003 for the software’s impact on the film industry.",
    url: "https://www.autodesk.com/products/maya/overview",
  },
  {
    id: "3ds-max",
    name: "3ds Max",
    abbr: "3M",
    category: "3D Modeling Software",
    color: "#00a5a5",
    description:
      "Autodesk’s Windows 3D modeling, animation and rendering software. It is especially popular for architectural visualization and for building game assets.",
    highlights: [
      "Architectural visualization",
      "Game asset modeling",
      "Rendering product shots",
    ],
    funFact:
      "3ds Max began life as 3D Studio for MS-DOS in the early 1990s, which is where the \"3ds\" in its name comes from.",
    url: "https://www.autodesk.com/products/3ds-max/overview",
  },
  {
    id: "cinema-4d",
    name: "Cinema 4D",
    abbr: "C4",
    category: "3D Software",
    color: "#2160d4",
    description:
      "Maxon’s 3D modeling, animation and rendering software, known for being easy to learn. It is a favorite of motion graphics designers for title sequences and ads.",
    highlights: [
      "Motion graphics and ads",
      "Broadcast title sequences",
      "Product visualization",
    ],
    funFact:
      "Cinema 4D was made by the German company Maxon and originally ran on the Commodore Amiga.",
    url: "https://www.maxon.net/en/cinema-4d",
  },
  {
    id: "houdini",
    name: "Houdini",
    abbr: "Ho",
    category: "3D VFX Software",
    color: "#ff4713",
    description:
      "SideFX’s 3D software built around procedural, node-based workflows. It shines at simulations such as water, fire, smoke and destruction for films and games.",
    highlights: [
      "Film visual effects",
      "Fluid, fire and smoke simulation",
      "Procedural game content",
    ],
    funFact:
      "Nearly everything in Houdini is a node, so a whole effect is a recipe you can tweak and re-run — perfect for explosions that need \"just one more\" change.",
    url: "https://www.sidefx.com/products/houdini/",
  },
  {
    id: "zbrush",
    name: "ZBrush",
    abbr: "ZB",
    category: "Digital Sculpting",
    color: "#e88b2e",
    description:
      "A digital sculpting tool that lets artists shape highly detailed 3D models like virtual clay. It is widely used for creatures, characters and collectible figures.",
    highlights: [
      "Sculpting game and film characters",
      "Creature and monster design",
      "3D-printed figurines",
    ],
    funFact:
      "ZBrush was created by Pixologic and is built around the \"pixol\", a pixel that also stores depth, color and material; Maxon acquired it in 2022.",
    url: "https://www.maxon.net/en/zbrush",
    spawnWeight: 0.5,
  },
  {
    id: "sketchup",
    name: "SketchUp",
    abbr: "SU",
    category: "3D Modeling Software",
    color: "#e72b2d",
    description:
      "An easy-to-learn 3D modeling program popular with architects, interior designers and woodworkers. Its \"push/pull\" tool turns flat shapes into 3D forms with one drag.",
    highlights: [
      "Architectural models",
      "Interior and furniture design",
      "Quick 3D sketches",
    ],
    funFact:
      "Google owned SketchUp from 2006 to 2012, encouraging people to use it to model real buildings for Google Earth.",
    url: "https://www.sketchup.com",
  },
  {
    id: "rhino",
    name: "Rhino",
    abbr: "Rh",
    category: "3D Modeling Software",
    color: "#801010",
    description:
      "Rhinoceros is a 3D modeling program known for precise, smooth curves and surfaces (NURBS). It is used in industrial design, jewelry, architecture and boat design.",
    highlights: [
      "Industrial and product design",
      "Jewelry and architecture",
      "Parametric design with Grasshopper",
    ],
    funFact:
      "Rhino’s Grasshopper plugin lets designers build shapes by wiring together visual nodes, and it became hugely popular with architects.",
    url: "https://www.rhino3d.com",
    spawnWeight: 0.5,
  },
  {
    id: "direct3d",
    name: "Direct3D",
    abbr: "Di",
    category: "Graphics API",
    color: "#00a4ef",
    description:
      "The 3D graphics part of Microsoft’s DirectX. Windows and Xbox games use it to send geometry, textures and shaders to the GPU; Direct3D 12 offers low-level control.",
    highlights: [
      "Windows PC game rendering",
      "Xbox graphics",
      "DirectX Raytracing (DXR)",
    ],
    funFact:
      "Direct3D grew out of Reality Lab, a 3D library from the British company RenderMorphics, which Microsoft acquired in 1995.",
    url: "https://learn.microsoft.com/en-us/windows/win32/direct3d12/direct3d-12-graphics",
  },
  {
    id: "optix",
    name: "OptiX",
    abbr: "Op",
    category: "Ray Tracing Engine",
    color: "#76b900",
    description:
      "NVIDIA’s framework for building fast ray tracing applications on its GPUs. It handles the heavy lifting of tracing rays so renderers can produce realistic lighting quickly.",
    highlights: [
      "GPU rendering in 3D tools",
      "Using RTX ray tracing cores",
      "AI-based render denoising",
    ],
    funFact:
      "Blender’s Cycles renderer has an OptiX backend, letting artists with NVIDIA RTX cards use the GPU’s dedicated ray tracing hardware.",
    url: "https://developer.nvidia.com/rtx/ray-tracing/optix",
    spawnWeight: 0.5,
  },
  {
    id: "opencv",
    name: "OpenCV",
    abbr: "CV",
    category: "Computer Vision Library",
    color: "#5c3ee8",
    description:
      "A large open-source library for computer vision — teaching computers to understand images and video. It can detect faces, track motion, find edges and much more, from C++ or Python.",
    highlights: [
      "Face and object detection",
      "Image processing in Python",
      "Robotics and camera apps",
    ],
    funFact:
      "OpenCV started as a research project at Intel in 1999, aiming to make computer vision available to everyone.",
    url: "https://opencv.org",
  },
  {
    id: "imagemagick",
    name: "ImageMagick",
    abbr: "IM",
    category: "Image Processing Tool",
    color: "#3a7bbf",
    description:
      "A free command-line tool and library for creating, editing and converting images. It can resize, crop, rotate, add text and convert between hundreds of formats in scripts.",
    highlights: [
      "Batch resizing and converting images",
      "Generating thumbnails on servers",
      "Scripting image edits",
    ],
    funFact:
      "ImageMagick has been around since 1990 — older than the web browser for most people — and supports over 200 image formats.",
    url: "https://imagemagick.org",
  },
  {
    id: "pillow",
    name: "Pillow",
    abbr: "Pi",
    category: "Image Library",
    color: "#3c7bab",
    description:
      "The go-to Python library for opening, editing and saving images. It can resize, crop, filter, draw text and convert formats with just a few lines of code.",
    highlights: [
      "Image editing in Python",
      "Making thumbnails",
      "Preparing images for ML",
    ],
    funFact:
      "Pillow is a \"friendly fork\" of the old Python Imaging Library (PIL), which is why you still write from PIL import Image.",
    url: "https://python-pillow.org",
  },
  {
    id: "ffmpeg",
    name: "FFmpeg",
    abbr: "FF",
    category: "Multimedia Framework",
    color: "#007808",
    description:
      "A free command-line toolkit for recording, converting and streaming audio and video. It supports almost every media format and powers many video apps and websites behind the scenes.",
    highlights: [
      "Converting video formats",
      "Extracting audio and frames",
      "Streaming and transcoding",
    ],
    funFact:
      "FFmpeg was started by Fabrice Bellard, who also created the QEMU emulator; its libraries are used inside VLC and countless other apps.",
    url: "https://ffmpeg.org",
  },
  {
    id: "sharp",
    name: "Sharp",
    abbr: "Sh",
    category: "Image Library",
    color: "#99cc00",
    description:
      "A high-performance Node.js library for resizing and converting images. It is commonly used on servers to turn large uploads into web-friendly JPEG, PNG, WebP or AVIF files.",
    highlights: [
      "Resizing images in Node.js",
      "Generating responsive images",
      "Converting to WebP and AVIF",
    ],
    funFact:
      "Sharp is fast because it’s built on libvips, which processes images in small chunks instead of loading the whole picture into memory.",
    url: "https://sharp.pixelplumbing.com",
    spawnWeight: 0.5,
  },
  {
    id: "skia",
    name: "Skia",
    abbr: "Sk",
    category: "2D Graphics Library",
    color: "#f44336",
    description:
      "An open-source 2D graphics library for drawing shapes, text and images. It is the drawing engine behind many apps you use daily, on top of the GPU or CPU.",
    highlights: [
      "Rendering in Google Chrome",
      "Android’s UI drawing",
      "Flutter app rendering",
    ],
    funFact:
      "Google bought Skia in 2005; today it draws much of what you see in Chrome, Android and Flutter apps.",
    url: "https://skia.org",
  },
  {
    id: "core-image",
    name: "Core Image",
    abbr: "CI",
    category: "Image Processing API",
    color: "#147efb",
    description:
      "Apple’s framework for processing images and video in real time on iOS and macOS. It comes with many built-in filters, like blur and color adjustment, that you can chain together.",
    highlights: [
      "Photo filters in iOS apps",
      "Real-time video effects",
      "Face and feature detection",
    ],
    funFact:
      "Core Image is lazy in a good way: it combines a chain of filters and only renders the final result, often in a single GPU pass.",
    url: "https://developer.apple.com/documentation/coreimage",
    spawnWeight: 0.5,
  },
  {
    id: "rasterization",
    name: "Rasterization",
    abbr: "Ra",
    category: "Rendering Technique",
    color: "#e056fd",
    description:
      "The process of turning shapes, usually triangles, into the pixels on your screen. It is the main way real-time games draw 3D worlds because GPUs do it extremely fast.",
    highlights: [
      "Real-time game graphics",
      "How GPUs draw triangles",
      "Fonts and vector images on screen",
    ],
    funFact:
      "Almost every 3D model in a game, no matter how round it looks, is made of flat triangles that the GPU rasterizes millions of times per second.",
    url: "https://en.wikipedia.org/wiki/Rasterisation",
  },
  {
    id: "ray-tracing",
    name: "Ray Tracing",
    abbr: "RT",
    category: "Rendering Technique",
    color: "#f9ca24",
    description:
      "A rendering technique that simulates light by tracing rays from the camera into the scene and seeing what they hit. It produces realistic reflections, shadows and refraction.",
    highlights: [
      "Realistic reflections and shadows",
      "Film and product rendering",
      "RTX features in modern games",
    ],
    funFact:
      "Turner Whitted’s 1980 paper popularized recursive ray tracing; it took until NVIDIA’s RTX GPUs in 2018 for real-time ray tracing to reach gaming PCs.",
    url: "https://en.wikipedia.org/wiki/Ray_tracing_(graphics)",
  },
  {
    id: "path-tracing",
    name: "Path Tracing",
    abbr: "PT",
    category: "Rendering Technique",
    color: "#f0932b",
    description:
      "A form of ray tracing that follows many random light paths bouncing around a scene to calculate realistic lighting. It is slow but produces very lifelike images.",
    highlights: [
      "Photorealistic film rendering",
      "Blender Cycles renders",
      "Reference images for games",
    ],
    funFact:
      "Path tracing was introduced by James Kajiya in his 1986 paper \"The Rendering Equation\", which described light transport with one equation.",
    url: "https://en.wikipedia.org/wiki/Path_tracing",
  },
  {
    id: "global-illumination",
    name: "Global Illumination",
    abbr: "GI",
    category: "Rendering Technique",
    color: "#ffbe76",
    description:
      "Lighting that includes light bouncing off surfaces onto other surfaces, not just direct light from lamps or the sun. It makes rooms look naturally lit instead of flat.",
    highlights: [
      "Realistic indoor lighting",
      "Baked lightmaps in games",
      "Real-time GI like Unreal’s Lumen",
    ],
    funFact:
      "Global illumination causes \"color bleeding\": a bright red wall next to a white floor will tint the floor slightly pink.",
    url: "https://en.wikipedia.org/wiki/Global_illumination",
  },
  {
    id: "shadow-mapping",
    name: "Shadow Mapping",
    abbr: "SM",
    category: "Rendering Technique",
    color: "#686de0",
    description:
      "A common technique for drawing shadows in real time. The scene is first rendered from the light’s point of view to record depth, then that map is used to decide which pixels are in shadow.",
    highlights: [
      "Real-time shadows in games",
      "Cascaded shadows for sunlight",
      "Soft shadow filtering",
    ],
    funFact:
      "Shadow mapping was introduced by Lance Williams in 1978; its classic glitch, speckled self-shadowing, is nicknamed \"shadow acne\".",
    url: "https://en.wikipedia.org/wiki/Shadow_mapping",
  },
  {
    id: "physically-based-rendering",
    name: "Physically Based Rendering",
    abbr: "PB",
    category: "Rendering Technique",
    color: "#22a6b3",
    description:
      "An approach to shading that models how light really interacts with materials, using properties like base color, roughness and metalness. Materials then look right under any lighting.",
    highlights: [
      "Realistic game materials",
      "Texturing in Substance tools",
      "glTF models on the web",
    ],
    funFact:
      "Disney’s 2012 \"principled\" shading model, made for films like Wreck-It Ralph, heavily influenced the PBR materials used in today’s game engines.",
    url: "https://en.wikipedia.org/wiki/Physically_based_rendering",
  },
  {
    id: "deferred-rendering",
    name: "Deferred Rendering",
    abbr: "DR",
    category: "Rendering Technique",
    color: "#be2edd",
    description:
      "A rendering approach that first saves surface info like color, normals and depth into a G-buffer, then calculates lighting later. It handles scenes with many lights efficiently.",
    highlights: [
      "Scenes with many dynamic lights",
      "AAA game renderers",
      "Screen-space effects",
    ],
    funFact:
      "Deferred rendering struggles with see-through objects, so engines typically draw glass and water in a separate forward pass afterward.",
    url: "https://en.wikipedia.org/wiki/Deferred_shading",
  },
  {
    id: "forward-rendering",
    name: "Forward Rendering",
    abbr: "FR",
    category: "Rendering Technique",
    color: "#4834d4",
    description:
      "The classic rendering approach where each object is drawn and fully lit in one go. It is simple and handles transparency well, but costs more as the number of lights grows.",
    highlights: [
      "Mobile and VR games",
      "Transparent objects",
      "Simple renderers and WebGL",
    ],
    funFact:
      "Forward rendering works nicely with MSAA anti-aliasing and transparency, which is a big reason many VR games choose it over deferred.",
    url: "https://learnopengl.com/Advanced-Lighting/Deferred-Shading",
  },
];

export default entries;
