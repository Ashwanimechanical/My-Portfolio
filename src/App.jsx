import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './component/Navbar'
import Hero from './component/Hero'
import About from './component/About'
import Mywork from './component/Mywork'
import Contact from './component/Contact'
import Footer from './component/Footer'
import Skills from './component/Skills'

const App = () => {
  return (
    <div>
      <Navbar/>
      <Hero/>
      <About/>
      <Skills/>
      <Mywork/>
      <Contact/>
      <Footer/>
    </div>
  )
}

export default App