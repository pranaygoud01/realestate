import React from 'react'
import NavBar from './components/NavBar'
import Hero from './components/Hero'
import Services from './components/Services'
import About from './components/About'

const App = () => {
  return (
    <div>
      <NavBar/>
      <Hero/>
      
      <Services/>
      <About/>
    </div>
  )
}

export default App