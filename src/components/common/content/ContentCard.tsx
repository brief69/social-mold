import React from 'react';
import { useTheme } from '../../../theme/ThemeContext';
import ContentMedia from './ContentMedia';
import SideAction from '../../layout/SideAction';
import AutoHideWrapper from '../AutoHideWrapper';
import '../../../styles/animations.css';

export interface ContentItem {
  id: string;
  userId: string;
  username: string;
  userAvatar?: string;
  createdAt: Date;
  mainContent: {
    type: 'text' | 'image' | 'video' | 'audio';
    content: string;
    aspectRatio?: number;
    duration?: number;
  };
  subContents?: {
    type: 'text' | 'image' | 'link';
    content: string;
  }[];
  metadata: {
    likes: number;
    comments: number;
    shares: number;
    views: number;
    tags?: string[];
  };
}

interface ContentCardProps {
  item: ContentItem;
  variant?: 'list' | 'grid' | 'swipe';
  onAction?: (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => void;
}

const ContentCard: React.FC<ContentCardProps> = ({
  item,
  variant = 'list',
  onAction,
}) => {
  const theme = useTheme();

  const containerStyle: React.CSSProperties = {
    display: 'flex',
    flexDirection: 'column',
    gap: variant === 'grid' ? '8px' : '12px',
    padding: variant === 'grid' ? '0' : '16px',
    borderRadius: variant === 'grid' ? '0' : '16px',
    border: variant === 'grid' ? 'none' : `1px solid ${theme.border}`,
    backgroundColor: 'transparent',
    width: '100%',
    height: variant === 'grid' ? '100%' : 'auto',
    maxWidth: variant === 'grid' ? 'none' : '600px',
    transition: 'all 0.3s ease',
    position: variant === 'grid' ? 'absolute' : 'relative',
    top: variant === 'grid' ? '0' : 'auto',
    left: variant === 'grid' ? '0' : 'auto',
    right: variant === 'grid' ? '0' : 'auto',
    bottom: variant === 'grid' ? '0' : 'auto',
  };

  const handleAction = (action: 'like' | 'comment' | 'share' | 'profile') => {
    onAction?.(action, item.id);
  };

  return (
    <div style={containerStyle} className="tap-animation">
      <ContentMedia
        type={item.mainContent.type}
        content={item.mainContent.content}
        aspectRatio={item.mainContent.aspectRatio}
        duration={item.mainContent.duration}
        variant={variant}
      />

      {item.subContents?.map((subContent, index) => (
        <ContentMedia
          key={index}
          type={subContent.type}
          content={subContent.content}
          isSubContent
          variant={variant}
        />
      ))}

      {/* タグの表示 */}
      {item.metadata.tags && item.metadata.tags.length > 0 && (
        <div style={{
          display: 'flex',
          flexWrap: 'wrap',
          gap: '8px',
          marginTop: '8px',
        }}>
          {item.metadata.tags.map((tag, index) => (
            <span
              key={index}
              style={{
                padding: '4px 8px',
                borderRadius: '16px',
                backgroundColor: `${theme.primary}20`,
                color: theme.primary,
                fontSize: '12px',
                fontWeight: '600',
              }}
            >
              #{tag}
            </span>
          ))}
        </div>
      )}

      {variant !== 'grid' && (
        <div style={{ 
          marginTop: '16px',
          width: '100%',
          display: 'flex',
          justifyContent: 'center',
          position: 'relative',
          left: '50%',
          transform: 'translateX(-50%)',
        }}>
          <AutoHideWrapper>
            <SideAction
              orientation="horizontal"
              position="left"
              onLike={() => handleAction('like')}
              onComment={() => handleAction('comment')}
              onShare={() => handleAction('share')}
              onProfile={() => handleAction('profile')}
              onSpread={() => handleAction('share')}
              likeCount={item.metadata.likes}
              commentCount={item.metadata.comments}
              shareCount={item.metadata.shares}
              profileCount={item.metadata.views}
              spreadCount={item.metadata.shares}
            />
          </AutoHideWrapper>
        </div>
      )}
    </div>
  );
};

export default ContentCard; 