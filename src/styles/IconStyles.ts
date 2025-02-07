import { CSSProperties } from 'react';
import { ThemeColors } from '../theme/ThemeContext';

// 基本的なアイコンボタンスタイル
export const createIconButtonStyle = (theme: ThemeColors, size: keyof ThemeColors['icons']['button'] = 'medium'): CSSProperties => ({
  background: 'none',
  border: 'none',
  width: `${theme.icons.button[size]}px`,
  height: `${theme.icons.button[size]}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.primary,
  cursor: 'pointer',
  padding: 0,
  position: 'relative',
  flexShrink: 0,
  WebkitTapHighlightColor: 'transparent',
  WebkitUserSelect: 'none',
  userSelect: 'none',
  touchAction: 'manipulation',
});

// 円形の枠線付きアイコンボタンスタイル
export const createCircleIconButtonStyle = (theme: ThemeColors, size: keyof ThemeColors['icons']['button'] = 'medium'): CSSProperties => ({
  ...createIconButtonStyle(theme, size),
  border: `2px solid ${theme.primary}`,
  borderRadius: '50%',
});

// アイコンのサイズ定義
export const IconSizes = {
  small: 'small',
  medium: 'medium',
  large: 'large',
  xlarge: 'xlarge',
} as const;

// アイコン自体のスタイル
export const createIconStyle = (scale: number = 1): CSSProperties => ({
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: `translate(-50%, -50%) scale(${scale})`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  width: '100%',
  height: '100%',
  transition: 'transform 0.3s ease',
});

// 回転可能なアイコンスタイル
export const createRotatableIconStyle = (scale: number = 1, rotation: number = 0): CSSProperties => ({
  ...createIconStyle(scale),
  transform: `translate(-50%, -50%) scale(${scale}) rotate(${rotation}deg)`,
}); 