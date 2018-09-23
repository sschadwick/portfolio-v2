import React from 'react'
import './section.scss'

const Section = ({ children, content, header }) => (
  <section className="section">
    <div className="section__left">
      <h2>{header}</h2>
      {content}
    </div>
    <div className="section__right">{children}</div>
  </section>
)

export default Section
