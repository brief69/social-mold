import React, { useState, useEffect } from 'react';
import ContentCard from '../common/content/ContentCard';
import { channels } from '../common/content/dummyData';
import '../../styles/Layout.css';
import '../../styles/ListView.css';

interface ListViewProps {
  onAction?: (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => void;
  selectedChannelId?: string;
  onChannelChange?: (channelId: string) => void;
}

const ListView: React.FC<ListViewProps> = ({ 
  onAction, 
  selectedChannelId = '0',
  onChannelChange,
}) => {
  const [showAdjacentChannels, setShowAdjacentChannels] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setShowAdjacentChannels(window.innerWidth >= 1200);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const handleAction = (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => {
    onAction?.(action, itemId);
  };

  const handleChannelClick = (channelId: string) => {
    onChannelChange?.(channelId);
  };

  // 現在のチャネルのインデックスを取得
  const currentChannelIndex = channels.findIndex(channel => channel.id === selectedChannelId);
  const prevChannelIndex = (currentChannelIndex - 1 + channels.length) % channels.length;
  const nextChannelIndex = (currentChannelIndex + 1) % channels.length;

  // 各チャネルのコンテンツを取得
  const currentContents = channels[currentChannelIndex]?.contents || [];
  const prevContents = channels[prevChannelIndex]?.contents || [];
  const nextContents = channels[nextChannelIndex]?.contents || [];

  return (
    <div className="layout-container">
      <div className="content-container">
        <div className="content-inner">
          <div className="list-view-container">
            {/* 前のチャネルのコンテンツ */}
            <div 
              className={`list-view-adjacent-content ${showAdjacentChannels ? 'show' : ''}`}
              onClick={() => handleChannelClick(channels[prevChannelIndex].id)}
            >
              {prevContents.slice(0, 3).map((item) => (
                <div key={item.id} className="list-view-card-wrapper">
                  <ContentCard
                    item={item}
                    variant="list"
                    onAction={handleAction}
                  />
                </div>
              ))}
            </div>

            {/* メインコンテンツ */}
            <div className="list-view-main-content">
              {currentContents.map((item) => (
                <div key={item.id}>
                  <ContentCard
                    item={item}
                    variant="list"
                    onAction={handleAction}
                  />
                </div>
              ))}
            </div>

            {/* 次のチャネルのコンテンツ */}
            <div 
              className={`list-view-adjacent-content right ${showAdjacentChannels ? 'show' : ''}`}
              onClick={() => handleChannelClick(channels[nextChannelIndex].id)}
            >
              {nextContents.slice(0, 3).map((item) => (
                <div key={item.id} className="list-view-card-wrapper">
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
    </div>
  );
};

export default ListView;
