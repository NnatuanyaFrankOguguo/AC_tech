import React from 'react'
import './Footer.css'
import facebook from '../../images/hero-Image/facebook.png'
import whatsapp from '../../images/hero-Image/whatsapp.png'
import instagram from '../../images/hero-Image/instagram.png'
import tiktok from '../../images/hero-Image/tiktok.png'

const Footer = () => {
  return (
    <div className='footer' id='footer'>
        <div className="footer-content">

            <div className="footer-content-left">
                {/* <img src={assets.logo} alt="" /> */}
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cum ducimus, consectetur aut possimus excepturi exercitationem vero tenetur quidem beatae, voluptas, nemo blanditiis similique!</p>
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
                    <li>+234 (0)70 7001 8654</li>
                    <li>contact@tomato.com</li>
                </ul>
            </div>

        </div>
        <hr/>
        <p className="footer-copyright">Copyright 2024 © Tomato.com - All Right Reserved</p>
    </div>
  )
}

export default Footer
