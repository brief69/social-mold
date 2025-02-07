import React from 'react';
import { IoHeartOutline, IoShareSocialOutline, IoChatbubbleOutline, IoEyeOutline } from 'react-icons/io5';
import { useTheme } from '../../../theme/ThemeContext';
import '../../../styles/animations.css';

interface ContentActionsProps {
  likes: number;
  comments: number;
  shares: number;
  views: number;
  onLike?: () => void;
  onComment?: () => void;
  onShare?: () => void;
}

const ContentActions: React.FC<ContentActionsProps> = ({
  likes,
  comments,
  shares,
  views,
  onLike,
  onComment,
  onShare,
}) => {
  const theme = useTheme();

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '20px',
    padding: '8px 0',
  };

  const actionStyle: React.CSSProperties = {
    display: 'flex',
    alignItems: 'center',
    gap: '4px',
    color: theme.primary,
    fontSize: '14px',
  };

  const buttonStyle: React.CSSProperties = {
    background: 'none',
    border: 'none',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.primary,
    cursor: 'pointer',
  };

  const formatNumber = (num: number): string => {
    if (num >= 1000000) {
      return `${(num / 1000000).toFixed(1)}M`;
    }
    if (num >= 1000) {
      return `${(num / 1000).toFixed(1)}K`;
    }
    return num.toString();
  };

  return (
    <div style={containerStyle}>
      <div style={actionStyle}>
        <button
          className="tap-animation"
          onClick={onLike}
          style={buttonStyle}
          title="Like"
          aria-label="Like"
        >
          <IoHeartOutline size={24} />
        </button>
        <span>{formatNumber(likes)}</span>
      </div>

      <div style={actionStyle}>
        <button
          className="tap-animation"
          onClick={onComment}
          style={buttonStyle}
          title="Comment"
          aria-label="Comment"
        >
          <IoChatbubbleOutline size={24} />
        </button>
        <span>{formatNumber(comments)}</span>
      </div>

      <div style={actionStyle}>
        <button
          className="tap-animation"
          onClick={onShare}
          style={buttonStyle}
          title="Share"
          aria-label="Share"
        >
          <IoShareSocialOutline size={24} />
        </button>
        <span>{formatNumber(shares)}</span>
      </div>

      <div style={{
        ...actionStyle,
        marginLeft: 'auto',
      }}>
        <IoEyeOutline size={20} />
        <span>{formatNumber(views)}</span>
      </div>
    </div>
  );
};

export default ContentActions; 