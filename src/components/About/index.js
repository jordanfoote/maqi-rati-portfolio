import './index.scss'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'

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
      </div>
      <Logo />
    </div>
  )
}

export default About
