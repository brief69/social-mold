import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { IoChatbubbles } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { useTheme } from '../../theme/ThemeContext';
import { createIconButtonStyle, createIconStyle } from '../../styles/IconStyles';
import '../../styles/animations.css';

// TODO: 縦モードと、横モードの切り替えを実装する
// TODO: で、sidenavbarファイルを削除する
interface NavBarProps {
  onTabChange?: (tab: string) => void;
  onSwap?: (isPlayRight: boolean) => void;
}

const NavBar: React.FC<NavBarProps> = ({ onTabChange }) => {
  const [activeTab, setActiveTab] = useState('home');
  const theme = useTheme();

  const handleClick = (tab: string) => {
    setActiveTab(tab);
    onTabChange?.(tab);
  };

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: theme.background,
      padding: `${theme.icons.spacing.small}px 0`,
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTop: `1px solid ${theme.border}`,
      zIndex: 1000,
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

export default NavBar; 