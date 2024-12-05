import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar'
import Hero from './components/herosection/Hero'
import Footer from './components/footer/footer';

// import Home from './pages/homepage/Home';


const App = () => {
  return (
    <div className='App'>  
        <Navbar />
        <Hero/>
        {/* <Routes>
            <Route path="/" element={<Home />} />
            
        </Routes> */}
        <Footer />
        
    </div>
  )
}

export default App
