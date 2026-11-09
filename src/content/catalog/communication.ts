import type { CatalogEntry } from "../types";

/** Communication Technologies */
const entries: CatalogEntry[] = [
  {
    id: "matrix",
    name: "Matrix",
    abbr: "[m]",
    category: "Messaging Protocol",
    color: "#0dbd8b",
    description:
      "An open standard for decentralized, real-time chat. Anyone can run a server, and users on different servers can still talk to each other, with end-to-end encryption.",
    highlights: [
      "Chat apps like Element",
      "Bridging Slack, IRC and other chats",
      "Secure government communication",
    ],
    funFact:
      "France's government built its official messaging app, Tchap, on Matrix so civil servants could chat securely on servers the state controls.",
    url: "https://matrix.org/",
    spawnWeight: 0.5,
  },
  {
    id: "xmpp",
    name: "XMPP",
    abbr: "XMPP",
    category: "Messaging Protocol",
    color: "#2f7bbf",
    description:
      "The Extensible Messaging and Presence Protocol: an open, XML-based standard for instant messaging and online status, where servers from different providers can interconnect.",
    highlights: [
      "Instant messaging and presence",
      "Self-hosted chat servers",
      "IoT and real-time notifications",
    ],
    funFact:
      "XMPP began in 1999 as Jabber, created by Jeremie Miller. WhatsApp's early messaging backend was built on a customized version of XMPP.",
    url: "https://xmpp.org/",
    spawnWeight: 0.5,
  },
  {
    id: "activitypub",
    name: "ActivityPub",
    abbr: "AP",
    category: "Social Protocol",
    color: "#f1007e",
    description:
      "An open W3C standard for decentralized social networking. Servers using it can follow, share and reply to posts across different sites, forming the \"fediverse\".",
    highlights: [
      "Mastodon and the fediverse",
      "Federated video with PeerTube",
      "Cross-platform follows and replies",
    ],
    funFact:
      "ActivityPub became an official W3C Recommendation in 2018, and it lets someone on Mastodon follow and reply to people on totally different apps.",
    url: "https://www.w3.org/TR/activitypub/",
  },
  {
    id: "sip",
    name: "SIP",
    abbr: "SIP",
    category: "Signaling Protocol",
    color: "#00796b",
    description:
      "The Session Initiation Protocol sets up, manages and ends calls over the internet. It handles the \"ringing and hanging up\" while other protocols carry the actual audio and video.",
    highlights: [
      "VoIP phone systems",
      "Video conferencing and call centers",
      "Connecting internet calls to phone lines",
    ],
    funFact:
      "SIP borrows heavily from HTTP — its responses use codes like \"200 OK\" and \"404 Not Found\", plus phone-specific ones like \"180 Ringing\".",
    url: "https://datatracker.ietf.org/doc/html/rfc3261",
  },
  {
    id: "rtp",
    name: "RTP",
    abbr: "RTP",
    category: "Network Protocol",
    color: "#5c6bc0",
    description:
      "The Real-time Transport Protocol carries live audio and video across networks, tagging packets with timestamps and sequence numbers so they play back smoothly.",
    highlights: [
      "VoIP calls and video chat",
      "WebRTC media streams",
      "Live broadcasting",
    ],
    funFact:
      "RTP usually runs over UDP rather than TCP, because in a live call a late audio packet is useless — it's better to skip it than wait for a resend.",
    url: "https://datatracker.ietf.org/doc/html/rfc3550",
    spawnWeight: 0.5,
  },
  {
    id: "rtsp",
    name: "RTSP",
    abbr: "RTSP",
    category: "Streaming Protocol",
    color: "#8e24aa",
    description:
      "The Real Time Streaming Protocol lets a client control a media stream on a server, with commands like PLAY and PAUSE, while the media itself usually travels over RTP.",
    highlights: [
      "IP security cameras",
      "Streaming from media servers",
      "Video surveillance systems",
    ],
    funFact:
      "RTSP was designed to act like a \"network remote control\" for media, with VCR-style commands such as PLAY, PAUSE and TEARDOWN.",
    url: "https://datatracker.ietf.org/doc/html/rfc7826",
    spawnWeight: 0.5,
  },
  {
    id: "mattermost",
    name: "Mattermost",
    abbr: "MM",
    category: "Team Chat",
    color: "#1e325c",
    description:
      "An open-source team chat platform similar to Slack that organizations can host on their own servers, keeping full control of their messages and data.",
    highlights: [
      "Self-hosted team messaging",
      "DevOps and incident collaboration",
      "Secure chat for regulated teams",
    ],
    funFact:
      "Mattermost began as an internal chat tool at a game studio, SpinPunch, whose team built their own after growing frustrated with their hosted chat service.",
    url: "https://mattermost.com/",
    spawnWeight: 0.5,
  },
  {
    id: "rocket-chat",
    name: "Rocket.Chat",
    abbr: "RC",
    category: "Team Chat",
    color: "#f5455c",
    description:
      "An open-source communication platform for team chat, customer support and video calls that you can self-host or use in the cloud.",
    highlights: [
      "Self-hosted team chat",
      "Omnichannel customer support",
      "Federation with other chat systems",
    ],
    funFact:
      "Rocket.Chat was originally built with Meteor, a full-stack JavaScript framework known for real-time updates out of the box.",
    url: "https://www.rocket.chat/",
    spawnWeight: 0.5,
  },
  {
    id: "signal-protocol",
    name: "Signal Protocol",
    abbr: "SIG",
    category: "Encryption Protocol",
    color: "#3a76f0",
    description:
      "An end-to-end encryption protocol for messaging, so only the sender and recipient can read messages. Keys constantly change, protecting past and future messages.",
    highlights: [
      "Signal messenger",
      "End-to-end encryption in WhatsApp",
      "Secure chats in other messaging apps",
    ],
    funFact:
      "In 2016 WhatsApp finished rolling out the Signal Protocol to all its users, turning on end-to-end encryption for over a billion people at once.",
    url: "https://signal.org/docs/",
  },
];

export default entries;
