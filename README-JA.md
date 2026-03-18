# NuxtEdge

NuxtEdge は、便利な機能が最初から入った Nuxt アプリのスタータープロジェクトです。まずはローカルで起動して、デモページを開いて、分かりやすいファイルから少しずつ編集を始めることを想定しています。

[![Deploy to Cloudflare](https://deploy.workers.cloudflare.com/button)](https://deploy.workers.cloudflare.com/?url=https://github.com/rafazafar/nuxt-serverless-template)

## このテンプレートでできること

- すぐに起動できる Nuxt 4 アプリ
- Database、Blob、KV、Cache、Email、i18n、AI workflow のデモページ
- 英語と日本語のロケール
- Cloudflare 向けのデフォルト設定
- 主要デモへ移動しやすいホームページ

## クイックスタート

### ここから始める

1. 依存関係をインストールします

```bash
pnpm install
```

2. アプリを起動します

```bash
pnpm dev
```

3. `http://localhost:3000` を開きます

4. ホームページから各デモページを順番に見ます

## 最初にブラウザで開くページ

| ページ | 最初に見る理由 |
|---|---|
| `/` | ホームページと主要機能カードを確認できます |
| `/docs/db` | データベースの追加・編集デモを試せます |
| `/docs/blob` | 画像のアップロードと削除を試せます |
| `/docs/kv` | リダイレクトルールの保存方法を見られます |
| `/docs/cache` | シンプルなキャッシュ動作を確認できます |
| `/docs/email` | メール設定の場所を確認できます |
| `/docs/i18n` | 英語と日本語の管理方法を確認できます |
| `/docs/agents` | Codex / AI 補助の使い方を確認できます |

## 各デモページで分かること

| Route | 学べること |
|---|---|
| `/docs/db` | データベースを使った基本的な CRUD |
| `/docs/blob` | ファイルのアップロード、一覧、削除 |
| `/docs/kv` | KV を使ったキー・バリュー管理 |
| `/docs/cache` | キャッシュされたレスポンスの動き |
| `/docs/email` | メール設定をどこで変更するか |
| `/docs/i18n` | 翻訳ファイルをどこで編集するか |
| `/docs/agents` | Codex skills を使った作業の進め方 |

## 最初に編集しやすいファイル

| ファイル / フォルダ | 何を変えるときに使うか |
|---|---|
| [`app/pages/index.vue`](/Users/rafazafar/dev/nuxt-serverless-template/app/pages/index.vue) | ホームページや機能カードの内容を変える |
| [`app/pages/docs/`](/Users/rafazafar/dev/nuxt-serverless-template/app/pages/docs) | 各デモ / ドキュメントページを変える |
| [`i18n/locales/en.json`](/Users/rafazafar/dev/nuxt-serverless-template/i18n/locales/en.json) | 英語テキストを変える |
| [`i18n/locales/ja.json`](/Users/rafazafar/dev/nuxt-serverless-template/i18n/locales/ja.json) | 日本語テキストを変える |
| [`nuxt.config.ts`](/Users/rafazafar/dev/nuxt-serverless-template/nuxt.config.ts) | ロケール、メール設定、module など全体設定を変える |

## よく使うコマンド

| コマンド | 内容 |
|---|---|
| `pnpm dev` | ローカル開発サーバーを起動 |
| `pnpm build` | アプリをビルド |
| `pnpm typecheck` | 型チェックを実行 |
| `pnpm test` | テストを実行 |
| `pnpm test:unit` | unit テストのみ実行 |
| `pnpm test:nuxt` | Nuxt テストのみ実行 |
| `pnpm deploy-cloudflare` | Cloudflare へデプロイ |
| `pnpm deploy-vercel` | Vercel CLI でデプロイ |

## 簡単なデプロイ概要

- Cloudflare に出すなら `pnpm deploy-cloudflare`
- Vercel に出すなら `pnpm deploy-vercel`
- メール機能を使う前に [`nuxt.config.ts`](/Users/rafazafar/dev/nuxt-serverless-template/nuxt.config.ts) の SMTP 例を実値に置き換えます
- まずはローカルで動かして理解してからデプロイするのがおすすめです

## 短い技術概要

### 主な機能

| 機能 | 含まれているか |
|---|---|
| Database デモ | Yes |
| Blob / ファイルアップロードデモ | Yes |
| KV デモ | Yes |
| Cache デモ | Yes |
| Email ガイド | Yes |
| i18n | 英語 + 日本語 |

### 主なフォルダ

| フォルダ | 役割 |
|---|---|
| [`app/pages/`](/Users/rafazafar/dev/nuxt-serverless-template/app/pages) | ルートとページ |
| [`app/pages/docs/`](/Users/rafazafar/dev/nuxt-serverless-template/app/pages/docs) | デモ / ドキュメントページ |
| [`server/api/`](/Users/rafazafar/dev/nuxt-serverless-template/server/api) | デモ用 API ルート |
| [`server/db/`](/Users/rafazafar/dev/nuxt-serverless-template/server/db) | データベーススキーマとマイグレーション |
| [`i18n/locales/`](/Users/rafazafar/dev/nuxt-serverless-template/i18n/locales) | 翻訳ファイル |

### 主なツール

| 領域 | ツール |
|---|---|
| アプリ本体 | Nuxt 4 |
| UI | Nuxt UI |
| ストレージ機能 | NuxtHub |
| Email | `nuxt-nodemailer` |
| SEO | `@nuxtjs/seo` |
| テスト | Vitest |
