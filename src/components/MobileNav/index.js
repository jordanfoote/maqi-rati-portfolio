import React, { useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faBars } from '@fortawesome/free-solid-svg-icons'
import LogoS from '../../assets/images/logo-s.png'

const MobileNav = () => {
  const [showMenu, setShowMenu] = useState(false)

  let mobileMenu

  if (showMenu) {
    mobileMenu = (
      <div className="menu">
        {' '}
        <NavLink exact="true" to="/">
          <a color="#ffffff">Home</a>
        </NavLink>
        <NavLink to="/about">
          <a color="#ffffff">About</a>
        </NavLink>
        <NavLink to="/work">
          <a color="#ffffff">Work</a>
        </NavLink>
        <NavLink to="/contact">
          <a color="#ffffff">Contact</a>
        </NavLink>
      </div>
    )
  }

  return (
    <nav className="mobile-nav">
      <div className="main">
        <Link className="logo" to="/">
          <img src={LogoS} alt="logo" />
        </Link>
        <span className="hamburger">
          <FontAwesomeIcon
            icon={faBars}
            onClick={() => setShowMenu(!showMenu)}
          />
        </span>
      </div>

      {mobileMenu}
    </nav>
  )
}

export default MobileNav
