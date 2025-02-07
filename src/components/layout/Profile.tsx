import React from 'react';
import AppBar from './AppBar';
import '../../styles/Layout.css';

const Profile: React.FC = () => {
  const handleDirectionChange = (isUpArrow: boolean) => {
    console.log('Direction changed:', isUpArrow ? 'Up' : 'Down');
  };

  const handlePlayDirectionChange = (isPlayRight: boolean) => {
    console.log('Play direction changed:', isPlayRight ? 'Right' : 'Up');
  };

  return (
    <div className="layout-container">
      {/* AppBar */}
      <AppBar
        username="@testuser"
        onDirectionChange={handleDirectionChange}
        onPlayDirectionChange={handlePlayDirectionChange}
      />

      <div className="content-container">
        <div>Profile Contents</div>
      </div>
    </div>
  );
};

export default Profile;
