export const createTapAnimation = (scale: number = 0.95) => ({
  transform: 'scale(1)',
  transition: 'transform 0.1s ease, opacity 0.2s ease',
  ':active': {
    transform: `scale(${scale})`,
  }
});

export const buttonBaseStyle = {
  cursor: 'pointer',
  userSelect: 'none' as const,
  WebkitTapHighlightColor: 'transparent',
  touchAction: 'manipulation',
}; 