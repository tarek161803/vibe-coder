import type { CatalogEntry } from "../types";

/** Search Engines and Information Retrieval */
const entries: CatalogEntry[] = [
  {
    id: "vespa",
    name: "Vespa",
    abbr: "Ve",
    category: "Search Engine",
    color: "#3a8fd9",
    description:
      "Vespa is an open-source engine for search, recommendation and AI applications. It combines text search, vector search and machine-learned ranking over huge datasets.",
    highlights: [
      "Large-scale search apps",
      "Vector and hybrid search",
      "Real-time recommendations",
    ],
    funFact:
      "Vespa was developed at Yahoo, where it powered many of its services, before being open-sourced in 2017 and later spun out as its own company.",
    url: "https://vespa.ai",
    spawnWeight: 0.5,
  },
  {
    id: "apache-lucene",
    name: "Apache Lucene",
    abbr: "AL",
    category: "Search Library",
    color: "#6aa84f",
    description:
      "Apache Lucene is a Java library for full-text search. It builds inverted indexes and ranks results, and it's the core inside Elasticsearch, OpenSearch and Solr.",
    highlights: [
      "Engine inside Elasticsearch and Solr",
      "Full-text indexing",
      "Relevance scoring",
    ],
    funFact:
      "Doug Cutting created Lucene in 1999 and named it after his wife's middle name. He later co-created Hadoop, named after his son's toy elephant.",
    url: "https://lucene.apache.org",
  },
  {
    id: "tantivy",
    name: "Tantivy",
    abbr: "Ta",
    category: "Search Library",
    color: "#e3772d",
    description:
      "Tantivy is a full-text search engine library written in Rust, inspired by Apache Lucene. It lets Rust programs build fast search indexes without running a separate server.",
    highlights: [
      "Embedding search in Rust apps",
      "Log and document search",
      "Fast indexing",
    ],
    funFact:
      "Tantivy is the search core behind Quickwit, a search engine for logs co-founded by Tantivy's creator, Paul Masurel.",
    url: "https://github.com/quickwit-oss/tantivy",
    spawnWeight: 0.5,
  },
  {
    id: "full-text-search",
    name: "Full-Text Search",
    abbr: "FT",
    category: "Search Concept",
    color: "#0abde3",
    description:
      "Full-text search finds documents that contain your words anywhere in their text, handling things like word stems, typos and relevance ranking — not just exact matches.",
    highlights: [
      "Site and app search boxes",
      "Searching docs and articles",
      "Built into many databases",
    ],
    funFact:
      "PostgreSQL has full-text search built in, with special tsvector and tsquery types, so small apps often don't need a separate search engine.",
    url: "https://en.wikipedia.org/wiki/Full-text_search",
  },
  {
    id: "inverted-indexes",
    name: "Inverted Indexes",
    abbr: "II",
    category: "Data Structure",
    color: "#10ac84",
    description:
      "An inverted index maps each word to the list of documents that contain it. Instead of scanning every document, a search engine jumps straight to the matches.",
    highlights: [
      "Core of every search engine",
      "Fast keyword lookups",
      "Used by Lucene and Elasticsearch",
    ],
    funFact:
      "It works just like the index at the back of a book: look up a word, and it tells you exactly which pages mention it.",
    url: "https://en.wikipedia.org/wiki/Inverted_index",
  },
  {
    id: "semantic-search",
    name: "Semantic Search",
    abbr: "SS",
    category: "Search Concept",
    color: "#a55eea",
    description:
      "Semantic search finds results by meaning rather than exact words. It usually turns text into vectors (embeddings) so \"cheap flights\" can match \"budget airfare\".",
    highlights: [
      "Vector databases and embeddings",
      "RAG for AI chatbots",
      "Smarter product search",
    ],
    funFact:
      "In 2019 Google began using the BERT language model to better understand the meaning of search queries, calling it a major leap in search.",
    url: "https://en.wikipedia.org/wiki/Semantic_search",
  },
  {
    id: "information-retrieval",
    name: "Information Retrieval",
    abbr: "IR",
    category: "CS Field",
    color: "#2e86de",
    description:
      "Information retrieval is the field of finding relevant information in large collections of documents. It's the science behind search engines, from indexing to ranking.",
    highlights: [
      "Web search engines",
      "Digital libraries",
      "Evaluating search quality",
    ],
    funFact:
      "Gerard Salton, often called the father of information retrieval, developed the SMART system and the vector space model in the 1960s and 70s.",
    url: "https://en.wikipedia.org/wiki/Information_retrieval",
  },
  {
    id: "ranking-algorithms",
    name: "Ranking Algorithms",
    abbr: "RA",
    category: "Search Concept",
    color: "#ee5253",
    description:
      "Ranking algorithms decide the order of search results, putting the most relevant ones first. They use signals like word matches, popularity and machine learning.",
    highlights: [
      "Ordering search results",
      "BM25 and PageRank",
      "Learning-to-rank models",
    ],
    funFact:
      "Google's PageRank is named after co-founder Larry Page — a neat pun, since it ranks web pages.",
    url: "https://en.wikipedia.org/wiki/Ranking_(information_retrieval)",
  },
  {
    id: "search-indexing",
    name: "Search Indexing",
    abbr: "SI",
    category: "Search Concept",
    color: "#ff9f43",
    description:
      "Search indexing is the process of collecting, parsing and storing content so it can be searched quickly later. Web search engines crawl pages and add them to an index.",
    highlights: [
      "Web crawlers and SEO",
      "Indexing app data for search",
      "Keeping search results fresh",
    ],
    funFact:
      "Websites can ask crawlers to skip pages using a robots.txt file — a convention dating back to 1994.",
    url: "https://en.wikipedia.org/wiki/Search_engine_indexing",
  },
  {
    id: "recommendation-systems",
    name: "Recommendation Systems",
    abbr: "RS",
    category: "ML Application",
    color: "#e84393",
    description:
      "Recommendation systems suggest items you might like — movies, songs or products — based on your behavior and on what similar people enjoyed.",
    highlights: [
      "Netflix and YouTube suggestions",
      "Online shopping recommendations",
      "Music playlists and feeds",
    ],
    funFact:
      "Netflix offered a $1 million prize for improving its recommendations by 10%. A team won in 2009, but Netflix never fully deployed the winning solution.",
    url: "https://en.wikipedia.org/wiki/Recommender_system",
  },
];

export default entries;
