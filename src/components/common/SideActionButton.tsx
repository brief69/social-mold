import React from 'react';
import { IoHeartOutline, IoShareSocialOutline, IoChatbubbleOutline, IoPersonOutline } from 'react-icons/io5';
import { useTheme } from '../../theme/ThemeContext';
import '../../styles/animations.css';

interface SideActionButtonProps {
  onLike?: () => void;
  onShare?: () => void;
  onComment?: () => void;
  onProfile?: () => void;
}

const SideActionButton: React.FC<SideActionButtonProps> = ({
  onLike,
  onShare,
  onComment,
  onProfile,
}) => {
  const theme = useTheme();

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
        onClick={onLike}
        style={buttonStyle}
        title="Like"
        aria-label="Like"
      >
        <IoHeartOutline size={48} />
      </button>

      <button
        className="tap-animation"
        onClick={onShare}
        style={buttonStyle}
        title="Share"
        aria-label="Share"
      >
        <IoShareSocialOutline size={48} />
      </button>

      <button
        className="tap-animation"
        onClick={onComment}
        style={buttonStyle}
        title="Comment"
        aria-label="Comment"
      >
        <IoChatbubbleOutline size={48} />
      </button>

      <button
        className="tap-animation"
        onClick={onProfile}
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