import React, { useState, useEffect } from 'react';
import ContentCard from '../common/content/ContentCard';
import { channels } from '../common/content/dummyData';
import '../../styles/Layout.css';

interface ListViewProps {
  onAction?: (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => void;
  selectedChannelId?: string;
}

const ListView: React.FC<ListViewProps> = ({ onAction, selectedChannelId = '0' }) => {
  const [windowWidth, setWindowWidth] = useState(window.innerWidth);
  const [showAdjacentChannels, setShowAdjacentChannels] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
      setShowAdjacentChannels(window.innerWidth >= 1200);
    };

    window.addEventListener('resize', handleResize);
    handleResize();

    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const containerStyle: React.CSSProperties = {
    width: '100%',
    display: 'flex',
    gap: '16px',
    alignItems: 'flex-start',
    boxSizing: 'border-box',
    position: 'relative',
  };

  const mainContentStyle: React.CSSProperties = {
    flex: '0 1 600px',
    display: 'flex',
    flexDirection: 'column',
    gap: '16px',
    alignItems: 'center',
    margin: '0 auto',
  };

  const adjacentContentStyle = (isLeft: boolean): React.CSSProperties => ({
    flex: '0 0 300px',
    display: showAdjacentChannels ? 'flex' : 'none',
    flexDirection: 'column',
    gap: '16px',
    position: 'sticky',
    top: '20px',
    opacity: 0.6,
    transform: `translateX(${isLeft ? '-10%' : '10%'})`,
    pointerEvents: 'none',
  });

  const handleAction = (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => {
    onAction?.(action, itemId);
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
          <div style={containerStyle}>
            {/* 前のチャネルのコンテンツ */}
            <div style={adjacentContentStyle(true)}>
              {prevContents.slice(0, 3).map((item) => (
                <div key={item.id} style={{ opacity: 0.7 }}>
                  <ContentCard
                    item={item}
                    variant="list"
                    onAction={handleAction}
                  />
                </div>
              ))}
            </div>

            {/* メインコンテンツ */}
            <div style={mainContentStyle}>
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
            <div style={adjacentContentStyle(false)}>
              {nextContents.slice(0, 3).map((item) => (
                <div key={item.id} style={{ opacity: 0.7 }}>
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
