import { Link, NavLink } from 'react-router-dom'
import './index.scss'
import LogoS from '../../assets/images/logo-s.png'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faHome, faUser, faEnvelope } from '@fortawesome/free-solid-svg-icons'
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Sidebar = () => (
  <div className="nav-bar">
    <nav>
      <NavLink exact="true" activeclassname="active" to="/">
        <a color="#ffffff">Home</a>
      </NavLink>
      <NavLink activeclassname="active" className="about-link" to="/about">
        <a color="#ffffff">About</a>
      </NavLink>
      <NavLink activeclassname="active" className="contact-link" to="/artwork">
        <a color="#ffffff">Artwork</a>
      </NavLink>
    </nav>
    <Link className="logo" to="/">
      <img src={LogoS} alt="logo" />
    </Link>
    <ul>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.instagram.com/maqirati/?hl=en"
        >
          <FontAwesomeIcon icon={faInstagram} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.facebook.com/profile.php?id=100009616672534"
        >
          <FontAwesomeIcon icon={faFacebook} color="#4d4d4e" />
        </a>
      </li>
      <li>
        <a
          target="_blank"
          rel="noreferrer"
          href="https://www.youtube.com/channel/UCxMwkjNVmhoSv6Nz6f-f3ig"
        >
          <FontAwesomeIcon icon={faYoutube} color="#4d4d4e" />
        </a>
      </li>
    </ul>
  </div>
)

export default Sidebar
