import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const EXPERIENCES = [
  {
    company: "Limbani Softwares",
    role: "Senior Frontend Developer",
    period: "Mar 2022 – Apr 2026",
    duration: "4 yrs 1 mo",
    location: "Vadodara, India",
    type: "Full-time",
    current: true,
    summary:
      "Led frontend architecture for 5+ production-grade applications across SaaS, healthcare, logistics, and fintech domains. Drove performance, scalability, and team code quality standards.",
    achievements: [
      "Architected and delivered SPL Portal on AWS (Lambda, Cognito, API Gateway) from scratch",
      "Built Theraplus — a healthcare platform with Stripe payments, role-based access, and appointment flows",
      "Migrated Clapboard from CRA to Next.js SSR, improving Lighthouse score by 35+ points",
      "Integrated Web3 & crypto payment workflows in Trendappend",
      "Established shared component library reducing dev time by 30%",
      "Mentored junior developers and conducted code reviews",
    ],
    tech: ["React.js", "Next.js", "TypeScript", "Redux Toolkit", "RTK Query", "AWS Lambda", "Cognito", "Stripe", "Web3.js", "Tailwind CSS", "Node.js"],
  },
  {
    company: "Web Brain's Technology",
    role: "Junior React Developer",
    period: "Jan 2021 – Feb 2022",
    duration: "1 yr 1 mo",
    location: "Remote",
    type: "Full-time",
    current: false,
    summary:
      "Built React-based UI features and integrated REST APIs for client projects. Developed strong foundations in component architecture, state management, and responsive design.",
    achievements: [
      "Developed reusable UI components with React.js and Material UI",
      "Integrated RESTful APIs and managed application state with Redux",
      "Collaborated with senior developers on production deployments",
      "Improved UI consistency across multiple client-facing applications",
    ],
    tech: ["React.js", "JavaScript", "Redux", "Material UI", "REST APIs", "Git", "CSS3"],
  },
];

const Experience = () => {
  const [activeIdx, setActiveIdx] = useState(0);
  const exp = EXPERIENCES[activeIdx];

  return (
    <section id="experience" className="section-pad bg-bg">
      <div className="section-container">
        <AnimatedSection>
          <p className="section-label">
            <span className="w-6 h-[1px] bg-accent inline-block" />
            Experience
          </p>
          <h2 className="section-title">
            Where I've{" "}
            <span className="gradient-text">made an impact</span>
          </h2>
          <p className="section-subtitle">
            4+ years building and shipping production applications across diverse domains.
          </p>
        </AnimatedSection>

        <div className="mt-12 grid lg:grid-cols-3 gap-8">
          {/* Company tabs */}
          <AnimatedSection className="lg:col-span-1" delay={0.1}>
            <div className="space-y-2">
              {EXPERIENCES.map((e, i) => (
                <button
                  key={i}
                  onClick={() => setActiveIdx(i)}
                  className={`w-full text-left p-4 rounded-lg border transition-all duration-200 ${
                    activeIdx === i
                      ? "border-accent bg-accent/10 text-white"
                      : "border-border bg-card text-muted hover:border-subtle hover:text-light"
                  }`}
                >
                  <div className="font-semibold text-sm">{e.company}</div>
                  <div className="text-xs mt-0.5 opacity-70">{e.period}</div>
                  {e.current && (
                    <span className="inline-flex items-center gap-1 mt-2 text-[10px] text-emerald-400 font-mono">
                      <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
                      Current
                    </span>
                  )}
                </button>
              ))}
            </div>
          </AnimatedSection>

          {/* Details */}
          <AnimatedSection className="lg:col-span-2" delay={0.15} key={activeIdx}>
            <div className="glass-card p-7">
              <div className="flex flex-col sm:flex-row sm:items-start sm:justify-between gap-2 mb-5">
                <div>
                  <h3 className="text-xl font-bold text-white">{exp.role}</h3>
                  <p className="text-accent font-semibold mt-0.5">{exp.company}</p>
                </div>
                <div className="text-right shrink-0">
                  <div className="text-sm text-muted font-mono">{exp.period}</div>
                  <div className="text-xs text-subtle mt-1">{exp.duration} · {exp.type}</div>
                  <div className="text-xs text-subtle">{exp.location}</div>
                </div>
              </div>

              <p className="text-light/80 text-sm leading-relaxed mb-6">{exp.summary}</p>

              <div className="mb-6">
                <p className="text-xs font-mono text-muted uppercase tracking-wider mb-3">
                  Key Achievements
                </p>
                <ul className="space-y-2">
                  {exp.achievements.map((a, i) => (
                    <li key={i} className="flex gap-2 text-sm text-light/80">
                      <span className="text-accent shrink-0 mt-0.5">▸</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>

              <div>
                <p className="text-xs font-mono text-muted uppercase tracking-wider mb-3">
                  Technologies Used
                </p>
                <div className="flex flex-wrap gap-2">
                  {exp.tech.map((t) => (
                    <span key={t} className="tag">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Experience;
