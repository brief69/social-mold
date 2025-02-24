# social-mold

目的：汎用的なSNSのUIの型（鋳型）として、必要最小限の機能に収束させた再利用可能なテンプレート。

## 特徴

- 必要最小限のコンポーネント構成
- 最適化された柔軟性と制約
- 高い再利用性と拡張性
- モダンなUI/UXパターン

## Components Directory Structure

```bash
src/components/
├── common/          # 共通のUIコンポーネント
│   ├── content/     # コンテンツ関連のコンポーネント
│   │   ├── ContentCard.tsx  # コンテンツカード
│   │   ├── ContentActions.tsx # コンテンツアクション
│   │   ├── ContentMedia.tsx # コンテンツメディア
│   │   ├── ContentMetadata.tsx # コンテンツメタデータ
│   │   └── dummyData.ts    # ダミーデータ
│   ├── AutoHideWrapper.tsx  # 自動非表示ラッパー
│   ├── Chanel.tsx       # チャネル選択コンポーネント
│   ├── NavBar.tsx       # ナビゲーションバー
│   ├── PostButton.tsx   # 投稿ボタン
│   ├── Profile.tsx      # プロフィール表示
│   ├── SideAction.tsx   # サイドアクションコンポーネント
│   └── SwapActionButton.tsx  # 表示モード切替ボタン
├── layout/          # レイアウト関連のコンポーネント
│   ├── AppBar.tsx       # アプリケーションバー
│   ├── Chat.tsx         # チャット画面レイアウト
│   ├── GridView.tsx     # グリッド表示レイアウト
│   ├── Home.tsx         # ホーム画面レイアウト
│   ├── ListView.tsx     # リスト表示レイアウト
│   ├── PageLayout.tsx   # ページ基本レイアウト
│   ├── Profile.tsx      # プロフィール画面レイアウト
│   ├── Search.tsx       # 検索画面レイアウト
│   └── SwipeView.tsx    # スワイプ表示レイアウト
└── index.ts        # コンポーネントのエクスポート定義
```

## 使用技術

- React + TypeScript + Vite
- CSS Modules
- React Spring (アニメーション)
- React Icons

## Issueを作成してほしい

- バグ報告
- 機能追加
- ドキュメント改善
- コードの改善
- テストの追加
- テストの改善
- テストの実行

## 貢献方法

1. リポジトリをフォーク or クローン
2. ブランチを作成
3. プルリクエストを作成
