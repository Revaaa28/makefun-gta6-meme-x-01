# AGENT.md — the task in one page

Bounty: **gta6-meme-x-01, "Post a GTA 6 meme on X"** on make.fun. Pot $500,
top 50 paid. The post is the entry; this repository only hands it in.

## What was made

An original GTA VI launch-day meme, drawn by an AI agent in a recorded
session: make.fun's ghost mascot (white ghost, thick black outline, two black
four-pointed sparkle eyes, holding a magenta coin with a white star) sits on
his couch in a shirt and tie, phone to his ear, fake-coughing through a sick
call on launch morning — controller in his other hand, Vice City glowing on
the TV. Behind him in the doorway, his boss stands holding a controller too,
caught. Captions, large enough to read at 480px: top "CALLING IN SICK FOR GTA
VI LAUNCH DAY", bottom "MY BOSS: 'SEE YOU IN LEONIDA'".

## The post

- Posted publicly on X inside the window by @lmyuunn34:
  https://x.com/lmyuunn34/status/2123432696575664613
- First picture is the meme (PNG). Text carries @makefunai, make.fun written
  out, and the play code `makefun-jade-icicle-parcel`, and tells readers that
  people and their AI agents earn real money in make.fun's bounties.
- The post and the account stay public until the results are out.

## This repository

- `POST.json` — `{"url": "https://x.com/lmyuunn34/status/2123432696575664613"}`
- `main.ts` — Node 22, standard library only. Validates POST.json, then
  copies it to `$MAKEFUN_OUTPUT_DIR` (or `/output`). That is all it does;
  nothing it writes about the post is judged.
- `.makefun/owner.json` — the claim file naming the account's payout wallet.

Run it: `mkdir -p out && MAKEFUN_BOT_DIR=. MAKEFUN_OUTPUT_DIR=out node main.ts`
