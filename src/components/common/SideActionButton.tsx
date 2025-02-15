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
}

const SideActionButton: React.FC<SideActionButtonProps> = ({
  onLike,
  onShare,
  onComment,
  onProfile,
  orientation = 'vertical',
}) => {
  const theme = useTheme();

  const containerStyle = {
    display: 'flex',
    flexDirection: orientation === 'vertical' ? 'column' as const : 'row' as const,
    gap: theme.icons.spacing.large,
    padding: theme.icons.spacing.medium,
  };

  // ボタンを配列として定義し、順序を制御
  const buttons = [
    {
      onClick: onLike,
      icon: <IoHeartOutline size={theme.icons.sizes.medium} color={theme.primary} />,
      title: "Like",
    },
    {
      onClick: onComment,
      icon: <IoChatbubbleOutline size={theme.icons.sizes.medium} color={theme.primary} />,
      title: "Comment",
    },
    {
      onClick: onProfile,
      icon: <IoPersonOutline size={theme.icons.sizes.medium} color={theme.primary} />,
      title: "Profile",
    },
    {
      onClick: onShare,
      icon: <IoShareSocialOutline size={theme.icons.sizes.medium} color={theme.primary} />,
      title: "Share",
    },
  ];

  return (
    <div style={containerStyle}>
      {buttons.map((button) => (
        <button
          key={button.title}
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
      ))}
    </div>
  );
};

export default SideActionButton; 