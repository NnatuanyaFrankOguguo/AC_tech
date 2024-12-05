import React, { useEffect, useRef, useState} from 'react'
import './Hero.css'
import leftarrow from './left.png'
import rightarrow from './right.png'
import hero_4 from '../../images/hero-Image/hero_4.jpg'
import facebook from '../../images/hero-Image/facebook.png'
import tiktok from '../../images/hero-Image/tiktok.png'
import instagram from '../../images/hero-Image/instagram.png'
import whatsapp from '../../images/hero-Image/whatsapp.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';

const Hero = () => {


    const iconStyle = {
        fontSize : '1rem',
        marginLeft : '2px'
    }

  return (
    <div className='hero-section' style={{backgroundImage : `url(${hero_4})`}}>
        <div className="hero-container maincontainer" >    
            
            <div className='hero-info'>
                <div className="hero-details">
                    <div className='intro-text'>
                        <p>THE BEST</p>
                        <p>Real Estate Agency</p>
                    </div>
                </div>

                <h1 className='intro-header'>Ouchman Global Resources Agency Limited</h1>

                <div className='directories'>
                    <h3>A real life estate company that offers you a life tenancy</h3>

                    <p className='para'>Bringing a moment of satisfaction to your doorstep</p>
                

                
                    <button className='intro-btn'>Get Started <FontAwesomeIcon style={iconStyle} icon={faArrowRight} /></button>

                    <div className='social-container'>
                        <a href="#" data-tooltip="Facebook" ><img className='social-icons' src={facebook} alt="facebook" loading='lazy'/></a>
                        <a href="#" data-tooltip="Whatsapp"><img className='social-icons'  src={whatsapp} alt="whatsapp" loading='lazy'/></a>
                        <a href="#" data-tooltip="Instagram"><img className='social-icons'  src={instagram} alt="instagram" loading='lazy'/></a>
                        <a href="#" data-tooltip="Tiktok"><img className='social-icons' src={tiktok} alt="tiktok" loading='lazy'/></a>
                    </div>
                </div>


            </div>
            

        </div>
    </div>
  )
}

export default Hero
