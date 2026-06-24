import React, { useState, useEffect } from "react";
import { 
  Building, 
  Mail, 
  Phone, 
  MapPin, 
  Sparkles, 
  Loader2, 
  CheckCircle, 
  Layers, 
  User, 
  Clock, 
  FileCheck,
  AlertCircle,
  FileText
} from "lucide-react";
import { LeadSubmission } from "../types";

export default function ContactView() {
  
  // Form coordinates
  const [fullName, setFullName] = useState("");
  const [companyName, setCompanyName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [serviceRequired, setServiceRequired] = useState("Cloud Infrastructure & DevOps");
  const [budget, setBudget] = useState("₹10L - ₹25L");
  const [projectDetails, setProjectDetails] = useState("");

  // Submissions state
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [successMsg, setSuccessMsg] = useState(false);
  const [serverLeads, setServerLeads] = useState<LeadSubmission[]>([]);

  // Fetch leads to show active tickets portal
  const fetchActiveTickets = async () => {
    try {
      const res = await fetch("/api/leads");
      if (res.ok) {
        const data = await res.json();
        setServerLeads(data.leads || []);
      }
    } catch (err) {
      console.error("Failed to query central ticket registry:", err);
    }
  };

  useEffect(() => {
    fetchActiveTickets();
  }, []);

  const handleCreateLead = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!fullName || !email) return;
    setIsSubmitting(true);

    try {
      const response = await fetch("/api/leads", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          fullName,
          companyName: companyName || "N/A",
          email,
          phone: phone || "N/A",
          serviceRequired,
          budget,
          projectDetails
        })
      });

      if (response.ok) {
        setSuccessMsg(true);
        // Clear inputs
        setFullName("");
        setCompanyName("");
        setEmail("");
        setPhone("");
        setProjectDetails("");
        // Refresh active listings
        fetchActiveTickets();
      } else {
        alert("Server failed to log ticket. Please contact CodeLok partners directly.");
      }
    } catch (err) {
      console.error(err);
      alert("Network exception caching proposal brief. Please review link connection.");
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-white font-sans" id="contact_page_section">
      
      {/* Page header */}
      <div className="mb-12 text-center md:text-left space-y-2">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-400">Lock Down Project Parameters</span>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-none">
          Connect with CodeLok Engineering
        </h1>
        <p className="max-w-2xl text-xs sm:text-sm text-slate-400">
          We draft comprehensive technical scopes of work and physical infrastructure roadmaps. Submit your requirements list below.
        </p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start" id="contact-interface-grid">
        
        {/* Left column Lead intake form */}
        <div className="lg:col-span-7 bg-slate-900/20 border border-slate-900 rounded-2xl p-6 sm:p-8 space-y-6" id="intake-form-box">
          <div className="flex items-center space-x-2 border-b border-slate-900 pb-4">
            <Layers className="h-5 w-5 text-teal-400 animate-pulse" />
            <h3 className="font-display font-bold text-base">Intake Proposal Form</h3>
          </div>

          {successMsg ? (
            <div className="rounded-xl bg-teal-500/10 border border-teal-500/30 p-5 text-center space-y-4 animate-fade-in" id="intake-success-banner">
              <CheckCircle className="h-11 w-11 text-teal-400 mx-auto" />
              <div>
                <h4 className="font-display font-extrabold text-white text-base">Requirement Specification Cached!</h4>
                <p className="text-xs text-slate-300 mt-1 leading-relaxed">
                  Your enterprise specification has been filed with our lead architect desk. We have created a dynamic ticket listed right inside our central active tracker.
                </p>
              </div>
              <button
                id="reset-contact-form-btn"
                onClick={() => setSuccessMsg(false)}
                className="rounded-lg bg-teal-500 px-6 py-2 text-xs font-bold text-slate-950 hover:bg-teal-400 transition-colors"
              >
                File Another Specification
              </button>
            </div>
          ) : (
            <form onSubmit={handleCreateLead} className="space-y-4" id="contact-lead-form">
              
              {/* Form entries row */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Full Name</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center text-slate-600">
                      <User className="h-4 w-4" />
                    </div>
                    <input
                      id="contact-fullName-input"
                      type="text"
                      required
                      placeholder="Aniket Patil"
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                      className="w-full rounded-lg bg-slate-950 border border-slate-850 py-2 pl-9 pr-3 text-xs focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Company Entity</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center text-slate-600">
                      <Building className="h-4 w-4" />
                    </div>
                    <input
                      id="contact-company-input"
                      type="text"
                      placeholder="TechCorp Solutions"
                      value={companyName}
                      onChange={(e) => setCompanyName(e.target.value)}
                      className="w-full rounded-lg bg-slate-950 border border-slate-850 py-2 pl-9 pr-3 text-xs focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

              </div>

              {/* Email and Phone */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Email Coordinates</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center text-slate-600">
                      <Mail className="h-4 w-4" />
                    </div>
                    <input
                      id="contact-email-input"
                      type="email"
                      required
                      placeholder="apatil@techcorp.in"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full rounded-lg bg-slate-950 border border-slate-850 py-2 pl-9 pr-3 text-xs focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Direct Phone</label>
                  <div className="relative">
                    <div className="absolute inset-y-0 left-3 flex items-center text-slate-600">
                      <Phone className="h-4 w-4" />
                    </div>
                    <input
                      id="contact-phone-input"
                      type="tel"
                      placeholder="+91 91234 56789"
                      value={phone}
                      onChange={(e) => setPhone(e.target.value)}
                      className="w-full rounded-lg bg-slate-950 border border-slate-850 py-2 pl-9 pr-3 text-xs focus:outline-none focus:border-teal-400"
                    />
                  </div>
                </div>

              </div>

              {/* Service selection and budget selection */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                
                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Service Required</label>
                  <select
                    id="contact-service-select"
                    value={serviceRequired}
                    onChange={(e) => setServiceRequired(e.target.value)}
                    className="w-full rounded-lg bg-slate-950 border border-slate-850 py-2.5 px-3 text-xs focus:outline-none focus:border-teal-400"
                  >
                    <option value="Cloud Infrastructure & DevOps">Cloud Infrastructure &amp; DevOps</option>
                    <option value="Cloud Migration">Cloud Migration</option>
                    <option value="Custom Software Development">Custom Software Development</option>
                    <option value="Website Development">Website Development</option>
                    <option value="Mobile App Engineering">Mobile App Engineering</option>
                    <option value="E-Commerce Solutions">E-Commerce Solutions</option>
                    <option value="AI Integration &amp; Models">AI Integration &amp; Models</option>
                    <option value="Maintenance &amp; Support">Maintenance &amp; Support</option>
                  </select>
                </div>

                <div>
                  <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Target Capital Envelope</label>
                  <select
                    id="contact-budget-select"
                    value={budget}
                    onChange={(e) => setBudget(e.target.value)}
                    className="w-full rounded-lg bg-slate-950 border border-slate-850 py-2.5 px-3 text-xs focus:outline-none focus:border-teal-400"
                  >
                    <option value="₹5L - ₹10L">₹5L - ₹10L</option>
                    <option value="₹10L - ₹25L">₹10L - ₹25L</option>
                    <option value="₹25L - ₹50L">₹25L - ₹50L</option>
                    <option value="₹50L+">₹50L+</option>
                  </select>
                </div>

              </div>

              {/* Project description briefing */}
              <div>
                <label className="block text-[10px] font-semibold text-slate-400 uppercase tracking-wider mb-1">Functional Outline / Scope Briefing</label>
                <textarea
                  id="contact-projectDetails-textarea"
                  rows={5}
                  required
                  placeholder="Outline your database size, user stories, security regulations or required delivery date. Example: Need to establish automated active clusters on AWS backing our CRM web portal."
                  value={projectDetails}
                  onChange={(e) => setProjectDetails(e.target.value)}
                  className="w-full rounded-lg bg-slate-950 border border-slate-850 p-3.5 text-xs focus:outline-none focus:border-teal-400 leading-normal"
                />
              </div>

              {/* Form buttons */}
              <div className="flex flex-col sm:flex-row items-center justify-end gap-3 pt-2">
                <button
                  id="submit-rfp-btn"
                  type="submit"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto flex items-center justify-center space-x-2 rounded-xl bg-teal-400 hover:bg-teal-300 text-slate-950 py-3 px-6 text-xs font-extrabold focus:outline-none disabled:opacity-50 transition-colors"
                >
                  {isSubmitting ? (
                    <>
                      <Loader2 className="h-4 w-4 animate-spin" />
                      <span>Filing Specs...</span>
                    </>
                  ) : (
                    <>
                      <FileCheck className="h-4.5 w-4.5" />
                      <span>Submit RFP &amp; Register Ticket</span>
                    </>
                  )}
                </button>
              </div>

            </form>
          )}

        </div>

        {/* Right column: Corporate Coordinates and Active Leads Monitor */}
        <div className="lg:col-span-5 space-y-6">
          
          {/* Corporate coordinate parameters */}
          <div className="rounded-2xl border border-slate-900 bg-slate-950 p-6 space-y-4">
            <h4 className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-bold">
              // Core HQ Coordination
            </h4>
            
            <div className="space-y-3.5 text-xs" id="hq-coordinates-list">
              <div className="flex items-start space-x-3 text-slate-300">
                <MapPin className="h-4 w-4 text-teal-400 shrink-0 mt-0.5" />
                <span>Level 7, Technopolis Tower, Sector V, Salt Lake, Kolkata, WB India</span>
              </div>
              <div className="flex items-start space-x-3 text-slate-300">
                <Mail className="h-4 w-4 text-blue-400 shrink-0 mt-0.5" />
                <span>partner@codelok.io</span>
              </div>
              <div className="flex items-start space-x-3 text-slate-300">
                <Phone className="h-4 w-4 text-indigo-400 shrink-0 mt-0.5" />
                <span>+91 33 4099 2100 (Operational Partner desk)</span>
              </div>
            </div>

            <div className="rounded-xl bg-slate-900 p-4 border border-slate-850 mt-4 text-[10px] text-slate-500 leading-relaxed font-sans">
              Our Kolkata engineering core manages deployments across three AWS regions: ap-south-1 (Mumbai), us-east-1 (N. Virginia), and eu-central-1 (Frankfurt) preserving redundancy matrices globally.
            </div>
          </div>

          {/* Real-time Ticket Status Monitor dashboard */}
          <div className="rounded-2xl border border-slate-900 bg-slate-900/10 p-5 space-y-4" id="tickets-registry-monitor">
            <div className="flex items-center justify-between border-b border-slate-900 pb-3">
              <div className="flex items-center space-x-2">
                <FileText className="h-4 w-4 text-blue-400" />
                <h4 className="font-display text-xs font-bold uppercase tracking-wider">Live Active Requests</h4>
              </div>
              <span className="font-mono text-[10px] text-slate-400 bg-slate-950 rounded px-2 py-0.5 border border-slate-900">
                {serverLeads.length} Registered
              </span>
            </div>

            <div className="space-y-3 max-h-[300px] overflow-y-auto pr-1" id="active-tickets-scroller">
              {serverLeads.length === 0 ? (
                <div className="text-center py-6 text-slate-500 text-[11px]">
                  No active requests submitted in this browser container.
                </div>
              ) : (
                serverLeads.map((sub) => (
                  <div key={sub.id} className="rounded-lg bg-slate-950 p-3 border border-slate-850 text-xs space-y-2 hover:border-slate-800 transition-colors">
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-teal-400 font-bold">{sub.companyName}</span>
                      <span className="font-mono text-[9px] text-slate-500">{new Date(sub.createdAt).toLocaleDateString()}</span>
                    </div>
                    <div className="text-slate-300 font-sans font-semibold leading-tight">
                      {sub.fullName} — <span className="text-[11px] text-slate-400 font-normal italic">{sub.serviceRequired}</span>
                    </div>
                    <div className="flex items-center justify-between pt-1 border-t border-slate-900">
                      <span className="font-mono text-[9px] text-slate-500">Estimate: <strong className="text-slate-400">{sub.budget}</strong></span>
                      <span className="font-mono text-[9px] font-bold text-white uppercase bg-blue-500/10 px-2 py-0.5 rounded border border-blue-500/20 text-blue-400">
                        {sub.status || "Pending Audit"}
                      </span>
                    </div>
                  </div>
                ))
              )}
            </div>

          </div>

        </div>

      </div>

    </div>
  );
}
