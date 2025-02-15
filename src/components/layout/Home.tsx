import React, { useState } from 'react';
import ListView from './ListView';
import GridView from './GridView';
import SwipeView from './SwipeView';
import SwapActionButton from '../common/SwapActionButton';
import AutoHideWrapper from '../common/AutoHideWrapper';
import '../../styles/Layout.css';

type ViewMode = 'list' | 'grid' | 'swipe';

interface HomeProps {
  onAction?: (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => void;
}

const Home: React.FC<HomeProps> = ({ onAction }) => {
  const [viewMode, setViewMode] = useState<ViewMode>('list');
  const [currentItemId, setCurrentItemId] = useState<string | null>(null);

  const handleAction = (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => {
    setCurrentItemId(itemId);
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
        <div className="content-inner" style={{ position: 'relative' }}>
          <AutoHideWrapper style={{
            position: 'fixed',
            right: viewMode === 'list' ? '5%' : '20px',
            top: '20px',
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

export default Home;
