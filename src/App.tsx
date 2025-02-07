import { useState } from 'react'
import { 
  NavBar, 
  SideNavBar, 
  Post,
  ComponentGallery,
  Home,
  Search,
  Chat,
  Profile
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

  const renderMainContent = () => {
    switch (activeScreen) {
      case 'home':
        return <Home onNavigate={handleNavTabChange} />;
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
        return <Home onNavigate={handleNavTabChange} />;
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
          <SideNavBar onTabChange={handleNavTabChange} onSwap={handleNavSwap} />
        ) : (
          <NavBar onTabChange={handleNavTabChange} onSwap={handleNavSwap} />
        )}
      </div>
    </ThemeProvider>
  )
}

export default App
