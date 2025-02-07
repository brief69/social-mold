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
    const nextView = currentView === 'list' 
      ? 'swipe' 
      : currentView === 'swipe' 
        ? 'grid' 
        : 'list';
    
    setCurrentView(nextView);
    onViewChange?.(nextView);
  };

  const buttonStyle = {
    background: 'none',
    border: 'none',
    width: '80px',
    height: '80px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.primary,
    cursor: 'pointer',
  };

  const getIcon = () => {
    switch (currentView) {
      case 'list':
        return <IoList size={40} />;
      case 'grid':
        return <IoGrid size={40} />;
      case 'swipe':
        return <IoSwapHorizontal size={40} />;
      default:
        return <IoSwapHorizontal size={40} />;
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
