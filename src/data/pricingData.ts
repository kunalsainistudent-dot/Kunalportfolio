export interface ServiceItem {
  id: string;
  title: string;
  category: "all" | "audits" | "ai-systems" | "retainers" | "consultation";
  priceDisplay: string;
  basePrice: number; // in INR
  billingPeriod?: string; // e.g. "/mo" or "one-time"
  typicalEngagement: string;
  badge?: string;
  highlight?: boolean;
  description: string;
  deliverables: string[];
}

export const PRICING_SERVICES: ServiceItem[] = [
  {
    id: "consultation",
    title: "1-on-1 Growth Consultation",
    category: "consultation",
    priceDisplay: "₹1,500 – ₹2,500",
    basePrice: 1500,
    billingPeriod: "one-time",
    typicalEngagement: "30–60 minutes",
    description:
      "Direct diagnostic consultation to review your current ad performance, funnel bottlenecks, and formulate high-impact growth experiments.",
    deliverables: [
      "30–60 minute private strategic deep-dive session",
      "Immediate audit of current traffic & campaign blockers",
      "Actionable recommendations for quick conversion wins",
      "Post-call action checklist & next-step roadmap",
    ],
  },
  {
    id: "mini-audit",
    title: "Mini Ads Audit",
    category: "audits",
    priceDisplay: "₹4,999",
    basePrice: 4999,
    billingPeriod: "one-time",
    typicalEngagement: "One platform / focused review",
    description:
      "A laser-focused diagnostic review of a single ad account (Meta or Google) to uncover wasted ad spend, creative fatigue, and targeting flaws.",
    deliverables: [
      "Single-channel campaign & ad account structure audit",
      "Identification of budget leaks & inefficient ad sets",
      "Creative & messaging performance evaluation",
      "Summary report with priority immediate fixes",
    ],
  },
  {
    id: "funnel-xray",
    title: "Funnel X-Ray (Full Funnel Audit)",
    category: "audits",
    priceDisplay: "₹9,999",
    basePrice: 9999,
    billingPeriod: "one-time",
    typicalEngagement: "Ads + funnel + tracking + CRO",
    badge: "Most Popular Diagnostic",
    highlight: true,
    description:
      "For businesses already running ads that need to pinpoint exactly where traffic, leads, or ecommerce sales are being lost across the entire customer journey.",
    deliverables: [
      "Ad account and campaign-structure review",
      "Landing-page and offer analysis",
      "Tracking / conversion setup review (CAPI, GA4, pixel)",
      "Creative and messaging analysis",
      "Audience and targeting review",
      "Lead-quality and conversion journey analysis",
      "Competitor / market positioning observations",
      "Prioritized action plan: critical → high → medium priority",
      "60-minute strategy walkthrough call with Kunal",
    ],
  },
  {
    id: "advanced-audit",
    title: "Advanced Funnel & Ads Audit",
    category: "audits",
    priceDisplay: "₹14,999",
    basePrice: 14999,
    billingPeriod: "one-time",
    typicalEngagement: "Deep-dive acquisition review",
    description:
      "Recommended for brands with meaningful ad spend, multi-tiered campaigns, or complex sales funnels seeking mathematical clarity and unit-economics optimization.",
    deliverables: [
      "Everything in Funnel X-Ray audit",
      "Deeper campaign segmentation & attribution forensics",
      "Unit economics & blended ROAS stress-testing",
      "Creative testing analysis & hook rate benchmarking",
      "Comprehensive lead-flow diagnostic & CRM sync check",
      "Advanced CRO opportunities roadmap",
    ],
  },
  {
    id: "campaign-setup",
    title: "New Campaign Setup & Architecture",
    category: "audits",
    priceDisplay: "₹10,000 – ₹20,000",
    basePrice: 10000,
    billingPeriod: "per scope",
    typicalEngagement: "Per platform / scope",
    description:
      "Greenfield account setup or ground-up rebuild of high-intent acquisition campaigns on Meta or Google Ads.",
    deliverables: [
      "Full account structure & audience grouping",
      "Conversion API (CAPI) & Enhanced Conversions setup",
      "Initial creative angle testing matrix setup",
      "Negative keyword lists & exclusion architectures",
    ],
  },
  {
    id: "ai-growth-system",
    title: "AI Growth System (Base Implementation)",
    category: "ai-systems",
    priceDisplay: "₹39,999 starting",
    basePrice: 39999,
    billingPeriod: "one-time",
    typicalEngagement: "Implementation project",
    badge: "Flagship AI Architecture",
    highlight: true,
    description:
      "A custom implementation designed to eliminate repetitive marketing work, accelerate lead response times, and supercharge lead qualification and conversion.",
    deliverables: [
      "Lead Capture: Landing page / form / campaign-to-lead flow",
      "AI Qualification: Lead categorization, qualification logic & scoring",
      "Automated Follow-up: Instant email / WhatsApp / CRM workflows",
      "Executive Reporting: Automated performance summaries & dashboards",
      "Optimization: AI-assisted campaign analysis & insight generation",
      "Documentation: Complete SOPs and workflow documentation for your team",
    ],
  },
  {
    id: "advanced-ai-system",
    title: "Advanced AI + Performance System",
    category: "ai-systems",
    priceDisplay: "₹50,000 – ₹1,00,000+",
    basePrice: 50000,
    billingPeriod: "project / scope",
    typicalEngagement: "Complex automation + growth",
    description:
      "Bespoke enterprise agentic systems, custom API integrations, WhatsApp Cloud API workflows, and continuous autonomous data triage for high-volume operations.",
    deliverables: [
      "Custom API & webhooks synchronization",
      "Autonomous conversational qualification agents",
      "Custom CRM data pipelines (HubSpot, Salesforce, Zoho)",
      "Multi-channel dynamic lead nurturing pipelines",
      "Dedicated developer integration support & maintenance",
    ],
  },
  {
    id: "management-starter",
    title: "Starter Paid Management",
    category: "retainers",
    priceDisplay: "₹15,000",
    basePrice: 15000,
    billingPeriod: "/mo",
    typicalEngagement: "Ongoing monthly optimization",
    description:
      "Ideal for smaller ad accounts requiring consistent monitoring, strategic budget management, and continuous ROI improvements on a single platform.",
    deliverables: [
      "Single platform management (Meta or Google)",
      "Weekly bid & budget calibration",
      "Basic creative & copy rotation",
      "Monthly performance review & strategic report",
    ],
  },
  {
    id: "management-growth",
    title: "Growth Paid Management",
    category: "retainers",
    priceDisplay: "₹25,000 – ₹35,000",
    basePrice: 25000,
    billingPeriod: "/mo",
    typicalEngagement: "Multi-platform optimization",
    badge: "Most Popular Retainer",
    highlight: true,
    description:
      "Designed for fast-growing businesses needing dual-platform dominance (Google + Meta) backed by relentless creative split-testing and funnel CRO.",
    deliverables: [
      "Full Google Ads + Meta Ads management",
      "Continuous creative testing strategy & feedback loops",
      "Weekly performance monitoring & proactive optimizations",
      "Negative keyword & search-term dominance",
      "AI-assisted performance analytics and insight generation",
      "Bi-weekly strategy call & comprehensive monthly review",
    ],
  },
  {
    id: "management-performance",
    title: "Performance & Enterprise Scale",
    category: "retainers",
    priceDisplay: "₹45,000 – ₹75,000+",
    basePrice: 45000,
    billingPeriod: "/mo",
    typicalEngagement: "Large spend / full-funnel scale",
    description:
      "Elite growth partnership for high-spend brands demanding multi-channel synchronization, rapid-fire creative matrices, and custom conversion architectures.",
    deliverables: [
      "Multi-platform (Meta, Google, YouTube, Demand Gen)",
      "Full funnel & landing page CRO recommendations",
      "Real-time custom dashboard & attribution telemetry",
      "Direct priority Slack / WhatsApp access with Kunal",
      "Dedicated growth engineering & weekly strategy sprint calls",
    ],
  },
];

export const THREE_PHASE_MODEL = [
  {
    phase: "PHASE 1 — DIAGNOSE",
    title: "Funnel X-Ray",
    fee: "₹9,999 one-time",
    description: "Identify acquisition leaks, tracking gaps, and prioritize revenue fixes.",
    icon: "search",
  },
  {
    phase: "PHASE 2 — BUILD",
    title: "AI Growth System",
    fee: "₹39,999+ one-time",
    description: "Implement the agreed high-converting funnel, tracking, and autonomous automation system.",
    icon: "cpu",
  },
  {
    phase: "PHASE 3 — GROW",
    title: "Performance Management",
    fee: "₹25,000–₹50,000+/month",
    description: "Manage paid acquisition, test creative angles, and continuously scale profitable ROAS.",
    icon: "trending-up",
  },
];

export const AD_SPEND_FRAMEWORK = [
  {
    spendTier: "Below ₹1 Lakh / month",
    model: "₹20,000 – ₹30,000 fixed, depending on scope",
    suitability: "Initial validation, single primary platform",
  },
  {
    spendTier: "₹1 Lakh – ₹3 Lakh / month",
    model: "₹30,000 – ₹50,000 fixed / hybrid structure",
    suitability: "Multi-platform expansion (Google + Meta)",
  },
  {
    spendTier: "₹3 Lakh+ / month",
    model: "₹40,000+ base or negotiated hybrid model",
    suitability: "High-volume scaling with aggressive creative velocity",
  },
];

export const COMMERCIAL_TERMS = [
  "All listed prices are starting rates and may be adjusted based on business scale, number of platforms, ad spend volume, and technical complexity.",
  "Advertising/Media spend is NOT included in management fees and is paid directly to advertising platforms (Meta, Google) by the client.",
  "Third-party software, CRM, WhatsApp Cloud API, landing-page, hosting, creative production, or automation tool costs are paid by client unless explicitly bundled.",
  "One-time setup/implementation fees are distinct and separate from ongoing monthly management retainers.",
  "A minimum engagement period may apply for ongoing monthly campaign management depending on account complexity.",
  "Performance depends on offer viability, product-market fit, margin structure, landing-page quality, and ad spend. No specific sales or ROAS outcome is guaranteed.",
  "Final scope, exact deliverables, and payment schedule will be confirmed in a written agreement before work begins.",
];
