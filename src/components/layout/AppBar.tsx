import React, { useState, useRef } from 'react';
import { CgProfile } from 'react-icons/cg';
import { IoArrowUp, IoArrowDown, IoPlayOutline } from 'react-icons/io5';
import { useTheme } from '../../theme/ThemeContext';
import '../../styles/animations.css';

interface AppBarProps {
  username?: string;
  onDirectionChange?: (isUpArrow: boolean) => void;
  onPlayDirectionChange?: (isPlayRight: boolean) => void;
  onUsernameChange?: (newUsername: string) => void;
}

const AppBar: React.FC<AppBarProps> = ({
  username = '@username',
  onDirectionChange,
  onPlayDirectionChange,
  onUsernameChange,
}) => {
  const theme = useTheme();
  const [isUpArrow, setIsUpArrow] = React.useState(true);
  const [isPlayRight, setIsPlayRight] = React.useState(true);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [editedUsername, setEditedUsername] = useState(username);
  const [lastUsernameChange, setLastUsernameChange] = useState<number | null>(null);
  const [clickCount, setClickCount] = useState(0);
  const clickTimer = useRef<number | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);

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

  const handleImageClick = () => {
    fileInputRef.current?.click();
  };

  const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const file = event.target.files?.[0];
    if (file && file.type.startsWith('image/')) {
      const reader = new FileReader();
      reader.onload = (e) => {
        setUserImage(e.target?.result as string);
      };
      reader.readAsDataURL(file);
    }
  };

  const handleUsernameClick = () => {
    setClickCount(prev => prev + 1);
    
    if (clickTimer.current) {
      window.clearTimeout(clickTimer.current);
    }

    clickTimer.current = window.setTimeout(() => {
      setClickCount(0);
    }, 500);

    if (clickCount === 1) {
      const now = Date.now();
      if (lastUsernameChange && now - lastUsernameChange < 24 * 60 * 60 * 1000) {
        const remainingHours = Math.ceil((24 * 60 * 60 * 1000 - (now - lastUsernameChange)) / (60 * 60 * 1000));
        alert(`ユーザーネームは24時間に1回のみ変更可能です。\n残り時間: 約${remainingHours}時間`);
        return;
      }

      const confirmed = window.confirm(
        'ユーザーネームを変更しますか？\n\n' +
        '注意：\n' +
        '- ユーザーネームの変更は24時間に1回のみ可能です\n' +
        '- 一度変更すると、元に戻すにも24時間の待機が必要です'
      );

      if (confirmed) {
        setIsEditingUsername(true);
        setTimeout(() => {
          usernameInputRef.current?.focus();
          usernameInputRef.current?.select();
        }, 0);
      }
    }
  };

  const handleUsernameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setEditedUsername(e.target.value);
  };

  const handleUsernameBlur = () => {
    setIsEditingUsername(false);
    if (editedUsername.trim() && editedUsername !== username) {
      const confirmed = window.confirm(
        `ユーザーネームを「${editedUsername}」に変更してよろしいですか？\n` +
        '変更後24時間は再度の変更ができません。'
      );
      
      if (confirmed) {
        onUsernameChange?.(editedUsername);
        setLastUsernameChange(Date.now());
      } else {
        setEditedUsername(username);
      }
    } else {
      setEditedUsername(username);
    }
  };

  const handleUsernameKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      usernameInputRef.current?.blur();
    } else if (e.key === 'Escape') {
      setEditedUsername(username);
      setIsEditingUsername(false);
    }
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

  const userIconStyle = {
    width: '32px',
    height: '32px',
    borderRadius: '50%',
    objectFit: 'cover' as const,
  };

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
          onClick={handleImageClick}
          style={{
            ...buttonStyle,
            border: 'none',
            width: '48px',
            height: '48px',
            overflow: 'hidden',
          }}
          title="Change Profile Picture"
          aria-label="Change Profile Picture"
        >
          {userImage ? (
            <img src={userImage} alt="User" style={userIconStyle} />
          ) : (
            <CgProfile size={32} color={theme.primary} />
          )}
        </button>
        <input
          type="file"
          ref={fileInputRef}
          onChange={handleImageChange}
          accept="image/*"
          style={{ display: 'none' }}
          aria-label="Upload profile picture"
        />
        {isEditingUsername ? (
          <input
            ref={usernameInputRef}
            type="text"
            value={editedUsername}
            onChange={handleUsernameChange}
            onBlur={handleUsernameBlur}
            onKeyDown={handleUsernameKeyDown}
            style={{
              background: 'none',
              border: 'none',
              borderBottom: `2px solid ${theme.primary}`,
              color: theme.primary,
              fontSize: '16px',
              fontWeight: '600',
              padding: '4px',
              width: '120px',
              outline: 'none',
            }}
            aria-label="Edit username"
          />
        ) : (
          <button
            onClick={handleUsernameClick}
            style={{
              background: 'none',
              border: 'none',
              color: theme.primary,
              fontSize: '16px',
              fontWeight: '600',
              padding: '4px',
              cursor: 'pointer',
            }}
            className="tap-animation"
            title="Edit username"
            aria-label="Edit username"
          >
            {editedUsername}
          </button>
        )}
      </div>

      {/* 右側：スワップアクションボタングループ */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: '8px',
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