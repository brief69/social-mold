import React, { useState, useRef, useEffect, useCallback } from 'react';
import { channels, Channel } from './content/dummyData';
import '../../styles/Chanel.css';

interface ChanelProps {
  onChannelChange?: (channelId: string) => void;
  selectedChannelId?: string;
}

const Chanel: React.FC<ChanelProps> = ({ 
  onChannelChange,
  selectedChannelId = 'recommended',
}) => {
  const [activeChannel, setActiveChannel] = useState<string | null>(selectedChannelId);
  const scrollRef = useRef<HTMLDivElement>(null);
  const scrollTimeout = useRef<ReturnType<typeof setTimeout>>(setTimeout(() => {}, 0));
  const lastActiveChannel = useRef<string | null>(null);
  const passedChannelsCount = useRef(0);
  const containerRef = useRef<HTMLDivElement>(null);
  const isUserScrolling = useRef<boolean>(false);
  const lastScrollTime = useRef<number>(0);

  // デフォルトのチャネルリストを使用
  const channelList = channels;

  // スクロール位置に基づいて中央のチャンネルを検出
  const detectCenterChannel = useCallback(() => {
    const container = scrollRef.current;
    if (!container) return;

    const containerRect = container.getBoundingClientRect();
    const containerCenter = containerRect.left + containerRect.width / 2;
    const threshold = containerRect.width * 0.15; // より広い検出範囲に調整

    let closestChannel: Channel | undefined;
    let minDistance = Infinity;

    container.querySelectorAll('.channel-item').forEach((element) => {
      const channelElement = element as HTMLElement;
      const channelRect = channelElement.getBoundingClientRect();
      const channelCenter = channelRect.left + channelRect.width / 2;
      const distance = Math.abs(containerCenter - channelCenter);

      if (distance < minDistance) {
        minDistance = distance;
        const channelId = channelElement.getAttribute('data-channel-id');
        closestChannel = channelList.find(c => c.id === channelId);
      }
    });

    // スクロール中は常にフォーカスを更新
    if (closestChannel?.id !== activeChannel) {
      const lastIndex = lastActiveChannel.current ? 
        channelList.findIndex(c => c.id === lastActiveChannel.current) : -1;
      const currentIndex = channelList.findIndex(c => c.id === closestChannel?.id);

      if (lastIndex !== -1 && currentIndex !== -1) {
        const direction = currentIndex > lastIndex ? 1 : -1;
        passedChannelsCount.current += direction;
      }

      if (closestChannel) {
        setActiveChannel(closestChannel.id);
        if (minDistance < threshold) {
          onChannelChange?.(closestChannel.id);
          lastActiveChannel.current = closestChannel.id;
        }
      }
    }
  }, [activeChannel, channelList, onChannelChange]);

  // スクロールハンドラー
  const handleScroll = useCallback(() => {
    const now = Date.now();
    if (now - lastScrollTime.current < 16) return; // 60fpsに制限
    lastScrollTime.current = now;

    if (scrollTimeout.current) {
      clearTimeout(scrollTimeout.current);
    }

    scrollTimeout.current = setTimeout(() => {
      isUserScrolling.current = false;
      // スクロール停止時に最後のチャネル変更を確実に適用
      const container = scrollRef.current;
      if (container) {
        const containerRect = container.getBoundingClientRect();
        const containerCenter = containerRect.left + containerRect.width / 2;
        let closestChannel: Channel | undefined;
        let minDistance = Infinity;

        container.querySelectorAll('.channel-item').forEach((element) => {
          const channelElement = element as HTMLElement;
          const channelRect = channelElement.getBoundingClientRect();
          const channelCenter = channelRect.left + channelRect.width / 2;
          const distance = Math.abs(containerCenter - channelCenter);

          if (distance < minDistance) {
            minDistance = distance;
            const channelId = channelElement.getAttribute('data-channel-id');
            closestChannel = channelList.find(c => c.id === channelId);
          }
        });

        if (closestChannel && closestChannel.id !== activeChannel) {
          setActiveChannel(closestChannel.id);
          onChannelChange?.(closestChannel.id);
          lastActiveChannel.current = closestChannel.id;
        }
      }
    }, 150);

    detectCenterChannel();
  }, [detectCenterChannel, activeChannel, channelList, onChannelChange]);

  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      const handleTouchStart = () => {
        isUserScrolling.current = true;
      };

      const handleMouseDown = () => {
        isUserScrolling.current = true;
      };

      container.addEventListener('scroll', handleScroll);
      container.addEventListener('touchmove', handleScroll);
      container.addEventListener('touchstart', handleTouchStart);
      container.addEventListener('mousedown', handleMouseDown);

      return () => {
        container.removeEventListener('scroll', handleScroll);
        container.removeEventListener('touchmove', handleScroll);
        container.removeEventListener('touchstart', handleTouchStart);
        container.removeEventListener('mousedown', handleMouseDown);
      };
    }
  }, [handleScroll]);

  useEffect(() => {
    if (selectedChannelId !== activeChannel) {
      setActiveChannel(selectedChannelId);
      isUserScrolling.current = false; // プログラムによる移動時はスクロール検出を無効化
      const activeElement = document.querySelector(`[data-channel-id="${selectedChannelId}"]`);
      if (activeElement) {
        activeElement.scrollIntoView({
          behavior: 'smooth',
          inline: 'center',
          block: 'nearest'
        });
      }
    }
  }, [selectedChannelId, activeChannel]);

  const handleChannelClick = (channelId: string) => {
    isUserScrolling.current = false; // クリックによる移動時はスクロール検出を無効化
    setActiveChannel(channelId);
    onChannelChange?.(channelId);
  };

  return (
    <div ref={containerRef} className="chanel-container">
      <div ref={scrollRef} className="chanel-scroll-container">
        {channelList.map((channel) => (
          <div
            key={channel.id}
            data-channel-id={channel.id}
            className={`channel-item ${channel.id === activeChannel ? 'active' : ''}`}
            onClick={() => handleChannelClick(channel.id)}
          >
            {channel.name}
          </div>
        ))}
      </div>
    </div>
  );
};

export default Chanel;