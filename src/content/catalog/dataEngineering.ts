import type { CatalogEntry } from "../types";

/** Data Engineering and Big Data */
const entries: CatalogEntry[] = [
  {
    id: "apache-hadoop",
    name: "Apache Hadoop",
    abbr: "AH",
    category: "Big Data Framework",
    color: "#66ccff",
    description:
      "An open-source framework for storing and processing huge datasets across clusters of ordinary computers. It combines a distributed file system (HDFS) with MapReduce-style batch processing.",
    highlights: [
      "Storing petabytes of data with HDFS",
      "Batch processing with MapReduce",
      "Foundation of the early big data era",
    ],
    funFact:
      "Hadoop is named after a toy yellow elephant belonging to the son of co-creator Doug Cutting — which is why the logo is an elephant.",
    url: "https://hadoop.apache.org/",
  },
  {
    id: "apache-spark",
    name: "Apache Spark",
    abbr: "AS",
    category: "Data Processing Engine",
    color: "#e25a1c",
    description:
      "A fast engine for processing large amounts of data across many machines. It keeps data in memory where it can, and lets you write jobs in Python, Scala, Java, SQL or R.",
    highlights: [
      "Large-scale ETL and data pipelines",
      "Machine learning with MLlib",
      "Querying big data with Spark SQL",
    ],
    funFact:
      "Spark began as a research project at UC Berkeley's AMPLab around 2009, and its creators later founded the company Databricks.",
    url: "https://spark.apache.org/",
  },
  {
    id: "apache-flink",
    name: "Apache Flink",
    abbr: "AF",
    category: "Stream Processing",
    color: "#e6526f",
    description:
      "A framework for processing data streams in real time, event by event. It handles state and time carefully, so it can compute accurate results even when events arrive late or out of order.",
    highlights: [
      "Real-time analytics on event streams",
      "Fraud and anomaly detection",
      "Stateful streaming pipelines",
    ],
    funFact:
      "\"Flink\" is a German word meaning quick or nimble — fitting, since the project grew out of a research project at universities in Berlin.",
    url: "https://flink.apache.org/",
  },
  {
    id: "apache-beam",
    name: "Apache Beam",
    abbr: "AB",
    category: "Data Pipeline Model",
    color: "#f26b38",
    description:
      "A unified programming model for writing batch and streaming data pipelines once and running them on different engines, such as Flink, Spark or Google Cloud Dataflow.",
    highlights: [
      "Portable data pipelines",
      "Running jobs on Google Cloud Dataflow",
      "Mixing batch and streaming logic",
    ],
    funFact:
      "The name Beam is a blend of \"Batch\" and \"strEAM\", reflecting its goal of handling both kinds of processing with one model.",
    url: "https://beam.apache.org/",
    spawnWeight: 0.5,
  },
  {
    id: "apache-storm",
    name: "Apache Storm",
    abbr: "AS",
    category: "Stream Processing",
    color: "#3b8dbd",
    description:
      "One of the first popular open-source systems for real-time stream processing. You wire up \"spouts\" that emit data and \"bolts\" that process it into a topology that runs continuously.",
    highlights: [
      "Real-time event processing",
      "Streaming analytics topologies",
      "Early streaming at Twitter scale",
    ],
    funFact:
      "Storm was created by Nathan Marz at BackType, a startup that Twitter acquired in 2011; Twitter then open-sourced it.",
    url: "https://storm.apache.org/",
    spawnWeight: 0.5,
  },
  {
    id: "apache-samza",
    name: "Apache Samza",
    abbr: "AS",
    category: "Stream Processing",
    color: "#2e86c1",
    description:
      "A stream processing framework designed to work closely with Apache Kafka. It lets you build applications that read messages, keep local state and produce results in real time.",
    highlights: [
      "Processing Kafka streams",
      "Stateful real-time applications",
      "Large-scale event pipelines",
    ],
    funFact:
      "Samza was built at LinkedIn, the same company that created Kafka, and the two were designed to fit together naturally.",
    url: "https://samza.apache.org/",
    spawnWeight: 0.5,
  },
  {
    id: "trino",
    name: "Trino",
    abbr: "Tr",
    category: "SQL Query Engine",
    color: "#dd00a1",
    description:
      "A distributed SQL query engine that can query data where it lives — data lakes, databases and more — without moving it first. It is built for fast interactive analytics on big data.",
    highlights: [
      "Querying data lakes with SQL",
      "Joining data across different sources",
      "Interactive analytics at scale",
    ],
    funFact:
      "Trino was originally called PrestoSQL; it was renamed in 2020 after its original Presto creators left Facebook and forked the project.",
    url: "https://trino.io/",
  },
  {
    id: "presto",
    name: "Presto",
    abbr: "Pr",
    category: "SQL Query Engine",
    color: "#5890ff",
    description:
      "An open-source distributed SQL engine for running fast analytic queries over large datasets stored in many places, like Hadoop, S3 or relational databases.",
    highlights: [
      "Interactive SQL on huge datasets",
      "Querying data in S3 and HDFS",
      "Powers services like Amazon Athena",
    ],
    funFact:
      "Presto was created at Facebook around 2012 to let analysts query its massive data warehouse much faster than Hive allowed.",
    url: "https://prestodb.io/",
  },
  {
    id: "dask",
    name: "Dask",
    abbr: "Da",
    category: "Parallel Computing",
    color: "#fda061",
    description:
      "A Python library for parallel computing that scales familiar tools like NumPy and pandas from one laptop to a cluster. It splits big work into many small tasks and runs them in parallel.",
    highlights: [
      "Scaling pandas to bigger-than-memory data",
      "Parallel scientific computing",
      "Distributed Python workloads",
    ],
    funFact:
      "Dask's DataFrame deliberately mimics the pandas API, so many pandas users can scale up just by changing an import and a few calls.",
    url: "https://www.dask.org/",
  },
  {
    id: "apache-kafka",
    name: "Apache Kafka",
    abbr: "AK",
    category: "Event Streaming",
    color: "#5b5bd6",
    description:
      "A distributed event streaming platform that stores streams of messages in durable, ordered logs. Many services can publish events to it and others can read them, in real time or later.",
    highlights: [
      "Event-driven microservices",
      "Real-time data pipelines",
      "Activity tracking and log collection",
    ],
    funFact:
      "Kafka was created at LinkedIn, and co-creator Jay Kreps named it after author Franz Kafka because it was \"a system optimized for writing.\"",
    url: "https://kafka.apache.org/",
  },
  {
    id: "rabbitmq",
    name: "RabbitMQ",
    abbr: "Ra",
    category: "Message Broker",
    color: "#ff6600",
    description:
      "A popular message broker that passes messages between applications using queues. Producers send messages, RabbitMQ routes them, and consumers pick them up when ready.",
    highlights: [
      "Background job queues",
      "Decoupling microservices",
      "Reliable message delivery with AMQP",
    ],
    funFact:
      "RabbitMQ is written in Erlang, a language originally built by Ericsson for telephone switches that needed to stay up almost all the time.",
    url: "https://www.rabbitmq.com/",
  },
  {
    id: "apache-pulsar",
    name: "Apache Pulsar",
    abbr: "AP",
    category: "Event Streaming",
    color: "#188fff",
    description:
      "A distributed messaging and streaming platform that supports both queues and pub/sub. It separates serving messages from storing them, which makes scaling storage easier.",
    highlights: [
      "Multi-tenant messaging",
      "Geo-replicated event streams",
      "Combining queues and streaming",
    ],
    funFact:
      "Pulsar was originally developed at Yahoo before being donated to the Apache Software Foundation.",
    url: "https://pulsar.apache.org/",
    spawnWeight: 0.5,
  },
  {
    id: "nats",
    name: "NATS",
    abbr: "NA",
    category: "Messaging System",
    color: "#27aae1",
    description:
      "A lightweight, very fast messaging system for connecting services, devices and apps. It supports publish/subscribe and request/reply, and JetStream adds persistent streams.",
    highlights: [
      "Microservice communication",
      "IoT and edge messaging",
      "Lightweight pub/sub",
    ],
    funFact:
      "NATS was first written in Ruby by Derek Collison for Cloud Foundry, and later rewritten in Go for speed.",
    url: "https://nats.io/",
    spawnWeight: 0.5,
  },
  {
    id: "amazon-kinesis",
    name: "Amazon Kinesis",
    abbr: "AK",
    category: "Cloud Data Streaming",
    color: "#8c4fff",
    description:
      "A family of AWS services for collecting and processing streaming data in real time, such as clickstreams, logs and sensor readings, without running your own servers.",
    highlights: [
      "Real-time log and clickstream ingestion",
      "Feeding data lakes on S3",
      "Streaming analytics on AWS",
    ],
    funFact:
      "\"Kinesis\" comes from the Greek word for movement or motion — apt for a service all about data on the move.",
    url: "https://aws.amazon.com/kinesis/",
  },
  {
    id: "google-pub-sub",
    name: "Google Pub/Sub",
    abbr: "PS",
    category: "Cloud Messaging",
    color: "#4285f4",
    description:
      "A fully managed messaging service on Google Cloud. Publishers send messages to a topic, and every subscriber to that topic receives them, with Google handling the scaling.",
    highlights: [
      "Event-driven cloud apps",
      "Streaming data into BigQuery",
      "Decoupling services on Google Cloud",
    ],
    funFact:
      "\"Pub/Sub\" is short for publish/subscribe, a messaging pattern where senders don't need to know who the receivers are.",
    url: "https://cloud.google.com/pubsub",
  },
  {
    id: "aws-sqs",
    name: "AWS SQS",
    abbr: "AS",
    category: "Message Queue",
    color: "#e7157b",
    description:
      "Amazon Simple Queue Service, a fully managed message queue. One part of your app puts messages in, another takes them out later, so the two can work at their own pace.",
    highlights: [
      "Background job processing",
      "Buffering spikes in traffic",
      "Decoupling microservices on AWS",
    ],
    funFact:
      "SQS launched in 2004 and is often cited as one of the very first AWS services, predating both S3 and EC2.",
    url: "https://aws.amazon.com/sqs/",
  },
  {
    id: "aws-sns",
    name: "AWS SNS",
    abbr: "AS",
    category: "Pub/Sub Service",
    color: "#e7157b",
    description:
      "Amazon Simple Notification Service, a managed pub/sub service. You publish one message to a topic and SNS fans it out to many subscribers, like queues, functions, emails or SMS.",
    highlights: [
      "Fan-out messaging to many services",
      "Sending SMS and push notifications",
      "Alerting from CloudWatch alarms",
    ],
    funFact:
      "A common AWS pattern pairs SNS with SQS: one SNS topic fans out a message to several SQS queues so each service gets its own copy.",
    url: "https://aws.amazon.com/sns/",
  },
  {
    id: "zeromq",
    name: "ZeroMQ",
    abbr: "Ze",
    category: "Messaging Library",
    color: "#df0000",
    description:
      "A high-performance messaging library you embed in your app, rather than a separate server. It gives you smart sockets for patterns like pub/sub, request/reply and pipelines.",
    highlights: [
      "Low-latency messaging between processes",
      "Building distributed systems without a broker",
      "Used inside Jupyter kernels",
    ],
    funFact:
      "The \"zero\" in ZeroMQ originally meant zero broker and zero latency (as close as possible); it is often written as ØMQ.",
    url: "https://zeromq.org/",
    spawnWeight: 0.5,
  },
  {
    id: "apache-airflow",
    name: "Apache Airflow",
    abbr: "AF",
    category: "Workflow Orchestration",
    color: "#017cee",
    description:
      "A platform for scheduling and monitoring data workflows written as Python code. Each workflow is a DAG — a set of tasks with dependencies that run in the right order.",
    highlights: [
      "Scheduling ETL pipelines",
      "Orchestrating data jobs",
      "Monitoring task runs in a web UI",
    ],
    funFact:
      "Airflow was started at Airbnb in 2014 by Maxime Beauchemin to manage the company's increasingly complex data workflows.",
    url: "https://airflow.apache.org/",
  },
  {
    id: "dagster",
    name: "Dagster",
    abbr: "Da",
    category: "Data Orchestration",
    color: "#4f43dd",
    description:
      "A data orchestrator for building and running data pipelines in Python. It focuses on \"assets\" — the tables, files and models your pipelines produce — and makes them easy to test and observe.",
    highlights: [
      "Asset-based data pipelines",
      "Testing data workflows locally",
      "Tracking data lineage",
    ],
    funFact:
      "Dagster's name is a play on DAG (directed acyclic graph), the structure that most data pipelines are built around.",
    url: "https://dagster.io/",
    spawnWeight: 0.5,
  },
  {
    id: "prefect",
    name: "Prefect",
    abbr: "Pr",
    category: "Workflow Orchestration",
    color: "#2d6df6",
    description:
      "A Python workflow orchestration tool. You turn ordinary functions into flows and tasks with decorators, and Prefect handles scheduling, retries and monitoring.",
    highlights: [
      "Orchestrating Python data pipelines",
      "Automatic retries and alerts",
      "Scheduling recurring jobs",
    ],
    funFact:
      "Prefect lets you turn a normal Python function into a tracked workflow just by adding an @flow decorator.",
    url: "https://www.prefect.io/",
    spawnWeight: 0.5,
  },
  {
    id: "luigi",
    name: "Luigi",
    abbr: "Lu",
    category: "Workflow Orchestration",
    color: "#2e9e44",
    description:
      "A Python package for building pipelines of batch jobs. It handles dependencies between tasks, so each job runs only after the things it needs are finished.",
    highlights: [
      "Chaining batch jobs",
      "Hadoop job orchestration",
      "Dependency resolution between tasks",
    ],
    funFact:
      "Luigi was built at Spotify and named after the Nintendo plumber — because it's all about building pipelines.",
    url: "https://github.com/spotify/luigi",
    spawnWeight: 0.5,
  },
  {
    id: "dbt",
    name: "dbt",
    abbr: "Db",
    category: "Data Transformation",
    color: "#ff694b",
    description:
      "A tool that lets you transform data inside your warehouse using SQL SELECT statements. It adds software practices like version control, testing and documentation to analytics work.",
    highlights: [
      "Building analytics models in SQL",
      "Testing data quality",
      "Auto-generated data documentation",
    ],
    funFact:
      "dbt stands for \"data build tool\", and the project's style guide asks that it always be written in lowercase.",
    url: "https://www.getdbt.com/",
  },
  {
    id: "meltano",
    name: "Meltano",
    abbr: "Me",
    category: "Data Integration",
    color: "#311772",
    description:
      "An open-source platform for building ELT pipelines from the command line. It uses Singer \"taps\" and \"targets\" to pull data from sources and load it into destinations.",
    highlights: [
      "Open-source ELT pipelines",
      "Managing Singer taps and targets",
      "Version-controlled data projects",
    ],
    funFact:
      "Meltano was started inside GitLab in 2018 before spinning out as its own company in 2021.",
    url: "https://meltano.com/",
    spawnWeight: 0.5,
  },
  {
    id: "airbyte",
    name: "Airbyte",
    abbr: "Ab",
    category: "Data Integration",
    color: "#615eff",
    description:
      "An open-source data integration platform that copies data from apps, APIs and databases into warehouses and lakes. It offers hundreds of ready-made connectors.",
    highlights: [
      "Syncing SaaS data into a warehouse",
      "Building custom connectors",
      "Self-hosted ELT pipelines",
    ],
    funFact:
      "Airbyte's large connector catalog is largely community-driven, with many connectors contributed by users rather than the core team.",
    url: "https://airbyte.com/",
    spawnWeight: 0.5,
  },
  {
    id: "fivetran",
    name: "Fivetran",
    abbr: "5T",
    category: "Data Integration",
    color: "#0073ff",
    description:
      "A managed service that automatically pulls data from hundreds of sources, like Salesforce or Postgres, into your data warehouse and keeps it in sync.",
    highlights: [
      "Automated data pipelines",
      "Loading SaaS data into Snowflake or BigQuery",
      "Handling schema changes for you",
    ],
    funFact:
      "Fivetran was part of the Y Combinator startup accelerator and helped popularize the ELT approach: load raw data first, transform it later.",
    url: "https://www.fivetran.com/",
  },
  {
    id: "debezium",
    name: "Debezium",
    abbr: "De",
    category: "Change Data Capture",
    color: "#91d443",
    description:
      "An open-source change data capture tool. It watches your database's log and turns every insert, update and delete into an event, often published to Kafka.",
    highlights: [
      "Streaming database changes to Kafka",
      "Keeping caches and search indexes in sync",
      "Building event-driven systems",
    ],
    funFact:
      "The name Debezium is a nod to the periodic table: \"DBs\" plus the \"-ium\" ending used for many chemical elements.",
    url: "https://debezium.io/",
    spawnWeight: 0.5,
  },
  {
    id: "tableau",
    name: "Tableau",
    abbr: "Ta",
    category: "BI & Visualization",
    color: "#e97627",
    description:
      "A business intelligence tool for exploring data and building interactive charts and dashboards, mostly by dragging and dropping rather than writing code.",
    highlights: [
      "Interactive business dashboards",
      "Visual data exploration",
      "Sharing reports across a company",
    ],
    funFact:
      "Tableau grew out of research at Stanford University and was acquired by Salesforce in 2019.",
    url: "https://www.tableau.com/",
  },
  {
    id: "power-bi",
    name: "Power BI",
    abbr: "PB",
    category: "BI & Visualization",
    color: "#f2c811",
    description:
      "Microsoft's business intelligence tool for turning data into interactive reports and dashboards. It connects to many data sources and fits nicely with Excel and Microsoft 365.",
    highlights: [
      "Company KPI dashboards",
      "Reports built from Excel and SQL data",
      "Data modeling with DAX formulas",
    ],
    funFact:
      "Power BI uses a formula language called DAX (Data Analysis Expressions), which also powers Excel's Power Pivot.",
    url: "https://www.microsoft.com/power-platform/products/power-bi",
  },
  {
    id: "looker",
    name: "Looker",
    abbr: "Lo",
    category: "BI Platform",
    color: "#4285f4",
    description:
      "A business intelligence platform from Google Cloud. Teams define metrics once in a modeling language called LookML, and everyone builds reports on top of those shared definitions.",
    highlights: [
      "Self-service analytics dashboards",
      "Defining metrics with LookML",
      "Embedding analytics in apps",
    ],
    funFact:
      "Google announced its acquisition of Looker in 2019 for about $2.6 billion, folding it into Google Cloud.",
    url: "https://cloud.google.com/looker",
  },
  {
    id: "metabase",
    name: "Metabase",
    abbr: "MB",
    category: "BI & Visualization",
    color: "#509ee3",
    description:
      "An open-source tool that lets anyone ask questions about their data and get charts back, either with a point-and-click query builder or by writing SQL.",
    highlights: [
      "Simple dashboards for startups",
      "Point-and-click data questions",
      "Self-hosted analytics",
    ],
    funFact:
      "In Metabase, a saved query is literally called a \"question\" — the idea is that anyone on a team should be able to ask one.",
    url: "https://www.metabase.com/",
  },
  {
    id: "apache-superset",
    name: "Apache Superset",
    abbr: "SS",
    category: "BI & Visualization",
    color: "#20a7c9",
    description:
      "An open-source data exploration and dashboard platform. It connects to SQL databases and lets you build charts with a no-code builder or a SQL editor.",
    highlights: [
      "Open-source BI dashboards",
      "SQL Lab for ad-hoc queries",
      "Visualizing large datasets",
    ],
    funFact:
      "Superset was started at Airbnb by Maxime Beauchemin — the same engineer who created Apache Airflow.",
    url: "https://superset.apache.org/",
    spawnWeight: 0.5,
  },
  {
    id: "redash",
    name: "Redash",
    abbr: "Rd",
    category: "BI & Visualization",
    color: "#ff7964",
    description:
      "An open-source tool for writing SQL queries against your data sources, visualizing the results and sharing them as dashboards.",
    highlights: [
      "Sharing SQL query results",
      "Simple team dashboards",
      "Connecting to many data sources",
    ],
    funFact:
      "Redash was acquired by Databricks in 2020, and its technology was folded into Databricks' own SQL dashboards.",
    url: "https://redash.io/",
    spawnWeight: 0.5,
  },
  {
    id: "apache-parquet",
    name: "Apache Parquet",
    abbr: "PQ",
    category: "Columnar File Format",
    color: "#50a0d8",
    description:
      "A columnar file format for storing big tables efficiently. Values from the same column are stored together, so files compress well and queries can read only the columns they need.",
    highlights: [
      "Storing tables in data lakes",
      "Fast analytics with Spark and DuckDB",
      "Compact, compressed datasets",
    ],
    funFact:
      "Parquet was created by engineers at Twitter and Cloudera, and its design was inspired by Google's Dremel paper.",
    url: "https://parquet.apache.org/",
  },
  {
    id: "apache-avro",
    name: "Apache Avro",
    abbr: "AA",
    category: "Serialization Format",
    color: "#2a64b4",
    description:
      "A row-based data serialization format that stores data in compact binary along with a schema written in JSON. It handles schema changes over time gracefully.",
    highlights: [
      "Kafka messages with Schema Registry",
      "Storing records in Hadoop",
      "Evolving data schemas safely",
    ],
    funFact:
      "Avro was created by Doug Cutting, the same person who created Hadoop and Lucene.",
    url: "https://avro.apache.org/",
    spawnWeight: 0.5,
  },
  {
    id: "apache-orc",
    name: "Apache ORC",
    abbr: "AO",
    category: "Columnar File Format",
    color: "#2e8b57",
    description:
      "A columnar file format built for fast reads in Hadoop and Hive. It stores data by column with lightweight indexes so queries can skip data they don't need.",
    highlights: [
      "Hive table storage",
      "Compressed analytics datasets",
      "Fast reads with built-in indexes",
    ],
    funFact:
      "ORC stands for Optimized Row Columnar — it was designed to speed up Apache Hive.",
    url: "https://orc.apache.org/",
    spawnWeight: 0.5,
  },
  {
    id: "apache-arrow",
    name: "Apache Arrow",
    abbr: "AA",
    category: "In-Memory Data Format",
    color: "#d22128",
    description:
      "A standard way to lay out table-like data in memory, by column. Because tools share the same format, they can pass data to each other without slow copying or converting.",
    highlights: [
      "Fast data exchange between tools",
      "Powers pandas, Polars and DuckDB internals",
      "Zero-copy analytics",
    ],
    funFact:
      "Arrow was co-created by Wes McKinney, the creator of pandas, partly to fix performance limits he had run into with pandas.",
    url: "https://arrow.apache.org/",
  },
  {
    id: "protocol-buffers",
    name: "Protocol Buffers",
    abbr: "PB",
    category: "Serialization Format",
    color: "#4285f4",
    description:
      "Google's language-neutral way to serialize structured data. You describe your data in a .proto file and generate code to read and write a compact binary format.",
    highlights: [
      "Message format for gRPC",
      "Compact data between services",
      "Generating typed code in many languages",
    ],
    funFact:
      "Protocol Buffers were used inside Google for years before being open-sourced in 2008; people often just call them \"protobuf\".",
    url: "https://protobuf.dev/",
  },
  {
    id: "messagepack",
    name: "MessagePack",
    abbr: "Me",
    category: "Serialization Format",
    color: "#2db7f5",
    description:
      "A binary serialization format that works like a compact JSON. It stores the same kinds of data — maps, arrays, strings, numbers — but in fewer bytes and faster to parse.",
    highlights: [
      "Compact data over the network",
      "Caching structured values",
      "Fast RPC payloads",
    ],
    funFact:
      "MessagePack's tagline is \"It's like JSON. But fast and small.\" — small integers can be stored in just a single byte.",
    url: "https://msgpack.org/",
    spawnWeight: 0.5,
  },
  {
    id: "polars",
    name: "Polars",
    abbr: "PL",
    category: "DataFrame Library",
    color: "#0075ff",
    description:
      "A fast DataFrame library for working with tables of data, written in Rust with Python bindings. It uses all your CPU cores and offers a lazy mode that optimizes your whole query before running it.",
    highlights: [
      "Fast data analysis in Python",
      "Processing large CSV/Parquet",
      "A speedy pandas alternative",
    ],
    funFact:
      "The name is a playful jab at pandas, the classic Python DataFrame library: Polars is named after polar bears. It was created by Ritchie Vink.",
    url: "https://pola.rs",
  },
  {
    id: "google-analytics",
    name: "Google Analytics",
    abbr: "GA",
    category: "Web Analytics",
    color: "#e37400",
    description:
      "Google's service for measuring how people use your website or app. A small tracking script records visits and events, and reports show traffic sources, popular pages and user behavior.",
    highlights: [
      "Tracking website traffic",
      "Measuring conversions",
      "Understanding user behavior",
    ],
    funFact:
      "Google Analytics grew out of Urchin, a web analytics company Google bought in 2005. Its older Universal Analytics stopped processing data in 2023, replaced by GA4.",
    url: "https://marketingplatform.google.com/about/analytics/",
  },
  {
    id: "matplotlib",
    name: "Matplotlib",
    abbr: "Ma",
    category: "Plotting Library",
    color: "#11557c",
    description:
      "The classic Python library for making charts and plots, from simple line graphs to complex scientific figures. Many other Python plotting tools, like seaborn, are built on top of it.",
    highlights: [
      "Scientific figures and plots",
      "Charts in Jupyter notebooks",
      "Base for seaborn and pandas plots",
    ],
    funFact:
      "Matplotlib was created by neurobiologist John D. Hunter around 2003, who wanted MATLAB-style plotting in Python to visualize brain-signal data.",
    url: "https://matplotlib.org",
  },
  {
    id: "jupyter",
    name: "Jupyter",
    abbr: "Ju",
    category: "Interactive Notebooks",
    color: "#f37626",
    description:
      "An open-source notebook environment where you mix live code, charts and notes in one document. You run code cell by cell and see results right away.",
    highlights: [
      "Data exploration and analysis",
      "Machine learning experiments",
      "Teaching and sharing code",
    ],
    funFact:
      "The name Jupyter is a nod to three core languages it supported: Julia, Python and R. It was spun off from the IPython project in 2014.",
    url: "https://jupyter.org",
  },
  {
    id: "posthog",
    name: "PostHog",
    abbr: "PH",
    category: "Product Analytics",
    color: "#f54e00",
    description:
      "An open-source product analytics platform. It tracks what users do in your app and bundles session replays, feature flags, A/B tests and surveys in one tool.",
    highlights: [
      "Product analytics and funnels",
      "Session replays",
      "Feature flags and A/B tests",
    ],
    funFact:
      "PostHog publishes its entire company handbook publicly on its website, covering everything from how it hires to how it pays people.",
    url: "https://posthog.com",
  },
  {
    id: "pandas",
    name: "Pandas",
    abbr: "PD",
    category: "Data Analysis Library",
    color: "#150458",
    description:
      "A Python library for working with tables of data. Its DataFrame lets you load CSVs or spreadsheets, then filter, group, clean and summarize data with a few lines of code.",
    highlights: [
      "Cleaning messy datasets",
      "Exploring data in notebooks",
      "Reading and writing CSV and Excel",
    ],
    funFact:
      "The name pandas comes from \"panel data\", an economics term for multi-dimensional datasets. Wes McKinney started it in 2008 while working at a finance firm.",
    url: "https://pandas.pydata.org",
  },
  {
    id: "mixpanel",
    name: "Mixpanel",
    abbr: "Mi",
    category: "Product Analytics",
    color: "#7856ff",
    description:
      "A product analytics service that tracks what users do in your app, like clicks, sign-ups and purchases. Teams use its charts to see funnels, retention and which features get used.",
    highlights: [
      "Tracking user events",
      "Funnel and retention analysis",
      "Measuring feature adoption",
    ],
    funFact:
      "Mixpanel was co-founded by Suhail Doshi and was part of the Y Combinator startup accelerator in 2009.",
    url: "https://mixpanel.com",
  },
];

export default entries;
