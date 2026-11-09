import type { CatalogEntry } from "../types";

/** Distributed Systems */
const entries: CatalogEntry[] = [
  {
    id: "hazelcast",
    name: "Hazelcast",
    abbr: "HZ",
    category: "In-Memory Data Grid",
    color: "#f7a428",
    description:
      "Hazelcast is an in-memory data platform that spreads data across a cluster of machines. Apps use it as a fast distributed cache and for processing data streams.",
    highlights: [
      "Distributed caching for Java apps",
      "Real-time stream processing",
      "Sharing state across servers",
    ],
    funFact:
      "Hazelcast started as an open-source project in Istanbul, Turkey, in 2008 before growing into a company based in Silicon Valley.",
    url: "https://hazelcast.com",
    spawnWeight: 0.5,
  },
  {
    id: "apache-ignite",
    name: "Apache Ignite",
    abbr: "AI",
    category: "In-Memory Database",
    color: "#e5323e",
    description:
      "Apache Ignite is a distributed database that keeps data in memory across many machines for speed. It supports SQL, key-value access and running computations close to the data.",
    highlights: [
      "Distributed caching and SQL",
      "High-speed data processing",
      "Scaling out Java applications",
    ],
    funFact:
      "Ignite began as GridGain's in-memory computing platform, which the company donated to the Apache Software Foundation in 2014.",
    url: "https://ignite.apache.org",
    spawnWeight: 0.5,
  },
  {
    id: "consul",
    name: "Consul",
    abbr: "Co",
    category: "Service Networking",
    color: "#e03875",
    description:
      "Consul is a HashiCorp tool that helps services find and talk to each other. It provides service discovery, health checks, a key-value store and a service mesh.",
    highlights: [
      "Service discovery in microservices",
      "Health checking",
      "Service mesh networking",
    ],
    funFact:
      "Consul comes from HashiCorp, the company founded by Mitchell Hashimoto and Armon Dadgar — also the makers of Terraform and Vault.",
    url: "https://developer.hashicorp.com/consul",
  },
  {
    id: "etcd",
    name: "etcd",
    abbr: "Et",
    category: "Key-Value Store",
    color: "#419eda",
    description:
      "etcd is a reliable distributed key-value store for configuration and coordination data. It uses the Raft algorithm so every node agrees on the same data even if some fail.",
    highlights: [
      "Stores all Kubernetes cluster state",
      "Shared configuration",
      "Leader election and locks",
    ],
    funFact:
      "The name combines the Unix /etc folder, where config files live, with \"d\" for distributed — a distributed /etc.",
    url: "https://etcd.io",
  },
  {
    id: "zookeeper",
    name: "ZooKeeper",
    abbr: "ZK",
    category: "Coordination Service",
    color: "#d4a017",
    description:
      "Apache ZooKeeper is a centralized service that helps distributed systems coordinate: storing configuration, tracking which nodes are alive and electing leaders.",
    highlights: [
      "Coordinating Hadoop and Kafka clusters",
      "Leader election",
      "Distributed configuration",
    ],
    funFact:
      "Many Hadoop-ecosystem projects were named after animals, like Pig and Hive — so the tool that coordinates them all was fittingly named ZooKeeper.",
    url: "https://zookeeper.apache.org",
  },
  {
    id: "cap-theorem",
    name: "CAP Theorem",
    abbr: "CT",
    category: "Distributed Concept",
    color: "#e17055",
    description:
      "The CAP theorem says a distributed system facing a network split must choose between Consistency (everyone sees the same data) and Availability (every request gets an answer).",
    highlights: [
      "Choosing a distributed database",
      "System design interviews",
      "Understanding trade-offs",
    ],
    funFact:
      "Eric Brewer proposed CAP as a conjecture in 2000; Seth Gilbert and Nancy Lynch formally proved it two years later.",
    url: "https://en.wikipedia.org/wiki/CAP_theorem",
  },
  {
    id: "consensus-algorithms",
    name: "Consensus Algorithms",
    abbr: "CA",
    category: "Distributed Concept",
    color: "#00a8a8",
    description:
      "Consensus algorithms let a group of computers agree on a single value or order of events, even when some crash or messages get lost. They keep replicated data in sync.",
    highlights: [
      "Replicated databases",
      "Blockchains",
      "Cluster coordination (Raft, Paxos)",
    ],
    funFact:
      "The famous FLP result (1985) proved no deterministic algorithm can guarantee consensus in a fully asynchronous system if even one process might crash.",
    url: "https://en.wikipedia.org/wiki/Consensus_(computer_science)",
  },
  {
    id: "raft",
    name: "Raft",
    abbr: "RA",
    category: "Consensus Algorithm",
    color: "#2e86de",
    description:
      "Raft is a consensus algorithm that keeps a replicated log in sync across servers by electing a leader. It was designed to be much easier to understand than Paxos.",
    highlights: [
      "Used by etcd and Consul",
      "Replicated state machines",
      "Leader-based replication",
    ],
    funFact:
      "Its paper was titled \"In Search of an Understandable Consensus Algorithm\". The name hints at a raft built from logs to escape the island of Paxos.",
    url: "https://raft.github.io",
  },
  {
    id: "paxos",
    name: "Paxos",
    abbr: "Pa",
    category: "Consensus Algorithm",
    color: "#1e3799",
    description:
      "Paxos is a family of protocols that lets unreliable computers agree on a value. It is famously correct and famously hard to understand, yet it underpins many large systems.",
    highlights: [
      "Google's Chubby lock service",
      "Foundational distributed theory",
      "Fault-tolerant replication",
    ],
    funFact:
      "Leslie Lamport first described Paxos as the parliament of a fictional ancient Greek island. Reviewers didn't get the joke and the paper took years to be published.",
    url: "https://en.wikipedia.org/wiki/Paxos_(computer_science)",
    spawnWeight: 0.5,
  },
  {
    id: "distributed-transactions",
    name: "Distributed Transactions",
    abbr: "DT",
    category: "Distributed Concept",
    color: "#8e44ad",
    description:
      "A distributed transaction is an all-or-nothing operation that spans multiple databases or services. Either every part commits or every part rolls back.",
    highlights: [
      "Two-phase commit (2PC)",
      "Cross-database consistency",
      "Financial and booking systems",
    ],
    funFact:
      "Classic two-phase commit can get stuck: if the coordinator crashes after everyone votes \"yes\", participants may have to wait, locked, until it comes back.",
    url: "https://en.wikipedia.org/wiki/Distributed_transaction",
  },
  {
    id: "eventual-consistency",
    name: "Eventual Consistency",
    abbr: "EC",
    category: "Consistency Model",
    color: "#00b894",
    description:
      "Eventual consistency means copies of data on different servers may briefly disagree, but if no new updates arrive, they will all catch up and match over time.",
    highlights: [
      "NoSQL databases like Cassandra",
      "DNS and CDNs",
      "Highly available global apps",
    ],
    funFact:
      "DNS is a classic eventually consistent system — that's why a domain change can take a while to \"propagate\" around the world.",
    url: "https://en.wikipedia.org/wiki/Eventual_consistency",
  },
  {
    id: "strong-consistency",
    name: "Strong Consistency",
    abbr: "SC",
    category: "Consistency Model",
    color: "#0984e3",
    description:
      "Strong consistency guarantees that once a write succeeds, every later read sees it, no matter which server you ask. It's simpler to reason about but can be slower.",
    highlights: [
      "Banking and payments",
      "Inventory and booking systems",
      "Databases like Spanner",
    ],
    funFact:
      "Google's Spanner database achieves strong consistency worldwide partly by using atomic clocks and GPS receivers in its data centers to keep time tight.",
    url: "https://en.wikipedia.org/wiki/Strong_consistency",
  },
  {
    id: "leader-election",
    name: "Leader Election",
    abbr: "LE",
    category: "Distributed Concept",
    color: "#fdcb6e",
    description:
      "Leader election is how a group of servers picks one of themselves to coordinate work. If the leader fails, the others notice and choose a new one.",
    highlights: [
      "Database primary selection",
      "Kafka and Kubernetes controllers",
      "Part of Raft and Paxos",
    ],
    funFact:
      "The classic \"Bully algorithm\" from 1982 works just like it sounds: the node with the highest ID wins and announces itself the boss.",
    url: "https://en.wikipedia.org/wiki/Leader_election",
    spawnWeight: 0.5,
  },
  {
    id: "distributed-locking",
    name: "Distributed Locking",
    abbr: "DL",
    category: "Distributed Concept",
    color: "#636e72",
    description:
      "A distributed lock makes sure only one process across many machines can do a certain job at a time, such as processing a payment or running a scheduled task.",
    highlights: [
      "Preventing duplicate jobs",
      "Redis, ZooKeeper and etcd locks",
      "Protecting shared resources",
    ],
    funFact:
      "In 2016 Martin Kleppmann and Redis creator Salvatore Sanfilippo publicly debated whether Redis's Redlock algorithm was safe — a famous lesson in how tricky locks are.",
    url: "https://en.wikipedia.org/wiki/Distributed_lock_manager",
    spawnWeight: 0.5,
  },
  {
    id: "service-discovery",
    name: "Service Discovery",
    abbr: "SD",
    category: "Microservices Pattern",
    color: "#00cec9",
    description:
      "Service discovery lets services automatically find each other's network addresses instead of hard-coding them. Essential when servers come and go constantly.",
    highlights: [
      "Microservice architectures",
      "Kubernetes DNS and Consul",
      "Load balancing across instances",
    ],
    funFact:
      "Netflix built and open-sourced Eureka, a service registry, to help thousands of its cloud instances find each other on AWS.",
    url: "https://en.wikipedia.org/wiki/Service_discovery",
  },
  {
    id: "circuit-breakers",
    name: "Circuit Breakers",
    abbr: "CB",
    category: "Resilience Pattern",
    color: "#d63031",
    description:
      "A circuit breaker stops calling a failing service for a while, returning an error or fallback right away. This prevents one broken service from dragging down everything else.",
    highlights: [
      "Resilient microservices",
      "Libraries like Resilience4j",
      "Preventing cascading failures",
    ],
    funFact:
      "The pattern was popularized by Michael Nygard's 2007 book \"Release It!\", borrowing the idea from electrical breakers in your home.",
    url: "https://martinfowler.com/bliki/CircuitBreaker.html",
  },
  {
    id: "retry-mechanisms",
    name: "Retry Mechanisms",
    abbr: "RM",
    category: "Resilience Pattern",
    color: "#fd9644",
    description:
      "Retry mechanisms automatically try a failed operation again, usually waiting longer each time (exponential backoff). They help survive brief network hiccups.",
    highlights: [
      "Handling flaky network calls",
      "Exponential backoff with jitter",
      "Cloud SDKs and HTTP clients",
    ],
    funFact:
      "Classic Ethernet used \"binary exponential backoff\": after a collision, devices waited a random time that doubled in range with each retry.",
    url: "https://en.wikipedia.org/wiki/Exponential_backoff",
  },
  {
    id: "idempotency",
    name: "Idempotency",
    abbr: "Id",
    category: "API Design Concept",
    color: "#6c5ce7",
    description:
      "An operation is idempotent if doing it twice has the same effect as doing it once. It makes retries safe — you won't get charged twice if a payment request is resent.",
    highlights: [
      "Safe API retries",
      "Payment processing",
      "HTTP PUT and DELETE semantics",
    ],
    funFact:
      "The word combines Latin idem (\"the same\") with potent. Stripe's API lets you send an Idempotency-Key header so retried requests never double-charge.",
    url: "https://developer.mozilla.org/en-US/docs/Glossary/Idempotent",
  },
  {
    id: "saga-pattern",
    name: "Saga Pattern",
    abbr: "SP",
    category: "Microservices Pattern",
    color: "#a55eea",
    description:
      "The Saga pattern splits a big transaction across services into a series of local steps. If one step fails, \"compensating\" actions undo the steps that already happened.",
    highlights: [
      "Order and booking workflows",
      "Microservice transactions",
      "Alternative to two-phase commit",
    ],
    funFact:
      "Sagas come from a 1987 database paper by Hector Garcia-Molina and Kenneth Salem — decades before microservices made them popular.",
    url: "https://microservices.io/patterns/data/saga.html",
    spawnWeight: 0.5,
  },
  {
    id: "apache-thrift",
    name: "Apache Thrift",
    abbr: "AT",
    category: "RPC Framework",
    color: "#c0392b",
    description:
      "Apache Thrift lets services written in different languages call each other. You define data types and services once in an interface file, and Thrift generates the code.",
    highlights: [
      "Cross-language RPC",
      "Efficient binary serialization",
      "Large-scale backend services",
    ],
    funFact:
      "Thrift was built at Facebook to connect services written in many languages, then open-sourced in 2007 and handed to Apache.",
    url: "https://thrift.apache.org",
    spawnWeight: 0.5,
  },
];

export default entries;
