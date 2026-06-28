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
  { label: "Skills", href: '#skills' },
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
    title: "Shopify Store Setup & Design",
    description: "Building high-converting, fully customized Shopify e-commerce stores with clean themes, product setups, and app integrations.",
    iconName: "shopify",
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
  // --- LOGOS ---
  {
    id: "port-logo-1",
    title: "Minimalist Corporate Logo",
    category: "Logos",
    image: "/logos/1.png",
    description: "Sleek and minimalist corporate brand logo designed for a professional business identity.",
    client: "Corporate Ventures",
    tools: ["Illustrator", "Figma"],
    challenge: "Creating a modern and clean emblem that retains readability at small scales like icons or headers.",
    solution: "Designed a geometric vector logo utilizing negative space and crisp typography.",
    outcome: "Successfully launched as primary brand identity across corporate stationery and web layouts."
  },
  {
    id: "port-logo-2",
    title: "Vibrant Brand Logomark",
    category: "Logos",
    image: "/logos/2.png",
    description: "A bright and energetic brand logomark built for a creative modern enterprise.",
    client: "Vibe Studios",
    tools: ["Illustrator"],
    challenge: "Refining visual metaphors to express brand agility and youthfulness without cluttering.",
    solution: "Formulated a dynamic custom vector badge with high-contrast gradients.",
    outcome: "Boosted social media engagement and brand recall across digital product banners."
  },
  {
    id: "port-logo-3",
    title: "Secure FinTech Identity",
    category: "Logos",
    image: "/logos/3.png",
    description: "A professional and solid emblem designed for a retail banking platform to establish authority.",
    client: "Apex Wealth",
    tools: ["Illustrator", "Figma"],
    challenge: "Combining traditional elements of trust with the modern aesthetics of digital-first fintech platforms.",
    solution: "Created a shield-inspired geometric vector monogram using clean gradient transitions.",
    outcome: "Helped unify their web interface, mobile app favicon, and corporate presentations."
  },
  {
    id: "port-logo-4",
    title: "E-Commerce Monogram Mark",
    category: "Logos",
    image: "/logos/4.png",
    description: "A friendly and structured vector signature mark for a direct-to-consumer online shop.",
    client: "VogueThreads",
    tools: ["Illustrator"],
    challenge: "Creating an emblem that looks premium on physical clothing labels while staying high-contrast on mobile.",
    solution: "Crafted a signature style monogram using custom letter curves and anchor points.",
    outcome: "Improvised the package unboxing experience and bolstered secondary brand branding."
  },
  {
    id: "port-logo-5",
    title: "Geometric Software Logo",
    category: "Logos",
    image: "/logos/5.png",
    description: "A forward-looking geometric vector logo for a collaborative cloud workspace.",
    client: "CollabSync Inc.",
    tools: ["Figma"],
    challenge: "Designing a symbol that communicates data synchronization and fluid workflow visually.",
    solution: "Implemented overlapping semi-transparent gradients forming a clean infinity loop.",
    outcome: "Established a professional aesthetic featured prominently on the SaaS web application dashboard."
  },
  {
    id: "port-logo-6",
    title: "Signature Professional Mark",
    category: "Logos",
    image: "/logos/6.png",
    description: "A refined and elegant monogram designed for executive personal branding.",
    client: "Elite Professional",
    tools: ["Illustrator"],
    challenge: "Achieving high typographic legibility in a custom cursive script emblem.",
    solution: "Perfected vector curves and widths to maintain clarity on print business cards and digital signatures.",
    outcome: "Provided a responsive vector asset family suitable for both dark and light backdrops."
  },

  // --- POSTERS ---
  {
    id: "port-poster-ghee",
    title: "Traditional Pure Ghee & Oil Poster",
    category: "Posters",
    image: "/posters/Pure Ghee. Pure Oil. Pure Tradition.png",
    description: "A rich product poster highlighting purity, heritage, and organic premium standards for local audiences.",
    client: "Traditional Foods Co.",
    tools: ["Photoshop", "Canva"],
    challenge: "Conveying high-quality food texture and traditional brand warmth through digital ad layouts.",
    solution: "Used golden organic gradients, decorative borders, high-resolution product layout, and classical fonts.",
    outcome: "Highly successful social print ad driving a 35% increase in purchase inquiries."
  },
  {
    id: "port-poster-ds",
    title: "Dynamic Data Science Course Poster",
    category: "Posters",
    image: "/posters/Dynamic Data Science Course Poster.png",
    description: "Tech educational promotional banner designed to drive student registrations and career transitions.",
    client: "Acmegrade",
    tools: ["Photoshop", "Illustrator"],
    challenge: "Structuring dense academic curriculum details and registration steps without looking cluttered.",
    solution: "Separated information utilizing high-contrast grids, custom data vector shapes, and bold calls-to-action.",
    outcome: "Contributed to 400+ student registrations during the course enrollment campaign."
  },
  {
    id: "port-poster-mech",
    title: "Mechanical Engineering Career Program",
    category: "Posters",
    image: "/posters/Launch Your Mech Engineering Career.png",
    description: "Sleek, high-impact career orientation poster targeting mechanical engineering graduates.",
    client: "Nireerkshan Services",
    tools: ["Canva", "Photoshop"],
    challenge: "Appealing to engineering graduates while displaying curriculum modules clearly.",
    solution: "Designed a clean industrial layout using vector schematics and bold high-contrast fonts.",
    outcome: "Distributed to 10+ college campus boards, driving substantial batch enrollment."
  },
  {
    id: "port-poster-explore",
    title: "Explore Outdoor Adventure Poster",
    category: "Posters",
    image: "/posters/Explore.png",
    description: "Scenic and motivational adventure travel poster designed for digital placement.",
    client: "Wanderlust Co.",
    tools: ["Photoshop", "Lightroom"],
    challenge: "Color-grading photo assets to capture a sense of wonder and vastness.",
    solution: "Layered deep forest green tones, typographic masking, and rich lighting adjustments.",
    outcome: "Widely shared across Instagram and Pinterest travel boards."
  },
  {
    id: "port-poster-ny",
    title: "New Year Special Promo Poster",
    category: "Posters",
    image: "/posters/New year special.png",
    description: "Festive promotional discount poster highlighting holiday savings and services.",
    client: "Sun Associate Finance",
    tools: ["Canva", "Photoshop"],
    challenge: "Conveying high-energy holiday savings without feeling cheap.",
    solution: "Utilized rich purple and gold gradients combined with elegant typography and clean product mockups.",
    outcome: "Led to a 25% boost in client acquisitions during the holiday promotion week."
  },
  {
    id: "port-poster-acme",
    title: "Acmegrade Tech Career Drive",
    category: "Posters",
    image: "/posters/Acmegrade Data Science Poster 916 Tech Career Drive.png",
    description: "Corporate recruitment and skill-building drive poster targeting tech career paths.",
    client: "Acmegrade / Tech Career Drive",
    tools: ["Photoshop", "Canva"],
    challenge: "Creating visual depth that aligns with the corporate tech environment.",
    solution: "Designed a modern layout with neon accents and structured typographic hierarchies.",
    outcome: "Increased career drive sign-ups by 45% compared to previous cycles."
  },
  {
    id: "port-poster-12",
    title: "Corporate Event Promo Poster",
    category: "Posters",
    image: "/posters/12.png",
    description: "Clean corporate layout designed for business summits and professional gatherings.",
    client: "Corporate Alliance",
    tools: ["Canva", "Illustrator"],
    challenge: "Balancing multiple corporate logos and speaker headshots while maintaining visual harmony.",
    solution: "Implemented a solid grids-and-columns layout with elegant dark backgrounds.",
    outcome: "Attracted 500+ attendees to the virtual conference platform."
  },
  {
    id: "port-poster-14",
    title: "Product Marketing Ad Poster",
    category: "Posters",
    image: "/posters/14.png",
    description: "Conversion-focused product display ad poster highlighting premium features.",
    client: "D2C Brands",
    tools: ["Photoshop", "Lightroom"],
    challenge: "Ensuring maximum product focus in an dynamic social feed banner format.",
    solution: "Utilized clean product shadows, geometric backdrops, and bold offer callouts.",
    outcome: "Successfully ran on Meta platform retargeting, resulting in a 2.8% conversion rate."
  },
  {
    id: "port-poster-15",
    title: "Social Awareness Campaign",
    category: "Posters",
    image: "/posters/15.png",
    description: "Creative storytelling poster aiming to drive awareness and community support.",
    client: "Civic Coalition",
    tools: ["Photoshop", "Illustrator"],
    challenge: "Creating an emotionally resonant design that encourages community involvement.",
    solution: "Created custom vector graphics depicting human cooperation, combined with high-contrast text.",
    outcome: "Shared by 50+ local organizations, bringing valuable awareness to the initiative."
  },];

export const experienceData: ExperienceItem[] = [
  {
    id: "exp-1",
    company: "Codingmart Technologies",
    role: "Performance Marketer & Creative Designer",
    duration: "Mar 2024 - Present",
    location: "Bengaluru, India",
    responsibilities: [
      "Design social media posters using Canva and Photoshop for both organic posts and paid campaigns",
      "Create engaging content for blogs and articles published on the company website",
      "Analyze poster performance, reach, and audience engagement metrics to optimize future content",
      "Create and manage paid ad campaigns across Google Ads, Facebook/Instagram Ads, LinkedIn, and other platforms.",
      "Collaborate with the sales team to align ad messaging with customer inquiries and optimize the sales funnel for better conversion",
      "Monitor key metrics such as CTR, CPA, CPC, and engagement rates to drive data-driven decisions"
    ],
    skills: ["Canva", "Adobe Photoshop", "Figma", "AI Design Tools", "Social Media Marketing", "SEO", "Content Writing", "Microsoft Office", "Google Analytics"],
  },
  {
    id: "exp-2",
    company: "Sun Associate ",
    role: "Freelancer",
    duration: "Jul 2025 - Oct 2025",
    location: "Remote",
    responsibilities: [
      " Successfully spearheaded a digital marketing project for Sun Associate Finance, launching targeted ad campaigns via Meta Ads Manager on Facebook and Instagram, while creating high-quality graphic design assets (social media posters, ad creatives, and landing page visuals) using Canva and Adobe Photoshop to enhance brand appeal.",
      "Optimized 6 ad campaigns using audience insights for maximum lead generation, and designed professional creative assets (including infographics, ad banners, and campaign visuals) to build trust, improve engagement, and boost conversions.",
      "Leveraged trending hashtags and created regional language content in Tamil and English for local relevance, alongside designing custom graphics for social media posts that expanded reach to loan and finance audiences."
    ],
    skills: ["Meta Ads", "Canva", "Adobe Photoshop", "CTR", "Social Media Marketing", "ROI Optimisation"],
  },
  {
    id: "exp-3",
    company: "Vedantu",
    role: "Academic Associate & DTP",
    duration: "Feb 2024 - Mar 2025",
    location: "Tiruchirapalli, India",
    responsibilities: [
      "Efficiently prepare and format test papers to meet strict deadlines. Design innovative, engaging study materials like PowerPoint slides that transform learning. Handle assignment formatting, uploading, and organization with precision.",
      "Lead my team to consistently hit task deadlines while providing top-notch administrative support to faculty—scheduling meetings, creating materials, and streamlining student communications.",
      "Coordinate courses seamlessly by distributing syllabi, textbooks, and resources on time.",
      "Build a motivating learning environment, sync course schedules with faculty, and partner across departments for smooth academic operations that drive results."
    ],
    skills: ["Computer Information Systems", "Inventory Management", "Smartboard", "content writing", "Technical Support", "Library Management", "Google Sheets"],
  },
  {
    id: "exp-4",
    company: "Nireerkshan Engineering Services",
    role: "Chartered Engineer Trainee",
    duration: "Jan 2023 - Jan 2024",
    location: "Chennai, India",
    responsibilities: [
      "Oversaw complete company records and documentation for import/export operations",
      "Guaranteeing 100% accuracy, full regulatory compliance, and lightning-fast goods clearance to keep business moving seamlessly.",
      "Crafted precise, high-impact quotations for competitive tender submissions, fueling client wins and accelerating business growth.",
      "Streamlined all communications with clients and customs officials for effortless cargo processing, cutting delays and boosting operational efficiency."
    ],
    skills: ["Inventory Management", "Creative Content Creation", "Tally ERP", "Content typing"],
  }
];

export const skillsData: SkillCategory[] = [
  {
    category: "Paid Advertising & SEM",
    items: ["Meta Ads Manager", "Google Ads (SEM)", "Amazon Ads", "Social Media Marketing", "Meta Pixel (SMM)", "Campaign Manager"]
  },
  {
    category: "SEO & Content Management",
    items: ["SEO (On-page, Off-page, Technical, Local)", "Content Writing", "WordPress", "Shopify", "Yoast SEO", "Ahrefs"]
  },
  {
    category: "Creative & Brand Design",
    items: ["Canva", "Adobe Photoshop", "Figma", "AI Design Tools"]
  },
  {
    category: "Analytics & Data Tools",
    items: ["Google Analytical Tools", "Microsoft Excel", "Semrush", "Page Speed Optimization"]
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
