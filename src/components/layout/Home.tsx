import React, { useState } from 'react';
import ListView from './ListView';
import GridView from './GridView';
import SwipeView from './SwipeView';
import SwapActionButton from '../common/SwapActionButton';
import '../../styles/Layout.css';

type ViewMode = 'list' | 'grid' | 'swipe';

interface HomeProps {
  onAction?: (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => void;
}

const Home: React.FC<HomeProps> = ({ onAction }) => {
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

export default Home;
