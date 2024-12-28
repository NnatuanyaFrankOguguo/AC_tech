import React from 'react'
import './Footer.css'
import wrench from '../../images/hero-Image/wrench.png'
import facebook from '../../images/hero-Image/facebook.png'
import whatsapp from '../../images/hero-Image/whatsapp.png'
import instagram from '../../images/hero-Image/instagram.png'
import tiktok from '../../images/hero-Image/tiktok.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">

            <div className="footer-content-left">
                <div className='logo-content'>
                    <img src={wrench} alt="" /><span><strong>S A Dairo Cooling & Electrical Services</strong></span>
                </div>
                
                <p>Keeping Lagos cool since 2005. S A Dairo Cooling Services is your trusted partner for all air conditioning and electrical needs. We pride ourselves on prompt service, expert technicians, and customer satisfaction.</p>
                <div className="footer-social-icons">
                    <img src={facebook} alt="facebook" />
                    <img src={whatsapp} alt="whatsapp" />
                    <img src={instagram} alt="instagram" />
                    <img src={tiktok} alt="tikok" />
                </div>
            </div>

            <div className="footer-content-center">
                <h2>COMPANY</h2>
                <ul>
                    <li>Home</li>
                    <li>About us</li>
                    <li>Delivery</li>
                    <li>Privacy Policy</li>
                </ul>
            </div>

            <div className="footer-content-right">
                <h2>GET IN TOUCH</h2>
                <ul>
                    <li>+234 (0)818 324 1932</li>
                    <li>dairos@ymail.com</li>
                </ul>
            </div>

        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 © S A Cooling Services.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
