import React from 'react'
import { Link } from 'gatsby'
import axios from 'axios'

import './contact.scss'

export default class Contact extends React.Component {
  state = {
    name: '',
    email: '',
    message: '',
    sent: false,
  }

  handleChange = e => {
    this.setState({ [e.target.name]: e.target.value })
  }

  handleReset = () => {
    this.setState({ sent: false })
  }

  handleSubmit = e => {
    e.preventDefault()
    const { name, email, message } = this.state
    const payload = JSON.stringify({
      name,
      email,
      message,
    })
    axios.post('/.netlify/functions/mailer', payload)
    this.setState({
      name: '',
      email: '',
      message: '',
      sent: true,
    })
  }

  render() {
    const { name, email, message, sent } = this.state
    return !sent ? (
      <div className="contact">
        <form
          className="contact__form"
          name="contact"
          method="post"
          onSubmit={this.handleSubmit}
        >
          <label>Name</label>
          <input
            name="name"
            onChange={this.handleChange}
            required
            type="text"
            value={name}
          />
          <label>Email</label>
          <input
            name="email"
            onChange={this.handleChange}
            required
            type="email"
            value={email}
          />
          <label>Text</label>
          <textarea
            name="message"
            onChange={this.handleChange}
            required
            value={message}
          />
          <button className="submit" onClick={this.handleSubmit}>
            send message
          </button>
        </form>
      </div>
    ) : (
      <div>
        <h2>Success!</h2>
        <p>Thanks for getting in touch, I'll get back to you soon.</p>
        <p>
          Forgot something? Click{' '}
          <Link to="#contact" className="link" onClick={this.handleReset}>
            here
          </Link>{' '}
          to send another message.
        </p>
      </div>
    )
  }
}
