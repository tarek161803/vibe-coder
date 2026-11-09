import type { CatalogEntry } from "../types";

/** Blockchain and Web3 */
const entries: CatalogEntry[] = [
  {
    id: "bitcoin",
    name: "Bitcoin",
    abbr: "Bi",
    category: "Cryptocurrency",
    color: "#f7931a",
    description:
      "The first decentralized digital currency, run by a global network of computers instead of a bank. Transactions are recorded on a public blockchain that anyone can verify.",
    highlights: [
      "Peer-to-peer digital payments",
      "Store of value and trading",
      "The original Proof of Work blockchain",
    ],
    funFact:
      "Bitcoin was created by someone using the pseudonym Satoshi Nakamoto, whose true identity is still unknown. In 2010 a programmer famously paid 10,000 BTC for two pizzas.",
    url: "https://bitcoin.org",
  },
  {
    id: "ethereum",
    name: "Ethereum",
    abbr: "Et",
    category: "Blockchain Platform",
    color: "#627eea",
    description:
      "A blockchain that can run programs called smart contracts, not just send money. Developers use it to build decentralized apps, tokens and NFTs that run without a central server.",
    highlights: [
      "Smart contracts in Solidity",
      "DeFi apps and token launches",
      "NFT marketplaces and DAOs",
    ],
    funFact:
      "Ethereum was proposed by Vitalik Buterin when he was just 19. In 2022 \"The Merge\" switched it from Proof of Work to Proof of Stake, cutting its energy use by over 99%.",
    url: "https://ethereum.org",
  },
  {
    id: "solana",
    name: "Solana",
    abbr: "So",
    category: "Blockchain Platform",
    color: "#9945ff",
    description:
      "A high-speed blockchain designed for lots of cheap, fast transactions. Its programs are usually written in Rust, and it aims to feel quick enough for everyday apps.",
    highlights: [
      "Low-fee, high-throughput transactions",
      "DeFi and NFT projects",
      "On-chain programs written in Rust",
    ],
    funFact:
      "Solana uses \"Proof of History\", a cryptographic clock that timestamps events so nodes can agree on order quickly. The chain is named after Solana Beach in California.",
    url: "https://solana.com",
  },
  {
    id: "polygon",
    name: "Polygon",
    abbr: "Po",
    category: "Scaling Network",
    color: "#8247e5",
    description:
      "A network that helps Ethereum scale by handling transactions more cheaply and quickly. Apps can use familiar Ethereum tools while paying much lower fees.",
    highlights: [
      "Cheaper Ethereum-compatible apps",
      "Gaming and NFT projects",
      "Zero-knowledge scaling tech",
    ],
    funFact:
      "Polygon was originally called Matic Network and rebranded to Polygon in 2021. Its token later migrated from MATIC to POL.",
    url: "https://polygon.technology",
  },
  {
    id: "avalanche",
    name: "Avalanche",
    abbr: "Av",
    category: "Blockchain Platform",
    color: "#e84142",
    description:
      "A fast blockchain platform that lets teams launch their own custom chains. It runs Ethereum-style smart contracts and confirms transactions in about a second or two.",
    highlights: [
      "EVM-compatible smart contracts",
      "Custom app-specific chains",
      "DeFi and asset tokenization",
    ],
    funFact:
      "Avalanche’s consensus works like gossip: nodes repeatedly ask small random samples of peers what they think until the whole network \"snowballs\" into agreement.",
    url: "https://www.avax.network",
    spawnWeight: 0.5,
  },
  {
    id: "cardano",
    name: "Cardano",
    abbr: "Ca",
    category: "Blockchain Platform",
    color: "#0033ad",
    description:
      "A Proof of Stake blockchain built with an emphasis on academic research and formal methods. Its smart contracts are written using Haskell-based tools.",
    highlights: [
      "Proof of Stake staking",
      "Research-driven blockchain design",
      "Smart contracts with Plutus",
    ],
    funFact:
      "Cardano is named after Gerolamo Cardano, a 16th-century Italian mathematician, and its currency ADA is named after Ada Lovelace, often called the first programmer.",
    url: "https://cardano.org",
    spawnWeight: 0.5,
  },
  {
    id: "polkadot",
    name: "Polkadot",
    abbr: "Po",
    category: "Blockchain Platform",
    color: "#e6007a",
    description:
      "A network that connects many specialized blockchains so they can share security and pass messages. Each connected chain can be tailored for a specific job.",
    highlights: [
      "Connecting multiple blockchains",
      "Building chains with Substrate",
      "Shared security for app chains",
    ],
    funFact:
      "Polkadot was founded by Gavin Wood, an Ethereum co-founder who also created the Solidity language and coined the term \"Web3\" in 2014.",
    url: "https://polkadot.com",
    spawnWeight: 0.5,
  },
  {
    id: "cosmos",
    name: "Cosmos",
    abbr: "Co",
    category: "Blockchain Ecosystem",
    color: "#6f7390",
    description:
      "An ecosystem of independent blockchains that can talk to each other. It provides a toolkit, the Cosmos SDK, for building your own chain, plus a protocol called IBC to connect them.",
    highlights: [
      "Building app-specific blockchains",
      "Cross-chain messaging with IBC",
      "Cosmos SDK in Go",
    ],
    funFact:
      "Cosmos calls itself the \"Internet of Blockchains\" — the idea is that many chains, like many networks on the internet, can exchange data using a shared protocol.",
    url: "https://cosmos.network",
    spawnWeight: 0.5,
  },
  {
    id: "near-protocol",
    name: "Near Protocol",
    abbr: "NP",
    category: "Blockchain Platform",
    color: "#00c08b",
    description:
      "A Proof of Stake blockchain focused on being easy for developers and users. It splits work across shards to scale and uses human-readable account names instead of long addresses.",
    highlights: [
      "User-friendly account names",
      "Sharded smart contract platform",
      "Contracts in Rust or JavaScript",
    ],
    funFact:
      "One of NEAR’s co-founders, Illia Polosukhin, is a co-author of \"Attention Is All You Need\", the 2017 paper that introduced the Transformer behind modern AI.",
    url: "https://near.org",
    spawnWeight: 0.5,
  },
  {
    id: "aptos",
    name: "Aptos",
    abbr: "Ap",
    category: "Blockchain Platform",
    color: "#2dd8a3",
    description:
      "A Layer 1 blockchain whose smart contracts are written in the Move language. It runs many transactions in parallel to keep things fast.",
    highlights: [
      "Smart contracts in Move",
      "Parallel transaction execution",
      "High-throughput dApps",
    ],
    funFact:
      "Aptos was started by former Meta engineers who worked on Diem, Facebook’s abandoned blockchain project, and it carries on Diem’s Move language.",
    url: "https://aptosfoundation.org",
    spawnWeight: 0.5,
  },
  {
    id: "sui",
    name: "Sui",
    abbr: "SU",
    category: "Blockchain Platform",
    color: "#4da2ff",
    description:
      "A Layer 1 blockchain built around objects: every asset is an object with an owner. It uses a version of the Move language and can process unrelated transactions in parallel.",
    highlights: [
      "Object-centric smart contracts",
      "Fast parallel transactions",
      "Web3 games and NFTs",
    ],
    funFact:
      "Sui was built by Mysten Labs, founded by former Meta engineers from the Diem project — making it a sibling of Aptos, as both grew out of Diem’s Move language.",
    url: "https://sui.io",
    spawnWeight: 0.5,
  },
  {
    id: "vyper",
    name: "Vyper",
    abbr: "VY",
    category: "Smart Contract Language",
    color: "#7c4dff",
    description:
      "A Python-like programming language for writing Ethereum smart contracts. It deliberately leaves out tricky features to make contracts easier to read and audit.",
    highlights: [
      "Ethereum smart contracts",
      "Security-focused DeFi code",
      "Readable, auditable contracts",
    ],
    funFact:
      "Vyper intentionally has no class inheritance or operator overloading — its designers believe code that’s easy to read is harder to sneak bugs into.",
    url: "https://docs.vyperlang.org",
    spawnWeight: 0.5,
  },
  {
    id: "move",
    name: "Move",
    abbr: "MO",
    category: "Smart Contract Language",
    color: "#14b8a6",
    description:
      "A programming language for smart contracts that treats digital assets as \"resources\" that can’t be copied or accidentally deleted. It powers chains like Aptos and Sui.",
    highlights: [
      "Smart contracts on Aptos and Sui",
      "Safe handling of digital assets",
      "Rust-inspired syntax",
    ],
    funFact:
      "Move was originally created at Facebook for its Libra (later Diem) cryptocurrency project, which was shut down — but the language lived on in other blockchains.",
    url: "https://en.wikipedia.org/wiki/Move_(programming_language)",
    spawnWeight: 0.5,
  },
  {
    id: "web3js",
    name: "Web3.js",
    abbr: "WJ",
    category: "Blockchain Library",
    color: "#f16822",
    description:
      "A JavaScript library that lets web apps talk to the Ethereum blockchain. You can read balances, send transactions and call smart contracts from your code.",
    highlights: [
      "Connecting dApps to Ethereum",
      "Calling smart contract functions",
      "Reading wallet balances",
    ],
    funFact:
      "Web3.js was one of the very first Ethereum libraries, maintained for years by the Ethereum Foundation before ChainSafe took over its development.",
    url: "https://web3js.org",
    spawnWeight: 0.5,
  },
  {
    id: "ethersjs",
    name: "Ethers.js",
    abbr: "EJ",
    category: "Blockchain Library",
    color: "#2535a0",
    description:
      "A compact JavaScript library for interacting with Ethereum and its wallets. It’s popular for being small, well-documented and easy to use in web apps.",
    highlights: [
      "Frontend wallet connections",
      "Sending signed transactions",
      "Interacting with smart contracts",
    ],
    funFact:
      "Ethers.js was written and is still largely maintained by a single developer, Richard Moore, yet it became one of the most widely used Ethereum libraries.",
    url: "https://docs.ethers.org",
    spawnWeight: 0.5,
  },
  {
    id: "foundry",
    name: "Foundry",
    abbr: "Fo",
    category: "Smart Contract Toolkit",
    color: "#e4572e",
    description:
      "A fast toolkit for building, testing and deploying Ethereum smart contracts. You write your tests in Solidity itself, and it’s built in Rust for speed.",
    highlights: [
      "Testing contracts in Solidity",
      "Fuzz testing smart contracts",
      "Local chain with Anvil",
    ],
    funFact:
      "Foundry’s tools have blacksmith names: forge builds and tests, cast sends commands, anvil runs a local chain, and chisel is an interactive Solidity shell.",
    url: "https://getfoundry.sh",
    spawnWeight: 0.5,
  },
  {
    id: "hardhat",
    name: "Hardhat",
    abbr: "HH",
    category: "Smart Contract Toolkit",
    color: "#fff04d",
    description:
      "A JavaScript-based development environment for Ethereum. It compiles, tests and deploys smart contracts and runs a local blockchain for experimenting.",
    highlights: [
      "Local Ethereum test network",
      "Testing contracts with JavaScript",
      "Debugging with console.log",
    ],
    funFact:
      "Hardhat lets you use console.log inside Solidity contracts while testing — a small feature that made debugging smart contracts far less painful.",
    url: "https://hardhat.org",
    spawnWeight: 0.5,
  },
  {
    id: "anchor",
    name: "Anchor",
    abbr: "An",
    category: "Smart Contract Framework",
    color: "#3b82f6",
    description:
      "A Rust framework that makes writing Solana programs much easier. It generates lots of the repetitive safety checks and gives you a client library for free.",
    highlights: [
      "Writing Solana programs in Rust",
      "Auto-generated IDL and clients",
      "Built-in account validation",
    ],
    funFact:
      "Solana programs written by hand need many manual account checks; Anchor’s macros generate these for you, which is why most Solana projects use it.",
    url: "https://www.anchor-lang.com",
    spawnWeight: 0.5,
  },
  {
    id: "ipfs",
    name: "IPFS",
    abbr: "IP",
    category: "Decentralized Storage",
    color: "#65c2cb",
    description:
      "A peer-to-peer system for storing and sharing files. Instead of finding files by location (a URL), you find them by a fingerprint of their content.",
    highlights: [
      "Storing NFT images and metadata",
      "Hosting decentralized websites",
      "Content-addressed file sharing",
    ],
    funFact:
      "IPFS stands for InterPlanetary File System — the name is half-serious, since content addressing could work even across huge delays like Earth-to-Mars links.",
    url: "https://ipfs.tech",
  },
  {
    id: "filecoin",
    name: "Filecoin",
    abbr: "Fi",
    category: "Decentralized Storage",
    color: "#0090ff",
    description:
      "A blockchain-based marketplace for storage: people rent out spare disk space and get paid in tokens for storing others’ data reliably.",
    highlights: [
      "Paid decentralized storage",
      "Long-term archiving of data",
      "Backing up IPFS content",
    ],
    funFact:
      "Filecoin was created by Protocol Labs, the same team behind IPFS, and storage providers must regularly prove cryptographically that they still hold your data.",
    url: "https://filecoin.io",
    spawnWeight: 0.5,
  },
  {
    id: "arweave",
    name: "Arweave",
    abbr: "AR",
    category: "Decentralized Storage",
    color: "#4a5568",
    description:
      "A decentralized network for permanent data storage. You pay once up front, and the data is meant to stay available forever.",
    highlights: [
      "Permanent file storage",
      "Archiving web pages and NFTs",
      "Storing data for dApps",
    ],
    funFact:
      "Arweave calls its network the \"permaweb\" — a version of the web where pages aren’t supposed to disappear when someone stops paying for hosting.",
    url: "https://arweave.org",
    spawnWeight: 0.5,
  },
  {
    id: "the-graph",
    name: "The Graph",
    abbr: "Gr",
    category: "Blockchain Indexing",
    color: "#6747ed",
    description:
      "An indexing protocol that organizes blockchain data so apps can query it quickly using GraphQL, instead of scanning the whole chain themselves.",
    highlights: [
      "Querying blockchain data via GraphQL",
      "Powering DeFi dashboards",
      "Building custom subgraphs",
    ],
    funFact:
      "The Graph is often called \"the Google of blockchains\": developers write \"subgraphs\" describing which on-chain events to index and how to store them.",
    url: "https://thegraph.com",
    spawnWeight: 0.5,
  },
  {
    id: "chainlink",
    name: "Chainlink",
    abbr: "Ch",
    category: "Blockchain Oracle",
    color: "#375bd2",
    description:
      "A network of oracles that brings real-world data, like asset prices or weather, onto blockchains. Smart contracts can’t fetch outside data themselves, so they rely on oracles.",
    highlights: [
      "Price feeds for DeFi apps",
      "Verifiable random numbers",
      "Cross-chain messaging",
    ],
    funFact:
      "Smart contracts can’t call web APIs on their own — this is known as the \"oracle problem\", and Chainlink exists to solve it.",
    url: "https://chain.link",
    spawnWeight: 0.5,
  },
  {
    id: "infura",
    name: "Infura",
    abbr: "In",
    category: "Blockchain API Service",
    color: "#ff6b4a",
    description:
      "A hosted service that gives apps access to Ethereum and other blockchains through an API, so you don’t have to run your own node.",
    highlights: [
      "Node access without running one",
      "Backend for wallets and dApps",
      "Ethereum and IPFS APIs",
    ],
    funFact:
      "Infura is owned by ConsenSys, the same company that makes MetaMask, and MetaMask has long used Infura by default to talk to Ethereum.",
    url: "https://www.infura.io",
    spawnWeight: 0.5,
  },
  {
    id: "alchemy",
    name: "Alchemy",
    abbr: "Al",
    category: "Blockchain API Service",
    color: "#363ff9",
    description:
      "A developer platform that provides blockchain node access and extra APIs for reading NFTs, tokens and transactions. It saves teams from running their own infrastructure.",
    highlights: [
      "Hosted blockchain nodes",
      "NFT and token data APIs",
      "Monitoring dApp requests",
    ],
    funFact:
      "Running your own blockchain node can mean storing and syncing huge amounts of chain data — services like Alchemy exist so developers can skip that and just call an API.",
    url: "https://www.alchemy.com",
    spawnWeight: 0.5,
  },
  {
    id: "walletconnect",
    name: "WalletConnect",
    abbr: "WC",
    category: "Wallet Protocol",
    color: "#3b99fc",
    description:
      "An open protocol that connects crypto wallets to web apps, often by scanning a QR code. Your keys stay in your wallet while the app asks it to sign things.",
    highlights: [
      "Connecting mobile wallets to dApps",
      "QR code login for Web3 sites",
      "Signing transactions remotely",
    ],
    funFact:
      "WalletConnect solved a real headache: using your phone wallet with a desktop website. Scan a QR code and the two talk through an encrypted relay.",
    url: "https://walletconnect.network",
    spawnWeight: 0.5,
  },
  {
    id: "metamask",
    name: "MetaMask",
    abbr: "MM",
    category: "Crypto Wallet",
    color: "#f6851b",
    description:
      "A popular crypto wallet available as a browser extension and mobile app. It stores your keys and lets websites ask you to approve blockchain transactions.",
    highlights: [
      "Storing Ethereum keys and tokens",
      "Logging into dApps",
      "Approving smart contract calls",
    ],
    funFact:
      "MetaMask’s logo is a fox, and its browser extension displays a cartoon fox head that follows your mouse cursor around on the login screen.",
    url: "https://metamask.io",
  },
  {
    id: "smart-contracts",
    name: "Smart Contracts",
    abbr: "SC",
    category: "Blockchain Concept",
    color: "#10b981",
    description:
      "Programs stored on a blockchain that run automatically when certain conditions are met. Once deployed, their code is public and usually can’t be changed.",
    highlights: [
      "Automated token transfers",
      "Decentralized exchanges and lending",
      "On-chain voting and NFTs",
    ],
    funFact:
      "The term \"smart contract\" was coined by computer scientist Nick Szabo in the 1990s, long before blockchains existed. He compared it to a vending machine.",
    url: "https://en.wikipedia.org/wiki/Smart_contract",
  },
  {
    id: "distributed-ledger",
    name: "Distributed Ledger",
    abbr: "DL",
    category: "Blockchain Concept",
    color: "#0ea5e9",
    description:
      "A shared record of transactions that is copied and kept in sync across many computers. Blockchains are the best-known kind of distributed ledger.",
    highlights: [
      "Tamper-resistant record keeping",
      "Cryptocurrency transaction history",
      "Supply chain tracking",
    ],
    funFact:
      "Not every distributed ledger is a blockchain — some, like IOTA’s Tangle or Hedera’s hashgraph, use graph structures instead of a chain of blocks.",
    url: "https://en.wikipedia.org/wiki/Distributed_ledger",
    spawnWeight: 0.5,
  },
  {
    id: "proof-of-work",
    name: "Proof of Work",
    abbr: "PW",
    category: "Consensus Mechanism",
    color: "#f59e0b",
    description:
      "A way for a network to agree on new blocks by making computers race to solve a hard math puzzle. Winning requires real computing effort, which makes cheating expensive.",
    highlights: [
      "Securing the Bitcoin network",
      "Cryptocurrency mining",
      "Anti-spam systems like Hashcash",
    ],
    funFact:
      "The idea predates Bitcoin: Hashcash, proposed by Adam Back in 1997, used Proof of Work to make sending spam email costly.",
    url: "https://en.wikipedia.org/wiki/Proof_of_work",
  },
  {
    id: "proof-of-stake",
    name: "Proof of Stake",
    abbr: "PS",
    category: "Consensus Mechanism",
    color: "#22c55e",
    description:
      "A way for a blockchain to agree on new blocks by having validators lock up (\"stake\") their own coins. Cheaters can lose their stake, so honesty pays.",
    highlights: [
      "Securing Ethereum since 2022",
      "Earning staking rewards",
      "Energy-efficient consensus",
    ],
    funFact:
      "When Ethereum switched from Proof of Work to Proof of Stake in 2022, its estimated energy consumption dropped by more than 99%.",
    url: "https://en.wikipedia.org/wiki/Proof_of_stake",
  },
  {
    id: "zero-knowledge-proofs",
    name: "Zero-Knowledge Proofs",
    abbr: "ZK",
    category: "Cryptography Concept",
    color: "#a855f7",
    description:
      "A cryptographic trick that lets you prove a statement is true without revealing why. For example, you could prove you know a password without ever showing it.",
    highlights: [
      "Private blockchain transactions",
      "ZK rollups for scaling",
      "Privacy-preserving identity checks",
    ],
    funFact:
      "Zero-knowledge proofs were introduced in a 1985 paper by Goldwasser, Micali and Rackoff — decades before crypto made them a hot topic.",
    url: "https://en.wikipedia.org/wiki/Zero-knowledge_proof",
  },
  {
    id: "defi",
    name: "DeFi",
    abbr: "De",
    category: "Blockchain Concept",
    color: "#06b6d4",
    description:
      "Short for decentralized finance: financial services like lending, trading and saving built with smart contracts instead of banks.",
    highlights: [
      "Decentralized exchanges like Uniswap",
      "Crypto lending and borrowing",
      "Stablecoins and yield farming",
    ],
    funFact:
      "DeFi apps are often called \"money legos\" because smart contracts can plug into each other — one app can build on top of another without asking permission.",
    url: "https://en.wikipedia.org/wiki/Decentralized_finance",
  },
  {
    id: "nfts",
    name: "NFTs",
    abbr: "Nf",
    category: "Blockchain Concept",
    color: "#ec4899",
    description:
      "Non-fungible tokens: unique tokens on a blockchain that record ownership of something, like digital art or a game item. Unlike coins, no two are interchangeable.",
    highlights: [
      "Digital art and collectibles",
      "In-game items and tickets",
      "Proving digital ownership",
    ],
    funFact:
      "In 2021 Beeple’s digital artwork \"Everydays: The First 5000 Days\" sold as an NFT at Christie’s for about $69 million.",
    url: "https://en.wikipedia.org/wiki/Non-fungible_token",
  },
  {
    id: "daos",
    name: "DAOs",
    abbr: "Da",
    category: "Blockchain Concept",
    color: "#8b5cf6",
    description:
      "Decentralized autonomous organizations: groups that make decisions and manage funds through votes recorded by smart contracts, rather than a traditional management chain.",
    highlights: [
      "Governing DeFi protocols",
      "Community-owned treasuries",
      "Token-based voting",
    ],
    funFact:
      "One of the first DAOs, simply named \"The DAO\", was hacked in 2016 — and the fallout led Ethereum to split into Ethereum and Ethereum Classic.",
    url: "https://en.wikipedia.org/wiki/Decentralized_autonomous_organization",
    spawnWeight: 0.5,
  },
  {
    id: "layer-1",
    name: "Layer 1",
    abbr: "L1",
    category: "Blockchain Concept",
    color: "#2563eb",
    description:
      "The base blockchain itself, like Bitcoin or Ethereum, which handles its own security and final record of transactions. Other systems can be built on top of it.",
    highlights: [
      "Base security and consensus",
      "Settling final transactions",
      "Examples: Bitcoin, Ethereum, Solana",
    ],
    funFact:
      "Blockchain builders often talk about the \"blockchain trilemma\": it’s hard for a Layer 1 to be fully decentralized, secure and highly scalable all at once.",
    url: "https://en.wikipedia.org/wiki/Blockchain",
    spawnWeight: 0.5,
  },
  {
    id: "layer-2",
    name: "Layer 2",
    abbr: "L2",
    category: "Blockchain Concept",
    color: "#f43f5e",
    description:
      "A network built on top of a Layer 1 blockchain that processes transactions more cheaply, then reports back to the main chain for security.",
    highlights: [
      "Cheaper Ethereum transactions",
      "Bitcoin Lightning payments",
      "Scaling dApps to more users",
    ],
    funFact:
      "Bitcoin’s Lightning Network is a Layer 2: two people open a payment channel and can trade back and forth many times, settling on-chain only at the end.",
    url: "https://ethereum.org/en/layer-2/",
    spawnWeight: 0.5,
  },
  {
    id: "rollups",
    name: "Rollups",
    abbr: "Ro",
    category: "Scaling Technique",
    color: "#ff0420",
    description:
      "A Layer 2 technique that bundles many transactions together off-chain and posts a compressed summary to the main chain. Optimistic and ZK rollups are the two main types.",
    highlights: [
      "Scaling Ethereum (Arbitrum, Optimism)",
      "ZK proofs for fast finality",
      "Lowering transaction fees",
    ],
    funFact:
      "Optimistic rollups assume transactions are valid by default and give everyone a challenge window — roughly a week — to submit a fraud proof if something’s wrong.",
    url: "https://ethereum.org/en/developers/docs/scaling/",
    spawnWeight: 0.5,
  },
];

export default entries;
