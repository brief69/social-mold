import React, { useState } from 'react';
import { AiFillHome } from 'react-icons/ai';
import { BiSearch } from 'react-icons/bi';
import { IoMdAdd } from 'react-icons/io';
import { IoChatbubbles } from 'react-icons/io5';
import { CgProfile } from 'react-icons/cg';
import { useTheme } from '../../theme/ThemeContext';
import '../../styles/animations.css';

const NavBar: React.FC = () => {
  const [activeTab, setActiveTab] = useState('home');
  const theme = useTheme();

  const handleClick = (tab: string) => {
    setActiveTab(tab);
  };

  const iconButtonStyle = {
    background: 'none',
    border: 'none',
    padding: '8px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as const;

  return (
    <nav style={{
      position: 'fixed',
      bottom: 0,
      left: 0,
      width: '100%',
      backgroundColor: theme.background,
      padding: '12px 0',
      display: 'flex',
      justifyContent: 'space-around',
      alignItems: 'center',
      borderTop: `1px solid ${theme.border}`
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
        <AiFillHome size={24} color={theme.primary} />
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
        <BiSearch size={24} color={theme.primary} />
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
        <IoMdAdd size={24} color={theme.primary} />
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
        <IoChatbubbles size={24} color={theme.primary} />
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
        <CgProfile size={24} color={theme.primary} />
      </button>
    </nav>
  );
};

export default NavBar; 