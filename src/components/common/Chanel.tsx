import React, { useState, useRef } from 'react';

interface Channel {
  id: string;
  name: string;
}

const Chanel: React.FC = () => {
  const [activeChannel, setActiveChannel] = useState<string | null>(null);
  const [showSearch, setShowSearch] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);
  let scrollTimeout: number;

  const channels: Channel[] = [
    { id: '1', name: 'General' },
    { id: '2', name: 'Tech' },
    { id: '3', name: 'Design' },
    { id: '4', name: 'Marketing' },
    { id: '5', name: 'Sales' },
  ];

  const handleScroll = () => {
    if (scrollTimeout) {
      window.clearTimeout(scrollTimeout);
    }

    setShowSearch(true);
    scrollTimeout = window.setTimeout(() => {
      setShowSearch(false);
    }, 500);
  };

  const containerStyle: React.CSSProperties = {
    position: 'relative',
    width: '100%',
    height: '60px',
    overflow: 'hidden',
    backgroundColor: '#1E1E1E',
    borderRadius: '12px',
  };

  const scrollContainerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '20px',
    padding: '0 20px',
    overflowX: 'auto',
    height: '100%',
    alignItems: 'center',
    scrollBehavior: 'smooth',
    WebkitOverflowScrolling: 'touch',
  };

  const channelStyle = (isActive: boolean): React.CSSProperties => ({
    padding: '8px 16px',
    borderRadius: '8px',
    backgroundColor: isActive ? '#2E2E2E' : 'transparent',
    color: isActive ? '#FFFFFF' : '#888888',
    fontWeight: isActive ? 'bold' : 'normal',
    cursor: 'pointer',
    whiteSpace: 'nowrap',
    transition: 'all 0.3s ease',
  });

  const focusIndicatorStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '0',
    transform: 'translateX(-50%)',
    width: '120px',
    height: '100%',
    border: '2px solid #3E3E3E',
    borderRadius: '12px',
    pointerEvents: 'none',
  };

  const searchFormStyle: React.CSSProperties = {
    position: 'absolute',
    left: '50%',
    top: '50%',
    transform: 'translate(-50%, -50%)',
    padding: '8px 16px',
    backgroundColor: '#2E2E2E',
    borderRadius: '8px',
    opacity: showSearch ? 1 : 0,
    transition: 'opacity 0.3s ease',
    pointerEvents: showSearch ? 'auto' : 'none',
  };

  return (
    <div style={containerStyle}>
      <div
        ref={scrollRef}
        style={scrollContainerStyle}
        onScroll={handleScroll}
      >
        {channels.map((channel) => (
          <div
            key={channel.id}
            style={channelStyle(channel.id === activeChannel)}
            onClick={() => setActiveChannel(channel.id)}
          >
            {channel.name}
          </div>
        ))}
      </div>
      <div style={focusIndicatorStyle} />
      {showSearch && (
        <div style={searchFormStyle}>
          <input
            type="text"
            placeholder="Search channels..."
            style={{
              background: 'none',
              border: 'none',
              color: '#FFFFFF',
              outline: 'none',
            }}
          />
        </div>
      )}
    </div>
  );
};

export default Chanel; 