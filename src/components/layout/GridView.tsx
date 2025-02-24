import React from 'react';
import ContentCard from '../common/content/ContentCard';
import { dummyImageContents } from '../common/content/dummyData';
import '../../styles/GridView.css';

/**
 * TODO: グリッドビューの改善点
 * 1. 画像表示の最適化
 *    - 現状、画像が適切に表示されない問題がある
 *    - ContentCard, ContentMediaコンポーネントのスタイリング調整が必要
 * 
 * 2. データの分離
 *    - 表示モード（リスト/グリッド/スワイプ）ごとに適切なデータを使用する
 *    - 特にグリッドビューでは画像投稿のみを表示するように調整
 * 
 * 3. レイアウトの改善
 *    - 画像のアスペクト比に応じた適切なグリッドレイアウト
 *    - Masonry風のレイアウトの検討
 *    - グリッド間のギャップやパディングの調整
 * 
 * 4. パフォーマンス最適化
 *    - 画像の遅延読み込みの確認
 *    - 表示領域に応じた画像サイズの最適化
 *    - 無限スクロールの実装
 * 
 * 5. 汎用的なグリッドレイアウト対応
 *    - あらゆる種類のコンテンツ（テキスト、画像、動画）に対応
 *    - メディアコンテンツのアスペクト比を維持したグリッド表示
 *    - テキストのみの投稿は正方形のカードとして表示
 *    - 画像/動画付きの投稿はそのメディアのアスペクト比を反映
 *    - 複数のメディアが添付されている場合は、最初のメディアのアスペクト比を使用
 *    - Twitter風の投稿でもInstagram風の投稿でも美しく表示できる柔軟性
 * 
 * 6. アスペクト比の決定ロジック
 *    - メインコンテンツが画像/動画の場合：
 *      → そのメディアのアスペクト比を維持
 *      → サブコンテンツのテキストの有無に関わらずメインメディアの比率を優先
 *    - メインコンテンツがテキストの場合：
 *      → サブコンテンツに画像/動画がある場合：
 *         サブコンテンツのメディアのアスペクト比を投稿カード全体に適用
 *      → メディアが一切ない場合：
 *         正方形（1:1）のカードとして表示
 *    - この仕様により、メディアコンテンツの見栄えを最優先しつつ、
 *      テキスト主体の投稿も美しく整列させることが可能
 */

interface GridViewProps {
  onAction?: (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => void;
}

const GridView: React.FC<GridViewProps> = ({ onAction }) => {
  const getItemClassName = (aspectRatio: number) => {
    let className = 'grid-item';
    
    // アスペクト比に基づいてクラスを追加
    if (aspectRatio > 1.2) {
      className += ' vertical';
      if (aspectRatio > 1.8) className += ' extreme';
    } else if (aspectRatio < 0.8) {
      className += ' horizontal';
      if (aspectRatio < 0.5) className += ' extreme';
    } else {
      className += ' square';
    }

    // 注目コンテンツの場合
    if (aspectRatio > 2.1 || aspectRatio < 0.4) {
      className = 'grid-item featured';
    }

    return className;
  };

  const handleAction = (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => {
    onAction?.(action, itemId);
  };

  return (
    <div className="grid-container">
      <div className="grid-layout">
        {dummyImageContents.map((item) => {
          const aspectRatio = item.mainContent.aspectRatio || 1;
          return (
            <div
              key={item.id}
              className={getItemClassName(aspectRatio)}
            >
              <div className="grid-item-content">
                <ContentCard
                  item={item}
                  variant="grid"
                  onAction={handleAction}
                />
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
};

export default GridView;
