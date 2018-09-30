import React from 'react'
import './tools.scss'

const Tools = () => (
  <div className="tools">
    <div className="languages__list list">
      <h4>languages</h4>
      <ul>
        <li>HTML5</li>
        <li>CSS3 / SASS</li>
        <li>JavaScript (ES6)</li>
        <li>TypeScript</li>
        <li>Python / Java</li>
      </ul>
    </div>
    <div className="libraries__list list">
      <h4>libraries</h4>
      <ul>
        <li>React / Redux</li>
        <li>jQuery</li>
        <li>animate.css</li>
        <li>Bootstrap 4</li>
        <li>Semantic UI</li>
      </ul>
    </div>
    <div className="concepts__list list">
      <h4>concepts</h4>
      <ul>
        <li>Responsive Design</li>
        <li>RESTful API</li>
        <li>Version Control</li>
        <li>Git Flow</li>
        <li>Agile / Scrum</li>
      </ul>
    </div>
    <div className="tools__list list">
      <h4>tools</h4>
      <ul>
        <li>Git / GitHub</li>
        <li>NPM / Yarn</li>
        <li>Bash / ZSH</li>
        <li>Gatsby</li>
        <li>Netlify</li>
      </ul>
    </div>
  </div>
)

export default Tools
