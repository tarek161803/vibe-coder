import type { CatalogEntry } from "../types";

/** Databases */
const entries: CatalogEntry[] = [
  {
    id: "mysql",
    name: "MySQL",
    abbr: "My",
    category: "Relational Database",
    color: "#00758f",
    description:
      "One of the most popular open-source relational databases. It stores data in tables with rows and columns, and you talk to it using SQL queries.",
    highlights: [
      "Backend for WordPress and countless websites",
      "The \"M\" in the classic LAMP stack",
      "Web apps that need reliable tables",
    ],
    funFact:
      "MySQL is named after My, the daughter of co-founder Michael \"Monty\" Widenius. The dolphin in its logo is named Sakila.",
    url: "https://www.mysql.com",
  },
  {
    id: "mariadb",
    name: "MariaDB",
    abbr: "MDB",
    category: "Relational Database",
    color: "#c0765a",
    description:
      "A community-developed fork of MySQL that aims to stay free and open source. It works as a drop-in replacement for MySQL in most apps.",
    highlights: [
      "Default MySQL-style database on many Linux distros",
      "Hosting web apps like WordPress",
      "Open-source alternative to MySQL",
    ],
    funFact:
      "MariaDB was created by MySQL’s original founder Monty Widenius after Oracle acquired MySQL — and he named it after his younger daughter, Maria.",
    url: "https://mariadb.org",
  },
  {
    id: "microsoft-sql-server",
    name: "Microsoft SQL Server",
    abbr: "MSSQL",
    category: "Relational Database",
    color: "#cc2927",
    description:
      "Microsoft’s relational database for storing and querying business data with SQL (its dialect is called T-SQL). It is tightly integrated with Windows, .NET and Azure.",
    highlights: [
      "Enterprise apps built on .NET",
      "Business reporting and data warehouses",
      "Corporate systems running on Windows",
    ],
    funFact:
      "SQL Server began life in 1989 as a partnership with Sybase — the first versions were essentially Sybase SQL Server ported to run on OS/2.",
    url: "https://www.microsoft.com/en-us/sql-server",
  },
  {
    id: "oracle-database",
    name: "Oracle Database",
    abbr: "ORCL",
    category: "Relational Database",
    color: "#f80000",
    description:
      "A powerful commercial relational database used by big companies for mission-critical data. It is known for its huge feature set, reliability and enterprise support.",
    highlights: [
      "Banking and finance systems",
      "Large enterprise resource planning (ERP)",
      "Government and telecom databases",
    ],
    funFact:
      "The first Oracle release was called \"Version 2\" — there was never a Version 1. The founders thought customers would trust a second version more.",
    url: "https://www.oracle.com/database/",
  },
  {
    id: "cockroachdb",
    name: "CockroachDB",
    abbr: "CRDB",
    category: "Distributed SQL Database",
    color: "#6933ff",
    description:
      "A distributed SQL database that spreads your data across many servers and regions. It speaks a PostgreSQL-compatible dialect and keeps running even when machines fail.",
    highlights: [
      "Globally distributed applications",
      "Apps that must survive data center outages",
      "Scaling SQL without manual sharding",
    ],
    funFact:
      "It’s named after the cockroach because, like the bug, it’s designed to be incredibly hard to kill — it keeps going when servers or whole regions go down.",
    url: "https://www.cockroachlabs.com",
  },
  {
    id: "tidb",
    name: "TiDB",
    abbr: "TiDB",
    category: "Distributed SQL Database",
    color: "#dc150b",
    description:
      "An open-source distributed SQL database that is compatible with MySQL. It scales out across many machines and can handle both everyday transactions and analytics.",
    highlights: [
      "Scaling MySQL apps beyond one server",
      "Mixed transactional and analytical work",
      "High-traffic internet services",
    ],
    funFact:
      "The \"Ti\" stands for Titanium. Its storage layer, TiKV, is a separate key-value store written in Rust that became a CNCF project of its own.",
    url: "https://www.pingcap.com/tidb/",
    spawnWeight: 0.5,
  },
  {
    id: "yugabytedb",
    name: "YugabyteDB",
    abbr: "YB",
    category: "Distributed SQL Database",
    color: "#ff6e42",
    description:
      "A distributed SQL database that is compatible with PostgreSQL. It splits data across many nodes so apps can scale and stay available across regions.",
    highlights: [
      "Cloud-native apps needing Postgres features",
      "Multi-region deployments",
      "Highly available transactional data",
    ],
    funFact:
      "Instead of writing a new SQL layer from scratch, YugabyteDB reuses actual PostgreSQL source code for its query layer, so many Postgres features just work.",
    url: "https://www.yugabyte.com",
    spawnWeight: 0.5,
  },
  {
    id: "amazon-aurora",
    name: "Amazon Aurora",
    abbr: "AUR",
    category: "Managed SQL Database",
    color: "#3b48cc",
    description:
      "A managed relational database on AWS that is compatible with MySQL and PostgreSQL. AWS handles backups, scaling and failover so you don’t run the servers yourself.",
    highlights: [
      "Production databases on AWS",
      "Drop-in upgrade for MySQL or Postgres apps",
      "Serverless databases that scale on demand",
    ],
    funFact:
      "Aurora keeps six copies of your data spread across three availability zones, so it can lose a whole data center and still keep working.",
    url: "https://aws.amazon.com/rds/aurora/",
  },
  {
    id: "couchdb",
    name: "CouchDB",
    abbr: "CDB",
    category: "Document Database",
    color: "#e42528",
    description:
      "An open-source NoSQL database that stores data as JSON documents and lets you access it over plain HTTP. It is famous for syncing data between devices, even offline.",
    highlights: [
      "Offline-first apps that sync later",
      "Storing JSON documents over HTTP",
      "Replicating data between servers",
    ],
    funFact:
      "\"Couch\" is said to stand for \"Cluster Of Unreliable Commodity Hardware\" — a nod to its goal of running reliably on cheap machines. It’s written in Erlang.",
    url: "https://couchdb.apache.org",
  },
  {
    id: "couchbase",
    name: "Couchbase",
    abbr: "CB",
    category: "Document Database",
    color: "#ea2328",
    description:
      "A distributed NoSQL database that stores JSON documents with a built-in memory cache for speed. You can query it with SQL++, a SQL-like language for JSON.",
    highlights: [
      "Fast user profiles and sessions",
      "Mobile apps with offline sync",
      "Low-latency web and gaming backends",
    ],
    funFact:
      "Couchbase was born in 2011 from a merger of two companies: Membase (built around memcached) and CouchOne (the company behind CouchDB).",
    url: "https://www.couchbase.com",
  },
  {
    id: "firebase-firestore",
    name: "Firebase Firestore",
    abbr: "FS",
    category: "Cloud Document Database",
    color: "#ffca28",
    description:
      "Google’s cloud NoSQL database that stores data as documents in collections. Apps can read and write it directly and get live updates whenever data changes.",
    highlights: [
      "Real-time chat and collaborative apps",
      "Mobile and web apps without a backend",
      "Syncing data across devices",
    ],
    funFact:
      "Firebase began as a startup building a chat widget (Envolve); developers kept using it to sync app data, so it pivoted — and Google bought it in 2014.",
    url: "https://firebase.google.com/docs/firestore",
  },
  {
    id: "dynamodb",
    name: "DynamoDB",
    abbr: "DDB",
    category: "Key-Value Database",
    color: "#4053d6",
    description:
      "A fully managed NoSQL key-value and document database from AWS. It delivers fast, predictable performance at any scale without you managing servers.",
    highlights: [
      "Serverless apps on AWS Lambda",
      "Shopping carts and user sessions",
      "High-traffic apps needing low latency",
    ],
    funFact:
      "Amazon’s 2007 \"Dynamo\" paper, describing its internal shopping-cart store, inspired a whole generation of NoSQL databases, including Cassandra and Riak.",
    url: "https://aws.amazon.com/dynamodb/",
  },
  {
    id: "ravendb",
    name: "RavenDB",
    abbr: "RDB",
    category: "Document Database",
    color: "#d6202f",
    description:
      "An open-source NoSQL document database built with .NET developers in mind. It stores JSON documents and supports full ACID transactions out of the box.",
    highlights: [
      "Document storage for .NET apps",
      "ACID transactions in a NoSQL store",
      "Built-in full-text search and indexing",
    ],
    funFact:
      "RavenDB was created by Oren Eini, a well-known .NET developer who blogs under the pen name Ayende Rahien.",
    url: "https://ravendb.net",
    spawnWeight: 0.5,
  },
  {
    id: "arangodb",
    name: "ArangoDB",
    abbr: "ADB",
    category: "Multi-Model Database",
    color: "#77b300",
    description:
      "A multi-model database that can store documents, graphs and key-value data in one engine. You query all of them with a single language called AQL.",
    highlights: [
      "Combining graph and document data",
      "Recommendation and fraud detection",
      "Knowledge graphs in a single database",
    ],
    funFact:
      "ArangoDB was originally called AvocadoDB — it was renamed after a trademark issue, and \"Arango\" is a type of avocado, which is why its logo is one.",
    url: "https://arangodb.com",
    spawnWeight: 0.5,
  },
  {
    id: "surrealdb",
    name: "SurrealDB",
    abbr: "SDB",
    category: "Multi-Model Database",
    color: "#ff00a0",
    description:
      "A newer multi-model database written in Rust that mixes documents, graphs and relational ideas. It has its own SQL-like language called SurrealQL and built-in auth.",
    highlights: [
      "Real-time web apps with live queries",
      "Graph-style relations between records",
      "Backends with fewer moving parts",
    ],
    funFact:
      "Because it’s written in Rust, SurrealDB can be compiled to WebAssembly and run as an embedded database right inside a web browser.",
    url: "https://surrealdb.com",
    spawnWeight: 0.5,
  },
  {
    id: "valkey",
    name: "Valkey",
    abbr: "VK",
    category: "In-Memory Data Store",
    color: "#6366f1",
    description:
      "An open-source, in-memory key-value store that keeps data in RAM for lightning-fast reads and writes. It is a community fork of Redis and speaks the same protocol.",
    highlights: [
      "Caching to speed up web apps",
      "Session storage and rate limiting",
      "Drop-in replacement for Redis",
    ],
    funFact:
      "Valkey was forked from Redis in 2024 under the Linux Foundation, after Redis switched away from its open-source license. Big cloud providers quickly backed it.",
    url: "https://valkey.io",
  },
  {
    id: "riak",
    name: "Riak",
    abbr: "RK",
    category: "Key-Value Database",
    color: "#f15a29",
    description:
      "A distributed NoSQL key-value database designed to stay available even when servers fail. It spreads copies of data across a cluster with no single master node.",
    highlights: [
      "Highly available key-value storage",
      "Systems that must never go down",
      "Learning about Dynamo-style databases",
    ],
    funFact:
      "Riak is written in Erlang, the language built at Ericsson for telephone switches, and its design follows Amazon’s famous Dynamo paper.",
    url: "https://en.wikipedia.org/wiki/Riak",
    spawnWeight: 0.5,
  },
  {
    id: "aerospike",
    name: "Aerospike",
    abbr: "AS",
    category: "Key-Value Database",
    color: "#c22127",
    description:
      "A high-performance NoSQL key-value database optimized to run on flash storage (SSDs). It handles huge numbers of reads and writes with very low latency.",
    highlights: [
      "Real-time ad bidding platforms",
      "Fraud detection in payments",
      "User profile stores at massive scale",
    ],
    funFact:
      "Before it was called Aerospike, the company and its database went by the name Citrusleaf.",
    url: "https://aerospike.com",
    spawnWeight: 0.5,
  },
  {
    id: "apache-cassandra",
    name: "Apache Cassandra",
    abbr: "CAS",
    category: "Wide-Column Database",
    color: "#1287b1",
    description:
      "A distributed NoSQL database built to handle huge amounts of data across many servers with no single point of failure. It is great at very fast writes.",
    highlights: [
      "Time-series and event logging",
      "Messaging and activity feeds at scale",
      "Apps spread across many data centers",
    ],
    funFact:
      "Cassandra was built at Facebook for inbox search. It’s named after the cursed prophetess of Greek myth — a cheeky nod to another database company, Oracle.",
    url: "https://cassandra.apache.org",
  },
  {
    id: "scylladb",
    name: "ScyllaDB",
    abbr: "SCY",
    category: "Wide-Column Database",
    color: "#53cadd",
    description:
      "A high-performance NoSQL database that is compatible with Apache Cassandra but rewritten in C++. It squeezes much more speed out of each server.",
    highlights: [
      "Faster drop-in for Cassandra",
      "Low-latency, high-throughput workloads",
      "Large-scale messaging data",
    ],
    funFact:
      "Scylla is the sea monster from Greek myth that sat opposite Charybdis. Discord famously moved its trillions of chat messages from Cassandra to ScyllaDB.",
    url: "https://www.scylladb.com",
    spawnWeight: 0.5,
  },
  {
    id: "hbase",
    name: "HBase",
    abbr: "HB",
    category: "Wide-Column Database",
    color: "#ba160c",
    description:
      "An open-source, distributed wide-column database that runs on top of Hadoop’s file system. It stores huge sparse tables with billions of rows.",
    highlights: [
      "Big data storage in the Hadoop ecosystem",
      "Random reads/writes on massive tables",
      "Large-scale analytics backends",
    ],
    funFact:
      "HBase was modeled directly on Google’s Bigtable paper — it brought Bigtable-style storage to everyone as open source.",
    url: "https://hbase.apache.org",
    spawnWeight: 0.5,
  },
  {
    id: "google-bigtable",
    name: "Google Bigtable",
    abbr: "BT",
    category: "Wide-Column Database",
    color: "#4285f4",
    description:
      "Google’s managed wide-column NoSQL database for huge amounts of data. It offers fast reads and writes for big analytical and operational workloads.",
    highlights: [
      "Time-series and IoT data",
      "Financial and ad-tech analytics",
      "Massive key-indexed datasets",
    ],
    funFact:
      "Bigtable was built inside Google to power products like Search indexing, Google Maps and Gmail long before it was offered to the public as a cloud service.",
    url: "https://cloud.google.com/bigtable",
  },
  {
    id: "clickhouse",
    name: "ClickHouse",
    abbr: "CH",
    category: "Analytical Database",
    color: "#faff69",
    description:
      "An open-source column-oriented database designed for super-fast analytics. It can scan and aggregate billions of rows in seconds using SQL.",
    highlights: [
      "Real-time analytics dashboards",
      "Log and event data analysis",
      "Web and product analytics",
    ],
    funFact:
      "ClickHouse was created at Yandex to power its web analytics service, Yandex.Metrica. Its name comes from \"Clickstream Data Warehouse\".",
    url: "https://clickhouse.com",
  },
  {
    id: "neo4j",
    name: "Neo4j",
    abbr: "N4J",
    category: "Graph Database",
    color: "#018bff",
    description:
      "The most popular graph database. It stores data as nodes and relationships, which makes it easy to explore connections like friends-of-friends.",
    highlights: [
      "Recommendation engines",
      "Fraud detection networks",
      "Knowledge graphs",
    ],
    funFact:
      "Its query language, Cypher, uses ASCII art: (alice)-[:KNOWS]->(bob). Journalists used Neo4j to untangle the leaked Panama Papers.",
    url: "https://neo4j.com",
  },
  {
    id: "amazon-neptune",
    name: "Amazon Neptune",
    abbr: "NEP",
    category: "Graph Database",
    color: "#2e73b8",
    description:
      "A fully managed graph database on AWS. It stores highly connected data and lets you query it with graph languages like Gremlin, openCypher and SPARQL.",
    highlights: [
      "Social networks and relationships",
      "Fraud detection on AWS",
      "Knowledge graphs and identity graphs",
    ],
    funFact:
      "Neptune supports two different graph worlds in one service: property graphs (Gremlin/openCypher) and RDF graphs queried with SPARQL.",
    url: "https://aws.amazon.com/neptune/",
    spawnWeight: 0.5,
  },
  {
    id: "dgraph",
    name: "Dgraph",
    abbr: "DG",
    category: "Graph Database",
    color: "#e2196f",
    description:
      "An open-source, distributed graph database written in Go. It can be queried natively with GraphQL, making it handy as a backend for GraphQL apps.",
    highlights: [
      "GraphQL backends",
      "Highly connected app data",
      "Scaling graph queries across servers",
    ],
    funFact:
      "Dgraph is one of the few databases where GraphQL isn’t a layer bolted on top — you can send GraphQL queries straight to the database.",
    url: "https://dgraph.io",
    spawnWeight: 0.5,
  },
  {
    id: "janusgraph",
    name: "JanusGraph",
    abbr: "JG",
    category: "Graph Database",
    color: "#3f8f3f",
    description:
      "An open-source, scalable graph database that stores its data in backends like Cassandra or HBase. You query it using the Gremlin graph language.",
    highlights: [
      "Huge graphs spread across clusters",
      "Graph analytics on big data stacks",
      "Open-source graph storage",
    ],
    funFact:
      "JanusGraph is a fork of the Titan graph database, started in 2017 under the Linux Foundation. Janus is the two-faced Roman god of beginnings.",
    url: "https://janusgraph.org",
    spawnWeight: 0.5,
  },
  {
    id: "memgraph",
    name: "Memgraph",
    abbr: "MG",
    category: "Graph Database",
    color: "#fb6e00",
    description:
      "An in-memory graph database written in C++ that is compatible with Neo4j’s Cypher language. Keeping data in RAM makes it great for real-time graph analysis.",
    highlights: [
      "Real-time graph analytics",
      "Streaming data from Kafka into graphs",
      "Fraud and network monitoring",
    ],
    funFact:
      "Because Memgraph speaks Cypher and the Bolt protocol, many Neo4j drivers and tools can connect to it without changes.",
    url: "https://memgraph.com",
    spawnWeight: 0.5,
  },
  {
    id: "influxdb",
    name: "InfluxDB",
    abbr: "IDB",
    category: "Time-Series Database",
    color: "#22adf6",
    description:
      "A database built for time-series data — measurements stamped with a time, like CPU usage or sensor readings. It is fast at writing and querying data over time ranges.",
    highlights: [
      "Server and app monitoring metrics",
      "IoT sensor readings",
      "Real-time analytics dashboards",
    ],
    funFact:
      "InfluxDB was originally written in Go, but version 3 was rebuilt in Rust on top of Apache Arrow and DataFusion.",
    url: "https://www.influxdata.com",
  },
  {
    id: "timescaledb",
    name: "TimescaleDB",
    abbr: "TSDB",
    category: "Time-Series Database",
    color: "#fdb515",
    description:
      "A time-series database built as an extension to PostgreSQL. You keep using normal SQL while it automatically splits data into time-based chunks for speed.",
    highlights: [
      "Metrics and monitoring in Postgres",
      "IoT and sensor data",
      "Financial tick data",
    ],
    funFact:
      "Since it’s just a Postgres extension, you can JOIN your time-series data with regular tables in the same query — no second database needed.",
    url: "https://github.com/timescale/timescaledb",
  },
  {
    id: "questdb",
    name: "QuestDB",
    abbr: "QDB",
    category: "Time-Series Database",
    color: "#d14671",
    description:
      "An open-source time-series database focused on very fast data ingestion and SQL queries. It is popular for financial market data and real-time analytics.",
    highlights: [
      "Financial market tick data",
      "High-speed sensor ingestion",
      "Time-series analytics with SQL",
    ],
    funFact:
      "QuestDB is largely written in Java, but carefully avoids creating garbage on its hot paths so the garbage collector doesn’t slow it down.",
    url: "https://questdb.com",
    spawnWeight: 0.5,
  },
  {
    id: "victoriametrics",
    name: "VictoriaMetrics",
    abbr: "VM",
    category: "Time-Series Database",
    color: "#621773",
    description:
      "A fast, cost-efficient time-series database for monitoring data. It is often used as long-term storage for Prometheus metrics.",
    highlights: [
      "Long-term Prometheus storage",
      "Large-scale infrastructure monitoring",
      "Compressing metrics to save disk",
    ],
    funFact:
      "VictoriaMetrics accepts data in many formats — Prometheus, InfluxDB line protocol, Graphite and more — so it can slot into existing setups.",
    url: "https://victoriametrics.com",
    spawnWeight: 0.5,
  },
  {
    id: "prometheus",
    name: "Prometheus",
    abbr: "PROM",
    category: "Monitoring Database",
    color: "#e6522c",
    description:
      "An open-source monitoring system and time-series database. It regularly \"scrapes\" metrics from your services and lets you query and alert on them with PromQL.",
    highlights: [
      "Monitoring Kubernetes clusters",
      "Alerting when services misbehave",
      "Feeding Grafana dashboards",
    ],
    funFact:
      "Prometheus was created at SoundCloud, inspired by Google’s internal Borgmon. It was the second project to join the CNCF, right after Kubernetes.",
    url: "https://prometheus.io",
  },
  {
    id: "elasticsearch",
    name: "Elasticsearch",
    abbr: "ES",
    category: "Search Engine",
    color: "#fec514",
    description:
      "A distributed search and analytics engine built on Apache Lucene. It stores JSON documents and can search through huge amounts of text in milliseconds.",
    highlights: [
      "Site and app search bars",
      "Log analysis in the ELK stack",
      "Real-time analytics on text data",
    ],
    funFact:
      "Creator Shay Banon’s first search project was built to help his wife search recipes while she trained to be a chef — it later grew into Elasticsearch.",
    url: "https://www.elastic.co/elasticsearch",
  },
  {
    id: "opensearch",
    name: "OpenSearch",
    abbr: "OS",
    category: "Search Engine",
    color: "#005eb8",
    description:
      "An open-source search and analytics suite forked from Elasticsearch. It includes a search engine plus dashboards for exploring logs and data.",
    highlights: [
      "Log analytics and observability",
      "Full-text search for apps",
      "Managed search on AWS",
    ],
    funFact:
      "AWS created OpenSearch in 2021 by forking Elasticsearch 7.10 after Elastic changed its license. It later moved to its own Linux Foundation project.",
    url: "https://opensearch.org",
  },
  {
    id: "apache-solr",
    name: "Apache Solr",
    abbr: "SOLR",
    category: "Search Engine",
    color: "#d9411e",
    description:
      "A mature open-source search platform built on Apache Lucene. It powers full-text search, filtering and faceted navigation for websites and apps.",
    highlights: [
      "E-commerce product search",
      "Faceted search with filters",
      "Search for libraries and archives",
    ],
    funFact:
      "Solr was created in 2004 at CNET Networks to power search on their own website, and was later donated to the Apache Software Foundation.",
    url: "https://solr.apache.org",
  },
  {
    id: "meilisearch",
    name: "Meilisearch",
    abbr: "MEI",
    category: "Search Engine",
    color: "#ff5caa",
    description:
      "A fast, open-source search engine written in Rust that is easy to set up. It gives instant, typo-tolerant search results as you type.",
    highlights: [
      "Search-as-you-type for websites",
      "Typo-tolerant product search",
      "Documentation site search",
    ],
    funFact:
      "Meilisearch is built in France, and its typo tolerance means a search for \"pyhton\" will still happily find \"python\".",
    url: "https://www.meilisearch.com",
  },
  {
    id: "typesense",
    name: "Typesense",
    abbr: "TS",
    category: "Search Engine",
    color: "#d52e7b",
    description:
      "An open-source, typo-tolerant search engine written in C++. It is designed to be simple to run and return results in a few milliseconds.",
    highlights: [
      "Instant search for apps and sites",
      "Self-hosted alternative to Algolia",
      "Geo and faceted search",
    ],
    funFact:
      "Typesense keeps its whole search index in memory, which is a big reason it can answer queries in just a few milliseconds.",
    url: "https://typesense.org",
    spawnWeight: 0.5,
  },
  {
    id: "algolia",
    name: "Algolia",
    abbr: "ALG",
    category: "Search as a Service",
    color: "#003dff",
    description:
      "A hosted search service you send your data to, then query through an API. It returns fast, relevant results so you can add great search without running servers.",
    highlights: [
      "E-commerce site search",
      "Documentation search (like DocSearch)",
      "Search-as-you-type UIs",
    ],
    funFact:
      "Algolia was founded in France and started out as an offline search SDK for mobile apps before pivoting to the hosted search API it’s known for.",
    url: "https://www.algolia.com",
  },
  {
    id: "manticore-search",
    name: "Manticore Search",
    abbr: "MS",
    category: "Search Engine",
    color: "#2d9cdb",
    description:
      "An open-source search database with full-text search that you can query with SQL. It is lightweight and fast, and can run alongside your main database.",
    highlights: [
      "Full-text search with SQL syntax",
      "Log and data search",
      "Lightweight Elasticsearch alternative",
    ],
    funFact:
      "Manticore Search started in 2017 as a fork of the Sphinx search engine, continuing it as an actively maintained open-source project.",
    url: "https://manticoresearch.com",
    spawnWeight: 0.5,
  },
  {
    id: "milvus",
    name: "Milvus",
    abbr: "MIL",
    category: "Vector Database",
    color: "#00a1ea",
    description:
      "An open-source vector database for storing and searching embeddings — lists of numbers that represent text, images or audio. It finds the most similar items fast.",
    highlights: [
      "Semantic search over documents",
      "Retrieval for AI chatbots (RAG)",
      "Image and audio similarity search",
    ],
    funFact:
      "Milvus is also the scientific name for a genus of birds of prey — the kites — which is why a bird appears in its branding.",
    url: "https://milvus.io",
    spawnWeight: 0.5,
  },
  {
    id: "weaviate",
    name: "Weaviate",
    abbr: "WV",
    category: "Vector Database",
    color: "#61bd73",
    description:
      "An open-source vector database written in Go. It stores objects together with their embeddings so you can search by meaning, not just exact keywords.",
    highlights: [
      "Semantic and hybrid search",
      "Retrieval for LLM apps (RAG)",
      "Recommendation systems",
    ],
    funFact:
      "Weaviate can create embeddings for you using built-in modules that call models like OpenAI or Cohere, so you can insert plain text and search it semantically.",
    url: "https://weaviate.io",
    spawnWeight: 0.5,
  },
  {
    id: "qdrant",
    name: "Qdrant",
    abbr: "QD",
    category: "Vector Database",
    color: "#dc244c",
    description:
      "An open-source vector database and similarity search engine written in Rust. It stores embeddings with extra data and lets you filter while searching.",
    highlights: [
      "Retrieval for AI chatbots (RAG)",
      "Semantic search with filters",
      "Recommendation engines",
    ],
    funFact:
      "Qdrant is pronounced \"quadrant\" — fitting for a database that’s all about finding nearby points in space.",
    url: "https://qdrant.tech",
  },
  {
    id: "chroma",
    name: "Chroma",
    abbr: "CHR",
    category: "Vector Database",
    color: "#f5a623",
    description:
      "An open-source embedding database designed to be simple for AI app developers. You add documents, and it lets you find the most relevant ones for a question.",
    highlights: [
      "Prototyping RAG apps in Python",
      "Memory for LLM agents",
      "Local semantic search",
    ],
    funFact:
      "Chroma can run entirely in-memory inside a Python script with no server at all — handy for trying out AI ideas in a notebook in minutes.",
    url: "https://www.trychroma.com",
    spawnWeight: 0.5,
  },
  {
    id: "pinecone",
    name: "Pinecone",
    abbr: "PC",
    category: "Vector Database",
    color: "#3b3bff",
    description:
      "A fully managed vector database in the cloud. You upload embeddings and query for the most similar ones, without running any infrastructure yourself.",
    highlights: [
      "Production RAG for AI apps",
      "Semantic search at scale",
      "Personalization and recommendations",
    ],
    funFact:
      "Pinecone was founded by Edo Liberty, who previously led Amazon’s AI research lab and worked on large-scale similarity search.",
    url: "https://www.pinecone.io",
  },
  {
    id: "faiss",
    name: "FAISS",
    abbr: "FAISS",
    category: "Vector Search Library",
    color: "#0467df",
    description:
      "A library from Meta for efficient similarity search over large sets of vectors. It is a building block rather than a full database, and it can use GPUs for speed.",
    highlights: [
      "Nearest-neighbor search on embeddings",
      "Powering other vector databases",
      "Research on billion-scale search",
    ],
    funFact:
      "FAISS stands for \"Facebook AI Similarity Search\". It was released by Facebook AI Research in 2017 and is used inside many vector search tools.",
    url: "https://github.com/facebookresearch/faiss",
    spawnWeight: 0.5,
  },
  {
    id: "lancedb",
    name: "LanceDB",
    abbr: "LDB",
    category: "Vector Database",
    color: "#e2493a",
    description:
      "An open-source, embedded vector database built on the Lance columnar file format. It runs inside your app like SQLite, with no separate server.",
    highlights: [
      "Local vector search in apps",
      "Multimodal AI datasets",
      "Storing embeddings on disk or S3",
    ],
    funFact:
      "LanceDB is written in Rust and stores data in its own Lance format, designed to be much faster than Parquet for random access in ML workloads.",
    url: "https://lancedb.com",
    spawnWeight: 0.5,
  },
  {
    id: "duckdb",
    name: "DuckDB",
    abbr: "DUCK",
    category: "Analytical Database",
    color: "#fff000",
    description:
      "An in-process analytical database — often called \"SQLite for analytics\". It runs inside your program and can query CSV and Parquet files with fast SQL.",
    highlights: [
      "Data analysis in Python notebooks",
      "Querying CSV and Parquet files directly",
      "Local analytics without a server",
    ],
    funFact:
      "DuckDB is named after a pet duck, Wilbur, owned by co-creator Hannes Mühleisen. It was born at CWI in Amsterdam — the same institute where Python was created.",
    url: "https://duckdb.org",
  },
  {
    id: "snowflake",
    name: "Snowflake",
    abbr: "SNOW",
    category: "Cloud Data Warehouse",
    color: "#29b5e8",
    description:
      "A cloud data warehouse that stores large amounts of business data and lets teams analyze it with SQL. It separates storage from compute so each scales independently.",
    highlights: [
      "Company-wide analytics and BI",
      "Sharing data between organizations",
      "Data engineering pipelines",
    ],
    funFact:
      "When Snowflake went public in 2020, it was the largest software IPO in history at the time — even Warren Buffett’s Berkshire Hathaway bought in.",
    url: "https://www.snowflake.com",
  },
  {
    id: "google-bigquery",
    name: "Google BigQuery",
    abbr: "BQ",
    category: "Cloud Data Warehouse",
    color: "#4285f4",
    description:
      "Google’s serverless data warehouse. You load data and run SQL queries over terabytes in seconds, paying for what you use without managing any servers.",
    highlights: [
      "Analyzing huge datasets with SQL",
      "Google Analytics and marketing data",
      "Built-in machine learning (BigQuery ML)",
    ],
    funFact:
      "BigQuery is built on Dremel, a system Google described in a 2010 paper that could scan trillions of rows in seconds.",
    url: "https://cloud.google.com/bigquery",
  },
  {
    id: "amazon-redshift",
    name: "Amazon Redshift",
    abbr: "RS",
    category: "Cloud Data Warehouse",
    color: "#205b99",
    description:
      "AWS’s cloud data warehouse for analyzing large amounts of data with SQL. It stores data in columns, which makes big aggregate queries fast.",
    highlights: [
      "Business intelligence on AWS",
      "Reporting over large datasets",
      "Data lake queries with Spectrum",
    ],
    funFact:
      "The name is widely seen as a playful jab at Oracle, whose brand color is red — Redshift was pitched as a way to shift away from \"red\".",
    url: "https://aws.amazon.com/redshift/",
  },
  {
    id: "databricks",
    name: "Databricks",
    abbr: "DBX",
    category: "Data Platform",
    color: "#ff3621",
    description:
      "A cloud data and AI platform built around Apache Spark. Teams use it to process big data, run SQL analytics and train machine learning models in one place.",
    highlights: [
      "Big data processing with Spark",
      "Lakehouse analytics with Delta Lake",
      "Training and serving ML models",
    ],
    funFact:
      "Databricks was founded by the creators of Apache Spark, who first built Spark as a research project at UC Berkeley’s AMPLab.",
    url: "https://www.databricks.com",
  },
  {
    id: "azure-synapse-analytics",
    name: "Azure Synapse Analytics",
    abbr: "SYN",
    category: "Cloud Data Warehouse",
    color: "#0078d4",
    description:
      "Microsoft Azure’s analytics service that combines a data warehouse, big data processing with Spark, and data pipelines in one workspace.",
    highlights: [
      "Enterprise data warehousing on Azure",
      "Big data analytics with Spark",
      "Feeding Power BI reports",
    ],
    funFact:
      "Azure Synapse Analytics grew out of Azure SQL Data Warehouse, which Microsoft rebranded and expanded in 2019.",
    url: "https://azure.microsoft.com/en-us/products/synapse-analytics",
    spawnWeight: 0.5,
  },
  {
    id: "minio",
    name: "MinIO",
    abbr: "MinIO",
    category: "Object Storage",
    color: "#c72c48",
    description:
      "A high-performance object storage server that is compatible with the Amazon S3 API. You can run your own S3-style storage on your own machines or Kubernetes.",
    highlights: [
      "Self-hosted S3-compatible storage",
      "Storing files for AI and analytics",
      "Local S3 for development and testing",
    ],
    funFact:
      "MinIO is written in Go and ships as a single small binary — you can start an S3-compatible server on your laptop with one command.",
    url: "https://min.io",
  },
  {
    id: "amazon-s3",
    name: "Amazon S3",
    abbr: "S3",
    category: "Object Storage",
    color: "#569a31",
    description:
      "AWS’s object storage service for saving any kind of file in \"buckets\". It is durable, scales almost without limit, and is accessed over an API.",
    highlights: [
      "Storing images, videos and backups",
      "Hosting static websites",
      "Data lakes for analytics",
    ],
    funFact:
      "S3 stands for \"Simple Storage Service\". It launched on March 14, 2006 — Pi Day — and was one of the very first AWS services.",
    url: "https://aws.amazon.com/s3/",
  },
  {
    id: "cloudflare-r2",
    name: "Cloudflare R2",
    abbr: "R2",
    category: "Object Storage",
    color: "#f38020",
    description:
      "Cloudflare’s S3-compatible object storage. It is known for charging no egress fees, so you don’t pay extra when users download your files.",
    highlights: [
      "Serving images and media cheaply",
      "S3-compatible file storage",
      "Storage for Cloudflare Workers apps",
    ],
    funFact:
      "The name is a playful jab at Amazon S3: R comes one letter before S, and 2 comes one number before 3.",
    url: "https://developers.cloudflare.com/r2/",
  },
  {
    id: "google-cloud-storage",
    name: "Google Cloud Storage",
    abbr: "GCS",
    category: "Object Storage",
    color: "#4285f4",
    description:
      "Google Cloud’s object storage for files of any size. You store data in buckets and choose storage classes based on how often you need to access it.",
    highlights: [
      "Storing app uploads and media",
      "Backups and archives",
      "Data lakes for BigQuery and AI",
    ],
    funFact:
      "Its storage classes are named by how rarely you touch the data: Standard, Nearline, Coldline and Archive — the colder the name, the cheaper the storage.",
    url: "https://cloud.google.com/storage",
  },
  {
    id: "azure-blob-storage",
    name: "Azure Blob Storage",
    abbr: "BLOB",
    category: "Object Storage",
    color: "#0078d4",
    description:
      "Microsoft Azure’s object storage service for large amounts of unstructured data like images, videos, logs and backups.",
    highlights: [
      "Storing files for Azure apps",
      "Backups and disaster recovery",
      "Data lakes with Azure Data Lake Storage",
    ],
    funFact:
      "\"Blob\" stands for Binary Large OBject — a database term for chunks of raw data. Azure offers Hot, Cool, Cold and Archive tiers for it.",
    url: "https://azure.microsoft.com/en-us/products/storage/blobs",
  },
];

export default entries;
