import React, { useState, useRef } from 'react';
import { useTheme } from '../../theme/ThemeContext';

interface Channel {
  id: string;
  name: string;
}

interface ChanelProps {
  channels?: Channel[];
  onChannelChange?: (channelId: string) => void;
}

const Chanel: React.FC<ChanelProps> = ({ 
  channels: customChannels,
  onChannelChange,
}) => {
  const theme = useTheme();
  const [activeChannel, setActiveChannel] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  const [lastScrollLeft, setLastScrollLeft] = useState(0);
  let scrollTimeout: number;
  let lastScrollTime = useRef(Date.now()).current;

  // デフォルトのチャネルリスト（0-30）
  const defaultChannels: Channel[] = Array.from({ length: 31 }, (_, i) => ({
    id: i.toString(),
    name: `chanel${i}`
  }));

  // カスタムチャネルが提供されている場合はそれを使用し、そうでない場合はデフォルトを使用
  const channels = customChannels || defaultChannels;

  const handleChannelClick = (channelId: string) => {
    setActiveChannel(channelId);
    onChannelChange?.(channelId);
    setShowSearch(false);

    // 選択されたチャネルまでスクロール
    const channelElement = document.getElementById(`channel-${channelId}`);
    channelElement?.scrollIntoView({ behavior: 'smooth', inline: 'center' });
  };

  const handleScroll = () => {
    if (scrollTimeout) {
      window.clearTimeout(scrollTimeout);
    }

    const currentTime = Date.now();
    const timeDiff = currentTime - lastScrollTime;
    const container = scrollRef.current;
    
    if (container) {
      const currentScrollLeft = container.scrollLeft;
      const scrollDiff = Math.abs(currentScrollLeft - lastScrollLeft);
      const currentSpeed = scrollDiff / timeDiff; // ピクセル/ミリ秒

      // スクロール距離とスクロール速度の両方を考慮
      const totalScrollWidth = container.scrollWidth - container.clientWidth;
      const scrollRatio = scrollDiff / totalScrollWidth; // スクロール距離の割合

      // スクロール距離が2%以上、または中速スクロールの場合に検索フォームを表示
      if (scrollRatio > 0.01 || currentSpeed > 0.01) {
        setShowSearch(true);
      }

      setLastScrollLeft(currentScrollLeft);
      lastScrollTime = currentTime;
    }

    scrollTimeout = window.setTimeout(() => {
      setShowSearch(false);
    }, 300);
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '60px',
    overflow: 'hidden',
    backgroundColor: 'transparent',
    borderRadius: '30px',
  };

  const scrollContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '20px',
    padding: '0 calc(50% - 100px)',
    overflowX: 'auto',
    height: '100%',
    alignItems: 'center',
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch',
    scrollSnapType: 'x mandatory',
  };

  const channelStyle = (isActive: boolean, name: string): React.CSSProperties => ({
    padding: '8px 16px',
    background: 'none',
    border: `2px solid ${theme.primary}`,
    borderRadius: '30px',
    color: isActive ? theme.background : theme.primary,
    backgroundColor: isActive ? theme.primary : 'transparent',
    fontWeight: isActive ? '800' : '400',
    fontSize: isActive ? '18px' : '16px',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all 0.3s ease',
    minWidth: `${Math.max(100, 20 + name.length * 12)}px`,
    height: '44px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    scrollSnapAlign: 'center',
    position: 'relative',
    zIndex: 1,
    boxSizing: 'border-box',
  });

  const focusIndicatorStyle = (name: string): React.CSSProperties => ({
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    width: `${Math.max(100, 20 + name.length * 12)}px`,
    height: '44px',
    border: `2px solid ${theme.primary}`,
    borderRadius: '30px',
    pointerEvents: 'none',
    transition: 'all 0.3s ease',
    padding: '8px 16px',
    boxSizing: 'border-box',
    margin: '-2px',
    opacity: showSearch ? 0 : 1, // 検索フォーム表示時は非表示
  });

  const searchFormStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '8px 16px',
    background: 'none',
    border: `2px solid ${theme.primary}`,
    borderRadius: '30px',
    opacity: showSearch ? 1 : 0,
    transition: 'all 0.3s ease',
    pointerEvents: showSearch ? 'auto' : 'none',
    minWidth: '200px',
    height: '44px',
    boxSizing: 'border-box',
    display: 'flex',
    alignItems: 'center',
  };

  // アクティブなチャネルの名前を取得
  const activeChannelName = channels.find(c => c.id === activeChannel)?.name || '';

  return (
    <div style={containerStyle}>
      <div style={focusIndicatorStyle(activeChannelName)} />
      <div
        ref={scrollRef}
        style={scrollContainerStyle}
        onScroll={handleScroll}
      >
        {channels.map((channel) => (
          <div
            key={channel.id}
            id={`channel-${channel.id}`}
            style={channelStyle(channel.id === activeChannel, channel.name)}
            onClick={() => handleChannelClick(channel.id)}
            className="tap-animation"
          >
            {channel.name}
          </div>
        ))}
      </div>
      {showSearch && (
        <div style={searchFormStyle}>
          <input
            type="text"
            placeholder="Search channels..."
            style={{
              background: 'none',
              border: 'none',
              color: theme.primary,
              outline: 'none',
              width: '100%',
              fontSize: '16px',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Chanel;