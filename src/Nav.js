import React, { useEffect, useState } from 'react'
import "./Nav.css"
import {Link} from "react-scroll"
const Nav = () => {
    const [show,handleShow]=useState(false)
useEffect(() => {
  window.addEventListener("scroll", () => {
    if (window.scrollY > 100) {
      handleShow(() => true);
    } else {
      handleShow(() => false);
    }
  });
  return ()=>{
      window.removeEventListener("scroll");
  }
}, []);


  return (
    <div className={`nav ${show && "nav__black"}`}>
      <div>
      
      <ul>
                    <li><Link to="banner" duration={500} smooth={true}>Home</Link></li>
                    <li><Link to="netflix-original" duration={500} offset={-70} smooth={true}>Netflix Originals</Link></li>
                    <li><Link to="trending-now" duration={500} offset={-70} smooth={true}>Trending Now</Link></li>
                    <li><Link to="top-rated" duration={500} offset={-70} smooth={true}>Top Rated</Link></li>
                    <li><Link to="popular" duration={500} offset={-70} smooth={true}>Popular</Link></li>
                    <li><Link to="now-playing" duration={500} offset={-70} smooth={true}>Now Playing</Link></li>
                    <li><Link to="upcoming" duration={500} offset={-70} smooth={true}>Upcoming</Link></li>
                </ul>
  
       
      </div>
        <img 
        className='nav__logo'
        src="https://image.tmdb.org/t/p/original/wwemzKWzjKYJFfCeiB57q3r4Bcm.png"
        alt="Netflix Logo" 
        />


        <img
        className='nav__avatar' 
        src="https://i.pinimg.com/originals/0d/dc/ca/0ddccae723d85a703b798a5e682c23c1.png" 
        alt="Avatar Logo" 
        />
    </div>

  )
}

export default Nav;