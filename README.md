# Mirantic — marketing site

The site for [mirantic.com](https://mirantic.com). React + Vite + Tailwind, static, deployed on Vercel from `main`.

```bash
npm install
npm run dev      # local dev server
npm run build    # production build to dist
```

## Content

Copy lives in `src/content.json` and is edited through the [Mirantic CMS](https://app.mirantic.com), which this site also advertises. Elements carry `data-cms-field`; `public/cms-bridge.js` connects the page to the editor. The contact form uses Web3Forms (`VITE_WEB3FORMS_ACCESS_KEY`, see `.env.example`).
