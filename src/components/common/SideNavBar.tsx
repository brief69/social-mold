import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { IoChatbubbles } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { useTheme } from '../../theme/ThemeContext';
import '../../styles/animations.css';

const SideNavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const theme = useTheme();

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  const iconButtonStyle = {
    background: 'none',
    border: 'none',
    padding: '16px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    width: '64px',
    height: '64px',
  } as const;

  return (
    <nav style={{
      position: 'fixed',
      left: '0',
      top: '50%',
      transform: 'translateY(-50%)',
      backgroundColor: theme.background,
      padding: '12px 0',
      display: 'flex',
      flexDirection: 'column',
      justifyContent: 'center',
      alignItems: 'center',
      gap: '8px',
      borderRight: `1px solid ${theme.border}`,
      height: 'auto',
      maxHeight: '80vh',
      borderTopRightRadius: '16px',
      borderBottomRightRadius: '16px',
    }}>
      <button 
        className="tap-animation"
        style={{
          ...iconButtonStyle,
          opacity: activeTab === 'home' ? 1 : 0.6
        }} 
        title="Home" 
        aria-label="Home"
        onClick={() => handleClick('home')}
      >
        <AiFillHome size={32} color={theme.primary} />
      </button>
      <button 
        className="tap-animation"
        style={{
          ...iconButtonStyle,
          opacity: activeTab === 'search' ? 1 : 0.6
        }} 
        title="Search" 
        aria-label="Search"
        onClick={() => handleClick('search')}
      >
        <BiSearch size={32} color={theme.primary} />
      </button>
      <button 
        className="tap-animation"
        style={{
          ...iconButtonStyle,
          opacity: activeTab === 'post' ? 1 : 0.6
        }} 
        title="Create Post" 
        aria-label="Create Post"
        onClick={() => handleClick('post')}
      >
        <IoMdAdd size={32} color={theme.primary} />
      </button>
      <button 
        className="tap-animation"
        style={{
          ...iconButtonStyle,
          opacity: activeTab === 'chat' ? 1 : 0.6
        }} 
        title="Chat" 
        aria-label="Chat"
        onClick={() => handleClick('chat')}
      >
        <IoChatbubbles size={32} color={theme.primary} />
      </button>
      <button 
        className="tap-animation"
        style={{
          ...iconButtonStyle,
          opacity: activeTab === 'profile' ? 1 : 0.6
        }} 
        title="Profile" 
        aria-label="Profile"
        onClick={() => handleClick('profile')}
      >
        <CgProfile size={32} color={theme.primary} />
      </button>
    </nav>
  );
};

export default SideNavBar;
