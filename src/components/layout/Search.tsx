import React from 'react';
import { useTheme } from '../../theme/ThemeContext';

const Search: React.FC = () => {
  const theme = useTheme();

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
      {/* コンテンツ表示エリア */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.primary,
      }}>
        <div>Search Contents</div>
      </div>
    </div>
  );
};

export default Search;
