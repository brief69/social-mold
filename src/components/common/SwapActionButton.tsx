import React, { useState } from 'react';
import { IoArrowUp, IoArrowDown } from 'react-icons/io5';
import { IoPlayOutline } from 'react-icons/io5';
import { useTheme } from '../../theme/ThemeContext';
import '../../styles/animations.css';

interface SwapActionButtonProps {
  onPlayDirectionChange?: (isPlayRight: boolean) => void;
}

const SwapActionButton: React.FC<SwapActionButtonProps> = ({ onPlayDirectionChange }) => {
  const theme = useTheme();
  const [isUpArrow, setIsUpArrow] = useState(true);
  const [isPlayRight, setIsPlayRight] = useState(true);

  const handleUpAction = () => {
    setIsUpArrow(!isUpArrow);
    // 矢印ボタンの機能は無効化
  };

  const handleDownAction = () => {
    setIsUpArrow(!isUpArrow);
    // 矢印ボタンの機能は無効化
  };

  const handlePlayAction = () => {
    const newIsPlayRight = !isPlayRight;
    setIsPlayRight(newIsPlayRight);
    onPlayDirectionChange?.(newIsPlayRight); // NavBarとSideNavBarの切り替え
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

  const playIconStyle = {
    strokeWidth: '3',
    transform: 'scale(1.2)',
  } as const;

  const playIconRotatedStyle = {
    ...playIconStyle,
    transform: 'scale(1.2) rotate(-90deg)',
  } as const;

  return (
    <div style={{
      display: 'flex',
      gap: '16px',
      padding: '12px'
    }}>
      {isUpArrow ? (
        <button
          className="tap-animation-large"
          onClick={handleUpAction}
          style={buttonStyle}
          title="Up Action"
          aria-label="Up Action"
        >
          <IoArrowUp size={28} color={theme.primary} />
        </button>
      ) : (
        <button
          className="tap-animation-large"
          onClick={handleDownAction}
          style={buttonStyle}
          title="Down Action"
          aria-label="Down Action"
        >
          <IoArrowDown size={28} color={theme.primary} />
        </button>
      )}

      <button
        className="tap-animation-large"
        onClick={handlePlayAction}
        style={buttonStyle}
        title={isPlayRight ? "Switch to SideNavBar" : "Switch to NavBar"}
        aria-label={isPlayRight ? "Switch to SideNavBar" : "Switch to NavBar"}
      >
        <IoPlayOutline 
          size={32} 
          color={theme.primary} 
          style={isPlayRight ? playIconStyle : playIconRotatedStyle} 
        />
      </button>
    </div>
  );
};

export default SwapActionButton; 