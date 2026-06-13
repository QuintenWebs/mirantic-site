# mirantic.com — marketing site

The marketing site for Mirantic, a web-design service for small businesses.
Static React + Vite + TypeScript + Tailwind. No backend.

Deployed at **mirantic.com** (Vercel), separate project from the CMS app at
`app.mirantic.com`.

## Develop

```bash
npm install
npm run dev      # http://localhost:5174
```

## Build

```bash
npm run build    # type-checks then builds to dist/
npm run preview
```

## Content

All copy lives in [`src/content.ts`](./src/content.ts) — edit there. Portfolio
projects are marked `placeholder: true` until real work is added.

## Contact form

The form posts to [Web3Forms](https://web3forms.com) (free, no backend). Create
an access key and set it as `VITE_WEB3FORMS_ACCESS_KEY` (locally in `.env.local`,
in production in the Vercel project's env vars). Without a key, the form falls
back to opening the visitor's email client to `hello@mirantic.com`.

Update the placeholder Calendly link and contact email in `src/content.ts`.

## Deploy (Vercel)

Import the repo as a new Vercel project, framework **Vite**, then add the
`mirantic.com` domain. Set `VITE_WEB3FORMS_ACCESS_KEY` in env vars. Point DNS
at Vercel via Cloudflare (see the go-live checklist).
