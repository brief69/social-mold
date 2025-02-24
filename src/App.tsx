import { useState } from 'react'
import { 
  NavBar, 
  SideNavBar, 
  Post,
  ComponentGallery,
  Home,
  Search,
  Chat,
  Profile,
  Chanel,
} from './components'
import { ThemeProvider } from './theme/ThemeContext'
import { UIProvider } from './context/UIContext'
import AutoHideWrapper from './components/common/AutoHideWrapper'
import './App.css'

function App() {
  const [showSideNav, setShowSideNav] = useState(false);
  const [activeScreen, setActiveScreen] = useState('home');
  const [selectedChannelId, setSelectedChannelId] = useState('recommended');

  const handleNavSwap = (isPlayRight: boolean) => {
    setShowSideNav(isPlayRight);
  };

  const handleNavTabChange = (tab: string) => {
    setActiveScreen(tab);
  };

  const handleChannelChange = (channelId: string) => {
    setSelectedChannelId(channelId);
  };

  const handleGalleryClick = () => {
    setActiveScreen('gallery');
  };

  const renderMainContent = () => {
    switch (activeScreen) {
      case 'home':
        return <Home selectedChannelId={selectedChannelId} onChannelChange={handleChannelChange} />;
      case 'search':
        return <Search />;
      case 'post':
        return <Post />;
      case 'chat':
        return <Chat selectedChannelId={selectedChannelId} onChannelChange={handleChannelChange} />;
      case 'profile':
        return <Profile 
          onGalleryClick={handleGalleryClick} 
          onNavSwap={handleNavSwap}
          isShowingSideNav={showSideNav}
        />;
      case 'gallery':
        return <ComponentGallery />;
      default:
        return <Home selectedChannelId={selectedChannelId} onChannelChange={handleChannelChange} />;
    }
  };

  return (
    <ThemeProvider>
      <UIProvider>
        <div style={{ 
          position: 'fixed',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          backgroundColor: '#121212',
          overflow: 'auto',
        }}>
          <main style={{ 
            width: '100%',
            minHeight: '100%',
            paddingBottom: '120px',
            paddingLeft: showSideNav ? '88px' : '0',
            transition: 'padding-left 0.3s ease',
            backgroundColor: '#121212',
          }}>
            {renderMainContent()}
          </main>
          <AutoHideWrapper style={{
            position: 'fixed',
            bottom: showSideNav ? '0' : '60px',
            left: showSideNav ? '88px' : '0',
            right: '0',
            transition: 'all 0.3s ease',
          }}>
            <Chanel selectedChannelId={selectedChannelId} onChannelChange={handleChannelChange} />
          </AutoHideWrapper>
          <AutoHideWrapper>
            {showSideNav ? (
              <SideNavBar onTabChange={handleNavTabChange} onSwap={handleNavSwap} />
            ) : (
              <NavBar onTabChange={handleNavTabChange} onSwap={handleNavSwap} />
            )}
          </AutoHideWrapper>
        </div>
      </UIProvider>
    </ThemeProvider>
  )
}

export default App
