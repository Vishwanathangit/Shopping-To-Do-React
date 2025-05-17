import { useState } from 'react'
import React from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import ShoopingList from './Shopping'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
<ShoopingList/>
    </>
  )
}

export default App
