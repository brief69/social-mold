import React, { useState } from 'react';
import SideActionButton from '../common/SideActionButton';
import { useTheme } from '../../theme/ThemeContext';

// TODO: 縦モードと、横モードの切り替えを実装する

interface SideActionProps {
  isVisible?: boolean;
  position?: 'left' | 'right';
  onLike?: () => void;
  onShare?: () => void;
  onComment?: () => void;
  onProfile?: () => void;
}

const SideAction: React.FC<SideActionProps> = ({
  isVisible = true,
  position = 'right',
  onLike,
  onShare,
  onComment,
  onProfile,
}) => {
  const theme = useTheme();
  const [isExpanded, setIsExpanded] = useState(true);

  const handleToggle = () => {
    setIsExpanded(!isExpanded);
  };

  if (!isVisible) return null;

  return (
    <div style={{
      position: 'fixed',
      [position]: '16px',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: 'transparent',
      borderRadius: '16px',
      padding: '12px',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      opacity: isExpanded ? 1 : 0.5,
      zIndex: 100,
    }}>
      <button
        onClick={handleToggle}
        style={{
          background: 'none',
          border: 'none',
          padding: '8px',
          cursor: 'pointer',
          color: theme.primary,
          fontSize: '20px',
          transform: isExpanded ? 'rotate(0deg)' : `rotate(${position === 'left' ? '180deg' : '0deg'})`,
          transition: 'transform 0.3s ease',
        }}
        className="tap-animation"
        title={isExpanded ? "Collapse" : "Expand"}
        aria-label={isExpanded ? "Collapse side actions" : "Expand side actions"}
      >
        {position === 'left' ? '→' : '←'}
      </button>

      <div style={{
        display: isExpanded ? 'block' : 'none',
        transition: 'all 0.3s ease',
      }}>
        <SideActionButton
          onLike={onLike}
          onShare={onShare}
          onComment={onComment}
          onProfile={onProfile}
        />
      </div>
    </div>
  );
};

export default SideAction; 