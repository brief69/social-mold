import React from 'react';
import AppBar from './AppBar';
import { useTheme } from '../../theme/ThemeContext';

const Profile: React.FC = () => {
  const theme = useTheme();

  const handleDirectionChange = (isUpArrow: boolean) => {
    console.log('Direction changed:', isUpArrow ? 'Up' : 'Down');
  };

  const handlePlayDirectionChange = (isPlayRight: boolean) => {
    console.log('Play direction changed:', isPlayRight ? 'Right' : 'Up');
  };

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px',
    }}>
      {/* AppBar */}
      <AppBar
        username="@testuser"
        onDirectionChange={handleDirectionChange}
        onPlayDirectionChange={handlePlayDirectionChange}
      />

      {/* コンテンツ表示エリア */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.primary,
      }}>
        <div>Profile Contents</div>
      </div>
    </div>
  );
};

export default Profile;
