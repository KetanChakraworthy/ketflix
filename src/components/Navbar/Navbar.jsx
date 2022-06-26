import React, { useEffect, useState } from 'react'
import ketflixLogo from '../../img/ketflix-logo.png';
import ketflixAvatar from '../../img/ketflix-avatar.png';
import { ReactComponent as SearchIcon } from '../../img/search-icon.svg';
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
        <Link to='/search'>
          <div className="navbar__menuItem">
            <SearchIcon className='navbar__searchIcon'
              style={{ height: 25, width: 25 }} />
          </div>
        </Link>
        <Link to='/about'><div className="navbar__menuItem">About</div></Link>
        <Link to='/'>
          <div className='navbar__menuItem'>
            <img
              className='navbar__avatar'
              src={ ketflixAvatar }
              alt="KetflixAvatar"
            />
          </div>
        </Link>
      </div>
    </nav>
  )
}
