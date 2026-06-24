import React, { useState } from "react";
import { 
  CheckCircle, 
  ArrowUpRight, 
  Filter, 
  Sparkles, 
  Cpu, 
  Layers, 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  AlertCircle 
} from "lucide-react";
import { CODELOK_PORTFOLIO } from "../data";

interface PortfolioViewProps {
  setActivePage: (page: string) => void;
}

const CATEGORIES = [
  { label: "All Cases", id: "all" },
  { label: "Cloud & DevOps", id: "cloud" },
  { label: "AI Integration", id: "ai" },
  { label: "Web SaaS", id: "web" },
  { label: "Mobile Apps", id: "mobile" },
  { label: "E-Commerce", id: "ecommerce" }
];

export default function PortfolioView({ setActivePage }: PortfolioViewProps) {
  // Category Filtering
  const [activeCategory, setActiveCategory] = useState("all");

  const filteredProjects = activeCategory === "all"
    ? CODELOK_PORTFOLIO
    : CODELOK_PORTFOLIO.filter(project => project.category === activeCategory);

  // Helper to retrieve category icon badge
  const getCategoryIcon = (category: string) => {
    switch (category) {
      case "cloud": return <Layers className="h-4 w-4 text-blue-400" />;
      case "ai": return <Sparkles className="h-4 w-4 text-violet-400" />;
      case "web": return <Globe className="h-4 w-4 text-emerald-400" />;
      case "mobile": return <Smartphone className="h-4 w-4 text-orange-400" />;
      case "ecommerce": return <ShoppingCart className="h-4 w-4 text-teal-400" />;
      default: return <AlertCircle className="h-4 w-4" />;
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-white font-sans" id="portfolio_page_section">
      
      {/* Portfolio header */}
      <div className="mb-10 text-center md:text-left space-y-2">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-400">Verifiable Success Stories</span>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-none">
          Proven Engineering Case Studies
        </h1>
        <p className="max-w-xl text-xs sm:text-sm text-slate-400">
          Our projects represent real-world transformations deployed for Fintech, Clinical Healthcare, and high-frequency E-commerce systems.
        </p>
      </div>

      {/* Responsive Filter Categories Row */}
      <div className="flex flex-wrap items-center gap-2 pb-8 mb-8 border-b border-slate-900" id="portfolio-categories-filters">
        <span className="text-[10px] uppercase font-mono text-slate-500 font-bold mr-2 flex items-center space-x-1.5">
          <Filter className="h-3.5 w-3.5" />
          <span>Filter Sprints</span>
        </span>
        {CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            id={`btn-filter-${cat.id}`}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-2 text-xs font-semibold rounded-lg border transition-all ${
              activeCategory === cat.id 
                ? "bg-slate-900 border-teal-400 text-teal-400 shadow-lg shadow-teal-500/5"
                : "bg-slate-900/40 border-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Case studies list outputs */}
      {filteredProjects.length === 0 ? (
        <div className="text-center py-16 rounded-xl border border-dashed border-slate-800 text-slate-400" id="no-projects-view">
          <AlertCircle className="h-10 w-10 text-slate-600 mx-auto mb-2 animate-bounce" />
          <h3 className="font-display font-bold text-white text-sm">No Active Sprints Categorized</h3>
          <p className="text-xs text-slate-500 max-w-xs mx-auto mt-1">Please explore our master list of Cloud &amp; AI solutions catalogs.</p>
        </div>
      ) : (
        <div className="space-y-12" id="portfolio-projects-container">
          {filteredProjects.map((proj) => (
            <div 
              key={proj.id}
              id={`portfolio-item-${proj.id}`}
              className="rounded-2xl border border-slate-900 bg-slate-900/10 p-6 sm:p-8 md:grid md:grid-cols-12 md:gap-8 items-start relative hover:border-slate-850 transition-all group"
            >
              
              {/* Left Column: Title, tags, action target stats */}
              <div className="md:col-span-4 space-y-4">
                <div className="flex items-center space-x-2">
                  <div className="p-1.5 rounded-md bg-slate-950 border border-slate-850">
                    {getCategoryIcon(proj.category)}
                  </div>
                  <span className="font-mono text-[9px] text-slate-400 uppercase tracking-widest font-bold">
                    // {proj.category} sprint
                  </span>
                </div>

                <h3 className="font-display text-lg sm:text-2xl font-bold text-white leading-tight">
                  {proj.title}
                </h3>

                {/* Big glowing metric badge display */}
                <div className="rounded-xl border border-teal-500/20 bg-teal-500/5 p-4 space-y-1">
                  <span className="font-mono text-[10px] text-slate-400 uppercase tracking-widest block">Audit Metric Yielded</span>
                  <span className="font-display text-xl sm:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-teal-400 to-emerald-400 block tracking-tight">
                    {proj.resultsMetric}
                  </span>
                </div>
              </div>

              {/* Right Column: Problem, Solution, Outcome specs */}
              <div className="md:col-span-8 mt-6 md:mt-0 space-y-5 flex flex-col justify-between h-full">
                
                <div className="space-y-4">
                  {/* Problem Statement */}
                  <div className="space-y-1 text-xs">
                    <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-bold block">01 / The Operational Obstacle</span>
                    <p className="text-slate-300 leading-relaxed font-sans">{proj.problem}</p>
                  </div>

                  {/* Engineered Solution */}
                  <div className="space-y-1 text-xs border-l border-blue-500/30 pl-4">
                    <span className="font-mono text-[10px] text-blue-400 uppercase tracking-widest font-bold block">02 / CodeLok Solution Execution</span>
                    <p className="text-slate-300 leading-relaxed font-sans">{proj.solution}</p>
                  </div>

                  {/* Compliance Outcome */}
                  <div className="space-y-1 text-xs border-l border-emerald-500/30 pl-4">
                    <span className="font-mono text-[10px] text-teal-400 uppercase tracking-widest font-bold block">03 / Production Outcome</span>
                    <p className="text-slate-300 leading-relaxed font-sans">{proj.outcome}</p>
                  </div>
                </div>

                {/* Stacks involved and quick action */}
                <div className="pt-6 border-t border-slate-900 flex flex-wrap items-center justify-between gap-4 mt-4">
                  <div className="flex flex-wrap gap-1.5" id={`portfolio-tech-${proj.id}`}>
                    {proj.technologies.map((tech) => (
                      <span key={tech} className="font-mono text-[9px] text-slate-400 bg-slate-950 px-2 py-0.5 rounded border border-slate-900">
                        {tech}
                      </span>
                    ))}
                  </div>

                  <button
                    id={`btn-initiate-consult-${proj.id}`}
                    onClick={() => setActivePage("contact")}
                    className="inline-flex items-center space-x-1 text-xs font-bold text-teal-400 hover:text-teal-300"
                  >
                    <span>Discuss scaling variables</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>

            </div>
          ))}
        </div>
      )}

      {/* Trust builder footer tag */}
      <div className="mt-14 rounded-xl bg-slate-950 p-6 text-center border border-slate-900 space-y-3" id="portfolio-credentials-audit">
        <h4 className="font-display font-bold text-white text-base">Continuous Security Validation Handoffs</h4>
        <p className="max-w-2xl mx-auto text-xs text-slate-400 leading-relaxed">
          Every solution code repository depicted above was transferred directly to the licensing entity with 100% unit tests, secure credentials stored in AWS secrets managers, static container check passes, and interactive Swagger API books.
        </p>
      </div>

    </div>
  );
}
