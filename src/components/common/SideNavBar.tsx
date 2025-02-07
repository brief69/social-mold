import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { IoChatbubbles } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { useTheme } from '../../theme/ThemeContext';
import { createIconButtonStyle, createIconStyle } from '../../styles/IconStyles';
import '../../styles/animations.css';

interface SideNavBarProps {
  onTabChange?: (tab: string) => void;
  onSwap?: (isPlayRight: boolean) => void;
}

const SideNavBar: React.FC<SideNavBarProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('home');
  const theme = useTheme();

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <nav style={{
      position: 'fixed',
      left: '0',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: theme.background,
      padding: `${theme.icons.spacing.small}px 0`,
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: theme.icons.spacing.small,
      borderRight: `1px solid ${theme.border}`,
      height: 'auto',
      maxHeight: '80vh',
      borderTopRightRadius: '16px',
      borderBottomRightRadius: '16px',
    }}>
      <button 
        className="tap-animation"
        style={{
          ...createIconButtonStyle(theme, 'medium'),
          opacity: activeTab === 'home' ? 1 : 0.6
        }} 
        title="Home" 
        aria-label="Home"
        onClick={() => handleClick('home')}
      >
        <div style={createIconStyle()}>
          <AiFillHome size={theme.icons.sizes.medium} color={theme.primary} />
        </div>
      </button>
      <button 
        className="tap-animation"
        style={{
          ...createIconButtonStyle(theme, 'medium'),
          opacity: activeTab === 'search' ? 1 : 0.6
        }} 
        title="Search" 
        aria-label="Search"
        onClick={() => handleClick('search')}
      >
        <div style={createIconStyle()}>
          <BiSearch size={theme.icons.sizes.medium} color={theme.primary} />
        </div>
      </button>
      <button 
        className="tap-animation"
        style={{
          ...createIconButtonStyle(theme, 'medium'),
          opacity: activeTab === 'post' ? 1 : 0.6
        }} 
        title="Create Post" 
        aria-label="Create Post"
        onClick={() => handleClick('post')}
      >
        <div style={createIconStyle()}>
          <IoMdAdd size={theme.icons.sizes.medium} color={theme.primary} />
        </div>
      </button>
      <button 
        className="tap-animation"
        style={{
          ...createIconButtonStyle(theme, 'medium'),
          opacity: activeTab === 'chat' ? 1 : 0.6
        }} 
        title="Chat" 
        aria-label="Chat"
        onClick={() => handleClick('chat')}
      >
        <div style={createIconStyle()}>
          <IoChatbubbles size={theme.icons.sizes.medium} color={theme.primary} />
        </div>
      </button>
      <button 
        className="tap-animation"
        style={{
          ...createIconButtonStyle(theme, 'medium'),
          opacity: activeTab === 'profile' ? 1 : 0.6
        }} 
        title="Profile" 
        aria-label="Profile"
        onClick={() => handleClick('profile')}
      >
        <div style={createIconStyle()}>
          <CgProfile size={theme.icons.sizes.medium} color={theme.primary} />
        </div>
      </button>
    </nav>
  );
};

export default SideNavBar;
