import { Service, CaseStudy, Testimonial, BlogPost, PricingPlan } from './types';

export const SERVICES: Service[] = [
  {
    id: 'seo',
    title: 'SEO Optimization',
    description: 'Dominate search results, secure high-intent organic traffic, and capture the local Madurai & national markets.',
    iconName: 'Search',
    details: 'Our SEO strategy is built on data, not guesswork. We perform comprehensive keyword mapping, technical site audits, semantic content optimization, and authentic link-building to drive long-term sustainable growth.',
    deliverables: [
      'Technical SEO Audits & Core Web Vitals Optimization',
      'Hyper-Local SEO & Google Business Profile dominance',
      'Competitor Intelligence & Keyword Expansion Plans',
      'Premium Content Clusters & Semantic Schema Markup'
    ],
    avgRoi: '4.2x',
    metricLabel: 'Average Organic Traffic Increase'
  },
  {
    id: 'smm',
    title: 'Social Media Marketing',
    description: 'Build massive brand equity and active engagement across Instagram, LinkedIn, and YouTube.',
    iconName: 'Share2',
    details: 'We craft thumb-stopping visual content, high-retention short-form videos (Reels/Shorts), and authoritative LinkedIn strategies designed to transition casual scrollers into passionate brand evangelists.',
    deliverables: [
      'Social Media Strategy & Editorial Calendar Design',
      'High-Conversion Reels, Shorts & Static Creative Assets',
      'Community Management & Active Engagement Growth',
      'Influencer Collaboration & Local Brand Activations'
    ],
    avgRoi: '215%',
    metricLabel: 'Average Engagement Uplift'
  },
  {
    id: 'performance',
    title: 'Performance Marketing',
    description: 'Scale your revenue with mathematically precise paid advertising across Meta, LinkedIn, and programmatic channels.',
    iconName: 'TrendingUp',
    details: 'Stop wasting ad spend. We engineer laser-focused retargeting funnels, dynamic creative testing, and multi-touch attribution setups to ensure every single rupee spent contributes to your bottom-line profitability.',
    deliverables: [
      'Full-Funnel Meta Ad Campaigns (Facebook & Instagram)',
      'LinkedIn Account-Based Marketing (ABM) for B2B Leads',
      'Creative Performance Testing & Iteration Matrices',
      'Custom Analytics & Pixel/CAPI Event Tracking'
    ],
    avgRoi: '4.8x',
    metricLabel: 'Average ROAS (Return on Ad Spend)'
  },
  {
    id: 'dev',
    title: 'Website Development',
    description: 'Bespoke, blazing-fast, and conversion-optimized web applications with Apple-inspired UX.',
    iconName: 'Code',
    details: 'We build websites that double as your 24/7 top-performing salesperson. Crafted with React, Tailwind, and cutting-edge performance frameworks, our sites load in milliseconds and deliver pristine mobile and desktop experiences.',
    deliverables: [
      'Custom React/Vite Full-Stack Solutions',
      'High-Performance E-commerce storefronts',
      'Interactive User Experiences & Custom Micro-interactions',
      'Responsive, Accessibility-compliant and SEO-ready Layouts'
    ],
    avgRoi: '185%',
    metricLabel: 'Conversion Rate Uplift'
  },
  {
    id: 'branding',
    title: 'Branding & Identity',
    description: 'Establish absolute premium positioning with memorable design languages, guidelines, and assets.',
    iconName: 'Sparkles',
    details: 'Stand out from the clutter. We define your brand voice, color psychology, typographic hierarchy, and visual assets to position your business as the unquestioned leader in your industry.',
    deliverables: [
      'Brand Strategy, Mission and Core Messaging Framework',
      'Premium Logo Suites & Vector Asset Kits',
      'Comprehensive Brand Guidelines (Typography & Colors)',
      'Digital & Physical Collateral Design (Brochures, Packaging)'
    ],
    avgRoi: '3x',
    metricLabel: 'Premium Pricing Power Gained'
  },
  {
    id: 'google-ads',
    title: 'Google Search & Display Ads',
    description: 'Interdict high-intent searchers at the exact millisecond they are ready to purchase.',
    iconName: 'Target',
    details: 'Targeting buyers who are actively searching for your solution. We optimize Search Campaigns, Performance Max (PMax), and Youtube pre-roll formats to turn searches into immediate inbound leads or purchases.',
    deliverables: [
      'High-Intent Search Campaign Structuring',
      'Google Merchant Center & PMax Setup for Retailers',
      'Smart Bid Optimizations & Keyword Quality Scoring',
      'Negative Keyword Filtering & Lead Cost Reductions'
    ],
    avgRoi: '340%',
    metricLabel: 'Lead Generation Growth'
  },
  {
    id: 'content',
    title: 'Content Marketing',
    description: 'Establish thought leadership with deeply researched whitepapers, blogs, and scripts.',
    iconName: 'FileText',
    details: 'High-quality content marketing is our secret weapon. We produce value-first articles, downloadable e-books, and video scripts that educate your audience and shorten the sales cycle.',
    deliverables: [
      'Industry-Specific Blog Content & Editorial Calendars',
      'In-Depth Whitepapers & Lead Magnet Playbooks',
      'Scriptwriting for YouTube, Reels, and Corporate Videos',
      'Newsletter Marketing & Dynamic Substack Setup'
    ],
    avgRoi: '150%',
    metricLabel: 'More Inbound Leads'
  },
  {
    id: 'email',
    title: 'Email Marketing & Automation',
    description: 'Nurture your leads automatically and maximize lifetime customer value via automated flows.',
    iconName: 'Mail',
    details: 'Unlocking hidden revenue within your existing list. We design custom automated flows for cart abandonment, post-purchase delight, warm lead nurturing, and seasonal promotions using industry-leading tools.',
    deliverables: [
      'Klaviyo/ActiveCampaign Integration & Setup',
      'Behavioral Abandoned Cart & Welcome Funnel Flows',
      'Segmented Weekly/Monthly Newsletter Campaigns',
      'A/B Testing Subject Lines & Drag-and-Drop Templates'
    ],
    avgRoi: '38%',
    metricLabel: 'Total Revenue Contributed by Email'
  }
];

export const CASE_STUDIES: CaseStudy[] = [
  {
    id: 'chitra-silks',
    clientName: 'Chitra Silk Emporium',
    title: 'Pioneering Traditional Heritage in Global E-Commerce',
    industry: 'Premium Textiles & Fashion',
    growthMetric: 'E-commerce Revenue',
    growthValue: '+310%',
    description: 'How a prominent 30-year heritage silk saree store in Madurai expanded its footprint globally, executing custom Meta retargeting and global shipping funnels to capture international Tamil diaspora shoppers.',
    results: [
      '₹1.8 Crores in global e-commerce sales generated in 9 months',
      'ROAS sustained at 4.6x across US, UK, and Singapore regions',
      'Organic Instagram community scaled from 5,000 to over 85,000 followers'
    ],
    duration: '9 Months',
    servicesProvided: ['Performance Marketing', 'Branding', 'Website Development', 'Social Media']
  },
  {
    id: 'templecity-foods',
    clientName: 'TempleCity Foods',
    title: 'Digitizing Madurais Favorite Culinary Chain',
    industry: 'Food & Beverage',
    growthMetric: 'Digital Orders & Footfall',
    growthValue: '+185%',
    description: 'Digitized local marketing and local SEO presence for a prominent multicuisine culinary brand with multiple outlets in Madurai, driving dine-in footfall and Direct-to-Consumer delivery app signups.',
    results: [
      '420% increase in monthly Google Business Profile impressions and navigation clicks',
      '40,000+ app downloads driven by hyper-local social media micro-influencer campaigns',
      '30% reduction in customer acquisition costs for home delivery orders'
    ],
    duration: '6 Months',
    servicesProvided: ['SEO Optimization', 'Social Media Marketing', 'Google Ads']
  },
  {
    id: 'vidhya-academy',
    clientName: 'Vidhya K-12 Academy',
    title: 'Scaling Admissions for Next-Generation Classrooms',
    industry: 'Education & Academics',
    growthMetric: 'Qualified Inquiries',
    growthValue: '+75%',
    description: 'Designed a localized conversion funnel for a premium academy in Madurai, capturing high-intent parents during the critical enrollment season via localized Google Search and interactive video ads.',
    results: [
      '75% increase in verified student enrollments year-over-year',
      'Cost per qualified admissions inquiry decreased by 48%',
      'Interactive virtual tour website page converted 12.4% of traffic into on-campus tours'
    ],
    duration: '4 Months',
    servicesProvided: ['Website Development', 'Google Ads', 'SEO Optimization']
  },
  {
    id: 'kovai-tech',
    clientName: 'Kovai TechVentures',
    title: 'Fueling B2B Pipeline Growth for Enterprise SaaS',
    industry: 'Enterprise Software & SaaS',
    growthMetric: 'Sales Qualified Leads',
    growthValue: '+230%',
    description: 'An emerging tech enterprise scaled its outbound B2B pipeline, deploying custom LinkedIn Account-Based Marketing and SEO clusters to rank for global developer tools and software queries.',
    results: [
      '₹1.2 Crore added to verified sales-qualified pipeline within two quarters',
      'Page-1 rankings secured for 45+ highly competitive global enterprise search keywords',
      'Web-to-demo conversion rate optimized from 0.8% to 3.4%'
    ],
    duration: '12 Months',
    servicesProvided: ['SEO Optimization', 'Performance Marketing', 'Content Marketing']
  }
];

export const TESTIMONIALS: Testimonial[] = [
  {
    id: 't1',
    author: 'Karthik Chidambaram',
    designation: 'Managing Director',
    company: 'Chitra Silk Emporium',
    quote: 'PixelCraft Media understood our heritage and translated it perfectly into a digital brand. Our global e-commerce store is doing numbers we never thought possible from Madurai. Absolutely world-class team!',
    avatarLetter: 'K',
    avatarColor: 'from-blue-600 to-indigo-600',
    rating: 5
  },
  {
    id: 't2',
    author: 'Saraswathi Raman',
    designation: 'Founder & CEO',
    company: 'TempleCity Foods',
    quote: 'From getting lost on local searches to being the first result on everyone\'s smartphone in Madurai. Their hyper-local SEO and video strategy completely revitalized our home-delivery and dine-in footfall!',
    avatarLetter: 'S',
    avatarColor: 'from-purple-600 to-pink-600',
    rating: 5
  },
  {
    id: 't3',
    author: 'Dr. S. Vijayaraghavan',
    designation: 'Trustee',
    company: 'Vidhya K-12 Academy',
    quote: 'The strategy meeting we had with PixelCraft changed our entire enrollment mindset. Instead of traditional billboards, we went 100% digital, and our results speak for themselves. Full admissions achieved 2 months early.',
    avatarLetter: 'V',
    avatarColor: 'from-teal-600 to-emerald-600',
    rating: 5
  },
  {
    id: 't4',
    author: 'Anand Kumar',
    designation: 'VP of Growth',
    company: 'Kovai TechVentures',
    quote: 'They operate like an extension of our internal team. Their data attribution setups are pristine. Every single lead, search keyword, and ad budget optimization is transparent and metrics-backed.',
    avatarLetter: 'A',
    avatarColor: 'from-amber-600 to-orange-600',
    rating: 5
  }
];

export const BLOG_POSTS: BlogPost[] = [
  {
    id: 'local-seo-tamilnadu',
    title: 'The Ultimate Playbook for Local SEO Dominance in Tamil Nadu',
    category: 'SEO Optimization',
    readTime: '6 Min Read',
    date: 'June 18, 2026',
    summary: 'Discover how regional businesses are utilizing hyper-local citations, bilingual search terms, and Google Maps rankings to dominate local markets.',
    content: [
      'In Tamil Nadu\'s rapidly growing digital market, local SEO is the highest-leverage marketing asset. Businesses are no longer just competing on physical streets; they are competing on search engine result pages.',
      'To build a dominant map presence, you must first claim and structure your Google Business Profile with pinpoint accuracy. This means having consistent NAP (Name, Address, Phone) data, localized categories, and high-resolution photo updates.',
      'Beyond standard English keywords, optimizing for regional bilingual search habits (e.g., combining Tamil phrases with English intent) dramatically captures untapped traffic. Ensuring high-intent keywords are embedded in your schema-markup completes your competitive edge.'
    ]
  },
  {
    id: 'meta-ads-scaling-2026',
    title: 'Meta Ads Scaling Strategies: Overcoming Ad Fatigue',
    category: 'Performance Marketing',
    readTime: '8 Min Read',
    date: 'May 24, 2026',
    summary: 'Ad fatigue can drain budgets overnight. Learn how to implement dynamic creative testing (DCT) and cost cap structures to scale campaigns seamlessly.',
    content: [
      'The biggest bottleneck to profitable scaling in 2026 is ad creative fatigue. When the same audience sees your ad multiple times, your click-through rates plummet while customer acquisition costs skyrocket.',
      'The solution lies in structural dynamic creative testing (DCT). By letting Meta\'s machine learning combine multiple headings, hooks, and call-to-actions, you allow the algorithm to serve the best asset dynamically to the right user.',
      'Combining DCTs with localized high-retention short videos ensures your cost caps hold firm, enabling you to scale budgets from ₹5,000 to ₹1,00,000 daily without crashing your ROAS.'
    ]
  },
  {
    id: 'brand-identity-vibe',
    title: 'Why Premium Brand Aesthetics Justify a 3x Price Premium',
    category: 'Branding & Design',
    readTime: '5 Min Read',
    date: 'April 12, 2026',
    summary: 'Visual clutter lowers perceived quality. We explore how minimalist, intentional typography and high-contrast styling elevate perceived value and command premium pricing.',
    content: [
      'Many brands treat design as an afterthought, opting for generic templates. However, visual identity dictates your market positioning. A cluttered, dated website instantly communicates cheapness.',
      'Pristine modern designs, featuring generous negative space, high-contrast dark slate aesthetics, and premium typographic layout (like Inter or Space Grotesk) tell customers you are an elite operator.',
      'When your visual identity commands respect, the barrier to price negotiations melts. Premium brands don\'t compete on price; they compete on identity, allowing them to capture up to 300% higher profit margins.'
    ]
  }
];

export const PRICING_PLANS: PricingPlan[] = [
  {
    name: 'Starter Scale',
    price: '₹24,999',
    billing: 'per month',
    description: 'Perfect for growing local brands in Madurai looking to build consistency and capture regional search traffic.',
    features: [
      'Complete Local SEO & Google Profile Dominance',
      'Social Media Management (12 Custom Posts / Mo)',
      'Meta Ad Campaign Setup & Basic Management',
      'Monthly ROI & Growth Performance Reports',
      'Dedicated Account Executive Support',
      'Quarterly Campaign Strategy Alignment'
    ],
    ctaText: 'Launch Starter Campaign',
    highlighted: false,
    idealFor: 'Growing local startups'
  },
  {
    name: 'Performance Growth',
    price: '₹54,999',
    billing: 'per month',
    description: 'Our flagship plan designed for ambitious brands seeking aggressive scaling across multiple digital channels.',
    features: [
      'Everything in Starter Scale, plus:',
      'Advanced Meta + Google Ad Funnel Engineering',
      'Custom Video Editing & High-Retention Reels (4 / Mo)',
      'Bi-Weekly Comprehensive Multi-Touch Attribution Checkpoints',
      'Landing Page Conversion Rate Optimization (CRO)',
      'Competitor Keyword Theft & SEO Backlink Outreaches',
      'Priority Whatsapp & Call Support'
    ],
    ctaText: 'Initiate Growth Strategy',
    highlighted: true,
    idealFor: 'Mid-sized established brands'
  },
  {
    name: 'Enterprise Dominance',
    price: '₹1,19,999',
    billing: 'per month',
    description: 'A bespoke, full-stack marketing department at your disposal. Built for market leaders demanding peak ROI.',
    features: [
      'Everything in Performance Growth, plus:',
      'Unlimited Paid Channels (LinkedIn ABM, YouTube, Meta, Google)',
      'High-Performance Custom React Landing Page Development',
      'Full Email Automation & Abandoned Cart Flow Engineering',
      'Bi-weekly custom graphic & video asset production',
      'Direct Slack channel with Creative Director & Lead Analysts',
      'Weekly Strategy Meetings & On-Demand Reporting Dashboards'
    ],
    ctaText: 'Secure Enterprise Partner',
    highlighted: false,
    idealFor: 'Large enterprises & e-commerce'
  }
];
