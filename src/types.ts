/**
 * Shared Type Definitions for the CodeLok Platform
 */

export interface ServiceItem {
  id: string;
  title: string;
  iconName: string; // Lucide icon reference
  shortDescription: string;
  longDescription: string;
  benefits: string[];
  technologies: string[];
  processSteps: string[];
  faqs: { question: string; answer: string }[];
}

export interface SolutionPackage {
  id: string;
  title: string;
  badge: string;
  priceEstimate: string;
  shortDescription: string;
  features: string[];
  targetAudience: string;
  includedDeliverables: string[];
}

export interface ClientTestimonial {
  id: string;
  authorName: string;
  role: string;
  companyName: string;
  rating: number;
  avatarUrl?: string;
  reviewText: string;
}

export interface EnterpriseProject {
  id: string;
  title: string;
  category: "cloud" | "ai" | "mobile" | "web" | "ecommerce";
  bannerUrl?: string;
  problem: string;
  solution: string;
  outcome: string;
  technologies: string[];
  resultsMetric: string; // e.g. "60% cost reduction"
}

export interface TechCategory {
  categoryName: string;
  description: string;
  techs: { name: string; level: number; info: string }[];
}

export interface BlogPost {
  id: string;
  title: string;
  category: string;
  author: string;
  date: string;
  readTime: string;
  summary: string;
  content: string[];
}

export interface ConsultationResponse {
  cloudArchitecture: string;
  recommendedStack: string[];
  automationIdeas: string;
  securityRecom: string;
  estimatedTimeline: string;
  professionalSummary: string;
  usingMock?: boolean;
}

export interface LeadSubmission {
  id: string;
  fullName: string;
  companyName: string;
  email: string;
  phone: string;
  serviceRequired: string;
  budget: string;
  projectDetails: string;
  createdAt: string;
  status: string;
}
