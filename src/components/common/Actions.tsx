import React from 'react';
import { IoMdAdd } from 'react-icons/io';
import { useTheme } from '../../theme/ThemeContext';
import { createIconButtonStyle, createIconStyle } from '../../styles/IconStyles';
import SwapActionButton from './SwapActionButton';
import '../../styles/Actions.css';

interface ActionsProps {
  onPostClick?: () => void;
  onViewChange?: (mode: 'list' | 'grid' | 'swipe') => void;
  defaultViewMode?: 'list' | 'grid' | 'swipe';
}

const Actions: React.FC<ActionsProps> = ({
  onPostClick,
  onViewChange,
  defaultViewMode = 'list'
}) => {
  const theme = useTheme();

  return (
    <div className="actions-container">
      <button
        className="tap-animation post-button"
        onClick={onPostClick}
        style={createIconButtonStyle(theme, 'medium')}
        title="投稿する"
        aria-label="投稿する"
      >
        <div style={createIconStyle()}>
          <IoMdAdd size={theme.icons.sizes.medium} color={theme.primary} />
        </div>
      </button>
      <div className="view-mode-button">
        <SwapActionButton
          onViewChange={onViewChange}
          defaultViewMode={defaultViewMode}
        />
      </div>
    </div>
  );
};

export default Actions; 