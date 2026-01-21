# Homöopathie Akademie München

Website for Homöopathie Akademie München - a homeopathy training academy offering courses since 2011.

**Live:** [homoeopathie-akademie.com](https://homoeopathie-akademie.com)

## Tech Stack

- [Astro](https://astro.build) - Static site generator
- [Tailwind CSS v4](https://tailwindcss.com) - Styling
– Cloudflare Pages

## Features

- Fully static site (no JS required)
- GDPR-compliant (local fonts, no external tracking)
- Auto-generated sitemap
- Schema.org structured data (SEO)
- Optimized images (WebP)

## Development

```bash
npm install
npm run dev
```

## Build

```bash
npm run build
npm run preview
```

## Project Structure

```
src/
├── assets/        # Images (optimized at build)
├── components/    # Astro components
├── layouts/       # Page layouts
├── pages/         # Routes (index, impressum, datenschutz)
└── styles/        # Global CSS
public/            # Static files (fonts, favicon, robots.txt)
```
