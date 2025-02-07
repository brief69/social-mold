import React, { createContext, useContext, ReactNode, useEffect } from 'react';

interface ThemeColors {
  primary: string;
  background: string;
  text: string;
  border: string;
}

const defaultTheme: ThemeColors = {
  primary: '#FFFFFF',    // アイコンや枠線の色
  background: '#000000', // 背景色
  text: '#FFFFFF',       // テキスト色
  border: '#333333'      // ボーダー色
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
    // CSSカスタムプロパティを設定
    document.documentElement.style.setProperty('--primary-color', mergedTheme.primary);
    document.documentElement.style.setProperty('--background-color', mergedTheme.background);
    document.documentElement.style.setProperty('--text-color', mergedTheme.text);
    document.documentElement.style.setProperty('--border-color', mergedTheme.border);
  }, [mergedTheme]);

  return (
    <ThemeContext.Provider value={mergedTheme}>
      {children}
    </ThemeContext.Provider>
  );
}; 