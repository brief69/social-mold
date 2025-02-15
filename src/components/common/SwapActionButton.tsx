import React, { useState } from 'react';
import { IoList, IoGrid, IoSwapHorizontal } from 'react-icons/io5';
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
  const [isListView, setIsListView] = useState(defaultViewMode === 'list');

  const handleViewChange = () => {
    const newViewMode = isListView ? 'grid' : 'list';
    setIsListView(!isListView);
    onViewChange?.(newViewMode as ViewMode);
  };

  return (
    <button
      className="tap-animation"
      onClick={handleViewChange}
      style={createIconButtonStyle(theme, 'medium')}
      title={isListView ? "グリッド表示" : "リスト表示"}
      aria-label={isListView ? "グリッド表示" : "リスト表示"}
    >
      <div style={createIconStyle()}>
        {isListView ? (
          <IoGrid size={theme.icons.sizes.medium} color={theme.primary} />
        ) : (
          <IoList size={theme.icons.sizes.medium} color={theme.primary} />
        )}
      </div>
    </button>
  );
};

export default SwapActionButton; 