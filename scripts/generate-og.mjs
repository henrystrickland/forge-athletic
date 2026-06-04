import { Resvg } from "@resvg/resvg-js";
import { writeFileSync } from "fs";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const __dirname = dirname(fileURLToPath(import.meta.url));

const W = 1200;
const H = 630;

const svg = `
<svg xmlns="http://www.w3.org/2000/svg" width="${W}" height="${H}" viewBox="0 0 ${W} ${H}">
  <defs>
    <!-- Very subtle radial glow so it's not flat black -->
    <radialGradient id="bg" cx="50%" cy="50%" r="65%">
      <stop offset="0%" stop-color="#1a1714"/>
      <stop offset="100%" stop-color="#080808"/>
    </radialGradient>

    <!-- Thin horizontal rule gradient -->
    <linearGradient id="line" x1="0" y1="0" x2="1" y2="0">
      <stop offset="0%"   stop-color="#ffffff" stop-opacity="0"/>
      <stop offset="30%"  stop-color="#ffffff" stop-opacity="0.25"/>
      <stop offset="70%"  stop-color="#ffffff" stop-opacity="0.25"/>
      <stop offset="100%" stop-color="#ffffff" stop-opacity="0"/>
    </linearGradient>
  </defs>

  <!-- Background -->
  <rect width="${W}" height="${H}" fill="url(#bg)"/>

  <!-- Eyebrow label -->
  <text
    x="${W / 2}" y="258"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="13"
    font-weight="400"
    letter-spacing="8"
    text-anchor="middle"
    fill="rgba(255,255,255,0.35)"
  >FORGE ATHLETIC CO.</text>

  <!-- Thin rule above the wordmark -->
  <rect x="440" y="278" width="320" height="0.75" fill="url(#line)"/>

  <!-- Main wordmark -->
  <text
    x="${W / 2}" y="375"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="128"
    font-weight="300"
    letter-spacing="28"
    text-anchor="middle"
    fill="#ffffff"
  >FORGE</text>

  <!-- Thin rule below the wordmark -->
  <rect x="440" y="395" width="320" height="0.75" fill="url(#line)"/>

  <!-- Tagline -->
  <text
    x="${W / 2}" y="428"
    font-family="Georgia, 'Times New Roman', serif"
    font-size="13"
    font-weight="400"
    letter-spacing="6"
    text-anchor="middle"
    fill="rgba(255,255,255,0.3)"
  >STRENGTH, REFINED.</text>
</svg>
`.trim();

const resvg = new Resvg(svg, { fitTo: { mode: "width", value: W } });
const png = resvg.render().asPng();

const out = join(__dirname, "../public/og.png");
writeFileSync(out, png);
console.log(`✓ OG image written → public/og.png  (${W}×${H})`);
