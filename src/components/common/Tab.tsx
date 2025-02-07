import React, { useState } from 'react';
import { useTheme } from '../../theme/ThemeContext';
import '../../styles/animations.css';

interface TabItem {
  id: '0' | '1';
  label?: string;
  icon?: React.ReactNode;
}

interface TabProps {
  items: [TabItem, TabItem];  // 必ず2つのタブを受け取る
  onTabChange?: (tabId: string) => void;
  defaultTabId?: '0' | '1';
}

const Tab: React.FC<TabProps> = ({
  items,
  onTabChange,
  defaultTabId = '0'
}) => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState<string>(defaultTabId);

  const handleTabClick = (tabId: string) => {
    setActiveTab(tabId);
    onTabChange?.(tabId);
  };

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    gap: '8px',
    padding: '4px',
    background: 'none',
    border: `2px solid ${theme.primary}`,
    borderRadius: '30px',
    width: 'fit-content',
  };

  const tabStyle = (isActive: boolean): React.CSSProperties => ({
    padding: '8px 16px',
    borderRadius: '24px',
    backgroundColor: isActive ? theme.primary : 'transparent',
    color: isActive ? theme.background : theme.primary,
    cursor: 'pointer',
    display: 'flex',
    alignItems: 'center',
    gap: '8px',
    fontSize: '16px',
    fontWeight: isActive ? '600' : '400',
    transition: 'all 0.3s ease',
    minWidth: '80px',
    justifyContent: 'center',
  });

  return (
    <div style={containerStyle}>
      {items.map((item) => (
        <div
          key={item.id}
          style={tabStyle(item.id === activeTab)}
          onClick={() => handleTabClick(item.id)}
          className="tap-animation"
        >
          {item.icon}
          {item.label}
        </div>
      ))}
    </div>
  );
};

export default Tab; 