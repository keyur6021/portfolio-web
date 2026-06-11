import React from "react";
import AnimatedSection from "./AnimatedSection";

const About = () => (
  <section id="about" className="section-pad bg-surface">
    <div className="section-container">
      <AnimatedSection>
        <p className="section-label">
          <span className="w-6 h-[1px] bg-accent inline-block" />
          About Me
        </p>
        <h2 className="section-title mb-6">
          Building products that{" "}
          <span className="gradient-text">scale & perform</span>
        </h2>
      </AnimatedSection>

      <div className="grid lg:grid-cols-5 gap-12 mt-10">
        {/* Bio */}
        <AnimatedSection className="lg:col-span-3 space-y-5" delay={0.1}>
          <p className="text-light/80 text-lg leading-relaxed">
            I'm a Senior Frontend Engineer based in Vadodara, India with 4+ years
            of experience architecting and delivering high-performance web applications
            for startups, SaaS platforms, and enterprise clients.
          </p>
          <p className="text-muted leading-relaxed">
            My focus is on writing clean, maintainable, and scalable code — not
            just making things work, but making them work{" "}
            <em className="text-light not-italic font-medium">exceptionally well</em>.
            I've delivered 7+ production applications across fintech, logistics,
            healthcare, and e-commerce domains.
          </p>
          <p className="text-muted leading-relaxed">
            I take ownership of the full frontend stack — from design systems and
            component architecture to API integration, performance optimization,
            and production deployments. I work closely with product, design, and
            backend teams to ship features that users love.
          </p>

          {/* Philosophy */}
          <div className="glass-card p-5 border-l-2 border-accent mt-6">
            <p className="text-xs font-mono text-accent mb-2 uppercase tracking-wider">
              Development Philosophy
            </p>
            <p className="text-light/80 italic">
              "Good code is not just code that works — it's code that the next
              developer (or future me) can understand, extend, and trust."
            </p>
          </div>

          {/* Industries */}
          <div>
            <p className="text-xs font-mono text-muted uppercase tracking-wider mb-3">
              Industries
            </p>
            <div className="flex flex-wrap gap-2">
              {[
                "SaaS", "Fintech", "Healthcare", "Logistics",
                "E-Commerce", "Fleet Management", "Analytics",
              ].map((ind) => (
                <span key={ind} className="tag">{ind}</span>
              ))}
            </div>
          </div>
        </AnimatedSection>

        {/* Stats & info cards */}
        <AnimatedSection className="lg:col-span-2 space-y-4" delay={0.2}>
          {[
            { label: "Location", value: "Vadodara, Gujarat, India" },
            { label: "Experience", value: "4+ Years" },
            { label: "Availability", value: "Open to Work — Immediately" },
            { label: "Work Preference", value: "Remote / Hybrid / On-site" },
            { label: "Languages", value: "English · Hindi · Gujarati" },
          ].map((item) => (
            <div key={item.label} className="glass-card p-4 flex flex-col gap-1">
              <span className="text-xs font-mono text-accent uppercase tracking-wide">
                {item.label}
              </span>
              <span className="text-light font-medium">{item.value}</span>
            </div>
          ))}

          {/* Key achievements */}
          <div className="glass-card p-5 mt-2">
            <p className="text-xs font-mono text-muted uppercase tracking-wider mb-3">
              Key Achievements
            </p>
            <ul className="space-y-2 text-sm text-light/80">
              {[
                "40% performance improvement via code splitting & lazy loading",
                "30% faster dev cycles with shared component libraries",
                "Lighthouse scores boosted via SSR & SEO optimization",
                "Migrated legacy CRA app to Next.js with zero downtime",
                "Integrated Stripe, Cognito & Web3 payment flows",
              ].map((a) => (
                <li key={a} className="flex gap-2">
                  <span className="text-accent mt-0.5 shrink-0">▸</span>
                  {a}
                </li>
              ))}
            </ul>
          </div>
        </AnimatedSection>
      </div>
    </div>
  </section>
);

export default About;
