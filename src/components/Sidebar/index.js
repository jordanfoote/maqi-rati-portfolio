import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'

const Sidebar = () => {
  const hamburger = document.querySelector('.hamburger')
  const navMenu = document.querySelector('.nav-menu')

  hamburger.addEventListener('click', () => {
    console.log('clicked')
    hamburger.classList.toggle('active')
    navMenu.classList.toggle('active')
  })

  return (
    <div className="nav-bar">
      <nav>
        <NavLink exact="true" to="/">
          <a color="#ffffff">Home</a>
        </NavLink>
        <NavLink to="/about">
          <a color="#ffffff">About</a>
        </NavLink>
        <Link className="logo" to="/">
          <img src={LogoS} alt="logo" />
        </Link>
        <NavLink to="/work">
          <a color="#ffffff">Work</a>
        </NavLink>
        <NavLink to="/contact">
          <a color="#ffffff">Contact</a>
        </NavLink>
      </nav>
      <nav className="mobile-nav">
        <Link className="logo" to="/">
          <img src={LogoS} alt="logo" />
        </Link>
        <ul className="nav-menu">
          <li className="nav-item">
            <NavLink exact="true" to="/">
              <a color="#ffffff">Home</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/about">
              <a color="#ffffff">About</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/work">
              <a color="#ffffff">Work</a>
            </NavLink>
          </li>
          <li className="nav-item">
            <NavLink to="/contact">
              <a color="#ffffff">Contact</a>
            </NavLink>
          </li>
        </ul>
        <div className="hamburger">
          <span className="bar"></span>
          <span className="bar"></span>
          <span className="bar"></span>
        </div>
      </nav>
    </div>
  )
}

export default Sidebar
