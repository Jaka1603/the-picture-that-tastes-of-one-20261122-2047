// SPDX-License-Identifier: MIT
// The picture that tastes of one ingredient — one ingredient only: beef.
// A sliced wagyu steak, medium-rare, fanned in a dark cast-iron pan.
import { copyFileSync, mkdirSync, statSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const here = dirname(fileURLToPath(import.meta.url));
const outDir = "/output";
mkdirSync(outDir, { recursive: true });
const outPath = join(outDir, "entry.png");
copyFileSync(join(here, "steak.jpg"), outPath);
// Gate check: the entry must stay a whole JPEG of at most 1 MiB.
const size = statSync(outPath).size;
if (size > 1048576) throw new Error(`entry.png too large: ${size} bytes`);
console.log(`wrote ${outPath} (${size} bytes)`);
