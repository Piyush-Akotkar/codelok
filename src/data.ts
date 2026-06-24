import { 
  ServiceItem, 
  SolutionPackage, 
  ClientTestimonial, 
  EnterpriseProject, 
  TechCategory, 
  BlogPost 
} from "./types";

export const CODELOK_STATS = [
  { value: "100+", label: "Projects Delivered", detail: "Global cloud scaling, high-performance web systems, & active custom solutions." },
  { value: "6+", label: "Years Experience", detail: "Rooted in enterprise-grade AWS engineering, modern TypeScript, & DevOps practices." },
  { value: "99.9%", label: "System Uptime", detail: "Underpinned by multi-AZ automatic recovery configurations & self-healing nodes." },
  { value: "50+", label: "Happy Clients", detail: "From high-growth venture-backed startups to publicly traded clinical & fintech platforms." }
];

export const TRUST_PARTNERS = [
  { name: "AWS", category: "cloud" },
  { name: "React", category: "frontend" },
  { name: "Next.js", category: "frontend" },
  { name: "TypeScript", category: "language" },
  { name: "Node.js", category: "backend" },
  { name: "Docker", category: "devops" },
  { name: "Kubernetes", category: "devops" },
  { name: "MongoDB", category: "database" },
  { name: "PostgreSQL", category: "database" },
  { name: "OpenAI", category: "ai" },
  { name: "Flutter", category: "mobile" },
  { name: "React Native", category: "mobile" }
];

export const CODELOK_SERVICES: ServiceItem[] = [
  {
    id: "cloud-infra-devops",
    title: "Cloud Infrastructure & DevOps",
    iconName: "Cloud",
    shortDescription: "Architect resilient AWS environments designed to scale to millions of requests with optimal resource consumption.",
    longDescription: "Our premium Cloud Infrastructure and DevOps service bridges the gap between software development and continuous production health. We create infrastructure purely through code (IaC), establish standardized pipelines, and lock down secure multi-account organizations.",
    benefits: [
      "Improve system resilience with multi-region self-healing active clusters.",
      "Eliminate manual testing bottlenecks through continuous delivery pipelines.",
      "Track container state dynamically with centralized logging dashboards.",
      "Cut unused AWS compute waste with automated scaling and spot utilization."
    ],
    technologies: ["AWS CloudFormation", "Terraform", "Docker", "Kubernetes", "GitHub Actions", "Prometheus", "Datadog"],
    processSteps: [
      "Threat modeling, system requirements assessment, and network isolation planning.",
      "Developing Dagger or Terraform scripts to define VPC networks, subnets, and IAM bounds.",
      "Drafting secure build processes, test triggers, and serverless rollout configurations.",
      "Enabling load test simulation, and fine-tuning auto-scaling limits for low-latency delivery."
    ],
    faqs: [
      { question: "How does CodeLok prevent massive cloud bills during spikes?", answer: "We implement dynamic auto-scaling thresholds, utilize cost-efficient AWS Graviton architectures, and establish real-time budgets that automatically prevent runaway billing loops." },
      { question: "Do you support GCP and Azure besides AWS?", answer: "Yes, our certified cloud team operates across Google Cloud and Microsoft Azure, though AWS remains our recommended partner blueprint for high-volume enterprise applications." }
    ]
  },
  {
    id: "cloud-migration",
    title: "Cloud Migration",
    iconName: "Database",
    shortDescription: "Secure cloud migration of legacy infrastructure and database records with absolute zero downtime.",
    longDescription: "We manage transition strategies for complex setups, safely packing legacy monolith servers, clinical databases, or e-commerce workflows into modern containerized AWS instances. We prioritize data integrity, compliance, and transparent cutovers.",
    benefits: [
      "Zero-downtime database replication with synchronized read-writes.",
      "De-risk physical infrastructure overheads completely.",
      "Upgrade legacy frameworks to modern LTS releases in transit.",
      "Maintain strict regulatory compliance (HIPAA, PCI-DSS) throughout the cycle."
    ],
    technologies: ["AWS Database Migration Service", "AWS Snowball", "Docker", "Flyway Migration", "PostgreSQL PG_dump"],
    processSteps: [
      "Comprehensive inventory analysis of current server logs, licenses, and direct dependencies.",
      "Staged copying of non-volatile operational files to temporary staging buckets.",
      "Setting up real-time bidirectional database sync until both nodes are physically identical.",
      "DNS switch during low-traffic periods, and immediate validation check of all endpoints."
    ],
    faqs: [
      { question: "Will our live users experience any disruption?", answer: "None. We configure dual-write operations and synchronized mirrors, allowing us to perform the physical server switch over in milliseconds." },
      { question: "Do you modernization the app stack during the migrate?", answer: "We evaluate your legacy code and apply targeted upgrades. We typically encapsulate services inside Docker for easier container orchestration on arrival." }
    ]
  },
  {
    id: "custom-software",
    title: "Custom Software Development",
    iconName: "Cpu",
    shortDescription: "Feature-rich SaaS platforms, administrative portals, and responsive business software built to scale.",
    longDescription: "We engineer proprietary digital assets tailored exactly to your unique organizational goals. Our applications are robust, type-safe, built with scalable nested schemas, and optimized for smooth user performance.",
    benefits: [
      "Full ownership of application intellectual property.",
      "Instant modular expansion path using clean TypeScript definitions.",
      "Native integrations with enterprise accounting, logistics, and identity providers.",
      "Stunning desktop responsiveness and interactive performance."
    ],
    technologies: ["React Workspace", "Vite JS", "TypeScript", "Node Express", "Prisma ORM", "Tailwind CSS"],
    processSteps: [
      "Mapping end-user stories, workflow triggers, and interface wirefame schemas.",
      "Erecting API schemas and relational database schemas.",
      "Writing robust frontend interface panels supported by resilient state engines.",
      "Validating access levels and performance-tuning render cycles."
    ],
    faqs: [
      { question: "Who owns the code source files upon completion?", answer: "You do. We transfer complete Intellectual Property, Git history, and deployment keys to your legal entity upon final delivery milestone approvals." },
      { question: "Can our internal software engineers easily take over the product?", answer: "Yes. All our products feature comprehensive documentation, extensive type safety declarations, and isolated modular services to allow for rapid handovers." }
    ]
  },
  {
    id: "website-dev",
    title: "Website Development",
    iconName: "Globe",
    shortDescription: "Stunning corporate sites and lightning-fast marketing experiences configured for ultimate conversion.",
    longDescription: "Our corporate websites combine elite visual graphics, outstanding typography, and perfect UX architecture. They load in milliseconds, score 95+ on Lighthouse, and deliver a brand design that establishes trust with elite Fortune 500 decision-makers.",
    benefits: [
      "Unmatched loading speeds directly increasing marketing ad conversion ratios.",
      "Dynamic integration with major Lead Trackers and HubSpot interfaces.",
      "Fully responsive formatting across smartphones, tablets, and wide monitors.",
      "Engineered for native SEO with proper schema metadata and Open Graph tags."
    ],
    technologies: ["React 19", "Vite", "Tailwind CSS 4", "Framer Motion", "Lucide Icons", "Google PageSpeed Tools"],
    processSteps: [
      "Drafting modern typography, layout grids, and brand-aligned asset themes.",
      "Coding clean, semantic web layouts backed by fast-loading responsive assets.",
      "Setting up lead validation forms, automated scheduler calendars, and analytics.",
      "Cross-device validation testing and compression optimizations."
    ],
    faqs: [
      { question: "How do you achieve perfect search engine discovery?", answer: "We embed precise JSON-LD schema layouts, proper HTML tags, structured metadata, and compile razor-fast loading pages that Google prioritizes." },
      { question: "Do you include content editing tools?", answer: "We provide seamless headless system setups or simple content panels so your marketing team can publish new posts without code modifications." }
    ]
  },
  {
    id: "mobile-dev",
    title: "Mobile App Development",
    iconName: "Smartphone",
    shortDescription: "Ultra-smooth native iOS and Android experiences featuring offline storage & device integration.",
    longDescription: "We build intuitive, high-performance mobile applications on Flutter and React Native. Our mobile apps provide native performance heights, fluid transitions, push telemetry, local asset encryption, and clean offline sync.",
    benefits: [
      "Single-codebase deployment for parallel Android and App Store rollouts.",
      "Silky-smooth UI render loops hitting 120Hz refresh targets.",
      "Sophisticated background notifications and interactive widgets.",
      "Encrypted sqlite local schemas for safe performance on flaky networks."
    ],
    technologies: ["React Native", "Flutter", "TypeScript", "Dart", "Redux Toolkit", "SQLite Local", "Firebase Push"],
    processSteps: [
      "Creating tactile mobile mockups and navigation flow diagrams.",
      "Integrating native device sensors, cameras, and local secure storage keychains.",
      "Connecting local listeners to server gateways for synchronized telemetry storage.",
      "Rigorous simulation sweeps and official Play/App Store publishing."
    ],
    faqs: [
      { question: "Should we build on React Native or Flutter?", answer: "Both are incredible. We recommend React Native if your website uses React, as it permits extensive codebase sharing. We suggest Flutter for high-density audio/visual layouts." },
      { question: "How are mobile app notifications configured?", answer: "We integrate Firebase Cloud Messaging, facilitating structured silent, interactive, and scheduled local notifications." }
    ]
  },
  {
    id: "ecommerce-solutions",
    title: "E-Commerce Solutions",
    iconName: "ShoppingCart",
    shortDescription: "Scalable e-commerce buildouts with custom checkout paths, ERP sync, & multi-region inventory.",
    longDescription: "Deploy robust store architectures designed to handle thousands of parallel checkout actions safely. From Shopify Plus integrations to custom headless Next.js storefronts, we configure reliable product flows.",
    benefits: [
      "Speedy checkout pages engineered to combat abandoned shopping carts.",
      "Automated logistics, billing invoice calculations, and real-time shipping carrier API integrations.",
      "Encrypted token processing keeping card records entirely separate from target servers.",
      "Intelligent recommendation blocks driving higher basket values."
    ],
    technologies: ["Shopify Plus API", "WooCommerce Custom", "Stripe API", "Node checkout", "Redis sessions", "ElasticSearch"],
    processSteps: [
      "Mapping catalog structures, variant limits, and payment gateway rules.",
      "Configuring shopping cart session validation blocks and transaction middleware.",
      "Plugging in warehouse notification systems, CRM trackers, and secure checkouts.",
      "Dry-run payment test loops and security stress validation."
    ],
    faqs: [
      { question: "How secure are custom payment operations?", answer: "Fully PCI-Compliant. We use Stripe tokenization and secure elements, which means sensitive credit card details never touch our local database schemas." },
      { question: "Can you link store sales with our internal ERP ledger?", answer: "Yes, we build robust sync tasks linking platforms with Oracle, SAP, Zoho, or customized local accounting frameworks." }
    ]
  },
  {
    id: "ai-integration",
    title: "AI Integration",
    iconName: "Sparkles",
    shortDescription: "Deploy smart LLM services, agentic business assistants, custom RAG pipelines, and search grounding.",
    longDescription: "Inject next-gen AI capabilities into your software. We build bespoke Retrieval-Augmented Generation (RAG) engines, cognitive file parsers, conversational client support agents, and predictive telemetry scrapers that elevate raw operational capacity.",
    benefits: [
      "Reduce repetitive client customer support loads by up to 80% using custom-grounded models.",
      "Extract structured JSON data from messy, unstructured PDFs and invoices in milliseconds.",
      "Optimize enterprise internal corporate knowledge searches with semantic search vectors.",
      "Deliver bespoke recommendations adapted to real-time client mouse movements."
    ],
    technologies: ["Gemini 3.5 Flash", "LangChain Suite", "Pinecone VectorDB", "OpenAI API", "Hugging Face Models", "LlamaIndex"],
    processSteps: [
      "Categorizing source file formats and defining chunking strategies for maximum accuracy.",
      "Seeding database embeddings with vector math algorithms inside secure database instances.",
      "Writing structured system constraints to completely block AI hallucinations and preserve brand tone.",
      "Prototyping dynamic evaluation checks to verify response accuracy under heavy stress."
    ],
    faqs: [
      { question: "Will our proprietary company files be used to train public models?", answer: "Never. We enforce isolated API channels with private endpoints, ensuring your secret training corpora remain 100% confidential and compliant." },
      { question: "How do you calculate model query costs?", answer: "We deploy optimization techniques such as selective prompt-cache templates and semantic query routing to ensure you only call models when necessary, drastically lowering expenses." }
    ]
  },
  {
    id: "api-dev",
    title: "API Development & Integration",
    iconName: "Code",
    shortDescription: "Write secure, self-documenting REST and GraphQL server interfaces connecting multiple legacy layers.",
    longDescription: "We assemble robust, blazing-fast API layers featuring rate-limiting shields, comprehensive Swagger autodocumentation, strict query parameters, and enterprise-grade OAuth access shields.",
    benefits: [
      "Facilitate seamless synchronization between external vendors and internal platforms.",
      "Isolate heavy business calculations out of client-side web packages.",
      "Future-proof systems via version-safe database access nodes.",
      "Maximize query speed with nested DB performance optimizations."
    ],
    technologies: ["Node Express JS", "TypeScript", "GraphQL Hub", "Apollo Server", "Swagger UI", "Redis Enterprise"],
    processSteps: [
      "Defining endpoint models, request validation parameters, and response types.",
      "Drafting route logic backed by input validations.",
      "Configuring rate limit guards to prevent system denial-of-service spikes.",
      "Generating automated documentation and test coverage checks."
    ],
    faqs: [
      { question: "How do we prevent API key leaks?", answer: "We use secure JSON Web Tokens (JWT) with rapid expiration windows, enforce HTTPS requests, and set up real-time telemetry tracking triggers." },
      { question: "Do you write detailed reference manuals for other developers?", answer: "Always. Every API arrives with clean, interactive OpenAPI documentation, allowing third-party engineers to test queries directly." }
    ]
  },
  {
    id: "maintenance-support",
    title: "Maintenance & Support",
    iconName: "ShieldAlert",
    shortDescription: "24/7 technical monitoring, security patch deployment, and resource tuning to ensure 100% system health.",
    longDescription: "Never worry about system downtime again. Our active SLA consulting packages guarantee around-the-clock server supervision, active threat sweeps, package updates, and real-time response times during database emergencies.",
    benefits: [
      "Instant peace of mind with 24/7 engineering help desk.",
      "Preemptive application of critical security patches and OS sweeps.",
      "Routine backup verification securing operations from hardware failures.",
      "Dynamic cost auditing ensuring server sizes shrink during slow seasons."
    ],
    technologies: ["PagerDuty", "AWS CloudWatch", "Relic Core", "Grafana Panels", "Automated Backup Scripts"],
    processSteps: [
      "Analyzing your app's peak traffic schedules and database logs.",
      "Inserting automated health telemetry listeners onto target machines.",
      "Defining custom phone/alert triggers to summon backup engineers in seconds.",
      "Publishing monthly diagnostic health cards for executive leadership."
    ],
    faqs: [
      { question: "What is your typical emergency response time?", answer: "Under our premier operational SLA, we promise a guaranteed 15-minute response target for critical production outages." },
      { question: "Do you charge fees during hours we don't request help?", answer: "We provide convenient fixed monthly retainer allocations, and any unused development hours roll forward into standard feature development task cards." }
    ]
  }
];

export const CODELOK_SOLUTIONS: SolutionPackage[] = [
  {
    id: "startup-launch",
    title: "Startup Launch Package",
    badge: "Venture Ready",
    priceEstimate: "₹5 Lakh - ₹12 Lakh",
    shortDescription: "Complete digital skeleton to transform your initial idea into a fully-functional MVP optimized for investor presentations.",
    features: [
      "Responsive React Web Platform",
      "Core Android & iOS Mobile Companion App",
      "Stripe or Local UPI Payment Gateway Sync",
      "Elastic AWS Cloud Server Configuration",
      "Automated CI/CD Delivery Pipeline",
      "3 Months Complete Code Handshake Support"
    ],
    targetAudience: "Startups, Founders, and Small Businesses seeking immediate validation.",
    includedDeliverables: ["Frontend Repository", "Backend REST API Node", "AWS IAM Credentials", "PostgreSQL database schemas"]
  },
  {
    id: "ecommerce-growth",
    title: "E-Commerce Growth Package",
    badge: "Scale Specialist",
    priceEstimate: "₹8 Lakh - ₹15 Lakh",
    shortDescription: "Custom headless e-commerce buildout with lightning fast SEO pages, detailed user dashboard, and direct CRM syncing.",
    features: [
      "Custom High-Speed Storefront Website",
      "Mobile Optimized Cart & Floating Checkout Check",
      "Dynamic Multi-Currency & Carrier Shipping API",
      "Integrated Inventory and Warehouse Notifications",
      "HubSpot / Salesforce Leads Tracking Bridge",
      "6 Months High-SLA Maintenance Pack"
    ],
    targetAudience: "Direct-to-consumer businesses, Global Brands, and high-volume Retail firms.",
    includedDeliverables: ["High-speed store client", "Custom checkout hooks", "Inventory sync API", "Analytics events tracker"]
  },
  {
    id: "enterprise-trans",
    title: "Enterprise Transformation Package",
    badge: "Modern Architecture Partner",
    priceEstimate: "₹20 Lakh - ₹50 Lakh",
    shortDescription: "Migrate legacy databases, modernize microservices, establish perfect DevOps cycles, and enforce clinical security structures.",
    features: [
      "Legislation-Safe Cloud Migration Audit",
      "Zero-Downtime Live Mirrored Database Sync",
      "Microservice Isolation via AWS ECS & Docker",
      "Enterprise Identity Integration (SAML, Okta)",
      "High Availability Automatic Failovers (Multi-AZ)",
      "Certified Security Audits & Threat Model Records"
    ],
    targetAudience: "Established Brands, Healthcare Systems, Logistics Entities, and Fintech platforms.",
    includedDeliverables: ["Terraform Config Files (IaC)", "Secured Web Cluster", "Active Logging Monitoring Panel", "Employee Auth Gate"]
  },
  {
    id: "ai-automation",
    title: "AI Automation Package",
    badge: "Innovation Acceleration",
    priceEstimate: "₹10 Lakh - ₹25 Lakh",
    shortDescription: "Enhance business velocity with custom AI models, semantic search databases, vector index structures, and auto-agents.",
    features: [
      "Custom Grounded AI Chat Assistant (RAG)",
      "Smart Multi-Format PDF Document Parser Node",
      "Machine-Driven Lead Behavior Classifiers",
      "Semantic Business Intelligence Search Engine",
      "Automated Slack/Email Action Response Triggers",
      "Comprehensive AI Hallucination Security Sweep"
    ],
    targetAudience: "Tech Firms, Legal Consultancies, customer service hubs, and SaaS Corporations.",
    includedDeliverables: ["Vector DB cluster keys", "PDF ingestion task scripts", "Support bot panel code", "LLM API caching middleware"]
  }
];

export const CODELOK_PORTFOLIO: EnterpriseProject[] = [
  {
    id: "case-cloud-migration",
    title: "Global FinTech Transaction Platform AWS Migration",
    category: "cloud",
    problem: "A high-frequency payment aggregator was choking on high on-premise hardware upkeep fees, experiencing periodic CPU lockups during holiday surges, and failing strict compliance audits.",
    solution: "CodeLok designed and executed a zero-downtime AWS database mirror system (DMS), moving transaction pipelines into Auto-scaling ECS containers backed by Amazon RDS PostgreSQL with Read Replicas.",
    outcome: "Successfully transitioned over 40 million critical ledger records without losing a single write. System latency plunged below 85ms globally.",
    technologies: ["AWS ECS", "Amazon Fargate", "AWS DMS", "Terraform", "PostgreSQL", "Route 53 Redundant"],
    resultsMetric: "60% Reduction in Monthly Infrastructure Bills"
  },
  {
    id: "case-ai-support",
    title: "Enterprise AI Medical Claims Intake Brain",
    category: "ai",
    problem: "A multi-hospital network's administrative desk was buried under thousands of complex health insurance claim layouts, causing a 6-day check backlog and human processing errors.",
    solution: "We engineered an intelligent custom RAG document engine powered by Gemini 3.5 Flash and vector databases. It extracts details from patient PDF uploads and formats claims into clean structured fields.",
    outcome: "System reads and verifies eligibility criteria in under 4 seconds, automatically tagging discrepancies for review.",
    technologies: ["Gemini 3.5 Flash", "ExpressJS", "Pinecone VectorDB", "LangChain Suite", "React client", "Docker"],
    resultsMetric: "80% Reduction in Claims Intake Workload"
  },
  {
    id: "case-realtime-dashboard",
    title: "Surgical Logistics Operational Command Center",
    category: "web",
    problem: "A major logistics provider tracked operations via messy, fragmented spreadsheets that updated only daily, resulting in expensive shipping trailer misallocations.",
    solution: "Created an interactive desktop administrative dashboard featuring real-time WebSocket messaging, dynamic charts, and geospatial route overlays.",
    outcome: "Dispatchers now view vehicle delays, trigger automated alternate route maps, and manage vendor SLA tracking with up-to-the-second precision.",
    technologies: ["React Workspace", "Recharts Components", "WebSockets Engine", "Node API", "AWS server", "PostgreSQL"],
    resultsMetric: "99.9% Uptime with Real-Time Analytics"
  },
  {
    id: "case-nextjs-ecommerce",
    title: "Elite Direct-To-Consumer Headless Retail Core",
    category: "ecommerce",
    problem: "An international consumer apparel label lost estimated 25% of potential checkouts due to slow pages loading, taking up to 7 seconds on mobile targets.",
    solution: "Coded a high-end headless storefront powered by React, dynamic Server rendering, and a distributed Redis caching layer configured to fetch catalog items instantly.",
    outcome: "Average mobile page loads plummeted below 450ms. Shopping cart conversion rates surged instantly.",
    technologies: ["React 19 SPA", "Vite build", "Shopify Store API", "Redis Enterprise", "Stripe Checkout Integration", "Tailwind styling"],
    resultsMetric: "300% Surge in Mobile Checkout Conversions"
  }
];

export const CODELOK_TECHNOLOGIES: TechCategory[] = [
  {
    categoryName: "Frontend Core",
    description: "Highly performant structural web technologies optimizing user engagement, layouts and typography.",
    techs: [
      { name: "React 19", level: 98, info: "Component-driven layout core supporting speedy render cycles and modern hook paradigms." },
      { name: "Next.js", level: 95, info: "Optimized server generation frameworks and robust modular site structures." },
      { name: "TypeScript", level: 100, info: "Stops compile defects completely with deep type-safety guidelines, mapping models on the fly." },
      { name: "Tailwind CSS 4.0", level: 96, info: "Utility-first design framework providing uniform spacing, fast assets loading, and polished cards." }
    ]
  },
  {
    categoryName: "Backend Services",
    description: "Durable API runtime engines, thread pools, and secure communication systems of record.",
    techs: [
      { name: "Node.js (Express)", level: 95, info: "Speedy asynchronous event-driven JavaScript compiler fueling high-throughput REST architectures." },
      { name: "Java Enterprise", level: 88, info: "Resilient object-oriented pipeline design fit for legacy bank logic and high CPU tasks." },
      { name: "Python Systems", level: 92, info: "Powers numerical array transformations, natural language parsing, and server script automation." }
    ]
  },
  {
    categoryName: "Cloud & DevOps Platforms",
    description: "Multi-region elastic cloud hosters, automated scaling clusters, and zero-downtime pipelines.",
    techs: [
      { name: "Amazon Web Services (AWS)", level: 98, info: "Certified architecture specialists designing secure VPCs, ECS container slots, KMS, and Lambdas." },
      { name: "Azure Hubs", level: 85, info: "Active hosting capabilities tailored to massive corporate systems and Windows legacy integrations." },
      { name: "Google Cloud (GCP)", level: 90, info: "Ideal ecosystem for analytics, complex machine learning clusters, and BigQuery data pools." },
      { name: "Kubernetes & Docker", level: 94, info: "Encapsulates application states inside tiny portable containers, facilitating automated node replacements." }
    ]
  },
  {
    categoryName: "Database Systems",
    description: "Secure structured and unstructured repositories keeping operations persistent and performant.",
    techs: [
      { name: "PostgreSQL", level: 96, info: "Robust relational database with complex ACID transactions, spatial indexes, and sync mirrors." },
      { name: "Amazon DynamoDB", level: 92, info: "JSON-based serverless key-value repository delivering consistent sub-millisecond lookups." },
      { name: "MongoDB", level: 90, info: "Document store facilitating loose record definitions and rapid iteration." }
    ]
  },
  {
    categoryName: "AI & Innovative Intelligence",
    description: "LLMs, vector comparison structures, semantic search filters, and smart content parsers.",
    techs: [
      { name: "Gemini 3.5 Suite", level: 97, info: "Advanced processing model hosting humongous context lengths and accurate system instructions." },
      { name: "Pinecone / pgvector", level: 94, info: "Stores high-dimension float mappings facilitating semantic context lookups for RAG search." },
      { name: "LangChain Suite", level: 90, info: "Chains complex LLM tasks, system templates, user memory buffers, and tool outputs together." }
    ]
  }
];

export const CLIENT_TESTIMONIALS: ClientTestimonial[] = [
  {
    id: "rev1",
    authorName: "Vikram Malhotra",
    role: "Chief Technology Officer",
    companyName: "IndiCart Logistics",
    rating: 5,
    reviewText: "CodeLok completely overhauled our logistics tracking systems. We went from periodic spreadsheet updates to a beautiful live tracking system. Our servers now scale smoothly on AWS to handle massive holiday packages."
  },
  {
    id: "rev2",
    authorName: "Elizabeth Vance",
    role: "VP of Digital Engineering",
    companyName: "Aura Clinical Health",
    rating: 5,
    reviewText: "We hired CodeLok to modernize our legacy scheduling interface is a HIPAA compliant environment. Not only was the timeline executed on schedule, but their database mirror system resulted in zero downtime for patients."
  },
  {
    id: "rev3",
    authorName: "Siddharth Goel",
    role: "Founder & CEO",
    companyName: "Finly AI Platform",
    rating: 5,
    reviewText: "The team's mastery of AWS cloud infrastructure saved our startup lakhs of rupees in unnecessary server licensing fees. Their custom AI generator integrations turned our initial MVP into an investor-ready solution ahead of schedule."
  }
];

export const CODELOK_BLOGS: BlogPost[] = [
  {
    id: "blog-1",
    title: "Optimizing AWS Lambda Cold Starts: An Enterprise Guide",
    category: "AWS & Serverless",
    author: "Prasanna Kumar (Principal Architect)",
    date: "June 12, 2026",
    readTime: "7 Min Read",
    summary: "How enterprise systems bypass severe cold-start latencies to maintain transaction responsiveness using customized runtime provisions and memory allocations.",
    content: [
      "In modern serverless infrastructures, the latency added when an idle function boots for the first time is a common performance bottleneck.",
      "Our team solved this for a transaction client by utilizing Graviton ARM-based architectures and fine-tuning Provisioned Concurrency schedules.",
      "This guide lays out the step-by-step commands to trace execution times, optimize database connection pools, and reduce memory wastage by up to 40%."
    ]
  },
  {
    id: "blog-2",
    title: "Empowering RAG Architectures: Fine-Tuning or Prompt Guardrails?",
    category: "Artificial Intelligence",
    author: "Deepika Sen (AI Engineering Lead)",
    date: "May 28, 2026",
    readTime: "9 Min Read",
    summary: "A detailed breakdown of when to invest in continuous custom model fine-tuning versus constructing robust Retrieval-Augmented Generation context systems.",
    content: [
      "Many corporate teams mistakenly believe custom AI requires expensive fine-tuning of base model files.",
      "We explain why semantic vector databases combined with high-context LLMs like Gemini 3.5 produce highly accurate corporate answers at a fraction of the budget.",
      "Learn how to design safe system instructions that keep customer support chat bots strictly aligned with your corporate handbook."
    ]
  },
  {
    id: "blog-3",
    title: "The Zero-Downtime Migration Blueprint for Relational Databases",
    category: "Cloud Migration",
    author: "Nikhil Joshi (Database Administrator)",
    date: "April 15, 2026",
    readTime: "11 Min Read",
    summary: "An in-depth look at how dual-write configurations and continuous logical replication streams prevent business downtime during major server transitions.",
    content: [
      "Migrating legacy patient logs or e-commerce records to the cloud carries immense business risk.",
      "By establishing continuous replication streams, we run legacy systems in tandem with the brand new AWS PostgreSQL cluster until both are identical.",
      "Explore the precise rollback checklist our operations team uses to ensure 100% data integrity with zero client impact."
    ]
  }
];
