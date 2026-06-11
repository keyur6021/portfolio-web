import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import AnimatedSection from "./AnimatedSection";

const PROJECTS = [
  {
    name: "SPL Portal",
    category: "AWS / Serverless",
    tags: ["AWS", "Serverless"],
    desc: "Enterprise-grade serverless portal built on AWS infrastructure with complex reporting workflows and secure multi-tenant access.",
    problem: "Client needed a scalable, cost-efficient portal to manage SPL workflows with real-time reporting across multiple roles.",
    impact: "Reduced infrastructure costs by ~60% vs traditional server. Serverless architecture handles traffic spikes seamlessly.",
    tech: ["React.js", "TypeScript", "AWS Lambda", "API Gateway", "Amazon Cognito", "Redux Toolkit", "RTK Query"],
    highlights: ["Multi-tenant auth with Cognito user pools", "Serverless REST APIs via Lambda + API Gateway", "Dynamic reporting dashboards", "Role-based access control"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-orange-500/20 to-yellow-500/10",
  },
  {
    name: "Theraplus",
    category: "Healthcare SaaS",
    tags: ["Healthcare", "SaaS"],
    desc: "Full-featured healthcare platform enabling appointment booking, Stripe payments, reviews, and role-based access for patients, doctors, and admins.",
    problem: "Healthcare providers needed a unified digital platform to manage appointments, billing, and patient interactions.",
    impact: "Streamlined booking flows reduced admin overhead by ~40%. Stripe integration enabled seamless billing.",
    tech: ["React.js", "Next.js", "TypeScript", "Stripe API", "Redux Toolkit", "RTK Query", "Tailwind CSS"],
    highlights: ["Stripe subscription & one-time payments", "Role-based dashboards (Patient / Doctor / Admin)", "Appointment scheduling with calendar UI", "Reviews & ratings system"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-emerald-500/20 to-teal-500/10",
  },
  {
    name: "Neo Fleet Management",
    category: "Logistics / Next.js",
    tags: ["Logistics", "Next.js"],
    desc: "Large-scale Next.js fleet management platform for a UAE client, covering driver supply, income tracking, training records, and operational dashboards.",
    problem: "UAE logistics company needed a unified system to manage a growing fleet of drivers across multiple regions.",
    impact: "Centralized driver & fleet data. Reduced manual reporting time by ~50% through automated dashboards.",
    tech: ["Next.js", "TypeScript", "React.js", "Redux Toolkit", "REST APIs", "Tailwind CSS"],
    highlights: ["Driver management & onboarding module", "Income & expense tracking", "Training record management", "Multi-region operational dashboards"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-blue-500/20 to-indigo-500/10",
  },
  {
    name: "Clapboard",
    category: "SSR / SEO",
    tags: ["Next.js", "SEO"],
    desc: "Migrated a legacy CRA application to Next.js with full SSR, boosting Lighthouse scores significantly and improving organic search visibility.",
    problem: "Legacy CRA app had poor SEO, slow FCP, and scored <50 on Lighthouse. Business needed better organic reach.",
    impact: "Lighthouse performance score improved by 35+ points. 3x organic traffic growth within 2 months of migration.",
    tech: ["Next.js", "TypeScript", "React.js", "Tailwind CSS", "SEO Meta", "Open Graph"],
    highlights: ["CRA → Next.js SSR migration", "Lighthouse score: 48 → 85+", "Dynamic OG metadata", "Image optimization & lazy loading"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-violet-500/20 to-purple-500/10",
  },
  {
    name: "Trendappend",
    category: "Web3 / Commerce",
    tags: ["Web3", "Commerce"],
    desc: "Social commerce platform with Web3 integration enabling users to buy/sell products in any currency including crypto payments.",
    problem: "Platform needed to support global users transacting in both fiat and crypto, with a TikTok-inspired social feed.",
    impact: "First platform in the client's vertical to support crypto checkout. Opened a new revenue stream targeting Web3 users.",
    tech: ["React.js", "TypeScript", "Web3.js", "Redux Toolkit", "REST APIs", "Tailwind CSS"],
    highlights: ["Web3 wallet integration", "Crypto payment checkout flow", "Social feed with product listings", "Multi-currency support"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-pink-500/20 to-rose-500/10",
  },
  {
    name: "Cloudairy",
    category: "Analytics / SaaS",
    tags: ["Analytics", "SaaS"],
    desc: "Cloud cost optimization SaaS with rich analytics dashboards featuring Recharts-powered pie, donut, and trend charts.",
    problem: "Engineering teams were overspending on cloud infrastructure with no visibility into cost drivers.",
    impact: "Clients identified and eliminated 20–35% cloud waste within the first month using the dashboards.",
    tech: ["React.js", "TypeScript", "Redux", "Recharts", "REST APIs", "Material UI"],
    highlights: ["Complex Recharts dashboard (pie, donut, line)", "Cloud cost breakdown by service/region", "Cost optimization recommendations engine", "CSV export & reporting"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-sky-500/20 to-cyan-500/10",
  },
  {
    name: "Tesoract",
    category: "Productivity / SaaS",
    tags: ["SaaS", "Productivity"],
    desc: "Unified workspace platform linking multiple apps for sprint planning, team collaboration, and activity tracking.",
    problem: "Teams were juggling 5+ disconnected tools. They needed one hub for project management and team activity.",
    impact: "Consolidated tool ecosystem reduced context-switching. Teams reported 25% productivity gains.",
    tech: ["React.js", "TypeScript", "Redux Toolkit", "REST APIs", "Tailwind CSS", "Node.js"],
    highlights: ["Sprint planning & backlog management", "Team collaboration workspace", "Real-time activity tracking", "Cross-app integration hub"],
    liveUrl: "#",
    githubUrl: "#",
    color: "from-amber-500/20 to-yellow-500/10",
  },
];

const ALL_TAGS = ["All", "AWS", "Serverless", "Healthcare", "SaaS", "Logistics", "Next.js", "SEO", "Web3", "Commerce", "Analytics", "Productivity"];

const ProjectCard = ({ project, index }) => {
  const [expanded, setExpanded] = useState(false);

  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, y: -20 }}
      transition={{ duration: 0.4, delay: index * 0.05 }}
      className={`glass-card overflow-hidden hover:border-accent/40 transition-all duration-300 hover:shadow-glow group`}
    >
      {/* Color bar */}
      <div className={`h-1 w-full bg-gradient-to-r ${project.color.replace("/20", "").replace("/10", "")}`} />

      {/* Image placeholder */}
      <div className={`relative h-44 bg-gradient-to-br ${project.color} flex items-center justify-center overflow-hidden`}>
        <div className="text-center">
          <div className="text-4xl font-extrabold text-white/10 font-mono select-none">
            {project.name.slice(0, 2).toUpperCase()}
          </div>
        </div>
        <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 bg-black/30 flex items-center justify-center gap-3">
          <a href={project.liveUrl} target="_blank" rel="noreferrer" className="btn-primary text-xs py-1.5 px-3">Live Demo</a>
          <a href={project.githubUrl} target="_blank" rel="noreferrer" className="btn-outline text-xs py-1.5 px-3">GitHub</a>
        </div>
      </div>

      <div className="p-5">
        <div className="flex items-start justify-between mb-2">
          <h3 className="font-bold text-white text-lg">{project.name}</h3>
          <span className="tag text-[10px] shrink-0 ml-2">{project.category}</span>
        </div>

        <p className="text-muted text-sm leading-relaxed mb-4">{project.desc}</p>

        {/* Tech tags */}
        <div className="flex flex-wrap gap-1.5 mb-4">
          {project.tech.slice(0, 4).map((t) => (
            <span key={t} className="tag-cyan text-[10px]">{t}</span>
          ))}
          {project.tech.length > 4 && (
            <span className="tag text-[10px]">+{project.tech.length - 4}</span>
          )}
        </div>

        {/* Expand toggle */}
        <button
          onClick={() => setExpanded(!expanded)}
          className="text-xs text-accent hover:text-accent-light font-mono transition-colors"
        >
          {expanded ? "▲ Less details" : "▼ More details"}
        </button>

        <AnimatePresence>
          {expanded && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3 }}
              className="overflow-hidden"
            >
              <div className="pt-4 space-y-4">
                <div>
                  <p className="text-xs font-mono text-muted uppercase tracking-wider mb-1.5">Problem Solved</p>
                  <p className="text-sm text-light/70">{project.problem}</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-muted uppercase tracking-wider mb-1.5">Business Impact</p>
                  <p className="text-sm text-light/70">{project.impact}</p>
                </div>
                <div>
                  <p className="text-xs font-mono text-muted uppercase tracking-wider mb-1.5">Architecture Highlights</p>
                  <ul className="space-y-1">
                    {project.highlights.map((h) => (
                      <li key={h} className="flex gap-2 text-sm text-light/70">
                        <span className="text-accent shrink-0">▸</span>{h}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </motion.div>
  );
};

const Projects = () => {
  const [activeTag, setActiveTag] = useState("All");

  const filtered = activeTag === "All"
    ? PROJECTS
    : PROJECTS.filter((p) => p.tags.includes(activeTag));

  return (
    <section id="projects" className="section-pad bg-surface">
      <div className="section-container">
        <AnimatedSection>
          <p className="section-label">
            <span className="w-6 h-[1px] bg-accent inline-block" />
            Projects
          </p>
          <h2 className="section-title">
            Production work that{" "}
            <span className="gradient-text">ships & scales</span>
          </h2>
          <p className="section-subtitle">
            7+ applications delivered across healthcare, fintech, logistics, and SaaS — each solving real business problems.
          </p>
        </AnimatedSection>

        {/* Filter pills */}
        <AnimatedSection delay={0.1} className="mt-8 flex flex-wrap gap-2">
          {ALL_TAGS.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveTag(tag)}
              className={`px-3 py-1.5 rounded-full text-xs font-medium border transition-all duration-200 ${
                activeTag === tag
                  ? "bg-accent border-accent text-white"
                  : "border-border text-muted hover:border-accent hover:text-accent bg-transparent"
              }`}
            >
              {tag}
            </button>
          ))}
        </AnimatedSection>

        {/* Grid */}
        <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <AnimatePresence mode="popLayout">
            {filtered.map((project, i) => (
              <ProjectCard key={project.name} project={project} index={i} />
            ))}
          </AnimatePresence>
        </div>
      </div>
    </section>
  );
};

export default Projects;
