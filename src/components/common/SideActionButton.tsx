import React from 'react';
import { IoHeartOutline, IoShareSocialOutline, IoChatbubbleOutline, IoPersonOutline } from 'react-icons/io5';
import { useTheme } from '../../theme/ThemeContext';
import { createIconButtonStyle, createIconStyle } from '../../styles/IconStyles';
import '../../styles/animations.css';

interface SideActionButtonProps {
  onLike?: () => void;
  onShare?: () => void;
  onComment?: () => void;
  onProfile?: () => void;
  orientation?: 'vertical' | 'horizontal';
  likeCount?: number;
  shareCount?: number;
  commentCount?: number;
  profileCount?: number;
}

const SideActionButton: React.FC<SideActionButtonProps> = ({
  onLike,
  onShare,
  onComment,
  onProfile,
  orientation = 'vertical',
  likeCount = 0,
  shareCount = 0,
  commentCount = 0,
  profileCount = 0,
}) => {
  const theme = useTheme();

  const containerStyle = {
    display: 'flex',
    flexDirection: orientation === 'vertical' ? 'column' as const : 'row' as const,
    gap: theme.icons.spacing.large,
    padding: theme.icons.spacing.medium,
  };

  const countStyle: React.CSSProperties = {
    fontSize: '12px',
    color: theme.primary,
    textAlign: 'center',
    marginTop: '4px',
  };

  const buttonContainerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  };

  // ボタンを配列として定義し、順序を制御
  const buttons = [
    {
      onClick: onLike,
      icon: <IoHeartOutline size={theme.icons.sizes.medium} color={theme.primary} />,
      title: "Like",
      count: likeCount,
    },
    {
      onClick: onComment,
      icon: <IoChatbubbleOutline size={theme.icons.sizes.medium} color={theme.primary} />,
      title: "Comment",
      count: commentCount,
    },
    {
      onClick: onProfile,
      icon: <IoPersonOutline size={theme.icons.sizes.medium} color={theme.primary} />,
      title: "Profile",
      count: profileCount,
    },
    {
      onClick: onShare,
      icon: <IoShareSocialOutline size={theme.icons.sizes.medium} color={theme.primary} />,
      title: "Share",
      count: shareCount,
    },
  ];

  return (
    <div style={containerStyle}>
      {buttons.map((button) => (
        <div key={button.title} style={buttonContainerStyle}>
          <button
            className="tap-animation"
            onClick={button.onClick}
            style={createIconButtonStyle(theme, 'medium')}
            title={button.title}
            aria-label={button.title}
          >
            <div style={createIconStyle()}>
              {button.icon}
            </div>
          </button>
          <div style={countStyle}>{button.count}</div>
        </div>
      ))}
    </div>
  );
};

export default SideActionButton; 