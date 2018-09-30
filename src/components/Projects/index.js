import React, { Component } from 'react'
import { ChevronRight, ChevronLeft, Github, Monitor } from 'react-feather'
import './projects.scss'

const projectContent = [
  {
    title: 'Vscene',
    text:
      'My current work project which is a video conferencing platform. Made with React, Redux, TypeScript, Python & Go, styled using CSS modules.',
    img: './img/vscene.jpg',
    github: 'https://ajenta.net/vscene/',
    live: 'https://ajenta.net/vscene/',
  },
  {
    title: 'The Gallery',
    text:
      'A React application that can be used by anyone wanting to host a gallery, made using React Router and React Transitions, styled with Glamorous.',
    img: './img/gallery.jpg',
    github: 'https://github.com/msweeneydev/gallery',
    live: 'https://msweeneydev.com/gallery/',
  },
  {
    title: 'Movie Finder',
    text:
      'A React application that finds information about your favourite film, made using the OMDB API.',
    img: './img/movie.jpg',
    github: 'https://github.com/msweeneydev/movie',
    live: 'https://msweeneydev.com/movie/',
  },
  {
    title: 'Quoteth',
    text:
      'A React application that generates random quotes, made using Tadas Talakisis Quote API.',
    img: './img/quoteth.jpg',
    github: 'https://github.com/msweeneydev/quoteth',
    live: 'https://msweeneydev.com/quoteth/',
  },
  {
    title: 'WeatherMe',
    text:
      'A React application that displays local weather, made using the HTML GeoLocation API and the OpenWeather API.',
    img: './img/weather.jpg',
    github: 'https://github.com/msweeneydev/weather',
    live: 'https://msweeneydev.com/weatherme/',
  },
  {
    title: 'Countdown',
    text:
      'A JavaScript game based on the classic television show, made using the Wordnik API.',
    img: './img/countdown.jpg',
    github: 'https://github.com/msweeneydev/countdown-game',
    live: 'https://msweeneydev.com/countdown-game/',
  },
  {
    title: 'Pin & Bin',
    text:
      'An application that allows users to pin and bin notes, achieved by utilising local storage.',
    img: './img/pinandbin.jpg',
    github: 'https://github.com/msweeneydev/pin-and-bin',
    live: 'https://msweeneydev.github.io/pin-and-bin/',
  },
  {
    title: 'Glasgow Cat Care',
    text:
      'A simple site for my small business, made with Bootstrap 4 and a touch of JavaScript.',
    img: './img/glasgowcatcare.jpg',
    github: 'https://github.com/msweeneydev/glasgow-cat-care',
    live: 'http://glasgowcatcare.co.uk/',
  },
  {
    title: 'Grid Landing Page',
    text:
      'A tiled landing page design to showcase some of the benefits of using CSS grid.',
    img: './img/gridlandingpage.jpg',
    github: 'https://github.com/msweeneydev/grid-landing-page',
    live: 'https://msweeneydev.github.io/grid-landing-page/',
  },
]

class Projects extends Component {
  state = {
    projectNumber: 0,
    project: projectContent[0],
  }
  handleNext = () => {
    if (this.state.projectNumber < 8)
      this.setState(prevState => ({
        projectNumber: prevState.projectNumber + 1,
        project: projectContent[this.state.projectNumber + 1],
      }))
  }
  handlePrevious = () => {
    if (this.state.projectNumber > 1)
      this.setState(prevState => ({
        projectNumber: prevState.projectNumber - 1,
        project: projectContent[this.state.projectNumber - 1],
      }))
  }
  render() {
    const { title, text, img, github, live } = this.state.project
    return (
      <div className="projects">
        <img className="project__img" src={require(`${img}`)} alt={title} />
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
        <div className="buttons">
          <ChevronLeft className="navbar__item" onClick={this.handlePrevious} />
          <a
            href={github}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__item"
          >
            <Github />
          </a>
          <span>
            {this.state.projectNumber + 1}/{projectContent.length}
          </span>
          <a
            href={live}
            target="_blank"
            rel="noopener noreferrer"
            className="navbar__item"
          >
            <Monitor />
          </a>
          <ChevronRight className="navbar__item" onClick={this.handleNext} />
        </div>
      </div>
    )
  }
}

export default Projects
