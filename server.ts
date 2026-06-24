import express from "express";
import path from "path";
import { createServer as createViteServer } from "vite";
import { GoogleGenAI } from "@google/genai";
import dotenv from "dotenv";

dotenv.config();

async function startServer() {
  const app = express();
  app.use(express.json());
  const PORT = 3000;

  // Initialize Gemini API client safely 
  let ai: GoogleGenAI | null = null;
  try {
    if (process.env.GEMINI_API_KEY) {
      ai = new GoogleGenAI({
        apiKey: process.env.GEMINI_API_KEY,
        httpOptions: {
          headers: {
            'User-Agent': 'aistudio-build',
          }
        }
      });
    }
  } catch (error) {
    console.error("Failed to initialize Gemini client:", error);
  }

  // Server-side in-memory lead storage seeded with premium mock accounts 
  // to represent real enterprise interaction and user safety
  const leads: any[] = [
    {
      id: "demo-lead-1",
      fullName: "Sarah Jenkins",
      companyName: "FintechScale Inc.",
      email: "jenkins@fintechscale.io",
      phone: "+1 (555) 934-2910",
      serviceRequired: "Cloud Migration",
      budget: "₹25L - ₹50L",
      projectDetails: "Migrating legacy core payment authorization pipeline to secure AWS ECS with serverless Lambdas. Real-time logging metrics and instant PCI compliance compliance audits required.",
      createdAt: new Date(Date.now() - 3600000 * 24 * 3).toISOString(), // 3 days ago
      status: "In Progress"
    },
    {
      id: "demo-lead-2",
      fullName: "Anirudh Sharma",
      companyName: "MedHealth Diagnostics",
      email: "asharma@medhealth.co.in",
      phone: "+91 98765 43210",
      serviceRequired: "AI Integration",
      budget: "₹10L - ₹25L",
      projectDetails: "AI Support Agent trained on complex medical procedures and claims documentation. Integrates with existing Salesforce patient logs.",
      createdAt: new Date(Date.now() - 3600000 * 5).toISOString(), // 5 hours ago
      status: "Consultation Scheduled"
    }
  ];

  app.get("/api/health", (req, res) => {
    res.json({ status: "ok", mode: process.env.NODE_ENV });
  });

  // Fetch all current leads 
  app.get("/api/leads", (req, res) => {
    res.json({ leads });
  });

  // Submit a brand new consultation query or direct lead
  app.post("/api/leads", (req, res) => {
    const { fullName, companyName, email, phone, serviceRequired, budget, projectDetails } = req.body;
    
    if (!fullName || !email) {
      return res.status(400).json({ error: "Client Name and Email are strictly required." });
    }

    const newLead = {
      id: `lead-${Date.now()}`,
      fullName,
      companyName: companyName || "N/A",
      email,
      phone: phone || "N/A",
      serviceRequired: serviceRequired || "General Technology Consulting",
      budget: budget || "Not specified",
      projectDetails: projectDetails || "N/A",
      createdAt: new Date().toISOString(),
      status: "Pending Pitch Discovery"
    };

    leads.unshift(newLead);
    res.json({ success: true, lead: newLead });
  });

  // Interactive AI consultation architect generator
  app.post("/api/consult", async (req, res) => {
    const { industry, serviceType, description, techPreference, budgetRange } = req.body;

    if (!description) {
      return res.status(400).json({ error: "A clear project briefing description is required for the AI to model an architecture." });
    }

    if (!ai) {
      // Fallback structured system if client API Key is not yet configured, keeping the UX perfect
      return res.json({
        usingMock: true,
        recommendedStack: [
          `AWS ECS on Fargate (Fully serverless container scaling for ${serviceType || 'IT Services'})`,
          "React 19 + TypeScript (For premium web interaction and desktop fidelity)",
          "Node.js with Express & Prisma ORM (High throughput API runtime)",
          "PostgreSQL (Durable relational storage with multi-AZ replication)",
          "Redis Enterprise Cache (Ultra low-latency caching & session preservation)"
        ],
        cloudArchitecture: `An AWS virtual private cloud (VPC) spanning three availability zones. Secure entry through an Route 53 DNS and an Application Load Balancer (ALB) protected by AWS WAF. Fargate container orchestration scales up automatically in response to computational loads.`,
        automationIdeas: `1. Continuous integration pipeline utilizing GitHub Actions and AWS ECR to trigger zero-downtime rolling updates. 2. Periodic background workers running AI cost audits and automated database vacuum optimizations.`,
        securityRecom: "Strict transit layer encryption, AWS Secrets Manager for environment variables, multi-factor IAM credential protection, and automatic OWASP Top 10 web injection shields.",
        estimatedTimeline: "12 to 14 Weeks (Discovery & Framing: 2w, Core Pipeline & Backend Schema: 6w, Security Audit & Penetration Audit: 3w, Handover & Deployment: 3w)",
        professionalSummary: `To successfully match the high reliability standards of a ${industry || 'Modern Enterprise'} platform, CodeLok proposes a fully containerized cloud layout. Our cloud architects estimate this solution represents the sweet spot for ${budgetRange || 'Enterprise'} budgets, ensuring highly secure transactions and redundant fallbacks. We will manage this lifecycle completely from design to launch.`
      });
    }

    try {
      const prompt = `You are the lead Technology Solutions Architect at CodeLok, a premier enterprise IT consulting firm.
Analyze the following client project criteria and generate a high-end, production-ready technical solution proposal:

Client Criteria:
- Industry Focus: ${industry || 'Tech enterprise'}
- Service Type Goal: ${serviceType || 'Digital Transformation'}
- Project Description & Requirements: ${description}
- Preferred Technologies: ${techPreference || 'Open to professional recommendations'}
- Estimated Budget Bracket: ${budgetRange || 'Enterprise custom'}

Generate a professional solution report. Your response MUST be valid JSON conforming exactly to this schema:
{
  "cloudArchitecture": "Detailed string about AWS layout and architectural flow...",
  "recommendedStack": ["Tech tool 1: justification", "Tech tool 2: justification", "Tech tool 3: justification", "Tech tool 4: justification", "Tech tool 5: justification"],
  "automationIdeas": "String with 1 or 2 high-value automated workflows or cost reduction ideas...",
  "securityRecom": "Key guidelines to preserve enterprise safety, uptime and system hygiene...",
  "estimatedTimeline": "Duration, milestones, and methodology breakdown...",
  "professionalSummary": "Executive concluding narrative framing why CodeLok is the ideal partner for this..."
}

CRITICAL: Return ONLY raw, valid JSON. Do not write any markdown blocks (this includes NO \`\`\`json encapsulation). Use double quotes for property names and string values correctly. Ensure the final block is parseable by JSON.parse.`;

      const response = await ai.models.generateContent({
        model: "gemini-3.5-flash",
        contents: prompt,
        config: {
          responseMimeType: "application/json",
          temperature: 0.15
        }
      });

      const responseText = response.text || "";
      let parsedData;
      try {
        parsedData = JSON.parse(responseText.trim());
      } catch (parseErr) {
        console.error("Formatting raw AI output to strict JSON...", responseText);
        // Clean markdown backticks just in case
        const cleanedText = responseText
          .replace(/```json/gi, "")
          .replace(/```/gi, "")
          .trim();
        parsedData = JSON.parse(cleanedText);
      }

      res.json(parsedData);
    } catch (apiErr: any) {
      console.error("Gemini API Consultation Architect Error:", apiErr);
      res.status(500).json({ error: "Failed to generate AI consultation roadmap dynamically. Please contact support." });
    }
  });

  // Serve static UI assets
  if (process.env.NODE_ENV !== "production") {
    const vite = await createViteServer({
      server: { middlewareMode: true },
      appType: "spa",
    });
    app.use(vite.middlewares);
  } else {
    const distPath = path.join(process.cwd(), "dist");
    app.use(express.static(distPath));
    app.get("*", (req, res) => {
      res.sendFile(path.join(distPath, "index.html"));
    });
  }

  app.listen(PORT, "0.0.0.0", () => {
    console.log(`CodeLok Server is live at http://0.0.0.0:${PORT}`);
  });
}

startServer();
