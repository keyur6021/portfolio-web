import React from "react";
import AnimatedSection from "./AnimatedSection";

const PLACEHOLDERS = [
  {
    quote: "Keyur delivered production-ready code consistently on time. His attention to performance and architecture is what sets him apart from other frontend developers.",
    name: "— Former Manager, Limbani Softwares",
    role: "Senior Engineering Manager",
  },
  {
    quote: "Working with Keyur was a pleasure. He took complete ownership of the frontend architecture and raised the bar for code quality across the team.",
    name: "— Tech Lead, Limbani Softwares",
    role: "Full Stack Tech Lead",
  },
  {
    quote: "Keyur's migration of our CRA app to Next.js SSR made a visible difference in both performance and SEO within weeks of going live.",
    name: "— Product Owner, Clapboard",
    role: "Product Manager",
  },
];

const Testimonials = () => (
  <section className="section-pad bg-bg">
    <div className="section-container">
      <AnimatedSection>
        <p className="section-label">
          <span className="w-6 h-[1px] bg-accent inline-block" />
          Testimonials
        </p>
        <h2 className="section-title">
          What colleagues{" "}
          <span className="gradient-text">say</span>
        </h2>
        <p className="section-subtitle">
          Recommendations from teammates and managers. Full recommendations available on{" "}
          <a
            href="https://linkedin.com/in/er-keyur-mulani-b74943216"
            target="_blank"
            rel="noreferrer"
            className="text-accent hover:text-accent-light underline underline-offset-2 transition-colors"
          >
            LinkedIn
          </a>.
        </p>
      </AnimatedSection>

      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {PLACEHOLDERS.map((t, i) => (
          <AnimatedSection key={i} delay={i * 0.1}>
            <div className="glass-card p-6 h-full flex flex-col gap-4 hover:border-accent/30 transition-colors">
              <svg className="w-8 h-8 text-accent/40" fill="currentColor" viewBox="0 0 24 24">
                <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
              </svg>
              <p className="text-light/70 text-sm leading-relaxed flex-1 italic">"{t.quote}"</p>
              <div>
                <div className="text-white font-semibold text-sm">{t.name}</div>
                <div className="text-muted text-xs mt-0.5">{t.role}</div>
              </div>
            </div>
          </AnimatedSection>
        ))}
      </div>
    </div>
  </section>
);

export default Testimonials;
