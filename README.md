# Flatapps

Marketing site for [flatapp.is](https://flatapp.is) — the family home for FlatNote, FlatFile, and Flat Voice.

The file is the truth. The app is a tool.

## Local

```bash
npm install
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

```bash
npm run build   # production build
npm run start   # serve the build
npm run lint
```

Requires Node 20+.

## Deploy on Vercel

1. Import this GitHub repository in Vercel. The Next.js preset is enough — no extra framework settings, env vars, or `vercel.json` are required.
2. Use the default build command (`next build`) and output directory.
3. Deploy a preview, then promote to production when the copy looks right.

## Domain (later)

Do not buy or change DNS from this repo.

When Kate is ready, add `flatapp.is` in the Vercel project under **Settings → Domains**. Vercel will show the exact DNS records (usually an A record to `76.76.21.21`, or nameservers). Point the domain only after that screen is up. Apex and `www` can both be attached if you want the www host to redirect.

Until the domain is attached, the site will live on the `*.vercel.app` URL Vercel assigns.

## What this is not

No Flat Cloud / account / workspace / database pitch. No live App Store URLs (placeholders only). No analytics.
