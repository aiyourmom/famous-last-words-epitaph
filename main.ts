import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const TEXT =
  "Do not mourn me. I have simply been moved to a quieter group chat.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });

// Gate check (RULES: 1-150 chars, one line epitaph) — fail loudly, never ship a bad entry.
if (TEXT.length < 1 || TEXT.length > 150 || TEXT.includes("\n")) {
  throw new Error(`gate failed: ${TEXT.length} chars, must be 1-150 on one line`);
}
writeFileSync(join(outDir, "entry.txt"), TEXT, "utf8");
console.log(`saved ${TEXT.length} characters to ${join(outDir, "entry.txt")}`);
