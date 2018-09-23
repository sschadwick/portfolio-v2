import React from 'react'
import Helmet from 'react-helmet'

import Contact from '../components/Contact'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Projects from '../components/Projects'
import Section from '../components/Section'
import Tools from '../components/Tools'
import './index.scss'

const Layout = () => (
  <div>
    <Helmet
      title="Matthew Sweeney - Front End Developer"
      meta={[
        { name: 'description', content: 'Sample' },
        { name: 'keywords', content: 'sample, something' },
      ]}
    />
    <Header />
    <Landing />
    <Section header={'About'} content={'Lorem ipsum etc.'} />
    <Section header={'Projects'} content={'Lorem ipsum etc.'}>
      <Projects />
    </Section>
    <Section header={'Tools'} content={'Lorem ipsum etc.'}>
      <Tools />
    </Section>
    <Section header={'Contact'} content={'Lorem ipsum etc.'}>
      <Contact />
    </Section>
  </div>
)

export default Layout
