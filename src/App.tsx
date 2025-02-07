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
} from './components'
import { ThemeProvider } from './theme/ThemeContext'
import './App.css'

function App() {
  const [showSideNav, setShowSideNav] = useState(false);
  const [activeScreen, setActiveScreen] = useState('home');

  const handleNavSwap = (isPlayRight: boolean) => {
    setShowSideNav(isPlayRight);
  };

  const handleNavTabChange = (tab: string) => {
    setActiveScreen(tab);
  };

  const handleGalleryClick = () => {
    setActiveScreen('gallery');
  };

  const renderMainContent = () => {
    switch (activeScreen) {
      case 'home':
        return <Home />;
      case 'search':
        return <Search />;
      case 'post':
        return <Post />;
      case 'chat':
        return <Chat />;
      case 'profile':
        return <Profile 
          onGalleryClick={handleGalleryClick} 
          onNavSwap={handleNavSwap}
          isShowingSideNav={showSideNav}
        />;
      case 'gallery':
        return <ComponentGallery />;
      default:
        return <Home />;
    }
  };

  return (
    <ThemeProvider>
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
          paddingBottom: '60px',
          paddingLeft: showSideNav ? '88px' : '0',
          transition: 'padding-left 0.3s ease',
          backgroundColor: '#121212',
        }}>
          {renderMainContent()}
        </main>
        {showSideNav ? (
          <SideNavBar onTabChange={handleNavTabChange} onSwap={handleNavSwap} />
        ) : (
          <NavBar onTabChange={handleNavTabChange} onSwap={handleNavSwap} />
        )}
      </div>
    </ThemeProvider>
  )
}

export default App
