import type { CatalogEntry } from "../types";

/** Artificial Intelligence and Machine Learning */
const entries: CatalogEntry[] = [
  {
    id: "machine-learning",
    name: "Machine Learning",
    abbr: "ML",
    category: "AI Concept",
    color: "#7c3aed",
    description:
      "A branch of AI where computers learn patterns from data instead of following hand-written rules. You show a program many examples, and it figures out how to make predictions on new ones.",
    highlights: [
      "Spam filters and recommendations",
      "Fraud detection at banks",
      "Predicting prices and demand",
    ],
    funFact:
      "The term \"machine learning\" was popularized in 1959 by Arthur Samuel, who built a checkers program at IBM that improved by playing against itself.",
    url: "https://en.wikipedia.org/wiki/Machine_learning",
  },
  {
    id: "deep-learning",
    name: "Deep Learning",
    abbr: "DL",
    category: "AI Concept",
    color: "#6d28d9",
    description:
      "Machine learning with neural networks that have many layers. Each layer learns more abstract features, letting computers handle images, speech and language with impressive accuracy.",
    highlights: [
      "Image and speech recognition",
      "Large language models like GPT",
      "Self-driving car perception",
    ],
    funFact:
      "Deep learning exploded in 2012 when AlexNet crushed the ImageNet image-recognition contest. Hinton, LeCun and Bengio later shared the 2018 Turing Award for the field.",
    url: "https://en.wikipedia.org/wiki/Deep_learning",
  },
  {
    id: "neural-networks",
    name: "Neural Networks",
    abbr: "NN",
    category: "AI Concept",
    color: "#8b5cf6",
    description:
      "Computing systems loosely inspired by the brain, made of layers of connected \"neurons\" that pass numbers along. Training adjusts the strength of each connection until the network gives good answers.",
    highlights: [
      "The core of modern AI models",
      "Recognizing images and sounds",
      "Translating and generating text",
    ],
    funFact:
      "In 1958 Frank Rosenblatt built the Mark I Perceptron, a room-sized machine with physical wiring that learned to recognize simple shapes — an early neural network.",
    url: "https://en.wikipedia.org/wiki/Neural_network_(machine_learning)",
  },
  {
    id: "supervised-learning",
    name: "Supervised Learning",
    abbr: "SL",
    category: "ML Concept",
    color: "#2563eb",
    description:
      "Training a model on examples that come with the correct answer, like photos labeled \"cat\" or \"dog\". The model learns to map inputs to the right labels so it can label new data.",
    highlights: [
      "Email spam classification",
      "Predicting house prices",
      "Medical image diagnosis",
    ],
    funFact:
      "The famous ImageNet dataset, with over 14 million labeled images, was largely labeled by crowd workers on Amazon Mechanical Turk.",
    url: "https://en.wikipedia.org/wiki/Supervised_learning",
  },
  {
    id: "unsupervised-learning",
    name: "Unsupervised Learning",
    abbr: "UL",
    category: "ML Concept",
    color: "#0891b2",
    description:
      "Machine learning on data without any labels. The model finds hidden structure on its own, such as grouping similar customers together or spotting unusual data points.",
    highlights: [
      "Customer segmentation",
      "Anomaly and fraud detection",
      "Grouping similar documents",
    ],
    funFact:
      "The classic k-means clustering algorithm goes back to the 1950s, when Stuart Lloyd devised it at Bell Labs for a signal-processing problem.",
    url: "https://en.wikipedia.org/wiki/Unsupervised_learning",
  },
  {
    id: "reinforcement-learning",
    name: "Reinforcement Learning",
    abbr: "RL",
    category: "ML Concept",
    color: "#16a34a",
    description:
      "Learning by trial and error: an agent takes actions in an environment and gets rewards or penalties. Over time it learns a strategy that earns the most reward.",
    highlights: [
      "Game-playing AIs",
      "Robot control",
      "Tuning chatbots with human feedback",
    ],
    funFact:
      "DeepMind's AlphaGo used reinforcement learning to beat Go champion Lee Sedol in 2016. Its surprising \"move 37\" stunned professional players watching the match.",
    url: "https://en.wikipedia.org/wiki/Reinforcement_learning",
  },
  {
    id: "semi-supervised-learning",
    name: "Semi-Supervised Learning",
    abbr: "SSL",
    category: "ML Concept",
    color: "#0d9488",
    description:
      "A mix of supervised and unsupervised learning that uses a small amount of labeled data plus lots of unlabeled data. It helps when labeling everything by hand would be too slow or costly.",
    highlights: [
      "Training with few labeled examples",
      "Speech and image tasks with scarce labels",
      "Cutting data-labeling costs",
    ],
    funFact:
      "A popular trick is pseudo-labeling: the model labels unlabeled data itself, then retrains on its most confident guesses — a bit like a student grading their own homework.",
    url: "https://en.wikipedia.org/wiki/Semi-supervised_learning",
    spawnWeight: 0.5,
  },
  {
    id: "self-supervised-learning",
    name: "Self-Supervised Learning",
    abbr: "SSup",
    category: "ML Concept",
    color: "#0e7490",
    description:
      "Learning where the data provides its own labels, for example by hiding a word in a sentence and asking the model to guess it. It lets models learn from huge amounts of raw text or images.",
    highlights: [
      "Pretraining large language models",
      "Learning image features without labels",
      "Speech models trained on raw audio",
    ],
    funFact:
      "Large language models like GPT are pretrained this way: their only \"teacher\" is the next word in billions of sentences scraped from text.",
    url: "https://en.wikipedia.org/wiki/Self-supervised_learning",
    spawnWeight: 0.5,
  },
  {
    id: "transfer-learning",
    name: "Transfer Learning",
    abbr: "TL",
    category: "ML Technique",
    color: "#ea580c",
    description:
      "Reusing a model trained on one big task as the starting point for a new, related task. Instead of learning from scratch, the model brings along knowledge it already has.",
    highlights: [
      "Custom image classifiers with few photos",
      "Adapting language models to new tasks",
      "Saving training time and compute",
    ],
    funFact:
      "Transfer learning is why you can build a decent image classifier with just a few hundred photos — the model already learned edges and shapes from millions of images.",
    url: "https://en.wikipedia.org/wiki/Transfer_learning",
  },
  {
    id: "federated-learning",
    name: "Federated Learning",
    abbr: "FL",
    category: "ML Technique",
    color: "#059669",
    description:
      "Training a shared model across many devices without collecting their raw data in one place. Each device learns locally and only sends model updates, which helps protect privacy.",
    highlights: [
      "Smartphone keyboard predictions",
      "Privacy-preserving healthcare AI",
      "Learning across many hospitals or banks",
    ],
    funFact:
      "Google introduced the term \"federated learning\" around 2016 and used it to improve next-word suggestions in its Gboard keyboard without uploading what people typed.",
    url: "https://en.wikipedia.org/wiki/Federated_learning",
    spawnWeight: 0.5,
  },
  {
    id: "cnn",
    name: "CNN",
    abbr: "CNN",
    category: "Neural Network Type",
    color: "#dc2626",
    description:
      "A Convolutional Neural Network scans images with small filters to detect patterns like edges, textures and shapes. It's the classic architecture for computer vision tasks.",
    highlights: [
      "Image classification",
      "Face and object detection",
      "Medical scan analysis",
    ],
    funFact:
      "In the 1990s, Yann LeCun's LeNet CNN was used by banks to read handwritten digits on checks automatically.",
    url: "https://en.wikipedia.org/wiki/Convolutional_neural_network",
  },
  {
    id: "rnn",
    name: "RNN",
    abbr: "RNN",
    category: "Neural Network Type",
    color: "#f59e0b",
    description:
      "A Recurrent Neural Network processes sequences one step at a time while keeping a memory of what came before. It was the go-to choice for text and speech before Transformers.",
    highlights: [
      "Early machine translation",
      "Speech recognition",
      "Time-series prediction",
    ],
    funFact:
      "In 2015 Andrej Karpathy's blog post \"The Unreasonable Effectiveness of Recurrent Neural Networks\" showed RNNs generating fake Shakespeare and fake Linux source code.",
    url: "https://en.wikipedia.org/wiki/Recurrent_neural_network",
  },
  {
    id: "lstm",
    name: "LSTM",
    abbr: "LSTM",
    category: "Neural Network Type",
    color: "#d97706",
    description:
      "Long Short-Term Memory is a type of RNN with special \"gates\" that decide what to remember and what to forget. That lets it keep track of information across long sequences.",
    highlights: [
      "Speech recognition systems",
      "Language modeling before Transformers",
      "Forecasting time-series data",
    ],
    funFact:
      "LSTM was published by Sepp Hochreiter and Jürgen Schmidhuber in 1997, but it only became a superstar in the 2010s when it powered major speech and translation systems.",
    url: "https://en.wikipedia.org/wiki/Long_short-term_memory",
  },
  {
    id: "gru",
    name: "GRU",
    abbr: "GRU",
    category: "Neural Network Type",
    color: "#b45309",
    description:
      "A Gated Recurrent Unit is a simpler cousin of the LSTM with fewer gates. It remembers information across sequences while being faster and lighter to train.",
    highlights: [
      "Lightweight sequence models",
      "Text and speech tasks",
      "Time-series forecasting",
    ],
    funFact:
      "GRUs were introduced in 2014 by Kyunghyun Cho and colleagues and often perform about as well as LSTMs while using fewer parameters.",
    url: "https://en.wikipedia.org/wiki/Gated_recurrent_unit",
    spawnWeight: 0.5,
  },
  {
    id: "transformers",
    name: "Transformers",
    abbr: "TF",
    category: "Neural Network Type",
    color: "#e11d48",
    description:
      "A neural network architecture built around \"attention\", which lets the model look at all parts of the input at once and decide what matters. It's the foundation of modern language models.",
    highlights: [
      "Powering ChatGPT, Claude and Gemini",
      "Machine translation",
      "Vision and audio models too",
    ],
    funFact:
      "Transformers came from the 2017 Google paper \"Attention Is All You Need\", whose title riffs on the Beatles song \"All You Need Is Love\". The T in GPT stands for Transformer.",
    url: "https://arxiv.org/abs/1706.03762",
  },
  {
    id: "gans",
    name: "GANs",
    abbr: "GAN",
    category: "Generative Model",
    color: "#c026d3",
    description:
      "Generative Adversarial Networks pit two networks against each other: a generator creates fake data and a discriminator tries to spot the fakes. Both improve until the fakes look real.",
    highlights: [
      "Generating realistic faces",
      "Image style transfer",
      "Upscaling and enhancing photos",
    ],
    funFact:
      "Ian Goodfellow came up with the GAN idea in 2014 during a discussion with friends at a bar in Montreal, then went home and coded the first working version that night.",
    url: "https://en.wikipedia.org/wiki/Generative_adversarial_network",
  },
  {
    id: "diffusion-models",
    name: "Diffusion Models",
    abbr: "DIF",
    category: "Generative Model",
    color: "#db2777",
    description:
      "Generative models that learn to turn random noise into images step by step by gradually removing the noise. They're behind many popular text-to-image tools.",
    highlights: [
      "Text-to-image generators",
      "AI video generation",
      "Image editing and inpainting",
    ],
    funFact:
      "The idea was inspired by physics: diffusion models borrow from non-equilibrium thermodynamics, which studies how things like ink spread out in water.",
    url: "https://en.wikipedia.org/wiki/Diffusion_model",
  },
  {
    id: "autoencoders",
    name: "Autoencoders",
    abbr: "AE",
    category: "Neural Network Type",
    color: "#9333ea",
    description:
      "Neural networks that learn to compress data into a small code and then rebuild the original from it. The compressed code captures the most important features of the data.",
    highlights: [
      "Removing noise from images",
      "Detecting unusual data",
      "Compressing data for other models",
    ],
    funFact:
      "Stable Diffusion uses a variational autoencoder to squeeze images into a much smaller \"latent\" space, so the heavy generation work happens on compact data.",
    url: "https://en.wikipedia.org/wiki/Autoencoder",
    spawnWeight: 0.5,
  },
  {
    id: "graph-neural-networks",
    name: "Graph Neural Networks",
    abbr: "GNN",
    category: "Neural Network Type",
    color: "#4f46e5",
    description:
      "Neural networks designed to work on graphs: data made of nodes connected by edges, like social networks or molecules. Each node learns from its neighbors.",
    highlights: [
      "Drug and molecule discovery",
      "Social network recommendations",
      "Traffic and route prediction",
    ],
    funFact:
      "DeepMind used graph neural networks to improve arrival-time predictions in Google Maps by modeling road segments as a connected graph.",
    url: "https://en.wikipedia.org/wiki/Graph_neural_network",
    spawnWeight: 0.5,
  },
  {
    id: "pytorch",
    name: "PyTorch",
    abbr: "PT",
    category: "ML Framework",
    color: "#ee4c2c",
    description:
      "An open-source Python library for building and training neural networks. It feels like normal Python code, which makes experimenting and debugging easy, and it's the favorite of AI researchers.",
    highlights: [
      "Training deep learning models",
      "AI research papers and prototypes",
      "Powering many open LLMs",
    ],
    funFact:
      "PyTorch was released by Facebook's AI lab in 2016 and is now governed by the independent PyTorch Foundation under the Linux Foundation.",
    url: "https://pytorch.org",
  },
  {
    id: "tensorflow",
    name: "TensorFlow",
    abbr: "TF",
    category: "ML Framework",
    color: "#ff6f00",
    description:
      "Google's open-source machine learning platform for building and deploying models. It runs everywhere from big servers to phones and browsers with TensorFlow Lite and TensorFlow.js.",
    highlights: [
      "Production ML at scale",
      "On-device ML on phones",
      "ML in the browser with TF.js",
    ],
    funFact:
      "The name describes how it works: tensors (multi-dimensional arrays of numbers) flow through a graph of math operations. Google open-sourced it in 2015.",
    url: "https://www.tensorflow.org",
  },
  {
    id: "keras",
    name: "Keras",
    abbr: "K",
    category: "ML Framework",
    color: "#d00000",
    description:
      "A beginner-friendly, high-level API for building neural networks in just a few lines of Python. Keras 3 can run on top of TensorFlow, PyTorch or JAX.",
    highlights: [
      "Learning deep learning basics",
      "Quick model prototypes",
      "Switching between ML backends",
    ],
    funFact:
      "Keras was created by François Chollet in 2015. Its name is Greek for \"horn\", a reference to the gate of horn in Homer's Odyssey, through which true dreams pass.",
    url: "https://keras.io",
  },
  {
    id: "jax",
    name: "JAX",
    abbr: "JAX",
    category: "ML Framework",
    color: "#5e97f6",
    description:
      "A Google library for fast numerical computing in Python with a NumPy-like API. It can automatically compute gradients and compile code to run super fast on GPUs and TPUs.",
    highlights: [
      "Large-scale AI research",
      "Training models on TPUs",
      "Scientific computing with gradients",
    ],
    funFact:
      "JAX is built around composable function transforms like grad, jit and vmap — you can even take the gradient of a gradient with grad(grad(f)).",
    url: "https://github.com/jax-ml/jax",
    spawnWeight: 0.5,
  },
  {
    id: "scikit-learn",
    name: "Scikit-learn",
    abbr: "SKL",
    category: "ML Library",
    color: "#f7931e",
    description:
      "The classic Python library for traditional machine learning: classification, regression, clustering and more. Its simple, consistent API makes it the standard first ML library to learn.",
    highlights: [
      "Classic ML on tabular data",
      "Data science courses and notebooks",
      "Preprocessing and model evaluation",
    ],
    funFact:
      "Scikit-learn began in 2007 as a Google Summer of Code project by David Cournapeau. Nearly every model uses the same fit() and predict() methods.",
    url: "https://scikit-learn.org",
  },
  {
    id: "xgboost",
    name: "XGBoost",
    abbr: "XGB",
    category: "ML Library",
    color: "#1a9fd9",
    description:
      "A fast, powerful library for gradient boosting, which builds many small decision trees that each fix the mistakes of the previous ones. It's excellent for table-shaped data.",
    highlights: [
      "Winning Kaggle competitions",
      "Credit scoring and risk models",
      "Predicting outcomes from tabular data",
    ],
    funFact:
      "XGBoost started as a research project by Tianqi Chen and became famous after it powered a huge number of winning solutions in Kaggle competitions.",
    url: "https://xgboost.readthedocs.io",
  },
  {
    id: "lightgbm",
    name: "LightGBM",
    abbr: "LGBM",
    category: "ML Library",
    color: "#22c55e",
    description:
      "Microsoft's gradient boosting library designed for speed and low memory use. It trains decision tree models on large tabular datasets very quickly.",
    highlights: [
      "Fast training on big tabular data",
      "Ranking and recommendation models",
      "Kaggle competitions",
    ],
    funFact:
      "LightGBM grows trees \"leaf-wise\" instead of level by level, always splitting the leaf that helps most — one reason it's so fast.",
    url: "https://lightgbm.readthedocs.io",
    spawnWeight: 0.5,
  },
  {
    id: "catboost",
    name: "CatBoost",
    abbr: "CAT",
    category: "ML Library",
    color: "#ffcc00",
    description:
      "A gradient boosting library from Yandex that handles categorical data, like city names or product types, without lots of manual preprocessing.",
    highlights: [
      "Tabular data with many categories",
      "Search and recommendation ranking",
      "Strong results with default settings",
    ],
    funFact:
      "Despite the cute name, CatBoost has nothing to do with cats — it's short for \"Category Boosting\", because of its handling of categorical features.",
    url: "https://catboost.ai",
    spawnWeight: 0.5,
  },
  {
    id: "onnx",
    name: "ONNX",
    abbr: "ONNX",
    category: "Model Format",
    color: "#4b5bd6",
    description:
      "The Open Neural Network Exchange is a common file format for ML models. You can train a model in one framework, export it to ONNX, and run it with a different tool or on different hardware.",
    highlights: [
      "Moving models between frameworks",
      "Fast inference with ONNX Runtime",
      "Running models in browsers and apps",
    ],
    funFact:
      "ONNX was launched in 2017 as a joint project between Microsoft and Facebook — two rivals teaming up to stop AI models being locked into one framework.",
    url: "https://onnx.ai",
    spawnWeight: 0.5,
  },
  {
    id: "hugging-face",
    name: "Hugging Face",
    abbr: "HF",
    category: "AI Platform",
    color: "#ffd21e",
    description:
      "A platform and community often called the GitHub of AI. It hosts hundreds of thousands of models and datasets, plus popular libraries like Transformers for using them.",
    highlights: [
      "Downloading open-source models",
      "Sharing datasets and demos",
      "Transformers and Diffusers libraries",
    ],
    funFact:
      "Hugging Face started in 2016 as a chatbot app for teenagers. It's named after the 🤗 hugging face emoji, which is still its logo.",
    url: "https://huggingface.co",
  },
  {
    id: "ollama",
    name: "Ollama",
    abbr: "OLM",
    category: "Local LLM Runner",
    color: "#6b7280",
    description:
      "A tool for downloading and running large language models on your own computer with a single command. It also provides a local API so your apps can use the models offline.",
    highlights: [
      "Running LLMs locally and privately",
      "Offline AI coding helpers",
      "Testing open models quickly",
    ],
    funFact:
      "Ollama lets you customize models with a \"Modelfile\" — a recipe deliberately styled after Docker's Dockerfile.",
    url: "https://ollama.com",
  },
  {
    id: "vllm",
    name: "vLLM",
    abbr: "vLLM",
    category: "LLM Inference Engine",
    color: "#30a2ff",
    description:
      "A high-performance engine for serving large language models on GPUs. It squeezes many more requests per second out of the hardware, making AI apps cheaper to run.",
    highlights: [
      "Serving open LLMs in production",
      "OpenAI-compatible API servers",
      "High-throughput batch inference",
    ],
    funFact:
      "vLLM came out of UC Berkeley. Its key trick, PagedAttention, borrows the idea of memory paging from operating systems to manage GPU memory efficiently.",
    url: "https://docs.vllm.ai",
    spawnWeight: 0.5,
  },
  {
    id: "llama-cpp",
    name: "llama.cpp",
    abbr: "L.cpp",
    category: "LLM Inference Engine",
    color: "#ff8236",
    description:
      "A C/C++ program for running large language models efficiently on ordinary hardware, including laptops without powerful GPUs. Many local AI tools are built on top of it.",
    highlights: [
      "Running LLMs on laptops and CPUs",
      "GGUF quantized model files",
      "Engine behind many local AI apps",
    ],
    funFact:
      "Georgi Gerganov released llama.cpp in March 2023, showing that Meta's LLaMA model could run on a regular MacBook — a moment that kicked off the local-AI boom.",
    url: "https://github.com/ggml-org/llama.cpp",
    spawnWeight: 0.5,
  },
  {
    id: "lm-studio",
    name: "LM Studio",
    abbr: "LMS",
    category: "Local LLM App",
    color: "#6366f1",
    description:
      "A desktop app for finding, downloading and chatting with open-source language models on your own computer. It offers a friendly chat interface, no command line needed.",
    highlights: [
      "Chatting with local models privately",
      "Browsing models from Hugging Face",
      "Local OpenAI-compatible server",
    ],
    funFact:
      "LM Studio can run a local server that mimics OpenAI's API, so apps written for ChatGPT can talk to a model on your own machine instead.",
    url: "https://lmstudio.ai",
    spawnWeight: 0.5,
  },
  {
    id: "litellm",
    name: "LiteLLM",
    abbr: "LLM",
    category: "LLM Gateway",
    color: "#38bdf8",
    description:
      "A Python library and proxy server that lets you call many different AI model providers using one OpenAI-style interface. Switching providers becomes a one-line change.",
    highlights: [
      "Calling many LLM providers one way",
      "Tracking AI spending and usage",
      "Fallbacks when a provider fails",
    ],
    funFact:
      "LiteLLM supports over 100 LLM providers, so the same code can talk to OpenAI, Anthropic, Google, local models and many more.",
    url: "https://docs.litellm.ai",
    spawnWeight: 0.5,
  },
  {
    id: "tensorrt-llm",
    name: "TensorRT-LLM",
    abbr: "TRT-L",
    category: "LLM Inference Engine",
    color: "#76b900",
    description:
      "NVIDIA's library for running large language models as fast as possible on NVIDIA GPUs. It applies heavy optimizations so AI services can answer more users with less hardware.",
    highlights: [
      "Fast LLM serving on NVIDIA GPUs",
      "Lowering cost per AI request",
      "Optimized multi-GPU inference",
    ],
    funFact:
      "Although it targets NVIDIA's own hardware, TensorRT-LLM is open source on GitHub, so anyone can read how it squeezes extra speed out of GPUs.",
    url: "https://github.com/NVIDIA/TensorRT-LLM",
    spawnWeight: 0.5,
  },
  {
    id: "mlx",
    name: "MLX",
    abbr: "MLX",
    category: "ML Framework",
    color: "#a3a3a3",
    description:
      "Apple's open-source machine learning framework for Apple silicon Macs. It lets you train and run models efficiently on M-series chips with a NumPy-like Python API.",
    highlights: [
      "Running LLMs on Mac laptops",
      "ML research on Apple silicon",
      "Fine-tuning models locally",
    ],
    funFact:
      "MLX takes advantage of Apple silicon's unified memory: the CPU and GPU share the same memory, so data doesn't have to be copied back and forth.",
    url: "https://github.com/ml-explore/mlx",
    spawnWeight: 0.5,
  },
  {
    id: "langchain",
    name: "LangChain",
    abbr: "LC",
    category: "LLM Framework",
    color: "#2f9e8f",
    description:
      "A framework for building apps powered by language models. It provides building blocks for prompts, tools, memory and retrieval so you can chain them into chatbots and agents.",
    highlights: [
      "Building chatbots over your docs",
      "Connecting LLMs to tools and APIs",
      "Prototyping AI agents",
    ],
    funFact:
      "Harrison Chase launched LangChain as an open-source side project in October 2022 — about a month before ChatGPT came out and sparked the AI app boom.",
    url: "https://www.langchain.com",
  },
  {
    id: "langgraph",
    name: "LangGraph",
    abbr: "LG",
    category: "Agent Framework",
    color: "#0f766e",
    description:
      "A library from the LangChain team for building AI agents as graphs of steps. Steps can loop, branch and keep state, which is useful for agents that plan, act and retry.",
    highlights: [
      "Stateful multi-step AI agents",
      "Human-in-the-loop approvals",
      "Multi-agent workflows",
    ],
    funFact:
      "Unlike a simple chain, LangGraph allows cycles, so an agent can loop — try something, check the result and try again — just like a person would.",
    url: "https://www.langchain.com/langgraph",
    spawnWeight: 0.5,
  },
  {
    id: "llamaindex",
    name: "LlamaIndex",
    abbr: "LI",
    category: "LLM Framework",
    color: "#a855f7",
    description:
      "A framework for connecting language models to your own data, like PDFs, databases and docs. It handles loading, indexing and searching so the model can answer questions about it.",
    highlights: [
      "RAG over company documents",
      "Parsing PDFs and files for LLMs",
      "Building knowledge assistants",
    ],
    funFact:
      "LlamaIndex was created by Jerry Liu in 2022 and was originally called \"GPT Index\" before being renamed.",
    url: "https://www.llamaindex.ai",
    spawnWeight: 0.5,
  },
  {
    id: "haystack",
    name: "Haystack",
    abbr: "HAY",
    category: "LLM Framework",
    color: "#1ac5a0",
    description:
      "An open-source Python framework by deepset for building search and question-answering systems with language models. You connect components into pipelines for RAG and agents.",
    highlights: [
      "Document search and Q&A",
      "Production RAG pipelines",
      "Enterprise AI assistants",
    ],
    funFact:
      "The name is a nod to \"finding a needle in a haystack\" — exactly what search over huge piles of documents is all about.",
    url: "https://haystack.deepset.ai",
    spawnWeight: 0.5,
  },
  {
    id: "semantic-kernel",
    name: "Semantic Kernel",
    abbr: "SK",
    category: "LLM Framework",
    color: "#5c2d91",
    description:
      "Microsoft's open-source SDK for adding AI models to regular apps. It helps connect language models with your existing code, plugins and data in a structured way.",
    highlights: [
      "Adding AI to .NET applications",
      "Enterprise AI copilots",
      "Orchestrating plugins and functions",
    ],
    funFact:
      "Unlike most AI frameworks, which focus on Python, Semantic Kernel supports C#, Python and Java — handy for big companies built on .NET.",
    url: "https://learn.microsoft.com/en-us/semantic-kernel/",
    spawnWeight: 0.5,
  },
  {
    id: "dspy",
    name: "DSPy",
    abbr: "DSPy",
    category: "LLM Framework",
    color: "#2563eb",
    description:
      "A Stanford framework that lets you describe what an AI pipeline should do in code, then automatically optimizes the prompts for you instead of hand-tweaking them.",
    highlights: [
      "Auto-optimizing prompts",
      "Building reliable LLM pipelines",
      "Research on LLM programs",
    ],
    funFact:
      "DSPy's motto is \"programming, not prompting\" — the idea is that you shouldn't spend your days fiddling with prompt wording by hand.",
    url: "https://dspy.ai",
    spawnWeight: 0.5,
  },
  {
    id: "crewai",
    name: "CrewAI",
    abbr: "Crew",
    category: "Agent Framework",
    color: "#ff5a50",
    description:
      "A Python framework for building teams of AI agents that each play a role, like researcher or writer, and work together on a task by passing work between them.",
    highlights: [
      "Multi-agent research workflows",
      "Automating content creation",
      "Role-based AI task teams",
    ],
    funFact:
      "In CrewAI you define each agent with a role, a goal and even a backstory — almost like writing characters for a play.",
    url: "https://www.crewai.com",
    spawnWeight: 0.5,
  },
  {
    id: "autogen",
    name: "AutoGen",
    abbr: "AG",
    category: "Agent Framework",
    color: "#0078d4",
    description:
      "A framework from Microsoft Research for building applications where multiple AI agents talk to each other, and to humans, to solve tasks together.",
    highlights: [
      "Multi-agent conversations",
      "Agents that write and run code",
      "Research on agent collaboration",
    ],
    funFact:
      "AutoGen popularized setups where AI agents chat with each other — for example, one agent writes code while another runs it and reports back the errors.",
    url: "https://microsoft.github.io/autogen/",
    spawnWeight: 0.5,
  },
  {
    id: "pydantic-ai",
    name: "Pydantic AI",
    abbr: "PAI",
    category: "Agent Framework",
    color: "#e92063",
    description:
      "A Python agent framework from the team behind Pydantic. It uses type hints and data validation to make AI outputs structured, predictable and easy to work with.",
    highlights: [
      "Type-safe AI agents in Python",
      "Structured outputs from LLMs",
      "Tool calling with validation",
    ],
    funFact:
      "Pydantic, the validation library it's built on, is already used inside the official Python SDKs from both OpenAI and Anthropic.",
    url: "https://ai.pydantic.dev",
    spawnWeight: 0.5,
  },
  {
    id: "nvidia-cuda",
    name: "NVIDIA CUDA",
    abbr: "CUDA",
    category: "GPU Computing Platform",
    color: "#76b900",
    description:
      "NVIDIA's platform for running general-purpose code on graphics cards. GPUs can do thousands of calculations in parallel, which is exactly what training neural networks needs.",
    highlights: [
      "Training AI models on GPUs",
      "Scientific simulations",
      "Backend for PyTorch and TensorFlow",
    ],
    funFact:
      "AlexNet, the 2012 model that launched the deep learning boom, was trained with CUDA on two consumer NVIDIA gaming graphics cards.",
    url: "https://developer.nvidia.com/cuda-zone",
  },
  {
    id: "rocm",
    name: "ROCm",
    abbr: "ROCm",
    category: "GPU Computing Platform",
    color: "#ed1c24",
    description:
      "AMD's open-source software platform for GPU computing, its answer to NVIDIA's CUDA. It lets frameworks like PyTorch run on AMD graphics cards and accelerators.",
    highlights: [
      "Running PyTorch on AMD GPUs",
      "Supercomputers and HPC",
      "AI training on AMD Instinct chips",
    ],
    funFact:
      "ROCm includes HIP, a CUDA-like programming layer, plus \"hipify\" tools that can automatically translate much existing CUDA code to run on AMD GPUs.",
    url: "https://rocm.docs.amd.com",
    spawnWeight: 0.5,
  },
  {
    id: "nvidia-tensorrt",
    name: "NVIDIA TensorRT",
    abbr: "TRT",
    category: "Inference Optimizer",
    color: "#76b900",
    description:
      "NVIDIA's toolkit for making trained neural networks run faster on NVIDIA GPUs. It optimizes a model's math and memory use so predictions come back quicker.",
    highlights: [
      "Speeding up AI inference",
      "Real-time video and vision AI",
      "Deploying models on Jetson devices",
    ],
    funFact:
      "TensorRT can run models in lower precision, like 8-bit integers instead of 32-bit floats, trading a tiny bit of accuracy for big speed gains.",
    url: "https://developer.nvidia.com/tensorrt",
    spawnWeight: 0.5,
  },
  {
    id: "triton-inference-server",
    name: "Triton Inference Server",
    abbr: "TIS",
    category: "Model Serving",
    color: "#5c9e00",
    description:
      "NVIDIA's open-source server for deploying AI models in production. It can serve models from PyTorch, TensorFlow, ONNX and more, handling many requests efficiently.",
    highlights: [
      "Serving many models on one server",
      "Batching requests on GPUs",
      "Production AI deployments",
    ],
    funFact:
      "Don't mix it up with OpenAI's Triton, a totally different project — a programming language for writing GPU kernels. Two AI tools, one name.",
    url: "https://developer.nvidia.com/triton-inference-server",
    spawnWeight: 0.5,
  },
  {
    id: "ray",
    name: "Ray",
    abbr: "Ray",
    category: "Distributed Computing",
    color: "#028cf0",
    description:
      "An open-source framework for scaling Python and AI workloads from a laptop to a cluster of machines. It handles splitting up the work so you don't have to.",
    highlights: [
      "Distributed model training",
      "Scaling data processing",
      "Serving models at scale",
    ],
    funFact:
      "Ray came out of UC Berkeley's RISELab, the successor to AMPLab — the same research lineage that produced Apache Spark.",
    url: "https://www.ray.io",
    spawnWeight: 0.5,
  },
  {
    id: "mlflow",
    name: "MLflow",
    abbr: "MLF",
    category: "MLOps Platform",
    color: "#0194e2",
    description:
      "An open-source platform for managing the machine learning lifecycle. It tracks experiments, stores models and helps you deploy them, so you know which version did what.",
    highlights: [
      "Tracking ML experiments",
      "Model registry and versioning",
      "Evaluating LLM apps",
    ],
    funFact:
      "MLflow was created by Databricks, the company founded by the original creators of Apache Spark, and released as open source in 2018.",
    url: "https://mlflow.org",
    spawnWeight: 0.5,
  },
  {
    id: "weights-and-biases",
    name: "Weights & Biases",
    abbr: "W&B",
    category: "MLOps Platform",
    color: "#ffbe00",
    description:
      "A platform for tracking machine learning experiments with charts, logs and comparisons. Teams use it to see how training runs perform and share results.",
    highlights: [
      "Logging training metrics live",
      "Comparing experiment runs",
      "Sharing ML reports with a team",
    ],
    funFact:
      "The company's name is an ML pun: \"weights\" and \"biases\" are the numbers inside a neural network that get adjusted during training.",
    url: "https://wandb.ai",
    spawnWeight: 0.5,
  },
  {
    id: "kubeflow",
    name: "Kubeflow",
    abbr: "KF",
    category: "MLOps Platform",
    color: "#4279f4",
    description:
      "An open-source toolkit for running machine learning workflows on Kubernetes. It helps teams build, train and deploy models using container infrastructure.",
    highlights: [
      "ML pipelines on Kubernetes",
      "Distributed training jobs",
      "Notebooks for data science teams",
    ],
    funFact:
      "Kubeflow started at Google in 2017 as a simple way to run TensorFlow jobs on Kubernetes — hence \"Kube\" plus \"flow\".",
    url: "https://www.kubeflow.org",
    spawnWeight: 0.5,
  },
  {
    id: "bentoml",
    name: "BentoML",
    abbr: "Bento",
    category: "Model Serving",
    color: "#ec4899",
    description:
      "An open-source Python framework for turning ML models into production-ready API services. It packages your model, code and dependencies together for easy deployment.",
    highlights: [
      "Serving models as REST APIs",
      "Packaging models in containers",
      "Deploying open-source LLMs",
    ],
    funFact:
      "BentoML packages models into units called \"Bentos\", named after Japanese bento boxes that neatly hold everything for a meal.",
    url: "https://www.bentoml.com",
    spawnWeight: 0.5,
  },
  {
    id: "gpt",
    name: "GPT",
    abbr: "GPT",
    category: "Large Language Model",
    color: "#10a37f",
    description:
      "OpenAI's family of Generative Pre-trained Transformer models. They generate text by predicting the next word, and they power ChatGPT and many other AI apps.",
    highlights: [
      "Powering ChatGPT",
      "Writing and coding assistants",
      "AI features in thousands of apps",
    ],
    funFact:
      "ChatGPT launched in November 2022 as a \"research preview\" and became one of the fastest-growing consumer apps in history.",
    url: "https://openai.com",
  },
  {
    id: "claude",
    name: "Claude",
    abbr: "CL",
    category: "Large Language Model",
    color: "#d97757",
    description:
      "Anthropic's family of AI models and assistant. Claude can chat, write, analyze documents and write code, and it's built with a strong focus on being helpful, honest and safe.",
    highlights: [
      "Coding with Claude Code",
      "Analyzing long documents",
      "Writing and research assistance",
    ],
    funFact:
      "Anthropic trains Claude using an approach called Constitutional AI, where the model is guided by a written set of principles rather than only human ratings.",
    url: "https://www.anthropic.com/claude",
  },
  {
    id: "gemini",
    name: "Gemini",
    abbr: "Gem",
    category: "Large Language Model",
    color: "#8e75b2",
    description:
      "Google DeepMind's family of multimodal AI models that understand text, images, audio and video. Gemini powers Google's AI assistant and features across Google products.",
    highlights: [
      "Google's Gemini assistant app",
      "AI features in Gmail and Docs",
      "Multimodal apps via the Gemini API",
    ],
    funFact:
      "Google's chatbot was originally called Bard. In February 2024 it was renamed Gemini to match the models powering it.",
    url: "https://gemini.google.com",
  },
  {
    id: "llama",
    name: "Llama",
    abbr: "LLaMA",
    category: "Large Language Model",
    color: "#0668e1",
    description:
      "Meta's family of open-weight language models. Anyone can download the model files and run or fine-tune them on their own hardware, within the license terms.",
    highlights: [
      "Self-hosted chatbots",
      "Base for community fine-tunes",
      "Research on open models",
    ],
    funFact:
      "The original name was LLaMA, short for \"Large Language Model Meta AI\". Its weights leaked online in March 2023, just days after a limited research release.",
    url: "https://www.llama.com",
  },
  {
    id: "qwen",
    name: "Qwen",
    abbr: "Qwen",
    category: "Large Language Model",
    color: "#615ced",
    description:
      "Alibaba's family of language and multimodal models, many released with open weights. They come in many sizes, from tiny models for phones to huge ones for servers.",
    highlights: [
      "Open-weight models to self-host",
      "Multilingual chat, especially Chinese",
      "Coding models like Qwen-Coder",
    ],
    funFact:
      "Qwen is short for its Chinese name, Tongyi Qianwen. Its open models are among the most popular starting points for community fine-tunes on Hugging Face.",
    url: "https://github.com/QwenLM",
    spawnWeight: 0.5,
  },
  {
    id: "mistral",
    name: "Mistral",
    abbr: "MIS",
    category: "Large Language Model",
    color: "#fa520f",
    description:
      "AI models from Mistral AI, a French company known for efficient models, several released with open weights. They offer strong performance for their size.",
    highlights: [
      "Open-weight models for self-hosting",
      "Le Chat assistant",
      "European AI applications",
    ],
    funFact:
      "Mistral AI released its first model, Mistral 7B, in 2023 simply by posting a torrent magnet link on social media — no blog post, no announcement.",
    url: "https://mistral.ai",
  },
  {
    id: "deepseek",
    name: "DeepSeek",
    abbr: "DS",
    category: "Large Language Model",
    color: "#4d6bfe",
    description:
      "AI models from Chinese lab DeepSeek, known for strong reasoning and coding abilities and for releasing open weights. They were trained at a fraction of the cost many expected.",
    highlights: [
      "Open reasoning models like R1",
      "Coding assistants",
      "Cheap API access to strong models",
    ],
    funFact:
      "When DeepSeek-R1 went viral in January 2025, investors panicked about AI costs and NVIDIA lost nearly $600 billion in market value in a single day.",
    url: "https://www.deepseek.com",
  },
  {
    id: "gemma",
    name: "Gemma",
    abbr: "GMA",
    category: "Large Language Model",
    color: "#3186ff",
    description:
      "Google's family of lightweight open models built from the same research as Gemini. They're small enough to run on laptops and phones, and free to download and fine-tune.",
    highlights: [
      "On-device AI on laptops and phones",
      "Fine-tuning for custom tasks",
      "Learning and research",
    ],
    funFact:
      "The name Gemma comes from the Latin word for \"precious stone\" — a little sibling to the bigger Gemini models.",
    url: "https://ai.google.dev/gemma",
    spawnWeight: 0.5,
  },
  {
    id: "bert",
    name: "BERT",
    abbr: "BERT",
    category: "Language Model",
    color: "#f4b400",
    description:
      "A Google language model from 2018 that reads text in both directions at once to understand context. It's great at understanding text, like classifying it, rather than generating it.",
    highlights: [
      "Understanding search queries",
      "Text classification and sentiment",
      "Base for many embedding models",
    ],
    funFact:
      "BERT stands for Bidirectional Encoder Representations from Transformers, but it was also a playful nod to the earlier model ELMo — both Sesame Street characters.",
    url: "https://en.wikipedia.org/wiki/BERT_(language_model)",
  },
  {
    id: "t5",
    name: "T5",
    abbr: "T5",
    category: "Language Model",
    color: "#ea4335",
    description:
      "Google's Text-to-Text Transfer Transformer treats every language task — translating, summarizing, answering — as turning one piece of text into another.",
    highlights: [
      "Summarization and translation",
      "Research on transfer learning",
      "Text encoder for image generators",
    ],
    funFact:
      "T5 was trained on a dataset Google named C4, short for \"Colossal Clean Crawled Corpus\" — a cleaned-up slice of the public web.",
    url: "https://en.wikipedia.org/wiki/T5_(language_model)",
    spawnWeight: 0.5,
  },
  {
    id: "rag",
    name: "RAG",
    abbr: "RAG",
    category: "AI Technique",
    color: "#0ea5e9",
    description:
      "Retrieval-Augmented Generation looks up relevant documents first, then gives them to a language model so its answer is based on real, up-to-date information.",
    highlights: [
      "Chatbots that answer from your docs",
      "Reducing AI hallucinations",
      "Customer support assistants",
    ],
    funFact:
      "The term came from a 2020 paper led by Patrick Lewis at Facebook AI Research. He has joked that the team would have picked a nicer name if they'd known how popular it would get.",
    url: "https://en.wikipedia.org/wiki/Retrieval-augmented_generation",
  },
  {
    id: "embeddings",
    name: "Embeddings",
    abbr: "EMB",
    category: "AI Concept",
    color: "#14b8a6",
    description:
      "Lists of numbers that represent the meaning of text, images or other data. Similar things get similar numbers, so computers can measure how related two pieces of content are.",
    highlights: [
      "Semantic search",
      "Recommendations",
      "Grouping similar documents",
    ],
    funFact:
      "In word2vec embeddings from 2013, you could do math with meaning: the vector for king − man + woman lands very close to queen.",
    url: "https://en.wikipedia.org/wiki/Word_embedding",
  },
  {
    id: "vector-search",
    name: "Vector Search",
    abbr: "VS",
    category: "AI Technique",
    color: "#06b6d4",
    description:
      "Searching by meaning instead of exact keywords. Content is turned into embeddings, and the search finds items whose vectors are closest to the query's vector.",
    highlights: [
      "Finding documents for RAG",
      "Search by meaning, not keywords",
      "Image and product similarity search",
    ],
    funFact:
      "A popular vector search algorithm, HNSW, builds a layered graph like a skip list, hopping across long links first and then zooming in on the nearest neighbors.",
    url: "https://en.wikipedia.org/wiki/Nearest_neighbor_search",
  },
  {
    id: "fine-tuning",
    name: "Fine-Tuning",
    abbr: "FT",
    category: "ML Technique",
    color: "#f97316",
    description:
      "Taking a model that's already trained and training it a bit more on your own examples. This adapts it to a specific task, style or domain without starting from scratch.",
    highlights: [
      "Teaching a model your brand's tone",
      "Specializing models for medicine or law",
      "Turning base models into chatbots",
    ],
    funFact:
      "ChatGPT itself came from fine-tuning: OpenAI took a GPT-3.5 model and refined it with human feedback (RLHF) to make it a helpful conversational assistant.",
    url: "https://en.wikipedia.org/wiki/Fine-tuning_(deep_learning)",
  },
  {
    id: "lora",
    name: "LoRA",
    abbr: "LoRA",
    category: "ML Technique",
    color: "#ec4899",
    description:
      "Low-Rank Adaptation is a cheap way to fine-tune big models. Instead of changing all the weights, it trains small add-on matrices, so you need far less memory and storage.",
    highlights: [
      "Fine-tuning LLMs on one GPU",
      "Custom styles for image models",
      "Swapping small adapters per task",
    ],
    funFact:
      "The 2021 LoRA paper from Microsoft reported cutting the number of trainable parameters for GPT-3 by about 10,000 times compared with full fine-tuning.",
    url: "https://arxiv.org/abs/2106.09685",
  },
  {
    id: "quantization",
    name: "Quantization",
    abbr: "Q",
    category: "ML Technique",
    color: "#84cc16",
    description:
      "Shrinking a model by storing its numbers with fewer bits, like 4-bit instead of 16-bit. The model gets much smaller and faster, usually losing only a little accuracy.",
    highlights: [
      "Running LLMs on laptops",
      "Faster, cheaper inference",
      "On-device AI on phones",
    ],
    funFact:
      "A 70-billion-parameter model needs about 140 GB of memory at 16 bits per weight, but only around 35 GB when quantized to 4 bits.",
    url: "https://en.wikipedia.org/wiki/Quantization_(signal_processing)",
  },
  {
    id: "ai-agents",
    name: "AI Agents",
    abbr: "AGT",
    category: "AI Concept",
    color: "#8b5cf6",
    description:
      "AI systems that don't just answer once, but plan steps, use tools and act in a loop to reach a goal — like searching the web, running code and checking results on their own.",
    highlights: [
      "Coding agents that edit projects",
      "Automating multi-step workflows",
      "Research and browsing assistants",
    ],
    funFact:
      "The idea is decades old: the classic textbook \"Artificial Intelligence: A Modern Approach\" defines AI as the study of agents that perceive and act.",
    url: "https://en.wikipedia.org/wiki/Intelligent_agent",
  },
  {
    id: "tool-calling",
    name: "Tool Calling",
    abbr: "TC",
    category: "AI Technique",
    color: "#f59e0b",
    description:
      "A feature that lets a language model ask your program to run a function, like checking the weather or querying a database, and then use the result in its answer.",
    highlights: [
      "Letting chatbots fetch live data",
      "Connecting AI to your APIs",
      "The engine behind AI agents",
    ],
    funFact:
      "The model never runs the tool itself — it outputs a structured request (usually JSON), your code runs the function, and then sends the result back to the model.",
    url: "https://platform.openai.com/docs/guides/function-calling",
  },
  {
    id: "multimodal-ai",
    name: "Multimodal AI",
    abbr: "MM",
    category: "AI Concept",
    color: "#d946ef",
    description:
      "AI that understands and works with several types of data — like text, images, audio and video — together, such as describing a photo or answering questions about a chart.",
    highlights: [
      "Describing and reading images",
      "Voice conversations with AI",
      "Understanding videos and diagrams",
    ],
    funFact:
      "OpenAI's CLIP, released in 2021, learned to connect pictures and words by training on about 400 million image–text pairs gathered from the internet.",
    url: "https://en.wikipedia.org/wiki/Multimodal_learning",
  },
  {
    id: "model-distillation",
    name: "Model Distillation",
    abbr: "KD",
    category: "ML Technique",
    color: "#06b6d4",
    description:
      "Training a small \"student\" model to imitate a large \"teacher\" model. The student ends up much faster and cheaper while keeping much of the teacher's skill.",
    highlights: [
      "Small models for phones",
      "Cheaper, faster AI services",
      "Compressing large LLMs",
    ],
    funFact:
      "DistilBERT, a distilled version of BERT, is about 40% smaller and 60% faster while keeping roughly 97% of BERT's language-understanding ability.",
    url: "https://en.wikipedia.org/wiki/Knowledge_distillation",
    spawnWeight: 0.5,
  },
  {
    id: "mcp",
    name: "MCP",
    abbr: "MCP",
    category: "AI Protocol",
    color: "#cc785c",
    description:
      "The Model Context Protocol is an open standard for connecting AI assistants to tools and data sources. Write an MCP server once, and any MCP-compatible AI app can use it.",
    highlights: [
      "Connecting AI to files and databases",
      "Plugging tools into coding agents",
      "Sharing integrations across AI apps",
    ],
    funFact:
      "Anthropic introduced MCP in November 2024, and it's often described as \"USB-C for AI\" — one standard plug instead of a custom cable for every tool.",
    url: "https://modelcontextprotocol.io",
  },
];

export default entries;
