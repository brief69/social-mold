import React, { useState } from 'react';
import ListView from './ListView';
import GridView from './GridView';
import SwipeView from './SwipeView';
import SwapActionButton from '../common/SwapActionButton';
import AppBar from './AppBar';
import AutoHideWrapper from '../common/AutoHideWrapper';
import '../../styles/Layout.css';
import '../../styles/Profile.css';

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

  // CSSカスタムプロパティを設定
  document.documentElement.style.setProperty(
    '--swap-button-right',
    viewMode === 'list' ? '5%' : '20px'
  );

  return (
    <div className="layout-container">
      <AppBar
        onGalleryClick={onGalleryClick}
        onPlayDirectionChange={handlePlayDirectionChange}
        isPlayRight={!isShowingSideNav}
      />
      <div className="content-container profile-content-container">
        <div className="content-inner">
          <AutoHideWrapper className="profile-swap-button-wrapper">
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
