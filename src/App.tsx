import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavBar, SwapActionButton, PostButton, Profile, SearchForm, SideActionButton, ViewSwapActionButton, Chanel } from './components'
import { ThemeProvider } from './theme/ThemeContext'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <div style={{ minHeight: '100vh', backgroundColor: '#121212' }}>
        <div style={{ 
          paddingBottom: '60px', 
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
              <SwapActionButton />
              <ViewSwapActionButton />
            </div>
            <SideActionButton />
          </div>
        </div>
        <NavBar />
      </div>
    </ThemeProvider>
  )
}

export default App
