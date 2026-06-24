import React from "react";
import { 
  CheckCircle, 
  ArrowRight, 
  Layers, 
  HeartHandshake, 
  Sparkles, 
  ShieldCheck, 
  Rocket, 
  LineChart, 
  FolderSync, 
  Database,
  ArrowUpRight
} from "lucide-react";
import { CODELOK_SOLUTIONS } from "../data";

interface SolutionsViewProps {
  triggerConsultationWithPackage: (title: string, budget: string) => void;
}

export default function SolutionsView({ triggerConsultationWithPackage }: SolutionsViewProps) {
  
  // Custom Icon Selector based on package identity
  const getPackageIcon = (pId: string) => {
    switch (pId) {
      case "startup-launch":
        return <Rocket className="h-6 w-6 text-orange-400" />;
      case "ecommerce-growth":
        return <LineChart className="h-6 w-6 text-teal-400" />;
      case "enterprise-trans":
        return <FolderSync className="h-6 w-6 text-blue-400 animate-spin" style={{ animationDuration: '40s' }} />;
      case "ai-automation":
        return <Sparkles className="h-6 w-6 text-violet-400 animate-pulse" />;
      default:
        return <Layers className="h-6 w-6 text-teal-400" />;
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-white font-sans" id="solutions_page_section">
      
      {/* Dynamic solutions page header */}
      <div className="mb-14 text-center space-y-3">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-400">Fixed-Scope Engineering Sprints</span>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-none">
          Packaged Transformation Solutions
        </h1>
        <p className="max-w-2xl mx-auto text-xs sm:text-sm text-slate-400">
          Standardized delivery structures providing faster deployment velocities without sacrificing code safety OR custom architecture alignments.
        </p>
      </div>

      {/* Grid of Fix-Scope cards */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8" id="solutions-packages-list">
        {CODELOK_SOLUTIONS.map((pkg) => (
          <div 
            key={pkg.id}
            id={`solution-pkg-${pkg.id}`}
            className="rounded-2xl border border-slate-900 bg-slate-900/10 hover:bg-slate-900/30 p-6 sm:p-8 flex flex-col justify-between hover:border-slate-800 transition-all group relative overflow-hidden"
          >
            {/* Visual background indicator */}
            <div className="absolute top-0 right-0 h-24 w-24 rounded-full bg-blue-500/5 blur-[50px] pointer-events-none" />

            <div className="space-y-6">
              
              {/* Header Badge, price, title */}
              <div className="flex items-start justify-between">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-slate-950 border border-slate-850">
                  {getPackageIcon(pkg.id)}
                </div>
                <div className="text-right">
                  <span className="font-mono text-[9px] uppercase tracking-wider text-slate-400 px-2 py-0.5 rounded bg-slate-950 border border-slate-900 block font-semibold">
                    {pkg.badge}
                  </span>
                  <span className="font-display text-sm font-extrabold text-teal-400 block mt-1">
                    {pkg.priceEstimate}
                  </span>
                </div>
              </div>

              {/* Title & description */}
              <div className="space-y-2">
                <h3 className="font-display text-lg sm:text-2xl font-bold text-white group-hover:text-blue-400 transition-colors">
                  {pkg.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {pkg.shortDescription}
                </p>
              </div>

              {/* Included list features */}
              <div className="space-y-2.5 pt-2 border-t border-slate-900">
                <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-widest font-bold">
                  Sprint Features Included
                </span>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-xs">
                  {pkg.features.map((feat) => (
                    <div key={feat} className="flex items-center space-x-2 text-slate-300">
                      <CheckCircle className="h-4 w-4 text-teal-400 shrink-0" />
                      <span className="font-sans leading-tight">{feat}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Outputs Handoff */}
              <div className="rounded-xl bg-slate-950 p-4 border border-slate-850 space-y-2 text-xs">
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-bold block">
                  IP Assets &amp; Deliverables Transferred
                </span>
                <div className="flex flex-wrap gap-2 pt-1" id="asset-deliverables-list">
                  {pkg.includedDeliverables.map((del) => (
                    <span key={del} className="font-mono text-[10px] text-slate-400 bg-slate-900 px-2 py-0.5 rounded border border-slate-850">
                      {del}
                    </span>
                  ))}
                </div>
              </div>

            </div>

            {/* Bottom Target match alignment and selection trigger */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pt-6 mt-6 border-t border-slate-900 gap-4">
              <div className="text-[11px] text-slate-500 font-sans leading-normal">
                <strong className="text-slate-400">Strategic Target Audience:</strong> <br />
                {pkg.targetAudience}
              </div>
              <button
                id={`btn-blueprint-${pkg.id}`}
                onClick={() => triggerConsultationWithPackage(pkg.title, pkg.priceEstimate)}
                className="w-full sm:w-auto shrink-0 flex items-center justify-center space-x-2 rounded-xl bg-teal-400 px-5 py-3 text-xs font-bold text-slate-950 hover:bg-teal-300 focus:outline-none transition-colors"
              >
                <span>Blueprint Solution</span>
                <ArrowUpRight className="h-3.5 w-3.5" />
              </button>
            </div>

          </div>
        ))}
      </div>

      {/* Strategic Custom Consulting segment */}
      <div className="mt-14 rounded-2xl border border-slate-900 bg-slate-900/10 p-6 sm:p-8 flex flex-col md:flex-row items-center justify-between gap-6" id="custom-fixed-consulting">
        <div className="flex items-center space-x-3 text-left">
          <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-teal-500/10 text-teal-400 shrink-0">
            <HeartHandshake className="h-6 w-6" />
          </div>
          <div>
            <h4 className="font-display text-base font-bold text-white">Need a dynamic, hybrid enterprise blueprint?</h4>
            <p className="text-xs text-slate-400 mt-0.5">We design specialized bespoke arrangements mapping multi-region databases, custom APIs, and secure federated identity systems.</p>
          </div>
        </div>
        <button
          id="custom-solution-scope-btn"
          onClick={() => triggerConsultationWithPackage("Bespoke Enterprise Systems Integration", "₹25L - ₹50L")}
          className="w-full md:w-auto flex items-center justify-center space-x-2 rounded-xl border border-slate-800 hover:border-slate-700 bg-slate-950 hover:bg-slate-900 hover:text-white px-6 py-3.5 text-xs font-bold text-slate-300 transition-colors"
        >
          <span>Bespoke Engineering Consultation</span>
          <ArrowRight className="h-4 w-4" />
        </button>
      </div>

    </div>
  );
}
