import type { CatalogEntry } from "../types";

/** DevOps and Infrastructure */
const entries: CatalogEntry[] = [
  {
    id: "podman",
    name: "Podman",
    abbr: "POD",
    category: "Container Engine",
    color: "#892ca0",
    description:
      "A container engine for building and running containers, much like Docker. It runs without a background daemon and can run containers without root privileges.",
    highlights: [
      "Running containers without a daemon",
      "Rootless containers for better security",
      "Drop-in replacement for the Docker CLI",
    ],
    funFact:
      "Podman’s commands mirror Docker’s so closely that many people simply set alias docker=podman and carry on. Its name is short for \"Pod Manager\".",
    url: "https://podman.io",
  },
  {
    id: "containerd",
    name: "containerd",
    abbr: "CTRD",
    category: "Container Runtime",
    color: "#0b99d1",
    description:
      "An industry-standard container runtime that handles the low-level work of pulling images and starting and stopping containers. Docker and Kubernetes use it under the hood.",
    highlights: [
      "Runtime behind Docker Engine",
      "Default runtime in many Kubernetes clusters",
      "Managing images and container lifecycle",
    ],
    funFact:
      "containerd was split out of Docker and donated to the CNCF in 2017. Its name is always written in lowercase, like a Unix daemon.",
    url: "https://containerd.io",
  },
  {
    id: "buildah",
    name: "Buildah",
    abbr: "BLD",
    category: "Container Build Tool",
    color: "#9a3c8f",
    description:
      "A command-line tool for building OCI and Docker container images. It can build images without a daemon and without needing root access.",
    highlights: [
      "Building images in CI without Docker",
      "Scripted, fine-grained image builds",
      "Pairs with Podman and Skopeo",
    ],
    funFact:
      "The name is how \"builder\" sounds when spoken with a Boston accent — a joke from the Red Hat team that created it.",
    url: "https://buildah.io",
    spawnWeight: 0.5,
  },
  {
    id: "lxc",
    name: "LXC",
    abbr: "LXC",
    category: "Container Technology",
    color: "#ff8c00",
    description:
      "Linux Containers: a low-level way to run isolated Linux systems on one machine using kernel features like namespaces and cgroups. Containers feel like lightweight VMs.",
    highlights: [
      "Running full Linux systems in containers",
      "Lightweight alternative to virtual machines",
      "Foundation for tools like LXD and Incus",
    ],
    funFact:
      "In its earliest days, Docker used LXC under the hood to run containers before switching to its own library, libcontainer.",
    url: "https://linuxcontainers.org/lxc/",
    spawnWeight: 0.5,
  },
  {
    id: "lxd",
    name: "LXD",
    abbr: "LXD",
    category: "Container Manager",
    color: "#e95420",
    description:
      "A system container and virtual machine manager from Canonical, built on top of LXC. It gives you a friendly CLI and API to run many Linux machines on one host.",
    highlights: [
      "Running full Linux OS containers",
      "Managing VMs and containers together",
      "Homelabs and dev environments",
    ],
    funFact:
      "In 2023 Canonical took LXD under its own direct control, and community developers forked it into a new project called Incus.",
    url: "https://canonical.com/lxd",
    spawnWeight: 0.5,
  },
  {
    id: "docker-swarm",
    name: "Docker Swarm",
    abbr: "SWRM",
    category: "Container Orchestrator",
    color: "#2496ed",
    description:
      "Docker’s built-in tool for running containers across a group of machines. It turns several Docker hosts into one cluster that can scale and restart services.",
    highlights: [
      "Simple multi-server container setups",
      "Scaling services with one command",
      "Lightweight alternative to Kubernetes",
    ],
    funFact:
      "Since Docker 1.12 in 2016, swarm mode is built right into Docker Engine — a single docker swarm init turns your machine into a cluster manager.",
    url: "https://docs.docker.com/engine/swarm/",
  },
  {
    id: "nomad",
    name: "Nomad",
    abbr: "NMD",
    category: "Workload Orchestrator",
    color: "#00ca8e",
    description:
      "HashiCorp’s workload orchestrator that schedules and runs apps across a cluster of machines. It ships as a single binary and is simpler to operate than Kubernetes.",
    highlights: [
      "Scheduling containers across servers",
      "Running non-container apps and batch jobs",
      "Pairs with Consul and Vault",
    ],
    funFact:
      "Unlike Kubernetes, Nomad isn’t container-only: it can also schedule plain executables, Java JARs and even virtual machines.",
    url: "https://www.nomadproject.io",
  },
  {
    id: "amazon-ecs",
    name: "Amazon ECS",
    abbr: "ECS",
    category: "Container Orchestrator",
    color: "#ff9900",
    description:
      "Amazon Elastic Container Service: AWS’s own managed service for running Docker containers. You describe your app as tasks and services, and AWS runs them.",
    highlights: [
      "Running containerized apps on AWS",
      "Serverless containers with Fargate",
      "Microservices behind load balancers",
    ],
    funFact:
      "With AWS Fargate, ECS can run your containers without you managing any servers at all — you just say how much CPU and memory each task needs.",
    url: "https://aws.amazon.com/ecs/",
  },
  {
    id: "amazon-eks",
    name: "Amazon EKS",
    abbr: "EKS",
    category: "Managed Kubernetes",
    color: "#ff9900",
    description:
      "Amazon Elastic Kubernetes Service: managed Kubernetes on AWS. AWS runs the Kubernetes control plane for you, and you run your workloads on worker nodes.",
    highlights: [
      "Running Kubernetes on AWS",
      "Scaling microservices in the cloud",
      "Hybrid clusters with EKS Anywhere",
    ],
    funFact:
      "Because EKS runs upstream Kubernetes, the same kubectl commands and YAML files you use elsewhere work on EKS too.",
    url: "https://aws.amazon.com/eks/",
  },
  {
    id: "google-kubernetes-engine",
    name: "Google Kubernetes Engine",
    abbr: "GKE",
    category: "Managed Kubernetes",
    color: "#4285f4",
    description:
      "Google Cloud’s managed Kubernetes service. Google runs and upgrades the cluster for you, and Autopilot mode can even manage the worker nodes.",
    highlights: [
      "Running Kubernetes on Google Cloud",
      "Hands-off clusters with Autopilot",
      "Scaling container workloads",
    ],
    funFact:
      "Google created Kubernetes based on its internal system Borg, and GKE (launched in 2015) was the first managed Kubernetes service in the cloud.",
    url: "https://cloud.google.com/kubernetes-engine",
  },
  {
    id: "azure-kubernetes-service",
    name: "Azure Kubernetes Service",
    abbr: "AKS",
    category: "Managed Kubernetes",
    color: "#0078d4",
    description:
      "Microsoft Azure’s managed Kubernetes service. Azure handles the cluster control plane so you can focus on deploying and scaling your containers.",
    highlights: [
      "Running Kubernetes on Azure",
      "Hosting .NET and Windows containers",
      "Integrating with Azure DevOps",
    ],
    funFact:
      "AKS can run Windows Server containers alongside Linux ones in the same cluster — handy for moving older .NET apps to Kubernetes.",
    url: "https://azure.microsoft.com/en-us/products/kubernetes-service",
  },
  {
    id: "terraform",
    name: "Terraform",
    abbr: "TF",
    category: "Infrastructure as Code",
    color: "#7b42bc",
    description:
      "A tool for describing cloud infrastructure — servers, networks, databases — in code files. Terraform compares your code to reality and creates or changes resources to match.",
    highlights: [
      "Provisioning AWS, Azure and GCP resources",
      "Version-controlled infrastructure",
      "Repeatable environments for dev and prod",
    ],
    funFact:
      "Terraform was created by HashiCorp co-founder Mitchell Hashimoto. Its config language, HCL, stands for HashiCorp Configuration Language.",
    url: "https://developer.hashicorp.com/terraform",
  },
  {
    id: "opentofu",
    name: "OpenTofu",
    abbr: "TOFU",
    category: "Infrastructure as Code",
    color: "#ffda18",
    description:
      "An open-source infrastructure-as-code tool forked from Terraform. It uses the same HCL language and providers, and is managed by the Linux Foundation.",
    highlights: [
      "Open-source drop-in for Terraform",
      "Provisioning cloud infrastructure",
      "Encrypted state files",
    ],
    funFact:
      "OpenTofu was forked in 2023 after HashiCorp moved Terraform to the non-open-source Business Source License. Its CLI command is simply tofu.",
    url: "https://opentofu.org",
  },
  {
    id: "pulumi",
    name: "Pulumi",
    abbr: "PLM",
    category: "Infrastructure as Code",
    color: "#8a3391",
    description:
      "An infrastructure-as-code tool that lets you define cloud resources in real programming languages like TypeScript, Python, Go or C#, instead of a config language.",
    highlights: [
      "Infrastructure in TypeScript or Python",
      "Using loops and functions for infra",
      "Testing infrastructure like normal code",
    ],
    funFact:
      "Pulumi was co-founded by Joe Duffy, a former Microsoft engineer who worked on .NET and the C# compiler, which shows in its love of real languages.",
    url: "https://www.pulumi.com",
  },
  {
    id: "aws-cloudformation",
    name: "AWS CloudFormation",
    abbr: "CFN",
    category: "Infrastructure as Code",
    color: "#e7157b",
    description:
      "AWS’s built-in infrastructure-as-code service. You write a JSON or YAML template describing your resources, and CloudFormation creates them as a \"stack\".",
    highlights: [
      "Provisioning AWS resources from templates",
      "Repeatable stacks across accounts",
      "The engine behind AWS CDK and SAM",
    ],
    funFact:
      "AWS CDK lets you write infrastructure in TypeScript or Python — but under the hood it generates plain CloudFormation templates.",
    url: "https://aws.amazon.com/cloudformation/",
  },
  {
    id: "ansible",
    name: "Ansible",
    abbr: "ANS",
    category: "Configuration Management",
    color: "#ee0000",
    description:
      "An automation tool for configuring servers and deploying apps. You write simple YAML \"playbooks\", and Ansible connects over SSH to apply them — no agents needed.",
    highlights: [
      "Setting up servers automatically",
      "Deploying apps to many machines",
      "Automating network devices",
    ],
    funFact:
      "The name comes from science fiction: an ansible is a faster-than-light communication device invented by author Ursula K. Le Guin.",
    url: "https://www.ansible.com",
  },
  {
    id: "chef",
    name: "Chef",
    abbr: "CHEF",
    category: "Configuration Management",
    color: "#f18b21",
    description:
      "A configuration management tool where you describe server setup in Ruby code. It keeps machines in the state you defined, automatically and repeatably.",
    highlights: [
      "Automating server configuration",
      "Managing large fleets of machines",
      "Compliance checks with Chef InSpec",
    ],
    funFact:
      "Chef leans into its kitchen theme: configs are \"recipes\", grouped into \"cookbooks\", and you manage them with a tool called knife.",
    url: "https://www.chef.io",
  },
  {
    id: "puppet",
    name: "Puppet",
    abbr: "PUP",
    category: "Configuration Management",
    color: "#ffae1a",
    description:
      "A configuration management tool where you declare how servers should look in \"manifests\". Puppet agents then make each machine match that desired state.",
    highlights: [
      "Keeping servers consistently configured",
      "Enterprise infrastructure automation",
      "Enforcing security and compliance",
    ],
    funFact:
      "Puppet was created by Luke Kanies in 2005 and helped kick off the whole \"infrastructure as code\" movement.",
    url: "https://www.puppet.com",
  },
  {
    id: "saltstack",
    name: "SaltStack",
    abbr: "SALT",
    category: "Configuration Management",
    color: "#57bcad",
    description:
      "A Python-based automation and configuration management tool (now called the Salt Project). A master server sends commands to many machines in parallel very quickly.",
    highlights: [
      "Configuring many servers at once",
      "Running remote commands across fleets",
      "Event-driven infrastructure automation",
    ],
    funFact:
      "Salt has a playful vocabulary: managed machines are \"minions\", facts about them are \"grains\", and secure data is stored in \"pillars\".",
    url: "https://saltproject.io",
    spawnWeight: 0.5,
  },
  {
    id: "jenkins",
    name: "Jenkins",
    abbr: "JNK",
    category: "CI/CD Server",
    color: "#d24939",
    description:
      "An open-source automation server for continuous integration and delivery. It builds, tests and deploys your code automatically, with thousands of plugins.",
    highlights: [
      "Automated builds and tests",
      "Self-hosted CI/CD pipelines",
      "Extending CI with plugins",
    ],
    funFact:
      "Jenkins was originally called Hudson. After a naming dispute with Oracle in 2011, the community forked it and renamed it Jenkins — its mascot is a butler.",
    url: "https://www.jenkins.io",
  },
  {
    id: "github-actions",
    name: "GitHub Actions",
    abbr: "GHA",
    category: "CI/CD Platform",
    color: "#2088ff",
    description:
      "GitHub’s built-in automation platform. You write YAML workflows that run on events like pushes or pull requests to build, test and deploy your code.",
    highlights: [
      "Running tests on every pull request",
      "Deploying apps automatically",
      "Automating repo chores",
    ],
    funFact:
      "Workflows live in a .github/workflows folder in your repo, and you can reuse thousands of community-made actions from the GitHub Marketplace.",
    url: "https://github.com/features/actions",
  },
  {
    id: "gitlab-ci-cd",
    name: "GitLab CI/CD",
    abbr: "GLCI",
    category: "CI/CD Platform",
    color: "#fc6d26",
    description:
      "GitLab’s built-in continuous integration and delivery system. You define pipelines in a .gitlab-ci.yml file, and GitLab runners execute the jobs.",
    highlights: [
      "Pipelines built into GitLab repos",
      "Self-hosted runners for CI jobs",
      "Deploying to Kubernetes and clouds",
    ],
    funFact:
      "GitLab is an all-remote company with no offices, and it publishes its entire company handbook publicly online.",
    url: "https://docs.gitlab.com/ee/ci/",
  },
  {
    id: "circleci",
    name: "CircleCI",
    abbr: "CCI",
    category: "CI/CD Platform",
    color: "#04aa51",
    description:
      "A cloud-based continuous integration and delivery service. You add a config file to your repo and CircleCI runs your builds and tests on every change.",
    highlights: [
      "Fast cloud CI for GitHub repos",
      "Parallel test runs",
      "Reusable config packages called orbs",
    ],
    funFact:
      "CircleCI’s reusable, shareable packages of pipeline config are called \"orbs\" — you can import one to set up a whole tool in a few lines.",
    url: "https://circleci.com",
  },
  {
    id: "travis-ci",
    name: "Travis CI",
    abbr: "TRAV",
    category: "CI/CD Platform",
    color: "#cd324a",
    description:
      "A hosted continuous integration service configured with a .travis.yml file. It automatically builds and tests code from your Git repositories.",
    highlights: [
      "CI for open-source projects",
      "Testing across many language versions",
      "Classic \"build passing\" badges",
    ],
    funFact:
      "For years Travis CI was free for open-source projects on GitHub, so its green \"build passing\" badge appeared on countless project READMEs.",
    url: "https://www.travis-ci.com",
    spawnWeight: 0.5,
  },
  {
    id: "buildkite",
    name: "Buildkite",
    abbr: "BK",
    category: "CI/CD Platform",
    color: "#14cc80",
    description:
      "A CI/CD platform where Buildkite hosts the dashboard and pipelines, but the builds run on agents in your own infrastructure. This gives speed and control.",
    highlights: [
      "CI on your own servers",
      "Large-scale monorepo pipelines",
      "Keeping code inside your network",
    ],
    funFact:
      "Buildkite comes from Melbourne, Australia, and its hybrid model means your source code never has to leave your own machines.",
    url: "https://buildkite.com",
    spawnWeight: 0.5,
  },
  {
    id: "teamcity",
    name: "TeamCity",
    abbr: "TC",
    category: "CI/CD Server",
    color: "#0cb0f2",
    description:
      "A continuous integration and deployment server by JetBrains. It builds and tests your code with a polished web UI and deep support for many languages.",
    highlights: [
      "CI for Java and .NET projects",
      "Self-hosted or cloud build servers",
      "Pipelines defined in Kotlin DSL",
    ],
    funFact:
      "TeamCity is made by JetBrains, the creators of IntelliJ IDEA and Kotlin — and you can even write your build configs in Kotlin.",
    url: "https://www.jetbrains.com/teamcity/",
    spawnWeight: 0.5,
  },
  {
    id: "bitbucket-pipelines",
    name: "Bitbucket Pipelines",
    abbr: "BBP",
    category: "CI/CD Platform",
    color: "#0052cc",
    description:
      "Atlassian’s CI/CD service built into Bitbucket. You define steps in a bitbucket-pipelines.yml file and they run in Docker containers on each push.",
    highlights: [
      "CI/CD for Bitbucket repositories",
      "Deploying with Jira integration",
      "Container-based build steps",
    ],
    funFact:
      "Bitbucket originally hosted only Mercurial repositories. It added Git support later and finally dropped Mercurial in 2020.",
    url: "https://www.atlassian.com/software/bitbucket/features/pipelines",
    spawnWeight: 0.5,
  },
  {
    id: "argo-cd",
    name: "Argo CD",
    abbr: "ARGO",
    category: "GitOps Tool",
    color: "#ef7b4d",
    description:
      "A GitOps tool for Kubernetes that keeps your cluster in sync with configuration stored in Git. Change the repo, and Argo CD updates the cluster to match.",
    highlights: [
      "GitOps deployments to Kubernetes",
      "Visualizing app sync status",
      "Rolling back by reverting a commit",
    ],
    funFact:
      "The Argo project was open-sourced by Intuit (makers of TurboTax), and its octopus mascot appears in the logo.",
    url: "https://argo-cd.readthedocs.io",
  },
  {
    id: "flux-cd",
    name: "Flux CD",
    abbr: "FLUX",
    category: "GitOps Tool",
    color: "#5468ff",
    description:
      "A set of GitOps tools that keep Kubernetes clusters in sync with sources like Git repos and Helm charts. It continuously pulls and applies changes for you.",
    highlights: [
      "GitOps for Kubernetes",
      "Automated Helm releases",
      "Auto-updating container images",
    ],
    funFact:
      "Flux was created at Weaveworks, the company that coined the term \"GitOps\" in 2017.",
    url: "https://fluxcd.io",
  },
  {
    id: "tekton",
    name: "Tekton",
    abbr: "TKN",
    category: "CI/CD Framework",
    color: "#fd495c",
    description:
      "An open-source framework for building CI/CD pipelines that run natively on Kubernetes. Each step runs in a container, defined with Kubernetes resources.",
    highlights: [
      "Kubernetes-native CI/CD",
      "Building custom pipeline platforms",
      "Reusable tasks from Tekton Hub",
    ],
    funFact:
      "Tekton grew out of the Knative project at Google, and its name comes from an ancient Greek word for a builder or carpenter.",
    url: "https://tekton.dev",
    spawnWeight: 0.5,
  },
  {
    id: "grafana",
    name: "Grafana",
    abbr: "GRAF",
    category: "Observability Dashboard",
    color: "#f46800",
    description:
      "An open-source tool for building dashboards that visualize metrics, logs and traces. It connects to many data sources like Prometheus, Loki and SQL databases.",
    highlights: [
      "Monitoring dashboards for servers",
      "Visualizing Prometheus metrics",
      "Alerting on graphs and thresholds",
    ],
    funFact:
      "Grafana started in 2014 as a fork of Kibana 3, created by Torkel Ödegaard to build better dashboards for Graphite metrics.",
    url: "https://grafana.com",
  },
  {
    id: "datadog",
    name: "Datadog",
    abbr: "DD",
    category: "Monitoring Platform",
    color: "#632ca6",
    description:
      "A cloud monitoring and analytics platform. It collects metrics, logs and traces from your servers and apps so you can see what’s happening in one place.",
    highlights: [
      "Cloud infrastructure monitoring",
      "Application performance tracing",
      "Log management and alerting",
    ],
    funFact:
      "Datadog’s purple dog mascot is named Bits — and the company was founded in New York by Olivier Pomel and Alexis Lê-Quôc.",
    url: "https://www.datadoghq.com",
  },
  {
    id: "new-relic",
    name: "New Relic",
    abbr: "NR",
    category: "Monitoring Platform",
    color: "#1ce783",
    description:
      "An observability platform that monitors how your applications perform. It shows slow requests, errors and resource usage so you can find problems fast.",
    highlights: [
      "Application performance monitoring",
      "Tracking errors and slow requests",
      "Infrastructure and browser monitoring",
    ],
    funFact:
      "\"New Relic\" is an anagram of the name of its founder, Lew Cirne.",
    url: "https://newrelic.com",
  },
  {
    id: "sentry",
    name: "Sentry",
    abbr: "SNTRY",
    category: "Error Monitoring",
    color: "#6c5fc7",
    description:
      "An error-tracking and performance-monitoring tool. When your app crashes or throws an error, Sentry captures the stack trace and context so you can fix it.",
    highlights: [
      "Catching errors in production",
      "Stack traces for front-end and back-end",
      "Performance and release monitoring",
    ],
    funFact:
      "Sentry began in 2008 as a small open-source Django plugin written by David Cramer to log exceptions in his own apps.",
    url: "https://sentry.io",
  },
  {
    id: "opentelemetry",
    name: "OpenTelemetry",
    abbr: "OTel",
    category: "Observability Standard",
    color: "#f5a800",
    description:
      "An open standard and set of tools for collecting traces, metrics and logs from your software. You instrument once and can send the data to any compatible backend.",
    highlights: [
      "Vendor-neutral app instrumentation",
      "Distributed tracing across services",
      "Sending telemetry to any backend",
    ],
    funFact:
      "OpenTelemetry was formed in 2019 by merging two rival projects, OpenTracing and OpenCensus, into one standard under the CNCF.",
    url: "https://opentelemetry.io",
  },
  {
    id: "jaeger",
    name: "Jaeger",
    abbr: "JGR",
    category: "Distributed Tracing",
    color: "#66cfe3",
    description:
      "An open-source distributed tracing system. It follows a single request as it hops between microservices so you can see where time is spent.",
    highlights: [
      "Tracing requests across microservices",
      "Finding performance bottlenecks",
      "Visualizing service dependencies",
    ],
    funFact:
      "Jaeger was built at Uber to trace its huge microservice architecture. \"Jäger\" is German for \"hunter\" — it hunts down slow requests.",
    url: "https://www.jaegertracing.io",
    spawnWeight: 0.5,
  },
  {
    id: "zipkin",
    name: "Zipkin",
    abbr: "ZIP",
    category: "Distributed Tracing",
    color: "#f05a28",
    description:
      "An open-source distributed tracing system that collects timing data from services. It helps you troubleshoot latency problems in microservice architectures.",
    highlights: [
      "Tracing latency in microservices",
      "Spring Boot and Java tracing",
      "Viewing request timelines",
    ],
    funFact:
      "Zipkin was created at Twitter and was based on Google’s Dapper paper, which described Google’s internal tracing system.",
    url: "https://zipkin.io",
    spawnWeight: 0.5,
  },
  {
    id: "loki",
    name: "Loki",
    abbr: "LOKI",
    category: "Log Aggregation",
    color: "#fbb03b",
    description:
      "A log aggregation system from Grafana Labs. It stores logs cheaply by indexing only labels (like app or pod name) rather than every word of every line.",
    highlights: [
      "Collecting logs from Kubernetes",
      "Searching logs in Grafana",
      "Cheap, large-scale log storage",
    ],
    funFact:
      "Loki is pitched as \"like Prometheus, but for logs\" — it uses the same label-based approach, so you can jump from a metric to its logs easily.",
    url: "https://grafana.com/oss/loki/",
  },
  {
    id: "elk-stack",
    name: "ELK Stack",
    abbr: "ELK",
    category: "Logging Stack",
    color: "#00bfb3",
    description:
      "A popular combination of Elasticsearch, Logstash and Kibana for collecting, storing, searching and visualizing logs. Together they form a full logging pipeline.",
    highlights: [
      "Centralized log management",
      "Searching and analyzing server logs",
      "Security and operations dashboards",
    ],
    funFact:
      "ELK stands for Elasticsearch, Logstash and Kibana. When Beats was added, the name was changed to the Elastic Stack rather than \"BELK\".",
    url: "https://www.elastic.co/elastic-stack",
  },
  {
    id: "graylog",
    name: "Graylog",
    abbr: "GL",
    category: "Log Management",
    color: "#ff3633",
    description:
      "A centralized log management platform. It collects logs from many servers and apps, then lets you search, analyze and alert on them through a web interface.",
    highlights: [
      "Centralized logging for servers",
      "Security event monitoring",
      "Alerting on log patterns",
    ],
    funFact:
      "Graylog introduced its own log format, GELF (Graylog Extended Log Format), which many other logging tools now support.",
    url: "https://graylog.org",
    spawnWeight: 0.5,
  },
  {
    id: "nginx",
    name: "Nginx",
    abbr: "NGX",
    category: "Web Server",
    color: "#009639",
    description:
      "A fast, lightweight web server that is also widely used as a reverse proxy and load balancer. It handles many simultaneous connections with little memory.",
    highlights: [
      "Serving static websites",
      "Reverse proxy in front of app servers",
      "Load balancing traffic",
    ],
    funFact:
      "Nginx is pronounced \"engine-x\". Igor Sysoev wrote it to solve the C10K problem — handling ten thousand connections at once on a single server.",
    url: "https://nginx.org",
  },
  {
    id: "apache-http-server",
    name: "Apache HTTP Server",
    abbr: "httpd",
    category: "Web Server",
    color: "#d22128",
    description:
      "One of the oldest and most widely used open-source web servers. It serves websites and can be extended with modules, and is often configured with .htaccess files.",
    highlights: [
      "Hosting PHP and WordPress sites",
      "The \"A\" in the LAMP stack",
      "Shared web hosting",
    ],
    funFact:
      "The Apache Software Foundation, home to hundreds of open-source projects, grew out of the group of developers who built this web server in the 1990s.",
    url: "https://httpd.apache.org",
  },
  {
    id: "caddy",
    name: "Caddy",
    abbr: "CDY",
    category: "Web Server",
    color: "#22b638",
    description:
      "A modern web server written in Go that sets up HTTPS for your sites automatically. Its config file is short and readable, making it beginner friendly.",
    highlights: [
      "Automatic HTTPS certificates",
      "Simple reverse proxy setups",
      "Serving static sites quickly",
    ],
    funFact:
      "Caddy was the first web server to enable HTTPS by default, automatically getting and renewing certificates from Let’s Encrypt.",
    url: "https://caddyserver.com",
  },
  {
    id: "traefik",
    name: "Traefik",
    abbr: "TRFK",
    category: "Reverse Proxy",
    color: "#24a1c1",
    description:
      "A cloud-native reverse proxy and load balancer that configures itself by discovering your services in Docker or Kubernetes. Routes update as containers come and go.",
    highlights: [
      "Routing traffic to Docker containers",
      "Kubernetes ingress controller",
      "Automatic HTTPS with Let’s Encrypt",
    ],
    funFact:
      "Traefik is pronounced \"traffic\" — appropriate for a tool whose whole job is directing it. Its mascot is a gopher, a nod to Go.",
    url: "https://traefik.io",
  },
  {
    id: "haproxy",
    name: "HAProxy",
    abbr: "HAP",
    category: "Load Balancer",
    color: "#106da9",
    description:
      "A fast, reliable open-source load balancer and proxy for TCP and HTTP traffic. It spreads requests across many servers to keep websites up under heavy load.",
    highlights: [
      "Load balancing web traffic",
      "High-availability setups",
      "TLS termination in front of apps",
    ],
    funFact:
      "HAProxy stands for High Availability Proxy. Its creator, Willy Tarreau, also maintained the Linux 2.4 kernel branch for years.",
    url: "https://www.haproxy.org",
  },
  {
    id: "envoy",
    name: "Envoy",
    abbr: "ENVY",
    category: "Service Proxy",
    color: "#ac6199",
    description:
      "A high-performance proxy written in C++ designed for microservices. It handles routing, retries, load balancing and observability for traffic between services.",
    highlights: [
      "Data plane for service meshes like Istio",
      "API gateways and edge proxies",
      "Observability of service traffic",
    ],
    funFact:
      "Envoy was built at Lyft and became the third project to graduate from the CNCF, after Kubernetes and Prometheus.",
    url: "https://www.envoyproxy.io",
  },
  {
    id: "litespeed",
    name: "LiteSpeed",
    abbr: "LS",
    category: "Web Server",
    color: "#0d9ad7",
    description:
      "A high-performance web server designed as a drop-in replacement for Apache. It reads Apache config and .htaccess files while serving pages faster.",
    highlights: [
      "Fast WordPress hosting",
      "Shared hosting providers",
      "Built-in page caching with LSCache",
    ],
    funFact:
      "LiteSpeed understands Apache’s .htaccess rules, so many web hosts can swap Apache out for it without customers changing anything.",
    url: "https://www.litespeedtech.com",
    spawnWeight: 0.5,
  },
  {
    id: "openresty",
    name: "OpenResty",
    abbr: "OR",
    category: "Web Platform",
    color: "#46a046",
    description:
      "A web platform that bundles Nginx with LuaJIT, letting you write Lua scripts that run inside the web server. Great for building fast gateways and custom logic.",
    highlights: [
      "Scriptable API gateways",
      "Custom request handling in Lua",
      "Foundation for Kong gateway",
    ],
    funFact:
      "OpenResty was created by Yichun Zhang (\"agentzh\"), and the popular Kong API gateway is built on top of it.",
    url: "https://openresty.org",
    spawnWeight: 0.5,
  },
  {
    id: "vmware",
    name: "VMware",
    abbr: "VMW",
    category: "Virtualization Platform",
    color: "#0091da",
    description:
      "A company and family of products for virtualization — running many virtual machines on one physical server. Its vSphere/ESXi platform powers many data centers.",
    highlights: [
      "Running VMs in corporate data centers",
      "Desktop VMs with Workstation and Fusion",
      "Server consolidation",
    ],
    funFact:
      "VMware was founded in 1998 and helped popularize x86 virtualization. Broadcom completed its acquisition of the company in 2023.",
    url: "https://www.vmware.com",
  },
  {
    id: "virtualbox",
    name: "VirtualBox",
    abbr: "VBOX",
    category: "Hypervisor",
    color: "#2f61b4",
    description:
      "A free, open-source program for running virtual machines on your desktop. You can run Linux inside Windows, or Windows inside macOS, in a window.",
    highlights: [
      "Trying other operating systems safely",
      "Local dev and test VMs",
      "Learning Linux on any computer",
    ],
    funFact:
      "VirtualBox was created by the German company innotek, bought by Sun Microsystems in 2008, and became Oracle’s when Oracle acquired Sun.",
    url: "https://www.virtualbox.org",
  },
  {
    id: "hyper-v",
    name: "Hyper-V",
    abbr: "HV",
    category: "Hypervisor",
    color: "#0078d4",
    description:
      "Microsoft’s hypervisor for running virtual machines on Windows and Windows Server. It runs directly on the hardware for good performance.",
    highlights: [
      "Virtual machines on Windows",
      "Windows Server virtualization",
      "Powering WSL 2 and Windows Sandbox",
    ],
    funFact:
      "WSL 2, which runs a real Linux kernel on Windows, actually works by using a lightweight Hyper-V virtual machine behind the scenes.",
    url: "https://learn.microsoft.com/en-us/virtualization/hyper-v-on-windows/",
  },
  {
    id: "kvm",
    name: "KVM",
    abbr: "KVM",
    category: "Hypervisor",
    color: "#ff6600",
    description:
      "Kernel-based Virtual Machine: a feature built into the Linux kernel that turns Linux itself into a hypervisor, so it can run many virtual machines.",
    highlights: [
      "Linux virtualization",
      "Running cloud VMs at scale",
      "Pairs with QEMU and libvirt",
    ],
    funFact:
      "KVM was merged into the Linux kernel in 2007 (version 2.6.20). Today many public cloud VMs, including newer AWS EC2 instances, run on KVM-based hypervisors.",
    url: "https://linux-kvm.org",
  },
  {
    id: "xen",
    name: "Xen",
    abbr: "XEN",
    category: "Hypervisor",
    color: "#f39c12",
    description:
      "An open-source type-1 hypervisor that runs directly on hardware and hosts multiple virtual machines. It is known for strong isolation and security.",
    highlights: [
      "Cloud server virtualization",
      "Security-focused OSes like Qubes OS",
      "Embedded and automotive systems",
    ],
    funFact:
      "Xen was born as a research project at the University of Cambridge, and Amazon EC2 originally ran its virtual machines on Xen.",
    url: "https://xenproject.org",
    spawnWeight: 0.5,
  },
  {
    id: "proxmox",
    name: "Proxmox",
    abbr: "PVE",
    category: "Virtualization Platform",
    color: "#e57000",
    description:
      "Proxmox VE is an open-source platform for managing virtual machines and containers through a web interface. It combines KVM and LXC on a Debian base.",
    highlights: [
      "Homelab virtualization",
      "Managing VMs and containers in one UI",
      "Small business server clusters",
    ],
    funFact:
      "Proxmox VE is made by an Austrian company based in Vienna, and it became a homelab favorite as a free alternative to VMware.",
    url: "https://www.proxmox.com",
  },
  {
    id: "qemu",
    name: "QEMU",
    abbr: "QEMU",
    category: "Emulator",
    color: "#f26522",
    description:
      "A free, open-source machine emulator and virtualizer. It can emulate other CPU types (like running ARM software on x86) or run fast VMs together with KVM.",
    highlights: [
      "Emulating other CPU architectures",
      "Running VMs with KVM",
      "Testing OSes and embedded software",
    ],
    funFact:
      "QEMU stands for \"Quick EMUlator\". It was created by Fabrice Bellard, who also started FFmpeg.",
    url: "https://www.qemu.org",
  },
];

export default entries;
