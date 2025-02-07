import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavBar, SideNavBar, SwapActionButton, PostButton, Profile, SearchForm, SideActionButton, ViewSwapActionButton, Chanel, Tab } from './components'
import { ThemeProvider } from './theme/ThemeContext'
import { IoWalletOutline, IoSettingsOutline, IoDocumentOutline, IoNewspaperOutline } from 'react-icons/io5'
import './App.css'

function App() {
  const [showSideNav, setShowSideNav] = useState(false);

  const handleTabChange = (tabId: string, type: 'settings' | 'posts') => {
    console.log(`Selected ${type} tab: ${tabId}`);
  };

  const handleNavSwap = (isPlayRight: boolean) => {
    setShowSideNav(isPlayRight);
  };

  return (
    <ThemeProvider>
      <div style={{ minHeight: '100vh', backgroundColor: '#121212' }}>
        <div style={{ 
          paddingBottom: '60px', 
          paddingLeft: showSideNav ? '88px' : '0', // 左側にパディングを移動
          display: 'flex', 
          flexDirection: 'column',
          gap: '20px',
          alignItems: 'center', 
          minHeight: '100vh',
          paddingTop: '20px',
        }}>
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
            <SideActionButton />
          </div>
        </div>
        {showSideNav ? <SideNavBar /> : <NavBar />}
      </div>
    </ThemeProvider>
  )
}

export default App
