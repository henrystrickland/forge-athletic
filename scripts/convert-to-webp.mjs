import sharp from "sharp";
import { readdirSync, existsSync } from "fs";
import { join, extname, basename, dirname } from "path";
import { fileURLToPath } from "url";

const __dirname = dirname(fileURLToPath(import.meta.url));
const publicDir = join(__dirname, "../public");

const jpgs = readdirSync(publicDir).filter((f) => /\.(jpg|jpeg)$/i.test(f));

for (const file of jpgs) {
  const src = join(publicDir, file);
  const out = join(publicDir, basename(file, extname(file)) + ".webp");
  const { size: before } = (await import("fs")).statSync(src);
  await sharp(src).webp({ quality: 82 }).toFile(out);
  const { size: after } = (await import("fs")).statSync(out);
  const pct = Math.round((1 - after / before) * 100);
  console.log(`${file} → ${basename(out)}  ${(before/1024).toFixed(0)}K → ${(after/1024).toFixed(0)}K  (−${pct}%)`);
}
