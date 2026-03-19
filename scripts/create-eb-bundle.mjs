import { cpSync, existsSync, mkdirSync, readdirSync, rmSync, writeFileSync } from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);
const projectRoot = path.resolve(__dirname, "..");

const bundleRoot = path.join(projectRoot, "build", "elastic-beanstalk-bundle");
const standaloneRoot = path.join(projectRoot, ".next", "standalone");
const nextStaticRoot = path.join(projectRoot, ".next", "static");
const publicRoot = path.join(projectRoot, "public");
const ebExtensionsRoot = path.join(projectRoot, ".ebextensions");
const platformRoot = path.join(projectRoot, ".platform");

if (!existsSync(standaloneRoot)) {
  throw new Error(
    "Missing .next/standalone. Run `pnpm build` on a Linux CI runner before packaging for Elastic Beanstalk.",
  );
}

if (!existsSync(nextStaticRoot)) {
  throw new Error("Missing .next/static. Run `pnpm build` before packaging for Elastic Beanstalk.");
}

rmSync(bundleRoot, { recursive: true, force: true });
mkdirSync(bundleRoot, { recursive: true });

for (const entry of readdirSync(standaloneRoot)) {
  cpSync(path.join(standaloneRoot, entry), path.join(bundleRoot, entry), { recursive: true });
}

mkdirSync(path.join(bundleRoot, ".next"), { recursive: true });
cpSync(nextStaticRoot, path.join(bundleRoot, ".next", "static"), { recursive: true });

if (existsSync(publicRoot)) {
  cpSync(publicRoot, path.join(bundleRoot, "public"), { recursive: true });
}

if (existsSync(ebExtensionsRoot)) {
  cpSync(ebExtensionsRoot, path.join(bundleRoot, ".ebextensions"), { recursive: true });
}

if (existsSync(platformRoot)) {
  cpSync(platformRoot, path.join(bundleRoot, ".platform"), { recursive: true });
}

writeFileSync(path.join(bundleRoot, "Procfile"), "web: node server.js\n", "utf8");

console.log(`Elastic Beanstalk bundle prepared at ${bundleRoot}`);
