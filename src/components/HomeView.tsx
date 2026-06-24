import React, { useState, useEffect } from "react";
import { 
  ArrowRight, 
  Sparkles, 
  CheckCircle2, 
  Star, 
  Activity, 
  Award, 
  Users, 
  Clock, 
  ChevronRight, 
  ChevronLeft,
  ChevronDown,
  Building,
  ArrowUpRight,
  Monitor,
  Check,
  Zap
} from "lucide-react";
import { CODELOK_STATS, TRUST_PARTNERS, CODELOK_SERVICES, CODELOK_SOLUTIONS, CODELOK_PORTFOLIO, CLIENT_TESTIMONIALS } from "../data";

interface HomeViewProps {
  setActivePage: (page: string) => void;
  openConsultation: () => void;
}

export default function HomeView({ setActivePage, openConsultation }: HomeViewProps) {
  // Slider Index for feedback carousel
  const [activeTestimonial, setActiveTestimonial] = useState(0);

  // Auto-slide testimonies
  useEffect(() => {
    const timer = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % CLIENT_TESTIMONIALS.length);
    }, 8500);
    return () => clearInterval(timer);
  }, []);

  const handleNextTestimonial = () => {
    setActiveTestimonial((prev) => (prev + 1) % CLIENT_TESTIMONIALS.length);
  };

  const handlePrevTestimonial = () => {
    setActiveTestimonial((prev) => (prev - 1 + CLIENT_TESTIMONIALS.length) % CLIENT_TESTIMONIALS.length);
  };

  // Industries We Serve List
  const INDUSTRIES = [
    { name: "Healthcare", desc: "HIPAA-secure medical portals, EHR integrations, and custom diagnostic automation engines.", icon: "Activity" },
    { name: "Finance", desc: "PCI-DSS transaction backends, algorithmic metrics boards, and secure digital banking APIs.", icon: "Award" },
    { name: "Logistics", desc: "Live dispatch schedules, real-time vehicle map tracking, and warehouse shelf synchronization.", icon: "Users" },
    { name: "Education", desc: "Interactive student evaluation grids, course playback vaults, and automated grading pipelines.", icon: "Clock" },
    { name: "Real Estate", desc: "Custom rental management pipelines, secure online document signing, and 3D property catalogs.", icon: "Building" },
    { name: "E-Commerce", desc: "Lightning fast headless storefronts, complex discount calculators, and automated shipping syncs.", icon: "Zap" },
    { name: "SaaS Platforms", desc: "Multi-tenant authentication shields, custom subscription checkouts, and clean dashboard layout templates.", icon: "Monitor" },
    { name: "Manufacturing", desc: "IoT sensor telemetry ingestion queues, predictive upkeep trackers, and logistics tracking charts.", icon: "Check" }
  ];

  // System Process Steps Timeline
  const PROCESS_STEPS = [
    { step: "01", name: "Discovery & Consultation", details: "We review your operational workflows, peak traffic constraints, and draft an initial technology estimate." },
    { step: "02", name: "Architecture Planning", details: "Our AWS-certified architects draft multi-AZ VPC maps, choosing serverless or container structures." },
    { step: "03", name: "UI/UX High-Fidelity Design", details: "Crafting fully-branded aesthetic components, mapping tactile actions, and verifying compliance grids." },
    { step: "04", name: "Core Sprint Development", details: "Writing type-safe backend models and responsive React modular UI components backed by continuous automation scans." },
    { step: "05", name: "Security & Penetration Audit", details: "Rigorous stress tests, credential scrubbing, static code vulnerability checks, and staging rollouts." },
    { step: "06", name: "Orchestrated Production Rollout", details: "Zero-downtime database mirrors switchover, DNS traffic shifting, and live customer analytics monitoring." },
    { step: "07", name: "Continuous Managed SLAs", details: "24/7 server health monitoring, automatic monthly resource resizing, and ongoing feature iterations." }
  ];

  // Why Choose Us Info Cards
  const WHY_US_CARDS = [
    { title: "Cloud Native Architecture", desc: "Engineered around serverless containers, automated microservices, and rapid horizontal compute scaling." },
    { title: "AWS Competency Partner", desc: "Certified AWS engineers with comprehensive mastery over VPCs, IAM roles, KMS encryption, and Dynamo DB schemas." },
    { title: "AI-Driven Business Acceleration", desc: "Grounded LLM models, custom RAG embedding engines, and administrative agents trimming operational friction." },
    { title: "Strict Security Foundations", desc: "We deploy defense-in-depth principles, strict database isolation boundaries, and automated security scans." },
    { title: "Ongoing Resource Tuning", desc: "Continuous cost audits shrinking unused server sizes dynamically, optimizing capital allocation." },
    { title: "End-to-End Delivery Handoffs", desc: "Complete Intellectual Property logs, extensive Swagger API manuals, and hands-on developer training workshops." }
  ];

  return (
    <div className="w-full text-slate-100 bg-slate-950 font-sans" id="home_view_wrapper">
      
      {/* 1. Hero Container with Geometric Particles */}
      <section className="relative overflow-hidden pt-20 pb-24 md:pt-32 md:pb-36 tech-grid-dark border-b border-slate-900" id="hero-section">
        <div className="absolute top-1/4 left-1/2 h-96 w-96 -translate-x-1/2 -translate-y-1/2 rounded-full bg-blue-600/10 blur-[130px]" />
        <div className="absolute top-1/2 left-1/3 h-80 w-80 rounded-full bg-teal-500/5 blur-[120px]" />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6 max-w-4xl mx-auto">
            
            {/* Tagline Badge */}
            <div className="inline-flex items-center space-x-2 rounded-full border border-blue-500/30 bg-blue-500/10 px-3.5 py-1 text-xs text-blue-400 font-mono tracking-wide" id="hero-mini-tag">
              <Sparkles className="h-3.5 w-3.5 text-teal-400 animate-spin" style={{ animationDuration: '6000ms' }} />
              <span>Engineering Scalable Digital Solutions</span>
            </div>

            {/* Giant Title */}
            <h1 className="font-display text-4xl sm:text-6xl lg:text-7xl font-extrabold tracking-tight text-white leading-none" id="hero-headline">
              Build <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-400 via-indigo-200 to-teal-400">Faster</span>. <br />
              Scale <span className="text-transparent bg-clip-text bg-gradient-to-r from-teal-400 via-blue-200 to-indigo-400">Smarter</span>.
            </h1>

            {/* Subheading */}
            <p className="mx-auto max-w-2xl text-sm sm:text-base text-slate-300 leading-relaxed font-sans" id="hero-subheadline">
              CodeLok equips ambitious enterprises with high-fidelity AWS cloud architectures, bespoke AI integrations, optimized DevOps pipelines, and robust custom application suites that accelerate growth and guarantee high availability.
            </p>

            {/* CTA row Buttons */}
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4" id="hero-actions">
              <button
                id="hero-book-consultation"
                onClick={openConsultation}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-xl bg-gradient-to-r from-blue-600 to-indigo-600 px-8 py-4 text-xs font-bold text-white shadow-xl shadow-blue-500/20 hover:from-blue-500 hover:to-indigo-500 focus:outline-none transition-all duration-200"
              >
                <Sparkles className="h-4 w-4 text-teal-300" />
                <span>Book Free Consult</span>
              </button>
              <button
                id="hero-explore-services"
                onClick={() => setActivePage("services")}
                className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-xl border border-slate-800 bg-slate-900/50 hover:bg-slate-900 hover:text-white px-8 py-4 text-xs font-bold text-slate-300 transition-colors"
              >
                <span>Explore Services</span>
                <ArrowRight className="h-4 w-4" />
              </button>
            </div>

          </div>

          {/* Interactive Cloud Architecture Diagram Illustration */}
          <div className="mt-14 mx-auto max-w-5xl rounded-2xl border border-slate-800 bg-slate-900/40 p-3 sm:p-5 backdrop-blur-md shadow-2xl" id="hero-diagram-illustration">
            <div className="rounded-xl bg-slate-950 p-4 sm:p-6 border border-slate-850 space-y-4">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between border-b border-slate-900 pb-3 gap-3">
                <div className="flex items-center space-x-2">
                  <div className="h-3 w-3 rounded-full bg-red-500" />
                  <div className="h-3 w-3 rounded-full bg-yellow-500" />
                  <div className="h-3 w-3 rounded-full bg-green-500" />
                  <span className="pl-2 font-mono text-[10px] text-slate-400 uppercase tracking-widest">Architect Security Matrix</span>
                </div>
                <div className="flex items-center space-x-3 text-[10px] font-mono text-slate-400">
                  <span className="flex h-2 w-2 rounded-full bg-blue-500" />
                  <span>ALB Route</span>
                  <span className="flex h-2 w-2 rounded-full bg-teal-400" />
                  <span>Private ECS</span>
                </div>
              </div>

              {/* Architectural layout wire diagram */}
              <div className="grid grid-cols-1 sm:grid-cols-4 gap-4 py-3 text-center text-[11px] font-mono" id="wireframe-flow-illustration">
                
                <div className="rounded-lg p-3 bg-slate-900 border border-slate-800 flex flex-col justify-between min-h-[90px]">
                  <span className="text-slate-500 text-[9px] uppercase tracking-wider">01 / Entry Router</span>
                  <p className="font-bold text-white pt-1">Amazon Route 53 DNS</p>
                  <span className="text-[9px] text-emerald-400 mt-2 bg-emerald-500/5 py-0.5 rounded border border-emerald-500/10">Active Health Check</span>
                </div>

                <div className="rounded-lg p-3 bg-slate-900 border border-slate-800 flex flex-col justify-between min-h-[90px] relative">
                  <div className="absolute -left-2 top-10 text-slate-600 hidden sm:block">➔</div>
                  <span className="text-slate-500 text-[9px] uppercase tracking-wider">02 / Edge Protector</span>
                  <p className="font-bold text-white pt-1">Application Load Balancer</p>
                  <span className="text-[9px] text-blue-400 mt-2 bg-blue-500/5 py-0.5 rounded border border-blue-500/10">AWS WAF Layer Enabled</span>
                </div>

                <div className="rounded-lg p-3 bg-slate-900 border border-slate-800 flex flex-col justify-between min-h-[90px] relative">
                  <div className="absolute -left-2 top-10 text-slate-600 hidden sm:block">➔</div>
                  <span className="text-slate-500 text-[9px] uppercase tracking-wider">03 / Core Compute</span>
                  <p className="font-bold text-teal-400 pt-1">Container Clusters (ECS Fargate)</p>
                  <span className="text-[9px] text-indigo-400 mt-2 bg-indigo-500/5 py-0.5 rounded border border-indigo-500/10">Auto-Scaling Trigger</span>
                </div>

                <div className="rounded-lg p-3 bg-slate-900 border border-slate-800 flex flex-col justify-between min-h-[90px] relative">
                  <div className="absolute -left-2 top-10 text-slate-600 hidden sm:block">➔</div>
                  <span className="text-slate-500 text-[9px] uppercase tracking-wider">04 / Storage Lock</span>
                  <p className="font-bold text-white pt-1">Aurora Multi-AZ DB</p>
                  <span className="text-[9px] text-teal-400 mt-2 bg-teal-500/5 py-0.5 rounded border border-teal-500/10">Read Replica Synchronized</span>
                </div>

              </div>
            </div>
          </div>

        </div>
      </section>

      {/* 2. Sleek Enterprise Trust Bar Card */}
      <section className="bg-slate-950 border-y border-slate-900 py-8" id="trust-bar-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-[10px] sm:text-xs font-mono uppercase tracking-widest text-slate-400 mb-6 font-semibold">
            Deploying Enterprise Competence with Leading Stack Integrations
          </p>
          <div className="flex flex-wrap items-center justify-center gap-x-10 gap-y-6 md:gap-x-14">
            {TRUST_PARTNERS.map((partner) => (
              <span 
                key={partner.name}
                id={`trust-partner-${partner.name}`}
                className="font-display text-sm sm:text-lg font-extrabold tracking-tight text-slate-500 hover:text-slate-300 transition-colors"
              >
                // {partner.name}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* 3. Metrics counters section */}
      <section className="py-20 bg-slate-950 relative" id="stats-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 sm:grid-cols-2 lg:grid-cols-4">
            {CODELOK_STATS.map((stat) => (
              <div 
                key={stat.label} 
                id={`stat-box-${stat.label}`}
                className="rounded-xl border border-slate-900 bg-slate-900/20 p-6 flex flex-col justify-between relative overflow-hidden group hover:border-slate-800 transition-all"
              >
                <div className="absolute top-0 left-0 h-1 w-full bg-gradient-to-r from-blue-600 to-teal-400 opacity-0 group-hover:opacity-100 transition-opacity" />
                <span className="font-display text-4xl sm:text-5xl font-extrabold tracking-tight text-white mb-2 block">
                  {stat.value}
                </span>
                <div>
                  <h4 className="text-xs font-mono font-bold text-teal-400 uppercase tracking-widest">{stat.label}</h4>
                  <p className="text-[11px] text-slate-400 leading-normal mt-1">{stat.detail}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 4. Core Services Switchboard Section (Grabs from services data and previews) */}
      <section className="py-20 bg-slate-950 border-t border-slate-900" id="services-preview-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-400">Consulting Competencies</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Engineered for High Throughput
              </h2>
            </div>
            <button
              id="view-all-services-btn"
              onClick={() => setActivePage("services")}
              className="mt-4 md:mt-0 inline-flex items-center space-x-1 text-xs font-bold text-teal-400 hover:text-teal-300 group"
            >
              <span>Explore full services manual</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6" id="services-cards-grid">
            {CODELOK_SERVICES.slice(0, 6).map((service) => (
              <div 
                key={service.id}
                id={`srv-prev-${service.id}`}
                className="rounded-xl border border-slate-900 bg-slate-900/30 p-5 flex flex-col justify-between hover:border-slate-800 transition-all group relative"
              >
                <div className="space-y-4">
                  <div className="flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600/10 text-blue-400 font-bold font-mono text-sm uppercase">
                    {service.title.substring(0,2)}
                  </div>
                  <h3 className="font-display text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {service.title}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans line-clamp-3">
                    {service.shortDescription}
                  </p>
                </div>

                <div className="flex justify-between items-center pt-5 mt-4 border-t border-slate-900">
                  <span className="text-[10px] font-mono text-slate-500 uppercase">Certified delivery</span>
                  <button
                    onClick={() => setActivePage("services")}
                    className="inline-flex items-center text-xs font-semibold text-teal-400 hover:text-teal-300"
                  >
                    <span>Analyze</span>
                    <ChevronRight className="h-3.5 w-3.5 font-bold" />
                  </button>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 5. Why Choose Us Premium Grid */}
      <section className="py-20 bg-slate-950 border-t border-slate-900 tech-grid" id="why-choose-us-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-400">Trusted Frameworks Only</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Why Elite Teams Select CodeLok
            </h2>
            <p className="text-xs sm:text-sm text-slate-400">
              We operate as your dedicated engineering SWAT team. No legacy bulk, full transparency, and clean, modular cloud deployments.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6" id="why-us-grid">
            {WHY_US_CARDS.map((card, idx) => (
              <div 
                key={idx}
                id={`why-card-${idx}`}
                className="rounded-xl border border-slate-900 bg-slate-950/80 p-5 space-y-2 hover:border-blue-500/30 hover:bg-slate-900/10 transition-all"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-md bg-teal-500/10 text-teal-400 font-mono text-[11px] font-bold">
                  {idx + 1}
                </div>
                <h3 className="font-display text-sm font-bold text-white uppercase tracking-wide pt-1">
                  {card.title}
                </h3>
                <p className="text-xs text-slate-400 leading-relaxed font-sans">
                  {card.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 6. Industries We Serve */}
      <section className="py-20 bg-slate-950 border-t border-slate-900" id="industries-serve-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="max-w-3xl space-y-2 mb-12">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-400">Enterprise Contexts</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              Sectors We Transform
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4" id="industries-cards-container">
            {INDUSTRIES.map((ind, idx) => (
              <div 
                key={ind.name}
                id={`industry-card-${idx}`}
                className="rounded-xl border border-slate-900 bg-slate-900/20 p-5 space-y-3 hover:bg-slate-900/40 hover:border-slate-800 transition-all cursor-default"
              >
                <div className="text-xs font-bold font-mono text-blue-500">// {idx+1}</div>
                <h3 className="font-display text-[15px] font-bold text-white tracking-wide">
                  {ind.name}
                </h3>
                <p className="text-[11px] text-slate-400 leading-normal font-sans">
                  {ind.desc}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 7. Timeline Development Process */}
      <section className="py-20 bg-slate-950 border-t border-slate-900" id="dev-process-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-3xl mx-auto space-y-3 mb-14">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-400">Strict Methodology</span>
            <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
              7-Step Delivery Sprint Lifecycle
            </h2>
            <p className="text-xs text-slate-400">
              We align tasks incrementally, safeguarding critical records and validating security parameters at every branch checklist update.
            </p>
          </div>

          <div className="relative border-l-2 border-slate-900 ml-4 md:ml-32 space-y-10" id="dev-timeline-line">
            {PROCESS_STEPS.map((step, idx) => (
              <div key={idx} className="relative pl-8 md:pl-12 group" id={`process-idx-${idx}`}>
                {/* Node point marker */}
                <div className="absolute -left-[9px] top-1.5 h-4 w-4 rounded-full border-2 border-slate-900 bg-slate-950 group-hover:border-teal-400 transition-colors" />
                
                <div className="md:absolute md:-left-32 md:-translate-x-full md:w-24 text-right hidden md:block">
                  <span className="font-display text-4xl font-extrabold text-slate-800 group-hover:text-teal-400 transition-colors leading-none block">
                    {step.step}
                  </span>
                  <span className="font-mono text-[9px] text-slate-500 uppercase tracking-wider block">Phase sprint</span>
                </div>

                <div className="max-w-3xl rounded-lg bg-slate-900/10 border border-slate-900 p-4 group-hover:border-slate-800 transition-all">
                  <h3 className="font-display text-base font-bold text-white group-hover:text-blue-400 transition-colors">
                    <span className="md:hidden text-teal-400 pr-1">{step.step}.</span> {step.name}
                  </h3>
                  <p className="text-xs text-slate-400 leading-relaxed font-sans mt-1">
                    {step.details}
                  </p>
                </div>
              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 8. Top Case Studies Feature (Featured Projects) */}
      <section className="py-20 bg-slate-950 border-t border-slate-900" id="featured-case-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="flex flex-col md:flex-row md:items-end justify-between mb-12">
            <div className="space-y-2">
              <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-400">Proven Results</span>
              <h2 className="font-display text-3xl sm:text-4xl font-extrabold tracking-tight text-white">
                Customer Success Milestones
              </h2>
            </div>
            <button
              id="view-all-portfolio-btn"
              onClick={() => setActivePage("portfolio")}
              className="mt-4 md:mt-0 inline-flex items-center space-x-1 text-xs font-bold text-teal-400 hover:text-teal-300 group"
            >
              <span>Explore all case studies</span>
              <ChevronRight className="h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </button>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8" id="featured-projects-grid">
            {CODELOK_PORTFOLIO.slice(0, 4).map((proj) => (
              <div 
                key={proj.id}
                id={`featured-proj-${proj.id}`}
                className="rounded-xl border border-slate-900 bg-slate-900/20 p-6 flex flex-col justify-between relative hover:border-slate-800 transition-all group"
              >
                <div className="space-y-4">
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-teal-400 uppercase tracking-widest font-semibold bg-teal-500/5 px-2.5 py-0.5 rounded border border-teal-500/20">
                      // {proj.category}
                    </span>
                    <span className="text-xs font-mono font-bold text-white bg-slate-900 px-2.5 py-1 rounded-md border border-slate-850 animate-pulse text-emerald-400">
                      {proj.resultsMetric}
                    </span>
                  </div>

                  <h3 className="font-display text-lg font-bold text-white group-hover:text-blue-400 transition-colors">
                    {proj.title}
                  </h3>

                  <div className="space-y-2 pt-2">
                    <p className="text-xs text-slate-400 leading-normal font-sans line-clamp-3">
                      <strong className="text-slate-300">Problem:</strong> {proj.problem}
                    </p>
                    <p className="text-xs text-slate-400 leading-normal font-sans line-clamp-3">
                      <strong className="text-slate-300">Solution:</strong> {proj.solution}
                    </p>
                  </div>
                </div>

                <div className="flex flex-wrap gap-2 pt-5 mt-4 border-t border-slate-900">
                  {proj.technologies.slice(0, 3).map((tech) => (
                    <span key={tech} className="font-mono text-[9px] text-slate-500 bg-slate-950 px-2 py-0.5 rounded border border-slate-900">
                      {tech}
                    </span>
                  ))}
                  <button
                    onClick={() => setActivePage("portfolio")}
                    className="ml-auto inline-flex items-center space-x-1 text-xs font-semibold text-blue-400 hover:text-blue-300"
                  >
                    <span>Full Case Spec</span>
                    <ArrowUpRight className="h-3.5 w-3.5" />
                  </button>
                </div>

              </div>
            ))}
          </div>

        </div>
      </section>

      {/* 9. Testimonials Carousel Section */}
      <section className="py-20 bg-slate-950 border-t border-slate-900" id="testimonials-section">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          
          <div className="text-center max-w-2xl mx-auto space-y-2 mb-10">
            <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-400">Client Commendations</span>
            <h2 className="font-display text-3xl font-extrabold tracking-tight text-white">
              Endorsed by Technical Leadership
            </h2>
          </div>

          <div className="max-w-4xl mx-auto rounded-2xl border border-slate-900 bg-slate-900/15 p-6 sm:p-10 relative overflow-hidden" id="testimonial-carousel-box">
            
            <div className="relative z-10 space-y-6 text-center">
              
              <div className="flex items-center justify-center space-x-1.5" id="testimonial-stars animate-pulse">
                {[...Array(CLIENT_TESTIMONIALS[activeTestimonial].rating)].map((_, idx) => (
                  <Star key={idx} className="h-4.5 w-4.5 fill-teal-400 text-teal-400" />
                ))}
              </div>

              <blockquote className="text-sm sm:text-base text-slate-300 font-sans italic leading-relaxed">
                &quot;{CLIENT_TESTIMONIALS[activeTestimonial].reviewText}&quot;
              </blockquote>

              <div>
                <h5 className="font-display text-sm font-bold text-white">
                  {CLIENT_TESTIMONIALS[activeTestimonial].authorName}
                </h5>
                <p className="font-mono text-[10px] text-slate-400 uppercase tracking-widest mt-0.5">
                  {CLIENT_TESTIMONIALS[activeTestimonial].role} at <span className="text-teal-400 font-sans font-semibold">{CLIENT_TESTIMONIALS[activeTestimonial].companyName}</span>
                </p>
              </div>

            </div>

            {/* Slider Switch buttons */}
            <div className="absolute top-1/2 -translate-y-1/2 left-2 z-20 sm:left-4">
              <button 
                id="testimonial-prev-arrow"
                onClick={handlePrevTestimonial}
                className="h-9 w-9 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
              >
                <ChevronLeft className="h-5 w-5" />
              </button>
            </div>
            <div className="absolute top-1/2 -translate-y-1/2 right-2 z-20 sm:right-4">
              <button 
                id="testimonial-next-arrow"
                onClick={handleNextTestimonial}
                className="h-9 w-9 rounded-full bg-slate-900 border border-slate-800 text-slate-400 hover:text-white flex items-center justify-center hover:bg-slate-800 transition-colors"
              >
                <ChevronRight className="h-5 w-5" />
              </button>
            </div>

          </div>

        </div>
      </section>

      {/* 10. High Contrast Corporate CTA Section */}
      <section className="relative overflow-hidden py-24 bg-gradient-to-b from-slate-950 to-slate-950 border-t border-slate-900" id="final-cta-block">
        <div className="absolute bottom-0 right-0 h-96 w-96 rounded-full bg-blue-500/10 blur-[130px] opacity-40" />
        <div className="absolute top-0 left-0 h-96 w-96 rounded-full bg-teal-500/5 blur-[120px] opacity-30" />

        <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8 text-center space-y-6">
          <span className="font-mono text-xs font-semibold text-teal-400 tracking-widest uppercase">Start Building Today</span>
          <h2 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-none">
            Ready to Transform Your Business?
          </h2>
          <p className="mx-auto max-w-2xl text-xs sm:text-sm text-slate-300 leading-relaxed font-sans">
            Let's build your next cloud infrastructure, custom e-commerce portal, responsive administrative dashboard, or custom AI-grounded chatbot. Click below to start our live architectural design workshop.
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-3" id="final-cta-btn-row">
            <button
              id="final-cta-consult"
              onClick={openConsultation}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-xl bg-teal-400 px-8 py-3.5 text-xs font-bold text-slate-950 hover:bg-teal-300 focus:outline-none transition-all duration-200"
            >
              <Sparkles className="h-4 w-4" />
              <span>Book Consultation</span>
            </button>
            <button
              id="final-cta-proposal"
              onClick={() => setActivePage("contact")}
              className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-xl border border-slate-800 bg-slate-950 hover:bg-slate-900 hover:text-white px-8 py-3.5 text-xs font-bold text-slate-300 transition-colors"
            >
              <span>Request Custom Proposal</span>
              <ArrowRight className="h-4 w-4" />
            </button>
          </div>
        </div>
      </section>

    </div>
  );
}
