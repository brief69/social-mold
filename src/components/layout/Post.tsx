import React, { useState } from 'react';
import { IoNewspaperOutline, IoDocumentOutline } from 'react-icons/io5';
import Tab from '../common/Tab';
import PostButton from '../common/PostButton';
import { useTheme } from '../../theme/ThemeContext';

const Post: React.FC = () => {
  const theme = useTheme();
  const [activeTab, setActiveTab] = useState('0');

  const handleTabChange = (tabId: string) => {
    setActiveTab(tabId);
  };

  return (
    <div style={{
      width: '100%',
      height: '100vh',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      gap: '20px',
      padding: '20px',
    }}>
      {/* タブ切り替え */}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        width: '100%',
        paddingTop: '20px',
      }}>
        <Tab
          items={[
            { id: '0', label: 'Posts', icon: <IoNewspaperOutline size={20} /> },
            { id: '1', label: 'Drafts', icon: <IoDocumentOutline size={20} /> }
          ]}
          onTabChange={handleTabChange}
        />
      </div>

      {/* コンテンツ表示エリア */}
      <div style={{
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        color: theme.primary,
      }}>
        {activeTab === '0' ? (
          <div>Posts Contents</div>
        ) : (
          <div>Drafts Contents</div>
        )}
      </div>

      {/* PostButton */}
      <div style={{
        position: 'fixed',
        bottom: '80px', // NavBarの上に配置
        right: '20px',
      }}>
        <PostButton />
      </div>
    </div>
  );
};

export default Post;
