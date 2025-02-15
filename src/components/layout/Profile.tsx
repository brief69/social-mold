import React, { useState } from 'react';
import ListView from './ListView';
import GridView from './GridView';
import SwipeView from './SwipeView';
import SwapActionButton from '../common/SwapActionButton';
import AppBar from './AppBar';
import '../../styles/Layout.css';
import AutoHideWrapper from '../common/AutoHideWrapper';

type ViewMode = 'list' | 'grid' | 'swipe';

interface ProfileProps {
  onAction?: (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => void;
  onGalleryClick?: () => void;
  onNavSwap?: (isPlayRight: boolean) => void;
  isShowingSideNav?: boolean;
}

const Profile: React.FC<ProfileProps> = ({ 
  onAction, 
  onGalleryClick,
  onNavSwap,
  isShowingSideNav = false
}) => {
  const [viewMode, setViewMode] = useState<ViewMode>('grid');

  const handleAction = (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => {
    onAction?.(action, itemId);
  };

  const handleDirectionChange = (isUpArrow: boolean) => {
    // 上下矢印の切り替えは表示モードに影響を与えないように修正
    // setViewMode(isUpArrow ? 'list' : 'swipe');
  };

  const handlePlayDirectionChange = (isPlayRight: boolean) => {
    onNavSwap?.(isPlayRight);
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
        isPlayRight={!isShowingSideNav}
      />
      <div className="content-container" style={{ paddingTop: '64px' }}>
        <div className="content-inner">
          <AutoHideWrapper style={{
            position: 'fixed',
            right: viewMode === 'list' ? '5%' : '20px',
            top: '84px',
            zIndex: 1000,
          }}>
            <SwapActionButton
              onViewChange={setViewMode}
              defaultViewMode={viewMode}
            />
          </AutoHideWrapper>
          {renderContent()}
        </div>
      </div>
    </div>
  );
};

export default Profile;
