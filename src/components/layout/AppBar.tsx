import React from 'react';
import { CgProfile } from 'react-icons/cg';
import { IoArrowUp, IoArrowDown, IoPlayOutline } from 'react-icons/io5';
import { useTheme } from '../../theme/ThemeContext';
import '../../styles/animations.css';

interface AppBarProps {
  username?: string;
  onDirectionChange?: (isUpArrow: boolean) => void;
  onPlayDirectionChange?: (isPlayRight: boolean) => void;
}

const AppBar: React.FC<AppBarProps> = ({
  username = '@username',
  onDirectionChange,
  onPlayDirectionChange,
}) => {
  const theme = useTheme();
  const [isUpArrow, setIsUpArrow] = React.useState(true);
  const [isPlayRight, setIsPlayRight] = React.useState(true);

  const handleDirectionChange = () => {
    const newDirection = !isUpArrow;
    setIsUpArrow(newDirection);
    onDirectionChange?.(newDirection);
  };

  const handlePlayDirectionChange = () => {
    const newPlayDirection = !isPlayRight;
    setIsPlayRight(newPlayDirection);
    onPlayDirectionChange?.(newPlayDirection);
  };

  const buttonStyle = {
    background: 'none',
    border: `2px solid ${theme.primary}`,
    borderRadius: '50%',
    padding: '10px',
    width: '40px',
    height: '40px',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  } as const;

  const iconStyle = {
    strokeWidth: '3',
    transform: 'scale(1.2)',
  } as const;

  const playIconRotatedStyle = {
    ...iconStyle,
    transform: 'scale(1.2) rotate(-90deg)',
  } as const;

  return (
    <div style={{
      position: 'fixed',
      top: 0,
      left: 0,
      right: 0,
      height: '64px',
      backgroundColor: theme.background,
      borderBottom: `1px solid ${theme.border}`,
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'space-between',
      padding: '0 16px',
      zIndex: 1000,
    }}>
      {/* 左側：ユーザーアイコンとユーザー名 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '12px',
      }}>
        <button
          className="tap-animation"
          style={{
            ...buttonStyle,
            border: 'none',
            width: '48px',
            height: '48px',
          }}
          title="Profile"
          aria-label="Profile"
        >
          <CgProfile size={32} color={theme.primary} />
        </button>
        <span style={{
          color: theme.primary,
          fontSize: '16px',
          fontWeight: '600',
        }}>
          {username}
        </span>
      </div>

      {/* 右側：スワップアクションボタングループ */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px', // ボタン間の間隔を縮小
      }}>
        {/* 方向切り替えボタン */}
        <button
          className="tap-animation-large"
          onClick={handleDirectionChange}
          style={buttonStyle}
          title={isUpArrow ? "Switch to Down" : "Switch to Up"}
          aria-label={isUpArrow ? "Switch to Down" : "Switch to Up"}
        >
          {isUpArrow ? (
            <IoArrowUp size={24} color={theme.primary} />
          ) : (
            <IoArrowDown size={24} color={theme.primary} />
          )}
        </button>

        {/* 再生方向切り替えボタン */}
        <button
          className="tap-animation-large"
          onClick={handlePlayDirectionChange}
          style={buttonStyle}
          title={isPlayRight ? "Switch to Up Play" : "Switch to Right Play"}
          aria-label={isPlayRight ? "Switch to Up Play" : "Switch to Right Play"}
        >
          <IoPlayOutline 
            size={28} 
            color={theme.primary} 
            style={isPlayRight ? iconStyle : playIconRotatedStyle} 
          />
        </button>
      </div>
    </div>
  );
};

export default AppBar; 