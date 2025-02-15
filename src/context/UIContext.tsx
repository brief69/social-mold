import React, { createContext, useContext, useState, useEffect } from 'react';

interface UIContextType {
  isUIVisible: boolean;
  setLastInteraction: (time: number) => void;
}

export const UIContext = createContext<UIContextType>({
  isUIVisible: true,
  setLastInteraction: () => {},
});

export const useUI = () => {
  const context = useContext(UIContext);
  if (!context) {
    throw new Error('useUI must be used within a UIProvider');
  }
  return context;
};

interface UIProviderProps {
  children: React.ReactNode;
}

export const UIProvider: React.FC<UIProviderProps> = ({ children }) => {
  const [isUIVisible, setIsUIVisible] = useState(true);
  const [lastInteraction, setLastInteraction] = useState(Date.now());

  useEffect(() => {
    const hideTimeout = setTimeout(() => {
      const timeSinceLastInteraction = Date.now() - lastInteraction;
      if (timeSinceLastInteraction >= 3000) {
        setIsUIVisible(false);
      }
    }, 3000);

    if (!isUIVisible) {
      setIsUIVisible(true);
    }

    return () => clearTimeout(hideTimeout);
  }, [lastInteraction]);

  return (
    <UIContext.Provider value={{ isUIVisible, setLastInteraction }}>
      {children}
    </UIContext.Provider>
  );
}; 