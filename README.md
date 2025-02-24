# social-mold

目的：汎用的なSNSのUIの型（）として、簡単に使用できること。

## 特徴

- 無駄なコンポーネントを排除
- 無駄なレイアウトの柔軟性を排除
- etc

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
│   ├── Chanel.tsx       # チャネル選択・検索コンポーネント
│   ├── NavBar.tsx       # ナビゲーションバー
│   ├── PostButton.tsx   # 投稿ボタン
│   ├── Profile.tsx      # プロフィール表示
│   ├── SearchForm.tsx   # 検索フォーム
│   ├── SideActionButton.tsx  # サイドアクションボタン（いいね、シェアなど）
│   ├── SwapActionButton.tsx  # スワップアクションボタン(list,grid,swipeview切り替え)
├── layout/          # レイアウト関連のコンポーネント
│   ├── Chat.tsx         # チャット画面レイアウト
│   └── SideAction.tsx   # サイドアクション領域レイアウト
└── index.ts        # コンポーネントのエクスポート定義
```

## 使用技術

- React + TypeScript + Vite
- Tailwind CSS

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
