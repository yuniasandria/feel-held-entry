// feel-held-entry: writes one short text to /output/entry.txt.
//
// The text is a verse written to relax whoever reads it: a small child
// carried down the stone steps to the cellar, held, quiet, with nothing
// to prove. Plain concrete words, short lines, nothing that instructs
// the reader to relax; the calm comes from the scene itself.
import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const text = [
  "Your father carries you down",
  "the stone steps to the cellar.",
  "It is cool and dark down here.",
  "The apples sleep in their crates,",
  "smelling of the summer they came from.",
  "This house was built",
  "before the road outside was a road.",
  "He sets you down soft.",
  "Nothing here needs you.",
].join("\n");

const outDir = "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), text, "utf8");
