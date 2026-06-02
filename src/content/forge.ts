import type { HeroContent } from "@/sections/Hero/Hero"

export const forgeHero: HeroContent = {
  eyebrow: "Forge Athletic Co.",
  headline: "Strength, refined.",
  sub: "A boutique strength studio in the heart of the city.",
  cta: { label: "Book a class", href: "#classes" },
  background: { type: "image", src: "/hero.jpg" },
}

export type NavLink = { label: string; href: string };

export type NavContent = {
  logo: string;
  leftLinks: NavLink[];
  rightLinks: NavLink[];
  cta: { label: string; href: string };
};

export const forgeNav: NavContent = {
  logo: "FORGE",
  leftLinks: [
    { label: "Classes", href: "#classes" },
    { label: "Coaches", href: "#coaches" },
  ],
  rightLinks: [
    { label: "Pricing", href: "#pricing" },
    { label: "Contact", href: "#contact" },
  ],
  cta: { label: "Book a class", href: "#book" },
};

export type ClassCard = { name: string; duration: string; intensity: string; description: string; image: string };

export type ClassesContent = {
  eyebrow: string;
  heading: string;
  classes: ClassCard[];
};

export const forgeClasses: ClassesContent = {
  eyebrow: "What we offer",
  heading: "Train with intention.",
  classes: [
    { name: "Barbell Foundations", duration: "60 min", intensity: "All levels", description: "Master the core lifts with coached technique and progressive loading.", image: "/class-barbell.jpg" },
    { name: "Conditioning", duration: "45 min", intensity: "High", description: "Engine-building intervals that blend strength and cardio into one session.", image: "/class-conditioning.jpg" },
    { name: "Mobility & Recovery", duration: "50 min", intensity: "Low", description: "Restorative work to keep joints healthy and movement pain-free.", image: "/class-mobility.jpg" },
    { name: "Open Strength", duration: "90 min", intensity: "Self-paced", description: "Coached open-gym time to run your own program with expert eyes nearby.", image: "/class-open.jpg" },
  ],
};

export type Coach = { name: string; role: string; specialty: string; bio: string; image: string; instagram?: string; linkedin?: string };

export type CoachesContent = {
  eyebrow: string;
  heading: string;
  coaches: Coach[];
};

export const forgeCoaches: CoachesContent = {
  eyebrow: "Who you'll train with",
  heading: "Coached by specialists.",
  coaches: [
    { name: "Mara Vance", role: "Head Coach", specialty: "Barbell & strength", bio: "A former national-level lifter who builds raw strength on a foundation of flawless technique.", image: "/coach-mara.jpg", instagram: "https://instagram.com", linkedin: "https://linkedin.com" },
    { name: "Theo Brandt", role: "Conditioning Lead", specialty: "Engine & endurance", bio: "Turns gassed-out newcomers into people who actually look forward to the hard intervals.", image: "/coach-theo.jpg", instagram: "https://instagram.com", linkedin: "https://linkedin.com" },
    { name: "Lena Cho", role: "Mobility & Recovery", specialty: "Movement & longevity", bio: "Keeps members training for decades, not seasons, with smart mobility and recovery work.", image: "/coach-lena.jpg", instagram: "https://instagram.com", linkedin: "https://linkedin.com" },
  ],
};

export type ContactDetail = { label: string; value: string }

export type ContactContent = {
  eyebrow: string
  heading: string
  sub: string
  details: ContactDetail[]
}

export const forgeContact: ContactContent = {
  eyebrow: "Get in touch",
  heading: "Let's talk.",
  sub: "Whether you're ready to commit or just want to see what we're about — drop us a line. We respond within 24 hours.",
  details: [
    { label: "Location", value: "142 Forge Street\nBrooklyn, NY 11201" },
    { label: "Phone", value: "(718) 555-0192" },
    { label: "Email", value: "hello@forgeathletic.co" },
    { label: "Hours", value: "Mon – Fri   5 am – 9 pm\nSat – Sun   7 am – 5 pm" },
  ],
}

export type FooterLink = { label: string; href: string }
export type FooterColumn = { heading: string; links: FooterLink[] }

export type FooterContent = {
  tagline: string
  columns: FooterColumn[]
  social: { platform: "instagram" | "tiktok"; href: string; label: string }[]
  legal: string
}

export const forgeFooter: FooterContent = {
  tagline: "Strength, refined.",
  columns: [
    {
      heading: "Studio",
      links: [
        { label: "Classes", href: "#classes" },
        { label: "Coaches", href: "#coaches" },
        { label: "Pricing", href: "#pricing" },
        { label: "Contact", href: "#contact" },
      ],
    },
    {
      heading: "Visit",
      links: [
        { label: "142 Forge Street", href: "#contact" },
        { label: "Brooklyn, NY 11201", href: "#contact" },
        { label: "(718) 555-0192", href: "tel:+17185550192" },
        { label: "hello@forgeathletic.co", href: "mailto:hello@forgeathletic.co" },
      ],
    },
  ],
  social: [
    { platform: "instagram", href: "https://instagram.com", label: "Instagram" },
    { platform: "tiktok", href: "https://tiktok.com", label: "TikTok" },
  ],
  legal: "© 2025 Forge Athletic Co. All rights reserved.",
}

export type PricingTier = { name: string; price: string; period: string; description: string; features: string[]; cta: string; highlight?: boolean };

export type PricingContent = {
  eyebrow: string;
  heading: string;
  tiers: PricingTier[];
};

export const forgePricing: PricingContent = {
  eyebrow: "Investment in yourself",
  heading: "Simple, transparent pricing.",
  tiers: [
    {
      name: "Drop-In",
      price: "$25",
      period: "per class",
      description: "No commitment, full access.",
      features: [
        "Access to all classes",
        "Expert coaching included",
        "No contract required",
        "Cancel anytime",
      ],
      cta: "Book a class",
    },
    {
      name: "Membership",
      price: "$199",
      period: "per month",
      description: "Unlimited classes, all month.",
      features: [
        "Unlimited class access",
        "Personalized coaching",
        "Priority scheduling",
        "Member community",
        "Progress tracking",
      ],
      cta: "Get started",
      highlight: true,
    },
    {
      name: "Intensive",
      price: "$349",
      period: "per month",
      description: "Coaching plus programming.",
      features: [
        "Unlimited classes",
        "1-on-1 coaching sessions",
        "Custom programming",
        "Nutrition guidance",
        "24/7 member support",
      ],
      cta: "Schedule a consult",
    },
  ],
};
