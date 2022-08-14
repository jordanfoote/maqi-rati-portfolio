import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'

const Sidebar = () => {
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
    </div>
  )
}

export default Sidebar
