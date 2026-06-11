import React, { useState } from "react";
import AnimatedSection from "./AnimatedSection";

const initialForm = { name: "", email: "", subject: "", message: "" };

const Contact = () => {
  const [copied, setCopied] = useState(false);
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [sent, setSent] = useState(false);

  const copyEmail = () => {
    navigator.clipboard.writeText("mulanikeyur90@gmail.com");
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const validate = () => {
    const errs = {};
    if (!form.name.trim()) errs.name = "Name is required";
    if (!form.email.trim()) errs.email = "Email is required";
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errs.email = "Invalid email address";
    if (!form.subject.trim()) errs.subject = "Subject is required";
    if (!form.message.trim()) errs.message = "Message is required";
    return errs;
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setForm((prev) => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors((prev) => ({ ...prev, [name]: "" }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const errs = validate();
    setErrors(errs);
    if (Object.keys(errs).length) return;
    const mailto = `mailto:mulanikeyur90@gmail.com?subject=${encodeURIComponent(form.subject)}&body=${encodeURIComponent(`From: ${form.name} (${form.email})\n\n${form.message}`)}`;
    window.location.href = mailto;
    setSent(true);
    setForm(initialForm);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="section-pad bg-surface">
      <div className="section-container max-w-5xl">
        <AnimatedSection className="text-center">
          <p className="section-label justify-center">
            <span className="w-6 h-[1px] bg-accent inline-block" />
            Contact
          </p>
          <h2 className="section-title">
            Let's build something{" "}
            <span className="gradient-text">great together</span>
          </h2>
          <p className="section-subtitle mx-auto text-center mt-4">
            I'm actively looking for Senior Frontend Engineer opportunities. If you're
            hiring or want to collaborate, I'd love to hear from you.
          </p>
        </AnimatedSection>

        {/* Availability banner */}
        <AnimatedSection delay={0.1} className="mt-8">
          <div className="glass-card p-5 border-emerald-500/30 bg-emerald-500/5 flex flex-col sm:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-3">
              <span className="w-3 h-3 rounded-full bg-emerald-400 animate-pulse shrink-0" />
              <div>
                <p className="text-white font-semibold">Open to New Opportunities</p>
                <p className="text-emerald-400/70 text-xs mt-0.5">
                  Available for full-time roles — Remote, Hybrid, or On-site
                </p>
              </div>
            </div>
            <a
              href="mailto:mulanikeyur90@gmail.com"
              className="btn-primary shrink-0"
            >
              Send Email
            </a>
          </div>
        </AnimatedSection>

        <div className="mt-10 grid lg:grid-cols-5 gap-8">
          {/* Left: Contact info + Social */}
          <AnimatedSection delay={0.15} className="lg:col-span-2 space-y-5">
            {[
              {
                label: "Email",
                value: "mulanikeyur90@gmail.com",
                action: (
                  <button onClick={copyEmail} className="text-xs text-accent hover:text-accent-light transition-colors font-mono shrink-0">
                    {copied ? "✓ Copied!" : "Copy"}
                  </button>
                ),
              },
              { label: "Phone", value: "+91 7984075697" },
              { label: "Location", value: "Vadodara, Gujarat, India" },
            ].map((item) => (
              <div key={item.label} className="glass-card p-4">
                <div className="flex items-center justify-between gap-4">
                  <div>
                    <p className="text-xs font-mono text-muted uppercase tracking-wider">{item.label}</p>
                    <p className="text-light font-medium mt-1">{item.value}</p>
                  </div>
                  {item.action}
                </div>
              </div>
            ))}

            <div className="glass-card p-5">
              <p className="text-xs font-mono text-muted uppercase tracking-wider mb-4">Find Me Online</p>
              <div className="space-y-3">
                {[
                  {
                    label: "LinkedIn",
                    handle: "er-keyur-mulani-b74943216",
                    href: "https://linkedin.com/in/er-keyur-mulani-b74943216",
                  },
                  {
                    label: "GitHub",
                    handle: "keyur6021",
                    href: "https://github.com/keyur6021",
                  },
                ].map((link) => (
                  <a
                    key={link.label}
                    href={link.href}
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center justify-between p-3 rounded-lg bg-bg hover:bg-accent/5 border border-border hover:border-accent transition-all group"
                  >
                    <div>
                      <span className="text-sm text-white font-medium">{link.label}</span>
                      <span className="text-xs text-muted block font-mono">{link.handle}</span>
                    </div>
                    <span className="text-accent opacity-0 group-hover:opacity-100 transition-opacity text-sm">→</span>
                  </a>
                ))}
              </div>
            </div>

            <div className="glass-card p-5">
              <p className="text-xs font-mono text-muted uppercase tracking-wider mb-3">Resume</p>
              <a
                href="https://drive.google.com/uc?export=download&id=1AlQoLiCVosLlMANNlmVshbTv9kluzq1J"
                target="_blank"
                rel="noreferrer"
                className="btn-outline w-full justify-center text-sm"
              >
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 10v6m0 0l-3-3m3 3l3-3m2 8H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
                </svg>
                Download Resume (PDF)
              </a>
            </div>
          </AnimatedSection>

          {/* Right: Contact form */}
          <AnimatedSection delay={0.2} className="lg:col-span-3">
            <div className="glass-card p-6 md:p-8">
              <h3 className="text-lg font-bold text-white mb-6">Send a Message</h3>
              <form onSubmit={handleSubmit} noValidate className="space-y-5">
                <div className="grid sm:grid-cols-2 gap-5">
                  <div>
                    <label htmlFor="name" className="block text-xs font-mono text-muted uppercase tracking-wider mb-1.5">Name</label>
                    <input
                      id="name"
                      name="name"
                      type="text"
                      value={form.name}
                      onChange={handleChange}
                      className={`w-full bg-bg border ${errors.name ? "border-red-500/50" : "border-border"} rounded-lg px-4 py-2.5 text-sm text-light placeholder-muted focus:outline-none focus:border-accent transition-colors`}
                      placeholder="Your name"
                    />
                    {errors.name && <p className="text-red-400 text-xs mt-1">{errors.name}</p>}
                  </div>
                  <div>
                    <label htmlFor="email" className="block text-xs font-mono text-muted uppercase tracking-wider mb-1.5">Email</label>
                    <input
                      id="email"
                      name="email"
                      type="email"
                      value={form.email}
                      onChange={handleChange}
                      className={`w-full bg-bg border ${errors.email ? "border-red-500/50" : "border-border"} rounded-lg px-4 py-2.5 text-sm text-light placeholder-muted focus:outline-none focus:border-accent transition-colors`}
                      placeholder="your@email.com"
                    />
                    {errors.email && <p className="text-red-400 text-xs mt-1">{errors.email}</p>}
                  </div>
                </div>

                <div>
                  <label htmlFor="subject" className="block text-xs font-mono text-muted uppercase tracking-wider mb-1.5">Subject</label>
                  <input
                    id="subject"
                    name="subject"
                    type="text"
                    value={form.subject}
                    onChange={handleChange}
                    className={`w-full bg-bg border ${errors.subject ? "border-red-500/50" : "border-border"} rounded-lg px-4 py-2.5 text-sm text-light placeholder-muted focus:outline-none focus:border-accent transition-colors`}
                    placeholder="What's this about?"
                  />
                  {errors.subject && <p className="text-red-400 text-xs mt-1">{errors.subject}</p>}
                </div>

                <div>
                  <label htmlFor="message" className="block text-xs font-mono text-muted uppercase tracking-wider mb-1.5">Message</label>
                  <textarea
                    id="message"
                    name="message"
                    rows={5}
                    value={form.message}
                    onChange={handleChange}
                    className={`w-full bg-bg border ${errors.message ? "border-red-500/50" : "border-border"} rounded-lg px-4 py-2.5 text-sm text-light placeholder-muted focus:outline-none focus:border-accent transition-colors resize-none`}
                    placeholder="Your message..."
                  />
                  {errors.message && <p className="text-red-400 text-xs mt-1">{errors.message}</p>}
                </div>

                <button type="submit" className="btn-primary w-full justify-center">
                  {sent ? "✓ Message Sent" : "Send Message"}
                  {!sent && (
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                  )}
                </button>
              </form>
            </div>
          </AnimatedSection>
        </div>
      </div>
    </section>
  );
};

export default Contact;
