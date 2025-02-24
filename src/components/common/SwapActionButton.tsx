import React, { useState } from 'react';
import { IoList, IoGrid } from 'react-icons/io5';
import { IoSwapHorizontal } from 'react-icons/io5';
import { useTheme } from '../../theme/ThemeContext';
import { createIconButtonStyle, createIconStyle } from '../../styles/IconStyles';
import '../../styles/animations.css';

type ViewMode = 'list' | 'grid' | 'swipe';

interface SwapActionButtonProps {
  onViewChange?: (mode: ViewMode) => void;
  defaultViewMode?: ViewMode;
}

const SwapActionButton: React.FC<SwapActionButtonProps> = ({
  onViewChange,
  defaultViewMode = 'list'
}) => {
  const theme = useTheme();
  const [currentView, setCurrentView] = useState<ViewMode>(defaultViewMode);

  const handleViewChange = () => {
    const viewOrder: ViewMode[] = ['list', 'grid', 'swipe'];
    const currentIndex = viewOrder.indexOf(currentView);
    const nextIndex = (currentIndex + 1) % viewOrder.length;
    const newViewMode = viewOrder[nextIndex];
    
    setCurrentView(newViewMode);
    onViewChange?.(newViewMode);
  };

  const getViewIcon = () => {
    switch (currentView) {
      case 'list':
        return <IoList size={theme.icons.sizes.medium} color={theme.primary} />;
      case 'grid':
        return <IoGrid size={theme.icons.sizes.medium} color={theme.primary} />;
      case 'swipe':
        return <IoSwapHorizontal size={theme.icons.sizes.medium} color={theme.primary} />;
    }
  };

  const getViewTitle = () => {
    switch (currentView) {
      case 'list':
        return 'グリッド表示に切り替え';
      case 'grid':
        return 'スワイプ表示に切り替え';
      case 'swipe':
        return 'リスト表示に切り替え';
    }
  };

  return (
    <button
      className="tap-animation"
      onClick={handleViewChange}
      style={{
        ...createIconButtonStyle(theme, 'medium'),
        transition: 'transform 0.3s ease'
      }}
      title={getViewTitle()}
      aria-label={getViewTitle()}
    >
      <div style={{
        ...createIconStyle(),
        transition: 'transform 0.3s ease'
      }}>
        {getViewIcon()}
      </div>
    </button>
  );
};

export default SwapActionButton; 