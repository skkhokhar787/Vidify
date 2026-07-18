import { useState } from 'react'
import './App.css'
import Header from './Components/Header/Header'
import SideBar from './Components/SideBar/SideBar'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <Header/>
      <SideBar />
    </>
  )
}

export default App
