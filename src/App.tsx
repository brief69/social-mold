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
  AppBar,
  SwipeView,
  GridView,
} from './components'
import { ThemeProvider } from './theme/ThemeContext'
import './App.css'

function App() {
  const [showSideNav, setShowSideNav] = useState(false);
  const [activeScreen, setActiveScreen] = useState('home');
  const [viewMode, setViewMode] = useState<'list' | 'grid' | 'swipe'>('list');

  const handleNavSwap = (isPlayRight: boolean) => {
    setShowSideNav(isPlayRight);
  };

  const handleNavTabChange = (tab: string) => {
    setActiveScreen(tab);
  };

  const handleGalleryClick = () => {
    setActiveScreen('gallery');
  };

  const handleDirectionChange = (isUpArrow: boolean) => {
    setViewMode(isUpArrow ? 'list' : 'swipe');
  };

  const handlePlayDirectionChange = (isPlayRight: boolean) => {
    setViewMode(isPlayRight ? 'grid' : 'list');
  };

  const renderMainContent = () => {
    switch (activeScreen) {
      case 'home':
        switch (viewMode) {
          case 'list':
            return <Home />;
          case 'grid':
            return <GridView />;
          case 'swipe':
            return <SwipeView />;
          default:
            return <Home />;
        }
      case 'search':
        return <Search />;
      case 'post':
        return <Post />;
      case 'chat':
        return <Chat />;
      case 'profile':
        return <Profile />;
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
        <AppBar 
          onGalleryClick={handleGalleryClick}
          onDirectionChange={handleDirectionChange}
          onPlayDirectionChange={handlePlayDirectionChange}
        />
        <main style={{ 
          width: '100%',
          minHeight: '100%',
          paddingBottom: '60px',
          paddingLeft: showSideNav ? '88px' : '0',
          paddingTop: '64px',
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
