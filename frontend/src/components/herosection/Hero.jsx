import React, { useEffect, useRef, useState} from 'react'
import './Hero.css'
import hero from '../../images/hero-Image/hero_img.webp'
import hero_4 from '../../images/hero-Image/hero_4.jpg'
import facebook from '../../images/hero-Image/facebook.png'
import instagram from '../../images/hero-Image/instagram.png'
import linkedin from '../../images/hero-Image/linkedin.png'
import whatsapp from '../../images/hero-Image/whatsapp.png'


const Hero = () => {


    const iconStyle = {
        fontSize : '1rem',
        marginLeft : '2px'
    }

  return (
    <div className="hero-container" id='home'>
      <div className="hero-content">
        <h1>Chill Out, We've Got You Covered</h1>
        <p>Fast, reliable AC repair and installation to rescue you from the heat. Trusted AC technicians serving Lagos with precision and care</p>
        <button className="hero-cta">
          Get Started 
          <span className="arrow">→</span>
        </button>

        <div className='social-container'>
            <a href="#" data-tooltip="Facebook" ><img className='social-icons' src={facebook} alt="facebook" loading='lazy'/></a>
            <a href="#" data-tooltip="Whatsapp"><img className='social-icons'  src={whatsapp} alt="whatsapp" loading='lazy'/></a>
            <a href="#" data-tooltip="Instagram"><img className='social-icons'  src={instagram} alt="instagram" loading='lazy'/></a>
            <a href="#" data-tooltip="LinkedIn"><img className='social-icons' src={linkedin} alt="linkedin" loading='lazy'/></a>
        </div>
      </div>
      <div className="hero-image">
        <img src={hero} className='hero-img' alt="hero" />
      </div>
    </div>
    
  )
}

export default Hero
