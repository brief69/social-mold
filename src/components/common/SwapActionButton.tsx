import React, { useState } from 'react';
import { IoArrowUp, IoArrowDown, IoPlayOutline, IoList, IoGrid, IoSwapHorizontal } from 'react-icons/io5';
import { useTheme } from '../../theme/ThemeContext';
import { createIconButtonStyle, createIconStyle } from '../../styles/IconStyles';
import '../../styles/animations.css';

type ViewMode = 'list' | 'grid' | 'swipe';
type SwapMode = 'direction' | 'play' | 'view-grid' | 'view-swipe';

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
  const [isListView, setIsListView] = useState(defaultViewMode === 'list');

  const handleDirectionChange = () => {
    // 方向切り替えは一時的に無効化
    setIsUpArrow(!isUpArrow);
  };

  const handlePlayDirectionChange = () => {
    const newPlayDirection = !isPlayRight;
    setIsPlayRight(newPlayDirection);
    onPlayDirectionChange?.(newPlayDirection);
  };

  const handleViewChange = () => {
    const newViewMode = isListView ? (mode === 'view-grid' ? 'grid' : 'swipe') : 'list';
    setIsListView(!isListView);
    onViewChange?.(newViewMode as ViewMode);
  };

  const getViewIcon = () => {
    if (mode === 'view-grid') {
      return isListView ? (
        <IoList size={theme.icons.sizes.medium} color={theme.primary} />
      ) : (
        <IoGrid size={theme.icons.sizes.medium} color={theme.primary} />
      );
    } else if (mode === 'view-swipe') {
      return isListView ? (
        <IoList size={theme.icons.sizes.medium} color={theme.primary} />
      ) : (
        <IoSwapHorizontal size={theme.icons.sizes.medium} color={theme.primary} />
      );
    }
    return null;
  };

  const getViewTitle = () => {
    if (mode === 'view-grid') {
      return isListView ? "リスト表示" : "グリッド表示";
    } else if (mode === 'view-swipe') {
      return isListView ? "リスト表示" : "スワイプ表示";
    }
    return "表示切替";
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

      case 'view-grid':
      case 'view-swipe':
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