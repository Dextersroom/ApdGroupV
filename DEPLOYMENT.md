# Deployment Guide

This project is a static Vite build — the production output in `dist/` can be hosted anywhere. Below are complete instructions for the most common options.

**Recommended: Vercel** (free, zero-config deployment, auto-deploys on every git push).

---

## 0. Prerequisites

- Node.js 18+ installed (`node --version`)
- A GitHub account
- Git installed (`git --version`)

Build locally once to confirm everything works:

```bash
npm install
npm run build
npm run preview   # opens the production build locally
```

---

## 1. Push to GitHub

From the project folder:

```bash
git init
git add .
git commit -m "Initial commit: portfolio"
git branch -M main

# Create an empty repo on github.com first (no README), then:
git remote add origin https://github.com/Dextersroom/portfolio.git
git push -u origin main
```

---

## 2. Deploy to Vercel (recommended)

**Option A — Dashboard (easiest):**

1. Go to https://vercel.com and sign in with GitHub.
2. Click **Add New → Project** and import your `portfolio` repo.
3. Vercel auto-detects Vite. Confirm:
   - **Build command:** `npm run build`
   - **Output directory:** `dist`
4. Click **Deploy**. Done — you get a live `*.vercel.app` URL in ~1 minute.

**Option B — CLI:**

```bash
npm i -g vercel
vercel            # follow prompts, accept the detected settings
vercel --prod     # promote to production
```

Every future `git push` to `main` auto-deploys.

---

## 3. Deploy to Netlify

**Option A — Dashboard:**

1. Go to https://app.netlify.com and sign in with GitHub.
2. **Add new site → Import an existing project → GitHub**, pick your repo.
3. Set:
   - **Build command:** `npm run build`
   - **Publish directory:** `dist`
4. Click **Deploy site**.

**Option B — CLI:**

```bash
npm i -g netlify-cli
netlify deploy               # draft deploy
netlify deploy --prod        # production deploy (publish dir: dist)
```

A `netlify.toml` is included so redirects work correctly:

```toml
[build]
  command = "npm run build"
  publish = "dist"
```

---

## 4. Deploy to GitHub Pages

GitHub Pages serves from a subpath, so set the Vite `base` first.

1. In `vite.config.js`, add `base` matching your repo name:

   ```js
   export default defineConfig({
     plugins: [react()],
     base: '/portfolio/',   // <-- your repo name, with slashes
   })
   ```

2. Install the helper and add scripts:

   ```bash
   npm i -D gh-pages
   ```

   In `package.json` add:

   ```json
   "scripts": {
     "predeploy": "npm run build",
     "deploy": "gh-pages -d dist"
   }
   ```

3. Deploy:

   ```bash
   npm run deploy
   ```

4. In your repo on GitHub: **Settings → Pages → Build and deployment → Source: `gh-pages` branch**. Your site appears at `https://dextersroom.github.io/portfolio/`.

> Note: if you deploy to Vercel/Netlify instead, remove the `base` line (or set it to `'/'`), since those serve from the root.

---

## 5. Custom domain (optional)

Both Vercel and Netlify let you add a custom domain under the project's **Domain settings**. Point your domain's DNS (an `A` record or `CNAME`) as instructed in their dashboard — they issue HTTPS automatically.

After setting a real domain, update these to match:
- `index.html` → `<link rel="canonical">` and the Open Graph URL
- `public/robots.txt` and `public/sitemap.xml` → the `Sitemap`/`loc` URLs

---

## 6. Post-deploy checklist

- [ ] Replace `public/resume.pdf` with your real résumé
- [ ] Add your Formspree ID in `src/components/sections/Contact.jsx`
- [ ] Swap the placeholder projects in `src/data/content.js` for real ones
- [ ] Add real testimonials when you have them
- [ ] Update canonical/OG/sitemap URLs to your real domain
- [ ] Test the live site on a phone
