import React, { useState, useRef, useEffect } from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { SearchForm } from '..';
import '../../styles/animations.css';

interface Channel {
  id: string;
  name: string;
}

const Chanel: React.FC = () => {
  const theme = useTheme();
  const scrollContainerRef = useRef<HTMLDivElement>(null);
  const [activeChannelId, setActiveChannelId] = useState<string>('1');
  const [showSearch, setShowSearch] = useState(false);
  const [isScrolling, setIsScrolling] = useState(false);
  let scrollTimeout: NodeJS.Timeout;

  // サンプルチャネルデータ
  const channels: Channel[] = [
    { id: '1', name: 'General' },
    { id: '2', name: 'Tech' },
    { id: '3', name: 'Design' },
    { id: '4', name: 'Marketing' },
    { id: '5', name: 'Sales' },
    { id: '6', name: 'Support' },
  ];

  const handleScroll = (e: React.UIEvent<HTMLDivElement>) => {
    // スクロール中フラグを設定
    setIsScrolling(true);
    clearTimeout(scrollTimeout);

    // スクロールの勢いを検知（仮の実装）
    const container = e.currentTarget;
    const isRapidScroll = Math.abs(container.scrollLeft - (container.scrollLeft || 0)) > 50;

    if (isRapidScroll) {
      setShowSearch(true);
    }

    // スクロール停止の検知
    scrollTimeout = setTimeout(() => {
      setIsScrolling(false);
      // TODO: 中央に最も近いチャネルを選択する処理
    }, 150);
  };

  const containerStyle = {
    position: 'relative' as const,
    width: '100%',
    overflow: 'hidden',
    padding: '20px 0',
  };

  const scrollContainerStyle = {
    display: 'flex',
    gap: '16px',
    overflowX: 'auto' as const,
    padding: '0 calc(50% - 100px)', // 中央揃えのための余白
    scrollSnapType: 'x mandatory' as const,
    scrollBehavior: 'smooth' as const,
    msOverflowStyle: 'none',
    scrollbarWidth: 'none' as const,
    '::-webkit-scrollbar': {
      display: 'none',
    },
  };

  const channelStyle = (isActive: boolean) => ({
    background: 'none',
    border: `2px solid ${theme.primary}`,
    borderRadius: '30px',
    padding: '12px 24px',
    color: theme.primary,
    fontSize: '16px',
    fontWeight: isActive ? 'bold' : 'normal',
    borderWidth: isActive ? '3px' : '2px',
    whiteSpace: 'nowrap' as const,
    cursor: 'pointer',
    scrollSnapAlign: 'center' as const,
  });

  const focusIndicatorStyle = {
    position: 'absolute' as const,
    top: '0',
    left: '50%',
    transform: 'translateX(-50%)',
    width: '200px',
    height: '100%',
    borderLeft: `2px solid ${theme.primary}40`,
    borderRight: `2px solid ${theme.primary}40`,
    pointerEvents: 'none' as const,
  };

  return (
    <div style={containerStyle}>
      <div style={focusIndicatorStyle} />
      <div
        ref={scrollContainerRef}
        style={scrollContainerStyle}
        onScroll={handleScroll}
      >
        {channels.map((channel) => (
          <button
            key={channel.id}
            style={channelStyle(channel.id === activeChannelId)}
            onClick={() => setActiveChannelId(channel.id)}
            className="tap-animation"
          >
            {channel.name}
          </button>
        ))}
        {showSearch && (
          <div style={channelStyle(false)}>
            <SearchForm />
          </div>
        )}
      </div>
    </div>
  );
};

export default Chanel; 