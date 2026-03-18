[日本語版はこちら](./README-JA.md)

# NuxtEdge

NuxtEdge is a starter project for building a full-stack Nuxt app with useful features already wired in. If you are new to the repo, the goal is simple: run it locally, open the demo pages, and then start editing from a few obvious files.

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/rafazafar/nuxt-serverless-template)

## What This Template Gives You

- A Nuxt 4 app you can run right away
- Demo pages for database, blob storage, KV, cache, email, i18n, and AI workflow
- English and Japanese locales
- Cloudflare-ready deployment defaults
- A homepage that links to the main demos

## Quick Start

### Start Here

1. Install dependencies:

```bash
pnpm install
```

2. Start the app:

```bash
pnpm dev
```

3. Open `http://localhost:3000`

4. Click through the demo pages from the homepage

## What To Open In The Browser

| Page | Why open it first |
|---|---|
| `/` | See the homepage and the main feature cards |
| `/docs/db` | Try the database demo by creating and editing messages |
| `/docs/blob` | Try uploading and deleting images |
| `/docs/kv` | See how redirect rules are stored and edited |
| `/docs/cache` | See a simple cache demo with repeat requests |
| `/docs/email` | Read the email setup guide |
| `/docs/i18n` | See how English and Japanese content is organized |
| `/docs/agents` | See how the repo is set up for Codex/AI-assisted work |

## What Each Demo Page Shows

| Route | What it teaches |
|---|---|
| `/docs/db` | A basic database-backed CRUD flow |
| `/docs/blob` | File upload, list, and delete behavior |
| `/docs/kv` | Key-value storage through redirect rules |
| `/docs/cache` | Cached responses and repeat fetch behavior |
| `/docs/email` | Where email config lives and what to update |
| `/docs/i18n` | Which locale files to edit for translations |
| `/docs/agents` | How to work with the repo using Codex skills |

## Files You Will Edit First

| File / folder | Why you will likely edit it |
|---|---|
| [`app/pages/index.vue`](/Users/rafazafar/dev/nuxt-serverless-template/app/pages/index.vue) | Change the homepage content and feature cards |
| [`app/pages/docs/`](/Users/rafazafar/dev/nuxt-serverless-template/app/pages/docs) | Update or extend the example docs/demo pages |
| [`i18n/locales/en.json`](/Users/rafazafar/dev/nuxt-serverless-template/i18n/locales/en.json) | Edit English text |
| [`i18n/locales/ja.json`](/Users/rafazafar/dev/nuxt-serverless-template/i18n/locales/ja.json) | Edit Japanese text |
| [`nuxt.config.ts`](/Users/rafazafar/dev/nuxt-serverless-template/nuxt.config.ts) | Update app-level settings like locales, email config, and modules |

## Useful Commands

| Command | What it does |
|---|---|
| `pnpm dev` | Start the local dev server |
| `pnpm build` | Build the app |
| `pnpm typecheck` | Check TypeScript/Nuxt types |
| `pnpm test` | Run tests |
| `pnpm test:unit` | Run unit tests only |
| `pnpm test:nuxt` | Run Nuxt tests only |
| `pnpm deploy-cloudflare` | Build and deploy to Cloudflare |
| `pnpm deploy-vercel` | Deploy with Vercel CLI |

## Simple Deployment Overview

- For Cloudflare, use `pnpm deploy-cloudflare`
- For Vercel, use `pnpm deploy-vercel`
- Before deploying email features, replace the example SMTP values in [`nuxt.config.ts`](/Users/rafazafar/dev/nuxt-serverless-template/nuxt.config.ts)
- If you are just getting started, focus on local development first and deploy after the demos make sense

## Short Technical Overview

### Main Features

| Feature | Included |
|---|---|
| Database demo | Yes |
| Blob/file upload demo | Yes |
| KV demo | Yes |
| Cache demo | Yes |
| Email guide | Yes |
| i18n | English + Japanese |

### Main Folders

| Folder | Purpose |
|---|---|
| [`app/pages/`](/Users/rafazafar/dev/nuxt-serverless-template/app/pages) | Routes and pages |
| [`app/pages/docs/`](/Users/rafazafar/dev/nuxt-serverless-template/app/pages/docs) | Demo/documentation pages |
| [`server/api/`](/Users/rafazafar/dev/nuxt-serverless-template/server/api) | API routes used by the demos |
| [`server/db/`](/Users/rafazafar/dev/nuxt-serverless-template/server/db) | Database schema and migrations |
| [`i18n/locales/`](/Users/rafazafar/dev/nuxt-serverless-template/i18n/locales) | Translation files |

### Main Tools

| Area | Tool |
|---|---|
| App framework | Nuxt 4 |
| UI | Nuxt UI |
| Storage features | NuxtHub |
| Email | `nuxt-nodemailer` |
| SEO | `@nuxtjs/seo` |
| Testing | Vitest |
