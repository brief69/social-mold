import React, { useState } from 'react';
import { IoArrowUp, IoArrowDown, IoPlayOutline, IoList, IoGrid, IoSwapHorizontal } from 'react-icons/io5';
import { useTheme } from '../../theme/ThemeContext';
import { createIconButtonStyle, createIconStyle } from '../../styles/IconStyles';
import '../../styles/animations.css';

type ViewMode = 'list' | 'grid' | 'swipe';
type SwapMode = 'direction' | 'play' | 'view';

interface SwapActionButtonProps {
  mode?: SwapMode;
  onDirectionChange?: (isUpArrow: boolean) => void;
  onPlayDirectionChange?: (isPlayRight: boolean) => void;
  onViewChange?: (mode: ViewMode) => void;
  defaultViewMode?: ViewMode;
}

const SwapActionButton: React.FC<SwapActionButtonProps> = ({
  mode = 'direction',
  onDirectionChange,
  onPlayDirectionChange,
  onViewChange,
  defaultViewMode = 'list'
}) => {
  const theme = useTheme();
  const [isUpArrow, setIsUpArrow] = useState(true);
  const [isPlayRight, setIsPlayRight] = useState(true);
  const [currentView, setCurrentView] = useState<ViewMode>(defaultViewMode);

  const handleDirectionChange = () => {
    const newDirection = !isUpArrow;
    setIsUpArrow(newDirection);
    onDirectionChange?.(newDirection);
  };

  const handlePlayDirectionChange = () => {
    const newPlayDirection = !isPlayRight;
    setIsPlayRight(newPlayDirection);
    onPlayDirectionChange?.(newPlayDirection);
  };

  const handleViewChange = () => {
    const nextView = currentView === 'list' 
      ? 'swipe' 
      : currentView === 'swipe' 
        ? 'grid' 
        : 'list';
    
    setCurrentView(nextView);
    onViewChange?.(nextView);
  };

  const getViewIcon = () => {
    switch (currentView) {
      case 'list':
        return <IoList size={theme.icons.sizes.medium} color={theme.primary} />;
      case 'grid':
        return <IoGrid size={theme.icons.sizes.medium} color={theme.primary} />;
      case 'swipe':
        return <IoSwapHorizontal size={theme.icons.sizes.medium} color={theme.primary} />;
      default:
        return <IoSwapHorizontal size={theme.icons.sizes.medium} color={theme.primary} />;
    }
  };

  const getViewTitle = () => {
    switch (currentView) {
      case 'list':
        return "リスト表示";
      case 'grid':
        return "グリッド表示";
      case 'swipe':
        return "スワイプ表示";
      default:
        return "表示切替";
    }
  };

  // モードに応じてボタンの内容を切り替え
  const renderButton = () => {
    switch (mode) {
      case 'direction':
        return (
          <button
            className="tap-animation"
            onClick={handleDirectionChange}
            style={createIconButtonStyle(theme, 'medium')}
            title={isUpArrow ? "Switch to Down" : "Switch to Up"}
            aria-label={isUpArrow ? "Switch to Down" : "Switch to Up"}
          >
            <div style={createIconStyle()}>
              {isUpArrow ? (
                <IoArrowUp size={theme.icons.sizes.medium} color={theme.primary} />
              ) : (
                <IoArrowDown size={theme.icons.sizes.medium} color={theme.primary} />
              )}
            </div>
          </button>
        );

      case 'play':
        return (
          <button
            className="tap-animation"
            onClick={handlePlayDirectionChange}
            style={createIconButtonStyle(theme, 'medium')}
            title={isPlayRight ? "Switch to NavBar" : "Switch to SideNavBar"}
            aria-label={isPlayRight ? "Switch to NavBar" : "Switch to SideNavBar"}
          >
            <div style={{
              ...createIconStyle(),
              transform: `translate(-50%, -50%) rotate(${isPlayRight ? -90 : 0}deg)`
            }}>
              <IoPlayOutline size={theme.icons.sizes.medium} color={theme.primary} />
            </div>
          </button>
        );

      case 'view':
        return (
          <button
            className="tap-animation"
            onClick={handleViewChange}
            style={createIconButtonStyle(theme, 'medium')}
            title={getViewTitle()}
            aria-label={getViewTitle()}
          >
            <div style={createIconStyle()}>
              {getViewIcon()}
            </div>
          </button>
        );

      default:
        return null;
    }
  };

  return renderButton();
};

export default SwapActionButton; 