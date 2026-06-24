import React, { useState } from "react";
import { 
  Cloud, 
  Database, 
  Cpu, 
  Globe, 
  Smartphone, 
  ShoppingCart, 
  Sparkles, 
  Code, 
  ShieldAlert,
  CheckCircle2,
  ChevronRight,
  ArrowRight,
  HelpCircle,
  Clock,
  Layers,
  Sparkle
} from "lucide-react";
import { CODELOK_SERVICES } from "../data";

interface ServicesViewProps {
  initialServiceId?: string;
  triggerConsultationWithService: (serviceId: string) => void;
}

export default function ServicesView({ initialServiceId, triggerConsultationWithService }: ServicesViewProps) {
  // Select active service tab
  const [activeServiceId, setActiveServiceId] = useState(
    initialServiceId || CODELOK_SERVICES[0].id
  );

  const activeService = CODELOK_SERVICES.find(s => s.id === activeServiceId) || CODELOK_SERVICES[0];

  // Helper to resolve Lucide Icon
  const getServiceIcon = (iconName: string) => {
    switch (iconName) {
      case "Cloud": return <Cloud className="h-5 w-5" />;
      case "Database": return <Database className="h-5 w-5" />;
      case "Cpu": return <Cpu className="h-5 w-5" />;
      case "Globe": return <Globe className="h-5 w-5" />;
      case "Smartphone": return <Smartphone className="h-5 w-5" />;
      case "ShoppingCart": return <ShoppingCart className="h-5 w-5" />;
      case "Sparkles": return <Sparkles className="h-5 w-5" />;
      case "Code": return <Code className="h-5 w-5" />;
      case "ShieldAlert": return <ShieldAlert className="h-5 w-5" />;
      default: return <Cloud className="h-5 w-5" />;
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-white font-sans" id="services_page_section">
      
      {/* Page Header */}
      <div className="mb-12 text-center md:text-left space-y-2">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-400">Our Competencies</span>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-none">
          Professional IT Services Catalog
        </h1>
        <p className="max-w-2xl text-xs sm:text-sm text-slate-400">
          CodeLok engineers resilient infrastructures and intelligent web platforms targeting absolute system safety and zero resource waste.
        </p>
      </div>

      {/* Interactive Two-Column Workspace Layout */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8" id="services_catalog_workbench">
        
        {/* Left Column Navigation List */}
        <div className="lg:col-span-4 space-y-2" id="services_sidebar_list">
          <span className="block font-mono text-[10px] text-slate-500 uppercase tracking-widest font-bold mb-3 pl-2">
            Select Service Competency
          </span>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-1 gap-2">
            {CODELOK_SERVICES.map((srv) => {
              const isActive = srv.id === activeServiceId;
              return (
                <button
                  key={srv.id}
                  id={`srv-tab-${srv.id}`}
                  onClick={() => setActiveServiceId(srv.id)}
                  className={`flex items-center space-x-3 rounded-xl p-3.5 text-left transition-all border ${
                    isActive 
                      ? "bg-blue-600/10 border-blue-500/40 text-white shadow-lg shadow-blue-500/5"
                      : "bg-slate-900/40 border-slate-900 text-slate-400 hover:text-white hover:bg-slate-900/70"
                  }`}
                >
                  <div className={`p-2 rounded-lg shrink-0 ${isActive ? "bg-blue-600 text-white" : "bg-slate-950 text-slate-400"}`}>
                    {getServiceIcon(srv.iconName)}
                  </div>
                  <div className="min-w-0 flex-1">
                    <h3 className="text-xs font-bold font-display tracking-wide line-clamp-1">{srv.title}</h3>
                    <p className="text-[10px] text-slate-500 font-mono truncate uppercase mt-0.5">// DevOps Certified</p>
                  </div>
                  <ChevronRight className={`h-4 w-4 shrink-0 transition-transform ${isActive ? "translate-x-1 text-teal-400" : "text-slate-600"}`} />
                </button>
              );
            })}
          </div>
        </div>

        {/* Right Column Specification Dashboard */}
        <div className="lg:col-span-8 bg-slate-900/20 border border-slate-900 rounded-2xl p-6 sm:p-8 space-y-8 backdrop-blur-md" id="service_details_dashboard">
          
          {/* Service Title Area */}
          <div className="flex flex-col sm:flex-row sm:items-center justify-between border-b border-slate-900 pb-5 gap-4">
            <div className="flex items-center space-x-3.5">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-teal-500/15 text-teal-400 shadow-md">
                {getServiceIcon(activeService.iconName)}
              </div>
              <div>
                <h2 className="font-display text-xl sm:text-2xl font-bold text-white">{activeService.title}</h2>
                <span className="font-mono text-[10px] text-slate-500 uppercase tracking-wider">// High Security Active SLA</span>
              </div>
            </div>

            <button
              id={`cta-consult-${activeService.id}`}
              onClick={() => triggerConsultationWithService(activeService.title)}
              className="flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-5 py-3 text-xs font-bold text-white shadow-lg hover:from-blue-500 hover:to-indigo-500 focus:outline-none transition-all group"
            >
              <Sparkles className="h-4.5 w-4.5 text-teal-300" />
              <span>Configure AI Consultation</span>
              <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          {/* Overview Statement */}
          <div className="space-y-3">
            <h4 className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest pl-1">// I. Solution Narrative</h4>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans bg-slate-950/40 p-4 rounded-xl border border-slate-850">
              {activeService.longDescription}
            </p>
          </div>

          {/* Two-Column Benefits and Stack */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            
            {/* Target Business Benefits */}
            <div className="space-y-3">
              <h4 className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest">// II. Business Outcomes</h4>
              <div className="space-y-2.5">
                {activeService.benefits.map((benefit, i) => (
                  <div key={i} className="flex items-start space-x-2.5 text-xs text-slate-300">
                    <CheckCircle2 className="h-4.5 w-4.5 text-teal-400 shrink-0 mt-0.5" />
                    <span className="leading-relaxed">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Core Technologies involved */}
            <div className="space-y-3">
              <h4 className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest">// III. Technology Profile</h4>
              <div className="flex flex-wrap gap-2 pt-1" id="technology-profile-list">
                {activeService.technologies.map((tech) => (
                  <span 
                    key={tech} 
                    className="font-mono text-[11px] text-teal-400 bg-teal-500/5 px-3 py-1 rounded-lg border border-teal-500/20 shadow-sm"
                  >
                    {tech}
                  </span>
                ))}
              </div>
              <div className="rounded-lg bg-slate-950/40 p-3 border border-slate-850 mt-4 text-[10px] text-slate-500 leading-normal">
                All CodeLok implementations undergo static analysis, key rotations, and dynamic threat scanning checks before production cutovers.
              </div>
            </div>

          </div>

          {/* Development Process Sprint timeline */}
          <div className="space-y-3 border-t border-slate-900 pt-6">
            <h4 className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest">// IV. Engineering Steps</h4>
            <div className="grid grid-cols-1 sm:grid-cols-4 gap-3">
              {activeService.processSteps.map((step, idx) => (
                <div key={idx} className="rounded-xl bg-slate-950 text-slate-300 p-3.5 border border-slate-85">
                  <div className="font-display text-blue-500 font-bold text-xs uppercase mb-1">
                    Sprint {idx + 1}
                  </div>
                  <p className="text-[10px] sm:text-[11px] text-slate-400 leading-relaxed font-sans">
                    {step}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Frequently Asked Questions */}
          <div className="space-y-3 border-t border-slate-900 pt-6">
            <h4 className="font-mono text-[10px] font-bold text-slate-500 uppercase tracking-widest flex items-center space-x-1 mb-2">
              <HelpCircle className="h-3.5 w-3.5 text-blue-400" />
              <span>V. Operational FAQs</span>
            </h4>
            <div className="space-y-3">
              {activeService.faqs.map((faq, i) => (
                <div key={i} className="rounded-lg bg-slate-950/60 p-4 border border-slate-850">
                  <h5 className="font-display text-xs font-bold text-white mb-1.5 flex items-start space-x-2">
                    <span className="text-teal-400 font-mono text-[10px]">Q:</span>
                    <span>{faq.question}</span>
                  </h5>
                  <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed pl-4 font-sans border-l border-slate-800">
                    {faq.answer}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Bottom Call to Action shortcut */}
          <div className="rounded-xl bg-gradient-to-r from-blue-950/30 to-indigo-950/30 border border-blue-500/20 p-5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div>
              <h5 className="font-display text-xs font-bold text-white">Ready to scope {activeService.title}?</h5>
              <p className="text-[10px] text-slate-400 mt-1">Our certified architect desk is ready to model your database, security VPCs, and server limits.</p>
            </div>
            <button
              id={`discuss-scope-${activeService.id}`}
              onClick={() => triggerConsultationWithService(activeService.title)}
              className="w-full sm:w-auto shrink-0 flex items-center justify-center space-x-2 rounded-lg bg-teal-500 px-4 py-2 text-xs font-bold text-slate-950 hover:bg-teal-400 transition-colors"
            >
              <span>Discuss Project Scope</span>
              <ArrowRight className="h-3.5 w-3.5" />
            </button>
          </div>

        </div>

      </div>

    </div>
  );
}
