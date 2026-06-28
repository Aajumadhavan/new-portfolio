export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
}

export interface Stat {
  id: string;
  value: number;
  suffix: string;
  label: string;
}

export interface ExperienceItem {
  id: string;
  company: string;
  role: string;
  duration: string;
  location: string;
  responsibilities: string[];
  skills: string[];
  logoPlaceholder: string;
}

export interface SkillCategory {
  category: string;
  items: string[];
}

export interface Certificate {
  id: string;
  title: string;
  organization: string;
  image: string;
  viewUrl?: string;
  downloadUrl?: string;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  company: string;
  message: string;
  avatar: string;
}

export interface PortfolioItem {
  id: string;
  title: string;
  category: string;
  image: string;
  screenshots?: string[];
  pdfUrl?: string;
  videoUrl?: string;
  beforeAfter?: {
    before: string;
    after: string;
  };
  description: string;
  client: string;
  tools: string[];
  challenge: string;
  solution: string;
  outcome: string;
}

export interface CaseStudy {
  id: string;
  title: string;
  category: string;
  problem: string;
  solution: string;
  tools: string[];
  metrics: {
    label: string;
    value: number;
    suffix: string;
    prefix?: string;
  }[];
  image: string;
}

export const navItems = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Portfolio", href: "#portfolio" },
  { label: "Experience", href: "#experience" },
  { label: "Contact", href: "#contact" },
];

export const statsData: Stat[] = [
  { id: "stat-1", value: 3, suffix: "+", label: "Years of Experience" },
  { id: "stat-2", value: 100, suffix: "+", label: "Designs Created" },
  { id: "stat-3", value: 20, suffix: "+", label: "Marketing Campaigns" },
  { id: "stat-4", value: 5, suffix: "+", label: "Industries Served" },
];

export const servicesData: Service[] = [
  {
    id: "srv-1",
    title: "Google Ads Management",
    description: "High-ROI Search, Display, Performance Max, and Shopping campaigns structured for scaling conversion volume.",
    iconName: "google-ads",
  },
  {
    id: "srv-2",
    title: "Meta Ads Strategy",
    description: "Full-funnel advertising across Facebook and Instagram focusing on catalog sales, lead gen, and custom audience scaling.",
    iconName: "meta-ads",
  },
  {
    id: "srv-3",
    title: "LinkedIn B2B Advertising",
    description: "Hyper-targeted B2B campaigns reaching decision-makers, executives, and precise corporate audiences to drive quality leads.",
    iconName: "linkedin-ads",
  },
  {
    id: "srv-4",
    title: "Social Media Marketing",
    description: "Organic and paid social content plans built to scale brand affinity, community interaction, and referral traffic.",
    iconName: "social-media",
  },
  {
    id: "srv-5",
    title: "Creative Design",
    description: "Bespoke digital creatives optimized for marketing hooks, emotional resonance, and click-through performance.",
    iconName: "creative",
  },
  {
    id: "srv-6",
    title: "Logo Design & Branding",
    description: "Developing visual identities, color palettes, styles, and vector logotypes that define a brand's market authority.",
    iconName: "logo-design",
  },
  {
    id: "srv-7",
    title: "Poster & Ad Creatives",
    description: "High-impact visual designs for banners, print media, social feeds, and digital billboards.",
    iconName: "poster-design",
  },
  {
    id: "srv-8",
    title: "SEO Content Writing",
    description: "Optimized copywriting incorporating strategic search intent, keywords, and outline formatting to rank on Google.",
    iconName: "seo-writing",
  },
  {
    id: "srv-9",
    title: "Blog Writing & Editorial",
    description: "Informative, educational articles written to demonstrate topical authority, build credibility, and convert readers.",
    iconName: "blog-writing",
  },
  {
    id: "srv-10",
    title: "Campaign Optimization",
    description: "A/B testing ad copy, landing pages, custom placements, bidding strategies, and audience segmentation for peak ROI.",
    iconName: "optimization",
  },
  {
    id: "srv-11",
    title: "Analytics & Reporting",
    description: "Configuring Looker Studio dashboards, Google Analytics 4 tracking, and server-side conversion APIs for clean data flow.",
    iconName: "analytics",
  },
  {
    id: "srv-12",
    title: "Brand Growth Strategy",
    description: "Multi-channel funnel mapping, competitive auditing, and conversion rate optimization (CRO) roadmap design.",
    iconName: "strategy",
  },
];

export const portfolioItems: PortfolioItem[] = [
  {
    id: "port-1",
    title: "SaaS Launch Social Creatives",
    category: "Social Media",
    image: "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
    screenshots: [
      "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?auto=format&fit=crop&w=800&q=80",
      "https://images.unsplash.com/photo-1542744094-3a31f103e35f?auto=format&fit=crop&w=800&q=80"
    ],
    description: "A series of high-converting social media posts designed to generate sign-ups for a newly launched B2B collaboration tool.",
    client: "CollabSync Inc.",
    tools: ["Photoshop", "Illustrator", "Canva"],
    challenge: "The client needed templates that were visually distinct in cluttered LinkedIn feeds and could clearly convey product utility under 2 seconds.",
    solution: "Created templates utilizing a striking dark-indigo theme accented by high-contrast cyan, bold typography, and visual UI snippets highlighting core features.",
    outcome: "Helped achieve a 3.4% click-through rate across LinkedIn sponsored content, driving 1,200 initial platform sign-ups within 14 days."
  },
  {
    id: "port-2",
    title: "Modern FinTech Logo Redesign",
    category: "Logos",
    image: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80",
    beforeAfter: {
      before: "https://images.unsplash.com/photo-1618005198143-e52834643034?auto=format&fit=crop&w=800&q=80", // Old concept logo placeholder
      after: "https://images.unsplash.com/photo-1626785774573-4b799315345d?auto=format&fit=crop&w=800&q=80", // Modern logo
    },
    description: "Comprehensive rebranding and logo modernization for a retail banking platform to establish authority among millennial investors.",
    client: "Apex Wealth",
    tools: ["Illustrator", "Figma"],
    challenge: "The legacy identity was outdated and hard to scale down to mobile app icons or favicons, lacking a cohesive modern feel.",
    solution: "Designed a geometric vector logo combining an upward-pointing arrow and a stylized shield, representing growth and asset security, styled with a sleek gradient.",
    outcome: "Delivered a full vector system with responsive logo variations, brand guideline document, and SVG exports, resulting in 100% positive executive feedback."
  },
  {
    id: "port-3",
    title: "Google Ads Growth Campaign",
    category: "Campaigns",
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
    description: "Paid search campaign targeting premium corporate buyers for an enterprise cybersecurity vendor.",
    client: "Cybershield Tech",
    tools: ["Google Ads", "Google Analytics 4", "Google Tag Manager"],
    challenge: "High cost-per-lead (CPL) exceeding $150 and low search query relevance triggering budget waste.",
    solution: "Restructured the search account into single-intent groups, applied negative keywords aggressively, and built interactive landing pages matched to precise user queries.",
    outcome: "Reduced CPL by 42% (from $158 to $91) while increasing qualified demo requests by 65% over a 90-day cycle."
  },
  {
    id: "port-4",
    title: "Crypto Platform Product Poster",
    category: "Posters",
    image: "https://images.unsplash.com/photo-1634973357973-f2ed255753e1?auto=format&fit=crop&w=800&q=80",
    description: "A promotional 3D abstract style poster for a decentralized finance dashboard release, used at physical conferences and online banner placements.",
    client: "DeFi-Core",
    tools: ["Photoshop", "Cinema 4D"],
    challenge: "Creating visual depth that aligns with the complex theme of decentralized liquidity pools while ensuring high legibility of text.",
    solution: "Designed a glowing glassmorphic 3D rendering centered around a sphere, layering deep violet and neon purple gradients with clean typography overlay.",
    outcome: "Created significant buzz at the Token2049 conference booth, driving over 5,000 QR code scans leading to app downloads."
  },
  {
    id: "port-5",
    title: "Ultimate SEO Strategy Guide",
    category: "Blogs",
    image: "https://images.unsplash.com/photo-1499750310107-5fef28a66643?auto=format&fit=crop&w=800&q=80",
    pdfUrl: "/public/resume/dummy.pdf", // Can link to a pdf document
    description: "A comprehensive, 4,500-word educational guide explaining the mechanics of search engine topical authority and semantic SEO.",
    client: "RankGrow Media",
    tools: ["WordPress", "SurferSEO", "Notion", "ChatGPT"],
    challenge: "Ranking for the highly competitive keyword 'Topical Authority Guide' which is dominated by high Domain Authority sites.",
    solution: "Built a detailed pillar page answering all core subtopics, with custom graphics, schema markup, and external source integrations.",
    outcome: "Achieved a Page 1 Google ranking (Position 4) in 6 weeks, driving 4,500+ organic views monthly with an average dwell time of 5.5 minutes."
  },
  {
    id: "port-6",
    title: "Real Estate Digital Brochure",
    category: "Brochures",
    image: "https://images.unsplash.com/photo-1586075010923-2dd4570fb338?auto=format&fit=crop&w=800&q=80",
    description: "A multi-page interactive PDF brochure showcasing a luxury residential high-rise project in downtown Seattle.",
    client: "Aura Developers",
    tools: ["Illustrator", "InDesign"],
    challenge: "Conveying exclusivity and luxury layouts inside a standard digital layout shared over WhatsApp and email.",
    solution: "Implemented dark background layers, golden grid lines, clean margins, high-quality architecture photos, and integrated interactive call links directly in the PDF.",
    outcome: "Distributed to 400+ high-net-worth individuals, resulting in 28 private viewing bookings within 30 days."
  },
  {
    id: "port-7",
    title: "Black Friday Sale Ad Banners",
    category: "Banners",
    image: "https://images.unsplash.com/photo-1563013544-824ae1d704d3?auto=format&fit=crop&w=800&q=80",
    description: "A suite of responsive web banners (leaderboard, skyscraper, square) for an e-commerce fashion brand's seasonal sale.",
    client: "VogueThreads",
    tools: ["Photoshop", "Illustrator"],
    challenge: "Maintaining brand guidelines while displaying heavily discounted pricing labels clearly at various screen dimensions.",
    solution: "Developed an dynamic design system with a high-contrast red-orange button palette, transparent card overlays, and bold countdown highlights.",
    outcome: "Used across display retargeting channels, delivering a 2.1% CTR and contributing to a record $120k sales day."
  }
];

export const caseStudiesData: CaseStudy[] = [
  {
    id: "case-1",
    title: "E-Commerce Return on Ad Spend (ROAS) Optimization",
    category: "Meta & Google Ads",
    problem: "An e-commerce brand was experiencing declining ROAS (1.8x) due to broad targeting, rising CPMs on Meta, and unoptimized creative performance.",
    solution: "Restructured the acquisition funnel with high-intent Meta catalogs, custom audience lookalikes, and broad-match Google Search campaigns paired with negative lists. Designed 25+ new direct-response video creatives featuring user testimonials.",
    tools: ["Meta Ads Manager", "Google Ads", "TripleWhale", "Photoshop", "GA4"],
    metrics: [
      { label: "ROAS Increase", value: 165, suffix: "%" },
      { label: "Cost Per Acquisition", value: 34, suffix: "% Reduction", prefix: "-" },
      { label: "Purchase Value Generated", value: 450, suffix: "k+", prefix: "$" },
    ],
    image: "https://images.unsplash.com/photo-1460925895917-afdab827c52f?auto=format&fit=crop&w=800&q=80",
  },
  {
    id: "case-2",
    title: "B2B SaaS Lead Generation & Content Funnel Setup",
    category: "B2B LinkedIn & SEO",
    problem: "A security SaaS software provider struggled to generate qualified enterprise demos, relying on expensive and uncalibrated outbound sequences.",
    solution: "Built a content hub focused on regulatory compliance topics (SOC2, GDPR). Distributed these guides via Lead Gen forms on LinkedIn targeting CIOs and CTOs, coupled with retargeting ads highlighting social proof.",
    tools: ["LinkedIn Campaign Manager", "HubSpot", "SurferSEO", "Illustrator"],
    metrics: [
      { label: "Qualified Leads", value: 240, suffix: "% Increase" },
      { label: "Demo Booking Cost", value: 48, suffix: "% Drop", prefix: "-" },
      { label: "Pipeline Created", value: 1.2, suffix: "M+", prefix: "$" },
    ],
    image: "https://images.unsplash.com/photo-1551836022-d5d88e9218df?auto=format&fit=crop&w=800&q=80",
  }
];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Codingmart Technologies",
    role: "Performance Marketer & Creative Designer",
    duration: "Jan 2024 - Present",
    location: "Bengaluru, India",
    responsibilities: [
      "Strategized and executed search and social ad campaigns across Google Ads, Meta Ads, and LinkedIn Ads, managing budgets exceeding $15,000 monthly.",
      "Designed high-converting landing pages and visual assets (logos, display banners, brochures, social templates) reducing developer reliance.",
      "Conducted extensive copywriting for SEO-driven blogs, ad copies, email newsletters, and conversion-focused sales funnels.",
      "Analyzed web analytics using GA4, GTM, and Looker Studio, implementing server-side API setups to capture attribution accurately."
    ],
    skills: ["Google Ads", "Meta Ads", "LinkedIn Ads", "GA4", "GTM", "Photoshop", "Illustrator", "SEO Copywriting"],
    logoPlaceholder: "CM"
  },
  {
    id: "exp-2",
    company: "Freelance Services",
    role: "Digital Marketer & Graphic Designer",
    duration: "Aug 2022 - Dec 2023",
    location: "Remote",
    responsibilities: [
      "Offered branding, visual design, and social media advertising services to local businesses and small-scale startups.",
      "Designed and scaled logo brands and cohesive branding kits (typography, palette, patterns) for 15+ micro-brands.",
      "Created content calendars, written review articles, and launched Meta ads resulting in organic and paid subscriber growth."
    ],
    skills: ["Meta Ads", "Canva", "Photoshop", "Brand Design", "WordPress", "SEO Copywriting"],
    logoPlaceholder: "FL"
  },
  {
    id: "exp-3",
    company: "Vedantu",
    role: "Academic Associate",
    duration: "Jun 2021 - Jul 2022",
    location: "Bengaluru, India (Hybrid)",
    responsibilities: [
      "Mentored and guided students in learning paths, monitoring academic performance logs.",
      "Created structured study materials, slides, and graphical summaries to simplify complex technical topics.",
      "Leveraged CRM systems (Salesforce) and Excel to manage student engagement files and project pipelines."
    ],
    skills: ["CRM", "Excel", "Public Speaking", "Content Creation"],
    logoPlaceholder: "VD"
  },
  {
    id: "exp-4",
    company: "Nireerkshan Engineering",
    role: "Engineer Trainee",
    duration: "Oct 2020 - May 2021",
    location: "Chennai, India",
    responsibilities: [
      "Monitored field assembly lines and verified product tolerances according to blueprints.",
      "Compiled engineering quality test logs, tracking deviations in mechanical system blueprints.",
      "Supported technical documentation tasks and draft reports using AutoCAD."
    ],
    skills: ["AutoCAD", "Excel", "Technical Documentation", "Quality Control"],
    logoPlaceholder: "NE"
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Performance Marketing",
    items: ["Google Ads", "Meta Ads", "LinkedIn Ads", "Google Analytics (GA4)", "Google Tag Manager (GTM)", "A/B Testing", "Conversion Funnels", "Looker Studio"]
  },
  {
    category: "Creative & Brand Design",
    items: ["Canva", "Adobe Photoshop", "Adobe Illustrator", "Figma", "Logo Design", "Brand Guidelines", "Print Brochures", "Ad Banner Layouts"]
  },
  {
    category: "Content & Copywriting",
    items: ["SEO Article Writing", "Blogging", "Marketing Copywriting", "Sales Page Structure", "Keyword Research", "On-Page Optimization"]
  },
  {
    category: "Tools & Productivity",
    items: ["Microsoft Excel", "WordPress", "Notion", "ChatGPT", "Google Gemini", "Claude AI", "Asana / Trello", "Slack"]
  }
];

export const certificatesData: Certificate[] = [
  {
    id: "cert-1",
    title: "Google Ads Search Certification",
    organization: "Google Digital Academy",
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=600&q=80",
    viewUrl: "https://skillshop.exceedlms.com/student/path/18128-google-ads-search-certification",
    downloadUrl: "#"
  },
  {
    id: "cert-2",
    title: "Meta Certified Digital Marketing Associate",
    organization: "Meta Blueprint",
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=600&q=80",
    viewUrl: "https://www.credly.com",
    downloadUrl: "#"
  },
  {
    id: "cert-3",
    title: "Inbound Marketing Certification",
    organization: "HubSpot Academy",
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=600&q=80",
    viewUrl: "https://academy.hubspot.com",
    downloadUrl: "#"
  },
  {
    id: "cert-4",
    title: "Advanced Google Analytics (GA4)",
    organization: "Google Analytics Academy",
    image: "https://images.unsplash.com/photo-1589330694653-ded6df03f754?auto=format&fit=crop&w=600&q=80",
    viewUrl: "https://analytics.google.com",
    downloadUrl: "#"
  }
];

export const testimonialsData: Testimonial[] = [
  {
    id: "test-1",
    name: "Sarah Jenkins",
    role: "Founder & CEO",
    company: "LuxEcom",
    message: "Our Facebook Ads ROAS jumped from 1.5x to a consistent 3.2x within two months of working together. The creative ad creatives designed matched our upscale aesthetic beautifully.",
    avatar: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "test-2",
    name: "Vikram Mehta",
    role: "VP of Growth",
    company: "ScribeFlow B2B",
    message: "The B2B LinkedIn campaign funnel created yielded highly qualified enterprise leads. The landing pages and SEO blog posts structured drove substantial organic traffic as well.",
    avatar: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?auto=format&fit=crop&w=150&q=80"
  },
  {
    id: "test-3",
    name: "Emily Rodriguez",
    role: "Marketing Director",
    company: "Apex Tech Solutions",
    message: "A perfect blend of analytical campaign data modeling and incredible graphic designs. It is very rare to find a marketer who can write engaging content and design vectors.",
    avatar: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=150&q=80"
  }
];
