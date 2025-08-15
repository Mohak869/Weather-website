import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Weather_App from './assets/components/Weather_App'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Weather_App/>
    </>
  )
}

export default App
