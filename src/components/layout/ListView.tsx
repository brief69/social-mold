import React from 'react';
import ContentCard from '../common/content/ContentCard';
import { channels } from '../common/content/dummyData';
import '../../styles/Layout.css';

interface ListViewProps {
  onAction?: (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => void;
  selectedChannelId?: string;
}

const ListView: React.FC<ListViewProps> = ({ onAction, selectedChannelId = '0' }) => {
  const containerStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center',
    boxSizing: 'border-box',
  };

  const cardWrapperStyle: React.CSSProperties = {
    width: '100%',
    maxWidth: '600px',
    margin: '0 auto',
    transition: 'all 0.3s ease',
  };

  const handleAction = (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => {
    onAction?.(action, itemId);
  };

  // 選択されたチャンネルのコンテンツを取得
  const selectedChannel = channels.find(channel => channel.id === selectedChannelId);
  const contents = selectedChannel?.contents || channels[0].contents;

  return (
    <div className="layout-container">
      <div className="content-container">
        <div className="content-inner">
          <div style={containerStyle}>
            {contents.map((item) => (
              <div
                key={item.id}
                style={cardWrapperStyle}
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
