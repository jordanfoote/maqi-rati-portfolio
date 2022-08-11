import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'

const Sidebar = () => (
  <div className="nav-bar">
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <a color="#ffffff">Home</a>
      </NavLink>
      <NavLink activeclassname="active" className="about-link" to="/about">
        <a color="#ffffff">About</a>
      </NavLink>
      <Link className="logo" to="/">
        <img src={LogoS} alt="logo" />
      </Link>
      <NavLink activeclassname="active" className="work-link" to="/work">
        <a color="#ffffff">Work</a>
      </NavLink>
      <NavLink activeclassname="active" className="contact-link" to="/contact">
        <a color="#ffffff">Contact</a>
      </NavLink>
    </nav>
  </div>
)

export default Sidebar
