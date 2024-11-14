import React from 'react'
import NavBar from './component/NavBar/NavBar'
import Hero from './component/Hero/Hero'
import About from './component/About/About'
import Services from './component/Services/Services'
import MyWork from './component/MyWork/MyWork'
import Contact from './component/Contact/Contact'
import Footer from './component/Footer/Footer'

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <About />
      <Services />
      <MyWork />
      <Contact/>
      <Footer />
    </div>
  )
}

export default App
