import { useState } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import Properties from './components/Properties'
import Contact from './components/Contact'
import Footer from './components/Footer'
import About from './components/About'

function App() {
  const [count, setCount] = useState(0)

  return( 
    <>  
      <Navbar />
      <Hero />
      <About />
      <Properties />
      <Contact />
      <Footer />
    </>
)
}

export default App
