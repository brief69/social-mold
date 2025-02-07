import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { useTheme } from '../../theme/ThemeContext';
import { createIconButtonStyle, createIconStyle } from '../../styles/IconStyles';
import '../../styles/animations.css';

const Profile: React.FC = () => {
  const theme = useTheme();

  const handleIconClick = () => {
    // TODO: プロフィールアイコンクリック時の処理を実装
    // プロフィール画像のアップロード or プロフィール詳細表示など
  };

  const handleNameClick = () => {
    // TODO: ユーザー名クリック時の処理を実装
    // プロフィール編集画面への遷移など
  };

  const containerStyle = {
    display: 'flex',
    alignItems: 'center',
    gap: theme.icons.spacing.medium,
    padding: theme.icons.spacing.medium,
  } as const;

  const nameStyle = {
    color: theme.primary,
    fontSize: '16px',
    fontWeight: 'bold',
    background: 'none',
    border: 'none',
    padding: theme.icons.spacing.small,
    cursor: 'pointer',
  } as const;

  return (
    <div style={containerStyle}>
      <button
        className="tap-animation"
        onClick={handleIconClick}
        style={createIconButtonStyle(theme, 'medium')}
        title="Profile Icon"
        aria-label="Profile Icon"
      >
        <div style={createIconStyle()}>
          <CgProfile size={theme.icons.sizes.medium} color={theme.primary} />
        </div>
      </button>
      <button
        className="tap-animation"
        onClick={handleNameClick}
        style={nameStyle}
        title="Username"
        aria-label="Username"
      >
        @username
      </button>
    </div>
  );
};

export default Profile; 