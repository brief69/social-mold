import React, { useState } from 'react';
import ListView from './ListView';
import GridView from './GridView';
import SwipeView from './SwipeView';
import ViewSwapActionButton from '../common/ViewSwapActionButton';
import '../../styles/Layout.css';

type ViewMode = 'list' | 'grid' | 'swipe';

interface ChatProps {
  onAction?: (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => void;
}

const Chat: React.FC<ChatProps> = ({ onAction }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('list');

  const handleAction = (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => {
    onAction?.(action, itemId);
  };

  const renderContent = () => {
    switch (viewMode) {
      case 'list':
        return <ListView onAction={handleAction} />;
      case 'grid':
        return <GridView onAction={handleAction} />;
      case 'swipe':
        return <SwipeView onAction={handleAction} />;
      default:
        return <ListView onAction={handleAction} />;
    }
  };

  return (
    <div className="layout-container">
      <div className="content-container">
        <div className="content-inner">
          <div className="view-swap-button">
            <ViewSwapActionButton
              onViewChange={setViewMode}
              defaultMode={viewMode}
            />
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Chat; 