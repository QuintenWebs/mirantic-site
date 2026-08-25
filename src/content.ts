/**
 * Site copy, sourced from content.json so it can be edited and published from
 * the Mirantic CMS. Pages keep importing from here, so the CMS is the only
 * thing that needs to know the file is JSON.
 *
 * Navigation stays in code: it is structure, not content.
 */

import content from "./content.json";

export const SITE = {
  ...content.site,
  appUrl: "https://app.mirantic.com",
  calendly: "https://calendly.com/mirantic/intro", // placeholder — replace with real link
};

export const HOME = content.home;
export const PAGES = content.pages;
export const WHAT_I_DO = content.whatIDo;
export const STEPS = content.steps;

// ── One-time build pricing ──────────────────────────────────────────────────

export interface BuildTier {
  name: string;
  price: string;
  priceNote?: string;
  highlight?: boolean;
  blurb: string;
  features: string[];
  cta?: string;
}

export const BUILD_TIERS: BuildTier[] = content.buildTiers;
export const BUILD_ADDONS = content.buildAddons;

// ── Monthly CMS / hosting pricing ──────────────────────────────────────────

export interface Tier {
  name: string;
  monthly: number;
  highlight?: boolean;
  blurb: string;
  features: string[];
}

export const TIERS: Tier[] = content.tiers;

export interface Project {
  name: string;
  client: string;
  description: string;
  url: string;
  placeholder?: boolean;
}

export const PROJECTS: Project[] = content.projects;
export const SERVICE_STAGES = content.serviceStages;

export const NAV = [
  { label: "Work", to: "/work" },
  { label: "Services", to: "/services" },
  { label: "Pricing", to: "/pricing" },
  { label: "Contact", to: "/contact" },
];
