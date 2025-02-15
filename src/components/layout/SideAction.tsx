import React, { useState } from 'react';
import SideActionButton from '../common/SideActionButton';
import { useTheme } from '../../theme/ThemeContext';

// TODO: 縦モードと、横モードの切り替えを実装する

interface SideActionProps {
  isVisible?: boolean;
  position?: 'left' | 'right';
  orientation?: 'vertical' | 'horizontal';
  onLike?: () => void;
  onShare?: () => void;
  onComment?: () => void;
  onProfile?: () => void;
}

const SideAction: React.FC<SideActionProps> = ({
  isVisible = true,
  position = 'right',
  orientation = 'vertical',
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

  const getContainerStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'fixed',
      backgroundColor: 'transparent',
      borderRadius: '16px',
      padding: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      transition: 'all 0.3s ease',
      opacity: isExpanded ? 1 : 0.5,
      zIndex: 100,
    };

    if (orientation === 'vertical') {
      return {
        ...baseStyle,
        [position]: '16px',
        top: '50%',
        transform: 'translateY(-50%)',
        flexDirection: 'column',
      };
    } else {
      return {
        ...baseStyle,
        [position === 'left' ? 'left' : 'right']: '50%',
        bottom: '16px',
        transform: 'translateX(50%)',
        flexDirection: 'row',
      };
    }
  };

  const getToggleButtonStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      background: 'none',
      border: 'none',
      padding: '8px',
      cursor: 'pointer',
      color: theme.primary,
      fontSize: '20px',
      transition: 'transform 0.3s ease',
    };

    if (orientation === 'vertical') {
      return {
        ...baseStyle,
        transform: isExpanded 
          ? 'rotate(0deg)' 
          : `rotate(${position === 'left' ? '180deg' : '0deg'})`,
      };
    } else {
      return {
        ...baseStyle,
        transform: isExpanded 
          ? 'rotate(-90deg)' 
          : 'rotate(90deg)',
      };
    }
  };

  const getToggleButtonText = (): string => {
    if (orientation === 'vertical') {
      return position === 'left' ? '→' : '←';
    } else {
      return '↑';
    }
  };

  return (
    <div style={getContainerStyle()}>
      <button
        onClick={handleToggle}
        style={getToggleButtonStyle()}
        className="tap-animation"
        title={isExpanded ? "Collapse" : "Expand"}
        aria-label={isExpanded ? "Collapse side actions" : "Expand side actions"}
      >
        {getToggleButtonText()}
      </button>

      <div style={{
        display: isExpanded ? 'flex' : 'none',
        flexDirection: orientation === 'vertical' ? 'column' : 'row',
        gap: theme.icons.spacing.large,
        transition: 'all 0.3s ease',
      }}>
        <SideActionButton
          onLike={onLike}
          onShare={onShare}
          onComment={onComment}
          onProfile={onProfile}
          orientation={orientation}
        />
      </div>
    </div>
  );
};

export default SideAction; 