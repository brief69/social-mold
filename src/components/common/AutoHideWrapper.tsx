import React, { useEffect, useContext } from 'react';
import { UIContext } from '../../context/UIContext';

interface AutoHideWrapperProps {
  children: React.ReactNode;
  style?: React.CSSProperties;
  className?: string;
}

const AutoHideWrapper: React.FC<AutoHideWrapperProps> = ({ children, style, className }) => {
  const { isUIVisible, setLastInteraction } = useContext(UIContext);

  useEffect(() => {
    const handleInteraction = () => {
      setLastInteraction(Date.now());
    };

    window.addEventListener('mousemove', handleInteraction);
    window.addEventListener('touchstart', handleInteraction);
    window.addEventListener('click', handleInteraction);
    window.addEventListener('scroll', handleInteraction);

    return () => {
      window.removeEventListener('mousemove', handleInteraction);
      window.removeEventListener('touchstart', handleInteraction);
      window.removeEventListener('click', handleInteraction);
      window.removeEventListener('scroll', handleInteraction);
    };
  }, [setLastInteraction]);

  return (
    <div
      className={className}
      style={{
        ...style,
        opacity: isUIVisible ? 1 : 0,
        visibility: isUIVisible ? 'visible' : 'hidden',
        transition: 'opacity 0.3s ease, visibility 0.3s ease',
      }}
    >
      {children}
    </div>
  );
};

export default AutoHideWrapper; 