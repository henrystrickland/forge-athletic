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

export type ClassCard = { name: string; duration: string; intensity: string; description: string };

export type ClassesContent = {
  eyebrow: string;
  heading: string;
  classes: ClassCard[];
};

export const forgeClasses: ClassesContent = {
  eyebrow: "What we offer",
  heading: "Train with intention.",
  classes: [
    { name: "Barbell Foundations", duration: "60 min", intensity: "All levels", description: "Master the core lifts with coached technique and progressive loading." },
    { name: "Conditioning", duration: "45 min", intensity: "High", description: "Engine-building intervals that blend strength and cardio into one session." },
    { name: "Mobility & Recovery", duration: "50 min", intensity: "Low", description: "Restorative work to keep joints healthy and movement pain-free." },
    { name: "Open Strength", duration: "90 min", intensity: "Self-paced", description: "Coached open-gym time to run your own program with expert eyes nearby." },
  ],
};
