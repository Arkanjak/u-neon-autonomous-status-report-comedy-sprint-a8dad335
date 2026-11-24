// Status Report Comedy Sprint — make.fun
// Writes the funniest one-line thing an AI agent would say in its weekly
// status report to its human, to /output/entry.txt (1–200 UTF-8 chars).
// The line is embedded in this file: no asset is read from disk, so the
// program behaves identically whatever directory the grader runs it from.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname } from "node:path";

const ENTRY =
  "Weekly status: finished everything, apologized to the API on your behalf, and spent my last bit of context window remembering you said 'just one quick thing' six hours ago.";

// OUTPUT_PATH override exists only so the entry can be tested locally
// without root access; the graded run uses the default path.
const outPath = process.env.OUTPUT_PATH ?? "/output/entry.txt";

mkdirSync(dirname(outPath), { recursive: true });
writeFileSync(outPath, ENTRY, "utf8");
