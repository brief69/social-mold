import React, { createContext, useContext, ReactNode, useEffect } from 'react';

export interface ThemeColors {
  primary: string;
  background: string;
  text: string;
  border: string;
  icons: {
    sizes: {
      small: number;
      medium: number;
      large: number;
      xlarge: number;
    };
    spacing: {
      small: number;
      medium: number;
      large: number;
    };
    button: {
      small: number;
      medium: number;
      large: number;
      xlarge: number;
    };
  };
}

const defaultTheme: ThemeColors = {
  primary: '#FFFFFF',    // アイコンや枠線の色
  background: '#000000', // 背景色
  text: '#FFFFFF',       // テキスト色
  border: '#333333',     // ボーダー色
  icons: {
    // アイコン自体のサイズ
    sizes: {
      small: 24,    // 補助的なアイコン
      medium: 32,   // 標準的なアイコン
      large: 48,    // 強調されたアイコン
      xlarge: 64,   // プロフィールなどの大きいアイコン
    },
    // アイコン間のスペーシング
    spacing: {
      small: 8,     // コンパクトな配置
      medium: 16,   // 標準的な間隔
      large: 24,    // 広めの間隔
    },
    // ボタンのヒットエリアサイズ
    button: {
      small: 32,    // 補助的なボタン
      medium: 40,   // 標準的なボタン
      large: 48,    // メインアクションボタン
      xlarge: 64,   // 特に強調されたボタン
    },
  },
};

const ThemeContext = createContext<ThemeColors>(defaultTheme);

export const useTheme = () => useContext(ThemeContext);

interface ThemeProviderProps {
  children: ReactNode;
  theme?: Partial<ThemeColors>;
}

export const ThemeProvider: React.FC<ThemeProviderProps> = ({ children, theme }) => {
  const mergedTheme = { ...defaultTheme, ...theme };

  useEffect(() => {
    // 基本的な色のCSSカスタムプロパティを設定
    document.documentElement.style.setProperty('--primary-color', mergedTheme.primary);
    document.documentElement.style.setProperty('--background-color', mergedTheme.background);
    document.documentElement.style.setProperty('--text-color', mergedTheme.text);
    document.documentElement.style.setProperty('--border-color', mergedTheme.border);

    // アイコンサイズのCSSカスタムプロパティを設定
    Object.entries(mergedTheme.icons.sizes).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--icon-size-${key}`, `${value}px`);
    });

    // スペーシングのCSSカスタムプロパティを設定
    Object.entries(mergedTheme.icons.spacing).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--spacing-${key}`, `${value}px`);
    });

    // ボタンサイズのCSSカスタムプロパティを設定
    Object.entries(mergedTheme.icons.button).forEach(([key, value]) => {
      document.documentElement.style.setProperty(`--button-size-${key}`, `${value}px`);
    });
  }, [mergedTheme]);

  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
}; 