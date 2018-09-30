import React from 'react'
import Helmet from 'react-helmet'

import About from '../components/About'
import Contact from '../components/Contact'
import Header from '../components/Header'
import Landing from '../components/Landing'
import Projects from '../components/Projects'
import Section from '../components/Section'
import Tools from '../components/Tools'

import AboutContent from '../content/About'
import ContactContent from '../content/Contact'
import ProjectsContent from '../content/Projects'
import ToolsContent from '../content/Tools'

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
    <Section header="About" id="about" content={<AboutContent />}>
      <About />
    </Section>
    <Section header="Projects" id="projects" content={<ProjectsContent />}>
      <Projects />
    </Section>
    <Section header="Tools" id="tools" content={<ToolsContent />}>
      <Tools />
    </Section>
    <Section header="Contact" id="contact" content={<ContactContent />}>
      <Contact />
    </Section>
  </div>
)

export default Layout
