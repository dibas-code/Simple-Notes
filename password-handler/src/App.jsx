import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Navbar from './components/Navbar'
import Manager from './components/manager'
import Footer from './components/Footer'

function App() {
  const [count, setCount] = useState(0)

  return (
    <div>
      <Navbar />
      <div className='min-h-[85vh] bg-white [background:radial-gradient(125%_125%_at_50%_10%,#fff_40%,#63e_100%)]'>
        <Manager />
      </div>
      <Footer />
    </div>
  )
}

export default App
