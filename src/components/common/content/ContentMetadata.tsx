import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { useTheme } from '../../../theme/ThemeContext';
import '../../../styles/animations.css';

interface ContentMetadataProps {
  username: string;
  userAvatar?: string;
  createdAt: Date;
  onProfileClick?: () => void;
}

const ContentMetadata: React.FC<ContentMetadataProps> = ({
  username,
  userAvatar,
  createdAt,
  onProfileClick,
}) => {
  const theme = useTheme();

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '12px',
  };

  const avatarStyle: React.CSSProperties = {
    width: '40px',
    height: '40px',
    borderRadius: '50%',
    overflow: 'hidden',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'transparent',
    border: `2px solid ${theme.primary}`,
    cursor: 'pointer',
  };

  const infoStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: '4px',
  };

  const formatDate = (date: Date): string => {
    const now = new Date();
    const diff = now.getTime() - date.getTime();
    const seconds = Math.floor(diff / 1000);
    const minutes = Math.floor(seconds / 60);
    const hours = Math.floor(minutes / 60);
    const days = Math.floor(hours / 24);

    if (days > 7) {
      return date.toLocaleDateString();
    }
    if (days > 0) {
      return `${days}日前`;
    }
    if (hours > 0) {
      return `${hours}時間前`;
    }
    if (minutes > 0) {
      return `${minutes}分前`;
    }
    return '今すぐ';
  };

  return (
    <div style={containerStyle}>
      <button
        className="tap-animation"
        onClick={onProfileClick}
        style={avatarStyle}
        title={username}
        aria-label={`${username}'s profile`}
      >
        {userAvatar ? (
          <img
            src={userAvatar}
            alt={username}
            style={{
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        ) : (
          <CgProfile size={24} color={theme.primary} />
        )}
      </button>

      <div style={infoStyle}>
        <button
          className="tap-animation"
          onClick={onProfileClick}
          style={{
            background: 'none',
            border: 'none',
            padding: 0,
            color: theme.primary,
            fontSize: '16px',
            fontWeight: 'bold',
            cursor: 'pointer',
            textAlign: 'left',
          }}
        >
          {username}
        </button>
        <span style={{
          color: theme.primary,
          fontSize: '12px',
          opacity: 0.7,
        }}>
          {formatDate(createdAt)}
        </span>
      </div>
    </div>
  );
};

export default ContentMetadata; 