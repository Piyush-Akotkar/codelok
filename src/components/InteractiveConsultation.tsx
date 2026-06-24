import React, { useState, useEffect } from "react";
import { 
  Sparkles, 
  Cpu, 
  Cloud, 
  Clock, 
  ShieldCheck, 
  DollarSign, 
  ArrowRight, 
  CheckCircle, 
  FileText, 
  X, 
  Layers, 
  Loader2,
  BookmarkCheck,
  Building,
  Wrench,
  Database
} from "lucide-react";
import { ConsultationResponse } from "../types";

interface InteractiveConsultationProps {
  onClose?: () => void;
  onLeadCreated?: () => void;
  initialServiceId?: string;
  initialBudget?: string;
}

const INDUSTRIES = [
  "Finance & Algorithmic Trading",
  "Healthcare & Health-Tech",
  "Logistics & Supply Chain",
  "E-Commerce & Global Retail",
  "B2B SaaS Products",
  "Education & Interactive EdTech",
  "Real Estate & Property Management",
  "Manufacturing & Industrial Automation"
];

const SERVICES = [
  { id: "Cloud Infrastructure", label: "Cloud Infrastructure & DevOps Setup" },
  { id: "AI Integration", label: "AI Integration & Agent Customization" },
  { id: "Custom SaaS", label: "Custom Software & SaaS Architecture" },
  { id: "E-Commerce", label: "Enterprise E-Commerce Platforms" },
  { id: "Mobile Engineering", label: "Native iOS & Android Applications" }
];

const BUDGETS = [
  "₹5L - ₹10L",
  "₹10L - ₹25L",
  "₹25L - ₹50L",
  "₹50L+"
];

export default function InteractiveConsultation({ 
  onClose, 
  onLeadCreated,
  initialServiceId,
  initialBudget 
}: InteractiveConsultationProps) {
  
  // Form State
  const [industry, setIndustry] = useState(INDUSTRIES[0]);
  const [serviceType, setServiceType] = useState(SERVICES[0].id);
  const [description, setDescription] = useState("");
  const [techPreference, setTechPreference] = useState("");
  const [budgetRange, setBudgetRange] = useState(initialBudget || BUDGETS[1]);

  // Lead Conversion State
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [isSubmittingLead, setIsSubmittingLead] = useState(false);
  const [leadCreatedSuccess, setLeadCreatedSuccess] = useState(false);

  // AI Generation States
  const [isGenerating, setIsGenerating] = useState(false);
  const [generationStep, setGenerationStep] = useState(0);
  const [proposal, setProposal] = useState<ConsultationResponse | null>(null);
  const [errorText, setErrorText] = useState("");

  const stepsText = [
    "Synthesizing requirements brief...",
    "Drafting isolated AWS VPC subnets & load balancer topologies...",
    "Mapping container orchestrations, RDS replicas, and cache pools...",
    "Identifying cost-optimization & automated webhook routines...",
    "Applying strict security models & regulatory compliance scans...",
    "Formulating resource hours, delivery velocities, and phase gates..."
  ];

  // Map input values on startup
  useEffect(() => {
    if (initialServiceId) {
      const match = SERVICES.find(s => s.id.toLowerCase().includes(initialServiceId.toLowerCase()) || initialServiceId.toLowerCase().includes(s.id.toLowerCase()));
      if (match) setServiceType(match.id);
    }
  }, [initialServiceId]);

  // Loading animation loops
  useEffect(() => {
    let interval: any;
    if (isGenerating) {
      setGenerationStep(0);
      interval = setInterval(() => {
        setGenerationStep((prev) => {
          if (prev >= stepsText.length - 1) {
            return prev; // Hold at last step until server returns
          }
          return prev + 1;
        });
      }, 2500);
    }
    return () => clearInterval(interval);
  }, [isGenerating]);

  // Handle Architecture Generation call to server-side Gemini
  const handleGenerateArchitecture = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!description.trim()) {
      setErrorText("Please write down a description explaining what you want us to design.");
      return;
    }
    setErrorText("");
    setIsGenerating(true);
    setProposal(null);

    try {
      const response = await fetch("/api/consult", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          industry,
          serviceType,
          description,
          techPreference,
          budgetRange
        })
      });

      if (!response.ok) {
        throw new Error("Architecture design servers are currently congested. Please retry in a moment.");
      }

      const data = await response.json();
      setProposal(data);
    } catch (err: any) {
      console.error(err);
      setErrorText(err.message || "Something went wrong. Let's schedule a direct physical consultation instead!");
    } finally {
      setIsGenerating(false);
    }
  };

  // Convert AI Output to formal proposal ticket in CodeLok database
  const handleCovertToLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) {
      alert("Name and Email are strictly required to convert this proposal.");
      return;
    }
    setIsSubmittingLead(true);

    try {
      // Build details block summarizing AI Output plus description
      const detailsBlock = `[AI Consultation Ticket generated on system]
Client Description: ${description}
Target Industry: ${industry}
Selected Budget Bracket: ${budgetRange}
AI Recommended Stack Key: ${proposal?.recommendedStack.slice(0, 3).join(", ") || "AWS ECS, React"}
Proposed Timeline Summary: ${proposal?.estimatedTimeline || "Not specified"}`;

      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          companyName: companyName || "N/A",
          email,
          phone: phone || "N/A",
          serviceRequired: `${serviceType} (AI Consultation)`,
          budget: budgetRange,
          projectDetails: detailsBlock
        })
      });

      if (!response.ok) {
        throw new Error("Could not cache client ticket. Attempt direct submission.");
      }

      setLeadCreatedSuccess(true);
      if (onLeadCreated) {
        onLeadCreated();
      }
    } catch (err: any) {
      console.error(err);
      alert("Failed to submit ticket. Please check your network or call our direct line.");
    } finally {
      setIsSubmittingLead(false);
    }
  };

  return (
    <div className="w-full rounded-2xl border border-slate-850 bg-slate-900/60 p-6 sm:p-8 backdrop-blur-md text-white shadow-2xl" id="interactive-consult-workbench">
      
      {/* Header and Control Row */}
      <div className="flex items-start justify-between border-b border-slate-800 pb-5">
        <div className="flex items-center space-x-3">
          <div className="flex h-11 w-11 items-center justify-center rounded-lg bg-teal-500/15 text-teal-400">
            <Sparkles className="h-6 w-6" />
          </div>
          <div>
            <h3 className="font-display text-xl sm:text-2xl font-bold tracking-tight text-white">
              AI Solution Architect Studio
            </h3>
            <p className="text-xs text-slate-300">
              Model real-time enterprise layout roadmaps by configuring project parameters below.
            </p>
          </div>
        </div>
        {onClose && (
          <button 
            id="close-architect-btn"
            onClick={onClose} 
            className="rounded-lg p-1.5 text-slate-400 hover:bg-slate-800 hover:text-white transition-colors"
          >
            <X className="h-5 w-5" />
          </button>
        )}
      </div>

      {errorText && (
        <div className="mt-4 rounded-lg bg-red-500/10 border border-red-500/30 p-3 text-xs text-red-400 flex items-center space-x-2">
          <span className="font-semibold">Notice:</span>
          <span>{errorText}</span>
        </div>
      )}

      {/* Generation Loader overlay */}
      {isGenerating && (
        <div className="my-10 flex flex-col items-center justify-center space-y-6 py-12" id="generation-spinner-box">
          <div className="relative flex h-16 w-16 items-center justify-center">
            <Loader2 className="absolute h-16 w-16 animate-spin text-teal-400" />
            <Cpu className="h-7 w-7 text-blue-500 animate-pulse" />
          </div>
          <div className="max-w-md text-center space-y-2">
            <p className="font-display text-sm font-semibold text-teal-400 animate-pulse">
              {stepsText[generationStep]}
            </p>
            <p className="text-xs text-slate-400">
              CodeLok AI is processing models to yield an enterprise-scale architecture blueprint. This may take up to 10 seconds.
            </p>
          </div>
          <div className="h-1.5 w-full max-w-xs overflow-hidden rounded-full bg-slate-800">
            <div 
              className="h-full bg-gradient-to-r from-blue-500 to-teal-400 transition-all duration-1000" 
              style={{ width: `${((generationStep + 1) / stepsText.length) * 100}%` }}
            />
          </div>
        </div>
      )}

      {/* Main Dynamic Workbench Area */}
      {!isGenerating && !proposal && (
        <div className="mt-6 md:grid md:grid-cols-12 md:gap-8" id="architect-parameters-inputs">
          
          <div className="md:col-span-12 lg:col-span-5 space-y-5">
            <div className="rounded-lg bg-slate-950/40 p-4 border border-slate-800/60">
              <h4 className="flex items-center space-x-2 text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                <Building className="h-3.5 w-3.5 text-teal-400" />
                <span>1. Enterprise Context</span>
              </h4>
              <p className="text-[11px] text-slate-400 mb-3">
                This dictates regulatory boundaries. Financial tools follow strict ledger logs, while health targets demand compliance layers.
              </p>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Target Client Industry</label>
                  <select 
                    id="select-industry"
                    value={industry}
                    onChange={(e) => setIndustry(e.target.value)}
                    className="w-full rounded-lg bg-slate-900 border border-slate-850 px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-teal-400"
                  >
                    {INDUSTRIES.map((ind) => (
                      <option key={ind} value={ind}>{ind}</option>
                    ))}
                  </select>
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Service Objective</label>
                  <select 
                    id="select-service-goal"
                    value={serviceType}
                    onChange={(e) => setServiceType(e.target.value)}
                    className="w-full rounded-lg bg-slate-900 border border-slate-850 px-3 py-2 text-xs text-white focus:outline-none focus:ring-1 focus:ring-teal-400"
                  >
                    {SERVICES.map((srv) => (
                      <option key={srv.id} value={srv.id}>{srv.label}</option>
                    ))}
                  </select>
                </div>
              </div>
            </div>

            <div className="rounded-lg bg-slate-950/40 p-4 border border-slate-800/60">
              <h4 className="flex items-center space-x-2 text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                <Wrench className="h-3.5 w-3.5 text-blue-400" />
                <span>2. Tech &amp; Budget Limits</span>
              </h4>
              
              <div className="space-y-3">
                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">
                    Technology Preference <span className="text-slate-400">(Optional)</span>
                  </label>
                  <input 
                    id="input-tech-pref"
                    type="text" 
                    placeholder="e.g. AWS, Next.js, Node, Postgres, OpenAI" 
                    value={techPreference}
                    onChange={(e) => setTechPreference(e.target.value)}
                    className="w-full rounded-lg bg-slate-900 border border-slate-850 px-3 py-2 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-400"
                  />
                </div>

                <div>
                  <label className="block text-[11px] font-semibold text-slate-300 mb-1">Target Capital Envelope</label>
                  <div className="grid grid-cols-2 gap-2">
                    {BUDGETS.map((bdg) => (
                      <button
                        key={bdg}
                        id={`btn-budget-${bdg}`}
                        type="button"
                        onClick={() => setBudgetRange(bdg)}
                        className={`py-1.5 text-center text-xs rounded-lg font-bold border transition-all ${
                          budgetRange === bdg 
                            ? "bg-teal-400/10 border-teal-400 text-teal-400 shadow-md shadow-teal-500/5"
                            : "bg-slate-900 border-slate-850 text-slate-400 hover:text-white"
                        }`}
                      >
                        {bdg}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* Prompt briefing area */}
          <div className="md:col-span-12 lg:col-span-7 mt-5 lg:mt-0 flex flex-col justify-between">
            <form onSubmit={handleGenerateArchitecture} className="flex-1 flex flex-col justify-between space-y-4">
              <div className="rounded-lg bg-slate-950/40 p-5 border border-slate-800/60 flex-1 flex flex-col min-h-[180px]">
                <label className="block text-xs font-bold text-slate-300 uppercase tracking-wider mb-2">
                  3. Project Scope &amp; Briefing Statement
                </label>
                <p className="text-[11px] text-slate-400 mb-3 leading-relaxed">
                  Be as comprehensive as possible. Explain your goals, peak transaction assumptions, legacy systems to migrate, or user interaction paths.
                </p>
                <textarea
                  id="textarea-scope-brief"
                  rows={6}
                  placeholder={`Example: Designing a web-based automated real-estate contract parser system. Core logic should accept PDFs, extract seller details, compute financing margins automatically, and tag warning signs inside clean dashboards. Need multi-tenant security structures.`}
                  value={description}
                  onChange={(e) => setDescription(e.target.value)}
                  className="w-full flex-1 rounded-lg bg-slate-900 border border-slate-850 p-3 text-xs text-white placeholder-slate-500 focus:outline-none focus:ring-1 focus:ring-teal-400 font-sans leading-relaxed resize-none"
                  required
                />
              </div>

              <div className="flex items-center justify-between pt-2">
                <div className="flex items-center space-x-2 text-[10px] text-slate-400 font-mono">
                  <Database className="h-3.5 w-3.5 text-blue-400 animate-pulse" />
                  <span>Includes full AWS VPC Architecture diagram logic</span>
                </div>
                <button
                  id="submit-generate-architecture"
                  type="submit"
                  className="flex items-center space-x-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-6 py-2.5 text-xs font-bold text-white shadow-xl hover:from-blue-500 hover:to-indigo-500 focus:outline-none transition-all group duration-200"
                >
                  <span>Generate Architecture Blueprint</span>
                  <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
                </button>
              </div>
            </form>
          </div>

        </div>
      )}

      {/* Dynamic Report View Screen */}
      {!isGenerating && proposal && (
        <div className="mt-6 space-y-6" id="consultation-response-output">
          
          <div className="flex items-center justify-between bg-slate-950/60 rounded-lg p-3 px-4 border border-teal-500/20 text-xs">
            <div className="flex items-center space-x-2">
              <span className="flex h-2 w-2 rounded-full bg-teal-400 animate-pulse"></span>
              <span className="font-mono text-teal-400">Architecture Synthesized Successfully</span>
            </div>
            {proposal.usingMock && (
              <span className="font-mono text-[10px] text-slate-400 bg-slate-900 rounded px-2 py-0.5 border border-slate-800">
                Demo Blueprint Mode
              </span>
            )}
            <button 
              id="back-to-variables-blueprint"
              onClick={() => setProposal(null)}
              className="text-[11px] font-semibold text-blue-400 hover:text-blue-300 underline"
            >
              Modify Constraints
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-12 gap-6">
            
            {/* Left Blueprint parameters detailing results */}
            <div className="md:col-span-12 lg:col-span-8 space-y-6">
              
              {/* Cloud layout */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 space-y-3">
                <h4 className="flex items-center space-x-2.5 font-display text-sm font-bold text-teal-400">
                  <Cloud className="h-5 w-5 text-blue-500" />
                  <span>I. Pro proposed AWS Cloud Layout Blueprint</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans bg-slate-900/60 p-4 rounded-lg border border-slate-850">
                  {proposal.cloudArchitecture}
                </p>
              </div>

              {/* Stack specification lists */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 space-y-3">
                <h4 className="flex items-center space-x-2.5 font-display text-sm font-bold text-teal-400">
                  <Layers className="h-5 w-5 text-indigo-400" />
                  <span>II. Recommended Custom Application Toolset</span>
                </h4>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3" id="toolset-recommendation-cards">
                  {proposal.recommendedStack.map((tech, idx) => (
                    <div key={idx} className="flex items-start space-x-3 rounded-lg bg-slate-900/40 p-3 border border-slate-850 text-xs">
                      <div className="flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-blue-500/10 text-blue-400 font-mono text-[10px] font-bold">
                        {idx + 1}
                      </div>
                      <span className="text-slate-300 leading-relaxed font-mono">{tech}</span>
                    </div>
                  ))}
                </div>
              </div>

              {/* Automation and security */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                {/* Cost efficiency */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 space-y-2.5">
                  <h4 className="flex items-center space-x-2 font-display text-xs font-bold text-teal-400 uppercase tracking-wide">
                    <DollarSign className="h-4 w-4 text-emerald-400" />
                    <span>Cost Optimization Plan</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/40 p-3 rounded-lg border border-slate-850">
                    {proposal.automationIdeas}
                  </p>
                </div>

                {/* Compliance security guard */}
                <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 space-y-2.5">
                  <h4 className="flex items-center space-x-2 font-display text-xs font-bold text-teal-400 uppercase tracking-wide">
                    <ShieldCheck className="h-4 w-4 text-teal-400" />
                    <span>Active Compliance Safeguards</span>
                  </h4>
                  <p className="text-xs text-slate-300 leading-relaxed bg-slate-900/40 p-3 rounded-lg border border-slate-850">
                    {proposal.securityRecom}
                  </p>
                </div>

              </div>

              {/* Timeline duration phase gates */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/40 p-5 space-y-3">
                <h4 className="flex items-center space-x-2.5 font-display text-sm font-bold text-teal-400">
                  <Clock className="h-5 w-5 text-orange-400 animate-pulse" />
                  <span>III. Production Velocity &amp; Engineering Timeline</span>
                </h4>
                <p className="text-xs text-slate-300 leading-relaxed font-sans bg-slate-900/60 p-4 rounded-lg border border-slate-850">
                  {proposal.estimatedTimeline}
                </p>
              </div>

            </div>

            {/* Right Form column converting proposal to lead ticket */}
            <div className="md:col-span-12 lg:col-span-4 space-y-6">
              
              <div className="rounded-xl border border-blue-500/30 bg-blue-950/20 p-5 space-y-4">
                <div>
                  <h4 className="flex items-center space-x-2 font-display text-sm font-bold text-white">
                    <BookmarkCheck className="h-5 w-5 text-teal-400" />
                    <span>IV. Lockdown Proposal Ticket</span>
                  </h4>
                  <p className="text-[11px] text-slate-400 leading-relaxed mt-1">
                    Lock down this AI-generated architectural study. Our senior engineers will optimize the parameters and prepare a customized financial scope of work.
                  </p>
                </div>

                {leadCreatedSuccess ? (
                  <div className="rounded-lg bg-teal-500/10 border border-teal-500/30 p-4 text-center space-y-3 animate-fade-in" id="ticket-success-panel">
                    <CheckCircle className="h-10 w-10 text-teal-400 mx-auto" />
                    <h5 className="font-display text-sm font-bold text-white">Consultation Reserved!</h5>
                    <p className="text-[11px] text-slate-300 leading-relaxed">
                      Our certified cloud architect desk has received your proposal criteria. Sarah Jenkins has flagged your sector. We have saved a secure local copy inside your workspace ticket logs.
                    </p>
                    <button
                      id="reset-form-success"
                      onClick={() => {
                        setLeadCreatedSuccess(false);
                        setProposal(null);
                        setDescription("");
                      }}
                      className="w-full rounded bg-slate-800 py-1.5 text-xs font-semibold text-white hover:bg-slate-700"
                    >
                      Draft Another Layout
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleCovertToLead} className="space-y-3.5">
                    <div>
                      <label className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1">Full Name</label>
                      <input 
                        id="lead-fullName"
                        type="text" 
                        required
                        placeholder="John Doe" 
                        value={fullName}
                        onChange={(e) => setFullName(e.target.value)}
                        className="w-full rounded bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-teal-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1">Corporate Name</label>
                      <input 
                        id="lead-companyName"
                        type="text" 
                        placeholder="Enterprise Inc." 
                        value={companyName}
                        onChange={(e) => setCompanyName(e.target.value)}
                        className="w-full rounded bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-teal-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1">Email Coordinates</label>
                      <input 
                        id="lead-email"
                        type="email" 
                        required
                        placeholder="johndoe@enterprise.com" 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-full rounded bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-teal-400"
                      />
                    </div>

                    <div>
                      <label className="block text-[10px] font-medium text-slate-400 uppercase tracking-wider mb-1">Direct Phone</label>
                      <input 
                        id="lead-phone"
                        type="tel" 
                        placeholder="+91 99999 88888" 
                        value={phone}
                        onChange={(e) => setPhone(e.target.value)}
                        className="w-full rounded bg-slate-950 border border-slate-800 px-3 py-1.5 text-xs text-white placeholder-slate-600 focus:outline-none focus:border-teal-400"
                      />
                    </div>

                    <button
                      id="submit-proposal-conversion"
                      type="submit"
                      disabled={isSubmittingLead}
                      className="w-full flex items-center justify-center space-x-2 rounded-lg bg-teal-500 py-2.5 text-xs font-bold text-slate-950 hover:bg-teal-400 focus:outline-none disabled:opacity-50 transition-colors"
                    >
                      {isSubmittingLead ? (
                        <>
                          <Loader2 className="h-4 w-4 animate-spin" />
                          <span>Filing active ticket...</span>
                        </>
                      ) : (
                        <>
                          <FileText className="h-4 w-4" />
                          <span>Submit Form &amp; Request Proposal</span>
                        </>
                      )}
                    </button>
                  </form>
                )}

              </div>

              {/* Architect statement */}
              <div className="rounded-xl border border-slate-800 bg-slate-950/60 p-5 space-y-2">
                <h5 className="font-display text-xs font-bold text-slate-200">Solutions Architect Summary</h5>
                <p className="text-[11px] text-slate-400 leading-relaxed font-serif italic">
                  &quot;{proposal.professionalSummary}&quot;
                </p>
                <div className="flex items-center space-x-2.5 pt-1.5">
                  <div className="h-6 w-6 rounded-full bg-blue-600 flex items-center justify-center font-bold text-[10px] text-white">
                    S
                  </div>
                  <div>
                    <h6 className="text-[10px] font-bold text-white leading-none">Shreya Chawla</h6>
                    <span className="text-[9px] text-slate-400 font-mono">Senior Cloud Architect, AWS Competency</span>
                  </div>
                </div>
              </div>

            </div>

          </div>

        </div>
      )}

    </div>
  );
}
