import React from 'react';
import { useTheme } from '../../../theme/ThemeContext';

interface ContentMediaProps {
  type: 'text' | 'image' | 'video' | 'audio' | 'link';
  content: string;
  aspectRatio?: number;
  duration?: number;
  isSubContent?: boolean;
}

const ContentMedia: React.FC<ContentMediaProps> = ({
  type,
  content,
  aspectRatio = 16/9,
  duration,
  isSubContent = false,
}) => {
  const theme = useTheme();

  const containerStyle: React.CSSProperties = {
    width: '100%',
    position: 'relative',
    borderRadius: '8px',
    overflow: 'hidden',
  };

  const mediaStyle: React.CSSProperties = {
    width: '100%',
    height: type === 'text' ? 'auto' : '0',
    paddingBottom: type !== 'text' ? `${(1 / aspectRatio) * 100}%` : '0',
    position: type !== 'text' ? 'relative' : 'static',
    fontSize: isSubContent ? '14px' : '16px',
    color: theme.primary,
  };

  const renderMedia = () => {
    switch (type) {
      case 'text':
        return <p style={{ margin: 0, lineHeight: '1.5' }}>{content}</p>;
      
      case 'image':
        return (
          <img
            src={content}
            alt="Content"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        );
      
      case 'video':
        return (
          <video
            src={content}
            controls
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              width: '100%',
              height: '100%',
              objectFit: 'cover',
            }}
          />
        );
      
      case 'audio':
        return (
          <audio
            src={content}
            controls
            style={{
              width: '100%',
            }}
          />
        );
      
      case 'link':
        return (
          <a
            href={content}
            target="_blank"
            rel="noopener noreferrer"
            style={{
              color: theme.primary,
              textDecoration: 'underline',
            }}
          >
            {content}
          </a>
        );
      
      default:
        return null;
    }
  };

  return (
    <div style={containerStyle}>
      <div style={mediaStyle}>
        {renderMedia()}
      </div>
      {duration && type === 'video' && (
        <div style={{
          position: 'absolute',
          bottom: '8px',
          right: '8px',
          background: 'rgba(0, 0, 0, 0.7)',
          color: 'white',
          padding: '4px 8px',
          borderRadius: '4px',
          fontSize: '12px',
        }}>
          {Math.floor(duration / 60)}:{String(Math.floor(duration % 60)).padStart(2, '0')}
        </div>
      )}
    </div>
  );
};

export default ContentMedia; 