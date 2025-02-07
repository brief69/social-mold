import React, { useState } from 'react';
import { useSpring, animated } from '@react-spring/web';
import { useDrag } from '@use-gesture/react';
import ContentCard from '../common/content/ContentCard';
import { dummyContents } from '../common/content/dummyData';
import { IoHeartOutline, IoCloseOutline } from 'react-icons/io5';
import { useTheme } from '../../theme/ThemeContext';
import '../../styles/Layout.css';
import '../../styles/SwipeView.css';

interface SwipeViewProps {
  onAction?: (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => void;
}

interface DragState {
  active: boolean;
  movement: [number, number];
  velocity: [number, number];
  direction: [number, number];
}

const SwipeView: React.FC<SwipeViewProps> = ({ onAction }) => {
  const theme = useTheme();
  const [currentIndex, setCurrentIndex] = useState(0);
  const [leaving, setLeaving] = useState<'left' | 'right' | null>(null);

  const [springs, api] = useSpring(() => ({
    transform: 'translate3d(0px, 0, 0) rotate(0deg) scale(1)',
    config: { tension: 300, friction: 20 },
  }));

  const handleAction = (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => {
    onAction?.(action, itemId);
  };

  const bind = useDrag(
    ({ active, movement: [mx], velocity: [vx], direction: [dx] }: DragState) => {
      if (active && Math.abs(mx) > 0) {
        api.start({
          transform: `translate3d(${mx}px, 0, 0) rotate(${mx / 20}deg) scale(1)`,
        });
      } else {
        const trigger = Math.abs(mx) > 100 || Math.abs(vx) > 0.5;
        const dir = dx > 0 ? 'right' : 'left';

        if (trigger) {
          setLeaving(dir);
          const x = (dir === 'right' ? 1 : -1) * window.innerWidth * 1.5;
          const rotate = (dir === 'right' ? 1 : -1) * 30;
          api.start({
            transform: `translate3d(${x}px, 0, 0) rotate(${rotate}deg) scale(0.5)`,
            onRest: () => {
              setCurrentIndex(i => (i + 1) % dummyContents.length);
              setLeaving(null);
              api.start({ transform: 'translate3d(0px, 0, 0) rotate(0deg) scale(1)' });
            },
          });
        } else {
          api.start({ transform: 'translate3d(0px, 0, 0) rotate(0deg) scale(1)' });
        }
      }
    },
    { filterTaps: true, rubberband: true }
  );

  const currentItem = dummyContents[currentIndex];
  const currentTransform = springs.transform.get();
  const currentX = parseFloat(currentTransform.match(/translate3d\(([-\d.]+)px/)?.[1] || '0');

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
                className={`swipe-indicator left`}
                style={{ opacity: Math.min(Math.abs(currentX / 100), 1) }}
              >
                <IoCloseOutline />
              </div>
              <div 
                className={`swipe-indicator right`}
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
