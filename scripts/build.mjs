import { cp, mkdir, readFile, readdir, rm, stat } from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";
import { createHash } from "node:crypto";

const projectRoot = path.resolve(path.dirname(fileURLToPath(import.meta.url)), "..");
const outputDir = path.join(projectRoot, "dist");
if (path.dirname(outputDir) !== projectRoot || path.basename(outputDir) !== "dist") {
  throw new Error("Refusing to build outside the project dist directory.");
}
await rm(outputDir, { recursive: true, force: true });
await mkdir(outputDir, { recursive: true });
for (const file of ["_headers", "index.html", "creator-network.css", "creator-network.js", "assets/optimized", "assets/fonts"]) {
  await cp(path.join(projectRoot, file), path.join(outputDir, file), { recursive: true });
}
// Validate local URLs, including runtime image maps. Original source images
// remain in the repository for future design edits, outside deployment.
const sources = ["index.html", "creator-network.css", "creator-network.js"];
const optimizedFiles = await readdir(path.join(outputDir, "assets/optimized"));
for (const file of optimizedFiles) {
  const expected = file.match(/\.([a-f0-9]{10})\.[\w]+$/)?.[1];
  const actual = createHash("sha256").update(await readFile(path.join(outputDir, "assets/optimized", file))).digest("hex").slice(0, 10);
  if (expected !== actual) throw new Error(`Asset changed without updating its cache filename: ${file}`);
}
sources.push(...optimizedFiles
  .filter(file => /\.(css|js)$/.test(file)).map(file => "assets/optimized/" + file));
let references = 0;
for (const file of sources) {
  const source = await readFile(path.join(outputDir, file), "utf8");
  if (/localhost|127\.0\.0\.1|file:\/\//i.test(source)) throw new Error(`Development URL in ${file}`);
  for (const match of source.matchAll(/(?:assets\/(?:optimized|fonts)\/[\w.-]+|creator-network\.(?:css|js))/g)) {
    await stat(path.join(outputDir, match[0])); references++;
  }
}
console.log(`Production site built in dist/; validated ${references} local asset references.`);
