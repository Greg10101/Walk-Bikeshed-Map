const SITE = {

  // ── Identity ──
  name: "What's the Walkshed?",
  logoText: "What's the ",       // plain portion of logo
  logoAccent: "Walkshed?",       // accent-colored portion of logo
  tagline: "Transit Walkshed Explorer",
  description: "Explore the real pedestrian catchment area around transit stops — not just a radius.",

  // ── Base path ──
  // Use "/" for local development, "/Walk-Bikeshed-Map/" for GitHub Pages
  basePath: "/Walk-Bikeshed-Map/",

  // ── Contact ──
  contactEmail: "",              // e.g. "hello@example.com"

  // ── Support / donation ──
  supportUrl: "",                // e.g. "https://ko-fi.com/yourname"
  supportLabel: "Support on Ko-fi", // button label

  // ── Social / external links ──
  githubUrl: "https://github.com/yourusername/Walk-Bikeshed-Map",

  // ── Navigation ──
  // Order here controls order in the nav bar
  nav: [
    { label: "Home",        path: "index.html"       },
    { label: "About",       path: "about.html"       },
    { label: "Methodology", path: "methodology.html" },
    { label: "Contact",     path: "contact.html"     },
    { label: "Support Us",  path: "support.html"     },
  ],

  // ── Colours — keep in sync with CSS :root tokens ──
  colors: {
    bg:      "#f5f2eb",
    ink:     "#1a1a18",
    accent:  "#e8500a",
    muted:   "#7a7a72",
    border:  "#dedad2",
  },

  // ── Dev mode ──
  // Pages listed here will show the development warning modal on load
  devPages: ["contact.html", "support.html", "about.html"],

};