import React, {useEffect, useState} from 'react';
import { Link} from 'react-scroll';
import menu from './menu.png'
import wrench from '../../images/hero-Image/wrench.png'
import './Navbar.css'




const Navbar = () => {
    //to make the color of the navbar dynamic when it scrolls down the page
    const [sticky, setsticky] = useState(false)

    useEffect(()=> {
        window.addEventListener('scroll', ()=>{
            window.scrollY > 500 ? setsticky(true) : setsticky(false)
        })//so when eventlistener is listening to when the pages scrolls verticall(Y axis) the position  of the scroll is recorded by the window as a number 
        //if the number is greater 50 then setsticky will true but if not setsticky will be false
    }, [])

    const [mobilemenu, setmobilemenu] = useState(false)

    const toggleMenu = () => {
        mobilemenu ? setmobilemenu(false) : setmobilemenu(true)
        //so the logic is when the menu is clicked the function will check if the mobilemenu is true if yes set it to false but if not set it to true
        //so thru that we will update the classname with the hide-mobile-menu 
    }
    


  return (
    <nav className={`maincontainer ${sticky ? 'white-nav' : '' }`}>
        <div className='logos'>
            <img className='logoss' src={wrench} alt="logo" /><span>S A Dairo Cooling Services</span>
        </div>
        <ul className={` ${mobilemenu ? '' : 'hide-mobile-menu'} `}>
            <Link to='#'><li>Home</li></Link>
            <Link to='about' smooth={true} offset={-160} duration={500}><li>About Us</li></Link>
            <Link to='#'><li>Services</li></Link>
            <Link to='testimonial'  smooth={true} offset={-150} duration={500}><li>Testimonials</li></Link>
            <Link to='contact'  smooth={true} offset={-220} duration={500}><li><button className='btn'>Contact Us</button></li></Link>
        </ul>
        <img onClick={toggleMenu} src={menu} alt="" className='menu-icon '/>
    </nav>
  )
}

export default Navbar
