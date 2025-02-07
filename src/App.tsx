import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import { NavBar, SwapActionButton } from './components'
import { ThemeProvider } from './theme/ThemeContext'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <ThemeProvider>
      <div style={{ minHeight: '100vh', backgroundColor: '#121212' }}>
        <div style={{ paddingBottom: '60px', display: 'flex', justifyContent: 'center', alignItems: 'center', minHeight: '100vh' }}>
          <SwapActionButton />
        </div>
        <NavBar />
      </div>
    </ThemeProvider>
  )
}

export default App
