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
