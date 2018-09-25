import React from 'react'
import { Link } from 'gatsby'
import { Github, Twitter } from 'react-feather'
import './header.scss'

const Header = () => (
  <nav>
    <ul>
      <li>
        <Link to="#" className="navbar__item">
          msd
        </Link>
      </li>
      <li>
        <Link to="#about" className="navbar__item">
          about
        </Link>
      </li>
      <li>
        <Link to="#projects" className="navbar__item">
          projects
        </Link>
      </li>
      <li>
        <Link to="#about" className="navbar__item">
          tools
        </Link>
      </li>
      <li>
        <Link to="#about" className="navbar__item">
          contact
        </Link>
      </li>
      <li>
        <a
          href="https://github.com/msweeneydev"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__item"
        >
          <Github />
        </a>
      </li>
      <li>
        <a
          href="https://twitter.com/msweeneydev"
          target="_blank"
          rel="noopener noreferrer"
          className="navbar__item"
        >
          <Twitter />
        </a>
      </li>
    </ul>
  </nav>
)

export default Header
