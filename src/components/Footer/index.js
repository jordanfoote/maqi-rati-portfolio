import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Footer = () => (
  <div className="footer">
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

export default Footer
