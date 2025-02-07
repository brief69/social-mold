import { useState } from 'react'
import { NavBar, SideNavBar, SwapActionButton, PostButton, Profile, SearchForm, SideAction, ViewSwapActionButton, Chanel, Tab, Post } from './components'
import { ThemeProvider } from './theme/ThemeContext'
import { IoWalletOutline, IoSettingsOutline, IoDocumentOutline, IoNewspaperOutline } from 'react-icons/io5'
import './App.css'

function App() {
  const [showSideNav, setShowSideNav] = useState(false);
  const [activeScreen, setActiveScreen] = useState('home');

  const handleTabChange = (tabId: string, type: 'settings' | 'posts') => {
    console.log(`Selected ${type} tab: ${tabId}`);
  };

  const handleNavSwap = (isPlayRight: boolean) => {
    setShowSideNav(isPlayRight);
  };

  const handleLike = () => {
    console.log('Like action');
  };

  const handleShare = () => {
    console.log('Share action');
  };

  const handleComment = () => {
    console.log('Comment action');
  };

  const handleProfile = () => {
    console.log('Profile action');
  };

  const handleNavTabChange = (tab: string) => {
    setActiveScreen(tab);
  };

  const renderMainContent = () => {
    switch (activeScreen) {
      case 'post':
        return <Post />;
      case 'profile':
        return <Profile />;
      default:
        return (
          <>
            <div style={{ width: '100%', maxWidth: '800px' }}>
              <Chanel />
            </div>
            <div style={{
              display: 'flex',
              gap: '40px',
              alignItems: 'flex-start'
            }}>
              <div style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
              }}>
                <SearchForm />
                <Profile />
                <PostButton />
                <SwapActionButton onPlayDirectionChange={handleNavSwap} />
                <ViewSwapActionButton />
                <div style={{ display: 'flex', flexDirection: 'column', gap: '12px' }}>
                  <Tab
                    items={[
                      { id: '0', label: 'Setting', icon: <IoSettingsOutline size={20} /> },
                      { id: '1', label: 'Wallet', icon: <IoWalletOutline size={20} /> }
                    ]}
                    onTabChange={(id) => handleTabChange(id, 'settings')}
                  />
                  <Tab
                    items={[
                      { id: '0', label: 'Posts', icon: <IoNewspaperOutline size={20} /> },
                      { id: '1', label: 'Drafts', icon: <IoDocumentOutline size={20} /> }
                    ]}
                    onTabChange={(id) => handleTabChange(id, 'posts')}
                  />
                </div>
              </div>
              <SideAction
                onLike={handleLike}
                onShare={handleShare}
                onComment={handleComment}
                onProfile={handleProfile}
                position="right"
              />
            </div>
          </>
        );
    }
  };

  return (
    <ThemeProvider>
      <div style={{ minHeight: '100vh', backgroundColor: '#121212' }}>
        <div style={{ 
          paddingBottom: '60px', 
          paddingLeft: showSideNav ? '88px' : '0',
          display: 'flex', 
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center', 
          minHeight: '100vh',
          paddingTop: '20px',
        }}>
          {renderMainContent()}
        </div>
        {showSideNav ? (
          <SideNavBar onTabChange={handleNavTabChange} />
        ) : (
          <NavBar onTabChange={handleNavTabChange} />
        )}
      </div>
    </ThemeProvider>
  )
}

export default App
