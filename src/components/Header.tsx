import React, { useState } from "react";
import { Menu, X, Sparkles, Sun, Moon, ChevronDown } from "lucide-react";

interface HeaderProps {
  activePage: string;
  setActivePage: (page: string) => void;
  openConsultation: () => void;
  theme: "dark" | "light";
  toggleTheme: () => void;
}

export default function Header({ 
  activePage, 
  setActivePage, 
  openConsultation, 
  theme, 
  toggleTheme 
}: HeaderProps) {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  // Flat mapping for easy mobile list and layout mapping
  const navigations = [
    { label: "Home", id: "home" },
    { label: "Services", id: "services" },
    { label: "Solutions", id: "solutions" },
    { label: "Portfolio", id: "portfolio" },
    { label: "Technologies", id: "technologies" },
    { label: "About Us", id: "about" },
    { label: "Blog", id: "blog" },
    { label: "Contact", id: "contact" }
  ];

  const linkClass = (isActive: boolean) => `
    relative flex items-center space-x-1 px-3 py-1.5 text-xs font-bold tracking-wider uppercase transition-colors duration-200 cursor-pointer rounded-md
    ${isActive ? "text-teal-400 bg-slate-900/40" : "text-slate-300 hover:text-white hover:bg-slate-900/20"}
  `;

  return (
    <header className="sticky top-0 z-50 w-full border-b border-slate-800 bg-slate-950/80 backdrop-blur-md">
      <div className="mx-auto flex max-w-7xl h-16 items-center justify-between px-4 sm:px-6 lg:px-8">
        
        {/* Sleek Enterprise Logo Structure */}
        <div 
          onClick={() => { setActivePage("home"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
          className="flex cursor-pointer items-center space-x-2.5 focus:outline-none"
          id="logo_container"
        >
          <div className="relative flex h-10 w-10 items-center justify-center rounded-lg bg-blue-600 font-display text-xl font-extrabold text-white shadow-lg shadow-blue-500/25">
            C
            <span className="absolute -bottom-1 -right-1 flex h-4 w-4 items-center justify-center rounded-full bg-teal-400 text-[10px] font-black text-slate-950">
              L
            </span>
          </div>
          <div>
            <span className="font-display text-xl font-bold tracking-tight text-white hover:text-blue-400 transition-colors">
              Code<span className="text-teal-400">Lok</span>
            </span>
            <span className="hidden sm:block text-[8px] font-mono text-slate-400 uppercase tracking-widest leading-none mt-0.5">
              Enterprise Engineering
            </span>
          </div>
        </div>

        {/* Elegant Dropdown-Based Desktop Navigation (Highly Compact) */}
        <nav className="hidden lg:flex items-center space-x-2" id="desktop_navigation">
          
          {/* Home */}
          <button
            id="nav_btn_home"
            onClick={() => { setActivePage("home"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={linkClass(activePage === "home")}
          >
            <span>Home</span>
            {activePage === "home" && (
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-teal-400 rounded-full" />
            )}
          </button>

          {/* Services & Solutions Dropdown */}
          <div className="group relative">
            <button
              className={linkClass(activePage === "services" || activePage === "solutions")}
            >
              <span>Services</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              {(activePage === "services" || activePage === "solutions") && (
                <span className="absolute bottom-0 left-3 right-7 h-[2px] bg-teal-400 rounded-full" />
              )}
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1.5 invisible opacity-0 scale-95 group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-50">
              <div className="w-52 rounded-xl border border-slate-800 bg-slate-950 p-1.5 shadow-2xl backdrop-blur-md">
                <button
                  onClick={() => { setActivePage("services"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`flex w-full items-center px-3 py-2 text-left text-xs font-semibold rounded-lg transition-colors ${
                    activePage === "services" ? "text-teal-400 bg-slate-900/60" : "text-slate-400 hover:text-white hover:bg-slate-900/40"
                  }`}
                >
                  Our Core Services
                </button>
                <button
                  onClick={() => { setActivePage("solutions"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`flex w-full items-center px-3 py-2 text-left text-xs font-semibold rounded-lg transition-colors mt-0.5 ${
                    activePage === "solutions" ? "text-teal-400 bg-slate-900/60" : "text-slate-400 hover:text-white hover:bg-slate-900/40"
                  }`}
                >
                  Enterprise Solutions
                </button>
              </div>
            </div>
          </div>

          {/* Portfolio (Success Cases) */}
          <button
            id="nav_btn_portfolio"
            onClick={() => { setActivePage("portfolio"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={linkClass(activePage === "portfolio")}
          >
            <span>Cases</span>
            {activePage === "portfolio" && (
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-teal-400 rounded-full" />
            )}
          </button>

          {/* Technologies */}
          <button
            id="nav_btn_technologies"
            onClick={() => { setActivePage("technologies"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
            className={linkClass(activePage === "technologies")}
          >
            <span>Tech Stack</span>
            {activePage === "technologies" && (
              <span className="absolute bottom-0 left-3 right-3 h-[2px] bg-teal-400 rounded-full" />
            )}
          </button>

          {/* Company Dropdown (About Us, Blog, Contact) */}
          <div className="group relative">
            <button
              className={linkClass(activePage === "about" || activePage === "blog" || activePage === "contact")}
            >
              <span>Company</span>
              <ChevronDown className="h-3.5 w-3.5 opacity-60 group-hover:rotate-180 transition-transform duration-200" />
              {(activePage === "about" || activePage === "blog" || activePage === "contact") && (
                <span className="absolute bottom-0 left-3 right-7 h-[2px] bg-teal-400 rounded-full" />
              )}
            </button>
            <div className="absolute left-1/2 -translate-x-1/2 top-full pt-1.5 invisible opacity-0 scale-95 group-hover:visible group-hover:opacity-100 group-hover:scale-100 transition-all duration-200 z-50">
              <div className="w-48 rounded-xl border border-slate-800 bg-slate-950 p-1.5 shadow-2xl backdrop-blur-md">
                <button
                  onClick={() => { setActivePage("about"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`flex w-full items-center px-3 py-2 text-left text-xs font-semibold rounded-lg transition-colors ${
                    activePage === "about" ? "text-teal-400 bg-slate-900/60" : "text-slate-400 hover:text-white hover:bg-slate-900/40"
                  }`}
                >
                  About Our Team
                </button>
                <button
                  onClick={() => { setActivePage("blog"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`flex w-full items-center px-3 py-2 text-left text-xs font-semibold rounded-lg transition-colors mt-0.5 ${
                    activePage === "blog" ? "text-teal-400 bg-slate-900/60" : "text-slate-400 hover:text-white hover:bg-slate-900/40"
                  }`}
                >
                  Technical Journal
                </button>
                <button
                  onClick={() => { setActivePage("contact"); window.scrollTo({ top: 0, behavior: 'smooth' }); }}
                  className={`flex w-full items-center px-3 py-2 text-left text-xs font-semibold rounded-lg transition-colors mt-0.5 ${
                    activePage === "contact" ? "text-teal-400 bg-slate-900/60" : "text-slate-400 hover:text-white hover:bg-slate-900/40"
                  }`}
                >
                  Inquire Now
                </button>
              </div>
            </div>
          </div>

        </nav>

        {/* Right side CTA & Quick Toggle indicators */}
        <div className="hidden sm:flex items-center space-x-3.5">
          
          {/* Sleek Theme Switching Control */}
          <button
            onClick={toggleTheme}
            id="desktop-theme-toggle"
            className="p-2 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/40 text-slate-300 hover:text-white focus:outline-none transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-yellow-400" />
            ) : (
              <Moon className="h-4 w-4 text-blue-500" />
            )}
          </button>

          <button
            id="header-cta-btn"
            onClick={openConsultation}
            className="group flex items-center space-x-1.5 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 px-4 py-2 text-xs font-extrabold uppercase tracking-wide text-white shadow-lg shadow-blue-500/10 hover:from-blue-500 hover:to-indigo-500 focus:outline-none transition-all duration-200"
          >
            <Sparkles className="h-3 w-3 text-teal-300 group-hover:rotate-12 transition-transform" />
            <span>AI Consultation</span>
          </button>
        </div>

        {/* Mobile top-bar controls */}
        <div className="flex lg:hidden items-center space-x-2">
          
          {/* Direct Mobile Header Theme Toggle */}
          <button
            onClick={toggleTheme}
            id="mobile-header-theme-toggle"
            className="p-2 rounded-lg border border-slate-800 hover:border-slate-700 bg-slate-900/40 text-slate-300 hover:text-white focus:outline-none transition-colors cursor-pointer"
            aria-label="Toggle Theme"
          >
            {theme === "dark" ? (
              <Sun className="h-4 w-4 text-yellow-400" />
            ) : (
              <Moon className="h-4 w-4 text-blue-500" />
            )}
          </button>

          <button
            id="mobile-menu-toggle"
            type="button"
            className="inline-flex items-center justify-center rounded-lg p-2 text-slate-400 hover:bg-slate-900 hover:text-white focus:outline-none focus:ring-1 focus:ring-teal-400"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
          >
            {mobileMenuOpen ? <X className="h-5.5 w-5.5" /> : <Menu className="h-5.5 w-5.5" />}
          </button>
        </div>

      </div>

      {/* Mobile drawer slideout */}
      {mobileMenuOpen && (
        <div className="lg:hidden border-t border-slate-800 bg-slate-950 px-4 py-4 space-y-3 animate-fade-in" id="mobile_menu">
          <div className="grid grid-cols-2 gap-2 pb-2">
            {navigations.map((item) => (
              <button
                key={item.id}
                id={`mobile_nav_btn_${item.id}`}
                onClick={() => {
                  setActivePage(item.id);
                  setMobileMenuOpen(false);
                  window.scrollTo({ top: 0, behavior: "smooth" });
                }}
                className={`py-2 px-3 rounded-lg text-left text-xs font-bold uppercase tracking-wider transition-all ${
                  activePage === item.id
                    ? "bg-blue-600/10 text-teal-400 border-l-4 border-teal-400"
                    : "text-slate-400 hover:text-white hover:bg-slate-900/50"
                }`}
              >
                {item.label}
              </button>
            ))}
          </div>

          <div className="border-t border-slate-800 pt-3">
            {/* Direct consultation call layout */}
            <button
              onClick={() => {
                setMobileMenuOpen(false);
                openConsultation();
              }}
              className="flex w-full items-center justify-center space-x-2 rounded-lg bg-gradient-to-r from-blue-600 to-indigo-600 py-3 text-xs font-extrabold uppercase tracking-widest text-white shadow-lg"
            >
              <Sparkles className="h-4 w-4 text-teal-300" />
              <span>AI Cloud Consultation</span>
            </button>
          </div>
        </div>
      )}
    </header>
  );
}
