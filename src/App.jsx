import './App.css'
import Home from './pages/Home'
import About from './pages/about'
import Navbar from './Components/Navbar'
import Projects from './pages/Projects'
import Skills from './pages/Skills'
import Contact from './pages/Contact'
// import Contact from './Components/Contact/contact'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
function App() {
  
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Home/>
        <Skills/>
        <Projects/>
        <About/>
        <Contact/>
      </BrowserRouter>
    </>
  )
}

export default App
