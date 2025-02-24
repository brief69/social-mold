import React from 'react';
import { IoShareSocialOutline, IoChatbubbleOutline, IoHeartOutline } from 'react-icons/io5';
import { useTheme } from '../../theme/ThemeContext';
import { createIconButtonStyle } from '../../styles/IconStyles';
import '../../styles/SideAction.css';

interface SideActionProps {
  contentId: string;
  onAction?: (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => void;
  orientation?: 'horizontal' | 'vertical';
}

const SideAction: React.FC<SideActionProps> = ({
  contentId,
  onAction,
  orientation = 'horizontal'
}) => {
  const theme = useTheme();

  const handleAction = (action: 'like' | 'comment' | 'share' | 'profile') => {
    onAction?.(action, contentId);
  };

  const buttonStyle = createIconButtonStyle(theme, 'medium');

  return (
    <div className={`side-action ${orientation}`}>
      <button
        className="action-button"
        onClick={() => handleAction('share')}
        style={buttonStyle}
        title="拡散"
      >
        <IoShareSocialOutline size={24} />
      </button>
      <button
        className="action-button"
        onClick={() => handleAction('like')}
        style={buttonStyle}
        title="いいね"
      >
        <IoHeartOutline size={24} />
      </button>
      <button
        className="action-button"
        onClick={() => handleAction('comment')}
        style={buttonStyle}
        title="コメント"
      >
        <IoChatbubbleOutline size={24} />
      </button>
    </div>
  );
};

export default SideAction; 