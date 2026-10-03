# www

Vite + React で構築したフロントエンドアプリケーションです。

## 技術スタック

- **Vite** — 開発サーバーと本番ビルド
- **React 19 / TypeScript** — UI と型付け
- **Tailwind CSS 4** — `@tailwindcss/vite` プラグイン経由のスタイル
- **React Router** — クライアントサイドルーティング
- **Motion** — UI アニメーション
- **Lucide React** — アイコン
- **Oxlint** — lint
- **Prettier** — フォーマット（設定は `.prettierrc`）

依存関係と利用可能なコマンドは `package.json` を正とします。依存関係の追加・更新時は Bun の lockfile (`bun.lock`) も一緒に更新してください。

## 開発

```sh
bun install
bun run dev
```

## チェックとビルド

```sh
bun run lint
bun run build
```

本番ビルドをローカルで確認する場合:

```sh
bun run preview
```

整形するファイルを指定して Prettier を実行します:

```sh
bunx prettier --write <files>
```

プロジェクト固有の保全ルールは [`AGENTS.md`](AGENTS.md) を参照してください。
