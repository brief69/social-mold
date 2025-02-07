import React from 'react';
import { useTheme } from '../../theme/ThemeContext';
import '../../styles/animations.css';

const PostButton: React.FC = () => {
  const theme = useTheme();

  const handlePost = () => {
    // TODO: 投稿処理を実装
  };

  const buttonStyle = {
    background: 'none',
    border: `2px solid ${theme.primary}`,
    borderRadius: '50%',
    width: '64px',
    height: '64px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    color: theme.primary,
    fontSize: '16px',
    fontWeight: 'bold',
  } as const;

  return (
    <button
      className="tap-animation-large"
      onClick={handlePost}
      style={buttonStyle}
      title="Create Post"
      aria-label="Create Post"
    >
      Post
    </button>
  );
};

export default PostButton; 