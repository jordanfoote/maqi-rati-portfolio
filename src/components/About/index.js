import './index.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {
  faFacebook,
  faInstagram,
  faYoutube,
} from '@fortawesome/free-brands-svg-icons'

const About = () => {
  return (
    <div className="container about-page">
      <div className="text-zone">
        <h1>
          <AnimatedLetters
            strArray={['A', 'b', 'o', 'u', 't', ' ', 'm', 'e']}
            idx={15}
          />
        </h1>
        <p>
          Ever since he was a young lad,{' '}
          <strong className="highlight">MAQI RATI</strong> has had a creative
          soul. In a world of comic books, video games, and film, MAQI gained
          inspiration to be what he was born to be... an{' '}
          <strong className="highlight">Artist</strong>. From custom paintings
          and movie props to graphic design, MAQI does it all.
        </p>
        <p>
          MAQI's creative endeavors developed into more than just visual art.
          Discovering his passion for music has lead to many experiences in
          being a part of the underground punk rock and metal scenes in central
          Oklahoma. As a talented{' '}
          <strong className="highlight">Musician</strong>, MAQI delivers his
          unique sound through a countless variety of instruments.
        </p>
        <p>
          DIY is the way. MAQI is always on the hunt for new projects to be
          involved in. Whether you need an{' '}
          <strong className="highlight">Actor</strong>, or a creative mind to
          gear you towards success, he is the one you need. MAQI RATI is... the{' '}
          <strong className="highlight">Creator</strong>.
        </p>
        <Link to="/contact" className="flat-button">
          CONTACT ME
        </Link>
        <br></br>
        <br></br>
        <br></br>
        <br></br>
        <div className="footer1">
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

export default About
