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
    gap: '16px',
    padding: '16px',
  } as const;

  const iconStyle = {
    background: 'none',
    border: 'none',
    width: '64px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.primary,
    cursor: 'pointer',
  } as const;

  const nameStyle = {
    color: theme.primary,
    fontSize: '20px',
    fontWeight: 'bold',
    background: 'none',
    border: 'none',
    padding: '8px 16px',
    borderRadius: '8px',
    cursor: 'pointer',
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
        <CgProfile size={56} />
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