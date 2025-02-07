import React from 'react';
import { IoArrowUp, IoArrowDown, IoPlay } from 'react-icons/io5';

const SwapActionButton: React.FC = () => {
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

  return (
    <div style={{
      display: 'flex',
      gap: '16px',
      padding: '12px'
    }}>
      <button
        onClick={handleUpAction}
        style={buttonStyle}
        title="Up Action"
        aria-label="Up Action"
      >
        <IoArrowUp size={28} color="#FFFFFF" />
      </button>

      <button
        onClick={handleDownAction}
        style={buttonStyle}
        title="Down Action"
        aria-label="Down Action"
      >
        <IoArrowDown size={28} color="#FFFFFF" />
      </button>

      <button
        onClick={handlePlayAction}
        style={buttonStyle}
        title="Play Action"
        aria-label="Play Action"
      >
        <IoPlay size={28} color="#FFFFFF" />
      </button>

      <button
        onClick={handlePlayUpAction}
        style={buttonStyle}
        title="Play Up Action"
        aria-label="Play Up Action"
      >
        <IoPlay size={28} color="#FFFFFF" style={{ transform: 'rotate(-90deg)' }} />
      </button>
    </div>
  );
};

const buttonStyle = {
  background: 'none',
  border: '2px solid #FFFFFF',
  borderRadius: '50%',
  padding: '10px',
  width: '48px',
  height: '48px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  transition: 'all 0.2s ease',
  ':hover': {
    opacity: 0.8
  }
} as const;

export default SwapActionButton; 