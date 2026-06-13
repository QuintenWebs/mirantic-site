/**
 * All site copy lives here so pages stay clean and content is easy to tweak.
 * (Hardcoded for now — no CMS, per the brief.)
 */

export const SITE = {
  name: "Mirantic",
  tagline: "Websites that represent who you are.",
  appUrl: "https://app.mirantic.com",
  contactEmail: "hello@mirantic.com",
  calendly: "https://calendly.com/mirantic/intro", // placeholder — replace with real link
  location: "the Netherlands",
};

export const WHAT_I_DO = [
  {
    title: "I understand your brand first",
    body: "Before anything is designed, I learn how your brand communicates and who you're speaking to. The site follows from that — not the other way around.",
  },
  {
    title: "Fast, modern, clean code",
    body: "Every site is built to be quick, reliable, and easy to maintain. No bloated templates, no page-builder clutter.",
  },
  {
    title: "You manage it yourself",
    body: "After delivery you edit your own text and images through a simple editor — no developer needed for everyday changes.",
  },
  {
    title: "I stay available",
    body: "For anything beyond content edits, I'm here. You're never left figuring it out alone.",
  },
];

export const STEPS = [
  {
    n: "01",
    title: "Discovery call",
    body: "We talk through your business, your audience, and what the site needs to do.",
  },
  {
    n: "02",
    title: "I design and build",
    body: "I translate your brand into a fast, custom website — and keep you in the loop as it takes shape.",
  },
  {
    n: "03",
    title: "You get your editor",
    body: "On handover I show you your CMS. Changing text and images takes minutes, not a support ticket.",
  },
  {
    n: "04",
    title: "You run it, I support",
    body: "You manage day-to-day content. I'm available for everything beyond that.",
  },
];

export interface Tier {
  name: string;
  monthly: number;
  highlight?: boolean;
  blurb: string;
  features: string[];
}

export const TIERS: Tier[] = [
  {
    name: "Starter",
    monthly: 29,
    blurb: "A clean, custom site you manage yourself.",
    features: ["Custom website", "CMS access", "Hosting included"],
  },
  {
    name: "Standard",
    monthly: 49,
    highlight: true,
    blurb: "More room to grow, with a blog and monthly changes.",
    features: [
      "Everything in Starter",
      "Blog",
      "1 hour of changes per month",
    ],
  },
  {
    name: "Pro",
    monthly: 89,
    blurb: "Direct access to me for anything beyond content edits.",
    features: [
      "Everything in Standard",
      "Priority support — direct line to me",
      "Email domain management",
      "Event management on your site",
    ],
  },
];

export interface Project {
  name: string;
  client: string;
  description: string;
  url: string;
  placeholder?: boolean;
}

export const PROJECTS: Project[] = [
  {
    name: "Atelier Noord",
    client: "Furniture maker · Rotterdam",
    description: "A quiet, gallery-style site letting the craft speak for itself.",
    url: "#",
    placeholder: true,
  },
  {
    name: "Bloom & Stem",
    client: "Florist · Utrecht",
    description: "A warm storefront with seasonal collections the owner updates herself.",
    url: "#",
    placeholder: true,
  },
  {
    name: "Northpeak Coaching",
    client: "Business coach · Amsterdam",
    description: "A focused one-page site built to turn visitors into booked calls.",
    url: "#",
    placeholder: true,
  },
  {
    name: "Vetterij De Linde",
    client: "Veterinary practice · Eindhoven",
    description: "Clear service info, easy appointment links, and a calm visual tone.",
    url: "#",
    placeholder: true,
  },
  {
    name: "Studio Vlam",
    client: "Ceramics studio · Den Haag",
    description: "A portfolio and workshop sign-up the studio manages end to end.",
    url: "#",
    placeholder: true,
  },
  {
    name: "Koers Financieel",
    client: "Independent advisor · Groningen",
    description: "A trustworthy, no-nonsense site with self-managed content.",
    url: "#",
    placeholder: true,
  },
];

export const SERVICE_STAGES = [
  {
    title: "Discovery & brand understanding",
    body: "We start with a conversation, not a template. I want to understand what your business does, who it's for, and how it should feel. I look at how your brand already communicates and where a website can do more. You come away with a clear picture of what we're building and why.",
  },
  {
    title: "Design",
    body: "I design from first principles around your content and your audience — layout, typography, and tone that fit you specifically. You see the direction early and we refine together. Nothing decorative for its own sake; every choice earns its place.",
  },
  {
    title: "Development & delivery",
    body: "I build the site with clean, modern code — fast to load, reliable, and responsive on every screen. No bloated page builders. When it's ready, it's genuinely ready: tested, polished, and live on your domain.",
  },
  {
    title: "CMS handover & training",
    body: "On delivery I walk you through your editor. You'll be able to change text and swap images on your own in minutes — click the thing you want to change, edit it, publish. I make sure you're comfortable before we wrap.",
  },
  {
    title: "Ongoing support",
    body: "Content edits are always yours to make. Beyond that, support depends on your tier: Starter and Standard cover the site and hosting (Standard adds an hour of changes a month), while Pro gives you a direct line to me for anything more — new sections, integrations, or just advice.",
  },
];

export const NAV = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/#pricing" },
  { label: "Contact", to: "/contact" },
];
