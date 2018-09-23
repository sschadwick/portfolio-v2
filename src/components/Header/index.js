import React from 'react'
import { Github, Twitter } from 'react-feather'
import './header.scss'

const Header = () => (
  <nav>
    <ul>
      <li>
        <a className="navbar__item">msd</a>
      </li>
      <li>
        <a className="navbar__item">about</a>
      </li>
      <li>
        <a className="navbar__item">projects</a>
      </li>
      <li>
        <a className="navbar__item">tools</a>
      </li>
      <li>
        <a className="navbar__item">contact</a>
      </li>
      <li>
        <a className="navbar__item">
          <Github />
        </a>
      </li>
      <li>
        <a className="navbar__item">
          <Twitter />
        </a>
      </li>
    </ul>
  </nav>
)

export default Header
