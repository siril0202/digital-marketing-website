export interface Service {
  id: string;
  title: string;
  description: string;
  iconName: string;
  details: string;
  deliverables: string[];
  avgRoi: string;
  metricLabel: string;
}

export interface CaseStudy {
  id: string;
  clientName: string;
  title: string;
  industry: string;
  growthMetric: string;
  growthValue: string;
  description: string;
  results: string[];
  duration: string;
  servicesProvided: string[];
}

export interface Testimonial {
  id: string;
  author: string;
  designation: string;
  company: string;
  quote: string;
  avatarLetter: string;
  avatarColor: string;
  rating: number;
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  readTime: string;
  date: string;
  summary: string;
  content: string[];
}

export interface PricingPlan {
  name: string;
  price: string;
  billing: string;
  description: string;
  features: string[];
  ctaText: string;
  highlighted: boolean;
  idealFor: string;
}
