import React, {useEffect, useState} from 'react';
import arm_muscle from './arm_muscle.png'
import lifting from './lifting.png'
import logoss from './logoss.jpg'
import menu from './menu.png'
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
            <img className='logoss' src={logoss} alt="" />
        </div>
        <ul className={` ${mobilemenu ? '' : 'hide-mobile-menu'} `}>
            <li>Home</li>
            <li>About Us</li>
            <li>Prices</li>
            <li>Testimonials</li>
            <li><button className='btn'>Contact Us</button></li>
        </ul>
        <img onClick={toggleMenu} src={menu} alt="" className='menu-icon '/>
    </nav>
  )
}

export default Navbar
