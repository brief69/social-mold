import React from 'react';
import { useTheme } from '../../../theme/ThemeContext';
import ContentMedia from './ContentMedia';
import ContentActions from './ContentActions';
import ContentMetadata from './ContentMetadata';
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
    gap: '12px',
    padding: '16px',
    borderRadius: '16px',
    border: `1px solid ${theme.border}`,
    backgroundColor: 'transparent',
    width: '100%',
    maxWidth: variant === 'grid' ? '300px' : '600px',
    transition: 'all 0.3s ease',
  };

  const handleAction = (action: 'like' | 'comment' | 'share' | 'profile') => {
    onAction?.(action, item.id);
  };

  return (
    <div style={containerStyle} className="tap-animation">
      <ContentMetadata
        username={item.username}
        userAvatar={item.userAvatar}
        createdAt={item.createdAt}
        onProfileClick={() => handleAction('profile')}
      />
      
      <ContentMedia
        type={item.mainContent.type}
        content={item.mainContent.content}
        aspectRatio={item.mainContent.aspectRatio}
        duration={item.mainContent.duration}
      />

      {item.subContents?.map((subContent, index) => (
        <ContentMedia
          key={index}
          type={subContent.type}
          content={subContent.content}
          isSubContent
        />
      ))}

      <ContentActions
        likes={item.metadata.likes}
        comments={item.metadata.comments}
        shares={item.metadata.shares}
        views={item.metadata.views}
        onLike={() => handleAction('like')}
        onComment={() => handleAction('comment')}
        onShare={() => handleAction('share')}
      />
    </div>
  );
};

export default ContentCard; 