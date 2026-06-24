import React, { useState } from "react";
import { 
  Cpu, 
  Search, 
  Code2, 
  Server, 
  CloudSnow, 
  Database, 
  Sparkle, 
  CheckCircle,
  HelpCircle
} from "lucide-react";
import { CODELOK_TECHNOLOGIES } from "../data";

export default function TechnologiesView() {
  const [searchQuery, setSearchQuery] = useState("");

  // Map category header icons
  const getCategoryIcon = (categoryName: string) => {
    if (categoryName.includes("Frontend")) return <Code2 className="h-4.5 w-4.5 text-blue-400" />;
    if (categoryName.includes("Backend")) return <Server className="h-4.5 w-4.5 text-emerald-400" />;
    if (categoryName.includes("Cloud")) return <CloudSnow className="h-4.5 w-4.5 text-sky-400 animate-pulse" />;
    if (categoryName.includes("Database")) return <Database className="h-4.5 w-4.5 text-teal-400" />;
    if (categoryName.includes("AI")) return <Sparkle className="h-4.5 w-4.5 text-violet-400 animate-spin" style={{ animationDuration: '30s' }} />;
    return <Cpu className="h-4.5 w-4.5 text-slate-400" />;
  };

  // Filter technology arrays dynamically is searchable query is active
  const filteredCategories = CODELOK_TECHNOLOGIES.map(cat => {
    const matchedTechs = cat.techs.filter(tech => 
      tech.name.toLowerCase().includes(searchQuery.toLowerCase()) || 
      tech.info.toLowerCase().includes(searchQuery.toLowerCase())
    );
    return {
      ...cat,
      techs: matchedTechs
    };
  }).filter(cat => cat.techs.length > 0);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-white font-sans" id="technologies_page_section">
      
      {/* Page Header and search workspace */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
        <div className="space-y-2">
          <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-400">Verified Competencies</span>
          <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-none">
            Our Core Technology Stack
          </h1>
          <p className="max-w-xl text-xs sm:text-sm text-slate-400">
            We reject obsolete frameworks and enforce strictly modern, performance-safe, type-secure technology architectures.
          </p>
        </div>

        {/* Dynamic technology parser search */}
        <div className="relative w-full md:w-80 shrink-0" id="tech-search-form">
          <div className="absolute inset-y-0 left-3 flex items-center pointer-events-none text-slate-500">
            <Search className="h-4 w-4" />
          </div>
          <input
            id="searchInput-techs"
            type="text"
            placeholder="Search stack (e.g. AWS, Next, Postgres)"
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="w-full rounded-xl bg-slate-900 border border-slate-850 py-2.5 pl-9 pr-4 text-xs text-white placeholder-slate-500 focus:outline-none focus:border-teal-400"
          />
        </div>
      </div>

      {/* Main stacks categorizations */}
      {filteredCategories.length === 0 ? (
        <div className="text-center py-16 rounded-xl border border-dashed border-slate-850 text-slate-400" id="tech-notfound-box">
          <HelpCircle className="h-9 w-9 text-slate-600 mx-auto mb-2" />
          <h4 className="font-display font-bold text-white text-sm">Specified Tool Not Seeded</h4>
          <p className="text-xs text-slate-500">We continuously update our capabilities. Please contact our solutions architect team directly to discuss custom tools.</p>
        </div>
      ) : (
        <div className="space-y-12" id="tech-categories-container">
          {filteredCategories.map((cat, idx) => (
            <div key={idx} className="space-y-5" id={`tech-category-section-${idx}`}>
              
              {/* Category section title */}
              <div className="flex items-center space-x-2.5 pb-2 border-b border-slate-900">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg bg-slate-900 border border-slate-850">
                  {getCategoryIcon(cat.categoryName)}
                </div>
                <div>
                  <h3 className="font-display text-base font-bold text-white tracking-wide">
                    {cat.categoryName}
                  </h3>
                  <p className="text-[10px] text-slate-500 font-sans">{cat.description}</p>
                </div>
              </div>

              {/* Grid of tools */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id={`tech-cards-grid-${idx}`}>
                {cat.techs.map((tech) => (
                  <div 
                    key={tech.name}
                    id={`tech-node-${tech.name}`}
                    className="rounded-xl border border-slate-900 bg-slate-900/10 p-5 space-y-3 hover:border-slate-800 transition-all group"
                  >
                    
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-xs font-bold text-white group-hover:text-teal-400 transition-colors">
                        {tech.name}
                      </span>
                      <span className="font-mono text-[10px] text-slate-500">
                        {tech.level}% Capable
                      </span>
                    </div>

                    {/* Simple static competency bar */}
                    <div className="h-1.5 w-full bg-slate-950 rounded-full overflow-hidden">
                      <div 
                        className="h-full bg-gradient-to-r from-blue-500 to-teal-400" 
                        style={{ width: `${tech.level}%` }}
                      />
                    </div>

                    <p className="text-[11px] text-slate-400 font-sans leading-normal">
                      {tech.info}
                    </p>

                  </div>
                ))}
              </div>

            </div>
          ))}
        </div>
      )}

      {/* Trust validation checklist cards */}
      <div className="mt-16 rounded-2xl bg-slate-900/10 border border-slate-900 p-6 sm:p-8" id="tech-standards-brief">
        <h4 className="font-display font-extrabold text-white text-base lg:text-lg mb-6 text-center md:text-left">
          CodeLok Technical Competency Standards
        </h4>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="competency-standards-list">
          
          <div className="space-y-2">
            <h5 className="font-display text-xs font-bold text-white">Full Stack TypeScript Cohesion</h5>
            <p className="text-[11px] text-slate-400 leading-normal font-sans">
              We leverage TypeScript across both web views and server controllers. This allows us to share code definitions, preventing system schema mismatch bugs during deployments.
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="font-display text-xs font-bold text-teal-400">Infrastructure as Code (IaC) Only</h5>
            <p className="text-[11px] text-slate-400 leading-normal font-sans">
              We configure zero servers manually. All VPC subnets, access roles, load balancers, and cache parameters are declared inside Terraform or CloudFormation manifests for transparent testing.
            </p>
          </div>

          <div className="space-y-2">
            <h5 className="font-display text-xs font-bold text-white">Secured Database Isolation</h5>
            <p className="text-[11px] text-slate-400 leading-normal font-sans">
              We isolate read-write databases from front-facing public nodes, enforcing strict IAM parameters, automated periodic backups, and secure credential storage shields.
            </p>
          </div>

        </div>
      </div>

    </div>
  );
}
