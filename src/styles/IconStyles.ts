import { CSSProperties } from 'react';

// 基本的なアイコンボタンスタイル
export const createIconButtonStyle = (theme: any, size: number = 40): CSSProperties => ({
  background: 'none',
  border: 'none',
  width: `${size}px`,
  height: `${size}px`,
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.primary,
  cursor: 'pointer',
  padding: 0,
});

// 円形の枠線付きアイコンボタンスタイル
export const createCircleIconButtonStyle = (theme: any, size: number = 40): CSSProperties => ({
  ...createIconButtonStyle(theme, size),
  border: `2px solid ${theme.primary}`,
  borderRadius: '50%',
});

// アイコンのサイズ定義
export const IconSizes = {
  small: 24,
  medium: 32,
  large: 48,
  xlarge: 64,
} as const;

// アイコン自体のスタイル（transform等）
export const createIconStyle = (scale: number = 1): CSSProperties => ({
  transform: `scale(${scale})`,
  transition: 'transform 0.3s ease',
});

// 回転可能なアイコンスタイル
export const createRotatableIconStyle = (scale: number = 1, rotation: number = 0): CSSProperties => ({
  ...createIconStyle(scale),
  transform: `scale(${scale}) rotate(${rotation}deg)`,
}); 