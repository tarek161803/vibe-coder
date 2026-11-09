import type { CatalogEntry } from "../types";

/** Specialized Computer Science Fields */
const entries: CatalogEntry[] = [
  {
    id: "bioinformatics",
    name: "Bioinformatics",
    abbr: "BIO",
    category: "Scientific Field",
    color: "#2e9e5b",
    description:
      "The field that uses computers and algorithms to understand biological data like DNA, RNA and proteins. It helps scientists compare genes, find mutations and study diseases.",
    highlights: [
      "Analyzing DNA sequencing data",
      "Comparing genes across species",
      "Drug discovery and disease research",
    ],
    funFact:
      "The Human Genome Project, completed in 2003, would have been impossible without bioinformatics to assemble billions of DNA letters into a genome.",
    url: "https://en.wikipedia.org/wiki/Bioinformatics",
  },
  {
    id: "blast",
    name: "BLAST",
    abbr: "BLAST",
    category: "Bioinformatics Tool",
    color: "#205493",
    description:
      "Basic Local Alignment Search Tool, a program that searches huge databases for DNA or protein sequences similar to yours. It's like a search engine for genetic sequences.",
    highlights: [
      "Finding similar DNA sequences",
      "Identifying unknown genes or proteins",
      "Comparing sequences across species",
    ],
    funFact:
      "The 1990 paper introducing BLAST is one of the most cited scientific papers of all time.",
    url: "https://blast.ncbi.nlm.nih.gov/",
    spawnWeight: 0.5,
  },
  {
    id: "biopython",
    name: "Biopython",
    abbr: "BioPy",
    category: "Python Library",
    color: "#3776ab",
    description:
      "A free collection of Python tools for computational biology. It reads common file formats like FASTA and GenBank, manipulates sequences and talks to online databases like NCBI.",
    highlights: [
      "Parsing FASTA and GenBank files",
      "Working with DNA and protein sequences",
      "Querying NCBI databases from Python",
    ],
    funFact:
      "Biopython has been around since 1999, making it older than many of the Python libraries that are famous today.",
    url: "https://biopython.org/",
    spawnWeight: 0.5,
  },
  {
    id: "bioconductor",
    name: "Bioconductor",
    abbr: "BIOC",
    category: "R Package Ecosystem",
    color: "#1a81c2",
    description:
      "A large open-source collection of R packages for analyzing genomic and biological data. Researchers use it for tasks like measuring gene activity and analyzing sequencing experiments.",
    highlights: [
      "Gene expression analysis in R",
      "RNA-seq and genomics workflows",
      "Statistical biology research",
    ],
    funFact:
      "Bioconductor hosts thousands of R packages and releases new versions twice a year, in sync with R's release cycle.",
    url: "https://www.bioconductor.org/",
    spawnWeight: 0.5,
  },
  {
    id: "quantum-computing",
    name: "Quantum Computing",
    abbr: "QC",
    category: "Computing Paradigm",
    color: "#7b2ff7",
    description:
      "A type of computing that uses qubits, which can be in a mix of 0 and 1 at once, plus effects like entanglement. For certain problems, quantum computers could vastly outperform normal ones.",
    highlights: [
      "Simulating molecules and materials",
      "Breaking or rethinking cryptography",
      "Optimization and research problems",
    ],
    funFact:
      "Shor's algorithm (1994) showed a large enough quantum computer could factor big numbers quickly, threatening the RSA encryption used across the internet.",
    url: "https://en.wikipedia.org/wiki/Quantum_computing",
  },
  {
    id: "qiskit",
    name: "Qiskit",
    abbr: "QK",
    category: "Quantum SDK",
    color: "#6929c4",
    description:
      "IBM's open-source Python SDK for building quantum circuits and running them on simulators or real IBM quantum computers in the cloud.",
    highlights: [
      "Writing quantum circuits in Python",
      "Running jobs on IBM quantum hardware",
      "Learning quantum computing",
    ],
    funFact:
      "With Qiskit, anyone with an IBM account can run a program on a real quantum computer over the cloud — IBM first opened access in 2016.",
    url: "https://www.ibm.com/quantum/qiskit",
  },
  {
    id: "cirq",
    name: "Cirq",
    abbr: "Cirq",
    category: "Quantum SDK",
    color: "#4285f4",
    description:
      "Google's open-source Python framework for writing, simulating and optimizing quantum circuits, with a focus on today's noisy, near-term quantum hardware.",
    highlights: [
      "Designing quantum circuits in Python",
      "Simulating noisy quantum hardware",
      "Google Quantum AI research",
    ],
    funFact:
      "Cirq is built for NISQ devices — \"Noisy Intermediate-Scale Quantum\" computers, a term coined by physicist John Preskill.",
    url: "https://quantumai.google/cirq",
    spawnWeight: 0.5,
  },
  {
    id: "qsharp",
    name: "Q#",
    abbr: "Q#",
    category: "Programming Language",
    color: "#5c2d91",
    description:
      "Microsoft's programming language for writing quantum algorithms. It's part of the Azure Quantum Development Kit and lets you simulate programs or run them on quantum hardware.",
    highlights: [
      "Writing quantum algorithms",
      "Azure Quantum programs",
      "Resource estimation for quantum apps",
    ],
    funFact:
      "Q# is pronounced \"Q sharp,\" following the naming tradition of Microsoft's C# and F#.",
    url: "https://learn.microsoft.com/en-us/azure/quantum/",
    spawnWeight: 0.5,
  },
  {
    id: "pennylane",
    name: "PennyLane",
    abbr: "PL",
    category: "Quantum ML Library",
    color: "#e24a8d",
    description:
      "A Python library for quantum machine learning and differentiable quantum programming. It connects quantum circuits to tools like PyTorch and JAX so you can train them like neural networks.",
    highlights: [
      "Quantum machine learning",
      "Training variational quantum circuits",
      "Hardware-agnostic quantum programs",
    ],
    funFact:
      "PennyLane is made by Xanadu, a Canadian company building photonic quantum computers that compute with particles of light.",
    url: "https://pennylane.ai/",
    spawnWeight: 0.5,
  },
  {
    id: "scientific-computing",
    name: "Scientific Computing",
    abbr: "SCI",
    category: "Computing Field",
    color: "#0277bd",
    description:
      "Using computers to model and solve scientific and engineering problems, often with numerical methods and large simulations. Think weather forecasts, physics simulations and data analysis.",
    highlights: [
      "Weather and climate simulations",
      "Physics and engineering models",
      "Large-scale numerical analysis",
    ],
    funFact:
      "Some of the very first electronic computers, like ENIAC, were used for scientific number-crunching such as artillery tables and weather prediction.",
    url: "https://en.wikipedia.org/wiki/Computational_science",
  },
  {
    id: "matlab",
    name: "MATLAB",
    abbr: "MAT",
    category: "Numerical Computing",
    color: "#e16737",
    description:
      "A commercial programming environment built around matrices, used heavily by engineers and scientists. It's great for math, signal processing, simulations and plotting data.",
    highlights: [
      "Engineering and signal processing",
      "Control systems with Simulink",
      "University math and science courses",
    ],
    funFact:
      "MATLAB's name stands for \"MATrix LABoratory\" — it started as a simple tool so students could use matrix libraries without writing Fortran.",
    url: "https://www.mathworks.com/products/matlab.html",
  },
  {
    id: "numpy",
    name: "NumPy",
    abbr: "NP",
    category: "Python Library",
    color: "#4dabcf",
    description:
      "The core Python library for fast numerical computing with multi-dimensional arrays. Almost every data science and machine learning tool in Python is built on top of it.",
    highlights: [
      "Fast array and matrix math",
      "Foundation of pandas and scikit-learn",
      "Scientific data processing",
    ],
    funFact:
      "NumPy was used in the pipeline that produced the first-ever image of a black hole in 2019.",
    url: "https://numpy.org/",
  },
  {
    id: "scipy",
    name: "SciPy",
    abbr: "SciPy",
    category: "Python Library",
    color: "#0054a6",
    description:
      "A Python library built on NumPy that adds scientific algorithms for optimization, statistics, signal processing, integration and more. It's a staple toolkit for researchers.",
    highlights: [
      "Optimization and curve fitting",
      "Statistics and signal processing",
      "Scientific research in Python",
    ],
    funFact:
      "SciPy was used by the LIGO team in the analysis that detected gravitational waves for the first time.",
    url: "https://scipy.org/",
  },
  {
    id: "geographic-information-systems",
    name: "Geographic Information Systems",
    abbr: "GIS",
    category: "Spatial Data Field",
    color: "#2e7d32",
    description:
      "Systems for capturing, storing, analyzing and displaying data tied to locations on Earth. GIS powers maps, route planning, urban planning and environmental studies.",
    highlights: [
      "Mapping and spatial analysis",
      "Urban planning and logistics",
      "Environmental and climate studies",
    ],
    funFact:
      "Roger Tomlinson is often called the \"father of GIS\" for building the Canada Geographic Information System in the 1960s.",
    url: "https://en.wikipedia.org/wiki/Geographic_information_system",
  },
  {
    id: "postgis",
    name: "PostGIS",
    abbr: "PGIS",
    category: "Spatial Database",
    color: "#336791",
    description:
      "An extension that turns PostgreSQL into a spatial database. It adds geometry types and functions so you can query things like \"which stores are within 5 km of me?\" in SQL.",
    highlights: [
      "Location queries in SQL",
      "Storing points, lines and polygons",
      "Backend for mapping apps",
    ],
    funFact:
      "PostGIS's spatial function names start with ST_, like ST_Distance — the prefix comes from the SQL/MM spatial standard.",
    url: "https://postgis.net/",
  },
  {
    id: "qgis",
    name: "QGIS",
    abbr: "QGIS",
    category: "GIS Software",
    color: "#589632",
    description:
      "A free, open-source desktop app for viewing, editing and analyzing maps and geographic data. It's a popular alternative to expensive commercial GIS software.",
    highlights: [
      "Making and editing maps",
      "Analyzing geographic data",
      "Python plug-ins and automation",
    ],
    funFact:
      "QGIS used to be called Quantum GIS — but it has nothing to do with quantum physics; the name was later shortened to QGIS.",
    url: "https://qgis.org/",
  },
  {
    id: "gdal",
    name: "GDAL",
    abbr: "GDAL",
    category: "Geospatial Library",
    color: "#5cae58",
    description:
      "The Geospatial Data Abstraction Library, a toolkit for reading, writing and converting hundreds of map and satellite data formats. Most GIS software uses it under the hood.",
    highlights: [
      "Converting geospatial file formats",
      "Processing satellite imagery",
      "Powering QGIS and other GIS tools",
    ],
    funFact:
      "GDAL is so widespread that it quietly powers tools like QGIS, PostGIS raster support and many Python geospatial libraries.",
    url: "https://gdal.org/",
    spawnWeight: 0.5,
  },
  {
    id: "yolo",
    name: "YOLO",
    abbr: "YOLO",
    category: "Object Detection Model",
    color: "#00b4d8",
    description:
      "A family of fast object-detection models that find and label objects in images in a single pass. It's fast enough to detect people, cars and more in real-time video.",
    highlights: [
      "Real-time object detection",
      "Security cameras and robotics",
      "Self-driving and traffic analysis",
    ],
    funFact:
      "YOLO stands for \"You Only Look Once,\" because the model looks at the whole image just once to predict all objects at the same time.",
    url: "https://en.wikipedia.org/wiki/You_Only_Look_Once",
  },
  {
    id: "detectron2",
    name: "Detectron2",
    abbr: "D2",
    category: "Computer Vision Library",
    color: "#0668e1",
    description:
      "Meta AI's open-source library for object detection and segmentation, built on PyTorch. It provides ready-made models that can outline and label objects in images.",
    highlights: [
      "Object detection research",
      "Instance segmentation",
      "Keypoint and pose detection",
    ],
    funFact:
      "Detectron2 is a complete rewrite of the original Detectron, which was built on the Caffe2 framework before Meta moved to PyTorch.",
    url: "https://github.com/facebookresearch/detectron2",
    spawnWeight: 0.5,
  },
  {
    id: "natural-language-processing",
    name: "Natural Language Processing",
    abbr: "NLP",
    category: "AI Field",
    color: "#ff6f61",
    description:
      "The area of AI that helps computers understand, generate and work with human language. It powers translation, chatbots, spam filters and voice assistants.",
    highlights: [
      "Chatbots and language models",
      "Machine translation",
      "Sentiment analysis and search",
    ],
    funFact:
      "ELIZA, a 1960s program by Joseph Weizenbaum, imitated a therapist using simple pattern matching — and some users still felt it understood them.",
    url: "https://en.wikipedia.org/wiki/Natural_language_processing",
  },
  {
    id: "spacy",
    name: "spaCy",
    abbr: "spaCy",
    category: "NLP Library",
    color: "#09a3d5",
    description:
      "A fast, production-focused Python library for natural language processing. It handles tasks like tokenizing text, tagging parts of speech and finding names of people and places.",
    highlights: [
      "Named entity recognition",
      "Text processing pipelines",
      "Production NLP in Python",
    ],
    funFact:
      "spaCy is made by Explosion, the same team behind Prodigy, a tool for quickly labeling training data.",
    url: "https://spacy.io/",
  },
  {
    id: "nltk",
    name: "NLTK",
    abbr: "NLTK",
    category: "NLP Library",
    color: "#2b7a78",
    description:
      "The Natural Language Toolkit, a classic Python library for working with human language. It includes tokenizers, taggers, parsers and many text datasets, and is widely used for teaching.",
    highlights: [
      "Learning NLP in Python",
      "Tokenizing and tagging text",
      "Access to text corpora and datasets",
    ],
    funFact:
      "NLTK comes with a free companion book, \"Natural Language Processing with Python,\" which taught a whole generation of students NLP.",
    url: "https://www.nltk.org/",
  },
  {
    id: "tensorflow-recommenders",
    name: "TensorFlow Recommenders",
    abbr: "TFRS",
    category: "Recommender Library",
    color: "#ff6f00",
    description:
      "A TensorFlow library for building recommendation systems — the models that suggest movies, products or songs. It covers both finding candidates and ranking them.",
    highlights: [
      "Product and content recommendations",
      "Retrieval and ranking models",
      "Personalization with TensorFlow",
    ],
    funFact:
      "Many recommenders use a \"two-tower\" design: one network represents users, another represents items, and matching them finds good suggestions.",
    url: "https://www.tensorflow.org/recommenders",
    spawnWeight: 0.5,
  },
  {
    id: "surprise",
    name: "Surprise",
    abbr: "SUR",
    category: "Recommender Library",
    color: "#f4a261",
    description:
      "A Python scikit for building and testing recommender systems using rating data. It includes classic algorithms like SVD and k-nearest neighbors for predicting ratings.",
    highlights: [
      "Rating prediction experiments",
      "Collaborative filtering",
      "Learning recommender algorithms",
    ],
    funFact:
      "Surprise's name is an acronym: Simple Python RecommendatIon System Engine.",
    url: "https://surpriselib.com/",
    spawnWeight: 0.5,
  },
  {
    id: "digital-forensics",
    name: "Digital Forensics",
    abbr: "DF",
    category: "Security Field",
    color: "#455a9e",
    description:
      "The practice of collecting and analyzing data from computers, phones and networks as evidence. Investigators recover deleted files and reconstruct what happened during an incident.",
    highlights: [
      "Criminal investigations",
      "Incident response after hacks",
      "Recovering deleted data",
    ],
    funFact:
      "Forensic investigators work on exact copies (images) of disks, not the originals, so the evidence stays untouched and admissible.",
    url: "https://en.wikipedia.org/wiki/Digital_forensics",
  },
  {
    id: "autopsy",
    name: "Autopsy",
    abbr: "AUT",
    category: "Forensics Tool",
    color: "#5d4ea8",
    description:
      "A free, open-source digital forensics platform with a graphical interface. Investigators use it to analyze disk images, recover deleted files and build timelines of activity.",
    highlights: [
      "Analyzing disk images",
      "Recovering deleted files",
      "Building activity timelines",
    ],
    funFact:
      "Autopsy is the graphical front end for The Sleuth Kit, and both were created by forensics expert Brian Carrier.",
    url: "https://www.autopsy.com/",
    spawnWeight: 0.5,
  },
  {
    id: "volatility",
    name: "Volatility",
    abbr: "VOL",
    category: "Forensics Tool",
    color: "#b23a48",
    description:
      "An open-source framework for memory forensics. It analyzes RAM dumps to reveal running processes, network connections and hidden malware at the moment memory was captured.",
    highlights: [
      "Analyzing RAM dumps",
      "Detecting hidden malware",
      "Incident response investigations",
    ],
    funFact:
      "Memory forensics matters because some malware lives only in RAM and never touches the disk — once the power goes off, the evidence is gone.",
    url: "https://volatilityfoundation.org/",
    spawnWeight: 0.5,
  },
  {
    id: "sleuth-kit",
    name: "Sleuth Kit",
    abbr: "TSK",
    category: "Forensics Toolkit",
    color: "#6d4c41",
    description:
      "The Sleuth Kit is a collection of command-line tools for investigating disk images and file systems. It can list files, recover deleted data and inspect low-level file system details.",
    highlights: [
      "File system analysis",
      "Recovering deleted files",
      "Engine behind Autopsy",
    ],
    funFact:
      "The Sleuth Kit grew out of The Coroner's Toolkit, an earlier forensics toolset — keeping the investigation-themed naming alive.",
    url: "https://github.com/sleuthkit/sleuthkit",
    spawnWeight: 0.5,
  },
  {
    id: "high-performance-computing",
    name: "High-Performance Computing",
    abbr: "HPC",
    category: "Computing Field",
    color: "#1565c0",
    description:
      "Using supercomputers and large clusters of machines working in parallel to solve huge problems fast. It's used for simulations and computations too big for a normal computer.",
    highlights: [
      "Climate and weather modeling",
      "Physics and molecular simulations",
      "Training huge AI models",
    ],
    funFact:
      "The TOP500 list has ranked the world's fastest supercomputers twice a year since 1993.",
    url: "https://en.wikipedia.org/wiki/High-performance_computing",
  },
  {
    id: "mpi",
    name: "MPI",
    abbr: "MPI",
    category: "Parallel Computing API",
    color: "#00838f",
    description:
      "The Message Passing Interface, a standard for programs running on many computers to cooperate by sending messages to each other. It's the backbone of most supercomputer software.",
    highlights: [
      "Parallel programs on clusters",
      "Supercomputer simulations",
      "Distributed scientific computing",
    ],
    funFact:
      "The first MPI standard was released in 1994, and MPI-based code still runs on today's top supercomputers.",
    url: "https://www.mpi-forum.org/",
    spawnWeight: 0.5,
  },
  {
    id: "openmp",
    name: "OpenMP",
    abbr: "OMP",
    category: "Parallel Computing API",
    color: "#2a6f97",
    description:
      "An API for running code in parallel across the CPU cores of one machine in C, C++ and Fortran. Often you just add a compiler directive above a loop to split it across threads.",
    highlights: [
      "Parallelizing loops on multicore CPUs",
      "Scientific C, C++ and Fortran code",
      "Speeding up numerical programs",
    ],
    funFact:
      "Adding a single line like #pragma omp parallel for above a loop can spread its work across all your CPU cores.",
    url: "https://www.openmp.org/",
    spawnWeight: 0.5,
  },
  {
    id: "edge-computing",
    name: "Edge Computing",
    abbr: "EDGE",
    category: "Computing Paradigm",
    color: "#00a86b",
    description:
      "Processing data close to where it's created — on devices, gateways or nearby servers — instead of sending everything to a distant cloud. This cuts delay and saves bandwidth.",
    highlights: [
      "IoT devices and smart factories",
      "Low-latency apps and CDNs",
      "Processing video on cameras",
    ],
    funFact:
      "Content delivery networks were an early form of edge computing — they cache websites on servers near users so pages load faster.",
    url: "https://en.wikipedia.org/wiki/Edge_computing",
  },
  {
    id: "k3s",
    name: "K3s",
    abbr: "K3s",
    category: "Kubernetes Distribution",
    color: "#ffc61c",
    description:
      "A lightweight, certified Kubernetes distribution packaged as a single small binary. It's designed for edge devices, IoT, small servers and even Raspberry Pis.",
    highlights: [
      "Kubernetes on edge devices",
      "Raspberry Pi clusters",
      "Lightweight dev and CI clusters",
    ],
    funFact:
      "K8s has 8 letters between K and s in \"Kubernetes\"; K3s is meant to be half as big, so it's a 5-letter word written as K3s.",
    url: "https://k3s.io/",
    spawnWeight: 0.5,
  },
  {
    id: "kubeedge",
    name: "KubeEdge",
    abbr: "KE",
    category: "Edge Platform",
    color: "#2b6ee0",
    description:
      "An open-source system that extends Kubernetes to edge devices. It lets you manage apps running on remote edge nodes from a cloud cluster, even with unreliable connections.",
    highlights: [
      "Managing apps on edge nodes",
      "IoT device management",
      "Cloud-to-edge orchestration",
    ],
    funFact:
      "KubeEdge is a CNCF project that lets edge nodes keep running even when their connection to the cloud drops for a while.",
    url: "https://kubeedge.io/",
    spawnWeight: 0.5,
  },
  {
    id: "aws-greengrass",
    name: "AWS Greengrass",
    abbr: "AGG",
    category: "IoT Edge Runtime",
    color: "#7aa116",
    description:
      "AWS IoT Greengrass is software that runs on edge devices so they can process data locally, run ML models and sync with AWS cloud services when connected.",
    highlights: [
      "Local processing on IoT devices",
      "Running ML at the edge",
      "Syncing device data with AWS",
    ],
    funFact:
      "Greengrass lets devices keep working offline — they process data locally and catch up with the AWS cloud once they reconnect.",
    url: "https://aws.amazon.com/greengrass/",
    spawnWeight: 0.5,
  },
  {
    id: "knowledge-graphs",
    name: "Knowledge Graphs",
    abbr: "KG",
    category: "Data Modeling Concept",
    color: "#8e44ad",
    description:
      "A way of storing facts as a network of things (nodes) and how they relate (edges), like \"Paris — is capital of — France.\" It helps computers connect and reason over information.",
    highlights: [
      "Search engine info boxes",
      "Recommendation and question answering",
      "Linking data across sources",
    ],
    funFact:
      "Google popularized the term in 2012 when it launched its Knowledge Graph, the source of those fact panels next to search results.",
    url: "https://en.wikipedia.org/wiki/Knowledge_graph",
  },
  {
    id: "rdf",
    name: "RDF",
    abbr: "RDF",
    category: "Data Model Standard",
    color: "#0c479d",
    description:
      "Resource Description Framework, a W3C standard for describing data as simple statements of subject, predicate and object. It's a foundation of the Semantic Web and linked data.",
    highlights: [
      "Linked data on the web",
      "Knowledge graphs like Wikidata",
      "Querying with SPARQL",
    ],
    funFact:
      "Every RDF fact is a \"triple\" — subject, predicate, object — so databases built for RDF are often called triplestores.",
    url: "https://www.w3.org/RDF/",
    spawnWeight: 0.5,
  },
  {
    id: "owl",
    name: "OWL",
    abbr: "OWL",
    category: "Ontology Language",
    color: "#a0522d",
    description:
      "The Web Ontology Language, a W3C standard for defining concepts, categories and the rules between them. It lets software reason about data, like inferring that every cat is a mammal.",
    highlights: [
      "Building ontologies",
      "Biomedical and scientific vocabularies",
      "Automated reasoning over data",
    ],
    funFact:
      "It's called OWL, not WOL — a playful choice often linked to the owl in Winnie-the-Pooh, who spells his own name \"WOL.\"",
    url: "https://www.w3.org/OWL/",
    spawnWeight: 0.5,
  },
  {
    id: "accessibility-technology",
    name: "Accessibility Technology",
    abbr: "A11y",
    category: "Assistive Tech Field",
    color: "#1976d2",
    description:
      "Tools and techniques that help people with disabilities use computers and the web, like screen readers, captions, voice control and switch devices. It also covers designing software to work with them.",
    highlights: [
      "Screen readers and voice control",
      "Captions and alt text",
      "Accessible web and app design",
    ],
    funFact:
      "\"a11y\" is a numeronym: there are 11 letters between the \"a\" and the \"y\" in \"accessibility.\"",
    url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility",
  },
  {
    id: "aria",
    name: "ARIA",
    abbr: "ARIA",
    category: "Web Accessibility Spec",
    color: "#005a9c",
    description:
      "Accessible Rich Internet Applications, a set of HTML attributes like role and aria-label that describe custom widgets to assistive technology such as screen readers.",
    highlights: [
      "Labeling custom UI widgets",
      "Making dynamic content accessible",
      "Live regions for screen readers",
    ],
    funFact:
      "The first rule of ARIA is famously: don't use ARIA if a native HTML element already does the job — a real <button> beats a div with role=\"button\".",
    url: "https://developer.mozilla.org/en-US/docs/Web/Accessibility/ARIA",
  },
  {
    id: "screen-readers",
    name: "Screen Readers",
    abbr: "SR",
    category: "Assistive Technology",
    color: "#00897b",
    description:
      "Software that reads what's on screen aloud or sends it to a braille display, so blind and low-vision people can use computers. Popular ones include NVDA, JAWS and VoiceOver.",
    highlights: [
      "Testing website accessibility",
      "VoiceOver on iPhone and Mac",
      "NVDA and JAWS on Windows",
    ],
    funFact:
      "Experienced screen reader users often listen at very high speech rates — speeds that sound like a blur to newcomers.",
    url: "https://en.wikipedia.org/wiki/Screen_reader",
  },
  {
    id: "scientific-visualization",
    name: "Scientific Visualization",
    abbr: "SV",
    category: "Visualization Field",
    color: "#e65100",
    description:
      "Turning scientific data — like simulations, scans or measurements — into images and animations so researchers can see patterns. It often deals with 3D data and very large datasets.",
    highlights: [
      "Visualizing simulation results",
      "Medical imaging like MRI scans",
      "Fluid flow and climate data",
    ],
    funFact:
      "The famous 2019 black hole image came from combining data from radio telescopes around the world into a single picture.",
    url: "https://en.wikipedia.org/wiki/Scientific_visualization",
  },
  {
    id: "paraview",
    name: "ParaView",
    abbr: "PV",
    category: "Visualization Tool",
    color: "#3f51b5",
    description:
      "An open-source app for visualizing and analyzing huge scientific datasets, from desktop to supercomputers. It's built on VTK and can be scripted with Python.",
    highlights: [
      "Visualizing simulation output",
      "Parallel rendering on clusters",
      "Python-scripted analysis",
    ],
    funFact:
      "ParaView was built for data so large it can't fit on one machine — it can split the work across many nodes of a supercomputer.",
    url: "https://www.paraview.org/",
    spawnWeight: 0.5,
  },
  {
    id: "vtk",
    name: "VTK",
    abbr: "VTK",
    category: "Visualization Library",
    color: "#d32f2f",
    description:
      "The Visualization Toolkit, an open-source C++ library (with Python bindings) for 3D graphics, image processing and scientific visualization. Many science and medical tools are built on it.",
    highlights: [
      "3D scientific visualization",
      "Medical imaging software",
      "Foundation of ParaView and 3D Slicer",
    ],
    funFact:
      "VTK is developed by Kitware, the same company behind CMake, ParaView and other open-source tools.",
    url: "https://vtk.org/",
    spawnWeight: 0.5,
  },
  {
    id: "visit",
    name: "VisIt",
    abbr: "VisIt",
    category: "Visualization Tool",
    color: "#00796b",
    description:
      "An open-source tool for visualizing and analyzing very large scientific simulation data. It runs in parallel on supercomputers and can display data across many file formats.",
    highlights: [
      "Visualizing supercomputer simulations",
      "Parallel data analysis",
      "National lab research",
    ],
    funFact:
      "VisIt was developed at Lawrence Livermore National Laboratory to handle the massive simulation data produced by its supercomputers.",
    url: "https://visit-dav.github.io/visit-website/",
    spawnWeight: 0.5,
  },
  {
    id: "digital-twins",
    name: "Digital Twins",
    abbr: "DT",
    category: "Simulation Concept",
    color: "#00acc1",
    description:
      "A virtual copy of a real object, machine, building or process that updates with live data from sensors. Engineers use it to monitor, test and predict behavior without touching the real thing.",
    highlights: [
      "Monitoring factories and machines",
      "Smart buildings and cities",
      "Predictive maintenance",
    ],
    funFact:
      "NASA used a similar idea in the Apollo era, keeping matching systems on the ground to simulate and troubleshoot spacecraft problems — famously during Apollo 13.",
    url: "https://en.wikipedia.org/wiki/Digital_twin",
  },
  {
    id: "nvidia-omniverse",
    name: "NVIDIA Omniverse",
    abbr: "OV",
    category: "3D Simulation Platform",
    color: "#76b900",
    description:
      "NVIDIA's platform for building and connecting 3D tools, simulations and digital twins. It's built around OpenUSD so different 3D apps can share and collaborate on the same scene.",
    highlights: [
      "Industrial digital twins",
      "Collaborative 3D workflows",
      "Robotics and physics simulation",
    ],
    funFact:
      "Omniverse is built on Universal Scene Description (USD), a 3D scene format originally created by Pixar for making animated films.",
    url: "https://www.nvidia.com/en-us/omniverse/",
    spawnWeight: 0.5,
  },
  {
    id: "azure-digital-twins",
    name: "Azure Digital Twins",
    abbr: "ADT",
    category: "Digital Twin Service",
    color: "#0078d4",
    description:
      "A Microsoft Azure service for building digital models of real environments like buildings, factories or cities. It connects IoT data to a graph of rooms, devices and their relationships.",
    highlights: [
      "Smart building models",
      "Connecting IoT data to spaces",
      "Factory and city digital twins",
    ],
    funFact:
      "Azure Digital Twins describes environments using DTDL, the Digital Twins Definition Language, which is based on JSON-LD.",
    url: "https://azure.microsoft.com/en-us/products/digital-twins/",
    spawnWeight: 0.5,
  },
];

export default entries;
