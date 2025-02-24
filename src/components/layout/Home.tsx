import React, { useState } from 'react';
import ListView from './ListView';
import GridView from './GridView';
import SwipeView from './SwipeView';
import Actions from '../common/Actions';
import '../../styles/Layout.css';

type ViewMode = 'list' | 'grid' | 'swipe';

interface HomeProps {
  onAction?: (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => void;
  selectedChannelId?: string;
  onChannelChange?: (channelId: string) => void;
  onPostClick?: () => void;
}

const Home: React.FC<HomeProps> = ({ 
  onAction,
  selectedChannelId = 'recommended',
  onChannelChange,
  onPostClick,
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('list');

  const handleAction = (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => {
    onAction?.(action, itemId);
  };

  const renderContent = () => {
    switch (viewMode) {
      case 'list':
        return <ListView 
          onAction={handleAction} 
          selectedChannelId={selectedChannelId}
          onChannelChange={onChannelChange}
        />;
      case 'grid':
        return <GridView onAction={handleAction} />;
      case 'swipe':
        return <SwipeView onAction={handleAction} />;
      default:
        return <ListView 
          onAction={handleAction}
          selectedChannelId={selectedChannelId}
          onChannelChange={onChannelChange}
        />;
    }
  };

  return (
    <div className="layout-container">
      <div className="content-container">
        <div className="content-inner">
          {renderContent()}
          <Actions
            onPostClick={onPostClick}
            onViewChange={setViewMode}
            defaultViewMode={viewMode}
          />
        </div>
      </div>
    </div>
  );
};

export default Home;
