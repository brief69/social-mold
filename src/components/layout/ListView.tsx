import React from 'react';
import ContentCard from '../common/content/ContentCard';
import { dummyContents } from '../common/content/dummyData';
import '../../styles/Layout.css';

interface ListViewProps {
  onAction?: (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => void;
}

const ListView: React.FC<ListViewProps> = ({ onAction }) => {
  const containerStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '100%',
    margin: '0 auto',
    padding: '20px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    boxSizing: 'border-box',
  };

  const handleAction = (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => {
    onAction?.(action, itemId);
  };

  return (
    <div className="layout-container">
      <div className="content-container">
        <div className="content-inner">
          <div style={containerStyle}>
            {dummyContents.map((item) => (
              <div
                key={item.id}
                style={{
                  width: '100%',
                  maxWidth: '600px',
                  margin: '0 auto',
                  transition: 'all 0.3s ease',
                }}
              >
                <ContentCard
                  item={item}
                  variant="list"
                  onAction={handleAction}
                />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ListView;
