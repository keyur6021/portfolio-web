import React from "react";
import AnimatedSection from "./AnimatedSection";

const PROCESS_STEPS = [
  { step: "01", title: "Requirement Analysis", desc: "Deep dive into business goals, user needs, and technical constraints before writing a line of code." },
  { step: "02", title: "Architecture Planning", desc: "Design scalable component hierarchies, state management strategy, and API contracts." },
  { step: "03", title: "UI Development", desc: "Build pixel-perfect, accessible, responsive interfaces with a focus on DX and reusability." },
  { step: "04", title: "API Integration", desc: "Connect frontend to backend services with robust error handling, loading states, and caching." },
  { step: "05", title: "Optimization", desc: "Performance profiling, code splitting, lazy loading, and Lighthouse score improvement." },
  { step: "06", title: "Testing", desc: "Unit tests, integration tests, and cross-browser/device QA to ensure reliability." },
  { step: "07", title: "Deployment", desc: "CI/CD pipeline setup, production build optimization, and monitoring integration." },
];

const ACHIEVEMENTS = [
  { value: "4+", label: "Years of Experience", desc: "Senior Frontend Engineering" },
  { value: "7+", label: "Production Apps", desc: "Delivered end-to-end" },
  { value: "40%", label: "Performance Gains", desc: "Via optimization & SSR" },
  { value: "30%", label: "Faster Dev Cycles", desc: "Through reusable component libs" },
  { value: "35+", label: "Lighthouse Points", desc: "Improved via SSR migration" },
  { value: "2", label: "Companies", desc: "Full-time frontend roles" },
];

export const Achievements = () => (
  <section className="section-pad bg-surface">
    <div className="section-container">
      <AnimatedSection>
        <p className="section-label">
          <span className="w-6 h-[1px] bg-accent inline-block" />
          Achievements
        </p>
        <h2 className="section-title">
          Numbers that{" "}
          <span className="gradient-text">tell the story</span>
        </h2>
      </AnimatedSection>

      <div className="mt-12 grid grid-cols-2 md:grid-cols-3 gap-5">
        {ACHIEVEMENTS.map((a, i) => (
          <AnimatedSection key={a.label} delay={i * 0.07}>
            <div className="glass-card p-6 text-center hover:border-accent/30 transition-colors">
              <div className="text-4xl font-extrabold gradient-text mb-1">{a.value}</div>
              <div className="text-white font-semibold text-sm">{a.label}</div>
              <div className="text-muted text-xs mt-1">{a.desc}</div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export const Process = () => (
  <section className="section-pad bg-bg">
    <div className="section-container">
      <AnimatedSection>
        <p className="section-label">
          <span className="w-6 h-[1px] bg-accent inline-block" />
          My Process
        </p>
        <h2 className="section-title">
          How I{" "}
          <span className="gradient-text">work</span>
        </h2>
        <p className="section-subtitle">
          A structured, ownership-driven approach from concept to production.
        </p>
      </AnimatedSection>

      <div className="mt-12 relative">
        {/* Vertical line */}
        <div className="hidden md:block absolute left-[28px] top-4 bottom-4 w-[1px] bg-gradient-to-b from-accent via-cyan to-transparent" />

        <div className="space-y-6">
          {PROCESS_STEPS.map((s, i) => (
            <AnimatedSection key={s.step} delay={i * 0.07}>
              <div className="flex gap-6 items-start">
                <div className="shrink-0 w-14 h-14 rounded-full bg-accent/10 border border-accent/30 flex items-center justify-center font-mono text-accent font-bold text-sm z-10 relative bg-bg">
                  {s.step}
                </div>
                <div className="glass-card p-5 flex-1">
                  <h3 className="font-semibold text-white mb-1">{s.title}</h3>
                  <p className="text-muted text-sm">{s.desc}</p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </div>
  </section>
);

export const Education = () => (
  <section className="section-pad bg-surface">
    <div className="section-container max-w-3xl">
      <AnimatedSection>
        <p className="section-label">
          <span className="w-6 h-[1px] bg-accent inline-block" />
          Education
        </p>
        <h2 className="section-title">Academic Background</h2>
      </AnimatedSection>

      <AnimatedSection delay={0.1} className="mt-10">
        <div className="glass-card p-7 hover:border-accent/30 transition-colors">
          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
            <div>
              <h3 className="text-xl font-bold text-white">
                K.J. Institute of Engineering & Technology
              </h3>
              <p className="text-accent font-semibold mt-1">
                Bachelor of Technology — Computer Engineering
              </p>
            </div>
            <div className="text-right shrink-0">
              <div className="text-2xl font-extrabold gradient-text">8.30</div>
              <div className="text-xs text-muted">CGPA</div>
            </div>
          </div>
          <div className="mt-4 flex flex-wrap gap-2">
            <span className="tag">B.Tech</span>
            <span className="tag">Computer Engineering</span>
            <span className="tag">CGPA 8.30</span>
          </div>
        </div>
      </AnimatedSection>
    </div>
  </section>
);
