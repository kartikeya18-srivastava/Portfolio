import Home from './pages/Home'
import About from './pages/about'
import Navbar from './Components/Navbar'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
// import Contact from './Components/Contact/contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { useEffect, useState } from 'react'

function App() {
  const [cursorPos, setCursorPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setCursorPos({ x: e.clientX, y: e.clientY });
    };
    window.addEventListener('mousemove', handleMouseMove);
    return () => window.removeEventListener('mousemove', handleMouseMove);
  }, []);

  return (
    <div className="bg-black min-h-screen selection:bg-brand-purple selection:text-white overflow-x-hidden">
      <div className="mesh-bg"></div>
      <div
        className="cursor-glow hidden md:block"
        style={{ left: cursorPos.x, top: cursorPos.y }}
      ></div>
      <BrowserRouter>
        <Navbar />
        <Home />
        <Skills />
        <Projects />
        <About />
        <Contact />
      </BrowserRouter>
    </div>
  )
}

export default App
