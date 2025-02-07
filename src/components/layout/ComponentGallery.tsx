import React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import { 
  PostButton, 
  Profile, 
  SearchForm, 
  SideActionButton, 
  SwapActionButton,
  ViewSwapActionButton,
  Tab,
  Chanel
} from '../common';
import { IoSettingsOutline, IoWalletOutline } from 'react-icons/io5';

const ComponentGallery: React.FC = () => {
  const theme = useTheme();

  const sectionStyle = {
    padding: '40px',
    borderBottom: `1px solid ${theme.border}`,
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '20px',
  };

  const titleStyle = {
    color: theme.primary,
    fontSize: '24px',
    fontWeight: 'bold',
  };

  return (
    <div style={{
      width: '100%',
      maxWidth: '1200px',
      margin: '0 auto',
      padding: '20px',
      color: theme.primary,
    }}>
      <h1 style={{
        fontSize: '32px',
        marginBottom: '40px',
        textAlign: 'center',
        color: theme.primary,
      }}>
        Component Gallery
      </h1>

      {/* PostButton */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>PostButton</h2>
        <PostButton />
      </div>

      {/* Profile */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Profile</h2>
        <Profile />
      </div>

      {/* SearchForm */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>SearchForm</h2>
        <SearchForm />
      </div>

      {/* SideActionButton */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>SideActionButton</h2>
        <SideActionButton />
      </div>

      {/* SwapActionButton */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>SwapActionButton</h2>
        <SwapActionButton />
      </div>

      {/* ViewSwapActionButton */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>ViewSwapActionButton</h2>
        <ViewSwapActionButton />
      </div>

      {/* Tab */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Tab</h2>
        <Tab
          items={[
            { id: '0', label: 'Tab 1', icon: <IoSettingsOutline size={20} /> },
            { id: '1', label: 'Tab 2', icon: <IoWalletOutline size={20} /> }
          ]}
        />
      </div>

      {/* Chanel */}
      <div style={sectionStyle}>
        <h2 style={titleStyle}>Chanel</h2>
        <Chanel />
      </div>
    </div>
  );
};

export default ComponentGallery; 