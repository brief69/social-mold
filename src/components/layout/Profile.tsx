import React, { useState } from 'react';
import ListView from './ListView';
import GridView from './GridView';
import SwipeView from './SwipeView';
import SwapActionButton from '../common/SwapActionButton';
import AppBar from './AppBar';
import '../../styles/Layout.css';

type ViewMode = 'list' | 'grid' | 'swipe';

interface ProfileProps {
  onAction?: (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => void;
  onGalleryClick?: () => void;
}

const Profile: React.FC<ProfileProps> = ({ onAction, onGalleryClick }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const handleAction = (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => {
    onAction?.(action, itemId);
  };

  const handleDirectionChange = (isUpArrow: boolean) => {
    setViewMode(isUpArrow ? 'list' : 'swipe');
  };

  const handlePlayDirectionChange = (isPlayRight: boolean) => {
    setViewMode(isPlayRight ? 'grid' : 'list');
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
        return <GridView onAction={handleAction} />;
    }
  };

  return (
    <div className="layout-container">
      <AppBar
        onGalleryClick={onGalleryClick}
        onDirectionChange={handleDirectionChange}
        onPlayDirectionChange={handlePlayDirectionChange}
      />
      <div className="content-container" style={{ paddingTop: '64px' }}>
        <div className="content-inner">
          <div style={{
            position: 'absolute',
            top: '20px',
            right: '20px',
            zIndex: 1000,
          }}>
            <SwapActionButton
              mode="view"
              onViewChange={setViewMode}
              defaultViewMode={viewMode}
            />
          </div>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Profile;
