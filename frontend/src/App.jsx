import React from 'react'
import { Routes, Route } from 'react-router-dom';

import Navbar from './components/navbar/Navbar'
import Hero from './components/herosection/Hero'
import Footer from './components/footer/footer';
import Contact from './components/contactus/Contact';
import Testimonial from './components/testimonial/Testimonial';
import About from './components/aboutsection/About';
import Counter from './components/counter/Counter';


// import Home from './pages/homepage/Home';


const App = () => {
  return (
    <div className='App'>  
        <Navbar />
        <Hero/>
        {/* <Routes>
            <Route path="/" element={<Home />} />
            
        </Routes> */}
        <Counter/>
        <About />
        <Testimonial />
        <Contact />
        <Footer />
        
    </div>
  )
}

export default App
