import React, { useState } from 'react';
import { IoNewspaperOutline, IoDocumentOutline } from 'react-icons/io5';
import Tab from '../common/Tab';
import PostButton from '../common/PostButton';
import '../../styles/Layout.css';

const Post: React.FC = () => {
  const [activeTab, setActiveTab] = useState('0');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div className="layout-container">
      <div className="content-container">
        <div style={{
          width: '100%',
          display: 'flex',
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center',
        }}>
          {/* タブ切り替え */}
          <Tab
            items={[
              { id: '0', label: 'Posts', icon: <IoNewspaperOutline size={20} /> },
              { id: '1', label: 'Drafts', icon: <IoDocumentOutline size={20} /> }
            ]}
            onTabChange={handleTabChange}
          />

          {/* コンテンツ表示エリア */}
          {activeTab === '0' ? (
            <div>Posts Contents</div>
          ) : (
            <div>Drafts Contents</div>
          )}

          {/* PostButton */}
          <div style={{
            position: 'fixed',
            bottom: '80px',
            right: '20px',
          }}>
            <PostButton />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Post;
