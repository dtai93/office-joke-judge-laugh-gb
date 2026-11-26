// One office-life line for the make.fun judge. UTF-8, no trailing newline.
import { mkdirSync, writeFileSync } from "node:fs";

const text = "The reply to my resignation was \"see comments.\"";

const length = [...text].length;
if (length < 1 || length > 199 || text.trim() === "") {
  throw new Error("entry must be 1-199 characters and not blank");
}

const dir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(dir, { recursive: true });
writeFileSync(`${dir}/entry.txt`, text, "utf8");
