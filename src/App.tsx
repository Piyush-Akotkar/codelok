import React, { useState, useEffect } from "react";
import { Sparkles, X, Linkedin, Github, Instagram, Facebook, ShieldCheck } from "lucide-react";

// Import modular pages and structural components
import Header from "./components/Header";
import HomeView from "./components/HomeView";
import ServicesView from "./components/ServicesView";
import SolutionsView from "./components/SolutionsView";
import PortfolioView from "./components/PortfolioView";
import TechnologiesView from "./components/TechnologiesView";
import AboutView from "./components/AboutView";
import BlogView from "./components/BlogView";
import ContactView from "./components/ContactView";
import InteractiveConsultation from "./components/InteractiveConsultation";

export default function App() {
  
  // Custom router state
  const [activePage, setActivePage] = useState<string>("home");

  // Premium Theme Switch State
  const [theme, setTheme] = useState<"dark" | "light">(() => {
    if (typeof window !== "undefined") {
      const saved = localStorage.getItem("codelok_theme");
      return (saved === "light" || saved === "dark") ? saved : "dark";
    }
    return "dark";
  });

  // Toggle Theme Switch
  const toggleTheme = () => {
    setTheme((prev) => (prev === "dark" ? "light" : "dark"));
  };

  // Synchronize CSS class and theme mode variables
  useEffect(() => {
    const root = window.document.documentElement;
    if (theme === "light") {
      root.classList.add("light");
      root.classList.remove("dark");
    } else {
      root.classList.add("dark");
      root.classList.remove("light");
    }
    localStorage.setItem("codelok_theme", theme);
  }, [theme]);

  // AI Architect Modal State
  const [isConsultationOpen, setIsConsultationOpen] = useState<boolean>(false);
  const [consultationPreloadService, setConsultationPreloadService] = useState<string>("");
  const [consultationPreloadBudget, setConsultationPreloadBudget] = useState<string>("");

  // Handle preloading specifications when selecting from catalogs
  const triggerConsultationWithService = (serviceTitle: string) => {
    setConsultationPreloadService(serviceTitle);
    setConsultationPreloadBudget("₹10L - ₹25L");
    setIsConsultationOpen(true);
  };

  const triggerConsultationWithPackage = (packageTitle: string, targetBudget: string) => {
    setConsultationPreloadService(packageTitle);
    setConsultationPreloadBudget(targetBudget);
    setIsConsultationOpen(true);
  };

  // Main rendering switchboard
  const renderActivePage = () => {
    switch (activePage) {
      case "home":
        return (
          <HomeView 
            setActivePage={setActivePage} 
            openConsultation={() => {
              setConsultationPreloadService("");
              setConsultationPreloadBudget("");
              setIsConsultationOpen(true);
            }} 
          />
        );
      case "services":
        return (
          <ServicesView 
            initialServiceId={consultationPreloadService}
            triggerConsultationWithService={triggerConsultationWithService} 
          />
        );
      case "solutions":
        return (
          <SolutionsView 
            triggerConsultationWithPackage={triggerConsultationWithPackage} 
          />
        );
      case "portfolio":
        return (
          <PortfolioView 
            setActivePage={setActivePage} 
          />
        );
      case "technologies":
        return (
          <TechnologiesView />
        );
      case "about":
        return (
          <AboutView />
        );
      case "blog":
        return (
          <BlogView />
        );
      case "contact":
        return (
          <ContactView />
        );
      default:
        return (
          <HomeView 
            setActivePage={setActivePage} 
            openConsultation={() => setIsConsultationOpen(true)} 
          />
        );
    }
  };

  return (
    <div className="min-h-screen flex flex-col bg-slate-950 font-sans tracking-wide">
      
      {/* 1. Sticky Navigation Header */}
      <Header 
        activePage={activePage} 
        setActivePage={setActivePage} 
        openConsultation={() => {
          setConsultationPreloadService("");
          setConsultationPreloadBudget("");
          setIsConsultationOpen(true);
        }} 
        theme={theme}
        toggleTheme={toggleTheme}
      />

      {/* 2. Primary Layout Render Stage */}
      <main className="flex-1">
        {renderActivePage()}
      </main>

      {/* 3. High-Fidelity Floating AI Trigger Widget */}
      <div className="fixed bottom-6 right-6 z-40 hidden sm:block">
        <button
          id="floating-ai-consult-btn"
          onClick={() => {
            setConsultationPreloadService("");
            setConsultationPreloadBudget("");
            setIsConsultationOpen(true);
          }}
          className="flex items-center space-x-2 rounded-full bg-gradient-to-r from-blue-600 to-indigo-600 p-4 text-xs font-bold text-white shadow-2xl shadow-blue-500/20 hover:scale-105 active:scale-95 transition-transform"
        >
          <Sparkles className="h-4.5 w-4.5 text-teal-300 animate-spin" style={{ animationDuration: '8000ms' }} />
          <span>Launch AI Solution Architect</span>
        </button>
      </div>

      {/* 4. Full-Sized AI Interactive Consultation Modal dialog */}
      {isConsultationOpen && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto animate-fade-in" id="ai-architect-modal-wrapper">
          <div className="max-w-5xl w-full max-h-[90vh] overflow-y-auto" id="ai-architect-modal-container">
            <InteractiveConsultation
              onClose={() => {
                setIsConsultationOpen(false);
                setConsultationPreloadService("");
                setConsultationPreloadBudget("");
              }}
              onLeadCreated={() => {
                // Keep modal open to show success state, allow user to close when ready
              }}
              initialServiceId={consultationPreloadService}
              initialBudget={consultationPreloadBudget}
            />
          </div>
        </div>
      )}

      {/* 5. Enterprise Legal Footer */}
      <footer className="bg-slate-950 border-t border-slate-900 text-slate-400 py-16" id="master-corporate-footer">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 grid grid-cols-1 md:grid-cols-12 gap-8">
          
          {/* Logo column details */}
          <div className="md:col-span-4 space-y-4">
            <div className="flex items-center space-x-2" id="footer-logo">
              <div className="flex h-8 w-8 items-center justify-center rounded bg-blue-600 font-display text-lg font-black text-white">
                C
              </div>
              <span className="font-display text-xl font-bold tracking-tight text-white">
                Code<span className="text-teal-400">Lok</span>
              </span>
            </div>
            <p className="text-xs text-slate-500 leading-relaxed font-sans">
              CodeLok is an elite cloud-native engineering firm providing robust AWS architecture design, microservice isolation schemas, custom e-commerce checkouts, and grounded cognitive AI pipelines.
            </p>
            <div className="flex items-center space-x-1.5 text-[10px] font-mono text-slate-600">
              <ShieldCheck className="h-4 w-4 text-teal-400 shrink-0" />
              <span>SLA Governed Compliance Frameworks</span>
            </div>
          </div>

          {/* Links collections */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="font-display text-xs font-bold text-white uppercase tracking-wider">Company</h5>
            <ul className="space-y-1.5 text-xs font-sans">
              <li><button onClick={() => setActivePage("about")} className="hover:text-white transition-colors">Our Story</button></li>
              <li><button onClick={() => setActivePage("about")} className="hover:text-white transition-colors">Leadership Team</button></li>
              <li><button onClick={() => setActivePage("portfolio")} className="hover:text-white transition-colors">Verify Cases</button></li>
              <li><button onClick={() => setActivePage("contact")} className="hover:text-white transition-colors">Operational HQs</button></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h5 className="font-display text-xs font-bold text-white uppercase tracking-wider">Services</h5>
            <ul className="space-y-1.5 text-xs font-sans">
              <li><button onClick={() => setActivePage("services")} className="hover:text-white transition-colors">Cloud Infras</button></li>
              <li><button onClick={() => { setActivePage("services"); setConsultationPreloadService("Cloud Migration"); }} className="hover:text-white transition-colors">Migration Plans</button></li>
              <li><button onClick={() => { setActivePage("services"); setConsultationPreloadService("AI Integration"); }} className="hover:text-white transition-colors">AI Processing</button></li>
              <li><button onClick={() => { setActivePage("services"); setConsultationPreloadService("E-Commerce Solutions"); }} className="hover:text-white transition-colors">Headless Stores</button></li>
            </ul>
          </div>

          <div className="md:col-span-2 space-y-3">
            <h5 className="font-display text-xs font-bold text-white uppercase tracking-wider">Solutions</h5>
            <ul className="space-y-1.5 text-xs font-sans">
              <li><button onClick={() => setActivePage("solutions")} className="hover:text-white transition-colors">Startup MVP Core</button></li>
              <li><button onClick={() => setActivePage("solutions")} className="hover:text-white transition-colors">E-Commerce Scale</button></li>
              <li><button onClick={() => setActivePage("solutions")} className="hover:text-white transition-colors">Enterprise Trans</button></li>
              <li><button onClick={() => setActivePage("solutions")} className="hover:text-white transition-colors">Cognitive AI Sprints</button></li>
            </ul>
          </div>

          {/* Social connections */}
          <div className="md:col-span-2 space-y-3">
            <h5 className="font-display text-xs font-bold text-white uppercase tracking-wider">Resources</h5>
            <ul className="space-y-1.5 text-xs font-sans mb-3">
              <li><button onClick={() => setActivePage("blog")} className="hover:text-white transition-colors">Technical Journal</button></li>
              <li><button onClick={() => setActivePage("technologies")} className="hover:text-white transition-colors">Technology Stack</button></li>
            </ul>
            <div className="flex items-center space-x-2.5 pt-1.5">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Linkedin className="h-4.5 w-4.5" /></a>
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Github className="h-4.5 w-4.5" /></a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Instagram className="h-4.5 w-4.5" /></a>
              <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-slate-500 hover:text-white transition-colors"><Facebook className="h-4.5 w-4.5" /></a>
            </div>
          </div>

        </div>

        {/* Bottom footer credit bar */}
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 border-t border-slate-900 mt-12 pt-8 flex flex-col sm:flex-row items-center justify-between text-[11px] text-slate-500 gap-4" id="footer-bottom-bar">
          <div>
            © 2026 CodeLok. All Rights Reserved. Engineered with extreme technical fidelity and automated security validation parameters.
          </div>
          <div className="flex space-x-4">
            <button onClick={() => setActivePage("about")} className="hover:text-slate-100">Privacy Policy</button>
            <span>•</span>
            <button onClick={() => setActivePage("about")} className="hover:text-slate-100">SLA Guidelines</button>
            <span>•</span>
            <button onClick={() => setActivePage("about")} className="hover:text-slate-100">Enterprise Terms</button>
          </div>
        </div>
      </footer>

    </div>
  );
}
