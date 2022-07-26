import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import AnimatedLetters from '../AnimatedLetters'
import Logo from './Logo'
import './index.scss'

const Home = () => {
  const [letterClass, setLetterClass] = useState('text-animate')
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
      </div>
      <Logo />
    </div>
  )
}

export default Home
