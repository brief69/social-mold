import React from 'react';
import { IoSparklesOutline } from 'react-icons/io5';
import SideActionButton from '../common/SideActionButton';
import { useTheme } from '../../theme/ThemeContext';
import { createIconButtonStyle, createIconStyle } from '../../styles/IconStyles';

// TODO: 縦モードと、横モードの切り替えを実装する

interface SideActionProps {
  isVisible?: boolean;
  position?: 'left' | 'right';
  orientation?: 'vertical' | 'horizontal';
  contentAspectRatio?: number;
  isFullscreenMode?: boolean;
  onLike?: () => void;
  onShare?: () => void;
  onComment?: () => void;
  onProfile?: () => void;
  onSpread?: () => void;
  likeCount?: number;
  shareCount?: number;
  commentCount?: number;
  profileCount?: number;
  spreadCount?: number;
}

const SideAction: React.FC<SideActionProps> = ({
  isVisible = true,
  position = 'right',
  orientation: forcedOrientation,
  contentAspectRatio = 1,
  isFullscreenMode = false,
  onLike,
  onShare,
  onComment,
  onProfile,
  onSpread,
  likeCount = 0,
  shareCount = 0,
  commentCount = 0,
  profileCount = 0,
  spreadCount = 0,
}) => {
  const theme = useTheme();

  // アスペクト比と全画面モードに基づいて向きを決定
  const determineOrientation = (): 'vertical' | 'horizontal' => {
    if (forcedOrientation) return forcedOrientation;
    if (isFullscreenMode) return 'vertical';
    return contentAspectRatio >= 1 ? 'horizontal' : 'vertical';
  };

  const orientation = determineOrientation();

  if (!isVisible) return null;

  const getContainerStyle = (): React.CSSProperties => {
    const baseStyle: React.CSSProperties = {
      backgroundColor: 'transparent',
      borderRadius: '16px',
      padding: '12px',
      display: 'flex',
      alignItems: 'center',
      gap: theme.icons.spacing.large,
      zIndex: 100,
      transition: 'all 0.3s ease',
    };

    if (orientation === 'vertical') {
      return {
        ...baseStyle,
        position: 'fixed',
        [position]: '16px',
        top: '50%',
        transform: 'translateY(-50%)',
        flexDirection: 'column',
      };
    } else {
      return {
        ...baseStyle,
        position: 'relative',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'center',
        padding: isFullscreenMode ? '12px 24px' : '12px',
      };
    }
  };

  // 拡散ボタンの配置を決定
  const getSpreadButtonOrder = () => {
    if (orientation === 'vertical') {
      return -1; // 一番上
    } else {
      return position === 'left' ? 1 : -1; // 左端または右端
    }
  };

  return (
    <div style={getContainerStyle()}>
      {orientation === 'horizontal' ? (
        <>
          <div style={{ 
            margin: `0 -${theme.icons.spacing.large}px`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            order: getSpreadButtonOrder(),
          }}>
            <button
              className="tap-animation sparkle-button"
              onClick={onSpread}
              style={createIconButtonStyle(theme, 'medium')}
              title="無造作に拡散"
              aria-label="無造作に拡散"
            >
              <div style={createIconStyle()}>
                <IoSparklesOutline size={theme.icons.sizes.medium} color={theme.primary} />
              </div>
            </button>
            <div style={{
              fontSize: '12px',
              color: theme.primary,
              textAlign: 'center',
              marginTop: '4px',
            }}>
              {spreadCount}
            </div>
          </div>
          <SideActionButton
            onLike={onLike}
            onShare={onShare}
            onComment={onComment}
            onProfile={onProfile}
            orientation={orientation}
            likeCount={likeCount}
            shareCount={shareCount}
            commentCount={commentCount}
            profileCount={profileCount}
          />
        </>
      ) : (
        <>
          <SideActionButton
            onLike={onLike}
            onShare={onShare}
            onComment={onComment}
            onProfile={onProfile}
            orientation={orientation}
            likeCount={likeCount}
            shareCount={shareCount}
            commentCount={commentCount}
            profileCount={profileCount}
          />
          <div style={{ 
            margin: orientation === 'vertical' 
              ? `-${theme.icons.spacing.large}px 0` 
              : `0 -${theme.icons.spacing.large}px`,
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
            order: getSpreadButtonOrder(),
          }}>
            <button
              className="tap-animation sparkle-button"
              onClick={onSpread}
              style={createIconButtonStyle(theme, 'medium')}
              title="無造作に拡散"
              aria-label="無造作に拡散"
            >
              <div style={createIconStyle()}>
                <IoSparklesOutline size={theme.icons.sizes.medium} color={theme.primary} />
              </div>
            </button>
            <div style={{
              fontSize: '12px',
              color: theme.primary,
              textAlign: 'center',
              marginTop: '4px',
            }}>
              {spreadCount}
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default SideAction; 