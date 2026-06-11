import React from "react";
import AnimatedSection from "./AnimatedSection";

const SKILL_GROUPS = [
  {
    title: "Frontend",
    color: "accent",
    skills: ["React.js", "Next.js", "TypeScript", "JavaScript (ES2024)", "HTML5", "CSS3"],
  },
  {
    title: "UI & Styling",
    color: "cyan",
    skills: ["Tailwind CSS", "Material UI", "CSS Modules", "Framer Motion", "Responsive Design", "SCSS"],
  },
  {
    title: "State Management",
    color: "violet",
    skills: ["Redux Toolkit", "RTK Query", "React Query", "Zustand", "Context API", "Recoil"],
  },
  {
    title: "Backend & APIs",
    color: "emerald",
    skills: ["REST APIs", "Node.js", "AWS Lambda", "API Gateway", "Amazon Cognito", "GraphQL"],
  },
  {
    title: "Database & ORM",
    color: "orange",
    skills: ["MongoDB", "SQL", "Prisma ORM", "Firebase", "PostgreSQL"],
  },
  {
    title: "Tools & DevOps",
    color: "pink",
    skills: ["Git", "GitHub", "Bitbucket", "Postman", "Webpack", "Vite", "Stripe API", "Web3.js"],
  },
];

const colorMap = {
  accent: "bg-accent/10 border-accent/20 text-accent-light",
  cyan: "bg-cyan/10 border-cyan/20 text-cyan",
  violet: "bg-violet-500/10 border-violet-500/20 text-violet-300",
  emerald: "bg-emerald-500/10 border-emerald-500/20 text-emerald-300",
  orange: "bg-orange-500/10 border-orange-500/20 text-orange-300",
  pink: "bg-pink-500/10 border-pink-500/20 text-pink-300",
};

const titleColorMap = {
  accent: "text-accent",
  cyan: "text-cyan",
  violet: "text-violet-400",
  emerald: "text-emerald-400",
  orange: "text-orange-400",
  pink: "text-pink-400",
};

const Skills = () => (
  <section id="skills" className="section-pad bg-bg">
    <div className="section-container">
      <AnimatedSection>
        <p className="section-label">
          <span className="w-6 h-[1px] bg-accent inline-block" />
          Technical Skills
        </p>
        <h2 className="section-title">
          The stack I{" "}
          <span className="gradient-text">build with</span>
        </h2>
        <p className="section-subtitle">
          A modern, production-tested tech stack spanning frontend architecture, cloud, and tooling.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {SKILL_GROUPS.map((group, i) => (
          <AnimatedSection key={group.title} delay={i * 0.08}>
            <div className="glass-card p-6 h-full hover:border-accent/30 transition-colors duration-200">
              <h3 className={`font-bold text-base mb-4 ${titleColorMap[group.color]}`}>
                {group.title}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.skills.map((skill) => (
                  <span
                    key={skill}
                    className={`inline-flex items-center px-2.5 py-1 rounded-md text-xs font-medium border ${colorMap[group.color]}`}
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>

      {/* Currently exploring */}
      <AnimatedSection delay={0.4} className="mt-8">
        <div className="glass-card p-5 border-dashed">
          <p className="text-xs font-mono text-muted uppercase tracking-wider mb-3">
            Currently Exploring
          </p>
          <div className="flex flex-wrap gap-2">
            {["Rust (WebAssembly)", "Bun.js", "tRPC", "Turbopack", "React Server Components", "Edge Functions"].map((tech) => (
              <span key={tech} className="tag opacity-60">{tech}</span>
            ))}
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);

export default Skills;
