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

  return (
    <div style={containerStyle}>
      <button
        className="tap-animation"
        onClick={onLike}
        style={createIconButtonStyle(theme, 'medium')}
        title="Like"
        aria-label="Like"
      >
        <div style={createIconStyle()}>
          <IoHeartOutline size={theme.icons.sizes.medium} color={theme.primary} />
        </div>
      </button>

      <button
        className="tap-animation"
        onClick={onShare}
        style={createIconButtonStyle(theme, 'medium')}
        title="Share"
        aria-label="Share"
      >
        <div style={createIconStyle()}>
          <IoShareSocialOutline size={theme.icons.sizes.medium} color={theme.primary} />
        </div>
      </button>

      <button
        className="tap-animation"
        onClick={onComment}
        style={createIconButtonStyle(theme, 'medium')}
        title="Comment"
        aria-label="Comment"
      >
        <div style={createIconStyle()}>
          <IoChatbubbleOutline size={theme.icons.sizes.medium} color={theme.primary} />
        </div>
      </button>

      <button
        className="tap-animation"
        onClick={onProfile}
        style={createIconButtonStyle(theme, 'medium')}
        title="Profile"
        aria-label="Profile"
      >
        <div style={createIconStyle()}>
          <IoPersonOutline size={theme.icons.sizes.medium} color={theme.primary} />
        </div>
      </button>
    </div>
  );
};

export default SideActionButton; 