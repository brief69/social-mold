# social-mold

## Components Directory Structure

プロジェクトのコンポーネント構造は以下の通りです：

```
src/components/
├── common/          # 共通のUIコンポーネント
│   ├── Chanel.tsx       # チャネル選択・検索コンポーネント
│   ├── NavBar.tsx       # ナビゲーションバー
│   ├── PostButton.tsx   # 投稿ボタン
│   ├── Profile.tsx      # プロフィール表示
│   ├── SearchForm.tsx   # 検索フォーム
│   ├── Setting.tsx      # 設定コンポーネント
│   ├── SideActionButton.tsx  # サイドアクションボタン（いいね、シェアなど）
│   ├── SwapActionButton.tsx  # スワップアクションボタン
│   ├── ViewSwapActionButton.tsx  # ビュー切り替えボタン
│   └── Wallet.tsx       # ウォレット関連コンポーネント
│
├── layout/          # レイアウト関連のコンポーネント
│   ├── Chat.tsx         # チャット画面レイアウト
│   └── SideAction.tsx   # サイドアクション領域レイアウト
│
├── swap/           # スワップ機能関連のコンポーネント
│   ├── LGSwap.tsx     # listview表示/gridview表示の切り替え処理
│   └── LRLSwap.tsx    # listview表示/左右スワイプview表示の切り替え処理
└── index.ts        # コンポーネントのエクスポート定義
```

## React + TypeScript + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## Expanding the ESLint configuration

If you are developing a production application, we recommend updating the configuration to enable type aware lint rules:

- Configure the top-level `parserOptions` property like this:

```js
export default tseslint.config({
  languageOptions: {
    // other options...
    parserOptions: {
      project: ['./tsconfig.node.json', './tsconfig.app.json'],
      tsconfigRootDir: import.meta.dirname,
    },
  },
})
```

- Replace `tseslint.configs.recommended` to `tseslint.configs.recommendedTypeChecked` or `tseslint.configs.strictTypeChecked`
- Optionally add `...tseslint.configs.stylisticTypeChecked`
- Install [eslint-plugin-react](https://github.com/jsx-eslint/eslint-plugin-react) and update the config:

```js
// eslint.config.js
import react from 'eslint-plugin-react'

export default tseslint.config({
  // Set the react version
  settings: { react: { version: '18.3' } },
  plugins: {
    // Add the react plugin
    react,
  },
  rules: {
    // other rules...
    // Enable its recommended rules
    ...react.configs.recommended.rules,
    ...react.configs['jsx-runtime'].rules,
  },
})
```
