import React, { useState, useRef } from 'react';
import { CgProfile } from 'react-icons/cg';
import { IoGridOutline } from 'react-icons/io5';
import { useTheme } from '../../theme/ThemeContext';
import { createIconButtonStyle, createIconStyle } from '../../styles/IconStyles';
import '../../styles/animations.css';

interface AppBarProps {
  username?: string;
  onUsernameChange?: (newUsername: string) => void;
  onGalleryClick?: () => void;
}

const AppBar: React.FC<AppBarProps> = ({
  username = '@username',
  onUsernameChange,
  onGalleryClick,
}) => {
  const theme = useTheme();
  const [userImage, setUserImage] = useState<string | null>(null);
  const [isEditingUsername, setIsEditingUsername] = useState(false);
  const [editedUsername, setEditedUsername] = useState(username);
  const [lastUsernameChange, setLastUsernameChange] = useState<number | null>(null);
  const [clickCount, setClickCount] = useState(0);
  const clickTimer = useRef<number | undefined>(undefined);
  const fileInputRef = useRef<HTMLInputElement>(null);
  const usernameInputRef = useRef<HTMLInputElement>(null);

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

  const nameStyle = {
    background: 'none',
    border: 'none',
    color: theme.primary,
    fontSize: '16px',
    fontWeight: '600',
    padding: theme.icons.spacing.small,
    cursor: 'pointer',
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
      padding: `0 ${theme.icons.spacing.medium}px`,
      zIndex: 1000,
    }}>
      {/* 左側：ユーザーアイコンとユーザー名 */}
      <div style={{
        display: 'flex',
        alignItems: 'center',
        gap: theme.icons.spacing.medium,
      }}>
        <button
          className="tap-animation"
          onClick={handleImageClick}
          style={createIconButtonStyle(theme, 'medium')}
          title="Change Profile Picture"
          aria-label="Change Profile Picture"
        >
          <div style={createIconStyle()}>
            {userImage ? (
              <img 
                src={userImage} 
                alt="User" 
                style={{
                  width: '100%',
                  height: '100%',
                  objectFit: 'cover',
                  borderRadius: '50%',
                }} 
              />
            ) : (
              <CgProfile size={theme.icons.sizes.medium} color={theme.primary} />
            )}
          </div>
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
              ...nameStyle,
              borderBottom: `2px solid ${theme.primary}`,
              outline: 'none',
              width: '120px',
            }}
            aria-label="Edit username"
          />
        ) : (
          <button
            onClick={handleUsernameClick}
            style={nameStyle}
            className="tap-animation"
            title="Edit username"
            aria-label="Edit username"
          >
            {editedUsername}
          </button>
        )}
      </div>

      {/* 中央：ギャラリーボタン */}
      <button
        className="tap-animation"
        onClick={onGalleryClick}
        style={createIconButtonStyle(theme, 'medium')}
        title="Gallery"
        aria-label="Gallery"
      >
        <div style={createIconStyle()}>
          <IoGridOutline size={theme.icons.sizes.medium} color={theme.primary} />
        </div>
      </button>
    </div>
  );
};

export default AppBar; 