import React from 'react';
import ListView from './ListView';

interface ChanelProps {
  selectedChannelId?: string;
  onChannelSelect: (channelId: string) => void;
  onAction?: (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => void;
}

const Chanel: React.FC<ChanelProps> = ({
  selectedChannelId = '0',
  onChannelSelect,
  onAction,
}) => {
  return (
    <div className="chanel-container">
      <ListView 
        onAction={onAction}
        selectedChannelId={selectedChannelId}
        onChannelChange={onChannelSelect}
      />
    </div>
  );
};

export default Chanel; 