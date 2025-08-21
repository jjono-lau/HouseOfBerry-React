import React, { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero';
import Serving from './components/Serving';
import Offerings from './components/Offerings';
import About from './components/About';
import Questions from './components/Questions';
import TheCart from './components/Contact';

const App = () => {

  const [theme, setTheme] = useState(localStorage.getItem('theme') ? localStorage.getItem('theme') : 'light');

  return (
    
    <div className="dark:bg-gray-500">
      <Navbar theme={theme} setTheme={setTheme}/>
      <Hero />
      <Serving />
      <About />
      <Offerings />
      <Questions />
      <TheCart />
      
    </div>
  )
}

export default App
