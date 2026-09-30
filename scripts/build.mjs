import { cp, mkdir, readFile, rm, stat, writeFile } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(projectRoot, "dist");
const files = [
  "index.html",
  "creator-grid.png",
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
  await cp(path.join(projectRoot, file), path.join(outputDir, file));
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

if (/localhost|127\.0\.0\.1|file:\/\//i.test(html)) {
  throw new Error("Development-only URL found in production HTML.");
}

await writeFile(path.join(outputDir, "_redirects"), "/* /index.html 200\n", "utf8");
console.log(`Production site built in ${path.relative(projectRoot, outputDir)}/`);
