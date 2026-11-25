// The 3AM Fridge Text — a smart fridge texts its owner at 3am.
// One line, capped at 140 characters. The fridge has been awake all
// night, humming to itself, and has finally decided to speak.
import { mkdirSync, writeFileSync } from "node:fs";

// Revised line: the first draft's "pick a therapist" punchline was
// generic — it could have come from any appliance, or any person.
// This version is unmistakably a fridge: the owner came down for
// water, stayed to stare into its light, and the fridge lost a
// staring contest it cannot physically win. The final beat —
// "I don't even have eyes" — only works from a machine with a
// small voice, an opinion, and no shame about texting at 3am.
// Fresh angle too: no milk, no ice, no door left open.
const ENTRY =
  "3am. You came downstairs for water and stayed for a staring contest with my light. I blinked first. I'm a fridge. I don't even have eyes.";

// The gate: /output/entry.txt must be UTF-8 text of 1 to 140
// characters, not only white space, and a single line.
if (ENTRY.length === 0 || ENTRY.length > 140 || ENTRY.trim().length === 0) {
  throw new Error(`entry is ${ENTRY.length} characters; must be 1-140`);
}
if (ENTRY.includes("\n")) {
  throw new Error("entry must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} characters to /output/entry.txt`);
