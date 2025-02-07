import React from 'react';
import { IoHeartOutline, IoShareSocialOutline, IoChatbubbleOutline, IoPersonOutline } from 'react-icons/io5';
import { useTheme } from '../../theme/ThemeContext';
import '../../styles/animations.css';

const SideActionButton: React.FC = () => {
  const theme = useTheme();

  const handleLike = () => {
    // TODO: いいねアクションの処理を実装
    // - いいねカウントの更新
    // - アニメーション効果
    // - サーバーへの通知
  };

  const handleShare = () => {
    // TODO: 共有アクションの処理を実装
    // - シェアオプションの表示
    // - 各種SNSへの共有機能
    // - クリップボードへのコピー
  };

  const handleComment = () => {
    // TODO: コメントアクションの処理を実装
    // - コメントセクションの表示
    // - コメント入力フォームの表示
    // - コメントリストの表示
  };

  const handleProfile = () => {
    // TODO: プロフィールアクションの処理を実装
    // - ユーザープロフィールの表示
    // - フォロー/フォロワー情報の表示
    // - ユーザー投稿履歴の表示
  };

  const containerStyle = {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '32px',
    padding: '16px',
  };

  const buttonStyle = {
    background: 'none',
    border: 'none',
    width: '64px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.primary,
    cursor: 'pointer',
  };

  return (
    <div style={containerStyle}>
      <button
        className="tap-animation"
        onClick={handleLike}
        style={buttonStyle}
        title="Like"
        aria-label="Like"
      >
        <IoHeartOutline size={48} />
      </button>

      <button
        className="tap-animation"
        onClick={handleShare}
        style={buttonStyle}
        title="Share"
        aria-label="Share"
      >
        <IoShareSocialOutline size={48} />
      </button>

      <button
        className="tap-animation"
        onClick={handleComment}
        style={buttonStyle}
        title="Comment"
        aria-label="Comment"
      >
        <IoChatbubbleOutline size={48} />
      </button>

      <button
        className="tap-animation"
        onClick={handleProfile}
        style={buttonStyle}
        title="Profile"
        aria-label="Profile"
      >
        <IoPersonOutline size={48} />
      </button>
    </div>
  );
};

export default SideActionButton; 