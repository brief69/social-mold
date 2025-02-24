import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import ContentCard from '../common/content/ContentCard';
import { dummyImageContents } from '../common/content/dummyData';
import { IoHeartOutline, IoCloseOutline } from 'react-icons/io5';
import { useTheme } from '../../theme/ThemeContext';
import '../../styles/Layout.css';
import '../../styles/SwipeView.css';

interface SwipeViewProps {
  onAction?: (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => void;
}

const SwipeView: React.FC<SwipeViewProps> = ({ onAction }) => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [leaving, setLeaving] = useState(false);
  const [currentX, setCurrentX] = useState(0);

  const currentItem = dummyImageContents[currentIndex];

  const [{ x }, api] = useSpring(() => ({
    x: 0,
    config: { tension: 500, friction: 30 }
  }));

  const bind = useDrag(({ active, movement: [mx], direction: [xDir], cancel }) => {
    setCurrentX(mx);
    if (active && Math.abs(mx) > window.innerWidth / 3) {
      cancel();
      setLeaving(true);
      
      const isLike = mx > 0;
      api.start({
        x: (window.innerWidth + 200) * (isLike ? 1 : -1),
        onRest: () => {
          setCurrentIndex(state => (state + 1) % dummyImageContents.length);
          setLeaving(false);
          api.start({ x: 0 });
          setCurrentX(0);
          if (isLike) {
            onAction?.('like', currentItem.id);
          }
        }
      });
    } else {
      api.start({ x: active ? mx : 0 });
      if (!active) {
        setCurrentX(0);
      }
    }
  }, {
    bounds: { left: -window.innerWidth, right: window.innerWidth },
    rubberband: true
  });

  const handleAction = (action: 'like' | 'comment' | 'share' | 'profile') => {
    onAction?.(action, currentItem.id);
  };

  const springs = {
    x,
    rotate: x.to([0, window.innerWidth], [0, 45]),
    scale: x.to([-window.innerWidth, 0, window.innerWidth], [0.8, 1, 0.8])
  };

  return (
    <div className="layout-container">
      <div className="content-container">
        <div className="content-inner swipe-container">
          <div className="swipe-card" {...bind()}>
            <animated.div style={springs}>
              <ContentCard
                item={currentItem}
                variant="swipe"
                onAction={handleAction}
              />
              <div 
                className="swipe-indicator left"
                style={{ opacity: Math.min(Math.abs(currentX / 100), 1) }}
              >
                <IoCloseOutline />
              </div>
              <div 
                className="swipe-indicator right"
                style={{ opacity: Math.min(Math.abs(currentX / 100), 1) }}
              >
                <IoHeartOutline />
              </div>
            </animated.div>
          </div>

          {!leaving && (
            <div className="swipe-hint" style={{ color: theme.primary }}>
              <div>← スワイプで興味なし</div>
              <div>興味ありでスワイプ →</div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SwipeView;
