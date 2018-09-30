import React, { Component } from 'react'
import './projects.scss'

const projectContent = [
  {
    title: 'Vscene',
    text:
      'My current work project that allows video collaboration, made with React, Redux, TypeScript, Python & Go, styled using CSS modules.',
    img: './img/vscene.PNG',
    github: 'https://ajenta.net/vscene/',
    live: 'https://ajenta.net/vscene/',
  },
  {
    title: 'The Gallery',
    text:
      'A React application that can be used by anyone wanting to host a gallery, made using React Router and React Transitions, styled with Glamorous.',
    img: './img/gallery.PNG',
    github: 'https://github.com/msweeneydev/gallery',
    live: 'https://msweeneydev.com/gallery/',
  },
  {
    title: 'Movie Finder',
    text:
      'A React application that finds information about your favourite film, made using the OMDB API.',
    img: './img/movie.PNG',
    github: 'https://github.com/msweeneydev/movie',
    live: 'https://msweeneydev.com/movie/',
  },
  {
    title: 'Quoteth',
    text:
      'A React application that generates random quotes, made using Tadas Talakisis Quote API.',
    img: './img/quoteth.PNG',
    github: 'https://github.com/msweeneydev/quoteth',
    live: 'https://msweeneydev.com/quoteth/',
  },
  {
    title: 'WeatherMe',
    text:
      'A React application that displays local weather, made using the HTML GeoLocation API and the OpenWeather API.',
    img: './img/weather.PNG',
    github: 'https://github.com/msweeneydev/weather',
    live: 'https://msweeneydev.com/weatherme/',
  },
  {
    title: 'Countdown',
    text:
      'A JavaScript game based on the classic television show, made using the Wordnik API.',
    img: './img/countdown.PNG',
    github: 'https://github.com/msweeneydev/countdown-game',
    live: 'https://msweeneydev.com/countdown-game/',
  },
  {
    title: 'Pin & Bin',
    text:
      'An application that allows users to pin and bin notes, achieved by utilising local storage.',
    img: './img/pinandbin.PNG',
    github: 'https://github.com/msweeneydev/pin-and-bin',
    live: 'https://msweeneydev.github.io/pin-and-bin/',
  },
  {
    title: 'Glasgow Cat Care',
    text:
      'A simple site for my small business, made with Bootstrap 4 and a touch of JavaScript.',
    img: './img/glasgowcatcare.PNG',
    github: 'https://github.com/msweeneydev/glasgow-cat-care',
    live: 'http://glasgowcatcare.co.uk/',
  },
  {
    title: 'Reaction Tester',
    text:
      'An easy way to settle debates about reaction speed, the fastest click wins.',
    img: './img/reactiontester.jpg',
    github: 'https://github.com/msweeneydev/reaction-tester',
    live: 'https://msweeneydev.github.io/reaction-tester/',
  },
  {
    title: 'Grid Landing Page',
    text:
      'A tiled landing page design to showcase some of the benefits of using CSS grid.',
    img: './img/gridlandingpage.PNG',
    github: 'https://github.com/msweeneydev/grid-landing-page',
    live: 'https://msweeneydev.github.io/grid-landing-page/',
  },
]

class Projects extends Component {
  state = {
    projectNumber: 1,
    project: projectContent[0],
  }
  handleNext = () => {
    this.setState(prevState => ({
      projectNumber: prevState.project + 1,
      project: projectContent[prevState.projectNumber + 1],
    }))
  }
  handlePrevious = () => {
    this.setState(prevState => ({
      projectNumber: prevState.project - 1,
      project: projectContent[prevState.projectNumber - 1],
    }))
  }
  render() {
    const { title, text, img, github, live } = this.state.project
    return (
      <div>
        <img src={require(`./${img}`)} alt="" />
        <div>
          <h3>{title}</h3>
          <p>{text}</p>
        </div>
      </div>
    )
  }
}

export default Projects
