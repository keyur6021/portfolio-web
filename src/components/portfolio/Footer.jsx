import React from "react";

const Footer = () => (
  <footer className="bg-bg border-t border-border py-8">
    <div className="section-container flex flex-col sm:flex-row items-center justify-between gap-4 text-sm text-muted">
      <p>
        <span className="text-accent font-mono font-bold">{"<KM />"}</span>
        {" "}© {new Date().getFullYear()} Keyur Mulani. Designed & built with React + Tailwind.
      </p>
      <p className="font-mono text-xs">
        Open to opportunities · Vadodara, India
      </p>
    </div>
  </footer>
);

export default Footer;
