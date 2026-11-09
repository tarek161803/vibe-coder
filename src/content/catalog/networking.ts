import type { CatalogEntry } from "../types";

/** Networking */
const entries: CatalogEntry[] = [
  {
    id: "tcp",
    name: "TCP",
    abbr: "TC",
    category: "Network Protocol",
    color: "#2563eb",
    description:
      "Transmission Control Protocol makes sure data sent over a network arrives complete and in the right order. If a packet gets lost, TCP notices and sends it again.",
    highlights: [
      "Loading web pages reliably",
      "Sending email and files",
      "Database and SSH connections",
    ],
    funFact:
      "TCP's designers, Vint Cerf and Bob Kahn, published their key paper in 1974 and later won the Turing Award for their work on the internet's protocols.",
    url: "https://en.wikipedia.org/wiki/Transmission_Control_Protocol",
  },
  {
    id: "udp",
    name: "UDP",
    abbr: "UD",
    category: "Network Protocol",
    color: "#0ea5e9",
    description:
      "User Datagram Protocol sends data quickly without checking that it arrived. It skips TCP's handshakes and retries, which makes it great when speed matters more than perfection.",
    highlights: [
      "Online games and voice calls",
      "Live video streaming",
      "DNS lookups",
    ],
    funFact:
      "The official UDP specification, RFC 768 from 1980, is only about three pages long — one of the shortest core internet standards ever written.",
    url: "https://en.wikipedia.org/wiki/User_Datagram_Protocol",
  },
  {
    id: "ipv4",
    name: "IPv4",
    abbr: "v4",
    category: "Network Protocol",
    color: "#6366f1",
    description:
      "The fourth version of the Internet Protocol, using addresses like 192.168.1.1. Its 32-bit addresses allow about 4.3 billion unique addresses, which turned out to be not enough.",
    highlights: [
      "Most home and office networks",
      "Private ranges like 192.168.x.x",
      "NAT sharing one public address",
    ],
    funFact:
      "In 2011 the central pool of unallocated IPv4 addresses ran out. Today companies buy and sell used IPv4 blocks like real estate.",
    url: "https://en.wikipedia.org/wiki/IPv4",
  },
  {
    id: "ipv6",
    name: "IPv6",
    abbr: "v6",
    category: "Network Protocol",
    color: "#7c3aed",
    description:
      "The newer version of the Internet Protocol with 128-bit addresses, written like 2001:db8::1. It provides so many addresses that every device can have its own public one.",
    highlights: [
      "Solving IPv4 address shortage",
      "Mobile networks and modern ISPs",
      "Direct addressing for IoT devices",
    ],
    funFact:
      "There was never a mainstream IPv5 — version number 5 was already used by an experimental streaming protocol, so the next IP jumped to 6.",
    url: "https://en.wikipedia.org/wiki/IPv6",
  },
  {
    id: "http",
    name: "HTTP",
    abbr: "HT",
    category: "Web Protocol",
    color: "#e44d26",
    description:
      "The HyperText Transfer Protocol is how browsers and servers talk. The browser sends a request like GET /index.html, and the server answers with a status code and the content.",
    highlights: [
      "Loading every web page",
      "REST APIs between apps",
      "Status codes like 200 and 404",
    ],
    funFact:
      "HTTP status code 418 means \"I'm a teapot\". It comes from a 1998 April Fools' joke spec for controlling coffee pots, and many frameworks still support it.",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP",
  },
  {
    id: "https",
    name: "HTTPS",
    abbr: "HS",
    category: "Web Protocol",
    color: "#16a34a",
    description:
      "HTTP wrapped in encryption using TLS. It keeps passwords, payments and messages private between your browser and the website, and proves the site is who it claims to be.",
    highlights: [
      "The padlock in your browser bar",
      "Secure logins and payments",
      "Required for many modern web APIs",
    ],
    funFact:
      "The free certificate authority Let's Encrypt, launched in 2015, made HTTPS certificates free and automatic, helping most of the web switch to encryption.",
    url: "https://developer.mozilla.org/en-US/docs/Glossary/HTTPS",
  },
  {
    id: "http2",
    name: "HTTP/2",
    abbr: "H2",
    category: "Web Protocol",
    color: "#f97316",
    description:
      "A faster version of HTTP that sends many requests at once over a single connection and compresses headers. Websites load quicker without any change to how you write them.",
    highlights: [
      "Faster loading of many small files",
      "Multiplexed requests on one connection",
      "gRPC runs on top of it",
    ],
    funFact:
      "HTTP/2 grew out of SPDY (pronounced \"speedy\"), an experimental protocol Google built and tested in Chrome before it became a standard in 2015.",
    url: "https://en.wikipedia.org/wiki/HTTP/2",
  },
  {
    id: "http3",
    name: "HTTP/3",
    abbr: "H3",
    category: "Web Protocol",
    color: "#ea580c",
    description:
      "The newest version of HTTP, which runs over QUIC instead of TCP. It connects faster and handles lost packets and switching networks (like Wi-Fi to mobile) much better.",
    highlights: [
      "Faster sites on flaky mobile networks",
      "Quicker connection setup",
      "Used by Google, Cloudflare and more",
    ],
    funFact:
      "HTTP/3 is the first major HTTP version that doesn't use TCP at all — it rides on UDP, with QUIC handling reliability itself.",
    url: "https://en.wikipedia.org/wiki/HTTP/3",
  },
  {
    id: "quic",
    name: "QUIC",
    abbr: "QU",
    category: "Transport Protocol",
    color: "#0891b2",
    description:
      "A modern transport protocol built on UDP that combines reliable delivery and encryption in one fast handshake. It is the foundation that HTTP/3 runs on.",
    highlights: [
      "Powering HTTP/3",
      "Fast, encrypted connections",
      "Surviving network switches on phones",
    ],
    funFact:
      "QUIC was first developed at Google and originally stood for \"Quick UDP Internet Connections\", but the official standard says it's just a name, not an acronym.",
    url: "https://en.wikipedia.org/wiki/QUIC",
  },
  {
    id: "ftp",
    name: "FTP",
    abbr: "FT",
    category: "File Transfer Protocol",
    color: "#64748b",
    description:
      "The File Transfer Protocol is an old standard for uploading and downloading files between computers. It sends data, including passwords, without encryption, so safer options are preferred today.",
    highlights: [
      "Uploading files to old web hosts",
      "Public file archives",
      "Legacy business file exchanges",
    ],
    funFact:
      "FTP was first specified in 1971 — it is older than TCP/IP itself, making it one of the oldest internet protocols still in use.",
    url: "https://en.wikipedia.org/wiki/File_Transfer_Protocol",
  },
  {
    id: "sftp",
    name: "SFTP",
    abbr: "SF",
    category: "File Transfer Protocol",
    color: "#0d9488",
    description:
      "The SSH File Transfer Protocol moves files securely over an encrypted SSH connection. It is the modern, safe replacement for plain FTP when uploading files to servers.",
    highlights: [
      "Uploading files to servers securely",
      "Automated file exchange between firms",
      "Managing files with FileZilla",
    ],
    funFact:
      "Despite the name, SFTP isn't FTP with security added — it's a completely separate protocol designed as part of SSH.",
    url: "https://en.wikipedia.org/wiki/SSH_File_Transfer_Protocol",
  },
  {
    id: "ssh",
    name: "SSH",
    abbr: "SS",
    category: "Network Protocol",
    color: "#1e88e5",
    description:
      "Secure Shell lets you log into and control another computer over the network through an encrypted connection. Developers use it daily to manage servers and push code to Git hosts.",
    highlights: [
      "Logging into remote servers",
      "Pushing to GitHub with SSH keys",
      "Secure tunnels and port forwarding",
    ],
    funFact:
      "Tatu Ylönen created SSH in 1995 after a password-sniffing attack on his university network. He picked port 22 because it sat between telnet (23) and FTP (21).",
    url: "https://en.wikipedia.org/wiki/Secure_Shell",
  },
  {
    id: "smtp",
    name: "SMTP",
    abbr: "SM",
    category: "Email Protocol",
    color: "#dc2626",
    description:
      "The Simple Mail Transfer Protocol is how email gets sent and passed between mail servers. When you hit Send, SMTP carries your message toward the recipient's mail server.",
    highlights: [
      "Sending email from apps",
      "Passing mail between servers",
      "Transactional emails like password resets",
    ],
    funFact:
      "Email is older than SMTP: Ray Tomlinson sent the first network email in 1971 and chose the @ sign to separate the user from the computer name.",
    url: "https://en.wikipedia.org/wiki/Simple_Mail_Transfer_Protocol",
  },
  {
    id: "imap",
    name: "IMAP",
    abbr: "IM",
    category: "Email Protocol",
    color: "#b91c1c",
    description:
      "The Internet Message Access Protocol lets email apps read mail that stays stored on the server. That way your inbox looks the same on your phone, laptop and webmail.",
    highlights: [
      "Syncing email across devices",
      "Folders and read status on server",
      "Connecting mail apps to Gmail",
    ],
    funFact:
      "IMAP was designed by Mark Crispin in 1986, back when the idea of reading the same mailbox from several devices was far ahead of its time.",
    url: "https://en.wikipedia.org/wiki/Internet_Message_Access_Protocol",
  },
  {
    id: "pop3",
    name: "POP3",
    abbr: "P3",
    category: "Email Protocol",
    color: "#e11d48",
    description:
      "Post Office Protocol version 3 downloads email from a server to one device, usually deleting it from the server afterward. It is simpler than IMAP but doesn't sync across devices.",
    highlights: [
      "Downloading mail for offline reading",
      "Older desktop email clients",
      "Simple mailbox fetching in scripts",
    ],
    funFact:
      "The \"3\" is just the version number. Earlier versions, POP1 and POP2, came first in the mid-1980s but were quickly replaced.",
    url: "https://en.wikipedia.org/wiki/Post_Office_Protocol",
    spawnWeight: 0.5,
  },
  {
    id: "dns",
    name: "DNS",
    abbr: "DN",
    category: "Network Protocol",
    color: "#0284c7",
    description:
      "The Domain Name System is the internet's phone book. It turns names like example.com into the numeric IP addresses computers need to find each other.",
    highlights: [
      "Looking up website addresses",
      "Pointing domains at your server",
      "Email routing with MX records",
    ],
    funFact:
      "Before DNS was invented in 1983, every computer used a single shared file called HOSTS.TXT listing all hosts, which people downloaded from a central server.",
    url: "https://en.wikipedia.org/wiki/Domain_Name_System",
  },
  {
    id: "dhcp",
    name: "DHCP",
    abbr: "DH",
    category: "Network Protocol",
    color: "#059669",
    description:
      "The Dynamic Host Configuration Protocol automatically gives devices an IP address and network settings when they join a network. It's why your phone just works when you connect to Wi-Fi.",
    highlights: [
      "Home routers handing out IPs",
      "Office and campus networks",
      "Auto-configuring new devices",
    ],
    funFact:
      "A DHCP exchange has four steps — Discover, Offer, Request, Acknowledge — which network engineers remember as \"DORA\".",
    url: "https://en.wikipedia.org/wiki/Dynamic_Host_Configuration_Protocol",
  },
  {
    id: "tls",
    name: "TLS",
    abbr: "TL",
    category: "Security Protocol",
    color: "#15803d",
    description:
      "Transport Layer Security encrypts data traveling between two programs, like your browser and a website. It keeps traffic private and checks certificates to confirm who you're talking to.",
    highlights: [
      "The \"S\" in HTTPS",
      "Encrypting email and API traffic",
      "Certificates that prove identity",
    ],
    funFact:
      "TLS 1.3, finished in 2018, cut the connection handshake down to a single round trip, making secure connections both faster and safer.",
    url: "https://en.wikipedia.org/wiki/Transport_Layer_Security",
  },
  {
    id: "ssl",
    name: "SSL",
    abbr: "SS",
    category: "Security Protocol",
    color: "#ca8a04",
    description:
      "Secure Sockets Layer was the original protocol for encrypting web traffic, created by Netscape. It has been replaced by TLS, but people still say \"SSL certificate\" out of habit.",
    highlights: [
      "Ancestor of today's TLS",
      "The name in \"SSL certificates\"",
      "Early secure online shopping",
    ],
    funFact:
      "SSL 1.0 was never publicly released because of security flaws. The last version, SSL 3.0, was finally killed off in 2014 by the POODLE attack.",
    url: "https://en.wikipedia.org/wiki/Transport_Layer_Security#SSL_1.0,_2.0,_and_3.0",
  },
  {
    id: "icmp",
    name: "ICMP",
    abbr: "IC",
    category: "Network Protocol",
    color: "#9333ea",
    description:
      "The Internet Control Message Protocol carries error and status messages between network devices, like \"destination unreachable\". It's what the ping and traceroute tools use.",
    highlights: [
      "Checking connectivity with ping",
      "Tracing routes with traceroute",
      "Reporting network errors",
    ],
    funFact:
      "The ping tool was written by Mike Muuss in 1983 and named after the sound of sonar, since it bounces a signal off a machine and listens for the echo.",
    url: "https://en.wikipedia.org/wiki/Internet_Control_Message_Protocol",
  },
  {
    id: "snmp",
    name: "SNMP",
    abbr: "SN",
    category: "Network Protocol",
    color: "#7c2d12",
    description:
      "The Simple Network Management Protocol lets admins monitor and manage routers, switches, printers and servers. Devices report stats like traffic and errors to a monitoring system.",
    highlights: [
      "Monitoring routers and switches",
      "Network dashboards and alerts",
      "Checking printer ink and status",
    ],
    funFact:
      "Because early versions sent their \"community string\" passwords in plain text, network engineers jokingly say SNMP stands for \"Security Not My Problem\".",
    url: "https://en.wikipedia.org/wiki/Simple_Network_Management_Protocol",
    spawnWeight: 0.5,
  },
  {
    id: "mqtt",
    name: "MQTT",
    abbr: "MQ",
    category: "IoT Protocol",
    color: "#660066",
    description:
      "A lightweight publish/subscribe messaging protocol for devices with little power or bandwidth. Sensors publish messages to topics, and a broker delivers them to anyone subscribed.",
    highlights: [
      "Smart home devices and sensors",
      "Home Assistant integrations",
      "Industrial IoT telemetry",
    ],
    funFact:
      "MQTT was created in 1999 by Andy Stanford-Clark and Arlen Nipper to monitor oil pipelines over expensive, unreliable satellite links.",
    url: "https://mqtt.org",
  },
  {
    id: "amqp",
    name: "AMQP",
    abbr: "AM",
    category: "Messaging Protocol",
    color: "#ff6600",
    description:
      "The Advanced Message Queuing Protocol is an open standard for sending messages between applications through queues. It makes sure messages are delivered reliably, even if a service is busy.",
    highlights: [
      "RabbitMQ message queues",
      "Decoupling microservices",
      "Reliable financial messaging",
    ],
    funFact:
      "AMQP was born inside the investment bank JPMorgan Chase, which wanted an open messaging standard instead of expensive proprietary systems.",
    url: "https://www.amqp.org",
    spawnWeight: 0.5,
  },
  {
    id: "coap",
    name: "CoAP",
    abbr: "CP",
    category: "IoT Protocol",
    color: "#0f766e",
    description:
      "The Constrained Application Protocol is like a tiny version of HTTP for low-power devices. It uses familiar methods like GET and POST but runs over UDP with very small messages.",
    highlights: [
      "Battery-powered sensors",
      "Smart lighting and meters",
      "Web-style APIs for tiny devices",
    ],
    funFact:
      "A CoAP message header is just 4 bytes, so even microcontrollers with only kilobytes of memory can speak a web-like protocol.",
    url: "https://en.wikipedia.org/wiki/Constrained_Application_Protocol",
    spawnWeight: 0.5,
  },
  {
    id: "ethernet",
    name: "Ethernet",
    abbr: "Et",
    category: "Networking Standard",
    color: "#2563eb",
    description:
      "The standard technology for wired local networks, using cables to connect computers, switches and routers. It's the plug in the back of your router and the backbone of data centers.",
    highlights: [
      "Wired home and office networks",
      "Data center connections",
      "Fast, stable gaming setups",
    ],
    funFact:
      "Ethernet was invented at Xerox PARC in 1973 by Bob Metcalfe and David Boggs. The name nods to the \"luminiferous ether\" once thought to carry light.",
    url: "https://en.wikipedia.org/wiki/Ethernet",
  },
  {
    id: "wi-fi",
    name: "Wi-Fi",
    abbr: "Wi",
    category: "Wireless Standard",
    color: "#0ea5e9",
    description:
      "The family of wireless networking standards (IEEE 802.11) that lets devices connect to a network using radio waves. It brings internet to phones, laptops and smart devices without cables.",
    highlights: [
      "Home and office internet access",
      "Public hotspots in cafes",
      "Connecting smart home gadgets",
    ],
    funFact:
      "\"Wi-Fi\" doesn't actually stand for \"wireless fidelity\". It was a catchy brand name invented by a marketing firm because \"IEEE 802.11b\" was hard to sell.",
    url: "https://www.wi-fi.org",
  },
  {
    id: "bluetooth",
    name: "Bluetooth",
    abbr: "BT",
    category: "Wireless Standard",
    color: "#0082fc",
    description:
      "A short-range wireless technology for connecting nearby devices, like headphones to phones. Bluetooth Low Energy also lets tiny gadgets talk while sipping very little battery.",
    highlights: [
      "Wireless headphones and speakers",
      "Fitness trackers and smartwatches",
      "Keyboards, mice and controllers",
    ],
    funFact:
      "Bluetooth is named after Harald \"Bluetooth\", a 10th-century Danish king who united tribes. Its logo combines his initials in Nordic runes.",
    url: "https://www.bluetooth.com",
  },
  {
    id: "nfc",
    name: "NFC",
    abbr: "NF",
    category: "Wireless Standard",
    color: "#14b8a6",
    description:
      "Near Field Communication lets two devices exchange small bits of data when held a few centimeters apart. It's what makes tap-to-pay and contactless cards work.",
    highlights: [
      "Tap-to-pay with phones and cards",
      "Transit passes and key cards",
      "Pairing devices with a tap",
    ],
    funFact:
      "NFC only works within about 4 centimeters. That tiny range is a feature — it makes it hard to accidentally pay for something from across the room.",
    url: "https://en.wikipedia.org/wiki/Near-field_communication",
  },
  {
    id: "4g",
    name: "4G",
    abbr: "4G",
    category: "Mobile Network",
    color: "#8b5cf6",
    description:
      "The fourth generation of mobile network technology, mainly LTE. It brought fast mobile internet that made video streaming, video calls and app-heavy smartphones practical.",
    highlights: [
      "Mobile internet on smartphones",
      "HD video streaming on the go",
      "Mobile hotspots for laptops",
    ],
    funFact:
      "LTE, the main 4G technology, stands for \"Long Term Evolution\" — a name describing the upgrade path rather than any feature of the network.",
    url: "https://en.wikipedia.org/wiki/4G",
  },
  {
    id: "5g",
    name: "5G",
    abbr: "5G",
    category: "Mobile Network",
    color: "#a855f7",
    description:
      "The fifth generation of mobile networks, offering higher speeds, lower delay and room for many more connected devices than 4G. It targets phones, factories, cars and IoT alike.",
    highlights: [
      "Faster mobile broadband",
      "Low-latency apps and gaming",
      "Connecting huge numbers of IoT devices",
    ],
    funFact:
      "The fastest 5G flavor uses millimeter waves, which are so easily blocked that walls, trees and even your hand can weaken the signal.",
    url: "https://en.wikipedia.org/wiki/5G",
  },
  {
    id: "fiber-optics",
    name: "Fiber Optics",
    abbr: "FO",
    category: "Network Medium",
    color: "#f59e0b",
    description:
      "Thin strands of glass that carry data as pulses of light. Fiber can move enormous amounts of data over long distances with very little loss, forming the backbone of the internet.",
    highlights: [
      "Home fiber broadband",
      "Undersea internet cables",
      "Links between data centers",
    ],
    funFact:
      "Light stays inside the fiber thanks to total internal reflection. Undersea fiber cables carry the vast majority of data traveling between continents — not satellites.",
    url: "https://en.wikipedia.org/wiki/Optical_fiber",
  },
  {
    id: "vpn",
    name: "VPN",
    abbr: "VP",
    category: "Network Security",
    color: "#16a34a",
    description:
      "A Virtual Private Network creates an encrypted tunnel between your device and another network. Companies use it so remote workers can reach internal systems as if they were in the office.",
    highlights: [
      "Remote access to company networks",
      "Encrypting traffic on public Wi-Fi",
      "Linking branch offices together",
    ],
    funFact:
      "VPNs were built for businesses connecting offices and remote staff long before they became popular for watching other countries' streaming catalogs.",
    url: "https://en.wikipedia.org/wiki/Virtual_private_network",
  },
  {
    id: "vlan",
    name: "VLAN",
    abbr: "VL",
    category: "Network Segmentation",
    color: "#0369a1",
    description:
      "A Virtual LAN splits one physical network switch into several separate logical networks. Devices on different VLANs can't talk directly, which improves security and organization.",
    highlights: [
      "Separating guest and office Wi-Fi",
      "Isolating IoT devices at home",
      "Organizing big corporate networks",
    ],
    funFact:
      "VLAN tags (IEEE 802.1Q) use a 12-bit ID, so a network can have at most 4,094 usable VLANs — two of the 4,096 values are reserved.",
    url: "https://en.wikipedia.org/wiki/VLAN",
    spawnWeight: 0.5,
  },
  {
    id: "sdn",
    name: "SDN",
    abbr: "SD",
    category: "Network Architecture",
    color: "#4338ca",
    description:
      "Software-Defined Networking moves the \"brain\" of a network into central software, so admins can program how traffic flows instead of configuring each device by hand.",
    highlights: [
      "Managing huge data center networks",
      "Cloud provider virtual networks",
      "Automating network changes",
    ],
    funFact:
      "SDN took off with OpenFlow, a protocol developed by researchers at Stanford in the late 2000s that let software control network switches directly.",
    url: "https://en.wikipedia.org/wiki/Software-defined_networking",
    spawnWeight: 0.5,
  },
  {
    id: "cdn",
    name: "CDN",
    abbr: "CD",
    category: "Network Concept",
    color: "#f97316",
    description:
      "A Content Delivery Network is a group of servers spread around the world that store copies of website files. Users get content from a nearby server, so pages load faster.",
    highlights: [
      "Speeding up images and scripts",
      "Streaming video to millions",
      "Absorbing traffic spikes and attacks",
    ],
    funFact:
      "One of the first commercial CDNs, Akamai, was founded in 1998 by MIT researchers working on the problem of web congestion — the dreaded \"World Wide Wait\".",
    url: "https://developer.mozilla.org/en-US/docs/Glossary/CDN",
  },
  {
    id: "bgp",
    name: "BGP",
    abbr: "BG",
    category: "Routing Protocol",
    color: "#be123c",
    description:
      "The Border Gateway Protocol is how the big networks that make up the internet tell each other which addresses they can reach. It decides the paths your data takes across the world.",
    highlights: [
      "Routing between internet providers",
      "Connecting cloud and ISP networks",
      "Causing big outages when misconfigured",
    ],
    funFact:
      "BGP is nicknamed the \"two-napkin protocol\" because its first design was sketched on napkins over lunch in 1989. A BGP mistake took Facebook offline for hours in 2021.",
    url: "https://en.wikipedia.org/wiki/Border_Gateway_Protocol",
  },
  {
    id: "anycast",
    name: "Anycast",
    abbr: "An",
    category: "Routing Technique",
    color: "#0891b2",
    description:
      "A routing technique where the same IP address is announced from many locations at once. Each user's traffic automatically goes to the nearest one, improving speed and resilience.",
    highlights: [
      "Global DNS services like 1.1.1.1",
      "CDN edge networks",
      "Spreading out DDoS attack traffic",
    ],
    funFact:
      "There are only 13 named DNS root server identities, but thanks to anycast they are served by well over a thousand physical servers worldwide.",
    url: "https://en.wikipedia.org/wiki/Anycast",
    spawnWeight: 0.5,
  },
  {
    id: "ipsec",
    name: "IPsec",
    abbr: "IS",
    category: "Security Protocol",
    color: "#047857",
    description:
      "A suite of protocols that encrypts and authenticates data at the IP level, protecting every packet between two points. It's commonly used to build secure VPN connections.",
    highlights: [
      "Site-to-site company VPNs",
      "Connecting offices to the cloud",
      "Securing traffic between routers",
    ],
    funFact:
      "IPsec support was originally mandatory in the IPv6 specification, but the requirement was later relaxed to a recommendation.",
    url: "https://en.wikipedia.org/wiki/IPsec",
    spawnWeight: 0.5,
  },
  {
    id: "wireguard",
    name: "WireGuard",
    abbr: "WG",
    category: "VPN Protocol",
    color: "#88171a",
    description:
      "A modern, fast and simple VPN protocol that uses state-of-the-art cryptography. Its small codebase makes it easier to audit and quicker to set up than older VPNs.",
    highlights: [
      "Personal and company VPNs",
      "Tailscale and mesh networks",
      "Fast VPNs on phones",
    ],
    funFact:
      "WireGuard was created by Jason Donenfeld and is only a few thousand lines of code — tiny compared to older VPNs. It was merged into the Linux kernel in 2020.",
    url: "https://www.wireguard.com",
  },
  {
    id: "openvpn",
    name: "OpenVPN",
    abbr: "Op",
    category: "VPN Software",
    color: "#ea7e20",
    description:
      "A popular open-source VPN that creates secure tunnels using TLS encryption. It runs on almost every platform and has been a standard choice for company and personal VPNs for years.",
    highlights: [
      "Remote access to work networks",
      "Self-hosted VPN servers",
      "Commercial VPN apps",
    ],
    funFact:
      "OpenVPN was first released by James Yonan in 2001. It can run over TCP port 443, making its traffic look a lot like ordinary HTTPS.",
    url: "https://openvpn.net",
  },
  {
    id: "dnssec",
    name: "DNSSEC",
    abbr: "DS",
    category: "Security Protocol",
    color: "#1d4ed8",
    description:
      "DNS Security Extensions add digital signatures to DNS records so resolvers can check that answers are genuine and haven't been tampered with on the way.",
    highlights: [
      "Preventing DNS spoofing",
      "Protecting domain lookups",
      "Signed zones for banks and governments",
    ],
    funFact:
      "The keys that sign the DNS root are handled in formal \"key signing ceremonies\" in high-security facilities, with trusted community members present and the events livestreamed.",
    url: "https://en.wikipedia.org/wiki/Domain_Name_System_Security_Extensions",
    spawnWeight: 0.5,
  },
];

export default entries;
