# UI改善の認識整理

## Chanelの表示改善
- フォーカスされていないチャネルは控えめな表示
  - 透明度を下げる
  - サイズを小さくする
  - 全体的に「いい感じ」な見た目を目指す

- フォーカスインフィールドの改善
  - 現状のデフォルトの中央楕円枠線は不要
  - 中央に来た時のフォーカス表示のみで十分
  - よりシンプルで洗練された表示を目指す

## チャネル構成
- HomeとSearchは同じチャネル種類を表示
- 検索機能はチャネルに統合
  - デフォルトのチャネルが検索フォームとして機能
  - 別途検索フォームは不要

## 表示モードとSideAction
### グリッドビュー
- コンテンツのアスペクト比に応じて動的にSideActionの向きを変更
  - 縦長コンテンツ → 縦向きSideAction
  - 横長コンテンツ → 横向きSideAction

### リストビュー
- PCや横向きアスペクト比での表示改善
  - 左右の余白スペースを有効活用
  - 隣接チャネルのリストビューを部分的に表示（横幅の半分程度）

### 横向き表示対応
- 動画や画像が横向き全画面表示になる場合
  - SideActionも表示向きに追従
  - 例：横向きスマホでの視聴時
    - 画面が横向きになっても
    - SideActionは画面に対して縦向きに表示
    - ユーザーの視点から見て自然な配置を維持 