import { useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const Home = () => {
  const [letterClass] = useState('text-animate')
  const hiArray = ['H', 'i', ',', ' ', "I'", 'm', ' ']
  const nameArray = [' ', 'M', 'A', 'Q', 'I', ' ', ' ', 'R', 'A', 'T', 'I']
  const jobArray = ['T', 'h', 'e', ' ', 'C', 'r', 'e', 'a', 't', 'o', 'r', '.']

  return (
    <div className="container home-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={hiArray}
            idx={12}
          />
          <div className="name-array">
            <AnimatedLetters
              letterClass={letterClass}
              strArray={nameArray}
              idx={15}
            />
          </div>
          <AnimatedLetters
            letterClass={letterClass}
            strArray={jobArray}
            idx={22}
          />
        </h1>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
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
      </div>
      <Logo />
    </div>
  )
}

export default Home
