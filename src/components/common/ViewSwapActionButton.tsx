import React, { useState } from 'react';
import { IoList, IoGrid, IoSwapHorizontal } from 'react-icons/io5';
import { useTheme } from '../../theme/ThemeContext';
import '../../styles/animations.css';

type ViewMode = 'list' | 'grid' | 'swipe';

interface ViewSwapActionButtonProps {
  onViewChange?: (mode: ViewMode) => void;
  defaultMode?: ViewMode;
}

const ViewSwapActionButton: React.FC<ViewSwapActionButtonProps> = ({
  onViewChange,
  defaultMode = 'swipe'
}) => {
  const theme = useTheme();
  const [currentView, setCurrentView] = useState<ViewMode>(defaultMode);

  const handleViewSwap = () => {
    const nextView = currentView === 'swipe' 
      ? 'list' 
      : currentView === 'list' 
        ? 'grid' 
        : 'swipe';
    
    setCurrentView(nextView);
    onViewChange?.(nextView);
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

  const getIcon = () => {
    switch (currentView) {
      case 'list':
        return <IoList size={48} />;
      case 'grid':
        return <IoGrid size={48} />;
      case 'swipe':
        return <IoSwapHorizontal size={48} />;
      default:
        return <IoSwapHorizontal size={48} />;
    }
  };

  const getTitle = () => {
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

  return (
    <button
      className="tap-animation"
      onClick={handleViewSwap}
      style={buttonStyle}
      title={getTitle()}
      aria-label={getTitle()}
    >
      {getIcon()}
    </button>
  );
};

export default ViewSwapActionButton;
