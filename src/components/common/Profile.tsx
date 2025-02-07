import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { useTheme } from '../../theme/ThemeContext';
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
    gap: '12px',
    padding: '12px',
  } as const;

  const iconStyle = {
    background: 'none',
    border: `2px solid ${theme.primary}`,
    borderRadius: '50%',
    width: '48px',
    height: '48px',
    padding: '4px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.primary,
  } as const;

  const nameStyle = {
    color: theme.primary,
    fontSize: '18px',
    fontWeight: 'bold',
    background: 'none',
    border: 'none',
    padding: '8px 12px',
    borderRadius: '8px',
  } as const;

  return (
    <div style={containerStyle}>
      <button
        className="tap-animation"
        onClick={handleIconClick}
        style={iconStyle}
        title="Profile Icon"
        aria-label="Profile Icon"
      >
        <CgProfile size={36} />
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