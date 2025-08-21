import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Serving from './components/Serving';
import Offerings from './components/Offerings';
import About from './components/About';


const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  return (
    
    <div className="dark:bg-gray-500">
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <Serving />
      <About />
      <Offerings />
      
    </div>
  )
}

export default App
