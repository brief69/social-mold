import React from 'react';
import { IoSparkles } from 'react-icons/io5';
import SideActionButton from '../common/SideActionButton';
import { useTheme } from '../../theme/ThemeContext';
import { createIconButtonStyle, createIconStyle } from '../../styles/IconStyles';

// TODO: 縦モードと、横モードの切り替えを実装する

interface SideActionProps {
  isVisible?: boolean;
  position?: 'left' | 'right';
  orientation?: 'vertical' | 'horizontal';
  onLike?: () => void;
  onShare?: () => void;
  onComment?: () => void;
  onProfile?: () => void;
  onSpread?: () => void;
}

const SideAction: React.FC<SideActionProps> = ({
  isVisible = true,
  position = 'right',
  orientation = 'vertical',
  onLike,
  onShare,
  onComment,
  onProfile,
  onSpread,
}) => {
  const theme = useTheme();

  if (!isVisible) return null;

  const getContainerStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      position: 'fixed',
      backgroundColor: 'transparent',
      borderRadius: '16px',
      padding: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: theme.icons.spacing.large,
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

  return (
    <div style={getContainerStyle()}>
      <SideActionButton
        onLike={onLike}
        onShare={onShare}
        onComment={onComment}
        onProfile={onProfile}
        orientation={orientation}
      />
      <button
        className="tap-animation sparkle-button"
        onClick={onSpread}
        style={{
          ...createIconButtonStyle(theme, 'medium'),
          order: orientation === 'vertical' ? -1 : 1,
        }}
        title="無造作に拡散"
        aria-label="無造作に拡散"
      >
        <div style={{
          ...createIconStyle(),
        }}>
          <IoSparkles size={theme.icons.sizes.medium} color={theme.primary} />
        </div>
      </button>
    </div>
  );
};

export default SideAction; 