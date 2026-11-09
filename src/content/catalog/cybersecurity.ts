import type { CatalogEntry } from "../types";

/** Cybersecurity */
const entries: CatalogEntry[] = [
  {
    id: "owasp",
    name: "OWASP",
    abbr: "OWASP",
    category: "Security Nonprofit",
    color: "#2a5db0",
    description:
      "The Open Worldwide Application Security Project, a nonprofit community that produces free guides, tools and standards to help developers build more secure software.",
    highlights: [
      "Free security cheat sheets",
      "Tools like ZAP and Dependency-Check",
      "Local chapters and conferences",
    ],
    funFact:
      "OWASP originally stood for Open Web Application Security Project; in 2023 \"Web\" became \"Worldwide\" so the acronym could stay the same.",
    url: "https://owasp.org/",
  },
  {
    id: "owasp-top-10",
    name: "OWASP Top 10",
    abbr: "T10",
    category: "Security Awareness List",
    color: "#c0392b",
    description:
      "A regularly updated list of the ten most critical security risks for web applications, such as broken access control and injection. It is a common starting point for learning web security.",
    highlights: [
      "Security training for developers",
      "Checklists for code reviews",
      "Referenced in audits and compliance",
    ],
    funFact:
      "In the 2021 edition, Broken Access Control jumped to the #1 spot, pushing Injection — long the top risk — down to third place.",
    url: "https://owasp.org/www-project-top-ten/",
  },
  {
    id: "sql-injection",
    name: "SQL Injection",
    abbr: "SQLi",
    category: "Web Vulnerability",
    color: "#e74c3c",
    description:
      "An attack where user input is pasted straight into a database query, letting an attacker change what the query does — like reading or deleting data. Parameterized queries prevent it.",
    highlights: [
      "Classic login-bypass attacks",
      "Why we use parameterized queries",
      "Data breaches from unsafe SQL",
    ],
    funFact:
      "The xkcd comic \"Exploits of a Mom\" features a kid named Robert'); DROP TABLE Students;-- — known to developers as \"Little Bobby Tables.\"",
    url: "https://owasp.org/www-community/attacks/SQL_Injection",
  },
  {
    id: "xss",
    name: "XSS",
    abbr: "XSS",
    category: "Web Vulnerability",
    color: "#e67e22",
    description:
      "Cross-Site Scripting: an attack where a site accidentally includes attacker-controlled JavaScript in its pages, which then runs in other users' browsers. Escaping output prevents it.",
    highlights: [
      "Stealing sessions via injected scripts",
      "Why frameworks escape HTML by default",
      "Defended with output encoding and CSP",
    ],
    funFact:
      "It's abbreviated XSS rather than CSS to avoid confusion with Cascading Style Sheets.",
    url: "https://owasp.org/www-community/attacks/xss/",
  },
  {
    id: "csrf",
    name: "CSRF",
    abbr: "CSRF",
    category: "Web Vulnerability",
    color: "#d35400",
    description:
      "Cross-Site Request Forgery: a trick where a malicious site makes your browser send a request to another site you're logged into, performing actions without your consent.",
    highlights: [
      "Why forms include CSRF tokens",
      "SameSite cookie protection",
      "Unwanted actions on logged-in sites",
    ],
    funFact:
      "CSRF is sometimes pronounced \"sea-surf\" and has also been called a \"one-click attack\" or \"session riding.\"",
    url: "https://owasp.org/www-community/attacks/csrf",
  },
  {
    id: "ssrf",
    name: "SSRF",
    abbr: "SSRF",
    category: "Web Vulnerability",
    color: "#a93226",
    description:
      "Server-Side Request Forgery: an attack that tricks a server into making web requests on the attacker's behalf, often to internal systems the attacker couldn't reach directly.",
    highlights: [
      "Reaching internal services from outside",
      "Stealing cloud metadata credentials",
      "Validating URLs a server fetches",
    ],
    funFact:
      "SSRF was added to the OWASP Top 10 as its own category in 2021, partly because of attacks against cloud metadata endpoints.",
    url: "https://owasp.org/Top10/A10_2021-Server-Side_Request_Forgery_%28SSRF%29/",
  },
  {
    id: "rce",
    name: "RCE",
    abbr: "RCE",
    category: "Vulnerability Class",
    color: "#b03a2e",
    description:
      "Remote Code Execution: a vulnerability that lets an attacker run their own code on someone else's machine over a network. It is usually considered one of the most severe bug types.",
    highlights: [
      "The worst-case vulnerability outcome",
      "Exploits like Log4Shell",
      "Why patching quickly matters",
    ],
    funFact:
      "Log4Shell, discovered in late 2021, was an RCE in the popular Java logging library Log4j that could be triggered just by getting a crafted string logged.",
    url: "https://en.wikipedia.org/wiki/Arbitrary_code_execution",
  },
  {
    id: "csp",
    name: "CSP",
    abbr: "CSP",
    category: "Browser Security Header",
    color: "#16a085",
    description:
      "Content Security Policy: an HTTP header that tells the browser which sources of scripts, styles and other content a page may load. It greatly limits the damage of XSS attacks.",
    highlights: [
      "Blocking injected inline scripts",
      "Restricting where content loads from",
      "Reporting policy violations",
    ],
    funFact:
      "CSP can run in \"report-only\" mode, letting you see what a policy would block before you actually enforce it.",
    url: "https://developer.mozilla.org/en-US/docs/Web/HTTP/CSP",
  },
  {
    id: "sast",
    name: "SAST",
    abbr: "SAST",
    category: "Security Testing",
    color: "#2980b9",
    description:
      "Static Application Security Testing: scanning source code for security bugs without running it, like a spell-checker that looks for dangerous patterns.",
    highlights: [
      "Finding bugs in pull requests",
      "Tools like Semgrep and CodeQL",
      "Shift-left security in CI",
    ],
    funFact:
      "SAST is often called \"white-box\" testing because the tool can see the code's insides, unlike black-box testing of a running app.",
    url: "https://owasp.org/www-community/Source_Code_Analysis_Tools",
  },
  {
    id: "dast",
    name: "DAST",
    abbr: "DAST",
    category: "Security Testing",
    color: "#8e44ad",
    description:
      "Dynamic Application Security Testing: probing a running application from the outside, sending tricky requests to find vulnerabilities the way an attacker would.",
    highlights: [
      "Scanning running web apps",
      "Tools like OWASP ZAP and Burp",
      "Testing staging environments",
    ],
    funFact:
      "DAST is \"black-box\" testing: the scanner knows nothing about the code and only sees how the app responds to requests.",
    url: "https://owasp.org/www-community/Vulnerability_Scanning_Tools",
  },
  {
    id: "sca",
    name: "SCA",
    abbr: "SCA",
    category: "Security Testing",
    color: "#27ae60",
    description:
      "Software Composition Analysis: scanning the open-source libraries your project depends on for known vulnerabilities and license problems.",
    highlights: [
      "Alerts like Dependabot and npm audit",
      "Tracking vulnerable dependencies",
      "Checking open-source licenses",
    ],
    funFact:
      "Most modern apps are mostly third-party code by volume, so a single vulnerable dependency can affect thousands of projects at once.",
    url: "https://owasp.org/www-community/Component_Analysis",
  },
  {
    id: "oauth2",
    name: "OAuth 2.0",
    abbr: "OAuth",
    category: "Authorization Protocol",
    color: "#eb5424",
    description:
      "A standard that lets an app access your data on another service without getting your password. You approve access, and the app receives a limited token instead.",
    highlights: [
      "\"Sign in with Google\" style flows",
      "Letting apps call APIs on your behalf",
      "Scoped, revocable access tokens",
    ],
    funFact:
      "OAuth is about authorization (what an app may do), not authentication (who you are) — that's why OpenID Connect was built on top of it.",
    url: "https://oauth.net/2/",
  },
  {
    id: "openid-connect",
    name: "OpenID Connect",
    abbr: "OIDC",
    category: "Authentication Protocol",
    color: "#f78c40",
    description:
      "An identity layer on top of OAuth 2.0 that lets apps verify who a user is. After login, the app receives an ID token describing the user.",
    highlights: [
      "Single sign-on with Google or Microsoft",
      "ID tokens for user identity",
      "Enterprise identity providers",
    ],
    funFact:
      "OpenID Connect's ID tokens are JWTs, so you can decode one and read the user's basic profile claims inside.",
    url: "https://openid.net/developers/how-connect-works/",
  },
  {
    id: "jwt",
    name: "JWT",
    abbr: "JWT",
    category: "Token Format",
    color: "#d63aff",
    description:
      "JSON Web Token: a compact, signed token made of three Base64URL parts — header, payload and signature. Servers use it to prove who a user is without storing session data.",
    highlights: [
      "Stateless API authentication",
      "ID tokens in OpenID Connect",
      "Passing claims between services",
    ],
    funFact:
      "The JWT spec suggests pronouncing it like the English word \"jot\".",
    url: "https://jwt.io/",
  },
  {
    id: "saml",
    name: "SAML",
    abbr: "SAML",
    category: "SSO Standard",
    color: "#3b5998",
    description:
      "Security Assertion Markup Language: an XML-based standard for single sign-on. Your company's identity provider vouches for you, so you can log in to many apps with one account.",
    highlights: [
      "Enterprise single sign-on",
      "Logging in via Okta or Entra ID",
      "Federated identity between orgs",
    ],
    funFact:
      "SAML 2.0 was approved as an OASIS standard back in 2005, and it is still widely used for enterprise SSO today.",
    url: "https://en.wikipedia.org/wiki/Security_Assertion_Markup_Language",
  },
  {
    id: "passkeys",
    name: "Passkeys",
    abbr: "PK",
    category: "Passwordless Login",
    color: "#4285f4",
    description:
      "A password replacement where your device holds a private key and proves it's you with a fingerprint, face scan or PIN. There's no password to steal or phish.",
    highlights: [
      "Passwordless login on websites",
      "Syncing across your devices",
      "Phishing-resistant sign-in",
    ],
    funFact:
      "Passkeys are phishing-resistant because each one is tied to the website's domain — a fake look-alike site simply can't use it.",
    url: "https://fidoalliance.org/passkeys/",
  },
  {
    id: "webauthn",
    name: "WebAuthn",
    abbr: "WA",
    category: "Web Auth API",
    color: "#5c6bc0",
    description:
      "A browser API that lets websites register and log in users with public-key cryptography, using security keys, fingerprint readers or phone authenticators instead of passwords.",
    highlights: [
      "Implementing passkeys on websites",
      "Security key two-factor login",
      "navigator.credentials in browsers",
    ],
    funFact:
      "WebAuthn became an official W3C Recommendation in 2019, developed together with the FIDO Alliance.",
    url: "https://developer.mozilla.org/en-US/docs/Web/API/Web_Authentication_API",
  },
  {
    id: "fido2",
    name: "FIDO2",
    abbr: "FIDO",
    category: "Authentication Standard",
    color: "#e2231a",
    description:
      "A set of open standards from the FIDO Alliance for passwordless login. It combines WebAuthn in the browser with CTAP, the protocol for talking to authenticators like security keys.",
    highlights: [
      "Hardware security keys",
      "Passkeys across platforms",
      "Strong phishing-resistant MFA",
    ],
    funFact:
      "FIDO stands for Fast IDentity Online — the FIDO Alliance was founded in 2013 by companies including PayPal and Lenovo.",
    url: "https://fidoalliance.org/fido2/",
  },
  {
    id: "rbac",
    name: "RBAC",
    abbr: "RBAC",
    category: "Access Control Model",
    color: "#2e86de",
    description:
      "Role-Based Access Control: users are given roles like \"admin\" or \"editor\", and each role has a set of permissions. It's simpler than assigning permissions to every user one by one.",
    highlights: [
      "Admin, editor and viewer roles",
      "Kubernetes and cloud IAM permissions",
      "Managing access in large teams",
    ],
    funFact:
      "RBAC was formalized in the 1990s by researchers at NIST, and later became an ANSI standard in 2004.",
    url: "https://en.wikipedia.org/wiki/Role-based_access_control",
  },
  {
    id: "abac",
    name: "ABAC",
    abbr: "ABAC",
    category: "Access Control Model",
    color: "#10ac84",
    description:
      "Attribute-Based Access Control: access decisions are made from attributes of the user, resource and context — like department, document owner or time of day — evaluated by policies.",
    highlights: [
      "Fine-grained access policies",
      "Context-aware permissions",
      "Cloud IAM conditions and tags",
    ],
    funFact:
      "ABAC can express rules like \"managers may edit documents from their own department during work hours\" — hard to do with roles alone.",
    url: "https://en.wikipedia.org/wiki/Attribute-based_access_control",
    spawnWeight: 0.5,
  },
  {
    id: "ldap",
    name: "LDAP",
    abbr: "LDAP",
    category: "Directory Protocol",
    color: "#2c7fb8",
    description:
      "Lightweight Directory Access Protocol: a standard way to query and update directory services, which store users, groups and devices for an organization.",
    highlights: [
      "Company login directories",
      "Looking up users and groups",
      "Talking to Active Directory",
    ],
    funFact:
      "LDAP was designed as a \"lightweight\" alternative to the older and heavier X.500 directory access protocol.",
    url: "https://en.wikipedia.org/wiki/Lightweight_Directory_Access_Protocol",
  },
  {
    id: "active-directory",
    name: "Active Directory",
    abbr: "AD",
    category: "Directory Service",
    color: "#0078d4",
    description:
      "Microsoft's directory service for Windows networks. It stores users, computers and groups, and controls who can log in and what they can access across an organization.",
    highlights: [
      "Corporate Windows logins",
      "Group Policy for managing PCs",
      "A prime target in network attacks",
    ],
    funFact:
      "Active Directory first shipped with Windows 2000 Server, and its cloud cousin Azure AD was renamed Microsoft Entra ID in 2023.",
    url: "https://learn.microsoft.com/en-us/windows-server/identity/ad-ds/get-started/virtual-dc/active-directory-domain-services-overview",
  },
  {
    id: "kali-linux",
    name: "Kali Linux",
    abbr: "Kali",
    category: "Security Linux Distro",
    color: "#367bf0",
    description:
      "A Debian-based Linux distribution made for penetration testing and security research. It comes preloaded with hundreds of security tools.",
    highlights: [
      "Penetration testing",
      "Security training and CTFs",
      "Bundled tools like Nmap and Metasploit",
    ],
    funFact:
      "Kali Linux, released in 2013 by Offensive Security, is the successor to an earlier security distro called BackTrack.",
    url: "https://www.kali.org/",
  },
  {
    id: "wireshark",
    name: "Wireshark",
    abbr: "WS",
    category: "Packet Analyzer",
    color: "#1679a7",
    description:
      "A free tool that captures network traffic and lets you inspect every packet in detail. It's great for debugging network problems and learning how protocols work.",
    highlights: [
      "Debugging network issues",
      "Learning how protocols work",
      "Analyzing suspicious traffic",
    ],
    funFact:
      "Wireshark was originally called Ethereal; it was renamed in 2006 because of trademark issues when its creator changed jobs.",
    url: "https://www.wireshark.org/",
  },
  {
    id: "burp-suite",
    name: "Burp Suite",
    abbr: "Burp",
    category: "Web Security Testing",
    color: "#ff6633",
    description:
      "A toolkit for testing web application security. It sits as a proxy between your browser and a site, letting you inspect, modify and replay requests to find vulnerabilities.",
    highlights: [
      "Intercepting HTTP requests",
      "Web app penetration testing",
      "Bug bounty hunting",
    ],
    funFact:
      "Burp Suite is made by PortSwigger, which also runs the free Web Security Academy with hands-on hacking labs.",
    url: "https://portswigger.net/burp",
  },
  {
    id: "metasploit",
    name: "Metasploit",
    abbr: "MSF",
    category: "Exploit Framework",
    color: "#2596cd",
    description:
      "A framework for penetration testers that bundles many ready-made exploits and payloads. It helps security teams check whether known vulnerabilities can actually be exploited.",
    highlights: [
      "Penetration testing",
      "Validating vulnerabilities",
      "Security training labs",
    ],
    funFact:
      "Metasploit was created by H. D. Moore in 2003 and was later acquired by the security company Rapid7.",
    url: "https://www.metasploit.com/",
  },
  {
    id: "nmap",
    name: "Nmap",
    abbr: "Nmap",
    category: "Network Scanner",
    color: "#4682b4",
    description:
      "A free network scanner that discovers hosts on a network and the ports and services they expose. Admins and security testers use it to map what's running.",
    highlights: [
      "Finding open ports",
      "Network inventory",
      "Detecting services and OS versions",
    ],
    funFact:
      "Nmap has made cameos in movies — most famously in The Matrix Reloaded, where Trinity uses it during a hack.",
    url: "https://nmap.org/",
  },
  {
    id: "owasp-zap",
    name: "OWASP ZAP",
    abbr: "ZAP",
    category: "Web Security Scanner",
    color: "#00549e",
    description:
      "A free, open-source web application security scanner. It works as a proxy to inspect traffic and can automatically scan a site for common vulnerabilities.",
    highlights: [
      "Automated web vulnerability scans",
      "DAST in CI pipelines",
      "Learning web app security",
    ],
    funFact:
      "ZAP stands for Zed Attack Proxy; the project left OWASP in 2023 and is now known as \"ZAP by Checkmarx.\"",
    url: "https://www.zaproxy.org/",
  },
  {
    id: "nessus",
    name: "Nessus",
    abbr: "Nss",
    category: "Vulnerability Scanner",
    color: "#00a0b0",
    description:
      "A widely used vulnerability scanner from Tenable. It checks computers and devices for known vulnerabilities, missing patches and risky configurations.",
    highlights: [
      "Scanning networks for known CVEs",
      "Compliance audits",
      "Finding missing patches",
    ],
    funFact:
      "Nessus started as a free open-source project in 1998 before becoming closed-source in 2005 — which led to the OpenVAS fork.",
    url: "https://www.tenable.com/products/nessus",
  },
  {
    id: "openvas",
    name: "OpenVAS",
    abbr: "OVAS",
    category: "Vulnerability Scanner",
    color: "#66c430",
    description:
      "An open-source vulnerability scanner that checks systems for thousands of known security issues. It is part of the Greenbone vulnerability management suite.",
    highlights: [
      "Free vulnerability scanning",
      "Network security audits",
      "Self-hosted security checks",
    ],
    funFact:
      "OpenVAS began as a fork of the last open-source version of Nessus after Nessus went closed-source.",
    url: "https://www.openvas.org/",
    spawnWeight: 0.5,
  },
  {
    id: "hashcat",
    name: "Hashcat",
    abbr: "HC",
    category: "Password Cracker",
    color: "#e8a33d",
    description:
      "A very fast password recovery tool that uses GPUs to guess passwords and compare them to stolen hashes. Security teams use it to test how strong passwords really are.",
    highlights: [
      "Password strength audits",
      "GPU-accelerated hash cracking",
      "CTFs and security research",
    ],
    funFact:
      "Hashcat shows why slow hashes like bcrypt matter: GPUs can try billions of guesses per second against fast hashes like MD5.",
    url: "https://hashcat.net/hashcat/",
    spawnWeight: 0.5,
  },
  {
    id: "john-the-ripper",
    name: "John the Ripper",
    abbr: "JtR",
    category: "Password Cracker",
    color: "#8b1e3f",
    description:
      "A classic open-source password cracking tool. It tries dictionary words and variations against password hashes to find weak passwords.",
    highlights: [
      "Auditing weak passwords",
      "Cracking many hash formats",
      "Security training and CTFs",
    ],
    funFact:
      "John the Ripper is developed by Openwall and was first released in 1996, making it one of the oldest password crackers still in use.",
    url: "https://www.openwall.com/john/",
    spawnWeight: 0.5,
  },
  {
    id: "ghidra",
    name: "Ghidra",
    abbr: "Ghd",
    category: "Reverse Engineering",
    color: "#d64545",
    description:
      "A free software reverse-engineering tool that turns compiled programs back into readable assembly and C-like code, so you can study how they work.",
    highlights: [
      "Analyzing malware",
      "Reverse-engineering binaries",
      "Finding bugs without source code",
    ],
    funFact:
      "Ghidra was built by the U.S. National Security Agency (NSA) and released as open source in 2019.",
    url: "https://ghidra-sre.org/",
  },
  {
    id: "snort",
    name: "Snort",
    abbr: "Snrt",
    category: "Intrusion Detection",
    color: "#e5383b",
    description:
      "An open-source intrusion detection and prevention system. It inspects network traffic in real time and matches it against rules that describe known attacks.",
    highlights: [
      "Network intrusion detection",
      "Writing detection rules",
      "Blocking malicious traffic",
    ],
    funFact:
      "Snort was created by Martin Roesch in 1998, and its mascot is a pig — fitting for a tool that \"sniffs\" packets.",
    url: "https://www.snort.org/",
    spawnWeight: 0.5,
  },
  {
    id: "suricata",
    name: "Suricata",
    abbr: "Sur",
    category: "Intrusion Detection",
    color: "#f28c28",
    description:
      "An open-source, multi-threaded engine for network intrusion detection, prevention and security monitoring. It can use Snort-style rules and logs detailed traffic metadata.",
    highlights: [
      "Network threat detection",
      "Inline intrusion prevention",
      "Logging traffic metadata as JSON",
    ],
    funFact:
      "Suricata is named after the meerkat (Suricata suricatta), an animal famous for standing guard and watching for danger.",
    url: "https://suricata.io/",
    spawnWeight: 0.5,
  },
  {
    id: "aes",
    name: "AES",
    abbr: "AES",
    category: "Encryption Algorithm",
    color: "#1e88e5",
    description:
      "The Advanced Encryption Standard: a symmetric cipher, meaning the same secret key encrypts and decrypts. It protects everything from Wi-Fi traffic to encrypted disks.",
    highlights: [
      "HTTPS and TLS encryption",
      "Full-disk and file encryption",
      "Wi-Fi security with WPA2/WPA3",
    ],
    funFact:
      "AES was chosen by NIST in a public competition; the winner was an algorithm called Rijndael, designed by Belgian cryptographers Joan Daemen and Vincent Rijmen.",
    url: "https://en.wikipedia.org/wiki/Advanced_Encryption_Standard",
  },
  {
    id: "rsa",
    name: "RSA",
    abbr: "RSA",
    category: "Public-Key Algorithm",
    color: "#c62828",
    description:
      "A public-key cryptosystem: anyone can encrypt with your public key, but only your private key can decrypt. Its security relies on how hard it is to factor huge numbers.",
    highlights: [
      "Digital signatures",
      "TLS certificates",
      "SSH keys",
    ],
    funFact:
      "RSA is named after its inventors Rivest, Shamir and Adleman, who published it in 1977.",
    url: "https://en.wikipedia.org/wiki/RSA_(cryptosystem)",
  },
  {
    id: "ecc",
    name: "ECC",
    abbr: "ECC",
    category: "Public-Key Cryptography",
    color: "#7b1fa2",
    description:
      "Elliptic Curve Cryptography: public-key cryptography based on the math of elliptic curves. It offers the same security as RSA with much smaller keys, so it's faster and lighter.",
    highlights: [
      "Modern TLS key exchange",
      "Ed25519 SSH keys",
      "Bitcoin and Ethereum signatures",
    ],
    funFact:
      "A 256-bit ECC key gives roughly the same security as a 3072-bit RSA key, which is why ECC is popular on phones and small devices.",
    url: "https://en.wikipedia.org/wiki/Elliptic-curve_cryptography",
  },
  {
    id: "sha-256",
    name: "SHA-256",
    abbr: "SHA2",
    category: "Hash Function",
    color: "#00897b",
    description:
      "A cryptographic hash function that turns any input into a fixed 256-bit fingerprint. Changing even one character of the input completely changes the output.",
    highlights: [
      "Verifying file downloads",
      "Bitcoin mining and blockchains",
      "Digital signatures and certificates",
    ],
    funFact:
      "SHA-256 is part of the SHA-2 family, which was designed by the U.S. National Security Agency and published in 2001.",
    url: "https://en.wikipedia.org/wiki/SHA-2",
  },
  {
    id: "sha-3",
    name: "SHA-3",
    abbr: "SHA3",
    category: "Hash Function",
    color: "#00acc1",
    description:
      "The newest member of the Secure Hash Algorithm family. It uses a completely different internal design from SHA-2, giving a strong backup if SHA-2 is ever weakened.",
    highlights: [
      "Alternative to SHA-2",
      "Ethereum uses its Keccak cousin",
      "Extendable-output hashing (SHAKE)",
    ],
    funFact:
      "SHA-3 is based on Keccak, the winner of a public NIST competition that ran from 2007 to 2012.",
    url: "https://en.wikipedia.org/wiki/SHA-3",
    spawnWeight: 0.5,
  },
  {
    id: "hmac",
    name: "HMAC",
    abbr: "HMAC",
    category: "Message Authentication",
    color: "#5e35b1",
    description:
      "Hash-based Message Authentication Code: combines a secret key with a hash function to prove a message came from someone with the key and wasn't changed along the way.",
    highlights: [
      "Verifying webhook signatures",
      "Signing JWTs with HS256",
      "Authenticating API requests",
    ],
    funFact:
      "When Stripe or GitHub sends you a webhook, they include an HMAC signature so you can verify it really came from them.",
    url: "https://en.wikipedia.org/wiki/HMAC",
  },
  {
    id: "siem",
    name: "SIEM",
    abbr: "SIEM",
    category: "Security Monitoring",
    color: "#3949ab",
    description:
      "Security Information and Event Management: a system that collects logs from across an organization, correlates them, and raises alerts when something looks like an attack.",
    highlights: [
      "Central security log analysis",
      "Threat detection alerts",
      "Tools like Splunk and Microsoft Sentinel",
    ],
    funFact:
      "SIEM is often pronounced \"sim\" — and the term was coined by Gartner analysts in 2005.",
    url: "https://en.wikipedia.org/wiki/Security_information_and_event_management",
  },
  {
    id: "soar",
    name: "SOAR",
    abbr: "SOAR",
    category: "Security Automation",
    color: "#00897b",
    description:
      "Security Orchestration, Automation and Response: tools that automate routine security work with playbooks, like enriching alerts or isolating an infected machine.",
    highlights: [
      "Automated incident playbooks",
      "Reducing alert fatigue",
      "Connecting security tools together",
    ],
    funFact:
      "SOAR playbooks can handle repetitive alert triage in seconds, freeing human analysts for the tricky cases.",
    url: "https://en.wikipedia.org/wiki/Security_orchestration,_automation_and_response",
    spawnWeight: 0.5,
  },
  {
    id: "ids",
    name: "IDS",
    abbr: "IDS",
    category: "Security System",
    color: "#f39c12",
    description:
      "An Intrusion Detection System watches network traffic or system activity for signs of attacks and raises an alert — like a burglar alarm that notices but doesn't block.",
    highlights: [
      "Spotting attacks on a network",
      "Signature and anomaly detection",
      "Tools like Snort and Suricata",
    ],
    funFact:
      "IDSs typically use two approaches: signature-based detection for known attacks, and anomaly-based detection for unusual behavior.",
    url: "https://en.wikipedia.org/wiki/Intrusion_detection_system",
  },
  {
    id: "ips",
    name: "IPS",
    abbr: "IPS",
    category: "Security System",
    color: "#e74c3c",
    description:
      "An Intrusion Prevention System sits inline with network traffic and actively blocks attacks it detects, rather than just raising an alert like an IDS does.",
    highlights: [
      "Blocking malicious traffic",
      "Built into next-gen firewalls",
      "Virtual patching of known exploits",
    ],
    funFact:
      "Because an IPS sits directly in the traffic path, a false positive can block legitimate users — so rules are tuned carefully.",
    url: "https://en.wikipedia.org/wiki/Intrusion_detection_system#Intrusion_prevention",
  },
  {
    id: "waf",
    name: "WAF",
    abbr: "WAF",
    category: "Web Security Layer",
    color: "#f6821f",
    description:
      "A Web Application Firewall filters HTTP traffic to a website, blocking common attacks like SQL injection and XSS before they reach your app.",
    highlights: [
      "Blocking common web attacks",
      "Cloudflare and AWS WAF",
      "Rate limiting and bot filtering",
    ],
    funFact:
      "ModSecurity, one of the best-known open-source WAFs, is often paired with the OWASP Core Rule Set of generic attack-detection rules.",
    url: "https://owasp.org/www-community/Web_Application_Firewall",
  },
  {
    id: "edr",
    name: "EDR",
    abbr: "EDR",
    category: "Endpoint Security",
    color: "#d32f2f",
    description:
      "Endpoint Detection and Response: security software on laptops and servers that records activity, detects suspicious behavior and lets responders investigate or isolate a machine.",
    highlights: [
      "Detecting malware on devices",
      "Isolating infected machines",
      "Tools like CrowdStrike Falcon",
    ],
    funFact:
      "The term EDR was coined by Gartner analyst Anton Chuvakin in 2013, originally as \"endpoint threat detection and response.\"",
    url: "https://en.wikipedia.org/wiki/Endpoint_detection_and_response",
  },
  {
    id: "xdr",
    name: "XDR",
    abbr: "XDR",
    category: "Threat Detection",
    color: "#6a1b9a",
    description:
      "Extended Detection and Response: an evolution of EDR that pulls together signals from endpoints, network, email and cloud into one place to detect and respond to attacks.",
    highlights: [
      "Unified threat detection",
      "Correlating alerts across tools",
      "Faster incident response",
    ],
    funFact:
      "The \"X\" in XDR stands for \"extended\" — the idea is to stretch EDR's approach beyond just endpoints.",
    url: "https://en.wikipedia.org/wiki/Extended_detection_and_response",
    spawnWeight: 0.5,
  },
  {
    id: "pki",
    name: "PKI",
    abbr: "PKI",
    category: "Security Infrastructure",
    color: "#2e7d32",
    description:
      "Public Key Infrastructure: the system of certificate authorities, certificates and policies that lets us trust public keys — it's what makes the padlock in your browser meaningful.",
    highlights: [
      "HTTPS certificates",
      "Code and document signing",
      "Certificate authorities like Let's Encrypt",
    ],
    funFact:
      "Let's Encrypt, a free certificate authority launched in 2015, helped make HTTPS the default across most of the web.",
    url: "https://en.wikipedia.org/wiki/Public_key_infrastructure",
  },
  {
    id: "zero-trust",
    name: "Zero Trust",
    abbr: "ZT",
    category: "Security Model",
    color: "#1565c0",
    description:
      "A security approach that says \"never trust, always verify\": no user or device is trusted just because it's on the company network. Every request is checked.",
    highlights: [
      "Replacing old VPN-only security",
      "Per-request identity checks",
      "Google's BeyondCorp model",
    ],
    funFact:
      "Google adopted a zero trust model called BeyondCorp after the 2009 Operation Aurora attacks, letting employees work without a traditional VPN.",
    url: "https://en.wikipedia.org/wiki/Zero_trust_architecture",
  },
  {
    id: "secrets-management",
    name: "Secrets Management",
    abbr: "SM",
    category: "Security Practice",
    color: "#ffb000",
    description:
      "The practice of safely storing and handing out sensitive values like API keys, passwords and certificates, instead of hard-coding them in source code.",
    highlights: [
      "Tools like HashiCorp Vault",
      "Rotating API keys and passwords",
      "Keeping secrets out of Git",
    ],
    funFact:
      "GitHub scans public repositories for leaked secrets and alerts many providers automatically, because accidentally committed API keys are so common.",
    url: "https://cheatsheetseries.owasp.org/cheatsheets/Secrets_Management_Cheat_Sheet.html",
  },
];

export default entries;
