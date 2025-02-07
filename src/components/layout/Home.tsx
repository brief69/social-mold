import React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import '../../styles/Layout.css';

interface HomeProps {
  onNavigate?: (screen: string) => void;
}

const Home: React.FC<HomeProps> = ({ onNavigate }) => {
  const theme = useTheme();

  const handleGalleryClick = () => {
    onNavigate?.('gallery');
  };

  return (
    <div className="layout-container">
      <div className="content-container">
        <div className="content-inner">
          <div>Home Contents</div>
          
          <button
            onClick={handleGalleryClick}
            style={{
              background: 'none',
              border: `2px solid ${theme.primary}`,
              borderRadius: '30px',
              padding: '12px 24px',
              color: theme.primary,
              fontSize: '16px',
              cursor: 'pointer',
              transition: 'all 0.3s ease',
              marginTop: '20px',
            }}
            className="tap-animation"
          >
            View Component Gallery
          </button>
        </div>
      </div>
    </div>
  );
};

export default Home;
