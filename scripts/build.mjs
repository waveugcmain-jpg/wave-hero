import { cp, mkdir, readFile, rm, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(projectRoot, "dist");
const files = [
  "_headers",
  "assets/creator-posts",
  "index.html",
  "creator-network.css",
  "creator-network.js",
  "creator-network.jpg",
  "creator-army.jpg",
  "creator-grid.png",
  "cta-portraits.png",
  "footer-waves.png",
  "founder-sunset.png",
  "wave-background.png",
  "wave-card-3.jpg",
  "wave-card-4.jpg",
];

if (path.dirname(outputDir) !== projectRoot || path.basename(outputDir) !== "dist") {
  throw new Error("Refusing to build outside the project dist directory.");
}

await rm(outputDir, { recursive: true, force: true });
await mkdir(path.join(outputDir, "assets", "fonts"), { recursive: true });

for (const file of files) {
  await stat(path.join(projectRoot, file));
  await cp(path.join(projectRoot, file), path.join(outputDir, file), { recursive: true });
}

for (const font of ["dm-sans-latin.woff2", "manrope-latin.woff2", "OFL.txt"]) {
  await stat(path.join(projectRoot, "assets", "fonts", font));
  await cp(
    path.join(projectRoot, "assets", "fonts", font),
    path.join(outputDir, "assets", "fonts", font),
  );
}

const html = await readFile(path.join(outputDir, "index.html"), "utf8");
const localReferences = [
  "creator-network.css",
  "creator-network.js",
  "footer-waves.png",
  "founder-sunset.png",
  "cta-portraits.png",
  "creator-grid.png",
  "wave-background.png",
  "wave-card-3.jpg",
  "wave-card-4.jpg",
  "assets/fonts/dm-sans-latin.woff2",
  "assets/fonts/manrope-latin.woff2",
];

for (const reference of localReferences) {
  if (!html.includes(reference)) throw new Error(`Missing expected HTML reference: ${reference}`);
  await stat(path.join(outputDir, reference));
}

for (const name of ['creator-post-philips','creator-post-zepto','creator-post-aqualogica','creator-post-tier-list','creator-post-plix','creator-post-forest']) {
  await stat(path.join(outputDir, 'assets', 'creator-posts', name + '.webp'));
}

if (/localhost|127\.0\.0\.1|file:\/\//i.test(html)) {
  throw new Error("Development-only URL found in production HTML.");
}

// Pages serves existing assets directly and falls back to index.html when there
// is no top-level 404.html. A /* rewrite would also match CSS, JS and images.
console.log(`Production site built in ${path.relative(projectRoot, outputDir)}/`);
