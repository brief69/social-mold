import React from 'react';
import { useTheme } from '../../theme/ThemeContext';

const Home: React.FC = () => {
  const theme = useTheme();

  const handleGalleryClick = () => {
    // TODO: ギャラリーページへの遷移処理を実装
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
      {/* メインコンテンツ */}
      <div style={{
        flex: 1,
        display: 'flex',
        flexDirection: 'column',
        gap: '40px',
        alignItems: 'center',
        color: theme.primary,
      }}>
        <div>Home Contents</div>
        
        {/* コンポーネントギャラリーへのリンク */}
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
          }}
          className="tap-animation"
        >
          View Component Gallery
        </button>
      </div>
    </div>
  );
};

export default Home;
