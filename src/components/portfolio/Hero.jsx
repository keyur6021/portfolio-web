import React from "react";
import { motion } from "framer-motion";
import profileImg from "../../assets/images/profile.png";

const TECH_STACK = [
  "React.js", "Next.js", "TypeScript", "Redux Toolkit", "RTK Query",
  "Node.js", "AWS Lambda", "Tailwind CSS", "Framer Motion", "JavaScript",
  "REST APIs", "MongoDB", "Stripe API", "Web3.js", "Prisma ORM",
];

// Badges that float around the photo
const FLOAT_BADGES = [
  { label: "React.js",    top: "4%",   left: "50%",  delay: 0 },
  { label: "Next.js",     top: "20%",  left: "92%",  delay: 0.4 },
  { label: "TypeScript",  top: "55%",  left: "96%",  delay: 0.8 },
  { label: "AWS",         top: "82%",  left: "68%",  delay: 1.2 },
  { label: "Redux",       top: "82%",  left: "22%",  delay: 1.6 },
  { label: "Node.js",     top: "55%",  left: "-4%",  delay: 2.0 },
  { label: "Tailwind",    top: "20%",  left: "2%",   delay: 2.4 },
];

const SOCIAL_LINKS = [
  {
    label: "GitHub",
    href: "https://github.com/keyur6021",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61-.546-1.385-1.335-1.755-1.335-1.755-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.605-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 21.795 24 17.295 24 12c0-6.63-5.37-12-12-12z" />
      </svg>
    ),
  },
  {
    label: "LinkedIn",
    href: "https://linkedin.com/in/er-keyur-mulani-b74943216",
    icon: (
      <svg viewBox="0 0 24 24" fill="currentColor" className="w-5 h-5">
        <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 01-2.063-2.065 2.064 2.064 0 112.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
      </svg>
    ),
  },
];

const fadeUp = (delay = 0) => ({
  initial: { opacity: 0, y: 28 },
  animate: { opacity: 1, y: 0 },
  transition: { duration: 0.6, delay, ease: "easeOut" },
});

/* ─── Animated profile photo with rings + floating badges ─── */
const ProfilePhoto = () => (
  <div className="relative w-[280px] h-[280px] sm:w-[340px] sm:h-[340px] lg:w-[420px] lg:h-[420px] mx-auto">

    {/* Outer slow-spin dashed ring */}
    <motion.div
      animate={{ rotate: 360 }}
      transition={{ duration: 22, repeat: Infinity, ease: "linear" }}
      className="absolute inset-0 rounded-full border border-dashed border-accent/30"
    />

    {/* Middle pulse ring */}
    <motion.div
      animate={{ scale: [1, 1.04, 1], opacity: [0.4, 0.8, 0.4] }}
      transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
      className="absolute inset-[14px] rounded-full border border-accent/40"
    />

    {/* Glow behind photo */}
    <div className="absolute inset-[28px] rounded-full bg-accent/20 blur-2xl" />

    {/* Photo */}
    <motion.div
      initial={{ scale: 0.8, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ duration: 0.7, ease: "easeOut" }}
      className="absolute inset-[28px] rounded-full overflow-hidden border-2 border-accent/60 shadow-[0_0_40px_rgba(99,102,241,0.35)]"
    >
      <img
        src={profileImg}
        alt="Keyur Mulani — Senior Frontend Engineer"
        className="w-full h-full object-cover object-top"
        loading="eager"
      />
      {/* Subtle overlay gradient at bottom for text contrast */}
      <div className="absolute inset-0 bg-gradient-to-t from-bg/40 via-transparent to-transparent" />
    </motion.div>

    {/* Floating tech badges */}
    {FLOAT_BADGES.map((b) => (
      <motion.span
        key={b.label}
        style={{ top: b.top, left: b.left, transform: "translate(-50%, -50%)" }}
        className="absolute z-10 px-2.5 py-1 text-[10px] font-semibold font-mono rounded-full
                   bg-bg/90 border border-accent/40 text-accent-light shadow-glow backdrop-blur-sm
                   whitespace-nowrap"
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{
          opacity: 1,
          scale: 1,
          y: [0, -6, 0],
        }}
        transition={{
          opacity: { duration: 0.4, delay: 0.6 + b.delay },
          scale:   { duration: 0.4, delay: 0.6 + b.delay },
          y: {
            duration: 3 + b.delay * 0.3,
            repeat: Infinity,
            ease: "easeInOut",
            delay: b.delay,
          },
        }}
      >
        {b.label}
      </motion.span>
    ))}

    {/* Online status dot */}
    <div className="absolute bottom-[14%] right-[10%] z-20">
      <span className="flex items-center gap-1.5 bg-bg/90 border border-emerald-500/40 rounded-full px-2.5 py-1 text-[10px] font-medium text-emerald-400 backdrop-blur-sm shadow-md">
        <span className="w-1.5 h-1.5 rounded-full bg-emerald-400 animate-pulse" />
        Open to Work
      </span>
    </div>
  </div>
);

/* ─── Main Hero ─── */
const Hero = () => {
  const handleScroll = (id) =>
    document.querySelector(id)?.scrollIntoView({ behavior: "smooth", block: "start" });

  return (
    <section
      id="hero"
      className="relative min-h-screen flex items-center overflow-hidden bg-bg"
    >
      {/* Background decorations */}
      <div className="absolute inset-0 pointer-events-none">
        <div className="absolute top-1/3 right-0 w-[600px] h-[600px] bg-accent/10 rounded-full blur-[130px] -translate-y-1/4" />
        <div className="absolute bottom-0 left-0 w-[400px] h-[400px] bg-cyan/5 rounded-full blur-[100px]" />
        <div
          className="absolute inset-0 opacity-[0.025]"
          style={{
            backgroundImage:
              "linear-gradient(#6366f1 1px, transparent 1px), linear-gradient(90deg, #6366f1 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
      </div>

      <div className="section-container relative z-10 w-full pt-24 pb-16">
        {/* ── Two-column grid ── */}
        <div className="grid lg:grid-cols-2 gap-12 lg:gap-8 items-center">

          {/* ── LEFT: text content ── */}
          <div className="order-2 lg:order-1 text-center lg:text-left">

            {/* Badge */}
            <motion.div {...fadeUp(0)} className="flex justify-center lg:justify-start mb-6">
              <span className="inline-flex items-center gap-2 text-xs font-medium text-emerald-400
                               bg-emerald-400/10 border border-emerald-400/20 rounded-full px-3 py-1.5">
                <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse shrink-0" />
                Available for Senior Frontend roles — Immediate joiner
              </span>
            </motion.div>

            {/* Headline */}
            <motion.h1
              {...fadeUp(0.1)}
              className="text-[2.2rem] xs:text-5xl sm:text-5xl md:text-6xl font-extrabold
                         text-white leading-[1.12] tracking-tight mb-5"
            >
              Hi, I'm{" "}
              <span className="gradient-text">Keyur</span>
              <br />
              <span className="text-white">Senior Frontend</span>
              <br />
              <span className="gradient-text">Engineer</span>
            </motion.h1>

            {/* Sub */}
            <motion.p
              {...fadeUp(0.2)}
              className="text-base sm:text-lg text-muted max-w-lg mx-auto lg:mx-0 mb-3 leading-relaxed"
            >
              Frontend architect with{" "}
              <span className="text-accent font-semibold">4+ years</span> building
              production-grade apps in{" "}
              <span className="text-white font-medium">React, Next.js & TypeScript</span>.
              I ship fast, scalable, accessible UIs that drive business impact.
            </motion.p>

            <motion.p {...fadeUp(0.25)} className="text-xs sm:text-sm text-subtle mb-8 font-mono">
              📍 Vadodara, Gujarat, India · Remote &amp; On-site
            </motion.p>

            {/* CTAs */}
            <motion.div
              {...fadeUp(0.3)}
              className="flex flex-col xs:flex-row flex-wrap justify-center lg:justify-start gap-3 mb-8"
            >
              <button
                onClick={() => handleScroll("#projects")}
                className="btn-primary w-full xs:w-auto justify-center"
              >
                View Projects
              </button>
              <a
                href="https://drive.google.com/uc?export=download&id=1AlQoLiCVosLlMANNlmVshbTv9kluzq1J"
                target="_blank"
                rel="noreferrer"
                className="btn-outline w-full xs:w-auto justify-center"
              >
                <svg className="w-4 h-4 shrink-0" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2}
                    d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume
              </a>
              <button
                onClick={() => handleScroll("#contact")}
                className="btn-outline w-full xs:w-auto justify-center"
              >
                Contact Me
              </button>
            </motion.div>

            {/* Socials */}
            <motion.div {...fadeUp(0.35)} className="flex justify-center lg:justify-start gap-3 mb-10">
              {SOCIAL_LINKS.map((s) => (
                <a
                  key={s.label}
                  href={s.href}
                  target="_blank"
                  rel="noreferrer"
                  aria-label={s.label}
                  className="p-2.5 rounded-lg border border-border hover:border-accent
                             text-muted hover:text-accent transition-all duration-200 hover:scale-110"
                >
                  {s.icon}
                </a>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              {...fadeUp(0.4)}
              className="grid grid-cols-2 sm:grid-cols-4 lg:grid-cols-2 xl:grid-cols-4 gap-3"
            >
              {[
                { value: "4+",  label: "Years Exp." },
                { value: "7+",  label: "Apps Shipped" },
                { value: "40%", label: "Perf. Gains" },
                { value: "30%", label: "Faster Cycles" },
              ].map((stat) => (
                <div key={stat.label} className="glass-card p-3 text-center">
                  <div className="text-xl font-extrabold gradient-text">{stat.value}</div>
                  <div className="text-[10px] text-muted mt-0.5">{stat.label}</div>
                </div>
              ))}
            </motion.div>
          </div>

          {/* ── RIGHT: profile photo ── */}
          <motion.div
            className="order-1 lg:order-2 flex justify-center"
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            <ProfilePhoto />
          </motion.div>
        </div>

        {/* ── Tech stack ticker ── */}
        <motion.div
          {...fadeUp(0.5)}
          className="mt-16 w-full overflow-hidden"
        >
          <p className="text-xs text-subtle uppercase tracking-widest font-mono mb-3 text-center lg:text-left">
            Technologies I work with
          </p>
          <div className="overflow-hidden w-full">
            <div className="flex gap-3 animate-[ticker_30s_linear_infinite] whitespace-nowrap w-max">
              {[...TECH_STACK, ...TECH_STACK, ...TECH_STACK].map((tech, i) => (
                <span key={i} className="tag shrink-0">{tech}</span>
              ))}
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll cue */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.4 }}
        className="absolute bottom-6 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-subtle text-xs"
      >
        <span className="hidden sm:block">Scroll to explore</span>
        <motion.div
          animate={{ y: [0, 7, 0] }}
          transition={{ repeat: Infinity, duration: 1.6 }}
          className="w-[1px] h-7 bg-gradient-to-b from-accent to-transparent"
        />
      </motion.div>
    </section>
  );
};

export default Hero;
