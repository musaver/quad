export const NAV_ITEMS = [
  { label: "About", href: "/about" },
  { label: "Features", href: "/#features" },
  { label: "Pricing", href: "/#pricing" },
] as const;

export const HERO = {
  title: "One Partner. Every Growth System. Built to Scale.",
  subtitle:
    "QUAD is an AI-powered, full-stack digital growth agency. When you onboard with us, you don't hire a service — you plug into a complete business growth system.",
  cta: "Book a Strategy Call",
  secondaryCta: "See How QUAD Works",
};

export const LOGO_SECTION = {
  logos: [
    { src: "/images/footer-brand-1.png", alt: "Partner 1" },
    { src: "/images/footer-brand-2.png", alt: "Partner 2" },
    { src: "/images/footer-brand-3.png", alt: "Partner 3" },
    { src: "/images/footer-brand-4.png", alt: "Partner 4" },
    { src: "/images/footer-brand-1.png", alt: "Partner 5" },
    { src: "/images/footer-brand-2.png", alt: "Partner 6" },
    { src: "/images/footer-brand-3.png", alt: "Partner 7" },
    { src: "/images/footer-brand-4.png", alt: "Partner 8" },
  ],
};

export const PROCESS_STEPS = [
  { number: "01", title: "Build", description: "Brand, systems & infrastructure" },
  { number: "02", title: "Create", description: "Content, video, ads & funnels" },
  { number: "03", title: "Optimize", description: "Test, refine & automate" },
  { number: "04", title: "Scale", description: "Expand channels, increase efficiency" },
] as const;

export const FEATURE_SECTION = {
  title: "End-to-End Growth Under One Roof",
  subtitle:
    "Strategy, Creative, Technology — Fully Integrated. With QUAD, you never manage multiple agencies again.",
  tabs: [
    {
      label: "Brand & Web",
      id: "brand-web",
      badge: "Brand & Web",
      title: "Brand identity, websites & social presence",
      description:
        "We build your brand from the ground up — identity, positioning, website, landing pages, and social media setup optimized for growth from day one.",
      image: "/images/customers-list-ui.png",
    },
    {
      label: "Video & Content",
      id: "video-content",
      badge: "Video & Content",
      title: "High-performance video production & creative",
      description:
        "Short-form videos, UGC-style performance content, product commercials, founder videos and social ads — built to perform, not just look good.",
      image: "/images/dashboard-ui.png",
    },
    {
      label: "Paid Advertising",
      id: "paid-advertising",
      badge: "Paid Advertising",
      title: "Paid ads across Meta, Google & TikTok",
      description:
        "Full-funnel paid acquisition across every major platform. Ecommerce systems on Shopify, Amazon and TikTok Shop — connected to creatives that convert.",
      image: "/images/customers-list-ui.png",
    },
    {
      label: "AI & Automation",
      id: "ai-automation",
      badge: "AI & Automation",
      title: "AI automation, CRM & workflow systems",
      description:
        "AI-powered visuals, avatars, and content production combined with CRM setup, workflow automation and reporting — so every touchpoint scales efficiently.",
      image: "/images/dashboard-ui.png",
    },
  ],
};

export const INTEGRATION_SECTION = {
  title: "AI-Powered Creative, Human-Led Direction",
  subtitle:
    "Faster Production. Smarter Testing. Better Results. AI accelerates execution — humans protect the brand.",
  cta: "Book a Strategy Call",
  steps: [
    { number: "01", text: "Produce more creatives in less time" },
    { number: "02", text: "Test multiple angles, hooks & formats" },
    { number: "03", text: "Scale winners without creative fatigue" },
  ],
  logos: [
    { src: "/images/integration-logo-1.png", alt: "Integration partner" },
    { src: "/images/integration-logo-2.png", alt: "Integration partner" },
    { src: "/images/integration-logo-3.png", alt: "Integration partner" },
    { src: "/images/integration-logo-4.png", alt: "Integration partner" },
    { src: "/images/integration-logo-5.png", alt: "Integration partner" },
    { src: "/images/integration-logo-6.png", alt: "Integration partner" },
    { src: "/images/integration-logo-7.png", alt: "Integration partner" },
    { src: "/images/integration-logo-8.png", alt: "Integration partner" },
  ],
};

export const SOCIAL_PROOF = {
  rating: "4.9 / 5 Rated",
  customers: "Over 9.2k Customers",
  profiles: [
    "/images/profile-1.png",
    "/images/profile-2.png",
    "/images/profile-3.png",
    "/images/profile-4.png",
  ],
};

export const PRICING = {
  title: "High-Performance Video & Creative Production",
  plans: [
    {
      name: "Foundation",
      description: "Brand, web & social presence",
      active: true,
      price: "Custom",
      period: "",
      detailDescription:
        "Everything you need to establish a professional brand presence and start generating leads.",
      cta: "Get a Quote",
      features: [
        "Brand identity & positioning",
        "Website & landing pages",
        "Social media setup & optimization",
        "Monthly content calendar",
        "Basic analytics & reporting",
      ],
    },
    {
      name: "Growth",
      description: "Video, content & paid ads",
      active: false,
      price: "Custom",
      period: "",
      detailDescription:
        "Full creative production and paid advertising management to scale your brand across platforms.",
      cta: "Get a Quote",
      features: [
        "Everything in Foundation",
        "Short-form video production (Reels, TikToks, Shorts)",
        "UGC-style performance content",
        "Paid ads management (Meta, Google, TikTok)",
        "Conversion funnel optimization",
        "A/B creative testing",
      ],
    },
    {
      name: "Scale",
      description: "Full growth system with AI & automation",
      active: false,
      price: "Custom",
      period: "",
      detailDescription:
        "The complete QUAD growth engine — AI-powered creative, ecommerce systems, automation, and a dedicated strategist.",
      cta: "Get a Quote",
      features: [
        "Everything in Growth",
        "Ecommerce systems (Shopify, Amazon, TikTok Shop)",
        "AI automation, CRM & workflow setup",
        "Advanced creative testing & scaling",
        "Dedicated growth strategist",
        "Priority production queue",
        "Monthly performance reviews",
      ],
    },
  ],
  profiles: [
    "/images/profile-1.png",
    "/images/profile-2.png",
    "/images/profile-3.png",
    "/images/profile-4.png",
  ],
  rating: "4.9 / 5 Rated",
  customers: "Over 9.2k Customers",
};

export const CASE_STUDIES = {
  title: "Industries We've Scaled",
  subtitle:
    "One System. Many Markets. QUAD has built and scaled growth systems across ecommerce, SaaS, local services, and fashion brands.",
  cta: "Read more",
  studies: [
    {
      company: "Pluto",
      year: "2025",
      description:
        "Built a full ecommerce growth system — paid ads, UGC content, and conversion funnels — scaling Shopify revenue by 3x in under 6 months.",
      thumbnail: "/images/case-study-1.png",
      brand: "/images/brand-1.png",
    },
    {
      company: "VitaHealth",
      year: "2024",
      description:
        "Launched a complete brand presence for this wellness brand, from identity and packaging to TikTok Shop and Amazon storefront setup.",
      thumbnail: "/images/case-study-2.png",
      brand: "/images/brand-2.png",
    },
    {
      company: "BoxMedia",
      year: "2025",
      description:
        "Engineered a SaaS lead generation funnel and paid acquisition system, driving qualified pipeline growth with AI-assisted creative testing.",
      thumbnail: "/images/case-study-3.png",
      brand: "/images/brand-3.png",
    },
    {
      company: "NovaTech",
      year: "2023",
      description:
        "Delivered local lead gen and booking automation for a network of aesthetic clinics, reducing cost-per-lead by 60% across Meta and Google.",
      thumbnail: "/images/case-study-4.png",
      brand: "/images/brand-4.png",
    },
  ],
};

export const TESTIMONIALS = [
  {
    quote:
      "QUAD didn't just run our ads — they rebuilt our entire growth engine. Revenue doubled in 90 days and our creative quality went through the roof.",
    author: "Talia Smith",
    role: "Founder at Forma Commerce",
    avatar: "/images/testimonial-profile-1.png",
  },
  {
    quote:
      "Working with QUAD felt like having a world-class in-house team. One system, one strategy — and the results speak for themselves.",
    author: "Jordan Johnson",
    role: "COO at Metricon Labs",
    avatar: "/images/testimonial-profile-2.png",
  },
  {
    quote:
      "From brand identity to paid ads and automation, QUAD handled everything. We stopped managing five agencies and finally started scaling.",
    author: "Samuel Torres",
    role: "CEO at Bloomtech",
    avatar: "/images/testimonial-profile-3.png",
  },
];

export const FAQ_ITEMS = [
  {
    question: "What exactly does QUAD do?",
    answer:
      "QUAD is an AI-powered, full-stack digital growth agency. We handle brand identity, websites, video production, paid advertising, ecommerce systems, AI automation, and CRM — all under one roof, one team, one strategy.",
  },
  {
    question: "Which industries do you work with?",
    answer:
      "We've built growth systems for ecommerce brands (Shopify, Amazon, TikTok Shop), SaaS and digital products, local businesses (clinics, home services), and fashion & lifestyle brands. Different industries, same scalable framework.",
  },
  {
    question: "How does AI fit into your work — do you lose creative control?",
    answer:
      "No. We use AI to accelerate execution — producing more creatives faster, testing multiple hooks and formats, and scaling winners. But direction, storytelling, and brand tone are always human-led. AI speeds things up; our team protects your brand.",
  },
  {
    question: "What does onboarding look like?",
    answer:
      "We start with a strategy call to understand your goals, market, and current state. From there we build your growth system infrastructure — brand, content pipeline, ad accounts, and automation — before scaling. Most clients are fully onboarded within 2 weeks.",
  },
  {
    question: "How long before we see real results?",
    answer:
      "Creative and brand deliverables go live within the first month. Ad performance typically improves within 4-6 weeks as we test and optimise. Compounding growth across all channels is visible within 90 days for most clients.",
  },
];

export const ABOUT_PAGE = {
  hero: {
    title: "QUAD Vision",
    subtitle:
      "At QUAD, our vision is to redefine how businesses grow in the digital era. Growth should come from one intelligent system — where strategy, creative, technology, and people work together seamlessly.",
    images: [
      "/videos/about.mp4",
      "/images/team-member-1.png",
      "/images/team-member-2.png",
    ],
  },
  mission: {
    heading: "Our vision",
    description:
      "We believe growth should not depend on fragmented agencies, disconnected tools, or constant trial and error. \n\nOur vision is to become a long-term growth partner for businesses — not a service provider.",
    image: "/images/case-study-4.png",
  },
  stats: [
    {
      value: "250+",
      label: "Projects Supported",
      description: "Helping teams move from idea to execution faster.",
    },
    {
      value: "85%",
      label: "Client Retention Rate",
      description: "Long-term partnerships built on real results.",
    },
    {
      value: "98%",
      label: "Client Satisfaction",
      description:
        "Consistently high ratings from clients across industries.",
    },
    {
      value: "30+",
      label: "Integrations Supported",
      description:
        "Seamlessly connects with your favorite tools and platforms.",
    },
  ],
  logoLabel: "Trusted by 50+ partners",
  team: {
    title: "Meet the team",
    subtitle:
      "Our team combines deep industry knowledge with hands-on experience to help startups grow smarter and faster.",
    members: [
      {
        name: "Sophia Reynolds",
        role: "Founder & CEO",
        image: "/images/team-member-1.png",
      },
      {
        name: "Lucas Rivera",
        role: "CFO",
        image: "/images/team-member-2.png",
      },
      {
        name: "Emily Johnson",
        role: "Lead Designer",
        image: "/images/team-member-3.png",
      },
      {
        name: "Ethan Moore",
        role: "Project Manager",
        image: "/images/team-member-4.png",
      },
    ],
  },
};

export const CTA_SECTION = {
  title: "Ready to Build a Real Growth System?",
  subtitle: "One system. One partner. Real growth.",
  phone: "206-837-1232",
  email: "hello@grovia.io",
  formFields: {
    name: "Jane Smith",
    email: "jane@framer.com",
    message: "Enter your message",
  },
  submitText: "Submit",
};

export const FOOTER = {
  newsletter: {
    title: "Sign up for our newsletter",
    placeholder: "name@email.com",
    cta: "Subscribe",
  },
  pages: [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Pricing", href: "/#pricing" },
    { label: "Case Studies", href: "/#case-studies" },
  ],
  contact: {
    email: "hello@grovia.io",
  },
  copyright: "Designed by Lunis. All rights reserved.",
};
