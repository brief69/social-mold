import React from 'react';
import SwapActionButton from '../common/SwapActionButton';
import AutoHideWrapper from '../common/AutoHideWrapper';
import '../../styles/Layout.css';

type ViewMode = 'list' | 'grid' | 'swipe';

interface PageLayoutProps {
  children: React.ReactNode;
  viewMode: ViewMode;
  onViewChange: (mode: ViewMode) => void;
  defaultViewMode?: ViewMode;
  topPadding?: number;
  extraContent?: React.ReactNode;
}

const PageLayout: React.FC<PageLayoutProps> = ({
  children,
  viewMode,
  onViewChange,
  defaultViewMode = 'list',
  topPadding = 0,
  extraContent,
}) => {
  return (
    <div className="layout-container">
      <div className="content-container" style={{ paddingTop: `${topPadding}px` }}>
        <div className="content-inner" style={{ position: 'relative' }}>
          <AutoHideWrapper style={{
            position: 'fixed',
            right: '20px',
            top: `${20 + topPadding}px`,
            zIndex: 1000,
          }}>
            <SwapActionButton
              onViewChange={onViewChange}
              defaultViewMode={defaultViewMode}
            />
          </AutoHideWrapper>
          {children}
          {extraContent}
        </div>
      </div>
    </div>
  );
};

export default PageLayout; 