// Entry program for make.fun's "Post a GTA 6 meme on X" bounty (gta6-meme-x-01).
//
// The entry itself is the X post: an original GTA VI launch-day meme whose
// picture carries make.fun's ghost mascot, posted publicly by @lmyuunn34 with
// @makefunai, make.fun and the play code makefun-jade-icicle-parcel in its
// text. This repository hands the post in; all this program has to do is copy
// POST.json from the repository root into the output directory, where the
// gate reads it and the house reads the post itself from X.
//
// Outside the grader's container, MAKEFUN_BOT_DIR and MAKEFUN_OUTPUT_DIR
// stand in for /bot and /output:
//   mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts

import { copyFileSync, mkdirSync, readFileSync, statSync } from 'node:fs';
import { join } from 'node:path';

const BOT_DIR = process.env.MAKEFUN_BOT_DIR ?? '/bot';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

// The address shapes the house reads: x.com or twitter.com (a www. or mobile.
// host is fine), /<handle>/status/<id> or /i/web/status/<id>, digits only.
const POST_URL = /^https:\/\/(www\.|mobile\.)?(x|twitter)\.com\/([^/]+\/status|i\/web\/status)\/\d+$/;

// Read the post file first so a malformed one fails loudly here instead of
// surfacing as a gate refusal later.
const postPath = join(BOT_DIR, 'POST.json');
let post: { url?: unknown };
try {
  post = JSON.parse(readFileSync(postPath, 'utf8'));
} catch (err) {
  console.error(`POST.json at ${postPath} is not readable JSON: ${(err as Error).message}`);
  process.exit(1);
}

if (typeof post.url !== 'string' || !POST_URL.test(post.url)) {
  console.error(`POST.json does not name an X post: ${JSON.stringify(post)}`);
  process.exit(1);
}

mkdirSync(OUTPUT_DIR, { recursive: true });
const outPath = join(OUTPUT_DIR, 'POST.json');
copyFileSync(postPath, outPath);
console.log(`handed in the post: ${post.url} (${statSync(outPath).size} bytes copied)`);
