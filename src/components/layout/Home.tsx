import React from 'react';
import ListView from './ListView';
import '../../styles/Layout.css';

interface HomeProps {
  onAction?: (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => void;
}

const Home: React.FC<HomeProps> = ({ onAction }) => {
  const handleAction = (action: 'like' | 'comment' | 'share' | 'profile', itemId: string) => {
    console.log(`Action: ${action}, ItemId: ${itemId}`);
    // TODO: 各アクションの処理を実装
  };

  return (
    <div className="layout-container">
      <div className="content-container">
        <div className="content-inner">
          <ListView onAction={handleAction} />
        </div>
      </div>
    </div>
  );
};

export default Home;
