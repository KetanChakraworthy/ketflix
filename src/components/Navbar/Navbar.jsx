import React, { useEffect, useState } from 'react'
import ketflixLogo from '../../img/ketflix-logo.png';
import ketflixAvatar from '../../img/ketflix-avatar.png';
import './Navbar.css';
import { Link } from 'react-router-dom';

export default function Navbar() {

  const [isScroll, setIsScroll] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      if (window.scrollY > 100) {
        setIsScroll(true);
      } else setIsScroll(false)
      return () => { window.removeEventListener("scroll"); };
    })
  }, [])
  return (
    <nav className={`navbar ${isScroll && 'navbar__black'}`} >
      <Link to='/'>
        <img
          className='navbar__logo'
          src={ ketflixLogo }
          alt="Ketflix-Logo"
        />
      </Link>
      <div className="navbar__menu">
        <img
          className='navbar__avatar'
          src={ ketflixAvatar }
          alt="KetflixAvatar"
        />
      </div>
    </nav>
  )
}
