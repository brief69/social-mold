import React from 'react';
import { IoArrowUp, IoArrowDown, IoPlay } from 'react-icons/io5';
import { useTheme } from '../../theme/ThemeContext';
import '../../styles/animations.css';

const SwapActionButton: React.FC = () => {
  const theme = useTheme();

  const handleUpAction = () => {
    // TODO: 上矢印ボタンの処理を実装
  };

  const handleDownAction = () => {
    // TODO: 下矢印ボタンの処理を実装
  };

  const handlePlayAction = () => {
    // TODO: 再生ボタンの処理を実装
  };

  const handlePlayUpAction = () => {
    // TODO: 上向き再生ボタンの処理を実装
  };

  const buttonStyle = {
    background: 'none',
    border: `2px solid ${theme.primary}`,
    borderRadius: '50%',
    padding: '10px',
    width: '48px',
    height: '48px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as const;

  return (
    <div style={{
      display: 'flex',
      gap: '16px',
      padding: '12px'
    }}>
      <button
        className="tap-animation-large"
        onClick={handleUpAction}
        style={buttonStyle}
        title="Up Action"
        aria-label="Up Action"
      >
        <IoArrowUp size={28} color={theme.primary} />
      </button>

      <button
        className="tap-animation-large"
        onClick={handleDownAction}
        style={buttonStyle}
        title="Down Action"
        aria-label="Down Action"
      >
        <IoArrowDown size={28} color={theme.primary} />
      </button>

      <button
        className="tap-animation-large"
        onClick={handlePlayAction}
        style={buttonStyle}
        title="Play Action"
        aria-label="Play Action"
      >
        <IoPlay size={28} color={theme.primary} />
      </button>

      <button
        className="tap-animation-large"
        onClick={handlePlayUpAction}
        style={buttonStyle}
        title="Play Up Action"
        aria-label="Play Up Action"
      >
        <IoPlay size={28} color={theme.primary} style={{ transform: 'rotate(-90deg)' }} />
      </button>
    </div>
  );
};

export default SwapActionButton; 