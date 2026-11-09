import type { CatalogEntry } from "../types";

/** Multimedia and Audio/Video Technologies */
const entries: CatalogEntry[] = [
  {
    id: "gstreamer",
    name: "GStreamer",
    abbr: "GST",
    category: "Multimedia Framework",
    color: "#d0352b",
    description:
      "An open-source framework for building audio and video pipelines. You connect small plugins together — a source, a decoder, a filter, an output — to play, record, convert or stream media.",
    highlights: [
      "Media players on Linux desktops",
      "Video streaming and transcoding pipelines",
      "Embedded devices and camera systems",
    ],
    funFact:
      "GStreamer pipelines can be built right from the terminal with gst-launch, chaining elements with \"!\" much like Unix pipes chain commands with \"|\".",
    url: "https://gstreamer.freedesktop.org/",
    spawnWeight: 0.5,
  },
  {
    id: "web-audio-api",
    name: "Web Audio API",
    abbr: "WAA",
    category: "Browser Audio API",
    color: "#e66000",
    description:
      "A browser API for generating, processing and analyzing sound in JavaScript. You wire together audio nodes like oscillators, filters and gain controls to build anything from game sound effects to synthesizers.",
    highlights: [
      "Sound effects and music in web games",
      "Synthesizers and audio visualizers",
      "Real-time audio effects in the browser",
    ],
    funFact:
      "With just an OscillatorNode and a few lines of JavaScript you can turn any web page into a tiny synthesizer — no audio files needed at all.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Audio_API",
  },
  {
    id: "avfoundation",
    name: "AVFoundation",
    abbr: "AVF",
    category: "Apple Media Framework",
    color: "#0a84ff",
    description:
      "Apple's framework for working with audio and video on iOS, macOS and other Apple platforms. It handles playback, recording from the camera and mic, editing and exporting media.",
    highlights: [
      "Video players in iPhone apps",
      "Camera capture and recording",
      "Editing and exporting media files",
    ],
    funFact:
      "The \"AV\" simply stands for audio-visual, and the framework sits underneath many of Apple's own media features, from playback to camera capture.",
    url: "https://developer.apple.com/av-foundation/",
    spawnWeight: 0.5,
  },
  {
    id: "mediacodec",
    name: "MediaCodec",
    abbr: "MC",
    category: "Android Media API",
    color: "#3ddc84",
    description:
      "A low-level Android API that gives apps access to the device's audio and video encoders and decoders. It's what lets apps use the phone's hardware to compress or play video efficiently.",
    highlights: [
      "Hardware-accelerated video decoding",
      "Recording and encoding video on Android",
      "Powering custom players like ExoPlayer",
    ],
    funFact:
      "Many Android video players, including Google's ExoPlayer (now part of Media3), are built on top of MediaCodec to tap the phone's hardware decoders.",
    url: "https://developer.android.com/reference/android/media/MediaCodec",
    spawnWeight: 0.5,
  },
  {
    id: "core-audio",
    name: "Core Audio",
    abbr: "CA",
    category: "Apple Audio Framework",
    color: "#fa2d48",
    description:
      "The low-level audio infrastructure in Apple's operating systems. It handles recording, playback, mixing and audio devices with very low latency, which is why it's popular for music software.",
    highlights: [
      "Pro music apps and DAWs on macOS",
      "Low-latency audio input and output",
      "Audio Units plug-ins and effects",
    ],
    funFact:
      "Core Audio's low latency is a big reason Macs became a favorite among musicians and recording studios.",
    url: "https://developer.apple.com/documentation/coreaudio",
    spawnWeight: 0.5,
  },
  {
    id: "openal",
    name: "OpenAL",
    abbr: "AL",
    category: "3D Audio API",
    color: "#2e7bcf",
    description:
      "A cross-platform API for 3D positional audio, designed in the style of OpenGL. Games use it to place sounds in a 3D world so you can hear where an explosion or footstep comes from.",
    highlights: [
      "3D positional sound in games",
      "Cross-platform game audio",
      "Doppler and distance effects",
    ],
    funFact:
      "OpenAL stands for Open Audio Library, and its API was deliberately modeled on OpenGL so graphics programmers would feel right at home.",
    url: "https://www.openal.org/",
    spawnWeight: 0.5,
  },
  {
    id: "portaudio",
    name: "PortAudio",
    abbr: "PA",
    category: "Audio I/O Library",
    color: "#7a4fd1",
    description:
      "A small, free C library for recording and playing audio on many operating systems with the same code. It hides the differences between each OS's audio system behind one simple API.",
    highlights: [
      "Cross-platform audio input/output",
      "Used by Audacity for audio devices",
      "Python audio via PyAudio",
    ],
    funFact:
      "The popular Python library PyAudio is a thin wrapper around PortAudio, so lots of Python audio projects quietly depend on it.",
    url: "https://www.portaudio.com/",
    spawnWeight: 0.5,
  },
  {
    id: "mp4",
    name: "MP4",
    abbr: "MP4",
    category: "Media Container Format",
    color: "#e94e1b",
    description:
      "A container file format that bundles video, audio, subtitles and metadata into one file. It's the most common video format on the web, phones and social media.",
    highlights: [
      "Web and mobile video playback",
      "Recording from phones and cameras",
      "Streaming and video sharing sites",
    ],
    funFact:
      "MP4 (MPEG-4 Part 14) is based on Apple's QuickTime file format, which is why MP4 and MOV files are such close cousins.",
    url: "https://en.wikipedia.org/wiki/MP4_file_format",
  },
  {
    id: "webm",
    name: "WebM",
    abbr: "WebM",
    category: "Media Container Format",
    color: "#3d8f3d",
    description:
      "An open, royalty-free video format designed for the web. It usually holds VP8, VP9 or AV1 video with Vorbis or Opus audio, and is widely supported by modern browsers.",
    highlights: [
      "Royalty-free video on websites",
      "Screen recordings and browser capture",
      "Short looping clips and animations",
    ],
    funFact:
      "WebM was launched by Google in 2010, and its container is based on a subset of the Matroska (MKV) format.",
    url: "https://www.webmproject.org/",
  },
  {
    id: "mkv",
    name: "MKV",
    abbr: "MKV",
    category: "Media Container Format",
    color: "#4a5bd8",
    description:
      "Matroska Video, an open container format that can hold many video, audio and subtitle tracks in one file. It's popular for movies with multiple languages and subtitle options.",
    highlights: [
      "Movies with multiple audio tracks",
      "Embedded subtitles and chapters",
      "Archiving video without re-encoding",
    ],
    funFact:
      "Matroska is named after the Russian word for nesting dolls (matryoshka), a nod to how it nests many tracks inside one file.",
    url: "https://www.matroska.org/",
  },
  {
    id: "mov",
    name: "MOV",
    abbr: "MOV",
    category: "Media Container Format",
    color: "#8e8e93",
    description:
      "Apple's QuickTime File Format, a container for video, audio and other media. iPhones and Macs commonly save video as .mov files, and video editors handle them easily.",
    highlights: [
      "iPhone and Mac video recordings",
      "Video editing in Final Cut Pro",
      "Professional video workflows",
    ],
    funFact:
      "The QuickTime file format was so well designed that it became the basis for the MPEG-4 file format standard (MP4).",
    url: "https://en.wikipedia.org/wiki/QuickTime_File_Format",
  },
  {
    id: "mp3",
    name: "MP3",
    abbr: "MP3",
    category: "Audio Codec",
    color: "#f39c12",
    description:
      "A lossy audio format that shrinks music files by throwing away sounds people are unlikely to notice. It made it practical to store and share songs on computers and early music players.",
    highlights: [
      "Music libraries and portable players",
      "Podcasts and audio downloads",
      "Universal audio compatibility",
    ],
    funFact:
      "MP3 was largely developed at Germany's Fraunhofer Institute, and Suzanne Vega's song \"Tom's Diner\" was famously used to fine-tune it.",
    url: "https://en.wikipedia.org/wiki/MP3",
  },
  {
    id: "aac",
    name: "AAC",
    abbr: "AAC",
    category: "Audio Codec",
    color: "#c0392b",
    description:
      "Advanced Audio Coding, a lossy audio format designed as the successor to MP3. It generally sounds better than MP3 at the same file size and is the usual audio inside MP4 videos.",
    highlights: [
      "Audio in MP4 videos and streams",
      "Apple Music and iTunes downloads",
      "YouTube and mobile audio",
    ],
    funFact:
      "AAC became famous as the default format of the iTunes Store, and it's still the standard audio track in most MP4 videos today.",
    url: "https://en.wikipedia.org/wiki/Advanced_Audio_Coding",
  },
  {
    id: "flac",
    name: "FLAC",
    abbr: "FLAC",
    category: "Lossless Audio Codec",
    color: "#e67e22",
    description:
      "Free Lossless Audio Codec, a format that compresses audio without losing any quality. Decoding a FLAC file gives you back exactly the original sound, just from a smaller file.",
    highlights: [
      "Hi-fi music collections",
      "Archiving CDs without quality loss",
      "Lossless streaming services",
    ],
    funFact:
      "FLAC typically shrinks CD audio to roughly half its original size while still reproducing every single bit perfectly.",
    url: "https://xiph.org/flac/",
  },
  {
    id: "wav",
    name: "WAV",
    abbr: "WAV",
    category: "Audio File Format",
    color: "#1e88e5",
    description:
      "A simple audio file format, usually holding uncompressed PCM audio. Files are large but perfectly accurate, which makes WAV the go-to format for recording and editing sound.",
    highlights: [
      "Studio recording and audio editing",
      "Game sound effects",
      "Raw audio for processing",
    ],
    funFact:
      "WAV was created by Microsoft and IBM in 1991 and is built on the RIFF container, which stores data in labeled \"chunks\".",
    url: "https://en.wikipedia.org/wiki/WAV",
  },
  {
    id: "opus",
    name: "Opus",
    abbr: "Opus",
    category: "Audio Codec",
    color: "#2c8c99",
    description:
      "An open, royalty-free audio codec that handles both speech and music very well at low bitrates and low delay. It's the default audio codec for WebRTC video calls.",
    highlights: [
      "Voice and video calls with WebRTC",
      "Voice chat in games and Discord",
      "Efficient music streaming",
    ],
    funFact:
      "Opus is a hybrid: it combines SILK, a speech codec from Skype, with CELT, a music codec from Xiph.Org, and switches between them as needed.",
    url: "https://opus-codec.org/",
  },
  {
    id: "av1",
    name: "AV1",
    abbr: "AV1",
    category: "Video Codec",
    color: "#ed1c24",
    description:
      "A modern, royalty-free video codec that compresses video better than H.264 and VP9. It lets streaming services deliver high-quality video using less bandwidth.",
    highlights: [
      "YouTube and Netflix streaming",
      "Royalty-free high-quality video",
      "Efficient 4K video delivery",
    ],
    funFact:
      "AV1 was built by the Alliance for Open Media, a group whose members include Google, Netflix, Amazon, Microsoft, Mozilla and Apple.",
    url: "https://aomedia.org/av1/",
  },
  {
    id: "h264",
    name: "H.264",
    abbr: "H264",
    category: "Video Codec",
    color: "#5c6bc0",
    description:
      "Also called AVC, it's the most widely supported video compression standard in the world. Nearly every phone, browser, camera and TV can play H.264 video.",
    highlights: [
      "Web video and streaming",
      "Blu-ray discs and broadcast TV",
      "Video calls and screen recording",
    ],
    funFact:
      "H.264 is also known as MPEG-4 Part 10 and is used in Blu-ray discs — it's one of the most widely deployed video codecs ever.",
    url: "https://en.wikipedia.org/wiki/Advanced_Video_Coding",
  },
  {
    id: "h265",
    name: "H.265",
    abbr: "HEVC",
    category: "Video Codec",
    color: "#7e57c2",
    description:
      "Also called HEVC, the successor to H.264 that compresses video roughly twice as efficiently. It's commonly used for 4K video, though patent licensing has slowed its adoption on the web.",
    highlights: [
      "4K and HDR video",
      "iPhone video recording",
      "4K Blu-ray and streaming",
    ],
    funFact:
      "HEVC stands for High Efficiency Video Coding, and its tangled patent licensing is a big reason the royalty-free AV1 codec was created.",
    url: "https://en.wikipedia.org/wiki/High_Efficiency_Video_Coding",
  },
  {
    id: "vp9",
    name: "VP9",
    abbr: "VP9",
    category: "Video Codec",
    color: "#43a047",
    description:
      "An open, royalty-free video codec developed by Google as a competitor to HEVC. It's often stored in WebM files and is used heavily for streaming video on the web.",
    highlights: [
      "YouTube video streaming",
      "WebM video in browsers",
      "WebRTC video calls",
    ],
    funFact:
      "VP9 descends from codecs made by On2 Technologies, a company Google bought in 2010 — On2's VP6 once powered much of Flash video.",
    url: "https://www.webmproject.org/vp9/",
  },
  {
    id: "hls",
    name: "HLS",
    abbr: "HLS",
    category: "Streaming Protocol",
    color: "#ff3b30",
    description:
      "HTTP Live Streaming, a protocol from Apple that splits video into small chunks served over ordinary HTTP. The player can switch between quality levels as your internet speed changes.",
    highlights: [
      "Live and on-demand video streaming",
      "Adaptive quality on mobile networks",
      "Delivery through standard CDNs",
    ],
    funFact:
      "HLS uses plain .m3u8 playlist files — a format that grew out of the humble M3U playlists from old MP3 players.",
    url: "https://developer.apple.com/streaming/",
  },
  {
    id: "mpeg-dash",
    name: "MPEG-DASH",
    abbr: "DASH",
    category: "Streaming Protocol",
    color: "#00897b",
    description:
      "Dynamic Adaptive Streaming over HTTP, an international standard for streaming video in small chunks at multiple qualities. The player picks the best quality your connection can handle.",
    highlights: [
      "Adaptive streaming on Netflix and YouTube",
      "Codec-agnostic video delivery",
      "Smart TVs and web players",
    ],
    funFact:
      "Unlike HLS, which started as an Apple protocol, MPEG-DASH is an official ISO international standard and doesn't care which video codec you use.",
    url: "https://en.wikipedia.org/wiki/Dynamic_Adaptive_Streaming_over_HTTP",
    spawnWeight: 0.5,
  },
  {
    id: "rtmp",
    name: "RTMP",
    abbr: "RTMP",
    category: "Streaming Protocol",
    color: "#cc0000",
    description:
      "Real-Time Messaging Protocol, originally made for Flash Player to stream audio and video. Today it's mainly used to send a live stream from your broadcasting software up to a platform.",
    highlights: [
      "Sending streams from OBS to Twitch",
      "Live stream ingest to YouTube",
      "Low-latency broadcasting",
    ],
    funFact:
      "Flash Player is long gone, but RTMP outlived it — it's still a standard way to push live streams from OBS to platforms like Twitch.",
    url: "https://en.wikipedia.org/wiki/Real-Time_Messaging_Protocol",
  },
  {
    id: "srt",
    name: "SRT",
    abbr: "SRT",
    category: "Streaming Protocol",
    color: "#0072bc",
    description:
      "Secure Reliable Transport, an open-source protocol for sending live video over unreliable networks like the public internet. It recovers lost packets and encrypts the stream with low delay.",
    highlights: [
      "Live broadcast contribution feeds",
      "Low-latency remote production",
      "Streaming over unstable networks",
    ],
    funFact:
      "SRT was created by Haivision and open-sourced in 2017. Don't mix it up with .srt subtitle files — same letters, totally different thing!",
    url: "https://www.srtalliance.org/",
    spawnWeight: 0.5,
  },
];

export default entries;
