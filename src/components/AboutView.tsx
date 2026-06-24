import React from "react";
import { 
  Target, 
  Eye, 
  Award, 
  Heart, 
  Users, 
  ShieldCheck, 
  CheckCircle2, 
  Hourglass, 
  Sparkles,
  Briefcase
} from "lucide-react";

export default function AboutView() {
  
  // High-fidelity values list
  const CORE_VALUES = [
    { name: "Innovation", desc: "We continuously test cutting-edge LLMs, serverless containers, and web metrics to keep your infrastructure ahead of competitors.", icon: <Sparkles className="h-4.5 w-4.5 text-violet-400" /> },
    { name: "Trust", desc: "We write clean, compliant code, transfer 100% intellectual property, and operate with complete security audit logs.", icon: <ShieldCheck className="h-4.5 w-4.5 text-blue-400" /> },
    { name: "Quality", desc: "We maintain 95+ PageSpeed scores, complete type-safe schemas, and strict unit test standards for seamless production health.", icon: <Award className="h-4.5 w-4.5 text-teal-400" /> },
    { name: "Transparency", desc: "No hidden parameters, real-time shared ticket tracking, and honest cost optimization audits to stop server capital waste.", icon: <CheckCircle2 className="h-4.5 w-4.5 text-emerald-400" /> },
    { name: "Customer Success", desc: "We evaluate our engineering achievements purely through your commercial growth metrics and client happiness reviews.", icon: <Heart className="h-4.5 w-4.5 text-red-400" /> }
  ];

  // Leadership bios
  const LEADERSHIP_TEAM = [
    { name: "Prasanna Kumar", role: "Co-Founder & Chief Architect", bio: "Former Lead Infrastructure Architect at AWS Services India. Prasanna oversees all cloud migration pipelines and microservice architectures.", initial: "PK" },
    { name: "Deepika Sen", role: "Head of AI Engineering", bio: "Alumni of Indian Institute of Science. Deepika pilots custom LLM deployments, semantic RAG systems, and automated agent flows.", initial: "DS" },
    { name: "Sarah Jenkins", role: "VP of Client Operations", bio: "Over 12 years coordinating complex software handshakes for Fortune 500 clinical systems and logistics corporations.", initial: "SJ" }
  ];

  // Company Chronicle logs
  const CHRONICLE_MILESTONES = [
    { year: "2020", name: "CodeLok Founded", desc: "Initiated company as a bootstrap boutique cloud development agency specializing in AWS migration services." },
    { year: "2022", name: "Ventu Ready Expansion", desc: "Scaled operations to over 20 certified staff, introducing enterprise SaaS frameworks and microservice isolated pods." },
    { year: "2024", name: "AI Innovation Labs", desc: "Integrated custom LLMs, RAG configurations, and vectors search components as critical enterprise offerings." },
    { year: "2026", name: "Global Enterprise Partner", desc: "Achieved the prestigious 100+ projects milestone, establishing premium offices in major technological hubs." }
  ];

  // Professional certifications
  const SECURED_CERTIFICATIONS = [
    "AWS Certified Solutions Architect (Professional)",
    "AWS Certified DevOps Engineer (Professional)",
    "Google Cloud Certified Professional Cloud Security Engineer",
    "Kubernetes Certified Administrator (CKA)",
    "ISO 27001 Security Compliance Certification",
    "PCI-DSS Qualified Integrator Status"
  ];

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-white font-sans" id="about_page_section">
      
      {/* Page Header */}
      <div className="mb-14 text-center md:text-left space-y-2">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-400">Our Identity</span>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-none">
          Enterprise Trust, Modern Innovation
        </h1>
        <p className="max-w-2xl text-xs sm:text-sm text-slate-400">
          Meet the group of senior cloud architects and software engineers committed to building robust digital transformations.
        </p>
      </div>

      {/* Story grid row split */}
      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start mb-16" id="about-brand-story">
        
        {/* Left main pitch */}
        <div className="lg:col-span-7 space-y-5">
          <div className="rounded-2xl border border-slate-900 bg-slate-900/10 p-6 sm:p-8 space-y-4">
            <h3 className="font-display text-lg sm:text-xl font-bold text-white">Our Chronicle story</h3>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              CodeLok was established to bridge a massive gap in standard consulting: the discrepancy between bloated legacy architectures and brittle, unsecure mock codebases. We believe that any digital solution, whether built for an ambitious startup or a national healthcare provider, deserves robust type safety, comprehensive automation schemas, and defense-in-depth security structures.
            </p>
            <p className="text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
              Our engineers hold premier industry accolades, allowing us to manage entire engineering lifecycles with complete operational transparency.
            </p>
          </div>

          {/* Mission and Vision blocks */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            
            <div className="rounded-xl bg-slate-950 p-5 border border-slate-900 space-y-2">
              <h4 className="flex items-center space-x-2 font-display text-xs font-extrabold text-teal-400 uppercase tracking-widest">
                <Target className="h-4 w-4" />
                <span>Our Mission</span>
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Empower businesses through highly innovative, secure, and elastically-scalable web, mobile, and cloud-native technology solutions.
              </p>
            </div>

            <div className="rounded-xl bg-slate-950 p-5 border border-slate-900 space-y-2">
              <h4 className="flex items-center space-x-2 font-display text-xs font-extrabold text-blue-400 uppercase tracking-widest">
                <Eye className="h-4 w-4" />
                <span>Our Vision</span>
              </h4>
              <p className="text-xs text-slate-400 leading-relaxed font-sans">
                Become the trusted gold-standard global engineering partner for Cloud Architecture, DevOps lifecycle management, and custom AI deployments.
              </p>
            </div>

          </div>
        </div>

        {/* Right side credentials list and certifications tag */}
        <div className="lg:col-span-5 rounded-2xl border border-slate-900 bg-slate-950 p-6 space-y-5" id="about-brand-creds">
          <h4 className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-bold">
            // Corporate Accreditation &amp; Compliance Logs
          </h4>
          <div className="space-y-3">
            {SECURED_CERTIFICATIONS.map((cert) => (
              <div key={cert} className="flex items-start space-x-2.5 text-xs text-slate-300">
                <CheckCircle2 className="h-4.5 w-4.5 text-teal-400 shrink-0 mt-0.5" />
                <span>{cert}</span>
              </div>
            ))}
          </div>
          <div className="rounded-xl bg-slate-900 p-4 border border-slate-850 mt-4 text-[10px] text-slate-500">
            Compliance targets are scanned daily on live servers under mutual SLA guidelines, maintaining strict security and confidentiality locks for any clinical healthcare or PCI fintech operations under work.
          </div>
        </div>

      </div>

      {/* Core Values grid row */}
      <div className="space-y-6 mb-16" id="about-mission-values-grid">
        <h3 className="font-display text-lg sm:text-xl font-bold text-center md:text-left text-white border-b border-slate-900 pb-3">
          Our Five Core Values
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-4">
          {CORE_VALUES.map((val) => (
            <div key={val.name} className="rounded-xl bg-slate-900/20 border border-slate-900 p-5 space-y-2 hover:bg-slate-905 transition-colors">
              <div className="mb-2">{val.icon}</div>
              <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider">{val.name}</h4>
              <p className="text-[11px] text-slate-400 leading-normal font-sans">{val.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Company Timeline chronicle */}
      <div className="space-y-6 mb-16" id="about-chronicle-history">
        <h3 className="font-display text-lg sm:text-xl font-bold text-white border-b border-slate-900 pb-3">
          Our Growth Chronicle
        </h3>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {CHRONICLE_MILESTONES.map((mil, i) => (
            <div key={i} className="relative pl-5 border-l-2 border-slate-900" id={`timeline-ch-${i}`}>
              <span className="absolute -left-1.5 top-0.5 h-3.5 w-3.5 rounded-full bg-teal-400 border-2 border-slate-950" />
              <span className="font-display text-2xl font-bold text-teal-400 block leading-none">{mil.year}</span>
              <h4 className="font-display text-xs font-bold text-white uppercase tracking-wider mt-2 mb-1">{mil.name}</h4>
              <p className="text-[11px] text-slate-400 leading-normal font-sans">{mil.desc}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Leadership Bios Row */}
      <div className="space-y-6" id="about-leadership-team">
        <h2 className="font-display text-xl sm:text-2xl font-bold text-center md:text-left text-white border-b border-slate-900 pb-3">
          Leader Representation Directory
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6" id="leadership-bios-container">
          {LEADERSHIP_TEAM.map((leader) => (
            <div key={leader.name} className="rounded-xl border border-slate-900 bg-slate-900/10 p-5 space-y-3 hover:border-slate-800 transition-all">
              <div className="flex items-center space-x-3.5">
                <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center font-display text-sm font-bold text-white">
                  {leader.initial}
                </div>
                <div>
                  <h4 className="font-display text-xs font-bold text-white leading-none">{leader.name}</h4>
                  <span className="text-[9px] text-slate-400 font-mono tracking-wider uppercase">{leader.role}</span>
                </div>
              </div>
              <p className="text-xs text-slate-400 leading-normal font-sans">
                {leader.bio}
              </p>
            </div>
          ))}
        </div>
      </div>

    </div>
  );
}
