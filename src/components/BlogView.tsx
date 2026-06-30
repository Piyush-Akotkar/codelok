import React, { useState } from "react";
import { 
  BookOpen, 
  Clock, 
  User, 
  ArrowRight, 
  X, 
  Tag, 
  Sparkles,
  Search,
  Calendar
} from "lucide-react";
import { CODELOK_BLOGS } from "../data";
import { BlogPost } from "../types";

export default function BlogView() {
  const [selectedBlog, setSelectedBlog] = useState<BlogPost | null>(null);
  const [activeCategory, setActiveCategory] = useState("all");

  const BLOG_CATEGORIES = [
    { label: "All Sprints", id: "all" },
    { label: "AWS & Serverless", id: "AWS & Serverless" },
    { label: "Artificial Intelligence", id: "Artificial Intelligence" },
    { label: "Cloud Migration", id: "Cloud Migration" }
  ];

  const filteredBlogs = activeCategory === "all"
    ? CODELOK_BLOGS
    : CODELOK_BLOGS.filter(blog => blog.category === activeCategory);

  return (
    <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-12 text-white font-sans" id="blog_page_section">
      
      {/* Blog header section */}
      <div className="mb-12 text-center md:text-left space-y-2">
        <span className="font-mono text-xs font-bold uppercase tracking-widest text-teal-400">Technical Intelligence Journal</span>
        <h1 className="font-display text-3xl sm:text-5xl font-extrabold tracking-tight text-white leading-none">
          CodeLok Technical Reference Logs
        </h1>
        <p className="max-w-2xl text-xs sm:text-sm text-slate-400">
          In-depth diagnostics, performance reviews, and architectural patterns authored by our certified cloud solution engineering staff.
        </p>
      </div>

      {/* Dynamic Blog Category Filter Switcher Row */}
      <div className="flex flex-wrap items-center gap-2 pb-6 mb-10 border-b border-slate-900" id="blog-category-filter">
        <span className="font-mono text-[10px] text-slate-500 uppercase tracking-widest font-bold pr-2 flex items-center space-x-1.5">
          <Tag className="h-3.5 w-3.5" />
          <span>Select Sector</span>
        </span>
        {BLOG_CATEGORIES.map((cat) => (
          <button
            key={cat.id}
            id={`btn-blog-cat-${cat.id}`}
            onClick={() => setActiveCategory(cat.id)}
            className={`px-4 py-1.5 text-xs font-semibold rounded-lg border transition-all ${
              activeCategory === cat.id
                ? "bg-slate-900 border-teal-400 text-teal-400 shadow-md shadow-teal-500/5"
                : "bg-slate-900/40 border-slate-900 text-slate-400 hover:text-white"
            }`}
          >
            {cat.label}
          </button>
        ))}
      </div>

      {/* Blogs list grid representation */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" id="blog-posts-grid">
        {filteredBlogs.map((post) => (
          <article 
            key={post.id}
            id={`blog-node-${post.id}`}
            className="rounded-xl border border-slate-900 bg-slate-900/10 p-5 flex flex-col justify-between hover:border-slate-800 transition-all group cursor-pointer"
            onClick={() => setSelectedBlog(post)}
          >
            <div className="space-y-4">
              
              {/* Category, Read details */}
              <div className="flex items-center justify-between text-[10px] font-mono">
                <span className="text-teal-400 uppercase tracking-wider font-semibold">
                  // {post.category}
                </span>
                <span className="text-slate-500 flex items-center space-x-1">
                  <Clock className="h-3 w-3" />
                  <span>{post.readTime}</span>
                </span>
              </div>

              <h3 className="font-display text-base font-bold text-white group-hover:text-blue-400 transition-colors leading-snug">
                {post.title}
              </h3>

              <p className="text-[11px] sm:text-xs text-slate-400 leading-relaxed font-sans line-clamp-3">
                {post.summary}
              </p>

            </div>

            {/* Author card footnote */}
            <div className="flex items-center justify-between pt-5 mt-5 border-t border-slate-900">
              <div className="flex items-center space-x-2 text-[10px] text-slate-400">
                <div className="h-5 w-5 rounded-full bg-slate-900 border border-slate-800 flex items-center justify-center font-display text-[9px] font-bold text-slate-300">
                  {post.author.charAt(0)}
                </div>
                <span>{post.author}</span>
              </div>

              <span className="text-xs font-bold text-teal-400 group-hover:text-teal-300 inline-flex items-center space-x-1">
                <span>Analyze Guide</span>
                <ArrowRight className="h-3.5 w-3.5 group-hover:translate-x-1 transition-transform" />
              </span>
            </div>

          </article>
        ))}
      </div>

      {/* Dynamic Popover Modal Overlay for complete rendering of blog details */}
      {selectedBlog && (
        <div className="fixed inset-0 z-50 bg-slate-950/90 backdrop-blur-md flex items-center justify-center p-4 overflow-y-auto" id="selected-blog-overlay-outer">
          <div className="bg-slate-900 border border-slate-800 max-w-3xl w-full rounded-2xl p-6 sm:p-8 space-y-6 relative max-h-[90vh] overflow-y-auto" id="selected-blog-modal-body">
            
            <button
              id="close-blog-overlay"
              onClick={() => setSelectedBlog(null)}
              className="absolute top-4 right-4 text-slate-400 hover:text-white bg-slate-950/40 p-1.5 rounded-lg border border-slate-800"
            >
              <X className="h-5 w-5" />
            </button>

            {/* Modal Heading Details */}
            <div className="space-y-3.5 border-b border-slate-800 pb-5 pt-3">
              <div className="flex items-center space-x-3.5 text-xs text-slate-400">
                <span className="font-mono text-teal-400 font-bold uppercase">// {selectedBlog.category}</span>
                <span>•</span>
                <span className="text-slate-500">{selectedBlog.date}</span>
                <span>•</span>
                <span className="text-slate-500">{selectedBlog.readTime}</span>
              </div>
              <h2 className="font-display text-lg sm:text-2xl lg:text-3xl font-extrabold text-white leading-tight">
                {selectedBlog.title}
              </h2>
            </div>

            {/* Full text content rendering */}
            <div className="space-y-4 text-xs sm:text-sm text-slate-300 leading-relaxed font-sans" id="blog-expanded-paragraphs">
              {selectedBlog.content.map((para, i) => (
                <p key={i} className="font-sans leading-relaxed">
                  {para}
                </p>
              ))}
            </div>

            {/* Author signature biography details footnote */}
            <div className="rounded-xl bg-slate-950/80 p-5 border border-slate-850 flex items-center space-x-3.5" id="blog-author-signature">
              <div className="h-10 w-10 rounded-full bg-blue-600 flex items-center justify-center font-display font-bold text-white shrink-0">
                {selectedBlog.author.slice(0, 1)}
              </div>
              <div>
                <h5 className="font-display text-xs font-bold text-white">{selectedBlog.author}</h5>
                <p className="text-[10px] text-slate-400 leading-normal font-sans mt-0.5">
                  CodeLok Senior Architect Desk. Piyush and Sapna host certified technical advisory credentials with primary concentrations in container optimizations and vector DB pipelines.
                </p>
              </div>
            </div>

            {/* Popover bottom close indicator */}
            <div className="flex justify-end pt-3">
              <button
                id="close-blog-bottom-btn"
                onClick={() => setSelectedBlog(null)}
                className="rounded-lg bg-slate-950 border border-slate-800 hover:bg-slate-800 text-xs px-5 py-2 font-bold text-slate-300"
              >
                Finished Reading
              </button>
            </div>

          </div>
        </div>
      )}

    </div>
  );
}
